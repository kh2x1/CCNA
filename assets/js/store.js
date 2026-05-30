/* ==========================================================================
   store.js — LocalStorage-backed state: progress, quiz scores, notes,
   favorites, settings. Single source of truth, namespaced under "ns_".
   ========================================================================== */
(function () {
  const KEYS = {
    progress: 'ns_progress',   // { lessonId: true }
    scores:   'ns_scores',     // { quizId: {best, last, attempts} }
    notes:    'ns_notes',      // { lessonId: "text" }
    favs:     'ns_favs',       // { lessonId: true }
    theme:    'ns_theme',      // "dark" | "light"
    profile:  'ns_profile'     // { name }
  };

  function read(k, fallback) {
    try { return JSON.parse(localStorage.getItem(k)) ?? fallback; }
    catch { return fallback; }
  }
  function write(k, v) { localStorage.setItem(k, JSON.stringify(v)); fire(); }

  const subs = [];
  function fire() { subs.forEach(fn => { try { fn(); } catch (e) {} }); }

  const Store = {
    onChange(fn) { subs.push(fn); },

    // ---- progress ----
    isDone(id) { return !!read(KEYS.progress, {})[id]; },
    setDone(id, val = true) {
      const p = read(KEYS.progress, {});
      if (val) p[id] = true; else delete p[id];
      write(KEYS.progress, p);
    },
    toggleDone(id) { this.setDone(id, !this.isDone(id)); return this.isDone(id); },
    doneCount() { return Object.keys(read(KEYS.progress, {})).length; },
    allProgress() { return read(KEYS.progress, {}); },

    // ---- quiz scores ----
    saveScore(quizId, pct) {
      const s = read(KEYS.scores, {});
      const cur = s[quizId] || { best: 0, last: 0, attempts: 0 };
      cur.last = pct; cur.best = Math.max(cur.best, pct); cur.attempts++;
      s[quizId] = cur; write(KEYS.scores, s);
    },
    getScore(quizId) { return read(KEYS.scores, {})[quizId] || null; },
    allScores() { return read(KEYS.scores, {}); },
    avgScore() {
      const s = read(KEYS.scores, {});
      const vals = Object.values(s).map(x => x.best);
      return vals.length ? Math.round(vals.reduce((a, b) => a + b, 0) / vals.length) : 0;
    },
    bestScore() {
      const vals = Object.values(read(KEYS.scores, {})).map(x => x.best);
      return vals.length ? Math.max(...vals) : 0;
    },

    // ---- notes ----
    getNote(id) { return read(KEYS.notes, {})[id] || ''; },
    setNote(id, text) {
      const n = read(KEYS.notes, {});
      if (text && text.trim()) n[id] = text; else delete n[id];
      write(KEYS.notes, n);
    },
    allNotes() { return read(KEYS.notes, {}); },

    // ---- favorites ----
    isFav(id) { return !!read(KEYS.favs, {})[id]; },
    toggleFav(id) {
      const f = read(KEYS.favs, {});
      if (f[id]) delete f[id]; else f[id] = true;
      write(KEYS.favs, f); return !!f[id];
    },
    favs() { return Object.keys(read(KEYS.favs, {})); },

    // ---- theme ----
    getTheme() { return localStorage.getItem(KEYS.theme); },
    setTheme(t) { localStorage.setItem(KEYS.theme, t); },

    // ---- profile ----
    getName() { return (read(KEYS.profile, {}) || {}).name || ''; },
    setName(name) { write(KEYS.profile, { name }); },

    // ---- reset ----
    resetAll() { Object.values(KEYS).forEach(k => { if (k !== KEYS.theme) localStorage.removeItem(k); }); fire(); }
  };

  window.Store = Store;
})();
