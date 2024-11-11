var q6 = ' "Helvetica Neue", Helvetica, Arial, sans-serif',
  c6 = 0,
  u4 = {
    LIGHT: {
      road: "#3a3a3a",
      grass: "#047804",
      v9: "#a02222",
      lane: "#CCCCCC",
    },
    DARK: { road: "#3a3a3a", grass: "#006A00", v9: "#BBBBBB" },
    START: { road: "white", grass: "#009A00", v9: "#BBBBBB" },
    FINISH: { road: "black", grass: "black", v9: "black" },
  },
  cntx = null;
function j7($, t) {
  cntx.clearRect(0, 0, $, t);
}
function g1($) {
  cntx.globalAlpha = $;
}
function m0($, t, i, s) {
  cntx.fillRect($, t, i, s);
}
function a6($, t, i, s) {
  return cntx.createLinearGradient($, t, i, s);
}
function g0($) {
  cntx.strokeStyle = $;
}
function p2() {
  cntx.stroke();
}
function k4($) {
  cntx.fillStyle = $;
}
function k3() {
  cntx.beginPath();
}
function p0($, t) {
  cntx.moveTo($, t);
}
function t4($, t, i, s, _, e) {
  cntx.arc($, t, i, s, _, e);
}
function o8($, t) {
  cntx.lineTo($, t);
}
function k0() {
  cntx.closePath();
}
function s9() {
  cntx.fill();
}
function k9($, t, i) {
  cntx.fillText($, t, i);
}
function s3() {
  cntx.save();
}
function n0() {
  cntx.restore();
}
function j4($, t) {
  cntx.translate($, t);
}
function p9($) {
  cntx.rotate($);
}
function i5($, t, i, s, _, e, r, h, a) {
  cntx.drawImage($, t, i, s, _, e, r, h, a);
}
var M = Math,
  PI = Math.PI;
function r9() {
  return M.random();
}
function m8($) {
  return M.floor(r9() * $);
}
function sin($) {
  return M.sin($);
}
function cos($) {
  return M.cos($);
}
var l1 = 600,
  k6 = 600,
  l6 = 2400,
  k5 = 2400,
  b4 = 1280,
  a9 = 480,
  c2 = 600,
  b9 = 600,
  j9 = l9(l1, k6),
  t1 = l9(l6, k5);
(j8 = t1.c),
  (h0 = t1.x),
  (e3 = l9(b4, a9)),
  (e2 = l9(b4, a9)),
  (e1 = l9(b4, a9)),
  (j1 = l9(c2, b9)),
  (a7 = a5 = f1 = d3 = b7 = d8 = d0 = e8 = 0),
  (c8 = []),
  (q1 = 0);
var r4 = "#222222",
  q2 = "#cccccc",
  q7 = "#e5e5e5";
function m3() {
  j9.x.clearRect(0, 0, l1, k6);
}
function l9($, t) {
  var i = document.createElement("canvas");
  (i.width = $), (i.height = t);
  var s = i.getContext("2d");
  return { c: i, x: s };
}
var p3 = 0,
  p4 = 0,
  c1 = 0;
function j2() {
  (p3 = 0),
    (p4 = 0),
    (c1 = 0),
    h0.clearRect(0, 0, l6, k5),
    e1.x.clearRect(0, 0, b4, a9),
    e2.x.clearRect(0, 0, b4, a9),
    e3.x.clearRect(0, 0, b4, a9);
}
function e6($, t, i, s) {
  var _ = 0;
  k4(s);
  var e = i + i * r9();
  k3(), p0($ + e * cos(_), t + e * sin(_));
  for (var r = 1; r < 30; r++)
    (_ = (r * PI * 2) / 30),
      (e = i + i * r9()),
      o8($ + e * cos(_), t + e * sin(_));
  k0(), s9();
}
function a8() {
  var $,
    t,
    i = j9.x.getImageData(0, 0, j9.c.width, j9.c.height),
    s = new Uint32Array(i.data.buffer),
    _ = j9.c.width,
    e = j9.c.height,
    r = _,
    h = e,
    a = 0,
    c = 0;
  for (t = 0; t < e; t++)
    for ($ = 0; $ < _; $++)
      s[$ + t * _] > 0 &&
        ($ < r && (r = $),
        $ > a && (a = $),
        t < h && (h = t),
        t > c && (c = t));
  var o = c - 50;
  o < 0 && (o = 0);
  var u = _,
    v = 0;
  for (t = o; t < c; t++)
    for ($ = 0; $ < _; $++)
      s[$ + t * _] > 0 && ($ < u && (u = $), $ > v && (v = $));
  return { x: r, y: h, w: a - r, h: c - h, cx: u - r, cw: v - u };
}
function q3($) {
  var t = a8();
  p3 + t.w > l6 && ((p3 = 0), (p4 += c1), (c1 = 0)),
    t.h > c1 && (c1 = t.h),
    h0.save();
  var i = p3;
  $ && (h0.scale(-1, 1), (i = -p3 - t.w), (t.cx = t.w - t.cx - t.cw)),
    h0.drawImage(j9.c, t.x, t.y, t.w, t.h, i, p4, t.w, t.h),
    h0.restore();
  var s = { x: p3, y: p4, w: t.w, h: t.h, cx: t.cx, cw: t.cw };
  return (p3 += t.w + 5), s;
}
function e5() {
  (cntx = j9.x),
    m3(),
    k4("#996644"),
    m0(0, 0, 200, 200),
    k4("#996644"),
    m0(10, 200, 10, 10),
    k4("#996644"),
    m0(180, 200, 10, 10),
    k4(q2),
    m0(10, 10, 180, 180),
    k3(),
    p0(20, 100),
    o8(160, 30),
    o8(160, 170),
    o8(20, 100),
    k4("#cc2211"),
    s9(),
    k4(q2),
    m0(10, 10, 20, 180),
    (d8 = q3()),
    (d0 = q3(1));
}
function q5($, t) {
  var i = [],
    s = 0,
    _ = 0;
  i[_++] = 0;
  for (var e = 0; e < $; e++) (s += r9() * t), (i[_++] = s);
  for (; s > 0; ) (s -= r9() * t), (i[_++] = s);
  return i;
}
function b1() {
  cntx = e1.x;
  for (
    var $ = ["#114433", "#114e33", "#115433", "#113433", "#114433"],
      t = 0,
      i = 0;
    i < 4;
    i++
  ) {
    for (var s = t, _ = 10 + 40 * r9(), e = 0; e < _; e++) {
      var r = q5(8, 7),
        h = m8($.length);
      k4($[h]), k3(), p0(s, 240 - r[0]);
      for (var a = 1; a < r.length; a++) o8(s + a, 240 - r[a]);
      k0(), s9(), (s += 2 + 4 * r9());
    }
    for (
      var $ = ["#226639", "#115e33", "#316433", "#215433", "#114433"],
        s = t,
        e = 0;
      e < _;
      e++
    ) {
      var r = q5(4, 4),
        h = m8($.length);
      k4($[h]), k3(), p0(s, 240 - r[0]);
      for (var a = 1; a < r.length; a++) o8(s + a, 240 - r[a]);
      k0(), s9(), (s += 2 + 5 * r9());
    }
    t = s + 50 + 180 * r9();
  }
}
function t5($) {
  cntx = e2.x;
  var t = [],
    i = [],
    s = [],
    _ = [],
    e = 0,
    r = 0,
    h = 1;
  h = 0.1 + 3 * r9();
  for (var a = 2e3 * r9(), c = 0; c < 100; c++)
    (e += r9() * h), (t[r] = e), (i[r] = e), r++, (h += 0.01);
  for (var a = 5 + 8 * r9(), c = 0; c < a; c++)
    (e += (0.4 - r9()) * 2), (i[r] = e), (t[r++] = e);
  for (var o = [], u = e; u > 0; ) o.push((u -= 5 * r9()));
  a = r9() > 0.6 ? 160 * r9() : 20 * r9();
  for (var c = 0; c < a; c++) (e += (0.4 - r9()) * 2), (t[r++] = e);
  for (; e > 0; ) (e -= r9() * h), (t[r++] = e), (h -= 0.003) < 0 && (h = 0.03);
  for (var c = 0; c < i.length - 20; c++) s.push((u = i[c] + r9()));
  for (var c = 0; c < s.length - 10; c++) _.push((u -= 2 * r9()));
  var v = $;
  k4("#114433"), k3(), p0(v, 260 - t[0]);
  for (var f = 1; f < t.length; f++) o8(v + f, 260 - t[f]);
  k0(), s9(), (v = $), k4("#224a33"), k3(), p0(v, 260 - i[0]);
  for (var f = 1; f < i.length; f++) o8(v, 260 - i[f]), v++;
  for (var f = 1; f < o.length; f++)
    o8(v, 260 - o[f]), r9() > 0.4 ? v-- : r9() > 0.4 && v++;
  k0(), s9(), (v = $ + 4), k4("#335a3a"), k3(), p0(v, 260 - s[0]);
  for (var f = 1; f < s.length; f++) o8(v, 260 - s[f]), v++;
  for (var f = 1; f < _.length; f++)
    o8(v, 260 - _[f]), r9() > 0.8 ? v++ : r9() > 0.1 && v--;
  return k0(), s9(), t;
}
function a3() {
  for (var $ = 0, t = 0; t < 20; t++) t5($), ($ += 3 + 100 * r9());
}
var tree = {
    o0: "",
    draw: function () {
      j4(250, 500),
        (this.o0 =
          "#" + (16777216 + 16777215 * r9()).toString(16).substr(1, 6)),
        (cntx.lineWidth = 1 + 20 * r9()),
        (cntx.lineJoin = "round"),
        this.u2(0);
    },
    u2: function ($) {
      if ($ < 12) {
        k3(), p0(0, 0), o8(0, -50), p2(), j4(0, -50);
        var t = -(0.1 * r9()) + 0.1;
        p9(t),
          1 * r9() < 0.6
            ? (p9(-0.35),
              cntx.scale(0.7, 0.7),
              s3(),
              this.u2($ + 1),
              n0(),
              p9(0.6),
              s3(),
              this.u2($ + 1),
              n0())
            : this.u2($);
      } else k4(this.o0), m0(0, 0, 500, 200), p2();
    },
  },
  k1 = [];
