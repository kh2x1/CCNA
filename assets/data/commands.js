/* commands.js — Essential Cisco IOS commands grouped by category.
   Registers onto window.NS_DATA.commands = [{ cmd, category, desc:{en,ar} }] */
(function () {
  const D = window.NS_DATA = window.NS_DATA || {};
  D.commands = [
    // --- Modes & basics ---
    { cmd: 'enable', category: 'Basics', desc: { en: 'Enter privileged EXEC mode.', ar: 'الدخول إلى الوضع المميّز (privileged EXEC).' } },
    { cmd: 'configure terminal', category: 'Basics', desc: { en: 'Enter global configuration mode.', ar: 'الدخول إلى وضع التهيئة العام.' } },
    { cmd: 'end', category: 'Basics', desc: { en: 'Return to privileged EXEC from any config mode.', ar: 'العودة إلى الوضع المميّز من أي وضع تهيئة.' } },
    { cmd: 'exit', category: 'Basics', desc: { en: 'Move back one configuration level.', ar: 'العودة مستوى واحد للخلف في التهيئة.' } },
    { cmd: 'hostname R1', category: 'Basics', desc: { en: 'Set the device name.', ar: 'تعيين اسم الجهاز.' } },
    { cmd: 'no shutdown', category: 'Basics', desc: { en: 'Enable (bring up) an interface.', ar: 'تفعيل (تشغيل) واجهة.' } },
    { cmd: 'reload', category: 'Basics', desc: { en: 'Restart the device.', ar: 'إعادة تشغيل الجهاز.' } },
    // --- Saving / files ---
    { cmd: 'copy running-config startup-config', category: 'Files', desc: { en: 'Save the running configuration to NVRAM.', ar: 'حفظ التهيئة الحالية في NVRAM.' } },
    { cmd: 'write memory', category: 'Files', desc: { en: 'Shortcut to save the running configuration.', ar: 'اختصار لحفظ التهيئة الحالية.' } },
    { cmd: 'erase startup-config', category: 'Files', desc: { en: 'Delete the saved startup configuration.', ar: 'حذف التهيئة المحفوظة عند الإقلاع.' } },
    { cmd: 'show running-config', category: 'Files', desc: { en: 'Display the active configuration.', ar: 'عرض التهيئة النشطة.' } },
    // --- Interfaces ---
    { cmd: 'interface gigabitethernet0/1', category: 'Interfaces', desc: { en: 'Enter interface configuration mode.', ar: 'الدخول إلى وضع تهيئة الواجهة.' } },
    { cmd: 'ip address 192.168.1.1 255.255.255.0', category: 'Interfaces', desc: { en: 'Assign an IPv4 address and mask.', ar: 'تعيين عنوان IPv4 وقناع.' } },
    { cmd: 'description LINK-TO-SW1', category: 'Interfaces', desc: { en: 'Add a text description to an interface.', ar: 'إضافة وصف نصي للواجهة.' } },
    { cmd: 'interface range fa0/1 - 12', category: 'Interfaces', desc: { en: 'Configure many interfaces at once.', ar: 'تهيئة عدة واجهات دفعة واحدة.' } },
    { cmd: 'speed 1000 / duplex full', category: 'Interfaces', desc: { en: 'Manually set speed and duplex.', ar: 'تعيين السرعة والازدواجية يدويًا.' } },
    // --- VLANs / Switching ---
    { cmd: 'vlan 10', category: 'Switching', desc: { en: 'Create VLAN 10 and enter VLAN config.', ar: 'إنشاء VLAN 10 والدخول لتهيئتها.' } },
    { cmd: 'switchport mode access', category: 'Switching', desc: { en: 'Set port as an access (end-device) port.', ar: 'تعيين المنفذ كمنفذ وصول لجهاز نهائي.' } },
    { cmd: 'switchport access vlan 10', category: 'Switching', desc: { en: 'Assign the access port to VLAN 10.', ar: 'إسناد منفذ الوصول إلى VLAN 10.' } },
    { cmd: 'switchport mode trunk', category: 'Switching', desc: { en: 'Set port as an 802.1Q trunk.', ar: 'تعيين المنفذ كـ trunk بمعيار 802.1Q.' } },
    { cmd: 'switchport trunk native vlan 99', category: 'Switching', desc: { en: 'Set the native VLAN on a trunk.', ar: 'تعيين VLAN الأصلية على الـ trunk.' } },
    { cmd: 'switchport port-security', category: 'Switching', desc: { en: 'Enable port security on the interface.', ar: 'تفعيل أمن المنفذ على الواجهة.' } },
    { cmd: 'spanning-tree vlan 1 root primary', category: 'Switching', desc: { en: 'Make this switch the STP root bridge.', ar: 'جعل هذا السويتش جسر الجذر في STP.' } },
    { cmd: 'channel-group 1 mode active', category: 'Switching', desc: { en: 'Add interface to an LACP EtherChannel.', ar: 'إضافة الواجهة إلى EtherChannel بـ LACP.' } },
    // --- Routing ---
    { cmd: 'ip route 0.0.0.0 0.0.0.0 203.0.113.1', category: 'Routing', desc: { en: 'Configure a default static route.', ar: 'تهيئة مسار افتراضي ثابت.' } },
    { cmd: 'ip route 10.0.0.0 255.0.0.0 10.1.1.2', category: 'Routing', desc: { en: 'Configure a static route to a network.', ar: 'تهيئة مسار ثابت إلى شبكة.' } },
    { cmd: 'router ospf 1', category: 'Routing', desc: { en: 'Enter OSPF process configuration.', ar: 'الدخول إلى تهيئة عملية OSPF.' } },
    { cmd: 'network 10.0.0.0 0.0.0.255 area 0', category: 'Routing', desc: { en: 'Advertise a network into OSPF area 0.', ar: 'الإعلان عن شبكة في منطقة OSPF رقم 0.' } },
    { cmd: 'ip routing', category: 'Routing', desc: { en: 'Enable IPv4 routing (on L3 switch).', ar: 'تفعيل توجيه IPv4 (على سويتش L3).' } },
    // --- Services ---
    { cmd: 'ip dhcp pool LAN', category: 'Services', desc: { en: 'Create a DHCP address pool.', ar: 'إنشاء مجمّع عناوين DHCP.' } },
    { cmd: 'ip helper-address 10.1.1.10', category: 'Services', desc: { en: 'Relay DHCP broadcasts to a server.', ar: 'تمرير بثّ DHCP إلى خادم.' } },
    { cmd: 'ip nat inside source list 1 interface g0/0 overload', category: 'Services', desc: { en: 'Configure PAT (NAT overload).', ar: 'تهيئة PAT (NAT overload).' } },
    { cmd: 'ntp server 129.6.15.28', category: 'Services', desc: { en: 'Synchronize clock with an NTP server.', ar: 'مزامنة الساعة مع خادم NTP.' } },
    { cmd: 'ip name-server 8.8.8.8', category: 'Services', desc: { en: 'Set a DNS server for name resolution.', ar: 'تعيين خادم DNS لتحويل الأسماء.' } },
    // --- Security ---
    { cmd: 'enable secret CISCO123', category: 'Security', desc: { en: 'Set an encrypted privileged-mode password.', ar: 'تعيين كلمة مرور مشفّرة للوضع المميّز.' } },
    { cmd: 'service password-encryption', category: 'Security', desc: { en: 'Encrypt plaintext passwords in the config.', ar: 'تشفير كلمات المرور النصية في التهيئة.' } },
    { cmd: 'line vty 0 4', category: 'Security', desc: { en: 'Configure the remote (SSH/Telnet) lines.', ar: 'تهيئة خطوط الوصول البعيد (SSH/Telnet).' } },
    { cmd: 'transport input ssh', category: 'Security', desc: { en: 'Allow only SSH for remote access.', ar: 'السماح بـ SSH فقط للوصول البعيد.' } },
    { cmd: 'crypto key generate rsa', category: 'Security', desc: { en: 'Generate RSA keys to enable SSH.', ar: 'توليد مفاتيح RSA لتفعيل SSH.' } },
    { cmd: 'access-list 10 permit 192.168.1.0 0.0.0.255', category: 'Security', desc: { en: 'Create a standard ACL entry.', ar: 'إنشاء مدخل ACL قياسي.' } },
    { cmd: 'ip access-group 101 in', category: 'Security', desc: { en: 'Apply an ACL inbound on an interface.', ar: 'تطبيق ACL للداخل على واجهة.' } },
    // --- Verification ---
    { cmd: 'show ip interface brief', category: 'Verify', desc: { en: 'Quick status/IP of all interfaces.', ar: 'حالة/عناوين كل الواجهات بسرعة.' } },
    { cmd: 'show ip route', category: 'Verify', desc: { en: 'Display the routing table.', ar: 'عرض جدول التوجيه.' } },
    { cmd: 'show vlan brief', category: 'Verify', desc: { en: 'List VLANs and their ports.', ar: 'عرض الـ VLANs ومنافذها.' } },
    { cmd: 'show interfaces trunk', category: 'Verify', desc: { en: 'Show trunk ports and allowed VLANs.', ar: 'عرض منافذ الـ trunk والـ VLANs المسموحة.' } },
    { cmd: 'show mac address-table', category: 'Verify', desc: { en: 'Display learned MAC addresses.', ar: 'عرض عناوين MAC المتعلَّمة.' } },
    { cmd: 'show cdp neighbors', category: 'Verify', desc: { en: 'Discover directly connected Cisco devices.', ar: 'اكتشاف أجهزة سيسكو المتصلة مباشرة.' } },
    { cmd: 'show ip ospf neighbor', category: 'Verify', desc: { en: 'Verify OSPF adjacencies.', ar: 'التحقق من جيران OSPF.' } },
    { cmd: 'ping 8.8.8.8', category: 'Verify', desc: { en: 'Test reachability with ICMP echo.', ar: 'اختبار الوصول عبر صدى ICMP.' } },
    { cmd: 'traceroute 8.8.8.8', category: 'Verify', desc: { en: 'Trace the path packets take to a host.', ar: 'تتبع المسار الذي تسلكه الحزم إلى مضيف.' } },
    { cmd: 'show version', category: 'Verify', desc: { en: 'Show IOS version, uptime and hardware.', ar: 'عرض إصدار IOS ومدة التشغيل والعتاد.' } }
  ];
})();
