/* ccna.services-security.js — CCNA Modules: IP Services + Security Fundamentals.
   Follows the schema in ccna.fundamentals.js. */
(function () {
  const D = window.NS_DATA = window.NS_DATA || {};
  D.ccna = D.ccna || { id: 'ccna', modules: [] };

  D.ccna.modules.push({
    id: 'ip-services',
    title: { en: 'IP Services', ar: 'خدمات IP' },
    icon: 'server',
    lessons: [
      {
        id: 'dhcp',
        title: { en: 'DHCP', ar: 'بروتوكول DHCP' },
        duration: 11, difficulty: 'intermediate',
        summary: { en: 'How DHCP automatically assigns IP addresses via the DORA process, and how relay works.', ar: 'كيف يسند DHCP العناوين تلقائيًا عبر عملية DORA، وكيف يعمل الترحيل.' },
        content: {
          en: `<h2>What DHCP does</h2><p><strong>DHCP (Dynamic Host Configuration Protocol)</strong> automatically gives clients an IP address, subnet mask, default gateway and DNS server — no manual config needed.</p>
<h2>The DORA process</h2><ol><li><strong>Discover</strong> — client broadcasts looking for a server.</li><li><strong>Offer</strong> — server offers an address.</li><li><strong>Request</strong> — client requests the offered address.</li><li><strong>Acknowledge</strong> — server confirms the lease.</li></ol>
<p>DHCP uses UDP ports <strong>67</strong> (server) and <strong>68</strong> (client).</p>
<h2>DHCP relay</h2><p>DHCP Discover is a broadcast, which routers don't forward. The <strong>ip helper-address</strong> command on the router turns the broadcast into a unicast toward a DHCP server on another subnet.</p>
<div class="callout warn"><div class="callout-title">No DHCP?</div><p>If a client gets a 169.254.x.x (APIPA) address, it never reached a DHCP server — check connectivity and the relay.</p></div>`,
          ar: `<h2>ماذا يفعل DHCP</h2><p><strong>DHCP (بروتوكول التهيئة الديناميكية للمضيف)</strong> يعطي العملاء تلقائيًا عنوان IP وقناعًا وبوابة افتراضية وخادم DNS — دون تهيئة يدوية.</p>
<h2>عملية DORA</h2><ol><li><strong>Discover</strong> — العميل يبث بحثًا عن خادم.</li><li><strong>Offer</strong> — الخادم يعرض عنوانًا.</li><li><strong>Request</strong> — العميل يطلب العنوان المعروض.</li><li><strong>Acknowledge</strong> — الخادم يؤكد الإيجار.</li></ol>
<p>يستخدم DHCP منافذ UDP <strong>67</strong> (الخادم) و<strong>68</strong> (العميل).</p>
<h2>ترحيل DHCP</h2><p>رسالة Discover بثّية، والراوترات لا تمررها. أمر <strong>ip helper-address</strong> على الراوتر يحوّل البث إلى unicast نحو خادم DHCP في شبكة أخرى.</p>
<div class="callout warn"><div class="callout-title">لا يوجد DHCP؟</div><p>إذا حصل العميل على عنوان 169.254.x.x (APIPA)، فهو لم يصل لخادم DHCP — تحقق من الاتصال والترحيل.</p></div>`
        },
        keyPoints: {
          en: ['DHCP automates IP, mask, gateway and DNS assignment.', 'DORA = Discover, Offer, Request, Acknowledge.', 'Uses UDP 67 (server) and 68 (client).', 'ip helper-address relays DHCP across subnets.'],
          ar: ['DHCP يؤتمت إسناد IP والقناع والبوابة و DNS.', 'DORA = Discover، Offer، Request، Acknowledge.', 'يستخدم UDP 67 (الخادم) و68 (العميل).', 'ip helper-address يرحّل DHCP عبر الشبكات.']
        },
        commands: [
          { cmd: 'ip dhcp pool LAN', desc: { en: 'Create a DHCP pool.', ar: 'إنشاء مجمّع DHCP.' } },
          { cmd: 'network 192.168.1.0 255.255.255.0', desc: { en: 'Define the pool subnet.', ar: 'تحديد شبكة المجمّع.' } },
          { cmd: 'default-router 192.168.1.1', desc: { en: 'Set the gateway handed to clients.', ar: 'تعيين البوابة المُعطاة للعملاء.' } },
          { cmd: 'ip helper-address 10.1.1.10', desc: { en: 'Relay DHCP to a remote server.', ar: 'ترحيل DHCP لخادم بعيد.' } }
        ],
        lab: {
          title: { en: 'Lab: Router as a DHCP Server', ar: 'مختبر: الراوتر كخادم DHCP' },
          objective: { en: 'Configure R1 to hand out addresses to the LAN, excluding the gateway.', ar: 'هيّئ R1 لتوزيع العناوين على الشبكة المحلية، مع استثناء البوابة.' },
          topology: 'PCs --- SW --- G0/0 [R1]',
          steps: [
            { en: 'Exclude 192.168.1.1-10 with ip dhcp excluded-address.', ar: 'استثنِ 192.168.1.1-10 بـ ip dhcp excluded-address.' },
            { en: 'Create pool LAN with network, default-router and dns-server.', ar: 'أنشئ المجمّع LAN مع network و default-router و dns-server.' },
            { en: 'Set PCs to obtain an address automatically.', ar: 'اضبط الحواسيب للحصول على عنوان تلقائيًا.' }
          ],
          verify: { en: 'PCs receive a 192.168.1.x lease; show ip dhcp binding lists them.', ar: 'تستلم الحواسيب إيجار 192.168.1.x؛ و show ip dhcp binding يعرضها.' }
        },
        quiz: [
          { q: { en: 'What is the correct DHCP message order?', ar: 'ما الترتيب الصحيح لرسائل DHCP؟' }, options: [{ en: 'Offer, Discover, Request, Ack', ar: 'Offer, Discover, Request, Ack' }, { en: 'Discover, Offer, Request, Ack', ar: 'Discover, Offer, Request, Ack' }, { en: 'Request, Offer, Discover, Ack', ar: 'Request, Offer, Discover, Ack' }, { en: 'Discover, Request, Offer, Ack', ar: 'Discover, Request, Offer, Ack' }], answer: 1, explanation: { en: 'DORA = Discover, Offer, Request, Acknowledge.', ar: 'DORA = Discover, Offer, Request, Acknowledge.' } },
          { q: { en: 'Which command relays DHCP to another subnet?', ar: 'أي أمر يرحّل DHCP لشبكة أخرى؟' }, options: [{ en: 'ip helper-address', ar: 'ip helper-address' }, { en: 'ip dhcp relay', ar: 'ip dhcp relay' }, { en: 'ip forward-dhcp', ar: 'ip forward-dhcp' }, { en: 'ip dhcp pool', ar: 'ip dhcp pool' }], answer: 0, explanation: { en: 'ip helper-address converts the broadcast to a unicast.', ar: 'ip helper-address يحوّل البث إلى unicast.' } }
        ],
        flashcards: [
          { front: { en: 'DHCP server/client ports?', ar: 'منافذ خادم/عميل DHCP؟' }, back: { en: 'UDP 67 (server), UDP 68 (client).', ar: 'UDP 67 (خادم)، UDP 68 (عميل).' } },
          { front: { en: 'DORA stands for?', ar: 'DORA تعني؟' }, back: { en: 'Discover, Offer, Request, Acknowledge.', ar: 'Discover, Offer, Request, Acknowledge.' } }
        ]
      },
      {
        id: 'dns',
        title: { en: 'DNS', ar: 'نظام أسماء النطاقات DNS' },
        duration: 10, difficulty: 'beginner',
        summary: { en: 'How DNS resolves names to IP addresses, and the common record types.', ar: 'كيف يحوّل DNS الأسماء لعناوين IP، وأنواع السجلات الشائعة.' },
        content: {
          en: `<h2>Why DNS?</h2><p>Humans remember <code>cisco.com</code>, not <code>72.163.4.185</code>. <strong>DNS (Domain Name System)</strong> translates names to IPs (and back). It uses UDP/TCP port <strong>53</strong>.</p>
<h2>Resolution flow</h2><ol><li>Client checks its cache / hosts file.</li><li>Asks a recursive resolver.</li><li>Resolver queries root → TLD (.com) → authoritative server.</li><li>Answer returns and is cached for the TTL.</li></ol>
<h2>Common record types</h2><table><thead><tr><th>Record</th><th>Purpose</th></tr></thead><tbody>
<tr><td>A</td><td>Name → IPv4</td></tr><tr><td>AAAA</td><td>Name → IPv6</td></tr>
<tr><td>CNAME</td><td>Alias to another name</td></tr><tr><td>MX</td><td>Mail server</td></tr>
<tr><td>NS</td><td>Authoritative name server</td></tr><tr><td>PTR</td><td>IP → name (reverse)</td></tr></tbody></table>
<div class="callout tip"><div class="callout-title">Troubleshooting</div><p>Use <code>nslookup</code> or <code>dig</code> to test resolution. "Can ping IP but not name" almost always = a DNS problem.</p></div>`,
          ar: `<h2>لماذا DNS؟</h2><p>يتذكّر البشر <code>cisco.com</code> لا <code>72.163.4.185</code>. <strong>DNS (نظام أسماء النطاقات)</strong> يترجم الأسماء لعناوين IP (والعكس). يستخدم منفذ UDP/TCP <strong>53</strong>.</p>
<h2>تدفّق التحليل</h2><ol><li>العميل يفحص الذاكرة المؤقتة / ملف hosts.</li><li>يسأل محلّلًا تكراريًا.</li><li>المحلّل يستعلم من الجذر ← TLD (.com) ← الخادم المرجعي.</li><li>تعود الإجابة وتُخزّن مؤقتًا لمدة TTL.</li></ol>
<h2>أنواع السجلات الشائعة</h2><table><thead><tr><th>السجل</th><th>الغرض</th></tr></thead><tbody>
<tr><td>A</td><td>اسم ← IPv4</td></tr><tr><td>AAAA</td><td>اسم ← IPv6</td></tr>
<tr><td>CNAME</td><td>اسم مستعار لاسم آخر</td></tr><tr><td>MX</td><td>خادم البريد</td></tr>
<tr><td>NS</td><td>خادم الأسماء المرجعي</td></tr><tr><td>PTR</td><td>IP ← اسم (عكسي)</td></tr></tbody></table>
<div class="callout tip"><div class="callout-title">استكشاف الأعطال</div><p>استخدم <code>nslookup</code> أو <code>dig</code> لاختبار التحليل. "يعمل ping للـ IP لا للاسم" غالبًا = مشكلة DNS.</p></div>`
        },
        keyPoints: {
          en: ['DNS resolves names to IPs using port 53.', 'A = IPv4, AAAA = IPv6, CNAME = alias, MX = mail.', 'PTR records do reverse (IP → name) lookups.', 'Ping by IP works but not by name → DNS issue.'],
          ar: ['DNS يحوّل الأسماء لعناوين IP عبر المنفذ 53.', 'A = IPv4، AAAA = IPv6، CNAME = اسم مستعار، MX = بريد.', 'سجلات PTR للبحث العكسي (IP ← اسم).', 'ping بالـ IP يعمل لا بالاسم ← مشكلة DNS.']
        },
        commands: [
          { cmd: 'ip name-server 8.8.8.8', desc: { en: 'Set the DNS server on a router.', ar: 'تعيين خادم DNS على الراوتر.' } },
          { cmd: 'ip domain-lookup', desc: { en: 'Enable DNS resolution on the device.', ar: 'تفعيل تحليل DNS على الجهاز.' } }
        ],
        quiz: [
          { q: { en: 'Which record maps a name to an IPv6 address?', ar: 'أي سجل يربط اسمًا بعنوان IPv6؟' }, options: [{ en: 'A', ar: 'A' }, { en: 'AAAA', ar: 'AAAA' }, { en: 'MX', ar: 'MX' }, { en: 'PTR', ar: 'PTR' }], answer: 1, explanation: { en: 'AAAA records hold IPv6 addresses.', ar: 'سجلات AAAA تحمل عناوين IPv6.' } },
          { q: { en: 'What port does DNS use?', ar: 'أي منفذ يستخدم DNS؟' }, options: [{ en: '53', ar: '53' }, { en: '80', ar: '80' }, { en: '25', ar: '25' }, { en: '67', ar: '67' }], answer: 0, explanation: { en: 'DNS uses port 53 (UDP queries, TCP zone transfers).', ar: 'DNS يستخدم المنفذ 53 (استعلامات UDP ونقل المناطق TCP).' } }
        ],
        flashcards: [
          { front: { en: 'MX record purpose?', ar: 'غرض سجل MX؟' }, back: { en: 'Identifies the mail server for a domain.', ar: 'يحدد خادم البريد للنطاق.' } }
        ]
      },
      {
        id: 'nat-pat',
        title: { en: 'NAT & PAT', ar: 'NAT و PAT' },
        duration: 12, difficulty: 'intermediate',
        summary: { en: 'Network Address Translation lets many private hosts share public IPs; PAT shares one IP via ports.', ar: 'ترجمة عناوين الشبكة تتيح لعدة مضيفين خاصين مشاركة عناوين عامة؛ و PAT يشارك عنوانًا واحدًا عبر المنافذ.' },
        content: {
          en: `<h2>Why NAT?</h2><p>There aren't enough public IPv4 addresses. <strong>NAT</strong> translates private (RFC1918) addresses to public ones at the network edge, letting internal hosts reach the Internet.</p>
<h2>NAT terminology</h2><table><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>
<tr><td>Inside local</td><td>Private IP of the host</td></tr>
<tr><td>Inside global</td><td>Public IP seen on the Internet</td></tr>
<tr><td>Outside global</td><td>Public IP of the destination</td></tr></tbody></table>
<h2>Types</h2><ul><li><strong>Static NAT</strong> — one-to-one fixed mapping (e.g. a server).</li><li><strong>Dynamic NAT</strong> — maps to a pool of public IPs.</li><li><strong>PAT (NAT overload)</strong> — many hosts share ONE public IP, distinguished by source <strong>port numbers</strong>. This is what home routers do.</li></ul>
<div class="callout tip"><div class="callout-title">Most common</div><p>PAT (overload) is by far the most used because it conserves public IPs — thousands of hosts behind a single address.</p></div>`,
          ar: `<h2>لماذا NAT؟</h2><p>لا توجد عناوين IPv4 عامة كافية. <strong>NAT</strong> يترجم العناوين الخاصة (RFC1918) لعامة عند حافة الشبكة، فيتيح للمضيفين الداخليين الوصول للإنترنت.</p>
<h2>مصطلحات NAT</h2><table><thead><tr><th>المصطلح</th><th>المعنى</th></tr></thead><tbody>
<tr><td>Inside local</td><td>IP الخاص للمضيف</td></tr>
<tr><td>Inside global</td><td>IP العام المرئي على الإنترنت</td></tr>
<tr><td>Outside global</td><td>IP العام للوجهة</td></tr></tbody></table>
<h2>الأنواع</h2><ul><li><strong>NAT ثابت</strong> — ربط واحد-لواحد ثابت (مثل خادم).</li><li><strong>NAT ديناميكي</strong> — يربط بمجمّع من العناوين العامة.</li><li><strong>PAT (NAT overload)</strong> — عدة مضيفين يشاركون عنوانًا عامًا <strong>واحدًا</strong>، يُميَّزون بأرقام <strong>منافذ</strong> المصدر. هذا ما تفعله راوترات المنازل.</li></ul>
<div class="callout tip"><div class="callout-title">الأكثر شيوعًا</div><p>PAT (overload) هو الأكثر استخدامًا لأنه يوفّر العناوين العامة — آلاف المضيفين خلف عنوان واحد.</p></div>`
        },
        keyPoints: {
          en: ['NAT translates private IPs to public at the edge.', 'Static = 1:1, Dynamic = pool, PAT = many:1 via ports.', 'PAT (overload) is the most common form.', 'Inside local = private; inside global = public.'],
          ar: ['NAT يترجم العناوين الخاصة لعامة عند الحافة.', 'ثابت = 1:1، ديناميكي = مجمّع، PAT = كثير:1 عبر المنافذ.', 'PAT (overload) هو الأكثر شيوعًا.', 'Inside local = خاص؛ inside global = عام.']
        },
        examples: [
          { title: { en: 'PAT (overload) config', ar: 'تهيئة PAT (overload)' }, code: 'R1(config)# access-list 1 permit 192.168.1.0 0.0.0.255\nR1(config)# interface g0/0\nR1(config-if)# ip nat inside\nR1(config)# interface g0/1\nR1(config-if)# ip nat outside\nR1(config)# ip nat inside source list 1 interface g0/1 overload' }
        ],
        commands: [
          { cmd: 'ip nat inside', desc: { en: 'Mark the internal interface.', ar: 'تحديد الواجهة الداخلية.' } },
          { cmd: 'ip nat outside', desc: { en: 'Mark the external interface.', ar: 'تحديد الواجهة الخارجية.' } },
          { cmd: 'ip nat inside source list 1 interface g0/1 overload', desc: { en: 'Enable PAT.', ar: 'تفعيل PAT.' } },
          { cmd: 'show ip nat translations', desc: { en: 'View active translations.', ar: 'عرض الترجمات النشطة.' } }
        ],
        quiz: [
          { q: { en: 'PAT distinguishes multiple hosts using…', ar: 'PAT يميّز عدة مضيفين باستخدام…' }, options: [{ en: 'MAC addresses', ar: 'عناوين MAC' }, { en: 'Port numbers', ar: 'أرقام المنافذ' }, { en: 'VLAN IDs', ar: 'معرّفات VLAN' }, { en: 'TTL values', ar: 'قيم TTL' }], answer: 1, explanation: { en: 'PAT (overload) uses source port numbers to multiplex one IP.', ar: 'PAT يستخدم أرقام منافذ المصدر لمشاركة عنوان واحد.' } },
          { q: { en: 'The private IP of an internal host is the…', ar: 'الـ IP الخاص لمضيف داخلي هو…' }, options: [{ en: 'Inside global', ar: 'Inside global' }, { en: 'Inside local', ar: 'Inside local' }, { en: 'Outside global', ar: 'Outside global' }, { en: 'Outside local', ar: 'Outside local' }], answer: 1, explanation: { en: 'Inside local = the host private address.', ar: 'Inside local = العنوان الخاص للمضيف.' } }
        ],
        flashcards: [
          { front: { en: 'PAT also known as?', ar: 'PAT يُعرف أيضًا بـ؟' }, back: { en: 'NAT overload.', ar: 'NAT overload.' } }
        ]
      },
      {
        id: 'ntp',
        title: { en: 'NTP — Time Synchronization', ar: 'NTP — مزامنة الوقت' },
        duration: 8, difficulty: 'beginner',
        summary: { en: 'NTP keeps device clocks accurate — vital for logs, certificates and security.', ar: 'NTP يبقي ساعات الأجهزة دقيقة — حيوي للسجلات والشهادات والأمن.' },
        content: {
          en: `<h2>Why accurate time matters</h2><p>Logs, certificate validity, Kerberos and correlation across devices all depend on synchronized clocks. <strong>NTP (Network Time Protocol)</strong> synchronizes time over UDP port <strong>123</strong>.</p>
<h2>Stratum</h2><p>NTP is hierarchical. <strong>Stratum 0</strong> = reference clocks (atomic/GPS). <strong>Stratum 1</strong> servers attach directly to them; each hop down increments the stratum. Lower stratum = more authoritative.</p>
<h2>Configuration</h2><p>Point a device at an NTP server with <code>ntp server</code>. A router can also act as a master with <code>ntp master</code>.</p>
<div class="callout tip"><div class="callout-title">Security link</div><p>If clocks drift, TLS certificates may appear invalid and time-stamped logs become useless for forensics.</p></div>`,
          ar: `<h2>لماذا يهم الوقت الدقيق</h2><p>السجلات وصلاحية الشهادات و Kerberos والربط بين الأجهزة تعتمد جميعًا على ساعات متزامنة. <strong>NTP (بروتوكول وقت الشبكة)</strong> يزامن الوقت عبر منفذ UDP <strong>123</strong>.</p>
<h2>الطبقات (Stratum)</h2><p>NTP هرمي. <strong>Stratum 0</strong> = ساعات مرجعية (ذرية/GPS). خوادم <strong>Stratum 1</strong> تتصل بها مباشرة؛ وكل قفزة للأسفل تزيد الـ stratum. الأقل = أكثر موثوقية.</p>
<h2>التهيئة</h2><p>وجّه الجهاز لخادم NTP بـ <code>ntp server</code>. ويمكن للراوتر أن يكون مرجعًا بـ <code>ntp master</code>.</p>
<div class="callout tip"><div class="callout-title">رابط الأمن</div><p>إذا انحرفت الساعات، قد تبدو شهادات TLS غير صالحة وتصبح السجلات الزمنية بلا فائدة للتحقيق.</p></div>`
        },
        keyPoints: {
          en: ['NTP synchronizes clocks over UDP 123.', 'Stratum indicates distance from a reference clock.', 'Lower stratum = more authoritative.', 'Accurate time is critical for logs, certs and security.'],
          ar: ['NTP يزامن الساعات عبر UDP 123.', 'الـ stratum يشير للبُعد عن الساعة المرجعية.', 'stratum أقل = أكثر موثوقية.', 'الوقت الدقيق حيوي للسجلات والشهادات والأمن.']
        },
        commands: [
          { cmd: 'ntp server 129.6.15.28', desc: { en: 'Sync to an NTP server.', ar: 'المزامنة مع خادم NTP.' } },
          { cmd: 'show ntp status', desc: { en: 'Check synchronization and stratum.', ar: 'فحص المزامنة والـ stratum.' } }
        ],
        quiz: [
          { q: { en: 'What UDP port does NTP use?', ar: 'أي منفذ UDP يستخدم NTP؟' }, options: [{ en: '53', ar: '53' }, { en: '123', ar: '123' }, { en: '161', ar: '161' }, { en: '514', ar: '514' }], answer: 1, explanation: { en: 'NTP uses UDP 123.', ar: 'NTP يستخدم UDP 123.' } },
          { q: { en: 'A lower NTP stratum number means…', ar: 'رقم stratum أقل في NTP يعني…' }, options: [{ en: 'Less accurate', ar: 'أقل دقة' }, { en: 'More authoritative/closer to reference', ar: 'أكثر موثوقية/أقرب للمرجع' }, { en: 'Slower', ar: 'أبطأ' }, { en: 'Offline', ar: 'غير متصل' }], answer: 1, explanation: { en: 'Lower stratum = closer to the reference clock.', ar: 'stratum أقل = أقرب للساعة المرجعية.' } }
        ],
        flashcards: [
          { front: { en: 'NTP port?', ar: 'منفذ NTP؟' }, back: { en: 'UDP 123.', ar: 'UDP 123.' } }
        ]
      },
      {
        id: 'syslog-snmp',
        title: { en: 'Syslog & SNMP', ar: 'Syslog و SNMP' },
        duration: 10, difficulty: 'intermediate',
        summary: { en: 'Centralized logging with Syslog and device monitoring with SNMP.', ar: 'تسجيل مركزي بـ Syslog ومراقبة الأجهزة بـ SNMP.' },
        content: {
          en: `<h2>Syslog</h2><p><strong>Syslog</strong> sends log messages to a central server (UDP <strong>514</strong>) for storage and analysis. Each message has a <strong>severity level</strong> 0–7:</p>
<table><thead><tr><th>Level</th><th>Keyword</th></tr></thead><tbody>
<tr><td>0</td><td>Emergency</td></tr><tr><td>1</td><td>Alert</td></tr><tr><td>2</td><td>Critical</td></tr><tr><td>3</td><td>Error</td></tr>
<tr><td>4</td><td>Warning</td></tr><tr><td>5</td><td>Notification</td></tr><tr><td>6</td><td>Informational</td></tr><tr><td>7</td><td>Debugging</td></tr></tbody></table>
<p>Remember: lower number = more severe. ("Every Awesome Cisco Engineer Will Need Ice cream/Daily").</p>
<h2>SNMP</h2><p><strong>SNMP (Simple Network Management Protocol)</strong> monitors and manages devices (UDP <strong>161</strong>; traps on <strong>162</strong>). A manager polls agents for OIDs from the MIB.</p>
<ul><li><strong>v2c</strong> — community strings (plaintext).</li><li><strong>v3</strong> — authentication + encryption (use this).</li></ul>
<div class="callout warn"><div class="callout-title">Security</div><p>Always prefer SNMPv3. Community strings in v2c are sent in clear text and are a common attack vector.</p></div>`,
          ar: `<h2>Syslog</h2><p><strong>Syslog</strong> يرسل رسائل السجل لخادم مركزي (UDP <strong>514</strong>) للتخزين والتحليل. لكل رسالة <strong>مستوى خطورة</strong> 0–7:</p>
<table><thead><tr><th>المستوى</th><th>الكلمة</th></tr></thead><tbody>
<tr><td>0</td><td>Emergency</td></tr><tr><td>1</td><td>Alert</td></tr><tr><td>2</td><td>Critical</td></tr><tr><td>3</td><td>Error</td></tr>
<tr><td>4</td><td>Warning</td></tr><tr><td>5</td><td>Notification</td></tr><tr><td>6</td><td>Informational</td></tr><tr><td>7</td><td>Debugging</td></tr></tbody></table>
<p>تذكّر: رقم أقل = أكثر خطورة.</p>
<h2>SNMP</h2><p><strong>SNMP (بروتوكول إدارة الشبكة البسيط)</strong> يراقب ويدير الأجهزة (UDP <strong>161</strong>؛ والـ traps على <strong>162</strong>). يستعلم المدير من الوكلاء عن OIDs من الـ MIB.</p>
<ul><li><strong>v2c</strong> — سلاسل المجتمع (نص واضح).</li><li><strong>v3</strong> — مصادقة + تشفير (استخدمه).</li></ul>
<div class="callout warn"><div class="callout-title">الأمن</div><p>فضّل دائمًا SNMPv3. سلاسل المجتمع في v2c تُرسل بنص واضح وهي ناقل هجوم شائع.</p></div>`
        },
        keyPoints: {
          en: ['Syslog centralizes logs over UDP 514, severity 0–7.', 'Level 0 (Emergency) is most severe, 7 (Debugging) least.', 'SNMP monitors devices: UDP 161 (poll), 162 (traps).', 'Use SNMPv3 for authentication and encryption.'],
          ar: ['Syslog يركّز السجلات عبر UDP 514، الخطورة 0–7.', 'المستوى 0 (Emergency) الأشد، و7 (Debugging) الأقل.', 'SNMP يراقب الأجهزة: UDP 161 (استعلام)، 162 (traps).', 'استخدم SNMPv3 للمصادقة والتشفير.']
        },
        quiz: [
          { q: { en: 'Which Syslog severity is most critical?', ar: 'أي مستوى خطورة Syslog هو الأشد؟' }, options: [{ en: '7', ar: '7' }, { en: '4', ar: '4' }, { en: '0', ar: '0' }, { en: '5', ar: '5' }], answer: 2, explanation: { en: 'Level 0 = Emergency, the most severe.', ar: 'المستوى 0 = Emergency، الأشد.' } },
          { q: { en: 'Which SNMP version provides encryption?', ar: 'أي إصدار SNMP يوفّر التشفير؟' }, options: [{ en: 'v1', ar: 'v1' }, { en: 'v2c', ar: 'v2c' }, { en: 'v3', ar: 'v3' }, { en: 'None', ar: 'لا شيء' }], answer: 2, explanation: { en: 'SNMPv3 adds authentication and encryption.', ar: 'SNMPv3 يضيف المصادقة والتشفير.' } }
        ],
        flashcards: [
          { front: { en: 'Syslog port?', ar: 'منفذ Syslog؟' }, back: { en: 'UDP 514.', ar: 'UDP 514.' } },
          { front: { en: 'SNMP trap port?', ar: 'منفذ trap في SNMP؟' }, back: { en: 'UDP 162.', ar: 'UDP 162.' } }
        ]
      },
      {
        id: 'qos',
        title: { en: 'Quality of Service (QoS)', ar: 'جودة الخدمة (QoS)' },
        duration: 10, difficulty: 'intermediate',
        summary: { en: 'QoS prioritizes important traffic (voice/video) when the network is congested.', ar: 'QoS يعطي الأولوية للمرور المهم (صوت/فيديو) عند ازدحام الشبكة.' },
        content: {
          en: `<h2>Why QoS?</h2><p>Links have finite bandwidth. When congested, <strong>QoS</strong> decides what gets priority. Voice and video are <strong>real-time</strong> — they can't tolerate delay (latency), variation (jitter) or loss; bulk downloads can wait.</p>
<h2>The four problems QoS fights</h2><ul><li><strong>Bandwidth</strong> — total capacity.</li><li><strong>Latency/delay</strong> — time to cross the network.</li><li><strong>Jitter</strong> — variation in delay (bad for voice).</li><li><strong>Loss</strong> — dropped packets.</li></ul>
<h2>QoS steps</h2><ol><li><strong>Classification</strong> — identify traffic (by port, ACL, DSCP).</li><li><strong>Marking</strong> — tag packets (DSCP in the IP header; e.g. EF=46 for voice).</li><li><strong>Queuing</strong> — prioritize marked traffic (LLQ for voice).</li><li><strong>Policing/Shaping</strong> — limit or smooth rates.</li></ol>
<div class="callout tip"><div class="callout-title">Voice targets</div><p>For good VoIP: latency &lt; 150 ms, jitter &lt; 30 ms, loss &lt; 1%.</p></div>`,
          ar: `<h2>لماذا QoS؟</h2><p>الوصلات لها نطاق محدود. عند الازدحام، يقرر <strong>QoS</strong> ما يحصل على الأولوية. الصوت والفيديو <strong>زمن حقيقي</strong> — لا يتحملان التأخير (latency) أو التغير (jitter) أو الفقد؛ أما التنزيلات الكبيرة فيمكنها الانتظار.</p>
<h2>المشاكل الأربع التي يحاربها QoS</h2><ul><li><strong>النطاق</strong> — السعة الكلية.</li><li><strong>التأخير</strong> — زمن عبور الشبكة.</li><li><strong>Jitter</strong> — تغيّر التأخير (سيئ للصوت).</li><li><strong>الفقد</strong> — الحزم المُسقطة.</li></ul>
<h2>خطوات QoS</h2><ol><li><strong>التصنيف</strong> — تحديد المرور (بالمنفذ، ACL، DSCP).</li><li><strong>الوسم</strong> — تمييز الحزم (DSCP في ترويسة IP؛ مثل EF=46 للصوت).</li><li><strong>الاصطفاف</strong> — أولوية المرور الموسوم (LLQ للصوت).</li><li><strong>التحديد/التنعيم</strong> — تقييد أو تنعيم المعدلات.</li></ol>
<div class="callout tip"><div class="callout-title">أهداف الصوت</div><p>لـ VoIP جيد: التأخير &lt; 150 مللي ثانية، jitter &lt; 30 مللي ثانية، الفقد &lt; 1%.</p></div>`
        },
        keyPoints: {
          en: ['QoS prioritizes traffic under congestion.', 'It addresses bandwidth, latency, jitter and loss.', 'Steps: classify → mark (DSCP) → queue → police/shape.', 'Voice target: <150 ms latency, <30 ms jitter, <1% loss.'],
          ar: ['QoS يعطي الأولوية للمرور عند الازدحام.', 'يعالج النطاق والتأخير و jitter والفقد.', 'الخطوات: تصنيف ← وسم (DSCP) ← اصطفاف ← تحديد/تنعيم.', 'هدف الصوت: <150 مللي تأخير، <30 مللي jitter، <1% فقد.']
        },
        quiz: [
          { q: { en: 'Which traffic type is most sensitive to jitter?', ar: 'أي نوع مرور أكثر حساسية للـ jitter؟' }, options: [{ en: 'Email', ar: 'البريد' }, { en: 'Voice (VoIP)', ar: 'الصوت (VoIP)' }, { en: 'File backup', ar: 'النسخ الاحتياطي' }, { en: 'Web browsing', ar: 'تصفح الويب' }], answer: 1, explanation: { en: 'Real-time voice is highly sensitive to jitter and delay.', ar: 'الصوت الزمني الحقيقي حساس جدًا للـ jitter والتأخير.' } },
          { q: { en: 'What does QoS marking use in the IP header?', ar: 'ماذا يستخدم وسم QoS في ترويسة IP؟' }, options: [{ en: 'TTL', ar: 'TTL' }, { en: 'DSCP', ar: 'DSCP' }, { en: 'Checksum', ar: 'Checksum' }, { en: 'Flags', ar: 'Flags' }], answer: 1, explanation: { en: 'DSCP bits in the IP header mark priority.', ar: 'بتات DSCP في ترويسة IP تحدد الأولوية.' } }
        ],
        flashcards: [
          { front: { en: 'DSCP value for voice (EF)?', ar: 'قيمة DSCP للصوت (EF)؟' }, back: { en: 'EF = 46.', ar: 'EF = 46.' } }
        ]
      }
    ]
  });

  D.ccna.modules.push({
    id: 'security-fundamentals',
    title: { en: 'Security Fundamentals', ar: 'أساسيات الأمن' },
    icon: 'shield',
    lessons: [
      {
        id: 'security-concepts',
        title: { en: 'Security Concepts & Threats', ar: 'مفاهيم الأمن والتهديدات' },
        duration: 11, difficulty: 'beginner',
        summary: { en: 'The CIA triad and the common threats and attacks every network defender must know.', ar: 'ثلاثي CIA والتهديدات والهجمات الشائعة التي يجب أن يعرفها كل مدافع عن الشبكة.' },
        content: {
          en: `<h2>The CIA triad</h2><ul><li><strong>Confidentiality</strong> — only authorized parties can read data (encryption).</li><li><strong>Integrity</strong> — data isn't altered (hashing).</li><li><strong>Availability</strong> — systems are up when needed (redundancy).</li></ul>
<h2>Key terms</h2><p>A <strong>vulnerability</strong> is a weakness; a <strong>threat</strong> is a potential danger; an <strong>exploit</strong> takes advantage of a vulnerability; <strong>risk</strong> is the likelihood × impact.</p>
<h2>Common attacks</h2><table><thead><tr><th>Attack</th><th>Description</th></tr></thead><tbody>
<tr><td>DoS / DDoS</td><td>Overwhelm a target to deny service</td></tr>
<tr><td>Spoofing</td><td>Forge a source (IP/MAC/email)</td></tr>
<tr><td>On-path (MITM)</td><td>Intercept traffic between two parties</td></tr>
<tr><td>Social engineering</td><td>Trick people (phishing) into giving access</td></tr>
<tr><td>Malware</td><td>Viruses, worms, ransomware, trojans</td></tr></tbody></table>
<div class="callout tip"><div class="callout-title">Defense in depth</div><p>No single control is enough. Layer physical, network, host and user controls together.</p></div>`,
          ar: `<h2>ثلاثي CIA</h2><ul><li><strong>السرية</strong> — فقط المخوّلون يقرؤون البيانات (التشفير).</li><li><strong>السلامة</strong> — عدم تعديل البيانات (التجزئة hashing).</li><li><strong>التوفّر</strong> — الأنظمة متاحة عند الحاجة (الاحتياطية).</li></ul>
<h2>مصطلحات أساسية</h2><p><strong>الثغرة</strong> ضعف؛ و<strong>التهديد</strong> خطر محتمل؛ و<strong>الاستغلال</strong> يستفيد من ثغرة؛ و<strong>الخطر</strong> = الاحتمال × الأثر.</p>
<h2>الهجمات الشائعة</h2><table><thead><tr><th>الهجوم</th><th>الوصف</th></tr></thead><tbody>
<tr><td>DoS / DDoS</td><td>إغراق الهدف لمنع الخدمة</td></tr>
<tr><td>الانتحال</td><td>تزييف المصدر (IP/MAC/بريد)</td></tr>
<tr><td>On-path (MITM)</td><td>اعتراض المرور بين طرفين</td></tr>
<tr><td>الهندسة الاجتماعية</td><td>خداع الناس (التصيّد) لمنح الوصول</td></tr>
<tr><td>البرمجيات الخبيثة</td><td>فيروسات، ديدان، فدية، أحصنة طروادة</td></tr></tbody></table>
<div class="callout tip"><div class="callout-title">الدفاع في العمق</div><p>لا يكفي ضابط واحد. اجمع ضوابط مادية وشبكية وللمضيف وللمستخدم معًا.</p></div>`
        },
        keyPoints: {
          en: ['CIA = Confidentiality, Integrity, Availability.', 'Vulnerability = weakness; threat = danger; exploit = uses it.', 'Common attacks: DoS/DDoS, spoofing, MITM, social engineering.', 'Use defense in depth — layered controls.'],
          ar: ['CIA = السرية والسلامة والتوفّر.', 'الثغرة = ضعف؛ التهديد = خطر؛ الاستغلال = يستخدمها.', 'هجمات شائعة: DoS/DDoS، انتحال، MITM، هندسة اجتماعية.', 'استخدم الدفاع في العمق — ضوابط متعددة الطبقات.']
        },
        quiz: [
          { q: { en: 'Encryption primarily protects which CIA principle?', ar: 'التشفير يحمي أساسًا أي مبدأ من CIA؟' }, options: [{ en: 'Availability', ar: 'التوفّر' }, { en: 'Integrity', ar: 'السلامة' }, { en: 'Confidentiality', ar: 'السرية' }, { en: 'None', ar: 'لا شيء' }], answer: 2, explanation: { en: 'Encryption keeps data confidential.', ar: 'التشفير يحافظ على سرية البيانات.' } },
          { q: { en: 'A phishing email is an example of…', ar: 'بريد التصيّد مثال على…' }, options: [{ en: 'DDoS', ar: 'DDoS' }, { en: 'Social engineering', ar: 'الهندسة الاجتماعية' }, { en: 'Spoofing only', ar: 'الانتحال فقط' }, { en: 'Encryption', ar: 'التشفير' }], answer: 1, explanation: { en: 'Phishing manipulates people — social engineering.', ar: 'التصيّد يتلاعب بالناس — هندسة اجتماعية.' } }
        ],
        flashcards: [
          { front: { en: 'What is the CIA triad?', ar: 'ما ثلاثي CIA؟' }, back: { en: 'Confidentiality, Integrity, Availability.', ar: 'السرية، السلامة، التوفّر.' } }
        ]
      },
      {
        id: 'aaa-security',
        title: { en: 'AAA, Authentication & Device Hardening', ar: 'AAA والمصادقة وتقوية الأجهزة' },
        duration: 11, difficulty: 'intermediate',
        summary: { en: 'AAA (Authentication, Authorization, Accounting), RADIUS vs TACACS+, and securing device access.', ar: 'AAA (المصادقة، التفويض، المحاسبة)، RADIUS مقابل TACACS+، وتأمين الوصول للأجهزة.' },
        content: {
          en: `<h2>AAA</h2><ul><li><strong>Authentication</strong> — who are you? (credentials)</li><li><strong>Authorization</strong> — what can you do? (permissions)</li><li><strong>Accounting</strong> — what did you do? (logging)</li></ul>
<h2>RADIUS vs TACACS+</h2><table><thead><tr><th></th><th>RADIUS</th><th>TACACS+</th></tr></thead><tbody>
<tr><td>Standard</td><td>Open (RFC)</td><td>Cisco</td></tr>
<tr><td>Transport</td><td>UDP 1812/1813</td><td>TCP 49</td></tr>
<tr><td>Encryption</td><td>Password only</td><td>Entire packet</td></tr>
<tr><td>Use</td><td>Network access (802.1X)</td><td>Device admin</td></tr></tbody></table>
<h2>Device hardening basics</h2><ul><li>Use <code>enable secret</code> and <code>service password-encryption</code>.</li><li>Configure SSH (not Telnet): generate RSA keys, <code>transport input ssh</code>.</li><li>Set login banners and idle timeouts.</li><li>Shut unused ports; apply port security.</li></ul>
<div class="callout danger"><div class="callout-title">Disable Telnet</div><p>Telnet sends everything in plaintext. Always use SSH for remote management.</p></div>`,
          ar: `<h2>AAA</h2><ul><li><strong>المصادقة</strong> — من أنت؟ (بيانات الاعتماد)</li><li><strong>التفويض</strong> — ماذا يمكنك أن تفعل؟ (الصلاحيات)</li><li><strong>المحاسبة</strong> — ماذا فعلت؟ (التسجيل)</li></ul>
<h2>RADIUS مقابل TACACS+</h2><table><thead><tr><th></th><th>RADIUS</th><th>TACACS+</th></tr></thead><tbody>
<tr><td>المعيار</td><td>مفتوح (RFC)</td><td>سيسكو</td></tr>
<tr><td>النقل</td><td>UDP 1812/1813</td><td>TCP 49</td></tr>
<tr><td>التشفير</td><td>كلمة المرور فقط</td><td>الحزمة كاملة</td></tr>
<tr><td>الاستخدام</td><td>الوصول للشبكة (802.1X)</td><td>إدارة الأجهزة</td></tr></tbody></table>
<h2>أساسيات تقوية الأجهزة</h2><ul><li>استخدم <code>enable secret</code> و<code>service password-encryption</code>.</li><li>هيّئ SSH (لا Telnet): ولّد مفاتيح RSA، <code>transport input ssh</code>.</li><li>اضبط لافتات الدخول ومهلات الخمول.</li><li>أغلق المنافذ غير المستخدمة؛ طبّق أمن المنافذ.</li></ul>
<div class="callout danger"><div class="callout-title">عطّل Telnet</div><p>Telnet يرسل كل شيء بنص واضح. استخدم دائمًا SSH للإدارة عن بُعد.</p></div>`
        },
        keyPoints: {
          en: ['AAA = Authentication, Authorization, Accounting.', 'RADIUS = open, UDP, encrypts password only (network access).', 'TACACS+ = Cisco, TCP 49, encrypts whole packet (device admin).', 'Use SSH not Telnet; encrypt passwords; shut unused ports.'],
          ar: ['AAA = المصادقة والتفويض والمحاسبة.', 'RADIUS = مفتوح، UDP، يشفّر كلمة المرور فقط (وصول الشبكة).', 'TACACS+ = سيسكو، TCP 49، يشفّر الحزمة كاملة (إدارة الأجهزة).', 'استخدم SSH لا Telnet؛ شفّر كلمات المرور؛ أغلق المنافذ غير المستخدمة.']
        },
        commands: [
          { cmd: 'enable secret CISCO123', desc: { en: 'Encrypted privileged password.', ar: 'كلمة مرور مميّزة مشفّرة.' } },
          { cmd: 'crypto key generate rsa', desc: { en: 'Generate keys to enable SSH.', ar: 'توليد مفاتيح لتفعيل SSH.' } },
          { cmd: 'transport input ssh', desc: { en: 'Allow only SSH on the VTY lines.', ar: 'السماح بـ SSH فقط على خطوط VTY.' } }
        ],
        quiz: [
          { q: { en: 'TACACS+ uses which transport/port?', ar: 'TACACS+ يستخدم أي نقل/منفذ؟' }, options: [{ en: 'UDP 1812', ar: 'UDP 1812' }, { en: 'TCP 49', ar: 'TCP 49' }, { en: 'UDP 49', ar: 'UDP 49' }, { en: 'TCP 443', ar: 'TCP 443' }], answer: 1, explanation: { en: 'TACACS+ uses TCP port 49 and encrypts the whole packet.', ar: 'TACACS+ يستخدم TCP منفذ 49 ويشفّر الحزمة كاملة.' } },
          { q: { en: 'The "second A" in AAA is…', ar: 'الـ "A الثانية" في AAA هي…' }, options: [{ en: 'Availability', ar: 'Availability' }, { en: 'Authorization', ar: 'Authorization' }, { en: 'Authentication', ar: 'Authentication' }, { en: 'Auditing', ar: 'Auditing' }], answer: 1, explanation: { en: 'Authentication, Authorization, Accounting.', ar: 'المصادقة، التفويض، المحاسبة.' } }
        ],
        flashcards: [
          { front: { en: 'RADIUS auth port?', ar: 'منفذ مصادقة RADIUS؟' }, back: { en: 'UDP 1812.', ar: 'UDP 1812.' } }
        ]
      },
      {
        id: 'port-security',
        title: { en: 'Switch Port Security', ar: 'أمن منافذ السويتش' },
        duration: 10, difficulty: 'intermediate',
        summary: { en: 'Limit which MAC addresses can use a switch port and what happens on a violation.', ar: 'حدّد أي عناوين MAC يمكنها استخدام منفذ السويتش وماذا يحدث عند المخالفة.' },
        content: {
          en: `<h2>What it does</h2><p><strong>Port security</strong> restricts a switch port to specific MAC addresses, stopping unauthorized devices and MAC-flooding attacks.</p>
<h2>Learning MACs</h2><p>You can set MACs statically, or use <strong>sticky learning</strong> (<code>switchport port-security mac-address sticky</code>) so the switch learns and saves the current MAC.</p>
<h2>Violation modes</h2><table><thead><tr><th>Mode</th><th>Action</th><th>Logs/SNMP</th></tr></thead><tbody>
<tr><td>protect</td><td>Drops offending frames</td><td>No</td></tr>
<tr><td>restrict</td><td>Drops + logs/counts</td><td>Yes</td></tr>
<tr><td>shutdown (default)</td><td>Err-disables the port</td><td>Yes</td></tr></tbody></table>
<div class="callout warn"><div class="callout-title">Err-disabled recovery</div><p>A shutdown-mode violation puts the port in err-disabled. Recover with <code>shutdown</code> then <code>no shutdown</code>, or configure errdisable recovery.</p></div>`,
          ar: `<h2>ماذا يفعل</h2><p><strong>أمن المنفذ</strong> يقيّد منفذ السويتش بعناوين MAC محددة، فيوقف الأجهزة غير المخوّلة وهجمات إغراق MAC.</p>
<h2>تعلّم عناوين MAC</h2><p>يمكن تعيين MACs ثابتة، أو استخدام <strong>التعلّم اللاصق</strong> (<code>switchport port-security mac-address sticky</code>) فيتعلّم السويتش الـ MAC الحالي ويحفظه.</p>
<h2>أوضاع المخالفة</h2><table><thead><tr><th>الوضع</th><th>الإجراء</th><th>سجلات/SNMP</th></tr></thead><tbody>
<tr><td>protect</td><td>يُسقط الأطر المخالفة</td><td>لا</td></tr>
<tr><td>restrict</td><td>يُسقط + يسجّل/يعدّ</td><td>نعم</td></tr>
<tr><td>shutdown (الافتراضي)</td><td>يعطّل المنفذ (err-disable)</td><td>نعم</td></tr></tbody></table>
<div class="callout warn"><div class="callout-title">استرجاع err-disabled</div><p>مخالفة وضع shutdown تضع المنفذ في err-disabled. استرجعه بـ <code>shutdown</code> ثم <code>no shutdown</code>، أو هيّئ errdisable recovery.</p></div>`
        },
        keyPoints: {
          en: ['Port security limits MACs allowed on a port.', 'Sticky learning auto-saves the current MAC.', 'Modes: protect, restrict, shutdown (default).', 'Shutdown mode err-disables the port on violation.'],
          ar: ['أمن المنفذ يحدّ عناوين MAC المسموحة على المنفذ.', 'التعلّم اللاصق يحفظ الـ MAC الحالي تلقائيًا.', 'الأوضاع: protect، restrict، shutdown (الافتراضي).', 'وضع shutdown يعطّل المنفذ عند المخالفة.']
        },
        examples: [
          { title: { en: 'Enable sticky port security', ar: 'تفعيل أمن المنفذ اللاصق' }, code: 'SW(config)# interface fa0/1\nSW(config-if)# switchport mode access\nSW(config-if)# switchport port-security\nSW(config-if)# switchport port-security maximum 2\nSW(config-if)# switchport port-security mac-address sticky\nSW(config-if)# switchport port-security violation restrict' }
        ],
        commands: [
          { cmd: 'switchport port-security', desc: { en: 'Enable port security on the interface.', ar: 'تفعيل أمن المنفذ على الواجهة.' } },
          { cmd: 'switchport port-security maximum 2', desc: { en: 'Allow up to 2 MAC addresses.', ar: 'السماح بحد أقصى عنواني MAC.' } },
          { cmd: 'switchport port-security violation restrict', desc: { en: 'Set the violation action.', ar: 'تعيين إجراء المخالفة.' } },
          { cmd: 'show port-security interface fa0/1', desc: { en: 'Verify port-security status.', ar: 'التحقق من حالة أمن المنفذ.' } }
        ],
        lab: {
          title: { en: 'Lab: Secure an Access Port', ar: 'مختبر: تأمين منفذ وصول' },
          objective: { en: 'Allow only one PC on Fa0/1 and shut the port if another device connects.', ar: 'اسمح بحاسوب واحد فقط على Fa0/1 وأغلق المنفذ إذا اتصل جهاز آخر.' },
          topology: 'PC1 --- Fa0/1 [SW]',
          steps: [
            { en: 'Set the port to access mode and enable port-security.', ar: 'اجعل المنفذ وضع access وفعّل port-security.' },
            { en: 'Set maximum 1 and sticky MAC learning.', ar: 'اضبط maximum 1 وتعلّم MAC اللاصق.' },
            { en: 'Leave violation at the default (shutdown).', ar: 'اترك المخالفة على الافتراضي (shutdown).' }
          ],
          verify: { en: 'Swap PC1 for another device → the port goes err-disabled; show port-security shows the violation.', ar: 'استبدل PC1 بجهاز آخر ← يصبح المنفذ err-disabled؛ و show port-security يُظهر المخالفة.' }
        },
        quiz: [
          { q: { en: 'Default port-security violation mode?', ar: 'وضع مخالفة أمن المنفذ الافتراضي؟' }, options: [{ en: 'protect', ar: 'protect' }, { en: 'restrict', ar: 'restrict' }, { en: 'shutdown', ar: 'shutdown' }, { en: 'disable', ar: 'disable' }], answer: 2, explanation: { en: 'Default is shutdown (err-disable).', ar: 'الافتراضي هو shutdown (err-disable).' } },
          { q: { en: 'What does "sticky" do?', ar: 'ماذا يفعل "sticky"؟' }, options: [{ en: 'Blocks all MACs', ar: 'يحجب كل عناوين MAC' }, { en: 'Dynamically learns and saves the MAC', ar: 'يتعلّم ويحفظ الـ MAC ديناميكيًا' }, { en: 'Disables the port', ar: 'يعطّل المنفذ' }, { en: 'Sets a VLAN', ar: 'يحدد VLAN' }], answer: 1, explanation: { en: 'Sticky learns the current MAC and adds it to the config.', ar: 'sticky يتعلّم الـ MAC الحالي ويضيفه للتهيئة.' } }
        ],
        flashcards: [
          { front: { en: 'Which violation mode logs but keeps the port up?', ar: 'أي وضع مخالفة يسجّل لكن يبقي المنفذ يعمل؟' }, back: { en: 'restrict.', ar: 'restrict.' } }
        ]
      },
      {
        id: 'acl-fundamentals',
        title: { en: 'ACL Fundamentals', ar: 'أساسيات قوائم التحكم ACL' },
        duration: 11, difficulty: 'advanced',
        summary: { en: 'Access Control Lists filter traffic by rules. Standard vs extended, wildcard masks, and processing order.', ar: 'قوائم التحكم بالوصول تصفّي المرور بقواعد. القياسية مقابل الممتدة، أقنعة wildcard، وترتيب المعالجة.' },
        content: {
          en: `<h2>What ACLs do</h2><p>An <strong>ACL</strong> is an ordered list of permit/deny rules a router checks against packets. Used for security filtering, NAT, QoS classification and route filtering.</p>
<h2>Standard vs Extended</h2><table><thead><tr><th></th><th>Standard</th><th>Extended</th></tr></thead><tbody>
<tr><td>Numbers</td><td>1–99, 1300–1999</td><td>100–199, 2000–2699</td></tr>
<tr><td>Matches</td><td>Source IP only</td><td>Source+dest IP, protocol, ports</td></tr>
<tr><td>Place</td><td>Near destination</td><td>Near source</td></tr></tbody></table>
<h2>Wildcard masks</h2><p>ACLs use a <strong>wildcard (inverse) mask</strong>: 0 = must match, 1 = ignore. <code>0.0.0.255</code> matches a whole /24. <code>host x.x.x.x</code> = <code>0.0.0.0</code>; <code>any</code> = <code>0.0.0.0 255.255.255.255</code>.</p>
<h2>Processing rules</h2><ul><li>Rules are checked <strong>top-down</strong>; first match wins.</li><li>There is an <strong>implicit deny any</strong> at the end.</li><li>One ACL per interface, per direction, per protocol.</li></ul>
<div class="callout warn"><div class="callout-title">Order matters</div><p>Put more specific rules first. A broad permit before a specific deny will let the traffic through.</p></div>`,
          ar: `<h2>ماذا تفعل ACLs</h2><p>الـ <strong>ACL</strong> قائمة مرتبة من قواعد السماح/المنع يفحصها الراوتر مقابل الحزم. تُستخدم للتصفية الأمنية و NAT وتصنيف QoS وتصفية المسارات.</p>
<h2>قياسية مقابل ممتدة</h2><table><thead><tr><th></th><th>قياسية</th><th>ممتدة</th></tr></thead><tbody>
<tr><td>الأرقام</td><td>1–99، 1300–1999</td><td>100–199، 2000–2699</td></tr>
<tr><td>تطابق</td><td>IP المصدر فقط</td><td>IP المصدر+الوجهة، البروتوكول، المنافذ</td></tr>
<tr><td>المكان</td><td>قرب الوجهة</td><td>قرب المصدر</td></tr></tbody></table>
<h2>أقنعة wildcard</h2><p>تستخدم ACLs <strong>قناع wildcard (عكسي)</strong>: 0 = يجب أن يطابق، 1 = تجاهل. <code>0.0.0.255</code> يطابق /24 كاملة. <code>host x.x.x.x</code> = <code>0.0.0.0</code>؛ و<code>any</code> = <code>0.0.0.0 255.255.255.255</code>.</p>
<h2>قواعد المعالجة</h2><ul><li>تُفحص القواعد <strong>من الأعلى للأسفل</strong>؛ أول تطابق يفوز.</li><li>هناك <strong>deny any ضمني</strong> في النهاية.</li><li>ACL واحدة لكل واجهة، لكل اتجاه، لكل بروتوكول.</li></ul>
<div class="callout warn"><div class="callout-title">الترتيب مهم</div><p>ضع القواعد الأكثر تحديدًا أولًا. سماح عام قبل منع محدد سيمرّر المرور.</p></div>`
        },
        keyPoints: {
          en: ['ACLs are ordered permit/deny rules, first match wins.', 'Standard match source only; extended match much more.', 'Place standard near destination, extended near source.', 'Implicit deny any sits at the end of every ACL.'],
          ar: ['ACLs قواعد سماح/منع مرتبة، أول تطابق يفوز.', 'القياسية تطابق المصدر فقط؛ الممتدة تطابق أكثر بكثير.', 'ضع القياسية قرب الوجهة، والممتدة قرب المصدر.', 'deny any ضمني في نهاية كل ACL.']
        },
        quiz: [
          { q: { en: 'Where should an extended ACL be placed?', ar: 'أين يجب وضع ACL ممتدة؟' }, options: [{ en: 'Near the destination', ar: 'قرب الوجهة' }, { en: 'Near the source', ar: 'قرب المصدر' }, { en: 'Anywhere', ar: 'أي مكان' }, { en: 'On a loopback', ar: 'على loopback' }], answer: 1, explanation: { en: 'Extended ACLs go near the source to drop traffic early.', ar: 'ACLs الممتدة قرب المصدر لإسقاط المرور مبكرًا.' } },
          { q: { en: 'What is at the end of every ACL?', ar: 'ماذا يوجد في نهاية كل ACL؟' }, options: [{ en: 'permit any', ar: 'permit any' }, { en: 'Implicit deny any', ar: 'deny any ضمني' }, { en: 'A log statement', ar: 'جملة تسجيل' }, { en: 'Nothing', ar: 'لا شيء' }], answer: 1, explanation: { en: 'An implicit deny any drops anything not matched.', ar: 'deny any ضمني يُسقط ما لم يُطابَق.' } },
          { q: { en: 'Wildcard mask to match exactly one host?', ar: 'قناع wildcard لمطابقة مضيف واحد بالضبط؟' }, options: [{ en: '255.255.255.255', ar: '255.255.255.255' }, { en: '0.0.0.0', ar: '0.0.0.0' }, { en: '0.0.0.255', ar: '0.0.0.255' }, { en: '0.0.0.1', ar: '0.0.0.1' }], answer: 1, explanation: { en: '0.0.0.0 = host (match all bits).', ar: '0.0.0.0 = host (طابق كل البتات).' } }
        ],
        flashcards: [
          { front: { en: 'Standard ACL number range?', ar: 'نطاق أرقام ACL القياسية؟' }, back: { en: '1–99 (and 1300–1999).', ar: '1–99 (و1300–1999).' } },
          { front: { en: 'Wildcard for "any"?', ar: 'wildcard لـ "any"؟' }, back: { en: '255.255.255.255.', ar: '255.255.255.255.' } }
        ]
      },
      {
        id: 'acl-config',
        title: { en: 'Configuring ACLs', ar: 'تهيئة قوائم ACL' },
        duration: 12, difficulty: 'advanced',
        summary: { en: 'Build and apply numbered and named ACLs, choosing the right interface and direction.', ar: 'ابنِ وطبّق ACLs مرقّمة ومسمّاة، باختيار الواجهة والاتجاه الصحيحين.' },
        content: {
          en: `<h2>Numbered vs named</h2><p>Numbered ACLs use ranges; <strong>named</strong> ACLs are easier to read and edit. Both can be standard or extended.</p>
<h2>Applying an ACL</h2><p>Create the rules, then apply to an interface with <code>ip access-group [name|number] {in|out}</code>. <strong>Direction</strong> is relative to the interface: <em>in</em> = packets entering the router on that interface.</p>
<h2>Example (extended, named)</h2><p>Allow web to a server but block everything else from a subnet.</p>
<h2>Editing</h2><p>Named/extended ACLs support sequence numbers so you can insert/delete a line without rewriting the whole list.</p>
<div class="callout tip"><div class="callout-title">Verify</div><p>Use <code>show access-lists</code> to see rules and hit counters — great for confirming traffic is matching the lines you expect.</p></div>`,
          ar: `<h2>مرقّمة مقابل مسمّاة</h2><p>ACLs المرقّمة تستخدم نطاقات؛ والـ <strong>مسمّاة</strong> أسهل قراءة وتعديلًا. كلاهما قد يكون قياسيًا أو ممتدًا.</p>
<h2>تطبيق ACL</h2><p>أنشئ القواعد ثم طبّقها على واجهة بـ <code>ip access-group [اسم|رقم] {in|out}</code>. <strong>الاتجاه</strong> نسبة للواجهة: <em>in</em> = الحزم الداخلة للراوتر عبر تلك الواجهة.</p>
<h2>مثال (ممتدة، مسمّاة)</h2><p>اسمح بالويب لخادم لكن امنع كل شيء آخر من شبكة فرعية.</p>
<h2>التعديل</h2><p>ACLs المسمّاة/الممتدة تدعم أرقام التسلسل لإدراج/حذف سطر دون إعادة كتابة القائمة كلها.</p>
<div class="callout tip"><div class="callout-title">التحقق</div><p>استخدم <code>show access-lists</code> لرؤية القواعد وعدّادات الإصابات — ممتاز لتأكيد مطابقة المرور للأسطر المتوقعة.</p></div>`
        },
        keyPoints: {
          en: ['Apply ACLs with ip access-group {in|out}.', 'Direction is relative to the interface.', 'Named ACLs are readable and editable by sequence number.', 'Verify matches with show access-lists.'],
          ar: ['طبّق ACLs بـ ip access-group {in|out}.', 'الاتجاه نسبة للواجهة.', 'ACLs المسمّاة مقروءة وقابلة للتعديل برقم التسلسل.', 'تحقق من المطابقات بـ show access-lists.']
        },
        examples: [
          { title: { en: 'Named extended ACL', ar: 'ACL ممتدة مسمّاة' }, code: 'R1(config)# ip access-list extended WEB-ONLY\nR1(config-ext-nacl)# permit tcp 192.168.1.0 0.0.0.255 host 10.0.0.5 eq 80\nR1(config-ext-nacl)# deny ip 192.168.1.0 0.0.0.255 any\nR1(config-ext-nacl)# permit ip any any\nR1(config)# interface g0/0\nR1(config-if)# ip access-group WEB-ONLY in' }
        ],
        commands: [
          { cmd: 'access-list 10 permit 192.168.1.0 0.0.0.255', desc: { en: 'Standard numbered ACL entry.', ar: 'مدخل ACL قياسي مرقّم.' } },
          { cmd: 'ip access-list extended WEB-ONLY', desc: { en: 'Create a named extended ACL.', ar: 'إنشاء ACL ممتدة مسمّاة.' } },
          { cmd: 'ip access-group WEB-ONLY in', desc: { en: 'Apply the ACL inbound.', ar: 'تطبيق الـ ACL للداخل.' } },
          { cmd: 'show access-lists', desc: { en: 'Display ACLs and hit counts.', ar: 'عرض الـ ACLs وعدّادات الإصابات.' } }
        ],
        lab: {
          title: { en: 'Lab: Restrict Access with an Extended ACL', ar: 'مختبر: تقييد الوصول بـ ACL ممتدة' },
          objective: { en: 'Allow the SALES subnet to reach only the web server (port 80) and deny other access.', ar: 'اسمح لشبكة SALES بالوصول لخادم الويب فقط (المنفذ 80) وامنع غير ذلك.' },
          topology: 'SALES 192.168.1.0/24 - [R1] - Server 10.0.0.5',
          steps: [
            { en: 'Create a named extended ACL permitting tcp to host 10.0.0.5 eq 80.', ar: 'أنشئ ACL ممتدة مسمّاة تسمح tcp للمضيف 10.0.0.5 eq 80.' },
            { en: 'Deny other IP from the SALES subnet, then permit ip any any.', ar: 'امنع باقي IP من شبكة SALES، ثم permit ip any any.' },
            { en: 'Apply it inbound on the SALES-facing interface.', ar: 'طبّقها للداخل على الواجهة المواجهة لـ SALES.' }
          ],
          verify: { en: 'SALES can browse the server (80) but cannot ping it; show access-lists shows matches.', ar: 'يمكن لـ SALES تصفح الخادم (80) لكن لا ping؛ و show access-lists يُظهر المطابقات.' }
        },
        quiz: [
          { q: { en: 'In which direction does "in" filter on an interface?', ar: 'في أي اتجاه يصفّي "in" على الواجهة؟' }, options: [{ en: 'Packets leaving the router', ar: 'الحزم الخارجة من الراوتر' }, { en: 'Packets entering the router', ar: 'الحزم الداخلة للراوتر' }, { en: 'Both', ar: 'كلاهما' }, { en: 'Neither', ar: 'لا شيء' }], answer: 1, explanation: { en: '"in" filters packets entering the router on that interface.', ar: '"in" يصفّي الحزم الداخلة للراوتر عبر تلك الواجهة.' } },
          { q: { en: 'Which command applies an ACL to an interface?', ar: 'أي أمر يطبّق ACL على واجهة؟' }, options: [{ en: 'access-class', ar: 'access-class' }, { en: 'ip access-group', ar: 'ip access-group' }, { en: 'apply acl', ar: 'apply acl' }, { en: 'ip acl bind', ar: 'ip acl bind' }], answer: 1, explanation: { en: 'ip access-group [acl] {in|out} applies it.', ar: 'ip access-group [acl] {in|out} يطبّقها.' } }
        ],
        flashcards: [
          { front: { en: 'Command to apply ACL to VTY lines?', ar: 'أمر تطبيق ACL على خطوط VTY؟' }, back: { en: 'access-class (not ip access-group).', ar: 'access-class (لا ip access-group).' } }
        ]
      },
      {
        id: 'vpn-fundamentals',
        title: { en: 'VPN Fundamentals', ar: 'أساسيات الشبكات الخاصة الافتراضية VPN' },
        duration: 10, difficulty: 'intermediate',
        summary: { en: 'VPNs build secure tunnels over untrusted networks. Site-to-site vs remote-access, and IPsec.', ar: 'الـ VPN تبني أنفاقًا آمنة عبر شبكات غير موثوقة. موقع-لموقع مقابل وصول بعيد، و IPsec.' },
        content: {
          en: `<h2>What is a VPN?</h2><p>A <strong>VPN (Virtual Private Network)</strong> creates an encrypted <strong>tunnel</strong> across a public network (the Internet), so data is private as if on a dedicated link.</p>
<h2>Types</h2><ul><li><strong>Site-to-site</strong> — connects two offices/routers permanently (e.g. IPsec between branch and HQ).</li><li><strong>Remote-access</strong> — an individual user connects from anywhere (e.g. SSL/TLS VPN client, AnyConnect).</li></ul>
<h2>IPsec building blocks</h2><table><thead><tr><th>Service</th><th>Provided by</th></tr></thead><tbody>
<tr><td>Confidentiality</td><td>Encryption (AES)</td></tr>
<tr><td>Integrity</td><td>Hashing (SHA)</td></tr>
<tr><td>Authentication</td><td>Pre-shared key or certificates</td></tr>
<tr><td>Key exchange</td><td>IKE / Diffie-Hellman</td></tr></tbody></table>
<p><strong>GRE</strong> tunnels can carry multicast/routing but aren't encrypted on their own — often combined with IPsec.</p>
<div class="callout tip"><div class="callout-title">SSL vs IPsec</div><p>Remote-access VPNs increasingly use SSL/TLS (works through browsers/firewalls easily); site-to-site classically uses IPsec.</p></div>`,
          ar: `<h2>ما هي الـ VPN؟</h2><p><strong>VPN (الشبكة الخاصة الافتراضية)</strong> تُنشئ <strong>نفقًا</strong> مشفّرًا عبر شبكة عامة (الإنترنت)، فتكون البيانات خاصة كأنها على وصلة مخصصة.</p>
<h2>الأنواع</h2><ul><li><strong>موقع-لموقع</strong> — يربط مكتبين/راوترين بشكل دائم (مثل IPsec بين الفرع والمقر).</li><li><strong>وصول بعيد</strong> — مستخدم فردي يتصل من أي مكان (مثل عميل SSL/TLS VPN، AnyConnect).</li></ul>
<h2>لبنات IPsec</h2><table><thead><tr><th>الخدمة</th><th>يوفّرها</th></tr></thead><tbody>
<tr><td>السرية</td><td>التشفير (AES)</td></tr>
<tr><td>السلامة</td><td>التجزئة (SHA)</td></tr>
<tr><td>المصادقة</td><td>مفتاح مشترك مسبقًا أو شهادات</td></tr>
<tr><td>تبادل المفاتيح</td><td>IKE / Diffie-Hellman</td></tr></tbody></table>
<p>أنفاق <strong>GRE</strong> يمكنها حمل البث المتعدد/التوجيه لكنها غير مشفّرة بذاتها — تُدمج غالبًا مع IPsec.</p>
<div class="callout tip"><div class="callout-title">SSL مقابل IPsec</div><p>VPN الوصول البعيد تستخدم SSL/TLS بشكل متزايد (تعمل عبر المتصفحات/الجدران بسهولة)؛ وموقع-لموقع تقليديًا تستخدم IPsec.</p></div>`
        },
        keyPoints: {
          en: ['A VPN is an encrypted tunnel over a public network.', 'Site-to-site connects networks; remote-access connects users.', 'IPsec provides confidentiality, integrity and authentication.', 'GRE carries routing/multicast but needs IPsec for encryption.'],
          ar: ['الـ VPN نفق مشفّر عبر شبكة عامة.', 'موقع-لموقع يربط الشبكات؛ والوصول البعيد يربط المستخدمين.', 'IPsec يوفّر السرية والسلامة والمصادقة.', 'GRE يحمل التوجيه/البث المتعدد لكنه يحتاج IPsec للتشفير.']
        },
        quiz: [
          { q: { en: 'Which VPN type connects a branch office to HQ permanently?', ar: 'أي نوع VPN يربط فرعًا بالمقر بشكل دائم؟' }, options: [{ en: 'Remote-access', ar: 'وصول بعيد' }, { en: 'Site-to-site', ar: 'موقع-لموقع' }, { en: 'Clientless only', ar: 'بلا عميل فقط' }, { en: 'Dial-up', ar: 'اتصال هاتفي' }], answer: 1, explanation: { en: 'Site-to-site VPNs link whole networks together.', ar: 'VPN موقع-لموقع تربط شبكات كاملة.' } },
          { q: { en: 'Which protocol exchanges IPsec keys?', ar: 'أي بروتوكول يتبادل مفاتيح IPsec؟' }, options: [{ en: 'IKE', ar: 'IKE' }, { en: 'OSPF', ar: 'OSPF' }, { en: 'HTTP', ar: 'HTTP' }, { en: 'ARP', ar: 'ARP' }], answer: 0, explanation: { en: 'IKE (with Diffie-Hellman) negotiates IPsec keys.', ar: 'IKE (مع Diffie-Hellman) يتفاوض على مفاتيح IPsec.' } }
        ],
        flashcards: [
          { front: { en: 'Does GRE encrypt by itself?', ar: 'هل GRE يشفّر بذاته؟' }, back: { en: 'No — combine it with IPsec for encryption.', ar: 'لا — ادمجه مع IPsec للتشفير.' } }
        ]
      }
    ]
  });
})();