function createTrees() {
  k1 = [];
  for (var $ = 0; $ < 6; $++) {
    for (var t = !1, i = 0; !t; ) {
      (cntx = j9.x), j9.x.save(), m3(), tree.draw();
      var s = a8();
      (t = (s.w < 300 && s.h < 400) || i > 5), j9.x.restore(), i++;
    }
    k1[$] = q3();
  }
}
function c0($, t, i, s) {
  cntx = e1.x;
  var _ = 30,
    e = 20,
    r = 1,
    h = 1,
    a = 4,
    c = 8;
  if (
    (1 == t && ((r = 2), (h = 2), (a = 3), (c = 10), (_ = 40), (e = 25)),
    2 == t && ((r = 4), (a = 2), (c = 6), (_ = 20), (e = 18)),
    (_ += 30 * r9()),
    k4(i),
    m0($, 260 - _, e, _),
    0.4 > r9())
  ) {
    var o = 5,
      u = 8;
    m0($ + o, 260 - (_ + u), e - 2 * o, _ + u);
  }
  if (0.2 > r9()) {
    var o = 5,
      u = 13;
    m0($ + o, 260 - (_ + u), 2, _ + u);
  }
  for (var v = 0; v < c; v++)
    for (var f = 2 + v * (h + 2), l = 0; l < a; l++) {
      var p = 2 + l * (r + 2);
      k4(s), m0($ + p, 260 - _ + f, r, h);
    }
}
function a4($) {
  var t = "#777799",
    i = "#9999ee";
  $ && ((t = "#060606"), (i = "#929156"));
  for (var s = 0, _ = 0; _ < 80; _++) {
    var e = r9();
    e < 0.4 ? c0(s, 0, t, i) : e < 0.6 ? c0(s, 1, t, i) : c0(s, 2, t, i),
      (s += 10 + 30 * r9());
  }
  var t = "#9999aa",
    i = "#aaaaee";
  $ && ((t = "#101010"), (i = "#929156"));
  for (var s = 0, _ = 0; _ < 80; _++) {
    var e = r9();
    e < 0.4 ? c0(s, 0, t, i) : e < 0.6 ? c0(s, 1, t, i) : c0(s, 2, t, i),
      (s += 10 + 30 * r9());
  }
}
function f8($) {
  c8 = [];
  for (var t = 0; t < 4; t++) {
    m3(), (cntx = j9.x);
    var i = 100 + 80 * r9();
    $ && (i = 10 + 20 * r9()),
      k4("rgb(" + i + "," + i + "," + i + ")"),
      m0(0, 30, 240, 500);
    var s = (col = x = y = 0);
    for (s = 0; s < 18; s++)
      for (col = 0, y = 38 + 25 * s; col < 7; col++)
        (x = 8 + 32 * col),
          $
            ? r9() > 0.7
              ? (k4("#ffffec"),
                m0(x, y, 24, 15),
                k4("#bbbb88"),
                m0(x, y + 7.5, 24, 7.5))
              : (k4("#112237"),
                m0(x, y, 24, 15),
                k4("#111a30"),
                m0(x, y + 7.5, 24, 7.5))
            : (k4("#5555a7"),
              m0(x, y, 24, 15),
              k4("#444495"),
              m0(x, y + 7.5, 24, 7.5));
    c8[t] = q3();
  }
}
function c3($) {
  (cntx = j9.x),
    m3(),
    s3(),
    k4("#999999"),
    $ && k4("#555555"),
    m0(40, 150, 7, 300),
    k3(),
    t4(70, 150, 30, PI, -PI / 2),
    o8(70, 127),
    t4(70, 150, 23, -PI / 2, PI, !0),
    o8(40, 150),
    s9(),
    m0(70, 120, 70, 7),
    m0(130, 119, 35, 6),
    k4("#aaaaaa"),
    $ && k4("#777777"),
    m0(43, 150, 2, 300),
    m0(70, 123, 70, 2),
    k3(),
    t4(70, 150, 27, PI, -PI / 2),
    o8(70, 127),
    t4(70, 150, 23, -PI / 2, PI, !0),
    o8(40, 150),
    s9(),
    k4("#aaaaaa"),
    $ && k4("#999999"),
    m0(45, 150, 2, 300),
    m0(70, 125, 70, 2),
    k3(),
    t4(70, 150, 25, PI, -PI / 2),
    o8(70, 127),
    t4(70, 150, 23, -PI / 2, PI, !0),
    o8(40, 150),
    s9(),
    $ && (cntx.filter = "blur(2px)"),
    k4("#ffffff"),
    m0(128, 124, 38, 12),
    $ &&
      (g1(0.8),
      (cntx.globalCompositeOperation = "lighter"),
      (cntx.filter = "blur(4px)"),
      m0(123, 123, 44, 18),
      g1(1)),
    (a7 = q3()),
    (a5 = q3(1)),
    n0();
}
function i0() {
  var $ = b4,
    t = a9;
  cntx = e3.x;
  var i = a6(0, 0, 0, t);
  i.addColorStop(0, "#00111e"),
    i.addColorStop(1, "#033d5e"),
    k4(i),
    m0(0, 0, b4, a9);
  for (var s = Math.round($ + t), _ = 0; _ <= s; _++) {
    var e = m8($),
      r = m8(t),
      h = m8(2) + 1,
      a = m8(9) + 1,
      c = m8(9) + 1,
      o = m8(360);
    h > 1 && ((cntx.shadowBlur = m8(15) + 5), (cntx.shadowColor = "white")),
      k4("hsla(" + o + ", 30%, 80%, ." + a + c + ")"),
      m0(e, r, h, h);
  }
}
function createLeaf($) {
  k4($),
    k3(),
    t4(3, 7, 3, PI / 2, PI),
    t4(10, 7, 10, PI, 1.24 * PI),
    t4(-4.7, 7, 10, 1.76 * PI, 0),
    t4(2.3, 7, 3, 0, PI / 2),
    s9();
}
function j5() {
  m3(), (cntx = j9.x);
  var $ = j9.c;
  cntx.save();
  var t = a6(0, 0, 0, 8);
  t.addColorStop(0, "#ff111e"),
    t.addColorStop(1, "#aa3d5e"),
    createLeaf(t),
    cntx.translate(0, 20),
    createLeaf(t),
    cntx.translate(0, 20),
    createLeaf(t),
    cntx.translate(0, 20),
    createLeaf("#44aa55"),
    cntx.restore();
  for (var i = 100, s = 0; s < 2; s++)
    for (var _ = 30, e = 0; e < 60; e++)
      if (!((_ += 4 + 6 * r9()) > 780)) {
        var r = 20 + 4 * r9();
        (i = 100 + 16 * s - r + 12 * r9()),
          r9() > 0.5
            ? (k4("#44aa55"), m0(_, i, 2, r), k4("#66cc88"), m0(_, i, 1, r))
            : (k4("#449955"), m0(_, i, 2, r), k4("#66aa88"), m0(_, i, 1, r));
        var h = 20 * m8(2),
          a = _ - 2,
          c = i - 6;
        s3(),
          j4(a + 3, c),
          p9(0.3),
          i5($, 0, h, 6, 11, 0, 0, 6, 11),
          n0(),
          s3(),
          j4(a - 3, c + 1),
          p9(-0.3),
          i5($, 0, h, 6, 11, 0, 0, 6, 11),
          n0(),
          s3(),
          j4(a, c),
          i5($, 0, h, 6, 11, 0, 0, 6, 11),
          n0(),
          s3(),
          j4(a + 6, c + 10),
          p9(0.6),
          i5($, 0, 60, 6, 11, 0, 0, 6, 11),
          n0();
      }
  cntx.clearRect(0, 0, 22, 300), (e8 = q3());
}
function o7($, t) {
  k3(), k4(t), p0($[0], $[1]);
  for (var i = 2; i < $.length; i += 2) o8($[i], $[i + 1]);
  k0(), s9();
}
function drawLine($, t, i, s) {
  k3(), p0($, t), o8(i, s), cntx.stroke();
}
function r1() {
  m3(), (cntx = j9.x);
  var $ = [8, 194, 11, 206, 14, 214, 18, 216, 41, 215, 46, 213, 47, 205];
  o7($, r4);
  var $ = [227, 193, 230, 200, 241, 204, 258, 203, 265, 197, 268, 191];
  o7($, r4);
  var $ = [
    5, 192, 25, 206, 296, 190, 302, 164, 298, 149, 296, 145, 292, 111, 289, 103,
    294, 101, 294, 91, 297, 84, 263, 72, 208, 14, 167, 2, 66, 3, 45, 7, 8, 55,
    5, 65, 7, 88, 2, 97, 1, 151,
  ];
  o7($, "#a9fb78");
  var $ = [
    25, 206, 296, 190, 302, 164, 298, 149, 296, 145, 292, 111, 289, 103, 294,
    101, 294, 91, 297, 84, 17, 93, 22, 122, 20, 162, 20, 170, 2, 145, 3, 160, 6,
    187,
  ];
  o7($, "#4abf74");
  var $ = [20, 108, 294, 96, 296, 89, 19, 98];
  o7($, "#226d7d");
  var $ = [21, 162, 296, 149, 292, 112, 22, 122];
  o7($, "#226d7d");
  var $ = [42, 86, 260, 79, 208, 21, 60, 24],
    t = a6(0, 19, 0, 90);
  t.addColorStop(0, "#4fa8f7"),
    t.addColorStop(1, "#2d3c7c"),
    o7($, t),
    o7(
      ($ = [
        51, 62, 238, 57, 253, 76, 196, 67, 159, 64, 125, 66, 81, 72, 45, 82,
      ]),
      "#95eef7"
    );
  var $ = [27, 83, 33, 77, 46, 27, 21, 70];
  o7($, "#4773dd");
  var $ = [19, 61, 46, 17, 43, 12, 19, 51];
  o7($, "#4773dd");
  var $ = [3, 99, 10, 113, 18, 120, 17, 106, 11, 86, 5, 91];
  o7($, "#ffd47e");
  var $ = [21, 127, 19, 145, 20, 158, 106, 153, 105, 124];
  o7($, "#b44258");
  var $ = [20, 158, 106, 153, 105, 142, 19, 146];
  o7($, "#5d2959");
  var $ = [217, 120, 218, 149, 296, 145, 296, 134, 293, 116];
  o7($, "#b44258");
  var $ = [218, 149, 296, 145, 296, 133, 218, 137];
  o7($, "#5d2959");
  var $ = [21, 173, 300, 159, 299, 149, 21, 162];
  o7($, "#a9fb78"), (f1 = q3(0)), (d3 = q3(1));
}
function p6() {
  m3(), (cntx = j9.x), j9.c;
  var $ = [5, 197, 143, 197, 141, 87, 1, 87, 4, 106, 1, 121, 1, 180];
  o7($, "#4abf74");
  var $ = [141, 87, 143, 1, 87, 3, 72, 6, 61, 17, 31, 67, 1, 87];
  o7($, "#a9fb78"),
    o7(($ = [4, 100, 143, 100, 143, 93, 3, 93]), "#226d7d"),
    o7(($ = [4, 155, 143, 155, 143, 113, 4, 113]), "#226d7d"),
    o7(($ = [4, 150, 86, 149, 86, 121, 5, 121, 3, 139]), "#b44258"),
    o7(($ = [4, 149, 86, 149, 86, 138, 4, 138]), "#5d2959"),
    o7(($ = [22, 131, 22, 134, 73, 134, 73, 131]), "#d65d5b"),
    ($ = [32, 82, 143, 82, 143, 19, 66, 19]);
  var t = a6(0, 19, 0, 90);
  t.addColorStop(0, "#4fa8f7"),
    t.addColorStop(1, "#2d3c7c"),
    o7($, t),
    o7(($ = [47, 59, 143, 59, 143, 64, 78, 68, 38, 77]), "#95eef7"),
    o7(($ = [13, 197, 16, 205, 23, 208, 49, 207, 56, 202, 58, 197]), r4);
  var $ = [1, 155, 1, 167, 143, 167, 143, 155];
  o7($, "#a9fb78"),
    s3(),
    cntx.scale(-1, 1),
    i5(j9.c, 0, 0, 143, 210, -275, 0, 143, 210),
    n0(),
    (b7 = q3(0));
}
function o6() {
  r1(), p6();
}
function b2($, t) {
  return ($ % t) / t;
}
function g4($, t, i) {
  return $ + (t - $) * i;
}
function l0($, t, i) {
  for (var s = $ + t; s >= i; ) s -= i;
  for (; s < 0; ) s += i;
  return s;
}
var m5 = function ($, t) {
  (this.canvas = $), (this.t6 = t);
};
m5.prototype = {
  init: function () {
    v0.reset(), v3.buildv20();
  },
  keyDown: function ($) {
    88 === $.keyCode && startGame();
  },
  keyUp: function ($) {},
  p5: function () {
    n3 = !0;
    var $,
      t,
      i = height;
    (v0.y = 400), (v0.depth = 0.83909963117728), (v0.x = 0);
    var s = v3.n1(v0.z),
      _ = b2(v0.z, v2.u0Length);
    for ($ = 0, v0.y = 500 + g4(s.p1.v8.y, s.p3.v8.y, _); $ < v0.l3; $++)
      ((t = v3.o9((s.index + $) % v3.o9Count())).u9 = t.index < s.index),
        (t.clip = i),
        (t.clip = 0),
        v0.t2(t.p1, 0, t.u9, width, height, q4),
        v0.t2(t.p2, 0, t.u9, width, height, q4),
        v0.t2(t.p3, 0, t.u9, width, height, q4),
        v0.t2(t.p4, 0, t.u9, width, height, q4),
        t.p1.v0.z <= v0.depth ||
          t.p3.u6.y >= t.p1.u6.y ||
          t.p3.u6.y >= i ||
          (k2(t), (i = t.p1.u6.y));
  },
  render: function ($) {
    cntx = this.t6;
    var t = l2();
    k4(r4), m0(0, 0, this.canvas.width, this.canvas.height);
    for (var i = 0; i < 30; i++) {
      var s = 100 + 10 * i;
      (t6.font = "italic " + s + "px " + q6), (t6.fontStyle = "italic");
      var _ = 80 + 4 * i;
      (_ = (_ + t / 6) % 200),
        29 == i && (_ = 255),
        k4("rgb(" + _ + "," + _ + "," + _ + ")"),
        k9("racer", 400 - 11 * i, 300 - i);
    }
    (t6.font = "44px " + q6),
      k9("Arrow keys to drive, x for Turbo, z for Handbrake", 38, 570),
      k9("x To Start", 423, 460),
      (v0.z = l0(v0.z, 120 * $, v3.r2())),
      this.p5();
  },
};
var u3 = function () {
  (this.fieldOfView = 100),
    (this.y = 0),
    (this.z = 0),
    (this.l3 = 300),
    (this.depth = 0),
    (this.fogDensity = 25),
    (this.t7 = 0),
    (this.t9 = 740),
    (this.t7 = 700);
};
u3.prototype = {
  reset: function () {
    (this.depth = 1 / Math.tan(((this.fieldOfView / 2) * Math.PI) / 180)),
      (this.t9 = 740),
      (this.t7 = 700);
  },
  t2: function ($, t, i, s, _) {
    var e = this.z;
    i && (e -= v3.r2());
    var r = this.x + t;
    ($.v0.x = ($.v8.x || 0) - r),
      ($.v0.y = ($.v8.y || 0) - this.y),
      ($.v0.z = ($.v8.z || 0) - e),
      ($.u6.scale = this.depth / $.v0.z),
      ($.u6.x = Math.round(s / 2 + ($.u6.scale * $.v0.x * s) / 2)),
      ($.u6.y = Math.round(_ / 2 - ($.u6.scale * $.v0.y * _) / 2));
  },
  update: function ($) {
    (this.z = cars[0].z - this.t7),
      this.z < 0 && (this.z += v3.r2()),
      (v0.x = cars[0].x + cars[0].width / 2);
    var t = v3.n1(cars[0].z),
      i = b2(cars[0].z, v2.u0Length);
    this.y = this.t9 + g4(t.p1.v8.y, t.p3.v8.y, i);
  },
};
var width = 1024,
  height = 768,
  resolution = height / 480,
  i2 = 0.001,
  i3 = 0.002,
  i4 = 0.003,
  h3 = 0,
  h4 = 0,
  h6 = 0,
  n3 = !1,
  lastDriftDraw = 0;
