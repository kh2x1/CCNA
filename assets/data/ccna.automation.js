/* ccna.automation.js — CCNA Modules: WAN Technologies + Automation & Programmability.
   Follows the schema in ccna.fundamentals.js. */
(function () {
  const D = window.NS_DATA = window.NS_DATA || {};
  D.ccna = D.ccna || { id: 'ccna', modules: [] };

  D.ccna.modules.push({
    id: 'wan-technologies',
    title: { en: 'WAN Technologies', ar: 'تقنيات الشبكات الواسعة' },
    icon: 'cloud',
    lessons: [
      {
        id: 'wan-overview',
        title: { en: 'WAN Concepts', ar: 'مفاهيم الشبكات الواسعة' },
        duration: 10, difficulty: 'intermediate',
        summary: { en: 'How wide-area networks connect sites: leased lines, MPLS, broadband, cellular and Metro Ethernet.', ar: 'كيف تربط الشبكات الواسعة المواقع: الخطوط المؤجرة، MPLS، النطاق العريض، الخلوي، و Metro Ethernet.' },
        content: {
          en: `<h2>LAN vs WAN</h2><p>A <strong>WAN</strong> connects sites across cities or countries, usually over infrastructure owned by a <strong>service provider</strong>. You rent connectivity rather than own the cabling.</p>
<h2>Common WAN options</h2><table><thead><tr><th>Type</th><th>Notes</th></tr></thead><tbody>
<tr><td>Leased line</td><td>Dedicated point-to-point circuit; reliable, costly</td></tr>
<tr><td>MPLS</td><td>Provider labels packets for fast, QoS-aware routing</td></tr>
<tr><td>Metro Ethernet</td><td>Ethernet handoff across a metro area</td></tr>
<tr><td>Broadband (DSL/cable)</td><td>Cheap Internet access, often for VPNs</td></tr>
<tr><td>Cellular (4G/5G)</td><td>Wireless WAN, good for backup/remote sites</td></tr></tbody></table>
<h2>Demarcation point</h2><p>The <strong>demarc</strong> is where the provider's responsibility ends and yours begins (often at the CPE/router).</p>
<div class="callout tip"><div class="callout-title">Internet as WAN</div><p>Many modern WANs are simply encrypted VPNs over cheap broadband — the foundation of SD-WAN.</p></div>`,
          ar: `<h2>LAN مقابل WAN</h2><p>تربط <strong>WAN</strong> المواقع عبر المدن أو الدول، غالبًا عبر بنية يملكها <strong>مزوّد الخدمة</strong>. فأنت تستأجر الاتصال بدل امتلاك الكابلات.</p>
<h2>خيارات WAN الشائعة</h2><table><thead><tr><th>النوع</th><th>ملاحظات</th></tr></thead><tbody>
<tr><td>خط مؤجر</td><td>دائرة نقطة-لنقطة مخصصة؛ موثوقة ومكلفة</td></tr>
<tr><td>MPLS</td><td>المزوّد يضع تسميات للحزم لتوجيه سريع واعٍ بـ QoS</td></tr>
<tr><td>Metro Ethernet</td><td>تسليم إيثرنت عبر منطقة حضرية</td></tr>
<tr><td>النطاق العريض (DSL/كابل)</td><td>وصول إنترنت رخيص، غالبًا للـ VPN</td></tr>
<tr><td>الخلوي (4G/5G)</td><td>WAN لاسلكي، جيد للاحتياط/المواقع البعيدة</td></tr></tbody></table>
<h2>نقطة التحديد (Demarc)</h2><p>الـ <strong>demarc</strong> هي حيث تنتهي مسؤولية المزوّد وتبدأ مسؤوليتك (غالبًا عند CPE/الراوتر).</p>
<div class="callout tip"><div class="callout-title">الإنترنت كـ WAN</div><p>كثير من شبكات WAN الحديثة هي ببساطة VPN مشفّرة عبر نطاق عريض رخيص — أساس SD-WAN.</p></div>`
        },
        keyPoints: {
          en: ['WANs connect distant sites over provider infrastructure.', 'Options: leased line, MPLS, Metro Ethernet, broadband, cellular.', 'MPLS labels packets for fast QoS-aware forwarding.', 'The demarc separates provider and customer responsibility.'],
          ar: ['WAN تربط المواقع البعيدة عبر بنية المزوّد.', 'الخيارات: خط مؤجر، MPLS، Metro Ethernet، نطاق عريض، خلوي.', 'MPLS يضع تسميات للحزم لتمرير سريع واعٍ بـ QoS.', 'الـ demarc يفصل مسؤولية المزوّد عن العميل.']
        },
        quiz: [
          { q: { en: 'Which WAN technology uses labels for forwarding?', ar: 'أي تقنية WAN تستخدم التسميات للتمرير؟' }, options: [{ en: 'DSL', ar: 'DSL' }, { en: 'MPLS', ar: 'MPLS' }, { en: 'Leased line', ar: 'خط مؤجر' }, { en: 'Cellular', ar: 'خلوي' }], answer: 1, explanation: { en: 'MPLS forwards based on labels, not full IP lookups.', ar: 'MPLS يمرّر بناءً على التسميات لا بحث IP الكامل.' } },
          { q: { en: 'The demarcation point marks…', ar: 'نقطة التحديد تحدد…' }, options: [{ en: 'The fastest link', ar: 'أسرع وصلة' }, { en: 'Where provider responsibility ends', ar: 'حيث تنتهي مسؤولية المزوّد' }, { en: 'The default gateway', ar: 'البوابة الافتراضية' }, { en: 'A VLAN boundary', ar: 'حدود VLAN' }], answer: 1, explanation: { en: 'The demarc is the provider/customer boundary.', ar: 'الـ demarc هو الحد بين المزوّد والعميل.' } }
        ],
        flashcards: [
          { front: { en: 'What is CPE?', ar: 'ما هو CPE؟' }, back: { en: 'Customer Premises Equipment (router/modem at your site).', ar: 'معدات مقر العميل (راوتر/مودم في موقعك).' } }
        ]
      },
      {
        id: 'ppp-hdlc',
        title: { en: 'Serial Encapsulations: HDLC & PPP', ar: 'تغليفات تسلسلية: HDLC و PPP' },
        duration: 9, difficulty: 'intermediate',
        summary: { en: 'Layer 2 WAN encapsulations for serial links, including PPP authentication.', ar: 'تغليفات WAN للطبقة 2 للوصلات التسلسلية، بما فيها مصادقة PPP.' },
        content: {
          en: `<h2>HDLC</h2><p><strong>HDLC</strong> is the default encapsulation on Cisco serial interfaces. Cisco's HDLC is proprietary (it adds a protocol field), so it only works Cisco-to-Cisco.</p>
<h2>PPP</h2><p><strong>PPP (Point-to-Point Protocol)</strong> is an open standard that works between any vendors and adds features HDLC lacks:</p>
<ul><li><strong>Authentication</strong> — PAP (plaintext) or <strong>CHAP</strong> (challenge/hash, preferred).</li><li><strong>Multilink</strong> — bundle several links.</li><li><strong>Error detection</strong> and compression.</li></ul>
<h2>PPPoE</h2><p><strong>PPPoE</strong> carries PPP over Ethernet — common for DSL broadband, providing authentication to the ISP.</p>
<div class="callout tip"><div class="callout-title">Use CHAP</div><p>For PPP authentication prefer CHAP — it never sends the password in clear text, using a hashed challenge instead.</p></div>`,
          ar: `<h2>HDLC</h2><p><strong>HDLC</strong> هو التغليف الافتراضي على واجهات سيسكو التسلسلية. وHDLC من سيسكو خاص (يضيف حقل بروتوكول)، فيعمل فقط سيسكو-لسيسكو.</p>
<h2>PPP</h2><p><strong>PPP (بروتوكول نقطة-لنقطة)</strong> معيار مفتوح يعمل بين أي مزوّدين ويضيف ميزات يفتقدها HDLC:</p>
<ul><li><strong>المصادقة</strong> — PAP (نص واضح) أو <strong>CHAP</strong> (تحدٍّ/تجزئة، مفضّل).</li><li><strong>Multilink</strong> — جمع عدة وصلات.</li><li><strong>كشف الأخطاء</strong> والضغط.</li></ul>
<h2>PPPoE</h2><p><strong>PPPoE</strong> يحمل PPP عبر الإيثرنت — شائع لنطاق DSL العريض، موفّرًا المصادقة لمزوّد الخدمة.</p>
<div class="callout tip"><div class="callout-title">استخدم CHAP</div><p>لمصادقة PPP فضّل CHAP — لا يرسل كلمة المرور بنص واضح أبدًا، مستخدمًا تحديًا مجزّأً بدلًا منها.</p></div>`
        },
        keyPoints: {
          en: ['HDLC is Cisco default but proprietary (Cisco-to-Cisco).', 'PPP is open standard with authentication and multilink.', 'CHAP (hashed) is preferred over PAP (plaintext).', 'PPPoE runs PPP over Ethernet for DSL.'],
          ar: ['HDLC افتراضي سيسكو لكنه خاص (سيسكو-لسيسكو).', 'PPP معيار مفتوح بمصادقة و multilink.', 'CHAP (مجزّأ) مفضّل على PAP (نص واضح).', 'PPPoE يشغّل PPP عبر الإيثرنت لـ DSL.']
        },
        commands: [
          { cmd: 'encapsulation ppp', desc: { en: 'Set PPP on a serial interface.', ar: 'تعيين PPP على واجهة تسلسلية.' } },
          { cmd: 'ppp authentication chap', desc: { en: 'Use CHAP authentication.', ar: 'استخدام مصادقة CHAP.' } }
        ],
        quiz: [
          { q: { en: 'Which PPP auth method is more secure?', ar: 'أي طريقة مصادقة PPP أكثر أمانًا؟' }, options: [{ en: 'PAP', ar: 'PAP' }, { en: 'CHAP', ar: 'CHAP' }, { en: 'Telnet', ar: 'Telnet' }, { en: 'None', ar: 'لا شيء' }], answer: 1, explanation: { en: 'CHAP uses a hashed challenge; PAP sends plaintext.', ar: 'CHAP يستخدم تحديًا مجزّأً؛ وPAP يرسل نصًا واضحًا.' } },
          { q: { en: 'Default encapsulation on Cisco serial links?', ar: 'التغليف الافتراضي على وصلات سيسكو التسلسلية؟' }, options: [{ en: 'PPP', ar: 'PPP' }, { en: 'HDLC', ar: 'HDLC' }, { en: 'Ethernet', ar: 'Ethernet' }, { en: 'Frame Relay', ar: 'Frame Relay' }], answer: 1, explanation: { en: 'Cisco serial interfaces default to (Cisco) HDLC.', ar: 'واجهات سيسكو التسلسلية افتراضيًا HDLC (سيسكو).' } }
        ],
        flashcards: [
          { front: { en: 'PPP over Ethernet =', ar: 'PPP عبر الإيثرنت =' }, back: { en: 'PPPoE (used for DSL).', ar: 'PPPoE (تُستخدم لـ DSL).' } }
        ]
      },
      {
        id: 'vpn-wan',
        title: { en: 'WAN VPNs & Tunnels', ar: 'VPN الشبكات الواسعة والأنفاق' },
        duration: 9, difficulty: 'advanced',
        summary: { en: 'GRE, IPsec site-to-site, and DMVPN for connecting sites over the Internet.', ar: 'GRE و IPsec موقع-لموقع و DMVPN لربط المواقع عبر الإنترنت.' },
        content: {
          en: `<h2>Internet-based WANs</h2><p>Instead of expensive private circuits, many organizations connect sites with <strong>VPN tunnels over the Internet</strong>.</p>
<h2>GRE tunnels</h2><p><strong>GRE (Generic Routing Encapsulation)</strong> wraps any Layer 3 protocol in a tunnel — it can carry multicast and routing protocols (which plain IPsec cannot), but it provides <strong>no encryption</strong>.</p>
<h2>IPsec</h2><p><strong>IPsec</strong> adds encryption, integrity and authentication. A common design is <strong>GRE over IPsec</strong>: GRE for flexibility, IPsec for security.</p>
<h2>DMVPN</h2><p><strong>DMVPN (Dynamic Multipoint VPN)</strong> lets spokes build on-demand tunnels directly to each other (not just hub-and-spoke), scaling to many sites with minimal config.</p>
<div class="callout tip"><div class="callout-title">Why GRE + IPsec?</div><p>IPsec alone can't carry OSPF/EIGRP (multicast). Wrap routing in GRE, then protect the GRE with IPsec.</p></div>`,
          ar: `<h2>شبكات WAN عبر الإنترنت</h2><p>بدل الدوائر الخاصة المكلفة، تربط كثير من المؤسسات المواقع بـ <strong>أنفاق VPN عبر الإنترنت</strong>.</p>
<h2>أنفاق GRE</h2><p><strong>GRE (التغليف العام للتوجيه)</strong> يغلّف أي بروتوكول طبقة 3 في نفق — يمكنه حمل البث المتعدد وبروتوكولات التوجيه (ما لا يستطيعه IPsec وحده)، لكنه <strong>بلا تشفير</strong>.</p>
<h2>IPsec</h2><p><strong>IPsec</strong> يضيف التشفير والسلامة والمصادقة. تصميم شائع هو <strong>GRE over IPsec</strong>: GRE للمرونة، و IPsec للأمن.</p>
<h2>DMVPN</h2><p><strong>DMVPN (VPN متعدد النقاط الديناميكي)</strong> يتيح للأطراف بناء أنفاق عند الطلب مباشرة لبعضها (لا hub-and-spoke فقط)، فيتوسّع لمواقع كثيرة بأقل تهيئة.</p>
<div class="callout tip"><div class="callout-title">لماذا GRE + IPsec؟</div><p>IPsec وحده لا يحمل OSPF/EIGRP (البث المتعدد). غلّف التوجيه في GRE، ثم احمِ GRE بـ IPsec.</p></div>`
        },
        keyPoints: {
          en: ['GRE tunnels carry multicast/routing but are unencrypted.', 'IPsec adds encryption, integrity and authentication.', 'GRE over IPsec = flexibility + security.', 'DMVPN scales site-to-site VPNs with dynamic spoke tunnels.'],
          ar: ['أنفاق GRE تحمل البث المتعدد/التوجيه لكنها غير مشفّرة.', 'IPsec يضيف التشفير والسلامة والمصادقة.', 'GRE over IPsec = مرونة + أمن.', 'DMVPN يوسّع VPN موقع-لموقع بأنفاق أطراف ديناميكية.']
        },
        quiz: [
          { q: { en: 'Why combine GRE with IPsec?', ar: 'لماذا دمج GRE مع IPsec؟' }, options: [{ en: 'GRE is faster', ar: 'GRE أسرع' }, { en: 'IPsec alone cannot carry multicast/routing', ar: 'IPsec وحده لا يحمل البث المتعدد/التوجيه' }, { en: 'To avoid encryption', ar: 'لتجنّب التشفير' }, { en: 'They are the same', ar: 'هما نفس الشيء' }], answer: 1, explanation: { en: 'GRE carries routing protocols; IPsec encrypts it.', ar: 'GRE يحمل بروتوكولات التوجيه؛ و IPsec يشفّره.' } },
          { q: { en: 'What does DMVPN enable?', ar: 'ماذا يتيح DMVPN؟' }, options: [{ en: 'Static hub-only links', ar: 'وصلات hub ثابتة فقط' }, { en: 'Dynamic spoke-to-spoke tunnels', ar: 'أنفاق طرف-لطرف ديناميكية' }, { en: 'Plaintext WAN', ar: 'WAN بنص واضح' }, { en: 'No routing', ar: 'بلا توجيه' }], answer: 1, explanation: { en: 'DMVPN builds on-demand spoke-to-spoke tunnels.', ar: 'DMVPN يبني أنفاق طرف-لطرف عند الطلب.' } }
        ],
        flashcards: [
          { front: { en: 'Does GRE encrypt traffic?', ar: 'هل GRE يشفّر المرور؟' }, back: { en: 'No — pair it with IPsec.', ar: 'لا — اقرنه بـ IPsec.' } }
        ]
      },
      {
        id: 'cloud-connectivity',
        title: { en: 'Cloud & Internet Connectivity', ar: 'الاتصال بالسحابة والإنترنت' },
        duration: 9, difficulty: 'intermediate',
        summary: { en: 'How enterprises connect to cloud providers, plus redundancy and SD-WAN basics.', ar: 'كيف تتصل المؤسسات بمزوّدي السحابة، مع الاحتياطية وأساسيات SD-WAN.' },
        content: {
          en: `<h2>Reaching the cloud</h2><ul><li><strong>Public Internet + VPN</strong> — cheapest, encrypted, variable performance.</li><li><strong>Private interconnect</strong> — dedicated links to a provider (e.g. AWS Direct Connect, Azure ExpressRoute) for predictable, private connectivity.</li></ul>
<h2>Redundancy</h2><p>Critical sites use <strong>dual ISPs</strong> and dual routers. Techniques include a floating static backup, BGP multihoming, or <strong>HSRP/VRRP</strong> for gateway redundancy.</p>
<h2>SD-WAN</h2><p><strong>SD-WAN</strong> uses a central controller to manage many WAN links (broadband, MPLS, LTE) as one fabric, steering apps over the best path and applying policy and encryption automatically.</p>
<div class="callout tip"><div class="callout-title">Cloud models recap</div><p>IaaS (rent VMs/network), PaaS (rent a platform), SaaS (use an app). Networking mostly cares about IaaS connectivity.</p></div>`,
          ar: `<h2>الوصول للسحابة</h2><ul><li><strong>الإنترنت العام + VPN</strong> — الأرخص، مشفّر، أداء متغيّر.</li><li><strong>اتصال خاص</strong> — وصلات مخصصة لمزوّد (مثل AWS Direct Connect، Azure ExpressRoute) لاتصال خاص ومتوقّع.</li></ul>
<h2>الاحتياطية</h2><p>المواقع الحرجة تستخدم <strong>مزوّدَي إنترنت</strong> وراوترين. تشمل التقنيات مسارًا ثابتًا عائمًا احتياطيًا، أو BGP متعدد، أو <strong>HSRP/VRRP</strong> لاحتياطية البوابة.</p>
<h2>SD-WAN</h2><p>يستخدم <strong>SD-WAN</strong> متحكمًا مركزيًا لإدارة عدة وصلات WAN (نطاق عريض، MPLS، LTE) كنسيج واحد، فيوجّه التطبيقات عبر أفضل مسار ويطبّق السياسة والتشفير تلقائيًا.</p>
<div class="callout tip"><div class="callout-title">مراجعة نماذج السحابة</div><p>IaaS (استئجار VMs/شبكة)، PaaS (استئجار منصة)، SaaS (استخدام تطبيق). الشبكات تهتم غالبًا باتصال IaaS.</p></div>`
        },
        keyPoints: {
          en: ['Cloud access = Internet/VPN or private interconnect (Direct Connect/ExpressRoute).', 'Redundancy uses dual ISPs, BGP, or HSRP/VRRP gateways.', 'SD-WAN centrally manages multiple WAN links with policy.', 'IaaS/PaaS/SaaS describe cloud service models.'],
          ar: ['الوصول للسحابة = إنترنت/VPN أو اتصال خاص (Direct Connect/ExpressRoute).', 'الاحتياطية تستخدم مزوّدَي إنترنت أو BGP أو بوابات HSRP/VRRP.', 'SD-WAN يدير عدة وصلات WAN مركزيًا بسياسة.', 'IaaS/PaaS/SaaS تصف نماذج خدمات السحابة.']
        },
        quiz: [
          { q: { en: 'What provides first-hop gateway redundancy?', ar: 'ما الذي يوفّر احتياطية بوابة القفزة الأولى؟' }, options: [{ en: 'HSRP/VRRP', ar: 'HSRP/VRRP' }, { en: 'DNS', ar: 'DNS' }, { en: 'NTP', ar: 'NTP' }, { en: 'STP', ar: 'STP' }], answer: 0, explanation: { en: 'HSRP/VRRP/GLBP provide redundant default gateways.', ar: 'HSRP/VRRP/GLBP توفّر بوابات افتراضية احتياطية.' } },
          { q: { en: 'SD-WAN is primarily managed by…', ar: 'SD-WAN يُدار أساسًا بواسطة…' }, options: [{ en: 'Each router manually', ar: 'كل راوتر يدويًا' }, { en: 'A central controller', ar: 'متحكم مركزي' }, { en: 'DNS servers', ar: 'خوادم DNS' }, { en: 'The ISP only', ar: 'المزوّد فقط' }], answer: 1, explanation: { en: 'A central controller orchestrates SD-WAN policy and paths.', ar: 'متحكم مركزي ينسّق سياسة ومسارات SD-WAN.' } }
        ],
        flashcards: [
          { front: { en: 'AWS private cloud link?', ar: 'وصلة AWS الخاصة للسحابة؟' }, back: { en: 'Direct Connect (Azure: ExpressRoute).', ar: 'Direct Connect (في Azure: ExpressRoute).' } }
        ]
      }
    ]
  });

  D.ccna.modules.push({
    id: 'automation-sdn',
    title: { en: 'Automation & Programmability', ar: 'الأتمتة والبرمجة' },
    icon: 'cpu',
    lessons: [
      {
        id: 'why-automation',
        title: { en: 'Why Network Automation', ar: 'لماذا أتمتة الشبكات' },
        duration: 9, difficulty: 'beginner',
        summary: { en: 'The shift from manual CLI to automated, controller-based, intent-driven networking.', ar: 'الانتقال من CLI اليدوي إلى الشبكات المؤتمتة القائمة على المتحكم والمدفوعة بالنية.' },
        content: {
          en: `<h2>The problem with manual config</h2><p>Configuring hundreds of devices by hand is slow, error-prone and inconsistent. <strong>Automation</strong> applies the same config reliably and instantly across the whole network.</p>
<h2>Benefits</h2><ul><li><strong>Speed</strong> — deploy changes in seconds.</li><li><strong>Consistency</strong> — no typos, identical configs.</li><li><strong>Scale</strong> — manage thousands of devices.</li><li><strong>Auditability</strong> — config-as-code in version control.</li></ul>
<h2>Traditional vs controller-based</h2><table><thead><tr><th>Traditional</th><th>Controller-based</th></tr></thead><tbody>
<tr><td>Box-by-box CLI</td><td>Central controller programs all devices</td></tr>
<tr><td>Distributed control plane</td><td>Centralized control plane</td></tr>
<tr><td>Manual changes</td><td>Intent-based, automated</td></tr></tbody></table>
<h2>Intent-Based Networking (IBN)</h2><p>You declare the desired <strong>intent</strong> ("Sales can reach the CRM"); the controller translates it into device configs and continuously verifies compliance.</p>
<div class="callout tip"><div class="callout-title">Config as code</div><p>Storing configuration in Git brings the same review, rollback and history that software developers enjoy.</p></div>`,
          ar: `<h2>مشكلة التهيئة اليدوية</h2><p>تهيئة مئات الأجهزة يدويًا بطيئة ومعرّضة للأخطاء وغير متسقة. <strong>الأتمتة</strong> تطبّق نفس التهيئة بموثوقية وفورًا عبر الشبكة كلها.</p>
<h2>الفوائد</h2><ul><li><strong>السرعة</strong> — نشر التغييرات في ثوانٍ.</li><li><strong>الاتساق</strong> — بلا أخطاء طباعية، تهيئات متطابقة.</li><li><strong>التوسّع</strong> — إدارة آلاف الأجهزة.</li><li><strong>القابلية للتدقيق</strong> — التهيئة-ككود في التحكم بالإصدارات.</li></ul>
<h2>تقليدي مقابل قائم على المتحكم</h2><table><thead><tr><th>تقليدي</th><th>قائم على المتحكم</th></tr></thead><tbody>
<tr><td>CLI جهازًا جهازًا</td><td>متحكم مركزي يبرمج كل الأجهزة</td></tr>
<tr><td>مستوى تحكم موزّع</td><td>مستوى تحكم مركزي</td></tr>
<tr><td>تغييرات يدوية</td><td>قائم على النية، مؤتمت</td></tr></tbody></table>
<h2>الشبكات القائمة على النية (IBN)</h2><p>تعلن عن <strong>النية</strong> المطلوبة ("المبيعات تصل لنظام CRM")؛ ويترجمها المتحكم إلى تهيئات أجهزة ويتحقق من الامتثال باستمرار.</p>
<div class="callout tip"><div class="callout-title">التهيئة ككود</div><p>تخزين التهيئة في Git يجلب نفس المراجعة والتراجع والتاريخ التي يتمتع بها المطوّرون.</p></div>`
        },
        keyPoints: {
          en: ['Automation brings speed, consistency, scale and auditability.', 'Controller-based networking centralizes the control plane.', 'IBN translates business intent into device config.', 'Config-as-code uses version control like software.'],
          ar: ['الأتمتة تجلب السرعة والاتساق والتوسّع والتدقيق.', 'الشبكات القائمة على المتحكم تركّز مستوى التحكم.', 'IBN يترجم نية العمل إلى تهيئة أجهزة.', 'التهيئة-ككود تستخدم التحكم بالإصدارات كالبرمجيات.']
        },
        quiz: [
          { q: { en: 'A key benefit of network automation is…', ar: 'فائدة رئيسية لأتمتة الشبكات هي…' }, options: [{ en: 'More typos', ar: 'أخطاء طباعية أكثر' }, { en: 'Consistency at scale', ar: 'الاتساق على نطاق واسع' }, { en: 'Slower changes', ar: 'تغييرات أبطأ' }, { en: 'Manual box-by-box edits', ar: 'تعديلات يدوية جهازًا جهازًا' }], answer: 1, explanation: { en: 'Automation gives consistent, fast, scalable changes.', ar: 'الأتمتة تعطي تغييرات متسقة وسريعة وقابلة للتوسّع.' } },
          { q: { en: 'IBN stands for…', ar: 'IBN تعني…' }, options: [{ en: 'Internet Backbone Network', ar: 'Internet Backbone Network' }, { en: 'Intent-Based Networking', ar: 'Intent-Based Networking' }, { en: 'Internal BGP Node', ar: 'Internal BGP Node' }, { en: 'IP Broadcast Name', ar: 'IP Broadcast Name' }], answer: 1, explanation: { en: 'Intent-Based Networking translates intent to config.', ar: 'Intent-Based Networking يترجم النية إلى تهيئة.' } }
        ],
        flashcards: [
          { front: { en: 'Config-as-code is usually stored in…', ar: 'التهيئة-ككود تُخزّن عادة في…' }, back: { en: 'Version control (Git).', ar: 'التحكم بالإصدارات (Git).' } }
        ]
      },
      {
        id: 'sdn-controllers',
        title: { en: 'SDN & Controller-Based Networking', ar: 'SDN والشبكات القائمة على المتحكم' },
        duration: 10, difficulty: 'intermediate',
        summary: { en: 'Separating the control and data planes, and the role of northbound/southbound APIs.', ar: 'فصل مستويي التحكم والبيانات، ودور واجهات API الشمالية/الجنوبية.' },
        content: {
          en: `<h2>Planes of operation</h2><table><thead><tr><th>Plane</th><th>Job</th></tr></thead><tbody>
<tr><td>Data (forwarding)</td><td>Actually moves packets</td></tr>
<tr><td>Control</td><td>Decides how packets should be moved (routing)</td></tr>
<tr><td>Management</td><td>Configures/monitors the device</td></tr></tbody></table>
<h2>What SDN does</h2><p><strong>SDN (Software-Defined Networking)</strong> centralizes the control plane into a <strong>controller</strong>. Devices keep forwarding (data plane) but get their instructions from the controller.</p>
<h2>APIs</h2><ul><li><strong>Northbound API</strong> — between apps/scripts and the controller (usually REST). "Tell the controller what you want."</li><li><strong>Southbound API</strong> — between the controller and devices (NETCONF, OpenFlow). "Program the devices."</li></ul>
<p>Cisco's enterprise controller is <strong>Cisco DNA Center / Catalyst Center</strong>; SD-Access and ACI are SDN solutions.</p>
<div class="callout tip"><div class="callout-title">Direction memory aid</div><p>North = up to the apps/admins; South = down to the network devices.</p></div>`,
          ar: `<h2>مستويات التشغيل</h2><table><thead><tr><th>المستوى</th><th>المهمة</th></tr></thead><tbody>
<tr><td>البيانات (التمرير)</td><td>ينقل الحزم فعليًا</td></tr>
<tr><td>التحكم</td><td>يقرر كيف تُنقل الحزم (التوجيه)</td></tr>
<tr><td>الإدارة</td><td>يهيّئ/يراقب الجهاز</td></tr></tbody></table>
<h2>ماذا يفعل SDN</h2><p><strong>SDN (الشبكات المعرّفة بالبرمجيات)</strong> يركّز مستوى التحكم في <strong>متحكم</strong>. تواصل الأجهزة التمرير (مستوى البيانات) لكنها تتلقى تعليماتها من المتحكم.</p>
<h2>واجهات API</h2><ul><li><strong>API الشمالية</strong> — بين التطبيقات/السكربتات والمتحكم (غالبًا REST). "أخبر المتحكم بما تريد."</li><li><strong>API الجنوبية</strong> — بين المتحكم والأجهزة (NETCONF، OpenFlow). "برمج الأجهزة."</li></ul>
<p>متحكم سيسكو المؤسسي هو <strong>Cisco DNA Center / Catalyst Center</strong>؛ و SD-Access و ACI حلول SDN.</p>
<div class="callout tip"><div class="callout-title">مساعدة لتذكّر الاتجاه</div><p>الشمال = للأعلى نحو التطبيقات/المسؤولين؛ الجنوب = للأسفل نحو أجهزة الشبكة.</p></div>`
        },
        keyPoints: {
          en: ['Data plane forwards; control plane decides; management configures.', 'SDN centralizes the control plane in a controller.', 'Northbound API = apps↔controller (REST).', 'Southbound API = controller↔devices (NETCONF/OpenFlow).'],
          ar: ['مستوى البيانات يمرّر؛ التحكم يقرر؛ الإدارة تهيّئ.', 'SDN يركّز مستوى التحكم في متحكم.', 'API الشمالية = التطبيقات↔المتحكم (REST).', 'API الجنوبية = المتحكم↔الأجهزة (NETCONF/OpenFlow).']
        },
        quiz: [
          { q: { en: 'A northbound API connects…', ar: 'API الشمالية تربط…' }, options: [{ en: 'Controller to devices', ar: 'المتحكم بالأجهزة' }, { en: 'Apps/scripts to the controller', ar: 'التطبيقات/السكربتات بالمتحكم' }, { en: 'Two routers', ar: 'راوترين' }, { en: 'Switch to PC', ar: 'سويتش بحاسوب' }], answer: 1, explanation: { en: 'Northbound = apps to controller (often REST).', ar: 'الشمالية = التطبيقات للمتحكم (غالبًا REST).' } },
          { q: { en: 'Which plane actually forwards packets?', ar: 'أي مستوى يمرّر الحزم فعليًا؟' }, options: [{ en: 'Control', ar: 'التحكم' }, { en: 'Management', ar: 'الإدارة' }, { en: 'Data', ar: 'البيانات' }, { en: 'Application', ar: 'التطبيق' }], answer: 2, explanation: { en: 'The data (forwarding) plane moves packets.', ar: 'مستوى البيانات (التمرير) ينقل الحزم.' } }
        ],
        flashcards: [
          { front: { en: 'Cisco enterprise SDN controller?', ar: 'متحكم SDN المؤسسي من سيسكو؟' }, back: { en: 'Cisco DNA / Catalyst Center.', ar: 'Cisco DNA / Catalyst Center.' } }
        ]
      },
      {
        id: 'rest-apis',
        title: { en: 'REST APIs', ar: 'واجهات REST API' },
        duration: 10, difficulty: 'intermediate',
        summary: { en: 'How REST APIs use HTTP verbs and status codes to read and change network state programmatically.', ar: 'كيف تستخدم REST APIs أفعال HTTP ورموز الحالة لقراءة وتغيير حالة الشبكة برمجيًا.' },
        content: {
          en: `<h2>What is a REST API?</h2><p>A <strong>REST API</strong> lets programs talk to a controller/device over HTTP(S). Resources are URLs; you act on them with HTTP verbs and exchange data (usually JSON).</p>
<h2>HTTP verbs ↔ CRUD</h2><table><thead><tr><th>Verb</th><th>Action</th></tr></thead><tbody>
<tr><td>GET</td><td>Read</td></tr><tr><td>POST</td><td>Create</td></tr><tr><td>PUT/PATCH</td><td>Update</td></tr><tr><td>DELETE</td><td>Delete</td></tr></tbody></table>
<h2>Status codes</h2><ul><li><strong>2xx</strong> success (200 OK, 201 Created)</li><li><strong>4xx</strong> client error (401 Unauthorized, 404 Not Found)</li><li><strong>5xx</strong> server error</li></ul>
<h2>Authentication</h2><p>REST APIs commonly use a <strong>token</strong> (you POST credentials, get a token, then send it in a header) or an API key.</p>
<div class="callout tip"><div class="callout-title">Stateless</div><p>REST is stateless — every request carries everything needed (including auth), so servers don't track sessions.</p></div>`,
          ar: `<h2>ما هي REST API؟</h2><p>تتيح <strong>REST API</strong> للبرامج التحدث لمتحكم/جهاز عبر HTTP(S). الموارد عناوين URL؛ تتعامل معها بأفعال HTTP وتتبادل بيانات (غالبًا JSON).</p>
<h2>أفعال HTTP ↔ CRUD</h2><table><thead><tr><th>الفعل</th><th>الإجراء</th></tr></thead><tbody>
<tr><td>GET</td><td>قراءة</td></tr><tr><td>POST</td><td>إنشاء</td></tr><tr><td>PUT/PATCH</td><td>تحديث</td></tr><tr><td>DELETE</td><td>حذف</td></tr></tbody></table>
<h2>رموز الحالة</h2><ul><li><strong>2xx</strong> نجاح (200 OK، 201 Created)</li><li><strong>4xx</strong> خطأ العميل (401 Unauthorized، 404 Not Found)</li><li><strong>5xx</strong> خطأ الخادم</li></ul>
<h2>المصادقة</h2><p>تستخدم REST APIs عادة <strong>رمزًا (token)</strong> (ترسل البيانات بـ POST، تحصل على رمز، ثم ترسله في ترويسة) أو مفتاح API.</p>
<div class="callout tip"><div class="callout-title">عديمة الحالة</div><p>REST عديمة الحالة — كل طلب يحمل كل ما يلزم (بما فيه المصادقة)، فلا تتتبّع الخوادم الجلسات.</p></div>`
        },
        keyPoints: {
          en: ['REST APIs use HTTP verbs over URLs, exchanging JSON.', 'GET/POST/PUT/DELETE map to Read/Create/Update/Delete.', '2xx=success, 4xx=client error, 5xx=server error.', 'REST is stateless; auth uses tokens or API keys.'],
          ar: ['REST APIs تستخدم أفعال HTTP على عناوين URL، وتتبادل JSON.', 'GET/POST/PUT/DELETE تقابل قراءة/إنشاء/تحديث/حذف.', '2xx=نجاح، 4xx=خطأ العميل، 5xx=خطأ الخادم.', 'REST عديمة الحالة؛ المصادقة بالرموز أو مفاتيح API.']
        },
        examples: [
          { title: { en: 'A REST call and JSON response', ar: 'نداء REST واستجابة JSON' }, code: 'GET /api/v1/interfaces/GigabitEthernet1  HTTP/1.1\nAuthorization: Bearer <token>\n\nHTTP/1.1 200 OK\n{\n  "name": "GigabitEthernet1",\n  "enabled": true,\n  "ipv4": "192.168.1.1",\n  "mask": "255.255.255.0"\n}' }
        ],
        quiz: [
          { q: { en: 'Which HTTP verb reads data without changing it?', ar: 'أي فعل HTTP يقرأ البيانات دون تغييرها؟' }, options: [{ en: 'POST', ar: 'POST' }, { en: 'GET', ar: 'GET' }, { en: 'DELETE', ar: 'DELETE' }, { en: 'PUT', ar: 'PUT' }], answer: 1, explanation: { en: 'GET retrieves (reads) a resource.', ar: 'GET يجلب (يقرأ) موردًا.' } },
          { q: { en: 'HTTP 401 means…', ar: 'HTTP 401 تعني…' }, options: [{ en: 'Success', ar: 'نجاح' }, { en: 'Unauthorized', ar: 'غير مصرّح' }, { en: 'Not Found', ar: 'غير موجود' }, { en: 'Server error', ar: 'خطأ الخادم' }], answer: 1, explanation: { en: '401 = Unauthorized (auth required/failed).', ar: '401 = غير مصرّح (المصادقة مطلوبة/فشلت).' } }
        ],
        flashcards: [
          { front: { en: 'HTTP 200 vs 404?', ar: 'HTTP 200 مقابل 404؟' }, back: { en: '200 = OK (success); 404 = Not Found.', ar: '200 = نجاح؛ 404 = غير موجود.' } }
        ]
      },
      {
        id: 'data-formats',
        title: { en: 'Data Formats: JSON, XML, YAML', ar: 'صيغ البيانات: JSON و XML و YAML' },
        duration: 9, difficulty: 'beginner',
        summary: { en: 'The structured text formats automation tools use to exchange and store data.', ar: 'الصيغ النصية المنظّمة التي تستخدمها أدوات الأتمتة لتبادل وتخزين البيانات.' },
        content: {
          en: `<h2>Why structured data?</h2><p>Automation needs machine-readable data. The three you must know are <strong>JSON</strong>, <strong>XML</strong> and <strong>YAML</strong>.</p>
<h2>JSON</h2><p>The most common API format. Uses key/value pairs, objects <code>{}</code> and arrays <code>[]</code>. Lightweight and easy to parse.</p>
<h2>XML</h2><p>Tag-based (like HTML). Verbose but powerful; used by NETCONF.</p>
<h2>YAML</h2><p>Human-friendly, indentation-based (no brackets). Used by Ansible playbooks and config files.</p>
<table><thead><tr><th>Format</th><th>Style</th><th>Common use</th></tr></thead><tbody>
<tr><td>JSON</td><td>{ } [ ]</td><td>REST APIs</td></tr>
<tr><td>XML</td><td>&lt;tags&gt;</td><td>NETCONF</td></tr>
<tr><td>YAML</td><td>indentation</td><td>Ansible</td></tr></tbody></table>
<div class="callout tip"><div class="callout-title">All represent the same data</div><p>A device interface can be described in JSON, XML or YAML — same information, different syntax.</p></div>`,
          ar: `<h2>لماذا البيانات المنظّمة؟</h2><p>الأتمتة تحتاج بيانات مقروءة آليًا. الصيغ الثلاث التي يجب معرفتها: <strong>JSON</strong> و<strong>XML</strong> و<strong>YAML</strong>.</p>
<h2>JSON</h2><p>أشهر صيغة API. تستخدم أزواج مفتاح/قيمة، وكائنات <code>{}</code> ومصفوفات <code>[]</code>. خفيفة وسهلة التحليل.</p>
<h2>XML</h2><p>قائمة على الوسوم (مثل HTML). مطوّلة لكنها قوية؛ يستخدمها NETCONF.</p>
<h2>YAML</h2><p>ودودة للبشر، قائمة على الإزاحة (بلا أقواس). تستخدمها playbooks في Ansible وملفات التهيئة.</p>
<table><thead><tr><th>الصيغة</th><th>الأسلوب</th><th>الاستخدام الشائع</th></tr></thead><tbody>
<tr><td>JSON</td><td>{ } [ ]</td><td>REST APIs</td></tr>
<tr><td>XML</td><td>&lt;وسوم&gt;</td><td>NETCONF</td></tr>
<tr><td>YAML</td><td>الإزاحة</td><td>Ansible</td></tr></tbody></table>
<div class="callout tip"><div class="callout-title">كلها تمثّل نفس البيانات</div><p>يمكن وصف واجهة جهاز بـ JSON أو XML أو YAML — نفس المعلومات بصياغة مختلفة.</p></div>`
        },
        keyPoints: {
          en: ['JSON: {} and [] — the common REST format.', 'XML: tag-based — used by NETCONF.', 'YAML: indentation-based — used by Ansible.', 'All three are human-readable structured data.'],
          ar: ['JSON: {} و[] — صيغة REST الشائعة.', 'XML: قائمة على الوسوم — يستخدمها NETCONF.', 'YAML: قائمة على الإزاحة — تستخدمها Ansible.', 'الثلاث بيانات منظّمة مقروءة للبشر.']
        },
        examples: [
          { title: { en: 'Same data in JSON and YAML', ar: 'نفس البيانات في JSON و YAML' }, code: 'JSON:\n{ "interface": "Gi1", "enabled": true, "vlan": 10 }\n\nYAML:\ninterface: Gi1\nenabled: true\nvlan: 10' }
        ],
        quiz: [
          { q: { en: 'Which format is indentation-based and used by Ansible?', ar: 'أي صيغة قائمة على الإزاحة وتستخدمها Ansible؟' }, options: [{ en: 'JSON', ar: 'JSON' }, { en: 'XML', ar: 'XML' }, { en: 'YAML', ar: 'YAML' }, { en: 'CSV', ar: 'CSV' }], answer: 2, explanation: { en: 'YAML uses indentation and is common in Ansible.', ar: 'YAML تستخدم الإزاحة وشائعة في Ansible.' } },
          { q: { en: 'Which format is most common for REST APIs?', ar: 'أي صيغة أكثر شيوعًا لـ REST APIs؟' }, options: [{ en: 'JSON', ar: 'JSON' }, { en: 'YAML', ar: 'YAML' }, { en: 'XML', ar: 'XML' }, { en: 'INI', ar: 'INI' }], answer: 0, explanation: { en: 'JSON is the dominant REST API data format.', ar: 'JSON هي صيغة بيانات REST API السائدة.' } }
        ],
        flashcards: [
          { front: { en: 'JSON object vs array symbols?', ar: 'رموز كائن ومصفوفة JSON؟' }, back: { en: 'Object = {}, Array = [].', ar: 'كائن = {}، مصفوفة = [].' } }
        ]
      },
      {
        id: 'config-tools',
        title: { en: 'Configuration Management Tools', ar: 'أدوات إدارة التهيئة' },
        duration: 9, difficulty: 'intermediate',
        summary: { en: 'Ansible, Puppet and Chef — agent vs agentless, push vs pull, and where Ansible fits networking.', ar: 'Ansible و Puppet و Chef — بوكيل مقابل بلا وكيل، دفع مقابل سحب، وأين تناسب Ansible الشبكات.' },
        content: {
          en: `<h2>The big three</h2><table><thead><tr><th>Tool</th><th>Model</th><th>Language</th></tr></thead><tbody>
<tr><td>Ansible</td><td>Agentless, push (SSH)</td><td>YAML playbooks</td></tr>
<tr><td>Puppet</td><td>Agent, pull</td><td>Puppet DSL (Ruby)</td></tr>
<tr><td>Chef</td><td>Agent, pull</td><td>Ruby recipes</td></tr></tbody></table>
<h2>Agent vs agentless</h2><p><strong>Agent-based</strong> tools (Puppet, Chef) need software installed on each device. <strong>Agentless</strong> tools (Ansible) connect over SSH/API — ideal for network gear where you can't install agents.</p>
<h2>Push vs pull</h2><p><strong>Push</strong> (Ansible): the control node sends config to devices on demand. <strong>Pull</strong> (Puppet/Chef): agents periodically fetch and apply their config from a server.</p>
<h2>Why Ansible for networks</h2><p>Agentless + simple YAML makes <strong>Ansible</strong> the most popular for network automation. A <strong>playbook</strong> lists tasks; <strong>idempotency</strong> means running it twice yields the same result.</p>
<div class="callout tip"><div class="callout-title">Idempotency</div><p>Good automation is idempotent: applying the same config repeatedly doesn't cause repeated changes — only the needed ones.</p></div>`,
          ar: `<h2>الثلاثة الكبار</h2><table><thead><tr><th>الأداة</th><th>النموذج</th><th>اللغة</th></tr></thead><tbody>
<tr><td>Ansible</td><td>بلا وكيل، دفع (SSH)</td><td>playbooks بـ YAML</td></tr>
<tr><td>Puppet</td><td>بوكيل، سحب</td><td>Puppet DSL (Ruby)</td></tr>
<tr><td>Chef</td><td>بوكيل، سحب</td><td>recipes بـ Ruby</td></tr></tbody></table>
<h2>بوكيل مقابل بلا وكيل</h2><p>الأدوات <strong>بوكيل</strong> (Puppet، Chef) تحتاج برنامجًا مثبّتًا على كل جهاز. والأدوات <strong>بلا وكيل</strong> (Ansible) تتصل عبر SSH/API — مثالية لأجهزة الشبكة التي لا يمكن تثبيت وكلاء عليها.</p>
<h2>دفع مقابل سحب</h2><p><strong>الدفع</strong> (Ansible): العقدة المتحكمة ترسل التهيئة للأجهزة عند الطلب. <strong>السحب</strong> (Puppet/Chef): الوكلاء يجلبون ويطبّقون تهيئتهم دوريًا من خادم.</p>
<h2>لماذا Ansible للشبكات</h2><p>بلا وكيل + YAML البسيطة تجعل <strong>Ansible</strong> الأكثر شيوعًا لأتمتة الشبكات. الـ <strong>playbook</strong> يسرد المهام؛ و<strong>الـ idempotency</strong> تعني أن تشغيله مرتين يعطي نفس النتيجة.</p>
<div class="callout tip"><div class="callout-title">الـ Idempotency</div><p>الأتمتة الجيدة idempotent: تطبيق نفس التهيئة مرارًا لا يسبب تغييرات متكررة — فقط اللازمة.</p></div>`
        },
        keyPoints: {
          en: ['Ansible = agentless, push, YAML — popular for networks.', 'Puppet/Chef = agent-based, pull model.', 'Agentless connects over SSH/API (no install needed).', 'Idempotency: re-running yields the same end state.'],
          ar: ['Ansible = بلا وكيل، دفع، YAML — شائعة للشبكات.', 'Puppet/Chef = بوكيل، نموذج سحب.', 'بلا وكيل تتصل عبر SSH/API (بلا تثبيت).', 'الـ idempotency: إعادة التشغيل تعطي نفس الحالة النهائية.']
        },
        examples: [
          { title: { en: 'A tiny Ansible playbook', ar: 'playbook صغير في Ansible' }, code: '- name: Configure VLAN\n  hosts: switches\n  tasks:\n    - name: Create VLAN 10\n      ios_vlans:\n        config:\n          - name: SALES\n            vlan_id: 10\n        state: merged' }
        ],
        quiz: [
          { q: { en: 'Which tool is agentless and push-based?', ar: 'أي أداة بلا وكيل وقائمة على الدفع؟' }, options: [{ en: 'Puppet', ar: 'Puppet' }, { en: 'Chef', ar: 'Chef' }, { en: 'Ansible', ar: 'Ansible' }, { en: 'SaltStack agents', ar: 'وكلاء SaltStack' }], answer: 2, explanation: { en: 'Ansible is agentless and pushes over SSH.', ar: 'Ansible بلا وكيل وتدفع عبر SSH.' } },
          { q: { en: 'Idempotency means…', ar: 'الـ idempotency تعني…' }, options: [{ en: 'Each run changes more', ar: 'كل تشغيل يغيّر أكثر' }, { en: 'Re-running gives the same result', ar: 'إعادة التشغيل تعطي نفس النتيجة' }, { en: 'Random results', ar: 'نتائج عشوائية' }, { en: 'Faster CPU', ar: 'معالج أسرع' }], answer: 1, explanation: { en: 'Idempotent runs converge to the same state.', ar: 'التشغيل الـ idempotent يتقارب لنفس الحالة.' } }
        ],
        flashcards: [
          { front: { en: 'Ansible config files are written in?', ar: 'ملفات تهيئة Ansible تُكتب بـ؟' }, back: { en: 'YAML (playbooks).', ar: 'YAML (playbooks).' } }
        ]
      }
    ]
  });
})();
