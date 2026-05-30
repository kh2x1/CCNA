/* ==========================================================================
   pages.learn.js — Track overview, lesson viewer (with sidebar, tabs, notes,
   favorites, print), the interactive quiz engine and flashcard deck.
   ========================================================================== */
(function () {
  const P = window.Pages = window.Pages || {};
  const pick = o => window.i18n.pick(o);
  const esc = s => window.UI.esc(s);

  /* ============================ TRACK OVERVIEW ============================ */
  P.track = function (mount, { track }) {
    const tr = window.Data.track(track);
    if (!tr.modules.length) {
      const title = track === 'networkplus' ? 'CompTIA Network+ N10-009' : 'Cisco CCNA 200-301';
      mount.innerHTML = `<section class="page-hero"><div class="container">
          <h1>${title}</h1></div></section>
        <div class="container"><div class="empty-state">${window.icon('book', 64)}
          <h2>${window.i18n.lang === 'ar' ? 'المحتوى قيد الإعداد' : 'Content in progress'}</h2>
          <p>${window.i18n.lang === 'ar' ? 'دروس هذا المسار قيد الكتابة. في هذه الأثناء، استكشف مسار CCNA الكامل والأدوات والمختبرات.' : 'Lessons for this track are being authored. Meanwhile, explore the full CCNA track, tools and labs.'}</p>
          <a class="btn btn-primary" style="margin-top:16px" href="#/learn/ccna">${window.icon('route', 18)} CCNA</a>
        </div></div>`;
      return;
    }
    const lessons = window.Data.lessonsOf(track);
    const done = lessons.filter(l => window.Store.isDone(l.id)).length;
    const pct = Math.round((done / Math.max(lessons.length, 1)) * 100);
    const title = track === 'ccna' ? 'Cisco CCNA 200-301' : 'CompTIA Network+ N10-009';

    mount.innerHTML = `
    <section class="page-hero"><div class="container">
      <span class="badge badge-blue">${track === 'ccna' ? 'Cisco' : 'CompTIA'}</span>
      <h1 style="margin-top:10px">${title}</h1>
      <p>${pick(track === 'ccna'
        ? { en: 'A complete, module-by-module path through routing, switching, security and automation.', ar: 'مسار متكامل وحدة تلو الأخرى عبر التوجيه والتبديل والأمن والأتمتة.' }
        : { en: 'Vendor-neutral fundamentals: concepts, infrastructure, operations, security and troubleshooting.', ar: 'أساسيات محايدة: المفاهيم والبنية التحتية والعمليات والأمن واستكشاف الأعطال.' })}</p>
      <div style="max-width:420px;margin-top:18px">
        <div class="quiz-progress"><div class="bar" style="width:${pct}%"></div></div>
        <div style="display:flex;justify-content:space-between;font-size:var(--fs-sm);color:var(--text-muted);margin-top:6px">
          <span>${done}/${lessons.length} ${window.t('common.lessons')}</span><span>${pct}%</span>
        </div>
      </div>
    </div></section>
    <div class="container">
      ${tr.modules.map((mod, mi) => moduleCard(track, mod, mi)).join('')}
    </div>`;
  };

  function moduleCard(track, mod, mi) {
    const lessons = mod.lessons || [];
    const done = lessons.filter(l => window.Store.isDone(l.id)).length;
    return `<div class="card reveal" style="margin-bottom:20px">
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:14px">
        <div class="card-icon" style="margin:0">${window.icon(mod.icon || 'book', 24)}</div>
        <div style="flex:1">
          <div style="font-size:var(--fs-xs);color:var(--text-muted);font-weight:700">${window.t('stat.modules')} ${mi + 1}</div>
          <h3 style="margin:0">${pick(mod.title)}</h3>
        </div>
        <span class="badge ${done === lessons.length ? 'badge-green' : 'badge-blue'}">${done}/${lessons.length}</span>
      </div>
      <div class="grid grid-2">
        ${lessons.map((l, li) => `<a class="lesson-link ${window.Store.isDone(l.id) ? 'done' : ''}" href="#/learn/${track}/${l.id}" style="border:1px solid var(--border);padding:12px 14px;border-radius:10px">
          <span class="check">${window.icon('checkCircle', 16)}</span>
          <span style="flex:1">${li + 1}. ${pick(l.title)}</span>
          <span style="color:var(--text-muted)">${window.icon('clock', 14)} ${l.duration || 8}m</span>
        </a>`).join('')}
      </div>
    </div>`;
  }

  /* ============================== LESSON VIEW ============================== */
  P.lesson = function (mount, { track, lesson }) {
    const data = window.Data.track(track);
    if (!data.modules.length) { mount.innerHTML = loading(); return; }
    const L = window.Data.getLesson(lesson);
    if (!L) { window.Pages.notFound(mount); return; }
    const nb = window.Data.neighbours(track, lesson);

    mount.innerHTML = `
    <div class="container" style="padding-top:20px">
      <button class="btn btn-ghost btn-sm sidebar-toggle no-print" id="sbToggle" style="margin-bottom:12px">${window.icon('list', 18)} ${pick(L._moduleTitle)}</button>
      <div class="with-sidebar">
        <aside class="sidebar no-print" id="lessonSidebar">${sidebar(track, lesson)}</aside>
        <main class="content-area">${lessonBody(track, L, nb)}</main>
      </div>
    </div>
    <div class="scrim no-print" id="sbScrim"></div>`;

    wireLesson(mount, track, L, nb);
  };

  function sidebar(track, activeId) {
    const tr = window.Data.track(track);
    const otherTrack = track === 'ccna' ? 'networkplus' : 'ccna';
    return `
      <div style="display:flex;gap:6px;margin-bottom:8px">
        <a class="btn btn-sm ${'btn-primary'}" href="#/learn/${track}" style="flex:1">${track === 'ccna' ? 'CCNA' : 'Network+'}</a>
        <a class="btn btn-sm btn-ghost" href="#/learn/${otherTrack}" style="flex:1">${otherTrack === 'ccna' ? 'CCNA' : 'Network+'}</a>
      </div>
      ${tr.modules.map(mod => {
        const hasActive = (mod.lessons || []).some(l => l.id === activeId);
        return `<details class="module-group" ${hasActive ? 'open' : ''}>
          <summary>${window.icon('chevronRight', 16)} ${pick(mod.title)}</summary>
          ${(mod.lessons || []).map(l => `<a class="lesson-link ${l.id === activeId ? 'active' : ''} ${window.Store.isDone(l.id) ? 'done' : ''}" href="#/learn/${track}/${l.id}">
            <span class="check">${window.icon('check', 14)}</span><span>${pick(l.title)}</span></a>`).join('')}
        </details>`;
      }).join('')}`;
  }

  function lessonBody(track, L, nb) {
    const done = window.Store.isDone(L.id);
    const fav = window.Store.isFav(L.id);
    const hasQuiz = (L.quiz || []).length;
    const hasCards = (L.flashcards || []).length;
    const hasLab = !!L.lab;
    const hasCmds = (L.commands || []).length;
    const hasEx = (L.examples || []).length;
    return `
    <article class="lesson" id="lessonArticle">
      <header class="lesson-header">
        <div class="crumbs">${track === 'ccna' ? 'CCNA' : 'Network+'} · ${pick(L._moduleTitle)} · ${nb.index + 1}/${nb.total}</div>
        <h1>${pick(L.title)}</h1>
        <p style="font-size:var(--fs-lg)">${pick(L.summary)}</p>
        <div class="lesson-meta">
          ${window.UI.diffBadge(L.difficulty)}
          <span>${window.icon('clock', 15)} ${L.duration || 8} ${window.t('lesson.minutes')}</span>
          ${hasQuiz ? `<span>${window.icon('help', 15)} ${hasQuiz} ${window.t('lesson.quiz')}</span>` : ''}
          ${hasCards ? `<span>${window.icon('layers', 15)} ${hasCards} ${window.t('lesson.flashcards')}</span>` : ''}
        </div>
        <div class="lesson-actions no-print">
          <button class="btn btn-sm ${done ? 'btn-primary' : 'btn-outline'}" id="doneBtn">${window.icon('checkCircle', 16)} <span>${window.t(done ? 'btn.completed' : 'btn.markDone')}</span></button>
          <button class="btn btn-sm btn-ghost" id="favBtn">${window.icon(fav ? 'star' : 'bookmark', 16)} ${window.t('btn.favorite')}</button>
          <button class="btn btn-sm btn-ghost" id="noteBtn">${window.icon('edit', 16)} ${window.t('btn.note')}</button>
          <button class="btn btn-sm btn-ghost" id="printBtn">${window.icon('printer', 16)} ${window.t('btn.print')}</button>
        </div>
      </header>

      <div class="note-editor no-print" id="noteEditor" hidden>
        <textarea class="input" id="noteArea" rows="4" placeholder="${window.t('lesson.notesPlaceholder')}"></textarea>
      </div>

      <nav class="tabs no-print" id="lessonTabs">
        <button class="tab active" data-tab="overview">${window.t('lesson.overview')}</button>
        ${hasEx ? `<button class="tab" data-tab="examples">${window.t('lesson.examples')}</button>` : ''}
        ${hasCmds ? `<button class="tab" data-tab="commands">${window.t('lesson.commands')}</button>` : ''}
        ${hasLab ? `<button class="tab" data-tab="lab">${window.t('lesson.lab')}</button>` : ''}
        ${hasQuiz ? `<button class="tab" data-tab="quiz">${window.t('lesson.quiz')}</button>` : ''}
        ${hasCards ? `<button class="tab" data-tab="cards">${window.t('lesson.flashcards')}</button>` : ''}
      </nav>

      <section class="tab-panel active" data-panel="overview">
        <div class="lesson-body">${pick(L.content)}</div>
        ${keypoints(L)}
        ${L.summary ? `<div class="callout tip"><div class="callout-title">${window.icon('bulb', 18)} ${window.t('lesson.summary')}</div><p>${pick(L.summary)}</p></div>` : ''}
      </section>
      ${hasEx ? `<section class="tab-panel" data-panel="examples">${examples(L)}</section>` : ''}
      ${hasCmds ? `<section class="tab-panel" data-panel="commands">${commands(L)}</section>` : ''}
      ${hasLab ? `<section class="tab-panel" data-panel="lab">${labBlock(L.lab)}</section>` : ''}
      ${hasQuiz ? `<section class="tab-panel" data-panel="quiz" id="quizPanel"></section>` : ''}
      ${hasCards ? `<section class="tab-panel" data-panel="cards" id="cardsPanel"></section>` : ''}

      <nav class="lesson-nav no-print">
        ${nb.prev ? `<a href="#/learn/${track}/${nb.prev.id}"><div class="dir">${window.icon('arrowLeft', 14)} ${window.t('btn.prev')}</div><div class="ttl">${pick(nb.prev.title)}</div></a>` : '<span></span>'}
        ${nb.next ? `<a class="next" href="#/learn/${track}/${nb.next.id}"><div class="dir">${window.t('btn.next')} ${window.icon('arrowRight', 14)}</div><div class="ttl">${pick(nb.next.title)}</div></a>` : '<span></span>'}
      </nav>
    </article>`;
  }

  function keypoints(L) {
    const kp = L.keyPoints && (L.keyPoints[window.i18n.lang] || L.keyPoints.en);
    if (!kp || !kp.length) return '';
    return `<div class="keypoints"><h3>${window.icon('target', 20)} ${window.t('lesson.keypoints')}</h3>
      <ul>${kp.map(k => `<li>${esc(k)}</li>`).join('')}</ul></div>`;
  }

  function examples(L) {
    return (L.examples || []).map(ex => `
      <div class="card" style="margin-bottom:16px">
        <h3>${pick(ex.title)}</h3>
        ${ex.body ? `<div class="lesson-body">${pick(ex.body)}</div>` : ''}
        ${ex.code ? `<div class="code-block"><pre>${esc(ex.code)}</pre></div>` : ''}
      </div>`).join('');
  }

  function commands(L) {
    return `<div class="table-wrap"><table class="data-table">
      <thead><tr><th>${window.t('lesson.commands')}</th><th>${window.i18n.lang === 'ar' ? 'الوصف' : 'Description'}</th></tr></thead>
      <tbody>${(L.commands || []).map(c => `<tr><td><code>${esc(c.cmd)}</code></td><td>${pick(c.desc)}</td></tr>`).join('')}</tbody>
    </table></div>`;
  }

  function labBlock(lab) {
    return `<div class="card">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
        <div class="card-icon" style="margin:0">${window.icon('flask', 22)}</div>
        <h3 style="margin:0">${pick(lab.title)}</h3>
      </div>
      <p>${pick(lab.objective)}</p>
      ${lab.topology ? `<div class="code-block"><pre>${esc(lab.topology)}</pre></div>` : ''}
      <h4 style="margin-top:16px">${window.i18n.lang === 'ar' ? 'الخطوات' : 'Steps'}</h4>
      <ol class="lesson-body">${(lab.steps || []).map(s => `<li>${pick(s)}</li>`).join('')}</ol>
      ${lab.verify ? `<div class="callout tip"><div class="callout-title">${window.icon('checkCircle', 18)} ${window.i18n.lang === 'ar' ? 'التحقق' : 'Verification'}</div><p>${pick(lab.verify)}</p></div>` : ''}
    </div>`;
  }

  /* ----------------------------- interactions ----------------------------- */
  function wireLesson(mount, track, L, nb) {
    // Tabs
    const tabs = mount.querySelectorAll('.tab');
    tabs.forEach(tab => tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const name = tab.dataset.tab;
      mount.querySelectorAll('.tab-panel').forEach(p => p.classList.toggle('active', p.dataset.panel === name));
      if (name === 'quiz') renderQuiz(mount.querySelector('#quizPanel'), L.quiz, 'lesson-' + L.id);
      if (name === 'cards') renderFlashcards(mount.querySelector('#cardsPanel'), L.flashcards);
    }));

    // Mark done
    const doneBtn = mount.querySelector('#doneBtn');
    doneBtn.addEventListener('click', () => {
      const now = window.Store.toggleDone(L.id);
      doneBtn.classList.toggle('btn-primary', now);
      doneBtn.classList.toggle('btn-outline', !now);
      doneBtn.querySelector('span').textContent = window.t(now ? 'btn.completed' : 'btn.markDone');
      window.UI.toast(window.t(now ? 'btn.completed' : 'btn.markDone'), now ? 'success' : '');
      mount.querySelector('#lessonSidebar').innerHTML = sidebar(track, L.id);
      reWireSidebar(mount);
    });

    // Favorite
    const favBtn = mount.querySelector('#favBtn');
    favBtn.addEventListener('click', () => {
      const now = window.Store.toggleFav(L.id);
      favBtn.querySelector('svg').outerHTML = window.icon(now ? 'star' : 'bookmark', 16);
      window.UI.toast(now ? '★ ' + window.t('btn.favorite') : window.t('btn.favorite'), now ? 'success' : '');
    });

    // Notes (auto-save)
    const noteBtn = mount.querySelector('#noteBtn');
    const editor = mount.querySelector('#noteEditor');
    const area = mount.querySelector('#noteArea');
    area.value = window.Store.getNote(L.id);
    noteBtn.addEventListener('click', () => { editor.hidden = !editor.hidden; if (!editor.hidden) area.focus(); });
    let nt; area.addEventListener('input', () => { clearTimeout(nt); nt = setTimeout(() => window.Store.setNote(L.id, area.value), 400); });

    // Print
    mount.querySelector('#printBtn').addEventListener('click', () => window.print());

    // Sidebar mobile toggle
    const sb = mount.querySelector('#lessonSidebar');
    const scrim = mount.querySelector('#sbScrim');
    mount.querySelector('#sbToggle').addEventListener('click', () => { sb.classList.add('open'); scrim.classList.add('show'); });
    scrim.addEventListener('click', () => { sb.classList.remove('open'); scrim.classList.remove('show'); });
    reWireSidebar(mount);

    window.UI.bindCodeCopy(mount);
  }

  function reWireSidebar(mount) {
    mount.querySelectorAll('#lessonSidebar .lesson-link').forEach(a => a.addEventListener('click', () => {
      mount.querySelector('#lessonSidebar')?.classList.remove('open');
      mount.querySelector('#sbScrim')?.classList.remove('show');
    }));
  }

  /* ============================== QUIZ ENGINE ============================== */
  // Reusable across lesson quizzes and the Quiz Center. questions: [{q,options,answer,explanation}]
  function renderQuiz(host, questions, quizId, opts = {}) {
    if (!host || !questions || !questions.length) return;
    if (host.dataset.built === quizId) return; // avoid rebuild on tab re-click
    host.dataset.built = quizId;
    let i = 0, score = 0, answered = false;
    const total = questions.length;

    function draw() {
      const Q = questions[i];
      answered = false;
      host.innerHTML = `
      <div class="quiz">
        <div class="quiz-progress"><div class="bar" style="width:${(i / total) * 100}%"></div></div>
        <div style="font-size:var(--fs-sm);color:var(--text-muted);margin-bottom:8px">${window.t('quiz.question')} ${i + 1} ${window.t('quiz.of')} ${total}</div>
        <div class="quiz-q">${pick(Q.q)}</div>
        <div class="quiz-options">
          ${(Q.options || []).map((o, idx) => `<button class="quiz-option" data-i="${idx}">
            <span class="key">${String.fromCharCode(65 + idx)}</span><span>${pick(o)}</span></button>`).join('')}
        </div>
        <div class="quiz-explain" id="qExplain" hidden></div>
        <div class="quiz-footer">
          <div></div>
          <button class="btn btn-primary" id="qNext" hidden>${i + 1 < total ? window.t('btn.next') : window.t('quiz.yourScore')} ${window.icon('arrowRight', 16)}</button>
        </div>
      </div>`;
      host.querySelectorAll('.quiz-option').forEach(btn => btn.addEventListener('click', () => choose(+btn.dataset.i, Q)));
      host.querySelector('#qNext').addEventListener('click', () => { i++; i < total ? draw() : finish(); });
    }

    function choose(idx, Q) {
      if (answered) return; answered = true;
      const correct = Q.answer;
      if (idx === correct) score++;
      host.querySelectorAll('.quiz-option').forEach((btn, bi) => {
        btn.disabled = true;
        if (bi === correct) btn.classList.add('correct');
        else if (bi === idx) btn.classList.add('wrong');
      });
      const ex = host.querySelector('#qExplain');
      ex.hidden = false;
      ex.innerHTML = `<strong>${idx === correct ? '✓ ' + window.t('quiz.correct') : '✗ ' + window.t('quiz.wrong')}.</strong> ${pick(Q.explanation || {})}`;
      host.querySelector('#qNext').hidden = false;
    }

    function finish() {
      const pct = Math.round((score / total) * 100);
      window.Store.saveScore(quizId, pct);
      const passed = pct >= 70;
      host.innerHTML = `
      <div class="quiz"><div class="quiz-result">
        <div class="quiz-score-ring" style="color:${passed ? 'var(--success-500)' : 'var(--warning-500)'}">${pct}%</div>
        <h3>${window.t('quiz.yourScore')}: ${score}/${total}</h3>
        <p>${window.t(passed ? 'quiz.passed' : 'quiz.failed')}</p>
        <button class="btn btn-primary" id="qRetry">${window.icon('rotate', 16)} ${window.t('btn.retry')}</button>
      </div></div>`;
      host.querySelector('#qRetry').addEventListener('click', () => { i = 0; score = 0; draw(); });
      if (passed && opts.onPass) opts.onPass(pct);
    }
    draw();
  }
  window.renderQuiz = renderQuiz;

  /* ============================ FLASHCARD DECK ============================ */
  function renderFlashcards(host, cards) {
    if (!host || !cards || !cards.length) return;
    if (host.dataset.built) return; host.dataset.built = '1';
    let idx = 0;
    function draw() {
      const c = cards[idx];
      host.innerHTML = `
      <div class="flashcard-deck">
        <div class="flashcard" id="fcard" tabindex="0" role="button" aria-label="flip card">
          <div class="face front"><span class="hint">${window.i18n.lang === 'ar' ? 'سؤال' : 'Question'}</span><div class="txt">${pick(c.front)}</div></div>
          <div class="face back"><span class="hint">${window.i18n.lang === 'ar' ? 'إجابة' : 'Answer'}</span><div class="txt">${pick(c.back)}</div></div>
        </div>
        <div class="flashcard-controls">
          <button class="icon-btn" id="fprev">${window.icon('arrowLeft', 18)}</button>
          <span style="font-weight:700;min-width:60px;text-align:center">${idx + 1} / ${cards.length}</span>
          <button class="icon-btn" id="fnext">${window.icon('arrowRight', 18)}</button>
        </div>
        <p style="text-align:center;color:var(--text-muted);font-size:var(--fs-sm)">${window.i18n.lang === 'ar' ? 'انقر البطاقة لقلبها' : 'Click the card to flip'}</p>
      </div>`;
      const card = host.querySelector('#fcard');
      const flip = () => card.classList.toggle('flipped');
      card.addEventListener('click', flip);
      card.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); } });
      host.querySelector('#fprev').addEventListener('click', () => { idx = (idx - 1 + cards.length) % cards.length; draw(); });
      host.querySelector('#fnext').addEventListener('click', () => { idx = (idx + 1) % cards.length; draw(); });
    }
    draw();
  }
  window.renderFlashcards = renderFlashcards;

  function loading() { return `<div class="container"><div class="loading"><div class="spinner"></div></div></div>`; }
})();