function j6($, t, i, s, _, e, r, h, a) {
  k4(a),
    k3(),
    p0($, t),
    o8(i, s),
    o8(_, e),
    o8(r, h),
    k0(),
    n3 ? (g0(q2), p2()) : s9();
}
function k2($) {
  var t,
    i,
    s,
    _,
    e,
    r = Math.floor($.index / 2) % 2,
    h = e4,
    a = d4;
  r && ((h = g2), (a = g3)),
    n3 || (k4(a), m0(0, $.p3.u6.y, width, $.p1.u6.y - $.p3.u6.y));
  var c = ($.r0 * $.p1.u6.scale * width) / 2,
    o = ($.r0 * $.p4.u6.scale * width) / 2;
  if (
    (j6(
      $.p1.u6.x - c,
      $.p1.u6.y,
      $.p1.u6.x,
      $.p1.u6.y,
      $.p4.u6.x,
      $.p4.u6.y,
      $.p4.u6.x - o,
      $.p4.u6.y,
      h
    ),
    j6(
      $.p2.u6.x,
      $.p2.u6.y,
      $.p2.u6.x + c,
      $.p2.u6.y,
      $.p3.u6.x + o,
      $.p3.u6.y,
      $.p3.u6.x,
      $.p3.u6.y,
      h
    ),
    !n3)
  ) {
    var u = n9;
    0 == $.index && (u = q2),
      j6(
        $.p1.u6.x,
        $.p1.u6.y,
        $.p2.u6.x,
        $.p2.u6.y,
        $.p3.u6.x,
        $.p3.u6.y,
        $.p4.u6.x,
        $.p4.u6.y,
        u
      );
  }
  var v = (50 * $.p1.u6.scale * width) / 2,
    f = (50 * $.p4.u6.scale * width) / 2;
  if (
    ((s = $.p1.u6.x + (100 * $.p1.u6.scale * width) / 2),
    (_ = $.p4.u6.x + (100 * $.p4.u6.scale * width) / 2),
    j6(
      s - v / 2,
      $.p1.u6.y,
      s + v / 2,
      $.p1.u6.y,
      _ + f / 2,
      $.p3.u6.y,
      _ - f / 2,
      $.p3.u6.y,
      c6
    ),
    (s = $.p2.u6.x - (100 * $.p1.u6.scale * width) / 2),
    (_ = $.p3.u6.x - (100 * $.p4.u6.scale * width) / 2),
    j6(
      s - v / 2,
      $.p1.u6.y,
      s + v / 2,
      $.p1.u6.y,
      _ + f / 2,
      $.p3.u6.y,
      _ - f / 2,
      $.p3.u6.y,
      c6
    ),
    (lanes = 2),
    r)
  )
    for (
      e = 1,
        t = ($.p2.u6.x - $.p1.u6.x) / lanes,
        i = ($.p3.u6.x - $.p4.u6.x) / lanes,
        s = $.p1.u6.x + t,
        _ = $.p4.u6.x + i;
      e < lanes;
      s += t, _ += i, e++
    )
      j6(
        s - v / 2,
        $.p1.u6.y,
        s + v / 2,
        $.p1.u6.y,
        _ + f / 2,
        $.p3.u6.y,
        _ - f / 2,
        $.p3.u6.y,
        c6
      );
  0 != q1 && q9(0, $.p1.u6.y, width, $.p3.u6.y - $.p1.u6.y, $.fog);
}
function e0($, t, i, s, _) {
  s = s || 0;
  var e = b4 / 2,
    r = Math.floor(b4 * s),
    h = Math.min(e, b4 - r),
    a = a9,
    c = (_ = _ || 0),
    o = Math.floor(t * (h / e)),
    u = i;
  t6.drawImage($.c, r, 0, h, a, 0, c, o, u),
    h < e && t6.drawImage($.c, 0, 0, e - h, a, o - 1, c, t - o, u);
}
function m1($, t, i, s, _, e) {
  var r = ($.w * t * width) / 2,
    h = ($.h * t * width) / 2;
  s -= h;
  var a = _ ? Math.max(0, s + h - _) : 0;
  a < h &&
    (t6.drawImage(j8, $.x, $.y, $.w, $.h - ($.h * a) / h, i, s, r, h - a),
    !1 !== e && 0 != q1 && q9(i, s, r, h, e));
}
function b3($, t) {
  return 1 / Math.pow(Math.E, $ * $ * t);
}
function m2($, t, i, s, _, e) {
  r = s < 0 ? f1 : s > 0 ? d3 : b7;
  var r,
    h,
    a,
    c = (u1.width * $) / r.w;
  if (u1.h2 > 0 || u1.p8 > 0) {
    cars[0].b6();
    var o = 0;
    if (u1.h2 <= 0) for (o = u1.p8; o > 1; ) o -= 1;
    for (g1(1 - o), h = 0; h < cars[0].f2.length; h++) {
      var u = cars[0].f2[h];
      for (k3(), p0(u[0].u6.x, u[0].u6.y), a = 1; a < u.length; a++)
        o8(u[a].u6.x, u[a].u6.y);
      k4(q2), s9();
    }
    g1(1);
  }
  if ((m1(r, c, t, i + u1.u8, !1), u1.m6 > 0)) {
    var v = l2();
    if (v - lastDriftDraw > 100) {
      g1(0.8), k4(q2);
      var f = t + 12,
        l = i - 4;
      m0(f, l, 50, 10),
        m0((f = t + 260), l, 50, 10),
        g1(1),
        (lastDriftDraw = v);
    }
  }
  if (u1.v5) {
    var p = t + 82,
      d = i - 10;
    e6(p, d, 10, "#dd9925"),
      e6(p, d, 5, "#cccc55"),
      e6((p = t + 230), d, 10, "#dd9925"),
      e6(p, d, 5, "#cccc55");
  }
}
function q9($, t, i, s, _) {
  _ < 1 && (g1(1 - _), k4(q1), m0($, t, i, s), g1(1));
}
function l7() {
  cntx = t6;
  var $,
    t,
    i,
    s,
    _,
    e,
    r,
    h,
    a = v3.n1(v0.z),
    c = b2(v0.z, v2.u0Length),
    o = v3.n1(u1.z),
    u = b2(u1.z, v2.u0Length),
    v = g4(o.p1.v8.y, o.p3.v8.y, u),
    f = height,
    l = 0,
    p = -(a.v4 * c);
  for (
    t6.fillStyle = "#4576aa",
      m0(0, 0, width, height),
      e0(e3, width, height, h3, resolution * i2 * v),
      e0(e2, width, height, h4, resolution * i3 * v),
      e0(e1, width, height, h6, resolution * i4 * v),
      $ = 0;
    $ < v0.l3;
    $++
  )
    ((i = v3.o9((a.index + $) % v3.o9Count())).u9 = i.index < a.index),
      (i.fog = b3($ / v0.l3, v0.fogDensity)),
      (i.clip = f),
      v0.t2(i.p1, -l, i.u9, width, height),
      v0.t2(i.p2, -l, i.u9, width, height),
      v0.t2(i.p3, -l - p, i.u9, width, height),
      v0.t2(i.p4, -l - p, i.u9, width, height),
      (l += p),
      (p += i.v4),
      i.p1.v0.z <= v0.depth ||
        i.p3.u6.y >= i.p1.u6.y ||
        i.p3.u6.y >= f ||
        (k2(i), (f = i.p1.u6.y));
  for ($ = v0.l3 - 1; $ > 0; $--) {
    for (t = 0, i = v3.o9((a.index + $) % v3.o9Count()); t < i.cars.length; t++)
      if (0 !== (s = i.cars[t]).index) {
        _ = s.sprite;
        var d = g4(i.p1.u6.scale, i.p3.u6.scale, s.percent);
        (r =
          g4(
            (i.p1.u6.x + i.p2.u6.x) / 2,
            (i.p3.u6.x + i.p4.u6.x) / 2,
            s.percent
          ) +
          (d * s.x * width) / 2),
          (h = g4(i.p1.u6.y, i.p4.u6.y, s.percent));
        var _ = b7;
        (e = (s.width * d) / _.w),
          s.s4 ? (_ = f1) : s.q8 && (_ = d3),
          m1(_, e, r, h, i.clip, i.fog);
      }
    for (t = 0; t < i.t1.length; t++) {
      (_ = i.t1[t]),
        (e = i.p1.u6.scale),
        (r =
          i.p1.u6.x -
          (i.p1.v8.x * i.p1.u6.scale * width) / 2 +
          (e * _.x * width) / 2),
        (h = i.p1.u6.y),
        (e = _.s * e),
        m1(_.u5, e, r, h, i.clip, !1);
      var g,
        m = r + 0 * ((_.u5.w * e * width) / 2);
      (e = i.p1.u6.scale), (e = _.s * e);
      var k = (_.u5.cx * e * width) / 2;
      _.u5.cw, (r = m + k);
    }
    if (i == o) {
      var w = g4(o.p1.u6.y, o.p3.u6.y, u),
        b = (w =
          height / 2 -
          ((v0.depth / v0.t7) * g4(o.p1.v0.y, o.p3.v0.y, u) * height) / 2);
      cars[0].t9 > 0 && (w -= (((cars[0].t9 * v0.depth) / v0.t7) * height) / 2);
      var q = width / 2,
        d = g4(o.p1.u6.scale, o.p3.u6.scale, u);
      r =
        g4((o.p1.u6.x + o.p2.u6.x) / 2, (o.p3.u6.x + o.p4.u6.x) / 2, u) +
        (d * cars[0].x * width) / 2;
      var z = { v8: { x: u1.x, y: u1.y, z: u1.z }, v0: {}, u6: {} };
      v0.t2(z, 0, o.index < a.index, width, height), (q = z.u6.x);
      var I = 0;
      u1.v7 > 0 && (I = 0 != u1.h8 ? u1.h8 : u1.s4 ? -1 : u1.q8 ? 1 : 0),
        m2(v0.depth / v0.t7, q, w, I, o.p3.v8.y - o.p1.v8.y, b),
        4 == race.state && t6.drawImage(v3.m7, -40, 200, 400, 400);
    }
  }
}
var Car = function () {
  var $ = this;
  ($.sprite = 0),
    ($.index = 0),
    ($.width = 500),
    ($.height = 0),
    ($.x = 0),
    ($.y = 0),
    ($.lastY = !1),
    ($.t9 = 0),
    ($.z = 0),
    ($.lap = 0),
    ($.lapStarted = !1),
    ($.position = 0),
    ($.n4 = 0.3),
    ($.f2 = []),
    ($.c7 = !1),
    ($.p8 = 0),
    ($.h2 = 0),
    ($.percent = 0),
    ($.v7 = 0),
    ($.v1 = 0),
    ($.v5StartTime = 0),
    ($.q0 = $.brake = $.s4 = $.q8 = $.v5 = $.l5 = $.l8 = !1),
    ($.m6 = 0),
    ($.h8 = 0),
    ($.o1 = 100),
    ($.lapStarted = !1),
    ($.n4 = 0.3),
    ($.r6 = 275e2), // 속도 변수
    ($.i8 = 3e4), // 부스터 변수
    ($.v7Percent = 0),
    ($.accel = 6800),
    ($.r8 = -16e3),
    ($.decel = -8e3),
    ($.h5 = 0),
    ($.lastLapTime = null),
    ($.position = 0),
    ($.r3 = 3e3),
    ($.slowOnCorners = !1),
    ($.c5 = !1),
    ($.u8 = 1.5),
    ($.g5 = 0);
};
Car.prototype = {
  k7: function ($, t, i) {
    return $ + t * i;
  },
  b6: function () {
    this.f2 = [];
    var $,
      t,
      i = this.z + 500,
      s = 0;
    if (!1 === this.c7)
      for ($ = 0, this.c7 = []; $ < 20; $++) this.c7.push(r9());
    for ($ = 0; $ < 20; $++) {
      (this.c7[$] += 0.03), this.c7[$] >= 0.8 && (this.c7[$] = 0);
      var _ = 460;
      s > PI / 6 && s < PI / 2 && (_ = 460 + (s - PI / 6) * 128),
        s >= PI / 2 && s < (5 * PI) / 6 && (_ = 460 + ((5 * PI) / 6 - s) * 128);
      var e = this.x + this.width / 2 + 360 * Math.cos(s - 0.05),
        r = this.y + 360 * sin(s - 0.02),
        h = this.x + this.width / 2 + 360 * Math.cos(s + 0.05),
        a = this.y + 360 * sin(s + 0.02),
        c = this.x + this.width / 2 + _ * Math.cos(s - 0.05),
        o = this.y + _ * sin(s - 0.05),
        u = this.x + this.width / 2 + _ * Math.cos(s + 0.05),
        v = this.y + _ * sin(s + 0.05),
        f = e + (c - e) * this.c7[$],
        l = h + (u - h) * this.c7[$],
        p = r + (o - r) * this.c7[$],
        d = a + (v - a) * this.c7[$],
        g = e + (c - e) * (this.c7[$] + 0.4),
        m = h + (u - h) * (this.c7[$] + 0.4),
        k = r + (o - r) * (this.c7[$] + 0.4),
        w = a + (v - a) * (this.c7[$] + 0.4),
        b = i - 700 * this.c7[$],
        q = i - 700 * (this.c7[$] + 0.4),
        z = [];
      z.push({ v8: { x: f, y: p, z: b }, v0: {}, u6: {} }),
        z.push({ v8: { x: l, y: d, z: b }, v0: {}, u6: {} }),
        z.push({ v8: { x: m, y: w, z: q }, v0: {}, u6: {} }),
        z.push({ v8: { x: g, y: k, z: q }, v0: {}, u6: {} }),
        this.f2.push(z),
        (s += PI / 20);
    }
    for ($ = 0; $ < this.f2.length; $++) {
      var I = this.f2[$];
      for (t = 0; t < I.length; t++) v0.t2(I[t], 0, 0, width, height);
    }
  },
  limit: function ($, t, i) {
    return Math.max(t, Math.min($, i));
  },
  t0: function ($, t, i, s, _) {
    return !(
      $ + t * _ < i - ((_ - 1) * s) / 2 || $ - ((_ - 1) * t) / 2 > i + s * _
    );
  },
  setTurnLeft: function ($) {
    this.s4 = $;
  },
  k8: function ($) {
    this.q8 = $;
  },
  j0: function ($) {
    this.q0 = $;
  },
  r5: function ($) {
    this.brake = $;
  },
  s2: function ($) {
    this.l5 = $;
  },
  setDrift: function ($) {
    this.l8 = $;
  },
  d2: function () {
    return this.h5;
  },
  getLap: function () {
    return this.lap < 1 ? 1 : this.lap;
  },
  n2: function () {
    var $ = this.position,
      t = $ % 10,
      i = $ % 100;
    return 1 == t && 11 != i
      ? $ + "st"
      : 2 == t && 12 != i
      ? $ + "nd"
      : 3 == t && 13 != i
      ? $ + "rd"
      : $ + "th";
  },
  r7: function () {
    return this.v7;
  },
  update: function ($) {
    var t = this.r6;
    this.v7Percent = this.v7 / this.r6;
    var i = v3.n1(this.z),
      s = v3.n1(cars[0].z),
      _ = this.v7Percent;
    this.percent = b2(this.z, v2.u0Length);
    var e = $ * this.r3 * _,
      r = i.p1.v8.x,
      h = i.p2.v8.x,
      a = this.x,
      c = this.x + this.width,
      o = a - r,
      u = h - c,
      v = h - r,
      f = 1;
    i.v4 < 0 && o > 0
      ? 0 == this.index && (f = 1 + -((v - this.width - o) * i.v4) / (80 * v))
      : i.v4 > 0 &&
        u > 0 &&
        0 == this.index &&
        (f = 1 + ((v - this.width - u) * i.v4) / (80 * v)),
      f < 1 && (f = 1);
    var l = 0.8,
      p = 1;
    this.h2 > 0 && (l += 0.4),
      this.l8
        ? this.v7 > 8e3
          ? this.v6 || this.q0 || ((this.m6 = 1.2), (this.v6 = !0))
          : ((l -= 0.5), (this.v6 = !1))
        : (this.v6 = !1),
      this.m6 > 0 && this.v7 > 8e3
        ? ((this.m6 -= $),
          (l -= 0.04),
          0 == this.h8 && (this.s4 && (this.h8 = -1), this.q8 && (this.h8 = 1)))
        : ((this.v6 = !1), (this.m6 = 0), (this.h8 = 0));
    var d = this.v5;
    if (
      (this.l5
        ? (this.v5 = this.o1 > 0 && this.v7 > 8e3 && this.q0)
        : (this.v5 = !1),
      this.v5 && ((p = 1.2), (t = this.i8)),
      (this.u8 = 3.4),
      (o < -(0.1 * this.width) || u < -(0.1 * this.width)) &&
        (o + 0.1 * this.width < -s.r0 || u + 0.1 * this.width < -s.r0
          ? ((this.u8 = 9.5), (l -= 0.6), (p -= 0.2))
          : ((l -= 0.1), (this.u8 = 6))),
      (this.u8 = this.u8 * r9() * _),
      0 == this.index && 5 != race.state)
    ) {
      (this.x = this.x - e * _ * s.v4 * this.n4),
        0 != this.h8 && (e *= 0.5),
        this.s4 ? (this.x = this.x - e) : this.q8 && (this.x = this.x + e);
      var g = this.h8 * this.v7 * 55e-5;
      if (
        ((this.x += g),
        (this.z = l0(this.z, $ * this.v7 * f, v3.r2())),
        (this.y = g4(i.p1.v8.y, i.p3.v8.y, this.percent)),
        (this.t9 = 0),
        this.q0)
      ) {
        if (this.v5) {
          var m = l2();
          d || (this.v5StartTime = m),
            (this.o1 -= 2.45 * $),
            b0(m - this.v5StartTime);
        }
        this.v7 < t * l
          ? (this.v7 = this.k7(this.v7, this.accel * p, $))
          : ((this.v7 = this.k7(this.v7, this.decel, $)),
            this.v7 < t * l && (this.v7 = t * l));
      } else
        this.brake
          ? (this.v7 = this.k7(this.v7, this.r8, $))
          : (this.v7 = this.k7(this.v7, this.decel, $));
      for (var k = 0; k < s.t1.length; k++) {
        var w = s.t1[k],
          b = w.s * w.u5.cw,
          q = w.x + w.u5.cx * w.s,
          z = this.x;
        if (this.t0(z, this.width, q, b, 1)) {
          0 == this.index && (g8(), (this.p8 = 0), (this.h2 = 0)),
            (this.v7 = t / 5),
            (this.z = l0(s.p1.v8.z, 0, v3.r2()));
          break;
        }
      }
      for (var I = !1, T = 0; T < cars.length; T++) {
        var j = cars[T].z - u1.z;
        if ((u1.z > v3.r2() - 1200 && (j -= v3.r2()), j > 0 && j < 1800)) {
          var C = (u1.x - cars[T].x) / cars[T].width;
          C < 0 && (C = -C), C < 0.4 && (I = !0);
        }
      }
      I && this.v7 > 8e3
        ? ((this.p8 += 1 * $), this.p8 > 0.14 && (this.h2 = 2))
        : (this.p8 = 0),
        this.h2 > 0 && (this.h2 -= $);
    } else {
      this.v7 < t && (this.v7 = this.k7(this.v7, this.accel, $));
      var L = this.d1(i, s, u1.width),
        P = this.x + L * e;
      0 == i.v4
        ? ((this.s4 = -1 == L), (this.q8 = 1 == L))
        : ((this.s4 = i.v4 < -0.5), (this.q8 = i.v4 > 0.5)),
        P + this.width < 0.6 * h && P > 0.8 * r && (this.x = P),
        (this.z = l0(this.z, $ * this.v7, v3.r2()));
    }
    this.percent = b2(this.z, v2.u0Length);
    var S = v3.n1(this.z);
    if (0 === this.index)
      for (k = 0; k < S.cars.length; k++) {
        var R = S.cars[k];
        if (
          R.index != this.index &&
          this.v7 > R.v7 &&
          this.t0(this.x, this.width, R.x, R.width, 1)
        ) {
          0 !== this.index
            ? ((this.v7 = R.v7 / 2), 0 !== R.index && (R.v7 = 1.2 * R.v7))
            : (0 == this.index && (g8(), (this.p8 = 0), (this.h2 = 0)),
              (this.v7 = R.v7),
              (this.z = R.z - 100));
          break;
        }
      }
    if (
      (this.x + this.width / 2 < r - 1.2 * this.width &&
        (this.x = r - 1.2 * this.width - this.width / 2),
      this.x + this.width / 2 > h + 1.2 * this.width &&
        (this.x = h + 1.2 * this.width - this.width / 2),
      (this.v7 = this.limit(this.v7, 0, t)),
      0 == this.index && b5(this.v7Percent),
      i != S)
    ) {
      var D = i.cars.indexOf(this);
      i.cars.splice(D, 1), S.cars.push(this);
    }
    this.z < 1.2 * v2.u0Length && !this.lapStarted
      ? (this.lap++,
        (this.lapStarted = !0),
        (this.lastLapTime = this.h5),
        2 == this.lap &&
          0 == this.index &&
          speak("lap time " + this.d2().toFixed(2)),
        (this.h5 = 0))
      : (this.z > 1.2 * v2.u0Length && (this.lapStarted = !1), (this.h5 += $));
    var B = this.position;
    this.position = 1;
    for (var T = 0; T < cars.length; T++)
      T != this.index &&
        (cars[T].lap > this.lap
          ? this.position++
          : cars[T].lap === this.lap && cars[T].z > this.z && this.position++);
    0 == this.index &&
      (this.e7 > 0 && (this.e7 -= $),
      this.position !== B && ((this.newPosition = this.n2()), (this.e7 = 1))),
      0 === this.index &&
        3 === this.lap &&
        5 != race.state &&
        ((this.g5 = this.n2()),
        speak("Race. Over."),
        speak(this.g5 + " Place"),
        (this.v5 = !1),
        (this.p8 = 0),
        (this.h2 = 0),
        race.raceOver());
  },
  d1: function ($, t, i) {
    for (var s = null, _ = v3.o9Count(), e = 1; e < 60; e++) {
      var r = (s = v3.o9(($.index + e) % _)).p1.v8.x,
        h = s.p2.v8.x,
        a = 0;
      if (e < 8)
        for (n = 0; n < s.cars.length; n++) {
          var c = s.cars[n],
            o = c.x;
          c.width;
          var u = c.x + c.width;
          return (
            (3 *
              (a =
                h - u < 1.4 * this.width
                  ? -1
                  : o - r < 1.4 * this.width
                  ? 1
                  : o - r > h - u
                  ? -1
                  : 1)) /
            e
          );
        }
    }
    if (this.c5)
      for (var e = 1; e < 60; e++) {
        var r = (s = v3.o9(($.index + e) % _)).p1.v8.x,
          h = s.p2.v8.x;
        if (s.v4 > 0) {
          if (e < 5) return 0.2;
          return 2 / e;
        }
        if (s.v4 < 0) {
          if (e < 5) return -0.2;
          return 2 / e;
        }
      }
    return 0;
  },
};
var e4 = "#a02222",
  g2 = "#BBBBBB",
  d4 = "#000000",
  g3 = "#000000",
  n9 = "#000000",
  v2 = function () {
    (this.v3Length = 0), (this.l4 = 0), (this.u0s = []), (this.map = null);
  },
  q4 = 1200;
