/* ==========================================================================
   netcalc.js — Pure networking math (IPv4). No DOM. Used by the tools and
   could be unit-tested in isolation. Everything works on unsigned 32-bit ints.
   ========================================================================== */
(function () {
  const Net = {
    // "192.168.1.10" -> 3232235786  (unsigned)
    ipToInt(ip) {
      const p = ip.trim().split('.');
      if (p.length !== 4) throw new Error('Invalid IPv4 address');
      return p.reduce((acc, o) => {
        const n = Number(o);
        if (!/^\d+$/.test(o) || n < 0 || n > 255) throw new Error('Octet out of range: ' + o);
        return (acc << 8 >>> 0) + n;
      }, 0) >>> 0;
    },
    intToIp(n) { n = n >>> 0; return [(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join('.'); },

    // CIDR /n -> mask int
    cidrToMask(c) { c = +c; return c === 0 ? 0 : (0xFFFFFFFF << (32 - c)) >>> 0; },
    maskToCidr(maskInt) { let c = 0, m = maskInt >>> 0; for (let i = 31; i >= 0; i--) { if ((m >> i) & 1) c++; else break; } return c; },
    isValidMask(maskInt) { const m = maskInt >>> 0; const inv = (~m) >>> 0; return ((inv + 1) & inv) === 0; },

    octetsBinary(n) { return [(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].map(o => o.toString(2).padStart(8, '0')); },
    ipToBinary(ip) { return this.octetsBinary(this.ipToInt(ip)).join('.'); },

    ipClass(ip) {
      const first = this.ipToInt(ip) >>> 24;
      if (first < 128) return 'A';
      if (first < 192) return 'B';
      if (first < 224) return 'C';
      if (first < 240) return 'D (Multicast)';
      return 'E (Experimental)';
    },
    isPrivate(ip) {
      const n = this.ipToInt(ip);
      const inR = (a, b) => n >= this.ipToInt(a) && n <= this.ipToInt(b);
      return inR('10.0.0.0', '10.255.255.255') || inR('172.16.0.0', '172.31.255.255') ||
             inR('192.168.0.0', '192.168.255.255');
    },

    // Full subnet report for ip/cidr
    subnet(ip, cidr) {
      cidr = +cidr;
      if (cidr < 0 || cidr > 32) throw new Error('CIDR must be 0-32');
      const ipInt = this.ipToInt(ip);
      const mask = this.cidrToMask(cidr);
      const network = (ipInt & mask) >>> 0;
      const broadcast = (network | (~mask >>> 0)) >>> 0;
      const totalHosts = Math.pow(2, 32 - cidr);
      const usable = cidr >= 31 ? (cidr === 31 ? 2 : 1) : totalHosts - 2;
      const firstHost = cidr >= 31 ? network : (network + 1) >>> 0;
      const lastHost = cidr >= 31 ? broadcast : (broadcast - 1) >>> 0;
      const wildcard = (~mask) >>> 0;
      return {
        ip, cidr,
        mask: this.intToIp(mask),
        wildcard: this.intToIp(wildcard),
        network: this.intToIp(network),
        broadcast: this.intToIp(broadcast),
        firstHost: this.intToIp(firstHost),
        lastHost: this.intToIp(lastHost),
        totalHosts, usableHosts: Math.max(usable, 0),
        cls: this.ipClass(ip),
        type: this.isPrivate(ip) ? 'Private' : 'Public',
        binaryMask: this.octetsBinary(mask).join('.'),
        binaryIp: this.octetsBinary(ipInt).join('.')
      };
    },

    // Smallest CIDR that fits N hosts
    cidrForHosts(hosts) {
      let bits = 0; while (Math.pow(2, bits) - 2 < hosts && bits < 32) bits++;
      return 32 - bits;
    },
    // Smallest CIDR for N subnets (borrowed bits)
    cidrForSubnets(baseCidr, subnets) {
      let bits = 0; while (Math.pow(2, bits) < subnets) bits++;
      return Math.min(baseCidr + bits, 32);
    }
  };
  window.Net = Net;
})();
