/* ==========================================================================
   pages.tools.js — Tools hub + 7 interactive tools:
   subnet calculator, IP converter, binary converter, CIDR calculator,
   ping simulation, packet-flow visualization, OSI layer simulator.
   ========================================================================== */
(function () {
  const P = window.Pages = window.Pages || {};
  const pick = o => window.i18n.pick(o);
  const esc = s => window.UI.esc(s);
  const ar = () => window.i18n.lang === 'ar';

  const TOOLS = [
    { id: 'subnet', icon: 'calculator', t: { en: 'Subnet Calculator', ar: 'حاسبة الشبكات الفرعية' }, d: { en: 'Network, broadcast, host range, mask & class from any IP/CIDR.', ar: 'الشبكة والبث ونطاق المضيفين والقناع والفئة من أي IP/CIDR.' } },
    { id: 'ip', icon: 'globe', t: { en: 'IP Converter', ar: 'محوّل IP' }, d: { en: 'Convert IPv4 between decimal, binary, hex and integer.', ar: 'حوّل IPv4 بين العشري والثنائي والست عشري والعدد الصحيح.' } },
    { id: 'binary', icon: 'cpu', t: { en: 'Binary Converter', ar: 'محوّل ثنائي' }, d: { en: 'Flip bits and watch decimal update — learn the place values.', ar: 'بدّل البتات وشاهد العشري يتحدّث — تعلّم القيم المكانية.' } },
    { id: 'cidr', icon: 'network', t: { en: 'CIDR / VLSM Planner', ar: 'مخطط CIDR / VLSM' }, d: { en: 'Find the right prefix for a number of hosts or subnets.', ar: 'أوجد البادئة المناسبة لعدد من المضيفين أو الشبكات.' } },
    { id: 'ping', icon: 'activity', t: { en: 'Ping Simulator', ar: 'محاكي Ping' }, d: { en: 'Simulated ICMP echo with realistic latency and loss.', ar: 'صدى ICMP محاكى مع زمن وصول وفقد واقعيين.' } },
    { id: 'packet', icon: 'box', t: { en: 'Packet Flow', ar: 'تدفق الحزم' }, d: { en: 'Watch a packet travel host → switch → router → server.', ar: 'شاهد حزمة تنتقل من المضيف للسويتش للراوتر للخادم.' } },
    { id: 'osi', icon: 'layers', t: { en: 'OSI Simulator', ar: 'محاكي OSI' }, d: { en: 'Click each of the 7 layers to see its role and protocols.', ar: 'انقر كل طبقة من الطبقات السبع لرؤية دورها وبروتوكولاتها.' } }
  ];

  P.toolsHub = function (mount) {
    mount.innerHTML = `
    <section class="page-hero"><div class="container">
      <h1>${window.icon('tool', 30)} ${window.t('nav.tools')}</h1>
      <p>${pick({ en: 'Professional, browser-based networking utilities — no install required.', ar: 'أدوات شبكات احترافية تعمل في المتصفح — دون الحاجة لتثبيت.' })}</p>
    </div></section>
    <div class="container"><div class="grid grid-3">
      ${TOOLS.map(tl => `<a class="card feature-card reveal" href="#/tools/${tl.id}">
        <div class="card-icon">${window.icon(tl.icon, 24)}</div>
        <h3>${pick(tl.t)}</h3><p style="margin:0">${pick(tl.d)}</p>
      </a>`).join('')}
    </div></div>`;
  };

  P.tool = function (mount, { tool }) {
    const meta = TOOLS.find(t => t.id === tool);
    if (!meta) { window.Pages.notFound(mount); return; }
    mount.innerHTML = `
    <section class="page-hero"><div class="container">
      <div class="crumbs" style="margin-bottom:6px"><a href="#/tools">${window.t('nav.tools')}</a> / ${pick(meta.t)}</div>
      <h1>${window.icon(meta.icon, 28)} ${pick(meta.t)}</h1><p>${pick(meta.d)}</p>
    </div></section>
    <div class="container"><div id="toolMount"></div></div>`;
    const host = mount.querySelector('#toolMount');
    ({ subnet, ip: ipConv, binary, cidr, ping, packet, osi })[tool](host);
  };

  /* ----------------------------- Subnet calc ------------------------------ */
  function subnet(host) {
    host.innerHTML = `
    <div class="grid grid-2">
      <div class="tool-panel">
        <div class="field"><label>${ar() ? 'عنوان IP' : 'IP Address'}</label>
          <input class="input mono" id="sIp" value="192.168.1.10" placeholder="192.168.1.10"></div>
        <div class="field"><label>CIDR (/prefix)</label>
          <input class="input mono" id="sCidr" type="number" min="0" max="32" value="24"></div>
        <input id="sRange" type="range" min="0" max="32" value="24" style="width:100%">
        <button class="btn btn-primary btn-block" id="sGo" style="margin-top:14px">${window.icon('calculator',18)} ${window.t('btn.calculate')}</button>
      </div>
      <div class="tool-panel"><div id="sOut"></div></div>
    </div>`;
    const ipEl = host.querySelector('#sIp'), cidrEl = host.querySelector('#sCidr'), range = host.querySelector('#sRange');
    const out = host.querySelector('#sOut');
    function run() {
      try {
        const r = window.Net.subnet(ipEl.value, cidrEl.value);
        const row = (k, v, mono = true) => `<div class="result-row"><span class="k">${k}</span><span class="v" ${mono ? '' : 'style="font-family:inherit"'}>${esc(v)}</span></div>`;
        out.innerHTML =
          row(ar() ? 'عنوان الشبكة' : 'Network', r.network + '/' + r.cidr) +
          row(ar() ? 'قناع الشبكة' : 'Subnet Mask', r.mask) +
          row('Wildcard', r.wildcard) +
          row(ar() ? 'عنوان البث' : 'Broadcast', r.broadcast) +
          row(ar() ? 'أول مضيف' : 'First Host', r.firstHost) +
          row(ar() ? 'آخر مضيف' : 'Last Host', r.lastHost) +
          row(ar() ? 'مضيفون قابلون للاستخدام' : 'Usable Hosts', r.usableHosts.toLocaleString()) +
          row(ar() ? 'إجمالي العناوين' : 'Total Addresses', r.totalHosts.toLocaleString()) +
          row(ar() ? 'الفئة' : 'Class', r.cls) +
          row(ar() ? 'النوع' : 'Type', r.type) +
          `<div class="result-row"><span class="k">Binary mask</span></div>
           <div class="code-block" style="margin:6px 0"><pre>${esc(r.binaryMask)}</pre></div>`;
      } catch (e) { out.innerHTML = `<div class="callout danger"><p>${esc(e.message)}</p></div>`; }
    }
    host.querySelector('#sGo').addEventListener('click', run);
    ipEl.addEventListener('input', run);
    cidrEl.addEventListener('input', () => { range.value = cidrEl.value; run(); });
    range.addEventListener('input', () => { cidrEl.value = range.value; run(); });
    run();
  }

  /* ----------------------------- IP converter ----------------------------- */
  function ipConv(host) {
    host.innerHTML = `
    <div class="tool-panel" style="max-width:640px">
      <div class="field"><label>${ar() ? 'عنوان IPv4 (عشري)' : 'IPv4 Address (decimal)'}</label>
        <input class="input mono" id="cIp" value="10.20.30.40"></div>
      <div class="result-box" id="cOut"></div>
    </div>`;
    const el = host.querySelector('#cIp'), out = host.querySelector('#cOut');
    function run() {
      try {
        const n = window.Net.ipToInt(el.value);
        const row = (k, v) => `<div class="result-row"><span class="k">${k}</span><span class="v">${esc(v)}</span></div>`;
        out.innerHTML =
          row('Decimal', window.Net.intToIp(n)) +
          row('Binary', window.Net.ipToBinary(el.value)) +
          row('Hexadecimal', '0x' + n.toString(16).toUpperCase().padStart(8, '0')) +
          row('Integer (uint32)', (n >>> 0).toLocaleString()) +
          row('Class', window.Net.ipClass(el.value)) +
          row('Scope', window.Net.isPrivate(el.value) ? 'Private (RFC1918)' : 'Public');
      } catch (e) { out.innerHTML = `<div class="callout danger" style="margin:0"><p>${esc(e.message)}</p></div>`; }
    }
    el.addEventListener('input', run); run();
  }

  /* --------------------------- Binary converter --------------------------- */
  function binary(host) {
    host.innerHTML = `
    <div class="tool-panel">
      <p>${ar() ? 'انقر البتات لتبديلها. كل ثُماني (octet) يساوي 8 بت.' : 'Click the bits to toggle them. Each octet is 8 bits.'}</p>
      <div class="octets" id="bOct"></div>
      <div class="result-box">
        <div class="result-row"><span class="k">${ar() ? 'العنوان الناتج' : 'Resulting Address'}</span><span class="v" id="bIp" style="font-size:var(--fs-lg)"></span></div>
        <div class="result-row"><span class="k">Integer</span><span class="v" id="bInt"></span></div>
        <div class="result-row"><span class="k">Hex</span><span class="v" id="bHex"></span></div>
      </div>
      <div class="field" style="margin-top:16px"><label>${ar() ? 'أو أدخل عنوانًا لتحميله' : 'Or type an address to load it'}</label>
        <input class="input mono" id="bLoad" placeholder="192.168.1.1"></div>
    </div>`;
    let octs = [192, 168, 1, 1];
    const wrap = host.querySelector('#bOct');
    function draw() {
      wrap.innerHTML = octs.map((v, oi) => {
        const bits = v.toString(2).padStart(8, '0').split('');
        return `<div class="octet"><div class="bits">${bits.map((b, bi) =>
          `<div class="bit ${b === '1' ? 'on' : ''}" data-o="${oi}" data-b="${bi}">${128 >> bi >= 0 ? '' : ''}${b}</div>`).join('')}</div>
          <div class="dec">${v}</div></div>`;
      }).join('');
      wrap.querySelectorAll('.bit').forEach(bit => bit.addEventListener('click', () => {
        const o = +bit.dataset.o, b = +bit.dataset.b;
        octs[o] ^= (1 << (7 - b)); draw();
      }));
      const ip = octs.join('.');
      host.querySelector('#bIp').textContent = ip;
      const n = window.Net.ipToInt(ip);
      host.querySelector('#bInt').textContent = (n >>> 0).toLocaleString();
      host.querySelector('#bHex').textContent = '0x' + (n >>> 0).toString(16).toUpperCase().padStart(8, '0');
    }
    host.querySelector('#bLoad').addEventListener('input', e => {
      try { const n = window.Net.ipToInt(e.target.value); octs = [(n>>>24)&255,(n>>>16)&255,(n>>>8)&255,n&255]; draw(); } catch {}
    });
    draw();
  }

  /* ---------------------------- CIDR / VLSM ------------------------------- */
  function cidr(host) {
    host.innerHTML = `
    <div class="grid grid-2">
      <div class="tool-panel">
        <div class="field"><label>${ar() ? 'عدد المضيفين المطلوب' : 'Required hosts'}</label>
          <input class="input mono" id="vHosts" type="number" value="50" min="1"></div>
        <div id="vHostsOut" class="result-box"></div>
      </div>
      <div class="tool-panel">
        <div class="field"><label>${ar() ? 'عدد الشبكات الفرعية' : 'Required subnets'}</label>
          <input class="input mono" id="vSub" type="number" value="6" min="1"></div>
        <div class="field"><label>${ar() ? 'بادئة الشبكة الأساسية' : 'Base prefix'}</label>
          <input class="input mono" id="vBase" type="number" value="24" min="0" max="32"></div>
        <div id="vSubOut" class="result-box"></div>
      </div>
    </div>`;
    function hostsRun() {
      const h = +host.querySelector('#vHosts').value;
      const c = window.Net.cidrForHosts(h);
      const usable = Math.pow(2, 32 - c) - 2;
      host.querySelector('#vHostsOut').innerHTML =
        `<div class="result-row"><span class="k">${ar()?'البادئة':'Prefix'}</span><span class="v">/${c}</span></div>
         <div class="result-row"><span class="k">${ar()?'القناع':'Mask'}</span><span class="v">${window.Net.intToIp(window.Net.cidrToMask(c))}</span></div>
         <div class="result-row"><span class="k">${ar()?'مضيفون متاحون':'Usable hosts'}</span><span class="v">${usable.toLocaleString()}</span></div>`;
    }
    function subRun() {
      const s = +host.querySelector('#vSub').value, base = +host.querySelector('#vBase').value;
      const c = window.Net.cidrForSubnets(base, s);
      const made = Math.pow(2, c - base), perNet = Math.max(Math.pow(2, 32 - c) - 2, 0);
      host.querySelector('#vSubOut').innerHTML =
        `<div class="result-row"><span class="k">${ar()?'البادئة الجديدة':'New prefix'}</span><span class="v">/${c}</span></div>
         <div class="result-row"><span class="k">${ar()?'بتات مُستعارة':'Borrowed bits'}</span><span class="v">${c - base}</span></div>
         <div class="result-row"><span class="k">${ar()?'شبكات ناتجة':'Subnets created'}</span><span class="v">${made}</span></div>
         <div class="result-row"><span class="k">${ar()?'مضيفون/شبكة':'Hosts / subnet'}</span><span class="v">${perNet.toLocaleString()}</span></div>`;
    }
    host.querySelector('#vHosts').addEventListener('input', hostsRun);
    ['#vSub', '#vBase'].forEach(s => host.querySelector(s).addEventListener('input', subRun));
    hostsRun(); subRun();
  }

  /* ------------------------------ Ping sim -------------------------------- */
  function ping(host) {
    host.innerHTML = `
    <div class="tool-panel">
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <input class="input mono" id="pTarget" value="8.8.8.8" style="flex:1;min-width:200px" placeholder="host or IP">
        <button class="btn btn-primary" id="pGo">${window.icon('activity',18)} Ping</button>
        <button class="btn btn-ghost" id="pClear">${window.icon('trash',16)}</button>
      </div>
      <div class="console" id="pCon" style="margin-top:14px"><span class="dim">${ar()?'اكتب هدفًا واضغط Ping…':'Enter a target and press Ping…'}</span></div>
    </div>`;
    const con = host.querySelector('#pCon');
    const line = (html) => { con.innerHTML += `<div>${html}</div>`; con.scrollTop = con.scrollHeight; };
    let running = false;
    async function go() {
      if (running) return; running = true;
      const target = host.querySelector('#pTarget').value.trim() || '8.8.8.8';
      con.innerHTML = '';
      // simulate DNS resolve
      const ip = /^\d+\.\d+\.\d+\.\d+$/.test(target) ? target : `93.184.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}`;
      line(`<span class="info">PING ${esc(target)} (${ip}) 56(84) bytes of data.</span>`);
      let sent = 0, recv = 0, times = [];
      const reachable = Math.random() > 0.12;
      for (let i = 0; i < 4; i++) {
        await wait(420);
        sent++;
        const lost = !reachable || Math.random() < 0.08;
        if (lost) line(`<span class="err">Request timeout for icmp_seq=${i + 1}</span>`);
        else { const ms = (Math.random() * 30 + 4).toFixed(1); times.push(+ms); recv++;
          line(`64 bytes from ${ip}: icmp_seq=${i + 1} ttl=${reachable ? 117 : 64} time=<span class="ok">${ms} ms</span>`); }
      }
      await wait(300);
      const loss = Math.round(((sent - recv) / sent) * 100);
      line(`<br><span class="info">--- ${esc(target)} ping statistics ---</span>`);
      line(`${sent} packets transmitted, ${recv} received, <span class="${loss?'err':'ok'}">${loss}% packet loss</span>`);
      if (times.length) {
        const min = Math.min(...times), max = Math.max(...times), avg = (times.reduce((a,b)=>a+b,0)/times.length).toFixed(1);
        line(`rtt min/avg/max = ${min}/${avg}/${max} ms`);
      }
      running = false;
    }
    host.querySelector('#pGo').addEventListener('click', go);
    host.querySelector('#pClear').addEventListener('click', () => con.innerHTML = '');
  }

  /* ---------------------------- Packet flow ------------------------------- */
  function packet(host) {
    const nodes = [
      { ico: 'monitor', lbl: ar() ? 'المضيف' : 'Host' },
      { ico: 'network', lbl: 'Switch' },
      { ico: 'route', lbl: 'Router' },
      { ico: 'cloud', lbl: ar() ? 'الإنترنت' : 'Internet' },
      { ico: 'server', lbl: ar() ? 'الخادم' : 'Server' }
    ];
    host.innerHTML = `
    <div class="tool-panel">
      <p>${ar() ? 'شاهد كيف تُغلّف الحزمة (encapsulation) وتنتقل عبر الشبكة.' : 'Watch how a packet is encapsulated and travels across the network.'}</p>
      <div class="packet-track" id="track">
        ${nodes.map(n => `<div class="pf-node"><div class="ico">${window.icon(n.ico, 24)}</div><div class="lbl">${esc(n.lbl)}</div></div>`).join('')}
        <div class="pf-packet" id="pkt"></div>
      </div>
      <div class="console" id="pfLog" style="min-height:160px"></div>
      <button class="btn btn-primary" id="pfGo" style="margin-top:12px">${window.icon('play',18)} ${ar()?'إرسال الحزمة':'Send Packet'}</button>
    </div>`;
    const track = host.querySelector('#track'), pkt = host.querySelector('#pkt'), log = host.querySelector('#pfLog');
    const steps = [
      { en: 'L7-5 Application: HTTP GET / request created', ar: 'الطبقات 7-5 التطبيق: إنشاء طلب HTTP GET' },
      { en: 'L4 Transport: TCP segment, src/dst port 80, seq numbers', ar: 'الطبقة 4 النقل: مقطع TCP، منفذ 80، أرقام تسلسل' },
      { en: 'L3 Network: IP packet, src/dst IP added, TTL=64', ar: 'الطبقة 3 الشبكة: حزمة IP، إضافة عناوين IP، TTL=64' },
      { en: 'L2 Data Link: Ethernet frame, src/dst MAC, FCS', ar: 'الطبقة 2 ربط البيانات: إطار إيثرنت، عناوين MAC، FCS' },
      { en: 'L1 Physical: bits sent as electrical signals →', ar: 'الطبقة 1 المادية: إرسال البتات كإشارات كهربائية ←' },
      { en: 'Switch forwards frame by MAC address table', ar: 'السويتش يمرر الإطار حسب جدول عناوين MAC' },
      { en: 'Router routes packet, decrements TTL, rewrites MAC', ar: 'الراوتر يوجّه الحزمة، ينقص TTL، يعيد كتابة MAC' },
      { en: 'NAT translates private IP → public IP', ar: 'NAT يترجم IP الخاص إلى IP عام' },
      { en: 'Server receives, de-encapsulates, replies 200 OK', ar: 'الخادم يستقبل، يفك التغليف، يرد 200 OK' }
    ];
    host.querySelector('#pfGo').addEventListener('click', async () => {
      log.innerHTML = ''; pkt.style.insetInlineStart = '0';
      const positions = [4, 26, 48, 72, 96];
      for (let i = 0; i < steps.length; i++) {
        log.innerHTML += `<div><span class="ok">▸</span> ${esc(pick(steps[i]))}</div>`;
        log.scrollTop = log.scrollHeight;
        const pi = Math.min(Math.floor(i / 2), positions.length - 1);
        pkt.style.insetInlineStart = positions[pi] + '%';
        await wait(650);
      }
    });
  }

  /* ----------------------------- OSI sim ---------------------------------- */
  const OSI = [
    { n: 7, c: '#7c3aed', name: { en: 'Application', ar: 'التطبيق' }, sub: 'HTTP, DNS, FTP, SMTP', pdu: 'Data',
      d: { en: 'The interface users and applications use to access network services. Browsers, email clients and DNS resolvers live here.', ar: 'الواجهة التي يستخدمها المستخدمون والتطبيقات للوصول لخدمات الشبكة. المتصفحات وبرامج البريد و DNS تعمل هنا.' } },
    { n: 6, c: '#9333ea', name: { en: 'Presentation', ar: 'العرض' }, sub: 'SSL/TLS, JPEG, ASCII', pdu: 'Data',
      d: { en: 'Translates, encrypts and compresses data so the application layer can understand it (encoding, TLS, formats).', ar: 'تترجم وتشفّر وتضغط البيانات لتفهمها طبقة التطبيق (الترميز، TLS، الصيغ).' } },
    { n: 5, c: '#2563eb', name: { en: 'Session', ar: 'الجلسة' }, sub: 'NetBIOS, RPC, sockets', pdu: 'Data',
      d: { en: 'Establishes, manages and terminates sessions/dialogs between two hosts.', ar: 'تنشئ وتدير وتنهي الجلسات/الحوارات بين مضيفين.' } },
    { n: 4, c: '#0891b2', name: { en: 'Transport', ar: 'النقل' }, sub: 'TCP, UDP, ports', pdu: 'Segment',
      d: { en: 'End-to-end delivery. TCP gives reliable, ordered delivery; UDP is fast and connectionless. Uses port numbers.', ar: 'التسليم من طرف لطرف. TCP موثوق ومرتب؛ UDP سريع وبلا اتصال. يستخدم أرقام المنافذ.' } },
    { n: 3, c: '#059669', name: { en: 'Network', ar: 'الشبكة' }, sub: 'IP, ICMP, OSPF', pdu: 'Packet',
      d: { en: 'Logical addressing (IP) and routing between different networks. Routers operate here.', ar: 'العنونة المنطقية (IP) والتوجيه بين الشبكات المختلفة. الراوترات تعمل هنا.' } },
    { n: 2, c: '#d97706', name: { en: 'Data Link', ar: 'ربط البيانات' }, sub: 'Ethernet, MAC, ARP, VLAN', pdu: 'Frame',
      d: { en: 'Node-to-node delivery on the same link using MAC addresses. Switches operate here (frames, error detection).', ar: 'التسليم من عقدة لعقدة على نفس الوصلة باستخدام عناوين MAC. السويتشات تعمل هنا (الإطارات، كشف الأخطاء).' } },
    { n: 1, c: '#dc2626', name: { en: 'Physical', ar: 'المادية' }, sub: 'Cables, RJ45, bits, fiber', pdu: 'Bits',
      d: { en: 'The physical medium: cables, connectors, voltages, radio. Transmits raw bits.', ar: 'الوسط المادي: الكابلات والموصلات والفولتية والراديو. ينقل البتات الخام.' } }
  ];
  function osi(host) {
    host.innerHTML = `
    <div class="grid" style="grid-template-columns:1fr 1fr;gap:24px;align-items:start">
      <div class="osi-stack" id="osiStack">
        ${OSI.map(l => `<div class="osi-layer" data-n="${l.n}" style="background:${l.c}">
          <span class="num">${l.n}</span>
          <div><div class="l-name">${pick(l.name)}</div><div class="l-sub">${l.sub}</div></div>
          <span class="badge" style="margin-inline-start:auto;background:rgba(255,255,255,.2);color:#fff">${l.pdu}</span>
        </div>`).join('')}
      </div>
      <div class="osi-detail" id="osiDetail"></div>
    </div>`;
    const detail = host.querySelector('#osiDetail');
    function show(n) {
      const l = OSI.find(x => x.n === n);
      host.querySelectorAll('.osi-layer').forEach(el => el.classList.toggle('active', +el.dataset.n === n));
      detail.innerHTML = `
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
          <div style="width:44px;height:44px;border-radius:12px;background:${l.c};color:#fff;display:grid;place-items:center;font-weight:900;font-size:1.4rem">${l.n}</div>
          <div><h3 style="margin:0">${pick(l.name)} Layer</h3><div style="color:var(--text-muted);font-size:var(--fs-sm)">PDU: ${l.pdu}</div></div>
        </div>
        <p>${pick(l.d)}</p>
        <div class="result-row"><span class="k">${ar()?'أمثلة':'Examples'}</span><span class="v" style="font-family:inherit">${l.sub}</span></div>`;
    }
    host.querySelectorAll('.osi-layer').forEach(el => el.addEventListener('click', () => show(+el.dataset.n)));
    show(7);
  }

  function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
})();