v2.u0Length = 300;
var lanes = 1;
v2.prototype = {
  buildv20: function () {
    (q1 = 0), (this.u0s = []), this.m9(200), this.e9();
  },
  createStreetLights: function () {
    for (var $ = this.o9Count(), t = 0; t < $; t++) {
      var i = this.u0s[t];
      if (t % 20 == 0) {
        var s = i.p1.v8.x;
        i.t1.push({ u5: a7, s: 12, x: s - 12 * a7.w + 700 });
        var s = i.p2.v8.x;
        i.t1.push({ u5: a5, s: 12, x: s - 700 });
      }
    }
  },
  createRoadsideObjects: function ($, t, i, s, _) {
    for (var e = this.o9Count(), r = 0, h = 0; h < e; h++) {
      var a = this.u0s[h],
        c = r9();
      if (0 != a.v4 && _) {
        if (r % 20 == 0) {
          if (a.v4 > 0) {
            var o = a.p1.v8.x;
            a.t1.push({ u5: d0, s: 3, x: o - 3 * d0.w - 400 });
          } else {
            var o = a.p2.v8.x;
            a.t1.push({ u5: d8, s: 3, x: o + 400 });
          }
        }
        r++;
      } else {
        r = 0;
        var u = $[m8($.length)];
        if (c > t) {
          var o = a.p1.v8.x;
          a.t1.push({ u5: u, s: i, x: o - (i * u.w) / 2 - s });
          var o = a.p2.v8.x;
          a.t1.push({ u5: u, s: i, x: o - (i * u.w) / 2 + s });
        }
      }
    }
  },
  o3: function () {
    (n9 = "#3a3a3a"),
      (d4 = "#047804"),
      (g3 = "#006A00"),
      (c6 = q2),
      (q1 = 0),
      j2(),
      e5(),
      createTrees(),
      b1(),
      a3(),
      o6(),
      this.m9(50),
      this.g6(1, 0),
      this.t3(50, 50, 39, 0, 40, 0),
      this.g6(1, 0),
      this.m9(25),
      this.g9(-1, 0),
      this.g9(1, 0),
      this.addHill(50, 40),
      this.g6(1, 0),
      this.g9(-1, 0),
      this.g9(1, 0),
      this.g6(1, -40),
      this.m9(50, -40),
      this.m9(55, 0),
      this.e9(),
      this.drawMap(),
      this.createRoadsideObjects(k1, 0.9, 10, 900, !0);
  },
  o2: function () {
    (n9 = "#3a3a3a"),
      (d4 = "#047804"),
      (g3 = "#006A00"),
      (c6 = q2),
      (q1 = 0),
      j2(),
      o6(),
      e5(),
      createTrees(),
      b1(),
      a3(),
      j5(),
      this.m9(20),
      this.m9(46, 0),
      this.g6(1, 30),
      this.m9(90, 0),
      this.d7(1, 0),
      this.m9(25, 0),
      this.d7(1, 50),
      this.m9(25, 0),
      this.d7(-1, 0),
      this.m9(68, -50),
      this.d7(-1, 0),
      this.d7(1, 0),
      this.d7(1, 0),
      this.m9(48, 0),
      this.g6(1, -30),
      this.m9(38, 0),
      this.g9(-1, 0),
      this.g9(1, 0),
      this.e9(),
      this.drawMap(),
      this.createRoadsideObjects([e8], 0.3, 6, 1300, !0);
  },
  n8: function () {
    (n9 = "#3a3a3a"),
      (d4 = "#5a5a5a"),
      (g3 = "#626262"),
      (c6 = q2),
      (q1 = 0),
      j2(),
      o6(),
      f8(!1),
      c3(!1),
      a4(!1),
      this.m9(100),
      this.d7(1, 0),
      this.m9(151, 0),
      this.h1(1, 0),
      this.m9(30, 0),
      this.h1(1, 0),
      this.m9(80, 0),
      this.d7(-1, 0),
      this.d7(-1, 0),
      this.m9(20, 0),
      this.d7(1, 0),
      this.m9(10, 0),
      this.h1(1, 0),
      this.m9(50, 0),
      this.d7(-1, 0),
      this.d7(1, 0),
      this.d7(1, 0),
      this.m9(62, 0),
      this.e9(),
      this.drawMap(),
      this.createRoadsideObjects(c8, 0.95, 20, 3300, !1),
      this.createStreetLights();
  },
  o4: function () {
    (n9 = "#111111"),
      (c6 = "#555555"),
      (q1 = "#000000"),
      (d4 = "#090909"),
      (g3 = "#030303"),
      j2(),
      o6(),
      f8(!0),
      c3(!0),
      a4(!0),
      i0(),
      this.m9(100),
      this.addHardCurve180(1, 0),
      this.h1(-1, 0),
      this.m9(40, 0),
      this.h1(1, 0),
      this.h1(-1, 0),
      this.h1(1, 0),
      this.m9(50, 0),
      this.d7(-1, 0),
      this.m9(20, 0),
      this.d7(1, 0),
      this.h1(1, 0),
      this.m9(60, 0),
      this.d7(-1, 0),
      this.d7(1, 0),
      this.m9(51, 0),
      this.h1(1, 0),
      this.m9(110, 0),
      this.e9(),
      this.drawMap(),
      this.createRoadsideObjects(c8, 0.95, 20, 3300, !1),
      this.createStreetLights();
  },
  lastY: function () {
    return 0 == this.u0s.length ? 0 : this.u0s[this.u0s.length - 1].p3.v8.y;
  },
  o9: function ($) {
    return this.u0s[$];
  },
  o9Count: function () {
    return this.u0s.length;
  },
  r2: function () {
    return this.v3Length;
  },
  e9: function () {
    this.v3Length = v3.u0s.length * v2.u0Length;
  },
  addSegment: function ($, t) {
    var i = this.u0s.length,
      s = this.lastY(),
      _ = t,
      e = i * v2.u0Length,
      r = (i + 1) * v2.u0Length,
      h = -q4,
      a = q4,
      c = 0;
    0 != $ && ((c = 40 * $) < 0 && (c = -c), (c += 60)),
      this.u0s.push({
        index: i,
        p1: { v8: { x: h, y: s, z: e }, v0: {}, u6: {} },
        p2: { v8: { x: a, y: s, z: e }, v0: {}, u6: {} },
        p3: { v8: { x: a, y: _, z: r }, v0: {}, u6: {} },
        p4: { v8: { x: h, y: _, z: r }, v0: {}, u6: {} },
        v4: $,
        r0: c,
        t1: [],
        cars: [],
        color: u4.LIGHT,
      });
  },
  easeIn: function ($, t, i) {
    return $ + (t - $) * Math.pow(i, 2);
  },
  easeOut: function ($, t, i) {
    return $ + (t - $) * (1 - Math.pow(1 - i, 2));
  },
  easeInOut: function ($, t, i) {
    return $ + (t - $) * (-Math.cos(i * Math.PI) / 2 + 0.5);
  },
  t3: function ($, t, i, s, _, e) {
    var r,
      e = e || 0,
      h = this.l4 + e,
      a = this.lastY(),
      c = a + Math.floor(_) * v2.u0Length,
      o = $ + t + i,
      u = 0,
      v = 0,
      f = this.u0s.length;
    for (r = 0; r < $; r++)
      (v += u = this.easeIn(0, s, r / $)),
        this.addSegment(u, this.easeInOut(a, c, r / o));
    for (r = 0; r < t; r++)
      (v += u = s), this.addSegment(s, this.easeInOut(a, c, ($ + r) / o));
    for (r = 0; r < i; r++)
      (v += u = this.easeInOut(s, 0, r / i)),
        this.addSegment(u, this.easeInOut(a, c, ($ + t + r) / o));
    var l = 0;
    0 != v && (l = (h - this.l4) / v);
    for (var p = f; p < this.u0s.length; p++)
      (this.l4 += this.u0s[p].v4 * l), (this.u0s[p].angle = this.l4);
    (this.l4 = h), (this.u0s[this.u0s.length - 1].angle = h);
  },
  m9: function ($, t) {
    (t = t || 0), this.t3($, $, $, 0, t, 0);
  },
  addBumps: function () {
    this.t3(10, 10, 10, 0, 5),
      this.t3(10, 10, 10, 0, -2),
      this.t3(10, 10, 10, 0, -5),
      this.t3(10, 10, 10, 0, 8),
      this.t3(10, 10, 10, 0, 5),
      this.t3(10, 10, 10, 0, -7),
      this.t3(10, 10, 10, 0, 5),
      this.t3(10, 10, 10, 0, -2);
  },
  g6: function ($, t) {
    this.t3(25, 140, 25, 4.25 * $, t, 90 * $);
  },
  g9: function ($, t) {
    this.t3(25, 50, 25, 4.25 * $, t, 30 * $);
  },
  d7: function ($, t) {
    this.t3(25, 75, 25, 5.76 * $, t, 90 * $);
  },
  h1: function ($) {
    this.t3(18, 40, 18, 8 * $, 0, 90 * $);
  },
  addHardCurve180: function () {
    this.t3(50, 50, 50, 7.5, 0, 180);
  },
  addHill: function ($, t) {
    this.t3($, $, $, 0, t, 0);
  },
  t3sideObject: function ($, t, i) {
    var s = this.u0s[$],
      _ = 0;
    (_ = i < 0 ? s.p1.v8.x - 600 : s.p2.v8.x + 600), s.t1.push({ u5: t, x: _ });
  },
  n1: function ($) {
    return this.u0s[Math.floor($ / v2.u0Length) % this.u0s.length];
  },
  drawMap: function () {
    null == this.map && (this.map = document.createElement("canvas")),
      (this.map.width = 600),
      (this.map.height = 600),
      (cntx = this.map.getContext("2d")),
      canvas.width,
      canvas.height,
      j7(600, 600),
      g0("#666666"),
      (cntx.lineWidth = 5);
    var $ = 0,
      t = 300,
      i = 30;
    k3();
    var s = 0.5;
    p0(t, i);
    for (var _ = 0; _ < this.u0s.length; _++)
      o8(
        (t += s * cos(($ = (this.u0s[_].angle / 180) * PI))),
        (i += s * sin($))
      ),
        (this.u0s[_].x = t),
        (this.u0s[_].y = i);
    p2(),
      g0(q7),
      (cntx.lineWidth = 4),
      p2(),
      (s = 4),
      (t6.lineWidth = 3),
      g0(q7),
      k3(),
      p0(
        (t -= s * cos(($ = ((this.u0s[0].angle + 90) / 180) * PI))),
        (i -= s * sin($))
      ),
      o8((t += 2 * s * cos($)), (i += 2 * s * sin($))),
      p2();
  },
  c9: function () {
    (cntx = j1.x),
      (this.m7 = j1.c),
      j7(600, 600),
      i5(this.map, 0, 0, 600, 600, 0, 0, 600, 600);
    for (var $ = 0; $ < cars.length; $++) {
      var t = cars[$].z,
        i = v3.n1(t);
      k3(),
        t4(i.x, i.y, 5, 0, 2 * PI, !1),
        k4(r4),
        s9(),
        (cntx.lineWidth = 2),
        g0("#999999"),
        p2();
    }
    var s = cars[0].z,
      _ = v3.n1(s);
    k3(),
      t4(_.x, _.y, 5, 0, 2 * PI, !1),
      k4("#ff0000"),
      s9(),
      (t6.lineWidth = 2),
      g0(q2),
      p2();
  },
};
var v3 = null,
  numbers = ["ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT"],
  Race = function () {
    (this.v3 = null),
      (this.state = 0),
      (this.f0 = 3),
      (this.lastTime = 0),
      (this.s1 = 20), // 플레이어 변수
      (this.v3Number = 0),
      (this.zIsDown = !1),
      (this.xIsDown = !1),
      (this.raceNumber = 0);
  };
