/* ccna.network-access.js — CCNA Module: Network Access (VLANs, STP, EtherChannel, Wireless).
   Follows the schema documented in ccna.fundamentals.js. */
(function () {
  const D = window.NS_DATA = window.NS_DATA || {};
  D.ccna = D.ccna || { id: 'ccna', modules: [] };

  const L = (o) => o; // identity, for readability

  D.ccna.modules.push({
    id: 'network-access',
    title: { en: 'Network Access', ar: 'الوصول للشبكة' },
    icon: 'network',
    lessons: [
      {
        id: 'vlans-concepts',
        title: { en: 'VLANs — Concepts & Benefits', ar: 'الـ VLANs — المفهوم والفوائد' },
        duration: 10, difficulty: 'intermediate',
        summary: { en: 'Virtual LANs logically segment one physical switch into many broadcast domains for security and efficiency.', ar: 'تقسّم الشبكات الافتراضية سويتشًا ماديًا واحدًا إلى عدة مجالات بث منطقية للأمن والكفاءة.' },
        content: {
          en: `<h2>What is a VLAN?</h2><p>A <strong>VLAN (Virtual LAN)</strong> is a logical grouping of devices in the same broadcast domain, regardless of their physical location. One switch can host many VLANs; each behaves like a separate switch.</p>
<h2>Why use VLANs?</h2><ul><li><strong>Segmentation</strong> — separate departments (HR, Sales) for security.</li><li><strong>Broadcast control</strong> — broadcasts stay within a VLAN, reducing congestion.</li><li><strong>Flexibility</strong> — group users logically, not by cabling.</li><li><strong>Security</strong> — devices in different VLANs can't talk without a Layer 3 device.</li></ul>
<h2>VLAN ranges</h2><table><thead><tr><th>Range</th><th>Type</th></tr></thead><tbody><tr><td>1, 1002-1005</td><td>Default / reserved</td></tr><tr><td>2-1001</td><td>Normal VLANs</td></tr><tr><td>1006-4094</td><td>Extended VLANs</td></tr></tbody></table>
<div class="callout"><div class="callout-title">Key idea</div><p>Each VLAN = one IP subnet = one broadcast domain. To move traffic between VLANs you need routing (Layer 3).</p></div>`,
          ar: `<h2>ما هي الـ VLAN؟</h2><p><strong>الـ VLAN (الشبكة المحلية الافتراضية)</strong> هي تجميع منطقي للأجهزة في نفس مجال البث، بغض النظر عن موقعها الفعلي. يمكن لسويتش واحد استضافة عدة VLANs؛ كل منها يتصرف كسويتش منفصل.</p>
<h2>لماذا نستخدم الـ VLANs؟</h2><ul><li><strong>التقسيم</strong> — فصل الأقسام (الموارد البشرية، المبيعات) للأمن.</li><li><strong>التحكم بالبث</strong> — يبقى البث داخل الـ VLAN، مما يقلل الازدحام.</li><li><strong>المرونة</strong> — تجميع المستخدمين منطقيًا لا حسب الكابلات.</li><li><strong>الأمن</strong> — لا تتواصل الأجهزة في VLANs مختلفة دون جهاز طبقة 3.</li></ul>
<h2>نطاقات الـ VLAN</h2><table><thead><tr><th>النطاق</th><th>النوع</th></tr></thead><tbody><tr><td>1، 1002-1005</td><td>افتراضي/محجوز</td></tr><tr><td>2-1001</td><td>VLANs عادية</td></tr><tr><td>1006-4094</td><td>VLANs ممتدة</td></tr></tbody></table>
<div class="callout"><div class="callout-title">الفكرة الأساسية</div><p>كل VLAN = شبكة فرعية IP واحدة = مجال بث واحد. لنقل المرور بين الـ VLANs تحتاج توجيهًا (الطبقة 3).</p></div>`
        },
        keyPoints: {
          en: ['A VLAN is a logical broadcast domain on a switch.', 'Each VLAN maps to one IP subnet.', 'VLANs improve security, performance and flexibility.', 'Inter-VLAN traffic requires Layer 3 routing.'],
          ar: ['الـ VLAN مجال بث منطقي على السويتش.', 'كل VLAN يقابل شبكة فرعية IP واحدة.', 'الـ VLANs تحسّن الأمن والأداء والمرونة.', 'المرور بين الـ VLANs يتطلب توجيه الطبقة 3.']
        },
        quiz: [
          { q: { en: 'What does a VLAN create?', ar: 'ماذا تُنشئ الـ VLAN؟' }, options: [{ en: 'A separate collision domain only', ar: 'مجال تصادم منفصل فقط' }, { en: 'A separate broadcast domain', ar: 'مجال بث منفصل' }, { en: 'A new physical switch', ar: 'سويتش مادي جديد' }, { en: 'A routing table', ar: 'جدول توجيه' }], answer: 1, explanation: { en: 'Each VLAN is its own broadcast domain.', ar: 'كل VLAN مجال بث خاص بها.' } },
          { q: { en: 'How do two different VLANs communicate?', ar: 'كيف تتواصل VLANان مختلفتان؟' }, options: [{ en: 'Automatically via the switch', ar: 'تلقائيًا عبر السويتش' }, { en: 'Through a Layer 3 device (router/L3 switch)', ar: 'عبر جهاز طبقة 3 (راوتر/سويتش L3)' }, { en: 'They never can', ar: 'لا يمكنهما أبدًا' }, { en: 'Via a hub', ar: 'عبر هَب' }], answer: 1, explanation: { en: 'Inter-VLAN routing requires a Layer 3 device.', ar: 'التوجيه بين الـ VLANs يتطلب جهاز طبقة 3.' } }
        ],
        flashcards: [
          { front: { en: 'VLAN = how many broadcast domains?', ar: 'الـ VLAN = كم مجال بث؟' }, back: { en: 'One per VLAN.', ar: 'واحد لكل VLAN.' } },
          { front: { en: 'Default VLAN on Cisco switches?', ar: 'الـ VLAN الافتراضية في سويتشات سيسكو؟' }, back: { en: 'VLAN 1.', ar: 'VLAN 1.' } }
        ]
      },
      {
        id: 'vlan-config',
        title: { en: 'Creating & Assigning VLANs', ar: 'إنشاء وإسناد الـ VLANs' },
        duration: 11, difficulty: 'intermediate',
        summary: { en: 'Configure VLANs and assign access ports to them on a Cisco switch.', ar: 'هيّئ الـ VLANs وأسند منافذ الوصول إليها على سويتش سيسكو.' },
        content: {
          en: `<h2>Creating a VLAN</h2><p>Enter global config, create the VLAN and optionally name it. Then assign <strong>access ports</strong> (ports facing end devices) to it.</p>
<h2>Access ports</h2><p>An <strong>access port</strong> belongs to exactly one VLAN and connects to a single end device (PC, printer, phone). The switch adds/removes no VLAN tag on access ports.</p>
<h2>Verification</h2><p>Use <code>show vlan brief</code> to see VLANs and their assigned ports, and <code>show interfaces status</code> for per-port VLAN membership.</p>
<div class="callout tip"><div class="callout-title">Tip</div><p>Creating a VLAN and assigning a port are two separate steps. Assigning a port to a non-existent VLAN auto-creates it on many IOS versions, but create it explicitly for clarity.</p></div>`,
          ar: `<h2>إنشاء VLAN</h2><p>ادخل التهيئة العامة، أنشئ الـ VLAN وسمّها اختياريًا. ثم أسند <strong>منافذ الوصول</strong> (المنافذ المواجهة للأجهزة النهائية) إليها.</p>
<h2>منافذ الوصول</h2><p><strong>منفذ الوصول</strong> ينتمي لـ VLAN واحدة فقط ويتصل بجهاز نهائي واحد (حاسوب، طابعة، هاتف). لا يضيف السويتش أو يزيل أي وسم VLAN على منافذ الوصول.</p>
<h2>التحقق</h2><p>استخدم <code>show vlan brief</code> لرؤية الـ VLANs ومنافذها، و<code>show interfaces status</code> لعضوية كل منفذ.</p>
<div class="callout tip"><div class="callout-title">نصيحة</div><p>إنشاء VLAN وإسناد منفذ خطوتان منفصلتان. إسناد منفذ لـ VLAN غير موجودة يُنشئها تلقائيًا في كثير من إصدارات IOS، لكن أنشئها صراحةً للوضوح.</p></div>`
        },
        keyPoints: {
          en: ['Create VLANs in global config with the vlan command.', 'Access ports carry one VLAN to an end device.', 'switchport mode access + switchport access vlan assign a port.', 'Verify with show vlan brief.'],
          ar: ['أنشئ الـ VLANs في التهيئة العامة بأمر vlan.', 'منافذ الوصول تحمل VLAN واحدة لجهاز نهائي.', 'switchport mode access + switchport access vlan يسندان المنفذ.', 'تحقق بـ show vlan brief.']
        },
        examples: [
          { title: { en: 'Configure VLAN 10 and assign ports', ar: 'تهيئة VLAN 10 وإسناد المنافذ' }, code: 'Switch# configure terminal\nSwitch(config)# vlan 10\nSwitch(config-vlan)# name SALES\nSwitch(config-vlan)# exit\nSwitch(config)# interface range fa0/1 - 8\nSwitch(config-if-range)# switchport mode access\nSwitch(config-if-range)# switchport access vlan 10\nSwitch(config-if-range)# end\nSwitch# show vlan brief' }
        ],
        commands: [
          { cmd: 'vlan 10', desc: { en: 'Create VLAN 10.', ar: 'إنشاء VLAN 10.' } },
          { cmd: 'name SALES', desc: { en: 'Name the VLAN.', ar: 'تسمية الـ VLAN.' } },
          { cmd: 'switchport mode access', desc: { en: 'Set the port as an access port.', ar: 'تعيين المنفذ كمنفذ وصول.' } },
          { cmd: 'switchport access vlan 10', desc: { en: 'Assign the port to VLAN 10.', ar: 'إسناد المنفذ إلى VLAN 10.' } },
          { cmd: 'show vlan brief', desc: { en: 'List VLANs and ports.', ar: 'عرض الـ VLANs والمنافذ.' } }
        ],
        lab: {
          title: { en: 'Lab: Create and Verify VLANs', ar: 'مختبر: إنشاء والتحقق من الـ VLANs' },
          objective: { en: 'Create VLAN 10 (SALES) and VLAN 20 (HR), assign access ports, and verify.', ar: 'أنشئ VLAN 10 (SALES) و VLAN 20 (HR)، وأسند منافذ الوصول، وتحقق.' },
          topology: 'PC1 - Fa0/1 [SW1] Fa0/2 - PC2',
          steps: [
            { en: 'Create VLAN 10 named SALES and VLAN 20 named HR.', ar: 'أنشئ VLAN 10 باسم SALES و VLAN 20 باسم HR.' },
            { en: 'Set Fa0/1 to access VLAN 10 and Fa0/2 to access VLAN 20.', ar: 'اجعل Fa0/1 وصولًا لـ VLAN 10 و Fa0/2 لـ VLAN 20.' },
            { en: 'Give PC1 and PC2 IPs in different subnets.', ar: 'أعطِ PC1 و PC2 عناوين في شبكتين مختلفتين.' },
            { en: 'Run show vlan brief to confirm port membership.', ar: 'نفّذ show vlan brief لتأكيد عضوية المنافذ.' }
          ],
          verify: { en: 'PC1 and PC2 should NOT ping each other (different VLANs, no routing).', ar: 'يجب ألا ينجح ping بين PC1 و PC2 (VLANs مختلفة بلا توجيه).' }
        },
        quiz: [
          { q: { en: 'Which command assigns an access port to VLAN 10?', ar: 'أي أمر يسند منفذ وصول إلى VLAN 10؟' }, options: [{ en: 'vlan 10', ar: 'vlan 10' }, { en: 'switchport access vlan 10', ar: 'switchport access vlan 10' }, { en: 'switchport trunk vlan 10', ar: 'switchport trunk vlan 10' }, { en: 'ip vlan 10', ar: 'ip vlan 10' }], answer: 1, explanation: { en: 'switchport access vlan 10 assigns the port.', ar: 'switchport access vlan 10 يسند المنفذ.' } },
          { q: { en: 'Which command lists VLANs and their ports?', ar: 'أي أمر يعرض الـ VLANs ومنافذها؟' }, options: [{ en: 'show ip route', ar: 'show ip route' }, { en: 'show vlan brief', ar: 'show vlan brief' }, { en: 'show running-config', ar: 'show running-config' }, { en: 'show mac address-table', ar: 'show mac address-table' }], answer: 1, explanation: { en: 'show vlan brief lists VLANs and assigned ports.', ar: 'show vlan brief يعرض الـ VLANs والمنافذ المسندة.' } }
        ],
        flashcards: [
          { front: { en: 'Command to enter VLAN 10 config?', ar: 'أمر الدخول لتهيئة VLAN 10؟' }, back: { en: 'vlan 10', ar: 'vlan 10' } },
          { front: { en: 'An access port belongs to how many VLANs?', ar: 'منفذ الوصول ينتمي لكم VLAN؟' }, back: { en: 'Exactly one.', ar: 'واحدة فقط.' } }
        ]
      },
      {
        id: 'trunking-8021q',
        title: { en: 'Trunking & 802.1Q Tagging', ar: 'الـ Trunking ووسم 802.1Q' },
        duration: 11, difficulty: 'intermediate',
        summary: { en: 'Trunks carry traffic for many VLANs between switches using 802.1Q tags.', ar: 'تحمل وصلات الـ trunk مرور عدة VLANs بين السويتشات باستخدام وسوم 802.1Q.' },
        content: {
          en: `<h2>Why trunks?</h2><p>An access port carries one VLAN. To carry <strong>many VLANs</strong> over a single link between switches, you use a <strong>trunk port</strong>.</p>
<h2>802.1Q tagging</h2><p><strong>IEEE 802.1Q</strong> inserts a 4-byte tag into each Ethernet frame identifying its VLAN. The receiving switch reads the tag to keep VLANs separate.</p>
<h2>The native VLAN</h2><p>Frames on the <strong>native VLAN</strong> (default VLAN 1) are sent <em>untagged</em> across a trunk. Both ends must agree on the native VLAN or you get a mismatch. Best practice: set the native VLAN to an unused VLAN for security.</p>
<table><thead><tr><th>Port type</th><th>VLANs carried</th><th>Tagging</th></tr></thead><tbody><tr><td>Access</td><td>One</td><td>Untagged</td></tr><tr><td>Trunk</td><td>Many</td><td>802.1Q tagged (native untagged)</td></tr></tbody></table>
<div class="callout warn"><div class="callout-title">Native VLAN mismatch</div><p>If the native VLAN differs on each end, CDP warns you and traffic can leak between VLANs. Always match them.</p></div>`,
          ar: `<h2>لماذا الـ trunks؟</h2><p>منفذ الوصول يحمل VLAN واحدة. لحمل <strong>عدة VLANs</strong> عبر وصلة واحدة بين السويتشات، تستخدم <strong>منفذ trunk</strong>.</p>
<h2>وسم 802.1Q</h2><p>يُدرج <strong>IEEE 802.1Q</strong> وسمًا بحجم 4 بايت في كل إطار إيثرنت يحدد الـ VLAN الخاصة به. يقرأ السويتش المستقبِل الوسم ليبقي الـ VLANs منفصلة.</p>
<h2>الـ VLAN الأصلية (Native)</h2><p>تُرسل أطر <strong>الـ VLAN الأصلية</strong> (الافتراضية VLAN 1) <em>دون وسم</em> عبر الـ trunk. يجب أن يتفق الطرفان على الـ VLAN الأصلية وإلا حدث عدم تطابق. أفضل ممارسة: اجعلها VLAN غير مستخدمة للأمن.</p>
<table><thead><tr><th>نوع المنفذ</th><th>الـ VLANs المحمولة</th><th>الوسم</th></tr></thead><tbody><tr><td>Access</td><td>واحدة</td><td>بلا وسم</td></tr><tr><td>Trunk</td><td>عدة</td><td>موسوم 802.1Q (الأصلية بلا وسم)</td></tr></tbody></table>
<div class="callout warn"><div class="callout-title">عدم تطابق الـ VLAN الأصلية</div><p>إذا اختلفت الـ VLAN الأصلية بين الطرفين، يحذّرك CDP وقد يتسرّب المرور بين الـ VLANs. طابقها دائمًا.</p></div>`
        },
        keyPoints: {
          en: ['Trunks carry multiple VLANs between switches.', '802.1Q adds a 4-byte VLAN tag to frames.', 'Native VLAN traffic is sent untagged.', 'Native VLAN must match on both trunk ends.'],
          ar: ['الـ trunks تحمل عدة VLANs بين السويتشات.', '802.1Q يضيف وسم VLAN بحجم 4 بايت للأطر.', 'مرور الـ VLAN الأصلية يُرسل دون وسم.', 'يجب تطابق الـ VLAN الأصلية على طرفي الـ trunk.']
        },
        commands: [
          { cmd: 'switchport mode trunk', desc: { en: 'Configure the port as a trunk.', ar: 'تهيئة المنفذ كـ trunk.' } },
          { cmd: 'switchport trunk native vlan 99', desc: { en: 'Set the native VLAN to 99.', ar: 'تعيين الـ VLAN الأصلية إلى 99.' } },
          { cmd: 'switchport trunk allowed vlan 10,20', desc: { en: 'Restrict which VLANs cross the trunk.', ar: 'تقييد الـ VLANs المسموح لها بعبور الـ trunk.' } },
          { cmd: 'show interfaces trunk', desc: { en: 'Verify trunk status and allowed VLANs.', ar: 'التحقق من حالة الـ trunk والـ VLANs المسموحة.' } }
        ],
        quiz: [
          { q: { en: 'What does 802.1Q add to a frame?', ar: 'ماذا يضيف 802.1Q إلى الإطار؟' }, options: [{ en: 'An IP header', ar: 'ترويسة IP' }, { en: 'A 4-byte VLAN tag', ar: 'وسم VLAN بحجم 4 بايت' }, { en: 'A MAC address', ar: 'عنوان MAC' }, { en: 'A TCP port', ar: 'منفذ TCP' }], answer: 1, explanation: { en: '802.1Q inserts a 4-byte tag carrying the VLAN ID.', ar: '802.1Q يدرج وسمًا 4 بايت يحمل معرّف الـ VLAN.' } },
          { q: { en: 'Native VLAN frames are sent…', ar: 'أطر الـ VLAN الأصلية تُرسل…' }, options: [{ en: 'Tagged', ar: 'موسومة' }, { en: 'Untagged', ar: 'دون وسم' }, { en: 'Encrypted', ar: 'مشفّرة' }, { en: 'Dropped', ar: 'مُسقطة' }], answer: 1, explanation: { en: 'Native VLAN traffic crosses the trunk untagged.', ar: 'مرور الـ VLAN الأصلية يعبر الـ trunk دون وسم.' } }
        ],
        flashcards: [
          { front: { en: 'Trunk encapsulation standard?', ar: 'معيار تغليف الـ trunk؟' }, back: { en: 'IEEE 802.1Q.', ar: 'IEEE 802.1Q.' } },
          { front: { en: 'Default native VLAN?', ar: 'الـ VLAN الأصلية الافتراضية؟' }, back: { en: 'VLAN 1.', ar: 'VLAN 1.' } }
        ]
      },
      {
        id: 'inter-vlan-routing',
        title: { en: 'Inter-VLAN Routing', ar: 'التوجيه بين الـ VLANs' },
        duration: 12, difficulty: 'intermediate',
        summary: { en: 'Three ways to route between VLANs: legacy per-interface, router-on-a-stick, and L3 switch SVIs.', ar: 'ثلاث طرق للتوجيه بين الـ VLANs: التقليدية لكل واجهة، الراوتر على عصا، وواجهات SVI لسويتش L3.' },
        content: {
          en: `<h2>The problem</h2><p>Devices in different VLANs are in different subnets and need a router to communicate. There are three approaches.</p>
<h2>1. Router-on-a-stick (ROAS)</h2><p>A single router interface is divided into <strong>subinterfaces</strong>, one per VLAN, each with an 802.1Q encapsulation and a gateway IP. The switch link is a trunk.</p>
<h2>2. Layer 3 switch (SVIs)</h2><p>A multilayer switch uses <strong>Switched Virtual Interfaces (SVIs)</strong> — a virtual VLAN interface with an IP that acts as the gateway. Faster and more scalable than ROAS.</p>
<h2>3. Legacy (separate physical interfaces)</h2><p>One router physical interface per VLAN. Wastes ports; rarely used today.</p>
<div class="callout tip"><div class="callout-title">Exam tip</div><p>For ROAS, the subinterface number usually matches the VLAN ID, and you configure <code>encapsulation dot1Q [vlan]</code> before the IP address.</p></div>`,
          ar: `<h2>المشكلة</h2><p>الأجهزة في VLANs مختلفة تقع في شبكات فرعية مختلفة وتحتاج راوترًا للتواصل. هناك ثلاث طرق.</p>
<h2>1. الراوتر على عصا (ROAS)</h2><p>تُقسَّم واجهة راوتر واحدة إلى <strong>واجهات فرعية</strong>، واحدة لكل VLAN، كل منها بتغليف 802.1Q وعنوان بوابة. ووصلة السويتش تكون trunk.</p>
<h2>2. سويتش الطبقة 3 (SVIs)</h2><p>يستخدم السويتش متعدد الطبقات <strong>واجهات افتراضية (SVIs)</strong> — واجهة VLAN افتراضية بعنوان IP تعمل كبوابة. أسرع وأكثر قابلية للتوسّع من ROAS.</p>
<h2>3. التقليدية (واجهات مادية منفصلة)</h2><p>واجهة راوتر مادية لكل VLAN. تهدر المنافذ؛ نادرة اليوم.</p>
<div class="callout tip"><div class="callout-title">نصيحة الامتحان</div><p>في ROAS عادة يطابق رقم الواجهة الفرعية معرّف الـ VLAN، وتُهيّئ <code>encapsulation dot1Q [vlan]</code> قبل عنوان IP.</p></div>`
        },
        keyPoints: {
          en: ['Routing between VLANs needs a Layer 3 device.', 'ROAS uses router subinterfaces over a trunk.', 'L3 switches use SVIs and are more scalable.', 'Subinterface needs encapsulation dot1Q before the IP.'],
          ar: ['التوجيه بين الـ VLANs يحتاج جهاز طبقة 3.', 'ROAS يستخدم واجهات راوتر فرعية عبر trunk.', 'سويتشات L3 تستخدم SVIs وأكثر قابلية للتوسّع.', 'الواجهة الفرعية تحتاج encapsulation dot1Q قبل IP.']
        },
        examples: [
          { title: { en: 'Router-on-a-stick', ar: 'الراوتر على عصا' }, code: 'R1(config)# interface g0/0.10\nR1(config-subif)# encapsulation dot1Q 10\nR1(config-subif)# ip address 192.168.10.1 255.255.255.0\nR1(config)# interface g0/0.20\nR1(config-subif)# encapsulation dot1Q 20\nR1(config-subif)# ip address 192.168.20.1 255.255.255.0' }
        ],
        commands: [
          { cmd: 'interface g0/0.10', desc: { en: 'Create subinterface for VLAN 10.', ar: 'إنشاء واجهة فرعية لـ VLAN 10.' } },
          { cmd: 'encapsulation dot1Q 10', desc: { en: 'Tag subinterface traffic for VLAN 10.', ar: 'وسم مرور الواجهة الفرعية لـ VLAN 10.' } },
          { cmd: 'ip routing', desc: { en: 'Enable routing on a Layer 3 switch.', ar: 'تفعيل التوجيه على سويتش L3.' } },
          { cmd: 'interface vlan 10', desc: { en: 'Create an SVI for VLAN 10.', ar: 'إنشاء SVI لـ VLAN 10.' } }
        ],
        quiz: [
          { q: { en: 'In router-on-a-stick, what is configured on each subinterface?', ar: 'في الراوتر على عصا، ماذا يُهيّأ على كل واجهة فرعية؟' }, options: [{ en: 'A trunk', ar: 'trunk' }, { en: 'encapsulation dot1Q and an IP', ar: 'encapsulation dot1Q وعنوان IP' }, { en: 'A MAC filter', ar: 'مرشّح MAC' }, { en: 'STP priority', ar: 'أولوية STP' }], answer: 1, explanation: { en: 'Each subinterface needs dot1Q encapsulation and a gateway IP.', ar: 'كل واجهة فرعية تحتاج تغليف dot1Q وعنوان بوابة.' } },
          { q: { en: 'What does an L3 switch use to route between VLANs?', ar: 'ماذا يستخدم سويتش L3 للتوجيه بين الـ VLANs؟' }, options: [{ en: 'SVIs', ar: 'SVIs' }, { en: 'Trunks only', ar: 'trunks فقط' }, { en: 'Hubs', ar: 'هَبات' }, { en: 'ACLs', ar: 'ACLs' }], answer: 0, explanation: { en: 'Switched Virtual Interfaces (SVIs) act as VLAN gateways.', ar: 'الواجهات الافتراضية (SVIs) تعمل كبوابات للـ VLANs.' } }
        ],
        flashcards: [
          { front: { en: 'What is an SVI?', ar: 'ما هي SVI؟' }, back: { en: 'A virtual VLAN interface on an L3 switch used as a gateway.', ar: 'واجهة VLAN افتراضية على سويتش L3 تُستخدم كبوابة.' } }
        ]
      },
      {
        id: 'stp-fundamentals',
        title: { en: 'Spanning Tree Protocol (STP)', ar: 'بروتوكول الشجرة الممتدة (STP)' },
        duration: 13, difficulty: 'advanced',
        summary: { en: 'STP prevents Layer 2 loops by blocking redundant paths and electing a root bridge.', ar: 'يمنع STP حلقات الطبقة 2 بحجب المسارات الزائدة وانتخاب جسر الجذر.' },
        content: {
          en: `<h2>The loop problem</h2><p>Redundant switch links are great for failover but create <strong>Layer 2 loops</strong> — broadcast storms, MAC table instability and duplicate frames. <strong>STP (802.1D)</strong> solves this by logically blocking redundant paths.</p>
<h2>Root bridge election</h2><p>Switches elect a <strong>root bridge</strong> based on the lowest <strong>Bridge ID</strong> (priority + MAC). Default priority is 32768; lower wins. All other switches find their lowest-cost path to the root.</p>
<h2>Port roles & states</h2><table><thead><tr><th>Role / State</th><th>Meaning</th></tr></thead><tbody>
<tr><td>Root port</td><td>Best path toward the root bridge</td></tr>
<tr><td>Designated port</td><td>Forwarding port on a segment</td></tr>
<tr><td>Blocking</td><td>Logically disabled to break the loop</td></tr>
<tr><td>Listening → Learning → Forwarding</td><td>Transition states (~30–50s total)</td></tr></tbody></table>
<h2>Path cost</h2><p>STP picks paths by cumulative <strong>cost</strong> (lower bandwidth = higher cost). 10 Gbps=2, 1 Gbps=4, 100 Mbps=19.</p>
<div class="callout warn"><div class="callout-title">Why it matters</div><p>Without STP, a single redundant cable can take down an entire switched network in seconds via a broadcast storm.</p></div>`,
          ar: `<h2>مشكلة الحلقات</h2><p>الوصلات الزائدة بين السويتشات ممتازة للاحتياط لكنها تُنشئ <strong>حلقات الطبقة 2</strong> — عواصف بث، عدم استقرار جدول MAC، وأطر مكررة. يحل <strong>STP (802.1D)</strong> ذلك بحجب المسارات الزائدة منطقيًا.</p>
<h2>انتخاب جسر الجذر</h2><p>تنتخب السويتشات <strong>جسر الجذر</strong> بناءً على أقل <strong>Bridge ID</strong> (الأولوية + MAC). الأولوية الافتراضية 32768؛ الأقل يفوز. وتجد بقية السويتشات أقل مسار تكلفة إلى الجذر.</p>
<h2>أدوار وحالات المنافذ</h2><table><thead><tr><th>الدور/الحالة</th><th>المعنى</th></tr></thead><tbody>
<tr><td>Root port</td><td>أفضل مسار نحو جسر الجذر</td></tr>
<tr><td>Designated port</td><td>منفذ تمرير على القطعة</td></tr>
<tr><td>Blocking</td><td>معطّل منطقيًا لكسر الحلقة</td></tr>
<tr><td>Listening → Learning → Forwarding</td><td>حالات انتقالية (~30–50 ثانية)</td></tr></tbody></table>
<h2>تكلفة المسار</h2><p>يختار STP المسارات حسب <strong>التكلفة</strong> التراكمية (عرض نطاق أقل = تكلفة أعلى). 10 جيجابت=2، 1 جيجابت=4، 100 ميجابت=19.</p>
<div class="callout warn"><div class="callout-title">لماذا يهم</div><p>بدون STP، كابل زائد واحد قد يُسقط شبكة سويتشات كاملة في ثوانٍ عبر عاصفة بث.</p></div>`
        },
        keyPoints: {
          en: ['STP prevents Layer 2 loops by blocking redundant links.', 'Lowest Bridge ID (priority+MAC) becomes the root bridge.', 'Port states: Blocking, Listening, Learning, Forwarding.', 'Lower bandwidth links have higher STP cost.'],
          ar: ['STP يمنع حلقات الطبقة 2 بحجب الوصلات الزائدة.', 'أقل Bridge ID (أولوية+MAC) يصبح جسر الجذر.', 'حالات المنافذ: Blocking، Listening، Learning، Forwarding.', 'الوصلات الأقل عرض نطاق لها تكلفة STP أعلى.']
        },
        commands: [
          { cmd: 'spanning-tree vlan 1 root primary', desc: { en: 'Force this switch to be the root bridge.', ar: 'إجبار هذا السويتش ليكون جسر الجذر.' } },
          { cmd: 'spanning-tree vlan 1 priority 4096', desc: { en: 'Set the bridge priority (lower = preferred).', ar: 'تعيين أولوية الجسر (أقل = مفضّل).' } },
          { cmd: 'show spanning-tree', desc: { en: 'Display STP roles, states and the root.', ar: 'عرض أدوار وحالات STP والجذر.' } }
        ],
        quiz: [
          { q: { en: 'How is the STP root bridge chosen?', ar: 'كيف يُختار جسر الجذر في STP؟' }, options: [{ en: 'Highest IP', ar: 'أعلى IP' }, { en: 'Lowest Bridge ID', ar: 'أقل Bridge ID' }, { en: 'Most ports', ar: 'أكثر منافذ' }, { en: 'Random', ar: 'عشوائي' }], answer: 1, explanation: { en: 'The switch with the lowest Bridge ID (priority+MAC) wins.', ar: 'السويتش بأقل Bridge ID (أولوية+MAC) يفوز.' } },
          { q: { en: 'What problem does STP prevent?', ar: 'أي مشكلة يمنعها STP؟' }, options: [{ en: 'IP conflicts', ar: 'تعارض IP' }, { en: 'Layer 2 switching loops', ar: 'حلقات تبديل الطبقة 2' }, { en: 'Slow DNS', ar: 'بطء DNS' }, { en: 'Weak Wi-Fi', ar: 'ضعف الواي فاي' }], answer: 1, explanation: { en: 'STP blocks redundant paths to stop loops/broadcast storms.', ar: 'STP يحجب المسارات الزائدة لإيقاف الحلقات/عواصف البث.' } },
          { q: { en: 'Default bridge priority on Cisco switches?', ar: 'أولوية الجسر الافتراضية في سويتشات سيسكو؟' }, options: [{ en: '0', ar: '0' }, { en: '4096', ar: '4096' }, { en: '32768', ar: '32768' }, { en: '65535', ar: '65535' }], answer: 2, explanation: { en: 'Default STP priority is 32768.', ar: 'أولوية STP الافتراضية 32768.' } }
        ],
        flashcards: [
          { front: { en: 'STP standard?', ar: 'معيار STP؟' }, back: { en: 'IEEE 802.1D.', ar: 'IEEE 802.1D.' } },
          { front: { en: 'STP port that gives best path to root?', ar: 'منفذ STP الذي يعطي أفضل مسار للجذر؟' }, back: { en: 'Root port.', ar: 'Root port.' } }
        ]
      },
      {
        id: 'rstp-portfast',
        title: { en: 'Rapid STP, PortFast & BPDU Guard', ar: 'STP السريع و PortFast و BPDU Guard' },
        duration: 10, difficulty: 'advanced',
        summary: { en: 'RSTP converges in milliseconds; PortFast speeds up edge ports; BPDU Guard protects them.', ar: 'RSTP يتقارب في أجزاء من الثانية؛ PortFast يسرّع منافذ الحافة؛ BPDU Guard يحميها.' },
        content: {
          en: `<h2>Rapid STP (802.1w)</h2><p><strong>RSTP</strong> is a faster evolution of STP. It converges in <strong>under a second</strong> versus 30–50s for classic STP, using new port roles (alternate, backup) and proposal/agreement handshakes.</p>
<h2>PortFast</h2><p><strong>PortFast</strong> lets an access (edge) port skip the listening/learning states and go straight to forwarding — ideal for ports connected to PCs/servers so they get a link immediately (and DHCP doesn't time out).</p>
<h2>BPDU Guard</h2><p>A PortFast port should never receive BPDUs. <strong>BPDU Guard</strong> shuts the port down (err-disabled) if it does — protecting against someone plugging a rogue switch into an access port.</p>
<table><thead><tr><th>Feature</th><th>Purpose</th></tr></thead><tbody><tr><td>RSTP</td><td>Sub-second convergence</td></tr><tr><td>PortFast</td><td>Instant forwarding on edge ports</td></tr><tr><td>BPDU Guard</td><td>Disable port if a BPDU arrives</td></tr></tbody></table>
<div class="callout danger"><div class="callout-title">Never use PortFast on trunks</div><p>Enabling PortFast on a switch-to-switch link can create a temporary loop. Use it only on end-device access ports.</p></div>`,
          ar: `<h2>STP السريع (802.1w)</h2><p><strong>RSTP</strong> تطوّر أسرع من STP. يتقارب في <strong>أقل من ثانية</strong> مقابل 30–50 ثانية لـ STP الكلاسيكي، مستخدمًا أدوار منافذ جديدة (alternate، backup) ومصافحات proposal/agreement.</p>
<h2>PortFast</h2><p><strong>PortFast</strong> يتيح لمنفذ وصول (حافة) تخطّي حالتي listening/learning والانتقال مباشرة إلى forwarding — مثالي للمنافذ المتصلة بالحواسيب/الخوادم لتحصل على وصلة فورًا (ولا ينتهي وقت DHCP).</p>
<h2>BPDU Guard</h2><p>منفذ PortFast يجب ألا يستقبل BPDUs. <strong>BPDU Guard</strong> يُغلق المنفذ (err-disabled) إذا حدث ذلك — حمايةً من توصيل سويتش دخيل بمنفذ وصول.</p>
<table><thead><tr><th>الميزة</th><th>الغرض</th></tr></thead><tbody><tr><td>RSTP</td><td>تقارب أقل من ثانية</td></tr><tr><td>PortFast</td><td>تمرير فوري على منافذ الحافة</td></tr><tr><td>BPDU Guard</td><td>تعطيل المنفذ إذا وصل BPDU</td></tr></tbody></table>
<div class="callout danger"><div class="callout-title">لا تستخدم PortFast على الـ trunks</div><p>تفعيل PortFast على وصلة سويتش-سويتش قد يُنشئ حلقة مؤقتة. استخدمه فقط على منافذ وصول الأجهزة النهائية.</p></div>`
        },
        keyPoints: {
          en: ['RSTP (802.1w) converges in under a second.', 'PortFast moves edge ports straight to forwarding.', 'BPDU Guard err-disables a PortFast port that receives a BPDU.', 'Never enable PortFast on trunk links.'],
          ar: ['RSTP (802.1w) يتقارب في أقل من ثانية.', 'PortFast ينقل منافذ الحافة مباشرة للتمرير.', 'BPDU Guard يعطّل منفذ PortFast الذي يستقبل BPDU.', 'لا تفعّل PortFast على وصلات الـ trunk.']
        },
        commands: [
          { cmd: 'spanning-tree mode rapid-pvst', desc: { en: 'Enable Rapid PVST+ (RSTP).', ar: 'تفعيل Rapid PVST+ (RSTP).' } },
          { cmd: 'spanning-tree portfast', desc: { en: 'Enable PortFast on an access port.', ar: 'تفعيل PortFast على منفذ وصول.' } },
          { cmd: 'spanning-tree bpduguard enable', desc: { en: 'Enable BPDU Guard on the port.', ar: 'تفعيل BPDU Guard على المنفذ.' } }
        ],
        quiz: [
          { q: { en: 'What does BPDU Guard do when a PortFast port receives a BPDU?', ar: 'ماذا يفعل BPDU Guard عندما يستقبل منفذ PortFast إطار BPDU؟' }, options: [{ en: 'Forwards it', ar: 'يمرّره' }, { en: 'Err-disables the port', ar: 'يعطّل المنفذ (err-disable)' }, { en: 'Ignores it', ar: 'يتجاهله' }, { en: 'Becomes root', ar: 'يصبح الجذر' }], answer: 1, explanation: { en: 'BPDU Guard shuts the port to err-disabled state.', ar: 'BPDU Guard يُغلق المنفذ إلى حالة err-disabled.' } },
          { q: { en: 'RSTP standard number?', ar: 'رقم معيار RSTP؟' }, options: [{ en: '802.1D', ar: '802.1D' }, { en: '802.1w', ar: '802.1w' }, { en: '802.1Q', ar: '802.1Q' }, { en: '802.3', ar: '802.3' }], answer: 1, explanation: { en: 'RSTP is IEEE 802.1w.', ar: 'RSTP هو IEEE 802.1w.' } }
        ],
        flashcards: [
          { front: { en: 'Where do you enable PortFast?', ar: 'أين تفعّل PortFast؟' }, back: { en: 'On access/edge ports to end devices only.', ar: 'على منافذ الوصول/الحافة للأجهزة النهائية فقط.' } }
        ]
      },
      {
        id: 'etherchannel',
        title: { en: 'EtherChannel (Link Aggregation)', ar: 'EtherChannel (تجميع الوصلات)' },
        duration: 11, difficulty: 'advanced',
        summary: { en: 'Bundle multiple physical links into one logical link for more bandwidth and redundancy.', ar: 'جمّع عدة وصلات مادية في وصلة منطقية واحدة لمزيد من النطاق والاحتياطية.' },
        content: {
          en: `<h2>What is EtherChannel?</h2><p><strong>EtherChannel</strong> bundles up to 8 physical links into one logical <strong>port-channel</strong>. STP sees it as a single link (no blocking), bandwidth adds up, and traffic survives if one member fails.</p>
<h2>Negotiation protocols</h2><table><thead><tr><th>Protocol</th><th>Type</th><th>Modes</th></tr></thead><tbody>
<tr><td>LACP (802.3ad)</td><td>Open standard</td><td>active / passive</td></tr>
<tr><td>PAgP</td><td>Cisco proprietary</td><td>desirable / auto</td></tr>
<tr><td>Static</td><td>No negotiation</td><td>on</td></tr></tbody></table>
<p>For a channel to form: <strong>LACP</strong> needs at least one side active (active/active or active/passive). Both <em>passive</em> won't form. <strong>PAgP</strong> needs at least one desirable.</p>
<h2>Consistency requirement</h2><p>All member ports must match in <strong>speed, duplex, allowed VLANs and mode</strong>, or the channel won't bundle.</p>
<div class="callout tip"><div class="callout-title">Load balancing</div><p>EtherChannel balances per-flow (by src/dst MAC or IP), not per-packet — so a single flow uses one physical link.</p></div>`,
          ar: `<h2>ما هو EtherChannel؟</h2><p><strong>EtherChannel</strong> يجمّع حتى 8 وصلات مادية في <strong>port-channel</strong> منطقية واحدة. يراها STP كوصلة واحدة (بلا حجب)، ويُجمَع النطاق، ويستمر المرور إذا فشل أحد الأعضاء.</p>
<h2>بروتوكولات التفاوض</h2><table><thead><tr><th>البروتوكول</th><th>النوع</th><th>الأوضاع</th></tr></thead><tbody>
<tr><td>LACP (802.3ad)</td><td>معيار مفتوح</td><td>active / passive</td></tr>
<tr><td>PAgP</td><td>خاص بسيسكو</td><td>desirable / auto</td></tr>
<tr><td>ثابت</td><td>بلا تفاوض</td><td>on</td></tr></tbody></table>
<p>لتكوين القناة: <strong>LACP</strong> يحتاج طرفًا واحدًا على الأقل active (active/active أو active/passive). كلاهما <em>passive</em> لن يتكوّن. و<strong>PAgP</strong> يحتاج طرفًا واحدًا على الأقل desirable.</p>
<h2>شرط التطابق</h2><p>كل المنافذ الأعضاء يجب أن تتطابق في <strong>السرعة والازدواجية والـ VLANs المسموحة والوضع</strong>، وإلا لن تتجمّع القناة.</p>
<div class="callout tip"><div class="callout-title">موازنة الحمل</div><p>EtherChannel يوازن لكل تدفق (حسب MAC أو IP المصدر/الوجهة) لا لكل حزمة — فالتدفق الواحد يستخدم وصلة مادية واحدة.</p></div>`
        },
        keyPoints: {
          en: ['EtherChannel bundles up to 8 links into one logical port-channel.', 'LACP is the open standard (active/passive); PAgP is Cisco (desirable/auto).', 'Both sides passive (or both auto) will NOT form a channel.', 'Member ports must match speed, duplex, VLANs and mode.'],
          ar: ['EtherChannel يجمّع حتى 8 وصلات في port-channel منطقية واحدة.', 'LACP معيار مفتوح (active/passive)؛ PAgP خاص بسيسكو (desirable/auto).', 'كلا الطرفين passive (أو auto) لن يكوّن قناة.', 'المنافذ الأعضاء يجب أن تتطابق في السرعة والازدواجية والـ VLANs والوضع.']
        },
        examples: [
          { title: { en: 'LACP EtherChannel', ar: 'EtherChannel بـ LACP' }, code: 'SW1(config)# interface range g0/1 - 2\nSW1(config-if-range)# channel-group 1 mode active\nSW1(config-if-range)# exit\nSW1(config)# interface port-channel 1\nSW1(config-if)# switchport mode trunk\nSW1# show etherchannel summary' }
        ],
        commands: [
          { cmd: 'channel-group 1 mode active', desc: { en: 'Add interfaces to LACP channel 1.', ar: 'إضافة الواجهات لقناة LACP رقم 1.' } },
          { cmd: 'interface port-channel 1', desc: { en: 'Configure the logical port-channel.', ar: 'تهيئة الـ port-channel المنطقية.' } },
          { cmd: 'show etherchannel summary', desc: { en: 'Verify channel status and members.', ar: 'التحقق من حالة القناة وأعضائها.' } }
        ],
        lab: {
          title: { en: 'Lab: Build an LACP EtherChannel', ar: 'مختبر: بناء EtherChannel بـ LACP' },
          objective: { en: 'Bundle two links between SW1 and SW2 into a trunked port-channel using LACP.', ar: 'جمّع وصلتين بين SW1 و SW2 في port-channel من نوع trunk باستخدام LACP.' },
          topology: '[SW1] g0/1 === g0/1 [SW2]\n       g0/2 === g0/2',
          steps: [
            { en: 'On SW1, add g0/1-2 to channel-group 1 mode active.', ar: 'على SW1 أضف g0/1-2 إلى channel-group 1 mode active.' },
            { en: 'On SW2, do the same (mode active or passive).', ar: 'على SW2 افعل نفس الشيء (active أو passive).' },
            { en: 'Configure interface port-channel 1 as a trunk on both.', ar: 'هيّئ interface port-channel 1 كـ trunk على الطرفين.' },
            { en: 'Run show etherchannel summary.', ar: 'نفّذ show etherchannel summary.' }
          ],
          verify: { en: 'The Po1 should show flags (SU) and member ports (P) — bundled and in use.', ar: 'يجب أن تُظهر Po1 الأعلام (SU) والمنافذ الأعضاء (P) — مجمّعة وقيد الاستخدام.' }
        },
        quiz: [
          { q: { en: 'Which is the open-standard EtherChannel protocol?', ar: 'أي بروتوكول EtherChannel هو المعيار المفتوح؟' }, options: [{ en: 'PAgP', ar: 'PAgP' }, { en: 'LACP', ar: 'LACP' }, { en: 'VTP', ar: 'VTP' }, { en: 'DTP', ar: 'DTP' }], answer: 1, explanation: { en: 'LACP (802.3ad) is the open standard; PAgP is Cisco proprietary.', ar: 'LACP (802.3ad) هو المعيار المفتوح؛ PAgP خاص بسيسكو.' } },
          { q: { en: 'Two ports set to LACP "passive/passive" will…', ar: 'منفذان على LACP "passive/passive" سوف…' }, options: [{ en: 'Form a channel', ar: 'يكوّنان قناة' }, { en: 'Not form a channel', ar: 'لا يكوّنان قناة' }, { en: 'Form two channels', ar: 'يكوّنان قناتين' }, { en: 'Become trunks', ar: 'يصبحان trunks' }], answer: 1, explanation: { en: 'At least one side must be active for LACP to negotiate.', ar: 'يجب أن يكون أحد الطرفين active على الأقل ليتفاوض LACP.' } }
        ],
        flashcards: [
          { front: { en: 'Max links per EtherChannel?', ar: 'أقصى وصلات لكل EtherChannel؟' }, back: { en: '8 active links.', ar: '8 وصلات نشطة.' } },
          { front: { en: 'LACP modes?', ar: 'أوضاع LACP؟' }, back: { en: 'active / passive.', ar: 'active / passive.' } }
        ]
      },
      {
        id: 'wireless-fundamentals',
        title: { en: 'Wireless LAN Fundamentals', ar: 'أساسيات الشبكات اللاسلكية' },
        duration: 12, difficulty: 'intermediate',
        summary: { en: 'How Wi-Fi works: SSIDs, 802.11 standards, frequency bands, channels, and AP/WLC architectures.', ar: 'كيف يعمل الواي فاي: SSIDs، معايير 802.11، نطاقات التردد، القنوات، وبنى AP/WLC.' },
        content: {
          en: `<h2>802.11 standards</h2><table><thead><tr><th>Standard</th><th>Band</th><th>Max speed</th></tr></thead><tbody>
<tr><td>802.11b/g</td><td>2.4 GHz</td><td>11 / 54 Mbps</td></tr>
<tr><td>802.11n (Wi-Fi 4)</td><td>2.4 & 5 GHz</td><td>600 Mbps</td></tr>
<tr><td>802.11ac (Wi-Fi 5)</td><td>5 GHz</td><td>~3.5 Gbps</td></tr>
<tr><td>802.11ax (Wi-Fi 6)</td><td>2.4 & 5 (& 6) GHz</td><td>~9.6 Gbps</td></tr></tbody></table>
<h2>Frequency bands & channels</h2><p><strong>2.4 GHz</strong> travels farther but is crowded; only channels <strong>1, 6, 11</strong> are non-overlapping. <strong>5 GHz</strong> has many non-overlapping channels and more speed but shorter range.</p>
<h2>SSID & BSS</h2><p>The <strong>SSID</strong> is the network name. An access point's coverage area is a <strong>BSS</strong>; multiple APs sharing an SSID form an <strong>ESS</strong> for roaming.</p>
<h2>Autonomous vs controller-based</h2><p><strong>Autonomous APs</strong> are configured individually. <strong>Lightweight APs</strong> are managed centrally by a <strong>WLC (Wireless LAN Controller)</strong> using CAPWAP — scalable for enterprises.</p>
<div class="callout tip"><div class="callout-title">Half-duplex</div><p>Wi-Fi is a shared, half-duplex medium using CSMA/CA — only one device transmits at a time per channel.</p></div>`,
          ar: `<h2>معايير 802.11</h2><table><thead><tr><th>المعيار</th><th>النطاق</th><th>أقصى سرعة</th></tr></thead><tbody>
<tr><td>802.11b/g</td><td>2.4 جيجاهرتز</td><td>11 / 54 ميجابت</td></tr>
<tr><td>802.11n (Wi-Fi 4)</td><td>2.4 و 5 جيجاهرتز</td><td>600 ميجابت</td></tr>
<tr><td>802.11ac (Wi-Fi 5)</td><td>5 جيجاهرتز</td><td>~3.5 جيجابت</td></tr>
<tr><td>802.11ax (Wi-Fi 6)</td><td>2.4 و 5 (و 6) جيجاهرتز</td><td>~9.6 جيجابت</td></tr></tbody></table>
<h2>النطاقات والقنوات</h2><p><strong>2.4 جيجاهرتز</strong> يصل أبعد لكنه مزدحم؛ القنوات غير المتداخلة فقط <strong>1، 6، 11</strong>. و<strong>5 جيجاهرتز</strong> له قنوات كثيرة غير متداخلة وسرعة أعلى لكن مدى أقصر.</p>
<h2>SSID و BSS</h2><p><strong>SSID</strong> هو اسم الشبكة. منطقة تغطية نقطة الوصول هي <strong>BSS</strong>؛ وعدة نقاط تشترك في SSID تكوّن <strong>ESS</strong> للتجوال.</p>
<h2>مستقلة مقابل مُدارة بمتحكم</h2><p><strong>نقاط الوصول المستقلة</strong> تُهيّأ فرديًا. و<strong>نقاط الوصول الخفيفة</strong> تُدار مركزيًا عبر <strong>WLC (متحكم الشبكة اللاسلكية)</strong> باستخدام CAPWAP — قابلة للتوسّع للمؤسسات.</p>
<div class="callout tip"><div class="callout-title">نصف ازدواج</div><p>الواي فاي وسط مشترك نصف ازدواج يستخدم CSMA/CA — جهاز واحد يرسل في كل مرة لكل قناة.</p></div>`
        },
        keyPoints: {
          en: ['802.11ax = Wi-Fi 6; 802.11ac = Wi-Fi 5.', '2.4 GHz non-overlapping channels: 1, 6, 11.', 'SSID = network name; ESS = multiple APs for roaming.', 'WLCs centrally manage lightweight APs via CAPWAP.'],
          ar: ['802.11ax = Wi-Fi 6؛ 802.11ac = Wi-Fi 5.', 'قنوات 2.4 جيجاهرتز غير المتداخلة: 1، 6، 11.', 'SSID اسم الشبكة؛ ESS عدة نقاط للتجوال.', 'الـ WLC يدير نقاط الوصول الخفيفة مركزيًا عبر CAPWAP.']
        },
        quiz: [
          { q: { en: 'Which 2.4 GHz channels are non-overlapping?', ar: 'أي قنوات 2.4 جيجاهرتز غير متداخلة؟' }, options: [{ en: '1, 2, 3', ar: '1، 2، 3' }, { en: '1, 6, 11', ar: '1، 6، 11' }, { en: '2, 7, 12', ar: '2، 7، 12' }, { en: 'All channels', ar: 'كل القنوات' }], answer: 1, explanation: { en: 'Channels 1, 6 and 11 do not overlap in 2.4 GHz.', ar: 'القنوات 1 و6 و11 لا تتداخل في 2.4 جيجاهرتز.' } },
          { q: { en: 'What manages lightweight APs centrally?', ar: 'ما الذي يدير نقاط الوصول الخفيفة مركزيًا؟' }, options: [{ en: 'A switch', ar: 'سويتش' }, { en: 'A WLC', ar: 'WLC' }, { en: 'A modem', ar: 'مودم' }, { en: 'DNS', ar: 'DNS' }], answer: 1, explanation: { en: 'A Wireless LAN Controller manages lightweight APs via CAPWAP.', ar: 'متحكم الشبكة اللاسلكية يدير نقاط الوصول الخفيفة عبر CAPWAP.' } },
          { q: { en: 'Wi-Fi access method?', ar: 'طريقة وصول الواي فاي؟' }, options: [{ en: 'CSMA/CD', ar: 'CSMA/CD' }, { en: 'CSMA/CA', ar: 'CSMA/CA' }, { en: 'Token passing', ar: 'تمرير الرمز' }, { en: 'Polling', ar: 'الاستطلاع' }], answer: 1, explanation: { en: 'Wireless uses CSMA/CA (collision avoidance).', ar: 'اللاسلكي يستخدم CSMA/CA (تجنّب التصادم).' } }
        ],
        flashcards: [
          { front: { en: 'Wi-Fi 6 = which 802.11?', ar: 'Wi-Fi 6 = أي 802.11؟' }, back: { en: '802.11ax.', ar: '802.11ax.' } },
          { front: { en: 'Protocol between WLC and lightweight AP?', ar: 'البروتوكول بين WLC ونقطة الوصول الخفيفة؟' }, back: { en: 'CAPWAP.', ar: 'CAPWAP.' } }
        ]
      },
      {
        id: 'wireless-security',
        title: { en: 'Wireless Security', ar: 'أمن الشبكات اللاسلكية' },
        duration: 9, difficulty: 'intermediate',
        summary: { en: 'WPA2/WPA3, personal vs enterprise authentication, and encryption for Wi-Fi.', ar: 'WPA2/WPA3، المصادقة الشخصية مقابل المؤسسية، والتشفير للواي فاي.' },
        content: {
          en: `<h2>Why wireless needs security</h2><p>Radio signals travel beyond walls, so anyone nearby can listen. Encryption and authentication keep Wi-Fi private.</p>
<h2>Security standards (evolution)</h2><table><thead><tr><th>Standard</th><th>Encryption</th><th>Status</th></tr></thead><tbody>
<tr><td>WEP</td><td>RC4 (weak)</td><td>Broken — never use</td></tr>
<tr><td>WPA</td><td>TKIP</td><td>Deprecated</td></tr>
<tr><td>WPA2</td><td>AES-CCMP</td><td>Widely used</td></tr>
<tr><td>WPA3</td><td>AES + SAE</td><td>Current best</td></tr></tbody></table>
<h2>Personal vs Enterprise</h2><ul><li><strong>Personal (PSK)</strong> — a shared password for everyone. Simple, for homes/small offices.</li><li><strong>Enterprise (802.1X)</strong> — each user authenticates via a RADIUS server (unique credentials). Scalable and auditable.</li></ul>
<div class="callout warn"><div class="callout-title">Avoid WEP/WPA</div><p>WEP and original WPA are crackable in minutes. Use WPA2-AES at minimum, WPA3 where supported.</p></div>`,
          ar: `<h2>لماذا يحتاج اللاسلكي للأمن</h2><p>إشارات الراديو تتجاوز الجدران، فأي شخص قريب يمكنه التنصّت. التشفير والمصادقة يحافظان على خصوصية الواي فاي.</p>
<h2>معايير الأمن (التطوّر)</h2><table><thead><tr><th>المعيار</th><th>التشفير</th><th>الحالة</th></tr></thead><tbody>
<tr><td>WEP</td><td>RC4 (ضعيف)</td><td>مكسور — لا تستخدمه</td></tr>
<tr><td>WPA</td><td>TKIP</td><td>قديم</td></tr>
<tr><td>WPA2</td><td>AES-CCMP</td><td>شائع الاستخدام</td></tr>
<tr><td>WPA3</td><td>AES + SAE</td><td>الأفضل حاليًا</td></tr></tbody></table>
<h2>شخصي مقابل مؤسسي</h2><ul><li><strong>شخصي (PSK)</strong> — كلمة مرور مشتركة للجميع. بسيط للمنازل/المكاتب الصغيرة.</li><li><strong>مؤسسي (802.1X)</strong> — كل مستخدم يصادق عبر خادم RADIUS (بيانات فريدة). قابل للتوسّع والتدقيق.</li></ul>
<div class="callout warn"><div class="callout-title">تجنّب WEP/WPA</div><p>WEP و WPA الأصلي قابلان للكسر في دقائق. استخدم WPA2-AES كحد أدنى، و WPA3 حيث يُدعم.</p></div>`
        },
        keyPoints: {
          en: ['Never use WEP or original WPA — they are broken.', 'WPA2 uses AES-CCMP; WPA3 adds SAE for stronger security.', 'Personal = shared PSK; Enterprise = 802.1X with RADIUS.', 'Enterprise gives per-user credentials and accountability.'],
          ar: ['لا تستخدم WEP أو WPA الأصلي — فهما مكسوران.', 'WPA2 يستخدم AES-CCMP؛ WPA3 يضيف SAE لأمن أقوى.', 'شخصي = PSK مشترك؛ مؤسسي = 802.1X مع RADIUS.', 'المؤسسي يعطي بيانات لكل مستخدم ومساءلة.']
        },
        quiz: [
          { q: { en: 'Which is the strongest current Wi-Fi security standard?', ar: 'أي معيار أمن واي فاي هو الأقوى حاليًا؟' }, options: [{ en: 'WEP', ar: 'WEP' }, { en: 'WPA', ar: 'WPA' }, { en: 'WPA2', ar: 'WPA2' }, { en: 'WPA3', ar: 'WPA3' }], answer: 3, explanation: { en: 'WPA3 is the latest and most secure (SAE).', ar: 'WPA3 هو الأحدث والأكثر أمانًا (SAE).' } },
          { q: { en: 'WPA2-Enterprise authenticates users with…', ar: 'WPA2-Enterprise يصادق المستخدمين عبر…' }, options: [{ en: 'A shared password', ar: 'كلمة مرور مشتركة' }, { en: 'A RADIUS server (802.1X)', ar: 'خادم RADIUS (802.1X)' }, { en: 'MAC only', ar: 'MAC فقط' }, { en: 'No authentication', ar: 'بلا مصادقة' }], answer: 1, explanation: { en: 'Enterprise mode uses 802.1X with a RADIUS server.', ar: 'الوضع المؤسسي يستخدم 802.1X مع خادم RADIUS.' } }
        ],
        flashcards: [
          { front: { en: 'WPA2 encryption algorithm?', ar: 'خوارزمية تشفير WPA2؟' }, back: { en: 'AES (CCMP).', ar: 'AES (CCMP).' } },
          { front: { en: 'Enterprise Wi-Fi auth standard?', ar: 'معيار مصادقة الواي فاي المؤسسي؟' }, back: { en: '802.1X with RADIUS.', ar: '802.1X مع RADIUS.' } }
        ]
      }
    ]
  });
})();
