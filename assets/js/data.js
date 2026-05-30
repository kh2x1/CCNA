/* ==========================================================================
   data.js — Content registry + query helpers.
   Content lives in assets/data/*.js files which register onto window.NS_DATA.
   Loading data as JS (not fetched JSON) means the app runs straight from the
   file system (file://) with zero build step and full offline/PWA support.
   The underlying objects are pure JSON-shaped data.
   ========================================================================== */
(function () {
  const D = window.NS_DATA = window.NS_DATA || {};
  // Ensure shape so the app degrades gracefully if a file is missing.
  D.ccna = D.ccna || { id: 'ccna', modules: [] };
  D.networkplus = D.networkplus || { id: 'networkplus', modules: [] };
  D.quizBank = D.quizBank || [];
  D.labs = D.labs || [];
  D.cheatsheets = D.cheatsheets || [];
  D.ports = D.ports || [];
  D.commands = D.commands || [];
  D.interview = D.interview || [];

  function tracks() { return [D.ccna, D.networkplus]; }

  const Data = {
    raw: D,
    track(id) { return id === 'networkplus' ? D.networkplus : D.ccna; },
    tracks,

    modules(trackId) { return this.track(trackId).modules || []; },

    // Flat list of every lesson with track/module context attached.
    allLessons() {
      const out = [];
      tracks().forEach(tr => (tr.modules || []).forEach(mod => (mod.lessons || []).forEach((ls, i) => {
        out.push({ ...ls, _track: tr.id, _module: mod.id, _moduleTitle: mod.title });
      })));
      return out;
    },

    lessonsOf(trackId) {
      const out = [];
      (this.track(trackId).modules || []).forEach(mod =>
        (mod.lessons || []).forEach(ls => out.push({ ...ls, _track: trackId, _module: mod.id, _moduleTitle: mod.title })));
      return out;
    },

    getLesson(id) { return this.allLessons().find(l => l.id === id) || null; },

    // Ordered neighbours within a track for prev/next navigation.
    neighbours(trackId, lessonId) {
      const list = this.lessonsOf(trackId);
      const i = list.findIndex(l => l.id === lessonId);
      return { prev: i > 0 ? list[i - 1] : null, next: i >= 0 && i < list.length - 1 ? list[i + 1] : null, index: i, total: list.length };
    },

    counts() {
      const lessons = this.allLessons();
      let quiz = lessons.reduce((n, l) => n + ((l.quiz || []).length), 0);
      quiz += (D.quizBank || []).reduce((n, q) => n + ((q.questions || []).length), 0);
      let flash = lessons.reduce((n, l) => n + ((l.flashcards || []).length), 0);
      const modules = tracks().reduce((n, t) => n + (t.modules || []).length, 0);
      return { lessons: lessons.length, quiz, labs: (D.labs || []).length, modules, flashcards: flash, tools: 7 };
    },

    // Build the searchable index (lessons, commands, ports, cheatsheets).
    searchIndex() {
      const pick = window.i18n.pick.bind(window.i18n);
      const idx = [];
      this.allLessons().forEach(l => idx.push({
        type: 'lesson', id: l.id, track: l._track,
        title: pick(l.title), sub: pick(l._moduleTitle),
        text: (pick(l.summary) + ' ' + pick(l.title)).toLowerCase(),
        href: `#/learn/${l._track}/${l.id}`
      }));
      (D.commands || []).forEach(c => idx.push({
        type: 'command', id: c.cmd, title: c.cmd, sub: pick(c.desc),
        text: (c.cmd + ' ' + pick(c.desc)).toLowerCase(), href: '#/commands'
      }));
      (D.ports || []).forEach(p => idx.push({
        type: 'port', id: String(p.port), title: `${p.port}/${p.proto} — ${p.service}`,
        sub: pick(p.desc), text: `${p.port} ${p.service} ${p.proto} ${pick(p.desc)}`.toLowerCase(), href: '#/ports'
      }));
      return idx;
    }
  };

  window.Data = Data;
})();