(Race.c4 = 800),
  (Race.prototype = {
    init: function () {},
    start: function ($) {
      switch (
        (b5(0), $ >= 4 && ($ = 0), (this.raceNumber = $), (v3 = new v2()), $)
      ) {
        case 0:
          v3.o3();
          break;
        case 1:
          v3.o2();
          break;
        case 2:
          v3.n8();
          break;
        case 3:
          v3.o4();
      }
      this.resetCars(),
        (u1 = cars[0]).b6(),
        (this.state = 0),
        (this.f0 = 4),
        (this.lastTime = l2());
    },
    raceOver: function () {
      this.state = 5;
    },
    keyDown: function ($) {
      if (5 !== this.state)
        switch ($.keyCode) {
          case 90:
            (this.zIsDown = !0), u1.setDrift(!0);
            break;
          case 88:
            (this.xIsDown = !0), u1.s2(!0);
            break;
          case 38:
            u1.j0(!0);
            break;
          case 40:
            u1.r5(!0);
            break;
          case 37:
            u1.setTurnLeft(!0);
            break;
          case 39:
            u1.k8(!0);
        }
    },
    keyUp: function ($) {
      if (5 != this.state)
        switch ($.keyCode) {
          case 90:
            (this.zIsDown = !1), u1.setDrift(!1);
            break;
          case 88:
            (this.xIsDown = !1), u1.s2(!1);
            break;
          case 38:
            u1.j0(!1);
            break;
          case 40:
            u1.r5(!1);
            break;
          case 37:
            u1.setTurnLeft(!1);
            break;
          case 39:
            u1.k8(!1);
        }
      else
        90 == $.keyCode &&
          (this.zIsDown || this.start(this.raceNumber), (this.zIsDown = !1)),
          88 == $.keyCode &&
            (this.xIsDown ||
              "1st" != cars[0].g5 ||
              this.start(this.raceNumber + 1),
            (this.xIsDown = !1));
    },
    resetCars: function () {
      cars = [];
      for (var $, t, i, s, _, $ = 0; $ < this.s1; $++) {
        s = v3.r2() - (this.s1 - $) * v2.u0Length * 13;
        var e = (i = v3.n1(s)).p1.v8.x,
          r = i.p2.v8.x;
        t = new Car();
        var h = 0;
        (h = $ % 2 ? e / 2 : r / 2 - t.width),
          (t.index = $),
          (t.x = h),
          (t.z = s),
          (t.sprite = _),
          (t.v7 = 0),
          (t.percent = b2(t.z, v2.u0Length)),
          0 !== t.index &&
            (t.index < 8 && t.index > 3
              ? (t.r6 = 20815 - (r9() * (this.s1 - $ - 1) * 23e3) / 55)
              : t.index > 12
              ? (t.r6 = 20815 - ((this.s1 - $ - 1) * 23e3) / 65)
              : (t.r6 = 20815 - ((this.s1 - $ - 1) * 23e3) / 45),
            (t.accel = 11500),
            t.index < 4
              ? (t.c5 = !1)
              : t.index < 8 &&
                ((t.c5 = r9() > 0.4), (t.slowOnCorners = r9() > 0.6))),
          i.cars.push(t),
          cars.push(t);
      }
    },
    j3: function ($) {
      l2() - this.lastTime > Race.c4 &&
        ((this.lastTime = l2()),
        this.f0--,
        3 == this.f0 && speak("RACE"),
        2 == this.f0 && speak(numbers[this.raceNumber]),
        this.f0 <= 0 && ((this.state = 1), (this.f0 = 3), i7(220, 1 / 4))),
        v0.update($);
    },
    f9: function ($) {
      l2() - this.lastTime > Race.c4 &&
        ((this.lastTime = l2()),
        this.f0--,
        this.f0 <= 0 ? (i7(440, 0.5), (this.state = 4)) : i7(220, 1 / 4)),
        v0.update($);
    },
    updateRace: function ($) {
      for (
        var t = v3.n1(u1.z), i = (u1.v7Percent, v0.z), s = 0;
        s < cars.length;
        s++
      )
        cars[s].update($);
      v0.update($),
        (h3 = l0(h3, (i2 * t.v4 * (v0.z - i)) / v2.u0Length, 1)),
        (h4 = l0(h4, (i3 * t.v4 * (v0.z - i)) / v2.u0Length, 1)),
        (h6 = l0(h6, (i4 * t.v4 * (v0.z - i)) / v2.u0Length, 1));
    },
    h7: function () {},
    update: function ($) {
      switch (this.state) {
        case 0:
          this.j3($);
          break;
        case 1:
          this.f9($);
          break;
        case 5:
        case 4:
          this.updateRace($);
      }
    },
    render: function () {
      if (
        (l7(),
        0 == this.state &&
          ((t6.font = "italic bold 350px " + q6),
          this.f0 < 4 &&
            (k4(r4), k9("RACE", 14, 304), k4(q7), k9("RACE", 10, 300)),
          this.f0 < 3 &&
            (0 == this.raceNumber
              ? (t6.font = "italic bold 440px " + q6)
              : 1 == this.raceNumber
              ? (t6.font = "italic bold 430px " + q6)
              : 2 == this.raceNumber
              ? (t6.font = "italic bold 290px " + q6)
              : 3 == this.raceNumber && (t6.font = "italic bold 358px " + q6),
            k4(r4),
            k9(numbers[this.raceNumber], 14, 674),
            k4(q7),
            k9(numbers[this.raceNumber], 10, 670))),
        1 == this.state &&
          ((t6.font = " 300px " + q6),
          (t6.fillStyle = "#111111"),
          t6.fillText(this.f0, 449, 254),
          (t6.fillStyle = q7),
          t6.fillText(this.f0, 445, 250)),
        4 == this.state)
      ) {
        k4(q7),
          g0(q7),
          (t6.font = " 80px " + q6),
          t6.fillText(u1.n2(), 10, 80),
          (t6.font = " 40px " + q6),
          t6.fillText("Lap " + u1.getLap() + " of 2", 10, 130),
          t6.fillText("Lap Time: " + u1.d2().toFixed(2), 10, 180),
          (t6.font = " 80px " + q6);
        var $ = ("000" + Math.round(u1.r7() / 100).toString(10)).substr(-3);
        t6.fillText($ + "km/h", 695, 80),
          (t6.font = " 40px " + q6),
          t6.fillText("Turbo ", 670, 136),
          k3(),
          t6.rect(796, 110, 208, 28),
          p2(),
          m0(800, 114, 2 * u1.o1, 20),
          cars[0].e7 > 0 &&
            ((t6.font = " 160px " + q6),
            k4(q7),
            t6.fillText(cars[0].n2(), 334, 184));
      }
      if (5 == this.state) {
        (t6.font = " 300px " + q6),
          k4(q7),
          t6.fillText(cars[0].g5, 300, 290),
          (t6.font = " 40px " + q6);
        var t = 380;
        "1st" == cars[0].g5 && (t6.fillText("x: Next Race", 397, t), (t += 80)),
          t6.fillText("z: Retry", 445, t);
      }
    },
  });
