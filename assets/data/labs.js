(function () {
  const D = window.NS_DATA = window.NS_DATA || {};
  D.labs = (D.labs || []).concat([

    /* ------------------------------------------------------------------ */
    /* LAB 1 — Basic Router & Switch Setup                                 */
    /* ------------------------------------------------------------------ */
    {
      id: 'basic-router-switch-setup',
      difficulty: 'beginner',
      title: {
        en: 'Basic Router & Switch Setup',
        ar: 'الإعداد الأساسي للراوتر والسويتش'
      },
      objective: {
        en: 'Configure hostnames, passwords, banners, and basic interface settings on a router and a switch, then verify connectivity between two PCs.',
        ar: 'ضبط أسماء الأجهزة وكلمات المرور والبانرات وإعدادات الواجهات الأساسية على راوتر وسويتش، ثم التحقق من الاتصال بين جهازين.'
      },
      topology: `
  PC-A                        PC-B
  |                            |
  Fa0/1                      Fa0/2
  [Switch SW1] ---- Gi0/0 [Router R1]
                    Gi0/0
                    192.168.1.1/24

  PC-A: 192.168.1.10/24  GW: 192.168.1.1
  PC-B: 192.168.1.20/24  GW: 192.168.1.1
`,
      requirements: [
        { en: 'Packet Tracer 8.x or GNS3 with Cisco IOS image', ar: 'Packet Tracer 8.x أو GNS3 مع صورة Cisco IOS' },
        { en: 'One router (Cisco 2911 or similar) and one switch (Cisco 2960)', ar: 'راوتر واحد (Cisco 2911 أو مشابه) وسويتش واحد (Cisco 2960)' },
        { en: 'Two end PCs connected to switch ports Fa0/1 and Fa0/2', ar: 'جهازا كمبيوتر موصولان بمنافذ Fa0/1 و Fa0/2 على السويتش' },
        { en: 'Console cable access to configure devices', ar: 'كابل كونسول للوصول إلى الأجهزة وتهيئتها' }
      ],
      steps: [
        {
          en: 'Step 1 — Enter privileged EXEC mode on the router: connect via console, type `enable`, then enter global configuration with `configure terminal`.',
          ar: 'الخطوة 1 — ادخل وضع EXEC المتميز على الراوتر: اتصل عبر الكونسول، اكتب `enable`، ثم ادخل الإعداد العام بـ `configure terminal`.'
        },
        {
          en: 'Step 2 — Set the hostname: `hostname R1`. Configure the enable secret: `enable secret cisco123`. Set console and VTY passwords: `line console 0`, `password cisco`, `login`; then `line vty 0 4`, `password cisco`, `login`.',
          ar: 'الخطوة 2 — حدد اسم الجهاز: `hostname R1`. ضع كلمة مرور enable secret: `enable secret cisco123`. حدد كلمات مرور الكونسول و VTY: `line console 0`, `password cisco`, `login`؛ ثم `line vty 0 4`, `password cisco`, `login`.'
        },
        {
          en: 'Step 3 — Configure a MOTD banner: `banner motd # Authorized access only! #`.',
          ar: 'الخطوة 3 — ضبط بانر MOTD: `banner motd # مرخص للوصول المصرح به فقط! #`.'
        },
        {
          en: 'Step 4 — Configure the router LAN interface: `interface GigabitEthernet0/0`, `ip address 192.168.1.1 255.255.255.0`, `no shutdown`, `description LAN Interface`.',
          ar: 'الخطوة 4 — إعداد واجهة الشبكة المحلية على الراوتر: `interface GigabitEthernet0/0`, `ip address 192.168.1.1 255.255.255.0`, `no shutdown`, `description LAN Interface`.'
        },
        {
          en: 'Step 5 — Save the configuration: `end`, then `copy running-config startup-config` (confirm with Enter).',
          ar: 'الخطوة 5 — احفظ الإعداد: `end`، ثم `copy running-config startup-config` (اضغط Enter للتأكيد).'
        },
        {
          en: 'Step 6 — Repeat hostname, password, and banner steps on switch SW1. Configure the management VLAN interface: `interface vlan 1`, `ip address 192.168.1.2 255.255.255.0`, `no shutdown`. Set the default gateway: `ip default-gateway 192.168.1.1`.',
          ar: 'الخطوة 6 — كرر خطوات الاسم وكلمة المرور والبانر على السويتش SW1. اضبط واجهة VLAN الإدارية: `interface vlan 1`, `ip address 192.168.1.2 255.255.255.0`, `no shutdown`. ضع البوابة الافتراضية: `ip default-gateway 192.168.1.1`.'
        },
        {
          en: 'Step 7 — Assign IP addresses to PC-A (192.168.1.10/24, GW 192.168.1.1) and PC-B (192.168.1.20/24, GW 192.168.1.1) using their desktop IP configuration panels.',
          ar: 'الخطوة 7 — خصص عناوين IP لـ PC-A (192.168.1.10/24، البوابة 192.168.1.1) و PC-B (192.168.1.20/24، البوابة 192.168.1.1) من لوحة إعداد IP على سطح المكتب.'
        },
        {
          en: 'Step 8 — Encrypt all plain-text passwords: `service password-encryption`. Disable unused router interfaces with `shutdown` to reduce attack surface.',
          ar: 'الخطوة 8 — شفّر كل كلمات المرور النصية: `service password-encryption`. أغلق واجهات الراوتر غير المستخدمة بـ `shutdown` لتقليل سطح الهجوم.'
        }
      ],
      config: `! === Router R1 Configuration ===
hostname R1
enable secret cisco123
service password-encryption
banner motd # Authorized access only! #
!
line console 0
 password cisco
 login
line vty 0 4
 password cisco
 login
!
interface GigabitEthernet0/0
 description LAN Interface
 ip address 192.168.1.1 255.255.255.0
 no shutdown
!
end

! === Switch SW1 Configuration ===
hostname SW1
enable secret cisco123
service password-encryption
!
ip default-gateway 192.168.1.1
interface vlan 1
 ip address 192.168.1.2 255.255.255.0
 no shutdown
!
end`,
      verify: {
        en: 'Run `show running-config` on both devices to confirm settings. From PC-A, ping 192.168.1.20 (PC-B) and 192.168.1.1 (router). Run `show interfaces GigabitEthernet0/0` on R1 — line protocol must be "up/up".',
        ar: 'نفّذ `show running-config` على كلا الجهازين للتحقق من الإعدادات. من PC-A، نفّذ ping إلى 192.168.1.20 (PC-B) و 192.168.1.1 (الراوتر). نفّذ `show interfaces GigabitEthernet0/0` على R1 — يجب أن يكون البروتوكول "up/up".'
      }
    },

    /* ------------------------------------------------------------------ */
    /* LAB 2 — VLANs & Trunking Between Two Switches                      */
    /* ------------------------------------------------------------------ */
    {
      id: 'vlans-and-trunking',
      difficulty: 'beginner',
      title: {
        en: 'VLANs & Trunking Between Two Switches',
        ar: 'الشبكات المحلية الافتراضية (VLANs) والتجميع بين سويتشين'
      },
      objective: {
        en: 'Create VLANs 10 (Sales) and 20 (IT) on two switches, assign access ports, configure an 802.1Q trunk between switches, and verify intra-VLAN reachability.',
        ar: 'إنشاء VLAN 10 (المبيعات) و VLAN 20 (تقنية المعلومات) على سويتشين، تخصيص منافذ الوصول، ضبط تجميع 802.1Q بين السويتشين، والتحقق من الاتصال داخل كل VLAN.'
      },
      topology: `
  PC-Sales-A       PC-IT-A         PC-Sales-B       PC-IT-B
  192.168.10.1     192.168.20.1    192.168.10.2     192.168.20.2
       |                |               |                |
     Fa0/1           Fa0/2            Fa0/1           Fa0/2
  [------- SW1 --------]           [------- SW2 --------]
         Gi0/1 ---- Gi0/1   (802.1Q Trunk)
`,
      requirements: [
        { en: 'Two Cisco 2960 switches connected via GigabitEthernet trunk link', ar: 'سويتشان Cisco 2960 موصولان عبر رابط GigabitEthernet كجذع (trunk)' },
        { en: 'Four PCs: two per switch, one in each VLAN', ar: 'أربعة أجهزة كمبيوتر: اثنان لكل سويتش، واحد في كل VLAN' },
        { en: 'VLANs: 10 (Sales, 192.168.10.0/24) and 20 (IT, 192.168.20.0/24)', ar: 'شبكتان: VLAN 10 (المبيعات، 192.168.10.0/24) و VLAN 20 (تقنية المعلومات، 192.168.20.0/24)' }
      ],
      steps: [
        {
          en: 'Step 1 — On SW1, create VLANs in the VLAN database: `vlan 10`, `name Sales`, `exit`, `vlan 20`, `name IT`, `exit`.',
          ar: 'الخطوة 1 — على SW1، أنشئ VLANs في قاعدة بيانات VLAN: `vlan 10`، `name Sales`، `exit`، `vlan 20`، `name IT`، `exit`.'
        },
        {
          en: 'Step 2 — Assign PC-Sales-A port as access VLAN 10 on SW1: `interface Fa0/1`, `switchport mode access`, `switchport access vlan 10`.',
          ar: 'الخطوة 2 — خصص منفذ PC-Sales-A كوصول VLAN 10 على SW1: `interface Fa0/1`, `switchport mode access`, `switchport access vlan 10`.'
        },
        {
          en: 'Step 3 — Assign PC-IT-A port as access VLAN 20 on SW1: `interface Fa0/2`, `switchport mode access`, `switchport access vlan 20`.',
          ar: 'الخطوة 3 — خصص منفذ PC-IT-A كوصول VLAN 20 على SW1: `interface Fa0/2`, `switchport mode access`, `switchport access vlan 20`.'
        },
        {
          en: 'Step 4 — Configure the trunk between SW1 and SW2: on SW1, `interface GigabitEthernet0/1`, `switchport mode trunk`, `switchport trunk native vlan 99`, `switchport trunk allowed vlan 10,20`.',
          ar: 'الخطوة 4 — اضبط الجذع بين SW1 و SW2: على SW1، `interface GigabitEthernet0/1`, `switchport mode trunk`, `switchport trunk native vlan 99`, `switchport trunk allowed vlan 10,20`.'
        },
        {
          en: 'Step 5 — Repeat Steps 1-4 on SW2 (create VLANs 10 & 20, assign Fa0/1 to VLAN 10, Fa0/2 to VLAN 20, configure Gi0/1 as trunk).',
          ar: 'الخطوة 5 — كرر الخطوات 1-4 على SW2 (أنشئ VLANs 10 و 20، خصص Fa0/1 للـ VLAN 10، و Fa0/2 للـ VLAN 20، اضبط Gi0/1 كجذع).'
        },
        {
          en: 'Step 6 — Verify VLANs exist on both switches: `show vlan brief`. Confirm ports appear in the correct VLAN column.',
          ar: 'الخطوة 6 — تحقق من وجود VLANs على كلا السويتشين: `show vlan brief`. تأكد أن المنافذ تظهر في عمود VLAN الصحيح.'
        },
        {
          en: 'Step 7 — Verify the trunk: `show interfaces GigabitEthernet0/1 trunk`. Confirm Mode=on, Native VLAN=99, VLANs allowed and active.',
          ar: 'الخطوة 7 — تحقق من الجذع: `show interfaces GigabitEthernet0/1 trunk`. تأكد أن Mode=on، Native VLAN=99، و VLANs المسموح بها ونشطة.'
        },
        {
          en: 'Step 8 — Assign IP addresses to PCs. PC-Sales-A: 192.168.10.1/24; PC-Sales-B: 192.168.10.2/24; PC-IT-A: 192.168.20.1/24; PC-IT-B: 192.168.20.2/24.',
          ar: 'الخطوة 8 — خصص عناوين IP للأجهزة. PC-Sales-A: 192.168.10.1/24؛ PC-Sales-B: 192.168.10.2/24؛ PC-IT-A: 192.168.20.1/24؛ PC-IT-B: 192.168.20.2/24.'
        }
      ],
      config: `! === SW1 Configuration ===
hostname SW1
vlan 10
 name Sales
vlan 20
 name IT
!
interface FastEthernet0/1
 switchport mode access
 switchport access vlan 10
interface FastEthernet0/2
 switchport mode access
 switchport access vlan 20
!
interface GigabitEthernet0/1
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 10,20
end

! === SW2 Configuration (mirror of SW1) ===
hostname SW2
vlan 10
 name Sales
vlan 20
 name IT
!
interface FastEthernet0/1
 switchport mode access
 switchport access vlan 10
interface FastEthernet0/2
 switchport mode access
 switchport access vlan 20
!
interface GigabitEthernet0/1
 switchport mode trunk
 switchport trunk native vlan 99
 switchport trunk allowed vlan 10,20
end`,
      verify: {
        en: 'From PC-Sales-A ping PC-Sales-B (192.168.10.2) — should succeed. From PC-Sales-A ping PC-IT-A (192.168.20.1) — should FAIL (no inter-VLAN routing yet). Run `show vlan brief` and `show interfaces trunk` on both switches to confirm.',
        ar: 'من PC-Sales-A نفّذ ping إلى PC-Sales-B (192.168.10.2) — يجب أن ينجح. من PC-Sales-A نفّذ ping إلى PC-IT-A (192.168.20.1) — يجب أن يفشل (لا يوجد توجيه بين VLANs بعد). نفّذ `show vlan brief` و `show interfaces trunk` على كلا السويتشين للتأكيد.'
      }
    },

    /* ------------------------------------------------------------------ */
    /* LAB 3 — Inter-VLAN Routing (Router-on-a-Stick)                     */
    /* ------------------------------------------------------------------ */
    {
      id: 'inter-vlan-routing-roas',
      difficulty: 'intermediate',
      title: {
        en: 'Inter-VLAN Routing (Router-on-a-Stick)',
        ar: 'التوجيه بين VLANs (Router-on-a-Stick)'
      },
      objective: {
        en: 'Configure sub-interfaces on a router to enable routing between VLAN 10 (Sales) and VLAN 20 (IT) using a single physical trunk link.',
        ar: 'ضبط الواجهات الفرعية على الراوتر لتمكين التوجيه بين VLAN 10 (المبيعات) و VLAN 20 (تقنية المعلومات) باستخدام رابط جذع فيزيائي واحد.'
      },
      topology: `
  PC-Sales          PC-IT
  192.168.10.10     192.168.20.10
  GW:10.1           GW:20.1
       |                |
     Fa0/1           Fa0/2
  [---------- SW1 ----------]
              Gi0/1 (trunk)
              |
             Gi0/0
          [Router R1]
          Gi0/0.10 = 192.168.10.1/24
          Gi0/0.20 = 192.168.20.1/24
`,
      requirements: [
        { en: 'One Cisco 2911 router with a GigabitEthernet interface', ar: 'راوتر Cisco 2911 واحد مع واجهة GigabitEthernet' },
        { en: 'One Cisco 2960 switch with VLANs 10 and 20 already configured', ar: 'سويتش Cisco 2960 واحد مع VLANs 10 و 20 محددة مسبقاً' },
        { en: 'Two PCs in different VLANs needing inter-VLAN communication', ar: 'جهازا كمبيوتر في VLANs مختلفة يحتاجان للتواصل' },
        { en: 'Trunk link between switch Gi0/1 and router Gi0/0', ar: 'رابط جذع بين Gi0/1 على السويتش و Gi0/0 على الراوتر' }
      ],
      steps: [
        {
          en: 'Step 1 — Ensure VLANs 10 and 20 exist on SW1 and ports Fa0/1, Fa0/2 are set as access ports (VLAN 10 and 20 respectively) as done in Lab 2.',
          ar: 'الخطوة 1 — تأكد من وجود VLANs 10 و 20 على SW1 وأن المنافذ Fa0/1 و Fa0/2 معيّنة كمنافذ وصول (VLAN 10 و 20 على التوالي) كما في المختبر 2.'
        },
        {
          en: 'Step 2 — Configure SW1 Gi0/1 as an 802.1Q trunk toward the router: `interface Gi0/1`, `switchport mode trunk`, `switchport trunk allowed vlan 10,20`.',
          ar: 'الخطوة 2 — اضبط Gi0/1 على SW1 كجذع 802.1Q نحو الراوتر: `interface Gi0/1`, `switchport mode trunk`, `switchport trunk allowed vlan 10,20`.'
        },
        {
          en: 'Step 3 — On router R1, enable the physical interface without an IP: `interface GigabitEthernet0/0`, `no ip address`, `no shutdown`.',
          ar: 'الخطوة 3 — على الراوتر R1، مكّن الواجهة الفيزيائية بدون IP: `interface GigabitEthernet0/0`, `no ip address`, `no shutdown`.'
        },
        {
          en: 'Step 4 — Create sub-interface for VLAN 10: `interface GigabitEthernet0/0.10`, `encapsulation dot1Q 10`, `ip address 192.168.10.1 255.255.255.0`, `description Gateway-VLAN10`.',
          ar: 'الخطوة 4 — أنشئ الواجهة الفرعية لـ VLAN 10: `interface GigabitEthernet0/0.10`, `encapsulation dot1Q 10`, `ip address 192.168.10.1 255.255.255.0`, `description Gateway-VLAN10`.'
        },
        {
          en: 'Step 5 — Create sub-interface for VLAN 20: `interface GigabitEthernet0/0.20`, `encapsulation dot1Q 20`, `ip address 192.168.20.1 255.255.255.0`, `description Gateway-VLAN20`.',
          ar: 'الخطوة 5 — أنشئ الواجهة الفرعية لـ VLAN 20: `interface GigabitEthernet0/0.20`, `encapsulation dot1Q 20`, `ip address 192.168.20.1 255.255.255.0`, `description Gateway-VLAN20`.'
        },
        {
          en: 'Step 6 — Set PC-Sales gateway to 192.168.10.1 and PC-IT gateway to 192.168.20.1.',
          ar: 'الخطوة 6 — اضبط بوابة PC-Sales على 192.168.10.1 وبوابة PC-IT على 192.168.20.1.'
        },
        {
          en: 'Step 7 — Verify sub-interfaces: `show ip interface brief`. Both Gi0/0.10 and Gi0/0.20 must show "up/up" with correct IP addresses.',
          ar: 'الخطوة 7 — تحقق من الواجهات الفرعية: `show ip interface brief`. يجب أن تظهر Gi0/0.10 و Gi0/0.20 بحالة "up/up" مع عناوين IP الصحيحة.'
        },
        {
          en: 'Step 8 — Test inter-VLAN routing: from PC-Sales (192.168.10.10) ping PC-IT (192.168.20.10). Also verify the routing table on R1: `show ip route`.',
          ar: 'الخطوة 8 — اختبر التوجيه بين VLANs: من PC-Sales (192.168.10.10) نفّذ ping إلى PC-IT (192.168.20.10). تحقق أيضاً من جدول التوجيه على R1: `show ip route`.'
        }
      ],
      config: `! === Router R1 Sub-interface Configuration ===
hostname R1
!
interface GigabitEthernet0/0
 no ip address
 no shutdown
!
interface GigabitEthernet0/0.10
 description Gateway-VLAN10
 encapsulation dot1Q 10
 ip address 192.168.10.1 255.255.255.0
!
interface GigabitEthernet0/0.20
 description Gateway-VLAN20
 encapsulation dot1Q 20
 ip address 192.168.20.1 255.255.255.0
!
end

! === Switch SW1 Trunk Port ===
interface GigabitEthernet0/1
 switchport mode trunk
 switchport trunk allowed vlan 10,20
end`,
      verify: {
        en: 'From PC-Sales ping PC-IT — packets should now cross VLANs successfully. On R1 run `show ip route` to see connected routes C 192.168.10.0 and C 192.168.20.0. Run `show interfaces GigabitEthernet0/0.10` to confirm encapsulation is dot1q and VLAN 10.',
        ar: 'من PC-Sales نفّذ ping إلى PC-IT — يجب أن تعبر الحزم بين VLANs بنجاح. على R1 نفّذ `show ip route` لرؤية المسارات المتصلة C 192.168.10.0 و C 192.168.20.0. نفّذ `show interfaces GigabitEthernet0/0.10` للتأكد من أن التغليف dot1q و VLAN 10.'
      }
    },

    /* ------------------------------------------------------------------ */
    /* LAB 4 — Static & Default Routing                                    */
    /* ------------------------------------------------------------------ */
    {
      id: 'static-and-default-routing',
      difficulty: 'intermediate',
      title: {
        en: 'Static & Default Routing (Three Routers)',
        ar: 'التوجيه الثابت والافتراضي (ثلاثة راوترات)'
      },
      objective: {
        en: 'Connect three routers in a chain, configure static routes for full end-to-end connectivity, and add a default route on R1 pointing to an upstream ISP.',
        ar: 'ربط ثلاثة راوترات في سلسلة، ضبط مسارات ثابتة لاتصال كامل من طرف إلى طرف، وإضافة مسار افتراضي على R1 يشير إلى مزود خدمة الإنترنت الأعلى.'
      },
      topology: `
  PC-A               R1                R2                R3              PC-C
  10.1.1.10/24  Gi0/0  Gi0/1     Gi0/0  Gi0/1      Gi0/0  Gi0/1   10.3.3.10/24
  GW:10.1.1.1 ------ 10.1.1.1  10.12.12.1--10.12.12.2  10.23.23.1--10.23.23.2 ------ 10.3.3.1
                              Serial links (or Gig point-to-point)
`,
      requirements: [
        { en: 'Three routers: R1, R2, R3 (Cisco 2911)', ar: 'ثلاثة راوترات: R1 و R2 و R3 (Cisco 2911)' },
        { en: 'Point-to-point links between R1-R2 (10.12.12.0/30) and R2-R3 (10.23.23.0/30)', ar: 'روابط نقطة-إلى-نقطة بين R1-R2 (10.12.12.0/30) و R2-R3 (10.23.23.0/30)' },
        { en: 'Two PCs: PC-A on R1 LAN (10.1.1.0/24) and PC-C on R3 LAN (10.3.3.0/24)', ar: 'جهازا كمبيوتر: PC-A في شبكة R1 المحلية (10.1.1.0/24) و PC-C في شبكة R3 المحلية (10.3.3.0/24)' }
      ],
      steps: [
        {
          en: 'Step 1 — Configure R1 LAN interface Gi0/0: `ip address 10.1.1.1 255.255.255.0`, `no shutdown`. Configure R1 WAN interface Gi0/1: `ip address 10.12.12.1 255.255.255.252`, `no shutdown`.',
          ar: 'الخطوة 1 — اضبط واجهة LAN Gi0/0 على R1: `ip address 10.1.1.1 255.255.255.0`, `no shutdown`. اضبط واجهة WAN Gi0/1 على R1: `ip address 10.12.12.1 255.255.255.252`, `no shutdown`.'
        },
        {
          en: 'Step 2 — Configure R2 interfaces: Gi0/0 `ip address 10.12.12.2 255.255.255.252`; Gi0/1 `ip address 10.23.23.1 255.255.255.252`. No LAN on R2 for this lab.',
          ar: 'الخطوة 2 — اضبط واجهات R2: Gi0/0 `ip address 10.12.12.2 255.255.255.252`؛ Gi0/1 `ip address 10.23.23.1 255.255.255.252`. لا شبكة محلية على R2 في هذا المختبر.'
        },
        {
          en: 'Step 3 — Configure R3 interfaces: Gi0/0 `ip address 10.23.23.2 255.255.255.252`; Gi0/1 (LAN) `ip address 10.3.3.1 255.255.255.0`.',
          ar: 'الخطوة 3 — اضبط واجهات R3: Gi0/0 `ip address 10.23.23.2 255.255.255.252`؛ Gi0/1 (LAN) `ip address 10.3.3.1 255.255.255.0`.'
        },
        {
          en: 'Step 4 — Add static routes on R1 to reach R3 LAN and R2-R3 link: `ip route 10.23.23.0 255.255.255.252 10.12.12.2` and `ip route 10.3.3.0 255.255.255.0 10.12.12.2`.',
          ar: 'الخطوة 4 — أضف مسارات ثابتة على R1 للوصول إلى شبكة R3 المحلية ورابط R2-R3: `ip route 10.23.23.0 255.255.255.252 10.12.12.2` و `ip route 10.3.3.0 255.255.255.0 10.12.12.2`.'
        },
        {
          en: 'Step 5 — Add static routes on R2: `ip route 10.1.1.0 255.255.255.0 10.12.12.1` (toward R1 LAN) and `ip route 10.3.3.0 255.255.255.0 10.23.23.2` (toward R3 LAN).',
          ar: 'الخطوة 5 — أضف مسارات ثابتة على R2: `ip route 10.1.1.0 255.255.255.0 10.12.12.1` (نحو شبكة R1) و `ip route 10.3.3.0 255.255.255.0 10.23.23.2` (نحو شبكة R3).'
        },
        {
          en: 'Step 6 — Add static routes on R3: `ip route 10.1.1.0 255.255.255.0 10.23.23.1` and `ip route 10.12.12.0 255.255.255.252 10.23.23.1`.',
          ar: 'الخطوة 6 — أضف مسارات ثابتة على R3: `ip route 10.1.1.0 255.255.255.0 10.23.23.1` و `ip route 10.12.12.0 255.255.255.252 10.23.23.1`.'
        },
        {
          en: 'Step 7 — Add a default route on R1 simulating an ISP link: `ip route 0.0.0.0 0.0.0.0 10.12.12.2`. This represents the "gateway of last resort".',
          ar: 'الخطوة 7 — أضف مساراً افتراضياً على R1 لمحاكاة رابط ISP: `ip route 0.0.0.0 0.0.0.0 10.12.12.2`. هذا يمثل "بوابة الملاذ الأخير".'
        },
        {
          en: 'Step 8 — Verify routing tables: `show ip route` on all three routers. Look for S (static) and S* (default) prefixes. Trace the path: `traceroute 10.3.3.10` from PC-A.',
          ar: 'الخطوة 8 — تحقق من جداول التوجيه: `show ip route` على الثلاثة راوترات. ابحث عن S (ثابت) و S* (افتراضي). تتبع المسار: `traceroute 10.3.3.10` من PC-A.'
        }
      ],
      config: `! === R1 Configuration ===
hostname R1
ip route 10.23.23.0 255.255.255.252 10.12.12.2
ip route 10.3.3.0 255.255.255.0 10.12.12.2
ip route 0.0.0.0 0.0.0.0 10.12.12.2
interface GigabitEthernet0/0
 ip address 10.1.1.1 255.255.255.0
 no shutdown
interface GigabitEthernet0/1
 ip address 10.12.12.1 255.255.255.252
 no shutdown

! === R2 Configuration ===
hostname R2
ip route 10.1.1.0 255.255.255.0 10.12.12.1
ip route 10.3.3.0 255.255.255.0 10.23.23.2
interface GigabitEthernet0/0
 ip address 10.12.12.2 255.255.255.252
 no shutdown
interface GigabitEthernet0/1
 ip address 10.23.23.1 255.255.255.252
 no shutdown

! === R3 Configuration ===
hostname R3
ip route 10.1.1.0 255.255.255.0 10.23.23.1
ip route 10.12.12.0 255.255.255.252 10.23.23.1
interface GigabitEthernet0/0
 ip address 10.23.23.2 255.255.255.252
 no shutdown
interface GigabitEthernet0/1
 ip address 10.3.3.1 255.255.255.0
 no shutdown`,
      verify: {
        en: 'From PC-A (10.1.1.10) ping PC-C (10.3.3.10). Run `show ip route` on R1 — verify S* 0.0.0.0/0 default route and S entries for remote networks. Use `traceroute` to confirm the path goes R1 -> R2 -> R3.',
        ar: 'من PC-A (10.1.1.10) نفّذ ping إلى PC-C (10.3.3.10). نفّذ `show ip route` على R1 — تحقق من المسار الافتراضي S* 0.0.0.0/0 والمدخلات S للشبكات البعيدة. استخدم `traceroute` للتأكد من أن المسار يمر R1 -> R2 -> R3.'
      }
    },

    /* ------------------------------------------------------------------ */
    /* LAB 5 — Single-Area OSPF                                            */
    /* ------------------------------------------------------------------ */
    {
      id: 'single-area-ospf',
      difficulty: 'intermediate',
      title: {
        en: 'Single-Area OSPF (Area 0)',
        ar: 'OSPF أحادي المنطقة (المنطقة 0)'
      },
      objective: {
        en: 'Enable OSPF process on three routers in Area 0, advertise all connected networks, verify DR/BDR election on a multi-access segment, and confirm full OSPF adjacency.',
        ar: 'تفعيل عملية OSPF على ثلاثة راوترات في المنطقة 0، الإعلان عن جميع الشبكات المتصلة، التحقق من انتخاب DR/BDR على قطعة متعددة الوصول، وتأكيد الجوار الكامل لـ OSPF.'
      },
      topology: `
  LAN-A              R1               R2               R3          LAN-C
  10.1.1.0/24  Gi0/0  Gi0/1      Gi0/0  Gi0/1    Gi0/0  Gi0/1  10.3.3.0/24
                    10.12.12.0/30       10.23.23.0/30

  All routers in OSPF Area 0, Process ID 1
  Router-IDs assigned via loopback: R1=1.1.1.1, R2=2.2.2.2, R3=3.3.3.3
`,
      requirements: [
        { en: 'Three routers configured with IP addresses from Lab 4', ar: 'ثلاثة راوترات مضبوطة بعناوين IP من المختبر 4' },
        { en: 'Loopback interfaces will be created to stabilize OSPF Router IDs', ar: 'ستُنشأ واجهات loopback لتثبيت معرفات راوترات OSPF' },
        { en: 'OSPF process ID 1, Area 0 on all routers', ar: 'معرف عملية OSPF 1، المنطقة 0 على جميع الراوترات' }
      ],
      steps: [
        {
          en: 'Step 1 — Create loopback interfaces for stable Router IDs. On R1: `interface Loopback0`, `ip address 1.1.1.1 255.255.255.255`. On R2: Loopback0 2.2.2.2/32. On R3: Loopback0 3.3.3.3/32.',
          ar: 'الخطوة 1 — أنشئ واجهات loopback لمعرفات راوترات OSPF ثابتة. على R1: `interface Loopback0`, `ip address 1.1.1.1 255.255.255.255`. على R2: Loopback0 2.2.2.2/32. على R3: Loopback0 3.3.3.3/32.'
        },
        {
          en: 'Step 2 — Enable OSPF on R1: `router ospf 1`, `router-id 1.1.1.1`, then advertise networks: `network 10.1.1.0 0.0.0.255 area 0` and `network 10.12.12.0 0.0.0.3 area 0`.',
          ar: 'الخطوة 2 — فعّل OSPF على R1: `router ospf 1`, `router-id 1.1.1.1`، ثم أعلن الشبكات: `network 10.1.1.0 0.0.0.255 area 0` و `network 10.12.12.0 0.0.0.3 area 0`.'
        },
        {
          en: 'Step 3 — Enable OSPF on R2: `router ospf 1`, `router-id 2.2.2.2`, advertise: `network 10.12.12.0 0.0.0.3 area 0`, `network 10.23.23.0 0.0.0.3 area 0`.',
          ar: 'الخطوة 3 — فعّل OSPF على R2: `router ospf 1`, `router-id 2.2.2.2`، أعلن: `network 10.12.12.0 0.0.0.3 area 0`, `network 10.23.23.0 0.0.0.3 area 0`.'
        },
        {
          en: 'Step 4 — Enable OSPF on R3: `router ospf 1`, `router-id 3.3.3.3`, advertise: `network 10.23.23.0 0.0.0.3 area 0`, `network 10.3.3.0 0.0.0.255 area 0`.',
          ar: 'الخطوة 4 — فعّل OSPF على R3: `router ospf 1`, `router-id 3.3.3.3`، أعلن: `network 10.23.23.0 0.0.0.3 area 0`, `network 10.3.3.0 0.0.0.255 area 0`.'
        },
        {
          en: 'Step 5 — Wait 30-40 seconds for OSPF to converge (Dead interval is 40s by default). Watch for "%OSPF-5-ADJCHG" syslog messages indicating neighbor relationships forming.',
          ar: 'الخطوة 5 — انتظر 30-40 ثانية حتى يتقارب OSPF (Dead interval الافتراضي 40 ثانية). راقب رسائل "%OSPF-5-ADJCHG" في syslog تشير إلى تكوّن علاقات الجوار.'
        },
        {
          en: 'Step 6 — Verify OSPF neighbors: `show ip ospf neighbor` on all routers. State must be FULL for point-to-point links.',
          ar: 'الخطوة 6 — تحقق من جيران OSPF: `show ip ospf neighbor` على جميع الراوترات. يجب أن تكون الحالة FULL لروابط نقطة-إلى-نقطة.'
        },
        {
          en: 'Step 7 — Check OSPF route propagation: `show ip route ospf` — should show O (OSPF) routes for all remote networks.',
          ar: 'الخطوة 7 — تحقق من انتشار مسارات OSPF: `show ip route ospf` — يجب أن تظهر مسارات O (OSPF) لجميع الشبكات البعيدة.'
        },
        {
          en: 'Step 8 — Examine OSPF database: `show ip ospf database` — verify Router LSAs from all three Router IDs exist. Check cost with `show ip ospf interface brief`.',
          ar: 'الخطوة 8 — افحص قاعدة بيانات OSPF: `show ip ospf database` — تحقق من وجود Router LSAs من جميع معرفات الراوترات الثلاثة. تحقق من التكلفة بـ `show ip ospf interface brief`.'
        }
      ],
      config: `! === R1 OSPF Configuration ===
hostname R1
interface Loopback0
 ip address 1.1.1.1 255.255.255.255
router ospf 1
 router-id 1.1.1.1
 network 10.1.1.0 0.0.0.255 area 0
 network 10.12.12.0 0.0.0.3 area 0
 passive-interface GigabitEthernet0/0

! === R2 OSPF Configuration ===
hostname R2
interface Loopback0
 ip address 2.2.2.2 255.255.255.255
router ospf 1
 router-id 2.2.2.2
 network 10.12.12.0 0.0.0.3 area 0
 network 10.23.23.0 0.0.0.3 area 0

! === R3 OSPF Configuration ===
hostname R3
interface Loopback0
 ip address 3.3.3.3 255.255.255.255
router ospf 1
 router-id 3.3.3.3
 network 10.23.23.0 0.0.0.3 area 0
 network 10.3.3.0 0.0.0.255 area 0
 passive-interface GigabitEthernet0/1`,
      verify: {
        en: 'Run `show ip ospf neighbor` — all neighbors must show state FULL. Run `show ip route` and confirm O-tagged routes exist for all remote subnets. Ping from PC-A to PC-C end-to-end.',
        ar: 'نفّذ `show ip ospf neighbor` — يجب أن تُظهر جميع الجيران حالة FULL. نفّذ `show ip route` وتأكد من وجود مسارات مُعلَّمة بـ O لجميع الشبكات الفرعية البعيدة. نفّذ ping من PC-A إلى PC-C.'
      }
    },

    /* ------------------------------------------------------------------ */
    /* LAB 6 — DHCP Server + Relay Agent                                   */
    /* ------------------------------------------------------------------ */
    {
      id: 'dhcp-server-and-relay',
      difficulty: 'intermediate',
      title: {
        en: 'DHCP Server & Relay Agent',
        ar: 'خادم DHCP ووكيل الترحيل'
      },
      objective: {
        en: 'Configure a Cisco router as a DHCP server for two scopes (VLAN 10 and VLAN 20), and configure an ip helper-address on a remote router to relay DHCP requests across networks.',
        ar: 'ضبط راوتر Cisco كخادم DHCP لنطاقين (VLAN 10 و VLAN 20)، وضبط ip helper-address على راوتر بعيد لترحيل طلبات DHCP عبر الشبكات.'
      },
      topology: `
  Clients (VLAN10)    Clients (VLAN20)
  192.168.10.x/24     192.168.20.x/24
       |                   |
      SW1 (router-on-a-stick to R1)
       |
      R1 (DHCP server + gateway)
      Gi0/1 = 10.0.0.1/30
       |
      R2 (helper relay)
      Gi0/0 = 10.0.0.2/30
      Gi0/1 = 172.16.1.1/24
       |
     Clients (172.16.1.x) — DHCP relayed to R1
`,
      requirements: [
        { en: 'R1 acts as DHCP server for 192.168.10.0/24, 192.168.20.0/24, and 172.16.1.0/24', ar: 'R1 يعمل كخادم DHCP لـ 192.168.10.0/24 و 192.168.20.0/24 و 172.16.1.0/24' },
        { en: 'R2 uses ip helper-address to relay DHCP from its LAN segment to R1', ar: 'R2 يستخدم ip helper-address لترحيل DHCP من شبكته المحلية إلى R1' },
        { en: 'Reserved (excluded) IPs for gateway addresses', ar: 'عناوين IP محجوزة (مستثناة) لعناوين البوابات' }
      ],
      steps: [
        {
          en: 'Step 1 — On R1, exclude gateway and server IPs from DHCP pools: `ip dhcp excluded-address 192.168.10.1 192.168.10.10`, `ip dhcp excluded-address 192.168.20.1 192.168.20.10`, `ip dhcp excluded-address 172.16.1.1 172.16.1.10`.',
          ar: 'الخطوة 1 — على R1، استثنِ عناوين البوابة والخادم من نطاقات DHCP: `ip dhcp excluded-address 192.168.10.1 192.168.10.10`, `ip dhcp excluded-address 192.168.20.1 192.168.20.10`, `ip dhcp excluded-address 172.16.1.1 172.16.1.10`.'
        },
        {
          en: 'Step 2 — Create DHCP pool for VLAN 10: `ip dhcp pool VLAN10-POOL`, `network 192.168.10.0 255.255.255.0`, `default-router 192.168.10.1`, `dns-server 8.8.8.8`, `lease 7`.',
          ar: 'الخطوة 2 — أنشئ نطاق DHCP لـ VLAN 10: `ip dhcp pool VLAN10-POOL`, `network 192.168.10.0 255.255.255.0`, `default-router 192.168.10.1`, `dns-server 8.8.8.8`, `lease 7`.'
        },
        {
          en: 'Step 3 — Create DHCP pool for VLAN 20: `ip dhcp pool VLAN20-POOL`, `network 192.168.20.0 255.255.255.0`, `default-router 192.168.20.1`, `dns-server 8.8.8.8`, `lease 7`.',
          ar: 'الخطوة 3 — أنشئ نطاق DHCP لـ VLAN 20: `ip dhcp pool VLAN20-POOL`, `network 192.168.20.0 255.255.255.0`, `default-router 192.168.20.1`, `dns-server 8.8.8.8`, `lease 7`.'
        },
        {
          en: 'Step 4 — Create DHCP pool for the remote segment: `ip dhcp pool REMOTE-POOL`, `network 172.16.1.0 255.255.255.0`, `default-router 172.16.1.1`, `dns-server 8.8.8.8`, `lease 1`.',
          ar: 'الخطوة 4 — أنشئ نطاق DHCP للقطعة البعيدة: `ip dhcp pool REMOTE-POOL`, `network 172.16.1.0 255.255.255.0`, `default-router 172.16.1.1`, `dns-server 8.8.8.8`, `lease 1`.'
        },
        {
          en: 'Step 5 — On R2, configure the helper address on the LAN-facing interface: `interface GigabitEthernet0/1`, `ip helper-address 10.0.0.1`. This unicasts DHCP broadcasts to R1.',
          ar: 'الخطوة 5 — على R2، اضبط عنوان المساعد على الواجهة المواجهة للشبكة المحلية: `interface GigabitEthernet0/1`, `ip helper-address 10.0.0.1`. هذا يحوّل بث DHCP إلى إرسال مباشر لـ R1.'
        },
        {
          en: 'Step 6 — Set PCs to DHCP mode (automatic IP). Trigger a DHCP request by running `ipconfig /release` and `ipconfig /renew` on each PC.',
          ar: 'الخطوة 6 — اضبط الأجهزة على وضع DHCP (IP تلقائي). اطلب عنوان DHCP بتشغيل `ipconfig /release` و `ipconfig /renew` على كل جهاز.'
        },
        {
          en: 'Step 7 — Verify assigned leases on R1: `show ip dhcp binding` — lists MAC addresses and their assigned IPs. Ensure the remote segment clients show IPs from 172.16.1.0/24.',
          ar: 'الخطوة 7 — تحقق من الإيجارات المخصصة على R1: `show ip dhcp binding` — يسرد عناوين MAC وعناوين IP المخصصة لها. تأكد أن عملاء القطعة البعيدة يظهرون عناوين IP من 172.16.1.0/24.'
        },
        {
          en: 'Step 8 — Check DHCP pool statistics: `show ip dhcp pool` and `show ip dhcp conflict` to identify any address conflicts.',
          ar: 'الخطوة 8 — تحقق من إحصائيات نطاق DHCP: `show ip dhcp pool` و `show ip dhcp conflict` لتحديد أي تعارضات في العناوين.'
        }
      ],
      config: `! === R1 DHCP Server Configuration ===
hostname R1
ip dhcp excluded-address 192.168.10.1 192.168.10.10
ip dhcp excluded-address 192.168.20.1 192.168.20.10
ip dhcp excluded-address 172.16.1.1 172.16.1.10
!
ip dhcp pool VLAN10-POOL
 network 192.168.10.0 255.255.255.0
 default-router 192.168.10.1
 dns-server 8.8.8.8
 lease 7
!
ip dhcp pool VLAN20-POOL
 network 192.168.20.0 255.255.255.0
 default-router 192.168.20.1
 dns-server 8.8.8.8
 lease 7
!
ip dhcp pool REMOTE-POOL
 network 172.16.1.0 255.255.255.0
 default-router 172.16.1.1
 dns-server 8.8.8.8
 lease 1
!
! === R2 Helper Configuration ===
interface GigabitEthernet0/1
 ip helper-address 10.0.0.1`,
      verify: {
        en: 'Run `show ip dhcp binding` on R1 — verify IP-to-MAC mappings. On R2 clients, confirm they received addresses from 172.16.1.11+ range. Run `show ip dhcp pool` to see pool usage statistics.',
        ar: 'نفّذ `show ip dhcp binding` على R1 — تحقق من ربط IP بعنوان MAC. على عملاء R2، تأكد من حصولهم على عناوين من النطاق 172.16.1.11+. نفّذ `show ip dhcp pool` لرؤية إحصائيات استخدام النطاق.'
      }
    },

    /* ------------------------------------------------------------------ */
    /* LAB 7 — Standard & Extended ACLs                                    */
    /* ------------------------------------------------------------------ */
    {
      id: 'standard-extended-acls',
      difficulty: 'advanced',
      title: {
        en: 'Standard & Extended ACLs',
        ar: 'قوائم التحكم في الوصول الأساسية والموسعة'
      },
      objective: {
        en: 'Apply a standard ACL to restrict a specific host from reaching the router, then apply an extended ACL to permit HTTP but block Telnet from the Sales VLAN to the IT VLAN.',
        ar: 'تطبيق ACL أساسية لمنع مضيف معين من الوصول إلى الراوتر، ثم تطبيق ACL موسعة للسماح بـ HTTP وحظر Telnet من VLAN المبيعات إلى VLAN تقنية المعلومات.'
      },
      topology: `
  PC-Sales (192.168.10.10)     PC-Blocked (192.168.10.99)
         |                              |
        SW1 VLAN10 ---- R1 ---- SW2 VLAN20
                                        |
                               PC-IT-Server (192.168.20.50)
                               HTTP:80, Telnet:23
`,
      requirements: [
        { en: 'Inter-VLAN routing already configured (from Lab 3)', ar: 'التوجيه بين VLANs مهيأ مسبقاً (من المختبر 3)' },
        { en: 'Standard numbered ACL (1-99) placed closest to destination', ar: 'ACL رقمية أساسية (1-99) توضع أقرب للوجهة' },
        { en: 'Extended numbered ACL (100-199) placed closest to source', ar: 'ACL رقمية موسعة (100-199) توضع أقرب للمصدر' },
        { en: 'PC-IT-Server listening on TCP port 80 (HTTP) and 23 (Telnet)', ar: 'PC-IT-Server يستمع على منفذ TCP 80 (HTTP) و 23 (Telnet)' }
      ],
      steps: [
        {
          en: 'Step 1 — Create standard ACL 1 to block PC-Blocked from accessing the router VTY: `access-list 1 deny 192.168.10.99 0.0.0.0`, `access-list 1 permit any`.',
          ar: 'الخطوة 1 — أنشئ ACL أساسية رقم 1 لحظر PC-Blocked من الوصول إلى VTY الراوتر: `access-list 1 deny 192.168.10.99 0.0.0.0`, `access-list 1 permit any`.'
        },
        {
          en: 'Step 2 — Apply ACL 1 to VTY lines: `line vty 0 4`, `access-class 1 in`. This blocks only Telnet/SSH to the router itself from that host.',
          ar: 'الخطوة 2 — طبّق ACL 1 على خطوط VTY: `line vty 0 4`, `access-class 1 in`. هذا يحظر Telnet/SSH إلى الراوتر نفسه من ذلك المضيف فقط.'
        },
        {
          en: 'Step 3 — Create extended ACL 100 to allow HTTP (TCP 80) from VLAN 10 to VLAN 20, but deny Telnet (TCP 23): `access-list 100 permit tcp 192.168.10.0 0.0.0.255 192.168.20.0 0.0.0.255 eq 80`.',
          ar: 'الخطوة 3 — أنشئ ACL موسعة 100 للسماح بـ HTTP (TCP 80) من VLAN 10 إلى VLAN 20 وحظر Telnet (TCP 23): `access-list 100 permit tcp 192.168.10.0 0.0.0.255 192.168.20.0 0.0.0.255 eq 80`.'
        },
        {
          en: 'Step 4 — Add the deny Telnet rule and an implicit-permit-other rule: `access-list 100 deny tcp 192.168.10.0 0.0.0.255 192.168.20.0 0.0.0.255 eq 23`, `access-list 100 permit ip any any`.',
          ar: 'الخطوة 4 — أضف قاعدة حظر Telnet وقاعدة السماح الضمنية لغيره: `access-list 100 deny tcp 192.168.10.0 0.0.0.255 192.168.20.0 0.0.0.255 eq 23`, `access-list 100 permit ip any any`.'
        },
        {
          en: 'Step 5 — Apply extended ACL 100 inbound on R1 sub-interface facing VLAN 10 (closest to source): `interface GigabitEthernet0/0.10`, `ip access-group 100 in`.',
          ar: 'الخطوة 5 — طبّق ACL الموسعة 100 على الواجهة الفرعية R1 المواجهة لـ VLAN 10 (أقرب للمصدر): `interface GigabitEthernet0/0.10`, `ip access-group 100 in`.'
        },
        {
          en: 'Step 6 — Test: from PC-Sales try HTTP to PC-IT-Server (should work). Try Telnet to PC-IT-Server (should be blocked). Check `show access-lists 100` for match counters.',
          ar: 'الخطوة 6 — اختبر: من PC-Sales جرّب HTTP إلى PC-IT-Server (يجب أن يعمل). جرّب Telnet إلى PC-IT-Server (يجب أن يُحظر). تحقق من `show access-lists 100` لعدادات التطابق.'
        },
        {
          en: 'Step 7 — Verify ACL placement and statistics: `show ip interface GigabitEthernet0/0.10` — confirm "Inbound access list is 100". Run `show access-lists` to see hit counts.',
          ar: 'الخطوة 7 — تحقق من موضع ACL والإحصائيات: `show ip interface GigabitEthernet0/0.10` — تأكد من "Inbound access list is 100". نفّذ `show access-lists` لرؤية أعداد التطابقات.'
        },
        {
          en: 'Step 8 — Attempt Telnet from PC-Blocked to the router (should be denied by ACL 1 on VTY). Verify PC-Sales can still Telnet to the router since it is in the permitted range.',
          ar: 'الخطوة 8 — جرّب Telnet من PC-Blocked إلى الراوتر (يجب أن يُرفض بواسطة ACL 1 على VTY). تحقق من أن PC-Sales لا يزال بإمكانه Telnet إلى الراوتر لأنه في النطاق المسموح به.'
        }
      ],
      config: `! === ACL Configuration on R1 ===
! Standard ACL - restrict VTY access
access-list 1 deny 192.168.10.99 0.0.0.0
access-list 1 permit any
!
line vty 0 4
 access-class 1 in
!
! Extended ACL - permit HTTP, deny Telnet from VLAN10 to VLAN20
access-list 100 permit tcp 192.168.10.0 0.0.0.255 192.168.20.0 0.0.0.255 eq 80
access-list 100 deny tcp 192.168.10.0 0.0.0.255 192.168.20.0 0.0.0.255 eq 23
access-list 100 permit ip any any
!
interface GigabitEthernet0/0.10
 ip access-group 100 in`,
      verify: {
        en: 'Run `show access-lists` — permit and deny counters should show matches after testing. Confirm HTTP works (TCP/80 connects) and Telnet is refused (TCP/23 times out or refused) from PC-Sales to PC-IT-Server.',
        ar: 'نفّذ `show access-lists` — يجب أن تُظهر عدادات السماح والحظر تطابقات بعد الاختبار. تأكد أن HTTP يعمل (TCP/80 يتصل) وأن Telnet مرفوض (TCP/23 يتوقف أو مرفوض) من PC-Sales إلى PC-IT-Server.'
      }
    },

    /* ------------------------------------------------------------------ */
    /* LAB 8 — Port Security                                               */
    /* ------------------------------------------------------------------ */
    {
      id: 'port-security',
      difficulty: 'intermediate',
      title: {
        en: 'Port Security on Access Ports',
        ar: 'أمان المنفذ على منافذ الوصول'
      },
      objective: {
        en: 'Enable port security on switch access ports to limit MAC addresses, configure sticky learning, and test the violation mode by connecting an unauthorized device.',
        ar: 'تفعيل أمان المنفذ على منافذ وصول السويتش لتحديد عناوين MAC، ضبط التعلم اللاصق، واختبار وضع الانتهاك بتوصيل جهاز غير مصرح به.'
      },
      topology: `
  Authorized-PC         Attacker-PC
  MAC: aabb.ccdd.0001   MAC: aabb.ccdd.9999
         |                    |
       Fa0/1 (port-security)  |
       [SW1]                  |
       Fa0/2 ---- (same PC moving to new port test)
`,
      requirements: [
        { en: 'Cisco 2960 switch with access ports', ar: 'سويتش Cisco 2960 مع منافذ وصول' },
        { en: 'Port security requires access mode — cannot be applied to trunk ports', ar: 'أمان المنفذ يتطلب وضع الوصول — لا يمكن تطبيقه على منافذ الجذع' },
        { en: 'Three violation modes: protect (drop), restrict (drop + log), shutdown (err-disabled)', ar: 'ثلاثة أوضاع انتهاك: protect (إسقاط)، restrict (إسقاط + تسجيل)، shutdown (err-disabled)' }
      ],
      steps: [
        {
          en: 'Step 1 — Set port Fa0/1 to access mode: `interface FastEthernet0/1`, `switchport mode access`, `switchport access vlan 10`.',
          ar: 'الخطوة 1 — اضبط المنفذ Fa0/1 على وضع الوصول: `interface FastEthernet0/1`, `switchport mode access`, `switchport access vlan 10`.'
        },
        {
          en: 'Step 2 — Enable port security: `switchport port-security`. This enables port security with defaults (max 1 MAC, shutdown violation).',
          ar: 'الخطوة 2 — فعّل أمان المنفذ: `switchport port-security`. هذا يمكّن أمان المنفذ بالإعدادات الافتراضية (أقصاه 1 عنوان MAC، انتهاك shutdown).'
        },
        {
          en: 'Step 3 — Allow up to 2 MAC addresses: `switchport port-security maximum 2`.',
          ar: 'الخطوة 3 — اسمح بما يصل إلى 2 عنوان MAC: `switchport port-security maximum 2`.'
        },
        {
          en: 'Step 4 — Enable sticky MAC learning: `switchport port-security mac-address sticky`. The switch will learn and store MAC addresses dynamically in the running-config.',
          ar: 'الخطوة 4 — فعّل التعلم اللاصق لـ MAC: `switchport port-security mac-address sticky`. سيتعلم السويتش عناوين MAC ويخزنها تلقائياً في الإعداد الحالي.'
        },
        {
          en: 'Step 5 — Set violation mode to restrict (logs violations without shutting the port): `switchport port-security violation restrict`.',
          ar: 'الخطوة 5 — اضبط وضع الانتهاك على restrict (يسجل الانتهاكات دون إغلاق المنفذ): `switchport port-security violation restrict`.'
        },
        {
          en: 'Step 6 — Connect the authorized PC to Fa0/1 and send traffic. Run `show port-security interface Fa0/1` — the learned sticky MAC address should appear.',
          ar: 'الخطوة 6 — وصّل الجهاز المصرح به بـ Fa0/1 وأرسل حركة مرور. نفّذ `show port-security interface Fa0/1` — يجب أن يظهر عنوان MAC اللاصق المكتسب.'
        },
        {
          en: 'Step 7 — Connect the Attacker-PC to the same port Fa0/1. The violation counter should increment. Run `show port-security interface Fa0/1` and look for "Security Violation Count".',
          ar: 'الخطوة 7 — وصّل PC المهاجم بنفس المنفذ Fa0/1. يجب أن يزيد عداد الانتهاك. نفّذ `show port-security interface Fa0/1` وابحث عن "Security Violation Count".'
        },
        {
          en: 'Step 8 — Change violation mode to shutdown (`switchport port-security violation shutdown`) and repeat: the port will enter err-disabled state. Re-enable with `shutdown` then `no shutdown`.',
          ar: 'الخطوة 8 — غيّر وضع الانتهاك إلى shutdown (`switchport port-security violation shutdown`) وكرر: سيدخل المنفذ وضع err-disabled. أعد تفعيله بـ `shutdown` ثم `no shutdown`.'
        }
      ],
      config: `! === SW1 Port Security Configuration ===
hostname SW1
interface FastEthernet0/1
 switchport mode access
 switchport access vlan 10
 switchport port-security
 switchport port-security maximum 2
 switchport port-security mac-address sticky
 switchport port-security violation restrict
!
! To recover from err-disabled:
! interface FastEthernet0/1
!  shutdown
!  no shutdown`,
      verify: {
        en: 'Run `show port-security` for a summary of all secured ports. Run `show port-security interface Fa0/1` to see sticky MACs, max, current, and violation count. Run `show port-security address` to see the sticky MAC entries in detail.',
        ar: 'نفّذ `show port-security` لملخص جميع المنافذ المؤمنة. نفّذ `show port-security interface Fa0/1` لرؤية عناوين MAC اللاصقة، الحد الأقصى، الحالي، وعدد الانتهاكات. نفّذ `show port-security address` لرؤية مدخلات MAC اللاصقة بالتفصيل.'
      }
    },

    /* ------------------------------------------------------------------ */
    /* LAB 9 — EtherChannel + STP                                          */
    /* ------------------------------------------------------------------ */
    {
      id: 'etherchannel-and-stp',
      difficulty: 'advanced',
      title: {
        en: 'EtherChannel (LACP) & Spanning Tree Protocol',
        ar: 'EtherChannel (LACP) وبروتوكول الشجرة الممتدة'
      },
      objective: {
        en: 'Bundle two physical links between switches into an LACP EtherChannel, verify STP treats it as a single logical link, and manipulate STP root bridge election using priorities.',
        ar: 'تجميع رابطين فيزيائيين بين السويتشين في EtherChannel بـ LACP، التحقق من معاملة STP لها كرابط منطقي واحد، والتحكم في انتخاب جسر STP الجذر باستخدام الأولويات.'
      },
      topology: `
  [SW1] ===Fa0/23=== [SW2]
        ===Fa0/24===
  (EtherChannel Po1 - LACP)

  SW1 is intended STP root bridge (priority 4096)
  SW2 has default priority (32768)

  PC-A --- SW1 --- (Po1) --- SW2 --- PC-B
`,
      requirements: [
        { en: 'Two Cisco 2960 switches with at least two available FastEthernet or GigabitEthernet uplink ports', ar: 'سويتشان Cisco 2960 مع منفذي FastEthernet أو GigabitEthernet متاحين على الأقل' },
        { en: 'LACP (IEEE 802.3ad) mode — both sides must use "active" or one "active" + one "passive"', ar: 'وضع LACP (IEEE 802.3ad) — يجب أن يستخدم كلا الطرفين "active" أو أحدهما "active" والآخر "passive"' },
        { en: 'VLAN 10 and 20 trunk allowed on the EtherChannel', ar: 'VLAN 10 و 20 مسموح بهما كجذع على EtherChannel' }
      ],
      steps: [
        {
          en: 'Step 1 — On SW1, create the EtherChannel using LACP: `interface range FastEthernet0/23 - 24`, `channel-group 1 mode active`, `no shutdown`. This creates Port-channel1 (Po1).',
          ar: 'الخطوة 1 — على SW1، أنشئ EtherChannel باستخدام LACP: `interface range FastEthernet0/23 - 24`, `channel-group 1 mode active`, `no shutdown`. هذا ينشئ Port-channel1 (Po1).'
        },
        {
          en: 'Step 2 — On SW2, configure matching LACP: `interface range FastEthernet0/23 - 24`, `channel-group 1 mode passive`, `no shutdown`.',
          ar: 'الخطوة 2 — على SW2، اضبط LACP المطابق: `interface range FastEthernet0/23 - 24`, `channel-group 1 mode passive`, `no shutdown`.'
        },
        {
          en: 'Step 3 — Configure Po1 as a trunk on both switches: `interface Port-channel1`, `switchport mode trunk`, `switchport trunk allowed vlan 10,20`.',
          ar: 'الخطوة 3 — اضبط Po1 كجذع على كلا السويتشين: `interface Port-channel1`, `switchport mode trunk`, `switchport trunk allowed vlan 10,20`.'
        },
        {
          en: 'Step 4 — Verify EtherChannel formation: `show etherchannel summary`. Look for "SU" flags — S=Layer2, U=in use. Both Fa0/23 and Fa0/24 should show "P" (bundled).',
          ar: 'الخطوة 4 — تحقق من تكوّن EtherChannel: `show etherchannel summary`. ابحث عن علامات "SU" — S=الطبقة 2، U=قيد الاستخدام. يجب أن تُظهر Fa0/23 و Fa0/24 علامة "P" (مجمّعة).'
        },
        {
          en: 'Step 5 — Set SW1 as the STP root bridge for both VLANs: `spanning-tree vlan 10,20 priority 4096`. This is below the default of 32768.',
          ar: 'الخطوة 5 — اضبط SW1 كجسر STP الجذر لكلا VLANs: `spanning-tree vlan 10,20 priority 4096`. هذا أقل من الافتراضي 32768.'
        },
        {
          en: 'Step 6 — Verify STP root election: `show spanning-tree vlan 10` on both switches. SW1 should show "This bridge is the root"; SW2 should point root port toward SW1.',
          ar: 'الخطوة 6 — تحقق من انتخاب جذر STP: `show spanning-tree vlan 10` على كلا السويتشين. يجب أن يُظهر SW1 "This bridge is the root"؛ يجب أن يشير SW2 منفذ الجذر نحو SW1.'
        },
        {
          en: 'Step 7 — Test redundancy: disable one physical member port with `shutdown` on Fa0/23 (SW1). Verify the EtherChannel remains up and traffic continues over Fa0/24 only.',
          ar: 'الخطوة 7 — اختبر التكرارية: عطّل منفذ فيزيائي واحد بـ `shutdown` على Fa0/23 (SW1). تحقق من بقاء EtherChannel نشطاً واستمرار حركة المرور عبر Fa0/24 فقط.'
        },
        {
          en: 'Step 8 — Verify load balancing method: `show etherchannel load-balance`. Change it to src-dst-mac: `port-channel load-balance src-dst-mac`.',
          ar: 'الخطوة 8 — تحقق من طريقة موازنة الحمل: `show etherchannel load-balance`. غيّرها إلى src-dst-mac: `port-channel load-balance src-dst-mac`.'
        }
      ],
      config: `! === SW1 EtherChannel + STP Configuration ===
hostname SW1
!
interface range FastEthernet0/23 - 24
 channel-group 1 mode active
 no shutdown
!
interface Port-channel1
 switchport mode trunk
 switchport trunk allowed vlan 10,20
!
spanning-tree vlan 10,20 priority 4096
port-channel load-balance src-dst-mac

! === SW2 Configuration ===
hostname SW2
!
interface range FastEthernet0/23 - 24
 channel-group 1 mode passive
 no shutdown
!
interface Port-channel1
 switchport mode trunk
 switchport trunk allowed vlan 10,20`,
      verify: {
        en: 'Run `show etherchannel summary` — Po1 should be SU with both member ports showing P. Run `show spanning-tree vlan 10` on SW1 and confirm "This bridge is the root". Run `show interfaces port-channel 1` to confirm bandwidth is combined (2x FastEthernet = 200 Mbps).',
        ar: 'نفّذ `show etherchannel summary` — يجب أن تكون Po1 بحالة SU مع إظهار كلا المنفذين العضوين P. نفّذ `show spanning-tree vlan 10` على SW1 وتأكد من "This bridge is the root". نفّذ `show interfaces port-channel 1` للتأكد من تجميع النطاق الترددي (2x FastEthernet = 200 Mbps).'
      }
    },

    /* ------------------------------------------------------------------ */
    /* LAB 10 — NAT/PAT to the Internet                                    */
    /* ------------------------------------------------------------------ */
    {
      id: 'nat-pat-internet',
      difficulty: 'advanced',
      title: {
        en: 'NAT/PAT (Overload) to the Internet',
        ar: 'NAT/PAT (التحميل الزائد) إلى الإنترنت'
      },
      objective: {
        en: 'Configure NAT overload (PAT) on a border router so that multiple private hosts share a single public IP address when accessing the Internet, and verify translations.',
        ar: 'ضبط NAT overload (PAT) على راوتر الحدود حتى تتشارك مضيفات خاصة متعددة عنوان IP عام واحداً عند الوصول إلى الإنترنت، والتحقق من الترجمات.'
      },
      topology: `
  PC-1: 192.168.1.10    PC-2: 192.168.1.20
           |                    |
          SW1 (192.168.1.0/24 LAN)
           |
          Gi0/0 [R1-BORDER] Gi0/1
          inside: 192.168.1.1  outside: 203.0.113.1/30
                                        |
                                   ISP/Internet
                                  (8.8.8.8 reachable)
`,
      requirements: [
        { en: 'One border router with inside LAN interface and outside WAN interface', ar: 'راوتر حدود واحد مع واجهة LAN داخلية وواجهة WAN خارجية' },
        { en: 'Public IP on outside interface: 203.0.113.1/30 (or simulated)', ar: 'IP عام على الواجهة الخارجية: 203.0.113.1/30 (أو محاكى)' },
        { en: 'ACL defining which inside addresses are translated', ar: 'ACL تحدد عناوين الداخل التي ستُترجم' },
        { en: 'PAT (overload) uses the outside interface IP as the single public address', ar: 'PAT (overload) يستخدم IP الواجهة الخارجية كعنوان عام واحد' }
      ],
      steps: [
        {
          en: 'Step 1 — Configure R1 interfaces. Inside LAN: `interface GigabitEthernet0/0`, `ip address 192.168.1.1 255.255.255.0`, `ip nat inside`, `no shutdown`. Outside WAN: `interface GigabitEthernet0/1`, `ip address 203.0.113.1 255.255.255.252`, `ip nat outside`, `no shutdown`.',
          ar: 'الخطوة 1 — اضبط واجهات R1. LAN الداخلية: `interface GigabitEthernet0/0`, `ip address 192.168.1.1 255.255.255.0`, `ip nat inside`, `no shutdown`. WAN الخارجية: `interface GigabitEthernet0/1`, `ip address 203.0.113.1 255.255.255.252`, `ip nat outside`, `no shutdown`.'
        },
        {
          en: 'Step 2 — Create an ACL that identifies inside hosts to be translated: `access-list 10 permit 192.168.1.0 0.0.0.255`.',
          ar: 'الخطوة 2 — أنشئ ACL تحدد مضيفات الداخل التي ستُترجم: `access-list 10 permit 192.168.1.0 0.0.0.255`.'
        },
        {
          en: 'Step 3 — Configure PAT (NAT overload) using the outside interface: `ip nat inside source list 10 interface GigabitEthernet0/1 overload`.',
          ar: 'الخطوة 3 — اضبط PAT (NAT overload) باستخدام الواجهة الخارجية: `ip nat inside source list 10 interface GigabitEthernet0/1 overload`.'
        },
        {
          en: 'Step 4 — Configure a default route to reach the ISP: `ip route 0.0.0.0 0.0.0.0 203.0.113.2` (ISP gateway).',
          ar: 'الخطوة 4 — اضبط مساراً افتراضياً للوصول إلى ISP: `ip route 0.0.0.0 0.0.0.0 203.0.113.2` (بوابة ISP).'
        },
        {
          en: 'Step 5 — Set PC-1 and PC-2 default gateway to 192.168.1.1. Test by pinging the ISP address 203.0.113.2 or a simulated Internet host 8.8.8.8.',
          ar: 'الخطوة 5 — اضبط بوابة PC-1 و PC-2 الافتراضية على 192.168.1.1. اختبر بـ ping إلى عنوان ISP 203.0.113.2 أو مضيف إنترنت محاكى 8.8.8.8.'
        },
        {
          en: 'Step 6 — Verify NAT translations: `show ip nat translations`. You should see entries with inside local (192.168.1.x), inside global (203.0.113.1), and the outside destination.',
          ar: 'الخطوة 6 — تحقق من ترجمات NAT: `show ip nat translations`. يجب أن تُرى مدخلات تحتوي على inside local (192.168.1.x) و inside global (203.0.113.1) والوجهة الخارجية.'
        },
        {
          en: 'Step 7 — Check NAT statistics: `show ip nat statistics`. Verify "Total active translations", "Outside interfaces", and "Inside interfaces" fields.',
          ar: 'الخطوة 7 — تحقق من إحصائيات NAT: `show ip nat statistics`. تحقق من حقول "Total active translations" و "Outside interfaces" و "Inside interfaces".'
        },
        {
          en: 'Step 8 — Configure a static NAT entry for an internal server (optional): `ip nat inside source static 192.168.1.100 203.0.113.1`. Then clear and re-test: `clear ip nat translation *`.',
          ar: 'الخطوة 8 — اضبط مدخل NAT ثابت لخادم داخلي (اختياري): `ip nat inside source static 192.168.1.100 203.0.113.1`. ثم امسح وأعد الاختبار: `clear ip nat translation *`.'
        }
      ],
      config: `! === R1 NAT/PAT Configuration ===
hostname R1
!
ip access-list standard NAT-HOSTS
 permit 192.168.1.0 0.0.0.255
!
! (or use numbered: access-list 10 permit 192.168.1.0 0.0.0.255)
ip nat inside source list 10 interface GigabitEthernet0/1 overload
ip route 0.0.0.0 0.0.0.0 203.0.113.2
!
interface GigabitEthernet0/0
 description LAN-Inside
 ip address 192.168.1.1 255.255.255.0
 ip nat inside
 no shutdown
!
interface GigabitEthernet0/1
 description WAN-Outside
 ip address 203.0.113.1 255.255.255.252
 ip nat outside
 no shutdown`,
      verify: {
        en: 'Ping from PC-1 to 8.8.8.8 (or simulated Internet). Run `show ip nat translations` on R1 — each active session shows inside local, inside global, outside local, outside global addresses. PAT appends unique port numbers so multiple hosts share the same public IP.',
        ar: 'نفّذ ping من PC-1 إلى 8.8.8.8 (أو الإنترنت المحاكى). نفّذ `show ip nat translations` على R1 — تُظهر كل جلسة نشطة عناوين inside local و inside global و outside local و outside global. PAT يضيف أرقام منافذ فريدة حتى تتشارك مضيفات متعددة نفس IP العام.'
      }
    }

  ]);
})();
