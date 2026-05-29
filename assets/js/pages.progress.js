/* ==========================================================================
   pages.progress.js — Progress dashboard, printable certificate, and the
   hands-on Labs catalogue / detail pages.
   ========================================================================== */
(function () {
  const P = window.Pages = window.Pages || {};
  const pick = o => window.i18n.pick(o);
  const esc = s => window.UI.esc(s);
  const ar = () => window.i18n.lang === 'ar';

  /* ----------------------------- Progress -------------------------------- */
  P.progress = function (mount) {
    const all = window.Data.allLessons();
    const done = all.filter(l => window.Store.isDone(l.id)).length;
    const pct = Math.round((done / Math.max(all.length, 1)) * 100);
    const avg = window.Store.avgScore();
    const best = window.Store.bestScore();
    const favs = window.Store.favs();

    function trackProgress(id, label) {
      const ls = window.Data.lessonsOf(id);
      const d = ls.filter(l => window.Store.isDone(l.id)).length;
      const p = Math.round((d / Math.max(ls.length, 1)) * 100);
      return `<div style="margin-bottom:16px">
        <div style="display:flex;justify-content:space-between;font-weight:700;margin-bottom:6px"><span>${label}</span><span>${d}/${ls.length} · ${p}%</span></div>
        <div class="quiz-progress"><div class="bar" style="width:${p}%"></div></div>
      </div>`;
    }

    mount.innerHTML = `
    <section class="page-hero"><div class="container">
      <h1>${window.icon('activity', 30)} ${window.t('progress.title')}</h1>
      <p>${window.t('progress.lead')}</p>
    </div></section>
    <div class="container">
      <div class="grid" style="grid-template-columns:320px 1fr;gap:24px;align-items:start">
        <div class="progress-stat" style="flex-direction:column;text-align:center">
          <svg width="160" height="160" class="progress-ring" viewBox="0 0 120 120">
            <defs><linearGradient id="pg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="var(--brand-500)"/><stop offset="1" stop-color="var(--accent-500)"/></linearGradient></defs>
            <circle class="track" cx="60" cy="60" r="52"/>
            <circle class="fill" cx="60" cy="60" r="52" stroke-dasharray="${2*Math.PI*52}" stroke-dashoffset="${2*Math.PI*52*(1-pct/100)}"/>
          </svg>
          <div style="margin-top:-110px"><div style="font-size:2.4rem;font-weight:900">${pct}%</div><div style="color:var(--text-muted)">${window.t('progress.overall')}</div></div>
          <div style="height:70px"></div>
        </div>
        <div>
          <div class="grid grid-3" style="margin-bottom:20px">
            ${miniStat(done, window.t('progress.lessonsDone'), 'checkCircle')}
            ${miniStat(avg + '%', window.t('progress.quizAvg'), 'target')}
            ${miniStat(favs.length, window.t('progress.favorites'), 'star')}
          </div>
          <div class="card">
            <h3>${ar()?'التقدّم حسب المسار':'Progress by track'}</h3>
            ${trackProgress('ccna', 'CCNA')}
            ${trackProgress('networkplus', 'CompTIA Network+')}
          </div>
        </div>
      </div>

      ${favs.length ? `<div class="card" style="margin-top:24px">
        <h3>${window.icon('star',20)} ${window.t('progress.favorites')}</h3>
        <div class="grid grid-2">${favs.map(id => { const l = window.Data.getLesson(id); return l ? `<a class="lesson-link" href="#/learn/${l._track}/${l.id}" style="border:1px solid var(--border);padding:10px 12px;border-radius:10px"><span>${pick(l.title)}</span></a>` : ''; }).join('')}</div>
      </div>` : ''}

      <div style="margin-top:24px;display:flex;gap:10px;flex-wrap:wrap">
        <a class="btn btn-primary" href="#/certificate">${window.icon('award',18)} ${window.t('nav.certificate')}</a>
        <button class="btn btn-ghost" id="resetBtn">${window.icon('trash',16)} ${window.t('progress.reset')}</button>
      </div>
    </div>`;

    mount.querySelector('#resetBtn').addEventListener('click', () => {
      if (confirm(window.t('progress.resetConfirm'))) { window.Store.resetAll(); window.Router.render(); window.UI.toast(window.t('progress.reset'), 'success'); }
    });
  };

  function miniStat(val, label, icon) {
    return `<div class="card" style="text-align:center;padding:18px">
      <div style="color:var(--primary);margin-bottom:6px">${window.icon(icon, 24)}</div>
      <div style="font-size:1.6rem;font-weight:900">${val}</div>
      <div style="color:var(--text-muted);font-size:var(--fs-sm)">${label}</div></div>`;
  }

  /* ---------------------------- Certificate ------------------------------ */
  P.certificate = function (mount) {
    function trackPct(id) { const ls = window.Data.lessonsOf(id); const d = ls.filter(l => window.Store.isDone(l.id)).length; return Math.round((d / Math.max(ls.length, 1)) * 100); }
    const ccnaP = trackPct('ccna'), netP = trackPct('networkplus');
    const name = window.Store.getName();

    mount.innerHTML = `
    <section class="page-hero no-print"><div class="container">
      <h1>${window.icon('award', 30)} ${window.t('cert.title')}</h1>
      <p>${window.t('cert.intro')}</p>
    </div></section>
    <div class="container">
      <div class="card no-print" style="max-width:560px;margin-bottom:8px">
        <div class="field"><label>${window.t('cert.namePlaceholder')}</label>
          <input class="input" id="certName" value="${esc(name)}" placeholder="${window.t('cert.namePlaceholder')}"></div>
        <div class="field"><label>${ar()?'اختر المسار':'Select track'}</label>
          <select class="input" id="certTrack">
            <option value="ccna" ${ccnaP<100?'disabled':''}>CCNA (${ccnaP}%)${ccnaP<100?' — '+window.t('cert.locked'):''}</option>
            <option value="networkplus" ${netP<100?'disabled':''}>CompTIA Network+ (${netP}%)${netP<100?' — '+window.t('cert.locked'):''}</option>
            <option value="ccna-demo">${ar()?'معاينة (تجريبي)':'Preview (demo)'}</option>
          </select></div>
        <button class="btn btn-primary btn-block" id="certGen">${window.icon('award',18)} ${window.t('cert.generate')}</button>
        <p style="font-size:var(--fs-xs);color:var(--text-muted);margin:12px 0 0">${window.t('cert.disclaimer')}</p>
      </div>
      <div id="certOut"></div>
    </div>`;

    mount.querySelector('#certGen').addEventListener('click', () => {
      const nm = mount.querySelector('#certName').value.trim() || (ar() ? 'المتعلّم' : 'Learner');
      window.Store.setName(nm);
      const tk = mount.querySelector('#certTrack').value;
      const trackName = tk.startsWith('ccna') ? 'Cisco CCNA 200-301' : 'CompTIA Network+ N10-009';
      const cid = 'NS-' + Date.now().toString(36).toUpperCase();
      const out = mount.querySelector('#certOut');
      out.innerHTML = `
        <div class="certificate" id="certCard">
          <div class="cert-seal">${window.icon('award', 40)}</div>
          <h2>${window.t('cert.title')}</h2>
          <p style="color:#475569">${window.t('cert.presented')}</p>
          <div class="cert-name">${esc(nm)}</div>
          <p style="color:#475569">${window.t('cert.forCompleting')} <strong>${trackName}</strong> ${window.t('cert.track')}.</p>
          <div class="cert-foot">
            <div><strong>${window.t('cert.date')}</strong><br>${new Date().toLocaleDateString(ar()?'ar':'en-GB')}</div>
            <div><strong>NetSchool</strong><br>${ar()?'أكاديمية الشبكات':'Networking Academy'}</div>
            <div><strong>${window.t('cert.id')}</strong><br>${cid}</div>
          </div>
        </div>
        <div class="no-print" style="text-align:center;margin-top:16px">
          <button class="btn btn-primary" onclick="window.print()">${window.icon('printer',18)} ${window.t('btn.print')}</button>
        </div>`;
      out.scrollIntoView({ behavior: 'smooth' });
    });
  };

  /* ------------------------------- Labs ---------------------------------- */
  P.labs = function (mount) {
    const labs = window.Data.raw.labs || [];
    mount.innerHTML = `
    <section class="page-hero"><div class="container">
      <h1>${window.icon('flask', 30)} ${window.t('nav.labs')}</h1>
      <p>${pick({ en: 'Guided, Packet Tracer-style labs. Read the scenario, follow the steps, verify your work.', ar: 'مختبرات موجّهة بأسلوب Packet Tracer. اقرأ السيناريو، اتبع الخطوات، تحقق من عملك.' })}</p>
    </div></section>
    <div class="container">${labs.length ? `<div class="grid grid-2">
      ${labs.map(l => `<a class="card reveal" href="#/labs/${l.id}">
        <div style="display:flex;gap:10px;align-items:center;margin-bottom:8px">
          <div class="card-icon" style="margin:0;width:42px;height:42px">${window.icon('flask', 20)}</div>
          ${window.UI.diffBadge(l.difficulty)}
        </div>
        <h3 style="font-size:1.1rem">${pick(l.title)}</h3>
        <p style="margin:0;font-size:var(--fs-sm)">${pick(l.objective)}</p>
        <div class="meta" style="margin-top:12px;color:var(--text-muted);font-size:var(--fs-sm)">${window.icon('list',14)} ${(l.steps||[]).length} ${ar()?'خطوة':'steps'}</div>
      </a>`).join('')}</div>` : empty()}
    </div>`;
  };

  P.lab = function (mount, { id }) {
    const lab = (window.Data.raw.labs || []).find(l => l.id === id);
    if (!lab) { window.Pages.notFound(mount); return; }
    mount.innerHTML = `
    <section class="page-hero"><div class="container">
      <div class="crumbs" style="margin-bottom:6px"><a href="#/labs">${window.t('nav.labs')}</a> / ${pick(lab.title)}</div>
      <h1>${window.icon('flask', 26)} ${pick(lab.title)}</h1>
      <div style="display:flex;gap:10px;margin-top:8px">${window.UI.diffBadge(lab.difficulty)}<span class="badge badge-blue">${(lab.steps||[]).length} ${ar()?'خطوة':'steps'}</span></div>
    </div></section>
    <div class="container" style="max-width:820px">
      <div class="callout"><div class="callout-title">${window.icon('target',18)} ${ar()?'الهدف':'Objective'}</div><p>${pick(lab.objective)}</p></div>
      ${lab.topology ? `<h3>${ar()?'المخطط':'Topology'}</h3><div class="code-block"><pre>${esc(lab.topology)}</pre></div>` : ''}
      ${lab.requirements ? `<h3>${ar()?'المتطلبات':'Requirements'}</h3><ul class="lesson-body">${lab.requirements.map(r => `<li>${pick(r)}</li>`).join('')}</ul>` : ''}
      <h3>${ar()?'الخطوات':'Steps'}</h3>
      <ol class="lesson-body" style="font-size:var(--fs-base)">${(lab.steps||[]).map(s => `<li style="margin-bottom:10px">${pick(s)}</li>`).join('')}</ol>
      ${lab.config ? `<h3>${ar()?'التهيئة المرجعية':'Reference configuration'}</h3><div class="code-block"><pre>${esc(lab.config)}</pre></div>` : ''}
      ${lab.verify ? `<div class="callout tip"><div class="callout-title">${window.icon('checkCircle',18)} ${ar()?'التحقق':'Verification'}</div><p>${pick(lab.verify)}</p></div>` : ''}
    </div>`;
  };

  function empty() { return `<div class="empty-state">${window.icon('flask', 64)}<p>${ar()?'لا توجد مختبرات بعد.':'No labs yet.'}</p></div>`; }
})();
