/* ==========================================================================
   pages.quiz.js — Quiz Center: choose a topic-based exam or a random mixed
   exam, then run it through the shared quiz engine (window.renderQuiz).
   ========================================================================== */
(function () {
  const P = window.Pages = window.Pages || {};
  const pick = o => window.i18n.pick(o);
  const ar = () => window.i18n.lang === 'ar';

  // Gather every question from the dedicated quiz bank + each lesson quiz.
  function collect() {
    const banks = {}; // topicId -> {title, questions[]}
    (window.Data.raw.quizBank || []).forEach(b => {
      banks[b.id] = { id: b.id, title: b.title, questions: (b.questions || []).slice() };
    });
    // also expose lesson quizzes grouped per track
    window.Data.allLessons().forEach(l => {
      if (!(l.quiz || []).length) return;
      const key = l._track;
      banks[key] = banks[key] || { id: key, title: { en: l._track === 'ccna' ? 'CCNA Lessons' : 'Network+ Lessons', ar: l._track === 'ccna' ? 'دروس CCNA' : 'دروس Network+' }, questions: [] };
      banks[key].questions.push(...l.quiz);
    });
    return banks;
  }

  P.quizHub = function (mount) {
    const banks = collect();
    const list = Object.values(banks).filter(b => b.questions.length);
    const totalQ = list.reduce((n, b) => n + b.questions.length, 0);
    mount.innerHTML = `
    <section class="page-hero"><div class="container">
      <h1>${window.icon('help', 30)} ${window.t('nav.quiz')}</h1>
      <p>${pick({ en: 'Test yourself with ' + totalQ + '+ exam-style questions across every topic.', ar: 'اختبر نفسك بأكثر من ' + totalQ + ' سؤالًا بأسلوب الامتحان عبر كل المواضيع.' })}</p>
    </div></section>
    <div class="container">
      <div class="grid grid-3" style="margin-bottom:8px">
        <a class="card feature-card reveal" href="#/quiz/exam-ccna">
          <div class="card-icon">${window.icon('route', 24)}</div><h3>CCNA ${ar()?'امتحان شامل':'Mock Exam'}</h3>
          <p style="margin:0">${ar()?'25 سؤالًا عشوائيًا من منهج CCNA.':'25 random questions from the CCNA syllabus.'}</p></a>
        <a class="card feature-card reveal" href="#/quiz/exam-netplus">
          <div class="card-icon">${window.icon('layers', 24)}</div><h3>Network+ ${ar()?'امتحان شامل':'Mock Exam'}</h3>
          <p style="margin:0">${ar()?'25 سؤالًا عشوائيًا من منهج Network+.':'25 random questions from the Network+ syllabus.'}</p></a>
        <a class="card feature-card reveal" href="#/quiz/exam-mixed">
          <div class="card-icon">${window.icon('zap', 24)}</div><h3>${ar()?'تحدٍّ عشوائي':'Random Challenge'}</h3>
          <p style="margin:0">${ar()?'20 سؤالًا مختلطًا من كل المواضيع.':'20 mixed questions from all topics.'}</p></a>
      </div>
      <h3 style="margin-top:24px">${ar()?'اختبارات حسب الموضوع':'Quizzes by topic'}</h3>
      <div class="grid grid-3">
        ${list.map(b => {
          const sc = window.Store.getScore('quiz-' + b.id);
          return `<a class="card reveal" href="#/quiz/${b.id}">
            <div style="display:flex;justify-content:space-between;align-items:start">
              <h3 style="font-size:1.05rem">${pick(b.title)}</h3>
              ${sc ? `<span class="badge ${sc.best >= 70 ? 'badge-green' : 'badge-amber'}">${sc.best}%</span>` : ''}
            </div>
            <p style="margin:0;color:var(--text-muted);font-size:var(--fs-sm)">${b.questions.length} ${ar()?'سؤال':'questions'}</p>
          </a>`;
        }).join('')}
      </div>
    </div>`;
  };

  P.quiz = function (mount, { topic }) {
    const banks = collect();
    let questions, title, quizId = 'quiz-' + topic;

    function sample(arr, n) { return arr.slice().sort(() => Math.random() - 0.5).slice(0, n); }
    function allFrom(trackId) {
      return window.Data.lessonsOf(trackId).flatMap(l => l.quiz || [])
        .concat((window.Data.raw.quizBank || []).filter(b => b.track === trackId).flatMap(b => b.questions || []));
    }

    if (topic === 'exam-ccna') { questions = sample(allFrom('ccna'), 25); title = { en: 'CCNA Mock Exam', ar: 'امتحان CCNA الشامل' }; }
    else if (topic === 'exam-netplus') { questions = sample(allFrom('networkplus'), 25); title = { en: 'Network+ Mock Exam', ar: 'امتحان Network+ الشامل' }; }
    else if (topic === 'exam-mixed') {
      const all = window.Data.allLessons().flatMap(l => l.quiz || []).concat((window.Data.raw.quizBank || []).flatMap(b => b.questions || []));
      questions = sample(all, 20); title = { en: 'Random Challenge', ar: 'التحدي العشوائي' };
    } else if (banks[topic]) { questions = banks[topic].questions; title = banks[topic].title; }
    else { window.Pages.notFound(mount); return; }

    if (!questions.length) { window.Pages.notFound(mount); return; }

    mount.innerHTML = `
    <section class="page-hero"><div class="container">
      <div class="crumbs" style="margin-bottom:6px"><a href="#/quiz">${window.t('nav.quiz')}</a> / ${pick(title)}</div>
      <h1>${window.icon('help', 26)} ${pick(title)}</h1>
      <p>${questions.length} ${ar()?'سؤال · النجاح من 70%':'questions · pass mark 70%'}</p>
    </div></section>
    <div class="container" style="max-width:760px"><div id="quizHost"></div></div>`;
    window.renderQuiz(mount.querySelector('#quizHost'), questions, quizId);
  };
})();
