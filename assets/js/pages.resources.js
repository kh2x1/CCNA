/* ==========================================================================
   pages.resources.js — Resources hub, Cheatsheets, Ports & Protocols,
   Cisco Commands reference, Interview Q&A, Network Topologies.
   ========================================================================== */
(function () {
  const P = window.Pages = window.Pages || {};
  const pick = o => window.i18n.pick(o);
  const esc = s => window.UI.esc(s);
  const ar = () => window.i18n.lang === 'ar';

  const RES = [
    { id: 'cheatsheets', icon: 'file', t: { en: 'Cheatsheets', ar: 'مرجع سريع' }, d: { en: 'Condensed reference cards for exam day.', ar: 'بطاقات مرجعية مكثّفة ليوم الامتحان.' } },
    { id: 'ports', icon: 'server', t: { en: 'Ports & Protocols', ar: 'المنافذ والبروتوكولات' }, d: { en: 'The well-known ports every tech must memorize.', ar: 'المنافذ المعروفة التي يجب على كل تقني حفظها.' } },
    { id: 'commands', icon: 'terminal', t: { en: 'Cisco Commands', ar: 'أوامر سيسكو' }, d: { en: 'Searchable IOS command reference with context.', ar: 'مرجع أوامر IOS قابل للبحث مع سياق.' }, href: '#/commands' },
    { id: 'interview', icon: 'message', t: { en: 'Interview Q&A', ar: 'أسئلة المقابلات' }, d: { en: 'Common networking interview questions & answers.', ar: 'أسئلة وأجوبة مقابلات الشبكات الشائعة.' } },
    { id: 'topologies', icon: 'share', t: { en: 'Network Topologies', ar: 'هياكل الشبكات' }, d: { en: 'Star, bus, ring, mesh — visualized and compared.', ar: 'نجمة، ناقل، حلقة، شبكية — مرسومة ومقارنة.' } }
  ];

  P.resourcesHub = function (mount) {
    mount.innerHTML = `
    <section class="page-hero"><div class="container">
      <h1>${window.icon('book', 30)} ${window.t('nav.resources')}</h1>
      <p>${pick({ en: 'Quick-reference material to complement the lessons and labs.', ar: 'مواد مرجعية سريعة تكمّل الدروس والمختبرات.' })}</p>
    </div></section>
    <div class="container"><div class="grid grid-3">
      ${RES.map(r => `<a class="card feature-card reveal" href="${r.href || '#/resources/' + r.id}">
        <div class="card-icon">${window.icon(r.icon, 24)}</div><h3>${pick(r.t)}</h3><p style="margin:0">${pick(r.d)}</p>
      </a>`).join('')}
    </div></div>`;
  };

  /* ----------------------------- Cheatsheets ------------------------------ */
  P.cheatsheets = function (mount) {
    const sheets = window.Data.raw.cheatsheets || [];
    mount.innerHTML = `
    <section class="page-hero"><div class="container">
      <h1>${window.icon('file', 28)} ${window.t('nav.cheatsheets')}</h1>
      <p>${pick({ en: 'Print-ready summaries. Use the print button on any card.', ar: 'ملخصات جاهزة للطباعة. استخدم زر الطباعة على أي بطاقة.' })}</p>
    </div></section>
    <div class="container">
      ${sheets.length ? sheets.map(s => `<div class="card reveal" style="margin-bottom:20px">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
          <div class="card-icon" style="margin:0">${window.icon(s.icon || 'file', 22)}</div>
          <h3 style="margin:0;flex:1">${pick(s.title)}</h3>
          <button class="btn btn-sm btn-ghost no-print" onclick="window.print()">${window.icon('printer',16)} ${window.t('btn.print')}</button>
        </div>
        ${(s.sections || []).map(sec => `
          <h4 style="margin-top:14px">${pick(sec.h)}</h4>
          ${sec.rows ? `<div class="table-wrap"><table class="data-table"><tbody>
            ${sec.rows.map(r => `<tr>${r.map((c, i) => i === 0 ? `<td><strong>${esc(c)}</strong></td>` : `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}
          </tbody></table></div>` : ''}
          ${sec.code ? `<div class="code-block"><pre>${esc(sec.code)}</pre></div>` : ''}
          ${sec.list ? `<ul class="lesson-body">${sec.list.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
        `).join('')}
      </div>`).join('') : empty()}
    </div>`;
  };

  /* -------------------------- Ports & Protocols --------------------------- */
  P.ports = function (mount) {
    const ports = (window.Data.raw.ports || []).slice().sort((a, b) => a.port - b.port);
    mount.innerHTML = `
    <section class="page-hero"><div class="container">
      <h1>${window.icon('server', 28)} ${window.t('nav.ports')}</h1>
      <p>${pick({ en: 'The well-known and common ports for CCNA & Network+ exams.', ar: 'المنافذ المعروفة والشائعة لامتحانات CCNA و Network+.' })}</p>
    </div></section>
    <div class="container">
      <div class="field" style="max-width:380px"><input class="input" id="portSearch" placeholder="${ar()?'ابحث عن منفذ أو خدمة…':'Search port or service…'}"></div>
      <div class="chip-row" id="protoChips">
        <span class="chip active" data-p="all">${ar()?'الكل':'All'}</span>
        <span class="chip" data-p="TCP">TCP</span>
        <span class="chip" data-p="UDP">UDP</span>
        <span class="chip" data-p="TCP/UDP">TCP/UDP</span>
      </div>
      <div class="table-wrap"><table class="data-table" id="portTable">
        <thead><tr><th>${ar()?'المنفذ':'Port'}</th><th>${ar()?'البروتوكول':'Proto'}</th><th>${ar()?'الخدمة':'Service'}</th><th>${ar()?'الوصف':'Description'}</th></tr></thead>
        <tbody></tbody>
      </table></div>
    </div>`;
    const tbody = mount.querySelector('#portTable tbody');
    let filterP = 'all', q = '';
    function draw() {
      const rows = ports.filter(p =>
        (filterP === 'all' || p.proto === filterP) &&
        (!q || `${p.port} ${p.service} ${pick(p.desc)}`.toLowerCase().includes(q)));
      tbody.innerHTML = rows.length ? rows.map(p => `<tr>
        <td><code>${p.port}</code></td>
        <td><span class="badge ${p.proto === 'TCP' ? 'badge-blue' : p.proto === 'UDP' ? 'badge-cyan' : 'badge-purple'}">${p.proto}</span></td>
        <td><strong>${esc(p.service)}</strong></td>
        <td>${esc(pick(p.desc))}</td></tr>`).join('')
        : `<tr><td colspan="4" style="text-align:center;color:var(--text-muted)">${window.t('search.empty')}</td></tr>`;
    }
    mount.querySelector('#portSearch').addEventListener('input', e => { q = e.target.value.toLowerCase(); draw(); });
    mount.querySelectorAll('#protoChips .chip').forEach(ch => ch.addEventListener('click', () => {
      mount.querySelectorAll('#protoChips .chip').forEach(c => c.classList.remove('active'));
      ch.classList.add('active'); filterP = ch.dataset.p; draw();
    }));
    draw();
  };

  /* ---------------------------- Cisco Commands ---------------------------- */
  P.commands = function (mount) {
    const cmds = window.Data.raw.commands || [];
    const cats = [...new Set(cmds.map(c => c.category))];
    mount.innerHTML = `
    <section class="page-hero"><div class="container">
      <h1>${window.icon('terminal', 28)} ${window.t('nav.commands')}</h1>
      <p>${pick({ en: 'Essential Cisco IOS commands grouped by task. Click to copy.', ar: 'أوامر Cisco IOS الأساسية مجمّعة حسب المهمة. انقر للنسخ.' })}</p>
    </div></section>
    <div class="container">
      <div class="field" style="max-width:380px"><input class="input mono" id="cmdSearch" placeholder="${ar()?'ابحث عن أمر…':'Search commands…'}"></div>
      <div class="chip-row" id="cmdChips">
        <span class="chip active" data-c="all">${ar()?'الكل':'All'}</span>
        ${cats.map(c => `<span class="chip" data-c="${esc(c)}">${esc(c)}</span>`).join('')}
      </div>
      <div id="cmdList"></div>
    </div>`;
    const list = mount.querySelector('#cmdList');
    let cat = 'all', q = '';
    function draw() {
      const rows = cmds.filter(c => (cat === 'all' || c.category === cat) &&
        (!q || (c.cmd + ' ' + pick(c.desc)).toLowerCase().includes(q)));
      list.innerHTML = `<div class="table-wrap"><table class="data-table"><thead>
        <tr><th>${ar()?'الأمر':'Command'}</th><th>${ar()?'الفئة':'Category'}</th><th>${ar()?'الوصف':'Description'}</th></tr></thead>
        <tbody>${rows.map(c => `<tr style="cursor:pointer" data-copy="${esc(c.cmd)}">
          <td><code>${esc(c.cmd)}</code></td><td><span class="badge badge-blue">${esc(c.category)}</span></td><td>${esc(pick(c.desc))}</td>
        </tr>`).join('') || `<tr><td colspan="3" style="text-align:center;color:var(--text-muted)">${window.t('search.empty')}</td></tr>`}</tbody>
      </table></div>`;
      list.querySelectorAll('tr[data-copy]').forEach(tr => tr.addEventListener('click', () => window.UI.copy(tr.dataset.copy)));
    }
    mount.querySelector('#cmdSearch').addEventListener('input', e => { q = e.target.value.toLowerCase(); draw(); });
    mount.querySelectorAll('#cmdChips .chip').forEach(ch => ch.addEventListener('click', () => {
      mount.querySelectorAll('#cmdChips .chip').forEach(c => c.classList.remove('active'));
      ch.classList.add('active'); cat = ch.dataset.c; draw();
    }));
    draw();
  };

  /* ---------------------------- Interview Q&A ----------------------------- */
  P.interview = function (mount) {
    const qa = window.Data.raw.interview || [];
    const cats = [...new Set(qa.map(q => q.category))];
    mount.innerHTML = `
    <section class="page-hero"><div class="container">
      <h1>${window.icon('message', 28)} ${window.t('nav.interview')}</h1>
      <p>${pick({ en: 'Practice with real-world networking interview questions.', ar: 'تدرّب على أسئلة مقابلات الشبكات الواقعية.' })}</p>
    </div></section>
    <div class="container">
      <div class="chip-row" id="iChips">
        <span class="chip active" data-c="all">${ar()?'الكل':'All'}</span>
        ${cats.map(c => `<span class="chip" data-c="${esc(c)}">${esc(c)}</span>`).join('')}
      </div>
      <div id="iList"></div>
    </div>`;
    const list = mount.querySelector('#iList');
    let cat = 'all';
    function draw() {
      const rows = qa.filter(q => cat === 'all' || q.category === cat);
      list.innerHTML = rows.map((q, i) => `<details class="card reveal" style="margin-bottom:12px">
        <summary style="cursor:pointer;font-weight:700;list-style:none;display:flex;gap:10px;align-items:flex-start">
          <span class="badge badge-blue">${esc(q.category)}</span>
          <span style="flex:1">${esc(pick(q.q))}</span>
          <span style="color:var(--primary)">${window.icon('chevronDown',18)}</span>
        </summary>
        <div class="lesson-body" style="margin-top:12px;padding-top:12px;border-top:1px solid var(--border)">${pick(q.a)}</div>
      </details>`).join('');
    }
    mount.querySelectorAll('#iChips .chip').forEach(ch => ch.addEventListener('click', () => {
      mount.querySelectorAll('#iChips .chip').forEach(c => c.classList.remove('active'));
      ch.classList.add('active'); cat = ch.dataset.c; draw();
    }));
    draw();
  };

  /* --------------------------- Topologies --------------------------------- */
  const TOPOS = [
    { id: 'star', name: { en: 'Star', ar: 'نجمة' }, svg: starSVG,
      pro: { en: 'Easy to manage; one failed cable affects one node.', ar: 'سهلة الإدارة؛ فشل كابل واحد يؤثر على عقدة واحدة.' },
      con: { en: 'Central switch is a single point of failure.', ar: 'السويتش المركزي نقطة فشل وحيدة.' },
      use: { en: 'Most common in modern LANs (switched Ethernet).', ar: 'الأكثر شيوعًا في الشبكات المحلية الحديثة.' } },
    { id: 'bus', name: { en: 'Bus', ar: 'ناقل' }, svg: busSVG,
      pro: { en: 'Cheap, little cabling.', ar: 'رخيصة، كابلات قليلة.' },
      con: { en: 'One break kills the whole network; collisions.', ar: 'انقطاع واحد يعطّل الشبكة كلها؛ تصادمات.' },
      use: { en: 'Legacy 10BASE2/5 coax networks.', ar: 'شبكات coax القديمة 10BASE2/5.' } },
    { id: 'ring', name: { en: 'Ring', ar: 'حلقة' }, svg: ringSVG,
      pro: { en: 'Predictable performance; no collisions (token).', ar: 'أداء متوقع؛ بلا تصادمات (token).' },
      con: { en: 'A single break can disrupt the ring.', ar: 'انقطاع واحد قد يعطّل الحلقة.' },
      use: { en: 'Token Ring, FDDI, some MAN/SONET rings.', ar: 'Token Ring و FDDI وبعض حلقات MAN/SONET.' } },
    { id: 'mesh', name: { en: 'Mesh', ar: 'شبكية' }, svg: meshSVG,
      pro: { en: 'Highly redundant and fault tolerant.', ar: 'تكرارية عالية ومقاومة للأعطال.' },
      con: { en: 'Expensive; lots of cabling/links.', ar: 'مكلفة؛ كابلات ووصلات كثيرة.' },
      use: { en: 'WAN cores, data centers, critical backbones.', ar: 'أنوية WAN ومراكز البيانات والعمود الفقري الحرج.' } }
  ];
  P.topologies = function (mount) {
    mount.innerHTML = `
    <section class="page-hero"><div class="container">
      <h1>${window.icon('share', 28)} ${window.t('nav.topologies')}</h1>
      <p>${pick({ en: 'How devices are physically and logically arranged.', ar: 'كيف تُرتّب الأجهزة ماديًا ومنطقيًا.' })}</p>
    </div></section>
    <div class="container"><div class="grid grid-2">
      ${TOPOS.map(tp => `<div class="card reveal">
        <h3>${pick(tp.name)}</h3>
        <div style="background:var(--surface-2);border-radius:12px;padding:16px;margin:10px 0">${tp.svg()}</div>
        <div class="result-row"><span class="k">${window.icon('checkCircle',14)} ${ar()?'مزايا':'Pros'}</span><span class="v" style="font-family:inherit;text-align:start">${pick(tp.pro)}</span></div>
        <div class="result-row"><span class="k">${window.icon('alert',14)} ${ar()?'عيوب':'Cons'}</span><span class="v" style="font-family:inherit;text-align:start">${pick(tp.con)}</span></div>
        <div class="result-row"><span class="k">${window.icon('info',14)} ${ar()?'الاستخدام':'Use'}</span><span class="v" style="font-family:inherit;text-align:start">${pick(tp.use)}</span></div>
      </div>`).join('')}
    </div></div>`;
  };

  function nodeC(x, y, c = 'var(--primary)') { return `<circle cx="${x}" cy="${y}" r="13" fill="var(--surface)" stroke="${c}" stroke-width="2.5"/>`; }
  function line(x1, y1, x2, y2) { return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--border-strong)" stroke-width="2"/>`; }
  function svgWrap(inner) { return `<svg viewBox="0 0 240 160" style="width:100%;max-width:280px;display:block;margin:auto">${inner}</svg>`; }
  function starSVG() { const cx = 120, cy = 80, pts = [[120,20],[200,55],[185,135],[55,135],[40,55]];
    return svgWrap(pts.map(p => line(cx, cy, p[0], p[1])).join('') + `<rect x="105" y="65" width="30" height="30" rx="6" fill="var(--surface)" stroke="var(--accent)" stroke-width="2.5"/>` + pts.map(p => nodeC(p[0], p[1])).join('')); }
  function busSVG() { const xs = [40,90,140,190]; return svgWrap(line(20,80,220,80) + xs.map(x => line(x,80,x,45)).join('') + xs.map(x => nodeC(x,40)).join('')); }
  function ringSVG() { const cx=120,cy=80,r=55, pts=[]; for(let i=0;i<6;i++){pts.push([cx+r*Math.cos(i*Math.PI/3),cy+r*Math.sin(i*Math.PI/3)]);}
    let l=''; for(let i=0;i<6;i++){const a=pts[i],b=pts[(i+1)%6];l+=line(a[0],a[1],b[0],b[1]);} return svgWrap(l + pts.map(p=>nodeC(p[0],p[1])).join('')); }
  function meshSVG() { const pts=[[60,40],[180,40],[60,120],[180,120]]; let l=''; for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++)l+=line(pts[i][0],pts[i][1],pts[j][0],pts[j][1]); return svgWrap(l + pts.map(p=>nodeC(p[0],p[1])).join('')); }

  function empty() { return `<div class="empty-state">${window.icon('file', 64)}<p>${ar()?'لا يوجد محتوى بعد.':'No content yet.'}</p></div>`; }
})();
