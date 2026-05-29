/* ============================================================================
   ccna.fundamentals.js — CCNA Module 1: Networking Fundamentals.
   This file is the SCHEMA REFERENCE for all lesson content files.

   Registration pattern (every CCNA content file uses this):
     window.NS_DATA.ccna.modules.push({ ...module... })

   LESSON SCHEMA:
   {
     id: 'kebab-case-unique',                 // unique across the whole app
     title:   { en, ar },
     duration: 10,                            // minutes (number)
     difficulty: 'beginner'|'intermediate'|'advanced',
     summary: { en, ar },                     // 1-2 sentences
     content: { en: '<h2>..</h2><p>..</p>', ar: '...' },   // rich HTML body
     keyPoints: { en: [..], ar: [..] },       // bullet takeaways
     examples: [ { title:{en,ar}, body:{en,ar}?, code:'plain text'? } ],
     commands: [ { cmd:'ios command', desc:{en,ar} } ],
     lab: { title:{en,ar}, objective:{en,ar}, topology:'ascii', steps:[{en,ar}], verify:{en,ar} },
     quiz: [ { q:{en,ar}, options:[{en,ar},..], answer: <index>, explanation:{en,ar} } ],
     flashcards: [ { front:{en,ar}, back:{en,ar} } ]
   }
   Allowed HTML in content: h2,h3,p,ul,ol,li,strong,em,code,table/thead/tbody/tr/th/td,
   and div.callout (with .tip/.warn/.danger) + div.callout-title.
   ========================================================================== */