var canvas = document.getElementById("gameCanvas"),
  t6 = canvas.getContext("2d"),
  u7 = !1,
  l2 = function () {
    return performance.now();
  };
document.addEventListener("keydown", function ($) {
  u7 ? race.keyDown($) : m4.keyDown($);
}),
  document.addEventListener("keyup", function ($) {
    u7 ? race.keyUp($) : m4.keyUp($);
  });
var now = l2(),
  last = l2(),
  dt = 0,
  gdt = 0,
  cars = [],
  u1 = null,
  v0 = new u3(),
  race = new Race();
v3 = new v2();
var m4 = new m5(canvas, t6);
function startGame($) {
  i6(), speak("Start"), (u7 = !0), v0.reset(), race.start(0);
}
function frame() {
  if (((gdt += dt = Math.min(1, ((now = l2()) - last) / 1e3)), u7)) {
    n3 = !1;
    for (var $ = 1 / 180; gdt > $; ) (gdt -= $), race.update($);
    v3.c9(), race.render(), (last = now);
  } else m4.render(dt), (gdt = 0);
  requestAnimationFrame(frame);
}
m4.init(), frame();
var s0 = null,
  n7 = null,
  f6 = null,
  f5 = null,
  d5 = 0,
  f4 = 0,
  d6 = 1,
  f3 = 1,
  f7 = [],
  g7 = [];
