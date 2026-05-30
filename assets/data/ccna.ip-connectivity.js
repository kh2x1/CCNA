/* ccna.ip-connectivity.js — CCNA Module: IP Connectivity & Addressing.
   Follows the schema in ccna.fundamentals.js. */
(function () {
  const D = window.NS_DATA = window.NS_DATA || {};
  D.ccna = D.ccna || { id: 'ccna', modules: [] };

  D.ccna.modules.push({
    id: 'ip-connectivity',
    title: { en: 'IP Connectivity & Addressing', ar: 'الاتصال والعنونة في IP' },
    icon: 'route',
    lessons: [
      {
        id: 'ipv4-addressing',
        title: { en: 'IPv4 Addressing', ar: 'عنونة IPv4' },
        duration: 11, difficulty: 'beginner',
        summary: { en: 'IPv4 structure, classes, and the difference between public and private (RFC1918) addresses.', ar: 'بنية IPv4 وفئاته والفرق بين العناوين العامة والخاصة (RFC1918).' },
        content: {
          en: `<h2>Structure</h2><p>An <strong>IPv4 address</strong> is 32 bits, written as four <strong>octets</strong> (0–255) in dotted-decimal, e.g. <code>192.168.1.10</code>. Every address has a <strong>network</strong> portion and a <strong>host</strong> portion, defined by the subnet mask.</p>
<h2>Address classes</h2><table><thead><tr><th>Class</th><th>First octet</th><th>Default mask</th></tr></thead><tbody>
<tr><td>A</td><td>1–126</td><td>/8</td></tr><tr><td>B</td><td>128–191</td><td>/16</td></tr><tr><td>C</td><td>192–223</td><td>/24</td></tr>
<tr><td>D</td><td>224–239</td><td>Multicast</td></tr><tr><td>E</td><td>240–255</td><td>Experimental</td></tr></tbody></table>
<h2>Private ranges (RFC 1918)</h2><ul><li>10.0.0.0 – 10.255.255.255 (/8)</li><li>172.16.0.0 – 172.31.255.255 (/12)</li><li>192.168.0.0 – 192.168.255.255 (/16)</li></ul>
<p>Private addresses are reused inside networks and translated to public ones by <strong>NAT</strong>. Note 127.0.0.0/8 is loopback; 169.254.0.0/16 is APIPA (link-local).</p>
<div class="callout tip"><div class="callout-title">Tip</div><p>Class is historical; modern networks use <strong>classless</strong> addressing (CIDR), where the mask — not the first octet — defines the network.</p></div>`,
          ar: `<h2>البنية</h2><p><strong>عنوان IPv4</strong> بطول 32 بت، يُكتب كأربعة <strong>أوكتيتات</strong> (0–255) بالنقطة العشرية، مثل <code>192.168.1.10</code>. لكل عنوان جزء <strong>شبكة</strong> وجزء <strong>مضيف</strong>، يحددهما قناع الشبكة.</p>
<h2>فئات العناوين</h2><table><thead><tr><th>الفئة</th><th>أول أوكتيت</th><th>القناع الافتراضي</th></tr></thead><tbody>
<tr><td>A</td><td>1–126</td><td>/8</td></tr><tr><td>B</td><td>128–191</td><td>/16</td></tr><tr><td>C</td><td>192–223</td><td>/24</td></tr>
<tr><td>D</td><td>224–239</td><td>بث متعدد</td></tr><tr><td>E</td><td>240–255</td><td>تجريبي</td></tr></tbody></table>
<h2>النطاقات الخاصة (RFC 1918)</h2><ul><li>10.0.0.0 – 10.255.255.255 (/8)</li><li>172.16.0.0 – 172.31.255.255 (/12)</li><li>192.168.0.0 – 192.168.255.255 (/16)</li></ul>
<p>تُعاد العناوين الخاصة داخل الشبكات وتُترجم لعناوين عامة عبر <strong>NAT</strong>. ملاحظة: 127.0.0.0/8 هو loopback؛ و169.254.0.0/16 هو APIPA (محلي الوصلة).</p>
<div class="callout tip"><div class="callout-title">نصيحة</div><p>الفئات تاريخية؛ الشبكات الحديثة تستخدم العنونة <strong>اللاصنفية</strong> (CIDR)، حيث القناع — لا أول أوكتيت — يحدد الشبكة.</p></div>`
        },
        keyPoints: {
          en: ['IPv4 is 32 bits = four octets (0–255).', 'Private ranges: 10/8, 172.16/12, 192.168/16 (RFC 1918).', '127.0.0.0/8 = loopback; 169.254/16 = APIPA.', 'Modern networks use classless (CIDR) addressing.'],
          ar: ['IPv4 بطول 32 بت = أربعة أوكتيتات (0–255).', 'النطاقات الخاصة: 10/8، 172.16/12، 192.168/16 (RFC 1918).', '127.0.0.0/8 = loopback؛ 169.254/16 = APIPA.', 'الشبكات الحديثة تستخدم العنونة اللاصنفية (CIDR).']
        },
        quiz: [
          { q: { en: 'Which is a private IPv4 range?', ar: 'أي نطاق IPv4 خاص؟' }, options: [{ en: '8.8.8.0/24', ar: '8.8.8.0/24' }, { en: '172.16.0.0/12', ar: '172.16.0.0/12' }, { en: '1.1.1.0/24', ar: '1.1.1.0/24' }, { en: '200.1.1.0/24', ar: '200.1.1.0/24' }], answer: 1, explanation: { en: '172.16.0.0/12 is RFC 1918 private space.', ar: '172.16.0.0/12 مساحة خاصة بـ RFC 1918.' } },
          { q: { en: 'How many bits in an IPv4 address?', ar: 'كم بت في عنوان IPv4؟' }, options: [{ en: '16', ar: '16' }, { en: '32', ar: '32' }, { en: '64', ar: '64' }, { en: '128', ar: '128' }], answer: 1, explanation: { en: 'IPv4 is 32 bits.', ar: 'IPv4 بطول 32 بت.' } },
          { q: { en: '169.254.10.5 indicates…', ar: '169.254.10.5 يدل على…' }, options: [{ en: 'A public address', ar: 'عنوان عام' }, { en: 'APIPA — no DHCP response', ar: 'APIPA — لا استجابة DHCP' }, { en: 'A loopback', ar: 'loopback' }, { en: 'Multicast', ar: 'بث متعدد' }], answer: 1, explanation: { en: 'APIPA (169.254/16) is self-assigned when DHCP fails.', ar: 'APIPA (169.254/16) يُسند ذاتيًا عند فشل DHCP.' } }
        ],
        flashcards: [
          { front: { en: 'Loopback range?', ar: 'نطاق loopback؟' }, back: { en: '127.0.0.0/8 (e.g. 127.0.0.1).', ar: '127.0.0.0/8 (مثل 127.0.0.1).' } },
          { front: { en: 'Class C first-octet range?', ar: 'نطاق أول أوكتيت للفئة C؟' }, back: { en: '192–223.', ar: '192–223.' } }
        ]
      },
      {
        id: 'subnet-masks',
        title: { en: 'Subnet Masks & Prefix Length', ar: 'أقنعة الشبكة وطول البادئة' },
        duration: 10, difficulty: 'beginner',
        summary: { en: 'How the mask splits an address into network and host bits, and how CIDR notation works.', ar: 'كيف يقسّم القناع العنوان إلى بتات شبكة ومضيف، وكيف يعمل ترميز CIDR.' },
        content: {
          en: `<h2>What a mask does</h2><p>A <strong>subnet mask</strong> marks which bits are the <strong>network</strong> (1s) and which are the <strong>host</strong> (0s). <code>255.255.255.0</code> = /24 means the first 24 bits are network, last 8 are host.</p>
<h2>CIDR notation</h2><p><strong>CIDR</strong> writes the mask as a slash plus the number of network bits: <code>/24</code>. This is the modern, classless way.</p>
<h2>Common masks</h2><table><thead><tr><th>CIDR</th><th>Mask</th><th>Hosts</th></tr></thead><tbody>
<tr><td>/24</td><td>255.255.255.0</td><td>254</td></tr>
<tr><td>/25</td><td>255.255.255.128</td><td>126</td></tr>
<tr><td>/26</td><td>255.255.255.192</td><td>62</td></tr>
<tr><td>/27</td><td>255.255.255.224</td><td>30</td></tr>
<tr><td>/28</td><td>255.255.255.240</td><td>14</td></tr>
<tr><td>/30</td><td>255.255.255.252</td><td>2</td></tr></tbody></table>
<h2>Usable hosts formula</h2><p>Usable hosts = <strong>2^(host bits) − 2</strong> (subtracting the network and broadcast addresses). A /24 has 8 host bits → 2^8−2 = 254.</p>
<div class="callout tip"><div class="callout-title">Try it</div><p>Open the <strong>Subnet Calculator</strong> tool and type any IP/CIDR to see the network, broadcast and host range instantly.</p></div>`,
          ar: `<h2>ماذا يفعل القناع</h2><p>يحدد <strong>قناع الشبكة</strong> أي البتات <strong>شبكة</strong> (آحاد) وأيها <strong>مضيف</strong> (أصفار). <code>255.255.255.0</code> = /24 يعني أن أول 24 بت شبكة وآخر 8 مضيف.</p>
<h2>ترميز CIDR</h2><p><strong>CIDR</strong> يكتب القناع كشرطة مائلة وعدد بتات الشبكة: <code>/24</code>. هذه الطريقة الحديثة اللاصنفية.</p>
<h2>الأقنعة الشائعة</h2><table><thead><tr><th>CIDR</th><th>القناع</th><th>المضيفون</th></tr></thead><tbody>
<tr><td>/24</td><td>255.255.255.0</td><td>254</td></tr>
<tr><td>/25</td><td>255.255.255.128</td><td>126</td></tr>
<tr><td>/26</td><td>255.255.255.192</td><td>62</td></tr>
<tr><td>/27</td><td>255.255.255.224</td><td>30</td></tr>
<tr><td>/28</td><td>255.255.255.240</td><td>14</td></tr>
<tr><td>/30</td><td>255.255.255.252</td><td>2</td></tr></tbody></table>
<h2>صيغة المضيفين القابلين للاستخدام</h2><p>المضيفون = <strong>2^(بتات المضيف) − 2</strong> (بطرح عنواني الشبكة والبث). الـ /24 له 8 بتات مضيف ← 2^8−2 = 254.</p>
<div class="callout tip"><div class="callout-title">جرّب</div><p>افتح أداة <strong>حاسبة الشبكات الفرعية</strong> واكتب أي IP/CIDR لرؤية الشبكة والبث ونطاق المضيفين فورًا.</p></div>`
        },
        keyPoints: {
          en: ['Mask 1-bits = network, 0-bits = host.', '/24 = 255.255.255.0 = 254 usable hosts.', 'Usable hosts = 2^(host bits) − 2.', 'CIDR is the modern classless notation.'],
          ar: ['آحاد القناع = شبكة، أصفاره = مضيف.', '/24 = 255.255.255.0 = 254 مضيفًا قابلًا للاستخدام.', 'المضيفون = 2^(بتات المضيف) − 2.', 'CIDR هو الترميز اللاصنفي الحديث.']
        },
        quiz: [
          { q: { en: 'How many usable hosts in a /26?', ar: 'كم مضيفًا قابلًا للاستخدام في /26؟' }, options: [{ en: '30', ar: '30' }, { en: '62', ar: '62' }, { en: '126', ar: '126' }, { en: '64', ar: '64' }], answer: 1, explanation: { en: '/26 has 6 host bits → 2^6−2 = 62.', ar: '/26 له 6 بتات مضيف ← 2^6−2 = 62.' } },
          { q: { en: 'What mask is /28?', ar: 'ما قناع /28؟' }, options: [{ en: '255.255.255.240', ar: '255.255.255.240' }, { en: '255.255.255.224', ar: '255.255.255.224' }, { en: '255.255.255.192', ar: '255.255.255.192' }, { en: '255.255.255.248', ar: '255.255.255.248' }], answer: 0, explanation: { en: '/28 = 255.255.255.240 (14 usable hosts).', ar: '/28 = 255.255.255.240 (14 مضيفًا).' } }
        ],
        flashcards: [
          { front: { en: 'Usable hosts formula?', ar: 'صيغة المضيفين القابلين للاستخدام؟' }, back: { en: '2^(host bits) − 2.', ar: '2^(بتات المضيف) − 2.' } },
          { front: { en: '/30 usable hosts?', ar: 'مضيفو /30؟' }, back: { en: '2 (ideal for point-to-point links).', ar: '2 (مثالي لوصلات نقطة-لنقطة).' } }
        ]
      },
      {
        id: 'subnetting-basics',
        title: { en: 'Subnetting Basics', ar: 'أساسيات التقسيم الفرعي' },
        duration: 14, difficulty: 'intermediate',
        summary: { en: 'Borrow host bits to divide one network into many, and find the network/broadcast/host range.', ar: 'استعِر بتات المضيف لتقسيم شبكة إلى عدة، وأوجد الشبكة/البث/نطاق المضيفين.' },
        content: {
          en: `<h2>Why subnet?</h2><p><strong>Subnetting</strong> divides a large network into smaller ones to control broadcasts, improve security and conserve addresses. You do it by <strong>borrowing host bits</strong> for the network portion.</p>
<h2>The block size (magic number)</h2><p>The <strong>block size</strong> = 256 − (mask octet value). It tells you the size of each subnet and where each one starts.</p>
<h2>Worked example</h2><p>Subnet <code>192.168.10.0/24</code> into <code>/26</code> networks:</p>
<ul><li>/26 mask = 255.255.255.<strong>192</strong>; block size = 256−192 = <strong>64</strong>.</li><li>Subnets start at .0, .64, .128, .192.</li></ul>
<table><thead><tr><th>Subnet</th><th>Network</th><th>First host</th><th>Last host</th><th>Broadcast</th></tr></thead><tbody>
<tr><td>1</td><td>.0</td><td>.1</td><td>.62</td><td>.63</td></tr>
<tr><td>2</td><td>.64</td><td>.65</td><td>.126</td><td>.127</td></tr>
<tr><td>3</td><td>.128</td><td>.129</td><td>.190</td><td>.191</td></tr>
<tr><td>4</td><td>.192</td><td>.193</td><td>.254</td><td>.255</td></tr></tbody></table>
<p>So <code>192.168.10.100</code> lives in subnet .64 (range .64–.127), broadcast .127.</p>
<div class="callout tip"><div class="callout-title">Method</div><p>1) Find block size. 2) List subnet starts. 3) Broadcast = next start − 1. 4) Hosts = between network and broadcast.</p></div>`,
          ar: `<h2>لماذا التقسيم الفرعي؟</h2><p>يقسّم <strong>التقسيم الفرعي</strong> شبكة كبيرة إلى أصغر للتحكم بالبث وتحسين الأمن وتوفير العناوين. يتم ذلك بـ <strong>استعارة بتات المضيف</strong> لجزء الشبكة.</p>
<h2>حجم الكتلة (الرقم السحري)</h2><p><strong>حجم الكتلة</strong> = 256 − (قيمة أوكتيت القناع). يخبرك بحجم كل شبكة فرعية وأين تبدأ كل منها.</p>
<h2>مثال محلول</h2><p>قسّم <code>192.168.10.0/24</code> إلى شبكات <code>/26</code>:</p>
<ul><li>قناع /26 = 255.255.255.<strong>192</strong>؛ حجم الكتلة = 256−192 = <strong>64</strong>.</li><li>الشبكات تبدأ عند .0 و.64 و.128 و.192.</li></ul>
<table><thead><tr><th>الشبكة</th><th>الشبكة</th><th>أول مضيف</th><th>آخر مضيف</th><th>البث</th></tr></thead><tbody>
<tr><td>1</td><td>.0</td><td>.1</td><td>.62</td><td>.63</td></tr>
<tr><td>2</td><td>.64</td><td>.65</td><td>.126</td><td>.127</td></tr>
<tr><td>3</td><td>.128</td><td>.129</td><td>.190</td><td>.191</td></tr>
<tr><td>4</td><td>.192</td><td>.193</td><td>.254</td><td>.255</td></tr></tbody></table>
<p>إذن <code>192.168.10.100</code> يقع في الشبكة .64 (النطاق .64–.127)، والبث .127.</p>
<div class="callout tip"><div class="callout-title">الطريقة</div><p>1) أوجد حجم الكتلة. 2) اسرد بدايات الشبكات. 3) البث = البداية التالية − 1. 4) المضيفون بين الشبكة والبث.</p></div>`
        },
        keyPoints: {
          en: ['Subnetting borrows host bits to create more networks.', 'Block size = 256 − mask octet.', 'Broadcast = next subnet start − 1.', 'First/last host sit between network and broadcast.'],
          ar: ['التقسيم يستعير بتات المضيف لإنشاء شبكات أكثر.', 'حجم الكتلة = 256 − أوكتيت القناع.', 'البث = بداية الشبكة التالية − 1.', 'أول/آخر مضيف بين الشبكة والبث.']
        },
        examples: [
          { title: { en: 'Find the subnet of 172.16.20.200/27', ar: 'أوجد شبكة 172.16.20.200/27' }, code: '/27 mask = 255.255.255.224\nBlock size = 256 - 224 = 32\nStarts: .0 .32 .64 ... .192 .224\n.200 falls in .192 (range .192-.223)\nNetwork: 172.16.20.192  Broadcast: 172.16.20.223\nHosts: .193 - .222 (30 usable)' }
        ],
        quiz: [
          { q: { en: 'Block size for a /26 mask?', ar: 'حجم الكتلة لقناع /26؟' }, options: [{ en: '32', ar: '32' }, { en: '64', ar: '64' }, { en: '16', ar: '16' }, { en: '128', ar: '128' }], answer: 1, explanation: { en: '256 − 192 = 64.', ar: '256 − 192 = 64.' } },
          { q: { en: 'Which subnet does 192.168.10.100/26 belong to?', ar: 'إلى أي شبكة ينتمي 192.168.10.100/26؟' }, options: [{ en: '192.168.10.0', ar: '192.168.10.0' }, { en: '192.168.10.64', ar: '192.168.10.64' }, { en: '192.168.10.96', ar: '192.168.10.96' }, { en: '192.168.10.128', ar: '192.168.10.128' }], answer: 1, explanation: { en: '.100 is within the .64–.127 block.', ar: '.100 ضمن الكتلة .64–.127.' } },
          { q: { en: 'Broadcast of 10.0.0.0/28?', ar: 'بث 10.0.0.0/28؟' }, options: [{ en: '10.0.0.7', ar: '10.0.0.7' }, { en: '10.0.0.15', ar: '10.0.0.15' }, { en: '10.0.0.16', ar: '10.0.0.16' }, { en: '10.0.0.31', ar: '10.0.0.31' }], answer: 1, explanation: { en: 'Block size 16 → first block .0–.15, broadcast .15.', ar: 'حجم الكتلة 16 ← الكتلة الأولى .0–.15، البث .15.' } }
        ],
        flashcards: [
          { front: { en: 'Block size formula?', ar: 'صيغة حجم الكتلة؟' }, back: { en: '256 − (interesting mask octet).', ar: '256 − (أوكتيت القناع المهم).' } }
        ]
      },
      {
        id: 'vlsm-summarization',
        title: { en: 'VLSM & Route Summarization', ar: 'VLSM وتلخيص المسارات' },
        duration: 12, difficulty: 'advanced',
        summary: { en: 'Use variable-length masks to right-size subnets, and summarize routes to shrink routing tables.', ar: 'استخدم أقنعة متغيرة الطول لتحجيم الشبكات، ولخّص المسارات لتقليص جداول التوجيه.' },
        content: {
          en: `<h2>VLSM</h2><p><strong>Variable Length Subnet Masking</strong> lets you use different masks for different subnets, so each gets just enough addresses. Allocate <strong>largest-first</strong> to avoid overlap.</p>
<h2>Example allocation</h2><p>From 192.168.1.0/24, satisfy: LAN-A 100 hosts, LAN-B 50, LAN-C 20, two WAN links (2 hosts each).</p>
<table><thead><tr><th>Need</th><th>Subnet</th><th>Mask</th></tr></thead><tbody>
<tr><td>100 hosts</td><td>192.168.1.0/25</td><td>126 hosts</td></tr>
<tr><td>50 hosts</td><td>192.168.1.128/26</td><td>62 hosts</td></tr>
<tr><td>20 hosts</td><td>192.168.1.192/27</td><td>30 hosts</td></tr>
<tr><td>WAN1</td><td>192.168.1.224/30</td><td>2 hosts</td></tr>
<tr><td>WAN2</td><td>192.168.1.228/30</td><td>2 hosts</td></tr></tbody></table>
<h2>Summarization</h2><p><strong>Route summarization</strong> (supernetting) combines several contiguous networks into one advertisement. 10.1.0.0/24 … 10.1.3.0/24 summarize to <code>10.1.0.0/22</code>. Smaller routing tables = faster lookups and less overhead.</p>
<div class="callout tip"><div class="callout-title">Allocate big to small</div><p>Always assign the largest subnet first in VLSM, then carve smaller blocks from what remains.</p></div>`,
          ar: `<h2>VLSM</h2><p><strong>الإخفاء بطول قناع متغير</strong> يتيح استخدام أقنعة مختلفة لشبكات مختلفة، فيحصل كل منها على عدد كافٍ من العناوين فقط. خصّص <strong>الأكبر أولًا</strong> لتجنّب التداخل.</p>
<h2>مثال تخصيص</h2><p>من 192.168.1.0/24، حقّق: LAN-A 100 مضيف، LAN-B 50، LAN-C 20، ووصلتا WAN (مضيفان لكل منهما).</p>
<table><thead><tr><th>الحاجة</th><th>الشبكة</th><th>القناع</th></tr></thead><tbody>
<tr><td>100 مضيف</td><td>192.168.1.0/25</td><td>126 مضيف</td></tr>
<tr><td>50 مضيف</td><td>192.168.1.128/26</td><td>62 مضيف</td></tr>
<tr><td>20 مضيف</td><td>192.168.1.192/27</td><td>30 مضيف</td></tr>
<tr><td>WAN1</td><td>192.168.1.224/30</td><td>2 مضيف</td></tr>
<tr><td>WAN2</td><td>192.168.1.228/30</td><td>2 مضيف</td></tr></tbody></table>
<h2>التلخيص</h2><p><strong>تلخيص المسارات</strong> (supernetting) يدمج عدة شبكات متتالية في إعلان واحد. 10.1.0.0/24 … 10.1.3.0/24 تُلخَّص إلى <code>10.1.0.0/22</code>. جداول توجيه أصغر = بحث أسرع وعبء أقل.</p>
<div class="callout tip"><div class="callout-title">من الكبير للصغير</div><p>خصّص دائمًا أكبر شبكة أولًا في VLSM، ثم اقتطع الكتل الأصغر مما تبقّى.</p></div>`
        },
        keyPoints: {
          en: ['VLSM uses different masks per subnet to avoid waste.', 'Allocate largest subnets first.', 'Summarization combines contiguous networks into one route.', '/30 (2 hosts) is ideal for WAN point-to-point links.'],
          ar: ['VLSM يستخدم أقنعة مختلفة لكل شبكة لتجنّب الهدر.', 'خصّص أكبر الشبكات أولًا.', 'التلخيص يدمج الشبكات المتتالية في مسار واحد.', '/30 (مضيفان) مثالي لوصلات WAN نقطة-لنقطة.']
        },
        quiz: [
          { q: { en: 'What mask best fits a point-to-point WAN link (2 hosts)?', ar: 'أي قناع يناسب وصلة WAN نقطة-لنقطة (مضيفان)؟' }, options: [{ en: '/28', ar: '/28' }, { en: '/29', ar: '/29' }, { en: '/30', ar: '/30' }, { en: '/24', ar: '/24' }], answer: 2, explanation: { en: '/30 gives exactly 2 usable hosts.', ar: '/30 يعطي مضيفين بالضبط.' } },
          { q: { en: '10.1.0.0/24 through 10.1.3.0/24 summarize to…', ar: '10.1.0.0/24 حتى 10.1.3.0/24 تُلخَّص إلى…' }, options: [{ en: '10.1.0.0/22', ar: '10.1.0.0/22' }, { en: '10.1.0.0/23', ar: '10.1.0.0/23' }, { en: '10.1.0.0/21', ar: '10.1.0.0/21' }, { en: '10.0.0.0/8', ar: '10.0.0.0/8' }], answer: 0, explanation: { en: 'Four /24s combine into a /22.', ar: 'أربع شبكات /24 تتجمّع في /22.' } }
        ],
        flashcards: [
          { front: { en: 'VLSM allocation order?', ar: 'ترتيب التخصيص في VLSM؟' }, back: { en: 'Largest subnet first.', ar: 'أكبر شبكة أولًا.' } }
        ]
      },
      {
        id: 'ipv6-addressing',
        title: { en: 'IPv6 Addressing', ar: 'عنونة IPv6' },
        duration: 12, difficulty: 'intermediate',
        summary: { en: 'IPv6 format, abbreviation rules, and address types (global unicast, link-local, multicast).', ar: 'صيغة IPv6 وقواعد الاختصار وأنواع العناوين (عام، محلي الوصلة، بث متعدد).' },
        content: {
          en: `<h2>Why IPv6?</h2><p>IPv4's 4.3 billion addresses ran out. <strong>IPv6</strong> is <strong>128 bits</strong> — about 340 undecillion addresses — written as eight hextets of 4 hex digits, e.g. <code>2001:0db8:0000:0000:0000:ff00:0042:8329</code>.</p>
<h2>Abbreviation rules</h2><ul><li>Drop leading zeros in each hextet: <code>0db8 → db8</code>, <code>0042 → 42</code>.</li><li>Replace ONE run of all-zero hextets with <code>::</code> (once per address).</li></ul>
<p>The example becomes <code>2001:db8::ff00:42:8329</code>.</p>
<h2>Address types</h2><table><thead><tr><th>Type</th><th>Prefix</th><th>Scope</th></tr></thead><tbody>
<tr><td>Global Unicast (GUA)</td><td>2000::/3</td><td>Internet-routable</td></tr>
<tr><td>Link-Local (LLA)</td><td>FE80::/10</td><td>Single link only</td></tr>
<tr><td>Unique Local (ULA)</td><td>FC00::/7</td><td>Private (like RFC1918)</td></tr>
<tr><td>Multicast</td><td>FF00::/8</td><td>One-to-many</td></tr></tbody></table>
<p>IPv6 has <strong>no broadcast</strong> — it uses multicast instead (e.g. FF02::1 = all nodes).</p>
<div class="callout tip"><div class="callout-title">Link-local always exists</div><p>Every IPv6 interface auto-generates an FE80:: link-local address used for neighbor discovery and routing protocols.</p></div>`,
          ar: `<h2>لماذا IPv6؟</h2><p>نفدت عناوين IPv4 البالغة 4.3 مليار. <strong>IPv6</strong> بطول <strong>128 بت</strong> — نحو 340 أُنديسيليون عنوان — يُكتب كثمانية مقاطع من 4 أرقام ست عشرية، مثل <code>2001:0db8:0000:0000:0000:ff00:0042:8329</code>.</p>
<h2>قواعد الاختصار</h2><ul><li>احذف الأصفار البادئة في كل مقطع: <code>0db8 → db8</code>، <code>0042 → 42</code>.</li><li>استبدل سلسلة واحدة من المقاطع الصفرية بـ <code>::</code> (مرة واحدة لكل عنوان).</li></ul>
<p>المثال يصبح <code>2001:db8::ff00:42:8329</code>.</p>
<h2>أنواع العناوين</h2><table><thead><tr><th>النوع</th><th>البادئة</th><th>النطاق</th></tr></thead><tbody>
<tr><td>عام (GUA)</td><td>2000::/3</td><td>قابل للتوجيه عالميًا</td></tr>
<tr><td>محلي الوصلة (LLA)</td><td>FE80::/10</td><td>وصلة واحدة فقط</td></tr>
<tr><td>محلي فريد (ULA)</td><td>FC00::/7</td><td>خاص (مثل RFC1918)</td></tr>
<tr><td>بث متعدد</td><td>FF00::/8</td><td>واحد-لكثير</td></tr></tbody></table>
<p>لا يوجد <strong>بث (broadcast)</strong> في IPv6 — يستخدم البث المتعدد بدلًا منه (مثل FF02::1 = كل العقد).</p>
<div class="callout tip"><div class="callout-title">المحلي دائمًا موجود</div><p>كل واجهة IPv6 تولّد تلقائيًا عنوان FE80:: محلي الوصلة يُستخدم لاكتشاف الجيران وبروتوكولات التوجيه.</p></div>`
        },
        keyPoints: {
          en: ['IPv6 is 128 bits, eight hextets of hex.', 'Drop leading zeros; use :: once for a run of zeros.', 'GUA = 2000::/3, LLA = FE80::/10, multicast = FF00::/8.', 'IPv6 has no broadcast — uses multicast.'],
          ar: ['IPv6 بطول 128 بت، ثمانية مقاطع ست عشرية.', 'احذف الأصفار البادئة؛ استخدم :: مرة لسلسلة أصفار.', 'GUA = 2000::/3، LLA = FE80::/10، البث المتعدد = FF00::/8.', 'لا بث في IPv6 — يستخدم البث المتعدد.']
        },
        quiz: [
          { q: { en: 'How many bits is an IPv6 address?', ar: 'كم بت في عنوان IPv6؟' }, options: [{ en: '32', ar: '32' }, { en: '64', ar: '64' }, { en: '128', ar: '128' }, { en: '256', ar: '256' }], answer: 2, explanation: { en: 'IPv6 addresses are 128 bits.', ar: 'عناوين IPv6 بطول 128 بت.' } },
          { q: { en: 'Which prefix is an IPv6 link-local address?', ar: 'أي بادئة تمثل عنوان IPv6 محلي الوصلة؟' }, options: [{ en: '2000::/3', ar: '2000::/3' }, { en: 'FE80::/10', ar: 'FE80::/10' }, { en: 'FF00::/8', ar: 'FF00::/8' }, { en: 'FC00::/7', ar: 'FC00::/7' }], answer: 1, explanation: { en: 'Link-local addresses are FE80::/10.', ar: 'العناوين محلية الوصلة هي FE80::/10.' } },
          { q: { en: 'Abbreviate 2001:0db8:0000:0000:0000:0000:0000:0001', ar: 'اختصر 2001:0db8:0000:0000:0000:0000:0000:0001' }, options: [{ en: '2001:db8::1', ar: '2001:db8::1' }, { en: '2001:db8:0:1', ar: '2001:db8:0:1' }, { en: '2001::db8::1', ar: '2001::db8::1' }, { en: '21:db8::1', ar: '21:db8::1' }], answer: 0, explanation: { en: 'Drop leading zeros and compress the zero run to ::.', ar: 'احذف الأصفار البادئة واضغط سلسلة الأصفار إلى ::.' } }
        ],
        flashcards: [
          { front: { en: 'IPv6 all-nodes multicast?', ar: 'بث IPv6 المتعدد لكل العقد؟' }, back: { en: 'FF02::1', ar: 'FF02::1' } },
          { front: { en: 'How many times can :: appear?', ar: 'كم مرة يمكن أن تظهر ::؟' }, back: { en: 'Once per address.', ar: 'مرة واحدة لكل عنوان.' } }
        ]
      },
      {
        id: 'routing-fundamentals',
        title: { en: 'Routing Fundamentals', ar: 'أساسيات التوجيه' },
        duration: 12, difficulty: 'intermediate',
        summary: { en: 'How routers build a routing table, and how administrative distance and metrics pick the best path.', ar: 'كيف يبني الراوتر جدول التوجيه، وكيف تختار المسافة الإدارية والمقاييس أفضل مسار.' },
        content: {
          en: `<h2>The routing table</h2><p>A router forwards packets by consulting its <strong>routing table</strong>, choosing the <strong>longest prefix match</strong> for the destination. Routes come from three sources:</p>
<ul><li><strong>Connected</strong> — directly attached subnets (code C).</li><li><strong>Static</strong> — manually configured (code S).</li><li><strong>Dynamic</strong> — learned via protocols like OSPF (O), EIGRP (D), RIP (R).</li></ul>
<h2>Administrative Distance (AD)</h2><p>When two sources offer a route to the same network, the router trusts the one with the <strong>lower AD</strong>.</p>
<table><thead><tr><th>Source</th><th>AD</th></tr></thead><tbody>
<tr><td>Connected</td><td>0</td></tr><tr><td>Static</td><td>1</td></tr><tr><td>EIGRP</td><td>90</td></tr><tr><td>OSPF</td><td>110</td></tr><tr><td>RIP</td><td>120</td></tr></tbody></table>
<h2>Metric</h2><p>Within a single protocol, the <strong>metric</strong> breaks ties: OSPF uses cost (bandwidth), RIP uses hop count, EIGRP uses bandwidth+delay.</p>
<div class="callout tip"><div class="callout-title">Order of preference</div><p>1) Longest prefix match → 2) lowest AD (between protocols) → 3) lowest metric (within a protocol).</p></div>`,
          ar: `<h2>جدول التوجيه</h2><p>يمرّر الراوتر الحزم بالرجوع إلى <strong>جدول التوجيه</strong>، مختارًا <strong>أطول تطابق بادئة</strong> للوجهة. تأتي المسارات من ثلاثة مصادر:</p>
<ul><li><strong>متصلة</strong> — شبكات فرعية متصلة مباشرة (الرمز C).</li><li><strong>ثابتة</strong> — مهيّأة يدويًا (الرمز S).</li><li><strong>ديناميكية</strong> — متعلَّمة عبر بروتوكولات مثل OSPF (O) و EIGRP (D) و RIP (R).</li></ul>
<h2>المسافة الإدارية (AD)</h2><p>عندما يقدّم مصدران مسارًا لنفس الشبكة، يثق الراوتر بصاحب <strong>الـ AD الأقل</strong>.</p>
<table><thead><tr><th>المصدر</th><th>AD</th></tr></thead><tbody>
<tr><td>متصلة</td><td>0</td></tr><tr><td>ثابتة</td><td>1</td></tr><tr><td>EIGRP</td><td>90</td></tr><tr><td>OSPF</td><td>110</td></tr><tr><td>RIP</td><td>120</td></tr></tbody></table>
<h2>المقياس (Metric)</h2><p>داخل البروتوكول الواحد، يحسم <strong>المقياس</strong> التعادل: OSPF يستخدم التكلفة (النطاق)، RIP عدد القفزات، EIGRP النطاق+التأخير.</p>
<div class="callout tip"><div class="callout-title">ترتيب التفضيل</div><p>1) أطول تطابق بادئة ← 2) أقل AD (بين البروتوكولات) ← 3) أقل مقياس (داخل البروتوكول).</p></div>`
        },
        keyPoints: {
          en: ['Routers choose the longest prefix match first.', 'AD picks between route sources (lower is trusted).', 'Connected=0, Static=1, EIGRP=90, OSPF=110, RIP=120.', 'Metric breaks ties within one protocol.'],
          ar: ['الراوترات تختار أطول تطابق بادئة أولًا.', 'الـ AD يختار بين مصادر المسارات (الأقل موثوق).', 'متصلة=0، ثابتة=1، EIGRP=90، OSPF=110، RIP=120.', 'المقياس يحسم التعادل داخل البروتوكول الواحد.']
        },
        commands: [
          { cmd: 'show ip route', desc: { en: 'Display the routing table with source codes.', ar: 'عرض جدول التوجيه مع رموز المصادر.' } }
        ],
        quiz: [
          { q: { en: 'Which has the lowest administrative distance?', ar: 'أيها أقل مسافة إدارية؟' }, options: [{ en: 'OSPF', ar: 'OSPF' }, { en: 'RIP', ar: 'RIP' }, { en: 'Static', ar: 'ثابتة' }, { en: 'EIGRP', ar: 'EIGRP' }], answer: 2, explanation: { en: 'Static = 1, lower than OSPF(110), EIGRP(90), RIP(120).', ar: 'الثابتة = 1، أقل من OSPF(110) و EIGRP(90) و RIP(120).' } },
          { q: { en: 'What is the router\'s FIRST criterion to select a route?', ar: 'ما المعيار الأول لاختيار الراوتر للمسار؟' }, options: [{ en: 'Lowest AD', ar: 'أقل AD' }, { en: 'Longest prefix match', ar: 'أطول تطابق بادئة' }, { en: 'Lowest metric', ar: 'أقل مقياس' }, { en: 'Highest bandwidth', ar: 'أعلى نطاق' }], answer: 1, explanation: { en: 'Longest prefix match wins before AD or metric.', ar: 'أطول تطابق بادئة يفوز قبل AD أو المقياس.' } }
        ],
        flashcards: [
          { front: { en: 'OSPF administrative distance?', ar: 'المسافة الإدارية لـ OSPF؟' }, back: { en: '110.', ar: '110.' } },
          { front: { en: 'Routing table code for a connected route?', ar: 'رمز المسار المتصل في جدول التوجيه؟' }, back: { en: 'C.', ar: 'C.' } }
        ]
      },
      {
        id: 'static-routing',
        title: { en: 'Static & Default Routing', ar: 'التوجيه الثابت والافتراضي' },
        duration: 11, difficulty: 'intermediate',
        summary: { en: 'Manually configure routes, default gateways, and floating static backups.', ar: 'هيّئ المسارات يدويًا، والبوابة الافتراضية، والمسارات الثابتة الاحتياطية العائمة.' },
        content: {
          en: `<h2>Static routes</h2><p>A <strong>static route</strong> is manually defined. You specify the destination network, mask, and either a <strong>next-hop IP</strong> or an <strong>exit interface</strong>.</p>
<h2>Default route</h2><p>A <strong>default route</strong> <code>0.0.0.0 0.0.0.0</code> matches any destination not in the table — perfect for sending traffic to the Internet ("gateway of last resort").</p>
<h2>Floating static</h2><p>Add a higher AD to a backup static route so it only activates if the primary (e.g. an OSPF route) disappears: <code>ip route 10.0.0.0 255.0.0.0 192.0.2.2 200</code>.</p>
<h2>Pros & cons</h2><table><thead><tr><th>Pros</th><th>Cons</th></tr></thead><tbody>
<tr><td>No CPU/bandwidth overhead</td><td>No automatic failover</td></tr>
<tr><td>Precise control, secure</td><td>Doesn't scale to large networks</td></tr></tbody></table>
<div class="callout tip"><div class="callout-title">Best practice</div><p>Prefer specifying the next-hop IP on multi-access links; on point-to-point links the exit interface is fine.</p></div>`,
          ar: `<h2>المسارات الثابتة</h2><p><strong>المسار الثابت</strong> يُعرَّف يدويًا. تحدد شبكة الوجهة والقناع، وإما <strong>عنوان القفزة التالية</strong> أو <strong>واجهة الخروج</strong>.</p>
<h2>المسار الافتراضي</h2><p>المسار الافتراضي <code>0.0.0.0 0.0.0.0</code> يطابق أي وجهة ليست في الجدول — مثالي لإرسال المرور للإنترنت ("بوابة الملاذ الأخير").</p>
<h2>الثابت العائم</h2><p>أضف AD أعلى لمسار ثابت احتياطي ليُفعَّل فقط عند اختفاء الأساسي (مثل مسار OSPF): <code>ip route 10.0.0.0 255.0.0.0 192.0.2.2 200</code>.</p>
<h2>المزايا والعيوب</h2><table><thead><tr><th>مزايا</th><th>عيوب</th></tr></thead><tbody>
<tr><td>بلا عبء معالج/نطاق</td><td>لا احتياط تلقائي</td></tr>
<tr><td>تحكم دقيق وآمن</td><td>لا يتوسّع للشبكات الكبيرة</td></tr></tbody></table>
<div class="callout tip"><div class="callout-title">أفضل ممارسة</div><p>فضّل تحديد القفزة التالية على الوصلات متعددة الوصول؛ وعلى وصلات نقطة-لنقطة تكفي واجهة الخروج.</p></div>`
        },
        keyPoints: {
          en: ['Static routes are manual: network + mask + next-hop/exit.', 'Default route 0.0.0.0/0 = gateway of last resort.', 'Floating static = backup route with a higher AD.', 'Static = no overhead but no automatic failover.'],
          ar: ['المسارات الثابتة يدوية: شبكة + قناع + قفزة/خروج.', 'المسار الافتراضي 0.0.0.0/0 = بوابة الملاذ الأخير.', 'الثابت العائم = مسار احتياطي بـ AD أعلى.', 'الثابت = بلا عبء لكن بلا احتياط تلقائي.']
        },
        examples: [
          { title: { en: 'Static and default routes', ar: 'مسارات ثابتة وافتراضية' }, code: 'R1(config)# ip route 10.2.0.0 255.255.0.0 192.0.2.2\nR1(config)# ip route 0.0.0.0 0.0.0.0 203.0.113.1\n! floating backup (AD 200)\nR1(config)# ip route 10.2.0.0 255.255.0.0 198.51.100.2 200' }
        ],
        commands: [
          { cmd: 'ip route 10.2.0.0 255.255.0.0 192.0.2.2', desc: { en: 'Static route via a next-hop IP.', ar: 'مسار ثابت عبر قفزة تالية.' } },
          { cmd: 'ip route 0.0.0.0 0.0.0.0 203.0.113.1', desc: { en: 'Default route to the Internet.', ar: 'مسار افتراضي للإنترنت.' } },
          { cmd: 'show ip route static', desc: { en: 'Show only static routes.', ar: 'عرض المسارات الثابتة فقط.' } }
        ],
        lab: {
          title: { en: 'Lab: Connect Two Sites with Static Routes', ar: 'مختبر: ربط موقعين بمسارات ثابتة' },
          objective: { en: 'Configure static routes on R1 and R2 so LAN-A can reach LAN-B, plus a default route to the Internet.', ar: 'هيّئ مسارات ثابتة على R1 و R2 لتصل LAN-A إلى LAN-B، مع مسار افتراضي للإنترنت.' },
          topology: 'LAN-A - [R1] -- WAN -- [R2] - LAN-B',
          steps: [
            { en: 'Configure interface IPs on both routers and the WAN link.', ar: 'هيّئ عناوين الواجهات على الراوترين ووصلة WAN.' },
            { en: 'On R1, add a static route to LAN-B via R2.', ar: 'على R1 أضف مسارًا ثابتًا إلى LAN-B عبر R2.' },
            { en: 'On R2, add a static route to LAN-A via R1.', ar: 'على R2 أضف مسارًا ثابتًا إلى LAN-A عبر R1.' },
            { en: 'Add a default route on the edge router.', ar: 'أضف مسارًا افتراضيًا على راوتر الحافة.' }
          ],
          verify: { en: 'Ping a host in LAN-B from LAN-A; check show ip route for the S entries.', ar: 'نفّذ ping لمضيف في LAN-B من LAN-A؛ تحقق من show ip route لمدخلات S.' }
        },
        quiz: [
          { q: { en: 'Which command creates a default route?', ar: 'أي أمر يُنشئ مسارًا افتراضيًا؟' }, options: [{ en: 'ip route 0.0.0.0 0.0.0.0 <next-hop>', ar: 'ip route 0.0.0.0 0.0.0.0 <القفزة>' }, { en: 'ip default-network', ar: 'ip default-network' }, { en: 'router default', ar: 'router default' }, { en: 'ip route any any', ar: 'ip route any any' }], answer: 0, explanation: { en: '0.0.0.0/0 matches all destinations.', ar: '0.0.0.0/0 يطابق كل الوجهات.' } },
          { q: { en: 'A floating static route has…', ar: 'المسار الثابت العائم له…' }, options: [{ en: 'A lower AD', ar: 'AD أقل' }, { en: 'A higher AD than the primary', ar: 'AD أعلى من الأساسي' }, { en: 'No mask', ar: 'بلا قناع' }, { en: 'A metric of 0', ar: 'مقياس 0' }], answer: 1, explanation: { en: 'Higher AD keeps it inactive until the primary fails.', ar: 'الـ AD الأعلى يبقيه غير فعّال حتى يفشل الأساسي.' } }
        ],
        flashcards: [
          { front: { en: 'Default route prefix?', ar: 'بادئة المسار الافتراضي؟' }, back: { en: '0.0.0.0/0.', ar: '0.0.0.0/0.' } }
        ]
      },
      {
        id: 'ospf-fundamentals',
        title: { en: 'OSPF Fundamentals & Configuration', ar: 'أساسيات وتهيئة OSPF' },
        duration: 14, difficulty: 'advanced',
        summary: { en: 'OSPF is a link-state IGP. Learn router IDs, neighbors, areas, cost, and how to configure OSPFv2.', ar: 'OSPF بروتوكول حالة-وصلة داخلي. تعلّم معرّفات الراوتر والجيران والمناطق والتكلفة وتهيئة OSPFv2.' },
        content: {
          en: `<h2>What is OSPF?</h2><p><strong>OSPF (Open Shortest Path First)</strong> is a link-state Interior Gateway Protocol. Each router builds a map of the network and runs the <strong>Dijkstra (SPF)</strong> algorithm to find the shortest path to every network.</p>
<h2>Key concepts</h2><ul><li><strong>Router ID</strong> — a unique 32-bit ID (highest loopback IP, or set manually).</li><li><strong>Neighbors/adjacencies</strong> — routers exchange Hellos to form adjacencies.</li><li><strong>Areas</strong> — OSPF is hierarchical; area 0 is the backbone all areas connect to.</li><li><strong>Cost</strong> — the metric, based on bandwidth (cost = 10^8 / bandwidth).</li></ul>
<h2>Neighbor requirements</h2><p>To become neighbors, routers must match: <strong>area</strong>, <strong>hello/dead timers</strong>, <strong>subnet</strong>, authentication and MTU.</p>
<h2>Configuration</h2><p>Enter the OSPF process, then advertise networks with a wildcard mask into an area. Verify with <code>show ip ospf neighbor</code>.</p>
<div class="callout tip"><div class="callout-title">Wildcard mask</div><p>OSPF network statements use a wildcard (inverse) mask. For a /24, the wildcard is 0.0.0.255.</p></div>`,
          ar: `<h2>ما هو OSPF؟</h2><p><strong>OSPF (افتح أقصر مسار أولًا)</strong> بروتوكول بوابة داخلي من نوع حالة-الوصلة. يبني كل راوتر خريطة للشبكة ويشغّل خوارزمية <strong>Dijkstra (SPF)</strong> لإيجاد أقصر مسار لكل شبكة.</p>
<h2>المفاهيم الأساسية</h2><ul><li><strong>Router ID</strong> — معرّف فريد 32 بت (أعلى IP لـ loopback، أو يُضبط يدويًا).</li><li><strong>الجيران/التجاورات</strong> — تتبادل الراوترات رسائل Hello لتكوين تجاورات.</li><li><strong>المناطق</strong> — OSPF هرمي؛ المنطقة 0 هي العمود الفقري الذي تتصل به كل المناطق.</li><li><strong>التكلفة</strong> — المقياس، بناءً على النطاق (التكلفة = 10^8 / النطاق).</li></ul>
<h2>متطلبات الجيران</h2><p>ليصبحا جارين، يجب أن تتطابق: <strong>المنطقة</strong> و<strong>مؤقتات hello/dead</strong> و<strong>الشبكة الفرعية</strong> والمصادقة و MTU.</p>
<h2>التهيئة</h2><p>ادخل عملية OSPF، ثم أعلن عن الشبكات بقناع wildcard في منطقة. تحقق بـ <code>show ip ospf neighbor</code>.</p>
<div class="callout tip"><div class="callout-title">قناع الـ wildcard</div><p>تستخدم جُمل شبكات OSPF قناعًا عكسيًا (wildcard). لـ /24، الـ wildcard هو 0.0.0.255.</p></div>`
        },
        keyPoints: {
          en: ['OSPF is a link-state IGP using Dijkstra/SPF.', 'Router ID = highest loopback or manually set.', 'Area 0 is the backbone; all areas attach to it.', 'Cost = 10^8 / bandwidth; network statements use wildcard masks.'],
          ar: ['OSPF بروتوكول حالة-وصلة يستخدم Dijkstra/SPF.', 'Router ID = أعلى loopback أو يُضبط يدويًا.', 'المنطقة 0 هي العمود الفقري؛ تتصل بها كل المناطق.', 'التكلفة = 10^8 / النطاق؛ جُمل الشبكة تستخدم أقنعة wildcard.']
        },
        examples: [
          { title: { en: 'OSPF single-area config', ar: 'تهيئة OSPF منطقة واحدة' }, code: 'R1(config)# router ospf 1\nR1(config-router)# router-id 1.1.1.1\nR1(config-router)# network 10.0.0.0 0.0.0.255 area 0\nR1(config-router)# network 192.168.1.0 0.0.0.255 area 0\nR1# show ip ospf neighbor' }
        ],
        commands: [
          { cmd: 'router ospf 1', desc: { en: 'Start OSPF process 1.', ar: 'بدء عملية OSPF رقم 1.' } },
          { cmd: 'router-id 1.1.1.1', desc: { en: 'Manually set the OSPF router ID.', ar: 'تعيين معرّف راوتر OSPF يدويًا.' } },
          { cmd: 'network 10.0.0.0 0.0.0.255 area 0', desc: { en: 'Advertise a network into area 0.', ar: 'الإعلان عن شبكة في المنطقة 0.' } },
          { cmd: 'show ip ospf neighbor', desc: { en: 'Verify OSPF adjacencies.', ar: 'التحقق من تجاورات OSPF.' } }
        ],
        lab: {
          title: { en: 'Lab: Single-Area OSPF', ar: 'مختبر: OSPF بمنطقة واحدة' },
          objective: { en: 'Run OSPF area 0 between three routers so every LAN can reach the others.', ar: 'شغّل OSPF المنطقة 0 بين ثلاثة راوترات لتصل كل شبكة محلية للأخرى.' },
          topology: '[R1]---[R2]---[R3]  (each with a LAN)',
          steps: [
            { en: 'Configure interface IPs and loopbacks for router IDs.', ar: 'هيّئ عناوين الواجهات و loopbacks لمعرّفات الراوتر.' },
            { en: 'Enable router ospf 1 on each router.', ar: 'فعّل router ospf 1 على كل راوتر.' },
            { en: 'Advertise the connected networks into area 0 with wildcard masks.', ar: 'أعلن عن الشبكات المتصلة في المنطقة 0 بأقنعة wildcard.' },
            { en: 'Verify neighbors and routes.', ar: 'تحقق من الجيران والمسارات.' }
          ],
          verify: { en: 'show ip ospf neighbor shows FULL adjacencies; show ip route shows O routes; end-to-end ping works.', ar: 'show ip ospf neighbor يُظهر تجاورات FULL؛ show ip route يُظهر مسارات O؛ وينجح ping من طرف لطرف.' }
        },
        quiz: [
          { q: { en: 'OSPF is what type of routing protocol?', ar: 'OSPF أي نوع من بروتوكولات التوجيه؟' }, options: [{ en: 'Distance vector', ar: 'متجه المسافة' }, { en: 'Link-state', ar: 'حالة الوصلة' }, { en: 'Path vector', ar: 'متجه المسار' }, { en: 'Static', ar: 'ثابت' }], answer: 1, explanation: { en: 'OSPF is a link-state IGP using SPF/Dijkstra.', ar: 'OSPF بروتوكول حالة-وصلة يستخدم SPF/Dijkstra.' } },
          { q: { en: 'Which area is the OSPF backbone?', ar: 'أي منطقة هي العمود الفقري لـ OSPF؟' }, options: [{ en: 'Area 1', ar: 'المنطقة 1' }, { en: 'Area 0', ar: 'المنطقة 0' }, { en: 'Area 100', ar: 'المنطقة 100' }, { en: 'Any area', ar: 'أي منطقة' }], answer: 1, explanation: { en: 'Area 0 is the backbone all other areas connect to.', ar: 'المنطقة 0 هي العمود الفقري الذي تتصل به كل المناطق.' } },
          { q: { en: 'What wildcard mask matches a /24 network in OSPF?', ar: 'أي قناع wildcard يطابق شبكة /24 في OSPF؟' }, options: [{ en: '255.255.255.0', ar: '255.255.255.0' }, { en: '0.0.0.255', ar: '0.0.0.255' }, { en: '0.0.0.0', ar: '0.0.0.0' }, { en: '0.255.255.255', ar: '0.255.255.255' }], answer: 1, explanation: { en: 'The wildcard (inverse) of /24 is 0.0.0.255.', ar: 'الـ wildcard (العكسي) لـ /24 هو 0.0.0.255.' } }
        ],
        flashcards: [
          { front: { en: 'OSPF metric is based on?', ar: 'مقياس OSPF يعتمد على؟' }, back: { en: 'Cost = 10^8 / bandwidth.', ar: 'التكلفة = 10^8 / النطاق.' } },
          { front: { en: 'OSPF backbone area?', ar: 'منطقة العمود الفقري لـ OSPF؟' }, back: { en: 'Area 0.', ar: 'المنطقة 0.' } }
        ]
      }
    ]
  });
})();