(function () {
  const D = window.NS_DATA = window.NS_DATA || {};
  D.ccna = D.ccna || { id: 'ccna', modules: [] };

  D.ccna.modules.push({
    id: 'fundamentals',
    title: { en: 'Networking Fundamentals', ar: 'أساسيات الشبكات' },
    icon: 'network',
    lessons: [
      {
        id: 'what-is-network',
        title: { en: 'What Is a Computer Network?', ar: 'ما هي شبكة الحاسوب؟' },
        duration: 8, difficulty: 'beginner',
        summary: { en: 'Understand what a network is, why we build them, and the basic vocabulary used throughout the course.', ar: 'افهم ما هي الشبكة ولماذا نبنيها، والمصطلحات الأساسية المستخدمة طوال الدورة.' },
        content: {
          en: `<h2>Definition</h2><p>A <strong>computer network</strong> is two or more devices connected so they can share data and resources — files, printers, an Internet connection, applications. The smallest network is two PCs joined by a cable; the largest is the global Internet.</p>
<h2>Why networks exist</h2><ul><li><strong>Resource sharing</strong> — one printer or server for many users.</li><li><strong>Communication</strong> — email, messaging, voice and video.</li><li><strong>Centralized data</strong> — store and back up information in one place.</li><li><strong>Scalability</strong> — add users and services without rebuilding everything.</li></ul>
<h2>Key building blocks</h2><p>Every network combines four things:</p><ul><li><strong>Devices (nodes/hosts)</strong>: PCs, phones, servers, printers.</li><li><strong>Media</strong>: copper cables, fiber, or radio (Wi-Fi).</li><li><strong>Network devices</strong>: switches and routers that move data.</li><li><strong>Protocols</strong>: agreed rules (like TCP/IP) so devices understand each other.</li></ul>
<h2>Network sizes</h2><table><thead><tr><th>Type</th><th>Scope</th><th>Example</th></tr></thead><tbody>
<tr><td>PAN</td><td>Personal (a few meters)</td><td>Bluetooth headset</td></tr>
<tr><td>LAN</td><td>Building / office</td><td>Office Ethernet + Wi-Fi</td></tr>
<tr><td>MAN</td><td>City</td><td>City-wide campus links</td></tr>
<tr><td>WAN</td><td>Country / global</td><td>The Internet</td></tr></tbody></table>
<div class="callout tip"><div class="callout-title">Tip</div><p>Think of a network like a postal system: addresses (IP), the post office that sorts mail (router), and the rules for writing an envelope (protocols).</p></div>`,
          ar: `<h2>التعريف</h2><p><strong>شبكة الحاسوب</strong> هي جهازان أو أكثر متصلان لمشاركة البيانات والموارد — الملفات والطابعات واتصال الإنترنت والتطبيقات. أصغر شبكة هي حاسوبان موصولان بكابل؛ وأكبرها هو الإنترنت العالمي.</p>
<h2>لماذا توجد الشبكات</h2><ul><li><strong>مشاركة الموارد</strong> — طابعة أو خادم واحد لعدة مستخدمين.</li><li><strong>التواصل</strong> — البريد والرسائل والصوت والفيديو.</li><li><strong>مركزية البيانات</strong> — تخزين المعلومات ونسخها احتياطيًا في مكان واحد.</li><li><strong>قابلية التوسّع</strong> — إضافة مستخدمين وخدمات دون إعادة بناء كل شيء.</li></ul>
<h2>اللبنات الأساسية</h2><p>كل شبكة تجمع أربعة أشياء:</p><ul><li><strong>الأجهزة (العقد/المضيفون)</strong>: حواسيب، هواتف، خوادم، طابعات.</li><li><strong>الوسائط</strong>: كابلات نحاسية أو ألياف أو راديو (واي فاي).</li><li><strong>أجهزة الشبكة</strong>: السويتشات والراوترات التي تنقل البيانات.</li><li><strong>البروتوكولات</strong>: قواعد متفق عليها (مثل TCP/IP) لتتفاهم الأجهزة.</li></ul>
<h2>أحجام الشبكات</h2><table><thead><tr><th>النوع</th><th>النطاق</th><th>مثال</th></tr></thead><tbody>
<tr><td>PAN</td><td>شخصية (أمتار قليلة)</td><td>سماعة بلوتوث</td></tr>
<tr><td>LAN</td><td>مبنى / مكتب</td><td>شبكة مكتب إيثرنت + واي فاي</td></tr>
<tr><td>MAN</td><td>مدينة</td><td>روابط على مستوى المدينة</td></tr>
<tr><td>WAN</td><td>دولة / عالمي</td><td>الإنترنت</td></tr></tbody></table>
<div class="callout tip"><div class="callout-title">نصيحة</div><p>تخيّل الشبكة كنظام بريد: العناوين (IP)، ومكتب البريد الذي يفرز الرسائل (الراوتر)، وقواعد كتابة الظرف (البروتوكولات).</p></div>`
        },
        keyPoints: {
          en: ['A network connects devices to share data and resources.', 'Networks = devices + media + network devices + protocols.', 'Sizes scale from PAN to LAN, MAN and WAN (the Internet).', 'Protocols are the common language that makes it all work.'],
          ar: ['الشبكة تربط الأجهزة لمشاركة البيانات والموارد.', 'الشبكة = أجهزة + وسائط + أجهزة شبكة + بروتوكولات.', 'تتدرج الأحجام من PAN إلى LAN و MAN و WAN (الإنترنت).', 'البروتوكولات هي اللغة المشتركة التي تجعل كل شيء يعمل.']
        },
        quiz: [
          { q: { en: 'Which network type best describes the Internet?', ar: 'أي نوع شبكة يصف الإنترنت بشكل أفضل؟' },
            options: [{ en: 'PAN', ar: 'PAN' }, { en: 'LAN', ar: 'LAN' }, { en: 'WAN', ar: 'WAN' }, { en: 'MAN', ar: 'MAN' }],
            answer: 2, explanation: { en: 'The Internet spans the globe, making it a Wide Area Network (WAN).', ar: 'يمتد الإنترنت حول العالم، مما يجعله شبكة واسعة (WAN).' } },
          { q: { en: 'Which is NOT one of the four basic network building blocks?', ar: 'أي مما يلي ليس من اللبنات الأربع الأساسية للشبكة؟' },
            options: [{ en: 'Protocols', ar: 'البروتوكولات' }, { en: 'Media', ar: 'الوسائط' }, { en: 'Spreadsheets', ar: 'جداول البيانات' }, { en: 'Devices', ar: 'الأجهزة' }],
            answer: 2, explanation: { en: 'The four blocks are devices, media, network devices and protocols.', ar: 'اللبنات الأربع هي: الأجهزة والوسائط وأجهزة الشبكة والبروتوكولات.' } },
          { q: { en: 'A network limited to a single office building is a…', ar: 'الشبكة المحصورة في مبنى مكتب واحد هي…' },
            options: [{ en: 'WAN', ar: 'WAN' }, { en: 'LAN', ar: 'LAN' }, { en: 'PAN', ar: 'PAN' }, { en: 'VPN', ar: 'VPN' }],
            answer: 1, explanation: { en: 'A Local Area Network (LAN) covers a limited area such as one building.', ar: 'الشبكة المحلية (LAN) تغطي منطقة محدودة مثل مبنى واحد.' } }
        ],
        flashcards: [
          { front: { en: 'What is a computer network?', ar: 'ما شبكة الحاسوب؟' }, back: { en: 'Two or more connected devices that share data and resources.', ar: 'جهازان أو أكثر متصلان لمشاركة البيانات والموارد.' } },
          { front: { en: 'LAN vs WAN?', ar: 'الفرق بين LAN و WAN؟' }, back: { en: 'LAN = local (one site). WAN = wide area across cities/countries.', ar: 'LAN محلية (موقع واحد). WAN واسعة عبر المدن/الدول.' } },
          { front: { en: 'What is a protocol?', ar: 'ما البروتوكول؟' }, back: { en: 'An agreed set of rules that lets devices communicate.', ar: 'مجموعة قواعد متفق عليها تتيح للأجهزة التواصل.' } }
        ]
      },

      {
        id: 'network-components',
        title: { en: 'Network Components & Devices', ar: 'مكونات وأجهزة الشبكة' },
        duration: 10, difficulty: 'beginner',
        summary: { en: 'Learn the role of routers, switches, access points, firewalls, and endpoints — and how they differ.', ar: 'تعرّف على دور الراوترات والسويتشات ونقاط الوصول والجدران النارية والأجهزة الطرفية، وكيف تختلف.' },
        content: {
          en: `<h2>Endpoints (Hosts)</h2><p>Any device that originates or consumes data: PCs, laptops, phones, servers, printers, IP cameras and IoT sensors. Each host needs an IP address to communicate.</p>
<h2>Switch (Layer 2)</h2><p>A <strong>switch</strong> connects devices within the same LAN. It learns the <strong>MAC address</strong> of every device and forwards frames only to the correct port — efficient and collision-free. Most network ports in an office connect to switches.</p>
<h2>Router (Layer 3)</h2><p>A <strong>router</strong> connects <em>different</em> networks together (for example your LAN to the Internet) and chooses the best path using IP addresses and a routing table. Routers also provide services such as NAT and DHCP.</p>
<h2>Wireless Access Point (AP)</h2><p>An <strong>AP</strong> bridges Wi-Fi clients onto the wired LAN. In enterprises, APs are often managed centrally by a <strong>WLC</strong> (Wireless LAN Controller).</p>
<h2>Firewall</h2><p>A <strong>firewall</strong> enforces security policy, permitting or denying traffic between zones (e.g. inside, outside, DMZ) based on rules.</p>
<h2>Other devices</h2><ul><li><strong>Modem</strong> — converts signals between your ISP and your router.</li><li><strong>Hub</strong> (legacy) — repeats traffic to all ports; replaced by switches.</li><li><strong>Load balancer / IDS / IPS</strong> — specialized appliances.</li></ul>
<div class="callout"><div class="callout-title">Switch vs Router</div><p>Switch = inside one network (uses MAC). Router = between networks (uses IP). You'll see this distinction constantly.</p></div>`,
          ar: `<h2>الأجهزة الطرفية (المضيفون)</h2><p>أي جهاز ينشئ البيانات أو يستهلكها: الحواسيب والمحمولة والهواتف والخوادم والطابعات وكاميرات IP وأجهزة إنترنت الأشياء. كل مضيف يحتاج عنوان IP للتواصل.</p>
<h2>السويتش (الطبقة 2)</h2><p>يربط <strong>السويتش</strong> الأجهزة داخل نفس الشبكة المحلية. يتعلّم <strong>عنوان MAC</strong> لكل جهاز ويمرّر الإطارات إلى المنفذ الصحيح فقط — بكفاءة ودون تصادم. معظم منافذ الشبكة في المكتب تتصل بسويتشات.</p>
<h2>الراوتر (الطبقة 3)</h2><p>يربط <strong>الراوتر</strong> شبكات <em>مختلفة</em> معًا (مثل ربط شبكتك المحلية بالإنترنت) ويختار أفضل مسار باستخدام عناوين IP وجدول التوجيه. كما يوفّر خدمات مثل NAT و DHCP.</p>
<h2>نقطة الوصول اللاسلكية (AP)</h2><p>تربط <strong>نقطة الوصول</strong> عملاء الواي فاي بالشبكة السلكية. في المؤسسات تُدار نقاط الوصول مركزيًا عبر <strong>WLC</strong> (متحكم الشبكة اللاسلكية).</p>
<h2>الجدار الناري</h2><p>يفرض <strong>الجدار الناري</strong> سياسة الأمن، فيسمح أو يمنع المرور بين المناطق (داخلي، خارجي، DMZ) بناءً على قواعد.</p>
<h2>أجهزة أخرى</h2><ul><li><strong>المودم</strong> — يحوّل الإشارات بين مزوّد الخدمة والراوتر.</li><li><strong>الهَب Hub</strong> (قديم) — يكرّر المرور لكل المنافذ؛ استُبدل بالسويتش.</li><li><strong>موزّع الحمل / IDS / IPS</strong> — أجهزة متخصصة.</li></ul>
<div class="callout"><div class="callout-title">السويتش مقابل الراوتر</div><p>السويتش = داخل شبكة واحدة (يستخدم MAC). الراوتر = بين الشبكات (يستخدم IP). ستصادف هذا الفرق باستمرار.</p></div>`
        },
        keyPoints: {
          en: ['Switches forward frames inside a LAN using MAC addresses (Layer 2).', 'Routers forward packets between networks using IP (Layer 3).', 'Access points bridge Wi-Fi clients to the wired network.', 'Firewalls permit/deny traffic based on security policy.'],
          ar: ['السويتشات تمرّر الإطارات داخل LAN باستخدام عناوين MAC (الطبقة 2).', 'الراوترات تمرّر الحزم بين الشبكات باستخدام IP (الطبقة 3).', 'نقاط الوصول تربط عملاء الواي فاي بالشبكة السلكية.', 'الجدران النارية تسمح/تمنع المرور حسب سياسة الأمن.']
        },
        quiz: [
          { q: { en: 'Which device uses MAC addresses to forward frames within a LAN?', ar: 'أي جهاز يستخدم عناوين MAC لتمرير الإطارات داخل LAN؟' },
            options: [{ en: 'Router', ar: 'راوتر' }, { en: 'Switch', ar: 'سويتش' }, { en: 'Modem', ar: 'مودم' }, { en: 'Firewall', ar: 'جدار ناري' }],
            answer: 1, explanation: { en: 'A switch operates at Layer 2 and forwards based on MAC addresses.', ar: 'يعمل السويتش في الطبقة 2 ويمرّر بناءً على عناوين MAC.' } },
          { q: { en: 'What is the primary job of a router?', ar: 'ما المهمة الأساسية للراوتر؟' },
            options: [{ en: 'Connect devices in the same VLAN', ar: 'ربط الأجهزة في نفس الـ VLAN' }, { en: 'Repeat signals to all ports', ar: 'تكرار الإشارات لكل المنافذ' }, { en: 'Route packets between different networks', ar: 'توجيه الحزم بين شبكات مختلفة' }, { en: 'Encrypt all Wi-Fi', ar: 'تشفير كل الواي فاي' }],
            answer: 2, explanation: { en: 'Routers connect and forward packets between separate IP networks.', ar: 'تربط الراوترات وتمرّر الحزم بين شبكات IP منفصلة.' } },
          { q: { en: 'A WLC is used to manage which devices?', ar: 'يُستخدم WLC لإدارة أي أجهزة؟' },
            options: [{ en: 'Routers', ar: 'الراوترات' }, { en: 'Access points', ar: 'نقاط الوصول' }, { en: 'Servers', ar: 'الخوادم' }, { en: 'Printers', ar: 'الطابعات' }],
            answer: 1, explanation: { en: 'A Wireless LAN Controller centrally manages access points.', ar: 'متحكم الشبكة اللاسلكية يدير نقاط الوصول مركزيًا.' } }
        ],
        flashcards: [
          { front: { en: 'Switch operates at which OSI layer?', ar: 'في أي طبقة OSI يعمل السويتش؟' }, back: { en: 'Layer 2 (Data Link) — uses MAC addresses.', ar: 'الطبقة 2 (ربط البيانات) — يستخدم عناوين MAC.' } },
          { front: { en: 'Router operates at which OSI layer?', ar: 'في أي طبقة OSI يعمل الراوتر؟' }, back: { en: 'Layer 3 (Network) — uses IP addresses.', ar: 'الطبقة 3 (الشبكة) — يستخدم عناوين IP.' } }
        ]
      },

      {
        id: 'osi-model',
        title: { en: 'The OSI Model', ar: 'نموذج OSI' },
        duration: 12, difficulty: 'beginner',
        summary: { en: 'The seven-layer reference model that explains how data moves from an application down the wire and back up.', ar: 'النموذج المرجعي ذو السبع طبقات الذي يشرح كيف تنتقل البيانات من التطبيق إلى السلك والعكس.' },
        content: {
          en: `<h2>Why a layered model?</h2><p>The <strong>OSI (Open Systems Interconnection)</strong> model splits networking into <strong>7 layers</strong>. Each layer has one job and talks only to the layers directly above and below it. This makes networks easier to design, teach and troubleshoot.</p>
<h2>The 7 layers (top to bottom)</h2><table><thead><tr><th>#</th><th>Layer</th><th>PDU</th><th>Examples</th></tr></thead><tbody>
<tr><td>7</td><td>Application</td><td>Data</td><td>HTTP, DNS, FTP</td></tr>
<tr><td>6</td><td>Presentation</td><td>Data</td><td>TLS, JPEG, ASCII</td></tr>
<tr><td>5</td><td>Session</td><td>Data</td><td>RPC, sockets</td></tr>
<tr><td>4</td><td>Transport</td><td>Segment</td><td>TCP, UDP (ports)</td></tr>
<tr><td>3</td><td>Network</td><td>Packet</td><td>IP, ICMP, OSPF</td></tr>
<tr><td>2</td><td>Data Link</td><td>Frame</td><td>Ethernet, MAC, ARP</td></tr>
<tr><td>1</td><td>Physical</td><td>Bits</td><td>Cables, RJ45, radio</td></tr></tbody></table>
<h2>Remember the order</h2><p>Top-down mnemonic: <em>"All People Seem To Need Data Processing"</em>. Bottom-up: <em>"Please Do Not Throw Sausage Pizza Away"</em>.</p>
<h2>How troubleshooting uses it</h2><p>Engineers troubleshoot layer by layer. No link light? Layer 1. Wrong VLAN/MAC issue? Layer 2. Can't reach another subnet? Layer 3 (routing). App fails but ping works? Layer 4-7.</p>
<div class="callout tip"><div class="callout-title">Exam tip</div><p>Know each layer's number, name, PDU and at least two example protocols. This is one of the most tested topics.</p></div>`,
          ar: `<h2>لماذا نموذج طبقي؟</h2><p>يقسّم نموذج <strong>OSI (الربط البيني للأنظمة المفتوحة)</strong> الشبكات إلى <strong>7 طبقات</strong>. كل طبقة لها مهمة واحدة وتتحدث فقط مع الطبقتين فوقها وتحتها مباشرة. هذا يجعل تصميم الشبكات وتعليمها واستكشاف أعطالها أسهل.</p>
<h2>الطبقات السبع (من الأعلى للأسفل)</h2><table><thead><tr><th>#</th><th>الطبقة</th><th>PDU</th><th>أمثلة</th></tr></thead><tbody>
<tr><td>7</td><td>التطبيق</td><td>Data</td><td>HTTP, DNS, FTP</td></tr>
<tr><td>6</td><td>العرض</td><td>Data</td><td>TLS, JPEG, ASCII</td></tr>
<tr><td>5</td><td>الجلسة</td><td>Data</td><td>RPC, sockets</td></tr>
<tr><td>4</td><td>النقل</td><td>Segment</td><td>TCP, UDP (منافذ)</td></tr>
<tr><td>3</td><td>الشبكة</td><td>Packet</td><td>IP, ICMP, OSPF</td></tr>
<tr><td>2</td><td>ربط البيانات</td><td>Frame</td><td>Ethernet, MAC, ARP</td></tr>
<tr><td>1</td><td>المادية</td><td>Bits</td><td>كابلات، RJ45، راديو</td></tr></tbody></table>
<h2>تذكّر الترتيب</h2><p>من الأعلى للأسفل تذكّر الأرقام 7..1 مع كل طبقة. الطبقات العليا للبرمجيات، والسفلى للعتاد والنقل الفعلي.</p>
<h2>كيف يُستخدم في استكشاف الأعطال</h2><p>يستكشف المهندسون الأعطال طبقة تلو الأخرى. لا يوجد ضوء وصلة؟ الطبقة 1. مشكلة VLAN/MAC؟ الطبقة 2. لا تصل لشبكة فرعية أخرى؟ الطبقة 3 (التوجيه). التطبيق يفشل لكن ping يعمل؟ الطبقات 4-7.</p>
<div class="callout tip"><div class="callout-title">نصيحة الامتحان</div><p>احفظ رقم كل طبقة واسمها و PDU وبروتوكولين مثالين على الأقل. هذا من أكثر المواضيع اختبارًا.</p></div>`
        },
        keyPoints: {
          en: ['OSI has 7 layers, each with a single responsibility.', 'PDUs: Data (7-5), Segment (4), Packet (3), Frame (2), Bits (1).', 'Switches = Layer 2, Routers = Layer 3.', 'Troubleshoot systematically, layer by layer.'],
          ar: ['نموذج OSI له 7 طبقات، لكل منها مسؤولية واحدة.', 'وحدات البيانات: Data (7-5)، Segment (4)، Packet (3)، Frame (2)، Bits (1).', 'السويتشات = الطبقة 2، الراوترات = الطبقة 3.', 'استكشف الأعطال بشكل منهجي طبقة تلو الأخرى.']
        },
        examples: [
          { title: { en: 'Mapping a web request to OSI', ar: 'ربط طلب ويب بنموذج OSI' },
            body: { en: 'When you load a website: L7 builds the HTTP request, L4 wraps it in a TCP segment (port 443), L3 adds source/destination IP, L2 frames it with MAC addresses, L1 sends bits on the wire.', ar: 'عند فتح موقع: الطبقة 7 تبني طلب HTTP، الطبقة 4 تغلّفه في TCP (المنفذ 443)، الطبقة 3 تضيف IP المصدر/الوجهة، الطبقة 2 تغلّفه بعناوين MAC، الطبقة 1 ترسل البتات.' } }
        ],
        quiz: [
          { q: { en: 'At which OSI layer does a router primarily operate?', ar: 'في أي طبقة OSI يعمل الراوتر أساسًا؟' },
            options: [{ en: 'Layer 2', ar: 'الطبقة 2' }, { en: 'Layer 3', ar: 'الطبقة 3' }, { en: 'Layer 4', ar: 'الطبقة 4' }, { en: 'Layer 7', ar: 'الطبقة 7' }],
            answer: 1, explanation: { en: 'Routers use IP addresses, which live at Layer 3 (Network).', ar: 'تستخدم الراوترات عناوين IP الموجودة في الطبقة 3 (الشبكة).' } },
          { q: { en: 'What is the PDU at the Transport layer?', ar: 'ما وحدة البيانات في طبقة النقل؟' },
            options: [{ en: 'Frame', ar: 'إطار' }, { en: 'Packet', ar: 'حزمة' }, { en: 'Segment', ar: 'مقطع' }, { en: 'Bit', ar: 'بت' }],
            answer: 2, explanation: { en: 'Layer 4 (Transport) PDU is the segment (TCP) or datagram (UDP).', ar: 'وحدة الطبقة 4 (النقل) هي المقطع (TCP) أو المخطط (UDP).' } },
          { q: { en: 'Which layer is responsible for logical (IP) addressing?', ar: 'أي طبقة مسؤولة عن العنونة المنطقية (IP)؟' },
            options: [{ en: 'Data Link', ar: 'ربط البيانات' }, { en: 'Network', ar: 'الشبكة' }, { en: 'Session', ar: 'الجلسة' }, { en: 'Physical', ar: 'المادية' }],
            answer: 1, explanation: { en: 'The Network layer (3) handles logical IP addressing and routing.', ar: 'تتولى طبقة الشبكة (3) العنونة المنطقية IP والتوجيه.' } },
          { q: { en: 'Encryption with TLS conceptually maps to which OSI layer?', ar: 'يرتبط التشفير بـ TLS مفاهيميًا بأي طبقة OSI؟' },
            options: [{ en: 'Presentation (6)', ar: 'العرض (6)' }, { en: 'Network (3)', ar: 'الشبكة (3)' }, { en: 'Physical (1)', ar: 'المادية (1)' }, { en: 'Data Link (2)', ar: 'ربط البيانات (2)' }],
            answer: 0, explanation: { en: 'Presentation layer handles encryption, encoding and formatting.', ar: 'طبقة العرض تتعامل مع التشفير والترميز والتنسيق.' } }
        ],
        flashcards: [
          { front: { en: 'Name the 7 OSI layers (1→7).', ar: 'اذكر طبقات OSI السبع (1→7).' }, back: { en: 'Physical, Data Link, Network, Transport, Session, Presentation, Application.', ar: 'المادية، ربط البيانات، الشبكة، النقل، الجلسة، العرض، التطبيق.' } },
          { front: { en: 'PDU at Layer 2?', ar: 'وحدة البيانات في الطبقة 2؟' }, back: { en: 'Frame.', ar: 'الإطار (Frame).' } },
          { front: { en: 'PDU at Layer 3?', ar: 'وحدة البيانات في الطبقة 3؟' }, back: { en: 'Packet.', ar: 'الحزمة (Packet).' } }
        ]
      },

      {
        id: 'tcp-ip-model',
        title: { en: 'The TCP/IP Model & Encapsulation', ar: 'نموذج TCP/IP والتغليف' },
        duration: 11, difficulty: 'beginner',
        summary: { en: 'The practical 4-layer model the Internet actually runs on, and how data is encapsulated and de-encapsulated.', ar: 'النموذج العملي ذو الأربع طبقات الذي يعمل عليه الإنترنت فعليًا، وكيف تُغلّف البيانات وتُفك.' },
        content: {
          en: `<h2>TCP/IP vs OSI</h2><p>OSI is a teaching reference; <strong>TCP/IP</strong> is what the Internet runs on. It has 4 layers that map onto OSI:</p>
<table><thead><tr><th>TCP/IP</th><th>OSI equivalent</th><th>Protocols</th></tr></thead><tbody>
<tr><td>Application</td><td>7,6,5</td><td>HTTP, DNS, DHCP</td></tr>
<tr><td>Transport</td><td>4</td><td>TCP, UDP</td></tr>
<tr><td>Internet</td><td>3</td><td>IP, ICMP</td></tr>
<tr><td>Network Access</td><td>2,1</td><td>Ethernet, Wi-Fi</td></tr></tbody></table>
<h2>Encapsulation</h2><p>As data travels <em>down</em> the stack on the sender, each layer adds its own header (and L2 adds a trailer). This is <strong>encapsulation</strong>:</p>
<ol><li>App data</li><li>+ TCP/UDP header → <strong>segment</strong></li><li>+ IP header → <strong>packet</strong></li><li>+ Ethernet header & trailer → <strong>frame</strong></li><li>→ <strong>bits</strong> on the medium</li></ol>
<h2>De-encapsulation</h2><p>The receiver does the reverse, stripping each header as data moves <em>up</em> the stack until the application reads the original message.</p>
<div class="callout"><div class="callout-title">Headers add addressing</div><p>The TCP header carries ports, the IP header carries IP addresses, the Ethernet header carries MAC addresses. Each layer's header answers "where does this go next?".</p></div>`,
          ar: `<h2>TCP/IP مقابل OSI</h2><p>نموذج OSI مرجع تعليمي؛ أما <strong>TCP/IP</strong> فهو ما يعمل عليه الإنترنت. له 4 طبقات تُقابل OSI:</p>
<table><thead><tr><th>TCP/IP</th><th>ما يقابله في OSI</th><th>بروتوكولات</th></tr></thead><tbody>
<tr><td>التطبيق</td><td>7,6,5</td><td>HTTP, DNS, DHCP</td></tr>
<tr><td>النقل</td><td>4</td><td>TCP, UDP</td></tr>
<tr><td>الإنترنت</td><td>3</td><td>IP, ICMP</td></tr>
<tr><td>الوصول للشبكة</td><td>2,1</td><td>Ethernet, Wi-Fi</td></tr></tbody></table>
<h2>التغليف (Encapsulation)</h2><p>أثناء نزول البيانات <em>للأسفل</em> عبر المكدّس عند المرسل، تضيف كل طبقة ترويستها (وتضيف الطبقة 2 ذيلًا). هذا هو <strong>التغليف</strong>:</p>
<ol><li>بيانات التطبيق</li><li>+ ترويسة TCP/UDP ← <strong>مقطع</strong></li><li>+ ترويسة IP ← <strong>حزمة</strong></li><li>+ ترويسة وذيل إيثرنت ← <strong>إطار</strong></li><li>← <strong>بتات</strong> على الوسط</li></ol>
<h2>فك التغليف</h2><p>يقوم المستقبل بالعكس، فيزيل كل ترويسة أثناء صعود البيانات <em>للأعلى</em> حتى يقرأ التطبيق الرسالة الأصلية.</p>
<div class="callout"><div class="callout-title">الترويسات تضيف العنونة</div><p>ترويسة TCP تحمل المنافذ، وترويسة IP تحمل عناوين IP، وترويسة إيثرنت تحمل عناوين MAC. ترويسة كل طبقة تجيب: "إلى أين تذهب البيانات تاليًا؟".</p></div>`
        },
        keyPoints: {
          en: ['TCP/IP has 4 layers: Application, Transport, Internet, Network Access.', 'Encapsulation adds headers going down; de-encapsulation strips them going up.', 'Segment → Packet → Frame → Bits is the encapsulation order.', 'Each header carries the addressing for its layer (ports, IP, MAC).'],
          ar: ['نموذج TCP/IP له 4 طبقات: التطبيق، النقل، الإنترنت، الوصول للشبكة.', 'التغليف يضيف الترويسات نزولًا، وفك التغليف يزيلها صعودًا.', 'ترتيب التغليف: مقطع ← حزمة ← إطار ← بتات.', 'كل ترويسة تحمل عنونة طبقتها (منافذ، IP، MAC).']
        },
        quiz: [
          { q: { en: 'After adding an IP header, the PDU is called a…', ar: 'بعد إضافة ترويسة IP تُسمى وحدة البيانات…' },
            options: [{ en: 'Frame', ar: 'إطار' }, { en: 'Segment', ar: 'مقطع' }, { en: 'Packet', ar: 'حزمة' }, { en: 'Bit', ar: 'بت' }],
            answer: 2, explanation: { en: 'IP header → packet (Layer 3). Adding the Ethernet header makes it a frame.', ar: 'ترويسة IP ← حزمة (الطبقة 3). إضافة ترويسة إيثرنت تجعلها إطارًا.' } },
          { q: { en: 'How many layers does the TCP/IP model have?', ar: 'كم طبقة في نموذج TCP/IP؟' },
            options: [{ en: '4', ar: '4' }, { en: '5', ar: '5' }, { en: '7', ar: '7' }, { en: '3', ar: '3' }],
            answer: 0, explanation: { en: 'The classic TCP/IP model has 4 layers.', ar: 'النموذج الكلاسيكي لـ TCP/IP يتكوّن من 4 طبقات.' } },
          { q: { en: 'Which process happens at the receiving host?', ar: 'أي عملية تحدث عند المضيف المستقبِل؟' },
            options: [{ en: 'Encapsulation', ar: 'التغليف' }, { en: 'De-encapsulation', ar: 'فك التغليف' }, { en: 'Fragmentation only', ar: 'التجزئة فقط' }, { en: 'Encryption only', ar: 'التشفير فقط' }],
            answer: 1, explanation: { en: 'The receiver strips headers (de-encapsulation) moving up the stack.', ar: 'المستقبل يزيل الترويسات (فك التغليف) صعودًا عبر المكدّس.' } }
        ],
        flashcards: [
          { front: { en: 'Encapsulation order (L4→L1)?', ar: 'ترتيب التغليف (L4→L1)؟' }, back: { en: 'Segment → Packet → Frame → Bits.', ar: 'مقطع ← حزمة ← إطار ← بتات.' } },
          { front: { en: 'TCP/IP Internet layer ≈ which OSI layer?', ar: 'طبقة الإنترنت في TCP/IP ≈ أي طبقة OSI؟' }, back: { en: 'OSI Layer 3 (Network).', ar: 'الطبقة 3 في OSI (الشبكة).' } }
        ]
      },

      {
        id: 'ethernet-mac-cabling',
        title: { en: 'Ethernet, MAC Addresses & Cabling', ar: 'الإيثرنت وعناوين MAC والكابلات' },
        duration: 12, difficulty: 'beginner',
        summary: { en: 'How Ethernet frames, MAC addresses and physical media (copper, fiber) carry your data across the LAN.', ar: 'كيف تنقل أطر الإيثرنت وعناوين MAC والوسائط المادية (نحاس، ألياف) بياناتك عبر الشبكة المحلية.' },
        content: {
          en: `<h2>Ethernet</h2><p><strong>Ethernet (IEEE 802.3)</strong> is the dominant wired LAN technology. Data is sent in <strong>frames</strong> containing source and destination MAC addresses, the payload, and a Frame Check Sequence (FCS) for error detection.</p>
<h2>MAC addresses</h2><p>A <strong>MAC address</strong> is a 48-bit hardware address burned into a NIC, written as 12 hex digits, e.g. <code>00:1A:2B:3C:4D:5E</code>. The first 24 bits are the vendor (OUI); the last 24 are unique per device. <code>FF:FF:FF:FF:FF:FF</code> is the broadcast address.</p>
<h2>Copper cabling</h2><table><thead><tr><th>Category</th><th>Speed</th><th>Use</th></tr></thead><tbody>
<tr><td>Cat5e</td><td>1 Gbps</td><td>Common LAN</td></tr>
<tr><td>Cat6</td><td>1–10 Gbps (short)</td><td>Modern LAN</td></tr>
<tr><td>Cat6a</td><td>10 Gbps</td><td>Data center / long runs</td></tr></tbody></table>
<p>Copper UTP runs up to <strong>100 meters</strong>. Use a <strong>straight-through</strong> cable for unlike devices (PC↔switch) and a <strong>crossover</strong> for like devices (switch↔switch) — though modern Auto-MDIX makes this automatic.</p>
<h2>Fiber optic</h2><ul><li><strong>Single-mode (SMF)</strong>: tiny core, lasers, very long distances (km).</li><li><strong>Multi-mode (MMF)</strong>: larger core, LEDs, shorter distances, cheaper.</li></ul>
<p>Fiber is immune to electromagnetic interference and supports the highest speeds and distances.</p>
<div class="callout warn"><div class="callout-title">Watch out</div><p>Exceeding 100 m on copper causes attenuation and errors. For longer links or noisy environments, use fiber.</p></div>`,
          ar: `<h2>الإيثرنت</h2><p><strong>الإيثرنت (IEEE 802.3)</strong> هو التقنية السائدة للشبكات المحلية السلكية. تُرسل البيانات في <strong>أطر (frames)</strong> تحتوي على عنواني MAC المصدر والوجهة، والحمولة، وتسلسل فحص الإطار (FCS) لكشف الأخطاء.</p>
<h2>عناوين MAC</h2><p><strong>عنوان MAC</strong> هو عنوان عتاد بطول 48 بت محفور في كرت الشبكة، يُكتب بـ 12 رقمًا ست عشريًا مثل <code>00:1A:2B:3C:4D:5E</code>. أول 24 بت تمثّل الشركة المصنّعة (OUI)، وآخر 24 فريدة لكل جهاز. والعنوان <code>FF:FF:FF:FF:FF:FF</code> هو عنوان البث.</p>
<h2>الكابلات النحاسية</h2><table><thead><tr><th>الفئة</th><th>السرعة</th><th>الاستخدام</th></tr></thead><tbody>
<tr><td>Cat5e</td><td>1 جيجابت</td><td>شبكة محلية شائعة</td></tr>
<tr><td>Cat6</td><td>1–10 جيجابت (مسافة قصيرة)</td><td>شبكة حديثة</td></tr>
<tr><td>Cat6a</td><td>10 جيجابت</td><td>مركز بيانات / مسافات طويلة</td></tr></tbody></table>
<p>كابل UTP النحاسي يصل حتى <strong>100 متر</strong>. استخدم كابل <strong>straight-through</strong> للأجهزة المختلفة (PC↔سويتش) و<strong>crossover</strong> للأجهزة المتشابهة (سويتش↔سويتش) — رغم أن Auto-MDIX الحديث يجعل ذلك تلقائيًا.</p>
<h2>الألياف الضوئية</h2><ul><li><strong>أحادية النمط (SMF)</strong>: نواة صغيرة، ليزر، مسافات طويلة جدًا (كيلومترات).</li><li><strong>متعددة النمط (MMF)</strong>: نواة أكبر، LED، مسافات أقصر، أرخص.</li></ul>
<p>الألياف محصّنة ضد التداخل الكهرومغناطيسي وتدعم أعلى السرعات والمسافات.</p>
<div class="callout warn"><div class="callout-title">انتبه</div><p>تجاوز 100 متر على النحاس يسبب توهينًا وأخطاء. للمسافات الأطول أو البيئات المشوّشة استخدم الألياف.</p></div>`
        },
        keyPoints: {
          en: ['Ethernet frames carry source/destination MAC + FCS for error checking.', 'MAC = 48-bit hardware address; first half is the vendor OUI.', 'Copper UTP max run is ~100 m; fiber goes much farther.', 'Single-mode fiber = long distance; multi-mode = shorter/cheaper.'],
          ar: ['أطر الإيثرنت تحمل MAC المصدر/الوجهة + FCS لفحص الأخطاء.', 'MAC عنوان عتاد 48 بت؛ نصفه الأول هو OUI للمصنّع.', 'أقصى مسافة لكابل UTP النحاسي ~100 متر؛ الألياف أبعد بكثير.', 'الألياف أحادية النمط للمسافات الطويلة، ومتعددة النمط أقصر/أرخص.']
        },
        quiz: [
          { q: { en: 'How many bits is a MAC address?', ar: 'كم بت في عنوان MAC؟' },
            options: [{ en: '32', ar: '32' }, { en: '48', ar: '48' }, { en: '64', ar: '64' }, { en: '128', ar: '128' }],
            answer: 1, explanation: { en: 'A MAC address is 48 bits (12 hex digits).', ar: 'عنوان MAC بطول 48 بت (12 رقمًا ست عشريًا).' } },
          { q: { en: 'What is the maximum standard run for copper UTP cabling?', ar: 'ما أقصى مسافة قياسية لكابل UTP النحاسي؟' },
            options: [{ en: '50 m', ar: '50 م' }, { en: '100 m', ar: '100 م' }, { en: '200 m', ar: '200 م' }, { en: '500 m', ar: '500 م' }],
            answer: 1, explanation: { en: 'Standard copper Ethernet is limited to 100 meters.', ar: 'إيثرنت النحاس القياسي محدود بـ 100 متر.' } },
          { q: { en: 'Which fiber type is best for the longest distances?', ar: 'أي نوع ألياف أفضل لأطول المسافات؟' },
            options: [{ en: 'Multi-mode', ar: 'متعددة النمط' }, { en: 'Single-mode', ar: 'أحادية النمط' }, { en: 'Cat6a', ar: 'Cat6a' }, { en: 'Coaxial', ar: 'محوري' }],
            answer: 1, explanation: { en: 'Single-mode fiber uses laser light for very long runs.', ar: 'الألياف أحادية النمط تستخدم الليزر للمسافات الطويلة جدًا.' } }
        ],
        flashcards: [
          { front: { en: 'Broadcast MAC address?', ar: 'عنوان MAC للبث؟' }, back: { en: 'FF:FF:FF:FF:FF:FF', ar: 'FF:FF:FF:FF:FF:FF' } },
          { front: { en: 'Straight-through vs crossover?', ar: 'straight-through مقابل crossover؟' }, back: { en: 'Straight = unlike devices (PC–switch). Crossover = like devices (switch–switch).', ar: 'straight للأجهزة المختلفة (PC–سويتش). crossover للأجهزة المتشابهة (سويتش–سويتش).' } }
        ]
      },

      {
        id: 'cisco-ios-cli',
        title: { en: 'Cisco IOS & the CLI', ar: 'نظام Cisco IOS وواجهة الأوامر' },
        duration: 12, difficulty: 'beginner',
        summary: { en: 'Navigate the Cisco command-line: the operating modes, basic configuration, and how to save your work.', ar: 'تنقّل في سطر أوامر سيسكو: أوضاع التشغيل والتهيئة الأساسية وكيفية حفظ عملك.' },
        content: {
          en: `<h2>What is IOS?</h2><p><strong>Cisco IOS</strong> (Internetwork Operating System) is the software running on Cisco routers and switches. You configure it through a <strong>command-line interface (CLI)</strong>.</p>
<h2>Command modes</h2><table><thead><tr><th>Mode</th><th>Prompt</th><th>Purpose</th></tr></thead><tbody>
<tr><td>User EXEC</td><td><code>R1></code></td><td>Limited view-only</td></tr>
<tr><td>Privileged EXEC</td><td><code>R1#</code></td><td>Full show/debug, reload</td></tr>
<tr><td>Global Config</td><td><code>R1(config)#</code></td><td>Device-wide settings</td></tr>
<tr><td>Interface Config</td><td><code>R1(config-if)#</code></td><td>Per-interface settings</td></tr></tbody></table>
<h2>Moving between modes</h2><p>Use <code>enable</code> to go from user to privileged, <code>configure terminal</code> to enter global config, specific commands like <code>interface g0/1</code> to drill in, and <code>exit</code>/<code>end</code> to back out.</p>
<h2>Helpful CLI features</h2><ul><li><code>?</code> — context-sensitive help (e.g. <code>show ?</code>).</li><li><strong>Tab</strong> — autocomplete a command.</li><li>Abbreviations — <code>conf t</code> = <code>configure terminal</code>.</li><li><code>Ctrl+Z</code> — jump straight back to privileged EXEC.</li></ul>
<h2>Saving configuration</h2><p>The <strong>running-config</strong> lives in RAM and is lost on reboot. Save it to NVRAM (the <strong>startup-config</strong>) with <code>copy running-config startup-config</code> or <code>write memory</code>.</p>
<div class="callout danger"><div class="callout-title">Don't lose your work</div><p>Changes take effect immediately but are NOT persistent until you save. Always copy run start before reloading.</p></div>`,
          ar: `<h2>ما هو IOS؟</h2><p><strong>Cisco IOS</strong> هو نظام التشغيل الذي يعمل على راوترات وسويتشات سيسكو. تتم تهيئته عبر <strong>واجهة سطر الأوامر (CLI)</strong>.</p>
<h2>أوضاع الأوامر</h2><table><thead><tr><th>الوضع</th><th>الموجّه</th><th>الغرض</th></tr></thead><tbody>
<tr><td>User EXEC</td><td><code>R1></code></td><td>عرض محدود فقط</td></tr>
<tr><td>Privileged EXEC</td><td><code>R1#</code></td><td>كل أوامر show/debug وreload</td></tr>
<tr><td>Global Config</td><td><code>R1(config)#</code></td><td>إعدادات على مستوى الجهاز</td></tr>
<tr><td>Interface Config</td><td><code>R1(config-if)#</code></td><td>إعدادات لكل واجهة</td></tr></tbody></table>
<h2>التنقّل بين الأوضاع</h2><p>استخدم <code>enable</code> للانتقال من المستخدم إلى المميّز، و<code>configure terminal</code> للدخول للتهيئة العامة، وأوامر مثل <code>interface g0/1</code> للدخول للتفاصيل، و<code>exit</code>/<code>end</code> للخروج.</p>
<h2>مزايا مفيدة في CLI</h2><ul><li><code>?</code> — مساعدة حسب السياق (مثل <code>show ?</code>).</li><li><strong>Tab</strong> — إكمال تلقائي للأمر.</li><li>الاختصارات — <code>conf t</code> = <code>configure terminal</code>.</li><li><code>Ctrl+Z</code> — العودة مباشرة للوضع المميّز.</li></ul>
<h2>حفظ التهيئة</h2><p>توجد <strong>running-config</strong> في الذاكرة RAM وتُفقد عند إعادة التشغيل. احفظها في NVRAM (<strong>startup-config</strong>) عبر <code>copy running-config startup-config</code> أو <code>write memory</code>.</p>
<div class="callout danger"><div class="callout-title">لا تفقد عملك</div><p>التغييرات تُطبّق فورًا لكنها لا تبقى حتى تحفظها. احفظ دائمًا قبل إعادة التشغيل.</p></div>`
        },
        keyPoints: {
          en: ['IOS modes: User EXEC (>), Privileged EXEC (#), Global/Interface config.', 'enable → privileged; configure terminal → global config.', '? gives help, Tab autocompletes, conf t abbreviates.', 'running-config (RAM) is lost on reboot — save to startup-config.'],
          ar: ['أوضاع IOS: User EXEC (>)، Privileged EXEC (#)، التهيئة العامة/الواجهة.', 'enable ← المميّز؛ configure terminal ← التهيئة العامة.', '? للمساعدة، Tab للإكمال، conf t اختصار.', 'running-config (RAM) تُفقد عند إعادة التشغيل — احفظها في startup-config.']
        },
        examples: [
          { title: { en: 'Basic device setup', ar: 'إعداد جهاز أساسي' },
            code: 'Router> enable\nRouter# configure terminal\nRouter(config)# hostname R1\nR1(config)# enable secret Cisco123\nR1(config)# interface gigabitethernet0/0\nR1(config-if)# ip address 192.168.1.1 255.255.255.0\nR1(config-if)# no shutdown\nR1(config-if)# end\nR1# copy running-config startup-config' }
        ],
        commands: [
          { cmd: 'enable', desc: { en: 'Enter privileged EXEC mode.', ar: 'الدخول للوضع المميّز.' } },
          { cmd: 'configure terminal', desc: { en: 'Enter global configuration mode.', ar: 'الدخول للتهيئة العامة.' } },
          { cmd: 'hostname R1', desc: { en: 'Name the device.', ar: 'تسمية الجهاز.' } },
          { cmd: 'show running-config', desc: { en: 'View the active configuration.', ar: 'عرض التهيئة النشطة.' } },
          { cmd: 'copy running-config startup-config', desc: { en: 'Save configuration to NVRAM.', ar: 'حفظ التهيئة في NVRAM.' } }
        ],
        lab: {
          title: { en: 'Lab: First Router Configuration', ar: 'مختبر: أول تهيئة لراوتر' },
          objective: { en: 'Set a hostname, secure privileged mode, configure an interface IP, and save the config.', ar: 'عيّن اسمًا، أمّن الوضع المميّز، هيّئ عنوان واجهة، واحفظ التهيئة.' },
          topology: 'PC --- G0/0 [ R1 ]',
          steps: [
            { en: 'Enter privileged then global config mode.', ar: 'ادخل للوضع المميّز ثم التهيئة العامة.' },
            { en: 'Set the hostname to R1.', ar: 'عيّن الاسم إلى R1.' },
            { en: 'Configure enable secret and service password-encryption.', ar: 'هيّئ enable secret و service password-encryption.' },
            { en: 'On G0/0 set IP 192.168.1.1/24 and enable the port.', ar: 'على G0/0 عيّن IP 192.168.1.1/24 وفعّل المنفذ.' },
            { en: 'Save with copy run start.', ar: 'احفظ بـ copy run start.' }
          ],
          verify: { en: 'Run "show ip interface brief" — G0/0 should show 192.168.1.1, status up/up.', ar: 'نفّذ "show ip interface brief" — يجب أن يظهر G0/0 بعنوان 192.168.1.1 وحالة up/up.' }
        },
        quiz: [
          { q: { en: 'Which prompt indicates privileged EXEC mode?', ar: 'أي موجّه يدل على الوضع المميّز؟' },
            options: [{ en: 'R1>', ar: 'R1>' }, { en: 'R1#', ar: 'R1#' }, { en: 'R1(config)#', ar: 'R1(config)#' }, { en: 'R1(config-if)#', ar: 'R1(config-if)#' }],
            answer: 1, explanation: { en: 'The # symbol denotes privileged EXEC mode.', ar: 'الرمز # يدل على الوضع المميّز.' } },
          { q: { en: 'Where is the running-config stored?', ar: 'أين تُخزَّن running-config؟' },
            options: [{ en: 'NVRAM', ar: 'NVRAM' }, { en: 'Flash', ar: 'Flash' }, { en: 'RAM', ar: 'RAM' }, { en: 'ROM', ar: 'ROM' }],
            answer: 2, explanation: { en: 'running-config is in RAM and is lost on reboot unless saved.', ar: 'running-config في RAM وتُفقد عند إعادة التشغيل ما لم تُحفظ.' } },
          { q: { en: 'Which command saves the configuration permanently?', ar: 'أي أمر يحفظ التهيئة بشكل دائم؟' },
            options: [{ en: 'show run', ar: 'show run' }, { en: 'copy running-config startup-config', ar: 'copy running-config startup-config' }, { en: 'reload', ar: 'reload' }, { en: 'erase startup-config', ar: 'erase startup-config' }],
            answer: 1, explanation: { en: 'copy run start writes the config to NVRAM (startup-config).', ar: 'copy run start يكتب التهيئة في NVRAM (startup-config).' } }
        ],
        flashcards: [
          { front: { en: 'Command to enter global config?', ar: 'أمر الدخول للتهيئة العامة؟' }, back: { en: 'configure terminal (conf t).', ar: 'configure terminal (conf t).' } },
          { front: { en: 'Where is startup-config stored?', ar: 'أين تُخزَّن startup-config؟' }, back: { en: 'NVRAM (survives reboot).', ar: 'NVRAM (تبقى بعد إعادة التشغيل).' } }
        ]
      },

      {
        id: 'how-switches-work',
        title: { en: 'How Switches Learn & Forward', ar: 'كيف تتعلّم السويتشات وتمرّر' },
        duration: 10, difficulty: 'beginner',
        summary: { en: 'The MAC address table, learning, flooding, forwarding and filtering — the core logic of every switch.', ar: 'جدول عناوين MAC، والتعلّم، والإغراق، والتمرير، والتصفية — المنطق الأساسي لكل سويتش.' },
        content: {
          en: `<h2>The MAC address table</h2><p>A switch keeps a <strong>MAC address table</strong> (CAM table) that maps MAC addresses to switch ports. This is how it decides where to send each frame.</p>
<h2>Learning</h2><p>When a frame arrives, the switch reads the <strong>source MAC</strong> and records it against the incoming port. Over time it learns where every device lives.</p>
<h2>Forwarding decisions</h2><ul><li><strong>Known unicast</strong>: destination MAC is in the table → forward out that one port.</li><li><strong>Unknown unicast</strong>: destination not in table → <strong>flood</strong> out all ports except the one it came in on.</li><li><strong>Broadcast</strong> (FF:FF:FF:FF:FF:FF) → flood to all ports.</li><li><strong>Filtering</strong>: never sends a frame back out the port it arrived on.</li></ul>
<h2>Why switches beat hubs</h2><p>A hub repeats everything to every port, creating one big collision domain. A switch gives each port its own collision domain and forwards intelligently, enabling full-duplex, wire-speed communication.</p>
<div class="callout tip"><div class="callout-title">Remember</div><p>Each switch port = a separate collision domain. All ports in the same VLAN = one broadcast domain.</p></div>`,
          ar: `<h2>جدول عناوين MAC</h2><p>يحتفظ السويتش بـ <strong>جدول عناوين MAC</strong> (جدول CAM) يربط عناوين MAC بمنافذ السويتش. هكذا يقرر إلى أين يرسل كل إطار.</p>
<h2>التعلّم</h2><p>عند وصول إطار، يقرأ السويتش <strong>MAC المصدر</strong> ويسجّله مقابل المنفذ الوارد. ومع الوقت يتعلّم مكان كل جهاز.</p>
<h2>قرارات التمرير</h2><ul><li><strong>Unicast معروف</strong>: MAC الوجهة موجود في الجدول ← يمرّر عبر ذلك المنفذ فقط.</li><li><strong>Unicast مجهول</strong>: الوجهة غير موجودة ← <strong>إغراق</strong> عبر كل المنافذ عدا منفذ الورود.</li><li><strong>Broadcast</strong> (FF:FF:FF:FF:FF:FF) ← إغراق لكل المنافذ.</li><li><strong>التصفية</strong>: لا يعيد الإطار من نفس المنفذ الذي وصل منه.</li></ul>
<h2>لماذا السويتش أفضل من الهَب</h2><p>الهَب يكرّر كل شيء لكل منفذ مكوّنًا مجال تصادم واحدًا كبيرًا. أما السويتش فيعطي كل منفذ مجال تصادم خاصًا ويمرّر بذكاء، ما يتيح اتصالًا كامل الازدواج بسرعة السلك.</p>
<div class="callout tip"><div class="callout-title">تذكّر</div><p>كل منفذ سويتش = مجال تصادم منفصل. كل المنافذ في نفس الـ VLAN = مجال بث واحد.</p></div>`
        },
        keyPoints: {
          en: ['Switches learn source MACs and build a MAC address table.', 'Unknown unicast and broadcasts are flooded out all other ports.', 'Switches never forward a frame back out its arrival port (filtering).', 'Each switch port is its own collision domain.'],
          ar: ['السويتشات تتعلّم MAC المصدر وتبني جدول عناوين MAC.', 'الـ unicast المجهول والـ broadcast يُغرقان عبر باقي المنافذ.', 'لا يعيد السويتش إطارًا من منفذ وروده (التصفية).', 'كل منفذ سويتش هو مجال تصادم خاص به.']
        },
        commands: [
          { cmd: 'show mac address-table', desc: { en: 'Display learned MAC-to-port mappings.', ar: 'عرض ربط عناوين MAC بالمنافذ.' } },
          { cmd: 'show interfaces status', desc: { en: 'Show port status, speed, duplex and VLAN.', ar: 'عرض حالة المنافذ والسرعة والازدواجية والـ VLAN.' } }
        ],
        quiz: [
          { q: { en: 'What does a switch do with an unknown unicast frame?', ar: 'ماذا يفعل السويتش بإطار unicast مجهول؟' },
            options: [{ en: 'Drops it', ar: 'يسقطه' }, { en: 'Floods it out all ports except the source', ar: 'يغرقه عبر كل المنافذ عدا المصدر' }, { en: 'Sends it back to the source', ar: 'يعيده للمصدر' }, { en: 'Routes it', ar: 'يوجّهه' }],
            answer: 1, explanation: { en: 'Unknown unicast is flooded to all ports except the one it arrived on.', ar: 'الـ unicast المجهول يُغرق لكل المنافذ عدا منفذ الورود.' } },
          { q: { en: 'Which field does a switch read to LEARN addresses?', ar: 'أي حقل يقرأه السويتش ليتعلّم العناوين؟' },
            options: [{ en: 'Destination MAC', ar: 'MAC الوجهة' }, { en: 'Source MAC', ar: 'MAC المصدر' }, { en: 'Source IP', ar: 'IP المصدر' }, { en: 'TTL', ar: 'TTL' }],
            answer: 1, explanation: { en: 'The switch records the source MAC against the incoming port.', ar: 'يسجّل السويتش MAC المصدر مقابل المنفذ الوارد.' } },
          { q: { en: 'How many collision domains does a 24-port switch create?', ar: 'كم مجال تصادم يُنشئ سويتش بـ 24 منفذًا؟' },
            options: [{ en: '1', ar: '1' }, { en: '2', ar: '2' }, { en: '24', ar: '24' }, { en: '0', ar: '0' }],
            answer: 2, explanation: { en: 'Each switch port is its own collision domain → 24.', ar: 'كل منفذ مجال تصادم خاص ← 24.' } }
        ],
        flashcards: [
          { front: { en: 'What is the CAM table?', ar: 'ما جدول CAM؟' }, back: { en: 'The switch MAC address table mapping MACs to ports.', ar: 'جدول عناوين MAC في السويتش يربط الـ MAC بالمنافذ.' } },
          { front: { en: 'Collision domain per switch port?', ar: 'مجال التصادم لكل منفذ سويتش؟' }, back: { en: 'One per port (separate).', ar: 'واحد لكل منفذ (منفصل).' } }
        ]
      }
    ]
  });
})();
