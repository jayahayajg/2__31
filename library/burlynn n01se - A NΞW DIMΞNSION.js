wv = function(x) {
  y = x % 256;
  return y < 127 ? y : 2 * (256 - y);
},
ms = int(t / 10000),
p = t / 10000 % 16,
b = p % 4,
qn = p % 1,
rh = function(a) {
  m = 0;
  for (i = 0; i < a.length; i++) {
    if (b > a[i]) {
      m = b - a[i]
    }
  }
  return m;
},
sc = (ms % 256 < 32) ? 1 : min(1, max(0, 3 * qn - 0.3)) * (ms % 32 > 0),
c = t * (p < 12 ? 2 : 2.4),
max(0, min(255,
  (
    sc * 0.3 * (
      (wv(t / 4) - wv(t / 2 + qn * wv(t * (ms >> 2 & 15)) + wv(t * 2 * (1 + (ms >> 5 & 3))))) * (1 - rh([0, 1, 1.5, 2, 2.75, 3.5])) * (ms % 256 > 63) -
      wv(t / 2 + 0.5 * wv(pow(7 - (qn * (2 + (ms >> 2 & 3))) % 1, 5) * 3)) * (ms % 64 > 47) +
      qn * qn * ((t << (2 + (t >> 9) % 3)) % 256) * (ms % 128 > 64) * 0.8 -
      wv(pow(2 - rh([0.25, 1, 1.5, 2.25, 3]), 4) * 6000 * (ms % 256 > 191 ? 2 : 1)) * (ms % 256 > 128) +
      (wv(c) - wv(c * 1.2) + wv(c * 1.5) - wv(c * 2.24) + wv(c * 1.8)) * (0.7 - rh([0, .75, 1.5, 2.5, 3.25])) * 1 +
      random() * pow(16 - p, 2) / 4
    ) -
    qn * pow(1 - qn * (ms % 128 < 80 ? 2 : 4) % 1, 4) * 80 * random() * (ms % 256 > 63)
  ) +
  wv(2 * t + 60 * sin(b * 25)) * (ms % 256 > 31) * (ms % 32 < 1) * qn +
  wv(pow(1 - qn, 9) * 2000 * (1 + p % 2)) * (max(0, 1 - 5 * qn)) * (ms % 256 > 31) +
  128
))