function b0($) {
  f3 = 1 + $ / 1e4;
}
function i6() {
  null == s0 &&
    ((s0 = new (window.AudioContext || window.webkitAudioContext)()),
    a0(),
    a1(),
    a2(),
    ((f6 = s0.createScriptProcessor(1024, 1, 1)).onaudioprocess = function ($) {
      for (
        var t, i = $.outputBuffer.getChannelData(0), s = 0;
        s < i.length;
        ++s
      )
        u1.v5
          ? ((d5 += d6 + Math.random()),
            (f4 += f3),
            (t = Math.floor(f4) % g7.length),
            (i[s] = g7[t]),
            (t = Math.floor(d5) % f7.length),
            (i[s] += f7[t] + 0.01 * Math.random()))
          : ((d5 += d6 + 1 * Math.random()),
            (t = Math.floor(d5) % f7.length),
            (i[s] = f7[t] + 0.01 * Math.random())),
          u1.h2 > 0 && (i[s] += 0.4 * Math.random());
      (d5 %= f7.length), (f4 %= g7.length);
    }),
    ((f5 = s0.createGain()).gain.value = 0.14),
    f6.connect(f5),
    f5.connect(s0.destination));
}
function a1() {
  g7 = [];
  for (var $ = 0, t = 0; t < 1024; t++) {
    for (
      var i = 0;
      i < 12 && ((g7[$++] = 0.01 * Math.random()), !($ >= 1024));
      i++
    );
    if ($ < 1024)
      for (var s = 0; s < 2 && ((g7[$++] = 0.2), !($ >= 1024)); s++);
  }
  for (var t = 0; t < 1024; t++) g7[t] += 0.5 * Math.random() - 0.05;
}
function a0() {
  var $,
    t,
    i = 1,
    s = 0;
  (f7 = [])[s++] = 1;
  for (var _ = 0.05; _ < 1; _ += Math.random() / 8 + 0.01) {
    t = Math.floor(1024 * _);
    for (
      var e = t - (s - 1), r = (($ = 2 * Math.random() - 1) - i) / e, h = 0;
      h < e;
      h++
    )
      f7[s++] = i + r * h;
    i = $;
  }
  for (var r = (1 - i) / (e = 1024 - (s - 1)), h = 0; h < e; h++)
    f7[s++] = i + r * h;
}
function a2() {
  for (
    var $ = 2 * s0.sampleRate,
      t = (n7 = s0.createBuffer(1, $, s0.sampleRate)).getChannelData(0),
      i = 0;
    i < $;
    i++
  )
    t[i] = 2 * Math.random() - 1;
}
function i7($, t) {
  var i = s0.createGain(),
    s = s0.createOscillator();
  s.connect(i),
    i.connect(s0.destination),
    (s.type = "triangle"),
    (s.frequency.value = $),
    (i.gain.value = 0.1),
    s.start(s0.currentTime),
    s.stop(s0.currentTime + t);
}
function b5($) {
  d6 = 0.2 + 2 * $;
}
function b8() {}
var i1 = 0;
function g8() {
  var $ = l2();
  if (!($ - i1 < 1e3)) {
    i1 = $;
    var t = s0.createGain(),
      i = null;
    (i = s0.createBufferSource()).connect(t),
      t.connect(s0.destination),
      (i.buffer = n7),
      t.gain.linearRampToValueAtTime(0.5, s0.currentTime),
      t.gain.linearRampToValueAtTime(0, s0.currentTime + 0.35),
      i.playbackRate.setValueAtTime(0.035, s0.currentTime),
      i.playbackRate.setValueAtTime(0.002, s0.currentTime + 0.5),
      i.start(s0.currentTime),
      i.stop(s0.currentTime + 0.5);
  }
}
var i9 = "";
function speak($) {
  var t = window.speechSynthesis.getVoices();
  if ("" == i9) {
    for (var i = 0; i < t.length; i++)
      if ("en-GB" === t[i].lang) {
        i9 = t[i];
        break;
      }
    "" === i9 && t.length > 0 && (i9 = t[0]);
  }
  var s = new SpeechSynthesisUtterance();
  (s.text = $), "" != i9 && (s.voice = i9), window.speechSynthesis.speak(s);
}
