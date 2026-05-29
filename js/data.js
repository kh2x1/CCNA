/* ============================================================
   بيانات المنهج — شرح مواضيع CCNA و Network+ بالعربية
   كل مجموعة (module) تحتوي على دروس، وكل درس فيه محتوى HTML.
   ============================================================ */
window.CURRICULUM = [
  /* =================== مقدمة عامة =================== */
  {
    id: "intro",
    title: "البداية والأساسيات العامة",
    badge: "تمهيد",
    lessons: [
      {
        id: "what-is-network",
        title: "ما هي الشبكة؟ ولماذا ندرسها؟",
        lead: "مدخل سريع لمفهوم الشبكات والفرق بين شهادتي CCNA و Network+.",
        html: `
          <h2>تعريف الشبكة</h2>
          <p>الشبكة (Network) هي مجموعة من الأجهزة (حواسيب، هواتف، خوادم، طابعات…) متصلة ببعضها بهدف <strong>تبادل البيانات ومشاركة الموارد</strong>. أبسط شبكة تتكوّن من جهازين متصلين بكابل، وأكبرها هي شبكة الإنترنت التي تربط مليارات الأجهزة حول العالم.</p>

          <h2>لماذا نحتاج الشبكات؟</h2>
          <ul>
            <li><strong>مشاركة الموارد:</strong> طابعة واحدة لعدة موظفين، أو مساحة تخزين مشتركة.</li>
            <li><strong>الاتصال:</strong> البريد الإلكتروني، المكالمات الصوتية والمرئية، الرسائل.</li>
            <li><strong>الوصول للبيانات:</strong> قواعد البيانات والتطبيقات المركزية.</li>
            <li><strong>التكلفة:</strong> توفير في العتاد عبر المشاركة بدل التكرار.</li>
          </ul>

          <h2>CCNA مقابل Network+</h2>
          <table>
            <thead><tr><th>المعيار</th><th>CCNA (Cisco)</th><th>Network+ (CompTIA)</th></tr></thead>
            <tbody>
              <tr><td>الجهة المانحة</td><td>شركة Cisco</td><td>منظمة CompTIA</td></tr>
              <tr><td>الطابع</td><td>مرتبطة بأجهزة Cisco وأوامرها (IOS)</td><td>محايدة تجاه الشركات (Vendor-neutral)</td></tr>
              <tr><td>العمق التقني</td><td>أعمق في التوجيه والتبديل والإعداد العملي</td><td>أوسع وأكثر مفاهيمية</td></tr>
              <tr><td>رقم الاختبار</td><td>200-301</td><td>N10-008 / N10-009</td></tr>
              <tr><td>الأنسب لـ</td><td>من يريد التخصص في معدّات الشبكات</td><td>من يريد أساسًا متينًا وعامًا</td></tr>
            </tbody>
          </table>

          <div class="tip"><b>💡 نصيحة</b> الكثير من المفاهيم مشتركة بين الشهادتين (OSI، TCP/IP، عناوين IP، الأمان). إتقان الأساسيات يخدمك في كليهما.</div>

          <h2>أنواع الشبكات حسب الحجم</h2>
          <ul>
            <li><strong>PAN</strong> (Personal Area Network): شبكة شخصية صغيرة جدًا مثل Bluetooth بين هاتفك وسماعتك.</li>
            <li><strong>LAN</strong> (Local Area Network): شبكة محلية داخل مبنى أو منزل أو مكتب.</li>
            <li><strong>WLAN</strong>: شبكة محلية لاسلكية (Wi-Fi).</li>
            <li><strong>MAN</strong> (Metropolitan Area Network): تغطي مدينة كاملة.</li>
            <li><strong>WAN</strong> (Wide Area Network): تغطي مناطق جغرافية واسعة، والإنترنت أكبر مثال.</li>
          </ul>
        `
      },
      {
        id: "study-plan",
        title: "كيف تستخدم هذا الموقع وخطة المذاكرة",
        lead: "ترتيب مقترح لدراسة الدروس وطريقة الاستفادة من الأمثلة العملية.",
        html: `
          <h2>ترتيب الدراسة المقترح</h2>
          <ol>
            <li>ابدأ بقسم <strong>نماذج الشبكات</strong> (OSI و TCP/IP) لأنه الإطار الذي تُبنى عليه بقية المواضيع.</li>
            <li>انتقل إلى <strong>العنونة (IP Addressing)</strong> و <strong>الـ Subnetting</strong> — وهي أهم مهارة عملية.</li>
            <li>ادرس <strong>التبديل (Switching)</strong> ثم <strong>التوجيه (Routing)</strong>.</li>
            <li>أكمل بـ <strong>خدمات الشبكة</strong> (DHCP, DNS, NAT) و <strong>الأمان</strong>.</li>
            <li>أنهِ بمواضيع <strong>اللاسلكي والأتمتة واستكشاف الأخطاء</strong>.</li>
          </ol>

          <h2>كيف تذاكر بفعالية</h2>
          <ul>
            <li><strong>الممارسة:</strong> استخدم محاكيًا مثل <em>Cisco Packet Tracer</em> أو <em>GNS3</em> لتجربة الأوامر بنفسك.</li>
            <li><strong>التكرار المتباعد:</strong> راجع المواضيع على فترات بدل الحفظ المكثف.</li>
            <li><strong>اشرح بصوتك:</strong> إذا استطعت شرح المفهوم لشخص آخر فقد فهمته فعلًا.</li>
            <li><strong>الـ Subnetting يوميًا:</strong> حل مسألة تقسيم شبكات كل يوم حتى تصبح سريعًا.</li>
          </ul>

          <div class="note"><b>📌 ملاحظة</b> كل صندوق رمادي يحتوي أوامر يمكنك تجربتها مباشرة في المحاكي. الأوامر مكتوبة بنفس صيغة Cisco IOS.</div>
        `
      }
    ]
  },

  /* =================== نماذج الشبكات =================== */
  {
    id: "models",
    title: "نماذج الشبكات والبروتوكولات",
    badge: "مشترك",
    lessons: [
      {
        id: "osi-model",
        title: "نموذج OSI بطبقاته السبع",
        lead: "الإطار المرجعي الذي يصف كيف تنتقل البيانات عبر الشبكة في سبع طبقات.",
        html: `
          <h2>ما هو نموذج OSI؟</h2>
          <p>نموذج <strong>OSI</strong> (Open Systems Interconnection) هو نموذج مرجعي نظري طوّرته منظمة ISO لتقسيم عملية الاتصال الشبكي إلى <strong>سبع طبقات</strong>، كل طبقة لها وظيفة محددة وتتعامل مع الطبقة التي فوقها وتحتها فقط.</p>

          <h2>الطبقات السبع (من الأعلى للأسفل)</h2>
          <table>
            <thead><tr><th>#</th><th>الطبقة</th><th>الوظيفة</th><th>أمثلة / وحدة البيانات (PDU)</th></tr></thead>
            <tbody>
              <tr><td>7</td><td>التطبيق Application</td><td>الواجهة مع المستخدم والتطبيقات</td><td>HTTP, FTP, DNS</td></tr>
              <tr><td>6</td><td>العرض Presentation</td><td>التشفير والضغط وتنسيق البيانات</td><td>SSL/TLS, JPEG, ASCII</td></tr>
              <tr><td>5</td><td>الجلسة Session</td><td>إنشاء وإدارة وإنهاء الجلسات</td><td>NetBIOS, RPC</td></tr>
              <tr><td>4</td><td>النقل Transport</td><td>توصيل موثوق/غير موثوق، تجزئة، منافذ</td><td>TCP, UDP — <em>Segment</em></td></tr>
              <tr><td>3</td><td>الشبكة Network</td><td>العنونة المنطقية والتوجيه بين الشبكات</td><td>IP, ICMP — <em>Packet</em></td></tr>
              <tr><td>2</td><td>ربط البيانات Data Link</td><td>العنونة الفيزيائية (MAC) والتأطير</td><td>Ethernet, Switch — <em>Frame</em></td></tr>
              <tr><td>1</td><td>الفيزيائية Physical</td><td>الإشارات الكهربائية/الضوئية والكابلات</td><td>كابلات, Hub — <em>Bits</em></td></tr>
            </tbody>
          </table>

          <div class="tip"><b>💡 طريقة الحفظ</b> من الأسفل للأعلى: <strong>P</strong>lease <strong>D</strong>o <strong>N</strong>ot <strong>T</strong>hrow <strong>S</strong>ausage <strong>P</strong>izza <strong>A</strong>way.</div>

          <h2>التغليف Encapsulation</h2>
          <p>عند إرسال البيانات تمر من الطبقة 7 نزولًا إلى 1، وفي كل طبقة تُضاف ترويسة (Header). هذه العملية تُسمى <strong>Encapsulation</strong>. عند الاستقبال يحدث العكس <strong>De-encapsulation</strong> من 1 إلى 7.</p>
          <ul>
            <li>Transport ⟶ تضيف منافذ المصدر/الوجهة وتُنتج <strong>Segment</strong>.</li>
            <li>Network ⟶ تضيف عناوين IP وتُنتج <strong>Packet</strong>.</li>
            <li>Data Link ⟶ تضيف عناوين MAC وتُنتج <strong>Frame</strong>.</li>
            <li>Physical ⟶ تحوّل كل شيء إلى <strong>Bits</strong> (0 و 1).</li>
          </ul>

          <div class="note"><b>📌 لماذا الطبقات مهمة؟</b> تتيح تقسيم المشاكل (Troubleshooting طبقة طبقة)، وتسمح للشركات بتطوير منتجات متوافقة دون معرفة تفاصيل الطبقات الأخرى.</div>
        `
      },
      {
        id: "tcp-ip-model",
        title: "نموذج TCP/IP",
        lead: "النموذج العملي الذي تعمل به الإنترنت فعليًا، ومقارنته بـ OSI.",
        html: `
          <h2>نموذج TCP/IP</h2>
          <p>بينما OSI نموذج نظري مرجعي، فإن <strong>TCP/IP</strong> هو النموذج العملي الذي تُبنى عليه الإنترنت. يتكوّن في صيغته الشائعة من <strong>أربع طبقات</strong>.</p>

          <table>
            <thead><tr><th>TCP/IP</th><th>يقابلها في OSI</th><th>أمثلة</th></tr></thead>
            <tbody>
              <tr><td>التطبيق Application</td><td>الطبقات 7+6+5</td><td>HTTP, DNS, FTP, SMTP</td></tr>
              <tr><td>النقل Transport</td><td>الطبقة 4</td><td>TCP, UDP</td></tr>
              <tr><td>الإنترنت Internet</td><td>الطبقة 3</td><td>IP, ICMP, ARP</td></tr>
              <tr><td>الوصول للشبكة Network Access</td><td>الطبقات 2+1</td><td>Ethernet, Wi-Fi</td></tr>
            </tbody>
          </table>

          <h2>TCP مقابل UDP</h2>
          <table>
            <thead><tr><th>الميزة</th><th>TCP</th><th>UDP</th></tr></thead>
            <tbody>
              <tr><td>الاتصال</td><td>موجّه بالاتصال (3-way handshake)</td><td>بدون اتصال</td></tr>
              <tr><td>الموثوقية</td><td>موثوق (إعادة إرسال + تأكيد)</td><td>غير موثوق</td></tr>
              <tr><td>السرعة</td><td>أبطأ</td><td>أسرع</td></tr>
              <tr><td>الترتيب</td><td>يضمن ترتيب الحزم</td><td>لا يضمن</td></tr>
              <tr><td>الاستخدام</td><td>الويب، البريد، نقل الملفات</td><td>البث المباشر، الألعاب، DNS, VoIP</td></tr>
            </tbody>
          </table>

          <h2>مصافحة TCP الثلاثية (3-Way Handshake)</h2>
          <ol>
            <li><strong>SYN:</strong> العميل يطلب فتح اتصال.</li>
            <li><strong>SYN-ACK:</strong> الخادم يوافق ويردّ.</li>
            <li><strong>ACK:</strong> العميل يؤكد، ويبدأ تبادل البيانات.</li>
          </ol>
          <div class="tip"><b>💡 تذكّر</b> TCP يشبه مكالمة هاتفية (تتأكد أن الطرف الآخر يسمعك)، بينما UDP يشبه إرسال رسالة دون انتظار رد.</div>
        `
      },
      {
        id: "ports-protocols",
        title: "المنافذ والبروتوكولات الشائعة",
        lead: "أرقام المنافذ (Ports) التي يجب حفظها للاختبار وأهم البروتوكولات.",
        html: `
          <h2>ما هو المنفذ (Port)؟</h2>
          <p>المنفذ رقم منطقي (من 0 إلى 65535) يُستخدم في طبقة النقل لتمييز التطبيقات المختلفة على نفس الجهاز. مثلًا متصفحك يتصل بمنفذ 443 للموقع الآمن بينما يتصل برنامج البريد بمنفذ آخر.</p>

          <h2>المنافذ الأكثر أهمية للاختبار</h2>
          <table>
            <thead><tr><th>المنفذ</th><th>البروتوكول</th><th>الوظيفة</th><th>TCP/UDP</th></tr></thead>
            <tbody>
              <tr><td>20, 21</td><td>FTP</td><td>نقل الملفات</td><td>TCP</td></tr>
              <tr><td>22</td><td>SSH / SCP</td><td>إدارة آمنة عن بُعد</td><td>TCP</td></tr>
              <tr><td>23</td><td>Telnet</td><td>إدارة عن بُعد (غير آمنة)</td><td>TCP</td></tr>
              <tr><td>25</td><td>SMTP</td><td>إرسال البريد</td><td>TCP</td></tr>
              <tr><td>53</td><td>DNS</td><td>تحويل الأسماء لعناوين IP</td><td>TCP & UDP</td></tr>
              <tr><td>67, 68</td><td>DHCP</td><td>توزيع عناوين IP تلقائيًا</td><td>UDP</td></tr>
              <tr><td>69</td><td>TFTP</td><td>نقل ملفات مبسّط</td><td>UDP</td></tr>
              <tr><td>80</td><td>HTTP</td><td>تصفّح الويب</td><td>TCP</td></tr>
              <tr><td>110</td><td>POP3</td><td>استقبال البريد</td><td>TCP</td></tr>
              <tr><td>143</td><td>IMAP</td><td>استقبال البريد (مزامنة)</td><td>TCP</td></tr>
              <tr><td>161, 162</td><td>SNMP</td><td>مراقبة الأجهزة</td><td>UDP</td></tr>
              <tr><td>389</td><td>LDAP</td><td>خدمات الدليل</td><td>TCP/UDP</td></tr>
              <tr><td>443</td><td>HTTPS</td><td>ويب آمن (TLS)</td><td>TCP</td></tr>
              <tr><td>445</td><td>SMB</td><td>مشاركة الملفات (ويندوز)</td><td>TCP</td></tr>
              <tr><td>514</td><td>Syslog</td><td>تجميع السجلات</td><td>UDP</td></tr>
              <tr><td>3389</td><td>RDP</td><td>سطح المكتب البعيد</td><td>TCP</td></tr>
            </tbody>
          </table>

          <div class="warn"><b>⚠️ انتبه</b> Telnet و HTTP و FTP ترسل البيانات بنص واضح (Plaintext). استخدم البدائل الآمنة: SSH، HTTPS، SFTP.</div>
        `
      }
    ]
  },

  /* =================== العنونة و Subnetting =================== */
  {
    id: "addressing",
    title: "عنونة IP والـ Subnetting",
    badge: "أساسي",
    lessons: [
      {
        id: "ipv4-basics",
        title: "أساسيات عناوين IPv4",
        lead: "بنية عنوان IPv4، الفئات (Classes)، والعناوين الخاصة والعامة.",
        html: `
          <h2>بنية عنوان IPv4</h2>
          <p>عنوان IPv4 يتكوّن من <strong>32 بت</strong> مقسّمة إلى 4 أجزاء (Octets) كل جزء 8 بت، يُكتب بالنظام العشري مفصولًا بنقاط، مثل <code>192.168.1.10</code>. كل Octet قيمته بين 0 و 255.</p>
          <p>ينقسم العنوان إلى جزأين يحددهما <strong>قناع الشبكة (Subnet Mask)</strong>:</p>
          <ul>
            <li><strong>جزء الشبكة (Network):</strong> يحدد الشبكة التي ينتمي إليها الجهاز.</li>
            <li><strong>جزء المضيف (Host):</strong> يحدد الجهاز نفسه داخل الشبكة.</li>
          </ul>

          <h2>فئات العناوين (Classes)</h2>
          <table>
            <thead><tr><th>الفئة</th><th>أول Octet</th><th>القناع الافتراضي</th><th>الاستخدام</th></tr></thead>
            <tbody>
              <tr><td>A</td><td>1 – 126</td><td>255.0.0.0 (/8)</td><td>شبكات ضخمة</td></tr>
              <tr><td>B</td><td>128 – 191</td><td>255.255.0.0 (/16)</td><td>شبكات متوسطة</td></tr>
              <tr><td>C</td><td>192 – 223</td><td>255.255.255.0 (/24)</td><td>شبكات صغيرة</td></tr>
              <tr><td>D</td><td>224 – 239</td><td>—</td><td>Multicast</td></tr>
              <tr><td>E</td><td>240 – 255</td><td>—</td><td>تجريبي</td></tr>
            </tbody>
          </table>
          <div class="note"><b>📌 ملاحظة</b> النطاق 127.x.x.x محجوز لـ <strong>Loopback</strong> (الاختبار الذاتي، مثل 127.0.0.1).</div>

          <h2>العناوين الخاصة (Private) — RFC 1918</h2>
          <p>لا تُوجَّه على الإنترنت وتُستخدم داخل الشبكات المحلية:</p>
          <ul>
            <li>10.0.0.0 – 10.255.255.255 (فئة A)</li>
            <li>172.16.0.0 – 172.31.255.255 (فئة B)</li>
            <li>192.168.0.0 – 192.168.255.255 (فئة C)</li>
          </ul>

          <h2>أنواع البث</h2>
          <ul>
            <li><strong>Unicast:</strong> من جهاز واحد إلى جهاز واحد.</li>
            <li><strong>Broadcast:</strong> من جهاز إلى كل أجهزة الشبكة (255.255.255.255).</li>
            <li><strong>Multicast:</strong> من جهاز إلى مجموعة مشتركين.</li>
          </ul>
          <div class="tip"><b>💡 APIPA</b> إذا فشل DHCP، يعطي ويندوز الجهاز عنوانًا تلقائيًا من النطاق 169.254.x.x — وجوده مؤشر على مشكلة في DHCP.</div>
        `
      },
      {
        id: "subnetting",
        title: "تقسيم الشبكات Subnetting خطوة بخطوة",
        lead: "أهم مهارة عملية: كيف تقسّم شبكة إلى شبكات فرعية وتحسب العناوين.",
        html: `
          <h2>لماذا الـ Subnetting؟</h2>
          <p>التقسيم يتيح تقسيم شبكة كبيرة إلى شبكات أصغر لـ: تقليل نطاق البث (Broadcast)، تحسين الأمان والأداء، والاستخدام الأمثل للعناوين.</p>

          <h2>CIDR والـ Prefix</h2>
          <p>بدل كتابة القناع كاملًا نستخدم <strong>/n</strong> حيث n عدد بتات الشبكة. مثلًا <code>/24</code> = 255.255.255.0.</p>
          <table>
            <thead><tr><th>Prefix</th><th>القناع</th><th>عدد المضيفين الصالحين</th></tr></thead>
            <tbody>
              <tr><td>/24</td><td>255.255.255.0</td><td>254</td></tr>
              <tr><td>/25</td><td>255.255.255.128</td><td>126</td></tr>
              <tr><td>/26</td><td>255.255.255.192</td><td>62</td></tr>
              <tr><td>/27</td><td>255.255.255.224</td><td>30</td></tr>
              <tr><td>/28</td><td>255.255.255.240</td><td>14</td></tr>
              <tr><td>/29</td><td>255.255.255.248</td><td>6</td></tr>
              <tr><td>/30</td><td>255.255.255.252</td><td>2</td></tr>
            </tbody>
          </table>

          <h2>القوانين الأساسية</h2>
          <ul>
            <li>عدد الشبكات الفرعية = 2<sup>s</sup> حيث s = عدد البتات المُستعارة.</li>
            <li>عدد المضيفين الصالحين = 2<sup>h</sup> − 2 حيث h = بتات المضيف (نطرح عنوان الشبكة وعنوان البث).</li>
            <li><strong>Block Size</strong> (حجم القفزة) = 256 − قيمة الـ Octet في القناع.</li>
          </ul>

          <h2>مثال محلول</h2>
          <p>لدينا <code>192.168.10.0/26</code>. أوجد الشبكات الفرعية.</p>
          <pre><code>القناع: /26 = 255.255.255.192
Block Size = 256 - 192 = 64

الشبكات الفرعية:
  192.168.10.0    → نطاق المضيفين 1–62    → Broadcast .63
  192.168.10.64   → نطاق المضيفين 65–126  → Broadcast .127
  192.168.10.128  → نطاق المضيفين 129–190 → Broadcast .191
  192.168.10.192  → نطاق المضيفين 193–254 → Broadcast .255</code></pre>

          <div class="tip"><b>💡 خطوات سريعة لأي مسألة</b><br>
          1) حدّد الـ Octet «المهم» في القناع.<br>
          2) Block Size = 256 − قيمة القناع.<br>
          3) عُدّ بالقفزات (0, 64, 128, …) لإيجاد الشبكات.<br>
          4) عنوان الشبكة = أول رقم، البث = الذي قبل الشبكة التالية، والمضيفون بينهما.</div>

          <h2>VLSM</h2>
          <p><strong>VLSM</strong> (Variable Length Subnet Mask) يعني استخدام أقنعة بأطوال مختلفة لنفس الشبكة الكبيرة لتخصيص الحجم المناسب لكل قسم — مثلًا /30 لروابط بين الراوترات (تحتاج عنوانين فقط) و /24 لقسم به كثير من الأجهزة.</p>
        `
      },
      {
        id: "ipv6",
        title: "عناوين IPv6",
        lead: "بنية IPv6، أنواع العناوين، ولماذا انتقلنا إليها.",
        html: `
          <h2>لماذا IPv6؟</h2>
          <p>عناوين IPv4 (نحو 4.3 مليار) نفدت. يأتي <strong>IPv6</strong> بطول <strong>128 بت</strong> ليوفّر عددًا هائلاً من العناوين، إضافة لتحسينات في الأمان والأداء.</p>

          <h2>صيغة العنوان</h2>
          <p>يُكتب IPv6 بـ 8 مجموعات سداسية عشرية مفصولة بنقطتين، مثل:</p>
          <pre><code>2001:0db8:0000:0000:0000:ff00:0042:8329</code></pre>
          <h3>قواعد الاختصار</h3>
          <ul>
            <li>حذف الأصفار البادئة في كل مجموعة: <code>0db8 → db8</code>.</li>
            <li>استبدال سلسلة أصفار متتالية بـ <code>::</code> مرة واحدة فقط.</li>
          </ul>
          <pre><code>2001:db8::ff00:42:8329</code></pre>

          <h2>أنواع عناوين IPv6</h2>
          <table>
            <thead><tr><th>النوع</th><th>البادئة</th><th>الوصف</th></tr></thead>
            <tbody>
              <tr><td>Global Unicast</td><td>2000::/3</td><td>عام قابل للتوجيه على الإنترنت</td></tr>
              <tr><td>Link-Local</td><td>FE80::/10</td><td>محلي للرابط فقط (تلقائي على كل واجهة)</td></tr>
              <tr><td>Unique Local</td><td>FC00::/7</td><td>يشبه العناوين الخاصة في IPv4</td></tr>
              <tr><td>Multicast</td><td>FF00::/8</td><td>للبث لمجموعة</td></tr>
              <tr><td>Loopback</td><td>::1</td><td>الاختبار الذاتي</td></tr>
            </tbody>
          </table>
          <div class="note"><b>📌 لا يوجد Broadcast في IPv6</b> استُبدل بالـ Multicast. مثلاً <code>FF02::1</code> لكل العقد على الرابط.</div>

          <h2>إعداد IPv6 على راوتر Cisco</h2>
          <pre><code>Router(config)# ipv6 unicast-routing
Router(config)# interface g0/0
Router(config-if)# ipv6 address 2001:db8:0:1::1/64
Router(config-if)# no shutdown</code></pre>
        `
      }
    ]
  },

  /* =================== التبديل Switching =================== */
  {
    id: "switching",
    title: "التبديل Switching والـ VLANs",
    badge: "CCNA",
    lessons: [
      {
        id: "switching-basics",
        title: "كيف يعمل السويتش (Switch)؟",
        lead: "جدول MAC، التعلّم، والفرق بين Hub و Switch و Router.",
        html: `
          <h2>الفرق بين الأجهزة</h2>
          <table>
            <thead><tr><th>الجهاز</th><th>الطبقة</th><th>طريقة العمل</th></tr></thead>
            <tbody>
              <tr><td>Hub</td><td>1 (Physical)</td><td>يكرّر الإشارة لكل المنافذ (Collision domain واحد)</td></tr>
              <tr><td>Switch</td><td>2 (Data Link)</td><td>يوجّه الإطارات حسب عنوان MAC</td></tr>
              <tr><td>Router</td><td>3 (Network)</td><td>يوجّه الحزم بين الشبكات حسب IP</td></tr>
            </tbody>
          </table>

          <h2>كيف يتعلّم السويتش؟</h2>
          <p>يبني السويتش <strong>جدول عناوين MAC</strong> (MAC Address Table / CAM) بهذه الطريقة:</p>
          <ol>
            <li><strong>التعلّم (Learning):</strong> يقرأ عنوان MAC المصدر للإطارات الواردة ويربطه بالمنفذ.</li>
            <li><strong>الإغراق (Flooding):</strong> إذا لم يعرف وجهة الإطار، يرسله لكل المنافذ عدا منفذ المصدر.</li>
            <li><strong>التوجيه (Forwarding):</strong> إذا عرف المنفذ المرتبط بالوجهة، يرسل الإطار إليه فقط.</li>
            <li><strong>التصفية (Filtering):</strong> لا يعيد إرسال الإطار من المنفذ الذي جاء منه.</li>
          </ol>

          <h2>أوامر مفيدة</h2>
          <pre><code>Switch# show mac address-table
Switch# show interfaces status
Switch# show running-config</code></pre>

          <h2>مفاهيم النطاقات</h2>
          <ul>
            <li><strong>Collision Domain:</strong> منطقة قد تتصادم فيها الإشارات. كل منفذ في السويتش = نطاق تصادم منفصل.</li>
            <li><strong>Broadcast Domain:</strong> منطقة يصلها البث. السويتش كله نطاق بث واحد (إلا مع VLANs)، والراوتر يفصل نطاقات البث.</li>
          </ul>
        `
      },
      {
        id: "vlans",
        title: "الشبكات الافتراضية VLANs",
        lead: "تقسيم السويتش منطقيًا، الـ Trunk، وبروتوكول 802.1Q.",
        html: `
          <h2>ما هي الـ VLAN؟</h2>
          <p>الـ <strong>VLAN</strong> (Virtual LAN) تقسّم سويتشًا واحدًا إلى عدة شبكات منطقية منفصلة. كل VLAN = نطاق بث مستقل، حتى لو كانت الأجهزة على نفس السويتش الفيزيائي.</p>
          <h3>الفوائد</h3>
          <ul>
            <li>عزل حركة المرور وزيادة الأمان (قسم المحاسبة منفصل عن الضيوف).</li>
            <li>تقليل البث وتحسين الأداء.</li>
            <li>مرونة في التنظيم بغضّ النظر عن الموقع الفيزيائي.</li>
          </ul>

          <h2>أنواع المنافذ</h2>
          <ul>
            <li><strong>Access Port:</strong> ينتمي لـ VLAN واحدة، يتصل بجهاز نهائي (حاسوب، طابعة).</li>
            <li><strong>Trunk Port:</strong> يحمل عدة VLANs بين السويتشات، ويستخدم وسم <strong>802.1Q</strong> لتمييز كل VLAN.</li>
          </ul>

          <div class="note"><b>📌 Native VLAN</b> في الـ Trunk، الـ VLAN الأصلية (افتراضيًا VLAN 1) تمر دون وسم. يُفضّل تغييرها لأسباب أمنية.</div>

          <h2>إنشاء وإعداد VLAN</h2>
          <pre><code>! إنشاء VLAN وتسميتها
Switch(config)# vlan 10
Switch(config-vlan)# name SALES
Switch(config-vlan)# exit

! تعيين منفذ كـ Access ووضعه في VLAN 10
Switch(config)# interface fa0/1
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10

! إعداد منفذ Trunk
Switch(config)# interface g0/1
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk native vlan 99</code></pre>

          <h2>التحقق</h2>
          <pre><code>Switch# show vlan brief
Switch# show interfaces trunk</code></pre>

          <h2>التوجيه بين الـ VLANs (Inter-VLAN Routing)</h2>
          <p>الأجهزة في VLANs مختلفة لا تتواصل دون راوتر (الطبقة 3). الطريقة الشائعة <strong>Router-on-a-Stick</strong>:</p>
          <pre><code>Router(config)# interface g0/0.10
Router(config-subif)# encapsulation dot1Q 10
Router(config-subif)# ip address 192.168.10.1 255.255.255.0
Router(config)# interface g0/0.20
Router(config-subif)# encapsulation dot1Q 20
Router(config-subif)# ip address 192.168.20.1 255.255.255.0</code></pre>
          <p>أو باستخدام <strong>SVI</strong> على سويتش الطبقة 3 عبر الأمر <code>ip routing</code> وإنشاء واجهات <code>interface vlan 10</code>.</p>
        `
      },
      {
        id: "stp",
        title: "بروتوكول الشجرة الممتدة STP",
        lead: "كيف نمنع الحلقات (Loops) في الشبكات المبدّلة المتكررة.",
        html: `
          <h2>المشكلة: الحلقات (Switching Loops)</h2>
          <p>عند توصيل سويتشات بمسارات متكررة (لضمان التوفّر)، قد تنشأ حلقة تسبب: عواصف بث (Broadcast Storms)، تكرار الإطارات، وعدم استقرار جدول MAC. الحل هو <strong>STP</strong>.</p>

          <h2>فكرة STP (802.1D)</h2>
          <p>يبني <strong>Spanning Tree Protocol</strong> مسارًا منطقيًا خاليًا من الحلقات بحظر (Blocking) المنافذ الزائدة، مع إبقائها احتياطية إذا فشل المسار الأساسي.</p>

          <h3>خطوات اختيار STP</h3>
          <ol>
            <li><strong>اختيار Root Bridge:</strong> السويتش صاحب أقل <em>Bridge ID</em> (الأولوية + MAC).</li>
            <li><strong>Root Port:</strong> على كل سويتش غير جذري، المنفذ الأقرب للجذر (أقل تكلفة).</li>
            <li><strong>Designated Port:</strong> منفذ واحد معتمد لكل segment.</li>
            <li><strong>Blocking Port:</strong> بقية المنافذ تُحظر لمنع الحلقة.</li>
          </ol>

          <h2>حالات المنفذ</h2>
          <p>Blocking → Listening → Learning → Forwarding (مع 802.1D تستغرق نحو 30–50 ثانية).</p>

          <h2>تحسينات مهمة</h2>
          <ul>
            <li><strong>RSTP (802.1w):</strong> تقارب أسرع بكثير (ثوانٍ).</li>
            <li><strong>PortFast:</strong> ينقل منافذ الـ Access مباشرة لحالة Forwarding (للأجهزة النهائية فقط).</li>
            <li><strong>BPDU Guard:</strong> يعطّل المنفذ إذا استقبل BPDU (حماية من سويتش غير مصرّح).</li>
          </ul>

          <pre><code>! جعل السويتش هو الجذر
Switch(config)# spanning-tree vlan 1 root primary

! تفعيل PortFast و BPDU Guard على منفذ access
Switch(config-if)# spanning-tree portfast
Switch(config-if)# spanning-tree bpduguard enable

Switch# show spanning-tree</code></pre>

          <div class="note"><b>📌 EtherChannel</b> يجمع عدة روابط فيزيائية في رابط منطقي واحد لزيادة عرض النطاق دون أن يحظرها STP.</div>
        `
      }
    ]
  },

  /* =================== التوجيه Routing =================== */
  {
    id: "routing",
    title: "التوجيه Routing",
    badge: "CCNA",
    lessons: [
      {
        id: "routing-basics",
        title: "أساسيات التوجيه وجدول التوجيه",
        lead: "كيف يقرر الراوتر أفضل مسار، والفرق بين الأنواع الثلاثة للمسارات.",
        html: `
          <h2>وظيفة الراوتر</h2>
          <p>الراوتر يعمل في الطبقة 3 ويوجّه الحزم <strong>بين الشبكات المختلفة</strong> بناءً على عنوان IP الوجهة، مستعينًا بـ <strong>جدول التوجيه (Routing Table)</strong>.</p>

          <h2>أنواع المسارات</h2>
          <ul>
            <li><strong>Connected:</strong> شبكات متصلة مباشرة بواجهات الراوتر (تظهر بـ C).</li>
            <li><strong>Static:</strong> مسارات يدخلها المسؤول يدويًا (تظهر بـ S).</li>
            <li><strong>Dynamic:</strong> تُتعلّم تلقائيًا عبر بروتوكولات توجيه مثل OSPF (تظهر بـ O).</li>
          </ul>

          <h2>كيف يختار الراوتر المسار؟</h2>
          <ol>
            <li><strong>أطول تطابق بادئة (Longest Prefix Match):</strong> المسار الأكثر تحديدًا يفوز.</li>
            <li><strong>Administrative Distance (AD):</strong> عند تساوي البادئة، الأقل AD يُفضّل (مدى الموثوقية).</li>
            <li><strong>Metric:</strong> داخل نفس البروتوكول، الأقل Metric يفوز.</li>
          </ol>
          <table>
            <thead><tr><th>المصدر</th><th>AD الافتراضي</th></tr></thead>
            <tbody>
              <tr><td>Connected</td><td>0</td></tr>
              <tr><td>Static</td><td>1</td></tr>
              <tr><td>EIGRP</td><td>90</td></tr>
              <tr><td>OSPF</td><td>110</td></tr>
              <tr><td>RIP</td><td>120</td></tr>
            </tbody>
          </table>

          <h2>المسار الافتراضي (Default Route)</h2>
          <p>يُستخدم عندما لا يوجد مسار محدد للوجهة (غالبًا نحو الإنترنت):</p>
          <pre><code>Router(config)# ip route 0.0.0.0 0.0.0.0 203.0.113.1
Router# show ip route</code></pre>
        `
      },
      {
        id: "static-routing",
        title: "التوجيه الثابت Static Routing",
        lead: "إعداد المسارات الثابتة يدويًا ومتى نستخدمها.",
        html: `
          <h2>متى نستخدم المسارات الثابتة؟</h2>
          <ul>
            <li>الشبكات الصغيرة والمستقرة.</li>
            <li>الروابط الوحيدة للخروج (Stub networks).</li>
            <li>عندما نريد تحكمًا كاملاً ودقيقًا في المسار.</li>
          </ul>
          <p>المزايا: لا تستهلك معالجة/نطاق، آمنة ومتوقعة. العيوب: لا تتكيّف تلقائيًا مع الأعطال، ومرهقة في الشبكات الكبيرة.</p>

          <h2>صيغة الأمر</h2>
          <pre><code>ip route [شبكة-الوجهة] [القناع] [العنوان-التالي أو الواجهة]</code></pre>

          <h3>أمثلة</h3>
          <pre><code>! عبر العنوان التالي (Next-hop)
Router(config)# ip route 192.168.2.0 255.255.255.0 10.0.0.2

! عبر الواجهة الخارجة
Router(config)# ip route 192.168.2.0 255.255.255.0 g0/1

! مسار افتراضي
Router(config)# ip route 0.0.0.0 0.0.0.0 10.0.0.2

! مسار ثابت احتياطي (Floating) بـ AD أعلى
Router(config)# ip route 192.168.2.0 255.255.255.0 10.0.1.2 200</code></pre>

          <div class="tip"><b>💡 Floating Static Route</b> برفع الـ AD (مثلاً 200) يصبح المسار احتياطيًا لا يُستخدم إلا عند فشل المسار الأساسي المتعلَّم ديناميكيًا.</div>
        `
      },
      {
        id: "ospf",
        title: "بروتوكول OSPF",
        lead: "بروتوكول التوجيه الديناميكي الأهم في CCNA: كيف يعمل وكيف نعدّه.",
        html: `
          <h2>ما هو OSPF؟</h2>
          <p><strong>OSPF</strong> (Open Shortest Path First) بروتوكول توجيه ديناميكي من نوع <strong>Link-State</strong>، مفتوح (غير حصري لشركة)، يستخدم خوارزمية <strong>Dijkstra (SPF)</strong> لحساب أقصر مسار. يبني كل راوتر خريطة كاملة للشبكة.</p>

          <h2>مفاهيم أساسية</h2>
          <ul>
            <li><strong>Router ID:</strong> معرّف فريد للراوتر (أعلى IP على واجهة Loopback عادةً).</li>
            <li><strong>Areas:</strong> تقسيم الشبكة لمناطق لتقليل الحمل؛ <strong>Area 0</strong> هي العمود الفقري (Backbone).</li>
            <li><strong>Neighbors / Adjacency:</strong> يكوّن الراوترات علاقات جوار لتبادل المعلومات.</li>
            <li><strong>Cost (Metric):</strong> يعتمد على عرض النطاق (Cost = 10⁸ / Bandwidth).</li>
          </ul>

          <h2>أنواع الحزم</h2>
          <p>Hello (اكتشاف الجيران) — DBD — LSR — LSU — LSAck.</p>

          <h2>شروط تكوين الجوار</h2>
          <ul>
            <li>تطابق Area ID.</li>
            <li>تطابق فترات Hello و Dead.</li>
            <li>تطابق الشبكة الفرعية والقناع على الرابط.</li>
            <li>تطابق المصادقة (إن وُجدت) ونوع المنطقة.</li>
          </ul>

          <h2>الإعداد (OSPFv2)</h2>
          <pre><code>Router(config)# router ospf 1
Router(config-router)# router-id 1.1.1.1
Router(config-router)# network 192.168.1.0 0.0.0.255 area 0
Router(config-router)# network 10.0.0.0 0.0.0.3 area 0
Router(config-router)# passive-interface g0/0</code></pre>
          <div class="note"><b>📌 Wildcard Mask</b> OSPF يستخدم قناعًا معكوسًا. /24 ⟶ <code>0.0.0.255</code>، و /30 ⟶ <code>0.0.0.3</code>.</div>

          <h2>التحقق</h2>
          <pre><code>Router# show ip ospf neighbor
Router# show ip route ospf
Router# show ip ospf interface brief</code></pre>

          <div class="tip"><b>💡 DR/BDR</b> في الشبكات متعددة الوصول (Ethernet) يُنتخب راوتر معتمد (DR) واحتياطي (BDR) لتقليل عدد علاقات الجوار.</div>
        `
      }
    ]
  },

  /* =================== خدمات الشبكة =================== */
  {
    id: "services",
    title: "خدمات الشبكة (DHCP, DNS, NAT)",
    badge: "مشترك",
    lessons: [
      {
        id: "dhcp",
        title: "بروتوكول DHCP",
        lead: "كيف تحصل الأجهزة على عناوين IP تلقائيًا، وعملية DORA.",
        html: `
          <h2>وظيفة DHCP</h2>
          <p><strong>DHCP</strong> (Dynamic Host Configuration Protocol) يوزّع عناوين IP وإعدادات الشبكة (القناع، البوابة، DNS) تلقائيًا على الأجهزة، بدل الإعداد اليدوي.</p>

          <h2>عملية DORA</h2>
          <ol>
            <li><strong>Discover:</strong> العميل يبثّ طلبًا للبحث عن خادم DHCP.</li>
            <li><strong>Offer:</strong> الخادم يعرض عنوان IP متاحًا.</li>
            <li><strong>Request:</strong> العميل يطلب العنوان المعروض.</li>
            <li><strong>Acknowledge:</strong> الخادم يؤكد ويمنح الإيجار (Lease).</li>
          </ol>

          <h2>إعداد خادم DHCP على راوتر Cisco</h2>
          <pre><code>! استبعاد عناوين (للبوابة والخوادم)
Router(config)# ip dhcp excluded-address 192.168.1.1 192.168.1.10

Router(config)# ip dhcp pool LAN
Router(dhcp-config)# network 192.168.1.0 255.255.255.0
Router(dhcp-config)# default-router 192.168.1.1
Router(dhcp-config)# dns-server 8.8.8.8
Router(dhcp-config)# lease 7</code></pre>

          <div class="note"><b>📌 DHCP Relay</b> إذا كان الخادم في شبكة أخرى، استخدم <code>ip helper-address</code> على واجهة الراوتر لتمرير طلبات البث إليه.</div>
          <pre><code>Router(config-if)# ip helper-address 10.0.0.5</code></pre>
        `
      },
      {
        id: "dns",
        title: "نظام أسماء النطاقات DNS",
        lead: "كيف تتحول أسماء المواقع مثل google.com إلى عناوين IP.",
        html: `
          <h2>وظيفة DNS</h2>
          <p><strong>DNS</strong> (Domain Name System) يترجم الأسماء التي يحفظها البشر (مثل <code>example.com</code>) إلى عناوين IP التي تفهمها الأجهزة. يعمل غالبًا على منفذ 53.</p>

          <h2>التسلسل الهرمي</h2>
          <p>Root (.) ⟶ TLD (مثل com, org, sa) ⟶ Authoritative (نطاق الموقع نفسه).</p>

          <h2>أنواع السجلات المهمة</h2>
          <table>
            <thead><tr><th>السجل</th><th>الوظيفة</th></tr></thead>
            <tbody>
              <tr><td>A</td><td>اسم ⟶ عنوان IPv4</td></tr>
              <tr><td>AAAA</td><td>اسم ⟶ عنوان IPv6</td></tr>
              <tr><td>CNAME</td><td>اسم مستعار يشير لاسم آخر</td></tr>
              <tr><td>MX</td><td>خادم البريد للنطاق</td></tr>
              <tr><td>NS</td><td>خوادم الأسماء للنطاق</td></tr>
              <tr><td>PTR</td><td>عنوان IP ⟶ اسم (Reverse)</td></tr>
              <tr><td>TXT</td><td>نصوص (SPF, التحقق…)</td></tr>
            </tbody>
          </table>

          <h2>أوامر اختبار</h2>
          <pre><code>nslookup example.com
dig example.com A
ipconfig /flushdns   (ويندوز - مسح ذاكرة DNS)</code></pre>
          <div class="tip"><b>💡 Troubleshooting</b> إذا فتحت المواقع بالـ IP لكن ليس بالاسم، فالمشكلة غالبًا في DNS.</div>
        `
      },
      {
        id: "nat",
        title: "ترجمة العناوين NAT و PAT",
        lead: "كيف تشترك أجهزة كثيرة في عنوان IP عام واحد للخروج للإنترنت.",
        html: `
          <h2>لماذا NAT؟</h2>
          <p><strong>NAT</strong> (Network Address Translation) يترجم العناوين الخاصة الداخلية إلى عنوان عام للخروج للإنترنت. يحلّ مشكلة نُدرة عناوين IPv4 ويضيف طبقة إخفاء أمنية.</p>

          <h2>الأنواع</h2>
          <ul>
            <li><strong>Static NAT:</strong> ربط عنوان خاص بعنوان عام بنسبة 1:1.</li>
            <li><strong>Dynamic NAT:</strong> ربط من مجموعة (Pool) من العناوين العامة.</li>
            <li><strong>PAT (Overload):</strong> الأكثر شيوعًا — عدة أجهزة تشترك في عنوان عام واحد بتمييزها عبر أرقام المنافذ.</li>
          </ul>

          <h2>إعداد PAT</h2>
          <pre><code>! تحديد الواجهات الداخلية والخارجية
Router(config)# interface g0/0
Router(config-if)# ip nat inside
Router(config)# interface g0/1
Router(config-if)# ip nat outside

! قائمة بالعناوين المسموح لها
Router(config)# access-list 1 permit 192.168.1.0 0.0.0.255

! تفعيل PAT على الواجهة الخارجية
Router(config)# ip nat inside source list 1 interface g0/1 overload</code></pre>

          <h2>التحقق</h2>
          <pre><code>Router# show ip nat translations
Router# show ip nat statistics</code></pre>

          <table>
            <thead><tr><th>المصطلح</th><th>المعنى</th></tr></thead>
            <tbody>
              <tr><td>Inside Local</td><td>العنوان الخاص للجهاز الداخلي</td></tr>
              <tr><td>Inside Global</td><td>العنوان العام الذي يظهر به على الإنترنت</td></tr>
              <tr><td>Outside Global</td><td>العنوان العام للوجهة الخارجية</td></tr>
            </tbody>
          </table>
        `
      }
    ]
  },

  /* =================== الأمان =================== */
  {
    id: "security",
    title: "أمن الشبكات",
    badge: "مشترك",
    lessons: [
      {
        id: "security-fundamentals",
        title: "أساسيات أمن الشبكات",
        lead: "مثلث CIA، أنواع التهديدات، ومبادئ الدفاع.",
        html: `
          <h2>مثلث CIA</h2>
          <ul>
            <li><strong>السرية (Confidentiality):</strong> منع الوصول غير المصرّح به (التشفير).</li>
            <li><strong>السلامة (Integrity):</strong> عدم تغيير البيانات (التجزئة Hashing).</li>
            <li><strong>التوفّر (Availability):</strong> إتاحة الخدمة عند الحاجة (التكرار، النسخ الاحتياطي).</li>
          </ul>

          <h2>أنواع الهجمات الشائعة</h2>
          <table>
            <thead><tr><th>الهجوم</th><th>الوصف</th></tr></thead>
            <tbody>
              <tr><td>DoS / DDoS</td><td>إغراق الخدمة لإيقافها</td></tr>
              <tr><td>MITM</td><td>اعتراض الاتصال بين طرفين</td></tr>
              <tr><td>Phishing</td><td>خداع المستخدم لكشف بياناته</td></tr>
              <tr><td>Spoofing</td><td>انتحال عنوان IP أو MAC</td></tr>
              <tr><td>Malware</td><td>فيروسات، دودة، حصان طروادة، فدية</td></tr>
              <tr><td>Brute Force</td><td>تجربة كلمات المرور حتى النجاح</td></tr>
            </tbody>
          </table>

          <h2>مبادئ الدفاع</h2>
          <ul>
            <li><strong>Defense in Depth:</strong> طبقات حماية متعددة.</li>
            <li><strong>Least Privilege:</strong> أقل صلاحيات لازمة لكل مستخدم.</li>
            <li><strong>AAA:</strong> Authentication (من أنت) + Authorization (ماذا يحق لك) + Accounting (سجل ما فعلت).</li>
          </ul>
          <div class="tip"><b>💡 المصادقة متعددة العوامل (MFA)</b> تجمع بين «شيء تعرفه» (كلمة مرور) و«شيء تملكه» (هاتف/توكن) و«شيء أنت» (بصمة).</div>
        `
      },
      {
        id: "device-security",
        title: "تأمين أجهزة Cisco",
        lead: "كلمات المرور، SSH، وتأمين المنافذ Port Security.",
        html: `
          <h2>تأمين الوصول الأساسي</h2>
          <pre><code>! اسم الجهاز وكلمات المرور
Router(config)# hostname R1
R1(config)# enable secret StrongPass1
R1(config)# service password-encryption

! كلمة مرور وحدة التحكم
R1(config)# line console 0
R1(config-line)# password ConPass
R1(config-line)# login

! بانر تحذيري
R1(config)# banner motd #الوصول مصرّح به فقط#</code></pre>

          <h2>تفعيل SSH (بدل Telnet)</h2>
          <pre><code>R1(config)# ip domain-name example.com
R1(config)# crypto key generate rsa modulus 1024
R1(config)# username admin secret AdminPass
R1(config)# line vty 0 4
R1(config-line)# transport input ssh
R1(config-line)# login local</code></pre>

          <h2>Port Security على السويتش</h2>
          <p>يحدّ من عناوين MAC المسموح بها على المنفذ لمنع الأجهزة غير المصرّح بها:</p>
          <pre><code>Switch(config-if)# switchport mode access
Switch(config-if)# switchport port-security
Switch(config-if)# switchport port-security maximum 2
Switch(config-if)# switchport port-security mac-address sticky
Switch(config-if)# switchport port-security violation shutdown</code></pre>
          <table>
            <thead><tr><th>وضع الانتهاك</th><th>السلوك</th></tr></thead>
            <tbody>
              <tr><td>protect</td><td>يتجاهل الإطارات المخالفة بصمت</td></tr>
              <tr><td>restrict</td><td>يتجاهل ويسجّل ويزيد العدّاد</td></tr>
              <tr><td>shutdown</td><td>يعطّل المنفذ (err-disabled) — الافتراضي</td></tr>
            </tbody>
          </table>
        `
      },
      {
        id: "acl",
        title: "قوائم التحكم بالوصول ACLs",
        lead: "تصفية حركة المرور بالسماح أو المنع بناءً على معايير.",
        html: `
          <h2>ما هي الـ ACL؟</h2>
          <p>قائمة قواعد تُطبَّق على واجهة الراوتر لتسمح (permit) أو تمنع (deny) حركة المرور بناءً على عنوان المصدر/الوجهة والمنفذ والبروتوكول. تُقرأ من الأعلى للأسفل، وأول تطابق يُطبَّق.</p>

          <h2>الأنواع</h2>
          <ul>
            <li><strong>Standard ACL (1–99):</strong> تصفّي بناءً على عنوان المصدر فقط. تُوضع قرب الوجهة.</li>
            <li><strong>Extended ACL (100–199):</strong> تصفّي بناءً على المصدر والوجهة والمنفذ والبروتوكول. تُوضع قرب المصدر.</li>
          </ul>

          <h2>مثال Standard ACL</h2>
          <pre><code>R1(config)# access-list 10 permit 192.168.1.0 0.0.0.255
R1(config)# interface g0/1
R1(config-if)# ip access-group 10 out</code></pre>

          <h2>مثال Extended ACL</h2>
          <pre><code>! السماح بـ HTTP من شبكة معينة ومنع الباقي
R1(config)# access-list 100 permit tcp 192.168.1.0 0.0.0.255 any eq 80
R1(config)# access-list 100 permit tcp 192.168.1.0 0.0.0.255 any eq 443
R1(config)# interface g0/0
R1(config-if)# ip access-group 100 in</code></pre>

          <div class="warn"><b>⚠️ Implicit Deny</b> في نهاية كل ACL يوجد «منع ضمني للكل» (deny any). إن لم تسمح بشيء صراحةً فسيُمنع.</div>
          <pre><code>R1# show access-lists
R1# show ip interface g0/0</code></pre>
        `
      }
    ]
  },

  /* =================== اللاسلكي والوسائط =================== */
  {
    id: "wireless",
    title: "الشبكات اللاسلكية والوسائط",
    badge: "مشترك",
    lessons: [
      {
        id: "wireless",
        title: "أساسيات الشبكات اللاسلكية Wi-Fi",
        lead: "معايير 802.11، الترددات، وأمن الشبكات اللاسلكية.",
        html: `
          <h2>معايير 802.11</h2>
          <table>
            <thead><tr><th>المعيار</th><th>الاسم التسويقي</th><th>التردد</th><th>السرعة القصوى تقريبًا</th></tr></thead>
            <tbody>
              <tr><td>802.11b</td><td>—</td><td>2.4 GHz</td><td>11 Mbps</td></tr>
              <tr><td>802.11g</td><td>—</td><td>2.4 GHz</td><td>54 Mbps</td></tr>
              <tr><td>802.11n</td><td>Wi-Fi 4</td><td>2.4 / 5 GHz</td><td>600 Mbps</td></tr>
              <tr><td>802.11ac</td><td>Wi-Fi 5</td><td>5 GHz</td><td>~3.5 Gbps</td></tr>
              <tr><td>802.11ax</td><td>Wi-Fi 6</td><td>2.4 / 5 / 6 GHz</td><td>~9.6 Gbps</td></tr>
            </tbody>
          </table>

          <h2>الترددات والقنوات</h2>
          <ul>
            <li><strong>2.4 GHz:</strong> مدى أطول واختراق أفضل للجدران لكن ازدحام أكثر. القنوات غير المتداخلة: 1، 6، 11.</li>
            <li><strong>5 GHz:</strong> سرعة أعلى وقنوات أكثر لكن مدى أقصر.</li>
          </ul>

          <h2>أمن الشبكات اللاسلكية</h2>
          <table>
            <thead><tr><th>البروتوكول</th><th>الحالة</th></tr></thead>
            <tbody>
              <tr><td>WEP</td><td>قديم ومكسور — لا تستخدمه</td></tr>
              <tr><td>WPA</td><td>ضعيف</td></tr>
              <tr><td>WPA2 (AES)</td><td>جيد وشائع</td></tr>
              <tr><td>WPA3</td><td>الأحدث والأقوى</td></tr>
            </tbody>
          </table>

          <h2>مصطلحات</h2>
          <ul>
            <li><strong>SSID:</strong> اسم الشبكة اللاسلكية.</li>
            <li><strong>AP (Access Point):</strong> نقطة الوصول التي تبثّ الشبكة.</li>
            <li><strong>WLC (Wireless LAN Controller):</strong> يدير عدة نقاط وصول مركزيًا.</li>
            <li><strong>BSS / ESS:</strong> منطقة تغطية AP واحدة / عدة APs بنفس SSID.</li>
          </ul>
          <div class="tip"><b>💡 وضع AP</b> Autonomous (مستقل) أو Lightweight (يُدار عبر WLC ببروتوكول CAPWAP).</div>
        `
      },
      {
        id: "cables-media",
        title: "الكابلات ووسائط النقل",
        lead: "أنواع الكابلات النحاسية والضوئية والموصّلات والمعايير.",
        html: `
          <h2>الكابلات النحاسية المجدولة (Twisted Pair)</h2>
          <table>
            <thead><tr><th>الفئة</th><th>السرعة</th><th>الاستخدام</th></tr></thead>
            <tbody>
              <tr><td>Cat5e</td><td>1 Gbps</td><td>شائع للشبكات المنزلية</td></tr>
              <tr><td>Cat6</td><td>10 Gbps (حتى 55م)</td><td>شبكات حديثة</td></tr>
              <tr><td>Cat6a</td><td>10 Gbps (100م)</td><td>مراكز بيانات</td></tr>
              <tr><td>Cat7 / Cat8</td><td>حتى 40 Gbps</td><td>مسافات قصيرة عالية الأداء</td></tr>
            </tbody>
          </table>
          <ul>
            <li><strong>UTP:</strong> غير مدرّع — الأكثر شيوعًا.</li>
            <li><strong>STP:</strong> مدرّع — لمقاومة التشويش الكهرومغناطيسي.</li>
            <li>الموصّل: <strong>RJ-45</strong>. الحد الأقصى للطول 100 متر.</li>
          </ul>

          <h2>الترتيب: Straight-through مقابل Crossover</h2>
          <ul>
            <li><strong>Straight-through:</strong> لوصل أجهزة مختلفة (حاسوب⟶سويتش).</li>
            <li><strong>Crossover:</strong> لوصل أجهزة متشابهة (سويتش⟶سويتش) — معايير T568A و T568B.</li>
          </ul>
          <div class="note"><b>📌 Auto-MDIX</b> الأجهزة الحديثة تكتشف نوع الكابل تلقائيًا فلا يهم النوع غالبًا.</div>

          <h2>الألياف الضوئية (Fiber Optic)</h2>
          <table>
            <thead><tr><th>النوع</th><th>المدى</th><th>الوصف</th></tr></thead>
            <tbody>
              <tr><td>Single-mode (SMF)</td><td>طويل جدًا (كيلومترات)</td><td>ليزر، نواة رفيعة</td></tr>
              <tr><td>Multi-mode (MMF)</td><td>قصير-متوسط</td><td>LED، نواة أعرض، أرخص</td></tr>
            </tbody>
          </table>
          <p>الموصّلات الشائعة: LC، SC، ST. مزايا الألياف: مناعة كاملة من التشويش الكهرومغناطيسي ومسافات أطول وسرعات عالية.</p>
        `
      }
    ]
  },

  /* =================== العمليات والأتمتة =================== */
  {
    id: "operations",
    title: "العمليات والأتمتة والاستكشاف",
    badge: "متقدّم",
    lessons: [
      {
        id: "network-services-ops",
        title: "خدمات إدارة الشبكة (NTP, Syslog, SNMP)",
        lead: "أدوات مراقبة وإدارة الشبكة في بيئة التشغيل.",
        html: `
          <h2>NTP — مزامنة الوقت</h2>
          <p>يضمن <strong>NTP</strong> (Network Time Protocol) توحيد الوقت على كل الأجهزة، وهو حاسم لدقة السجلات (Logs) والشهادات والمصادقة.</p>
          <pre><code>Router(config)# ntp server 129.6.15.28
Router# show ntp status</code></pre>

          <h2>Syslog — تجميع السجلات</h2>
          <p>يرسل أحداث الأجهزة إلى خادم مركزي. مستويات الخطورة من 0 (الأخطر - Emergency) إلى 7 (الأقل - Debugging).</p>
          <pre><code>Router(config)# logging host 10.0.0.5
Router(config)# logging trap warnings</code></pre>
          <table>
            <thead><tr><th>المستوى</th><th>الاسم</th></tr></thead>
            <tbody>
              <tr><td>0</td><td>Emergency</td></tr>
              <tr><td>1</td><td>Alert</td></tr>
              <tr><td>2</td><td>Critical</td></tr>
              <tr><td>3</td><td>Error</td></tr>
              <tr><td>4</td><td>Warning</td></tr>
              <tr><td>5</td><td>Notification</td></tr>
              <tr><td>6</td><td>Informational</td></tr>
              <tr><td>7</td><td>Debugging</td></tr>
            </tbody>
          </table>

          <h2>SNMP — المراقبة</h2>
          <p>يتيح <strong>SNMP</strong> مراقبة وإدارة الأجهزة مركزيًا. النسخة الأحدث <strong>SNMPv3</strong> توفّر التشفير والمصادقة (يُفضّل دائمًا).</p>
        `
      },
      {
        id: "automation",
        title: "الأتمتة والبرمجة (SDN, REST, JSON)",
        lead: "كيف تغيّر الأتمتة والبرمجة طريقة إدارة الشبكات الحديثة.",
        html: `
          <h2>لماذا أتمتة الشبكات؟</h2>
          <p>الإعداد اليدوي بطيء ومعرّض للأخطاء وصعب التوسّع. الأتمتة تجلب السرعة، الاتساق، وتقليل الأخطاء البشرية.</p>

          <h2>الشبكات المعرّفة برمجيًا SDN</h2>
          <p><strong>SDN</strong> تفصل <strong>مستوى التحكم (Control Plane)</strong> عن <strong>مستوى البيانات (Data Plane)</strong>، وتديره من وحدة تحكم مركزية (Controller) عبر واجهات برمجية. مثال Cisco: <strong>DNA Center</strong>.</p>
          <ul>
            <li><strong>Northbound API:</strong> بين التطبيقات والـ Controller.</li>
            <li><strong>Southbound API:</strong> بين الـ Controller والأجهزة (مثل OpenFlow).</li>
          </ul>

          <h2>REST APIs</h2>
          <p>واجهات برمجية تستخدم HTTP. الأفعال الشائعة:</p>
          <table>
            <thead><tr><th>الفعل</th><th>الوظيفة</th></tr></thead>
            <tbody>
              <tr><td>GET</td><td>قراءة بيانات</td></tr>
              <tr><td>POST</td><td>إنشاء</td></tr>
              <tr><td>PUT/PATCH</td><td>تحديث</td></tr>
              <tr><td>DELETE</td><td>حذف</td></tr>
            </tbody>
          </table>

          <h2>صيغ البيانات: JSON</h2>
          <pre><code>{
  "interface": {
    "name": "GigabitEthernet0/0",
    "enabled": true,
    "ip": "192.168.1.1"
  }
}</code></pre>

          <h2>أدوات شائعة</h2>
          <ul>
            <li><strong>Ansible:</strong> أتمتة بدون وكيل (Agentless) عبر ملفات YAML.</li>
            <li><strong>Python:</strong> مكتبات مثل Netmiko و Napalm.</li>
            <li><strong>Git:</strong> التحكم بالإصدارات للإعدادات.</li>
          </ul>
          <div class="tip"><b>💡 IaC</b> «البنية التحتية ككود» (Infrastructure as Code) تعني وصف الشبكة بملفات نصية يمكن مراجعتها وإعادة استخدامها.</div>
        `
      },
      {
        id: "troubleshooting",
        title: "استكشاف الأخطاء وإصلاحها",
        lead: "منهجية منظّمة لحل مشاكل الشبكة والأوامر الأساسية.",
        html: `
          <h2>المنهجية المنظّمة (CompTIA)</h2>
          <ol>
            <li>تحديد المشكلة (Identify the problem).</li>
            <li>وضع نظرية للسبب المحتمل.</li>
            <li>اختبار النظرية لتأكيد السبب.</li>
            <li>وضع خطة عمل وتنفيذ الحل.</li>
            <li>التحقق من عمل النظام بالكامل ووقاية مستقبلية.</li>
            <li>توثيق النتائج والإجراءات.</li>
          </ol>

          <h2>نهج OSI في التشخيص</h2>
          <p>ابدأ من الأسفل (الفيزيائية: هل الكابل موصول؟) صعودًا، أو من الأعلى حسب طبيعة المشكلة (Top-down / Bottom-up).</p>

          <h2>الأوامر الأساسية</h2>
          <table>
            <thead><tr><th>الأمر</th><th>الوظيفة</th></tr></thead>
            <tbody>
              <tr><td>ping</td><td>اختبار الوصول لجهاز (ICMP)</td></tr>
              <tr><td>traceroute / tracert</td><td>تتبّع المسار قفزة بقفزة</td></tr>
              <tr><td>ipconfig / ifconfig / ip</td><td>عرض إعدادات IP</td></tr>
              <tr><td>nslookup / dig</td><td>اختبار DNS</td></tr>
              <tr><td>arp -a</td><td>عرض جدول ARP</td></tr>
              <tr><td>netstat</td><td>الاتصالات والمنافذ المفتوحة</td></tr>
              <tr><td>show ip interface brief</td><td>حالة واجهات Cisco بسرعة</td></tr>
              <tr><td>show cdp neighbors</td><td>اكتشاف أجهزة Cisco المجاورة</td></tr>
            </tbody>
          </table>

          <h2>مشاكل شائعة وحلولها</h2>
          <ul>
            <li><strong>لا يوجد اتصال إطلاقًا:</strong> تحقق من الكابل/المنفذ (down/down)، حالة الواجهة.</li>
            <li><strong>اتصال محلي يعمل لكن لا إنترنت:</strong> تحقق من البوابة الافتراضية و NAT والمسار الافتراضي.</li>
            <li><strong>IP يعمل لكن الأسماء لا:</strong> مشكلة DNS.</li>
            <li><strong>عنوان 169.254.x.x:</strong> فشل DHCP.</li>
            <li><strong>تعارض IP:</strong> عنوان مكرر على الشبكة.</li>
          </ul>
          <div class="tip"><b>💡 ابدأ بالأبسط</b> الكثير من المشاكل سببها كابل مفصول، منفذ معطّل (shutdown)، أو VLAN خاطئة. تحقق من البديهيات أولًا.</div>
        `
      }
    ]
  }
];
