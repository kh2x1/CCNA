/* ==========================================================================
   pages.home.js — Landing page: hero, learning paths, live stats, features,
   "what is networking" intro, and a call-to-action.
   ========================================================================== */
(function () {
  const P = window.Pages = window.Pages || {};
  const pick = o => window.i18n.pick(o);

  function heroSVG() {
    // Lightweight animated network diagram (pure SVG, theme-aware via currentColor)
    return `<svg class="network-anim" viewBox="0 0 460 360" role="img" aria-label="Network diagram">
      <defs><linearGradient id="hg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="var(--brand-500)"/><stop offset="1" stop-color="var(--accent-500)"/>
      </linearGradient></defs>
      <g stroke="url(#hg)" stroke-width="2.5" class="links" fill="none" opacity="0.55">
        <line class="link" x1="230" y1="60" x2="110" y2="170"/>
        <line class="link" x1="230" y1="60" x2="350" y2="170"/>
        <line class="link" x1="110" y1="170" x2="70" y2="290"/>
        <line class="link" x1="110" y1="170" x2="180" y2="290"/>
        <line class="link" x1="350" y1="170" x2="290" y2="290"/>
        <line class="link" x1="350" y1="170" x2="390" y2="290"/>
        <line class="link" x1="110" y1="170" x2="350" y2="170"/>
      </g>
      ${[[230,60,'router'],[110,170,'switch'],[350,170,'switch'],[70,290,'pc'],[180,290,'pc'],[290,290,'pc'],[390,290,'pc']]
        .map(([x,y,t]) => `<g class="node" transform="translate(${x-22},${y-22})">
          <rect width="44" height="44" rx="11" fill="var(--surface)" stroke="url(#hg)" stroke-width="2"/>
          <g transform="translate(10,10)" stroke="var(--primary)" stroke-width="2" fill="none">${window.icon(t==='router'?'route':t==='switch'?'network':'monitor',24).replace(/<svg[^>]*>|<\/svg>/g,'')}</g>
        </g>`).join('')}
    </svg>`;
  }

  function pathCard(track, accent) {
    const t = window.Data.track(track);
    const lessons = window.Data.lessonsOf(track).length;
    const mods = (t.modules || []).length;
    const meta = track === 'ccna'
      ? { title: 'Cisco CCNA 200-301', sub: { en: 'Routing, switching & network foundations for the Cisco certification.', ar: 'التوجيه والتبديل وأساسيات الشبكات لشهادة سيسكو.' }, icon: 'route', tags: ['Routing', 'Switching', 'Security', 'Automation'] }
      : { title: 'CompTIA Network+ N10-009', sub: { en: 'Vendor-neutral networking concepts, operations and troubleshooting.', ar: 'مفاهيم الشبكات المحايدة وإدارتها واستكشاف أعطالها.' }, icon: 'layers', tags: ['Concepts', 'Cabling', 'Cloud', 'Troubleshooting'] };
    return `<a class="card path-card reveal" href="#/learn/${track}">
      <div class="card-icon" style="background:linear-gradient(135deg,${accent})">${window.icon(meta.icon, 26)}</div>
      <div class="tag-row">${meta.tags.map(x => `<span class="badge badge-blue">${x}</span>`).join('')}</div>
      <h3>${meta.title}</h3>
      <p>${pick(meta.sub)}</p>
      <div class="meta">
        <span>${window.icon('book', 16)} ${lessons} ${window.t('common.lessons')}</span>
        <span>${window.icon('grid', 16)} ${mods} ${window.t('stat.modules')}</span>
      </div>
    </a>`;
  }

  const FEATURES = [
    { i: 'search', t: { en: 'Powerful search', ar: 'بحث قوي' }, d: { en: 'Instantly find any lesson, command or port. Press Ctrl+K anywhere.', ar: 'اعثر فورًا على أي درس أو أمر أو منفذ. اضغط Ctrl+K في أي مكان.' } },
    { i: 'activity', t: { en: 'Progress tracking', ar: 'تتبع التقدّم' }, d: { en: 'Your completed lessons and quiz scores are saved on this device.', ar: 'تُحفظ دروسك المكتملة ونتائج اختباراتك على هذا الجهاز.' } },
    { i: 'flask', t: { en: 'Hands-on labs', ar: 'مختبرات عملية' }, d: { en: 'Guided Packet Tracer-style labs with step-by-step objectives.', ar: 'مختبرات موجّهة بأسلوب Packet Tracer مع أهداف خطوة بخطوة.' } },
    { i: 'calculator', t: { en: 'Pro tools', ar: 'أدوات احترافية' }, d: { en: 'Subnet calculator, IP/binary converters, OSI & packet simulators.', ar: 'حاسبة الشبكات، محوّلات IP والثنائي، محاكيات OSI والحزم.' } },
    { i: 'award', t: { en: 'Printable certificate', ar: 'شهادة قابلة للطباعة' }, d: { en: 'Finish a track and generate a personalized completion certificate.', ar: 'أكمل المسار وأنشئ شهادة إتمام شخصية.' } },
    { i: 'globe', t: { en: 'Arabic & English', ar: 'عربي وإنجليزي' }, d: { en: 'Full bilingual interface with RTL support — switch any time.', ar: 'واجهة ثنائية اللغة كاملة مع دعم RTL — بدّل في أي وقت.' } },
    { i: 'moon', t: { en: 'Dark / Light mode', ar: 'الوضع الداكن/الفاتح' }, d: { en: 'A comfortable theme for day and night, remembered automatically.', ar: 'مظهر مريح للنهار والليل، يُحفظ تلقائيًا.' } },
    { i: 'download', t: { en: 'Offline & PWA', ar: 'يعمل دون اتصال (PWA)' }, d: { en: 'Install it like an app and keep studying without internet.', ar: 'ثبّته كتطبيق وتابع الدراسة بدون إنترنت.' } }
  ];

  P.home = function (mount) {
    const c = window.Data.counts();
    const lastLesson = findResume();
    mount.innerHTML = `
    <!-- HERO -->
    <section class="hero"><div class="container"><div class="hero-grid">
      <div>
        <h1>${window.t('home.hero.title1')} <span class="grad">${window.t('home.hero.grad')}</span> ${window.t('home.hero.title2')}</h1>
        <p class="lead">${window.t('home.hero.lead')}</p>
        <div class="hero-cta">
          <a class="btn btn-primary btn-lg" href="${lastLesson || '#/learn/ccna'}">${window.icon('play', 18)} ${window.t(lastLesson ? 'btn.continue' : 'btn.start')}</a>
          <a class="btn btn-ghost btn-lg" href="#/tools">${window.icon('tool', 18)} ${window.t('btn.explore')}</a>
        </div>
        <div class="hero-badges">
          <span class="hero-badge">${window.icon('checkCircle', 18)} ${window.t('home.badge.free')}</span>
          <span class="hero-badge">${window.icon('checkCircle', 18)} ${window.t('home.badge.offline')}</span>
          <span class="hero-badge">${window.icon('checkCircle', 18)} ${window.t('home.badge.bilingual')}</span>
        </div>
      </div>
      <div class="hero-visual">${heroSVG()}</div>
    </div></div></section>

    <!-- STATS -->
    <section class="section" style="padding-top:0"><div class="container">
      <div class="stats">
        ${stat(c.lessons, 'stat.lessons')}
        ${stat(c.quiz, 'stat.quizzes')}
        ${stat(c.labs, 'stat.labs')}
        ${stat(c.tools, 'stat.tools')}
      </div>
    </div></section>

    <!-- PATHS -->
    <section class="section"><div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">${window.t('home.paths.eyebrow')}</span>
        <h2>${window.t('home.paths.title')}</h2>
        <p>${window.t('home.paths.lead')}</p>
      </div>
      <div class="grid grid-2">
        ${pathCard('ccna', 'var(--brand-500),var(--brand-700)')}
        ${pathCard('networkplus', 'var(--accent-500),var(--purple-500)')}
      </div>
    </div></section>

    <!-- WHAT IS NETWORKING -->
    <section class="section" style="padding-top:0"><div class="container">
      <div class="card reveal" style="display:grid;grid-template-columns:auto 1fr;gap:24px;align-items:center">
        <div class="card-icon" style="width:72px;height:72px;background:linear-gradient(135deg,var(--brand-500),var(--accent-500));color:#fff">${window.icon('globe', 36)}</div>
        <div><h2 style="margin-bottom:8px">${window.t('home.whatis.title')}</h2><p style="margin:0">${window.t('home.whatis.body')}</p></div>
      </div>
    </div></section>

    <!-- FEATURES -->
    <section class="section" style="padding-top:0"><div class="container">
      <div class="section-head reveal">
        <span class="eyebrow">${window.t('home.features.eyebrow')}</span>
        <h2>${window.t('home.features.title')}</h2>
      </div>
      <div class="grid grid-4">
        ${FEATURES.map(f => `<div class="card feature-card reveal">
          <div class="card-icon">${window.icon(f.i, 24)}</div>
          <h3 style="font-size:1.05rem">${pick(f.t)}</h3>
          <p style="margin:0">${pick(f.d)}</p>
        </div>`).join('')}
      </div>
    </div></section>

    <!-- CTA -->
    <section class="section"><div class="container">
      <div class="card reveal" style="text-align:center;padding:56px 24px;background:linear-gradient(135deg,var(--brand-600),var(--accent-600));border:none;color:#fff">
        <h2 style="color:#fff">${window.t('home.cta.title')}</h2>
        <p style="color:rgba(255,255,255,.9);max-width:520px;margin:0 auto 24px">${window.t('home.cta.lead')}</p>
        <a class="btn btn-lg" style="background:#fff;color:var(--brand-700)" href="#/learn/ccna">${window.icon('arrowRight', 18)} ${window.t('btn.start')}</a>
      </div>
    </div></section>`;

    // Animate stat counters
    mount.querySelectorAll('.stat .num').forEach(el => {
      const target = +el.dataset.n;
      window.UI.countUp(el, target, el.dataset.suffix || '');
    });
  };

  function stat(n, labelKey) {
    return `<div class="stat reveal"><div class="num" data-n="${n}" data-suffix="+">0</div><div class="label">${window.t(labelKey)}</div></div>`;
  }

  // Find the first incomplete lesson to power "Continue".
  function findResume() {
    if (!window.Store.doneCount()) return null;
    const all = window.Data.lessonsOf('ccna').concat(window.Data.lessonsOf('networkplus'));
    const next = all.find(l => !window.Store.isDone(l.id));
    return next ? `#/learn/${next._track}/${next.id}` : null;
  }
})();
