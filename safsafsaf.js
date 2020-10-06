! function(e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var i = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
  }
  n.m = e, n.c = t, n.d = function(e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    })
  }, n.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.t = function(e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var i in e) n.d(r, i, function(t) {
        return e[t]
      }.bind(null, i));
    return r
  }, n.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return n.d(t, "a", t), t
  }, n.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, n.p = "/", n(n.s = 388)
}([function(e, t, n) {
  "use strict";
  e.exports = n(575)
}, function(e, t, n) {
  "use strict";

  function r() {
    return (r = Object.assign || function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
  }
  n.d(t, "a", (function() {
    return r
  }))
}, function(e, t, n) {
  (function(e) {
    e.exports = function() {
      "use strict";
      var t, r;

      function i() {
        return t.apply(null, arguments)
      }

      function a(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
      }

      function o(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e)
      }

      function s(e) {
        return void 0 === e
      }

      function l(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
      }

      function u(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
      }

      function c(e, t) {
        var n, r = [];
        for (n = 0; n < e.length; ++n) r.push(t(e[n], n));
        return r
      }

      function d(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }

      function h(e, t) {
        for (var n in t) d(t, n) && (e[n] = t[n]);
        return d(t, "toString") && (e.toString = t.toString), d(t, "valueOf") && (e.valueOf = t.valueOf), e
      }

      function f(e, t, n, r) {
        return xt(e, t, n, r, !0).utc()
      }

      function p(e) {
        return null == e._pf && (e._pf = {
          empty: !1,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: !1,
          invalidMonth: null,
          invalidFormat: !1,
          userInvalidated: !1,
          iso: !1,
          parsedDateParts: [],
          meridiem: null,
          rfc2822: !1,
          weekdayMismatch: !1
        }), e._pf
      }

      function m(e) {
        if (null == e._isValid) {
          var t = p(e),
            n = r.call(t.parsedDateParts, (function(e) {
              return null != e
            })),
            i = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
          if (e._strict && (i = i && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return i;
          e._isValid = i
        }
        return e._isValid
      }

      function _(e) {
        var t = f(NaN);
        return null != e ? h(p(t), e) : p(t).userInvalidated = !0, t
      }
      r = Array.prototype.some ? Array.prototype.some : function(e) {
        for (var t = Object(this), n = t.length >>> 0, r = 0; r < n; r++)
          if (r in t && e.call(this, t[r], r, t)) return !0;
        return !1
      };
      var y = i.momentProperties = [];

      function g(e, t) {
        var n, r, i;
        if (s(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), s(t._i) || (e._i = t._i), s(t._f) || (e._f = t._f), s(t._l) || (e._l = t._l), s(t._strict) || (e._strict = t._strict), s(t._tzm) || (e._tzm = t._tzm), s(t._isUTC) || (e._isUTC = t._isUTC), s(t._offset) || (e._offset = t._offset), s(t._pf) || (e._pf = p(t)), s(t._locale) || (e._locale = t._locale), y.length > 0)
          for (n = 0; n < y.length; n++) s(i = t[r = y[n]]) || (e[r] = i);
        return e
      }
      var v = !1;

      function b(e) {
        g(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === v && (v = !0, i.updateOffset(this), v = !1)
      }

      function w(e) {
        return e instanceof b || null != e && null != e._isAMomentObject
      }

      function k(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
      }

      function M(e) {
        var t = +e,
          n = 0;
        return 0 !== t && isFinite(t) && (n = k(t)), n
      }

      function x(e, t, n) {
        var r, i = Math.min(e.length, t.length),
          a = Math.abs(e.length - t.length),
          o = 0;
        for (r = 0; r < i; r++)(n && e[r] !== t[r] || !n && M(e[r]) !== M(t[r])) && o++;
        return o + a
      }

      function L(e) {
        !1 === i.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
      }

      function S(e, t) {
        var n = !0;
        return h((function() {
          if (null != i.deprecationHandler && i.deprecationHandler(null, e), n) {
            for (var r, a = [], o = 0; o < arguments.length; o++) {
              if (r = "", "object" == typeof arguments[o]) {
                for (var s in r += "\n[" + o + "] ", arguments[0]) r += s + ": " + arguments[0][s] + ", ";
                r = r.slice(0, -2)
              } else r = arguments[o];
              a.push(r)
            }
            L(e + "\nArguments: " + Array.prototype.slice.call(a).join("") + "\n" + (new Error).stack), n = !1
          }
          return t.apply(this, arguments)
        }), t)
      }
      var T, D = {};

      function E(e, t) {
        null != i.deprecationHandler && i.deprecationHandler(e, t), D[e] || (L(t), D[e] = !0)
      }

      function Y(e) {
        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
      }

      function C(e, t) {
        var n, r = h({}, e);
        for (n in t) d(t, n) && (o(e[n]) && o(t[n]) ? (r[n] = {}, h(r[n], e[n]), h(r[n], t[n])) : null != t[n] ? r[n] = t[n] : delete r[n]);
        for (n in e) d(e, n) && !d(t, n) && o(e[n]) && (r[n] = h({}, r[n]));
        return r
      }

      function O(e) {
        null != e && this.set(e)
      }
      i.suppressDeprecationWarnings = !1, i.deprecationHandler = null, T = Object.keys ? Object.keys : function(e) {
        var t, n = [];
        for (t in e) d(e, t) && n.push(t);
        return n
      };
      var P = {};

      function j(e, t) {
        var n = e.toLowerCase();
        P[n] = P[n + "s"] = P[t] = e
      }

      function A(e) {
        return "string" == typeof e ? P[e] || P[e.toLowerCase()] : void 0
      }

      function R(e) {
        var t, n, r = {};
        for (n in e) d(e, n) && (t = A(n)) && (r[t] = e[n]);
        return r
      }
      var I = {};

      function H(e, t) {
        I[e] = t
      }

      function F(e, t, n) {
        var r = "" + Math.abs(e),
          i = t - r.length;
        return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r
      }
      var z = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        N = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        W = {},
        B = {};

      function U(e, t, n, r) {
        var i = r;
        "string" == typeof r && (i = function() {
          return this[r]()
        }), e && (B[e] = i), t && (B[t[0]] = function() {
          return F(i.apply(this, arguments), t[1], t[2])
        }), n && (B[n] = function() {
          return this.localeData().ordinal(i.apply(this, arguments), e)
        })
      }

      function V(e, t) {
        return e.isValid() ? (t = G(t, e.localeData()), W[t] = W[t] || function(e) {
          var t, n, r, i = e.match(z);
          for (t = 0, n = i.length; t < n; t++) B[i[t]] ? i[t] = B[i[t]] : i[t] = (r = i[t]).match(/\[[\s\S]/) ? r.replace(/^\[|\]$/g, "") : r.replace(/\\/g, "");
          return function(t) {
            var r, a = "";
            for (r = 0; r < n; r++) a += Y(i[r]) ? i[r].call(t, e) : i[r];
            return a
          }
        }(t), W[t](e)) : e.localeData().invalidDate()
      }

      function G(e, t) {
        var n = 5;

        function r(e) {
          return t.longDateFormat(e) || e
        }
        for (N.lastIndex = 0; n >= 0 && N.test(e);) e = e.replace(N, r), N.lastIndex = 0, n -= 1;
        return e
      }
      var q = /\d/,
        $ = /\d\d/,
        J = /\d{3}/,
        X = /\d{4}/,
        K = /[+-]?\d{6}/,
        Z = /\d\d?/,
        Q = /\d\d\d\d?/,
        ee = /\d\d\d\d\d\d?/,
        te = /\d{1,3}/,
        ne = /\d{1,4}/,
        re = /[+-]?\d{1,6}/,
        ie = /\d+/,
        ae = /[+-]?\d+/,
        oe = /Z|[+-]\d\d:?\d\d/gi,
        se = /Z|[+-]\d\d(?::?\d\d)?/gi,
        le = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        ue = {};

      function ce(e, t, n) {
        ue[e] = Y(t) ? t : function(e, r) {
          return e && n ? n : t
        }
      }

      function de(e, t) {
        return d(ue, e) ? ue[e](t._strict, t._locale) : new RegExp(he(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function(e, t, n, r, i) {
          return t || n || r || i
        }))))
      }

      function he(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
      }
      var fe = {};

      function pe(e, t) {
        var n, r = t;
        for ("string" == typeof e && (e = [e]), l(t) && (r = function(e, n) {
            n[t] = M(e)
          }), n = 0; n < e.length; n++) fe[e[n]] = r
      }

      function me(e, t) {
        pe(e, (function(e, n, r, i) {
          r._w = r._w || {}, t(e, r._w, r, i)
        }))
      }

      function _e(e, t, n) {
        null != t && d(fe, e) && fe[e](t, n._a, n, e)
      }

      function ye(e) {
        return ge(e) ? 366 : 365
      }

      function ge(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
      }
      U("Y", 0, 0, (function() {
        var e = this.year();
        return e <= 9999 ? "" + e : "+" + e
      })), U(0, ["YY", 2], 0, (function() {
        return this.year() % 100
      })), U(0, ["YYYY", 4], 0, "year"), U(0, ["YYYYY", 5], 0, "year"), U(0, ["YYYYYY", 6, !0], 0, "year"), j("year", "y"), H("year", 1), ce("Y", ae), ce("YY", Z, $), ce("YYYY", ne, X), ce("YYYYY", re, K), ce("YYYYYY", re, K), pe(["YYYYY", "YYYYYY"], 0), pe("YYYY", (function(e, t) {
        t[0] = 2 === e.length ? i.parseTwoDigitYear(e) : M(e)
      })), pe("YY", (function(e, t) {
        t[0] = i.parseTwoDigitYear(e)
      })), pe("Y", (function(e, t) {
        t[0] = parseInt(e, 10)
      })), i.parseTwoDigitYear = function(e) {
        return M(e) + (M(e) > 68 ? 1900 : 2e3)
      };
      var ve, be = we("FullYear", !0);

      function we(e, t) {
        return function(n) {
          return null != n ? (Me(this, e, n), i.updateOffset(this, t), this) : ke(this, e)
        }
      }

      function ke(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
      }

      function Me(e, t, n) {
        e.isValid() && !isNaN(n) && ("FullYear" === t && ge(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), xe(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
      }

      function xe(e, t) {
        if (isNaN(e) || isNaN(t)) return NaN;
        var n, r = (t % (n = 12) + n) % n;
        return e += (t - r) / 12, 1 === r ? ge(e) ? 29 : 28 : 31 - r % 7 % 2
      }
      ve = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
        var t;
        for (t = 0; t < this.length; ++t)
          if (this[t] === e) return t;
        return -1
      }, U("M", ["MM", 2], "Mo", (function() {
        return this.month() + 1
      })), U("MMM", 0, 0, (function(e) {
        return this.localeData().monthsShort(this, e)
      })), U("MMMM", 0, 0, (function(e) {
        return this.localeData().months(this, e)
      })), j("month", "M"), H("month", 8), ce("M", Z), ce("MM", Z, $), ce("MMM", (function(e, t) {
        return t.monthsShortRegex(e)
      })), ce("MMMM", (function(e, t) {
        return t.monthsRegex(e)
      })), pe(["M", "MM"], (function(e, t) {
        t[1] = M(e) - 1
      })), pe(["MMM", "MMMM"], (function(e, t, n, r) {
        var i = n._locale.monthsParse(e, r, n._strict);
        null != i ? t[1] = i : p(n).invalidMonth = e
      }));
      var Le = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        Se = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        Te = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

      function De(e, t, n) {
        var r, i, a, o = e.toLocaleLowerCase();
        if (!this._monthsParse)
          for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r) a = f([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(a, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(a, "").toLocaleLowerCase();
        return n ? "MMM" === t ? -1 !== (i = ve.call(this._shortMonthsParse, o)) ? i : null : -1 !== (i = ve.call(this._longMonthsParse, o)) ? i : null : "MMM" === t ? -1 !== (i = ve.call(this._shortMonthsParse, o)) ? i : -1 !== (i = ve.call(this._longMonthsParse, o)) ? i : null : -1 !== (i = ve.call(this._longMonthsParse, o)) ? i : -1 !== (i = ve.call(this._shortMonthsParse, o)) ? i : null
      }

      function Ee(e, t) {
        var n;
        if (!e.isValid()) return e;
        if ("string" == typeof t)
          if (/^\d+$/.test(t)) t = M(t);
          else if (!l(t = e.localeData().monthsParse(t))) return e;
        return n = Math.min(e.date(), xe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
      }

      function Ye(e) {
        return null != e ? (Ee(this, e), i.updateOffset(this, !0), this) : ke(this, "Month")
      }
      var Ce = le,
        Oe = le;

      function Pe() {
        function e(e, t) {
          return t.length - e.length
        }
        var t, n, r = [],
          i = [],
          a = [];
        for (t = 0; t < 12; t++) n = f([2e3, t]), r.push(this.monthsShort(n, "")), i.push(this.months(n, "")), a.push(this.months(n, "")), a.push(this.monthsShort(n, ""));
        for (r.sort(e), i.sort(e), a.sort(e), t = 0; t < 12; t++) r[t] = he(r[t]), i[t] = he(i[t]);
        for (t = 0; t < 24; t++) a[t] = he(a[t]);
        this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
      }

      function je(e, t, n, r, i, a, o) {
        var s;
        return e < 100 && e >= 0 ? (s = new Date(e + 400, t, n, r, i, a, o), isFinite(s.getFullYear()) && s.setFullYear(e)) : s = new Date(e, t, n, r, i, a, o), s
      }

      function Ae(e) {
        var t;
        if (e < 100 && e >= 0) {
          var n = Array.prototype.slice.call(arguments);
          n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)
        } else t = new Date(Date.UTC.apply(null, arguments));
        return t
      }

      function Re(e, t, n) {
        var r = 7 + t - n;
        return -(7 + Ae(e, 0, r).getUTCDay() - t) % 7 + r - 1
      }

      function Ie(e, t, n, r, i) {
        var a, o, s = 1 + 7 * (t - 1) + (7 + n - r) % 7 + Re(e, r, i);
        return s <= 0 ? o = ye(a = e - 1) + s : s > ye(e) ? (a = e + 1, o = s - ye(e)) : (a = e, o = s), {
          year: a,
          dayOfYear: o
        }
      }

      function He(e, t, n) {
        var r, i, a = Re(e.year(), t, n),
          o = Math.floor((e.dayOfYear() - a - 1) / 7) + 1;
        return o < 1 ? r = o + Fe(i = e.year() - 1, t, n) : o > Fe(e.year(), t, n) ? (r = o - Fe(e.year(), t, n), i = e.year() + 1) : (i = e.year(), r = o), {
          week: r,
          year: i
        }
      }

      function Fe(e, t, n) {
        var r = Re(e, t, n),
          i = Re(e + 1, t, n);
        return (ye(e) - r + i) / 7
      }

      function ze(e, t) {
        return e.slice(t, 7).concat(e.slice(0, t))
      }
      U("w", ["ww", 2], "wo", "week"), U("W", ["WW", 2], "Wo", "isoWeek"), j("week", "w"), j("isoWeek", "W"), H("week", 5), H("isoWeek", 5), ce("w", Z), ce("ww", Z, $), ce("W", Z), ce("WW", Z, $), me(["w", "ww", "W", "WW"], (function(e, t, n, r) {
        t[r.substr(0, 1)] = M(e)
      })), U("d", 0, "do", "day"), U("dd", 0, 0, (function(e) {
        return this.localeData().weekdaysMin(this, e)
      })), U("ddd", 0, 0, (function(e) {
        return this.localeData().weekdaysShort(this, e)
      })), U("dddd", 0, 0, (function(e) {
        return this.localeData().weekdays(this, e)
      })), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"), j("day", "d"), j("weekday", "e"), j("isoWeekday", "E"), H("day", 11), H("weekday", 11), H("isoWeekday", 11), ce("d", Z), ce("e", Z), ce("E", Z), ce("dd", (function(e, t) {
        return t.weekdaysMinRegex(e)
      })), ce("ddd", (function(e, t) {
        return t.weekdaysShortRegex(e)
      })), ce("dddd", (function(e, t) {
        return t.weekdaysRegex(e)
      })), me(["dd", "ddd", "dddd"], (function(e, t, n, r) {
        var i = n._locale.weekdaysParse(e, r, n._strict);
        null != i ? t.d = i : p(n).invalidWeekday = e
      })), me(["d", "e", "E"], (function(e, t, n, r) {
        t[r] = M(e)
      }));
      var Ne = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        We = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        Be = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");

      function Ue(e, t, n) {
        var r, i, a, o = e.toLocaleLowerCase();
        if (!this._weekdaysParse)
          for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r) a = f([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(a, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(a, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(a, "").toLocaleLowerCase();
        return n ? "dddd" === t ? -1 !== (i = ve.call(this._weekdaysParse, o)) ? i : null : "ddd" === t ? -1 !== (i = ve.call(this._shortWeekdaysParse, o)) ? i : null : -1 !== (i = ve.call(this._minWeekdaysParse, o)) ? i : null : "dddd" === t ? -1 !== (i = ve.call(this._weekdaysParse, o)) ? i : -1 !== (i = ve.call(this._shortWeekdaysParse, o)) ? i : -1 !== (i = ve.call(this._minWeekdaysParse, o)) ? i : null : "ddd" === t ? -1 !== (i = ve.call(this._shortWeekdaysParse, o)) ? i : -1 !== (i = ve.call(this._weekdaysParse, o)) ? i : -1 !== (i = ve.call(this._minWeekdaysParse, o)) ? i : null : -1 !== (i = ve.call(this._minWeekdaysParse, o)) ? i : -1 !== (i = ve.call(this._weekdaysParse, o)) ? i : -1 !== (i = ve.call(this._shortWeekdaysParse, o)) ? i : null
      }
      var Ve = le,
        Ge = le,
        qe = le;

      function $e() {
        function e(e, t) {
          return t.length - e.length
        }
        var t, n, r, i, a, o = [],
          s = [],
          l = [],
          u = [];
        for (t = 0; t < 7; t++) n = f([2e3, 1]).day(t), r = this.weekdaysMin(n, ""), i = this.weekdaysShort(n, ""), a = this.weekdays(n, ""), o.push(r), s.push(i), l.push(a), u.push(r), u.push(i), u.push(a);
        for (o.sort(e), s.sort(e), l.sort(e), u.sort(e), t = 0; t < 7; t++) s[t] = he(s[t]), l[t] = he(l[t]), u[t] = he(u[t]);
        this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")
      }

      function Je() {
        return this.hours() % 12 || 12
      }

      function Xe(e, t) {
        U(e, 0, 0, (function() {
          return this.localeData().meridiem(this.hours(), this.minutes(), t)
        }))
      }

      function Ke(e, t) {
        return t._meridiemParse
      }
      U("H", ["HH", 2], 0, "hour"), U("h", ["hh", 2], 0, Je), U("k", ["kk", 2], 0, (function() {
        return this.hours() || 24
      })), U("hmm", 0, 0, (function() {
        return "" + Je.apply(this) + F(this.minutes(), 2)
      })), U("hmmss", 0, 0, (function() {
        return "" + Je.apply(this) + F(this.minutes(), 2) + F(this.seconds(), 2)
      })), U("Hmm", 0, 0, (function() {
        return "" + this.hours() + F(this.minutes(), 2)
      })), U("Hmmss", 0, 0, (function() {
        return "" + this.hours() + F(this.minutes(), 2) + F(this.seconds(), 2)
      })), Xe("a", !0), Xe("A", !1), j("hour", "h"), H("hour", 13), ce("a", Ke), ce("A", Ke), ce("H", Z), ce("h", Z), ce("k", Z), ce("HH", Z, $), ce("hh", Z, $), ce("kk", Z, $), ce("hmm", Q), ce("hmmss", ee), ce("Hmm", Q), ce("Hmmss", ee), pe(["H", "HH"], 3), pe(["k", "kk"], (function(e, t, n) {
        var r = M(e);
        t[3] = 24 === r ? 0 : r
      })), pe(["a", "A"], (function(e, t, n) {
        n._isPm = n._locale.isPM(e), n._meridiem = e
      })), pe(["h", "hh"], (function(e, t, n) {
        t[3] = M(e), p(n).bigHour = !0
      })), pe("hmm", (function(e, t, n) {
        var r = e.length - 2;
        t[3] = M(e.substr(0, r)), t[4] = M(e.substr(r)), p(n).bigHour = !0
      })), pe("hmmss", (function(e, t, n) {
        var r = e.length - 4,
          i = e.length - 2;
        t[3] = M(e.substr(0, r)), t[4] = M(e.substr(r, 2)), t[5] = M(e.substr(i)), p(n).bigHour = !0
      })), pe("Hmm", (function(e, t, n) {
        var r = e.length - 2;
        t[3] = M(e.substr(0, r)), t[4] = M(e.substr(r))
      })), pe("Hmmss", (function(e, t, n) {
        var r = e.length - 4,
          i = e.length - 2;
        t[3] = M(e.substr(0, r)), t[4] = M(e.substr(r, 2)), t[5] = M(e.substr(i))
      }));
      var Ze, Qe = we("Hours", !0),
        et = {
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
          },
          longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
          },
          invalidDate: "Invalid date",
          ordinal: "%d",
          dayOfMonthOrdinalParse: /\d{1,2}/,
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
          },
          months: Se,
          monthsShort: Te,
          week: {
            dow: 0,
            doy: 6
          },
          weekdays: Ne,
          weekdaysMin: Be,
          weekdaysShort: We,
          meridiemParse: /[ap]\.?m?\.?/i
        },
        tt = {},
        nt = {};

      function rt(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
      }

      function it(t) {
        var r = null;
        if (!tt[t] && void 0 !== e && e && e.exports) try {
          r = Ze._abbr, n(619)("./" + t), at(r)
        } catch (e) {}
        return tt[t]
      }

      function at(e, t) {
        var n;
        return e && ((n = s(t) ? st(e) : ot(e, t)) ? Ze = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), Ze._abbr
      }

      function ot(e, t) {
        if (null !== t) {
          var n, r = et;
          if (t.abbr = e, null != tt[e]) E("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), r = tt[e]._config;
          else if (null != t.parentLocale)
            if (null != tt[t.parentLocale]) r = tt[t.parentLocale]._config;
            else {
              if (null == (n = it(t.parentLocale))) return nt[t.parentLocale] || (nt[t.parentLocale] = []), nt[t.parentLocale].push({
                name: e,
                config: t
              }), null;
              r = n._config
            } return tt[e] = new O(C(r, t)), nt[e] && nt[e].forEach((function(e) {
            ot(e.name, e.config)
          })), at(e), tt[e]
        }
        return delete tt[e], null
      }

      function st(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Ze;
        if (!a(e)) {
          if (t = it(e)) return t;
          e = [e]
        }
        return function(e) {
          for (var t, n, r, i, a = 0; a < e.length;) {
            for (t = (i = rt(e[a]).split("-")).length, n = (n = rt(e[a + 1])) ? n.split("-") : null; t > 0;) {
              if (r = it(i.slice(0, t).join("-"))) return r;
              if (n && n.length >= t && x(i, n, !0) >= t - 1) break;
              t--
            }
            a++
          }
          return Ze
        }(e)
      }

      function lt(e) {
        var t, n = e._a;
        return n && -2 === p(e).overflow && (t = n[1] < 0 || n[1] > 11 ? 1 : n[2] < 1 || n[2] > xe(n[0], n[1]) ? 2 : n[3] < 0 || n[3] > 24 || 24 === n[3] && (0 !== n[4] || 0 !== n[5] || 0 !== n[6]) ? 3 : n[4] < 0 || n[4] > 59 ? 4 : n[5] < 0 || n[5] > 59 ? 5 : n[6] < 0 || n[6] > 999 ? 6 : -1, p(e)._overflowDayOfYear && (t < 0 || t > 2) && (t = 2), p(e)._overflowWeeks && -1 === t && (t = 7), p(e)._overflowWeekday && -1 === t && (t = 8), p(e).overflow = t), e
      }

      function ut(e, t, n) {
        return null != e ? e : null != t ? t : n
      }

      function ct(e) {
        var t, n, r, a, o, s = [];
        if (!e._d) {
          for (r = function(e) {
              var t = new Date(i.now());
              return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
            }(e), e._w && null == e._a[2] && null == e._a[1] && function(e) {
              var t, n, r, i, a, o, s, l;
              if (null != (t = e._w).GG || null != t.W || null != t.E) a = 1, o = 4, n = ut(t.GG, e._a[0], He(Lt(), 1, 4).year), r = ut(t.W, 1), ((i = ut(t.E, 1)) < 1 || i > 7) && (l = !0);
              else {
                a = e._locale._week.dow, o = e._locale._week.doy;
                var u = He(Lt(), a, o);
                n = ut(t.gg, e._a[0], u.year), r = ut(t.w, u.week), null != t.d ? ((i = t.d) < 0 || i > 6) && (l = !0) : null != t.e ? (i = t.e + a, (t.e < 0 || t.e > 6) && (l = !0)) : i = a
              }
              r < 1 || r > Fe(n, a, o) ? p(e)._overflowWeeks = !0 : null != l ? p(e)._overflowWeekday = !0 : (s = Ie(n, r, i, a, o), e._a[0] = s.year, e._dayOfYear = s.dayOfYear)
            }(e), null != e._dayOfYear && (o = ut(e._a[0], r[0]), (e._dayOfYear > ye(o) || 0 === e._dayOfYear) && (p(e)._overflowDayOfYear = !0), n = Ae(o, 0, e._dayOfYear), e._a[1] = n.getUTCMonth(), e._a[2] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = s[t] = r[t];
          for (; t < 7; t++) e._a[t] = s[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
          24 === e._a[3] && 0 === e._a[4] && 0 === e._a[5] && 0 === e._a[6] && (e._nextDay = !0, e._a[3] = 0), e._d = (e._useUTC ? Ae : je).apply(null, s), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[3] = 24), e._w && void 0 !== e._w.d && e._w.d !== a && (p(e).weekdayMismatch = !0)
        }
      }
      var dt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        ht = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        ft = /Z|[+-]\d\d(?::?\d\d)?/,
        pt = [
          ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
          ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
          ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
          ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
          ["YYYY-DDD", /\d{4}-\d{3}/],
          ["YYYY-MM", /\d{4}-\d\d/, !1],
          ["YYYYYYMMDD", /[+-]\d{10}/],
          ["YYYYMMDD", /\d{8}/],
          ["GGGG[W]WWE", /\d{4}W\d{3}/],
          ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
          ["YYYYDDD", /\d{7}/]
        ],
        mt = [
          ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
          ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
          ["HH:mm:ss", /\d\d:\d\d:\d\d/],
          ["HH:mm", /\d\d:\d\d/],
          ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
          ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
          ["HHmmss", /\d\d\d\d\d\d/],
          ["HHmm", /\d\d\d\d/],
          ["HH", /\d\d/]
        ],
        _t = /^\/?Date\((\-?\d+)/i;

      function yt(e) {
        var t, n, r, i, a, o, s = e._i,
          l = dt.exec(s) || ht.exec(s);
        if (l) {
          for (p(e).iso = !0, t = 0, n = pt.length; t < n; t++)
            if (pt[t][1].exec(l[1])) {
              i = pt[t][0], r = !1 !== pt[t][2];
              break
            } if (null == i) return void(e._isValid = !1);
          if (l[3]) {
            for (t = 0, n = mt.length; t < n; t++)
              if (mt[t][1].exec(l[3])) {
                a = (l[2] || " ") + mt[t][0];
                break
              } if (null == a) return void(e._isValid = !1)
          }
          if (!r && null != a) return void(e._isValid = !1);
          if (l[4]) {
            if (!ft.exec(l[4])) return void(e._isValid = !1);
            o = "Z"
          }
          e._f = i + (a || "") + (o || ""), kt(e)
        } else e._isValid = !1
      }
      var gt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

      function vt(e) {
        var t = parseInt(e, 10);
        return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
      }
      var bt = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
      };

      function wt(e) {
        var t, n, r, i, a, o, s, l = gt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
        if (l) {
          var u = (t = l[4], n = l[3], r = l[2], i = l[5], a = l[6], o = l[7], s = [vt(t), Te.indexOf(n), parseInt(r, 10), parseInt(i, 10), parseInt(a, 10)], o && s.push(parseInt(o, 10)), s);
          if (! function(e, t, n) {
              return !e || We.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() || (p(n).weekdayMismatch = !0, n._isValid = !1, !1)
            }(l[1], u, e)) return;
          e._a = u, e._tzm = function(e, t, n) {
            if (e) return bt[e];
            if (t) return 0;
            var r = parseInt(n, 10),
              i = r % 100;
            return (r - i) / 100 * 60 + i
          }(l[8], l[9], l[10]), e._d = Ae.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), p(e).rfc2822 = !0
        } else e._isValid = !1
      }

      function kt(e) {
        if (e._f !== i.ISO_8601)
          if (e._f !== i.RFC_2822) {
            e._a = [], p(e).empty = !0;
            var t, n, r, a, o, s = "" + e._i,
              l = s.length,
              u = 0;
            for (r = G(e._f, e._locale).match(z) || [], t = 0; t < r.length; t++) a = r[t], (n = (s.match(de(a, e)) || [])[0]) && ((o = s.substr(0, s.indexOf(n))).length > 0 && p(e).unusedInput.push(o), s = s.slice(s.indexOf(n) + n.length), u += n.length), B[a] ? (n ? p(e).empty = !1 : p(e).unusedTokens.push(a), _e(a, n, e)) : e._strict && !n && p(e).unusedTokens.push(a);
            p(e).charsLeftOver = l - u, s.length > 0 && p(e).unusedInput.push(s), e._a[3] <= 12 && !0 === p(e).bigHour && e._a[3] > 0 && (p(e).bigHour = void 0), p(e).parsedDateParts = e._a.slice(0), p(e).meridiem = e._meridiem, e._a[3] = function(e, t, n) {
              var r;
              return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((r = e.isPM(n)) && t < 12 && (t += 12), r || 12 !== t || (t = 0), t) : t
            }(e._locale, e._a[3], e._meridiem), ct(e), lt(e)
          } else wt(e);
        else yt(e)
      }

      function Mt(e) {
        var t = e._i,
          n = e._f;
        return e._locale = e._locale || st(e._l), null === t || void 0 === n && "" === t ? _({
          nullInput: !0
        }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), w(t) ? new b(lt(t)) : (u(t) ? e._d = t : a(n) ? function(e) {
          var t, n, r, i, a;
          if (0 === e._f.length) return p(e).invalidFormat = !0, void(e._d = new Date(NaN));
          for (i = 0; i < e._f.length; i++) a = 0, t = g({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], kt(t), m(t) && (a += p(t).charsLeftOver, a += 10 * p(t).unusedTokens.length, p(t).score = a, (null == r || a < r) && (r = a, n = t));
          h(e, n || t)
        }(e) : n ? kt(e) : function(e) {
          var t = e._i;
          s(t) ? e._d = new Date(i.now()) : u(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function(e) {
            var t = _t.exec(e._i);
            null === t ? (yt(e), !1 === e._isValid && (delete e._isValid, wt(e), !1 === e._isValid && (delete e._isValid, i.createFromInputFallback(e)))) : e._d = new Date(+t[1])
          }(e) : a(t) ? (e._a = c(t.slice(0), (function(e) {
            return parseInt(e, 10)
          })), ct(e)) : o(t) ? function(e) {
            if (!e._d) {
              var t = R(e._i);
              e._a = c([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], (function(e) {
                return e && parseInt(e, 10)
              })), ct(e)
            }
          }(e) : l(t) ? e._d = new Date(t) : i.createFromInputFallback(e)
        }(e), m(e) || (e._d = null), e))
      }

      function xt(e, t, n, r, i) {
        var s, l = {};
        return !0 !== n && !1 !== n || (r = n, n = void 0), (o(e) && function(e) {
          if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
          var t;
          for (t in e)
            if (e.hasOwnProperty(t)) return !1;
          return !0
        }(e) || a(e) && 0 === e.length) && (e = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = i, l._l = n, l._i = e, l._f = t, l._strict = r, (s = new b(lt(Mt(l))))._nextDay && (s.add(1, "d"), s._nextDay = void 0), s
      }

      function Lt(e, t, n, r) {
        return xt(e, t, n, r, !1)
      }
      i.createFromInputFallback = S("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
      })), i.ISO_8601 = function() {}, i.RFC_2822 = function() {};
      var St = S("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
          var e = Lt.apply(null, arguments);
          return this.isValid() && e.isValid() ? e < this ? this : e : _()
        })),
        Tt = S("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
          var e = Lt.apply(null, arguments);
          return this.isValid() && e.isValid() ? e > this ? this : e : _()
        }));

      function Dt(e, t) {
        var n, r;
        if (1 === t.length && a(t[0]) && (t = t[0]), !t.length) return Lt();
        for (n = t[0], r = 1; r < t.length; ++r) t[r].isValid() && !t[r][e](n) || (n = t[r]);
        return n
      }
      var Et = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

      function Yt(e) {
        var t = R(e),
          n = t.year || 0,
          r = t.quarter || 0,
          i = t.month || 0,
          a = t.week || t.isoWeek || 0,
          o = t.day || 0,
          s = t.hour || 0,
          l = t.minute || 0,
          u = t.second || 0,
          c = t.millisecond || 0;
        this._isValid = function(e) {
          for (var t in e)
            if (-1 === ve.call(Et, t) || null != e[t] && isNaN(e[t])) return !1;
          for (var n = !1, r = 0; r < Et.length; ++r)
            if (e[Et[r]]) {
              if (n) return !1;
              parseFloat(e[Et[r]]) !== M(e[Et[r]]) && (n = !0)
            } return !0
        }(t), this._milliseconds = +c + 1e3 * u + 6e4 * l + 1e3 * s * 60 * 60, this._days = +o + 7 * a, this._months = +i + 3 * r + 12 * n, this._data = {}, this._locale = st(), this._bubble()
      }

      function Ct(e) {
        return e instanceof Yt
      }

      function Ot(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
      }

      function Pt(e, t) {
        U(e, 0, 0, (function() {
          var e = this.utcOffset(),
            n = "+";
          return e < 0 && (e = -e, n = "-"), n + F(~~(e / 60), 2) + t + F(~~e % 60, 2)
        }))
      }
      Pt("Z", ":"), Pt("ZZ", ""), ce("Z", se), ce("ZZ", se), pe(["Z", "ZZ"], (function(e, t, n) {
        n._useUTC = !0, n._tzm = At(se, e)
      }));
      var jt = /([\+\-]|\d\d)/gi;

      function At(e, t) {
        var n = (t || "").match(e);
        if (null === n) return null;
        var r = ((n[n.length - 1] || []) + "").match(jt) || ["-", 0, 0],
          i = 60 * r[1] + M(r[2]);
        return 0 === i ? 0 : "+" === r[0] ? i : -i
      }

      function Rt(e, t) {
        var n, r;
        return t._isUTC ? (n = t.clone(), r = (w(e) || u(e) ? e.valueOf() : Lt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), i.updateOffset(n, !1), n) : Lt(e).local()
      }

      function It(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
      }

      function Ht() {
        return !!this.isValid() && this._isUTC && 0 === this._offset
      }
      i.updateOffset = function() {};
      var Ft = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        zt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

      function Nt(e, t) {
        var n, r, i, a, o, s, u = e,
          c = null;
        return Ct(e) ? u = {
          ms: e._milliseconds,
          d: e._days,
          M: e._months
        } : l(e) ? (u = {}, t ? u[t] = e : u.milliseconds = e) : (c = Ft.exec(e)) ? (n = "-" === c[1] ? -1 : 1, u = {
          y: 0,
          d: M(c[2]) * n,
          h: M(c[3]) * n,
          m: M(c[4]) * n,
          s: M(c[5]) * n,
          ms: M(Ot(1e3 * c[6])) * n
        }) : (c = zt.exec(e)) ? (n = "-" === c[1] ? -1 : 1, u = {
          y: Wt(c[2], n),
          M: Wt(c[3], n),
          w: Wt(c[4], n),
          d: Wt(c[5], n),
          h: Wt(c[6], n),
          m: Wt(c[7], n),
          s: Wt(c[8], n)
        }) : null == u ? u = {} : "object" == typeof u && ("from" in u || "to" in u) && (a = Lt(u.from), o = Lt(u.to), i = a.isValid() && o.isValid() ? (o = Rt(o, a), a.isBefore(o) ? s = Bt(a, o) : ((s = Bt(o, a)).milliseconds = -s.milliseconds, s.months = -s.months), s) : {
          milliseconds: 0,
          months: 0
        }, (u = {}).ms = i.milliseconds, u.M = i.months), r = new Yt(u), Ct(e) && d(e, "_locale") && (r._locale = e._locale), r
      }

      function Wt(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t
      }

      function Bt(e, t) {
        var n = {};
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
      }

      function Ut(e, t) {
        return function(n, r) {
          var i;
          return null === r || isNaN(+r) || (E(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = n, n = r, r = i), Vt(this, Nt(n = "string" == typeof n ? +n : n, r), e), this
        }
      }

      function Vt(e, t, n, r) {
        var a = t._milliseconds,
          o = Ot(t._days),
          s = Ot(t._months);
        e.isValid() && (r = null == r || r, s && Ee(e, ke(e, "Month") + s * n), o && Me(e, "Date", ke(e, "Date") + o * n), a && e._d.setTime(e._d.valueOf() + a * n), r && i.updateOffset(e, o || s))
      }
      Nt.fn = Yt.prototype, Nt.invalid = function() {
        return Nt(NaN)
      };
      var Gt = Ut(1, "add"),
        qt = Ut(-1, "subtract");

      function $t(e, t) {
        var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
          r = e.clone().add(n, "months");
        return -(n + (t - r < 0 ? (t - r) / (r - e.clone().add(n - 1, "months")) : (t - r) / (e.clone().add(n + 1, "months") - r))) || 0
      }

      function Jt(e) {
        var t;
        return void 0 === e ? this._locale._abbr : (null != (t = st(e)) && (this._locale = t), this)
      }
      i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", i.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
      var Xt = S("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function(e) {
        return void 0 === e ? this.localeData() : this.locale(e)
      }));

      function Kt() {
        return this._locale
      }

      function Zt(e, t) {
        return (e % t + t) % t
      }

      function Qt(e, t, n) {
        return e < 100 && e >= 0 ? new Date(e + 400, t, n) - 126227808e5 : new Date(e, t, n).valueOf()
      }

      function en(e, t, n) {
        return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - 126227808e5 : Date.UTC(e, t, n)
      }

      function tn(e, t) {
        U(0, [e, e.length], 0, t)
      }

      function nn(e, t, n, r, i) {
        var a;
        return null == e ? He(this, r, i).year : (t > (a = Fe(e, r, i)) && (t = a), rn.call(this, e, t, n, r, i))
      }

      function rn(e, t, n, r, i) {
        var a = Ie(e, t, n, r, i),
          o = Ae(a.year, 0, a.dayOfYear);
        return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
      }
      U(0, ["gg", 2], 0, (function() {
        return this.weekYear() % 100
      })), U(0, ["GG", 2], 0, (function() {
        return this.isoWeekYear() % 100
      })), tn("gggg", "weekYear"), tn("ggggg", "weekYear"), tn("GGGG", "isoWeekYear"), tn("GGGGG", "isoWeekYear"), j("weekYear", "gg"), j("isoWeekYear", "GG"), H("weekYear", 1), H("isoWeekYear", 1), ce("G", ae), ce("g", ae), ce("GG", Z, $), ce("gg", Z, $), ce("GGGG", ne, X), ce("gggg", ne, X), ce("GGGGG", re, K), ce("ggggg", re, K), me(["gggg", "ggggg", "GGGG", "GGGGG"], (function(e, t, n, r) {
        t[r.substr(0, 2)] = M(e)
      })), me(["gg", "GG"], (function(e, t, n, r) {
        t[r] = i.parseTwoDigitYear(e)
      })), U("Q", 0, "Qo", "quarter"), j("quarter", "Q"), H("quarter", 7), ce("Q", q), pe("Q", (function(e, t) {
        t[1] = 3 * (M(e) - 1)
      })), U("D", ["DD", 2], "Do", "date"), j("date", "D"), H("date", 9), ce("D", Z), ce("DD", Z, $), ce("Do", (function(e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
      })), pe(["D", "DD"], 2), pe("Do", (function(e, t) {
        t[2] = M(e.match(Z)[0])
      }));
      var an = we("Date", !0);
      U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), j("dayOfYear", "DDD"), H("dayOfYear", 4), ce("DDD", te), ce("DDDD", J), pe(["DDD", "DDDD"], (function(e, t, n) {
        n._dayOfYear = M(e)
      })), U("m", ["mm", 2], 0, "minute"), j("minute", "m"), H("minute", 14), ce("m", Z), ce("mm", Z, $), pe(["m", "mm"], 4);
      var on = we("Minutes", !1);
      U("s", ["ss", 2], 0, "second"), j("second", "s"), H("second", 15), ce("s", Z), ce("ss", Z, $), pe(["s", "ss"], 5);
      var sn, ln = we("Seconds", !1);
      for (U("S", 0, 0, (function() {
          return ~~(this.millisecond() / 100)
        })), U(0, ["SS", 2], 0, (function() {
          return ~~(this.millisecond() / 10)
        })), U(0, ["SSS", 3], 0, "millisecond"), U(0, ["SSSS", 4], 0, (function() {
          return 10 * this.millisecond()
        })), U(0, ["SSSSS", 5], 0, (function() {
          return 100 * this.millisecond()
        })), U(0, ["SSSSSS", 6], 0, (function() {
          return 1e3 * this.millisecond()
        })), U(0, ["SSSSSSS", 7], 0, (function() {
          return 1e4 * this.millisecond()
        })), U(0, ["SSSSSSSS", 8], 0, (function() {
          return 1e5 * this.millisecond()
        })), U(0, ["SSSSSSSSS", 9], 0, (function() {
          return 1e6 * this.millisecond()
        })), j("millisecond", "ms"), H("millisecond", 16), ce("S", te, q), ce("SS", te, $), ce("SSS", te, J), sn = "SSSS"; sn.length <= 9; sn += "S") ce(sn, ie);

      function un(e, t) {
        t[6] = M(1e3 * ("0." + e))
      }
      for (sn = "S"; sn.length <= 9; sn += "S") pe(sn, un);
      var cn = we("Milliseconds", !1);
      U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");
      var dn = b.prototype;

      function hn(e) {
        return e
      }
      dn.add = Gt, dn.calendar = function(e, t) {
        var n = e || Lt(),
          r = Rt(n, this).startOf("day"),
          a = i.calendarFormat(this, r) || "sameElse",
          o = t && (Y(t[a]) ? t[a].call(this, n) : t[a]);
        return this.format(o || this.localeData().calendar(a, this, Lt(n)))
      }, dn.clone = function() {
        return new b(this)
      }, dn.diff = function(e, t, n) {
        var r, i, a;
        if (!this.isValid()) return NaN;
        if (!(r = Rt(e, this)).isValid()) return NaN;
        switch (i = 6e4 * (r.utcOffset() - this.utcOffset()), t = A(t)) {
          case "year":
            a = $t(this, r) / 12;
            break;
          case "month":
            a = $t(this, r);
            break;
          case "quarter":
            a = $t(this, r) / 3;
            break;
          case "second":
            a = (this - r) / 1e3;
            break;
          case "minute":
            a = (this - r) / 6e4;
            break;
          case "hour":
            a = (this - r) / 36e5;
            break;
          case "day":
            a = (this - r - i) / 864e5;
            break;
          case "week":
            a = (this - r - i) / 6048e5;
            break;
          default:
            a = this - r
        }
        return n ? a : k(a)
      }, dn.endOf = function(e) {
        var t;
        if (void 0 === (e = A(e)) || "millisecond" === e || !this.isValid()) return this;
        var n = this._isUTC ? en : Qt;
        switch (e) {
          case "year":
            t = n(this.year() + 1, 0, 1) - 1;
            break;
          case "quarter":
            t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
            break;
          case "month":
            t = n(this.year(), this.month() + 1, 1) - 1;
            break;
          case "week":
            t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
            break;
          case "isoWeek":
            t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
            break;
          case "day":
          case "date":
            t = n(this.year(), this.month(), this.date() + 1) - 1;
            break;
          case "hour":
            t = this._d.valueOf(), t += 36e5 - Zt(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
            break;
          case "minute":
            t = this._d.valueOf(), t += 6e4 - Zt(t, 6e4) - 1;
            break;
          case "second":
            t = this._d.valueOf(), t += 1e3 - Zt(t, 1e3) - 1
        }
        return this._d.setTime(t), i.updateOffset(this, !0), this
      }, dn.format = function(e) {
        e || (e = this.isUtc() ? i.defaultFormatUtc : i.defaultFormat);
        var t = V(this, e);
        return this.localeData().postformat(t)
      }, dn.from = function(e, t) {
        return this.isValid() && (w(e) && e.isValid() || Lt(e).isValid()) ? Nt({
          to: this,
          from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
      }, dn.fromNow = function(e) {
        return this.from(Lt(), e)
      }, dn.to = function(e, t) {
        return this.isValid() && (w(e) && e.isValid() || Lt(e).isValid()) ? Nt({
          from: this,
          to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
      }, dn.toNow = function(e) {
        return this.to(Lt(), e)
      }, dn.get = function(e) {
        return Y(this[e = A(e)]) ? this[e]() : this
      }, dn.invalidAt = function() {
        return p(this).overflow
      }, dn.isAfter = function(e, t) {
        var n = w(e) ? e : Lt(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = A(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
      }, dn.isBefore = function(e, t) {
        var n = w(e) ? e : Lt(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = A(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
      }, dn.isBetween = function(e, t, n, r) {
        var i = w(e) ? e : Lt(e),
          a = w(t) ? t : Lt(t);
        return !!(this.isValid() && i.isValid() && a.isValid()) && ("(" === (r = r || "()")[0] ? this.isAfter(i, n) : !this.isBefore(i, n)) && (")" === r[1] ? this.isBefore(a, n) : !this.isAfter(a, n))
      }, dn.isSame = function(e, t) {
        var n, r = w(e) ? e : Lt(e);
        return !(!this.isValid() || !r.isValid()) && ("millisecond" === (t = A(t) || "millisecond") ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
      }, dn.isSameOrAfter = function(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t)
      }, dn.isSameOrBefore = function(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t)
      }, dn.isValid = function() {
        return m(this)
      }, dn.lang = Xt, dn.locale = Jt, dn.localeData = Kt, dn.max = Tt, dn.min = St, dn.parsingFlags = function() {
        return h({}, p(this))
      }, dn.set = function(e, t) {
        if ("object" == typeof e)
          for (var n = function(e) {
              var t = [];
              for (var n in e) t.push({
                unit: n,
                priority: I[n]
              });
              return t.sort((function(e, t) {
                return e.priority - t.priority
              })), t
            }(e = R(e)), r = 0; r < n.length; r++) this[n[r].unit](e[n[r].unit]);
        else if (Y(this[e = A(e)])) return this[e](t);
        return this
      }, dn.startOf = function(e) {
        var t;
        if (void 0 === (e = A(e)) || "millisecond" === e || !this.isValid()) return this;
        var n = this._isUTC ? en : Qt;
        switch (e) {
          case "year":
            t = n(this.year(), 0, 1);
            break;
          case "quarter":
            t = n(this.year(), this.month() - this.month() % 3, 1);
            break;
          case "month":
            t = n(this.year(), this.month(), 1);
            break;
          case "week":
            t = n(this.year(), this.month(), this.date() - this.weekday());
            break;
          case "isoWeek":
            t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
            break;
          case "day":
          case "date":
            t = n(this.year(), this.month(), this.date());
            break;
          case "hour":
            t = this._d.valueOf(), t -= Zt(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
            break;
          case "minute":
            t = this._d.valueOf(), t -= Zt(t, 6e4);
            break;
          case "second":
            t = this._d.valueOf(), t -= Zt(t, 1e3)
        }
        return this._d.setTime(t), i.updateOffset(this, !0), this
      }, dn.subtract = qt, dn.toArray = function() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
      }, dn.toObject = function() {
        var e = this;
        return {
          years: e.year(),
          months: e.month(),
          date: e.date(),
          hours: e.hours(),
          minutes: e.minutes(),
          seconds: e.seconds(),
          milliseconds: e.milliseconds()
        }
      }, dn.toDate = function() {
        return new Date(this.valueOf())
      }, dn.toISOString = function(e) {
        if (!this.isValid()) return null;
        var t = !0 !== e,
          n = t ? this.clone().utc() : this;
        return n.year() < 0 || n.year() > 9999 ? V(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : Y(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", V(n, "Z")) : V(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
      }, dn.inspect = function() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var e = "moment",
          t = "";
        this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
        var n = "[" + e + '("]',
          r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
          i = t + '[")]';
        return this.format(n + r + "-MM-DD[T]HH:mm:ss.SSS" + i)
      }, dn.toJSON = function() {
        return this.isValid() ? this.toISOString() : null
      }, dn.toString = function() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
      }, dn.unix = function() {
        return Math.floor(this.valueOf() / 1e3)
      }, dn.valueOf = function() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
      }, dn.creationData = function() {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict
        }
      }, dn.year = be, dn.isLeapYear = function() {
        return ge(this.year())
      }, dn.weekYear = function(e) {
        return nn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
      }, dn.isoWeekYear = function(e) {
        return nn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
      }, dn.quarter = dn.quarters = function(e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
      }, dn.month = Ye, dn.daysInMonth = function() {
        return xe(this.year(), this.month())
      }, dn.week = dn.weeks = function(e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d")
      }, dn.isoWeek = dn.isoWeeks = function(e) {
        var t = He(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d")
      }, dn.weeksInYear = function() {
        var e = this.localeData()._week;
        return Fe(this.year(), e.dow, e.doy)
      }, dn.isoWeeksInYear = function() {
        return Fe(this.year(), 1, 4)
      }, dn.date = an, dn.day = dn.days = function(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (e = function(e, t) {
          return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
        }(e, this.localeData()), this.add(e - t, "d")) : t
      }, dn.weekday = function(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, "d")
      }, dn.isoWeekday = function(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        if (null != e) {
          var t = function(e, t) {
            return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
          }(e, this.localeData());
          return this.day(this.day() % 7 ? t : t - 7)
        }
        return this.day() || 7
      }, dn.dayOfYear = function(e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add(e - t, "d")
      }, dn.hour = dn.hours = Qe, dn.minute = dn.minutes = on, dn.second = dn.seconds = ln, dn.millisecond = dn.milliseconds = cn, dn.utcOffset = function(e, t, n) {
        var r, a = this._offset || 0;
        if (!this.isValid()) return null != e ? this : NaN;
        if (null != e) {
          if ("string" == typeof e) {
            if (null === (e = At(se, e))) return this
          } else Math.abs(e) < 16 && !n && (e *= 60);
          return !this._isUTC && t && (r = It(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), a !== e && (!t || this._changeInProgress ? Vt(this, Nt(e - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, i.updateOffset(this, !0), this._changeInProgress = null)), this
        }
        return this._isUTC ? a : It(this)
      }, dn.utc = function(e) {
        return this.utcOffset(0, e)
      }, dn.local = function(e) {
        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(It(this), "m")), this
      }, dn.parseZone = function() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
          var e = At(oe, this._i);
          null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
        }
        return this
      }, dn.hasAlignedHourOffset = function(e) {
        return !!this.isValid() && (e = e ? Lt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
      }, dn.isDST = function() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
      }, dn.isLocal = function() {
        return !!this.isValid() && !this._isUTC
      }, dn.isUtcOffset = function() {
        return !!this.isValid() && this._isUTC
      }, dn.isUtc = Ht, dn.isUTC = Ht, dn.zoneAbbr = function() {
        return this._isUTC ? "UTC" : ""
      }, dn.zoneName = function() {
        return this._isUTC ? "Coordinated Universal Time" : ""
      }, dn.dates = S("dates accessor is deprecated. Use date instead.", an), dn.months = S("months accessor is deprecated. Use month instead", Ye), dn.years = S("years accessor is deprecated. Use year instead", be), dn.zone = S("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", (function(e, t) {
        return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
      })), dn.isDSTShifted = S("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", (function() {
        if (!s(this._isDSTShifted)) return this._isDSTShifted;
        var e = {};
        if (g(e, this), (e = Mt(e))._a) {
          var t = e._isUTC ? f(e._a) : Lt(e._a);
          this._isDSTShifted = this.isValid() && x(e._a, t.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
      }));
      var fn = O.prototype;

      function pn(e, t, n, r) {
        var i = st(),
          a = f().set(r, t);
        return i[n](a, e)
      }

      function mn(e, t, n) {
        if (l(e) && (t = e, e = void 0), e = e || "", null != t) return pn(e, t, n, "month");
        var r, i = [];
        for (r = 0; r < 12; r++) i[r] = pn(e, r, n, "month");
        return i
      }

      function _n(e, t, n, r) {
        "boolean" == typeof e ? (l(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, l(t) && (n = t, t = void 0), t = t || "");
        var i, a = st(),
          o = e ? a._week.dow : 0;
        if (null != n) return pn(t, (n + o) % 7, r, "day");
        var s = [];
        for (i = 0; i < 7; i++) s[i] = pn(t, (i + o) % 7, r, "day");
        return s
      }
      fn.calendar = function(e, t, n) {
        var r = this._calendar[e] || this._calendar.sameElse;
        return Y(r) ? r.call(t, n) : r
      }, fn.longDateFormat = function(e) {
        var t = this._longDateFormat[e],
          n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, (function(e) {
          return e.slice(1)
        })), this._longDateFormat[e])
      }, fn.invalidDate = function() {
        return this._invalidDate
      }, fn.ordinal = function(e) {
        return this._ordinal.replace("%d", e)
      }, fn.preparse = hn, fn.postformat = hn, fn.relativeTime = function(e, t, n, r) {
        var i = this._relativeTime[n];
        return Y(i) ? i(e, t, n, r) : i.replace(/%d/i, e)
      }, fn.pastFuture = function(e, t) {
        var n = this._relativeTime[e > 0 ? "future" : "past"];
        return Y(n) ? n(t) : n.replace(/%s/i, t)
      }, fn.set = function(e) {
        var t, n;
        for (n in e) Y(t = e[n]) ? this[n] = t : this["_" + n] = t;
        this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
      }, fn.months = function(e, t) {
        return e ? a(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Le).test(t) ? "format" : "standalone"][e.month()] : a(this._months) ? this._months : this._months.standalone
      }, fn.monthsShort = function(e, t) {
        return e ? a(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Le.test(t) ? "format" : "standalone"][e.month()] : a(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
      }, fn.monthsParse = function(e, t, n) {
        var r, i, a;
        if (this._monthsParseExact) return De.call(this, e, t, n);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
          if (i = f([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[r] || (a = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[r] = new RegExp(a.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[r].test(e)) return r;
          if (n && "MMM" === t && this._shortMonthsParse[r].test(e)) return r;
          if (!n && this._monthsParse[r].test(e)) return r
        }
      }, fn.monthsRegex = function(e) {
        return this._monthsParseExact ? (d(this, "_monthsRegex") || Pe.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (d(this, "_monthsRegex") || (this._monthsRegex = Oe), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
      }, fn.monthsShortRegex = function(e) {
        return this._monthsParseExact ? (d(this, "_monthsRegex") || Pe.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (d(this, "_monthsShortRegex") || (this._monthsShortRegex = Ce), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
      }, fn.week = function(e) {
        return He(e, this._week.dow, this._week.doy).week
      }, fn.firstDayOfYear = function() {
        return this._week.doy
      }, fn.firstDayOfWeek = function() {
        return this._week.dow
      }, fn.weekdays = function(e, t) {
        var n = a(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
        return !0 === e ? ze(n, this._week.dow) : e ? n[e.day()] : n
      }, fn.weekdaysMin = function(e) {
        return !0 === e ? ze(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
      }, fn.weekdaysShort = function(e) {
        return !0 === e ? ze(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
      }, fn.weekdaysParse = function(e, t, n) {
        var r, i, a;
        if (this._weekdaysParseExact) return Ue.call(this, e, t, n);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
          if (i = f([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[r] || (a = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[r] = new RegExp(a.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[r].test(e)) return r;
          if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e)) return r;
          if (n && "dd" === t && this._minWeekdaysParse[r].test(e)) return r;
          if (!n && this._weekdaysParse[r].test(e)) return r
        }
      }, fn.weekdaysRegex = function(e) {
        return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || $e.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (d(this, "_weekdaysRegex") || (this._weekdaysRegex = Ve), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
      }, fn.weekdaysShortRegex = function(e) {
        return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || $e.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (d(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ge), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
      }, fn.weekdaysMinRegex = function(e) {
        return this._weekdaysParseExact ? (d(this, "_weekdaysRegex") || $e.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (d(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = qe), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
      }, fn.isPM = function(e) {
        return "p" === (e + "").toLowerCase().charAt(0)
      }, fn.meridiem = function(e, t, n) {
        return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
      }, at("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
          var t = e % 10;
          return e + (1 === M(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        }
      }), i.lang = S("moment.lang is deprecated. Use moment.locale instead.", at), i.langData = S("moment.langData is deprecated. Use moment.localeData instead.", st);
      var yn = Math.abs;

      function gn(e, t, n, r) {
        var i = Nt(t, n);
        return e._milliseconds += r * i._milliseconds, e._days += r * i._days, e._months += r * i._months, e._bubble()
      }

      function vn(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e)
      }

      function bn(e) {
        return 4800 * e / 146097
      }

      function wn(e) {
        return 146097 * e / 4800
      }

      function kn(e) {
        return function() {
          return this.as(e)
        }
      }
      var Mn = kn("ms"),
        xn = kn("s"),
        Ln = kn("m"),
        Sn = kn("h"),
        Tn = kn("d"),
        Dn = kn("w"),
        En = kn("M"),
        Yn = kn("Q"),
        Cn = kn("y");

      function On(e) {
        return function() {
          return this.isValid() ? this._data[e] : NaN
        }
      }
      var Pn = On("milliseconds"),
        jn = On("seconds"),
        An = On("minutes"),
        Rn = On("hours"),
        In = On("days"),
        Hn = On("months"),
        Fn = On("years"),
        zn = Math.round,
        Nn = {
          ss: 44,
          s: 45,
          m: 45,
          h: 22,
          d: 26,
          M: 11
        };

      function Wn(e, t, n, r, i) {
        return i.relativeTime(t || 1, !!n, e, r)
      }
      var Bn = Math.abs;

      function Un(e) {
        return (e > 0) - (e < 0) || +e
      }

      function Vn() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e, t, n = Bn(this._milliseconds) / 1e3,
          r = Bn(this._days),
          i = Bn(this._months);
        e = k(n / 60), t = k(e / 60), n %= 60, e %= 60;
        var a = k(i / 12),
          o = i %= 12,
          s = r,
          l = t,
          u = e,
          c = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
          d = this.asSeconds();
        if (!d) return "P0D";
        var h = d < 0 ? "-" : "",
          f = Un(this._months) !== Un(d) ? "-" : "",
          p = Un(this._days) !== Un(d) ? "-" : "",
          m = Un(this._milliseconds) !== Un(d) ? "-" : "";
        return h + "P" + (a ? f + a + "Y" : "") + (o ? f + o + "M" : "") + (s ? p + s + "D" : "") + (l || u || c ? "T" : "") + (l ? m + l + "H" : "") + (u ? m + u + "M" : "") + (c ? m + c + "S" : "")
      }
      var Gn = Yt.prototype;
      return Gn.isValid = function() {
        return this._isValid
      }, Gn.abs = function() {
        var e = this._data;
        return this._milliseconds = yn(this._milliseconds), this._days = yn(this._days), this._months = yn(this._months), e.milliseconds = yn(e.milliseconds), e.seconds = yn(e.seconds), e.minutes = yn(e.minutes), e.hours = yn(e.hours), e.months = yn(e.months), e.years = yn(e.years), this
      }, Gn.add = function(e, t) {
        return gn(this, e, t, 1)
      }, Gn.subtract = function(e, t) {
        return gn(this, e, t, -1)
      }, Gn.as = function(e) {
        if (!this.isValid()) return NaN;
        var t, n, r = this._milliseconds;
        if ("month" === (e = A(e)) || "quarter" === e || "year" === e) switch (t = this._days + r / 864e5, n = this._months + bn(t), e) {
          case "month":
            return n;
          case "quarter":
            return n / 3;
          case "year":
            return n / 12
        } else switch (t = this._days + Math.round(wn(this._months)), e) {
          case "week":
            return t / 7 + r / 6048e5;
          case "day":
            return t + r / 864e5;
          case "hour":
            return 24 * t + r / 36e5;
          case "minute":
            return 1440 * t + r / 6e4;
          case "second":
            return 86400 * t + r / 1e3;
          case "millisecond":
            return Math.floor(864e5 * t) + r;
          default:
            throw new Error("Unknown unit " + e)
        }
      }, Gn.asMilliseconds = Mn, Gn.asSeconds = xn, Gn.asMinutes = Ln, Gn.asHours = Sn, Gn.asDays = Tn, Gn.asWeeks = Dn, Gn.asMonths = En, Gn.asQuarters = Yn, Gn.asYears = Cn, Gn.valueOf = function() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * M(this._months / 12) : NaN
      }, Gn._bubble = function() {
        var e, t, n, r, i, a = this._milliseconds,
          o = this._days,
          s = this._months,
          l = this._data;
        return a >= 0 && o >= 0 && s >= 0 || a <= 0 && o <= 0 && s <= 0 || (a += 864e5 * vn(wn(s) + o), o = 0, s = 0), l.milliseconds = a % 1e3, e = k(a / 1e3), l.seconds = e % 60, t = k(e / 60), l.minutes = t % 60, n = k(t / 60), l.hours = n % 24, o += k(n / 24), i = k(bn(o)), s += i, o -= vn(wn(i)), r = k(s / 12), s %= 12, l.days = o, l.months = s, l.years = r, this
      }, Gn.clone = function() {
        return Nt(this)
      }, Gn.get = function(e) {
        return e = A(e), this.isValid() ? this[e + "s"]() : NaN
      }, Gn.milliseconds = Pn, Gn.seconds = jn, Gn.minutes = An, Gn.hours = Rn, Gn.days = In, Gn.weeks = function() {
        return k(this.days() / 7)
      }, Gn.months = Hn, Gn.years = Fn, Gn.humanize = function(e) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var t = this.localeData(),
          n = function(e, t, n) {
            var r = Nt(e).abs(),
              i = zn(r.as("s")),
              a = zn(r.as("m")),
              o = zn(r.as("h")),
              s = zn(r.as("d")),
              l = zn(r.as("M")),
              u = zn(r.as("y")),
              c = i <= Nn.ss && ["s", i] || i < Nn.s && ["ss", i] || a <= 1 && ["m"] || a < Nn.m && ["mm", a] || o <= 1 && ["h"] || o < Nn.h && ["hh", o] || s <= 1 && ["d"] || s < Nn.d && ["dd", s] || l <= 1 && ["M"] || l < Nn.M && ["MM", l] || u <= 1 && ["y"] || ["yy", u];
            return c[2] = t, c[3] = +e > 0, c[4] = n, Wn.apply(null, c)
          }(this, !e, t);
        return e && (n = t.pastFuture(+this, n)), t.postformat(n)
      }, Gn.toISOString = Vn, Gn.toString = Vn, Gn.toJSON = Vn, Gn.locale = Jt, Gn.localeData = Kt, Gn.toIsoString = S("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Vn), Gn.lang = Xt, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), ce("x", ae), ce("X", /[+-]?\d+(\.\d{1,3})?/), pe("X", (function(e, t, n) {
        n._d = new Date(1e3 * parseFloat(e, 10))
      })), pe("x", (function(e, t, n) {
        n._d = new Date(M(e))
      })), i.version = "2.24.0", t = Lt, i.fn = dn, i.min = function() {
        var e = [].slice.call(arguments, 0);
        return Dt("isBefore", e)
      }, i.max = function() {
        var e = [].slice.call(arguments, 0);
        return Dt("isAfter", e)
      }, i.now = function() {
        return Date.now ? Date.now() : +new Date
      }, i.utc = f, i.unix = function(e) {
        return Lt(1e3 * e)
      }, i.months = function(e, t) {
        return mn(e, t, "months")
      }, i.isDate = u, i.locale = at, i.invalid = _, i.duration = Nt, i.isMoment = w, i.weekdays = function(e, t, n) {
        return _n(e, t, n, "weekdays")
      }, i.parseZone = function() {
        return Lt.apply(null, arguments).parseZone()
      }, i.localeData = st, i.isDuration = Ct, i.monthsShort = function(e, t) {
        return mn(e, t, "monthsShort")
      }, i.weekdaysMin = function(e, t, n) {
        return _n(e, t, n, "weekdaysMin")
      }, i.defineLocale = ot, i.updateLocale = function(e, t) {
        if (null != t) {
          var n, r, i = et;
          null != (r = it(e)) && (i = r._config), t = C(i, t), (n = new O(t)).parentLocale = tt[e], tt[e] = n, at(e)
        } else null != tt[e] && (null != tt[e].parentLocale ? tt[e] = tt[e].parentLocale : null != tt[e] && delete tt[e]);
        return tt[e]
      }, i.locales = function() {
        return T(tt)
      }, i.weekdaysShort = function(e, t, n) {
        return _n(e, t, n, "weekdaysShort")
      }, i.normalizeUnits = A, i.relativeTimeRounding = function(e) {
        return void 0 === e ? zn : "function" == typeof e && (zn = e, !0)
      }, i.relativeTimeThreshold = function(e, t) {
        return void 0 !== Nn[e] && (void 0 === t ? Nn[e] : (Nn[e] = t, "s" === e && (Nn.ss = t - 1), !0))
      }, i.calendarFormat = function(e, t) {
        var n = e.diff(t, "days", !0);
        return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
      }, i.prototype = dn, i.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
      }, i
    }()
  }).call(this, n(154)(e))
}, function(e, t, n) {
  var r = n(10),
    i = n(18),
    a = n(27),
    o = n(24),
    s = n(32),
    l = function(e, t, n) {
      var u, c, d, h, f = e & l.F,
        p = e & l.G,
        m = e & l.S,
        _ = e & l.P,
        y = e & l.B,
        g = p ? r : m ? r[t] || (r[t] = {}) : (r[t] || {}).prototype,
        v = p ? i : i[t] || (i[t] = {}),
        b = v.prototype || (v.prototype = {});
      for (u in p && (n = t), n) d = ((c = !f && g && void 0 !== g[u]) ? g : n)[u], h = y && c ? s(d, r) : _ && "function" == typeof d ? s(Function.call, d) : d, g && o(g, u, d, e & l.U), v[u] != d && a(v, u, h), _ && b[u] != d && (b[u] = d)
    };
  r.core = i, l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l
}, function(e, t, n) {
  "use strict";
  n.d(t, "a", (function() {
    return i
  }));
  var r = n(49);

  function i(e, t) {
    if (null == e) return {};
    var n, i, a = Object(r.a)(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
    }
    return a
  }
}, function(e, t, n) {
  "use strict";

  function r(e) {
    var t, n, i = "";
    if (e)
      if ("object" == typeof e)
        if (e.push)
          for (t = 0; t < e.length; t++) e[t] && (n = r(e[t])) && (i && (i += " "), i += n);
        else
          for (t in e) e[t] && (n = r(t)) && (i && (i += " "), i += n);
    else "boolean" == typeof e || e.call || (i && (i += " "), i += e);
    return i
  }
  t.a = function() {
    for (var e, t = 0, n = ""; t < arguments.length;)(e = r(arguments[t++])) && (n && (n += " "), n += e);
    return n
  }
}, function(e, t, n) {
  e.exports = n(604)()
}, function(e, t, n) {
  "use strict";
  var r = n(1),
    i = n(4),
    a = n(0),
    o = n.n(a),
    s = (n(6), n(366)),
    l = n.n(s),
    u = n(738),
    c = n(737),
    d = n(735),
    h = function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return function(n) {
        var a = t.defaultTheme,
          s = t.withTheme,
          h = void 0 !== s && s,
          f = t.name,
          p = Object(i.a)(t, ["defaultTheme", "withTheme", "name"]);
        var m = f,
          _ = Object(u.a)(e, Object(r.a)({
            defaultTheme: a,
            Component: n,
            name: f || n.displayName,
            classNamePrefix: m
          }, p)),
          y = o.a.forwardRef((function(e, t) {
            e.classes;
            var s, l = e.innerRef,
              u = Object(i.a)(e, ["classes", "innerRef"]),
              p = _(e),
              m = u;
            return ("string" == typeof f || h) && (s = Object(d.a)() || a, f && (m = Object(c.a)({
              theme: s,
              name: f,
              props: u
            })), h && !m.theme && (m.theme = s)), o.a.createElement(n, Object(r.a)({
              ref: l || t,
              classes: p
            }, m))
          }));
        return y.defaultProps = n.defaultProps, l()(y, n), y
      }
    },
    f = n(71);
  t.a = function(e, t) {
    return h(e, Object(r.a)({
      defaultTheme: f.a
    }, t))
  }
}, function(e, t, n) {
  "use strict";

  function r(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
  }
  n.d(t, "a", (function() {
    return r
  }))
}, function(e, t, n) {
  "use strict";

  function r(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
    return Math.min(Math.max(t, e), n)
  }

  function i(e) {
    if (e.type) return e;
    if ("#" === e.charAt(0)) return i(function(e) {
      e = e.substr(1);
      var t = new RegExp(".{1,".concat(e.length / 3, "}"), "g"),
        n = e.match(t);
      return n && 1 === n[0].length && (n = n.map((function(e) {
        return e + e
      }))), n ? "rgb(".concat(n.map((function(e) {
        return parseInt(e, 16)
      })).join(", "), ")") : ""
    }(e));
    var t = e.indexOf("("),
      n = e.substring(0, t);
    if (-1 === ["rgb", "rgba", "hsl", "hsla"].indexOf(n)) throw new Error(["Material-UI: unsupported `".concat(e, "` color."), "We support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()."].join("\n"));
    var r = e.substring(t + 1, e.length - 1).split(",");
    return {
      type: n,
      values: r = r.map((function(e) {
        return parseFloat(e)
      }))
    }
  }

  function a(e) {
    var t = e.type,
      n = e.values;
    return -1 !== t.indexOf("rgb") ? n = n.map((function(e, t) {
      return t < 3 ? parseInt(e, 10) : e
    })) : -1 !== t.indexOf("hsl") && (n[1] = "".concat(n[1], "%"), n[2] = "".concat(n[2], "%")), "".concat(t, "(").concat(n.join(", "), ")")
  }

  function o(e, t) {
    var n = s(e),
      r = s(t);
    return (Math.max(n, r) + .05) / (Math.min(n, r) + .05)
  }

  function s(e) {
    var t = "hsl" === (e = i(e)).type ? i(function(e) {
      var t = (e = i(e)).values,
        n = t[0],
        r = t[1] / 100,
        o = t[2] / 100,
        s = r * Math.min(o, 1 - o),
        l = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (e + n / 30) % 12;
          return o - s * Math.max(Math.min(t - 3, 9 - t, 1), -1)
        },
        u = "rgb",
        c = [Math.round(255 * l(0)), Math.round(255 * l(8)), Math.round(255 * l(4))];
      return "hsla" === e.type && (u += "a", c.push(t[3])), a({
        type: u,
        values: c
      })
    }(e)).values : e.values;
    return t = t.map((function(e) {
      return (e /= 255) <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
    })), Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3))
  }

  function l(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .15;
    return s(e) > .5 ? c(e, t) : d(e, t)
  }

  function u(e, t) {
    return e = i(e), t = r(t), "rgb" !== e.type && "hsl" !== e.type || (e.type += "a"), e.values[3] = t, a(e)
  }

  function c(e, t) {
    if (e = i(e), t = r(t), -1 !== e.type.indexOf("hsl")) e.values[2] *= 1 - t;
    else if (-1 !== e.type.indexOf("rgb"))
      for (var n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
    return a(e)
  }

  function d(e, t) {
    if (e = i(e), t = r(t), -1 !== e.type.indexOf("hsl")) e.values[2] += (100 - e.values[2]) * t;
    else if (-1 !== e.type.indexOf("rgb"))
      for (var n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
    return a(e)
  }
  n.d(t, "d", (function() {
    return o
  })), n.d(t, "b", (function() {
    return l
  })), n.d(t, "c", (function() {
    return u
  })), n.d(t, "a", (function() {
    return c
  })), n.d(t, "e", (function() {
    return d
  }))
}, function(e, t) {
  var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
  "number" == typeof __g && (__g = n)
}, function(e, t) {
  e.exports = function(e) {
    try {
      return !!e()
    } catch (e) {
      return !0
    }
  }
}, function(e, t, n) {
  var r = n(13);
  e.exports = function(e) {
    if (!r(e)) throw TypeError(e + " is not an object!");
    return e
  }
}, function(e, t) {
  e.exports = function(e) {
    return "object" == typeof e ? null !== e : "function" == typeof e
  }
}, function(e, t, n) {
  "use strict";
  ! function e() {
    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
      0;
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
      } catch (e) {
        console.error(e)
      }
    }
  }(), e.exports = n(576)
}, function(e, t, n) {
  var r = n(87)("wks"),
    i = n(52),
    a = n(10).Symbol,
    o = "function" == typeof a;
  (e.exports = function(e) {
    return r[e] || (r[e] = o && a[e] || (o ? a : i)("Symbol." + e))
  }).store = r
}, function(e, t, n) {
  var r = n(34),
    i = Math.min;
  e.exports = function(e) {
    return e > 0 ? i(r(e), 9007199254740991) : 0
  }
}, , function(e, t) {
  var n = e.exports = {
    version: "2.6.11"
  };
  "number" == typeof __e && (__e = n)
}, function(e, t, n) {
  "use strict";

  function r(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }
  n.d(t, "a", (function() {
    return r
  }))
}, function(e, t) {
  e.exports = {
    hello: "hello",
    welcome: "welcome",
    getChunk: "getChunk",
    chunkBuffer: "chunkBuffer",
    captchaToken: "captchaToken",
    captchaTest: "captchaTest",
    captchaResult: "captchaResult",
    place: "place",
    timer: "timer",
    playerCounter: "playerCounter",
    listenLiveStats: "listenLiveStats",
    closeLiveStats: "closeLiveStats",
    statsPlacedPixels: "statsPlacedPixels",
    statsTimestamps: "statsTimestamps"
  }
}, function(e, t, n) {
  e.exports = !n(11)((function() {
    return 7 != Object.defineProperty({}, "a", {
      get: function() {
        return 7
      }
    }).a
  }))
}, function(e, t, n) {
  var r = n(12),
    i = n(173),
    a = n(45),
    o = Object.defineProperty;
  t.f = n(21) ? Object.defineProperty : function(e, t, n) {
    if (r(e), t = a(t, !0), r(n), i) try {
      return o(e, t, n)
    } catch (e) {}
    if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
    return "value" in n && (e[t] = n.value), e
  }
}, function(e, t, n) {
  var r = n(40);
  e.exports = function(e) {
    return Object(r(e))
  }
}, function(e, t, n) {
  var r = n(10),
    i = n(27),
    a = n(26),
    o = n(52)("src"),
    s = n(393),
    l = ("" + s).split("toString");
  n(18).inspectSource = function(e) {
    return s.call(e)
  }, (e.exports = function(e, t, n, s) {
    var u = "function" == typeof n;
    u && (a(n, "name") || i(n, "name", t)), e[t] !== n && (u && (a(n, o) || i(n, o, e[t] ? "" + e[t] : l.join(String(t)))), e === r ? e[t] = n : s ? e[t] ? e[t] = n : i(e, t, n) : (delete e[t], i(e, t, n)))
  })(Function.prototype, "toString", (function() {
    return "function" == typeof this && this[o] || s.call(this)
  }))
}, function(e, t, n) {
  var r = n(3),
    i = n(11),
    a = n(40),
    o = /"/g,
    s = function(e, t, n, r) {
      var i = String(a(e)),
        s = "<" + t;
      return "" !== n && (s += " " + n + '="' + String(r).replace(o, "&quot;") + '"'), s + ">" + i + "</" + t + ">"
    };
  e.exports = function(e, t) {
    var n = {};
    n[e] = t(s), r(r.P + r.F * i((function() {
      var t = "" [e]('"');
      return t !== t.toLowerCase() || t.split('"').length > 3
    })), "String", n)
  }
}, function(e, t) {
  var n = {}.hasOwnProperty;
  e.exports = function(e, t) {
    return n.call(e, t)
  }
}, function(e, t, n) {
  var r = n(22),
    i = n(51);
  e.exports = n(21) ? function(e, t, n) {
    return r.f(e, t, i(1, n))
  } : function(e, t, n) {
    return e[t] = n, e
  }
}, function(e, t, n) {
  var r = n(77),
    i = n(40);
  e.exports = function(e) {
    return r(i(e))
  }
}, function(e, t) {
  Colors = {}, Colors.colorsPalette = [
    [38, 38, 38],
    [0, 0, 0],
    [128, 128, 128],
    [255, 255, 255],
    [153, 98, 61],
    [255, 163, 200],
    [207, 115, 230],
    [128, 0, 128],
    [229, 0, 0],
    [229, 137, 0],
    [229, 229, 0],
    [150, 230, 70],
    [0, 190, 0],
    [0, 230, 230],
    [0, 136, 204],
    [0, 0, 230]
  ], Colors.getRGBAColorsPalette = function() {
    for (var e = JSON.parse(JSON.stringify(Colors.colorsPalette)), t = 0; t < e.length; t++) e[t].push(255);
    return e
  }, Colors.getColorRGBFromId = function(e) {
    return Colors.colorsPalette[Colors.checkId(e)]
  }, Colors.getColorStrFromId = function(e) {
    var t = Colors.getColorRGBFromId(e);
    return Colors.getColorStrFromRGB(t)
  }, Colors.getColorStrFromRGB = function(e) {
    return "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")"
  }, Colors.getColorRGBFromStr = function(e) {
    e = (e = (e = (e = e.substring(3)).replace("(", "")).replace(")", "")).split(", ");
    for (var t = 0; t < e.length; t++) e[t] = parseInt(e[t]);
    return e
  }, Colors.getColorIdFromRGB = function(e) {
    for (var t, n = 0; n < Colors.colorsPalette.length; n++)
      if ((t = Colors.getColorRGBFromId(n))[0] == e[0] && t[1] == e[1] && t[2] == e[2]) return n;
    return console.log("wtf"), console.log(e), -1
  }, Colors.getColorIdFromStr = function(e) {
    for (var t, n = 0; n < Colors.colorsPalette.length; n++)
      if (t = Colors.getColorRGBFromId(n), Colors.getColorStrFromRGB(t) == e) return n;
    return -1
  }, Colors.checkId = function(e) {
    return (e >= Colors.colorsPalette.length || e < 0) && (e = Math.abs(e % Colors.colorsPalette.length), console.err("ERROR Color : unknown id !")), e
  }, e.exports = Colors
}, function(e, t) {
  var n = {
    cooldown: 3,
    mapSize: 8192,
    chunkSize: 512
  };
  n.mapRatio = Math.round(n.mapSize / n.chunkSize), n.captcha = {}, n.captcha.penality = 15, e.exports = n
}, function(e, t, n) {
  "use strict";
  var r = n(11);
  e.exports = function(e, t) {
    return !!e && r((function() {
      t ? e.call(null, (function() {}), 1) : e.call(null)
    }))
  }
}, function(e, t, n) {
  var r = n(33);
  e.exports = function(e, t, n) {
    if (r(e), void 0 === t) return e;
    switch (n) {
      case 1:
        return function(n) {
          return e.call(t, n)
        };
      case 2:
        return function(n, r) {
          return e.call(t, n, r)
        };
      case 3:
        return function(n, r, i) {
          return e.call(t, n, r, i)
        }
    }
    return function() {
      return e.apply(t, arguments)
    }
  }
}, function(e, t) {
  e.exports = function(e) {
    if ("function" != typeof e) throw TypeError(e + " is not a function!");
    return e
  }
}, function(e, t) {
  var n = Math.ceil,
    r = Math.floor;
  e.exports = function(e) {
    return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
  }
}, function(e, t, n) {
  var r = n(78),
    i = n(51),
    a = n(28),
    o = n(45),
    s = n(26),
    l = n(173),
    u = Object.getOwnPropertyDescriptor;
  t.f = n(21) ? u : function(e, t) {
    if (e = a(e), t = o(t, !0), l) try {
      return u(e, t)
    } catch (e) {}
    if (s(e, t)) return i(!r.f.call(e, t), e[t])
  }
}, function(e, t, n) {
  var r = n(3),
    i = n(18),
    a = n(11);
  e.exports = function(e, t) {
    var n = (i.Object || {})[e] || Object[e],
      o = {};
    o[e] = t(n), r(r.S + r.F * a((function() {
      n(1)
    })), "Object", o)
  }
}, function(e, t, n) {
  var r = n(32),
    i = n(77),
    a = n(23),
    o = n(16),
    s = n(189);
  e.exports = function(e, t) {
    var n = 1 == e,
      l = 2 == e,
      u = 3 == e,
      c = 4 == e,
      d = 6 == e,
      h = 5 == e || d,
      f = t || s;
    return function(t, s, p) {
      for (var m, _, y = a(t), g = i(y), v = r(s, p, 3), b = o(g.length), w = 0, k = n ? f(t, b) : l ? f(t, 0) : void 0; b > w; w++)
        if ((h || w in g) && (_ = v(m = g[w], w, y), e))
          if (n) k[w] = _;
          else if (_) switch (e) {
        case 3:
          return !0;
        case 5:
          return m;
        case 6:
          return w;
        case 2:
          k.push(m)
      } else if (c) return !1;
      return d ? -1 : u || c ? c : k
    }
  }
}, function(e, t, n) {
  "use strict";

  function r(e) {
    return function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
    }(e) || function(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  n.d(t, "a", (function() {
    return r
  }))
}, function(e, t) {
  var n = {}.toString;
  e.exports = function(e) {
    return n.call(e).slice(8, -1)
  }
}, function(e, t) {
  e.exports = function(e) {
    if (null == e) throw TypeError("Can't call method on  " + e);
    return e
  }
}, function(e, t, n) {
  "use strict";
  if (n(21)) {
    var r = n(53),
      i = n(10),
      a = n(11),
      o = n(3),
      s = n(98),
      l = n(143),
      u = n(32),
      c = n(67),
      d = n(51),
      h = n(27),
      f = n(68),
      p = n(34),
      m = n(16),
      _ = n(200),
      y = n(55),
      g = n(45),
      v = n(26),
      b = n(79),
      w = n(13),
      k = n(23),
      M = n(135),
      x = n(56),
      L = n(58),
      S = n(57).f,
      T = n(137),
      D = n(52),
      E = n(15),
      Y = n(37),
      C = n(88),
      O = n(80),
      P = n(139),
      j = n(65),
      A = n(91),
      R = n(66),
      I = n(138),
      H = n(191),
      F = n(22),
      z = n(35),
      N = F.f,
      W = z.f,
      B = i.RangeError,
      U = i.TypeError,
      V = i.Uint8Array,
      G = Array.prototype,
      q = l.ArrayBuffer,
      $ = l.DataView,
      J = Y(0),
      X = Y(2),
      K = Y(3),
      Z = Y(4),
      Q = Y(5),
      ee = Y(6),
      te = C(!0),
      ne = C(!1),
      re = P.values,
      ie = P.keys,
      ae = P.entries,
      oe = G.lastIndexOf,
      se = G.reduce,
      le = G.reduceRight,
      ue = G.join,
      ce = G.sort,
      de = G.slice,
      he = G.toString,
      fe = G.toLocaleString,
      pe = E("iterator"),
      me = E("toStringTag"),
      _e = D("typed_constructor"),
      ye = D("def_constructor"),
      ge = s.CONSTR,
      ve = s.TYPED,
      be = s.VIEW,
      we = Y(1, (function(e, t) {
        return Se(O(e, e[ye]), t)
      })),
      ke = a((function() {
        return 1 === new V(new Uint16Array([1]).buffer)[0]
      })),
      Me = !!V && !!V.prototype.set && a((function() {
        new V(1).set({})
      })),
      xe = function(e, t) {
        var n = p(e);
        if (n < 0 || n % t) throw B("Wrong offset!");
        return n
      },
      Le = function(e) {
        if (w(e) && ve in e) return e;
        throw U(e + " is not a typed array!")
      },
      Se = function(e, t) {
        if (!(w(e) && _e in e)) throw U("It is not a typed array constructor!");
        return new e(t)
      },
      Te = function(e, t) {
        return De(O(e, e[ye]), t)
      },
      De = function(e, t) {
        for (var n = 0, r = t.length, i = Se(e, r); r > n;) i[n] = t[n++];
        return i
      },
      Ee = function(e, t, n) {
        N(e, t, {
          get: function() {
            return this._d[n]
          }
        })
      },
      Ye = function(e) {
        var t, n, r, i, a, o, s = k(e),
          l = arguments.length,
          c = l > 1 ? arguments[1] : void 0,
          d = void 0 !== c,
          h = T(s);
        if (null != h && !M(h)) {
          for (o = h.call(s), r = [], t = 0; !(a = o.next()).done; t++) r.push(a.value);
          s = r
        }
        for (d && l > 2 && (c = u(c, arguments[2], 2)), t = 0, n = m(s.length), i = Se(this, n); n > t; t++) i[t] = d ? c(s[t], t) : s[t];
        return i
      },
      Ce = function() {
        for (var e = 0, t = arguments.length, n = Se(this, t); t > e;) n[e] = arguments[e++];
        return n
      },
      Oe = !!V && a((function() {
        fe.call(new V(1))
      })),
      Pe = function() {
        return fe.apply(Oe ? de.call(Le(this)) : Le(this), arguments)
      },
      je = {
        copyWithin: function(e, t) {
          return H.call(Le(this), e, t, arguments.length > 2 ? arguments[2] : void 0)
        },
        every: function(e) {
          return Z(Le(this), e, arguments.length > 1 ? arguments[1] : void 0)
        },
        fill: function(e) {
          return I.apply(Le(this), arguments)
        },
        filter: function(e) {
          return Te(this, X(Le(this), e, arguments.length > 1 ? arguments[1] : void 0))
        },
        find: function(e) {
          return Q(Le(this), e, arguments.length > 1 ? arguments[1] : void 0)
        },
        findIndex: function(e) {
          return ee(Le(this), e, arguments.length > 1 ? arguments[1] : void 0)
        },
        forEach: function(e) {
          J(Le(this), e, arguments.length > 1 ? arguments[1] : void 0)
        },
        indexOf: function(e) {
          return ne(Le(this), e, arguments.length > 1 ? arguments[1] : void 0)
        },
        includes: function(e) {
          return te(Le(this), e, arguments.length > 1 ? arguments[1] : void 0)
        },
        join: function(e) {
          return ue.apply(Le(this), arguments)
        },
        lastIndexOf: function(e) {
          return oe.apply(Le(this), arguments)
        },
        map: function(e) {
          return we(Le(this), e, arguments.length > 1 ? arguments[1] : void 0)
        },
        reduce: function(e) {
          return se.apply(Le(this), arguments)
        },
        reduceRight: function(e) {
          return le.apply(Le(this), arguments)
        },
        reverse: function() {
          for (var e, t = Le(this).length, n = Math.floor(t / 2), r = 0; r < n;) e = this[r], this[r++] = this[--t], this[t] = e;
          return this
        },
        some: function(e) {
          return K(Le(this), e, arguments.length > 1 ? arguments[1] : void 0)
        },
        sort: function(e) {
          return ce.call(Le(this), e)
        },
        subarray: function(e, t) {
          var n = Le(this),
            r = n.length,
            i = y(e, r);
          return new(O(n, n[ye]))(n.buffer, n.byteOffset + i * n.BYTES_PER_ELEMENT, m((void 0 === t ? r : y(t, r)) - i))
        }
      },
      Ae = function(e, t) {
        return Te(this, de.call(Le(this), e, t))
      },
      Re = function(e) {
        Le(this);
        var t = xe(arguments[1], 1),
          n = this.length,
          r = k(e),
          i = m(r.length),
          a = 0;
        if (i + t > n) throw B("Wrong length!");
        for (; a < i;) this[t + a] = r[a++]
      },
      Ie = {
        entries: function() {
          return ae.call(Le(this))
        },
        keys: function() {
          return ie.call(Le(this))
        },
        values: function() {
          return re.call(Le(this))
        }
      },
      He = function(e, t) {
        return w(e) && e[ve] && "symbol" != typeof t && t in e && String(+t) == String(t)
      },
      Fe = function(e, t) {
        return He(e, t = g(t, !0)) ? d(2, e[t]) : W(e, t)
      },
      ze = function(e, t, n) {
        return !(He(e, t = g(t, !0)) && w(n) && v(n, "value")) || v(n, "get") || v(n, "set") || n.configurable || v(n, "writable") && !n.writable || v(n, "enumerable") && !n.enumerable ? N(e, t, n) : (e[t] = n.value, e)
      };
    ge || (z.f = Fe, F.f = ze), o(o.S + o.F * !ge, "Object", {
      getOwnPropertyDescriptor: Fe,
      defineProperty: ze
    }), a((function() {
      he.call({})
    })) && (he = fe = function() {
      return ue.call(this)
    });
    var Ne = f({}, je);
    f(Ne, Ie), h(Ne, pe, Ie.values), f(Ne, {
      slice: Ae,
      set: Re,
      constructor: function() {},
      toString: he,
      toLocaleString: Pe
    }), Ee(Ne, "buffer", "b"), Ee(Ne, "byteOffset", "o"), Ee(Ne, "byteLength", "l"), Ee(Ne, "length", "e"), N(Ne, me, {
      get: function() {
        return this[ve]
      }
    }), e.exports = function(e, t, n, l) {
      var u = e + ((l = !!l) ? "Clamped" : "") + "Array",
        d = "get" + e,
        f = "set" + e,
        p = i[u],
        y = p || {},
        g = p && L(p),
        v = !p || !s.ABV,
        k = {},
        M = p && p.prototype,
        T = function(e, n) {
          N(e, n, {
            get: function() {
              return function(e, n) {
                var r = e._d;
                return r.v[d](n * t + r.o, ke)
              }(this, n)
            },
            set: function(e) {
              return function(e, n, r) {
                var i = e._d;
                l && (r = (r = Math.round(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r), i.v[f](n * t + i.o, r, ke)
              }(this, n, e)
            },
            enumerable: !0
          })
        };
      v ? (p = n((function(e, n, r, i) {
        c(e, p, u, "_d");
        var a, o, s, l, d = 0,
          f = 0;
        if (w(n)) {
          if (!(n instanceof q || "ArrayBuffer" == (l = b(n)) || "SharedArrayBuffer" == l)) return ve in n ? De(p, n) : Ye.call(p, n);
          a = n, f = xe(r, t);
          var y = n.byteLength;
          if (void 0 === i) {
            if (y % t) throw B("Wrong length!");
            if ((o = y - f) < 0) throw B("Wrong length!")
          } else if ((o = m(i) * t) + f > y) throw B("Wrong length!");
          s = o / t
        } else s = _(n), a = new q(o = s * t);
        for (h(e, "_d", {
            b: a,
            o: f,
            l: o,
            e: s,
            v: new $(a)
          }); d < s;) T(e, d++)
      })), M = p.prototype = x(Ne), h(M, "constructor", p)) : a((function() {
        p(1)
      })) && a((function() {
        new p(-1)
      })) && A((function(e) {
        new p, new p(null), new p(1.5), new p(e)
      }), !0) || (p = n((function(e, n, r, i) {
        var a;
        return c(e, p, u), w(n) ? n instanceof q || "ArrayBuffer" == (a = b(n)) || "SharedArrayBuffer" == a ? void 0 !== i ? new y(n, xe(r, t), i) : void 0 !== r ? new y(n, xe(r, t)) : new y(n) : ve in n ? De(p, n) : Ye.call(p, n) : new y(_(n))
      })), J(g !== Function.prototype ? S(y).concat(S(g)) : S(y), (function(e) {
        e in p || h(p, e, y[e])
      })), p.prototype = M, r || (M.constructor = p));
      var D = M[pe],
        E = !!D && ("values" == D.name || null == D.name),
        Y = Ie.values;
      h(p, _e, !0), h(M, ve, u), h(M, be, !0), h(M, ye, p), (l ? new p(1)[me] == u : me in M) || N(M, me, {
        get: function() {
          return u
        }
      }), k[u] = p, o(o.G + o.W + o.F * (p != y), k), o(o.S, u, {
        BYTES_PER_ELEMENT: t
      }), o(o.S + o.F * a((function() {
        y.of.call(p, 1)
      })), u, {
        from: Ye,
        of: Ce
      }), "BYTES_PER_ELEMENT" in M || h(M, "BYTES_PER_ELEMENT", t), o(o.P, u, je), R(u), o(o.P + o.F * Me, u, {
        set: Re
      }), o(o.P + o.F * !E, u, Ie), r || M.toString == he || (M.toString = he), o(o.P + o.F * a((function() {
        new p(1).slice()
      })), u, {
        slice: Ae
      }), o(o.P + o.F * (a((function() {
        return [1, 2].toLocaleString() != new p([1, 2]).toLocaleString()
      })) || !a((function() {
        M.toLocaleString.call([1, 2])
      }))), u, {
        toLocaleString: Pe
      }), j[u] = E ? D : Y, r || E || h(M, pe, Y)
    }
  } else e.exports = function() {}
}, function(e, t, n) {
  var r = n(354),
    i = "object" == typeof self && self && self.Object === Object && self,
    a = r || i || Function("return this")();
  e.exports = a
}, function(e, t) {
  var n = Array.isArray;
  e.exports = n
}, function(e, t) {
  var n = {
    dev: !1,
    devLocalServerEndPoint: "http://localhost",
    mobileDevLocalServerEndPoint: "",
    recaptchaKey: "6Lf7mNAUAAAAAMlrqmboiBe_T9_yrSvZu2NSMtW7"
  };
  e.exports = n
}, function(e, t, n) {
  var r = n(13);
  e.exports = function(e, t) {
    if (!r(e)) return e;
    var n, i;
    if (t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
    if ("function" == typeof(n = e.valueOf) && !r(i = n.call(e))) return i;
    if (!t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
    throw TypeError("Can't convert object to primitive value")
  }
}, function(e, t, n) {
  var r = n(52)("meta"),
    i = n(13),
    a = n(26),
    o = n(22).f,
    s = 0,
    l = Object.isExtensible || function() {
      return !0
    },
    u = !n(11)((function() {
      return l(Object.preventExtensions({}))
    })),
    c = function(e) {
      o(e, r, {
        value: {
          i: "O" + ++s,
          w: {}
        }
      })
    },
    d = e.exports = {
      KEY: r,
      NEED: !1,
      fastKey: function(e, t) {
        if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
        if (!a(e, r)) {
          if (!l(e)) return "F";
          if (!t) return "E";
          c(e)
        }
        return e[r].i
      },
      getWeak: function(e, t) {
        if (!a(e, r)) {
          if (!l(e)) return !0;
          if (!t) return !1;
          c(e)
        }
        return e[r].w
      },
      onFreeze: function(e) {
        return u && d.NEED && l(e) && !a(e, r) && c(e), e
      }
    }
}, function(e, t, n) {
  (function(r) {
    t.log = function(...e) {
      return "object" == typeof console && console.log && console.log(...e)
    }, t.formatArgs = function(t) {
      if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
      const n = "color: " + this.color;
      t.splice(1, 0, n, "color: inherit");
      let r = 0,
        i = 0;
      t[0].replace(/%[a-zA-Z%]/g, e => {
        "%%" !== e && (r++, "%c" === e && (i = r))
      }), t.splice(i, 0, n)
    }, t.save = function(e) {
      try {
        e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
      } catch (e) {}
    }, t.load = function() {
      let e;
      try {
        e = t.storage.getItem("debug")
      } catch (e) {}!e && void 0 !== r && "env" in r && (e = r.env.DEBUG);
      return e
    }, t.useColors = function() {
      if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return !0;
      if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
      return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
    }, t.storage = function() {
      try {
        return localStorage
      } catch (e) {}
    }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.exports = n(580)(t);
    const {
      formatters: i
    } = e.exports;
    i.j = function(e) {
      try {
        return JSON.stringify(e)
      } catch (e) {
        return "[UnexpectedJSONParseError]: " + e.message
      }
    }
  }).call(this, n(147))
}, function(e, t, n) {
  "use strict";
  var r = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;

  function i(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }
  t.assign = function(e) {
    for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
      var n = t.shift();
      if (n) {
        if ("object" != typeof n) throw new TypeError(n + "must be non-object");
        for (var r in n) i(n, r) && (e[r] = n[r])
      }
    }
    return e
  }, t.shrinkBuf = function(e, t) {
    return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e)
  };
  var a = {
      arraySet: function(e, t, n, r, i) {
        if (t.subarray && e.subarray) e.set(t.subarray(n, n + r), i);
        else
          for (var a = 0; a < r; a++) e[i + a] = t[n + a]
      },
      flattenChunks: function(e) {
        var t, n, r, i, a, o;
        for (r = 0, t = 0, n = e.length; t < n; t++) r += e[t].length;
        for (o = new Uint8Array(r), i = 0, t = 0, n = e.length; t < n; t++) a = e[t], o.set(a, i), i += a.length;
        return o
      }
    },
    o = {
      arraySet: function(e, t, n, r, i) {
        for (var a = 0; a < r; a++) e[i + a] = t[n + a]
      },
      flattenChunks: function(e) {
        return [].concat.apply([], e)
      }
    };
  t.setTyped = function(e) {
    e ? (t.Buf8 = Uint8Array, t.Buf16 = Uint16Array, t.Buf32 = Int32Array, t.assign(t, a)) : (t.Buf8 = Array, t.Buf16 = Array, t.Buf32 = Array, t.assign(t, o))
  }, t.setTyped(r)
}, function(e, t, n) {
  "use strict";

  function r(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      a = Object.keys(e);
    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }
  n.d(t, "a", (function() {
    return r
  }))
}, function(e, t, n) {
  "use strict";
  n.d(t, "b", (function() {
    return a
  }));
  var r = n(4),
    i = {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
    },
    a = {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
    },
    o = function(e) {
      return "".concat(Math.round(e), "ms")
    };
  t.a = {
    easing: i,
    duration: a,
    create: function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["all"],
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = t.duration,
        s = void 0 === n ? a.standard : n,
        l = t.easing,
        u = void 0 === l ? i.easeInOut : l,
        c = t.delay,
        d = void 0 === c ? 0 : c;
      Object(r.a)(t, ["duration", "easing", "delay"]);
      return (Array.isArray(e) ? e : [e]).map((function(e) {
        return "".concat(e, " ").concat("string" == typeof s ? s : o(s), " ").concat(u, " ").concat("string" == typeof d ? d : o(d))
      })).join(",")
    },
    getAutoHeightDuration: function(e) {
      if (!e) return 0;
      var t = e / 36;
      return Math.round(10 * (4 + 15 * Math.pow(t, .25) + t / 5))
    }
  }
}, function(e, t) {
  e.exports = function(e, t) {
    return {
      enumerable: !(1 & e),
      configurable: !(2 & e),
      writable: !(4 & e),
      value: t
    }
  }
}, function(e, t) {
  var n = 0,
    r = Math.random();
  e.exports = function(e) {
    return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
  }
}, function(e, t) {
  e.exports = !1
}, function(e, t, n) {
  var r = n(175),
    i = n(122);
  e.exports = Object.keys || function(e) {
    return r(e, i)
  }
}, function(e, t, n) {
  var r = n(34),
    i = Math.max,
    a = Math.min;
  e.exports = function(e, t) {
    return (e = r(e)) < 0 ? i(e + t, 0) : a(e, t)
  }
}, function(e, t, n) {
  var r = n(12),
    i = n(176),
    a = n(122),
    o = n(121)("IE_PROTO"),
    s = function() {},
    l = function() {
      var e, t = n(119)("iframe"),
        r = a.length;
      for (t.style.display = "none", n(123).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; r--;) delete l.prototype[a[r]];
      return l()
    };
  e.exports = Object.create || function(e, t) {
    var n;
    return null !== e ? (s.prototype = r(e), n = new s, s.prototype = null, n[o] = e) : n = l(), void 0 === t ? n : i(n, t)
  }
}, function(e, t, n) {
  var r = n(175),
    i = n(122).concat("length", "prototype");
  t.f = Object.getOwnPropertyNames || function(e) {
    return r(e, i)
  }
}, function(e, t, n) {
  var r = n(26),
    i = n(23),
    a = n(121)("IE_PROTO"),
    o = Object.prototype;
  e.exports = Object.getPrototypeOf || function(e) {
    return e = i(e), r(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? o : null
  }
}, function(e, t, n) {
  var r = n(15)("unscopables"),
    i = Array.prototype;
  null == i[r] && n(27)(i, r, {}), e.exports = function(e) {
    i[r][e] = !0
  }
}, function(e, t, n) {
  var r = n(13);
  e.exports = function(e, t) {
    if (!r(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
    return e
  }
}, function(e, t, n) {
  var r = n(631),
    i = n(636);
  e.exports = function(e, t) {
    var n = i(e, t);
    return r(n) ? n : void 0
  }
}, function(e, t, n) {
  "use strict";

  function r(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
  }
  n.d(t, "a", (function() {
    return r
  }))
}, function(e, t, n) {
  var r = n(22).f,
    i = n(26),
    a = n(15)("toStringTag");
  e.exports = function(e, t, n) {
    e && !i(e = n ? e : e.prototype, a) && r(e, a, {
      configurable: !0,
      value: t
    })
  }
}, function(e, t, n) {
  var r = n(3),
    i = n(40),
    a = n(11),
    o = n(125),
    s = "[" + o + "]",
    l = RegExp("^" + s + s + "*"),
    u = RegExp(s + s + "*$"),
    c = function(e, t, n) {
      var i = {},
        s = a((function() {
          return !!o[e]() || "â€‹Â…" != "â€‹Â…" [e]()
        })),
        l = i[e] = s ? t(d) : o[e];
      n && (i[n] = l), r(r.P + r.F * s, "String", i)
    },
    d = c.trim = function(e, t) {
      return e = String(i(e)), 1 & t && (e = e.replace(l, "")), 2 & t && (e = e.replace(u, "")), e
    };
  e.exports = c
}, function(e, t) {
  e.exports = {}
}, function(e, t, n) {
  "use strict";
  var r = n(10),
    i = n(22),
    a = n(21),
    o = n(15)("species");
  e.exports = function(e) {
    var t = r[e];
    a && t && !t[o] && i.f(t, o, {
      configurable: !0,
      get: function() {
        return this
      }
    })
  }
}, function(e, t) {
  e.exports = function(e, t, n, r) {
    if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
    return e
  }
}, function(e, t, n) {
  var r = n(24);
  e.exports = function(e, t, n) {
    for (var i in t) r(e, i, t[i], n);
    return e
  }
}, function(e, t, n) {
  function r(e) {
    if (e) return function(e) {
      for (var t in r.prototype) e[t] = r.prototype[t];
      return e
    }(e)
  }
  e.exports = r, r.prototype.on = r.prototype.addEventListener = function(e, t) {
    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
  }, r.prototype.once = function(e, t) {
    function n() {
      this.off(e, n), t.apply(this, arguments)
    }
    return n.fn = t, this.on(e, n), this
  }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(e, t) {
    if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
    var n, r = this._callbacks["$" + e];
    if (!r) return this;
    if (1 == arguments.length) return delete this._callbacks["$" + e], this;
    for (var i = 0; i < r.length; i++)
      if ((n = r[i]) === t || n.fn === t) {
        r.splice(i, 1);
        break
      } return this
  }, r.prototype.emit = function(e) {
    this._callbacks = this._callbacks || {};
    var t = [].slice.call(arguments, 1),
      n = this._callbacks["$" + e];
    if (n)
      for (var r = 0, i = (n = n.slice(0)).length; r < i; ++r) n[r].apply(this, t);
    return this
  }, r.prototype.listeners = function(e) {
    return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
  }, r.prototype.hasListeners = function(e) {
    return !!this.listeners(e).length
  }
}, function(e, t, n) {
  var r, i = n(593),
    a = n(212),
    o = n(594),
    s = n(595),
    l = n(596);
  "undefined" != typeof ArrayBuffer && (r = n(597));
  var u = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
    c = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
    d = u || c;
  t.protocol = 3;
  var h = t.packets = {
      open: 0,
      close: 1,
      ping: 2,
      pong: 3,
      message: 4,
      upgrade: 5,
      noop: 6
    },
    f = i(h),
    p = {
      type: "error",
      data: "parser error"
    },
    m = n(598);

  function _(e, t, n) {
    for (var r = new Array(e.length), i = s(e.length, n), a = function(e, n, i) {
        t(n, (function(t, n) {
          r[e] = n, i(t, r)
        }))
      }, o = 0; o < e.length; o++) a(o, e[o], i)
  }
  t.encodePacket = function(e, n, r, i) {
    "function" == typeof n && (i = n, n = !1), "function" == typeof r && (i = r, r = null);
    var a = void 0 === e.data ? void 0 : e.data.buffer || e.data;
    if ("undefined" != typeof ArrayBuffer && a instanceof ArrayBuffer) return function(e, n, r) {
      if (!n) return t.encodeBase64Packet(e, r);
      var i = e.data,
        a = new Uint8Array(i),
        o = new Uint8Array(1 + i.byteLength);
      o[0] = h[e.type];
      for (var s = 0; s < a.length; s++) o[s + 1] = a[s];
      return r(o.buffer)
    }(e, n, i);
    if (void 0 !== m && a instanceof m) return function(e, n, r) {
      if (!n) return t.encodeBase64Packet(e, r);
      if (d) return function(e, n, r) {
        if (!n) return t.encodeBase64Packet(e, r);
        var i = new FileReader;
        return i.onload = function() {
          t.encodePacket({
            type: e.type,
            data: i.result
          }, n, !0, r)
        }, i.readAsArrayBuffer(e.data)
      }(e, n, r);
      var i = new Uint8Array(1);
      i[0] = h[e.type];
      var a = new m([i.buffer, e.data]);
      return r(a)
    }(e, n, i);
    if (a && a.base64) return function(e, n) {
      var r = "b" + t.packets[e.type] + e.data.data;
      return n(r)
    }(e, i);
    var o = h[e.type];
    return void 0 !== e.data && (o += r ? l.encode(String(e.data), {
      strict: !1
    }) : String(e.data)), i("" + o)
  }, t.encodeBase64Packet = function(e, n) {
    var r, i = "b" + t.packets[e.type];
    if (void 0 !== m && e.data instanceof m) {
      var a = new FileReader;
      return a.onload = function() {
        var e = a.result.split(",")[1];
        n(i + e)
      }, a.readAsDataURL(e.data)
    }
    try {
      r = String.fromCharCode.apply(null, new Uint8Array(e.data))
    } catch (t) {
      for (var o = new Uint8Array(e.data), s = new Array(o.length), l = 0; l < o.length; l++) s[l] = o[l];
      r = String.fromCharCode.apply(null, s)
    }
    return i += btoa(r), n(i)
  }, t.decodePacket = function(e, n, r) {
    if (void 0 === e) return p;
    if ("string" == typeof e) {
      if ("b" === e.charAt(0)) return t.decodeBase64Packet(e.substr(1), n);
      if (r && !1 === (e = function(e) {
          try {
            e = l.decode(e, {
              strict: !1
            })
          } catch (e) {
            return !1
          }
          return e
        }(e))) return p;
      var i = e.charAt(0);
      return Number(i) == i && f[i] ? e.length > 1 ? {
        type: f[i],
        data: e.substring(1)
      } : {
        type: f[i]
      } : p
    }
    i = new Uint8Array(e)[0];
    var a = o(e, 1);
    return m && "blob" === n && (a = new m([a])), {
      type: f[i],
      data: a
    }
  }, t.decodeBase64Packet = function(e, t) {
    var n = f[e.charAt(0)];
    if (!r) return {
      type: n,
      data: {
        base64: !0,
        data: e.substr(1)
      }
    };
    var i = r.decode(e.substr(1));
    return "blob" === t && m && (i = new m([i])), {
      type: n,
      data: i
    }
  }, t.encodePayload = function(e, n, r) {
    "function" == typeof n && (r = n, n = null);
    var i = a(e);
    if (n && i) return m && !d ? t.encodePayloadAsBlob(e, r) : t.encodePayloadAsArrayBuffer(e, r);
    if (!e.length) return r("0:");
    _(e, (function(e, r) {
      t.encodePacket(e, !!i && n, !1, (function(e) {
        r(null, function(e) {
          return e.length + ":" + e
        }(e))
      }))
    }), (function(e, t) {
      return r(t.join(""))
    }))
  }, t.decodePayload = function(e, n, r) {
    if ("string" != typeof e) return t.decodePayloadAsBinary(e, n, r);
    var i;
    if ("function" == typeof n && (r = n, n = null), "" === e) return r(p, 0, 1);
    for (var a, o, s = "", l = 0, u = e.length; l < u; l++) {
      var c = e.charAt(l);
      if (":" === c) {
        if ("" === s || s != (a = Number(s))) return r(p, 0, 1);
        if (s != (o = e.substr(l + 1, a)).length) return r(p, 0, 1);
        if (o.length) {
          if (i = t.decodePacket(o, n, !1), p.type === i.type && p.data === i.data) return r(p, 0, 1);
          if (!1 === r(i, l + a, u)) return
        }
        l += a, s = ""
      } else s += c
    }
    return "" !== s ? r(p, 0, 1) : void 0
  }, t.encodePayloadAsArrayBuffer = function(e, n) {
    if (!e.length) return n(new ArrayBuffer(0));
    _(e, (function(e, n) {
      t.encodePacket(e, !0, !0, (function(e) {
        return n(null, e)
      }))
    }), (function(e, t) {
      var r = t.reduce((function(e, t) {
          var n;
          return e + (n = "string" == typeof t ? t.length : t.byteLength).toString().length + n + 2
        }), 0),
        i = new Uint8Array(r),
        a = 0;
      return t.forEach((function(e) {
        var t = "string" == typeof e,
          n = e;
        if (t) {
          for (var r = new Uint8Array(e.length), o = 0; o < e.length; o++) r[o] = e.charCodeAt(o);
          n = r.buffer
        }
        i[a++] = t ? 0 : 1;
        var s = n.byteLength.toString();
        for (o = 0; o < s.length; o++) i[a++] = parseInt(s[o]);
        i[a++] = 255;
        for (r = new Uint8Array(n), o = 0; o < r.length; o++) i[a++] = r[o]
      })), n(i.buffer)
    }))
  }, t.encodePayloadAsBlob = function(e, n) {
    _(e, (function(e, n) {
      t.encodePacket(e, !0, !0, (function(e) {
        var t = new Uint8Array(1);
        if (t[0] = 1, "string" == typeof e) {
          for (var r = new Uint8Array(e.length), i = 0; i < e.length; i++) r[i] = e.charCodeAt(i);
          e = r.buffer, t[0] = 0
        }
        var a = (e instanceof ArrayBuffer ? e.byteLength : e.size).toString(),
          o = new Uint8Array(a.length + 1);
        for (i = 0; i < a.length; i++) o[i] = parseInt(a[i]);
        if (o[a.length] = 255, m) {
          var s = new m([t.buffer, o.buffer, e]);
          n(null, s)
        }
      }))
    }), (function(e, t) {
      return n(new m(t))
    }))
  }, t.decodePayloadAsBinary = function(e, n, r) {
    "function" == typeof n && (r = n, n = null);
    for (var i = e, a = []; i.byteLength > 0;) {
      for (var s = new Uint8Array(i), l = 0 === s[0], u = "", c = 1; 255 !== s[c]; c++) {
        if (u.length > 310) return r(p, 0, 1);
        u += s[c]
      }
      i = o(i, 2 + u.length), u = parseInt(u);
      var d = o(i, 0, u);
      if (l) try {
        d = String.fromCharCode.apply(null, new Uint8Array(d))
      } catch (e) {
        var h = new Uint8Array(d);
        d = "";
        for (c = 0; c < h.length; c++) d += String.fromCharCode(h[c])
      }
      a.push(d), i = o(i, u)
    }
    var f = a.length;
    a.forEach((function(e, i) {
      r(t.decodePacket(e, n, !0), i, f)
    }))
  }
}, function(e, t, n) {
  "use strict";
  var r = n(378),
    i = Object(r.a)();
  t.a = i
}, function(e, t, n) {
  "use strict";

  function r(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
  }

  function i(e, t, n) {
    return t && r(e.prototype, t), n && r(e, n), e
  }
  n.d(t, "a", (function() {
    return i
  }))
}, function(e, t, n) {
  "use strict";

  function r(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
  }
  n.d(t, "a", (function() {
    return r
  }))
}, function(e, t, n) {
  /*!
   * Chart.js v2.9.3
   * https://www.chartjs.org
   * (c) 2019 Chart.js Contributors
   * Released under the MIT License
   */
  e.exports = function(e) {
    "use strict";
    e = e && e.hasOwnProperty("default") ? e.default : e;
    var t = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
      },
      n = function(e, t) {
        return e(t = {
          exports: {}
        }, t.exports), t.exports
      }((function(e) {
        var n = {};
        for (var r in t) t.hasOwnProperty(r) && (n[t[r]] = r);
        var i = e.exports = {
          rgb: {
            channels: 3,
            labels: "rgb"
          },
          hsl: {
            channels: 3,
            labels: "hsl"
          },
          hsv: {
            channels: 3,
            labels: "hsv"
          },
          hwb: {
            channels: 3,
            labels: "hwb"
          },
          cmyk: {
            channels: 4,
            labels: "cmyk"
          },
          xyz: {
            channels: 3,
            labels: "xyz"
          },
          lab: {
            channels: 3,
            labels: "lab"
          },
          lch: {
            channels: 3,
            labels: "lch"
          },
          hex: {
            channels: 1,
            labels: ["hex"]
          },
          keyword: {
            channels: 1,
            labels: ["keyword"]
          },
          ansi16: {
            channels: 1,
            labels: ["ansi16"]
          },
          ansi256: {
            channels: 1,
            labels: ["ansi256"]
          },
          hcg: {
            channels: 3,
            labels: ["h", "c", "g"]
          },
          apple: {
            channels: 3,
            labels: ["r16", "g16", "b16"]
          },
          gray: {
            channels: 1,
            labels: ["gray"]
          }
        };
        for (var a in i)
          if (i.hasOwnProperty(a)) {
            if (!("channels" in i[a])) throw new Error("missing channels property: " + a);
            if (!("labels" in i[a])) throw new Error("missing channel labels property: " + a);
            if (i[a].labels.length !== i[a].channels) throw new Error("channel and label counts mismatch: " + a);
            var o = i[a].channels,
              s = i[a].labels;
            delete i[a].channels, delete i[a].labels, Object.defineProperty(i[a], "channels", {
              value: o
            }), Object.defineProperty(i[a], "labels", {
              value: s
            })
          } i.rgb.hsl = function(e) {
          var t, n, r = e[0] / 255,
            i = e[1] / 255,
            a = e[2] / 255,
            o = Math.min(r, i, a),
            s = Math.max(r, i, a),
            l = s - o;
          return s === o ? t = 0 : r === s ? t = (i - a) / l : i === s ? t = 2 + (a - r) / l : a === s && (t = 4 + (r - i) / l), (t = Math.min(60 * t, 360)) < 0 && (t += 360), n = (o + s) / 2, [t, 100 * (s === o ? 0 : n <= .5 ? l / (s + o) : l / (2 - s - o)), 100 * n]
        }, i.rgb.hsv = function(e) {
          var t, n, r, i, a, o = e[0] / 255,
            s = e[1] / 255,
            l = e[2] / 255,
            u = Math.max(o, s, l),
            c = u - Math.min(o, s, l),
            d = function(e) {
              return (u - e) / 6 / c + .5
            };
          return 0 === c ? i = a = 0 : (a = c / u, t = d(o), n = d(s), r = d(l), o === u ? i = r - n : s === u ? i = 1 / 3 + t - r : l === u && (i = 2 / 3 + n - t), i < 0 ? i += 1 : i > 1 && (i -= 1)), [360 * i, 100 * a, 100 * u]
        }, i.rgb.hwb = function(e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return [i.rgb.hsl(e)[0], 1 / 255 * Math.min(t, Math.min(n, r)) * 100, 100 * (r = 1 - 1 / 255 * Math.max(t, Math.max(n, r)))]
        }, i.rgb.cmyk = function(e) {
          var t, n = e[0] / 255,
            r = e[1] / 255,
            i = e[2] / 255;
          return [100 * ((1 - n - (t = Math.min(1 - n, 1 - r, 1 - i))) / (1 - t) || 0), 100 * ((1 - r - t) / (1 - t) || 0), 100 * ((1 - i - t) / (1 - t) || 0), 100 * t]
        }, i.rgb.keyword = function(e) {
          var r = n[e];
          if (r) return r;
          var i, a, o, s = 1 / 0;
          for (var l in t)
            if (t.hasOwnProperty(l)) {
              var u = t[l],
                c = (a = e, o = u, Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2) + Math.pow(a[2] - o[2], 2));
              c < s && (s = c, i = l)
            } return i
        }, i.keyword.rgb = function(e) {
          return t[e]
        }, i.rgb.xyz = function(e) {
          var t = e[0] / 255,
            n = e[1] / 255,
            r = e[2] / 255;
          return [100 * (.4124 * (t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92)), 100 * (.2126 * t + .7152 * n + .0722 * r), 100 * (.0193 * t + .1192 * n + .9505 * r)]
        }, i.rgb.lab = function(e) {
          var t = i.rgb.xyz(e),
            n = t[0],
            r = t[1],
            a = t[2];
          return r /= 100, a /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116) - 16, 500 * (n - r), 200 * (r - (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))]
        }, i.hsl.rgb = function(e) {
          var t, n, r, i, a, o = e[0] / 360,
            s = e[1] / 100,
            l = e[2] / 100;
          if (0 === s) return [a = 255 * l, a, a];
          t = 2 * l - (n = l < .5 ? l * (1 + s) : l + s - l * s), i = [0, 0, 0];
          for (var u = 0; u < 3; u++)(r = o + 1 / 3 * -(u - 1)) < 0 && r++, r > 1 && r--, a = 6 * r < 1 ? t + 6 * (n - t) * r : 2 * r < 1 ? n : 3 * r < 2 ? t + (n - t) * (2 / 3 - r) * 6 : t, i[u] = 255 * a;
          return i
        }, i.hsl.hsv = function(e) {
          var t = e[0],
            n = e[1] / 100,
            r = e[2] / 100,
            i = n,
            a = Math.max(r, .01);
          return n *= (r *= 2) <= 1 ? r : 2 - r, i *= a <= 1 ? a : 2 - a, [t, 100 * (0 === r ? 2 * i / (a + i) : 2 * n / (r + n)), (r + n) / 2 * 100]
        }, i.hsv.rgb = function(e) {
          var t = e[0] / 60,
            n = e[1] / 100,
            r = e[2] / 100,
            i = Math.floor(t) % 6,
            a = t - Math.floor(t),
            o = 255 * r * (1 - n),
            s = 255 * r * (1 - n * a),
            l = 255 * r * (1 - n * (1 - a));
          switch (r *= 255, i) {
            case 0:
              return [r, l, o];
            case 1:
              return [s, r, o];
            case 2:
              return [o, r, l];
            case 3:
              return [o, s, r];
            case 4:
              return [l, o, r];
            case 5:
              return [r, o, s]
          }
        }, i.hsv.hsl = function(e) {
          var t, n, r, i = e[0],
            a = e[1] / 100,
            o = e[2] / 100,
            s = Math.max(o, .01);
          return r = (2 - a) * o, n = a * s, [i, 100 * (n = (n /= (t = (2 - a) * s) <= 1 ? t : 2 - t) || 0), 100 * (r /= 2)]
        }, i.hwb.rgb = function(e) {
          var t, n, r, i, a, o, s, l = e[0] / 360,
            u = e[1] / 100,
            c = e[2] / 100,
            d = u + c;
          switch (d > 1 && (u /= d, c /= d), r = 6 * l - (t = Math.floor(6 * l)), 0 != (1 & t) && (r = 1 - r), i = u + r * ((n = 1 - c) - u), t) {
            default:
            case 6:
            case 0:
              a = n, o = i, s = u;
              break;
            case 1:
              a = i, o = n, s = u;
              break;
            case 2:
              a = u, o = n, s = i;
              break;
            case 3:
              a = u, o = i, s = n;
              break;
            case 4:
              a = i, o = u, s = n;
              break;
            case 5:
              a = n, o = u, s = i
          }
          return [255 * a, 255 * o, 255 * s]
        }, i.cmyk.rgb = function(e) {
          var t = e[0] / 100,
            n = e[1] / 100,
            r = e[2] / 100,
            i = e[3] / 100;
          return [255 * (1 - Math.min(1, t * (1 - i) + i)), 255 * (1 - Math.min(1, n * (1 - i) + i)), 255 * (1 - Math.min(1, r * (1 - i) + i))]
        }, i.xyz.rgb = function(e) {
          var t, n, r, i = e[0] / 100,
            a = e[1] / 100,
            o = e[2] / 100;
          return n = -.9689 * i + 1.8758 * a + .0415 * o, r = .0557 * i + -.204 * a + 1.057 * o, t = (t = 3.2406 * i + -1.5372 * a + -.4986 * o) > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r, [255 * (t = Math.min(Math.max(0, t), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (r = Math.min(Math.max(0, r), 1))]
        }, i.xyz.lab = function(e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return n /= 100, r /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (t - n), 200 * (n - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))]
        }, i.lab.xyz = function(e) {
          var t, n, r, i = e[0];
          t = e[1] / 500 + (n = (i + 16) / 116), r = n - e[2] / 200;
          var a = Math.pow(n, 3),
            o = Math.pow(t, 3),
            s = Math.pow(r, 3);
          return n = a > .008856 ? a : (n - 16 / 116) / 7.787, t = o > .008856 ? o : (t - 16 / 116) / 7.787, r = s > .008856 ? s : (r - 16 / 116) / 7.787, [t *= 95.047, n *= 100, r *= 108.883]
        }, i.lab.lch = function(e) {
          var t, n = e[0],
            r = e[1],
            i = e[2];
          return (t = 360 * Math.atan2(i, r) / 2 / Math.PI) < 0 && (t += 360), [n, Math.sqrt(r * r + i * i), t]
        }, i.lch.lab = function(e) {
          var t, n = e[0],
            r = e[1];
          return t = e[2] / 360 * 2 * Math.PI, [n, r * Math.cos(t), r * Math.sin(t)]
        }, i.rgb.ansi16 = function(e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = 1 in arguments ? arguments[1] : i.rgb.hsv(e)[2];
          if (0 === (a = Math.round(a / 50))) return 30;
          var o = 30 + (Math.round(r / 255) << 2 | Math.round(n / 255) << 1 | Math.round(t / 255));
          return 2 === a && (o += 60), o
        }, i.hsv.ansi16 = function(e) {
          return i.rgb.ansi16(i.hsv.rgb(e), e[2])
        }, i.rgb.ansi256 = function(e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t === n && n === r ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5)
        }, i.ansi16.rgb = function(e) {
          var t = e % 10;
          if (0 === t || 7 === t) return e > 50 && (t += 3.5), [t = t / 10.5 * 255, t, t];
          var n = .5 * (1 + ~~(e > 50));
          return [(1 & t) * n * 255, (t >> 1 & 1) * n * 255, (t >> 2 & 1) * n * 255]
        }, i.ansi256.rgb = function(e) {
          if (e >= 232) {
            var t = 10 * (e - 232) + 8;
            return [t, t, t]
          }
          var n;
          return e -= 16, [Math.floor(e / 36) / 5 * 255, Math.floor((n = e % 36) / 6) / 5 * 255, n % 6 / 5 * 255]
        }, i.rgb.hex = function(e) {
          var t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase();
          return "000000".substring(t.length) + t
        }, i.hex.rgb = function(e) {
          var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
          if (!t) return [0, 0, 0];
          var n = t[0];
          3 === t[0].length && (n = n.split("").map((function(e) {
            return e + e
          })).join(""));
          var r = parseInt(n, 16);
          return [r >> 16 & 255, r >> 8 & 255, 255 & r]
        }, i.rgb.hcg = function(e) {
          var t, n = e[0] / 255,
            r = e[1] / 255,
            i = e[2] / 255,
            a = Math.max(Math.max(n, r), i),
            o = Math.min(Math.min(n, r), i),
            s = a - o;
          return t = s <= 0 ? 0 : a === n ? (r - i) / s % 6 : a === r ? 2 + (i - n) / s : 4 + (n - r) / s + 4, t /= 6, [360 * (t %= 1), 100 * s, 100 * (s < 1 ? o / (1 - s) : 0)]
        }, i.hsl.hcg = function(e) {
          var t = e[1] / 100,
            n = e[2] / 100,
            r = 1,
            i = 0;
          return (r = n < .5 ? 2 * t * n : 2 * t * (1 - n)) < 1 && (i = (n - .5 * r) / (1 - r)), [e[0], 100 * r, 100 * i]
        }, i.hsv.hcg = function(e) {
          var t = e[1] / 100,
            n = e[2] / 100,
            r = t * n,
            i = 0;
          return r < 1 && (i = (n - r) / (1 - r)), [e[0], 100 * r, 100 * i]
        }, i.hcg.rgb = function(e) {
          var t = e[0] / 360,
            n = e[1] / 100,
            r = e[2] / 100;
          if (0 === n) return [255 * r, 255 * r, 255 * r];
          var i, a = [0, 0, 0],
            o = t % 1 * 6,
            s = o % 1,
            l = 1 - s;
          switch (Math.floor(o)) {
            case 0:
              a[0] = 1, a[1] = s, a[2] = 0;
              break;
            case 1:
              a[0] = l, a[1] = 1, a[2] = 0;
              break;
            case 2:
              a[0] = 0, a[1] = 1, a[2] = s;
              break;
            case 3:
              a[0] = 0, a[1] = l, a[2] = 1;
              break;
            case 4:
              a[0] = s, a[1] = 0, a[2] = 1;
              break;
            default:
              a[0] = 1, a[1] = 0, a[2] = l
          }
          return i = (1 - n) * r, [255 * (n * a[0] + i), 255 * (n * a[1] + i), 255 * (n * a[2] + i)]
        }, i.hcg.hsv = function(e) {
          var t = e[1] / 100,
            n = t + e[2] / 100 * (1 - t),
            r = 0;
          return n > 0 && (r = t / n), [e[0], 100 * r, 100 * n]
        }, i.hcg.hsl = function(e) {
          var t = e[1] / 100,
            n = e[2] / 100 * (1 - t) + .5 * t,
            r = 0;
          return n > 0 && n < .5 ? r = t / (2 * n) : n >= .5 && n < 1 && (r = t / (2 * (1 - n))), [e[0], 100 * r, 100 * n]
        }, i.hcg.hwb = function(e) {
          var t = e[1] / 100,
            n = t + e[2] / 100 * (1 - t);
          return [e[0], 100 * (n - t), 100 * (1 - n)]
        }, i.hwb.hcg = function(e) {
          var t = e[1] / 100,
            n = 1 - e[2] / 100,
            r = n - t,
            i = 0;
          return r < 1 && (i = (n - r) / (1 - r)), [e[0], 100 * r, 100 * i]
        }, i.apple.rgb = function(e) {
          return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255]
        }, i.rgb.apple = function(e) {
          return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535]
        }, i.gray.rgb = function(e) {
          return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255]
        }, i.gray.hsl = i.gray.hsv = function(e) {
          return [0, 0, e[0]]
        }, i.gray.hwb = function(e) {
          return [0, 100, e[0]]
        }, i.gray.cmyk = function(e) {
          return [0, 0, 0, e[0]]
        }, i.gray.lab = function(e) {
          return [e[0], 0, 0]
        }, i.gray.hex = function(e) {
          var t = 255 & Math.round(e[0] / 100 * 255),
            n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
          return "000000".substring(n.length) + n
        }, i.rgb.gray = function(e) {
          return [(e[0] + e[1] + e[2]) / 3 / 255 * 100]
        }
      }));

    function r(e) {
      var t = function() {
          for (var e = {}, t = Object.keys(n), r = t.length, i = 0; i < r; i++) e[t[i]] = {
            distance: -1,
            parent: null
          };
          return e
        }(),
        r = [e];
      for (t[e].distance = 0; r.length;)
        for (var i = r.pop(), a = Object.keys(n[i]), o = a.length, s = 0; s < o; s++) {
          var l = a[s],
            u = t[l]; - 1 === u.distance && (u.distance = t[i].distance + 1, u.parent = i, r.unshift(l))
        }
      return t
    }

    function i(e, t) {
      return function(n) {
        return t(e(n))
      }
    }

    function a(e, t) {
      for (var r = [t[e].parent, e], a = n[t[e].parent][e], o = t[e].parent; t[o].parent;) r.unshift(t[o].parent), a = i(n[t[o].parent][o], a), o = t[o].parent;
      return a.conversion = r, a
    }
    n.rgb, n.hsl, n.hsv, n.hwb, n.cmyk, n.xyz, n.lab, n.lch, n.hex, n.keyword, n.ansi16, n.ansi256, n.hcg, n.apple, n.gray;
    var o = {};
    Object.keys(n).forEach((function(e) {
      o[e] = {}, Object.defineProperty(o[e], "channels", {
        value: n[e].channels
      }), Object.defineProperty(o[e], "labels", {
        value: n[e].labels
      });
      var t = function(e) {
        for (var t = r(e), n = {}, i = Object.keys(t), o = i.length, s = 0; s < o; s++) {
          var l = i[s];
          null !== t[l].parent && (n[l] = a(l, t))
        }
        return n
      }(e);
      Object.keys(t).forEach((function(n) {
        var r = t[n];
        o[e][n] = function(e) {
          var t = function(t) {
            if (null == t) return t;
            arguments.length > 1 && (t = Array.prototype.slice.call(arguments));
            var n = e(t);
            if ("object" == typeof n)
              for (var r = n.length, i = 0; i < r; i++) n[i] = Math.round(n[i]);
            return n
          };
          return "conversion" in e && (t.conversion = e.conversion), t
        }(r), o[e][n].raw = function(e) {
          var t = function(t) {
            return null == t ? t : (arguments.length > 1 && (t = Array.prototype.slice.call(arguments)), e(t))
          };
          return "conversion" in e && (t.conversion = e.conversion), t
        }(r)
      }))
    }));
    var s = o,
      l = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
      },
      u = {
        getRgba: c,
        getHsla: d,
        getRgb: function(e) {
          var t = c(e);
          return t && t.slice(0, 3)
        },
        getHsl: function(e) {
          var t = d(e);
          return t && t.slice(0, 3)
        },
        getHwb: h,
        getAlpha: function(e) {
          var t = c(e);
          return t ? t[3] : (t = d(e)) ? t[3] : (t = h(e)) ? t[3] : void 0
        },
        hexString: function(e, t) {
          return t = void 0 !== t && 3 === e.length ? t : e[3], "#" + y(e[0]) + y(e[1]) + y(e[2]) + (t >= 0 && t < 1 ? y(Math.round(255 * t)) : "")
        },
        rgbString: function(e, t) {
          return t < 1 || e[3] && e[3] < 1 ? f(e, t) : "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")"
        },
        rgbaString: f,
        percentString: function(e, t) {
          if (t < 1 || e[3] && e[3] < 1) return p(e, t);
          var n = Math.round(e[0] / 255 * 100),
            r = Math.round(e[1] / 255 * 100),
            i = Math.round(e[2] / 255 * 100);
          return "rgb(" + n + "%, " + r + "%, " + i + "%)"
        },
        percentaString: p,
        hslString: function(e, t) {
          return t < 1 || e[3] && e[3] < 1 ? m(e, t) : "hsl(" + e[0] + ", " + e[1] + "%, " + e[2] + "%)"
        },
        hslaString: m,
        hwbString: function(e, t) {
          return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hwb(" + e[0] + ", " + e[1] + "%, " + e[2] + "%" + (void 0 !== t && 1 !== t ? ", " + t : "") + ")"
        },
        keyword: function(e) {
          return g[e.slice(0, 3)]
        }
      };

    function c(e) {
      if (e) {
        var t = [0, 0, 0],
          n = 1,
          r = e.match(/^#([a-fA-F0-9]{3,4})$/i),
          i = "";
        if (r) {
          i = (r = r[1])[3];
          for (var a = 0; a < t.length; a++) t[a] = parseInt(r[a] + r[a], 16);
          i && (n = Math.round(parseInt(i + i, 16) / 255 * 100) / 100)
        } else if (r = e.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) {
          for (i = r[2], r = r[1], a = 0; a < t.length; a++) t[a] = parseInt(r.slice(2 * a, 2 * a + 2), 16);
          i && (n = Math.round(parseInt(i, 16) / 255 * 100) / 100)
        } else if (r = e.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
          for (a = 0; a < t.length; a++) t[a] = parseInt(r[a + 1]);
          n = parseFloat(r[4])
        } else if (r = e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
          for (a = 0; a < t.length; a++) t[a] = Math.round(2.55 * parseFloat(r[a + 1]));
          n = parseFloat(r[4])
        } else if (r = e.match(/(\w+)/)) {
          if ("transparent" == r[1]) return [0, 0, 0, 0];
          if (!(t = l[r[1]])) return
        }
        for (a = 0; a < t.length; a++) t[a] = _(t[a], 0, 255);
        return n = n || 0 == n ? _(n, 0, 1) : 1, t[3] = n, t
      }
    }

    function d(e) {
      if (e) {
        var t = e.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
        if (t) {
          var n = parseFloat(t[4]);
          return [_(parseInt(t[1]), 0, 360), _(parseFloat(t[2]), 0, 100), _(parseFloat(t[3]), 0, 100), _(isNaN(n) ? 1 : n, 0, 1)]
        }
      }
    }

    function h(e) {
      if (e) {
        var t = e.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
        if (t) {
          var n = parseFloat(t[4]);
          return [_(parseInt(t[1]), 0, 360), _(parseFloat(t[2]), 0, 100), _(parseFloat(t[3]), 0, 100), _(isNaN(n) ? 1 : n, 0, 1)]
        }
      }
    }

    function f(e, t) {
      return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + t + ")"
    }

    function p(e, t) {
      return "rgba(" + Math.round(e[0] / 255 * 100) + "%, " + Math.round(e[1] / 255 * 100) + "%, " + Math.round(e[2] / 255 * 100) + "%, " + (t || e[3] || 1) + ")"
    }

    function m(e, t) {
      return void 0 === t && (t = void 0 !== e[3] ? e[3] : 1), "hsla(" + e[0] + ", " + e[1] + "%, " + e[2] + "%, " + t + ")"
    }

    function _(e, t, n) {
      return Math.min(Math.max(t, e), n)
    }

    function y(e) {
      var t = e.toString(16).toUpperCase();
      return t.length < 2 ? "0" + t : t
    }
    var g = {};
    for (var v in l) g[l[v]] = v;
    var b = function(e) {
      return e instanceof b ? e : this instanceof b ? (this.valid = !1, this.values = {
        rgb: [0, 0, 0],
        hsl: [0, 0, 0],
        hsv: [0, 0, 0],
        hwb: [0, 0, 0],
        cmyk: [0, 0, 0, 0],
        alpha: 1
      }, void("string" == typeof e ? (t = u.getRgba(e)) ? this.setValues("rgb", t) : (t = u.getHsla(e)) ? this.setValues("hsl", t) : (t = u.getHwb(e)) && this.setValues("hwb", t) : "object" == typeof e && (void 0 !== (t = e).r || void 0 !== t.red ? this.setValues("rgb", t) : void 0 !== t.l || void 0 !== t.lightness ? this.setValues("hsl", t) : void 0 !== t.v || void 0 !== t.value ? this.setValues("hsv", t) : void 0 !== t.w || void 0 !== t.whiteness ? this.setValues("hwb", t) : void 0 === t.c && void 0 === t.cyan || this.setValues("cmyk", t)))) : new b(e);
      var t
    };
    b.prototype = {
      isValid: function() {
        return this.valid
      },
      rgb: function() {
        return this.setSpace("rgb", arguments)
      },
      hsl: function() {
        return this.setSpace("hsl", arguments)
      },
      hsv: function() {
        return this.setSpace("hsv", arguments)
      },
      hwb: function() {
        return this.setSpace("hwb", arguments)
      },
      cmyk: function() {
        return this.setSpace("cmyk", arguments)
      },
      rgbArray: function() {
        return this.values.rgb
      },
      hslArray: function() {
        return this.values.hsl
      },
      hsvArray: function() {
        return this.values.hsv
      },
      hwbArray: function() {
        var e = this.values;
        return 1 !== e.alpha ? e.hwb.concat([e.alpha]) : e.hwb
      },
      cmykArray: function() {
        return this.values.cmyk
      },
      rgbaArray: function() {
        var e = this.values;
        return e.rgb.concat([e.alpha])
      },
      hslaArray: function() {
        var e = this.values;
        return e.hsl.concat([e.alpha])
      },
      alpha: function(e) {
        return void 0 === e ? this.values.alpha : (this.setValues("alpha", e), this)
      },
      red: function(e) {
        return this.setChannel("rgb", 0, e)
      },
      green: function(e) {
        return this.setChannel("rgb", 1, e)
      },
      blue: function(e) {
        return this.setChannel("rgb", 2, e)
      },
      hue: function(e) {
        return e && (e = (e %= 360) < 0 ? 360 + e : e), this.setChannel("hsl", 0, e)
      },
      saturation: function(e) {
        return this.setChannel("hsl", 1, e)
      },
      lightness: function(e) {
        return this.setChannel("hsl", 2, e)
      },
      saturationv: function(e) {
        return this.setChannel("hsv", 1, e)
      },
      whiteness: function(e) {
        return this.setChannel("hwb", 1, e)
      },
      blackness: function(e) {
        return this.setChannel("hwb", 2, e)
      },
      value: function(e) {
        return this.setChannel("hsv", 2, e)
      },
      cyan: function(e) {
        return this.setChannel("cmyk", 0, e)
      },
      magenta: function(e) {
        return this.setChannel("cmyk", 1, e)
      },
      yellow: function(e) {
        return this.setChannel("cmyk", 2, e)
      },
      black: function(e) {
        return this.setChannel("cmyk", 3, e)
      },
      hexString: function() {
        return u.hexString(this.values.rgb)
      },
      rgbString: function() {
        return u.rgbString(this.values.rgb, this.values.alpha)
      },
      rgbaString: function() {
        return u.rgbaString(this.values.rgb, this.values.alpha)
      },
      percentString: function() {
        return u.percentString(this.values.rgb, this.values.alpha)
      },
      hslString: function() {
        return u.hslString(this.values.hsl, this.values.alpha)
      },
      hslaString: function() {
        return u.hslaString(this.values.hsl, this.values.alpha)
      },
      hwbString: function() {
        return u.hwbString(this.values.hwb, this.values.alpha)
      },
      keyword: function() {
        return u.keyword(this.values.rgb, this.values.alpha)
      },
      rgbNumber: function() {
        var e = this.values.rgb;
        return e[0] << 16 | e[1] << 8 | e[2]
      },
      luminosity: function() {
        for (var e = this.values.rgb, t = [], n = 0; n < e.length; n++) {
          var r = e[n] / 255;
          t[n] = r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4)
        }
        return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
      },
      contrast: function(e) {
        var t = this.luminosity(),
          n = e.luminosity();
        return t > n ? (t + .05) / (n + .05) : (n + .05) / (t + .05)
      },
      level: function(e) {
        var t = this.contrast(e);
        return t >= 7.1 ? "AAA" : t >= 4.5 ? "AA" : ""
      },
      dark: function() {
        var e = this.values.rgb;
        return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128
      },
      light: function() {
        return !this.dark()
      },
      negate: function() {
        for (var e = [], t = 0; t < 3; t++) e[t] = 255 - this.values.rgb[t];
        return this.setValues("rgb", e), this
      },
      lighten: function(e) {
        var t = this.values.hsl;
        return t[2] += t[2] * e, this.setValues("hsl", t), this
      },
      darken: function(e) {
        var t = this.values.hsl;
        return t[2] -= t[2] * e, this.setValues("hsl", t), this
      },
      saturate: function(e) {
        var t = this.values.hsl;
        return t[1] += t[1] * e, this.setValues("hsl", t), this
      },
      desaturate: function(e) {
        var t = this.values.hsl;
        return t[1] -= t[1] * e, this.setValues("hsl", t), this
      },
      whiten: function(e) {
        var t = this.values.hwb;
        return t[1] += t[1] * e, this.setValues("hwb", t), this
      },
      blacken: function(e) {
        var t = this.values.hwb;
        return t[2] += t[2] * e, this.setValues("hwb", t), this
      },
      greyscale: function() {
        var e = this.values.rgb,
          t = .3 * e[0] + .59 * e[1] + .11 * e[2];
        return this.setValues("rgb", [t, t, t]), this
      },
      clearer: function(e) {
        var t = this.values.alpha;
        return this.setValues("alpha", t - t * e), this
      },
      opaquer: function(e) {
        var t = this.values.alpha;
        return this.setValues("alpha", t + t * e), this
      },
      rotate: function(e) {
        var t = this.values.hsl,
          n = (t[0] + e) % 360;
        return t[0] = n < 0 ? 360 + n : n, this.setValues("hsl", t), this
      },
      mix: function(e, t) {
        var n = e,
          r = void 0 === t ? .5 : t,
          i = 2 * r - 1,
          a = this.alpha() - n.alpha(),
          o = ((i * a == -1 ? i : (i + a) / (1 + i * a)) + 1) / 2,
          s = 1 - o;
        return this.rgb(o * this.red() + s * n.red(), o * this.green() + s * n.green(), o * this.blue() + s * n.blue()).alpha(this.alpha() * r + n.alpha() * (1 - r))
      },
      toJSON: function() {
        return this.rgb()
      },
      clone: function() {
        var e, t, n = new b,
          r = this.values,
          i = n.values;
        for (var a in r) r.hasOwnProperty(a) && (e = r[a], "[object Array]" === (t = {}.toString.call(e)) ? i[a] = e.slice(0) : "[object Number]" === t ? i[a] = e : console.error("unexpected color value:", e));
        return n
      }
    }, b.prototype.spaces = {
      rgb: ["red", "green", "blue"],
      hsl: ["hue", "saturation", "lightness"],
      hsv: ["hue", "saturation", "value"],
      hwb: ["hue", "whiteness", "blackness"],
      cmyk: ["cyan", "magenta", "yellow", "black"]
    }, b.prototype.maxes = {
      rgb: [255, 255, 255],
      hsl: [360, 100, 100],
      hsv: [360, 100, 100],
      hwb: [360, 100, 100],
      cmyk: [100, 100, 100, 100]
    }, b.prototype.getValues = function(e) {
      for (var t = this.values, n = {}, r = 0; r < e.length; r++) n[e.charAt(r)] = t[e][r];
      return 1 !== t.alpha && (n.a = t.alpha), n
    }, b.prototype.setValues = function(e, t) {
      var n, r, i = this.values,
        a = this.spaces,
        o = this.maxes,
        l = 1;
      if (this.valid = !0, "alpha" === e) l = t;
      else if (t.length) i[e] = t.slice(0, e.length), l = t[e.length];
      else if (void 0 !== t[e.charAt(0)]) {
        for (n = 0; n < e.length; n++) i[e][n] = t[e.charAt(n)];
        l = t.a
      } else if (void 0 !== t[a[e][0]]) {
        var u = a[e];
        for (n = 0; n < e.length; n++) i[e][n] = t[u[n]];
        l = t.alpha
      }
      if (i.alpha = Math.max(0, Math.min(1, void 0 === l ? i.alpha : l)), "alpha" === e) return !1;
      for (n = 0; n < e.length; n++) r = Math.max(0, Math.min(o[e][n], i[e][n])), i[e][n] = Math.round(r);
      for (var c in a) c !== e && (i[c] = s[e][c](i[e]));
      return !0
    }, b.prototype.setSpace = function(e, t) {
      var n = t[0];
      return void 0 === n ? this.getValues(e) : ("number" == typeof n && (n = Array.prototype.slice.call(t)), this.setValues(e, n), this)
    }, b.prototype.setChannel = function(e, t, n) {
      var r = this.values[e];
      return void 0 === n ? r[t] : n === r[t] ? this : (r[t] = n, this.setValues(e, r), this)
    }, "undefined" != typeof window && (window.Color = b);
    var w, k = b,
      M = {
        noop: function() {},
        uid: (w = 0, function() {
          return w++
        }),
        isNullOrUndef: function(e) {
          return null == e
        },
        isArray: function(e) {
          if (Array.isArray && Array.isArray(e)) return !0;
          var t = Object.prototype.toString.call(e);
          return "[object" === t.substr(0, 7) && "Array]" === t.substr(-6)
        },
        isObject: function(e) {
          return null !== e && "[object Object]" === Object.prototype.toString.call(e)
        },
        isFinite: function(e) {
          return ("number" == typeof e || e instanceof Number) && isFinite(e)
        },
        valueOrDefault: function(e, t) {
          return void 0 === e ? t : e
        },
        valueAtIndexOrDefault: function(e, t, n) {
          return M.valueOrDefault(M.isArray(e) ? e[t] : e, n)
        },
        callback: function(e, t, n) {
          if (e && "function" == typeof e.call) return e.apply(n, t)
        },
        each: function(e, t, n, r) {
          var i, a, o;
          if (M.isArray(e))
            if (a = e.length, r)
              for (i = a - 1; i >= 0; i--) t.call(n, e[i], i);
            else
              for (i = 0; i < a; i++) t.call(n, e[i], i);
          else if (M.isObject(e))
            for (a = (o = Object.keys(e)).length, i = 0; i < a; i++) t.call(n, e[o[i]], o[i])
        },
        arrayEquals: function(e, t) {
          var n, r, i, a;
          if (!e || !t || e.length !== t.length) return !1;
          for (n = 0, r = e.length; n < r; ++n)
            if (i = e[n], a = t[n], i instanceof Array && a instanceof Array) {
              if (!M.arrayEquals(i, a)) return !1
            } else if (i !== a) return !1;
          return !0
        },
        clone: function(e) {
          if (M.isArray(e)) return e.map(M.clone);
          if (M.isObject(e)) {
            for (var t = {}, n = Object.keys(e), r = n.length, i = 0; i < r; ++i) t[n[i]] = M.clone(e[n[i]]);
            return t
          }
          return e
        },
        _merger: function(e, t, n, r) {
          var i = t[e],
            a = n[e];
          M.isObject(i) && M.isObject(a) ? M.merge(i, a, r) : t[e] = M.clone(a)
        },
        _mergerIf: function(e, t, n) {
          var r = t[e],
            i = n[e];
          M.isObject(r) && M.isObject(i) ? M.mergeIf(r, i) : t.hasOwnProperty(e) || (t[e] = M.clone(i))
        },
        merge: function(e, t, n) {
          var r, i, a, o, s, l = M.isArray(t) ? t : [t],
            u = l.length;
          if (!M.isObject(e)) return e;
          for (r = (n = n || {}).merger || M._merger, i = 0; i < u; ++i)
            if (t = l[i], M.isObject(t))
              for (s = 0, o = (a = Object.keys(t)).length; s < o; ++s) r(a[s], e, t, n);
          return e
        },
        mergeIf: function(e, t) {
          return M.merge(e, t, {
            merger: M._mergerIf
          })
        },
        extend: Object.assign || function(e) {
          return M.merge(e, [].slice.call(arguments, 1), {
            merger: function(e, t, n) {
              t[e] = n[e]
            }
          })
        },
        inherits: function(e) {
          var t = this,
            n = e && e.hasOwnProperty("constructor") ? e.constructor : function() {
              return t.apply(this, arguments)
            },
            r = function() {
              this.constructor = n
            };
          return r.prototype = t.prototype, n.prototype = new r, n.extend = M.inherits, e && M.extend(n.prototype, e), n.__super__ = t.prototype, n
        },
        _deprecated: function(e, t, n, r) {
          void 0 !== t && console.warn(e + ': "' + n + '" is deprecated. Please use "' + r + '" instead')
        }
      },
      x = M;
    M.callCallback = M.callback, M.indexOf = function(e, t, n) {
      return Array.prototype.indexOf.call(e, t, n)
    }, M.getValueOrDefault = M.valueOrDefault, M.getValueAtIndexOrDefault = M.valueAtIndexOrDefault;
    var L = {
        linear: function(e) {
          return e
        },
        easeInQuad: function(e) {
          return e * e
        },
        easeOutQuad: function(e) {
          return -e * (e - 2)
        },
        easeInOutQuad: function(e) {
          return (e /= .5) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
        },
        easeInCubic: function(e) {
          return e * e * e
        },
        easeOutCubic: function(e) {
          return (e -= 1) * e * e + 1
        },
        easeInOutCubic: function(e) {
          return (e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
        },
        easeInQuart: function(e) {
          return e * e * e * e
        },
        easeOutQuart: function(e) {
          return -((e -= 1) * e * e * e - 1)
        },
        easeInOutQuart: function(e) {
          return (e /= .5) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
        },
        easeInQuint: function(e) {
          return e * e * e * e * e
        },
        easeOutQuint: function(e) {
          return (e -= 1) * e * e * e * e + 1
        },
        easeInOutQuint: function(e) {
          return (e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
        },
        easeInSine: function(e) {
          return 1 - Math.cos(e * (Math.PI / 2))
        },
        easeOutSine: function(e) {
          return Math.sin(e * (Math.PI / 2))
        },
        easeInOutSine: function(e) {
          return -.5 * (Math.cos(Math.PI * e) - 1)
        },
        easeInExpo: function(e) {
          return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
        },
        easeOutExpo: function(e) {
          return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
        },
        easeInOutExpo: function(e) {
          return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * --e))
        },
        easeInCirc: function(e) {
          return e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)
        },
        easeOutCirc: function(e) {
          return Math.sqrt(1 - (e -= 1) * e)
        },
        easeInOutCirc: function(e) {
          return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        },
        easeInElastic: function(e) {
          var t = 1.70158,
            n = 0,
            r = 1;
          return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), r < 1 ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r), -r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n))
        },
        easeOutElastic: function(e) {
          var t = 1.70158,
            n = 0,
            r = 1;
          return 0 === e ? 0 : 1 === e ? 1 : (n || (n = .3), r < 1 ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r), r * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1)
        },
        easeInOutElastic: function(e) {
          var t = 1.70158,
            n = 0,
            r = 1;
          return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (n || (n = .45), r < 1 ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r), e < 1 ? r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * -.5 : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1)
        },
        easeInBack: function(e) {
          var t = 1.70158;
          return e * e * ((t + 1) * e - t)
        },
        easeOutBack: function(e) {
          var t = 1.70158;
          return (e -= 1) * e * ((t + 1) * e + t) + 1
        },
        easeInOutBack: function(e) {
          var t = 1.70158;
          return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2)
        },
        easeInBounce: function(e) {
          return 1 - L.easeOutBounce(1 - e)
        },
        easeOutBounce: function(e) {
          return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        },
        easeInOutBounce: function(e) {
          return e < .5 ? .5 * L.easeInBounce(2 * e) : .5 * L.easeOutBounce(2 * e - 1) + .5
        }
      },
      S = {
        effects: L
      };
    x.easingEffects = L;
    var T = Math.PI,
      D = T / 180,
      E = 2 * T,
      Y = T / 2,
      C = T / 4,
      O = 2 * T / 3,
      P = {
        clear: function(e) {
          e.ctx.clearRect(0, 0, e.width, e.height)
        },
        roundedRect: function(e, t, n, r, i, a) {
          if (a) {
            var o = Math.min(a, i / 2, r / 2),
              s = t + o,
              l = n + o,
              u = t + r - o,
              c = n + i - o;
            e.moveTo(t, l), s < u && l < c ? (e.arc(s, l, o, -T, -Y), e.arc(u, l, o, -Y, 0), e.arc(u, c, o, 0, Y), e.arc(s, c, o, Y, T)) : s < u ? (e.moveTo(s, n), e.arc(u, l, o, -Y, Y), e.arc(s, l, o, Y, T + Y)) : l < c ? (e.arc(s, l, o, -T, 0), e.arc(s, c, o, 0, T)) : e.arc(s, l, o, -T, T), e.closePath(), e.moveTo(t, n)
          } else e.rect(t, n, r, i)
        },
        drawPoint: function(e, t, n, r, i, a) {
          var o, s, l, u, c, d = (a || 0) * D;
          if (t && "object" == typeof t && ("[object HTMLImageElement]" === (o = t.toString()) || "[object HTMLCanvasElement]" === o)) return e.save(), e.translate(r, i), e.rotate(d), e.drawImage(t, -t.width / 2, -t.height / 2, t.width, t.height), void e.restore();
          if (!(isNaN(n) || n <= 0)) {
            switch (e.beginPath(), t) {
              default:
                e.arc(r, i, n, 0, E), e.closePath();
                break;
              case "triangle":
                e.moveTo(r + Math.sin(d) * n, i - Math.cos(d) * n), d += O, e.lineTo(r + Math.sin(d) * n, i - Math.cos(d) * n), d += O, e.lineTo(r + Math.sin(d) * n, i - Math.cos(d) * n), e.closePath();
                break;
              case "rectRounded":
                u = n - (c = .516 * n), s = Math.cos(d + C) * u, l = Math.sin(d + C) * u, e.arc(r - s, i - l, c, d - T, d - Y), e.arc(r + l, i - s, c, d - Y, d), e.arc(r + s, i + l, c, d, d + Y), e.arc(r - l, i + s, c, d + Y, d + T), e.closePath();
                break;
              case "rect":
                if (!a) {
                  u = Math.SQRT1_2 * n, e.rect(r - u, i - u, 2 * u, 2 * u);
                  break
                }
                d += C;
              case "rectRot":
                s = Math.cos(d) * n, l = Math.sin(d) * n, e.moveTo(r - s, i - l), e.lineTo(r + l, i - s), e.lineTo(r + s, i + l), e.lineTo(r - l, i + s), e.closePath();
                break;
              case "crossRot":
                d += C;
              case "cross":
                s = Math.cos(d) * n, l = Math.sin(d) * n, e.moveTo(r - s, i - l), e.lineTo(r + s, i + l), e.moveTo(r + l, i - s), e.lineTo(r - l, i + s);
                break;
              case "star":
                s = Math.cos(d) * n, l = Math.sin(d) * n, e.moveTo(r - s, i - l), e.lineTo(r + s, i + l), e.moveTo(r + l, i - s), e.lineTo(r - l, i + s), d += C, s = Math.cos(d) * n, l = Math.sin(d) * n, e.moveTo(r - s, i - l), e.lineTo(r + s, i + l), e.moveTo(r + l, i - s), e.lineTo(r - l, i + s);
                break;
              case "line":
                s = Math.cos(d) * n, l = Math.sin(d) * n, e.moveTo(r - s, i - l), e.lineTo(r + s, i + l);
                break;
              case "dash":
                e.moveTo(r, i), e.lineTo(r + Math.cos(d) * n, i + Math.sin(d) * n)
            }
            e.fill(), e.stroke()
          }
        },
        _isPointInArea: function(e, t) {
          return e.x > t.left - 1e-6 && e.x < t.right + 1e-6 && e.y > t.top - 1e-6 && e.y < t.bottom + 1e-6
        },
        clipArea: function(e, t) {
          e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip()
        },
        unclipArea: function(e) {
          e.restore()
        },
        lineTo: function(e, t, n, r) {
          var i = n.steppedLine;
          if (i) {
            if ("middle" === i) {
              var a = (t.x + n.x) / 2;
              e.lineTo(a, r ? n.y : t.y), e.lineTo(a, r ? t.y : n.y)
            } else "after" === i && !r || "after" !== i && r ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
            e.lineTo(n.x, n.y)
          } else n.tension ? e.bezierCurveTo(r ? t.controlPointPreviousX : t.controlPointNextX, r ? t.controlPointPreviousY : t.controlPointNextY, r ? n.controlPointNextX : n.controlPointPreviousX, r ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : e.lineTo(n.x, n.y)
        }
      },
      j = P;
    x.clear = P.clear, x.drawRoundedRectangle = function(e) {
      e.beginPath(), P.roundedRect.apply(P, arguments)
    };
    var A = {
      _set: function(e, t) {
        return x.merge(this[e] || (this[e] = {}), t)
      }
    };
    A._set("global", {
      defaultColor: "rgba(0,0,0,0.1)",
      defaultFontColor: "#666",
      defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      defaultFontSize: 12,
      defaultFontStyle: "normal",
      defaultLineHeight: 1.2,
      showLines: !0
    });
    var R = A,
      I = x.valueOrDefault,
      H = {
        toLineHeight: function(e, t) {
          var n = ("" + e).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
          if (!n || "normal" === n[1]) return 1.2 * t;
          switch (e = +n[2], n[3]) {
            case "px":
              return e;
            case "%":
              e /= 100
          }
          return t * e
        },
        toPadding: function(e) {
          var t, n, r, i;
          return x.isObject(e) ? (t = +e.top || 0, n = +e.right || 0, r = +e.bottom || 0, i = +e.left || 0) : t = n = r = i = +e || 0, {
            top: t,
            right: n,
            bottom: r,
            left: i,
            height: t + r,
            width: i + n
          }
        },
        _parseFont: function(e) {
          var t = R.global,
            n = I(e.fontSize, t.defaultFontSize),
            r = {
              family: I(e.fontFamily, t.defaultFontFamily),
              lineHeight: x.options.toLineHeight(I(e.lineHeight, t.defaultLineHeight), n),
              size: n,
              style: I(e.fontStyle, t.defaultFontStyle),
              weight: null,
              string: ""
            };
          return r.string = function(e) {
            return !e || x.isNullOrUndef(e.size) || x.isNullOrUndef(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family
          }(r), r
        },
        resolve: function(e, t, n, r) {
          var i, a, o, s = !0;
          for (i = 0, a = e.length; i < a; ++i)
            if (void 0 !== (o = e[i]) && (void 0 !== t && "function" == typeof o && (o = o(t), s = !1), void 0 !== n && x.isArray(o) && (o = o[n], s = !1), void 0 !== o)) return r && !s && (r.cacheable = !1), o
        }
      },
      F = {
        _factorize: function(e) {
          var t, n = [],
            r = Math.sqrt(e);
          for (t = 1; t < r; t++) e % t == 0 && (n.push(t), n.push(e / t));
          return r === (0 | r) && n.push(r), n.sort((function(e, t) {
            return e - t
          })).pop(), n
        },
        log10: Math.log10 || function(e) {
          var t = Math.log(e) * Math.LOG10E,
            n = Math.round(t);
          return e === Math.pow(10, n) ? n : t
        }
      },
      z = F;
    x.log10 = F.log10;
    var N = x,
      W = S,
      B = j,
      U = H,
      V = z,
      G = {
        getRtlAdapter: function(e, t, n) {
          return e ? function(e, t) {
            return {
              x: function(n) {
                return e + e + t - n
              },
              setWidth: function(e) {
                t = e
              },
              textAlign: function(e) {
                return "center" === e ? e : "right" === e ? "left" : "right"
              },
              xPlus: function(e, t) {
                return e - t
              },
              leftForLtr: function(e, t) {
                return e - t
              }
            }
          }(t, n) : {
            x: function(e) {
              return e
            },
            setWidth: function(e) {},
            textAlign: function(e) {
              return e
            },
            xPlus: function(e, t) {
              return e + t
            },
            leftForLtr: function(e, t) {
              return e
            }
          }
        },
        overrideTextDirection: function(e, t) {
          var n, r;
          "ltr" !== t && "rtl" !== t || (r = [(n = e.canvas.style).getPropertyValue("direction"), n.getPropertyPriority("direction")], n.setProperty("direction", t, "important"), e.prevTextDirection = r)
        },
        restoreTextDirection: function(e) {
          var t = e.prevTextDirection;
          void 0 !== t && (delete e.prevTextDirection, e.canvas.style.setProperty("direction", t[0], t[1]))
        }
      };
    N.easing = W, N.canvas = B, N.options = U, N.math = V, N.rtl = G;
    var q = function(e) {
      N.extend(this, e), this.initialize.apply(this, arguments)
    };
    N.extend(q.prototype, {
      _type: void 0,
      initialize: function() {
        this.hidden = !1
      },
      pivot: function() {
        var e = this;
        return e._view || (e._view = N.extend({}, e._model)), e._start = {}, e
      },
      transition: function(e) {
        var t = this,
          n = t._model,
          r = t._start,
          i = t._view;
        return n && 1 !== e ? (i || (i = t._view = {}), r || (r = t._start = {}), function(e, t, n, r) {
          var i, a, o, s, l, u, c, d, h, f = Object.keys(n);
          for (i = 0, a = f.length; i < a; ++i)
            if (u = n[o = f[i]], t.hasOwnProperty(o) || (t[o] = u), (s = t[o]) !== u && "_" !== o[0]) {
              if (e.hasOwnProperty(o) || (e[o] = s), (c = typeof u) == typeof(l = e[o]))
                if ("string" === c) {
                  if ((d = k(l)).valid && (h = k(u)).valid) {
                    t[o] = h.mix(d, r).rgbString();
                    continue
                  }
                } else if (N.isFinite(l) && N.isFinite(u)) {
                t[o] = l + (u - l) * r;
                continue
              }
              t[o] = u
            }
        }(r, i, n, e), t) : (t._view = N.extend({}, n), t._start = null, t)
      },
      tooltipPosition: function() {
        return {
          x: this._model.x,
          y: this._model.y
        }
      },
      hasValue: function() {
        return N.isNumber(this._model.x) && N.isNumber(this._model.y)
      }
    }), q.extend = N.inherits;
    var $ = q,
      J = $.extend({
        chart: null,
        currentStep: 0,
        numSteps: 60,
        easing: "",
        render: null,
        onAnimationProgress: null,
        onAnimationComplete: null
      }),
      X = J;
    Object.defineProperty(J.prototype, "animationObject", {
      get: function() {
        return this
      }
    }), Object.defineProperty(J.prototype, "chartInstance", {
      get: function() {
        return this.chart
      },
      set: function(e) {
        this.chart = e
      }
    }), R._set("global", {
      animation: {
        duration: 1e3,
        easing: "easeOutQuart",
        onProgress: N.noop,
        onComplete: N.noop
      }
    });
    var K = {
        animations: [],
        request: null,
        addAnimation: function(e, t, n, r) {
          var i, a, o = this.animations;
          for (t.chart = e, t.startTime = Date.now(), t.duration = n, r || (e.animating = !0), i = 0, a = o.length; i < a; ++i)
            if (o[i].chart === e) return void(o[i] = t);
          o.push(t), 1 === o.length && this.requestAnimationFrame()
        },
        cancelAnimation: function(e) {
          var t = N.findIndex(this.animations, (function(t) {
            return t.chart === e
          })); - 1 !== t && (this.animations.splice(t, 1), e.animating = !1)
        },
        requestAnimationFrame: function() {
          var e = this;
          null === e.request && (e.request = N.requestAnimFrame.call(window, (function() {
            e.request = null, e.startDigest()
          })))
        },
        startDigest: function() {
          this.advance(), this.animations.length > 0 && this.requestAnimationFrame()
        },
        advance: function() {
          for (var e, t, n, r, i = this.animations, a = 0; a < i.length;) t = (e = i[a]).chart, n = e.numSteps, r = Math.floor((Date.now() - e.startTime) / e.duration * n) + 1, e.currentStep = Math.min(r, n), N.callback(e.render, [t, e], t), N.callback(e.onAnimationProgress, [e], t), e.currentStep >= n ? (N.callback(e.onAnimationComplete, [e], t), t.animating = !1, i.splice(a, 1)) : ++a
        }
      },
      Z = N.options.resolve,
      Q = ["push", "pop", "shift", "splice", "unshift"];

    function ee(e, t) {
      var n = e._chartjs;
      if (n) {
        var r = n.listeners,
          i = r.indexOf(t); - 1 !== i && r.splice(i, 1), r.length > 0 || (Q.forEach((function(t) {
          delete e[t]
        })), delete e._chartjs)
      }
    }
    var te = function(e, t) {
      this.initialize(e, t)
    };
    N.extend(te.prototype, {
      datasetElementType: null,
      dataElementType: null,
      _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth"],
      _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "pointStyle"],
      initialize: function(e, t) {
        var n = this;
        n.chart = e, n.index = t, n.linkScales(), n.addElements(), n._type = n.getMeta().type
      },
      updateIndex: function(e) {
        this.index = e
      },
      linkScales: function() {
        var e = this.getMeta(),
          t = this.chart,
          n = t.scales,
          r = this.getDataset(),
          i = t.options.scales;
        null !== e.xAxisID && e.xAxisID in n && !r.xAxisID || (e.xAxisID = r.xAxisID || i.xAxes[0].id), null !== e.yAxisID && e.yAxisID in n && !r.yAxisID || (e.yAxisID = r.yAxisID || i.yAxes[0].id)
      },
      getDataset: function() {
        return this.chart.data.datasets[this.index]
      },
      getMeta: function() {
        return this.chart.getDatasetMeta(this.index)
      },
      getScaleForId: function(e) {
        return this.chart.scales[e]
      },
      _getValueScaleId: function() {
        return this.getMeta().yAxisID
      },
      _getIndexScaleId: function() {
        return this.getMeta().xAxisID
      },
      _getValueScale: function() {
        return this.getScaleForId(this._getValueScaleId())
      },
      _getIndexScale: function() {
        return this.getScaleForId(this._getIndexScaleId())
      },
      reset: function() {
        this._update(!0)
      },
      destroy: function() {
        this._data && ee(this._data, this)
      },
      createMetaDataset: function() {
        var e = this.datasetElementType;
        return e && new e({
          _chart: this.chart,
          _datasetIndex: this.index
        })
      },
      createMetaData: function(e) {
        var t = this.dataElementType;
        return t && new t({
          _chart: this.chart,
          _datasetIndex: this.index,
          _index: e
        })
      },
      addElements: function() {
        var e, t, n = this.getMeta(),
          r = this.getDataset().data || [],
          i = n.data;
        for (e = 0, t = r.length; e < t; ++e) i[e] = i[e] || this.createMetaData(e);
        n.dataset = n.dataset || this.createMetaDataset()
      },
      addElementAndReset: function(e) {
        var t = this.createMetaData(e);
        this.getMeta().data.splice(e, 0, t), this.updateElement(t, e, !0)
      },
      buildOrUpdateElements: function() {
        var e, t, n = this,
          r = n.getDataset(),
          i = r.data || (r.data = []);
        n._data !== i && (n._data && ee(n._data, n), i && Object.isExtensible(i) && (t = n, (e = i)._chartjs ? e._chartjs.listeners.push(t) : (Object.defineProperty(e, "_chartjs", {
          configurable: !0,
          enumerable: !1,
          value: {
            listeners: [t]
          }
        }), Q.forEach((function(t) {
          var n = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
            r = e[t];
          Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            value: function() {
              var t = Array.prototype.slice.call(arguments),
                i = r.apply(this, t);
              return N.each(e._chartjs.listeners, (function(e) {
                "function" == typeof e[n] && e[n].apply(e, t)
              })), i
            }
          })
        })))), n._data = i), n.resyncElements()
      },
      _configure: function() {
        this._config = N.merge({}, [this.chart.options.datasets[this._type], this.getDataset()], {
          merger: function(e, t, n) {
            "_meta" !== e && "data" !== e && N._merger(e, t, n)
          }
        })
      },
      _update: function(e) {
        this._configure(), this._cachedDataOpts = null, this.update(e)
      },
      update: N.noop,
      transition: function(e) {
        for (var t = this.getMeta(), n = t.data || [], r = n.length, i = 0; i < r; ++i) n[i].transition(e);
        t.dataset && t.dataset.transition(e)
      },
      draw: function() {
        var e = this.getMeta(),
          t = e.data || [],
          n = t.length,
          r = 0;
        for (e.dataset && e.dataset.draw(); r < n; ++r) t[r].draw()
      },
      getStyle: function(e) {
        var t, n = this.getMeta(),
          r = n.dataset;
        return this._configure(), r && void 0 === e ? t = this._resolveDatasetElementOptions(r || {}) : (e = e || 0, t = this._resolveDataElementOptions(n.data[e] || {}, e)), !1 !== t.fill && null !== t.fill || (t.backgroundColor = t.borderColor), t
      },
      _resolveDatasetElementOptions: function(e, t) {
        var n, r, i, a, o = this,
          s = o.chart,
          l = o._config,
          u = e.custom || {},
          c = s.options.elements[o.datasetElementType.prototype._type] || {},
          d = o._datasetElementOptions,
          h = {},
          f = {
            chart: s,
            dataset: o.getDataset(),
            datasetIndex: o.index,
            hover: t
          };
        for (n = 0, r = d.length; n < r; ++n) i = d[n], a = t ? "hover" + i.charAt(0).toUpperCase() + i.slice(1) : i, h[i] = Z([u[a], l[a], c[a]], f);
        return h
      },
      _resolveDataElementOptions: function(e, t) {
        var n = this,
          r = e && e.custom,
          i = n._cachedDataOpts;
        if (i && !r) return i;
        var a, o, s, l, u = n.chart,
          c = n._config,
          d = u.options.elements[n.dataElementType.prototype._type] || {},
          h = n._dataElementOptions,
          f = {},
          p = {
            chart: u,
            dataIndex: t,
            dataset: n.getDataset(),
            datasetIndex: n.index
          },
          m = {
            cacheable: !r
          };
        if (r = r || {}, N.isArray(h))
          for (o = 0, s = h.length; o < s; ++o) f[l = h[o]] = Z([r[l], c[l], d[l]], p, t, m);
        else
          for (o = 0, s = (a = Object.keys(h)).length; o < s; ++o) f[l = a[o]] = Z([r[l], c[h[l]], c[l], d[l]], p, t, m);
        return m.cacheable && (n._cachedDataOpts = Object.freeze(f)), f
      },
      removeHoverStyle: function(e) {
        N.merge(e._model, e.$previousStyle || {}), delete e.$previousStyle
      },
      setHoverStyle: function(e) {
        var t = this.chart.data.datasets[e._datasetIndex],
          n = e._index,
          r = e.custom || {},
          i = e._model,
          a = N.getHoverColor;
        e.$previousStyle = {
          backgroundColor: i.backgroundColor,
          borderColor: i.borderColor,
          borderWidth: i.borderWidth
        }, i.backgroundColor = Z([r.hoverBackgroundColor, t.hoverBackgroundColor, a(i.backgroundColor)], void 0, n), i.borderColor = Z([r.hoverBorderColor, t.hoverBorderColor, a(i.borderColor)], void 0, n), i.borderWidth = Z([r.hoverBorderWidth, t.hoverBorderWidth, i.borderWidth], void 0, n)
      },
      _removeDatasetHoverStyle: function() {
        var e = this.getMeta().dataset;
        e && this.removeHoverStyle(e)
      },
      _setDatasetHoverStyle: function() {
        var e, t, n, r, i, a, o = this.getMeta().dataset,
          s = {};
        if (o) {
          for (a = o._model, i = this._resolveDatasetElementOptions(o, !0), e = 0, t = (r = Object.keys(i)).length; e < t; ++e) s[n = r[e]] = a[n], a[n] = i[n];
          o.$previousStyle = s
        }
      },
      resyncElements: function() {
        var e = this.getMeta(),
          t = this.getDataset().data,
          n = e.data.length,
          r = t.length;
        r < n ? e.data.splice(r, n - r) : r > n && this.insertElements(n, r - n)
      },
      insertElements: function(e, t) {
        for (var n = 0; n < t; ++n) this.addElementAndReset(e + n)
      },
      onDataPush: function() {
        var e = arguments.length;
        this.insertElements(this.getDataset().data.length - e, e)
      },
      onDataPop: function() {
        this.getMeta().data.pop()
      },
      onDataShift: function() {
        this.getMeta().data.shift()
      },
      onDataSplice: function(e, t) {
        this.getMeta().data.splice(e, t), this.insertElements(e, arguments.length - 2)
      },
      onDataUnshift: function() {
        this.insertElements(0, arguments.length)
      }
    }), te.extend = N.inherits;
    var ne = te,
      re = 2 * Math.PI;

    function ie(e, t) {
      var n = t.startAngle,
        r = t.endAngle,
        i = t.pixelMargin,
        a = i / t.outerRadius,
        o = t.x,
        s = t.y;
      e.beginPath(), e.arc(o, s, t.outerRadius, n - a, r + a), t.innerRadius > i ? (a = i / t.innerRadius, e.arc(o, s, t.innerRadius - i, r + a, n - a, !0)) : e.arc(o, s, i, r + Math.PI / 2, n - Math.PI / 2), e.closePath(), e.clip()
    }

    function ae(e, t, n) {
      var r = "inner" === t.borderAlign;
      r ? (e.lineWidth = 2 * t.borderWidth, e.lineJoin = "round") : (e.lineWidth = t.borderWidth, e.lineJoin = "bevel"), n.fullCircles && function(e, t, n, r) {
        var i, a = n.endAngle;
        for (r && (n.endAngle = n.startAngle + re, ie(e, n), n.endAngle = a, n.endAngle === n.startAngle && n.fullCircles && (n.endAngle += re, n.fullCircles--)), e.beginPath(), e.arc(n.x, n.y, n.innerRadius, n.startAngle + re, n.startAngle, !0), i = 0; i < n.fullCircles; ++i) e.stroke();
        for (e.beginPath(), e.arc(n.x, n.y, t.outerRadius, n.startAngle, n.startAngle + re), i = 0; i < n.fullCircles; ++i) e.stroke()
      }(e, t, n, r), r && ie(e, n), e.beginPath(), e.arc(n.x, n.y, t.outerRadius, n.startAngle, n.endAngle), e.arc(n.x, n.y, n.innerRadius, n.endAngle, n.startAngle, !0), e.closePath(), e.stroke()
    }
    R._set("global", {
      elements: {
        arc: {
          backgroundColor: R.global.defaultColor,
          borderColor: "#fff",
          borderWidth: 2,
          borderAlign: "center"
        }
      }
    });
    var oe = $.extend({
        _type: "arc",
        inLabelRange: function(e) {
          var t = this._view;
          return !!t && Math.pow(e - t.x, 2) < Math.pow(t.radius + t.hoverRadius, 2)
        },
        inRange: function(e, t) {
          var n = this._view;
          if (n) {
            for (var r = N.getAngleFromPoint(n, {
                x: e,
                y: t
              }), i = r.angle, a = r.distance, o = n.startAngle, s = n.endAngle; s < o;) s += re;
            for (; i > s;) i -= re;
            for (; i < o;) i += re;
            var l = i >= o && i <= s,
              u = a >= n.innerRadius && a <= n.outerRadius;
            return l && u
          }
          return !1
        },
        getCenterPoint: function() {
          var e = this._view,
            t = (e.startAngle + e.endAngle) / 2,
            n = (e.innerRadius + e.outerRadius) / 2;
          return {
            x: e.x + Math.cos(t) * n,
            y: e.y + Math.sin(t) * n
          }
        },
        getArea: function() {
          var e = this._view;
          return Math.PI * ((e.endAngle - e.startAngle) / (2 * Math.PI)) * (Math.pow(e.outerRadius, 2) - Math.pow(e.innerRadius, 2))
        },
        tooltipPosition: function() {
          var e = this._view,
            t = e.startAngle + (e.endAngle - e.startAngle) / 2,
            n = (e.outerRadius - e.innerRadius) / 2 + e.innerRadius;
          return {
            x: e.x + Math.cos(t) * n,
            y: e.y + Math.sin(t) * n
          }
        },
        draw: function() {
          var e, t = this._chart.ctx,
            n = this._view,
            r = "inner" === n.borderAlign ? .33 : 0,
            i = {
              x: n.x,
              y: n.y,
              innerRadius: n.innerRadius,
              outerRadius: Math.max(n.outerRadius - r, 0),
              pixelMargin: r,
              startAngle: n.startAngle,
              endAngle: n.endAngle,
              fullCircles: Math.floor(n.circumference / re)
            };
          if (t.save(), t.fillStyle = n.backgroundColor, t.strokeStyle = n.borderColor, i.fullCircles) {
            for (i.endAngle = i.startAngle + re, t.beginPath(), t.arc(i.x, i.y, i.outerRadius, i.startAngle, i.endAngle), t.arc(i.x, i.y, i.innerRadius, i.endAngle, i.startAngle, !0), t.closePath(), e = 0; e < i.fullCircles; ++e) t.fill();
            i.endAngle = i.startAngle + n.circumference % re
          }
          t.beginPath(), t.arc(i.x, i.y, i.outerRadius, i.startAngle, i.endAngle), t.arc(i.x, i.y, i.innerRadius, i.endAngle, i.startAngle, !0), t.closePath(), t.fill(), n.borderWidth && ae(t, n, i), t.restore()
        }
      }),
      se = N.valueOrDefault,
      le = R.global.defaultColor;
    R._set("global", {
      elements: {
        line: {
          tension: .4,
          backgroundColor: le,
          borderWidth: 3,
          borderColor: le,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          capBezierPoints: !0,
          fill: !0
        }
      }
    });
    var ue = $.extend({
        _type: "line",
        draw: function() {
          var e, t, n, r = this,
            i = r._view,
            a = r._chart.ctx,
            o = i.spanGaps,
            s = r._children.slice(),
            l = R.global,
            u = l.elements.line,
            c = -1,
            d = r._loop;
          if (s.length) {
            if (r._loop) {
              for (e = 0; e < s.length; ++e)
                if (t = N.previousItem(s, e), !s[e]._view.skip && t._view.skip) {
                  s = s.slice(e).concat(s.slice(0, e)), d = o;
                  break
                } d && s.push(s[0])
            }
            for (a.save(), a.lineCap = i.borderCapStyle || u.borderCapStyle, a.setLineDash && a.setLineDash(i.borderDash || u.borderDash), a.lineDashOffset = se(i.borderDashOffset, u.borderDashOffset), a.lineJoin = i.borderJoinStyle || u.borderJoinStyle, a.lineWidth = se(i.borderWidth, u.borderWidth), a.strokeStyle = i.borderColor || l.defaultColor, a.beginPath(), (n = s[0]._view).skip || (a.moveTo(n.x, n.y), c = 0), e = 1; e < s.length; ++e) n = s[e]._view, t = -1 === c ? N.previousItem(s, e) : s[c], n.skip || (c !== e - 1 && !o || -1 === c ? a.moveTo(n.x, n.y) : N.canvas.lineTo(a, t._view, n), c = e);
            d && a.closePath(), a.stroke(), a.restore()
          }
        }
      }),
      ce = N.valueOrDefault,
      de = R.global.defaultColor;

    function he(e) {
      var t = this._view;
      return !!t && Math.abs(e - t.x) < t.radius + t.hitRadius
    }
    R._set("global", {
      elements: {
        point: {
          radius: 3,
          pointStyle: "circle",
          backgroundColor: de,
          borderColor: de,
          borderWidth: 1,
          hitRadius: 1,
          hoverRadius: 4,
          hoverBorderWidth: 1
        }
      }
    });
    var fe = $.extend({
        _type: "point",
        inRange: function(e, t) {
          var n = this._view;
          return !!n && Math.pow(e - n.x, 2) + Math.pow(t - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2)
        },
        inLabelRange: he,
        inXRange: he,
        inYRange: function(e) {
          var t = this._view;
          return !!t && Math.abs(e - t.y) < t.radius + t.hitRadius
        },
        getCenterPoint: function() {
          var e = this._view;
          return {
            x: e.x,
            y: e.y
          }
        },
        getArea: function() {
          return Math.PI * Math.pow(this._view.radius, 2)
        },
        tooltipPosition: function() {
          var e = this._view;
          return {
            x: e.x,
            y: e.y,
            padding: e.radius + e.borderWidth
          }
        },
        draw: function(e) {
          var t = this._view,
            n = this._chart.ctx,
            r = t.pointStyle,
            i = t.rotation,
            a = t.radius,
            o = t.x,
            s = t.y,
            l = R.global,
            u = l.defaultColor;
          t.skip || (void 0 === e || N.canvas._isPointInArea(t, e)) && (n.strokeStyle = t.borderColor || u, n.lineWidth = ce(t.borderWidth, l.elements.point.borderWidth), n.fillStyle = t.backgroundColor || u, N.canvas.drawPoint(n, r, a, o, s, i))
        }
      }),
      pe = R.global.defaultColor;

    function me(e) {
      return e && void 0 !== e.width
    }

    function _e(e) {
      var t, n, r, i, a;
      return me(e) ? (a = e.width / 2, t = e.x - a, n = e.x + a, r = Math.min(e.y, e.base), i = Math.max(e.y, e.base)) : (a = e.height / 2, t = Math.min(e.x, e.base), n = Math.max(e.x, e.base), r = e.y - a, i = e.y + a), {
        left: t,
        top: r,
        right: n,
        bottom: i
      }
    }

    function ye(e, t, n) {
      return e === t ? n : e === n ? t : e
    }

    function ge(e, t, n) {
      var r, i, a, o, s = e.borderWidth,
        l = function(e) {
          var t = e.borderSkipped,
            n = {};
          return t ? (e.horizontal ? e.base > e.x && (t = ye(t, "left", "right")) : e.base < e.y && (t = ye(t, "bottom", "top")), n[t] = !0, n) : n
        }(e);
      return N.isObject(s) ? (r = +s.top || 0, i = +s.right || 0, a = +s.bottom || 0, o = +s.left || 0) : r = i = a = o = +s || 0, {
        t: l.top || r < 0 ? 0 : r > n ? n : r,
        r: l.right || i < 0 ? 0 : i > t ? t : i,
        b: l.bottom || a < 0 ? 0 : a > n ? n : a,
        l: l.left || o < 0 ? 0 : o > t ? t : o
      }
    }

    function ve(e, t, n) {
      var r = null === t,
        i = null === n,
        a = !(!e || r && i) && _e(e);
      return a && (r || t >= a.left && t <= a.right) && (i || n >= a.top && n <= a.bottom)
    }
    R._set("global", {
      elements: {
        rectangle: {
          backgroundColor: pe,
          borderColor: pe,
          borderSkipped: "bottom",
          borderWidth: 0
        }
      }
    });
    var be = $.extend({
        _type: "rectangle",
        draw: function() {
          var e = this._chart.ctx,
            t = this._view,
            n = function(e) {
              var t = _e(e),
                n = t.right - t.left,
                r = t.bottom - t.top,
                i = ge(e, n / 2, r / 2);
              return {
                outer: {
                  x: t.left,
                  y: t.top,
                  w: n,
                  h: r
                },
                inner: {
                  x: t.left + i.l,
                  y: t.top + i.t,
                  w: n - i.l - i.r,
                  h: r - i.t - i.b
                }
              }
            }(t),
            r = n.outer,
            i = n.inner;
          e.fillStyle = t.backgroundColor, e.fillRect(r.x, r.y, r.w, r.h), r.w === i.w && r.h === i.h || (e.save(), e.beginPath(), e.rect(r.x, r.y, r.w, r.h), e.clip(), e.fillStyle = t.borderColor, e.rect(i.x, i.y, i.w, i.h), e.fill("evenodd"), e.restore())
        },
        height: function() {
          var e = this._view;
          return e.base - e.y
        },
        inRange: function(e, t) {
          return ve(this._view, e, t)
        },
        inLabelRange: function(e, t) {
          var n = this._view;
          return me(n) ? ve(n, e, null) : ve(n, null, t)
        },
        inXRange: function(e) {
          return ve(this._view, e, null)
        },
        inYRange: function(e) {
          return ve(this._view, null, e)
        },
        getCenterPoint: function() {
          var e, t, n = this._view;
          return me(n) ? (e = n.x, t = (n.y + n.base) / 2) : (e = (n.x + n.base) / 2, t = n.y), {
            x: e,
            y: t
          }
        },
        getArea: function() {
          var e = this._view;
          return me(e) ? e.width * Math.abs(e.y - e.base) : e.height * Math.abs(e.x - e.base)
        },
        tooltipPosition: function() {
          var e = this._view;
          return {
            x: e.x,
            y: e.y
          }
        }
      }),
      we = {},
      ke = oe,
      Me = ue,
      xe = fe,
      Le = be;
    we.Arc = ke, we.Line = Me, we.Point = xe, we.Rectangle = Le;
    var Se = N._deprecated,
      Te = N.valueOrDefault;

    function De(e, t, n) {
      var r, i, a = n.barThickness,
        o = t.stackCount,
        s = t.pixels[e],
        l = N.isNullOrUndef(a) ? function(e, t) {
          var n, r, i, a, o = e._length;
          for (i = 1, a = t.length; i < a; ++i) o = Math.min(o, Math.abs(t[i] - t[i - 1]));
          for (i = 0, a = e.getTicks().length; i < a; ++i) r = e.getPixelForTick(i), o = i > 0 ? Math.min(o, Math.abs(r - n)) : o, n = r;
          return o
        }(t.scale, t.pixels) : -1;
      return N.isNullOrUndef(a) ? (r = l * n.categoryPercentage, i = n.barPercentage) : (r = a * o, i = 1), {
        chunk: r / o,
        ratio: i,
        start: s - r / 2
      }
    }
    R._set("bar", {
      hover: {
        mode: "label"
      },
      scales: {
        xAxes: [{
          type: "category",
          offset: !0,
          gridLines: {
            offsetGridLines: !0
          }
        }],
        yAxes: [{
          type: "linear"
        }]
      }
    }), R._set("global", {
      datasets: {
        bar: {
          categoryPercentage: .8,
          barPercentage: .9
        }
      }
    });
    var Ee = ne.extend({
        dataElementType: we.Rectangle,
        _dataElementOptions: ["backgroundColor", "borderColor", "borderSkipped", "borderWidth", "barPercentage", "barThickness", "categoryPercentage", "maxBarThickness", "minBarLength"],
        initialize: function() {
          var e, t, n = this;
          ne.prototype.initialize.apply(n, arguments), (e = n.getMeta()).stack = n.getDataset().stack, e.bar = !0, t = n._getIndexScale().options, Se("bar chart", t.barPercentage, "scales.[x/y]Axes.barPercentage", "dataset.barPercentage"), Se("bar chart", t.barThickness, "scales.[x/y]Axes.barThickness", "dataset.barThickness"), Se("bar chart", t.categoryPercentage, "scales.[x/y]Axes.categoryPercentage", "dataset.categoryPercentage"), Se("bar chart", n._getValueScale().options.minBarLength, "scales.[x/y]Axes.minBarLength", "dataset.minBarLength"), Se("bar chart", t.maxBarThickness, "scales.[x/y]Axes.maxBarThickness", "dataset.maxBarThickness")
        },
        update: function(e) {
          var t, n, r = this.getMeta().data;
          for (this._ruler = this.getRuler(), t = 0, n = r.length; t < n; ++t) this.updateElement(r[t], t, e)
        },
        updateElement: function(e, t, n) {
          var r = this,
            i = r.getMeta(),
            a = r.getDataset(),
            o = r._resolveDataElementOptions(e, t);
          e._xScale = r.getScaleForId(i.xAxisID), e._yScale = r.getScaleForId(i.yAxisID), e._datasetIndex = r.index, e._index = t, e._model = {
            backgroundColor: o.backgroundColor,
            borderColor: o.borderColor,
            borderSkipped: o.borderSkipped,
            borderWidth: o.borderWidth,
            datasetLabel: a.label,
            label: r.chart.data.labels[t]
          }, N.isArray(a.data[t]) && (e._model.borderSkipped = null), r._updateElementGeometry(e, t, n, o), e.pivot()
        },
        _updateElementGeometry: function(e, t, n, r) {
          var i = this,
            a = e._model,
            o = i._getValueScale(),
            s = o.getBasePixel(),
            l = o.isHorizontal(),
            u = i._ruler || i.getRuler(),
            c = i.calculateBarValuePixels(i.index, t, r),
            d = i.calculateBarIndexPixels(i.index, t, u, r);
          a.horizontal = l, a.base = n ? s : c.base, a.x = l ? n ? s : c.head : d.center, a.y = l ? d.center : n ? s : c.head, a.height = l ? d.size : void 0, a.width = l ? void 0 : d.size
        },
        _getStacks: function(e) {
          var t, n, r = this._getIndexScale(),
            i = r._getMatchingVisibleMetas(this._type),
            a = r.options.stacked,
            o = i.length,
            s = [];
          for (t = 0; t < o && (n = i[t], (!1 === a || -1 === s.indexOf(n.stack) || void 0 === a && void 0 === n.stack) && s.push(n.stack), n.index !== e); ++t);
          return s
        },
        getStackCount: function() {
          return this._getStacks().length
        },
        getStackIndex: function(e, t) {
          var n = this._getStacks(e),
            r = void 0 !== t ? n.indexOf(t) : -1;
          return -1 === r ? n.length - 1 : r
        },
        getRuler: function() {
          var e, t, n = this._getIndexScale(),
            r = [];
          for (e = 0, t = this.getMeta().data.length; e < t; ++e) r.push(n.getPixelForValue(null, e, this.index));
          return {
            pixels: r,
            start: n._startPixel,
            end: n._endPixel,
            stackCount: this.getStackCount(),
            scale: n
          }
        },
        calculateBarValuePixels: function(e, t, n) {
          var r, i, a, o, s, l, u, c = this.chart,
            d = this._getValueScale(),
            h = d.isHorizontal(),
            f = c.data.datasets,
            p = d._getMatchingVisibleMetas(this._type),
            m = d._parseValue(f[e].data[t]),
            _ = n.minBarLength,
            y = d.options.stacked,
            g = this.getMeta().stack,
            v = void 0 === m.start ? 0 : m.max >= 0 && m.min >= 0 ? m.min : m.max,
            b = void 0 === m.start ? m.end : m.max >= 0 && m.min >= 0 ? m.max - m.min : m.min - m.max,
            w = p.length;
          if (y || void 0 === y && void 0 !== g)
            for (r = 0; r < w && (i = p[r]).index !== e; ++r) i.stack === g && (a = void 0 === (u = d._parseValue(f[i.index].data[t])).start ? u.end : u.min >= 0 && u.max >= 0 ? u.max : u.min, (m.min < 0 && a < 0 || m.max >= 0 && a > 0) && (v += a));
          return o = d.getPixelForValue(v), l = (s = d.getPixelForValue(v + b)) - o, void 0 !== _ && Math.abs(l) < _ && (l = _, s = b >= 0 && !h || b < 0 && h ? o - _ : o + _), {
            size: l,
            base: o,
            head: s,
            center: s + l / 2
          }
        },
        calculateBarIndexPixels: function(e, t, n, r) {
          var i = "flex" === r.barThickness ? function(e, t, n) {
              var r, i = t.pixels,
                a = i[e],
                o = e > 0 ? i[e - 1] : null,
                s = e < i.length - 1 ? i[e + 1] : null,
                l = n.categoryPercentage;
              return null === o && (o = a - (null === s ? t.end - t.start : s - a)), null === s && (s = a + a - o), r = a - (a - Math.min(o, s)) / 2 * l, {
                chunk: Math.abs(s - o) / 2 * l / t.stackCount,
                ratio: n.barPercentage,
                start: r
              }
            }(t, n, r) : De(t, n, r),
            a = this.getStackIndex(e, this.getMeta().stack),
            o = i.start + i.chunk * a + i.chunk / 2,
            s = Math.min(Te(r.maxBarThickness, 1 / 0), i.chunk * i.ratio);
          return {
            base: o - s / 2,
            head: o + s / 2,
            center: o,
            size: s
          }
        },
        draw: function() {
          var e = this.chart,
            t = this._getValueScale(),
            n = this.getMeta().data,
            r = this.getDataset(),
            i = n.length,
            a = 0;
          for (N.canvas.clipArea(e.ctx, e.chartArea); a < i; ++a) {
            var o = t._parseValue(r.data[a]);
            isNaN(o.min) || isNaN(o.max) || n[a].draw()
          }
          N.canvas.unclipArea(e.ctx)
        },
        _resolveDataElementOptions: function() {
          var e = this,
            t = N.extend({}, ne.prototype._resolveDataElementOptions.apply(e, arguments)),
            n = e._getIndexScale().options,
            r = e._getValueScale().options;
          return t.barPercentage = Te(n.barPercentage, t.barPercentage), t.barThickness = Te(n.barThickness, t.barThickness), t.categoryPercentage = Te(n.categoryPercentage, t.categoryPercentage), t.maxBarThickness = Te(n.maxBarThickness, t.maxBarThickness), t.minBarLength = Te(r.minBarLength, t.minBarLength), t
        }
      }),
      Ye = N.valueOrDefault,
      Ce = N.options.resolve;
    R._set("bubble", {
      hover: {
        mode: "single"
      },
      scales: {
        xAxes: [{
          type: "linear",
          position: "bottom",
          id: "x-axis-0"
        }],
        yAxes: [{
          type: "linear",
          position: "left",
          id: "y-axis-0"
        }]
      },
      tooltips: {
        callbacks: {
          title: function() {
            return ""
          },
          label: function(e, t) {
            var n = t.datasets[e.datasetIndex].label || "",
              r = t.datasets[e.datasetIndex].data[e.index];
            return n + ": (" + e.xLabel + ", " + e.yLabel + ", " + r.r + ")"
          }
        }
      }
    });
    var Oe = ne.extend({
        dataElementType: we.Point,
        _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"],
        update: function(e) {
          var t = this,
            n = t.getMeta().data;
          N.each(n, (function(n, r) {
            t.updateElement(n, r, e)
          }))
        },
        updateElement: function(e, t, n) {
          var r = this,
            i = r.getMeta(),
            a = e.custom || {},
            o = r.getScaleForId(i.xAxisID),
            s = r.getScaleForId(i.yAxisID),
            l = r._resolveDataElementOptions(e, t),
            u = r.getDataset().data[t],
            c = r.index,
            d = n ? o.getPixelForDecimal(.5) : o.getPixelForValue("object" == typeof u ? u : NaN, t, c),
            h = n ? s.getBasePixel() : s.getPixelForValue(u, t, c);
          e._xScale = o, e._yScale = s, e._options = l, e._datasetIndex = c, e._index = t, e._model = {
            backgroundColor: l.backgroundColor,
            borderColor: l.borderColor,
            borderWidth: l.borderWidth,
            hitRadius: l.hitRadius,
            pointStyle: l.pointStyle,
            rotation: l.rotation,
            radius: n ? 0 : l.radius,
            skip: a.skip || isNaN(d) || isNaN(h),
            x: d,
            y: h
          }, e.pivot()
        },
        setHoverStyle: function(e) {
          var t = e._model,
            n = e._options,
            r = N.getHoverColor;
          e.$previousStyle = {
            backgroundColor: t.backgroundColor,
            borderColor: t.borderColor,
            borderWidth: t.borderWidth,
            radius: t.radius
          }, t.backgroundColor = Ye(n.hoverBackgroundColor, r(n.backgroundColor)), t.borderColor = Ye(n.hoverBorderColor, r(n.borderColor)), t.borderWidth = Ye(n.hoverBorderWidth, n.borderWidth), t.radius = n.radius + n.hoverRadius
        },
        _resolveDataElementOptions: function(e, t) {
          var n = this,
            r = n.chart,
            i = n.getDataset(),
            a = e.custom || {},
            o = i.data[t] || {},
            s = ne.prototype._resolveDataElementOptions.apply(n, arguments),
            l = {
              chart: r,
              dataIndex: t,
              dataset: i,
              datasetIndex: n.index
            };
          return n._cachedDataOpts === s && (s = N.extend({}, s)), s.radius = Ce([a.radius, o.r, n._config.radius, r.options.elements.point.radius], l, t), s
        }
      }),
      Pe = N.valueOrDefault,
      je = Math.PI,
      Ae = 2 * je,
      Re = je / 2;
    R._set("doughnut", {
      animation: {
        animateRotate: !0,
        animateScale: !1
      },
      hover: {
        mode: "single"
      },
      legendCallback: function(e) {
        var t, n, r, i = document.createElement("ul"),
          a = e.data,
          o = a.datasets,
          s = a.labels;
        if (i.setAttribute("class", e.id + "-legend"), o.length)
          for (t = 0, n = o[0].data.length; t < n; ++t)(r = i.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[0].backgroundColor[t], s[t] && r.appendChild(document.createTextNode(s[t]));
        return i.outerHTML
      },
      legend: {
        labels: {
          generateLabels: function(e) {
            var t = e.data;
            return t.labels.length && t.datasets.length ? t.labels.map((function(n, r) {
              var i = e.getDatasetMeta(0),
                a = i.controller.getStyle(r);
              return {
                text: n,
                fillStyle: a.backgroundColor,
                strokeStyle: a.borderColor,
                lineWidth: a.borderWidth,
                hidden: isNaN(t.datasets[0].data[r]) || i.data[r].hidden,
                index: r
              }
            })) : []
          }
        },
        onClick: function(e, t) {
          var n, r, i, a = t.index,
            o = this.chart;
          for (n = 0, r = (o.data.datasets || []).length; n < r; ++n)(i = o.getDatasetMeta(n)).data[a] && (i.data[a].hidden = !i.data[a].hidden);
          o.update()
        }
      },
      cutoutPercentage: 50,
      rotation: -Re,
      circumference: Ae,
      tooltips: {
        callbacks: {
          title: function() {
            return ""
          },
          label: function(e, t) {
            var n = t.labels[e.index],
              r = ": " + t.datasets[e.datasetIndex].data[e.index];
            return N.isArray(n) ? (n = n.slice())[0] += r : n += r, n
          }
        }
      }
    });
    var Ie = ne.extend({
      dataElementType: we.Arc,
      linkScales: N.noop,
      _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
      getRingIndex: function(e) {
        for (var t = 0, n = 0; n < e; ++n) this.chart.isDatasetVisible(n) && ++t;
        return t
      },
      update: function(e) {
        var t, n, r, i, a = this,
          o = a.chart,
          s = o.chartArea,
          l = o.options,
          u = 1,
          c = 1,
          d = 0,
          h = 0,
          f = a.getMeta(),
          p = f.data,
          m = l.cutoutPercentage / 100 || 0,
          _ = l.circumference,
          y = a._getRingWeight(a.index);
        if (_ < Ae) {
          var g = l.rotation % Ae,
            v = (g += g >= je ? -Ae : g < -je ? Ae : 0) + _,
            b = Math.cos(g),
            w = Math.sin(g),
            k = Math.cos(v),
            M = Math.sin(v),
            x = g <= 0 && v >= 0 || v >= Ae,
            L = g <= Re && v >= Re || v >= Ae + Re,
            S = g <= -Re && v >= -Re || v >= je + Re,
            T = g === -je || v >= je ? -1 : Math.min(b, b * m, k, k * m),
            D = S ? -1 : Math.min(w, w * m, M, M * m),
            E = x ? 1 : Math.max(b, b * m, k, k * m),
            Y = L ? 1 : Math.max(w, w * m, M, M * m);
          u = (E - T) / 2, c = (Y - D) / 2, d = -(E + T) / 2, h = -(Y + D) / 2
        }
        for (r = 0, i = p.length; r < i; ++r) p[r]._options = a._resolveDataElementOptions(p[r], r);
        for (o.borderWidth = a.getMaxBorderWidth(), t = (s.right - s.left - o.borderWidth) / u, n = (s.bottom - s.top - o.borderWidth) / c, o.outerRadius = Math.max(Math.min(t, n) / 2, 0), o.innerRadius = Math.max(o.outerRadius * m, 0), o.radiusLength = (o.outerRadius - o.innerRadius) / (a._getVisibleDatasetWeightTotal() || 1), o.offsetX = d * o.outerRadius, o.offsetY = h * o.outerRadius, f.total = a.calculateTotal(), a.outerRadius = o.outerRadius - o.radiusLength * a._getRingWeightOffset(a.index), a.innerRadius = Math.max(a.outerRadius - o.radiusLength * y, 0), r = 0, i = p.length; r < i; ++r) a.updateElement(p[r], r, e)
      },
      updateElement: function(e, t, n) {
        var r = this,
          i = r.chart,
          a = i.chartArea,
          o = i.options,
          s = o.animation,
          l = (a.left + a.right) / 2,
          u = (a.top + a.bottom) / 2,
          c = o.rotation,
          d = o.rotation,
          h = r.getDataset(),
          f = n && s.animateRotate ? 0 : e.hidden ? 0 : r.calculateCircumference(h.data[t]) * (o.circumference / Ae),
          p = n && s.animateScale ? 0 : r.innerRadius,
          m = n && s.animateScale ? 0 : r.outerRadius,
          _ = e._options || {};
        N.extend(e, {
          _datasetIndex: r.index,
          _index: t,
          _model: {
            backgroundColor: _.backgroundColor,
            borderColor: _.borderColor,
            borderWidth: _.borderWidth,
            borderAlign: _.borderAlign,
            x: l + i.offsetX,
            y: u + i.offsetY,
            startAngle: c,
            endAngle: d,
            circumference: f,
            outerRadius: m,
            innerRadius: p,
            label: N.valueAtIndexOrDefault(h.label, t, i.data.labels[t])
          }
        });
        var y = e._model;
        n && s.animateRotate || (y.startAngle = 0 === t ? o.rotation : r.getMeta().data[t - 1]._model.endAngle, y.endAngle = y.startAngle + y.circumference), e.pivot()
      },
      calculateTotal: function() {
        var e, t = this.getDataset(),
          n = this.getMeta(),
          r = 0;
        return N.each(n.data, (function(n, i) {
          e = t.data[i], isNaN(e) || n.hidden || (r += Math.abs(e))
        })), r
      },
      calculateCircumference: function(e) {
        var t = this.getMeta().total;
        return t > 0 && !isNaN(e) ? Ae * (Math.abs(e) / t) : 0
      },
      getMaxBorderWidth: function(e) {
        var t, n, r, i, a, o, s, l, u = 0,
          c = this.chart;
        if (!e)
          for (t = 0, n = c.data.datasets.length; t < n; ++t)
            if (c.isDatasetVisible(t)) {
              e = (r = c.getDatasetMeta(t)).data, t !== this.index && (a = r.controller);
              break
            } if (!e) return 0;
        for (t = 0, n = e.length; t < n; ++t) i = e[t], a ? (a._configure(), o = a._resolveDataElementOptions(i, t)) : o = i._options, "inner" !== o.borderAlign && (s = o.borderWidth, u = (l = o.hoverBorderWidth) > (u = s > u ? s : u) ? l : u);
        return u
      },
      setHoverStyle: function(e) {
        var t = e._model,
          n = e._options,
          r = N.getHoverColor;
        e.$previousStyle = {
          backgroundColor: t.backgroundColor,
          borderColor: t.borderColor,
          borderWidth: t.borderWidth
        }, t.backgroundColor = Pe(n.hoverBackgroundColor, r(n.backgroundColor)), t.borderColor = Pe(n.hoverBorderColor, r(n.borderColor)), t.borderWidth = Pe(n.hoverBorderWidth, n.borderWidth)
      },
      _getRingWeightOffset: function(e) {
        for (var t = 0, n = 0; n < e; ++n) this.chart.isDatasetVisible(n) && (t += this._getRingWeight(n));
        return t
      },
      _getRingWeight: function(e) {
        return Math.max(Pe(this.chart.data.datasets[e].weight, 1), 0)
      },
      _getVisibleDatasetWeightTotal: function() {
        return this._getRingWeightOffset(this.chart.data.datasets.length)
      }
    });
    R._set("horizontalBar", {
      hover: {
        mode: "index",
        axis: "y"
      },
      scales: {
        xAxes: [{
          type: "linear",
          position: "bottom"
        }],
        yAxes: [{
          type: "category",
          position: "left",
          offset: !0,
          gridLines: {
            offsetGridLines: !0
          }
        }]
      },
      elements: {
        rectangle: {
          borderSkipped: "left"
        }
      },
      tooltips: {
        mode: "index",
        axis: "y"
      }
    }), R._set("global", {
      datasets: {
        horizontalBar: {
          categoryPercentage: .8,
          barPercentage: .9
        }
      }
    });
    var He = Ee.extend({
        _getValueScaleId: function() {
          return this.getMeta().xAxisID
        },
        _getIndexScaleId: function() {
          return this.getMeta().yAxisID
        }
      }),
      Fe = N.valueOrDefault,
      ze = N.options.resolve,
      Ne = N.canvas._isPointInArea;

    function We(e, t) {
      var n = e && e.options.ticks || {},
        r = n.reverse,
        i = void 0 === n.min ? t : 0,
        a = void 0 === n.max ? t : 0;
      return {
        start: r ? a : i,
        end: r ? i : a
      }
    }

    function Be(e, t, n) {
      var r = n / 2,
        i = We(e, r),
        a = We(t, r);
      return {
        top: a.end,
        right: i.end,
        bottom: a.start,
        left: i.start
      }
    }

    function Ue(e) {
      var t, n, r, i;
      return N.isObject(e) ? (t = e.top, n = e.right, r = e.bottom, i = e.left) : t = n = r = i = e, {
        top: t,
        right: n,
        bottom: r,
        left: i
      }
    }
    R._set("line", {
      showLines: !0,
      spanGaps: !1,
      hover: {
        mode: "label"
      },
      scales: {
        xAxes: [{
          type: "category",
          id: "x-axis-0"
        }],
        yAxes: [{
          type: "linear",
          id: "y-axis-0"
        }]
      }
    });
    var Ve = ne.extend({
        datasetElementType: we.Line,
        dataElementType: we.Point,
        _datasetElementOptions: ["backgroundColor", "borderCapStyle", "borderColor", "borderDash", "borderDashOffset", "borderJoinStyle", "borderWidth", "cubicInterpolationMode", "fill"],
        _dataElementOptions: {
          backgroundColor: "pointBackgroundColor",
          borderColor: "pointBorderColor",
          borderWidth: "pointBorderWidth",
          hitRadius: "pointHitRadius",
          hoverBackgroundColor: "pointHoverBackgroundColor",
          hoverBorderColor: "pointHoverBorderColor",
          hoverBorderWidth: "pointHoverBorderWidth",
          hoverRadius: "pointHoverRadius",
          pointStyle: "pointStyle",
          radius: "pointRadius",
          rotation: "pointRotation"
        },
        update: function(e) {
          var t, n, r = this,
            i = r.getMeta(),
            a = i.dataset,
            o = i.data || [],
            s = r.chart.options,
            l = r._config,
            u = r._showLine = Fe(l.showLine, s.showLines);
          for (r._xScale = r.getScaleForId(i.xAxisID), r._yScale = r.getScaleForId(i.yAxisID), u && (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), a._scale = r._yScale, a._datasetIndex = r.index, a._children = o, a._model = r._resolveDatasetElementOptions(a), a.pivot()), t = 0, n = o.length; t < n; ++t) r.updateElement(o[t], t, e);
          for (u && 0 !== a._model.tension && r.updateBezierControlPoints(), t = 0, n = o.length; t < n; ++t) o[t].pivot()
        },
        updateElement: function(e, t, n) {
          var r, i, a = this,
            o = a.getMeta(),
            s = e.custom || {},
            l = a.getDataset(),
            u = a.index,
            c = l.data[t],
            d = a._xScale,
            h = a._yScale,
            f = o.dataset._model,
            p = a._resolveDataElementOptions(e, t);
          r = d.getPixelForValue("object" == typeof c ? c : NaN, t, u), i = n ? h.getBasePixel() : a.calculatePointY(c, t, u), e._xScale = d, e._yScale = h, e._options = p, e._datasetIndex = u, e._index = t, e._model = {
            x: r,
            y: i,
            skip: s.skip || isNaN(r) || isNaN(i),
            radius: p.radius,
            pointStyle: p.pointStyle,
            rotation: p.rotation,
            backgroundColor: p.backgroundColor,
            borderColor: p.borderColor,
            borderWidth: p.borderWidth,
            tension: Fe(s.tension, f ? f.tension : 0),
            steppedLine: !!f && f.steppedLine,
            hitRadius: p.hitRadius
          }
        },
        _resolveDatasetElementOptions: function(e) {
          var t = this,
            n = t._config,
            r = e.custom || {},
            i = t.chart.options,
            a = i.elements.line,
            o = ne.prototype._resolveDatasetElementOptions.apply(t, arguments);
          return o.spanGaps = Fe(n.spanGaps, i.spanGaps), o.tension = Fe(n.lineTension, a.tension), o.steppedLine = ze([r.steppedLine, n.steppedLine, a.stepped]), o.clip = Ue(Fe(n.clip, Be(t._xScale, t._yScale, o.borderWidth))), o
        },
        calculatePointY: function(e, t, n) {
          var r, i, a, o, s, l, u, c = this.chart,
            d = this._yScale,
            h = 0,
            f = 0;
          if (d.options.stacked) {
            for (s = +d.getRightValue(e), u = (l = c._getSortedVisibleDatasetMetas()).length, r = 0; r < u && (a = l[r]).index !== n; ++r) i = c.data.datasets[a.index], "line" === a.type && a.yAxisID === d.id && ((o = +d.getRightValue(i.data[t])) < 0 ? f += o || 0 : h += o || 0);
            return s < 0 ? d.getPixelForValue(f + s) : d.getPixelForValue(h + s)
          }
          return d.getPixelForValue(e)
        },
        updateBezierControlPoints: function() {
          var e, t, n, r, i = this.chart,
            a = this.getMeta(),
            o = a.dataset._model,
            s = i.chartArea,
            l = a.data || [];

          function u(e, t, n) {
            return Math.max(Math.min(e, n), t)
          }
          if (o.spanGaps && (l = l.filter((function(e) {
              return !e._model.skip
            }))), "monotone" === o.cubicInterpolationMode) N.splineCurveMonotone(l);
          else
            for (e = 0, t = l.length; e < t; ++e) n = l[e]._model, r = N.splineCurve(N.previousItem(l, e)._model, n, N.nextItem(l, e)._model, o.tension), n.controlPointPreviousX = r.previous.x, n.controlPointPreviousY = r.previous.y, n.controlPointNextX = r.next.x, n.controlPointNextY = r.next.y;
          if (i.options.elements.line.capBezierPoints)
            for (e = 0, t = l.length; e < t; ++e) n = l[e]._model, Ne(n, s) && (e > 0 && Ne(l[e - 1]._model, s) && (n.controlPointPreviousX = u(n.controlPointPreviousX, s.left, s.right), n.controlPointPreviousY = u(n.controlPointPreviousY, s.top, s.bottom)), e < l.length - 1 && Ne(l[e + 1]._model, s) && (n.controlPointNextX = u(n.controlPointNextX, s.left, s.right), n.controlPointNextY = u(n.controlPointNextY, s.top, s.bottom)))
        },
        draw: function() {
          var e, t = this.chart,
            n = this.getMeta(),
            r = n.data || [],
            i = t.chartArea,
            a = t.canvas,
            o = 0,
            s = r.length;
          for (this._showLine && (e = n.dataset._model.clip, N.canvas.clipArea(t.ctx, {
              left: !1 === e.left ? 0 : i.left - e.left,
              right: !1 === e.right ? a.width : i.right + e.right,
              top: !1 === e.top ? 0 : i.top - e.top,
              bottom: !1 === e.bottom ? a.height : i.bottom + e.bottom
            }), n.dataset.draw(), N.canvas.unclipArea(t.ctx)); o < s; ++o) r[o].draw(i)
        },
        setHoverStyle: function(e) {
          var t = e._model,
            n = e._options,
            r = N.getHoverColor;
          e.$previousStyle = {
            backgroundColor: t.backgroundColor,
            borderColor: t.borderColor,
            borderWidth: t.borderWidth,
            radius: t.radius
          }, t.backgroundColor = Fe(n.hoverBackgroundColor, r(n.backgroundColor)), t.borderColor = Fe(n.hoverBorderColor, r(n.borderColor)), t.borderWidth = Fe(n.hoverBorderWidth, n.borderWidth), t.radius = Fe(n.hoverRadius, n.radius)
        }
      }),
      Ge = N.options.resolve;
    R._set("polarArea", {
      scale: {
        type: "radialLinear",
        angleLines: {
          display: !1
        },
        gridLines: {
          circular: !0
        },
        pointLabels: {
          display: !1
        },
        ticks: {
          beginAtZero: !0
        }
      },
      animation: {
        animateRotate: !0,
        animateScale: !0
      },
      startAngle: -.5 * Math.PI,
      legendCallback: function(e) {
        var t, n, r, i = document.createElement("ul"),
          a = e.data,
          o = a.datasets,
          s = a.labels;
        if (i.setAttribute("class", e.id + "-legend"), o.length)
          for (t = 0, n = o[0].data.length; t < n; ++t)(r = i.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o[0].backgroundColor[t], s[t] && r.appendChild(document.createTextNode(s[t]));
        return i.outerHTML
      },
      legend: {
        labels: {
          generateLabels: function(e) {
            var t = e.data;
            return t.labels.length && t.datasets.length ? t.labels.map((function(n, r) {
              var i = e.getDatasetMeta(0),
                a = i.controller.getStyle(r);
              return {
                text: n,
                fillStyle: a.backgroundColor,
                strokeStyle: a.borderColor,
                lineWidth: a.borderWidth,
                hidden: isNaN(t.datasets[0].data[r]) || i.data[r].hidden,
                index: r
              }
            })) : []
          }
        },
        onClick: function(e, t) {
          var n, r, i, a = t.index,
            o = this.chart;
          for (n = 0, r = (o.data.datasets || []).length; n < r; ++n)(i = o.getDatasetMeta(n)).data[a].hidden = !i.data[a].hidden;
          o.update()
        }
      },
      tooltips: {
        callbacks: {
          title: function() {
            return ""
          },
          label: function(e, t) {
            return t.labels[e.index] + ": " + e.yLabel
          }
        }
      }
    });
    var qe = ne.extend({
      dataElementType: we.Arc,
      linkScales: N.noop,
      _dataElementOptions: ["backgroundColor", "borderColor", "borderWidth", "borderAlign", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth"],
      _getIndexScaleId: function() {
        return this.chart.scale.id
      },
      _getValueScaleId: function() {
        return this.chart.scale.id
      },
      update: function(e) {
        var t, n, r, i = this,
          a = i.getDataset(),
          o = i.getMeta(),
          s = i.chart.options.startAngle || 0,
          l = i._starts = [],
          u = i._angles = [],
          c = o.data;
        for (i._updateRadius(), o.count = i.countVisibleElements(), t = 0, n = a.data.length; t < n; t++) l[t] = s, r = i._computeAngle(t), u[t] = r, s += r;
        for (t = 0, n = c.length; t < n; ++t) c[t]._options = i._resolveDataElementOptions(c[t], t), i.updateElement(c[t], t, e)
      },
      _updateRadius: function() {
        var e = this,
          t = e.chart,
          n = t.chartArea,
          r = t.options,
          i = Math.min(n.right - n.left, n.bottom - n.top);
        t.outerRadius = Math.max(i / 2, 0), t.innerRadius = Math.max(r.cutoutPercentage ? t.outerRadius / 100 * r.cutoutPercentage : 1, 0), t.radiusLength = (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount(), e.outerRadius = t.outerRadius - t.radiusLength * e.index, e.innerRadius = e.outerRadius - t.radiusLength
      },
      updateElement: function(e, t, n) {
        var r = this,
          i = r.chart,
          a = r.getDataset(),
          o = i.options,
          s = o.animation,
          l = i.scale,
          u = i.data.labels,
          c = l.xCenter,
          d = l.yCenter,
          h = o.startAngle,
          f = e.hidden ? 0 : l.getDistanceFromCenterForValue(a.data[t]),
          p = r._starts[t],
          m = p + (e.hidden ? 0 : r._angles[t]),
          _ = s.animateScale ? 0 : l.getDistanceFromCenterForValue(a.data[t]),
          y = e._options || {};
        N.extend(e, {
          _datasetIndex: r.index,
          _index: t,
          _scale: l,
          _model: {
            backgroundColor: y.backgroundColor,
            borderColor: y.borderColor,
            borderWidth: y.borderWidth,
            borderAlign: y.borderAlign,
            x: c,
            y: d,
            innerRadius: 0,
            outerRadius: n ? _ : f,
            startAngle: n && s.animateRotate ? h : p,
            endAngle: n && s.animateRotate ? h : m,
            label: N.valueAtIndexOrDefault(u, t, u[t])
          }
        }), e.pivot()
      },
      countVisibleElements: function() {
        var e = this.getDataset(),
          t = this.getMeta(),
          n = 0;
        return N.each(t.data, (function(t, r) {
          isNaN(e.data[r]) || t.hidden || n++
        })), n
      },
      setHoverStyle: function(e) {
        var t = e._model,
          n = e._options,
          r = N.getHoverColor,
          i = N.valueOrDefault;
        e.$previousStyle = {
          backgroundColor: t.backgroundColor,
          borderColor: t.borderColor,
          borderWidth: t.borderWidth
        }, t.backgroundColor = i(n.hoverBackgroundColor, r(n.backgroundColor)), t.borderColor = i(n.hoverBorderColor, r(n.borderColor)), t.borderWidth = i(n.hoverBorderWidth, n.borderWidth)
      },
      _computeAngle: function(e) {
        var t = this,
          n = this.getMeta().count,
          r = t.getDataset(),
          i = t.getMeta();
        if (isNaN(r.data[e]) || i.data[e].hidden) return 0;
        var a = {
          chart: t.chart,
          dataIndex: e,
          dataset: r,
          datasetIndex: t.index
        };
        return Ge([t.chart.options.elements.arc.angle, 2 * Math.PI / n], a, e)
      }
    });
    R._set("pie", N.clone(R.doughnut)), R._set("pie", {
      cutoutPercentage: 0
    });
    var $e = Ie,
      Je = N.valueOrDefault;
    R._set("radar", {
      spanGaps: !1,
      scale: {
        type: "radialLinear"
      },
      elements: {
        line: {
          fill: "start",
          tension: 0
        }
      }
    });
    var Xe = ne.extend({
      datasetElementType: we.Line,
      dataElementType: we.Point,
      linkScales: N.noop,
      _datasetElementOptions: ["backgroundColor", "borderWidth", "borderColor", "borderCapStyle", "borderDash", "borderDashOffset", "borderJoinStyle", "fill"],
      _dataElementOptions: {
        backgroundColor: "pointBackgroundColor",
        borderColor: "pointBorderColor",
        borderWidth: "pointBorderWidth",
        hitRadius: "pointHitRadius",
        hoverBackgroundColor: "pointHoverBackgroundColor",
        hoverBorderColor: "pointHoverBorderColor",
        hoverBorderWidth: "pointHoverBorderWidth",
        hoverRadius: "pointHoverRadius",
        pointStyle: "pointStyle",
        radius: "pointRadius",
        rotation: "pointRotation"
      },
      _getIndexScaleId: function() {
        return this.chart.scale.id
      },
      _getValueScaleId: function() {
        return this.chart.scale.id
      },
      update: function(e) {
        var t, n, r = this,
          i = r.getMeta(),
          a = i.dataset,
          o = i.data || [],
          s = r.chart.scale,
          l = r._config;
        for (void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), a._scale = s, a._datasetIndex = r.index, a._children = o, a._loop = !0, a._model = r._resolveDatasetElementOptions(a), a.pivot(), t = 0, n = o.length; t < n; ++t) r.updateElement(o[t], t, e);
        for (r.updateBezierControlPoints(), t = 0, n = o.length; t < n; ++t) o[t].pivot()
      },
      updateElement: function(e, t, n) {
        var r = this,
          i = e.custom || {},
          a = r.getDataset(),
          o = r.chart.scale,
          s = o.getPointPositionForValue(t, a.data[t]),
          l = r._resolveDataElementOptions(e, t),
          u = r.getMeta().dataset._model,
          c = n ? o.xCenter : s.x,
          d = n ? o.yCenter : s.y;
        e._scale = o, e._options = l, e._datasetIndex = r.index, e._index = t, e._model = {
          x: c,
          y: d,
          skip: i.skip || isNaN(c) || isNaN(d),
          radius: l.radius,
          pointStyle: l.pointStyle,
          rotation: l.rotation,
          backgroundColor: l.backgroundColor,
          borderColor: l.borderColor,
          borderWidth: l.borderWidth,
          tension: Je(i.tension, u ? u.tension : 0),
          hitRadius: l.hitRadius
        }
      },
      _resolveDatasetElementOptions: function() {
        var e = this,
          t = e._config,
          n = e.chart.options,
          r = ne.prototype._resolveDatasetElementOptions.apply(e, arguments);
        return r.spanGaps = Je(t.spanGaps, n.spanGaps), r.tension = Je(t.lineTension, n.elements.line.tension), r
      },
      updateBezierControlPoints: function() {
        var e, t, n, r, i = this.getMeta(),
          a = this.chart.chartArea,
          o = i.data || [];

        function s(e, t, n) {
          return Math.max(Math.min(e, n), t)
        }
        for (i.dataset._model.spanGaps && (o = o.filter((function(e) {
            return !e._model.skip
          }))), e = 0, t = o.length; e < t; ++e) n = o[e]._model, r = N.splineCurve(N.previousItem(o, e, !0)._model, n, N.nextItem(o, e, !0)._model, n.tension), n.controlPointPreviousX = s(r.previous.x, a.left, a.right), n.controlPointPreviousY = s(r.previous.y, a.top, a.bottom), n.controlPointNextX = s(r.next.x, a.left, a.right), n.controlPointNextY = s(r.next.y, a.top, a.bottom)
      },
      setHoverStyle: function(e) {
        var t = e._model,
          n = e._options,
          r = N.getHoverColor;
        e.$previousStyle = {
          backgroundColor: t.backgroundColor,
          borderColor: t.borderColor,
          borderWidth: t.borderWidth,
          radius: t.radius
        }, t.backgroundColor = Je(n.hoverBackgroundColor, r(n.backgroundColor)), t.borderColor = Je(n.hoverBorderColor, r(n.borderColor)), t.borderWidth = Je(n.hoverBorderWidth, n.borderWidth), t.radius = Je(n.hoverRadius, n.radius)
      }
    });
    R._set("scatter", {
      hover: {
        mode: "single"
      },
      scales: {
        xAxes: [{
          id: "x-axis-1",
          type: "linear",
          position: "bottom"
        }],
        yAxes: [{
          id: "y-axis-1",
          type: "linear",
          position: "left"
        }]
      },
      tooltips: {
        callbacks: {
          title: function() {
            return ""
          },
          label: function(e) {
            return "(" + e.xLabel + ", " + e.yLabel + ")"
          }
        }
      }
    }), R._set("global", {
      datasets: {
        scatter: {
          showLine: !1
        }
      }
    });
    var Ke = {
      bar: Ee,
      bubble: Oe,
      doughnut: Ie,
      horizontalBar: He,
      line: Ve,
      polarArea: qe,
      pie: $e,
      radar: Xe,
      scatter: Ve
    };

    function Ze(e, t) {
      return e.native ? {
        x: e.x,
        y: e.y
      } : N.getRelativePosition(e, t)
    }

    function Qe(e, t) {
      var n, r, i, a, o, s, l = e._getSortedVisibleDatasetMetas();
      for (r = 0, a = l.length; r < a; ++r)
        for (i = 0, o = (n = l[r].data).length; i < o; ++i)(s = n[i])._view.skip || t(s)
    }

    function et(e, t) {
      var n = [];
      return Qe(e, (function(e) {
        e.inRange(t.x, t.y) && n.push(e)
      })), n
    }

    function tt(e, t, n, r) {
      var i = Number.POSITIVE_INFINITY,
        a = [];
      return Qe(e, (function(e) {
        if (!n || e.inRange(t.x, t.y)) {
          var o = e.getCenterPoint(),
            s = r(t, o);
          s < i ? (a = [e], i = s) : s === i && a.push(e)
        }
      })), a
    }

    function nt(e) {
      var t = -1 !== e.indexOf("x"),
        n = -1 !== e.indexOf("y");
      return function(e, r) {
        var i = t ? Math.abs(e.x - r.x) : 0,
          a = n ? Math.abs(e.y - r.y) : 0;
        return Math.sqrt(Math.pow(i, 2) + Math.pow(a, 2))
      }
    }

    function rt(e, t, n) {
      var r = Ze(t, e);
      n.axis = n.axis || "x";
      var i = nt(n.axis),
        a = n.intersect ? et(e, r) : tt(e, r, !1, i),
        o = [];
      return a.length ? (e._getSortedVisibleDatasetMetas().forEach((function(e) {
        var t = e.data[a[0]._index];
        t && !t._view.skip && o.push(t)
      })), o) : []
    }
    var it = {
        modes: {
          single: function(e, t) {
            var n = Ze(t, e),
              r = [];
            return Qe(e, (function(e) {
              if (e.inRange(n.x, n.y)) return r.push(e), r
            })), r.slice(0, 1)
          },
          label: rt,
          index: rt,
          dataset: function(e, t, n) {
            var r = Ze(t, e);
            n.axis = n.axis || "xy";
            var i = nt(n.axis),
              a = n.intersect ? et(e, r) : tt(e, r, !1, i);
            return a.length > 0 && (a = e.getDatasetMeta(a[0]._datasetIndex).data), a
          },
          "x-axis": function(e, t) {
            return rt(e, t, {
              intersect: !1
            })
          },
          point: function(e, t) {
            return et(e, Ze(t, e))
          },
          nearest: function(e, t, n) {
            var r = Ze(t, e);
            n.axis = n.axis || "xy";
            var i = nt(n.axis);
            return tt(e, r, n.intersect, i)
          },
          x: function(e, t, n) {
            var r = Ze(t, e),
              i = [],
              a = !1;
            return Qe(e, (function(e) {
              e.inXRange(r.x) && i.push(e), e.inRange(r.x, r.y) && (a = !0)
            })), n.intersect && !a && (i = []), i
          },
          y: function(e, t, n) {
            var r = Ze(t, e),
              i = [],
              a = !1;
            return Qe(e, (function(e) {
              e.inYRange(r.y) && i.push(e), e.inRange(r.x, r.y) && (a = !0)
            })), n.intersect && !a && (i = []), i
          }
        }
      },
      at = N.extend;

    function ot(e, t) {
      return N.where(e, (function(e) {
        return e.pos === t
      }))
    }

    function st(e, t) {
      return e.sort((function(e, n) {
        var r = t ? n : e,
          i = t ? e : n;
        return r.weight === i.weight ? r.index - i.index : r.weight - i.weight
      }))
    }

    function lt(e, t, n, r) {
      return Math.max(e[n], t[n]) + Math.max(e[r], t[r])
    }

    function ut(e, t, n) {
      var r, i, a = n.box,
        o = e.maxPadding;
      if (n.size && (e[n.pos] -= n.size), n.size = n.horizontal ? a.height : a.width, e[n.pos] += n.size, a.getPadding) {
        var s = a.getPadding();
        o.top = Math.max(o.top, s.top), o.left = Math.max(o.left, s.left), o.bottom = Math.max(o.bottom, s.bottom), o.right = Math.max(o.right, s.right)
      }
      if (r = t.outerWidth - lt(o, e, "left", "right"), i = t.outerHeight - lt(o, e, "top", "bottom"), r !== e.w || i !== e.h) return e.w = r, e.h = i, n.horizontal ? r !== e.w : i !== e.h
    }

    function ct(e, t) {
      var n = t.maxPadding;

      function r(e) {
        var r = {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        };
        return e.forEach((function(e) {
          r[e] = Math.max(t[e], n[e])
        })), r
      }
      return r(e ? ["left", "right"] : ["top", "bottom"])
    }

    function dt(e, t, n) {
      var r, i, a, o, s, l, u = [];
      for (r = 0, i = e.length; r < i; ++r)(o = (a = e[r]).box).update(a.width || t.w, a.height || t.h, ct(a.horizontal, t)), ut(t, n, a) && (l = !0, u.length && (s = !0)), o.fullWidth || u.push(a);
      return s && dt(u, t, n) || l
    }

    function ht(e, t, n) {
      var r, i, a, o, s = n.padding,
        l = t.x,
        u = t.y;
      for (r = 0, i = e.length; r < i; ++r) o = (a = e[r]).box, a.horizontal ? (o.left = o.fullWidth ? s.left : t.left, o.right = o.fullWidth ? n.outerWidth - s.right : t.left + t.w, o.top = u, o.bottom = u + o.height, o.width = o.right - o.left, u = o.bottom) : (o.left = l, o.right = l + o.width, o.top = t.top, o.bottom = t.top + t.h, o.height = o.bottom - o.top, l = o.right);
      t.x = l, t.y = u
    }
    R._set("global", {
      layout: {
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      }
    });
    var ft, pt = {
        defaults: {},
        addBox: function(e, t) {
          e.boxes || (e.boxes = []), t.fullWidth = t.fullWidth || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
            return [{
              z: 0,
              draw: function() {
                t.draw.apply(t, arguments)
              }
            }]
          }, e.boxes.push(t)
        },
        removeBox: function(e, t) {
          var n = e.boxes ? e.boxes.indexOf(t) : -1; - 1 !== n && e.boxes.splice(n, 1)
        },
        configure: function(e, t, n) {
          for (var r, i = ["fullWidth", "position", "weight"], a = i.length, o = 0; o < a; ++o) r = i[o], n.hasOwnProperty(r) && (t[r] = n[r])
        },
        update: function(e, t, n) {
          if (e) {
            var r = e.options.layout || {},
              i = N.options.toPadding(r.padding),
              a = t - i.width,
              o = n - i.height,
              s = function(e) {
                var t = function(e) {
                    var t, n, r, i = [];
                    for (t = 0, n = (e || []).length; t < n; ++t) r = e[t], i.push({
                      index: t,
                      box: r,
                      pos: r.position,
                      horizontal: r.isHorizontal(),
                      weight: r.weight
                    });
                    return i
                  }(e),
                  n = st(ot(t, "left"), !0),
                  r = st(ot(t, "right")),
                  i = st(ot(t, "top"), !0),
                  a = st(ot(t, "bottom"));
                return {
                  leftAndTop: n.concat(i),
                  rightAndBottom: r.concat(a),
                  chartArea: ot(t, "chartArea"),
                  vertical: n.concat(r),
                  horizontal: i.concat(a)
                }
              }(e.boxes),
              l = s.vertical,
              u = s.horizontal,
              c = Object.freeze({
                outerWidth: t,
                outerHeight: n,
                padding: i,
                availableWidth: a,
                vBoxMaxWidth: a / 2 / l.length,
                hBoxMaxHeight: o / 2
              }),
              d = at({
                maxPadding: at({}, i),
                w: a,
                h: o,
                x: i.left,
                y: i.top
              }, i);
            ! function(e, t) {
              var n, r, i;
              for (n = 0, r = e.length; n < r; ++n)(i = e[n]).width = i.horizontal ? i.box.fullWidth && t.availableWidth : t.vBoxMaxWidth, i.height = i.horizontal && t.hBoxMaxHeight
            }(l.concat(u), c), dt(l, d, c), dt(u, d, c) && dt(l, d, c),
              function(e) {
                var t = e.maxPadding;

                function n(n) {
                  var r = Math.max(t[n] - e[n], 0);
                  return e[n] += r, r
                }
                e.y += n("top"), e.x += n("left"), n("right"), n("bottom")
              }(d), ht(s.leftAndTop, d, c), d.x += d.w, d.y += d.h, ht(s.rightAndBottom, d, c), e.chartArea = {
                left: d.left,
                top: d.top,
                right: d.left + d.w,
                bottom: d.top + d.h
              }, N.each(s.chartArea, (function(t) {
                var n = t.box;
                at(n, e.chartArea), n.update(d.w, d.h)
              }))
          }
        }
      },
      mt = (ft = Object.freeze({
        __proto__: null,
        default: "/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n"
      })) && ft.default || ft,
      _t = ["animationstart", "webkitAnimationStart"],
      yt = {
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup",
        pointerenter: "mouseenter",
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointerleave: "mouseout",
        pointerout: "mouseout"
      };

    function gt(e, t) {
      var n = N.getStyle(e, t),
        r = n && n.match(/^(\d+)(\.\d+)?px$/);
      return r ? Number(r[1]) : void 0
    }
    var vt = !! function() {
      var e = !1;
      try {
        var t = Object.defineProperty({}, "passive", {
          get: function() {
            e = !0
          }
        });
        window.addEventListener("e", null, t)
      } catch (e) {}
      return e
    }() && {
      passive: !0
    };

    function bt(e, t, n) {
      e.addEventListener(t, n, vt)
    }

    function wt(e, t, n) {
      e.removeEventListener(t, n, vt)
    }

    function kt(e, t, n, r, i) {
      return {
        type: e,
        chart: t,
        native: i || null,
        x: void 0 !== n ? n : null,
        y: void 0 !== r ? r : null
      }
    }

    function Mt(e) {
      var t = document.createElement("div");
      return t.className = e || "", t
    }

    function xt(e, t, n) {
      var r, i, a, o, s = e.$chartjs || (e.$chartjs = {}),
        l = s.resizer = function(e) {
          var t = Mt("chartjs-size-monitor"),
            n = Mt("chartjs-size-monitor-expand"),
            r = Mt("chartjs-size-monitor-shrink");
          n.appendChild(Mt()), r.appendChild(Mt()), t.appendChild(n), t.appendChild(r), t._reset = function() {
            n.scrollLeft = 1e6, n.scrollTop = 1e6, r.scrollLeft = 1e6, r.scrollTop = 1e6
          };
          var i = function() {
            t._reset(), e()
          };
          return bt(n, "scroll", i.bind(n, "expand")), bt(r, "scroll", i.bind(r, "shrink")), t
        }((r = function() {
          if (s.resizer) {
            var r = n.options.maintainAspectRatio && e.parentNode,
              i = r ? r.clientWidth : 0;
            t(kt("resize", n)), r && r.clientWidth < i && n.canvas && t(kt("resize", n))
          }
        }, a = !1, o = [], function() {
          o = Array.prototype.slice.call(arguments), i = i || this, a || (a = !0, N.requestAnimFrame.call(window, (function() {
            a = !1, r.apply(i, o)
          })))
        }));
      ! function(e, t) {
        var n = e.$chartjs || (e.$chartjs = {}),
          r = n.renderProxy = function(e) {
            "chartjs-render-animation" === e.animationName && t()
          };
        N.each(_t, (function(t) {
          bt(e, t, r)
        })), n.reflow = !!e.offsetParent, e.classList.add("chartjs-render-monitor")
      }(e, (function() {
        if (s.resizer) {
          var t = e.parentNode;
          t && t !== l.parentNode && t.insertBefore(l, t.firstChild), l._reset()
        }
      }))
    }

    function Lt(e) {
      var t = e.$chartjs || {},
        n = t.resizer;
      delete t.resizer,
        function(e) {
          var t = e.$chartjs || {},
            n = t.renderProxy;
          n && (N.each(_t, (function(t) {
            wt(e, t, n)
          })), delete t.renderProxy), e.classList.remove("chartjs-render-monitor")
        }(e), n && n.parentNode && n.parentNode.removeChild(n)
    }
    var St = {
      disableCSSInjection: !1,
      _enabled: "undefined" != typeof window && "undefined" != typeof document,
      _ensureLoaded: function(e) {
        if (!this.disableCSSInjection) {
          var t = e.getRootNode ? e.getRootNode() : document;
          ! function(e, t) {
            var n = e.$chartjs || (e.$chartjs = {});
            if (!n.containsStyles) {
              n.containsStyles = !0, t = "/* Chart.js */\n" + t;
              var r = document.createElement("style");
              r.setAttribute("type", "text/css"), r.appendChild(document.createTextNode(t)), e.appendChild(r)
            }
          }(t.host ? t : document.head, mt)
        }
      },
      acquireContext: function(e, t) {
        "string" == typeof e ? e = document.getElementById(e) : e.length && (e = e[0]), e && e.canvas && (e = e.canvas);
        var n = e && e.getContext && e.getContext("2d");
        return n && n.canvas === e ? (this._ensureLoaded(e), function(e, t) {
          var n = e.style,
            r = e.getAttribute("height"),
            i = e.getAttribute("width");
          if (e.$chartjs = {
              initial: {
                height: r,
                width: i,
                style: {
                  display: n.display,
                  height: n.height,
                  width: n.width
                }
              }
            }, n.display = n.display || "block", null === i || "" === i) {
            var a = gt(e, "width");
            void 0 !== a && (e.width = a)
          }
          if (null === r || "" === r)
            if ("" === e.style.height) e.height = e.width / (t.options.aspectRatio || 2);
            else {
              var o = gt(e, "height");
              void 0 !== a && (e.height = o)
            }
        }(e, t), n) : null
      },
      releaseContext: function(e) {
        var t = e.canvas;
        if (t.$chartjs) {
          var n = t.$chartjs.initial;
          ["height", "width"].forEach((function(e) {
            var r = n[e];
            N.isNullOrUndef(r) ? t.removeAttribute(e) : t.setAttribute(e, r)
          })), N.each(n.style || {}, (function(e, n) {
            t.style[n] = e
          })), t.width = t.width, delete t.$chartjs
        }
      },
      addEventListener: function(e, t, n) {
        var r = e.canvas;
        if ("resize" !== t) {
          var i = n.$chartjs || (n.$chartjs = {});
          bt(r, t, (i.proxies || (i.proxies = {}))[e.id + "_" + t] = function(t) {
            n(function(e, t) {
              var n = yt[e.type] || e.type,
                r = N.getRelativePosition(e, t);
              return kt(n, t, r.x, r.y, e)
            }(t, e))
          })
        } else xt(r, n, e)
      },
      removeEventListener: function(e, t, n) {
        var r = e.canvas;
        if ("resize" !== t) {
          var i = ((n.$chartjs || {}).proxies || {})[e.id + "_" + t];
          i && wt(r, t, i)
        } else Lt(r)
      }
    };
    N.addEvent = bt, N.removeEvent = wt;
    var Tt = St._enabled ? St : {
        acquireContext: function(e) {
          return e && e.canvas && (e = e.canvas), e && e.getContext("2d") || null
        }
      },
      Dt = N.extend({
        initialize: function() {},
        acquireContext: function() {},
        releaseContext: function() {},
        addEventListener: function() {},
        removeEventListener: function() {}
      }, Tt);
    R._set("global", {
      plugins: {}
    });
    var Et = {
        _plugins: [],
        _cacheId: 0,
        register: function(e) {
          var t = this._plugins;
          [].concat(e).forEach((function(e) {
            -1 === t.indexOf(e) && t.push(e)
          })), this._cacheId++
        },
        unregister: function(e) {
          var t = this._plugins;
          [].concat(e).forEach((function(e) {
            var n = t.indexOf(e); - 1 !== n && t.splice(n, 1)
          })), this._cacheId++
        },
        clear: function() {
          this._plugins = [], this._cacheId++
        },
        count: function() {
          return this._plugins.length
        },
        getAll: function() {
          return this._plugins
        },
        notify: function(e, t, n) {
          var r, i, a, o, s, l = this.descriptors(e),
            u = l.length;
          for (r = 0; r < u; ++r)
            if ("function" == typeof(s = (a = (i = l[r]).plugin)[t]) && ((o = [e].concat(n || [])).push(i.options), !1 === s.apply(a, o))) return !1;
          return !0
        },
        descriptors: function(e) {
          var t = e.$plugins || (e.$plugins = {});
          if (t.id === this._cacheId) return t.descriptors;
          var n = [],
            r = [],
            i = e && e.config || {},
            a = i.options && i.options.plugins || {};
          return this._plugins.concat(i.plugins || []).forEach((function(e) {
            if (-1 === n.indexOf(e)) {
              var t = e.id,
                i = a[t];
              !1 !== i && (!0 === i && (i = N.clone(R.global.plugins[t])), n.push(e), r.push({
                plugin: e,
                options: i || {}
              }))
            }
          })), t.descriptors = r, t.id = this._cacheId, r
        },
        _invalidate: function(e) {
          delete e.$plugins
        }
      },
      Yt = {
        constructors: {},
        defaults: {},
        registerScaleType: function(e, t, n) {
          this.constructors[e] = t, this.defaults[e] = N.clone(n)
        },
        getScaleConstructor: function(e) {
          return this.constructors.hasOwnProperty(e) ? this.constructors[e] : void 0
        },
        getScaleDefaults: function(e) {
          return this.defaults.hasOwnProperty(e) ? N.merge({}, [R.scale, this.defaults[e]]) : {}
        },
        updateScaleDefaults: function(e, t) {
          this.defaults.hasOwnProperty(e) && (this.defaults[e] = N.extend(this.defaults[e], t))
        },
        addScalesToLayout: function(e) {
          N.each(e.scales, (function(t) {
            t.fullWidth = t.options.fullWidth, t.position = t.options.position, t.weight = t.options.weight, pt.addBox(e, t)
          }))
        }
      },
      Ct = N.valueOrDefault,
      Ot = N.rtl.getRtlAdapter;
    R._set("global", {
      tooltips: {
        enabled: !0,
        custom: null,
        mode: "nearest",
        position: "average",
        intersect: !0,
        backgroundColor: "rgba(0,0,0,0.8)",
        titleFontStyle: "bold",
        titleSpacing: 2,
        titleMarginBottom: 6,
        titleFontColor: "#fff",
        titleAlign: "left",
        bodySpacing: 2,
        bodyFontColor: "#fff",
        bodyAlign: "left",
        footerFontStyle: "bold",
        footerSpacing: 2,
        footerMarginTop: 6,
        footerFontColor: "#fff",
        footerAlign: "left",
        yPadding: 6,
        xPadding: 6,
        caretPadding: 2,
        caretSize: 5,
        cornerRadius: 6,
        multiKeyBackground: "#fff",
        displayColors: !0,
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 0,
        callbacks: {
          beforeTitle: N.noop,
          title: function(e, t) {
            var n = "",
              r = t.labels,
              i = r ? r.length : 0;
            if (e.length > 0) {
              var a = e[0];
              a.label ? n = a.label : a.xLabel ? n = a.xLabel : i > 0 && a.index < i && (n = r[a.index])
            }
            return n
          },
          afterTitle: N.noop,
          beforeBody: N.noop,
          beforeLabel: N.noop,
          label: function(e, t) {
            var n = t.datasets[e.datasetIndex].label || "";
            return n && (n += ": "), N.isNullOrUndef(e.value) ? n += e.yLabel : n += e.value, n
          },
          labelColor: function(e, t) {
            var n = t.getDatasetMeta(e.datasetIndex).data[e.index]._view;
            return {
              borderColor: n.borderColor,
              backgroundColor: n.backgroundColor
            }
          },
          labelTextColor: function() {
            return this._options.bodyFontColor
          },
          afterLabel: N.noop,
          afterBody: N.noop,
          beforeFooter: N.noop,
          footer: N.noop,
          afterFooter: N.noop
        }
      }
    });
    var Pt = {
      average: function(e) {
        if (!e.length) return !1;
        var t, n, r = 0,
          i = 0,
          a = 0;
        for (t = 0, n = e.length; t < n; ++t) {
          var o = e[t];
          if (o && o.hasValue()) {
            var s = o.tooltipPosition();
            r += s.x, i += s.y, ++a
          }
        }
        return {
          x: r / a,
          y: i / a
        }
      },
      nearest: function(e, t) {
        var n, r, i, a = t.x,
          o = t.y,
          s = Number.POSITIVE_INFINITY;
        for (n = 0, r = e.length; n < r; ++n) {
          var l = e[n];
          if (l && l.hasValue()) {
            var u = l.getCenterPoint(),
              c = N.distanceBetweenPoints(t, u);
            c < s && (s = c, i = l)
          }
        }
        if (i) {
          var d = i.tooltipPosition();
          a = d.x, o = d.y
        }
        return {
          x: a,
          y: o
        }
      }
    };

    function jt(e, t) {
      return t && (N.isArray(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e
    }

    function At(e) {
      return ("string" == typeof e || e instanceof String) && e.indexOf("\n") > -1 ? e.split("\n") : e
    }

    function Rt(e) {
      var t = R.global;
      return {
        xPadding: e.xPadding,
        yPadding: e.yPadding,
        xAlign: e.xAlign,
        yAlign: e.yAlign,
        rtl: e.rtl,
        textDirection: e.textDirection,
        bodyFontColor: e.bodyFontColor,
        _bodyFontFamily: Ct(e.bodyFontFamily, t.defaultFontFamily),
        _bodyFontStyle: Ct(e.bodyFontStyle, t.defaultFontStyle),
        _bodyAlign: e.bodyAlign,
        bodyFontSize: Ct(e.bodyFontSize, t.defaultFontSize),
        bodySpacing: e.bodySpacing,
        titleFontColor: e.titleFontColor,
        _titleFontFamily: Ct(e.titleFontFamily, t.defaultFontFamily),
        _titleFontStyle: Ct(e.titleFontStyle, t.defaultFontStyle),
        titleFontSize: Ct(e.titleFontSize, t.defaultFontSize),
        _titleAlign: e.titleAlign,
        titleSpacing: e.titleSpacing,
        titleMarginBottom: e.titleMarginBottom,
        footerFontColor: e.footerFontColor,
        _footerFontFamily: Ct(e.footerFontFamily, t.defaultFontFamily),
        _footerFontStyle: Ct(e.footerFontStyle, t.defaultFontStyle),
        footerFontSize: Ct(e.footerFontSize, t.defaultFontSize),
        _footerAlign: e.footerAlign,
        footerSpacing: e.footerSpacing,
        footerMarginTop: e.footerMarginTop,
        caretSize: e.caretSize,
        cornerRadius: e.cornerRadius,
        backgroundColor: e.backgroundColor,
        opacity: 0,
        legendColorBackground: e.multiKeyBackground,
        displayColors: e.displayColors,
        borderColor: e.borderColor,
        borderWidth: e.borderWidth
      }
    }

    function It(e, t) {
      return "center" === t ? e.x + e.width / 2 : "right" === t ? e.x + e.width - e.xPadding : e.x + e.xPadding
    }

    function Ht(e) {
      return jt([], At(e))
    }
    var Ft = $.extend({
        initialize: function() {
          this._model = Rt(this._options), this._lastActive = []
        },
        getTitle: function() {
          var e = this,
            t = e._options,
            n = t.callbacks,
            r = n.beforeTitle.apply(e, arguments),
            i = n.title.apply(e, arguments),
            a = n.afterTitle.apply(e, arguments),
            o = [];
          return o = jt(o, At(r)), o = jt(o, At(i)), o = jt(o, At(a))
        },
        getBeforeBody: function() {
          return Ht(this._options.callbacks.beforeBody.apply(this, arguments))
        },
        getBody: function(e, t) {
          var n = this,
            r = n._options.callbacks,
            i = [];
          return N.each(e, (function(e) {
            var a = {
              before: [],
              lines: [],
              after: []
            };
            jt(a.before, At(r.beforeLabel.call(n, e, t))), jt(a.lines, r.label.call(n, e, t)), jt(a.after, At(r.afterLabel.call(n, e, t))), i.push(a)
          })), i
        },
        getAfterBody: function() {
          return Ht(this._options.callbacks.afterBody.apply(this, arguments))
        },
        getFooter: function() {
          var e = this,
            t = e._options.callbacks,
            n = t.beforeFooter.apply(e, arguments),
            r = t.footer.apply(e, arguments),
            i = t.afterFooter.apply(e, arguments),
            a = [];
          return a = jt(a, At(n)), a = jt(a, At(r)), a = jt(a, At(i))
        },
        update: function(e) {
          var t, n, r, i, a, o, s, l, u, c, d = this,
            h = d._options,
            f = d._model,
            p = d._model = Rt(h),
            m = d._active,
            _ = d._data,
            y = {
              xAlign: f.xAlign,
              yAlign: f.yAlign
            },
            g = {
              x: f.x,
              y: f.y
            },
            v = {
              width: f.width,
              height: f.height
            },
            b = {
              x: f.caretX,
              y: f.caretY
            };
          if (m.length) {
            p.opacity = 1;
            var w = [],
              k = [];
            b = Pt[h.position].call(d, m, d._eventPosition);
            var M = [];
            for (t = 0, n = m.length; t < n; ++t) M.push((r = m[t], i = void 0, a = void 0, o = void 0, s = void 0, l = void 0, u = void 0, c = void 0, i = r._xScale, a = r._yScale || r._scale, o = r._index, s = r._datasetIndex, l = r._chart.getDatasetMeta(s).controller, u = l._getIndexScale(), c = l._getValueScale(), {
              xLabel: i ? i.getLabelForIndex(o, s) : "",
              yLabel: a ? a.getLabelForIndex(o, s) : "",
              label: u ? "" + u.getLabelForIndex(o, s) : "",
              value: c ? "" + c.getLabelForIndex(o, s) : "",
              index: o,
              datasetIndex: s,
              x: r._model.x,
              y: r._model.y
            }));
            h.filter && (M = M.filter((function(e) {
              return h.filter(e, _)
            }))), h.itemSort && (M = M.sort((function(e, t) {
              return h.itemSort(e, t, _)
            }))), N.each(M, (function(e) {
              w.push(h.callbacks.labelColor.call(d, e, d._chart)), k.push(h.callbacks.labelTextColor.call(d, e, d._chart))
            })), p.title = d.getTitle(M, _), p.beforeBody = d.getBeforeBody(M, _), p.body = d.getBody(M, _), p.afterBody = d.getAfterBody(M, _), p.footer = d.getFooter(M, _), p.x = b.x, p.y = b.y, p.caretPadding = h.caretPadding, p.labelColors = w, p.labelTextColors = k, p.dataPoints = M, v = function(e, t) {
              var n = e._chart.ctx,
                r = 2 * t.yPadding,
                i = 0,
                a = t.body,
                o = a.reduce((function(e, t) {
                  return e + t.before.length + t.lines.length + t.after.length
                }), 0);
              o += t.beforeBody.length + t.afterBody.length;
              var s = t.title.length,
                l = t.footer.length,
                u = t.titleFontSize,
                c = t.bodyFontSize,
                d = t.footerFontSize;
              r += s * u, r += s ? (s - 1) * t.titleSpacing : 0, r += s ? t.titleMarginBottom : 0, r += o * c, r += o ? (o - 1) * t.bodySpacing : 0, r += l ? t.footerMarginTop : 0, r += l * d, r += l ? (l - 1) * t.footerSpacing : 0;
              var h = 0,
                f = function(e) {
                  i = Math.max(i, n.measureText(e).width + h)
                };
              return n.font = N.fontString(u, t._titleFontStyle, t._titleFontFamily), N.each(t.title, f), n.font = N.fontString(c, t._bodyFontStyle, t._bodyFontFamily), N.each(t.beforeBody.concat(t.afterBody), f), h = t.displayColors ? c + 2 : 0, N.each(a, (function(e) {
                N.each(e.before, f), N.each(e.lines, f), N.each(e.after, f)
              })), h = 0, n.font = N.fontString(d, t._footerFontStyle, t._footerFontFamily), N.each(t.footer, f), {
                width: i += 2 * t.xPadding,
                height: r
              }
            }(this, p), g = function(e, t, n, r) {
              var i = e.x,
                a = e.y,
                o = e.caretSize,
                s = e.caretPadding,
                l = e.cornerRadius,
                u = n.xAlign,
                c = n.yAlign,
                d = o + s,
                h = l + s;
              return "right" === u ? i -= t.width : "center" === u && ((i -= t.width / 2) + t.width > r.width && (i = r.width - t.width), i < 0 && (i = 0)), "top" === c ? a += d : a -= "bottom" === c ? t.height + d : t.height / 2, "center" === c ? "left" === u ? i += d : "right" === u && (i -= d) : "left" === u ? i -= h : "right" === u && (i += h), {
                x: i,
                y: a
              }
            }(p, v, y = function(e, t) {
              var n, r, i, a, o, s = e._model,
                l = e._chart,
                u = e._chart.chartArea,
                c = "center",
                d = "center";
              s.y < t.height ? d = "top" : s.y > l.height - t.height && (d = "bottom");
              var h = (u.left + u.right) / 2,
                f = (u.top + u.bottom) / 2;
              "center" === d ? (n = function(e) {
                return e <= h
              }, r = function(e) {
                return e > h
              }) : (n = function(e) {
                return e <= t.width / 2
              }, r = function(e) {
                return e >= l.width - t.width / 2
              }), i = function(e) {
                return e + t.width + s.caretSize + s.caretPadding > l.width
              }, a = function(e) {
                return e - t.width - s.caretSize - s.caretPadding < 0
              }, o = function(e) {
                return e <= f ? "top" : "bottom"
              }, n(s.x) ? (c = "left", i(s.x) && (c = "center", d = o(s.y))) : r(s.x) && (c = "right", a(s.x) && (c = "center", d = o(s.y)));
              var p = e._options;
              return {
                xAlign: p.xAlign ? p.xAlign : c,
                yAlign: p.yAlign ? p.yAlign : d
              }
            }(this, v), d._chart)
          } else p.opacity = 0;
          return p.xAlign = y.xAlign, p.yAlign = y.yAlign, p.x = g.x, p.y = g.y, p.width = v.width, p.height = v.height, p.caretX = b.x, p.caretY = b.y, d._model = p, e && h.custom && h.custom.call(d, p), d
        },
        drawCaret: function(e, t) {
          var n = this._chart.ctx,
            r = this._view,
            i = this.getCaretPosition(e, t, r);
          n.lineTo(i.x1, i.y1), n.lineTo(i.x2, i.y2), n.lineTo(i.x3, i.y3)
        },
        getCaretPosition: function(e, t, n) {
          var r, i, a, o, s, l, u = n.caretSize,
            c = n.cornerRadius,
            d = n.xAlign,
            h = n.yAlign,
            f = e.x,
            p = e.y,
            m = t.width,
            _ = t.height;
          if ("center" === h) s = p + _ / 2, "left" === d ? (i = (r = f) - u, a = r, o = s + u, l = s - u) : (i = (r = f + m) + u, a = r, o = s - u, l = s + u);
          else if ("left" === d ? (r = (i = f + c + u) - u, a = i + u) : "right" === d ? (r = (i = f + m - c - u) - u, a = i + u) : (r = (i = n.caretX) - u, a = i + u), "top" === h) s = (o = p) - u, l = o;
          else {
            s = (o = p + _) + u, l = o;
            var y = a;
            a = r, r = y
          }
          return {
            x1: r,
            x2: i,
            x3: a,
            y1: o,
            y2: s,
            y3: l
          }
        },
        drawTitle: function(e, t, n) {
          var r, i, a, o = t.title,
            s = o.length;
          if (s) {
            var l = Ot(t.rtl, t.x, t.width);
            for (e.x = It(t, t._titleAlign), n.textAlign = l.textAlign(t._titleAlign), n.textBaseline = "middle", r = t.titleFontSize, i = t.titleSpacing, n.fillStyle = t.titleFontColor, n.font = N.fontString(r, t._titleFontStyle, t._titleFontFamily), a = 0; a < s; ++a) n.fillText(o[a], l.x(e.x), e.y + r / 2), e.y += r + i, a + 1 === s && (e.y += t.titleMarginBottom - i)
          }
        },
        drawBody: function(e, t, n) {
          var r, i, a, o, s, l, u, c, d = t.bodyFontSize,
            h = t.bodySpacing,
            f = t._bodyAlign,
            p = t.body,
            m = t.displayColors,
            _ = 0,
            y = m ? It(t, "left") : 0,
            g = Ot(t.rtl, t.x, t.width),
            v = function(t) {
              n.fillText(t, g.x(e.x + _), e.y + d / 2), e.y += d + h
            },
            b = g.textAlign(f);
          for (n.textAlign = f, n.textBaseline = "middle", n.font = N.fontString(d, t._bodyFontStyle, t._bodyFontFamily), e.x = It(t, b), n.fillStyle = t.bodyFontColor, N.each(t.beforeBody, v), _ = m && "right" !== b ? "center" === f ? d / 2 + 1 : d + 2 : 0, s = 0, u = p.length; s < u; ++s) {
            for (r = p[s], i = t.labelTextColors[s], a = t.labelColors[s], n.fillStyle = i, N.each(r.before, v), l = 0, c = (o = r.lines).length; l < c; ++l) {
              if (m) {
                var w = g.x(y);
                n.fillStyle = t.legendColorBackground, n.fillRect(g.leftForLtr(w, d), e.y, d, d), n.lineWidth = 1, n.strokeStyle = a.borderColor, n.strokeRect(g.leftForLtr(w, d), e.y, d, d), n.fillStyle = a.backgroundColor, n.fillRect(g.leftForLtr(g.xPlus(w, 1), d - 2), e.y + 1, d - 2, d - 2), n.fillStyle = i
              }
              v(o[l])
            }
            N.each(r.after, v)
          }
          _ = 0, N.each(t.afterBody, v), e.y -= h
        },
        drawFooter: function(e, t, n) {
          var r, i, a = t.footer,
            o = a.length;
          if (o) {
            var s = Ot(t.rtl, t.x, t.width);
            for (e.x = It(t, t._footerAlign), e.y += t.footerMarginTop, n.textAlign = s.textAlign(t._footerAlign), n.textBaseline = "middle", r = t.footerFontSize, n.fillStyle = t.footerFontColor, n.font = N.fontString(r, t._footerFontStyle, t._footerFontFamily), i = 0; i < o; ++i) n.fillText(a[i], s.x(e.x), e.y + r / 2), e.y += r + t.footerSpacing
          }
        },
        drawBackground: function(e, t, n, r) {
          n.fillStyle = t.backgroundColor, n.strokeStyle = t.borderColor, n.lineWidth = t.borderWidth;
          var i = t.xAlign,
            a = t.yAlign,
            o = e.x,
            s = e.y,
            l = r.width,
            u = r.height,
            c = t.cornerRadius;
          n.beginPath(), n.moveTo(o + c, s), "top" === a && this.drawCaret(e, r), n.lineTo(o + l - c, s), n.quadraticCurveTo(o + l, s, o + l, s + c), "center" === a && "right" === i && this.drawCaret(e, r), n.lineTo(o + l, s + u - c), n.quadraticCurveTo(o + l, s + u, o + l - c, s + u), "bottom" === a && this.drawCaret(e, r), n.lineTo(o + c, s + u), n.quadraticCurveTo(o, s + u, o, s + u - c), "center" === a && "left" === i && this.drawCaret(e, r), n.lineTo(o, s + c), n.quadraticCurveTo(o, s, o + c, s), n.closePath(), n.fill(), t.borderWidth > 0 && n.stroke()
        },
        draw: function() {
          var e = this._chart.ctx,
            t = this._view;
          if (0 !== t.opacity) {
            var n = {
                width: t.width,
                height: t.height
              },
              r = {
                x: t.x,
                y: t.y
              },
              i = Math.abs(t.opacity < .001) ? 0 : t.opacity,
              a = t.title.length || t.beforeBody.length || t.body.length || t.afterBody.length || t.footer.length;
            this._options.enabled && a && (e.save(), e.globalAlpha = i, this.drawBackground(r, t, e, n), r.y += t.yPadding, N.rtl.overrideTextDirection(e, t.textDirection), this.drawTitle(r, t, e), this.drawBody(r, t, e), this.drawFooter(r, t, e), N.rtl.restoreTextDirection(e, t.textDirection), e.restore())
          }
        },
        handleEvent: function(e) {
          var t, n = this,
            r = n._options;
          return n._lastActive = n._lastActive || [], "mouseout" === e.type ? n._active = [] : (n._active = n._chart.getElementsAtEventForMode(e, r.mode, r), r.reverse && n._active.reverse()), (t = !N.arrayEquals(n._active, n._lastActive)) && (n._lastActive = n._active, (r.enabled || r.custom) && (n._eventPosition = {
            x: e.x,
            y: e.y
          }, n.update(!0), n.pivot())), t
        }
      }),
      zt = Pt,
      Nt = Ft;
    Nt.positioners = zt;
    var Wt = N.valueOrDefault;

    function Bt() {
      return N.merge({}, [].slice.call(arguments), {
        merger: function(e, t, n, r) {
          if ("xAxes" === e || "yAxes" === e) {
            var i, a, o, s = n[e].length;
            for (t[e] || (t[e] = []), i = 0; i < s; ++i) o = n[e][i], a = Wt(o.type, "xAxes" === e ? "category" : "linear"), i >= t[e].length && t[e].push({}), !t[e][i].type || o.type && o.type !== t[e][i].type ? N.merge(t[e][i], [Yt.getScaleDefaults(a), o]) : N.merge(t[e][i], o)
          } else N._merger(e, t, n, r)
        }
      })
    }

    function Ut() {
      return N.merge({}, [].slice.call(arguments), {
        merger: function(e, t, n, r) {
          var i = t[e] || {},
            a = n[e];
          "scales" === e ? t[e] = Bt(i, a) : "scale" === e ? t[e] = N.merge(i, [Yt.getScaleDefaults(a.type), a]) : N._merger(e, t, n, r)
        }
      })
    }

    function Vt(e) {
      var t = e.options;
      N.each(e.scales, (function(t) {
        pt.removeBox(e, t)
      })), t = Ut(R.global, R[e.config.type], t), e.options = e.config.options = t, e.ensureScalesHaveIDs(), e.buildOrUpdateScales(), e.tooltip._options = t.tooltips, e.tooltip.initialize()
    }

    function Gt(e, t, n) {
      var r, i = function(e) {
        return e.id === r
      };
      do {
        r = t + n++
      } while (N.findIndex(e, i) >= 0);
      return r
    }

    function qt(e) {
      return "top" === e || "bottom" === e
    }

    function $t(e, t) {
      return function(n, r) {
        return n[e] === r[e] ? n[t] - r[t] : n[e] - r[e]
      }
    }
    R._set("global", {
      elements: {},
      events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
      hover: {
        onHover: null,
        mode: "nearest",
        intersect: !0,
        animationDuration: 400
      },
      onClick: null,
      maintainAspectRatio: !0,
      responsive: !0,
      responsiveAnimationDuration: 0
    });
    var Jt = function(e, t) {
      return this.construct(e, t), this
    };
    N.extend(Jt.prototype, {
      construct: function(e, t) {
        var n = this;
        t = function(e) {
          var t = (e = e || {}).data = e.data || {};
          return t.datasets = t.datasets || [], t.labels = t.labels || [], e.options = Ut(R.global, R[e.type], e.options || {}), e
        }(t);
        var r = Dt.acquireContext(e, t),
          i = r && r.canvas,
          a = i && i.height,
          o = i && i.width;
        n.id = N.uid(), n.ctx = r, n.canvas = i, n.config = t, n.width = o, n.height = a, n.aspectRatio = a ? o / a : null, n.options = t.options, n._bufferedRender = !1, n._layers = [], n.chart = n, n.controller = n, Jt.instances[n.id] = n, Object.defineProperty(n, "data", {
          get: function() {
            return n.config.data
          },
          set: function(e) {
            n.config.data = e
          }
        }), r && i ? (n.initialize(), n.update()) : console.error("Failed to create chart: can't acquire context from the given item")
      },
      initialize: function() {
        var e = this;
        return Et.notify(e, "beforeInit"), N.retinaScale(e, e.options.devicePixelRatio), e.bindEvents(), e.options.responsive && e.resize(!0), e.initToolTip(), Et.notify(e, "afterInit"), e
      },
      clear: function() {
        return N.canvas.clear(this), this
      },
      stop: function() {
        return K.cancelAnimation(this), this
      },
      resize: function(e) {
        var t = this,
          n = t.options,
          r = t.canvas,
          i = n.maintainAspectRatio && t.aspectRatio || null,
          a = Math.max(0, Math.floor(N.getMaximumWidth(r))),
          o = Math.max(0, Math.floor(i ? a / i : N.getMaximumHeight(r)));
        if ((t.width !== a || t.height !== o) && (r.width = t.width = a, r.height = t.height = o, r.style.width = a + "px", r.style.height = o + "px", N.retinaScale(t, n.devicePixelRatio), !e)) {
          var s = {
            width: a,
            height: o
          };
          Et.notify(t, "resize", [s]), n.onResize && n.onResize(t, s), t.stop(), t.update({
            duration: n.responsiveAnimationDuration
          })
        }
      },
      ensureScalesHaveIDs: function() {
        var e = this.options,
          t = e.scales || {},
          n = e.scale;
        N.each(t.xAxes, (function(e, n) {
          e.id || (e.id = Gt(t.xAxes, "x-axis-", n))
        })), N.each(t.yAxes, (function(e, n) {
          e.id || (e.id = Gt(t.yAxes, "y-axis-", n))
        })), n && (n.id = n.id || "scale")
      },
      buildOrUpdateScales: function() {
        var e = this,
          t = e.options,
          n = e.scales || {},
          r = [],
          i = Object.keys(n).reduce((function(e, t) {
            return e[t] = !1, e
          }), {});
        t.scales && (r = r.concat((t.scales.xAxes || []).map((function(e) {
          return {
            options: e,
            dtype: "category",
            dposition: "bottom"
          }
        })), (t.scales.yAxes || []).map((function(e) {
          return {
            options: e,
            dtype: "linear",
            dposition: "left"
          }
        })))), t.scale && r.push({
          options: t.scale,
          dtype: "radialLinear",
          isDefault: !0,
          dposition: "chartArea"
        }), N.each(r, (function(t) {
          var r = t.options,
            a = r.id,
            o = Wt(r.type, t.dtype);
          qt(r.position) !== qt(t.dposition) && (r.position = t.dposition), i[a] = !0;
          var s = null;
          if (a in n && n[a].type === o)(s = n[a]).options = r, s.ctx = e.ctx, s.chart = e;
          else {
            var l = Yt.getScaleConstructor(o);
            if (!l) return;
            s = new l({
              id: a,
              type: o,
              options: r,
              ctx: e.ctx,
              chart: e
            }), n[s.id] = s
          }
          s.mergeTicksOptions(), t.isDefault && (e.scale = s)
        })), N.each(i, (function(e, t) {
          e || delete n[t]
        })), e.scales = n, Yt.addScalesToLayout(this)
      },
      buildOrUpdateControllers: function() {
        var e, t, n = this,
          r = [],
          i = n.data.datasets;
        for (e = 0, t = i.length; e < t; e++) {
          var a = i[e],
            o = n.getDatasetMeta(e),
            s = a.type || n.config.type;
          if (o.type && o.type !== s && (n.destroyDatasetMeta(e), o = n.getDatasetMeta(e)), o.type = s, o.order = a.order || 0, o.index = e, o.controller) o.controller.updateIndex(e), o.controller.linkScales();
          else {
            var l = Ke[o.type];
            if (void 0 === l) throw new Error('"' + o.type + '" is not a chart type.');
            o.controller = new l(n, e), r.push(o.controller)
          }
        }
        return r
      },
      resetElements: function() {
        var e = this;
        N.each(e.data.datasets, (function(t, n) {
          e.getDatasetMeta(n).controller.reset()
        }), e)
      },
      reset: function() {
        this.resetElements(), this.tooltip.initialize()
      },
      update: function(e) {
        var t, n, r = this;
        if (e && "object" == typeof e || (e = {
            duration: e,
            lazy: arguments[1]
          }), Vt(r), Et._invalidate(r), !1 !== Et.notify(r, "beforeUpdate")) {
          r.tooltip._data = r.data;
          var i = r.buildOrUpdateControllers();
          for (t = 0, n = r.data.datasets.length; t < n; t++) r.getDatasetMeta(t).controller.buildOrUpdateElements();
          r.updateLayout(), r.options.animation && r.options.animation.duration && N.each(i, (function(e) {
            e.reset()
          })), r.updateDatasets(), r.tooltip.initialize(), r.lastActive = [], Et.notify(r, "afterUpdate"), r._layers.sort($t("z", "_idx")), r._bufferedRender ? r._bufferedRequest = {
            duration: e.duration,
            easing: e.easing,
            lazy: e.lazy
          } : r.render(e)
        }
      },
      updateLayout: function() {
        var e = this;
        !1 !== Et.notify(e, "beforeLayout") && (pt.update(this, this.width, this.height), e._layers = [], N.each(e.boxes, (function(t) {
          t._configure && t._configure(), e._layers.push.apply(e._layers, t._layers())
        }), e), e._layers.forEach((function(e, t) {
          e._idx = t
        })), Et.notify(e, "afterScaleUpdate"), Et.notify(e, "afterLayout"))
      },
      updateDatasets: function() {
        if (!1 !== Et.notify(this, "beforeDatasetsUpdate")) {
          for (var e = 0, t = this.data.datasets.length; e < t; ++e) this.updateDataset(e);
          Et.notify(this, "afterDatasetsUpdate")
        }
      },
      updateDataset: function(e) {
        var t = this.getDatasetMeta(e),
          n = {
            meta: t,
            index: e
          };
        !1 !== Et.notify(this, "beforeDatasetUpdate", [n]) && (t.controller._update(), Et.notify(this, "afterDatasetUpdate", [n]))
      },
      render: function(e) {
        var t = this;
        e && "object" == typeof e || (e = {
          duration: e,
          lazy: arguments[1]
        });
        var n = t.options.animation,
          r = Wt(e.duration, n && n.duration),
          i = e.lazy;
        if (!1 !== Et.notify(t, "beforeRender")) {
          var a = function(e) {
            Et.notify(t, "afterRender"), N.callback(n && n.onComplete, [e], t)
          };
          if (n && r) {
            var o = new X({
              numSteps: r / 16.66,
              easing: e.easing || n.easing,
              render: function(e, t) {
                var n = N.easing.effects[t.easing],
                  r = t.currentStep,
                  i = r / t.numSteps;
                e.draw(n(i), i, r)
              },
              onAnimationProgress: n.onProgress,
              onAnimationComplete: a
            });
            K.addAnimation(t, o, r, i)
          } else t.draw(), a(new X({
            numSteps: 0,
            chart: t
          }));
          return t
        }
      },
      draw: function(e) {
        var t, n, r = this;
        if (r.clear(), N.isNullOrUndef(e) && (e = 1), r.transition(e), !(r.width <= 0 || r.height <= 0) && !1 !== Et.notify(r, "beforeDraw", [e])) {
          for (n = r._layers, t = 0; t < n.length && n[t].z <= 0; ++t) n[t].draw(r.chartArea);
          for (r.drawDatasets(e); t < n.length; ++t) n[t].draw(r.chartArea);
          r._drawTooltip(e), Et.notify(r, "afterDraw", [e])
        }
      },
      transition: function(e) {
        for (var t = 0, n = (this.data.datasets || []).length; t < n; ++t) this.isDatasetVisible(t) && this.getDatasetMeta(t).controller.transition(e);
        this.tooltip.transition(e)
      },
      _getSortedDatasetMetas: function(e) {
        var t, n, r = [];
        for (t = 0, n = (this.data.datasets || []).length; t < n; ++t) e && !this.isDatasetVisible(t) || r.push(this.getDatasetMeta(t));
        return r.sort($t("order", "index")), r
      },
      _getSortedVisibleDatasetMetas: function() {
        return this._getSortedDatasetMetas(!0)
      },
      drawDatasets: function(e) {
        var t, n;
        if (!1 !== Et.notify(this, "beforeDatasetsDraw", [e])) {
          for (n = (t = this._getSortedVisibleDatasetMetas()).length - 1; n >= 0; --n) this.drawDataset(t[n], e);
          Et.notify(this, "afterDatasetsDraw", [e])
        }
      },
      drawDataset: function(e, t) {
        var n = {
          meta: e,
          index: e.index,
          easingValue: t
        };
        !1 !== Et.notify(this, "beforeDatasetDraw", [n]) && (e.controller.draw(t), Et.notify(this, "afterDatasetDraw", [n]))
      },
      _drawTooltip: function(e) {
        var t = this.tooltip,
          n = {
            tooltip: t,
            easingValue: e
          };
        !1 !== Et.notify(this, "beforeTooltipDraw", [n]) && (t.draw(), Et.notify(this, "afterTooltipDraw", [n]))
      },
      getElementAtEvent: function(e) {
        return it.modes.single(this, e)
      },
      getElementsAtEvent: function(e) {
        return it.modes.label(this, e, {
          intersect: !0
        })
      },
      getElementsAtXAxis: function(e) {
        return it.modes["x-axis"](this, e, {
          intersect: !0
        })
      },
      getElementsAtEventForMode: function(e, t, n) {
        var r = it.modes[t];
        return "function" == typeof r ? r(this, e, n) : []
      },
      getDatasetAtEvent: function(e) {
        return it.modes.dataset(this, e, {
          intersect: !0
        })
      },
      getDatasetMeta: function(e) {
        var t = this.data.datasets[e];
        t._meta || (t._meta = {});
        var n = t._meta[this.id];
        return n || (n = t._meta[this.id] = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: t.order || 0,
          index: e
        }), n
      },
      getVisibleDatasetCount: function() {
        for (var e = 0, t = 0, n = this.data.datasets.length; t < n; ++t) this.isDatasetVisible(t) && e++;
        return e
      },
      isDatasetVisible: function(e) {
        var t = this.getDatasetMeta(e);
        return "boolean" == typeof t.hidden ? !t.hidden : !this.data.datasets[e].hidden
      },
      generateLegend: function() {
        return this.options.legendCallback(this)
      },
      destroyDatasetMeta: function(e) {
        var t = this.id,
          n = this.data.datasets[e],
          r = n._meta && n._meta[t];
        r && (r.controller.destroy(), delete n._meta[t])
      },
      destroy: function() {
        var e, t, n = this,
          r = n.canvas;
        for (n.stop(), e = 0, t = n.data.datasets.length; e < t; ++e) n.destroyDatasetMeta(e);
        r && (n.unbindEvents(), N.canvas.clear(n), Dt.releaseContext(n.ctx), n.canvas = null, n.ctx = null), Et.notify(n, "destroy"), delete Jt.instances[n.id]
      },
      toBase64Image: function() {
        return this.canvas.toDataURL.apply(this.canvas, arguments)
      },
      initToolTip: function() {
        var e = this;
        e.tooltip = new Nt({
          _chart: e,
          _chartInstance: e,
          _data: e.data,
          _options: e.options.tooltips
        }, e)
      },
      bindEvents: function() {
        var e = this,
          t = e._listeners = {},
          n = function() {
            e.eventHandler.apply(e, arguments)
          };
        N.each(e.options.events, (function(r) {
          Dt.addEventListener(e, r, n), t[r] = n
        })), e.options.responsive && (n = function() {
          e.resize()
        }, Dt.addEventListener(e, "resize", n), t.resize = n)
      },
      unbindEvents: function() {
        var e = this,
          t = e._listeners;
        t && (delete e._listeners, N.each(t, (function(t, n) {
          Dt.removeEventListener(e, n, t)
        })))
      },
      updateHoverStyle: function(e, t, n) {
        var r, i, a, o = n ? "set" : "remove";
        for (i = 0, a = e.length; i < a; ++i)(r = e[i]) && this.getDatasetMeta(r._datasetIndex).controller[o + "HoverStyle"](r);
        "dataset" === t && this.getDatasetMeta(e[0]._datasetIndex).controller["_" + o + "DatasetHoverStyle"]()
      },
      eventHandler: function(e) {
        var t = this,
          n = t.tooltip;
        if (!1 !== Et.notify(t, "beforeEvent", [e])) {
          t._bufferedRender = !0, t._bufferedRequest = null;
          var r = t.handleEvent(e);
          n && (r = n._start ? n.handleEvent(e) : r | n.handleEvent(e)), Et.notify(t, "afterEvent", [e]);
          var i = t._bufferedRequest;
          return i ? t.render(i) : r && !t.animating && (t.stop(), t.render({
            duration: t.options.hover.animationDuration,
            lazy: !0
          })), t._bufferedRender = !1, t._bufferedRequest = null, t
        }
      },
      handleEvent: function(e) {
        var t, n = this,
          r = n.options || {},
          i = r.hover;
        return n.lastActive = n.lastActive || [], "mouseout" === e.type ? n.active = [] : n.active = n.getElementsAtEventForMode(e, i.mode, i), N.callback(r.onHover || r.hover.onHover, [e.native, n.active], n), "mouseup" !== e.type && "click" !== e.type || r.onClick && r.onClick.call(n, e.native, n.active), n.lastActive.length && n.updateHoverStyle(n.lastActive, i.mode, !1), n.active.length && i.mode && n.updateHoverStyle(n.active, i.mode, !0), t = !N.arrayEquals(n.active, n.lastActive), n.lastActive = n.active, t
      }
    }), Jt.instances = {};
    var Xt = Jt;

    function Kt() {
      throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")
    }

    function Zt(e) {
      this.options = e || {}
    }
    Jt.Controller = Jt, Jt.types = {}, N.configMerge = Ut, N.scaleMerge = Bt, N.extend(Zt.prototype, {
      formats: Kt,
      parse: Kt,
      format: Kt,
      add: Kt,
      diff: Kt,
      startOf: Kt,
      endOf: Kt,
      _create: function(e) {
        return e
      }
    }), Zt.override = function(e) {
      N.extend(Zt.prototype, e)
    };
    var Qt = {
        _date: Zt
      },
      en = {
        formatters: {
          values: function(e) {
            return N.isArray(e) ? e : "" + e
          },
          linear: function(e, t, n) {
            var r = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
            Math.abs(r) > 1 && e !== Math.floor(e) && (r = e - Math.floor(e));
            var i = N.log10(Math.abs(r)),
              a = "";
            if (0 !== e)
              if (Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4) {
                var o = N.log10(Math.abs(e)),
                  s = Math.floor(o) - Math.floor(i);
                s = Math.max(Math.min(s, 20), 0), a = e.toExponential(s)
              } else {
                var l = -1 * Math.floor(i);
                l = Math.max(Math.min(l, 20), 0), a = e.toFixed(l)
              }
            else a = "0";
            return a
          },
          logarithmic: function(e, t, n) {
            var r = e / Math.pow(10, Math.floor(N.log10(e)));
            return 0 === e ? "0" : 1 === r || 2 === r || 5 === r || 0 === t || t === n.length - 1 ? e.toExponential() : ""
          }
        }
      },
      tn = N.isArray,
      nn = N.isNullOrUndef,
      rn = N.valueOrDefault,
      an = N.valueAtIndexOrDefault;

    function on(e, t, n) {
      var r, i = e.getTicks().length,
        a = Math.min(t, i - 1),
        o = e.getPixelForTick(a),
        s = e._startPixel,
        l = e._endPixel;
      if (!(n && (r = 1 === i ? Math.max(o - s, l - o) : 0 === t ? (e.getPixelForTick(1) - o) / 2 : (o - e.getPixelForTick(a - 1)) / 2, (o += a < t ? r : -r) < s - 1e-6 || o > l + 1e-6))) return o
    }

    function sn(e, t, n, r) {
      var i, a, o, s, l, u, c, d, h, f, p, m, _, y = n.length,
        g = [],
        v = [],
        b = [];
      for (i = 0; i < y; ++i) {
        if (s = n[i].label, l = n[i].major ? t.major : t.minor, e.font = u = l.string, c = r[u] = r[u] || {
            data: {},
            gc: []
          }, d = l.lineHeight, h = f = 0, nn(s) || tn(s)) {
          if (tn(s))
            for (a = 0, o = s.length; a < o; ++a) p = s[a], nn(p) || tn(p) || (h = N.measureText(e, c.data, c.gc, h, p), f += d)
        } else h = N.measureText(e, c.data, c.gc, h, s), f = d;
        g.push(h), v.push(f), b.push(d / 2)
      }

      function w(e) {
        return {
          width: g[e] || 0,
          height: v[e] || 0,
          offset: b[e] || 0
        }
      }
      return function(e, t) {
        N.each(e, (function(e) {
          var n, r = e.gc,
            i = r.length / 2;
          if (i > t) {
            for (n = 0; n < i; ++n) delete e.data[r[n]];
            r.splice(0, i)
          }
        }))
      }(r, y), m = g.indexOf(Math.max.apply(null, g)), _ = v.indexOf(Math.max.apply(null, v)), {
        first: w(0),
        last: w(y - 1),
        widest: w(m),
        highest: w(_)
      }
    }

    function ln(e) {
      return e.drawTicks ? e.tickMarkLength : 0
    }

    function un(e) {
      var t, n;
      return e.display ? (t = N.options._parseFont(e), n = N.options.toPadding(e.padding), t.lineHeight + n.height) : 0
    }

    function cn(e, t) {
      return N.extend(N.options._parseFont({
        fontFamily: rn(t.fontFamily, e.fontFamily),
        fontSize: rn(t.fontSize, e.fontSize),
        fontStyle: rn(t.fontStyle, e.fontStyle),
        lineHeight: rn(t.lineHeight, e.lineHeight)
      }), {
        color: N.options.resolve([t.fontColor, e.fontColor, R.global.defaultFontColor])
      })
    }

    function dn(e) {
      var t = cn(e, e.minor);
      return {
        minor: t,
        major: e.major.enabled ? cn(e, e.major) : t
      }
    }

    function hn(e) {
      var t, n, r, i = [];
      for (n = 0, r = e.length; n < r; ++n) void 0 !== (t = e[n])._index && i.push(t);
      return i
    }

    function fn(e, t, n, r) {
      var i, a, o, s, l = rn(n, 0),
        u = Math.min(rn(r, e.length), e.length),
        c = 0;
      for (t = Math.ceil(t), r && (t = (i = r - n) / Math.floor(i / t)), s = l; s < 0;) c++, s = Math.round(l + c * t);
      for (a = Math.max(l, 0); a < u; a++) o = e[a], a === s ? (o._index = a, c++, s = Math.round(l + c * t)) : delete o.label
    }
    R._set("scale", {
      display: !0,
      position: "left",
      offset: !1,
      gridLines: {
        display: !0,
        color: "rgba(0,0,0,0.1)",
        lineWidth: 1,
        drawBorder: !0,
        drawOnChartArea: !0,
        drawTicks: !0,
        tickMarkLength: 10,
        zeroLineWidth: 1,
        zeroLineColor: "rgba(0,0,0,0.25)",
        zeroLineBorderDash: [],
        zeroLineBorderDashOffset: 0,
        offsetGridLines: !1,
        borderDash: [],
        borderDashOffset: 0
      },
      scaleLabel: {
        display: !1,
        labelString: "",
        padding: {
          top: 4,
          bottom: 4
        }
      },
      ticks: {
        beginAtZero: !1,
        minRotation: 0,
        maxRotation: 50,
        mirror: !1,
        padding: 0,
        reverse: !1,
        display: !0,
        autoSkip: !0,
        autoSkipPadding: 0,
        labelOffset: 0,
        callback: en.formatters.values,
        minor: {},
        major: {}
      }
    });
    var pn = $.extend({
      zeroLineIndex: 0,
      getPadding: function() {
        return {
          left: this.paddingLeft || 0,
          top: this.paddingTop || 0,
          right: this.paddingRight || 0,
          bottom: this.paddingBottom || 0
        }
      },
      getTicks: function() {
        return this._ticks
      },
      _getLabels: function() {
        var e = this.chart.data;
        return this.options.labels || (this.isHorizontal() ? e.xLabels : e.yLabels) || e.labels || []
      },
      mergeTicksOptions: function() {},
      beforeUpdate: function() {
        N.callback(this.options.beforeUpdate, [this])
      },
      update: function(e, t, n) {
        var r, i, a, o, s, l = this,
          u = l.options.ticks,
          c = u.sampleSize;
        if (l.beforeUpdate(), l.maxWidth = e, l.maxHeight = t, l.margins = N.extend({
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }, n), l._ticks = null, l.ticks = null, l._labelSizes = null, l._maxLabelLines = 0, l.longestLabelWidth = 0, l.longestTextCache = l.longestTextCache || {}, l._gridLineItems = null, l._labelItems = null, l.beforeSetDimensions(), l.setDimensions(), l.afterSetDimensions(), l.beforeDataLimits(), l.determineDataLimits(), l.afterDataLimits(), l.beforeBuildTicks(), o = l.buildTicks() || [], (!(o = l.afterBuildTicks(o) || o) || !o.length) && l.ticks)
          for (o = [], r = 0, i = l.ticks.length; r < i; ++r) o.push({
            value: l.ticks[r],
            major: !1
          });
        return l._ticks = o, s = c < o.length, a = l._convertTicksToLabels(s ? function(e, t) {
          for (var n = [], r = e.length / t, i = 0, a = e.length; i < a; i += r) n.push(e[Math.floor(i)]);
          return n
        }(o, c) : o), l._configure(), l.beforeCalculateTickRotation(), l.calculateTickRotation(), l.afterCalculateTickRotation(), l.beforeFit(), l.fit(), l.afterFit(), l._ticksToDraw = u.display && (u.autoSkip || "auto" === u.source) ? l._autoSkip(o) : o, s && (a = l._convertTicksToLabels(l._ticksToDraw)), l.ticks = a, l.afterUpdate(), l.minSize
      },
      _configure: function() {
        var e, t, n = this,
          r = n.options.ticks.reverse;
        n.isHorizontal() ? (e = n.left, t = n.right) : (e = n.top, t = n.bottom, r = !r), n._startPixel = e, n._endPixel = t, n._reversePixels = r, n._length = t - e
      },
      afterUpdate: function() {
        N.callback(this.options.afterUpdate, [this])
      },
      beforeSetDimensions: function() {
        N.callback(this.options.beforeSetDimensions, [this])
      },
      setDimensions: function() {
        var e = this;
        e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0
      },
      afterSetDimensions: function() {
        N.callback(this.options.afterSetDimensions, [this])
      },
      beforeDataLimits: function() {
        N.callback(this.options.beforeDataLimits, [this])
      },
      determineDataLimits: N.noop,
      afterDataLimits: function() {
        N.callback(this.options.afterDataLimits, [this])
      },
      beforeBuildTicks: function() {
        N.callback(this.options.beforeBuildTicks, [this])
      },
      buildTicks: N.noop,
      afterBuildTicks: function(e) {
        var t = this;
        return tn(e) && e.length ? N.callback(t.options.afterBuildTicks, [t, e]) : (t.ticks = N.callback(t.options.afterBuildTicks, [t, t.ticks]) || t.ticks, e)
      },
      beforeTickToLabelConversion: function() {
        N.callback(this.options.beforeTickToLabelConversion, [this])
      },
      convertTicksToLabels: function() {
        var e = this.options.ticks;
        this.ticks = this.ticks.map(e.userCallback || e.callback, this)
      },
      afterTickToLabelConversion: function() {
        N.callback(this.options.afterTickToLabelConversion, [this])
      },
      beforeCalculateTickRotation: function() {
        N.callback(this.options.beforeCalculateTickRotation, [this])
      },
      calculateTickRotation: function() {
        var e, t, n, r, i, a, o, s = this,
          l = s.options,
          u = l.ticks,
          c = s.getTicks().length,
          d = u.minRotation || 0,
          h = u.maxRotation,
          f = d;
        !s._isVisible() || !u.display || d >= h || c <= 1 || !s.isHorizontal() ? s.labelRotation = d : (t = (e = s._getLabelSizes()).widest.width, n = e.highest.height - e.highest.offset, r = Math.min(s.maxWidth, s.chart.width - t), t + 6 > (i = l.offset ? s.maxWidth / c : r / (c - 1)) && (i = r / (c - (l.offset ? .5 : 1)), a = s.maxHeight - ln(l.gridLines) - u.padding - un(l.scaleLabel), o = Math.sqrt(t * t + n * n), f = N.toDegrees(Math.min(Math.asin(Math.min((e.highest.height + 6) / i, 1)), Math.asin(Math.min(a / o, 1)) - Math.asin(n / o))), f = Math.max(d, Math.min(h, f))), s.labelRotation = f)
      },
      afterCalculateTickRotation: function() {
        N.callback(this.options.afterCalculateTickRotation, [this])
      },
      beforeFit: function() {
        N.callback(this.options.beforeFit, [this])
      },
      fit: function() {
        var e = this,
          t = e.minSize = {
            width: 0,
            height: 0
          },
          n = e.chart,
          r = e.options,
          i = r.ticks,
          a = r.scaleLabel,
          o = r.gridLines,
          s = e._isVisible(),
          l = "bottom" === r.position,
          u = e.isHorizontal();
        if (u ? t.width = e.maxWidth : s && (t.width = ln(o) + un(a)), u ? s && (t.height = ln(o) + un(a)) : t.height = e.maxHeight, i.display && s) {
          var c = dn(i),
            d = e._getLabelSizes(),
            h = d.first,
            f = d.last,
            p = d.widest,
            m = d.highest,
            _ = .4 * c.minor.lineHeight,
            y = i.padding;
          if (u) {
            var g = 0 !== e.labelRotation,
              v = N.toRadians(e.labelRotation),
              b = Math.cos(v),
              w = Math.sin(v),
              k = w * p.width + b * (m.height - (g ? m.offset : 0)) + (g ? 0 : _);
            t.height = Math.min(e.maxHeight, t.height + k + y);
            var M, x, L = e.getPixelForTick(0) - e.left,
              S = e.right - e.getPixelForTick(e.getTicks().length - 1);
            g ? (M = l ? b * h.width + w * h.offset : w * (h.height - h.offset), x = l ? w * (f.height - f.offset) : b * f.width + w * f.offset) : (M = h.width / 2, x = f.width / 2), e.paddingLeft = Math.max((M - L) * e.width / (e.width - L), 0) + 3, e.paddingRight = Math.max((x - S) * e.width / (e.width - S), 0) + 3
          } else {
            var T = i.mirror ? 0 : p.width + y + _;
            t.width = Math.min(e.maxWidth, t.width + T), e.paddingTop = h.height / 2, e.paddingBottom = f.height / 2
          }
        }
        e.handleMargins(), u ? (e.width = e._length = n.width - e.margins.left - e.margins.right, e.height = t.height) : (e.width = t.width, e.height = e._length = n.height - e.margins.top - e.margins.bottom)
      },
      handleMargins: function() {
        var e = this;
        e.margins && (e.margins.left = Math.max(e.paddingLeft, e.margins.left), e.margins.top = Math.max(e.paddingTop, e.margins.top), e.margins.right = Math.max(e.paddingRight, e.margins.right), e.margins.bottom = Math.max(e.paddingBottom, e.margins.bottom))
      },
      afterFit: function() {
        N.callback(this.options.afterFit, [this])
      },
      isHorizontal: function() {
        var e = this.options.position;
        return "top" === e || "bottom" === e
      },
      isFullWidth: function() {
        return this.options.fullWidth
      },
      getRightValue: function(e) {
        if (nn(e)) return NaN;
        if (("number" == typeof e || e instanceof Number) && !isFinite(e)) return NaN;
        if (e)
          if (this.isHorizontal()) {
            if (void 0 !== e.x) return this.getRightValue(e.x)
          } else if (void 0 !== e.y) return this.getRightValue(e.y);
        return e
      },
      _convertTicksToLabels: function(e) {
        var t, n, r, i = this;
        for (i.ticks = e.map((function(e) {
            return e.value
          })), i.beforeTickToLabelConversion(), t = i.convertTicksToLabels(e) || i.ticks, i.afterTickToLabelConversion(), n = 0, r = e.length; n < r; ++n) e[n].label = t[n];
        return t
      },
      _getLabelSizes: function() {
        var e = this,
          t = e._labelSizes;
        return t || (e._labelSizes = t = sn(e.ctx, dn(e.options.ticks), e.getTicks(), e.longestTextCache), e.longestLabelWidth = t.widest.width), t
      },
      _parseValue: function(e) {
        var t, n, r, i;
        return tn(e) ? (t = +this.getRightValue(e[0]), n = +this.getRightValue(e[1]), r = Math.min(t, n), i = Math.max(t, n)) : (t = void 0, n = e = +this.getRightValue(e), r = e, i = e), {
          min: r,
          max: i,
          start: t,
          end: n
        }
      },
      _getScaleLabel: function(e) {
        var t = this._parseValue(e);
        return void 0 !== t.start ? "[" + t.start + ", " + t.end + "]" : +this.getRightValue(e)
      },
      getLabelForIndex: N.noop,
      getPixelForValue: N.noop,
      getValueForPixel: N.noop,
      getPixelForTick: function(e) {
        var t = this.options.offset,
          n = this._ticks.length,
          r = 1 / Math.max(n - (t ? 0 : 1), 1);
        return e < 0 || e > n - 1 ? null : this.getPixelForDecimal(e * r + (t ? r / 2 : 0))
      },
      getPixelForDecimal: function(e) {
        return this._reversePixels && (e = 1 - e), this._startPixel + e * this._length
      },
      getDecimalForPixel: function(e) {
        var t = (e - this._startPixel) / this._length;
        return this._reversePixels ? 1 - t : t
      },
      getBasePixel: function() {
        return this.getPixelForValue(this.getBaseValue())
      },
      getBaseValue: function() {
        var e = this.min,
          t = this.max;
        return this.beginAtZero ? 0 : e < 0 && t < 0 ? t : e > 0 && t > 0 ? e : 0
      },
      _autoSkip: function(e) {
        var t, n, r, i, a = this.options.ticks,
          o = this._length,
          s = a.maxTicksLimit || o / this._tickSize() + 1,
          l = a.major.enabled ? function(e) {
            var t, n, r = [];
            for (t = 0, n = e.length; t < n; t++) e[t].major && r.push(t);
            return r
          }(e) : [],
          u = l.length,
          c = l[0],
          d = l[u - 1];
        if (u > s) return function(e, t, n) {
          var r, i, a = 0,
            o = t[0];
          for (n = Math.ceil(n), r = 0; r < e.length; r++) i = e[r], r === o ? (i._index = r, o = t[++a * n]) : delete i.label
        }(e, l, u / s), hn(e);
        if (r = function(e, t, n, r) {
            var i, a, o, s, l = function(e) {
                var t, n, r = e.length;
                if (r < 2) return !1;
                for (n = e[0], t = 1; t < r; ++t)
                  if (e[t] - e[t - 1] !== n) return !1;
                return n
              }(e),
              u = (t.length - 1) / r;
            if (!l) return Math.max(u, 1);
            for (o = 0, s = (i = N.math._factorize(l)).length - 1; o < s; o++)
              if ((a = i[o]) > u) return a;
            return Math.max(u, 1)
          }(l, e, 0, s), u > 0) {
          for (t = 0, n = u - 1; t < n; t++) fn(e, r, l[t], l[t + 1]);
          return i = u > 1 ? (d - c) / (u - 1) : null, fn(e, r, N.isNullOrUndef(i) ? 0 : c - i, c), fn(e, r, d, N.isNullOrUndef(i) ? e.length : d + i), hn(e)
        }
        return fn(e, r), hn(e)
      },
      _tickSize: function() {
        var e = this.options.ticks,
          t = N.toRadians(this.labelRotation),
          n = Math.abs(Math.cos(t)),
          r = Math.abs(Math.sin(t)),
          i = this._getLabelSizes(),
          a = e.autoSkipPadding || 0,
          o = i ? i.widest.width + a : 0,
          s = i ? i.highest.height + a : 0;
        return this.isHorizontal() ? s * n > o * r ? o / n : s / r : s * r < o * n ? s / n : o / r
      },
      _isVisible: function() {
        var e, t, n, r = this.chart,
          i = this.options.display;
        if ("auto" !== i) return !!i;
        for (e = 0, t = r.data.datasets.length; e < t; ++e)
          if (r.isDatasetVisible(e) && ((n = r.getDatasetMeta(e)).xAxisID === this.id || n.yAxisID === this.id)) return !0;
        return !1
      },
      _computeGridLineItems: function(e) {
        var t, n, r, i, a, o, s, l, u, c, d, h, f, p, m, _, y, g = this,
          v = g.chart,
          b = g.options,
          w = b.gridLines,
          k = b.position,
          M = w.offsetGridLines,
          x = g.isHorizontal(),
          L = g._ticksToDraw,
          S = L.length + (M ? 1 : 0),
          T = ln(w),
          D = [],
          E = w.drawBorder ? an(w.lineWidth, 0, 0) : 0,
          Y = E / 2,
          C = N._alignPixel,
          O = function(e) {
            return C(v, e, E)
          };
        for ("top" === k ? (t = O(g.bottom), s = g.bottom - T, u = t - Y, d = O(e.top) + Y, f = e.bottom) : "bottom" === k ? (t = O(g.top), d = e.top, f = O(e.bottom) - Y, s = t + Y, u = g.top + T) : "left" === k ? (t = O(g.right), o = g.right - T, l = t - Y, c = O(e.left) + Y, h = e.right) : (t = O(g.left), c = e.left, h = O(e.right) - Y, o = t + Y, l = g.left + T), n = 0; n < S; ++n) r = L[n] || {}, nn(r.label) && n < L.length || (n === g.zeroLineIndex && b.offset === M ? (p = w.zeroLineWidth, m = w.zeroLineColor, _ = w.zeroLineBorderDash || [], y = w.zeroLineBorderDashOffset || 0) : (p = an(w.lineWidth, n, 1), m = an(w.color, n, "rgba(0,0,0,0.1)"), _ = w.borderDash || [], y = w.borderDashOffset || 0), void 0 !== (i = on(g, r._index || n, M)) && (a = C(v, i, p), x ? o = l = c = h = a : s = u = d = f = a, D.push({
          tx1: o,
          ty1: s,
          tx2: l,
          ty2: u,
          x1: c,
          y1: d,
          x2: h,
          y2: f,
          width: p,
          color: m,
          borderDash: _,
          borderDashOffset: y
        })));
        return D.ticksLength = S, D.borderValue = t, D
      },
      _computeLabelItems: function() {
        var e, t, n, r, i, a, o, s, l, u, c, d, h = this,
          f = h.options,
          p = f.ticks,
          m = f.position,
          _ = p.mirror,
          y = h.isHorizontal(),
          g = h._ticksToDraw,
          v = dn(p),
          b = p.padding,
          w = ln(f.gridLines),
          k = -N.toRadians(h.labelRotation),
          M = [];
        for ("top" === m ? (a = h.bottom - w - b, o = k ? "left" : "center") : "bottom" === m ? (a = h.top + w + b, o = k ? "right" : "center") : "left" === m ? (i = h.right - (_ ? 0 : w) - b, o = _ ? "left" : "right") : (i = h.left + (_ ? 0 : w) + b, o = _ ? "right" : "left"), e = 0, t = g.length; e < t; ++e) r = (n = g[e]).label, nn(r) || (s = h.getPixelForTick(n._index || e) + p.labelOffset, u = (l = n.major ? v.major : v.minor).lineHeight, c = tn(r) ? r.length : 1, y ? (i = s, d = "top" === m ? ((k ? 1 : .5) - c) * u : (k ? 0 : .5) * u) : (a = s, d = (1 - c) * u / 2), M.push({
          x: i,
          y: a,
          rotation: k,
          label: r,
          font: l,
          textOffset: d,
          textAlign: o
        }));
        return M
      },
      _drawGrid: function(e) {
        var t = this,
          n = t.options.gridLines;
        if (n.display) {
          var r, i, a, o, s, l = t.ctx,
            u = t.chart,
            c = N._alignPixel,
            d = n.drawBorder ? an(n.lineWidth, 0, 0) : 0,
            h = t._gridLineItems || (t._gridLineItems = t._computeGridLineItems(e));
          for (a = 0, o = h.length; a < o; ++a) r = (s = h[a]).width, i = s.color, r && i && (l.save(), l.lineWidth = r, l.strokeStyle = i, l.setLineDash && (l.setLineDash(s.borderDash), l.lineDashOffset = s.borderDashOffset), l.beginPath(), n.drawTicks && (l.moveTo(s.tx1, s.ty1), l.lineTo(s.tx2, s.ty2)), n.drawOnChartArea && (l.moveTo(s.x1, s.y1), l.lineTo(s.x2, s.y2)), l.stroke(), l.restore());
          if (d) {
            var f, p, m, _, y = d,
              g = an(n.lineWidth, h.ticksLength - 1, 1),
              v = h.borderValue;
            t.isHorizontal() ? (f = c(u, t.left, y) - y / 2, p = c(u, t.right, g) + g / 2, m = _ = v) : (m = c(u, t.top, y) - y / 2, _ = c(u, t.bottom, g) + g / 2, f = p = v), l.lineWidth = d, l.strokeStyle = an(n.color, 0), l.beginPath(), l.moveTo(f, m), l.lineTo(p, _), l.stroke()
          }
        }
      },
      _drawLabels: function() {
        var e = this;
        if (e.options.ticks.display) {
          var t, n, r, i, a, o, s, l, u = e.ctx,
            c = e._labelItems || (e._labelItems = e._computeLabelItems());
          for (t = 0, r = c.length; t < r; ++t) {
            if (o = (a = c[t]).font, u.save(), u.translate(a.x, a.y), u.rotate(a.rotation), u.font = o.string, u.fillStyle = o.color, u.textBaseline = "middle", u.textAlign = a.textAlign, s = a.label, l = a.textOffset, tn(s))
              for (n = 0, i = s.length; n < i; ++n) u.fillText("" + s[n], 0, l), l += o.lineHeight;
            else u.fillText(s, 0, l);
            u.restore()
          }
        }
      },
      _drawTitle: function() {
        var e = this,
          t = e.ctx,
          n = e.options,
          r = n.scaleLabel;
        if (r.display) {
          var i, a, o = rn(r.fontColor, R.global.defaultFontColor),
            s = N.options._parseFont(r),
            l = N.options.toPadding(r.padding),
            u = s.lineHeight / 2,
            c = n.position,
            d = 0;
          if (e.isHorizontal()) i = e.left + e.width / 2, a = "bottom" === c ? e.bottom - u - l.bottom : e.top + u + l.top;
          else {
            var h = "left" === c;
            i = h ? e.left + u + l.top : e.right - u - l.top, a = e.top + e.height / 2, d = h ? -.5 * Math.PI : .5 * Math.PI
          }
          t.save(), t.translate(i, a), t.rotate(d), t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = o, t.font = s.string, t.fillText(r.labelString, 0, 0), t.restore()
        }
      },
      draw: function(e) {
        this._isVisible() && (this._drawGrid(e), this._drawTitle(), this._drawLabels())
      },
      _layers: function() {
        var e = this,
          t = e.options,
          n = t.ticks && t.ticks.z || 0,
          r = t.gridLines && t.gridLines.z || 0;
        return e._isVisible() && n !== r && e.draw === e._draw ? [{
          z: r,
          draw: function() {
            e._drawGrid.apply(e, arguments), e._drawTitle.apply(e, arguments)
          }
        }, {
          z: n,
          draw: function() {
            e._drawLabels.apply(e, arguments)
          }
        }] : [{
          z: n,
          draw: function() {
            e.draw.apply(e, arguments)
          }
        }]
      },
      _getMatchingVisibleMetas: function(e) {
        var t = this,
          n = t.isHorizontal();
        return t.chart._getSortedVisibleDatasetMetas().filter((function(r) {
          return (!e || r.type === e) && (n ? r.xAxisID === t.id : r.yAxisID === t.id)
        }))
      }
    });
    pn.prototype._draw = pn.prototype.draw;
    var mn = pn,
      _n = N.isNullOrUndef,
      yn = mn.extend({
        determineDataLimits: function() {
          var e, t = this,
            n = t._getLabels(),
            r = t.options.ticks,
            i = r.min,
            a = r.max,
            o = 0,
            s = n.length - 1;
          void 0 !== i && (e = n.indexOf(i)) >= 0 && (o = e), void 0 !== a && (e = n.indexOf(a)) >= 0 && (s = e), t.minIndex = o, t.maxIndex = s, t.min = n[o], t.max = n[s]
        },
        buildTicks: function() {
          var e = this._getLabels(),
            t = this.minIndex,
            n = this.maxIndex;
          this.ticks = 0 === t && n === e.length - 1 ? e : e.slice(t, n + 1)
        },
        getLabelForIndex: function(e, t) {
          var n = this.chart;
          return n.getDatasetMeta(t).controller._getValueScaleId() === this.id ? this.getRightValue(n.data.datasets[t].data[e]) : this._getLabels()[e]
        },
        _configure: function() {
          var e = this,
            t = e.options.offset,
            n = e.ticks;
          mn.prototype._configure.call(e), e.isHorizontal() || (e._reversePixels = !e._reversePixels), n && (e._startValue = e.minIndex - (t ? .5 : 0), e._valueRange = Math.max(n.length - (t ? 0 : 1), 1))
        },
        getPixelForValue: function(e, t, n) {
          var r, i, a, o = this;
          return _n(t) || _n(n) || (e = o.chart.data.datasets[n].data[t]), _n(e) || (r = o.isHorizontal() ? e.x : e.y), (void 0 !== r || void 0 !== e && isNaN(t)) && (i = o._getLabels(), e = N.valueOrDefault(r, e), t = -1 !== (a = i.indexOf(e)) ? a : t, isNaN(t) && (t = e)), o.getPixelForDecimal((t - o._startValue) / o._valueRange)
        },
        getPixelForTick: function(e) {
          var t = this.ticks;
          return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e], e + this.minIndex)
        },
        getValueForPixel: function(e) {
          var t = Math.round(this._startValue + this.getDecimalForPixel(e) * this._valueRange);
          return Math.min(Math.max(t, 0), this.ticks.length - 1)
        },
        getBasePixel: function() {
          return this.bottom
        }
      }),
      gn = {
        position: "bottom"
      };
    yn._defaults = gn;
    var vn = N.noop,
      bn = N.isNullOrUndef,
      wn = mn.extend({
        getRightValue: function(e) {
          return "string" == typeof e ? +e : mn.prototype.getRightValue.call(this, e)
        },
        handleTickRangeOptions: function() {
          var e = this,
            t = e.options.ticks;
          if (t.beginAtZero) {
            var n = N.sign(e.min),
              r = N.sign(e.max);
            n < 0 && r < 0 ? e.max = 0 : n > 0 && r > 0 && (e.min = 0)
          }
          var i = void 0 !== t.min || void 0 !== t.suggestedMin,
            a = void 0 !== t.max || void 0 !== t.suggestedMax;
          void 0 !== t.min ? e.min = t.min : void 0 !== t.suggestedMin && (null === e.min ? e.min = t.suggestedMin : e.min = Math.min(e.min, t.suggestedMin)), void 0 !== t.max ? e.max = t.max : void 0 !== t.suggestedMax && (null === e.max ? e.max = t.suggestedMax : e.max = Math.max(e.max, t.suggestedMax)), i !== a && e.min >= e.max && (i ? e.max = e.min + 1 : e.min = e.max - 1), e.min === e.max && (e.max++, t.beginAtZero || e.min--)
        },
        getTickLimit: function() {
          var e, t = this.options.ticks,
            n = t.stepSize,
            r = t.maxTicksLimit;
          return n ? e = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1 : (e = this._computeTickLimit(), r = r || 11), r && (e = Math.min(r, e)), e
        },
        _computeTickLimit: function() {
          return Number.POSITIVE_INFINITY
        },
        handleDirectionalChanges: vn,
        buildTicks: function() {
          var e = this,
            t = e.options.ticks,
            n = e.getTickLimit(),
            r = {
              maxTicks: n = Math.max(2, n),
              min: t.min,
              max: t.max,
              precision: t.precision,
              stepSize: N.valueOrDefault(t.fixedStepSize, t.stepSize)
            },
            i = e.ticks = function(e, t) {
              var n, r, i, a, o = [],
                s = e.stepSize,
                l = s || 1,
                u = e.maxTicks - 1,
                c = e.min,
                d = e.max,
                h = e.precision,
                f = t.min,
                p = t.max,
                m = N.niceNum((p - f) / u / l) * l;
              if (m < 1e-14 && bn(c) && bn(d)) return [f, p];
              (a = Math.ceil(p / m) - Math.floor(f / m)) > u && (m = N.niceNum(a * m / u / l) * l), s || bn(h) ? n = Math.pow(10, N._decimalPlaces(m)) : (n = Math.pow(10, h), m = Math.ceil(m * n) / n), r = Math.floor(f / m) * m, i = Math.ceil(p / m) * m, s && (!bn(c) && N.almostWhole(c / m, m / 1e3) && (r = c), !bn(d) && N.almostWhole(d / m, m / 1e3) && (i = d)), a = (i - r) / m, a = N.almostEquals(a, Math.round(a), m / 1e3) ? Math.round(a) : Math.ceil(a), r = Math.round(r * n) / n, i = Math.round(i * n) / n, o.push(bn(c) ? r : c);
              for (var _ = 1; _ < a; ++_) o.push(Math.round((r + _ * m) * n) / n);
              return o.push(bn(d) ? i : d), o
            }(r, e);
          e.handleDirectionalChanges(), e.max = N.max(i), e.min = N.min(i), t.reverse ? (i.reverse(), e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max)
        },
        convertTicksToLabels: function() {
          var e = this;
          e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), mn.prototype.convertTicksToLabels.call(e)
        },
        _configure: function() {
          var e, t = this,
            n = t.getTicks(),
            r = t.min,
            i = t.max;
          mn.prototype._configure.call(t), t.options.offset && n.length && (r -= e = (i - r) / Math.max(n.length - 1, 1) / 2, i += e), t._startValue = r, t._endValue = i, t._valueRange = i - r
        }
      }),
      kn = {
        position: "left",
        ticks: {
          callback: en.formatters.linear
        }
      };

    function Mn(e, t, n, r) {
      var i, a, o = e.options,
        s = function(e, t, n) {
          var r = [n.type, void 0 === t && void 0 === n.stack ? n.index : "", n.stack].join(".");
          return void 0 === e[r] && (e[r] = {
            pos: [],
            neg: []
          }), e[r]
        }(t, o.stacked, n),
        l = s.pos,
        u = s.neg,
        c = r.length;
      for (i = 0; i < c; ++i) a = e._parseValue(r[i]), isNaN(a.min) || isNaN(a.max) || n.data[i].hidden || (l[i] = l[i] || 0, u[i] = u[i] || 0, o.relativePoints ? l[i] = 100 : a.min < 0 || a.max < 0 ? u[i] += a.min : l[i] += a.max)
    }

    function xn(e, t, n) {
      var r, i, a = n.length;
      for (r = 0; r < a; ++r) i = e._parseValue(n[r]), isNaN(i.min) || isNaN(i.max) || t.data[r].hidden || (e.min = Math.min(e.min, i.min), e.max = Math.max(e.max, i.max))
    }
    var Ln = wn.extend({
        determineDataLimits: function() {
          var e, t, n, r, i = this,
            a = i.options,
            o = i.chart.data.datasets,
            s = i._getMatchingVisibleMetas(),
            l = a.stacked,
            u = {},
            c = s.length;
          if (i.min = Number.POSITIVE_INFINITY, i.max = Number.NEGATIVE_INFINITY, void 0 === l)
            for (e = 0; !l && e < c; ++e) l = void 0 !== (t = s[e]).stack;
          for (e = 0; e < c; ++e) n = o[(t = s[e]).index].data, l ? Mn(i, u, t, n) : xn(i, t, n);
          N.each(u, (function(e) {
            r = e.pos.concat(e.neg), i.min = Math.min(i.min, N.min(r)), i.max = Math.max(i.max, N.max(r))
          })), i.min = N.isFinite(i.min) && !isNaN(i.min) ? i.min : 0, i.max = N.isFinite(i.max) && !isNaN(i.max) ? i.max : 1, i.handleTickRangeOptions()
        },
        _computeTickLimit: function() {
          var e;
          return this.isHorizontal() ? Math.ceil(this.width / 40) : (e = N.options._parseFont(this.options.ticks), Math.ceil(this.height / e.lineHeight))
        },
        handleDirectionalChanges: function() {
          this.isHorizontal() || this.ticks.reverse()
        },
        getLabelForIndex: function(e, t) {
          return this._getScaleLabel(this.chart.data.datasets[t].data[e])
        },
        getPixelForValue: function(e) {
          return this.getPixelForDecimal((+this.getRightValue(e) - this._startValue) / this._valueRange)
        },
        getValueForPixel: function(e) {
          return this._startValue + this.getDecimalForPixel(e) * this._valueRange
        },
        getPixelForTick: function(e) {
          var t = this.ticksAsNumbers;
          return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e])
        }
      }),
      Sn = kn;
    Ln._defaults = Sn;
    var Tn = N.valueOrDefault,
      Dn = N.math.log10,
      En = {
        position: "left",
        ticks: {
          callback: en.formatters.logarithmic
        }
      };

    function Yn(e, t) {
      return N.isFinite(e) && e >= 0 ? e : t
    }
    var Cn = mn.extend({
        determineDataLimits: function() {
          var e, t, n, r, i, a, o = this,
            s = o.options,
            l = o.chart,
            u = l.data.datasets,
            c = o.isHorizontal();

          function d(e) {
            return c ? e.xAxisID === o.id : e.yAxisID === o.id
          }
          o.min = Number.POSITIVE_INFINITY, o.max = Number.NEGATIVE_INFINITY, o.minNotZero = Number.POSITIVE_INFINITY;
          var h = s.stacked;
          if (void 0 === h)
            for (e = 0; e < u.length; e++)
              if (t = l.getDatasetMeta(e), l.isDatasetVisible(e) && d(t) && void 0 !== t.stack) {
                h = !0;
                break
              } if (s.stacked || h) {
            var f = {};
            for (e = 0; e < u.length; e++) {
              var p = [(t = l.getDatasetMeta(e)).type, void 0 === s.stacked && void 0 === t.stack ? e : "", t.stack].join(".");
              if (l.isDatasetVisible(e) && d(t))
                for (void 0 === f[p] && (f[p] = []), i = 0, a = (r = u[e].data).length; i < a; i++) {
                  var m = f[p];
                  n = o._parseValue(r[i]), isNaN(n.min) || isNaN(n.max) || t.data[i].hidden || n.min < 0 || n.max < 0 || (m[i] = m[i] || 0, m[i] += n.max)
                }
            }
            N.each(f, (function(e) {
              if (e.length > 0) {
                var t = N.min(e),
                  n = N.max(e);
                o.min = Math.min(o.min, t), o.max = Math.max(o.max, n)
              }
            }))
          } else
            for (e = 0; e < u.length; e++)
              if (t = l.getDatasetMeta(e), l.isDatasetVisible(e) && d(t))
                for (i = 0, a = (r = u[e].data).length; i < a; i++) n = o._parseValue(r[i]), isNaN(n.min) || isNaN(n.max) || t.data[i].hidden || n.min < 0 || n.max < 0 || (o.min = Math.min(n.min, o.min), o.max = Math.max(n.max, o.max), 0 !== n.min && (o.minNotZero = Math.min(n.min, o.minNotZero)));
          o.min = N.isFinite(o.min) ? o.min : null, o.max = N.isFinite(o.max) ? o.max : null, o.minNotZero = N.isFinite(o.minNotZero) ? o.minNotZero : null, this.handleTickRangeOptions()
        },
        handleTickRangeOptions: function() {
          var e = this,
            t = e.options.ticks;
          e.min = Yn(t.min, e.min), e.max = Yn(t.max, e.max), e.min === e.max && (0 !== e.min && null !== e.min ? (e.min = Math.pow(10, Math.floor(Dn(e.min)) - 1), e.max = Math.pow(10, Math.floor(Dn(e.max)) + 1)) : (e.min = 1, e.max = 10)), null === e.min && (e.min = Math.pow(10, Math.floor(Dn(e.max)) - 1)), null === e.max && (e.max = 0 !== e.min ? Math.pow(10, Math.floor(Dn(e.min)) + 1) : 10), null === e.minNotZero && (e.min > 0 ? e.minNotZero = e.min : e.max < 1 ? e.minNotZero = Math.pow(10, Math.floor(Dn(e.max))) : e.minNotZero = 1)
        },
        buildTicks: function() {
          var e = this,
            t = e.options.ticks,
            n = !e.isHorizontal(),
            r = {
              min: Yn(t.min),
              max: Yn(t.max)
            },
            i = e.ticks = function(e, t) {
              var n, r, i = [],
                a = Tn(e.min, Math.pow(10, Math.floor(Dn(t.min)))),
                o = Math.floor(Dn(t.max)),
                s = Math.ceil(t.max / Math.pow(10, o));
              0 === a ? (n = Math.floor(Dn(t.minNotZero)), r = Math.floor(t.minNotZero / Math.pow(10, n)), i.push(a), a = r * Math.pow(10, n)) : (n = Math.floor(Dn(a)), r = Math.floor(a / Math.pow(10, n)));
              var l = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
              do {
                i.push(a), 10 == ++r && (r = 1, l = ++n >= 0 ? 1 : l), a = Math.round(r * Math.pow(10, n) * l) / l
              } while (n < o || n === o && r < s);
              var u = Tn(e.max, a);
              return i.push(u), i
            }(r, e);
          e.max = N.max(i), e.min = N.min(i), t.reverse ? (n = !n, e.start = e.max, e.end = e.min) : (e.start = e.min, e.end = e.max), n && i.reverse()
        },
        convertTicksToLabels: function() {
          this.tickValues = this.ticks.slice(), mn.prototype.convertTicksToLabels.call(this)
        },
        getLabelForIndex: function(e, t) {
          return this._getScaleLabel(this.chart.data.datasets[t].data[e])
        },
        getPixelForTick: function(e) {
          var t = this.tickValues;
          return e < 0 || e > t.length - 1 ? null : this.getPixelForValue(t[e])
        },
        _getFirstTickValue: function(e) {
          var t = Math.floor(Dn(e));
          return Math.floor(e / Math.pow(10, t)) * Math.pow(10, t)
        },
        _configure: function() {
          var e = this,
            t = e.min,
            n = 0;
          mn.prototype._configure.call(e), 0 === t && (t = e._getFirstTickValue(e.minNotZero), n = Tn(e.options.ticks.fontSize, R.global.defaultFontSize) / e._length), e._startValue = Dn(t), e._valueOffset = n, e._valueRange = (Dn(e.max) - Dn(t)) / (1 - n)
        },
        getPixelForValue: function(e) {
          var t = this,
            n = 0;
          return (e = +t.getRightValue(e)) > t.min && e > 0 && (n = (Dn(e) - t._startValue) / t._valueRange + t._valueOffset), t.getPixelForDecimal(n)
        },
        getValueForPixel: function(e) {
          var t = this,
            n = t.getDecimalForPixel(e);
          return 0 === n && 0 === t.min ? 0 : Math.pow(10, t._startValue + (n - t._valueOffset) * t._valueRange)
        }
      }),
      On = En;
    Cn._defaults = On;
    var Pn = N.valueOrDefault,
      jn = N.valueAtIndexOrDefault,
      An = N.options.resolve,
      Rn = {
        display: !0,
        animate: !0,
        position: "chartArea",
        angleLines: {
          display: !0,
          color: "rgba(0,0,0,0.1)",
          lineWidth: 1,
          borderDash: [],
          borderDashOffset: 0
        },
        gridLines: {
          circular: !1
        },
        ticks: {
          showLabelBackdrop: !0,
          backdropColor: "rgba(255,255,255,0.75)",
          backdropPaddingY: 2,
          backdropPaddingX: 2,
          callback: en.formatters.linear
        },
        pointLabels: {
          display: !0,
          fontSize: 10,
          callback: function(e) {
            return e
          }
        }
      };

    function In(e) {
      var t = e.ticks;
      return t.display && e.display ? Pn(t.fontSize, R.global.defaultFontSize) + 2 * t.backdropPaddingY : 0
    }

    function Hn(e, t, n, r, i) {
      return e === r || e === i ? {
        start: t - n / 2,
        end: t + n / 2
      } : e < r || e > i ? {
        start: t - n,
        end: t
      } : {
        start: t,
        end: t + n
      }
    }

    function Fn(e) {
      return 0 === e || 180 === e ? "center" : e < 180 ? "left" : "right"
    }

    function zn(e, t, n, r) {
      var i, a, o = n.y + r / 2;
      if (N.isArray(t))
        for (i = 0, a = t.length; i < a; ++i) e.fillText(t[i], n.x, o), o += r;
      else e.fillText(t, n.x, o)
    }

    function Nn(e, t, n) {
      90 === e || 270 === e ? n.y -= t.h / 2 : (e > 270 || e < 90) && (n.y -= t.h)
    }

    function Wn(e) {
      return N.isNumber(e) ? e : 0
    }
    var Bn = wn.extend({
        setDimensions: function() {
          var e = this;
          e.width = e.maxWidth, e.height = e.maxHeight, e.paddingTop = In(e.options) / 2, e.xCenter = Math.floor(e.width / 2), e.yCenter = Math.floor((e.height - e.paddingTop) / 2), e.drawingArea = Math.min(e.height - e.paddingTop, e.width) / 2
        },
        determineDataLimits: function() {
          var e = this,
            t = e.chart,
            n = Number.POSITIVE_INFINITY,
            r = Number.NEGATIVE_INFINITY;
          N.each(t.data.datasets, (function(i, a) {
            if (t.isDatasetVisible(a)) {
              var o = t.getDatasetMeta(a);
              N.each(i.data, (function(t, i) {
                var a = +e.getRightValue(t);
                isNaN(a) || o.data[i].hidden || (n = Math.min(a, n), r = Math.max(a, r))
              }))
            }
          })), e.min = n === Number.POSITIVE_INFINITY ? 0 : n, e.max = r === Number.NEGATIVE_INFINITY ? 0 : r, e.handleTickRangeOptions()
        },
        _computeTickLimit: function() {
          return Math.ceil(this.drawingArea / In(this.options))
        },
        convertTicksToLabels: function() {
          var e = this;
          wn.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map((function() {
            var t = N.callback(e.options.pointLabels.callback, arguments, e);
            return t || 0 === t ? t : ""
          }))
        },
        getLabelForIndex: function(e, t) {
          return +this.getRightValue(this.chart.data.datasets[t].data[e])
        },
        fit: function() {
          var e = this.options;
          e.display && e.pointLabels.display ? function(e) {
            var t, n, r, i = N.options._parseFont(e.options.pointLabels),
              a = {
                l: 0,
                r: e.width,
                t: 0,
                b: e.height - e.paddingTop
              },
              o = {};
            e.ctx.font = i.string, e._pointLabelSizes = [];
            var s, l, u, c = e.chart.data.labels.length;
            for (t = 0; t < c; t++) {
              r = e.getPointPosition(t, e.drawingArea + 5), s = e.ctx, l = i.lineHeight, u = e.pointLabels[t], n = N.isArray(u) ? {
                w: N.longestText(s, s.font, u),
                h: u.length * l
              } : {
                w: s.measureText(u).width,
                h: l
              }, e._pointLabelSizes[t] = n;
              var d = e.getIndexAngle(t),
                h = N.toDegrees(d) % 360,
                f = Hn(h, r.x, n.w, 0, 180),
                p = Hn(h, r.y, n.h, 90, 270);
              f.start < a.l && (a.l = f.start, o.l = d), f.end > a.r && (a.r = f.end, o.r = d), p.start < a.t && (a.t = p.start, o.t = d), p.end > a.b && (a.b = p.end, o.b = d)
            }
            e.setReductions(e.drawingArea, a, o)
          }(this) : this.setCenterPoint(0, 0, 0, 0)
        },
        setReductions: function(e, t, n) {
          var r = this,
            i = t.l / Math.sin(n.l),
            a = Math.max(t.r - r.width, 0) / Math.sin(n.r),
            o = -t.t / Math.cos(n.t),
            s = -Math.max(t.b - (r.height - r.paddingTop), 0) / Math.cos(n.b);
          i = Wn(i), a = Wn(a), o = Wn(o), s = Wn(s), r.drawingArea = Math.min(Math.floor(e - (i + a) / 2), Math.floor(e - (o + s) / 2)), r.setCenterPoint(i, a, o, s)
        },
        setCenterPoint: function(e, t, n, r) {
          var i = this,
            a = i.width - t - i.drawingArea,
            o = e + i.drawingArea,
            s = n + i.drawingArea,
            l = i.height - i.paddingTop - r - i.drawingArea;
          i.xCenter = Math.floor((o + a) / 2 + i.left), i.yCenter = Math.floor((s + l) / 2 + i.top + i.paddingTop)
        },
        getIndexAngle: function(e) {
          var t = this.chart,
            n = (e * (360 / t.data.labels.length) + ((t.options || {}).startAngle || 0)) % 360;
          return (n < 0 ? n + 360 : n) * Math.PI * 2 / 360
        },
        getDistanceFromCenterForValue: function(e) {
          var t = this;
          if (N.isNullOrUndef(e)) return NaN;
          var n = t.drawingArea / (t.max - t.min);
          return t.options.ticks.reverse ? (t.max - e) * n : (e - t.min) * n
        },
        getPointPosition: function(e, t) {
          var n = this.getIndexAngle(e) - Math.PI / 2;
          return {
            x: Math.cos(n) * t + this.xCenter,
            y: Math.sin(n) * t + this.yCenter
          }
        },
        getPointPositionForValue: function(e, t) {
          return this.getPointPosition(e, this.getDistanceFromCenterForValue(t))
        },
        getBasePosition: function(e) {
          var t = this.min,
            n = this.max;
          return this.getPointPositionForValue(e || 0, this.beginAtZero ? 0 : t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0)
        },
        _drawGrid: function() {
          var e, t, n, r = this,
            i = r.ctx,
            a = r.options,
            o = a.gridLines,
            s = a.angleLines,
            l = Pn(s.lineWidth, o.lineWidth),
            u = Pn(s.color, o.color);
          if (a.pointLabels.display && function(e) {
              var t = e.ctx,
                n = e.options,
                r = n.pointLabels,
                i = In(n),
                a = e.getDistanceFromCenterForValue(n.ticks.reverse ? e.min : e.max),
                o = N.options._parseFont(r);
              t.save(), t.font = o.string, t.textBaseline = "middle";
              for (var s = e.chart.data.labels.length - 1; s >= 0; s--) {
                var l = 0 === s ? i / 2 : 0,
                  u = e.getPointPosition(s, a + l + 5),
                  c = jn(r.fontColor, s, R.global.defaultFontColor);
                t.fillStyle = c;
                var d = e.getIndexAngle(s),
                  h = N.toDegrees(d);
                t.textAlign = Fn(h), Nn(h, e._pointLabelSizes[s], u), zn(t, e.pointLabels[s], u, o.lineHeight)
              }
              t.restore()
            }(r), o.display && N.each(r.ticks, (function(e, n) {
              0 !== n && (t = r.getDistanceFromCenterForValue(r.ticksAsNumbers[n]), function(e, t, n, r) {
                var i, a = e.ctx,
                  o = t.circular,
                  s = e.chart.data.labels.length,
                  l = jn(t.color, r - 1),
                  u = jn(t.lineWidth, r - 1);
                if ((o || s) && l && u) {
                  if (a.save(), a.strokeStyle = l, a.lineWidth = u, a.setLineDash && (a.setLineDash(t.borderDash || []), a.lineDashOffset = t.borderDashOffset || 0), a.beginPath(), o) a.arc(e.xCenter, e.yCenter, n, 0, 2 * Math.PI);
                  else {
                    i = e.getPointPosition(0, n), a.moveTo(i.x, i.y);
                    for (var c = 1; c < s; c++) i = e.getPointPosition(c, n), a.lineTo(i.x, i.y)
                  }
                  a.closePath(), a.stroke(), a.restore()
                }
              }(r, o, t, n))
            })), s.display && l && u) {
            for (i.save(), i.lineWidth = l, i.strokeStyle = u, i.setLineDash && (i.setLineDash(An([s.borderDash, o.borderDash, []])), i.lineDashOffset = An([s.borderDashOffset, o.borderDashOffset, 0])), e = r.chart.data.labels.length - 1; e >= 0; e--) t = r.getDistanceFromCenterForValue(a.ticks.reverse ? r.min : r.max), n = r.getPointPosition(e, t), i.beginPath(), i.moveTo(r.xCenter, r.yCenter), i.lineTo(n.x, n.y), i.stroke();
            i.restore()
          }
        },
        _drawLabels: function() {
          var e = this,
            t = e.ctx,
            n = e.options.ticks;
          if (n.display) {
            var r, i, a = e.getIndexAngle(0),
              o = N.options._parseFont(n),
              s = Pn(n.fontColor, R.global.defaultFontColor);
            t.save(), t.font = o.string, t.translate(e.xCenter, e.yCenter), t.rotate(a), t.textAlign = "center", t.textBaseline = "middle", N.each(e.ticks, (function(a, l) {
              (0 !== l || n.reverse) && (r = e.getDistanceFromCenterForValue(e.ticksAsNumbers[l]), n.showLabelBackdrop && (i = t.measureText(a).width, t.fillStyle = n.backdropColor, t.fillRect(-i / 2 - n.backdropPaddingX, -r - o.size / 2 - n.backdropPaddingY, i + 2 * n.backdropPaddingX, o.size + 2 * n.backdropPaddingY)), t.fillStyle = s, t.fillText(a, 0, -r))
            })), t.restore()
          }
        },
        _drawTitle: N.noop
      }),
      Un = Rn;
    Bn._defaults = Un;
    var Vn = N._deprecated,
      Gn = N.options.resolve,
      qn = N.valueOrDefault,
      $n = Number.MIN_SAFE_INTEGER || -9007199254740991,
      Jn = Number.MAX_SAFE_INTEGER || 9007199254740991,
      Xn = {
        millisecond: {
          common: !0,
          size: 1,
          steps: 1e3
        },
        second: {
          common: !0,
          size: 1e3,
          steps: 60
        },
        minute: {
          common: !0,
          size: 6e4,
          steps: 60
        },
        hour: {
          common: !0,
          size: 36e5,
          steps: 24
        },
        day: {
          common: !0,
          size: 864e5,
          steps: 30
        },
        week: {
          common: !1,
          size: 6048e5,
          steps: 4
        },
        month: {
          common: !0,
          size: 2628e6,
          steps: 12
        },
        quarter: {
          common: !1,
          size: 7884e6,
          steps: 4
        },
        year: {
          common: !0,
          size: 3154e7
        }
      },
      Kn = Object.keys(Xn);

    function Zn(e, t) {
      return e - t
    }

    function Qn(e) {
      return N.valueOrDefault(e.time.min, e.ticks.min)
    }

    function er(e) {
      return N.valueOrDefault(e.time.max, e.ticks.max)
    }

    function tr(e, t, n, r) {
      var i = function(e, t, n) {
          for (var r, i, a, o = 0, s = e.length - 1; o >= 0 && o <= s;) {
            if (i = e[(r = o + s >> 1) - 1] || null, a = e[r], !i) return {
              lo: null,
              hi: a
            };
            if (a[t] < n) o = r + 1;
            else {
              if (!(i[t] > n)) return {
                lo: i,
                hi: a
              };
              s = r - 1
            }
          }
          return {
            lo: a,
            hi: null
          }
        }(e, t, n),
        a = i.lo ? i.hi ? i.lo : e[e.length - 2] : e[0],
        o = i.lo ? i.hi ? i.hi : e[e.length - 1] : e[1],
        s = o[t] - a[t],
        l = s ? (n - a[t]) / s : 0,
        u = (o[r] - a[r]) * l;
      return a[r] + u
    }

    function nr(e, t) {
      var n = e._adapter,
        r = e.options.time,
        i = r.parser,
        a = i || r.format,
        o = t;
      return "function" == typeof i && (o = i(o)), N.isFinite(o) || (o = "string" == typeof a ? n.parse(o, a) : n.parse(o)), null !== o ? +o : (i || "function" != typeof a || (o = a(t), N.isFinite(o) || (o = n.parse(o))), o)
    }

    function rr(e, t) {
      if (N.isNullOrUndef(t)) return null;
      var n = e.options.time,
        r = nr(e, e.getRightValue(t));
      return null === r ? r : (n.round && (r = +e._adapter.startOf(r, n.round)), r)
    }

    function ir(e, t, n, r) {
      var i, a, o, s = Kn.length;
      for (i = Kn.indexOf(e); i < s - 1; ++i)
        if (o = (a = Xn[Kn[i]]).steps ? a.steps : Jn, a.common && Math.ceil((n - t) / (o * a.size)) <= r) return Kn[i];
      return Kn[s - 1]
    }

    function ar(e, t, n) {
      var r, i, a = [],
        o = {},
        s = t.length;
      for (r = 0; r < s; ++r) o[i = t[r]] = r, a.push({
        value: i,
        major: !1
      });
      return 0 !== s && n ? function(e, t, n, r) {
        var i, a, o = e._adapter,
          s = +o.startOf(t[0].value, r),
          l = t[t.length - 1].value;
        for (i = s; i <= l; i = +o.add(i, 1, r))(a = n[i]) >= 0 && (t[a].major = !0);
        return t
      }(e, a, o, n) : a
    }
    var or = mn.extend({
        initialize: function() {
          this.mergeTicksOptions(), mn.prototype.initialize.call(this)
        },
        update: function() {
          var e = this,
            t = e.options,
            n = t.time || (t.time = {}),
            r = e._adapter = new Qt._date(t.adapters.date);
          return Vn("time scale", n.format, "time.format", "time.parser"), Vn("time scale", n.min, "time.min", "ticks.min"), Vn("time scale", n.max, "time.max", "ticks.max"), N.mergeIf(n.displayFormats, r.formats()), mn.prototype.update.apply(e, arguments)
        },
        getRightValue: function(e) {
          return e && void 0 !== e.t && (e = e.t), mn.prototype.getRightValue.call(this, e)
        },
        determineDataLimits: function() {
          var e, t, n, r, i, a, o, s = this,
            l = s.chart,
            u = s._adapter,
            c = s.options,
            d = c.time.unit || "day",
            h = Jn,
            f = $n,
            p = [],
            m = [],
            _ = [],
            y = s._getLabels();
          for (e = 0, n = y.length; e < n; ++e) _.push(rr(s, y[e]));
          for (e = 0, n = (l.data.datasets || []).length; e < n; ++e)
            if (l.isDatasetVisible(e))
              if (i = l.data.datasets[e].data, N.isObject(i[0]))
                for (m[e] = [], t = 0, r = i.length; t < r; ++t) a = rr(s, i[t]), p.push(a), m[e][t] = a;
              else m[e] = _.slice(0), o || (p = p.concat(_), o = !0);
          else m[e] = [];
          _.length && (h = Math.min(h, _[0]), f = Math.max(f, _[_.length - 1])), p.length && (p = n > 1 ? function(e) {
            var t, n, r, i = {},
              a = [];
            for (t = 0, n = e.length; t < n; ++t) i[r = e[t]] || (i[r] = !0, a.push(r));
            return a
          }(p).sort(Zn) : p.sort(Zn), h = Math.min(h, p[0]), f = Math.max(f, p[p.length - 1])), h = rr(s, Qn(c)) || h, f = rr(s, er(c)) || f, h = h === Jn ? +u.startOf(Date.now(), d) : h, f = f === $n ? +u.endOf(Date.now(), d) + 1 : f, s.min = Math.min(h, f), s.max = Math.max(h + 1, f), s._table = [], s._timestamps = {
            data: p,
            datasets: m,
            labels: _
          }
        },
        buildTicks: function() {
          var e, t, n, r = this,
            i = r.min,
            a = r.max,
            o = r.options,
            s = o.ticks,
            l = o.time,
            u = r._timestamps,
            c = [],
            d = r.getLabelCapacity(i),
            h = s.source,
            f = o.distribution;
          for (u = "data" === h || "auto" === h && "series" === f ? u.data : "labels" === h ? u.labels : function(e, t, n, r) {
              var i, a = e._adapter,
                o = e.options,
                s = o.time,
                l = s.unit || ir(s.minUnit, t, n, r),
                u = Gn([s.stepSize, s.unitStepSize, 1]),
                c = "week" === l && s.isoWeekday,
                d = t,
                h = [];
              if (c && (d = +a.startOf(d, "isoWeek", c)), d = +a.startOf(d, c ? "day" : l), a.diff(n, t, l) > 1e5 * u) throw t + " and " + n + " are too far apart with stepSize of " + u + " " + l;
              for (i = d; i < n; i = +a.add(i, u, l)) h.push(i);
              return i !== n && "ticks" !== o.bounds || h.push(i), h
            }(r, i, a, d), "ticks" === o.bounds && u.length && (i = u[0], a = u[u.length - 1]), i = rr(r, Qn(o)) || i, a = rr(r, er(o)) || a, e = 0, t = u.length; e < t; ++e)(n = u[e]) >= i && n <= a && c.push(n);
          return r.min = i, r.max = a, r._unit = l.unit || (s.autoSkip ? ir(l.minUnit, r.min, r.max, d) : function(e, t, n, r, i) {
            var a, o;
            for (a = Kn.length - 1; a >= Kn.indexOf(n); a--)
              if (o = Kn[a], Xn[o].common && e._adapter.diff(i, r, o) >= t - 1) return o;
            return Kn[n ? Kn.indexOf(n) : 0]
          }(r, c.length, l.minUnit, r.min, r.max)), r._majorUnit = s.major.enabled && "year" !== r._unit ? function(e) {
            for (var t = Kn.indexOf(e) + 1, n = Kn.length; t < n; ++t)
              if (Xn[Kn[t]].common) return Kn[t]
          }(r._unit) : void 0, r._table = function(e, t, n, r) {
            if ("linear" === r || !e.length) return [{
              time: t,
              pos: 0
            }, {
              time: n,
              pos: 1
            }];
            var i, a, o, s, l, u = [],
              c = [t];
            for (i = 0, a = e.length; i < a; ++i)(s = e[i]) > t && s < n && c.push(s);
            for (c.push(n), i = 0, a = c.length; i < a; ++i) l = c[i + 1], o = c[i - 1], s = c[i], void 0 !== o && void 0 !== l && Math.round((l + o) / 2) === s || u.push({
              time: s,
              pos: i / (a - 1)
            });
            return u
          }(r._timestamps.data, i, a, f), r._offsets = function(e, t, n, r, i) {
            var a, o, s = 0,
              l = 0;
            return i.offset && t.length && (a = tr(e, "time", t[0], "pos"), s = 1 === t.length ? 1 - a : (tr(e, "time", t[1], "pos") - a) / 2, o = tr(e, "time", t[t.length - 1], "pos"), l = 1 === t.length ? o : (o - tr(e, "time", t[t.length - 2], "pos")) / 2), {
              start: s,
              end: l,
              factor: 1 / (s + 1 + l)
            }
          }(r._table, c, 0, 0, o), s.reverse && c.reverse(), ar(r, c, r._majorUnit)
        },
        getLabelForIndex: function(e, t) {
          var n = this,
            r = n._adapter,
            i = n.chart.data,
            a = n.options.time,
            o = i.labels && e < i.labels.length ? i.labels[e] : "",
            s = i.datasets[t].data[e];
          return N.isObject(s) && (o = n.getRightValue(s)), a.tooltipFormat ? r.format(nr(n, o), a.tooltipFormat) : "string" == typeof o ? o : r.format(nr(n, o), a.displayFormats.datetime)
        },
        tickFormatFunction: function(e, t, n, r) {
          var i = this._adapter,
            a = this.options,
            o = a.time.displayFormats,
            s = o[this._unit],
            l = this._majorUnit,
            u = o[l],
            c = n[t],
            d = a.ticks,
            h = l && u && c && c.major,
            f = i.format(e, r || (h ? u : s)),
            p = h ? d.major : d.minor,
            m = Gn([p.callback, p.userCallback, d.callback, d.userCallback]);
          return m ? m(f, t, n) : f
        },
        convertTicksToLabels: function(e) {
          var t, n, r = [];
          for (t = 0, n = e.length; t < n; ++t) r.push(this.tickFormatFunction(e[t].value, t, e));
          return r
        },
        getPixelForOffset: function(e) {
          var t = this._offsets,
            n = tr(this._table, "time", e, "pos");
          return this.getPixelForDecimal((t.start + n) * t.factor)
        },
        getPixelForValue: function(e, t, n) {
          var r = null;
          if (void 0 !== t && void 0 !== n && (r = this._timestamps.datasets[n][t]), null === r && (r = rr(this, e)), null !== r) return this.getPixelForOffset(r)
        },
        getPixelForTick: function(e) {
          var t = this.getTicks();
          return e >= 0 && e < t.length ? this.getPixelForOffset(t[e].value) : null
        },
        getValueForPixel: function(e) {
          var t = this._offsets,
            n = this.getDecimalForPixel(e) / t.factor - t.end,
            r = tr(this._table, "pos", n, "time");
          return this._adapter._create(r)
        },
        _getLabelSize: function(e) {
          var t = this.options.ticks,
            n = this.ctx.measureText(e).width,
            r = N.toRadians(this.isHorizontal() ? t.maxRotation : t.minRotation),
            i = Math.cos(r),
            a = Math.sin(r),
            o = qn(t.fontSize, R.global.defaultFontSize);
          return {
            w: n * i + o * a,
            h: n * a + o * i
          }
        },
        getLabelWidth: function(e) {
          return this._getLabelSize(e).w
        },
        getLabelCapacity: function(e) {
          var t = this,
            n = t.options.time,
            r = n.displayFormats,
            i = r[n.unit] || r.millisecond,
            a = t.tickFormatFunction(e, 0, ar(t, [e], t._majorUnit), i),
            o = t._getLabelSize(a),
            s = Math.floor(t.isHorizontal() ? t.width / o.w : t.height / o.h);
          return t.options.offset && s--, s > 0 ? s : 1
        }
      }),
      sr = {
        position: "bottom",
        distribution: "linear",
        bounds: "data",
        adapters: {},
        time: {
          parser: !1,
          unit: !1,
          round: !1,
          displayFormat: !1,
          isoWeekday: !1,
          minUnit: "millisecond",
          displayFormats: {}
        },
        ticks: {
          autoSkip: !1,
          source: "auto",
          major: {
            enabled: !1
          }
        }
      };
    or._defaults = sr;
    var lr = {
        category: yn,
        linear: Ln,
        logarithmic: Cn,
        radialLinear: Bn,
        time: or
      },
      ur = {
        datetime: "MMM D, YYYY, h:mm:ss a",
        millisecond: "h:mm:ss.SSS a",
        second: "h:mm:ss a",
        minute: "h:mm a",
        hour: "hA",
        day: "MMM D",
        week: "ll",
        month: "MMM YYYY",
        quarter: "[Q]Q - YYYY",
        year: "YYYY"
      };
    Qt._date.override("function" == typeof e ? {
      _id: "moment",
      formats: function() {
        return ur
      },
      parse: function(t, n) {
        return "string" == typeof t && "string" == typeof n ? t = e(t, n) : t instanceof e || (t = e(t)), t.isValid() ? t.valueOf() : null
      },
      format: function(t, n) {
        return e(t).format(n)
      },
      add: function(t, n, r) {
        return e(t).add(n, r).valueOf()
      },
      diff: function(t, n, r) {
        return e(t).diff(e(n), r)
      },
      startOf: function(t, n, r) {
        return t = e(t), "isoWeek" === n ? t.isoWeekday(r).valueOf() : t.startOf(n).valueOf()
      },
      endOf: function(t, n) {
        return e(t).endOf(n).valueOf()
      },
      _create: function(t) {
        return e(t)
      }
    } : {}), R._set("global", {
      plugins: {
        filler: {
          propagate: !0
        }
      }
    });
    var cr = {
      dataset: function(e) {
        var t = e.fill,
          n = e.chart,
          r = n.getDatasetMeta(t),
          i = r && n.isDatasetVisible(t) && r.dataset._children || [],
          a = i.length || 0;
        return a ? function(e, t) {
          return t < a && i[t]._view || null
        } : null
      },
      boundary: function(e) {
        var t = e.boundary,
          n = t ? t.x : null,
          r = t ? t.y : null;
        return N.isArray(t) ? function(e, n) {
          return t[n]
        } : function(e) {
          return {
            x: null === n ? e.x : n,
            y: null === r ? e.y : r
          }
        }
      }
    };

    function dr(e, t, n) {
      var r, i = e._model || {},
        a = i.fill;
      if (void 0 === a && (a = !!i.backgroundColor), !1 === a || null === a) return !1;
      if (!0 === a) return "origin";
      if (r = parseFloat(a, 10), isFinite(r) && Math.floor(r) === r) return "-" !== a[0] && "+" !== a[0] || (r = t + r), !(r === t || r < 0 || r >= n) && r;
      switch (a) {
        case "bottom":
          return "start";
        case "top":
          return "end";
        case "zero":
          return "origin";
        case "origin":
        case "start":
        case "end":
          return a;
        default:
          return !1
      }
    }

    function hr(e) {
      return (e.el._scale || {}).getPointPositionForValue ? function(e) {
        var t, n, r, i, a, o = e.el._scale,
          s = o.options,
          l = o.chart.data.labels.length,
          u = e.fill,
          c = [];
        if (!l) return null;
        for (t = s.ticks.reverse ? o.max : o.min, n = s.ticks.reverse ? o.min : o.max, r = o.getPointPositionForValue(0, t), i = 0; i < l; ++i) a = "start" === u || "end" === u ? o.getPointPositionForValue(i, "start" === u ? t : n) : o.getBasePosition(i), s.gridLines.circular && (a.cx = r.x, a.cy = r.y, a.angle = o.getIndexAngle(i) - Math.PI / 2), c.push(a);
        return c
      }(e) : function(e) {
        var t, n = e.el._model || {},
          r = e.el._scale || {},
          i = e.fill,
          a = null;
        if (isFinite(i)) return null;
        if ("start" === i ? a = void 0 === n.scaleBottom ? r.bottom : n.scaleBottom : "end" === i ? a = void 0 === n.scaleTop ? r.top : n.scaleTop : void 0 !== n.scaleZero ? a = n.scaleZero : r.getBasePixel && (a = r.getBasePixel()), null != a) {
          if (void 0 !== a.x && void 0 !== a.y) return a;
          if (N.isFinite(a)) return {
            x: (t = r.isHorizontal()) ? a : null,
            y: t ? null : a
          }
        }
        return null
      }(e)
    }

    function fr(e, t, n) {
      var r, i = e[t].fill,
        a = [t];
      if (!n) return i;
      for (; !1 !== i && -1 === a.indexOf(i);) {
        if (!isFinite(i)) return i;
        if (!(r = e[i])) return !1;
        if (r.visible) return i;
        a.push(i), i = r.fill
      }
      return !1
    }

    function pr(e) {
      var t = e.fill,
        n = "dataset";
      return !1 === t ? null : (isFinite(t) || (n = "boundary"), cr[n](e))
    }

    function mr(e) {
      return e && !e.skip
    }

    function _r(e, t, n, r, i) {
      var a, o, s, l;
      if (r && i) {
        for (e.moveTo(t[0].x, t[0].y), a = 1; a < r; ++a) N.canvas.lineTo(e, t[a - 1], t[a]);
        if (void 0 === n[0].angle)
          for (e.lineTo(n[i - 1].x, n[i - 1].y), a = i - 1; a > 0; --a) N.canvas.lineTo(e, n[a], n[a - 1], !0);
        else
          for (o = n[0].cx, s = n[0].cy, l = Math.sqrt(Math.pow(n[0].x - o, 2) + Math.pow(n[0].y - s, 2)), a = i - 1; a > 0; --a) e.arc(o, s, l, n[a].angle, n[a - 1].angle, !0)
      }
    }

    function yr(e, t, n, r, i, a) {
      var o, s, l, u, c, d, h, f, p = t.length,
        m = r.spanGaps,
        _ = [],
        y = [],
        g = 0,
        v = 0;
      for (e.beginPath(), o = 0, s = p; o < s; ++o) c = n(u = t[l = o % p]._view, l, r), d = mr(u), h = mr(c), a && void 0 === f && d && (s = p + (f = o + 1)), d && h ? (g = _.push(u), v = y.push(c)) : g && v && (m ? (d && _.push(u), h && y.push(c)) : (_r(e, _, y, g, v), g = v = 0, _ = [], y = []));
      _r(e, _, y, g, v), e.closePath(), e.fillStyle = i, e.fill()
    }
    var gr = {
        id: "filler",
        afterDatasetsUpdate: function(e, t) {
          var n, r, i, a, o = (e.data.datasets || []).length,
            s = t.propagate,
            l = [];
          for (r = 0; r < o; ++r) a = null, (i = (n = e.getDatasetMeta(r)).dataset) && i._model && i instanceof we.Line && (a = {
            visible: e.isDatasetVisible(r),
            fill: dr(i, r, o),
            chart: e,
            el: i
          }), n.$filler = a, l.push(a);
          for (r = 0; r < o; ++r)(a = l[r]) && (a.fill = fr(l, r, s), a.boundary = hr(a), a.mapper = pr(a))
        },
        beforeDatasetsDraw: function(e) {
          var t, n, r, i, a, o, s, l = e._getSortedVisibleDatasetMetas(),
            u = e.ctx;
          for (n = l.length - 1; n >= 0; --n)(t = l[n].$filler) && t.visible && (i = (r = t.el)._view, a = r._children || [], o = t.mapper, s = i.backgroundColor || R.global.defaultColor, o && s && a.length && (N.canvas.clipArea(u, e.chartArea), yr(u, a, o, i, s, r._loop), N.canvas.unclipArea(u)))
        }
      },
      vr = N.rtl.getRtlAdapter,
      br = N.noop,
      wr = N.valueOrDefault;

    function kr(e, t) {
      return e.usePointStyle && e.boxWidth > t ? t : e.boxWidth
    }
    R._set("global", {
      legend: {
        display: !0,
        position: "top",
        align: "center",
        fullWidth: !0,
        reverse: !1,
        weight: 1e3,
        onClick: function(e, t) {
          var n = t.datasetIndex,
            r = this.chart,
            i = r.getDatasetMeta(n);
          i.hidden = null === i.hidden ? !r.data.datasets[n].hidden : null, r.update()
        },
        onHover: null,
        onLeave: null,
        labels: {
          boxWidth: 40,
          padding: 10,
          generateLabels: function(e) {
            var t = e.data.datasets,
              n = e.options.legend || {},
              r = n.labels && n.labels.usePointStyle;
            return e._getSortedDatasetMetas().map((function(n) {
              var i = n.controller.getStyle(r ? 0 : void 0);
              return {
                text: t[n.index].label,
                fillStyle: i.backgroundColor,
                hidden: !e.isDatasetVisible(n.index),
                lineCap: i.borderCapStyle,
                lineDash: i.borderDash,
                lineDashOffset: i.borderDashOffset,
                lineJoin: i.borderJoinStyle,
                lineWidth: i.borderWidth,
                strokeStyle: i.borderColor,
                pointStyle: i.pointStyle,
                rotation: i.rotation,
                datasetIndex: n.index
              }
            }), this)
          }
        }
      },
      legendCallback: function(e) {
        var t, n, r, i = document.createElement("ul"),
          a = e.data.datasets;
        for (i.setAttribute("class", e.id + "-legend"), t = 0, n = a.length; t < n; t++)(r = i.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = a[t].backgroundColor, a[t].label && r.appendChild(document.createTextNode(a[t].label));
        return i.outerHTML
      }
    });
    var Mr = $.extend({
      initialize: function(e) {
        N.extend(this, e), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1
      },
      beforeUpdate: br,
      update: function(e, t, n) {
        var r = this;
        return r.beforeUpdate(), r.maxWidth = e, r.maxHeight = t, r.margins = n, r.beforeSetDimensions(), r.setDimensions(), r.afterSetDimensions(), r.beforeBuildLabels(), r.buildLabels(), r.afterBuildLabels(), r.beforeFit(), r.fit(), r.afterFit(), r.afterUpdate(), r.minSize
      },
      afterUpdate: br,
      beforeSetDimensions: br,
      setDimensions: function() {
        var e = this;
        e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
          width: 0,
          height: 0
        }
      },
      afterSetDimensions: br,
      beforeBuildLabels: br,
      buildLabels: function() {
        var e = this,
          t = e.options.labels || {},
          n = N.callback(t.generateLabels, [e.chart], e) || [];
        t.filter && (n = n.filter((function(n) {
          return t.filter(n, e.chart.data)
        }))), e.options.reverse && n.reverse(), e.legendItems = n
      },
      afterBuildLabels: br,
      beforeFit: br,
      fit: function() {
        var e = this,
          t = e.options,
          n = t.labels,
          r = t.display,
          i = e.ctx,
          a = N.options._parseFont(n),
          o = a.size,
          s = e.legendHitBoxes = [],
          l = e.minSize,
          u = e.isHorizontal();
        if (u ? (l.width = e.maxWidth, l.height = r ? 10 : 0) : (l.width = r ? 10 : 0, l.height = e.maxHeight), r) {
          if (i.font = a.string, u) {
            var c = e.lineWidths = [0],
              d = 0;
            i.textAlign = "left", i.textBaseline = "middle", N.each(e.legendItems, (function(e, t) {
              var r = kr(n, o) + o / 2 + i.measureText(e.text).width;
              (0 === t || c[c.length - 1] + r + 2 * n.padding > l.width) && (d += o + n.padding, c[c.length - (t > 0 ? 0 : 1)] = 0), s[t] = {
                left: 0,
                top: 0,
                width: r,
                height: o
              }, c[c.length - 1] += r + n.padding
            })), l.height += d
          } else {
            var h = n.padding,
              f = e.columnWidths = [],
              p = e.columnHeights = [],
              m = n.padding,
              _ = 0,
              y = 0;
            N.each(e.legendItems, (function(e, t) {
              var r = kr(n, o) + o / 2 + i.measureText(e.text).width;
              t > 0 && y + o + 2 * h > l.height && (m += _ + n.padding, f.push(_), p.push(y), _ = 0, y = 0), _ = Math.max(_, r), y += o + h, s[t] = {
                left: 0,
                top: 0,
                width: r,
                height: o
              }
            })), m += _, f.push(_), p.push(y), l.width += m
          }
          e.width = l.width, e.height = l.height
        } else e.width = l.width = e.height = l.height = 0
      },
      afterFit: br,
      isHorizontal: function() {
        return "top" === this.options.position || "bottom" === this.options.position
      },
      draw: function() {
        var e = this,
          t = e.options,
          n = t.labels,
          r = R.global,
          i = r.defaultColor,
          a = r.elements.line,
          o = e.height,
          s = e.columnHeights,
          l = e.width,
          u = e.lineWidths;
        if (t.display) {
          var c, d = vr(t.rtl, e.left, e.minSize.width),
            h = e.ctx,
            f = wr(n.fontColor, r.defaultFontColor),
            p = N.options._parseFont(n),
            m = p.size;
          h.textAlign = d.textAlign("left"), h.textBaseline = "middle", h.lineWidth = .5, h.strokeStyle = f, h.fillStyle = f, h.font = p.string;
          var _ = kr(n, m),
            y = e.legendHitBoxes,
            g = function(e, r) {
              switch (t.align) {
                case "start":
                  return n.padding;
                case "end":
                  return e - r;
                default:
                  return (e - r + n.padding) / 2
              }
            },
            v = e.isHorizontal();
          c = v ? {
            x: e.left + g(l, u[0]),
            y: e.top + n.padding,
            line: 0
          } : {
            x: e.left + n.padding,
            y: e.top + g(o, s[0]),
            line: 0
          }, N.rtl.overrideTextDirection(e.ctx, t.textDirection);
          var b = m + n.padding;
          N.each(e.legendItems, (function(t, r) {
            var f = h.measureText(t.text).width,
              p = _ + m / 2 + f,
              w = c.x,
              k = c.y;
            d.setWidth(e.minSize.width), v ? r > 0 && w + p + n.padding > e.left + e.minSize.width && (k = c.y += b, c.line++, w = c.x = e.left + g(l, u[c.line])) : r > 0 && k + b > e.top + e.minSize.height && (w = c.x = w + e.columnWidths[c.line] + n.padding, c.line++, k = c.y = e.top + g(o, s[c.line]));
            var M = d.x(w);
            ! function(e, t, r) {
              if (!(isNaN(_) || _ <= 0)) {
                h.save();
                var o = wr(r.lineWidth, a.borderWidth);
                if (h.fillStyle = wr(r.fillStyle, i), h.lineCap = wr(r.lineCap, a.borderCapStyle), h.lineDashOffset = wr(r.lineDashOffset, a.borderDashOffset), h.lineJoin = wr(r.lineJoin, a.borderJoinStyle), h.lineWidth = o, h.strokeStyle = wr(r.strokeStyle, i), h.setLineDash && h.setLineDash(wr(r.lineDash, a.borderDash)), n && n.usePointStyle) {
                  var s = _ * Math.SQRT2 / 2,
                    l = d.xPlus(e, _ / 2),
                    u = t + m / 2;
                  N.canvas.drawPoint(h, r.pointStyle, s, l, u, r.rotation)
                } else h.fillRect(d.leftForLtr(e, _), t, _, m), 0 !== o && h.strokeRect(d.leftForLtr(e, _), t, _, m);
                h.restore()
              }
            }(M, k, t), y[r].left = d.leftForLtr(M, y[r].width), y[r].top = k,
              function(e, t, n, r) {
                var i = m / 2,
                  a = d.xPlus(e, _ + i),
                  o = t + i;
                h.fillText(n.text, a, o), n.hidden && (h.beginPath(), h.lineWidth = 2, h.moveTo(a, o), h.lineTo(d.xPlus(a, r), o), h.stroke())
              }(M, k, t, f), v ? c.x += p + n.padding : c.y += b
          })), N.rtl.restoreTextDirection(e.ctx, t.textDirection)
        }
      },
      _getLegendItemAt: function(e, t) {
        var n, r, i, a = this;
        if (e >= a.left && e <= a.right && t >= a.top && t <= a.bottom)
          for (i = a.legendHitBoxes, n = 0; n < i.length; ++n)
            if (e >= (r = i[n]).left && e <= r.left + r.width && t >= r.top && t <= r.top + r.height) return a.legendItems[n];
        return null
      },
      handleEvent: function(e) {
        var t, n = this,
          r = n.options,
          i = "mouseup" === e.type ? "click" : e.type;
        if ("mousemove" === i) {
          if (!r.onHover && !r.onLeave) return
        } else {
          if ("click" !== i) return;
          if (!r.onClick) return
        }
        t = n._getLegendItemAt(e.x, e.y), "click" === i ? t && r.onClick && r.onClick.call(n, e.native, t) : (r.onLeave && t !== n._hoveredItem && (n._hoveredItem && r.onLeave.call(n, e.native, n._hoveredItem), n._hoveredItem = t), r.onHover && t && r.onHover.call(n, e.native, t))
      }
    });

    function xr(e, t) {
      var n = new Mr({
        ctx: e.ctx,
        options: t,
        chart: e
      });
      pt.configure(e, n, t), pt.addBox(e, n), e.legend = n
    }
    var Lr = {
        id: "legend",
        _element: Mr,
        beforeInit: function(e) {
          var t = e.options.legend;
          t && xr(e, t)
        },
        beforeUpdate: function(e) {
          var t = e.options.legend,
            n = e.legend;
          t ? (N.mergeIf(t, R.global.legend), n ? (pt.configure(e, n, t), n.options = t) : xr(e, t)) : n && (pt.removeBox(e, n), delete e.legend)
        },
        afterEvent: function(e, t) {
          var n = e.legend;
          n && n.handleEvent(t)
        }
      },
      Sr = N.noop;
    R._set("global", {
      title: {
        display: !1,
        fontStyle: "bold",
        fullWidth: !0,
        padding: 10,
        position: "top",
        text: "",
        weight: 2e3
      }
    });
    var Tr = $.extend({
      initialize: function(e) {
        N.extend(this, e), this.legendHitBoxes = []
      },
      beforeUpdate: Sr,
      update: function(e, t, n) {
        var r = this;
        return r.beforeUpdate(), r.maxWidth = e, r.maxHeight = t, r.margins = n, r.beforeSetDimensions(), r.setDimensions(), r.afterSetDimensions(), r.beforeBuildLabels(), r.buildLabels(), r.afterBuildLabels(), r.beforeFit(), r.fit(), r.afterFit(), r.afterUpdate(), r.minSize
      },
      afterUpdate: Sr,
      beforeSetDimensions: Sr,
      setDimensions: function() {
        var e = this;
        e.isHorizontal() ? (e.width = e.maxWidth, e.left = 0, e.right = e.width) : (e.height = e.maxHeight, e.top = 0, e.bottom = e.height), e.paddingLeft = 0, e.paddingTop = 0, e.paddingRight = 0, e.paddingBottom = 0, e.minSize = {
          width: 0,
          height: 0
        }
      },
      afterSetDimensions: Sr,
      beforeBuildLabels: Sr,
      buildLabels: Sr,
      afterBuildLabels: Sr,
      beforeFit: Sr,
      fit: function() {
        var e, t = this,
          n = t.options,
          r = t.minSize = {},
          i = t.isHorizontal();
        n.display ? (e = (N.isArray(n.text) ? n.text.length : 1) * N.options._parseFont(n).lineHeight + 2 * n.padding, t.width = r.width = i ? t.maxWidth : e, t.height = r.height = i ? e : t.maxHeight) : t.width = r.width = t.height = r.height = 0
      },
      afterFit: Sr,
      isHorizontal: function() {
        var e = this.options.position;
        return "top" === e || "bottom" === e
      },
      draw: function() {
        var e = this,
          t = e.ctx,
          n = e.options;
        if (n.display) {
          var r, i, a, o = N.options._parseFont(n),
            s = o.lineHeight,
            l = s / 2 + n.padding,
            u = 0,
            c = e.top,
            d = e.left,
            h = e.bottom,
            f = e.right;
          t.fillStyle = N.valueOrDefault(n.fontColor, R.global.defaultFontColor), t.font = o.string, e.isHorizontal() ? (i = d + (f - d) / 2, a = c + l, r = f - d) : (i = "left" === n.position ? d + l : f - l, a = c + (h - c) / 2, r = h - c, u = Math.PI * ("left" === n.position ? -.5 : .5)), t.save(), t.translate(i, a), t.rotate(u), t.textAlign = "center", t.textBaseline = "middle";
          var p = n.text;
          if (N.isArray(p))
            for (var m = 0, _ = 0; _ < p.length; ++_) t.fillText(p[_], 0, m, r), m += s;
          else t.fillText(p, 0, 0, r);
          t.restore()
        }
      }
    });

    function Dr(e, t) {
      var n = new Tr({
        ctx: e.ctx,
        options: t,
        chart: e
      });
      pt.configure(e, n, t), pt.addBox(e, n), e.titleBlock = n
    }
    var Er = {},
      Yr = gr,
      Cr = Lr,
      Or = {
        id: "title",
        _element: Tr,
        beforeInit: function(e) {
          var t = e.options.title;
          t && Dr(e, t)
        },
        beforeUpdate: function(e) {
          var t = e.options.title,
            n = e.titleBlock;
          t ? (N.mergeIf(t, R.global.title), n ? (pt.configure(e, n, t), n.options = t) : Dr(e, t)) : n && (pt.removeBox(e, n), delete e.titleBlock)
        }
      };
    for (var Pr in Er.filler = Yr, Er.legend = Cr, Er.title = Or, Xt.helpers = N,
        function() {
          function e(e, t, n) {
            var r;
            return "string" == typeof e ? (r = parseInt(e, 10), -1 !== e.indexOf("%") && (r = r / 100 * t.parentNode[n])) : r = e, r
          }

          function t(e) {
            return null != e && "none" !== e
          }

          function n(n, r, i) {
            var a = document.defaultView,
              o = N._getParentNode(n),
              s = a.getComputedStyle(n)[r],
              l = a.getComputedStyle(o)[r],
              u = t(s),
              c = t(l),
              d = Number.POSITIVE_INFINITY;
            return u || c ? Math.min(u ? e(s, n, i) : d, c ? e(l, o, i) : d) : "none"
          }
          N.where = function(e, t) {
            if (N.isArray(e) && Array.prototype.filter) return e.filter(t);
            var n = [];
            return N.each(e, (function(e) {
              t(e) && n.push(e)
            })), n
          }, N.findIndex = Array.prototype.findIndex ? function(e, t, n) {
            return e.findIndex(t, n)
          } : function(e, t, n) {
            n = void 0 === n ? e : n;
            for (var r = 0, i = e.length; r < i; ++r)
              if (t.call(n, e[r], r, e)) return r;
            return -1
          }, N.findNextWhere = function(e, t, n) {
            N.isNullOrUndef(n) && (n = -1);
            for (var r = n + 1; r < e.length; r++) {
              var i = e[r];
              if (t(i)) return i
            }
          }, N.findPreviousWhere = function(e, t, n) {
            N.isNullOrUndef(n) && (n = e.length);
            for (var r = n - 1; r >= 0; r--) {
              var i = e[r];
              if (t(i)) return i
            }
          }, N.isNumber = function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
          }, N.almostEquals = function(e, t, n) {
            return Math.abs(e - t) < n
          }, N.almostWhole = function(e, t) {
            var n = Math.round(e);
            return n - t <= e && n + t >= e
          }, N.max = function(e) {
            return e.reduce((function(e, t) {
              return isNaN(t) ? e : Math.max(e, t)
            }), Number.NEGATIVE_INFINITY)
          }, N.min = function(e) {
            return e.reduce((function(e, t) {
              return isNaN(t) ? e : Math.min(e, t)
            }), Number.POSITIVE_INFINITY)
          }, N.sign = Math.sign ? function(e) {
            return Math.sign(e)
          } : function(e) {
            return 0 == (e = +e) || isNaN(e) ? e : e > 0 ? 1 : -1
          }, N.toRadians = function(e) {
            return e * (Math.PI / 180)
          }, N.toDegrees = function(e) {
            return e * (180 / Math.PI)
          }, N._decimalPlaces = function(e) {
            if (N.isFinite(e)) {
              for (var t = 1, n = 0; Math.round(e * t) / t !== e;) t *= 10, n++;
              return n
            }
          }, N.getAngleFromPoint = function(e, t) {
            var n = t.x - e.x,
              r = t.y - e.y,
              i = Math.sqrt(n * n + r * r),
              a = Math.atan2(r, n);
            return a < -.5 * Math.PI && (a += 2 * Math.PI), {
              angle: a,
              distance: i
            }
          }, N.distanceBetweenPoints = function(e, t) {
            return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
          }, N.aliasPixel = function(e) {
            return e % 2 == 0 ? 0 : .5
          }, N._alignPixel = function(e, t, n) {
            var r = e.currentDevicePixelRatio,
              i = n / 2;
            return Math.round((t - i) * r) / r + i
          }, N.splineCurve = function(e, t, n, r) {
            var i = e.skip ? t : e,
              a = t,
              o = n.skip ? t : n,
              s = Math.sqrt(Math.pow(a.x - i.x, 2) + Math.pow(a.y - i.y, 2)),
              l = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
              u = s / (s + l),
              c = l / (s + l),
              d = r * (u = isNaN(u) ? 0 : u),
              h = r * (c = isNaN(c) ? 0 : c);
            return {
              previous: {
                x: a.x - d * (o.x - i.x),
                y: a.y - d * (o.y - i.y)
              },
              next: {
                x: a.x + h * (o.x - i.x),
                y: a.y + h * (o.y - i.y)
              }
            }
          }, N.EPSILON = Number.EPSILON || 1e-14, N.splineCurveMonotone = function(e) {
            var t, n, r, i, a, o, s, l, u, c = (e || []).map((function(e) {
                return {
                  model: e._model,
                  deltaK: 0,
                  mK: 0
                }
              })),
              d = c.length;
            for (t = 0; t < d; ++t)
              if (!(r = c[t]).model.skip) {
                if (n = t > 0 ? c[t - 1] : null, (i = t < d - 1 ? c[t + 1] : null) && !i.model.skip) {
                  var h = i.model.x - r.model.x;
                  r.deltaK = 0 !== h ? (i.model.y - r.model.y) / h : 0
                }!n || n.model.skip ? r.mK = r.deltaK : !i || i.model.skip ? r.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(r.deltaK) ? r.mK = 0 : r.mK = (n.deltaK + r.deltaK) / 2
              } for (t = 0; t < d - 1; ++t) r = c[t], i = c[t + 1], r.model.skip || i.model.skip || (N.almostEquals(r.deltaK, 0, this.EPSILON) ? r.mK = i.mK = 0 : (a = r.mK / r.deltaK, o = i.mK / r.deltaK, (l = Math.pow(a, 2) + Math.pow(o, 2)) <= 9 || (s = 3 / Math.sqrt(l), r.mK = a * s * r.deltaK, i.mK = o * s * r.deltaK)));
            for (t = 0; t < d; ++t)(r = c[t]).model.skip || (n = t > 0 ? c[t - 1] : null, i = t < d - 1 ? c[t + 1] : null, n && !n.model.skip && (u = (r.model.x - n.model.x) / 3, r.model.controlPointPreviousX = r.model.x - u, r.model.controlPointPreviousY = r.model.y - u * r.mK), i && !i.model.skip && (u = (i.model.x - r.model.x) / 3, r.model.controlPointNextX = r.model.x + u, r.model.controlPointNextY = r.model.y + u * r.mK))
          }, N.nextItem = function(e, t, n) {
            return n ? t >= e.length - 1 ? e[0] : e[t + 1] : t >= e.length - 1 ? e[e.length - 1] : e[t + 1]
          }, N.previousItem = function(e, t, n) {
            return n ? t <= 0 ? e[e.length - 1] : e[t - 1] : t <= 0 ? e[0] : e[t - 1]
          }, N.niceNum = function(e, t) {
            var n = Math.floor(N.log10(e)),
              r = e / Math.pow(10, n);
            return (t ? r < 1.5 ? 1 : r < 3 ? 2 : r < 7 ? 5 : 10 : r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * Math.pow(10, n)
          }, N.requestAnimFrame = "undefined" == typeof window ? function(e) {
            e()
          } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
            return window.setTimeout(e, 1e3 / 60)
          }, N.getRelativePosition = function(e, t) {
            var n, r, i = e.originalEvent || e,
              a = e.target || e.srcElement,
              o = a.getBoundingClientRect(),
              s = i.touches;
            s && s.length > 0 ? (n = s[0].clientX, r = s[0].clientY) : (n = i.clientX, r = i.clientY);
            var l = parseFloat(N.getStyle(a, "padding-left")),
              u = parseFloat(N.getStyle(a, "padding-top")),
              c = parseFloat(N.getStyle(a, "padding-right")),
              d = parseFloat(N.getStyle(a, "padding-bottom")),
              h = o.right - o.left - l - c,
              f = o.bottom - o.top - u - d;
            return {
              x: n = Math.round((n - o.left - l) / h * a.width / t.currentDevicePixelRatio),
              y: r = Math.round((r - o.top - u) / f * a.height / t.currentDevicePixelRatio)
            }
          }, N.getConstraintWidth = function(e) {
            return n(e, "max-width", "clientWidth")
          }, N.getConstraintHeight = function(e) {
            return n(e, "max-height", "clientHeight")
          }, N._calculatePadding = function(e, t, n) {
            return (t = N.getStyle(e, t)).indexOf("%") > -1 ? n * parseInt(t, 10) / 100 : parseInt(t, 10)
          }, N._getParentNode = function(e) {
            var t = e.parentNode;
            return t && "[object ShadowRoot]" === t.toString() && (t = t.host), t
          }, N.getMaximumWidth = function(e) {
            var t = N._getParentNode(e);
            if (!t) return e.clientWidth;
            var n = t.clientWidth,
              r = n - N._calculatePadding(t, "padding-left", n) - N._calculatePadding(t, "padding-right", n),
              i = N.getConstraintWidth(e);
            return isNaN(i) ? r : Math.min(r, i)
          }, N.getMaximumHeight = function(e) {
            var t = N._getParentNode(e);
            if (!t) return e.clientHeight;
            var n = t.clientHeight,
              r = n - N._calculatePadding(t, "padding-top", n) - N._calculatePadding(t, "padding-bottom", n),
              i = N.getConstraintHeight(e);
            return isNaN(i) ? r : Math.min(r, i)
          }, N.getStyle = function(e, t) {
            return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, null).getPropertyValue(t)
          }, N.retinaScale = function(e, t) {
            var n = e.currentDevicePixelRatio = t || "undefined" != typeof window && window.devicePixelRatio || 1;
            if (1 !== n) {
              var r = e.canvas,
                i = e.height,
                a = e.width;
              r.height = i * n, r.width = a * n, e.ctx.scale(n, n), r.style.height || r.style.width || (r.style.height = i + "px", r.style.width = a + "px")
            }
          }, N.fontString = function(e, t, n) {
            return t + " " + e + "px " + n
          }, N.longestText = function(e, t, n, r) {
            var i = (r = r || {}).data = r.data || {},
              a = r.garbageCollect = r.garbageCollect || [];
            r.font !== t && (i = r.data = {}, a = r.garbageCollect = [], r.font = t), e.font = t;
            var o, s, l, u, c, d = 0,
              h = n.length;
            for (o = 0; o < h; o++)
              if (null != (u = n[o]) && !0 !== N.isArray(u)) d = N.measureText(e, i, a, d, u);
              else if (N.isArray(u))
              for (s = 0, l = u.length; s < l; s++) null == (c = u[s]) || N.isArray(c) || (d = N.measureText(e, i, a, d, c));
            var f = a.length / 2;
            if (f > n.length) {
              for (o = 0; o < f; o++) delete i[a[o]];
              a.splice(0, f)
            }
            return d
          }, N.measureText = function(e, t, n, r, i) {
            var a = t[i];
            return a || (a = t[i] = e.measureText(i).width, n.push(i)), a > r && (r = a), r
          }, N.numberOfLabelLines = function(e) {
            var t = 1;
            return N.each(e, (function(e) {
              N.isArray(e) && e.length > t && (t = e.length)
            })), t
          }, N.color = k ? function(e) {
            return e instanceof CanvasGradient && (e = R.global.defaultColor), k(e)
          } : function(e) {
            return console.error("Color.js not found!"), e
          }, N.getHoverColor = function(e) {
            return e instanceof CanvasPattern || e instanceof CanvasGradient ? e : N.color(e).saturate(.5).darken(.1).rgbString()
          }
        }(), Xt._adapters = Qt, Xt.Animation = X, Xt.animationService = K, Xt.controllers = Ke, Xt.DatasetController = ne, Xt.defaults = R, Xt.Element = $, Xt.elements = we, Xt.Interaction = it, Xt.layouts = pt, Xt.platform = Dt, Xt.plugins = Et, Xt.Scale = mn, Xt.scaleService = Yt, Xt.Ticks = en, Xt.Tooltip = Nt, Xt.helpers.each(lr, (function(e, t) {
          Xt.scaleService.registerScaleType(t, e, e._defaults)
        })), Er) Er.hasOwnProperty(Pr) && Xt.plugins.register(Er[Pr]);
    Xt.platform.initialize();
    var jr = Xt;
    return "undefined" != typeof window && (window.Chart = Xt), Xt.Chart = Xt, Xt.Legend = Er.legend._element, Xt.Title = Er.title._element, Xt.pluginService = Xt.plugins, Xt.PluginBase = Xt.Element.extend({}), Xt.canvasHelpers = Xt.helpers.canvas, Xt.layoutService = Xt.layouts, Xt.LinearScaleBase = wn, Xt.helpers.each(["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"], (function(e) {
      Xt[e] = function(t, n) {
        return new Xt(t, Xt.helpers.merge(n || {}, {
          type: e.charAt(0).toLowerCase() + e.slice(1)
        }))
      }
    })), jr
  }(function() {
    try {
      return n(2)
    } catch (e) {}
  }())
}, function(e, t, n) {
  var r = n(155);
  e.exports = function(e, t) {
    return r(e, t)
  }
}, , function(e, t, n) {
  var r = n(39);
  e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
    return "String" == r(e) ? e.split("") : Object(e)
  }
}, function(e, t) {
  t.f = {}.propertyIsEnumerable
}, function(e, t, n) {
  var r = n(39),
    i = n(15)("toStringTag"),
    a = "Arguments" == r(function() {
      return arguments
    }());
  e.exports = function(e) {
    var t, n, o;
    return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
      try {
        return e[t]
      } catch (e) {}
    }(t = Object(e), i)) ? n : a ? r(t) : "Object" == (o = r(t)) && "function" == typeof t.callee ? "Arguments" : o
  }
}, function(e, t, n) {
  var r = n(12),
    i = n(33),
    a = n(15)("species");
  e.exports = function(e, t) {
    var n, o = r(e).constructor;
    return void 0 === o || null == (n = r(o)[a]) ? t : i(n)
  }
}, function(e, t) {
  e.exports = function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
}, function(e, t, n) {
  var r = n(105),
    i = n(632),
    a = n(633),
    o = r ? r.toStringTag : void 0;
  e.exports = function(e) {
    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : o && o in Object(e) ? i(e) : a(e)
  }
}, function(e, t) {
  e.exports = function(e) {
    return null != e && "object" == typeof e
  }
}, , , , function(e, t, n) {
  var r = n(18),
    i = n(10),
    a = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
  (e.exports = function(e, t) {
    return a[e] || (a[e] = void 0 !== t ? t : {})
  })("versions", []).push({
    version: r.version,
    mode: n(53) ? "pure" : "global",
    copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)"
  })
}, function(e, t, n) {
  var r = n(28),
    i = n(16),
    a = n(55);
  e.exports = function(e) {
    return function(t, n, o) {
      var s, l = r(t),
        u = i(l.length),
        c = a(o, u);
      if (e && n != n) {
        for (; u > c;)
          if ((s = l[c++]) != s) return !0
      } else
        for (; u > c; c++)
          if ((e || c in l) && l[c] === n) return e || c || 0;
      return !e && -1
    }
  }
}, function(e, t) {
  t.f = Object.getOwnPropertySymbols
}, function(e, t, n) {
  var r = n(39);
  e.exports = Array.isArray || function(e) {
    return "Array" == r(e)
  }
}, function(e, t, n) {
  var r = n(15)("iterator"),
    i = !1;
  try {
    var a = [7][r]();
    a.return = function() {
      i = !0
    }, Array.from(a, (function() {
      throw 2
    }))
  } catch (e) {}
  e.exports = function(e, t) {
    if (!t && !i) return !1;
    var n = !1;
    try {
      var a = [7],
        o = a[r]();
      o.next = function() {
        return {
          done: n = !0
        }
      }, a[r] = function() {
        return o
      }, e(a)
    } catch (e) {}
    return n
  }
}, function(e, t, n) {
  "use strict";
  var r = n(12);
  e.exports = function() {
    var e = r(this),
      t = "";
    return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
  }
}, function(e, t, n) {
  "use strict";
  var r = n(79),
    i = RegExp.prototype.exec;
  e.exports = function(e, t) {
    var n = e.exec;
    if ("function" == typeof n) {
      var a = n.call(e, t);
      if ("object" != typeof a) throw new TypeError("RegExp exec method returned something other than an Object or null");
      return a
    }
    if ("RegExp" !== r(e)) throw new TypeError("RegExp#exec called on incompatible receiver");
    return i.call(e, t)
  }
}, function(e, t, n) {
  "use strict";
  n(193);
  var r = n(24),
    i = n(27),
    a = n(11),
    o = n(40),
    s = n(15),
    l = n(140),
    u = s("species"),
    c = !a((function() {
      var e = /./;
      return e.exec = function() {
        var e = [];
        return e.groups = {
          a: "7"
        }, e
      }, "7" !== "".replace(e, "$<a>")
    })),
    d = function() {
      var e = /(?:)/,
        t = e.exec;
      e.exec = function() {
        return t.apply(this, arguments)
      };
      var n = "ab".split(e);
      return 2 === n.length && "a" === n[0] && "b" === n[1]
    }();
  e.exports = function(e, t, n) {
    var h = s(e),
      f = !a((function() {
        var t = {};
        return t[h] = function() {
          return 7
        }, 7 != "" [e](t)
      })),
      p = f ? !a((function() {
        var t = !1,
          n = /a/;
        return n.exec = function() {
          return t = !0, null
        }, "split" === e && (n.constructor = {}, n.constructor[u] = function() {
          return n
        }), n[h](""), !t
      })) : void 0;
    if (!f || !p || "replace" === e && !c || "split" === e && !d) {
      var m = /./ [h],
        _ = n(o, h, "" [e], (function(e, t, n, r, i) {
          return t.exec === l ? f && !i ? {
            done: !0,
            value: m.call(t, n, r)
          } : {
            done: !0,
            value: e.call(n, t, r)
          } : {
            done: !1
          }
        })),
        y = _[0],
        g = _[1];
      r(String.prototype, e, y), i(RegExp.prototype, h, 2 == t ? function(e, t) {
        return g.call(e, this, t)
      } : function(e) {
        return g.call(e, this)
      })
    }
  }
}, function(e, t, n) {
  var r = n(32),
    i = n(188),
    a = n(135),
    o = n(12),
    s = n(16),
    l = n(137),
    u = {},
    c = {};
  (t = e.exports = function(e, t, n, d, h) {
    var f, p, m, _, y = h ? function() {
        return e
      } : l(e),
      g = r(n, d, t ? 2 : 1),
      v = 0;
    if ("function" != typeof y) throw TypeError(e + " is not iterable!");
    if (a(y)) {
      for (f = s(e.length); f > v; v++)
        if ((_ = t ? g(o(p = e[v])[0], p[1]) : g(e[v])) === u || _ === c) return _
    } else
      for (m = y.call(e); !(p = m.next()).done;)
        if ((_ = i(m, g, p.value, t)) === u || _ === c) return _
  }).BREAK = u, t.RETURN = c
}, function(e, t, n) {
  var r = n(10).navigator;
  e.exports = r && r.userAgent || ""
}, function(e, t, n) {
  "use strict";
  var r = n(10),
    i = n(3),
    a = n(24),
    o = n(68),
    s = n(46),
    l = n(95),
    u = n(67),
    c = n(13),
    d = n(11),
    h = n(91),
    f = n(63),
    p = n(126);
  e.exports = function(e, t, n, m, _, y) {
    var g = r[e],
      v = g,
      b = _ ? "set" : "add",
      w = v && v.prototype,
      k = {},
      M = function(e) {
        var t = w[e];
        a(w, e, "delete" == e ? function(e) {
          return !(y && !c(e)) && t.call(this, 0 === e ? 0 : e)
        } : "has" == e ? function(e) {
          return !(y && !c(e)) && t.call(this, 0 === e ? 0 : e)
        } : "get" == e ? function(e) {
          return y && !c(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
        } : "add" == e ? function(e) {
          return t.call(this, 0 === e ? 0 : e), this
        } : function(e, n) {
          return t.call(this, 0 === e ? 0 : e, n), this
        })
      };
    if ("function" == typeof v && (y || w.forEach && !d((function() {
        (new v).entries().next()
      })))) {
      var x = new v,
        L = x[b](y ? {} : -0, 1) != x,
        S = d((function() {
          x.has(1)
        })),
        T = h((function(e) {
          new v(e)
        })),
        D = !y && d((function() {
          for (var e = new v, t = 5; t--;) e[b](t, t);
          return !e.has(-0)
        }));
      T || ((v = t((function(t, n) {
        u(t, v, e);
        var r = p(new g, t, v);
        return null != n && l(n, _, r[b], r), r
      }))).prototype = w, w.constructor = v), (S || D) && (M("delete"), M("has"), _ && M("get")), (D || L) && M(b), y && w.clear && delete w.clear
    } else v = m.getConstructor(t, e, _, b), o(v.prototype, n), s.NEED = !0;
    return f(v, e), k[e] = v, i(i.G + i.W + i.F * (v != g), k), y || m.setStrong(v, e, _), v
  }
}, function(e, t, n) {
  for (var r, i = n(10), a = n(27), o = n(52), s = o("typed_array"), l = o("view"), u = !(!i.ArrayBuffer || !i.DataView), c = u, d = 0, h = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); d < 9;)(r = i[h[d++]]) ? (a(r.prototype, s, !0), a(r.prototype, l, !0)) : c = !1;
  e.exports = {
    ABV: u,
    CONSTR: c,
    TYPED: s,
    VIEW: l
  }
}, function(e, t) {
  var n;
  n = function() {
    return this
  }();
  try {
    n = n || new Function("return this")()
  } catch (e) {
    "object" == typeof window && (n = window)
  }
  e.exports = n
}, function(e, t) {
  t.encode = function(e) {
    var t = "";
    for (var n in e) e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
    return t
  }, t.decode = function(e) {
    for (var t = {}, n = e.split("&"), r = 0, i = n.length; r < i; r++) {
      var a = n[r].split("=");
      t[decodeURIComponent(a[0])] = decodeURIComponent(a[1])
    }
    return t
  }
}, function(e, t) {
  e.exports = function(e, t) {
    var n = function() {};
    n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
  }
}, function(e, t, n) {
  "use strict";
  var r = n(81);
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = function(e, t) {
    var n = a.default.memo(a.default.forwardRef((function(t, n) {
      return a.default.createElement(o.default, (0, i.default)({
        ref: n
      }, t), e)
    })));
    0;
    return n.muiName = o.default.muiName, n
  };
  var i = r(n(618)),
    a = r(n(0)),
    o = r(n(711))
}, function(e, t, n) {
  var r = n(621),
    i = n(622),
    a = n(623),
    o = n(624),
    s = n(625);

  function l(e) {
    var t = -1,
      n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
      var r = e[t];
      this.set(r[0], r[1])
    }
  }
  l.prototype.clear = r, l.prototype.delete = i, l.prototype.get = a, l.prototype.has = o, l.prototype.set = s, e.exports = l
}, function(e, t, n) {
  var r = n(352);
  e.exports = function(e, t) {
    for (var n = e.length; n--;)
      if (r(e[n][0], t)) return n;
    return -1
  }
}, function(e, t, n) {
  var r = n(42).Symbol;
  e.exports = r
}, function(e, t, n) {
  var r = n(61)(Object, "create");
  e.exports = r
}, function(e, t, n) {
  var r = n(645);
  e.exports = function(e, t) {
    var n = e.__data__;
    return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
  }
}, function(e, t, n) {
  var r = n(162);
  e.exports = function(e) {
    if ("string" == typeof e || r(e)) return e;
    var t = e + "";
    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
  }
}, function(e, t, n) {
  "use strict";
  var r = n(0),
    i = n.n(r).a.createContext(null);
  t.a = i
}, function(e, t, n) {
  "use strict";
  t.a = {
    mobileStepper: 1e3,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  }
}, function(e, t, n) {
  "use strict";
  var r = "function" == typeof Symbol && Symbol.for;
  t.a = r ? Symbol.for("mui.nested") : "__THEME_NESTED__"
}, function(e, t, n) {
  "use strict";
  (function(e) {
    n.d(t, "b", (function() {
      return b
    })), n.d(t, "a", (function() {
      return w
    }));
    var r = n(0),
      i = n.n(r),
      a = n(6),
      o = n.n(a),
      s = n(74),
      l = n.n(s),
      u = n(75),
      c = n.n(u),
      d = n(371),
      h = n.n(d),
      f = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      };

    function p(e, t) {
      var n = {};
      for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
      return n
    }

    function m(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function _(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function y(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var g = void 0 !== e && e.env && "production",
      v = function(e) {
        function t() {
          m(this, t);
          var n = _(this, e.call(this));
          return n.handleOnClick = function(e) {
            var t = n.chartInstance,
              r = n.props,
              i = r.getDatasetAtEvent,
              a = r.getElementAtEvent,
              o = r.getElementsAtEvent,
              s = r.onElementsClick;
            i && i(t.getDatasetAtEvent(e), e), a && a(t.getElementAtEvent(e), e), o && o(t.getElementsAtEvent(e), e), s && s(t.getElementsAtEvent(e), e)
          }, n.ref = function(e) {
            n.element = e
          }, n.chartInstance = void 0, n
        }
        return y(t, e), t.prototype.componentDidMount = function() {
          this.renderChart()
        }, t.prototype.componentDidUpdate = function() {
          if (this.props.redraw) return this.destroyChart(), void this.renderChart();
          this.updateChart()
        }, t.prototype.shouldComponentUpdate = function(e) {
          var t = this.props,
            n = (t.redraw, t.type),
            r = t.options,
            i = t.plugins,
            a = t.legend,
            o = t.height,
            s = t.width;
          if (!0 === e.redraw) return !0;
          if (o !== e.height || s !== e.width) return !0;
          if (n !== e.type) return !0;
          if (!c()(a, e.legend)) return !0;
          if (!c()(r, e.options)) return !0;
          var l = this.transformDataProp(e);
          return !c()(this.shadowDataProp, l) || !c()(i, e.plugins)
        }, t.prototype.componentWillUnmount = function() {
          this.destroyChart()
        }, t.prototype.transformDataProp = function(e) {
          var t = e.data;
          return "function" == typeof t ? t(this.element) : t
        }, t.prototype.memoizeDataProps = function() {
          if (this.props.data) {
            var e = this.transformDataProp(this.props);
            return this.shadowDataProp = f({}, e, {
              datasets: e.datasets && e.datasets.map((function(e) {
                return f({}, e)
              }))
            }), this.saveCurrentDatasets(), e
          }
        }, t.prototype.checkDatasets = function(e) {
          var n = "production" !== g && "prod" !== g,
            r = this.props.datasetKeyProvider !== t.getLabelAsKey,
            i = e.length > 1;
          if (n && i && !r) {
            var a = !1;
            e.forEach((function(e) {
              e.label || (a = !0)
            })), a && console.error('[react-chartjs-2] Warning: Each dataset needs a unique key. By default, the "label" property on each dataset is used. Alternatively, you may provide a "datasetKeyProvider" as a prop that returns a unique key.')
          }
        }, t.prototype.getCurrentDatasets = function() {
          return this.chartInstance && this.chartInstance.config.data && this.chartInstance.config.data.datasets || []
        }, t.prototype.saveCurrentDatasets = function() {
          var e = this;
          this.datasets = this.datasets || {}, this.getCurrentDatasets().forEach((function(t) {
            e.datasets[e.props.datasetKeyProvider(t)] = t
          }))
        }, t.prototype.updateChart = function() {
          var e = this,
            t = this.props.options,
            n = this.memoizeDataProps(this.props);
          if (this.chartInstance) {
            t && (this.chartInstance.options = l.a.helpers.configMerge(this.chartInstance.options, t));
            var r = this.getCurrentDatasets(),
              i = n.datasets || [];
            this.checkDatasets(r);
            var a = h()(r, this.props.datasetKeyProvider);
            this.chartInstance.config.data.datasets = i.map((function(t) {
              var n = a[e.props.datasetKeyProvider(t)];
              if (n && n.type === t.type && t.data) {
                n.data.splice(t.data.length), t.data.forEach((function(e, r) {
                  n.data[r] = t.data[r]
                }));
                t.data;
                var r = p(t, ["data"]);
                return f({}, n, r)
              }
              return t
            }));
            n.datasets;
            var o = p(n, ["datasets"]);
            this.chartInstance.config.data = f({}, this.chartInstance.config.data, o), this.chartInstance.update()
          }
        }, t.prototype.renderChart = function() {
          var e = this.props,
            n = e.options,
            r = e.legend,
            i = e.type,
            a = e.plugins,
            o = this.element,
            s = this.memoizeDataProps();
          void 0 === r || c()(t.defaultProps.legend, r) || (n.legend = r), this.chartInstance = new l.a(o, {
            type: i,
            data: s,
            options: n,
            plugins: a
          })
        }, t.prototype.destroyChart = function() {
          this.saveCurrentDatasets();
          var e = Object.values(this.datasets);
          this.chartInstance.config.data.datasets = e, this.chartInstance.destroy()
        }, t.prototype.render = function() {
          var e = this.props,
            t = e.height,
            n = e.width,
            r = e.id;
          return i.a.createElement("canvas", {
            ref: this.ref,
            height: t,
            width: n,
            id: r,
            onClick: this.handleOnClick
          })
        }, t
      }(i.a.Component);
    v.getLabelAsKey = function(e) {
      return e.label
    }, v.propTypes = {
      data: o.a.oneOfType([o.a.object, o.a.func]).isRequired,
      getDatasetAtEvent: o.a.func,
      getElementAtEvent: o.a.func,
      getElementsAtEvent: o.a.func,
      height: o.a.number,
      legend: o.a.object,
      onElementsClick: o.a.func,
      options: o.a.object,
      plugins: o.a.arrayOf(o.a.object),
      redraw: o.a.bool,
      type: function(e, t, n) {
        if (!l.a.controllers[e[t]]) return new Error("Invalid chart type `" + e[t] + "` supplied to `" + n + "`.")
      },
      width: o.a.number,
      datasetKeyProvider: o.a.func
    }, v.defaultProps = {
      legend: {
        display: !0,
        position: "bottom"
      },
      type: "doughnut",
      height: 150,
      width: 300,
      redraw: !1,
      options: {},
      datasetKeyProvider: v.getLabelAsKey
    };
    ! function(e) {
      function t() {
        return m(this, t), _(this, e.apply(this, arguments))
      }
      y(t, e), t.prototype.render = function() {
        var e = this;
        return i.a.createElement(v, f({}, this.props, {
          ref: function(t) {
            return e.chartInstance = t && t.chartInstance
          },
          type: "doughnut"
        }))
      }
    }(i.a.Component);
    var b = function(e) {
        function t() {
          return m(this, t), _(this, e.apply(this, arguments))
        }
        return y(t, e), t.prototype.render = function() {
          var e = this;
          return i.a.createElement(v, f({}, this.props, {
            ref: function(t) {
              return e.chartInstance = t && t.chartInstance
            },
            type: "pie"
          }))
        }, t
      }(i.a.Component),
      w = function(e) {
        function t() {
          return m(this, t), _(this, e.apply(this, arguments))
        }
        return y(t, e), t.prototype.render = function() {
          var e = this;
          return i.a.createElement(v, f({}, this.props, {
            ref: function(t) {
              return e.chartInstance = t && t.chartInstance
            },
            type: "line"
          }))
        }, t
      }(i.a.Component);
    (function(e) {
      function t() {
        return m(this, t), _(this, e.apply(this, arguments))
      }
      y(t, e), t.prototype.render = function() {
        var e = this;
        return i.a.createElement(v, f({}, this.props, {
          ref: function(t) {
            return e.chartInstance = t && t.chartInstance
          },
          type: "bar"
        }))
      }
    })(i.a.Component),
    function(e) {
      function t() {
        return m(this, t), _(this, e.apply(this, arguments))
      }
      y(t, e), t.prototype.render = function() {
        var e = this;
        return i.a.createElement(v, f({}, this.props, {
          ref: function(t) {
            return e.chartInstance = t && t.chartInstance
          },
          type: "horizontalBar"
        }))
      }
    }(i.a.Component),
    function(e) {
      function t() {
        return m(this, t), _(this, e.apply(this, arguments))
      }
      y(t, e), t.prototype.render = function() {
        var e = this;
        return i.a.createElement(v, f({}, this.props, {
          ref: function(t) {
            return e.chartInstance = t && t.chartInstance
          },
          type: "radar"
        }))
      }
    }(i.a.Component),
    function(e) {
      function t() {
        return m(this, t), _(this, e.apply(this, arguments))
      }
      y(t, e), t.prototype.render = function() {
        var e = this;
        return i.a.createElement(v, f({}, this.props, {
          ref: function(t) {
            return e.chartInstance = t && t.chartInstance
          },
          type: "polarArea"
        }))
      }
    }(i.a.Component),
    function(e) {
      function t() {
        return m(this, t), _(this, e.apply(this, arguments))
      }
      y(t, e), t.prototype.render = function() {
        var e = this;
        return i.a.createElement(v, f({}, this.props, {
          ref: function(t) {
            return e.chartInstance = t && t.chartInstance
          },
          type: "bubble"
        }))
      }
    }(i.a.Component),
    function(e) {
      function t() {
        return m(this, t), _(this, e.apply(this, arguments))
      }
      y(t, e), t.prototype.render = function() {
        var e = this;
        return i.a.createElement(v, f({}, this.props, {
          ref: function(t) {
            return e.chartInstance = t && t.chartInstance
          },
          type: "scatter"
        }))
      }
    }(i.a.Component), l.a.defaults
  }).call(this, n(147))
}, function(e, t, n) {
  "use strict";
  t.a = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853"
  }
}, function(e, t) {
  e.exports = {
    homepage: "homepage",
    place: "place",
    navigation: "navigation",
    captchaToken: "captchaToken"
  }
}, , , , , function(e, t, n) {
  var r = n(13),
    i = n(10).document,
    a = r(i) && r(i.createElement);
  e.exports = function(e) {
    return a ? i.createElement(e) : {}
  }
}, function(e, t, n) {
  t.f = n(15)
}, function(e, t, n) {
  var r = n(87)("keys"),
    i = n(52);
  e.exports = function(e) {
    return r[e] || (r[e] = i(e))
  }
}, function(e, t) {
  e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, t, n) {
  var r = n(10).document;
  e.exports = r && r.documentElement
}, function(e, t, n) {
  var r = n(13),
    i = n(12),
    a = function(e, t) {
      if (i(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
    };
  e.exports = {
    set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, r) {
      try {
        (r = n(32)(Function.call, n(35).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
      } catch (e) {
        t = !0
      }
      return function(e, n) {
        return a(e, n), t ? e.__proto__ = n : r(e, n), e
      }
    }({}, !1) : void 0),
    check: a
  }
}, function(e, t) {
  e.exports = "\t\n\v\f\r  áš€á â€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff"
}, function(e, t, n) {
  var r = n(13),
    i = n(124).set;
  e.exports = function(e, t, n) {
    var a, o = t.constructor;
    return o !== n && "function" == typeof o && (a = o.prototype) !== n.prototype && r(a) && i && i(e, a), e
  }
}, function(e, t, n) {
  "use strict";
  var r = n(34),
    i = n(40);
  e.exports = function(e) {
    var t = String(i(this)),
      n = "",
      a = r(e);
    if (a < 0 || a == 1 / 0) throw RangeError("Count can't be negative");
    for (; a > 0;
      (a >>>= 1) && (t += t)) 1 & a && (n += t);
    return n
  }
}, function(e, t) {
  e.exports = Math.sign || function(e) {
    return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1
  }
}, function(e, t) {
  var n = Math.expm1;
  e.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -2e-17 != n(-2e-17) ? function(e) {
    return 0 == (e = +e) ? e : e > -1e-6 && e < 1e-6 ? e + e * e / 2 : Math.exp(e) - 1
  } : n
}, function(e, t, n) {
  var r = n(34),
    i = n(40);
  e.exports = function(e) {
    return function(t, n) {
      var a, o, s = String(i(t)),
        l = r(n),
        u = s.length;
      return l < 0 || l >= u ? e ? "" : void 0 : (a = s.charCodeAt(l)) < 55296 || a > 56319 || l + 1 === u || (o = s.charCodeAt(l + 1)) < 56320 || o > 57343 ? e ? s.charAt(l) : a : e ? s.slice(l, l + 2) : o - 56320 + (a - 55296 << 10) + 65536
    }
  }
}, function(e, t, n) {
  "use strict";
  var r = n(53),
    i = n(3),
    a = n(24),
    o = n(27),
    s = n(65),
    l = n(187),
    u = n(63),
    c = n(58),
    d = n(15)("iterator"),
    h = !([].keys && "next" in [].keys()),
    f = function() {
      return this
    };
  e.exports = function(e, t, n, p, m, _, y) {
    l(n, t, p);
    var g, v, b, w = function(e) {
        if (!h && e in L) return L[e];
        switch (e) {
          case "keys":
          case "values":
            return function() {
              return new n(this, e)
            }
        }
        return function() {
          return new n(this, e)
        }
      },
      k = t + " Iterator",
      M = "values" == m,
      x = !1,
      L = e.prototype,
      S = L[d] || L["@@iterator"] || m && L[m],
      T = S || w(m),
      D = m ? M ? w("entries") : T : void 0,
      E = "Array" == t && L.entries || S;
    if (E && (b = c(E.call(new e))) !== Object.prototype && b.next && (u(b, k, !0), r || "function" == typeof b[d] || o(b, d, f)), M && S && "values" !== S.name && (x = !0, T = function() {
        return S.call(this)
      }), r && !y || !h && !x && L[d] || o(L, d, T), s[t] = T, s[k] = f, m)
      if (g = {
          values: M ? T : w("values"),
          keys: _ ? T : w("keys"),
          entries: D
        }, y)
        for (v in g) v in L || a(L, v, g[v]);
      else i(i.P + i.F * (h || x), t, g);
    return g
  }
}, function(e, t, n) {
  var r = n(133),
    i = n(40);
  e.exports = function(e, t, n) {
    if (r(t)) throw TypeError("String#" + n + " doesn't accept regex!");
    return String(i(e))
  }
}, function(e, t, n) {
  var r = n(13),
    i = n(39),
    a = n(15)("match");
  e.exports = function(e) {
    var t;
    return r(e) && (void 0 !== (t = e[a]) ? !!t : "RegExp" == i(e))
  }
}, function(e, t, n) {
  var r = n(15)("match");
  e.exports = function(e) {
    var t = /./;
    try {
      "/./" [e](t)
    } catch (n) {
      try {
        return t[r] = !1, !"/./" [e](t)
      } catch (e) {}
    }
    return !0
  }
}, function(e, t, n) {
  var r = n(65),
    i = n(15)("iterator"),
    a = Array.prototype;
  e.exports = function(e) {
    return void 0 !== e && (r.Array === e || a[i] === e)
  }
}, function(e, t, n) {
  "use strict";
  var r = n(22),
    i = n(51);
  e.exports = function(e, t, n) {
    t in e ? r.f(e, t, i(0, n)) : e[t] = n
  }
}, function(e, t, n) {
  var r = n(79),
    i = n(15)("iterator"),
    a = n(65);
  e.exports = n(18).getIteratorMethod = function(e) {
    if (null != e) return e[i] || e["@@iterator"] || a[r(e)]
  }
}, function(e, t, n) {
  "use strict";
  var r = n(23),
    i = n(55),
    a = n(16);
  e.exports = function(e) {
    for (var t = r(this), n = a(t.length), o = arguments.length, s = i(o > 1 ? arguments[1] : void 0, n), l = o > 2 ? arguments[2] : void 0, u = void 0 === l ? n : i(l, n); u > s;) t[s++] = e;
    return t
  }
}, function(e, t, n) {
  "use strict";
  var r = n(59),
    i = n(192),
    a = n(65),
    o = n(28);
  e.exports = n(131)(Array, "Array", (function(e, t) {
    this._t = o(e), this._i = 0, this._k = t
  }), (function() {
    var e = this._t,
      t = this._k,
      n = this._i++;
    return !e || n >= e.length ? (this._t = void 0, i(1)) : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
  }), "values"), a.Arguments = a.Array, r("keys"), r("values"), r("entries")
}, function(e, t, n) {
  "use strict";
  var r, i, a = n(92),
    o = RegExp.prototype.exec,
    s = String.prototype.replace,
    l = o,
    u = (r = /a/, i = /b*/g, o.call(r, "a"), o.call(i, "a"), 0 !== r.lastIndex || 0 !== i.lastIndex),
    c = void 0 !== /()??/.exec("")[1];
  (u || c) && (l = function(e) {
    var t, n, r, i, l = this;
    return c && (n = new RegExp("^" + l.source + "$(?!\\s)", a.call(l))), u && (t = l.lastIndex), r = o.call(l, e), u && r && (l.lastIndex = l.global ? r.index + r[0].length : t), c && r && r.length > 1 && s.call(r[0], n, (function() {
      for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (r[i] = void 0)
    })), r
  }), e.exports = l
}, function(e, t, n) {
  "use strict";
  var r = n(130)(!0);
  e.exports = function(e, t, n) {
    return t + (n ? r(e, t).length : 1)
  }
}, function(e, t, n) {
  var r, i, a, o = n(32),
    s = n(181),
    l = n(123),
    u = n(119),
    c = n(10),
    d = c.process,
    h = c.setImmediate,
    f = c.clearImmediate,
    p = c.MessageChannel,
    m = c.Dispatch,
    _ = 0,
    y = {},
    g = function() {
      var e = +this;
      if (y.hasOwnProperty(e)) {
        var t = y[e];
        delete y[e], t()
      }
    },
    v = function(e) {
      g.call(e.data)
    };
  h && f || (h = function(e) {
    for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
    return y[++_] = function() {
      s("function" == typeof e ? e : Function(e), t)
    }, r(_), _
  }, f = function(e) {
    delete y[e]
  }, "process" == n(39)(d) ? r = function(e) {
    d.nextTick(o(g, e, 1))
  } : m && m.now ? r = function(e) {
    m.now(o(g, e, 1))
  } : p ? (a = (i = new p).port2, i.port1.onmessage = v, r = o(a.postMessage, a, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts ? (r = function(e) {
    c.postMessage(e + "", "*")
  }, c.addEventListener("message", v, !1)) : r = "onreadystatechange" in u("script") ? function(e) {
    l.appendChild(u("script")).onreadystatechange = function() {
      l.removeChild(this), g.call(e)
    }
  } : function(e) {
    setTimeout(o(g, e, 1), 0)
  }), e.exports = {
    set: h,
    clear: f
  }
}, function(e, t, n) {
  "use strict";
  var r = n(10),
    i = n(21),
    a = n(53),
    o = n(98),
    s = n(27),
    l = n(68),
    u = n(11),
    c = n(67),
    d = n(34),
    h = n(16),
    f = n(200),
    p = n(57).f,
    m = n(22).f,
    _ = n(138),
    y = n(63),
    g = r.ArrayBuffer,
    v = r.DataView,
    b = r.Math,
    w = r.RangeError,
    k = r.Infinity,
    M = g,
    x = b.abs,
    L = b.pow,
    S = b.floor,
    T = b.log,
    D = b.LN2,
    E = i ? "_b" : "buffer",
    Y = i ? "_l" : "byteLength",
    C = i ? "_o" : "byteOffset";

  function O(e, t, n) {
    var r, i, a, o = new Array(n),
      s = 8 * n - t - 1,
      l = (1 << s) - 1,
      u = l >> 1,
      c = 23 === t ? L(2, -24) - L(2, -77) : 0,
      d = 0,
      h = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
    for ((e = x(e)) != e || e === k ? (i = e != e ? 1 : 0, r = l) : (r = S(T(e) / D), e * (a = L(2, -r)) < 1 && (r--, a *= 2), (e += r + u >= 1 ? c / a : c * L(2, 1 - u)) * a >= 2 && (r++, a /= 2), r + u >= l ? (i = 0, r = l) : r + u >= 1 ? (i = (e * a - 1) * L(2, t), r += u) : (i = e * L(2, u - 1) * L(2, t), r = 0)); t >= 8; o[d++] = 255 & i, i /= 256, t -= 8);
    for (r = r << t | i, s += t; s > 0; o[d++] = 255 & r, r /= 256, s -= 8);
    return o[--d] |= 128 * h, o
  }

  function P(e, t, n) {
    var r, i = 8 * n - t - 1,
      a = (1 << i) - 1,
      o = a >> 1,
      s = i - 7,
      l = n - 1,
      u = e[l--],
      c = 127 & u;
    for (u >>= 7; s > 0; c = 256 * c + e[l], l--, s -= 8);
    for (r = c & (1 << -s) - 1, c >>= -s, s += t; s > 0; r = 256 * r + e[l], l--, s -= 8);
    if (0 === c) c = 1 - o;
    else {
      if (c === a) return r ? NaN : u ? -k : k;
      r += L(2, t), c -= o
    }
    return (u ? -1 : 1) * r * L(2, c - t)
  }

  function j(e) {
    return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
  }

  function A(e) {
    return [255 & e]
  }

  function R(e) {
    return [255 & e, e >> 8 & 255]
  }

  function I(e) {
    return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
  }

  function H(e) {
    return O(e, 52, 8)
  }

  function F(e) {
    return O(e, 23, 4)
  }

  function z(e, t, n) {
    m(e.prototype, t, {
      get: function() {
        return this[n]
      }
    })
  }

  function N(e, t, n, r) {
    var i = f(+n);
    if (i + t > e[Y]) throw w("Wrong index!");
    var a = e[E]._b,
      o = i + e[C],
      s = a.slice(o, o + t);
    return r ? s : s.reverse()
  }

  function W(e, t, n, r, i, a) {
    var o = f(+n);
    if (o + t > e[Y]) throw w("Wrong index!");
    for (var s = e[E]._b, l = o + e[C], u = r(+i), c = 0; c < t; c++) s[l + c] = u[a ? c : t - c - 1]
  }
  if (o.ABV) {
    if (!u((function() {
        g(1)
      })) || !u((function() {
        new g(-1)
      })) || u((function() {
        return new g, new g(1.5), new g(NaN), "ArrayBuffer" != g.name
      }))) {
      for (var B, U = (g = function(e) {
          return c(this, g), new M(f(e))
        }).prototype = M.prototype, V = p(M), G = 0; V.length > G;)(B = V[G++]) in g || s(g, B, M[B]);
      a || (U.constructor = g)
    }
    var q = new v(new g(2)),
      $ = v.prototype.setInt8;
    q.setInt8(0, 2147483648), q.setInt8(1, 2147483649), !q.getInt8(0) && q.getInt8(1) || l(v.prototype, {
      setInt8: function(e, t) {
        $.call(this, e, t << 24 >> 24)
      },
      setUint8: function(e, t) {
        $.call(this, e, t << 24 >> 24)
      }
    }, !0)
  } else g = function(e) {
    c(this, g, "ArrayBuffer");
    var t = f(e);
    this._b = _.call(new Array(t), 0), this[Y] = t
  }, v = function(e, t, n) {
    c(this, v, "DataView"), c(e, g, "DataView");
    var r = e[Y],
      i = d(t);
    if (i < 0 || i > r) throw w("Wrong offset!");
    if (i + (n = void 0 === n ? r - i : h(n)) > r) throw w("Wrong length!");
    this[E] = e, this[C] = i, this[Y] = n
  }, i && (z(g, "byteLength", "_l"), z(v, "buffer", "_b"), z(v, "byteLength", "_l"), z(v, "byteOffset", "_o")), l(v.prototype, {
    getInt8: function(e) {
      return N(this, 1, e)[0] << 24 >> 24
    },
    getUint8: function(e) {
      return N(this, 1, e)[0]
    },
    getInt16: function(e) {
      var t = N(this, 2, e, arguments[1]);
      return (t[1] << 8 | t[0]) << 16 >> 16
    },
    getUint16: function(e) {
      var t = N(this, 2, e, arguments[1]);
      return t[1] << 8 | t[0]
    },
    getInt32: function(e) {
      return j(N(this, 4, e, arguments[1]))
    },
    getUint32: function(e) {
      return j(N(this, 4, e, arguments[1])) >>> 0
    },
    getFloat32: function(e) {
      return P(N(this, 4, e, arguments[1]), 23, 4)
    },
    getFloat64: function(e) {
      return P(N(this, 8, e, arguments[1]), 52, 8)
    },
    setInt8: function(e, t) {
      W(this, 1, e, A, t)
    },
    setUint8: function(e, t) {
      W(this, 1, e, A, t)
    },
    setInt16: function(e, t) {
      W(this, 2, e, R, t, arguments[2])
    },
    setUint16: function(e, t) {
      W(this, 2, e, R, t, arguments[2])
    },
    setInt32: function(e, t) {
      W(this, 4, e, I, t, arguments[2])
    },
    setUint32: function(e, t) {
      W(this, 4, e, I, t, arguments[2])
    },
    setFloat32: function(e, t) {
      W(this, 4, e, F, t, arguments[2])
    },
    setFloat64: function(e, t) {
      W(this, 8, e, H, t, arguments[2])
    }
  });
  y(g, "ArrayBuffer"), y(v, "DataView"), s(v.prototype, o.VIEW, !0), t.ArrayBuffer = g, t.DataView = v
}, function(e, t) {
  var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
  "number" == typeof __g && (__g = n)
}, function(e, t) {
  e.exports = function(e) {
    return "object" == typeof e ? null !== e : "function" == typeof e
  }
}, function(e, t, n) {
  e.exports = !n(205)((function() {
    return 7 != Object.defineProperty({}, "a", {
      get: function() {
        return 7
      }
    }).a
  }))
}, function(e, t) {
  var n, r, i = e.exports = {};

  function a() {
    throw new Error("setTimeout has not been defined")
  }

  function o() {
    throw new Error("clearTimeout has not been defined")
  }

  function s(e) {
    if (n === setTimeout) return setTimeout(e, 0);
    if ((n === a || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
    try {
      return n(e, 0)
    } catch (t) {
      try {
        return n.call(null, e, 0)
      } catch (t) {
        return n.call(this, e, 0)
      }
    }
  }! function() {
    try {
      n = "function" == typeof setTimeout ? setTimeout : a
    } catch (e) {
      n = a
    }
    try {
      r = "function" == typeof clearTimeout ? clearTimeout : o
    } catch (e) {
      r = o
    }
  }();
  var l, u = [],
    c = !1,
    d = -1;

  function h() {
    c && l && (c = !1, l.length ? u = l.concat(u) : d = -1, u.length && f())
  }

  function f() {
    if (!c) {
      var e = s(h);
      c = !0;
      for (var t = u.length; t;) {
        for (l = u, u = []; ++d < t;) l && l[d].run();
        d = -1, t = u.length
      }
      l = null, c = !1,
        function(e) {
          if (r === clearTimeout) return clearTimeout(e);
          if ((r === o || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
          try {
            r(e)
          } catch (t) {
            try {
              return r.call(null, e)
            } catch (t) {
              return r.call(this, e)
            }
          }
        }(e)
    }
  }

  function p(e, t) {
    this.fun = e, this.array = t
  }

  function m() {}
  i.nextTick = function(e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    u.push(new p(e, t)), 1 !== u.length || c || s(f)
  }, p.prototype.run = function() {
    this.fun.apply(null, this.array)
  }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function(e) {
    return []
  }, i.binding = function(e) {
    throw new Error("process.binding is not supported")
  }, i.cwd = function() {
    return "/"
  }, i.chdir = function(e) {
    throw new Error("process.chdir is not supported")
  }, i.umask = function() {
    return 0
  }
}, function(e, t, n) {
  var r = n(582)("socket.io-parser"),
    i = n(69),
    a = n(585),
    o = n(149),
    s = n(208);

  function l() {}
  t.protocol = 4, t.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], t.CONNECT = 0, t.DISCONNECT = 1, t.EVENT = 2, t.ACK = 3, t.ERROR = 4, t.BINARY_EVENT = 5, t.BINARY_ACK = 6, t.Encoder = l, t.Decoder = d;
  var u = t.ERROR + '"encode error"';

  function c(e) {
    var n = "" + e.type;
    if (t.BINARY_EVENT !== e.type && t.BINARY_ACK !== e.type || (n += e.attachments + "-"), e.nsp && "/" !== e.nsp && (n += e.nsp + ","), null != e.id && (n += e.id), null != e.data) {
      var i = function(e) {
        try {
          return JSON.stringify(e)
        } catch (e) {
          return !1
        }
      }(e.data);
      if (!1 === i) return u;
      n += i
    }
    return r("encoded %j as %s", e, n), n
  }

  function d() {
    this.reconstructor = null
  }

  function h(e) {
    this.reconPack = e, this.buffers = []
  }

  function f(e) {
    return {
      type: t.ERROR,
      data: "parser error: " + e
    }
  }
  l.prototype.encode = function(e, n) {
    (r("encoding packet %j", e), t.BINARY_EVENT === e.type || t.BINARY_ACK === e.type) ? function(e, t) {
      a.removeBlobs(e, (function(e) {
        var n = a.deconstructPacket(e),
          r = c(n.packet),
          i = n.buffers;
        i.unshift(r), t(i)
      }))
    }(e, n) : n([c(e)])
  }, i(d.prototype), d.prototype.add = function(e) {
    var n;
    if ("string" == typeof e) n = function(e) {
      var n = 0,
        i = {
          type: Number(e.charAt(0))
        };
      if (null == t.types[i.type]) return f("unknown packet type " + i.type);
      if (t.BINARY_EVENT === i.type || t.BINARY_ACK === i.type) {
        for (var a = "";
          "-" !== e.charAt(++n) && (a += e.charAt(n), n != e.length););
        if (a != Number(a) || "-" !== e.charAt(n)) throw new Error("Illegal attachments");
        i.attachments = Number(a)
      }
      if ("/" === e.charAt(n + 1))
        for (i.nsp = ""; ++n;) {
          if ("," === (l = e.charAt(n))) break;
          if (i.nsp += l, n === e.length) break
        } else i.nsp = "/";
      var s = e.charAt(n + 1);
      if ("" !== s && Number(s) == s) {
        for (i.id = ""; ++n;) {
          var l;
          if (null == (l = e.charAt(n)) || Number(l) != l) {
            --n;
            break
          }
          if (i.id += e.charAt(n), n === e.length) break
        }
        i.id = Number(i.id)
      }
      if (e.charAt(++n)) {
        var u = function(e) {
          try {
            return JSON.parse(e)
          } catch (e) {
            return !1
          }
        }(e.substr(n));
        if (!(!1 !== u && (i.type === t.ERROR || o(u)))) return f("invalid payload");
        i.data = u
      }
      return r("decoded %s as %j", e, i), i
    }(e), t.BINARY_EVENT === n.type || t.BINARY_ACK === n.type ? (this.reconstructor = new h(n), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", n)) : this.emit("decoded", n);
    else {
      if (!s(e) && !e.base64) throw new Error("Unknown type: " + e);
      if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
      (n = this.reconstructor.takeBinaryData(e)) && (this.reconstructor = null, this.emit("decoded", n))
    }
  }, d.prototype.destroy = function() {
    this.reconstructor && this.reconstructor.finishedReconstruction()
  }, h.prototype.takeBinaryData = function(e) {
    if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
      var t = a.reconstructPacket(this.reconPack, this.buffers);
      return this.finishedReconstruction(), t
    }
    return null
  }, h.prototype.finishedReconstruction = function() {
    this.reconPack = null, this.buffers = []
  }
}, function(e, t) {
  var n = {}.toString;
  e.exports = Array.isArray || function(e) {
    return "[object Array]" == n.call(e)
  }
}, function(e, t, n) {
  "use strict";
  (function(e) {
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <http://feross.org>
     * @license  MIT
     */
    var r = n(586),
      i = n(587),
      a = n(588);

    function o() {
      return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
    }

    function s(e, t) {
      if (o() < t) throw new RangeError("Invalid typed array length");
      return l.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = l.prototype : (null === e && (e = new l(t)), e.length = t), e
    }

    function l(e, t, n) {
      if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l)) return new l(e, t, n);
      if ("number" == typeof e) {
        if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
        return d(this, e)
      }
      return u(this, e, t, n)
    }

    function u(e, t, n, r) {
      if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
      return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, r) {
        if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
        if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
        t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
        l.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = l.prototype : e = h(e, t);
        return e
      }(e, t, n, r) : "string" == typeof t ? function(e, t, n) {
        "string" == typeof n && "" !== n || (n = "utf8");
        if (!l.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
        var r = 0 | p(t, n),
          i = (e = s(e, r)).write(t, n);
        i !== r && (e = e.slice(0, i));
        return e
      }(e, t, n) : function(e, t) {
        if (l.isBuffer(t)) {
          var n = 0 | f(t.length);
          return 0 === (e = s(e, n)).length ? e : (t.copy(e, 0, 0, n), e)
        }
        if (t) {
          if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? s(e, 0) : h(e, t);
          if ("Buffer" === t.type && a(t.data)) return h(e, t.data)
        }
        var r;
        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
      }(e, t)
    }

    function c(e) {
      if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
      if (e < 0) throw new RangeError('"size" argument must not be negative')
    }

    function d(e, t) {
      if (c(t), e = s(e, t < 0 ? 0 : 0 | f(t)), !l.TYPED_ARRAY_SUPPORT)
        for (var n = 0; n < t; ++n) e[n] = 0;
      return e
    }

    function h(e, t) {
      var n = t.length < 0 ? 0 : 0 | f(t.length);
      e = s(e, n);
      for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
      return e
    }

    function f(e) {
      if (e >= o()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o().toString(16) + " bytes");
      return 0 | e
    }

    function p(e, t) {
      if (l.isBuffer(e)) return e.length;
      if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
      "string" != typeof e && (e = "" + e);
      var n = e.length;
      if (0 === n) return 0;
      for (var r = !1;;) switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
          return n;
        case "utf8":
        case "utf-8":
        case void 0:
          return z(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return 2 * n;
        case "hex":
          return n >>> 1;
        case "base64":
          return N(e).length;
        default:
          if (r) return z(e).length;
          t = ("" + t).toLowerCase(), r = !0
      }
    }

    function m(e, t, n) {
      var r = !1;
      if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
      if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
      if ((n >>>= 0) <= (t >>>= 0)) return "";
      for (e || (e = "utf8");;) switch (e) {
        case "hex":
          return E(this, t, n);
        case "utf8":
        case "utf-8":
          return S(this, t, n);
        case "ascii":
          return T(this, t, n);
        case "latin1":
        case "binary":
          return D(this, t, n);
        case "base64":
          return L(this, t, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Y(this, t, n);
        default:
          if (r) throw new TypeError("Unknown encoding: " + e);
          e = (e + "").toLowerCase(), r = !0
      }
    }

    function _(e, t, n) {
      var r = e[t];
      e[t] = e[n], e[n] = r
    }

    function y(e, t, n, r, i) {
      if (0 === e.length) return -1;
      if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
        if (i) return -1;
        n = e.length - 1
      } else if (n < 0) {
        if (!i) return -1;
        n = 0
      }
      if ("string" == typeof t && (t = l.from(t, r)), l.isBuffer(t)) return 0 === t.length ? -1 : g(e, t, n, r, i);
      if ("number" == typeof t) return t &= 255, l.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : g(e, [t], n, r, i);
      throw new TypeError("val must be string, number or Buffer")
    }

    function g(e, t, n, r, i) {
      var a, o = 1,
        s = e.length,
        l = t.length;
      if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
        if (e.length < 2 || t.length < 2) return -1;
        o = 2, s /= 2, l /= 2, n /= 2
      }

      function u(e, t) {
        return 1 === o ? e[t] : e.readUInt16BE(t * o)
      }
      if (i) {
        var c = -1;
        for (a = n; a < s; a++)
          if (u(e, a) === u(t, -1 === c ? 0 : a - c)) {
            if (-1 === c && (c = a), a - c + 1 === l) return c * o
          } else -1 !== c && (a -= a - c), c = -1
      } else
        for (n + l > s && (n = s - l), a = n; a >= 0; a--) {
          for (var d = !0, h = 0; h < l; h++)
            if (u(e, a + h) !== u(t, h)) {
              d = !1;
              break
            } if (d) return a
        }
      return -1
    }

    function v(e, t, n, r) {
      n = Number(n) || 0;
      var i = e.length - n;
      r ? (r = Number(r)) > i && (r = i) : r = i;
      var a = t.length;
      if (a % 2 != 0) throw new TypeError("Invalid hex string");
      r > a / 2 && (r = a / 2);
      for (var o = 0; o < r; ++o) {
        var s = parseInt(t.substr(2 * o, 2), 16);
        if (isNaN(s)) return o;
        e[n + o] = s
      }
      return o
    }

    function b(e, t, n, r) {
      return W(z(t, e.length - n), e, n, r)
    }

    function w(e, t, n, r) {
      return W(function(e) {
        for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
        return t
      }(t), e, n, r)
    }

    function k(e, t, n, r) {
      return w(e, t, n, r)
    }

    function M(e, t, n, r) {
      return W(N(t), e, n, r)
    }

    function x(e, t, n, r) {
      return W(function(e, t) {
        for (var n, r, i, a = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r);
        return a
      }(t, e.length - n), e, n, r)
    }

    function L(e, t, n) {
      return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
    }

    function S(e, t, n) {
      n = Math.min(e.length, n);
      for (var r = [], i = t; i < n;) {
        var a, o, s, l, u = e[i],
          c = null,
          d = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
        if (i + d <= n) switch (d) {
          case 1:
            u < 128 && (c = u);
            break;
          case 2:
            128 == (192 & (a = e[i + 1])) && (l = (31 & u) << 6 | 63 & a) > 127 && (c = l);
            break;
          case 3:
            a = e[i + 1], o = e[i + 2], 128 == (192 & a) && 128 == (192 & o) && (l = (15 & u) << 12 | (63 & a) << 6 | 63 & o) > 2047 && (l < 55296 || l > 57343) && (c = l);
            break;
          case 4:
            a = e[i + 1], o = e[i + 2], s = e[i + 3], 128 == (192 & a) && 128 == (192 & o) && 128 == (192 & s) && (l = (15 & u) << 18 | (63 & a) << 12 | (63 & o) << 6 | 63 & s) > 65535 && l < 1114112 && (c = l)
        }
        null === c ? (c = 65533, d = 1) : c > 65535 && (c -= 65536, r.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), r.push(c), i += d
      }
      return function(e) {
        var t = e.length;
        if (t <= 4096) return String.fromCharCode.apply(String, e);
        var n = "",
          r = 0;
        for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += 4096));
        return n
      }(r)
    }
    t.Buffer = l, t.SlowBuffer = function(e) {
      +e != e && (e = 0);
      return l.alloc(+e)
    }, t.INSPECT_MAX_BYTES = 50, l.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
      try {
        var e = new Uint8Array(1);
        return e.__proto__ = {
          __proto__: Uint8Array.prototype,
          foo: function() {
            return 42
          }
        }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
      } catch (e) {
        return !1
      }
    }(), t.kMaxLength = o(), l.poolSize = 8192, l._augment = function(e) {
      return e.__proto__ = l.prototype, e
    }, l.from = function(e, t, n) {
      return u(null, e, t, n)
    }, l.TYPED_ARRAY_SUPPORT && (l.prototype.__proto__ = Uint8Array.prototype, l.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && l[Symbol.species] === l && Object.defineProperty(l, Symbol.species, {
      value: null,
      configurable: !0
    })), l.alloc = function(e, t, n) {
      return function(e, t, n, r) {
        return c(t), t <= 0 ? s(e, t) : void 0 !== n ? "string" == typeof r ? s(e, t).fill(n, r) : s(e, t).fill(n) : s(e, t)
      }(null, e, t, n)
    }, l.allocUnsafe = function(e) {
      return d(null, e)
    }, l.allocUnsafeSlow = function(e) {
      return d(null, e)
    }, l.isBuffer = function(e) {
      return !(null == e || !e._isBuffer)
    }, l.compare = function(e, t) {
      if (!l.isBuffer(e) || !l.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
      if (e === t) return 0;
      for (var n = e.length, r = t.length, i = 0, a = Math.min(n, r); i < a; ++i)
        if (e[i] !== t[i]) {
          n = e[i], r = t[i];
          break
        } return n < r ? -1 : r < n ? 1 : 0
    }, l.isEncoding = function(e) {
      switch (String(e).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1
      }
    }, l.concat = function(e, t) {
      if (!a(e)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === e.length) return l.alloc(0);
      var n;
      if (void 0 === t)
        for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
      var r = l.allocUnsafe(t),
        i = 0;
      for (n = 0; n < e.length; ++n) {
        var o = e[n];
        if (!l.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
        o.copy(r, i), i += o.length
      }
      return r
    }, l.byteLength = p, l.prototype._isBuffer = !0, l.prototype.swap16 = function() {
      var e = this.length;
      if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var t = 0; t < e; t += 2) _(this, t, t + 1);
      return this
    }, l.prototype.swap32 = function() {
      var e = this.length;
      if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var t = 0; t < e; t += 4) _(this, t, t + 3), _(this, t + 1, t + 2);
      return this
    }, l.prototype.swap64 = function() {
      var e = this.length;
      if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var t = 0; t < e; t += 8) _(this, t, t + 7), _(this, t + 1, t + 6), _(this, t + 2, t + 5), _(this, t + 3, t + 4);
      return this
    }, l.prototype.toString = function() {
      var e = 0 | this.length;
      return 0 === e ? "" : 0 === arguments.length ? S(this, 0, e) : m.apply(this, arguments)
    }, l.prototype.equals = function(e) {
      if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
      return this === e || 0 === l.compare(this, e)
    }, l.prototype.inspect = function() {
      var e = "",
        n = t.INSPECT_MAX_BYTES;
      return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
    }, l.prototype.compare = function(e, t, n, r, i) {
      if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
      if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
      if (r >= i && t >= n) return 0;
      if (r >= i) return -1;
      if (t >= n) return 1;
      if (this === e) return 0;
      for (var a = (i >>>= 0) - (r >>>= 0), o = (n >>>= 0) - (t >>>= 0), s = Math.min(a, o), u = this.slice(r, i), c = e.slice(t, n), d = 0; d < s; ++d)
        if (u[d] !== c[d]) {
          a = u[d], o = c[d];
          break
        } return a < o ? -1 : o < a ? 1 : 0
    }, l.prototype.includes = function(e, t, n) {
      return -1 !== this.indexOf(e, t, n)
    }, l.prototype.indexOf = function(e, t, n) {
      return y(this, e, t, n, !0)
    }, l.prototype.lastIndexOf = function(e, t, n) {
      return y(this, e, t, n, !1)
    }, l.prototype.write = function(e, t, n, r) {
      if (void 0 === t) r = "utf8", n = this.length, t = 0;
      else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
      else {
        if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
      }
      var i = this.length - t;
      if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
      r || (r = "utf8");
      for (var a = !1;;) switch (r) {
        case "hex":
          return v(this, e, t, n);
        case "utf8":
        case "utf-8":
          return b(this, e, t, n);
        case "ascii":
          return w(this, e, t, n);
        case "latin1":
        case "binary":
          return k(this, e, t, n);
        case "base64":
          return M(this, e, t, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return x(this, e, t, n);
        default:
          if (a) throw new TypeError("Unknown encoding: " + r);
          r = ("" + r).toLowerCase(), a = !0
      }
    }, l.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      }
    };

    function T(e, t, n) {
      var r = "";
      n = Math.min(e.length, n);
      for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
      return r
    }

    function D(e, t, n) {
      var r = "";
      n = Math.min(e.length, n);
      for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
      return r
    }

    function E(e, t, n) {
      var r = e.length;
      (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
      for (var i = "", a = t; a < n; ++a) i += F(e[a]);
      return i
    }

    function Y(e, t, n) {
      for (var r = e.slice(t, n), i = "", a = 0; a < r.length; a += 2) i += String.fromCharCode(r[a] + 256 * r[a + 1]);
      return i
    }

    function C(e, t, n) {
      if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
      if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
    }

    function O(e, t, n, r, i, a) {
      if (!l.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (t > i || t < a) throw new RangeError('"value" argument is out of bounds');
      if (n + r > e.length) throw new RangeError("Index out of range")
    }

    function P(e, t, n, r) {
      t < 0 && (t = 65535 + t + 1);
      for (var i = 0, a = Math.min(e.length - n, 2); i < a; ++i) e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
    }

    function j(e, t, n, r) {
      t < 0 && (t = 4294967295 + t + 1);
      for (var i = 0, a = Math.min(e.length - n, 4); i < a; ++i) e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255
    }

    function A(e, t, n, r, i, a) {
      if (n + r > e.length) throw new RangeError("Index out of range");
      if (n < 0) throw new RangeError("Index out of range")
    }

    function R(e, t, n, r, a) {
      return a || A(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4
    }

    function I(e, t, n, r, a) {
      return a || A(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8
    }
    l.prototype.slice = function(e, t) {
      var n, r = this.length;
      if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), l.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = l.prototype;
      else {
        var i = t - e;
        n = new l(i, void 0);
        for (var a = 0; a < i; ++a) n[a] = this[a + e]
      }
      return n
    }, l.prototype.readUIntLE = function(e, t, n) {
      e |= 0, t |= 0, n || C(e, t, this.length);
      for (var r = this[e], i = 1, a = 0; ++a < t && (i *= 256);) r += this[e + a] * i;
      return r
    }, l.prototype.readUIntBE = function(e, t, n) {
      e |= 0, t |= 0, n || C(e, t, this.length);
      for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) r += this[e + --t] * i;
      return r
    }, l.prototype.readUInt8 = function(e, t) {
      return t || C(e, 1, this.length), this[e]
    }, l.prototype.readUInt16LE = function(e, t) {
      return t || C(e, 2, this.length), this[e] | this[e + 1] << 8
    }, l.prototype.readUInt16BE = function(e, t) {
      return t || C(e, 2, this.length), this[e] << 8 | this[e + 1]
    }, l.prototype.readUInt32LE = function(e, t) {
      return t || C(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
    }, l.prototype.readUInt32BE = function(e, t) {
      return t || C(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
    }, l.prototype.readIntLE = function(e, t, n) {
      e |= 0, t |= 0, n || C(e, t, this.length);
      for (var r = this[e], i = 1, a = 0; ++a < t && (i *= 256);) r += this[e + a] * i;
      return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r
    }, l.prototype.readIntBE = function(e, t, n) {
      e |= 0, t |= 0, n || C(e, t, this.length);
      for (var r = t, i = 1, a = this[e + --r]; r > 0 && (i *= 256);) a += this[e + --r] * i;
      return a >= (i *= 128) && (a -= Math.pow(2, 8 * t)), a
    }, l.prototype.readInt8 = function(e, t) {
      return t || C(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
    }, l.prototype.readInt16LE = function(e, t) {
      t || C(e, 2, this.length);
      var n = this[e] | this[e + 1] << 8;
      return 32768 & n ? 4294901760 | n : n
    }, l.prototype.readInt16BE = function(e, t) {
      t || C(e, 2, this.length);
      var n = this[e + 1] | this[e] << 8;
      return 32768 & n ? 4294901760 | n : n
    }, l.prototype.readInt32LE = function(e, t) {
      return t || C(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
    }, l.prototype.readInt32BE = function(e, t) {
      return t || C(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
    }, l.prototype.readFloatLE = function(e, t) {
      return t || C(e, 4, this.length), i.read(this, e, !0, 23, 4)
    }, l.prototype.readFloatBE = function(e, t) {
      return t || C(e, 4, this.length), i.read(this, e, !1, 23, 4)
    }, l.prototype.readDoubleLE = function(e, t) {
      return t || C(e, 8, this.length), i.read(this, e, !0, 52, 8)
    }, l.prototype.readDoubleBE = function(e, t) {
      return t || C(e, 8, this.length), i.read(this, e, !1, 52, 8)
    }, l.prototype.writeUIntLE = function(e, t, n, r) {
      (e = +e, t |= 0, n |= 0, r) || O(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
      var i = 1,
        a = 0;
      for (this[t] = 255 & e; ++a < n && (i *= 256);) this[t + a] = e / i & 255;
      return t + n
    }, l.prototype.writeUIntBE = function(e, t, n, r) {
      (e = +e, t |= 0, n |= 0, r) || O(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
      var i = n - 1,
        a = 1;
      for (this[t + i] = 255 & e; --i >= 0 && (a *= 256);) this[t + i] = e / a & 255;
      return t + n
    }, l.prototype.writeUInt8 = function(e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 1, 255, 0), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
    }, l.prototype.writeUInt16LE = function(e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : P(this, e, t, !0), t + 2
    }, l.prototype.writeUInt16BE = function(e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : P(this, e, t, !1), t + 2
    }, l.prototype.writeUInt32LE = function(e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : j(this, e, t, !0), t + 4
    }, l.prototype.writeUInt32BE = function(e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : j(this, e, t, !1), t + 4
    }, l.prototype.writeIntLE = function(e, t, n, r) {
      if (e = +e, t |= 0, !r) {
        var i = Math.pow(2, 8 * n - 1);
        O(this, e, t, n, i - 1, -i)
      }
      var a = 0,
        o = 1,
        s = 0;
      for (this[t] = 255 & e; ++a < n && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + a - 1] && (s = 1), this[t + a] = (e / o >> 0) - s & 255;
      return t + n
    }, l.prototype.writeIntBE = function(e, t, n, r) {
      if (e = +e, t |= 0, !r) {
        var i = Math.pow(2, 8 * n - 1);
        O(this, e, t, n, i - 1, -i)
      }
      var a = n - 1,
        o = 1,
        s = 0;
      for (this[t + a] = 255 & e; --a >= 0 && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + a + 1] && (s = 1), this[t + a] = (e / o >> 0) - s & 255;
      return t + n
    }, l.prototype.writeInt8 = function(e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 1, 127, -128), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
    }, l.prototype.writeInt16LE = function(e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : P(this, e, t, !0), t + 2
    }, l.prototype.writeInt16BE = function(e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : P(this, e, t, !1), t + 2
    }, l.prototype.writeInt32LE = function(e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 4, 2147483647, -2147483648), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : j(this, e, t, !0), t + 4
    }, l.prototype.writeInt32BE = function(e, t, n) {
      return e = +e, t |= 0, n || O(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : j(this, e, t, !1), t + 4
    }, l.prototype.writeFloatLE = function(e, t, n) {
      return R(this, e, t, !0, n)
    }, l.prototype.writeFloatBE = function(e, t, n) {
      return R(this, e, t, !1, n)
    }, l.prototype.writeDoubleLE = function(e, t, n) {
      return I(this, e, t, !0, n)
    }, l.prototype.writeDoubleBE = function(e, t, n) {
      return I(this, e, t, !1, n)
    }, l.prototype.copy = function(e, t, n, r) {
      if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
      if (0 === e.length || 0 === this.length) return 0;
      if (t < 0) throw new RangeError("targetStart out of bounds");
      if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
      if (r < 0) throw new RangeError("sourceEnd out of bounds");
      r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
      var i, a = r - n;
      if (this === e && n < t && t < r)
        for (i = a - 1; i >= 0; --i) e[i + t] = this[i + n];
      else if (a < 1e3 || !l.TYPED_ARRAY_SUPPORT)
        for (i = 0; i < a; ++i) e[i + t] = this[i + n];
      else Uint8Array.prototype.set.call(e, this.subarray(n, n + a), t);
      return a
    }, l.prototype.fill = function(e, t, n, r) {
      if ("string" == typeof e) {
        if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
          var i = e.charCodeAt(0);
          i < 256 && (e = i)
        }
        if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
        if ("string" == typeof r && !l.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
      } else "number" == typeof e && (e &= 255);
      if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
      if (n <= t) return this;
      var a;
      if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
        for (a = t; a < n; ++a) this[a] = e;
      else {
        var o = l.isBuffer(e) ? e : z(new l(e, r).toString()),
          s = o.length;
        for (a = 0; a < n - t; ++a) this[a + t] = o[a % s]
      }
      return this
    };
    var H = /[^+\/0-9A-Za-z-_]/g;

    function F(e) {
      return e < 16 ? "0" + e.toString(16) : e.toString(16)
    }

    function z(e, t) {
      var n;
      t = t || 1 / 0;
      for (var r = e.length, i = null, a = [], o = 0; o < r; ++o) {
        if ((n = e.charCodeAt(o)) > 55295 && n < 57344) {
          if (!i) {
            if (n > 56319) {
              (t -= 3) > -1 && a.push(239, 191, 189);
              continue
            }
            if (o + 1 === r) {
              (t -= 3) > -1 && a.push(239, 191, 189);
              continue
            }
            i = n;
            continue
          }
          if (n < 56320) {
            (t -= 3) > -1 && a.push(239, 191, 189), i = n;
            continue
          }
          n = 65536 + (i - 55296 << 10 | n - 56320)
        } else i && (t -= 3) > -1 && a.push(239, 191, 189);
        if (i = null, n < 128) {
          if ((t -= 1) < 0) break;
          a.push(n)
        } else if (n < 2048) {
          if ((t -= 2) < 0) break;
          a.push(n >> 6 | 192, 63 & n | 128)
        } else if (n < 65536) {
          if ((t -= 3) < 0) break;
          a.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
        } else {
          if (!(n < 1114112)) throw new Error("Invalid code point");
          if ((t -= 4) < 0) break;
          a.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
        }
      }
      return a
    }

    function N(e) {
      return r.toByteArray(function(e) {
        if ((e = function(e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
          }(e).replace(H, "")).length < 2) return "";
        for (; e.length % 4 != 0;) e += "=";
        return e
      }(e))
    }

    function W(e, t, n, r) {
      for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
      return i
    }
  }).call(this, n(99))
}, function(e, t, n) {
  var r = n(591);
  e.exports = function(e) {
    var t = e.xdomain,
      n = e.xscheme,
      i = e.enablesXDR;
    try {
      if ("undefined" != typeof XMLHttpRequest && (!t || r)) return new XMLHttpRequest
    } catch (e) {}
    try {
      if ("undefined" != typeof XDomainRequest && !n && i) return new XDomainRequest
    } catch (e) {}
    if (!t) try {
      return new(self[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
    } catch (e) {}
  }
}, function(e, t, n) {
  var r = n(70),
    i = n(69);

  function a(e) {
    this.path = e.path, this.hostname = e.hostname, this.port = e.port, this.secure = e.secure, this.query = e.query, this.timestampParam = e.timestampParam, this.timestampRequests = e.timestampRequests, this.readyState = "", this.agent = e.agent || !1, this.socket = e.socket, this.enablesXDR = e.enablesXDR, this.withCredentials = e.withCredentials, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.forceNode = e.forceNode, this.isReactNative = e.isReactNative, this.extraHeaders = e.extraHeaders, this.localAddress = e.localAddress
  }
  e.exports = a, i(a.prototype), a.prototype.onError = function(e, t) {
    var n = new Error(e);
    return n.type = "TransportError", n.description = t, this.emit("error", n), this
  }, a.prototype.open = function() {
    return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this
  }, a.prototype.close = function() {
    return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
  }, a.prototype.send = function(e) {
    if ("open" !== this.readyState) throw new Error("Transport not open");
    this.write(e)
  }, a.prototype.onOpen = function() {
    this.readyState = "open", this.writable = !0, this.emit("open")
  }, a.prototype.onData = function(e) {
    var t = r.decodePacket(e, this.socket.binaryType);
    this.onPacket(t)
  }, a.prototype.onPacket = function(e) {
    this.emit("packet", e)
  }, a.prototype.onClose = function() {
    this.readyState = "closed", this.emit("close")
  }
}, function(e, t, n) {
  "use strict";
  e.exports = {
    2: "need dictionary",
    1: "stream end",
    0: "",
    "-1": "file error",
    "-2": "stream error",
    "-3": "data error",
    "-4": "insufficient memory",
    "-5": "buffer error",
    "-6": "incompatible version"
  }
}, function(e, t) {
  e.exports = function(e) {
    return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
      enumerable: !0,
      get: function() {
        return e.l
      }
    }), Object.defineProperty(e, "id", {
      enumerable: !0,
      get: function() {
        return e.i
      }
    }), e.webpackPolyfill = 1), e
  }
}, function(e, t, n) {
  var r = n(620),
    i = n(83);
  e.exports = function e(t, n, a, o, s) {
    return t === n || (null == t || null == n || !i(t) && !i(n) ? t != t && n != n : r(t, n, a, o, e, s))
  }
}, function(e, t, n) {
  var r = n(61)(n(42), "Map");
  e.exports = r
}, function(e, t) {
  e.exports = function(e) {
    var t = typeof e;
    return null != e && ("object" == t || "function" == t)
  }
}, function(e, t, n) {
  var r = n(637),
    i = n(644),
    a = n(646),
    o = n(647),
    s = n(648);

  function l(e) {
    var t = -1,
      n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
      var r = e[t];
      this.set(r[0], r[1])
    }
  }
  l.prototype.clear = r, l.prototype.delete = i, l.prototype.get = a, l.prototype.has = o, l.prototype.set = s, e.exports = l
}, function(e, t, n) {
  var r = n(665),
    i = n(672),
    a = n(361);
  e.exports = function(e) {
    return a(e) ? r(e) : i(e)
  }
}, function(e, t) {
  e.exports = function(e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
  }
}, function(e, t, n) {
  var r = n(43),
    i = n(162),
    a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    o = /^\w*$/;
  e.exports = function(e, t) {
    if (r(e)) return !1;
    var n = typeof e;
    return !("number" != n && "symbol" != n && "boolean" != n && null != e && !i(e)) || (o.test(e) || !a.test(e) || null != t && e in Object(t))
  }
}, function(e, t, n) {
  var r = n(82),
    i = n(83);
  e.exports = function(e) {
    return "symbol" == typeof e || i(e) && "[object Symbol]" == r(e)
  }
}, function(e, t, n) {
  "use strict";

  function r(e) {
    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
  }
  n.d(t, "a", (function() {
    return r
  }))
}, function(e, t, n) {
  var r = n(579),
    i = n(148),
    a = n(209),
    o = n(47)("socket.io-client");
  e.exports = t = l;
  var s = t.managers = {};

  function l(e, t) {
    "object" == typeof e && (t = e, e = void 0), t = t || {};
    var n, i = r(e),
      l = i.source,
      u = i.id,
      c = i.path,
      d = s[u] && c in s[u].nsps;
    return t.forceNew || t["force new connection"] || !1 === t.multiplex || d ? (o("ignoring socket cache for %s", l), n = a(l, t)) : (s[u] || (o("new io instance for %s", l), s[u] = a(l, t)), n = s[u]), i.query && !t.query && (t.query = i.query), n.socket(i.path, t)
  }
  t.protocol = i.protocol, t.connect = l, t.Manager = n(209), t.Socket = n(215)
}, function(e, t, n) {
  var r = n(607),
    i = n(616),
    a = n(617);

  function o() {}
  o.compressUint8Array = function(e, t) {
    try {
      t(r.deflate(e))
    } catch (e) {
      console.log("ERROR Compressor: a pako deflate error occured."), console.log(e), t(void 0)
    }
  }, o.decompressUint8Array = function(e, t) {
    try {
      t(r.inflate(e))
    } catch (e) {
      console.log("ERROR Compressor: a pako inflate error occured."), console.log(e), t(void 0)
    }
  }, o.compressString = function(e, t) {
    try {
      t(i.compressToBase64(e))
    } catch (e) {
      console.log("ERROR Compressor: a LZString compressToBase64 error occured."), console.log(e), t(void 0)
    }
  }, o.decompressString = function(e, t) {
    try {
      t(i.decompressFromBase64(e.toString("ascii", 0, e.length)))
    } catch (e) {
      console.log("ERROR Compressor: a LZString decompressFromBase64 error occured."), console.log(e), t(void 0)
    }
  }, o.compressChunkData = function(e, t, n) {
    o.compLimiter.submit((function(t) {
      o.compressUint8Array(e, (function(e) {
        n(e ? e.buffer : void 0), t()
      }))
    }), t)
  }, o.decompressChunkData = function(e, t, n) {
    o.decompLimiter.submit((function(t) {
      if ("string" == typeof e) {
        for (var r = new ArrayBuffer(e.length), i = new Uint8Array(r), a = 0, s = e.length; a < s; a++) i[a] = e.charCodeAt(a);
        e = r
      }
      o.decompressUint8Array(new Uint8Array(e), (function(e) {
        n(e ? new Uint8Array(e.buffer) : void 0), t()
      }))
    }), t)
  }, o.compLimiter = new a({
    maxConcurrent: 1,
    maxQueueLength: 3e3,
    strategy: 1,
    expiration: 500,
    dt: 1
  }), o.decompLimiter = new a({
    maxConcurrent: 1,
    maxQueueLength: 3e3,
    strategy: 1,
    expiration: 500,
    dt: 1
  }), o.compLimiter.onDropped = function(e) {
    console.log("WARN Bottleneck: compLimiter triggered !")
  }, o.decompLimiter.onDropped = function(e) {
    console.log("WARN Bottleneck: decompLimiter triggered !")
  }, e.exports = o
}, function(e, t) {
  var n = {
    permutations: [],
    keys: {},
    n: 0
  };

  function r(e) {
    for (var t = e.length - 1; t > 0 && e[t - 1] >= e[t];) t--;
    if (t <= 0) return !1;
    for (var n = e.length - 1; e[n] <= e[t - 1];) n--;
    var r = e[t - 1];
    for (e[t - 1] = e[n], e[n] = r, n = e.length - 1; t < n;) r = e[t], e[t] = e[n], e[n] = r, t++, n--;
    return !0
  }
  n.build = function(e, t) {
    if (n.n != e) {
      n.permutations = [], n.keys = {}, n.n = e;
      for (var i = [], a = 0, o = 0; o < e; o++) i.push(o);
      for (n.permutations.push(i.slice(0)), t && (n.keys[i] = a); r(i);) n.permutations.push(i.slice(0)), t && (a++, n.keys[i] = a)
    }
  }, e.exports = n
}, , , , , , , function(e, t, n) {
  e.exports = !n(21) && !n(11)((function() {
    return 7 != Object.defineProperty(n(119)("div"), "a", {
      get: function() {
        return 7
      }
    }).a
  }))
}, function(e, t, n) {
  var r = n(10),
    i = n(18),
    a = n(53),
    o = n(120),
    s = n(22).f;
  e.exports = function(e) {
    var t = i.Symbol || (i.Symbol = a ? {} : r.Symbol || {});
    "_" == e.charAt(0) || e in t || s(t, e, {
      value: o.f(e)
    })
  }
}, function(e, t, n) {
  var r = n(26),
    i = n(28),
    a = n(88)(!1),
    o = n(121)("IE_PROTO");
  e.exports = function(e, t) {
    var n, s = i(e),
      l = 0,
      u = [];
    for (n in s) n != o && r(s, n) && u.push(n);
    for (; t.length > l;) r(s, n = t[l++]) && (~a(u, n) || u.push(n));
    return u
  }
}, function(e, t, n) {
  var r = n(22),
    i = n(12),
    a = n(54);
  e.exports = n(21) ? Object.defineProperties : function(e, t) {
    i(e);
    for (var n, o = a(t), s = o.length, l = 0; s > l;) r.f(e, n = o[l++], t[n]);
    return e
  }
}, function(e, t, n) {
  var r = n(28),
    i = n(57).f,
    a = {}.toString,
    o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
  e.exports.f = function(e) {
    return o && "[object Window]" == a.call(e) ? function(e) {
      try {
        return i(e)
      } catch (e) {
        return o.slice()
      }
    }(e) : i(r(e))
  }
}, function(e, t, n) {
  "use strict";
  var r = n(21),
    i = n(54),
    a = n(89),
    o = n(78),
    s = n(23),
    l = n(77),
    u = Object.assign;
  e.exports = !u || n(11)((function() {
    var e = {},
      t = {},
      n = Symbol(),
      r = "abcdefghijklmnopqrst";
    return e[n] = 7, r.split("").forEach((function(e) {
      t[e] = e
    })), 7 != u({}, e)[n] || Object.keys(u({}, t)).join("") != r
  })) ? function(e, t) {
    for (var n = s(e), u = arguments.length, c = 1, d = a.f, h = o.f; u > c;)
      for (var f, p = l(arguments[c++]), m = d ? i(p).concat(d(p)) : i(p), _ = m.length, y = 0; _ > y;) f = m[y++], r && !h.call(p, f) || (n[f] = p[f]);
    return n
  } : u
}, function(e, t) {
  e.exports = Object.is || function(e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
  }
}, function(e, t, n) {
  "use strict";
  var r = n(33),
    i = n(13),
    a = n(181),
    o = [].slice,
    s = {},
    l = function(e, t, n) {
      if (!(t in s)) {
        for (var r = [], i = 0; i < t; i++) r[i] = "a[" + i + "]";
        s[t] = Function("F,a", "return new F(" + r.join(",") + ")")
      }
      return s[t](e, n)
    };
  e.exports = Function.bind || function(e) {
    var t = r(this),
      n = o.call(arguments, 1),
      s = function() {
        var r = n.concat(o.call(arguments));
        return this instanceof s ? l(t, r.length, r) : a(t, r, e)
      };
    return i(t.prototype) && (s.prototype = t.prototype), s
  }
}, function(e, t) {
  e.exports = function(e, t, n) {
    var r = void 0 === n;
    switch (t.length) {
      case 0:
        return r ? e() : e.call(n);
      case 1:
        return r ? e(t[0]) : e.call(n, t[0]);
      case 2:
        return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
      case 3:
        return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
      case 4:
        return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
    }
    return e.apply(n, t)
  }
}, function(e, t, n) {
  var r = n(10).parseInt,
    i = n(64).trim,
    a = n(125),
    o = /^[-+]?0[xX]/;
  e.exports = 8 !== r(a + "08") || 22 !== r(a + "0x16") ? function(e, t) {
    var n = i(String(e), 3);
    return r(n, t >>> 0 || (o.test(n) ? 16 : 10))
  } : r
}, function(e, t, n) {
  var r = n(10).parseFloat,
    i = n(64).trim;
  e.exports = 1 / r(n(125) + "-0") != -1 / 0 ? function(e) {
    var t = i(String(e), 3),
      n = r(t);
    return 0 === n && "-" == t.charAt(0) ? -0 : n
  } : r
}, function(e, t, n) {
  var r = n(39);
  e.exports = function(e, t) {
    if ("number" != typeof e && "Number" != r(e)) throw TypeError(t);
    return +e
  }
}, function(e, t, n) {
  var r = n(13),
    i = Math.floor;
  e.exports = function(e) {
    return !r(e) && isFinite(e) && i(e) === e
  }
}, function(e, t) {
  e.exports = Math.log1p || function(e) {
    return (e = +e) > -1e-8 && e < 1e-8 ? e - e * e / 2 : Math.log(1 + e)
  }
}, function(e, t, n) {
  "use strict";
  var r = n(56),
    i = n(51),
    a = n(63),
    o = {};
  n(27)(o, n(15)("iterator"), (function() {
    return this
  })), e.exports = function(e, t, n) {
    e.prototype = r(o, {
      next: i(1, n)
    }), a(e, t + " Iterator")
  }
}, function(e, t, n) {
  var r = n(12);
  e.exports = function(e, t, n, i) {
    try {
      return i ? t(r(n)[0], n[1]) : t(n)
    } catch (t) {
      var a = e.return;
      throw void 0 !== a && r(a.call(e)), t
    }
  }
}, function(e, t, n) {
  var r = n(483);
  e.exports = function(e, t) {
    return new(r(e))(t)
  }
}, function(e, t, n) {
  var r = n(33),
    i = n(23),
    a = n(77),
    o = n(16);
  e.exports = function(e, t, n, s, l) {
    r(t);
    var u = i(e),
      c = a(u),
      d = o(u.length),
      h = l ? d - 1 : 0,
      f = l ? -1 : 1;
    if (n < 2)
      for (;;) {
        if (h in c) {
          s = c[h], h += f;
          break
        }
        if (h += f, l ? h < 0 : d <= h) throw TypeError("Reduce of empty array with no initial value")
      }
    for (; l ? h >= 0 : d > h; h += f) h in c && (s = t(s, c[h], h, u));
    return s
  }
}, function(e, t, n) {
  "use strict";
  var r = n(23),
    i = n(55),
    a = n(16);
  e.exports = [].copyWithin || function(e, t) {
    var n = r(this),
      o = a(n.length),
      s = i(e, o),
      l = i(t, o),
      u = arguments.length > 2 ? arguments[2] : void 0,
      c = Math.min((void 0 === u ? o : i(u, o)) - l, o - s),
      d = 1;
    for (l < s && s < l + c && (d = -1, l += c - 1, s += c - 1); c-- > 0;) l in n ? n[s] = n[l] : delete n[s], s += d, l += d;
    return n
  }
}, function(e, t) {
  e.exports = function(e, t) {
    return {
      value: t,
      done: !!e
    }
  }
}, function(e, t, n) {
  "use strict";
  var r = n(140);
  n(3)({
    target: "RegExp",
    proto: !0,
    forced: r !== /./.exec
  }, {
    exec: r
  })
}, function(e, t, n) {
  n(21) && "g" != /./g.flags && n(22).f(RegExp.prototype, "flags", {
    configurable: !0,
    get: n(92)
  })
}, function(e, t, n) {
  "use strict";
  var r, i, a, o, s = n(53),
    l = n(10),
    u = n(32),
    c = n(79),
    d = n(3),
    h = n(13),
    f = n(33),
    p = n(67),
    m = n(95),
    _ = n(80),
    y = n(142).set,
    g = n(503)(),
    v = n(196),
    b = n(504),
    w = n(96),
    k = n(197),
    M = l.TypeError,
    x = l.process,
    L = x && x.versions,
    S = L && L.v8 || "",
    T = l.Promise,
    D = "process" == c(x),
    E = function() {},
    Y = i = v.f,
    C = !! function() {
      try {
        var e = T.resolve(1),
          t = (e.constructor = {})[n(15)("species")] = function(e) {
            e(E, E)
          };
        return (D || "function" == typeof PromiseRejectionEvent) && e.then(E) instanceof t && 0 !== S.indexOf("6.6") && -1 === w.indexOf("Chrome/66")
      } catch (e) {}
    }(),
    O = function(e) {
      var t;
      return !(!h(e) || "function" != typeof(t = e.then)) && t
    },
    P = function(e, t) {
      if (!e._n) {
        e._n = !0;
        var n = e._c;
        g((function() {
          for (var r = e._v, i = 1 == e._s, a = 0, o = function(t) {
              var n, a, o, s = i ? t.ok : t.fail,
                l = t.resolve,
                u = t.reject,
                c = t.domain;
              try {
                s ? (i || (2 == e._h && R(e), e._h = 1), !0 === s ? n = r : (c && c.enter(), n = s(r), c && (c.exit(), o = !0)), n === t.promise ? u(M("Promise-chain cycle")) : (a = O(n)) ? a.call(n, l, u) : l(n)) : u(r)
              } catch (e) {
                c && !o && c.exit(), u(e)
              }
            }; n.length > a;) o(n[a++]);
          e._c = [], e._n = !1, t && !e._h && j(e)
        }))
      }
    },
    j = function(e) {
      y.call(l, (function() {
        var t, n, r, i = e._v,
          a = A(e);
        if (a && (t = b((function() {
            D ? x.emit("unhandledRejection", i, e) : (n = l.onunhandledrejection) ? n({
              promise: e,
              reason: i
            }) : (r = l.console) && r.error && r.error("Unhandled promise rejection", i)
          })), e._h = D || A(e) ? 2 : 1), e._a = void 0, a && t.e) throw t.v
      }))
    },
    A = function(e) {
      return 1 !== e._h && 0 === (e._a || e._c).length
    },
    R = function(e) {
      y.call(l, (function() {
        var t;
        D ? x.emit("rejectionHandled", e) : (t = l.onrejectionhandled) && t({
          promise: e,
          reason: e._v
        })
      }))
    },
    I = function(e) {
      var t = this;
      t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), P(t, !0))
    },
    H = function(e) {
      var t, n = this;
      if (!n._d) {
        n._d = !0, n = n._w || n;
        try {
          if (n === e) throw M("Promise can't be resolved itself");
          (t = O(e)) ? g((function() {
            var r = {
              _w: n,
              _d: !1
            };
            try {
              t.call(e, u(H, r, 1), u(I, r, 1))
            } catch (e) {
              I.call(r, e)
            }
          })): (n._v = e, n._s = 1, P(n, !1))
        } catch (e) {
          I.call({
            _w: n,
            _d: !1
          }, e)
        }
      }
    };
  C || (T = function(e) {
    p(this, T, "Promise", "_h"), f(e), r.call(this);
    try {
      e(u(H, this, 1), u(I, this, 1))
    } catch (e) {
      I.call(this, e)
    }
  }, (r = function(e) {
    this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
  }).prototype = n(68)(T.prototype, {
    then: function(e, t) {
      var n = Y(_(this, T));
      return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = D ? x.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && P(this, !1), n.promise
    },
    catch: function(e) {
      return this.then(void 0, e)
    }
  }), a = function() {
    var e = new r;
    this.promise = e, this.resolve = u(H, e, 1), this.reject = u(I, e, 1)
  }, v.f = Y = function(e) {
    return e === T || e === o ? new a(e) : i(e)
  }), d(d.G + d.W + d.F * !C, {
    Promise: T
  }), n(63)(T, "Promise"), n(66)("Promise"), o = n(18).Promise, d(d.S + d.F * !C, "Promise", {
    reject: function(e) {
      var t = Y(this);
      return (0, t.reject)(e), t.promise
    }
  }), d(d.S + d.F * (s || !C), "Promise", {
    resolve: function(e) {
      return k(s && this === o ? T : this, e)
    }
  }), d(d.S + d.F * !(C && n(91)((function(e) {
    T.all(e).catch(E)
  }))), "Promise", {
    all: function(e) {
      var t = this,
        n = Y(t),
        r = n.resolve,
        i = n.reject,
        a = b((function() {
          var n = [],
            a = 0,
            o = 1;
          m(e, !1, (function(e) {
            var s = a++,
              l = !1;
            n.push(void 0), o++, t.resolve(e).then((function(e) {
              l || (l = !0, n[s] = e, --o || r(n))
            }), i)
          })), --o || r(n)
        }));
      return a.e && i(a.v), n.promise
    },
    race: function(e) {
      var t = this,
        n = Y(t),
        r = n.reject,
        i = b((function() {
          m(e, !1, (function(e) {
            t.resolve(e).then(n.resolve, r)
          }))
        }));
      return i.e && r(i.v), n.promise
    }
  })
}, function(e, t, n) {
  "use strict";
  var r = n(33);

  function i(e) {
    var t, n;
    this.promise = new e((function(e, r) {
      if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
      t = e, n = r
    })), this.resolve = r(t), this.reject = r(n)
  }
  e.exports.f = function(e) {
    return new i(e)
  }
}, function(e, t, n) {
  var r = n(12),
    i = n(13),
    a = n(196);
  e.exports = function(e, t) {
    if (r(e), i(t) && t.constructor === e) return t;
    var n = a.f(e);
    return (0, n.resolve)(t), n.promise
  }
}, function(e, t, n) {
  "use strict";
  var r = n(22).f,
    i = n(56),
    a = n(68),
    o = n(32),
    s = n(67),
    l = n(95),
    u = n(131),
    c = n(192),
    d = n(66),
    h = n(21),
    f = n(46).fastKey,
    p = n(60),
    m = h ? "_s" : "size",
    _ = function(e, t) {
      var n, r = f(t);
      if ("F" !== r) return e._i[r];
      for (n = e._f; n; n = n.n)
        if (n.k == t) return n
    };
  e.exports = {
    getConstructor: function(e, t, n, u) {
      var c = e((function(e, r) {
        s(e, c, t, "_i"), e._t = t, e._i = i(null), e._f = void 0, e._l = void 0, e[m] = 0, null != r && l(r, n, e[u], e)
      }));
      return a(c.prototype, {
        clear: function() {
          for (var e = p(this, t), n = e._i, r = e._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete n[r.i];
          e._f = e._l = void 0, e[m] = 0
        },
        delete: function(e) {
          var n = p(this, t),
            r = _(n, e);
          if (r) {
            var i = r.n,
              a = r.p;
            delete n._i[r.i], r.r = !0, a && (a.n = i), i && (i.p = a), n._f == r && (n._f = i), n._l == r && (n._l = a), n[m]--
          }
          return !!r
        },
        forEach: function(e) {
          p(this, t);
          for (var n, r = o(e, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
            for (r(n.v, n.k, this); n && n.r;) n = n.p
        },
        has: function(e) {
          return !!_(p(this, t), e)
        }
      }), h && r(c.prototype, "size", {
        get: function() {
          return p(this, t)[m]
        }
      }), c
    },
    def: function(e, t, n) {
      var r, i, a = _(e, t);
      return a ? a.v = n : (e._l = a = {
        i: i = f(t, !0),
        k: t,
        v: n,
        p: r = e._l,
        n: void 0,
        r: !1
      }, e._f || (e._f = a), r && (r.n = a), e[m]++, "F" !== i && (e._i[i] = a)), e
    },
    getEntry: _,
    setStrong: function(e, t, n) {
      u(e, t, (function(e, n) {
        this._t = p(e, t), this._k = n, this._l = void 0
      }), (function() {
        for (var e = this._k, t = this._l; t && t.r;) t = t.p;
        return this._t && (this._l = t = t ? t.n : this._t._f) ? c(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v]) : (this._t = void 0, c(1))
      }), n ? "entries" : "values", !n, !0), d(t)
    }
  }
}, function(e, t, n) {
  "use strict";
  var r = n(68),
    i = n(46).getWeak,
    a = n(12),
    o = n(13),
    s = n(67),
    l = n(95),
    u = n(37),
    c = n(26),
    d = n(60),
    h = u(5),
    f = u(6),
    p = 0,
    m = function(e) {
      return e._l || (e._l = new _)
    },
    _ = function() {
      this.a = []
    },
    y = function(e, t) {
      return h(e.a, (function(e) {
        return e[0] === t
      }))
    };
  _.prototype = {
    get: function(e) {
      var t = y(this, e);
      if (t) return t[1]
    },
    has: function(e) {
      return !!y(this, e)
    },
    set: function(e, t) {
      var n = y(this, e);
      n ? n[1] = t : this.a.push([e, t])
    },
    delete: function(e) {
      var t = f(this.a, (function(t) {
        return t[0] === e
      }));
      return ~t && this.a.splice(t, 1), !!~t
    }
  }, e.exports = {
    getConstructor: function(e, t, n, a) {
      var u = e((function(e, r) {
        s(e, u, t, "_i"), e._t = t, e._i = p++, e._l = void 0, null != r && l(r, n, e[a], e)
      }));
      return r(u.prototype, {
        delete: function(e) {
          if (!o(e)) return !1;
          var n = i(e);
          return !0 === n ? m(d(this, t)).delete(e) : n && c(n, this._i) && delete n[this._i]
        },
        has: function(e) {
          if (!o(e)) return !1;
          var n = i(e);
          return !0 === n ? m(d(this, t)).has(e) : n && c(n, this._i)
        }
      }), u
    },
    def: function(e, t, n) {
      var r = i(a(t), !0);
      return !0 === r ? m(e).set(t, n) : r[e._i] = n, e
    },
    ufstore: m
  }
}, function(e, t, n) {
  var r = n(34),
    i = n(16);
  e.exports = function(e) {
    if (void 0 === e) return 0;
    var t = r(e),
      n = i(t);
    if (t !== n) throw RangeError("Wrong length!");
    return n
  }
}, function(e, t, n) {
  var r = n(57),
    i = n(89),
    a = n(12),
    o = n(10).Reflect;
  e.exports = o && o.ownKeys || function(e) {
    var t = r.f(a(e)),
      n = i.f;
    return n ? t.concat(n(e)) : t
  }
}, function(e, t, n) {
  var r = n(16),
    i = n(127),
    a = n(40);
  e.exports = function(e, t, n, o) {
    var s = String(a(e)),
      l = s.length,
      u = void 0 === n ? " " : String(n),
      c = r(t);
    if (c <= l || "" == u) return s;
    var d = c - l,
      h = i.call(u, Math.ceil(d / u.length));
    return h.length > d && (h = h.slice(0, d)), o ? h + s : s + h
  }
}, function(e, t, n) {
  var r = n(21),
    i = n(54),
    a = n(28),
    o = n(78).f;
  e.exports = function(e) {
    return function(t) {
      for (var n, s = a(t), l = i(s), u = l.length, c = 0, d = []; u > c;) n = l[c++], r && !o.call(s, n) || d.push(e ? [n, s[n]] : s[n]);
      return d
    }
  }
}, function(e, t) {
  var n = e.exports = {
    version: "2.6.11"
  };
  "number" == typeof __e && (__e = n)
}, function(e, t) {
  e.exports = function(e) {
    try {
      return !!e()
    } catch (e) {
      return !0
    }
  }
}, function(e, t, n) {
  "use strict";
  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  var r = Object.getOwnPropertySymbols,
    i = Object.prototype.hasOwnProperty,
    a = Object.prototype.propertyIsEnumerable;

  function o(e) {
    if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(e)
  }
  e.exports = function() {
    try {
      if (!Object.assign) return !1;
      var e = new String("abc");
      if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
      for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
      if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
          return t[e]
        })).join("")) return !1;
      var r = {};
      return "abcdefghijklmnopqrst".split("").forEach((function(e) {
        r[e] = e
      })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
    } catch (e) {
      return !1
    }
  }() ? Object.assign : function(e, t) {
    for (var n, s, l = o(e), u = 1; u < arguments.length; u++) {
      for (var c in n = Object(arguments[u])) i.call(n, c) && (l[c] = n[c]);
      if (r) {
        s = r(n);
        for (var d = 0; d < s.length; d++) a.call(n, s[d]) && (l[s[d]] = n[s[d]])
      }
    }
    return l
  }
}, function(e, t) {
  var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
  e.exports = function(e) {
    var t = e,
      i = e.indexOf("["),
      a = e.indexOf("]"); - 1 != i && -1 != a && (e = e.substring(0, i) + e.substring(i, a).replace(/:/g, ";") + e.substring(a, e.length));
    for (var o = n.exec(e || ""), s = {}, l = 14; l--;) s[r[l]] = o[l] || "";
    return -1 != i && -1 != a && (s.source = t, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s
  }
}, function(e, t, n) {
  (function(t) {
    e.exports = function(e) {
      return n && t.isBuffer(e) || r && (e instanceof ArrayBuffer || function(e) {
        return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer
      }(e))
    };
    var n = "function" == typeof t && "function" == typeof t.isBuffer,
      r = "function" == typeof ArrayBuffer
  }).call(this, n(150).Buffer)
}, function(e, t, n) {
  var r = n(589),
    i = n(215),
    a = n(69),
    o = n(148),
    s = n(216),
    l = n(217),
    u = n(47)("socket.io-client:manager"),
    c = n(214),
    d = n(603),
    h = Object.prototype.hasOwnProperty;

  function f(e, t) {
    if (!(this instanceof f)) return new f(e, t);
    e && "object" == typeof e && (t = e, e = void 0), (t = t || {}).path = t.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = t, this.reconnection(!1 !== t.reconnection), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor(t.randomizationFactor || .5), this.backoff = new d({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(null == t.timeout ? 2e4 : t.timeout), this.readyState = "closed", this.uri = e, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
    var n = t.parser || o;
    this.encoder = new n.Encoder, this.decoder = new n.Decoder, this.autoConnect = !1 !== t.autoConnect, this.autoConnect && this.open()
  }
  e.exports = f, f.prototype.emitAll = function() {
    for (var e in this.emit.apply(this, arguments), this.nsps) h.call(this.nsps, e) && this.nsps[e].emit.apply(this.nsps[e], arguments)
  }, f.prototype.updateSocketIds = function() {
    for (var e in this.nsps) h.call(this.nsps, e) && (this.nsps[e].id = this.generateId(e))
  }, f.prototype.generateId = function(e) {
    return ("/" === e ? "" : e + "#") + this.engine.id
  }, a(f.prototype), f.prototype.reconnection = function(e) {
    return arguments.length ? (this._reconnection = !!e, this) : this._reconnection
  }, f.prototype.reconnectionAttempts = function(e) {
    return arguments.length ? (this._reconnectionAttempts = e, this) : this._reconnectionAttempts
  }, f.prototype.reconnectionDelay = function(e) {
    return arguments.length ? (this._reconnectionDelay = e, this.backoff && this.backoff.setMin(e), this) : this._reconnectionDelay
  }, f.prototype.randomizationFactor = function(e) {
    return arguments.length ? (this._randomizationFactor = e, this.backoff && this.backoff.setJitter(e), this) : this._randomizationFactor
  }, f.prototype.reconnectionDelayMax = function(e) {
    return arguments.length ? (this._reconnectionDelayMax = e, this.backoff && this.backoff.setMax(e), this) : this._reconnectionDelayMax
  }, f.prototype.timeout = function(e) {
    return arguments.length ? (this._timeout = e, this) : this._timeout
  }, f.prototype.maybeReconnectOnOpen = function() {
    !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
  }, f.prototype.open = f.prototype.connect = function(e, t) {
    if (u("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
    u("opening %s", this.uri), this.engine = r(this.uri, this.opts);
    var n = this.engine,
      i = this;
    this.readyState = "opening", this.skipReconnect = !1;
    var a = s(n, "open", (function() {
        i.onopen(), e && e()
      })),
      o = s(n, "error", (function(t) {
        if (u("connect_error"), i.cleanup(), i.readyState = "closed", i.emitAll("connect_error", t), e) {
          var n = new Error("Connection error");
          n.data = t, e(n)
        } else i.maybeReconnectOnOpen()
      }));
    if (!1 !== this._timeout) {
      var l = this._timeout;
      u("connect attempt will timeout after %d", l);
      var c = setTimeout((function() {
        u("connect attempt timed out after %d", l), a.destroy(), n.close(), n.emit("error", "timeout"), i.emitAll("connect_timeout", l)
      }), l);
      this.subs.push({
        destroy: function() {
          clearTimeout(c)
        }
      })
    }
    return this.subs.push(a), this.subs.push(o), this
  }, f.prototype.onopen = function() {
    u("open"), this.cleanup(), this.readyState = "open", this.emit("open");
    var e = this.engine;
    this.subs.push(s(e, "data", l(this, "ondata"))), this.subs.push(s(e, "ping", l(this, "onping"))), this.subs.push(s(e, "pong", l(this, "onpong"))), this.subs.push(s(e, "error", l(this, "onerror"))), this.subs.push(s(e, "close", l(this, "onclose"))), this.subs.push(s(this.decoder, "decoded", l(this, "ondecoded")))
  }, f.prototype.onping = function() {
    this.lastPing = new Date, this.emitAll("ping")
  }, f.prototype.onpong = function() {
    this.emitAll("pong", new Date - this.lastPing)
  }, f.prototype.ondata = function(e) {
    this.decoder.add(e)
  }, f.prototype.ondecoded = function(e) {
    this.emit("packet", e)
  }, f.prototype.onerror = function(e) {
    u("error", e), this.emitAll("error", e)
  }, f.prototype.socket = function(e, t) {
    var n = this.nsps[e];
    if (!n) {
      n = new i(this, e, t), this.nsps[e] = n;
      var r = this;
      n.on("connecting", a), n.on("connect", (function() {
        n.id = r.generateId(e)
      })), this.autoConnect && a()
    }

    function a() {
      ~c(r.connecting, n) || r.connecting.push(n)
    }
    return n
  }, f.prototype.destroy = function(e) {
    var t = c(this.connecting, e);
    ~t && this.connecting.splice(t, 1), this.connecting.length || this.close()
  }, f.prototype.packet = function(e) {
    u("writing packet %j", e);
    var t = this;
    e.query && 0 === e.type && (e.nsp += "?" + e.query), t.encoding ? t.packetBuffer.push(e) : (t.encoding = !0, this.encoder.encode(e, (function(n) {
      for (var r = 0; r < n.length; r++) t.engine.write(n[r], e.options);
      t.encoding = !1, t.processPacketQueue()
    })))
  }, f.prototype.processPacketQueue = function() {
    if (this.packetBuffer.length > 0 && !this.encoding) {
      var e = this.packetBuffer.shift();
      this.packet(e)
    }
  }, f.prototype.cleanup = function() {
    u("cleanup");
    for (var e = this.subs.length, t = 0; t < e; t++) {
      this.subs.shift().destroy()
    }
    this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy()
  }, f.prototype.close = f.prototype.disconnect = function() {
    u("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close()
  }, f.prototype.onclose = function(e) {
    u("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", e), this._reconnection && !this.skipReconnect && this.reconnect()
  }, f.prototype.reconnect = function() {
    if (this.reconnecting || this.skipReconnect) return this;
    var e = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) u("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
    else {
      var t = this.backoff.duration();
      u("will wait %dms before reconnect attempt", t), this.reconnecting = !0;
      var n = setTimeout((function() {
        e.skipReconnect || (u("attempting reconnect"), e.emitAll("reconnect_attempt", e.backoff.attempts), e.emitAll("reconnecting", e.backoff.attempts), e.skipReconnect || e.open((function(t) {
          t ? (u("reconnect attempt error"), e.reconnecting = !1, e.reconnect(), e.emitAll("reconnect_error", t.data)) : (u("reconnect success"), e.onreconnect())
        })))
      }), t);
      this.subs.push({
        destroy: function() {
          clearTimeout(n)
        }
      })
    }
  }, f.prototype.onreconnect = function() {
    var e = this.backoff.attempts;
    this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", e)
  }
}, function(e, t, n) {
  var r = n(151),
    i = n(592),
    a = n(599),
    o = n(600);
  t.polling = function(e) {
    var t = !1,
      n = !1,
      o = !1 !== e.jsonp;
    if ("undefined" != typeof location) {
      var s = "https:" === location.protocol,
        l = location.port;
      l || (l = s ? 443 : 80), t = e.hostname !== location.hostname || l !== e.port, n = e.secure !== s
    }
    if (e.xdomain = t, e.xscheme = n, "open" in new r(e) && !e.forceJSONP) return new i(e);
    if (!o) throw new Error("JSONP disabled");
    return new a(e)
  }, t.websocket = o
}, function(e, t, n) {
  var r = n(152),
    i = n(100),
    a = n(70),
    o = n(101),
    s = n(213),
    l = n(47)("engine.io-client:polling");
  e.exports = c;
  var u = null != new(n(151))({
    xdomain: !1
  }).responseType;

  function c(e) {
    var t = e && e.forceBase64;
    u && !t || (this.supportsBinary = !1), r.call(this, e)
  }
  o(c, r), c.prototype.name = "polling", c.prototype.doOpen = function() {
    this.poll()
  }, c.prototype.pause = function(e) {
    var t = this;

    function n() {
      l("paused"), t.readyState = "paused", e()
    }
    if (this.readyState = "pausing", this.polling || !this.writable) {
      var r = 0;
      this.polling && (l("we are currently polling - waiting to pause"), r++, this.once("pollComplete", (function() {
        l("pre-pause polling complete"), --r || n()
      }))), this.writable || (l("we are currently writing - waiting to pause"), r++, this.once("drain", (function() {
        l("pre-pause writing complete"), --r || n()
      })))
    } else n()
  }, c.prototype.poll = function() {
    l("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
  }, c.prototype.onData = function(e) {
    var t = this;
    l("polling got data %s", e);
    a.decodePayload(e, this.socket.binaryType, (function(e, n, r) {
      if ("opening" === t.readyState && t.onOpen(), "close" === e.type) return t.onClose(), !1;
      t.onPacket(e)
    })), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : l('ignoring poll - transport state "%s"', this.readyState))
  }, c.prototype.doClose = function() {
    var e = this;

    function t() {
      l("writing close packet"), e.write([{
        type: "close"
      }])
    }
    "open" === this.readyState ? (l("transport open - closing"), t()) : (l("transport not open - deferring close"), this.once("open", t))
  }, c.prototype.write = function(e) {
    var t = this;
    this.writable = !1;
    var n = function() {
      t.writable = !0, t.emit("drain")
    };
    a.encodePayload(e, this.supportsBinary, (function(e) {
      t.doWrite(e, n)
    }))
  }, c.prototype.uri = function() {
    var e = this.query || {},
      t = this.secure ? "https" : "http",
      n = "";
    return !1 !== this.timestampRequests && (e[this.timestampParam] = s()), this.supportsBinary || e.sid || (e.b64 = 1), e = i.encode(e), this.port && ("https" === t && 443 !== Number(this.port) || "http" === t && 80 !== Number(this.port)) && (n = ":" + this.port), e.length && (e = "?" + e), t + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + e
  }
}, function(e, t, n) {
  (function(t) {
    var r = n(149),
      i = Object.prototype.toString,
      a = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === i.call(Blob),
      o = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === i.call(File);
    e.exports = function e(n) {
      if (!n || "object" != typeof n) return !1;
      if (r(n)) {
        for (var i = 0, s = n.length; i < s; i++)
          if (e(n[i])) return !0;
        return !1
      }
      if ("function" == typeof t && t.isBuffer && t.isBuffer(n) || "function" == typeof ArrayBuffer && n instanceof ArrayBuffer || a && n instanceof Blob || o && n instanceof File) return !0;
      if (n.toJSON && "function" == typeof n.toJSON && 1 === arguments.length) return e(n.toJSON(), !0);
      for (var l in n)
        if (Object.prototype.hasOwnProperty.call(n, l) && e(n[l])) return !0;
      return !1
    }
  }).call(this, n(150).Buffer)
}, function(e, t, n) {
  "use strict";
  var r, i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
    a = {},
    o = 0,
    s = 0;

  function l(e) {
    var t = "";
    do {
      t = i[e % 64] + t, e = Math.floor(e / 64)
    } while (e > 0);
    return t
  }

  function u() {
    var e = l(+new Date);
    return e !== r ? (o = 0, r = e) : e + "." + l(o++)
  }
  for (; s < 64; s++) a[i[s]] = s;
  u.encode = l, u.decode = function(e) {
    var t = 0;
    for (s = 0; s < e.length; s++) t = 64 * t + a[e.charAt(s)];
    return t
  }, e.exports = u
}, function(e, t) {
  var n = [].indexOf;
  e.exports = function(e, t) {
    if (n) return e.indexOf(t);
    for (var r = 0; r < e.length; ++r)
      if (e[r] === t) return r;
    return -1
  }
}, function(e, t, n) {
  var r = n(148),
    i = n(69),
    a = n(602),
    o = n(216),
    s = n(217),
    l = n(47)("socket.io-client:socket"),
    u = n(100),
    c = n(212);
  e.exports = f;
  var d = {
      connect: 1,
      connect_error: 1,
      connect_timeout: 1,
      connecting: 1,
      disconnect: 1,
      error: 1,
      reconnect: 1,
      reconnect_attempt: 1,
      reconnect_failed: 1,
      reconnect_error: 1,
      reconnecting: 1,
      ping: 1,
      pong: 1
    },
    h = i.prototype.emit;

  function f(e, t, n) {
    this.io = e, this.nsp = t, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, n && n.query && (this.query = n.query), this.io.autoConnect && this.open()
  }
  i(f.prototype), f.prototype.subEvents = function() {
    if (!this.subs) {
      var e = this.io;
      this.subs = [o(e, "open", s(this, "onopen")), o(e, "packet", s(this, "onpacket")), o(e, "close", s(this, "onclose"))]
    }
  }, f.prototype.open = f.prototype.connect = function() {
    return this.connected ? this : (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting"), this)
  }, f.prototype.send = function() {
    var e = a(arguments);
    return e.unshift("message"), this.emit.apply(this, e), this
  }, f.prototype.emit = function(e) {
    if (d.hasOwnProperty(e)) return h.apply(this, arguments), this;
    var t = a(arguments),
      n = {
        type: (void 0 !== this.flags.binary ? this.flags.binary : c(t)) ? r.BINARY_EVENT : r.EVENT,
        data: t,
        options: {}
      };
    return n.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof t[t.length - 1] && (l("emitting packet with ack id %d", this.ids), this.acks[this.ids] = t.pop(), n.id = this.ids++), this.connected ? this.packet(n) : this.sendBuffer.push(n), this.flags = {}, this
  }, f.prototype.packet = function(e) {
    e.nsp = this.nsp, this.io.packet(e)
  }, f.prototype.onopen = function() {
    if (l("transport is open - connecting"), "/" !== this.nsp)
      if (this.query) {
        var e = "object" == typeof this.query ? u.encode(this.query) : this.query;
        l("sending connect packet with query %s", e), this.packet({
          type: r.CONNECT,
          query: e
        })
      } else this.packet({
        type: r.CONNECT
      })
  }, f.prototype.onclose = function(e) {
    l("close (%s)", e), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", e)
  }, f.prototype.onpacket = function(e) {
    var t = e.nsp === this.nsp,
      n = e.type === r.ERROR && "/" === e.nsp;
    if (t || n) switch (e.type) {
      case r.CONNECT:
        this.onconnect();
        break;
      case r.EVENT:
      case r.BINARY_EVENT:
        this.onevent(e);
        break;
      case r.ACK:
      case r.BINARY_ACK:
        this.onack(e);
        break;
      case r.DISCONNECT:
        this.ondisconnect();
        break;
      case r.ERROR:
        this.emit("error", e.data)
    }
  }, f.prototype.onevent = function(e) {
    var t = e.data || [];
    l("emitting event %j", t), null != e.id && (l("attaching ack callback to event"), t.push(this.ack(e.id))), this.connected ? h.apply(this, t) : this.receiveBuffer.push(t)
  }, f.prototype.ack = function(e) {
    var t = this,
      n = !1;
    return function() {
      if (!n) {
        n = !0;
        var i = a(arguments);
        l("sending ack %j", i), t.packet({
          type: c(i) ? r.BINARY_ACK : r.ACK,
          id: e,
          data: i
        })
      }
    }
  }, f.prototype.onack = function(e) {
    var t = this.acks[e.id];
    "function" == typeof t ? (l("calling ack %s with %j", e.id, e.data), t.apply(this, e.data), delete this.acks[e.id]) : l("bad ack %s", e.id)
  }, f.prototype.onconnect = function() {
    this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered()
  }, f.prototype.emitBuffered = function() {
    var e;
    for (e = 0; e < this.receiveBuffer.length; e++) h.apply(this, this.receiveBuffer[e]);
    for (this.receiveBuffer = [], e = 0; e < this.sendBuffer.length; e++) this.packet(this.sendBuffer[e]);
    this.sendBuffer = []
  }, f.prototype.ondisconnect = function() {
    l("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
  }, f.prototype.destroy = function() {
    if (this.subs) {
      for (var e = 0; e < this.subs.length; e++) this.subs[e].destroy();
      this.subs = null
    }
    this.io.destroy(this)
  }, f.prototype.close = f.prototype.disconnect = function() {
    return this.connected && (l("performing disconnect (%s)", this.nsp), this.packet({
      type: r.DISCONNECT
    })), this.destroy(), this.connected && this.onclose("io client disconnect"), this
  }, f.prototype.compress = function(e) {
    return this.flags.compress = e, this
  }, f.prototype.binary = function(e) {
    return this.flags.binary = e, this
  }
}, function(e, t) {
  e.exports = function(e, t, n) {
    return e.on(t, n), {
      destroy: function() {
        e.removeListener(t, n)
      }
    }
  }
}, function(e, t) {
  var n = [].slice;
  e.exports = function(e, t) {
    if ("string" == typeof t && (t = e[t]), "function" != typeof t) throw new Error("bind() requires a function");
    var r = n.call(arguments, 2);
    return function() {
      return t.apply(e, r.concat(n.call(arguments)))
    }
  }
}, function(e, t, n) {
  "use strict";
  e.exports = n(606)
}, function(e, t, n) {
  "use strict";
  e.exports = function(e, t, n, r) {
    for (var i = 65535 & e | 0, a = e >>> 16 & 65535 | 0, o = 0; 0 !== n;) {
      n -= o = n > 2e3 ? 2e3 : n;
      do {
        a = a + (i = i + t[r++] | 0) | 0
      } while (--o);
      i %= 65521, a %= 65521
    }
    return i | a << 16 | 0
  }
}, function(e, t, n) {
  "use strict";
  var r = function() {
    for (var e, t = [], n = 0; n < 256; n++) {
      e = n;
      for (var r = 0; r < 8; r++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
      t[n] = e
    }
    return t
  }();
  e.exports = function(e, t, n, i) {
    var a = r,
      o = i + n;
    e ^= -1;
    for (var s = i; s < o; s++) e = e >>> 8 ^ a[255 & (e ^ t[s])];
    return -1 ^ e
  }
}, function(e, t, n) {
  "use strict";
  var r = n(48),
    i = !0,
    a = !0;
  try {
    String.fromCharCode.apply(null, [0])
  } catch (e) {
    i = !1
  }
  try {
    String.fromCharCode.apply(null, new Uint8Array(1))
  } catch (e) {
    a = !1
  }
  for (var o = new r.Buf8(256), s = 0; s < 256; s++) o[s] = s >= 252 ? 6 : s >= 248 ? 5 : s >= 240 ? 4 : s >= 224 ? 3 : s >= 192 ? 2 : 1;

  function l(e, t) {
    if (t < 65534 && (e.subarray && a || !e.subarray && i)) return String.fromCharCode.apply(null, r.shrinkBuf(e, t));
    for (var n = "", o = 0; o < t; o++) n += String.fromCharCode(e[o]);
    return n
  }
  o[254] = o[254] = 1, t.string2buf = function(e) {
    var t, n, i, a, o, s = e.length,
      l = 0;
    for (a = 0; a < s; a++) 55296 == (64512 & (n = e.charCodeAt(a))) && a + 1 < s && 56320 == (64512 & (i = e.charCodeAt(a + 1))) && (n = 65536 + (n - 55296 << 10) + (i - 56320), a++), l += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
    for (t = new r.Buf8(l), o = 0, a = 0; o < l; a++) 55296 == (64512 & (n = e.charCodeAt(a))) && a + 1 < s && 56320 == (64512 & (i = e.charCodeAt(a + 1))) && (n = 65536 + (n - 55296 << 10) + (i - 56320), a++), n < 128 ? t[o++] = n : n < 2048 ? (t[o++] = 192 | n >>> 6, t[o++] = 128 | 63 & n) : n < 65536 ? (t[o++] = 224 | n >>> 12, t[o++] = 128 | n >>> 6 & 63, t[o++] = 128 | 63 & n) : (t[o++] = 240 | n >>> 18, t[o++] = 128 | n >>> 12 & 63, t[o++] = 128 | n >>> 6 & 63, t[o++] = 128 | 63 & n);
    return t
  }, t.buf2binstring = function(e) {
    return l(e, e.length)
  }, t.binstring2buf = function(e) {
    for (var t = new r.Buf8(e.length), n = 0, i = t.length; n < i; n++) t[n] = e.charCodeAt(n);
    return t
  }, t.buf2string = function(e, t) {
    var n, r, i, a, s = t || e.length,
      u = new Array(2 * s);
    for (r = 0, n = 0; n < s;)
      if ((i = e[n++]) < 128) u[r++] = i;
      else if ((a = o[i]) > 4) u[r++] = 65533, n += a - 1;
    else {
      for (i &= 2 === a ? 31 : 3 === a ? 15 : 7; a > 1 && n < s;) i = i << 6 | 63 & e[n++], a--;
      a > 1 ? u[r++] = 65533 : i < 65536 ? u[r++] = i : (i -= 65536, u[r++] = 55296 | i >> 10 & 1023, u[r++] = 56320 | 1023 & i)
    }
    return l(u, r)
  }, t.utf8border = function(e, t) {
    var n;
    for ((t = t || e.length) > e.length && (t = e.length), n = t - 1; n >= 0 && 128 == (192 & e[n]);) n--;
    return n < 0 ? t : 0 === n ? t : n + o[e[n]] > t ? n : t
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function() {
    this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
  }
}, function(e, t, n) {
  "use strict";
  e.exports = {
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    Z_BUF_ERROR: -5,
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    Z_BINARY: 0,
    Z_TEXT: 1,
    Z_UNKNOWN: 2,
    Z_DEFLATED: 8
  }
}, function(e, t, n) {
  ! function(e) {
    "use strict";
    e.defineLocale("af", {
      months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
      monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
      weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
      weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
      weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
      meridiemParse: /vm|nm/i,
      isPM: function(e) {
        return /^nm$/i.test(e)
      },
      meridiem: function(e, t, n) {
        return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
      },
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Vandag om] LT",
        nextDay: "[MÃ´re om] LT",
        nextWeek: "dddd [om] LT",
        lastDay: "[Gister om] LT",
        lastWeek: "[Laas] dddd [om] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "oor %s",
        past: "%s gelede",
        s: "'n paar sekondes",
        ss: "%d sekondes",
        m: "'n minuut",
        mm: "%d minute",
        h: "'n uur",
        hh: "%d ure",
        d: "'n dag",
        dd: "%d dae",
        M: "'n maand",
        MM: "%d maande",
        y: "'n jaar",
        yy: "%d jaar"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
      ordinal: function(e) {
        return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  }(n(2))
}, function(e, t, n) {
  ! function(e) {
    "use strict";
    var t = {
        1: "Ù¡",
        2: "Ù¢",
        3: "Ù£",
        4: "Ù¤",
        5: "Ù¥",
        6: "Ù¦",
        7: "Ù§",
        8: "Ù¨",
        9: "Ù©",
        0: "Ù "
      },
      n = {
        "Ù¡": "1",
        "Ù¢": "2",
        "Ù£": "3",
        "Ù¤": "4",
        "Ù¥": "5",
        "Ù¦": "6",
        "Ù§": "7",
        "Ù¨": "8",
        "Ù©": "9",
        "Ù ": "0"
      },
      r = function(e) {
        return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
      },
      i = {
        s: ["Ø£Ù‚Ù„ Ù…Ù† Ø«Ø§Ù†ÙŠØ©", "Ø«Ø§Ù†ÙŠØ© ÙˆØ§Ø­Ø¯Ø©", ["Ø«Ø§Ù†ÙŠØªØ§Ù†", "Ø«Ø§Ù†ÙŠØªÙŠÙ†"], "%d Ø«ÙˆØ§Ù†", "%d Ø«Ø§Ù†ÙŠØ©", "%d Ø«Ø§Ù†ÙŠØ©"],
        m: ["Ø£Ù‚Ù„ Ù…Ù† Ø¯Ù‚ÙŠÙ‚Ø©", "Ø¯Ù‚ÙŠÙ‚Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø¯Ù‚ÙŠÙ‚ØªØ§Ù†", "Ø¯Ù‚ÙŠÙ‚ØªÙŠÙ†"], "%d Ø¯Ù‚Ø§Ø¦Ù‚", "%d Ø¯Ù‚ÙŠÙ‚Ø©", "%d Ø¯Ù‚ÙŠÙ‚Ø©"],
        h: ["Ø£Ù‚Ù„ Ù…Ù† Ø³Ø§Ø¹Ø©", "Ø³Ø§Ø¹Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø³Ø§Ø¹ØªØ§Ù†", "Ø³Ø§Ø¹ØªÙŠÙ†"], "%d Ø³Ø§Ø¹Ø§Øª", "%d Ø³Ø§Ø¹Ø©", "%d Ø³Ø§Ø¹Ø©"],
        d: ["Ø£Ù‚Ù„ Ù…Ù† ÙŠÙˆÙ…", "ÙŠÙˆÙ… ÙˆØ§Ø­Ø¯", ["ÙŠÙˆÙ…Ø§Ù†", "ÙŠÙˆÙ…ÙŠÙ†"], "%d Ø£ÙŠØ§Ù…", "%d ÙŠÙˆÙ…Ù‹Ø§", "%d ÙŠÙˆÙ…"],
        M: ["Ø£Ù‚Ù„ Ù…Ù† Ø´Ù‡Ø±", "Ø´Ù‡Ø± ÙˆØ§Ø­Ø¯", ["Ø´Ù‡Ø±Ø§Ù†", "Ø´Ù‡Ø±ÙŠÙ†"], "%d Ø£Ø´Ù‡Ø±", "%d Ø´Ù‡Ø±Ø§", "%d Ø´Ù‡Ø±"],
        y: ["Ø£Ù‚Ù„ Ù…Ù† Ø¹Ø§Ù…", "Ø¹Ø§Ù… ÙˆØ§Ø­Ø¯", ["Ø¹Ø§Ù…Ø§Ù†", "Ø¹Ø§Ù…ÙŠÙ†"], "%d Ø£Ø¹ÙˆØ§Ù…", "%d Ø¹Ø§Ù…Ù‹Ø§", "%d Ø¹Ø§Ù…"]
      },
      a = function(e) {
        return function(t, n, a, o) {
          var s = r(t),
            l = i[e][r(t)];
          return 2 === s && (l = l[n ? 0 : 1]), l.replace(/%d/i, t)
        }
      },
      o = ["ÙŠÙ†Ø§ÙŠØ±", "ÙØ¨Ø±Ø§ÙŠØ±", "Ù…Ø§Ø±Ø³", "Ø£Ø¨Ø±ÙŠÙ„", "Ù…Ø§ÙŠÙˆ", "ÙŠÙˆÙ†ÙŠÙˆ", "ÙŠÙˆÙ„ÙŠÙˆ", "Ø£ØºØ³Ø·Ø³", "Ø³Ø¨ØªÙ…Ø¨Ø±", "Ø£ÙƒØªÙˆØ¨Ø±", "Ù†ÙˆÙÙ…Ø¨Ø±", "Ø¯ÙŠØ³Ù…Ø¨Ø±"];
    e.defineLocale("ar", {
      months: o,
      monthsShort: o,
      weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
      weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
      weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "D/â€M/â€YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      meridiemParse: /Øµ|Ù…/,
      isPM: function(e) {
        return "Ù…" === e
      },
      meridiem: function(e, t, n) {
        return e < 12 ? "Øµ" : "Ù…"
      },
      calendar: {
        sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        nextDay: "[ØºØ¯Ù‹Ø§ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        nextWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        lastDay: "[Ø£Ù…Ø³ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        lastWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "Ø¨Ø¹Ø¯ %s",
        past: "Ù…Ù†Ø° %s",
        s: a("s"),
        ss: a("s"),
        m: a("m"),
        mm: a("m"),
        h: a("h"),
        hh: a("h"),
        d: a("d"),
        dd: a("d"),
        M: a("M"),
        MM: a("M"),
        y: a("y"),
        yy: a("y")
      },
      preparse: function(e) {
        return e.replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, (function(e) {
          return n[e]
        })).replace(/ØŒ/g, ",")
      },
      postformat: function(e) {
        return e.replace(/\d/g, (function(e) {
          return t[e]
        })).replace(/,/g, "ØŒ")
      },
      week: {
        dow: 6,
        doy: 12
      }
    })
  }(n(2))
}, function(e, t, n) {
  ! function(e) {
    "use strict";
    e.defineLocale("ar-dz", {
      months: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
      monthsShort: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
      weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
      weekdaysShort: "Ø§Ø­Ø¯_Ø§Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
      weekdaysMin: "Ø£Ø­_Ø¥Ø«_Ø«Ù„Ø§_Ø£Ø±_Ø®Ù…_Ø¬Ù…_Ø³Ø¨".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "ÙÙŠ %s",
        past: "Ù…Ù†Ø° %s",
        s: "Ø«ÙˆØ§Ù†",
        ss: "%d Ø«Ø§Ù†ÙŠØ©",
        m: "Ø¯Ù‚ÙŠÙ‚Ø©",
        mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
        h: "Ø³Ø§Ø¹Ø©",
        hh: "%d Ø³Ø§Ø¹Ø§Øª",
        d: "ÙŠÙˆÙ…",
        dd: "%d Ø£ÙŠØ§Ù…",
        M: "Ø´Ù‡Ø±",
        MM: "%d Ø£Ø´Ù‡Ø±",
        y: "Ø³Ù†Ø©",
        yy: "%d Ø³Ù†ÙˆØ§Øª"
      },
      week: {
        dow: 0,
        doy: 4
      }
    })
  }(n(2))
}, function(e, t, n) {
  ! function(e) {
    "use strict";
    e.defineLocale("ar-kw", {
      months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
      monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
      weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥ØªÙ†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
      weekdaysShort: "Ø§Ø­Ø¯_Ø§ØªÙ†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
      weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "ÙÙŠ %s",
        past: "Ù…Ù†Ø° %s",
        s: "Ø«ÙˆØ§Ù†",
        ss: "%d Ø«Ø§Ù†ÙŠØ©",
        m: "Ø¯Ù‚ÙŠÙ‚Ø©",
        mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
        h: "Ø³Ø§Ø¹Ø©",
        hh: "%d Ø³Ø§Ø¹Ø§Øª",
        d: "ÙŠÙˆÙ…",
        dd: "%d Ø£ÙŠØ§Ù…",
        M: "Ø´Ù‡Ø±",
        MM: "%d Ø£Ø´Ù‡Ø±",
        y: "Ø³Ù†Ø©",
        yy: "%d Ø³Ù†ÙˆØ§Øª"
      },
      week: {
        dow: 0,
        doy: 12
      }
    })
  }(n(2))
}, function(e, t, n) {
  ! function(e) {
    "use strict";
    var t = {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        0: "0"
      },
      n = function(e) {
        return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
      },
      r = {
        s: ["Ø£Ù‚Ù„ Ù…Ù† Ø«Ø§Ù†ÙŠØ©", "Ø«Ø§Ù†ÙŠØ© ÙˆØ§Ø­Ø¯Ø©", ["Ø«Ø§Ù†ÙŠØªØ§Ù†", "Ø«Ø§Ù†ÙŠØªÙŠÙ†"], "%d Ø«ÙˆØ§Ù†", "%d Ø«Ø§Ù†ÙŠØ©", "%d Ø«Ø§Ù†ÙŠØ©"],
        m: ["Ø£Ù‚Ù„ Ù…Ù† Ø¯Ù‚ÙŠÙ‚Ø©", "Ø¯Ù‚ÙŠÙ‚Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø¯Ù‚ÙŠÙ‚ØªØ§Ù†", "Ø¯Ù‚ÙŠÙ‚ØªÙŠÙ†"], "%d Ø¯Ù‚Ø§Ø¦Ù‚", "%d Ø¯Ù‚ÙŠÙ‚Ø©", "%d Ø¯Ù‚ÙŠÙ‚Ø©"],
        h: ["Ø£Ù‚Ù„ Ù…Ù† Ø³Ø§Ø¹Ø©", "Ø³Ø§Ø¹Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø³Ø§Ø¹ØªØ§Ù†", "Ø³Ø§Ø¹ØªÙŠÙ†"], "%d Ø³Ø§Ø¹Ø§Øª", "%d Ø³Ø§Ø¹Ø©", "%d Ø³Ø§Ø¹Ø©"],
        d: ["Ø£Ù‚Ù„ Ù…Ù† ÙŠÙˆÙ…", "ÙŠÙˆÙ… ÙˆØ§Ø­Ø¯", ["ÙŠÙˆÙ…Ø§Ù†", "ÙŠÙˆÙ…ÙŠÙ†"], "%d Ø£ÙŠØ§Ù…", "%d ÙŠÙˆÙ…Ù‹Ø§", "%d ÙŠÙˆÙ…"],
        M: ["Ø£Ù‚Ù„ Ù…Ù† Ø´Ù‡Ø±", "Ø´Ù‡Ø± ÙˆØ§Ø­Ø¯", ["Ø´Ù‡Ø±Ø§Ù†", "Ø´Ù‡Ø±ÙŠÙ†"], "%d Ø£Ø´Ù‡Ø±", "%d Ø´Ù‡Ø±Ø§", "%d Ø´Ù‡Ø±"],
        y: ["Ø£Ù‚Ù„ Ù…Ù† Ø¹Ø§Ù…", "Ø¹Ø§Ù… ÙˆØ§Ø­Ø¯", ["Ø¹Ø§Ù…Ø§Ù†", "Ø¹Ø§Ù…ÙŠÙ†"], "%d Ø£Ø¹ÙˆØ§Ù…", "%d Ø¹Ø§Ù…Ù‹Ø§", "%d Ø¹Ø§Ù…"]
      },
      i = function(e) {
        return function(t, i, a, o) {
          var s = n(t),
            l = r[e][n(t)];
          return 2 === s && (l = l[i ? 0 : 1]), l.replace(/%d/i, t)
        }
      },
      a = ["ÙŠÙ†Ø§ÙŠØ±", "ÙØ¨Ø±Ø§ÙŠØ±", "Ù…Ø§Ø±Ø³", "Ø£Ø¨Ø±ÙŠÙ„", "Ù…Ø§ÙŠÙˆ", "ÙŠÙˆÙ†ÙŠÙˆ", "ÙŠÙˆÙ„ÙŠÙˆ", "Ø£ØºØ³Ø·Ø³", "Ø³Ø¨ØªÙ…Ø¨Ø±", "Ø£ÙƒØªÙˆØ¨Ø±", "Ù†ÙˆÙÙ…Ø¨Ø±", "Ø¯ÙŠØ³Ù…Ø¨Ø±"];
    e.defineLocale("ar-ly", {
      months: a,
      monthsShort: a,
      weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
      weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
      weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "D/â€M/â€YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      meridiemParse: /Øµ|Ù…/,
      isPM: function(e) {
        return "Ù…" === e
      },
      meridiem: function(e, t, n) {
        return e < 12 ? "Øµ" : "Ù…"
      },
      calendar: {
        sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        nextDay: "[ØºØ¯Ù‹Ø§ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        nextWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        lastDay: "[Ø£Ù…Ø³ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        lastWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "Ø¨Ø¹Ø¯ %s",
        past: "Ù…Ù†Ø° %s",
        s: i("s"),
        ss: i("s"),
        m: i("m"),
        mm: i("m"),
        h: i("h"),
        hh: i("h"),
        d: i("d"),
        dd: i("d"),
        M: i("M"),
        MM: i("M"),
        y: i("y"),
        yy: i("y")
      },
      preparse: function(e) {
        return e.replace(/ØŒ/g, ",")
      },
      postformat: function(e) {
        return e.replace(/\d/g, (function(e) {
          return t[e]
        })).replace(/,/g, "ØŒ")
      },
      week: {
        dow: 6,
        doy: 12
      }
    })
  }(n(2))
}, function(e, t, n) {
  ! function(e) {
    "use strict";
    e.defineLocale("ar-ma", {
      months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
      monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
      weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥ØªÙ†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
      weekdaysShort: "Ø§Ø­Ø¯_Ø§ØªÙ†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
      weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "ÙÙŠ %s",
        past: "Ù…Ù†Ø° %s",
        s: "Ø«ÙˆØ§Ù†",
        ss: "%d Ø«Ø§Ù†ÙŠØ©",
        m: "Ø¯Ù‚ÙŠÙ‚Ø©",
        mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
        h: "Ø³Ø§Ø¹Ø©",
        hh: "%d Ø³Ø§Ø¹Ø§Øª",
        d: "ÙŠÙˆÙ…",
        dd: "%d Ø£ÙŠØ§Ù…",
        M: "Ø´Ù‡Ø±",
        MM: "%d Ø£Ø´Ù‡Ø±",
        y: "Ø³Ù†Ø©",
        yy: "%d Ø³Ù†ÙˆØ§Øª"
      },
      week: {
        dow: 6,
        doy: 12
      }
    })
  }(n(2))
}, function(e, t, n) {
  ! function(e) {
    "use strict";
    var t = {
        1: "Ù¡",
        2: "Ù¢",
        3: "Ù£",
        4: "Ù¤",
        5: "Ù¥",
        6: "Ù¦",
        7: "Ù§",
        8: "Ù¨",
        9: "Ù©",
        0: "Ù "
      },
      n = {
        "Ù¡": "1",
        "Ù¢": "2",
        "Ù£": "3",
        "Ù¤": "4",
        "Ù¥": "5",
        "Ù¦": "6",
        "Ù§": "7",
        "Ù¨": "8",
        "Ù©": "9",
        "Ù ": "0"
      };
    e.defineLocale("ar-sa", {
      months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠÙˆ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆ_Ø£ØºØ³Ø·Ø³_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
      monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠÙˆ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆ_Ø£ØºØ³Ø·Ø³_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
      weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
      weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
      weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      meridiemParse: /Øµ|Ù…/,
      isPM: function(e) {
        return "Ù…" === e
      },
      meridiem: function(e, t, n) {
        return e < 12 ? "Øµ" : "Ù…"
      },
      calendar: {
        sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "ÙÙŠ %s",
        past: "Ù…Ù†Ø° %s",
        s: "Ø«ÙˆØ§Ù†",
        ss: "%d Ø«Ø§Ù†ÙŠØ©",
        m: "Ø¯Ù‚ÙŠÙ‚Ø©",
        mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
        h: "Ø³Ø§Ø¹Ø©",
        hh: "%d Ø³Ø§Ø¹Ø§Øª",
        d: "ÙŠÙˆÙ…",
        dd: "%d Ø£ÙŠØ§Ù…",
        M: "Ø´Ù‡Ø±",
        MM: "%d Ø£Ø´Ù‡Ø±",
        y: "Ø³Ù†Ø©",
        yy: "%d Ø³Ù†ÙˆØ§Øª"
      },
      preparse: function(e) {
        return e.replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, (function(e) {
          return n[e]
        })).replace(/ØŒ/g, ",")
      },
      postformat: function(e) {
        return e.replace(/\d/g, (function(e) {
          return t[e]
        })).replace(/,/g, "ØŒ")
      },
      week: {
        dow: 0,
        doy: 6
      }
    })
  }(n(2))
}, function(e, t, n) {
  ! function(e) {
    "use strict";
    e.defineLocale("ar-tn", {
      months: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
      monthsShort: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
      weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
      weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
      weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "ÙÙŠ %s",
        past: "Ù…Ù†Ø° %s",
        s: "Ø«ÙˆØ§Ù†",
        ss: "%d Ø«Ø§Ù†ÙŠØ©",
        m: "Ø¯Ù‚ÙŠÙ‚Ø©",
        mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
        h: "Ø³Ø§Ø¹Ø©",
        hh: "%d Ø³Ø§Ø¹Ø§Øª",
        d: "ÙŠÙˆÙ…",
        dd: "%d Ø£ÙŠØ§Ù…",
        M: "Ø´Ù‡Ø±",
        MM: "%d Ø£Ø´Ù‡Ø±",
        y: "Ø³Ù†Ø©",
        yy: "%d Ø³Ù†ÙˆØ§Øª"
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  }(n(2))
}, function(e, t, n) {
  ! function(e) {
    "use strict";
    var t = {
      1: "-inci",
      5: "-inci",
      8: "-inci",
      70: "-inci",
      80: "-inci",
      2: "-nci",
      7: "-nci",
      20: "-nci",
      50: "-nci",
      3: "-Ã¼ncÃ¼",
      4: "-Ã¼ncÃ¼",
      100: "-Ã¼ncÃ¼",
      6: "-ncÄ±",
      9: "-uncu",
      10: "-uncu",
      30: "-uncu",
      60: "-Ä±ncÄ±",
      90: "-Ä±ncÄ±"
    };
    e.defineLocale("az", {
      months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
      monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
      weekdays: "Bazar_Bazar ertÉ™si_Ã‡É™rÅŸÉ™nbÉ™ axÅŸamÄ±_Ã‡É™rÅŸÉ™nbÉ™_CÃ¼mÉ™ axÅŸamÄ±_CÃ¼mÉ™_ÅÉ™nbÉ™".split("_"),
      weekdaysShort: "Baz_BzE_Ã‡Ax_Ã‡É™r_CAx_CÃ¼m_ÅÉ™n".split("_"),
      weekdaysMin: "Bz_BE_Ã‡A_Ã‡É™_CA_CÃ¼_ÅÉ™".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[bugÃ¼n saat] LT",
        nextDay: "[sabah saat] LT",
        nextWeek: "[gÉ™lÉ™n hÉ™ftÉ™] dddd [saat] LT",
        lastDay: "[dÃ¼nÉ™n] LT",
        lastWeek: "[keÃ§É™n hÉ™ftÉ™] dddd [saat] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s sonra",
        past: "%s É™vvÉ™l",
        s: "birneÃ§É™ saniyÉ™",
        ss: "%d saniyÉ™",
        m: "bir dÉ™qiqÉ™",
        mm: "%d dÉ™qiqÉ™",
        h: "bir saat",
        hh: "%d saat",
        d: "bir gÃ¼n",
        dd: "%d gÃ¼n",
        M: "bir ay",
        MM: "%d ay",
        y: "bir il",
        yy: "%d il"
      },
      meridiemParse: /gecÉ™|sÉ™hÉ™r|gÃ¼ndÃ¼z|axÅŸam/,
      isPM: function(e) {
        return /^(gÃ¼ndÃ¼z|axÅŸam)$/.test(e)
      },
      meridiem: function(e, t, n) {
        return e < 4 ? "gecÉ™" : e < 12 ? "sÉ™hÉ™r" : e < 17 ? "gÃ¼ndÃ¼z" : "axÅŸam"
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(Ä±ncÄ±|inci|nci|Ã¼ncÃ¼|ncÄ±|uncu)/,
      ordinal: function(e) {
        if (0 === e) return e + "-Ä±ncÄ±";
        var n = e % 10;
        return e + (t[n] || t[e % 100 - n] || t[e >= 100 ? 100 : null])
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  }(n(2))
}, function(e, t, n) {
  ! function(e) {
    "use strict";

    function t(e, t, n) {
      var r, i;
      return "m" === n ? t ? "Ñ…Ğ²Ñ–Ğ»Ñ–Ğ½Ğ°" : "Ñ…Ğ²Ñ–Ğ»Ñ–Ğ½Ñƒ" : "h" === n ? t ? "Ğ³Ğ°Ğ´Ğ·Ñ–Ğ½Ğ°" : "Ğ³Ğ°Ğ´Ğ·Ñ–Ğ½Ñƒ" : e + " " + (r = +e, i = {
        ss: t ? "ÑĞµĞºÑƒĞ½Ğ´Ğ°_ÑĞµĞºÑƒĞ½Ğ´Ñ‹_ÑĞµĞºÑƒĞ½Ğ´" : "ÑĞµĞºÑƒĞ½Ğ´Ñƒ_ÑĞµĞºÑƒĞ½Ğ´Ñ‹_ÑĞµĞºÑƒĞ½Ğ´",
        mm: t ? "Ñ…Ğ²Ñ–Ğ»Ñ–Ğ½Ğ°_Ñ…Ğ²Ñ–Ğ»Ñ–Ğ½Ñ‹_Ñ…Ğ²Ñ–Ğ»Ñ–Ğ½" : "Ñ…Ğ²Ñ–Ğ»Ñ–Ğ½Ñƒ_Ñ…Ğ²Ñ–Ğ»Ñ–Ğ½Ñ‹_Ñ…Ğ²Ñ–Ğ»Ñ–Ğ½",
        hh: t ? "Ğ³Ğ°Ğ´Ğ·Ñ–Ğ½Ğ°_Ğ³Ğ°Ğ´Ğ·Ñ–Ğ½Ñ‹_Ğ³Ğ°Ğ´Ğ·Ñ–Ğ½" : "Ğ³Ğ°Ğ´Ğ·Ñ–Ğ½Ñƒ_Ğ³Ğ°Ğ´Ğ·Ñ–Ğ½Ñ‹_Ğ³Ğ°Ğ´Ğ·Ñ–Ğ½",
        dd: "Ğ´Ğ·ĞµĞ½ÑŒ_Ğ´Ğ½Ñ–_Ğ´Ğ·Ñ‘Ğ½",
        MM: "Ğ¼ĞµÑÑÑ†_Ğ¼ĞµÑÑÑ†Ñ‹_Ğ¼ĞµÑÑÑ†Ğ°Ñ",
        yy: "Ğ³Ğ¾Ğ´_Ğ³Ğ°Ğ´Ñ‹_Ğ³Ğ°Ğ´Ğ¾Ñ"
      } [n].split("_"), r % 10 == 1 && r % 100 != 11 ? i[0] : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20) ? i[1] : i[2])
    }
    e.defineLocale("be", {
      months: {
        format: "ÑÑ‚ÑƒĞ´Ğ·ĞµĞ½Ñ_Ğ»ÑÑ‚Ğ°Ğ³Ğ°_ÑĞ°ĞºĞ°Ğ²Ñ–ĞºĞ°_ĞºÑ€Ğ°ÑĞ°Ğ²Ñ–ĞºĞ°_Ñ‚Ñ€Ğ°ÑĞ½Ñ_Ñ‡ÑÑ€Ğ²ĞµĞ½Ñ_Ğ»Ñ–Ğ¿ĞµĞ½Ñ_Ğ¶Ğ½Ñ–ÑĞ½Ñ_Ğ²ĞµÑ€Ğ°ÑĞ½Ñ_ĞºĞ°ÑÑ‚Ñ€Ñ‹Ñ‡Ğ½Ñ–ĞºĞ°_Ğ»Ñ–ÑÑ‚Ğ°Ğ¿Ğ°Ğ´Ğ°_ÑĞ½ĞµĞ¶Ğ½Ñ".split("_"),
        standalone: "ÑÑ‚ÑƒĞ´Ğ·ĞµĞ½ÑŒ_Ğ»ÑÑ‚Ñ‹_ÑĞ°ĞºĞ°Ğ²Ñ–Ğº_ĞºÑ€Ğ°ÑĞ°Ğ²Ñ–Ğº_Ñ‚Ñ€Ğ°Ğ²ĞµĞ½ÑŒ_Ñ‡ÑÑ€Ğ²ĞµĞ½ÑŒ_Ğ»Ñ–Ğ¿ĞµĞ½ÑŒ_Ğ¶Ğ½Ñ–Ğ²ĞµĞ½ÑŒ_Ğ²ĞµÑ€Ğ°ÑĞµĞ½ÑŒ_ĞºĞ°ÑÑ‚Ñ€Ñ‹Ñ‡Ğ½Ñ–Ğº_Ğ»Ñ–ÑÑ‚Ğ°Ğ¿Ğ°Ğ´_ÑĞ½ĞµĞ¶Ğ°Ğ½ÑŒ".split("_")
      },
      monthsShort: "ÑÑ‚ÑƒĞ´_Ğ»ÑÑ‚_ÑĞ°Ğº_ĞºÑ€Ğ°Ñ_Ñ‚Ñ€Ğ°Ğ²_Ñ‡ÑÑ€Ğ²_Ğ»Ñ–Ğ¿_Ğ¶Ğ½Ñ–Ğ²_Ğ²ĞµÑ€_ĞºĞ°ÑÑ‚_Ğ»Ñ–ÑÑ‚_ÑĞ½ĞµĞ¶".split("_"),
      weekdays: {
        format: "Ğ½ÑĞ´Ğ·ĞµĞ»Ñ_Ğ¿Ğ°Ğ½ÑĞ´Ğ·ĞµĞ»Ğ°Ğº_Ğ°ÑÑ‚Ğ¾Ñ€Ğ°Ğº_ÑĞµÑ€Ğ°Ğ´Ñƒ_Ñ‡Ğ°Ñ†Ğ²ĞµÑ€_Ğ¿ÑÑ‚Ğ½Ñ–Ñ†Ñƒ_ÑÑƒĞ±Ğ¾Ñ‚Ñƒ".split("_"),
        standalone: "Ğ½ÑĞ´Ğ·ĞµĞ»Ñ_Ğ¿Ğ°Ğ½ÑĞ´Ğ·ĞµĞ»Ğ°Ğº_Ğ°ÑÑ‚Ğ¾Ñ€Ğ°Ğº_ÑĞµÑ€Ğ°Ğ´Ğ°_Ñ‡Ğ°Ñ†Ğ²ĞµÑ€_Ğ¿ÑÑ‚Ğ½Ñ–Ñ†Ğ°_ÑÑƒĞ±Ğ¾Ñ‚Ğ°".split("_"),
        isFormat: /\[ ?[Ğ£ÑƒÑ] ?(?:Ğ¼Ñ–Ğ½ÑƒĞ»ÑƒÑ|Ğ½Ğ°ÑÑ‚ÑƒĞ¿Ğ½ÑƒÑ)? ?\] ?dddd/
      },
      weekdaysShort: "Ğ½Ğ´_Ğ¿Ğ½_Ğ°Ñ‚_ÑÑ€_Ñ‡Ñ†_Ğ¿Ñ‚_ÑĞ±".split("_"),
      weekdaysMin: "Ğ½Ğ´_Ğ¿Ğ½_Ğ°Ñ‚_ÑÑ€_Ñ‡Ñ†_Ğ¿Ñ‚_ÑĞ±".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY Ğ³.",
        LLL: "D MMMM YYYY Ğ³., HH:mm",
        LLLL: "dddd, D MMMM YYYY Ğ³., HH:mm"
      },
      calendar: {
        sameDay: "[Ğ¡Ñ‘Ğ½Ğ½Ñ Ñ] LT",
        nextDay: "[Ğ—Ğ°ÑÑ‚Ñ€Ğ° Ñ] LT",
        lastDay: "[Ğ£Ñ‡Ğ¾Ñ€Ğ° Ñ] LT",
        nextWeek: function() {
          return "[Ğ£] dddd [Ñ] LT"
        },
        lastWeek: function() {
          switch (this.day()) {
            case 0:
            case 3:
            case 5:
            case 6:
              return "[Ğ£ Ğ¼Ñ–Ğ½ÑƒĞ»ÑƒÑ] dddd [Ñ] LT";
            case 1:
            case 2:
            case 4:
              return "[Ğ£ Ğ¼Ñ–Ğ½ÑƒĞ»Ñ‹] dddd [Ñ] LT"
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "Ğ¿Ñ€Ğ°Ğ· %s",
        past: "%s Ñ‚Ğ°Ğ¼Ñƒ",
        s: "Ğ½ĞµĞºĞ°Ğ»ÑŒĞºÑ– ÑĞµĞºÑƒĞ½Ğ´",
        m: t,
        mm: t,
        h: t,
        hh: t,
        d: "Ğ´Ğ·ĞµĞ½ÑŒ",
        dd: t,
        M: "Ğ¼ĞµÑÑÑ†",
        MM: t,
        y: "Ğ³Ğ¾Ğ´",
        yy: t
      },
      meridiemParse: /Ğ½Ğ¾Ñ‡Ñ‹|Ñ€Ğ°Ğ½Ñ–Ñ†Ñ‹|Ğ´Ğ½Ñ|Ğ²ĞµÑ‡Ğ°Ñ€Ğ°/,
      isPM: function(e) {
        return /^(Ğ´Ğ½Ñ|Ğ²ĞµÑ‡Ğ°Ñ€Ğ°)$/.test(e)
      },
      meridiem: function(e, t, n) {
        return e < 4 ? "Ğ½Ğ¾Ñ‡Ñ‹" : e < 12 ? "Ñ€Ğ°Ğ½Ñ–Ñ†Ñ‹" : e < 17 ? "Ğ´Ğ½Ñ" : "Ğ²ĞµÑ‡Ğ°Ñ€Ğ°"
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(Ñ–|Ñ‹|Ğ³Ğ°)/,
      ordinal: function(e, t) {
        switch (t) {
          case "M":
          case "d":
          case "DDD":
          case "w":
          case "W":
            return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-Ñ‹" : e + "-Ñ–";
          case "D":
            return e + "-Ğ³Ğ°";
          default:
            return e
        }
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  }(n(2))
}, function(e, t, n) {
  ! function(e) {
    "use strict";
    e.defineLocale("bg", {
      months: "ÑĞ½ÑƒĞ°Ñ€Ğ¸_Ñ„ĞµĞ²Ñ€ÑƒĞ°Ñ€Ğ¸_Ğ¼Ğ°Ñ€Ñ‚_Ğ°Ğ¿Ñ€Ğ¸Ğ»_Ğ¼Ğ°Ğ¹_ÑĞ½Ğ¸_ÑĞ»Ğ¸_Ğ°Ğ²Ğ³ÑƒÑÑ‚_ÑĞµĞ¿Ñ‚ĞµĞ¼Ğ²Ñ€Ğ¸_Ğ¾ĞºÑ‚Ğ¾Ğ¼Ğ²Ñ€Ğ¸_Ğ½Ğ¾ĞµĞ¼Ğ²Ñ€Ğ¸_Ğ´ĞµĞºĞµĞ¼Ğ²Ñ€Ğ¸".split("_"),
      monthsShort: "ÑĞ½Ñ€_Ñ„ĞµĞ²_Ğ¼Ğ°Ñ€_Ğ°Ğ¿Ñ€_Ğ¼Ğ°Ğ¹_ÑĞ½Ğ¸_ÑĞ»Ğ¸_Ğ°Ğ²Ğ³_ÑĞµĞ¿_Ğ¾ĞºÑ‚_Ğ½Ğ¾Ğµ_Ğ´ĞµĞº".split("_"),
      weekdays: "Ğ½ĞµĞ´ĞµĞ»Ñ_Ğ¿Ğ¾Ğ½ĞµĞ´ĞµĞ»Ğ½Ğ¸Ğº_Ğ²Ñ‚Ğ¾Ñ€Ğ½Ğ¸Ğº_ÑÑ€ÑĞ´Ğ°_Ñ‡ĞµÑ‚Ğ²ÑŠÑ€Ñ‚ÑŠĞº_Ğ¿ĞµÑ‚ÑŠĞº_ÑÑŠĞ±Ğ¾Ñ‚Ğ°".split("_"),
      weekdaysShort: "Ğ½ĞµĞ´_Ğ¿Ğ¾Ğ½_Ğ²Ñ‚Ğ¾_ÑÑ€Ñ_Ñ‡ĞµÑ‚_Ğ¿ĞµÑ‚_ÑÑŠĞ±".split("_"),
      weekdaysMin: "Ğ½Ğ´_Ğ¿Ğ½_Ğ²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ğ¿Ñ‚_ÑĞ±".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "D.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY H:mm",
        LLLL: "dddd, D MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[Ğ”Ğ½ĞµÑ Ğ²] LT",
        nextDay: "[Ğ£Ñ‚Ñ€Ğµ Ğ²] LT",
        nextWeek: "dddd [Ğ²] LT",
        lastDay: "[Ğ’Ñ‡ĞµÑ€Ğ° Ğ²] LT",
        lastWeek: function() {
          switch (this.day()) {
            case 0:
            case 3:
            case 6:
              return "[Ğ’ Ğ¸Ğ·Ğ¼Ğ¸Ğ½Ğ°Ğ»Ğ°Ñ‚Ğ°] dddd [Ğ²] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[Ğ’ Ğ¸Ğ·Ğ¼Ğ¸Ğ½Ğ°Ğ»Ğ¸Ñ] dddd [Ğ²] LT"
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "ÑĞ»ĞµĞ´ %s",
        past: "Ğ¿Ñ€ĞµĞ´Ğ¸ %s",
        s: "Ğ½ÑĞºĞ¾Ğ»ĞºĞ¾ ÑĞµĞºÑƒĞ½Ğ´Ğ¸",
        ss: "%d ÑĞµĞºÑƒĞ½Ğ´Ğ¸",
        m: "Ğ¼Ğ¸Ğ½ÑƒÑ‚Ğ°",
        mm: "%d Ğ¼Ğ¸Ğ½ÑƒÑ‚Ğ¸",
        h: "Ñ‡Ğ°Ñ",
        hh: "%d Ñ‡Ğ°ÑĞ°",
        d: "Ğ´ĞµĞ½",
        dd: "%d Ğ´Ğ½Ğ¸",
        M: "Ğ¼ĞµÑĞµÑ†",
        MM: "%d Ğ¼ĞµÑĞµÑ†Ğ°",
        y: "Ğ³Ğ¾Ğ´Ğ¸Ğ½Ğ°",
        yy: "%d Ğ³Ğ¾Ğ´Ğ¸Ğ½Ğ¸"
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(ĞµĞ²|ĞµĞ½|Ñ‚Ğ¸|Ğ²Ğ¸|Ñ€Ğ¸|Ğ¼Ğ¸)/,
      ordinal: function(e) {
        var t = e % 10,
          n = e % 100;
        return 0 === e ? e + "-ĞµĞ²" : 0 === n ? e + "-ĞµĞ½" : n > 10 && n < 20 ? e + "-Ñ‚Ğ¸" : 1 === t ? e + "-Ğ²Ğ¸" : 2 === t ? e + "-Ñ€Ğ¸" : 7 === t || 8 === t ? e + "-Ğ¼Ğ¸" : e + "-Ñ‚Ğ¸"
      },
      week: {
        dow: 1,
        doy: 7
      }
    })
  }(n(2))
}, function(e, t, n) {
  ! function(e) {
    "use strict";
    e.defineLocale("bm", {
      months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_MÉ›kalo_ZuwÉ›nkalo_Zuluyekalo_Utikalo_SÉ›tanburukalo_É”kutÉ”burukalo_Nowanburukalo_Desanburukalo".split("_"),
      monthsShort: "Zan_Few_Mar_Awi_MÉ›_Zuw_Zul_Uti_SÉ›t_É”ku_Now_Des".split("_"),
      weekdays: "Kari_NtÉ›nÉ›n_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
      weekdaysShort: "Kar_NtÉ›_Tar_Ara_Ala_Jum_Sib".split("_"),
      weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "MMMM [tile] D [san] YYYY",
        LLL: "MMMM [tile] D [san] YYYY [lÉ›rÉ›] HH:mm",
        LLLL: "dddd MMMM [tile] D [san] YYYY [lÉ›rÉ›] HH:mm"
      },
      calendar: {
        sameDay: "[Bi lÉ›rÉ›] LT",
        nextDay: "[Sini lÉ›rÉ›] LT",
        nextWeek: "dddd [don lÉ›rÉ›] LT",
        lastDay: "[Kunu lÉ›rÉ›] LT",
        lastWeek: "dddd [tÉ›mÉ›nen lÉ›rÉ›] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s kÉ”nÉ”",
        past: "a bÉ› %s bÉ”",
        s: "sanga dama dama",
        ss: "sekondi %d",
        m: "miniti kelen",
        mm: "miniti %d",
        h: "lÉ›rÉ› kelen",
        hh: "lÉ›rÉ› %d",
        d: "tile kelen",
        dd: "tile %d",
        M: "kalo kelen",
        MM: "kalo %d",
        y: "san kelen",
        yy: "san %d"
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  }(n(2))
}, function(e, t, n) {
  ! function(e) {
    "use strict";
    var t = {
        1: "à§§",
        2: "à§¨",
        3: "à§©",
        4: "à§ª",
        5: "à§«",
        6: "à§¬",
        7: "à§­",
        8: "à§®",
        9: "à§¯",
        0: "à§¦"
      },
      n = {
        "à§§": "1",
        "à§¨": "2",
        "à§©": "3",
        "à§ª": "4",
        "à§«": "5",
        "à§¬": "6",
        "à§­": "7",
        "à§®": "8",
        "à§¯": "9",
        "à§¦": "0"
      };
    e.defineLocale("bn", {
      months: "à¦œà¦¾à¦¨à§à§Ÿà¦¾à¦°à§€_à¦«à§‡à¦¬à§à¦°à§à§Ÿà¦¾à¦°à¦¿_à¦®à¦¾à¦°à§à¦š_à¦à¦ªà§à¦°à¦¿à¦²_à¦®à§‡_à¦œà§à¦¨_à¦œà§à¦²à¦¾à¦‡_à¦†à¦—à¦¸à§à¦Ÿ_à¦¸à§‡à¦ªà§à¦Ÿà§‡à¦®à§à¦¬à¦°_à¦…à¦•à§à¦Ÿà§‹à¦¬à¦°_à¦¨à¦­à§‡à¦®à§à¦¬à¦°_à¦¡à¦¿à¦¸à§‡à¦®à§à¦¬à¦°".split("_"),
      monthsShort: "à¦œà¦¾à¦¨à§_à¦«à§‡à¦¬_à¦®à¦¾à¦°à§à¦š_à¦à¦ªà§à¦°_à¦®à§‡_à¦œà§à¦¨_à¦œà§à¦²_à¦†à¦—_à¦¸à§‡à¦ªà§à¦Ÿ_à¦…à¦•à§à¦Ÿà§‹_à¦¨à¦­à§‡_à¦¡à¦¿à¦¸à§‡".split("_"),
      weekdays: "à¦°à¦¬à¦¿à¦¬à¦¾à¦°_à¦¸à§‹à¦®à¦¬à¦¾à¦°_à¦®à¦™à§à¦—à¦²à¦¬à¦¾à¦°_à¦¬à§à¦§à¦¬à¦¾à¦°_à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à¦¿à¦¬à¦¾à¦°_à¦¶à§à¦•à§à¦°à¦¬à¦¾à¦°_à¦¶à¦¨à¦¿à¦¬à¦¾à¦°".split("_"),
      weekdaysShort: "à¦°à¦¬à¦¿_à¦¸à§‹à¦®_à¦®à¦™à§à¦—à¦²_à¦¬à§à¦§_à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à¦¿_à¦¶à§à¦•à§à¦°_à¦¶à¦¨à¦¿".split("_"),
      weekdaysMin: "à¦°à¦¬à¦¿_à¦¸à§‹à¦®_à¦®à¦™à§à¦—_à¦¬à§à¦§_à¦¬à§ƒà¦¹à¦ƒ_à¦¶à§à¦•à§à¦°_à¦¶à¦¨à¦¿".split("_"),
      longDateFormat: {
        LT: "A h:mm à¦¸à¦®à§Ÿ",
        LTS: "A h:mm:ss à¦¸à¦®à§Ÿ",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm à¦¸à¦®à§Ÿ",
        LLLL: "dddd, D MMMM YYYY, A h:mm à¦¸à¦®à§Ÿ"
      },
      calendar: {
        sameDay: "[à¦†à¦œ] LT",
        nextDay: "[à¦†à¦—à¦¾à¦®à§€à¦•à¦¾à¦²] LT",
        nextWeek: "dddd, LT",
        lastDay: "[à¦—à¦¤à¦•à¦¾à¦²] LT",
        lastWeek: "[à¦—à¦¤] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s à¦ªà¦°à§‡",
        past: "%s à¦†à¦—à§‡",
        s: "à¦•à§Ÿà§‡à¦• à¦¸à§‡à¦•à§‡à¦¨à§à¦¡",
        ss: "%d à¦¸à§‡à¦•à§‡à¦¨à§à¦¡",
        m: "à¦à¦• à¦®à¦¿à¦¨à¦¿à¦Ÿ",
        mm: "%d à¦®à¦¿à¦¨à¦¿à¦Ÿ",
        h: "à¦à¦• à¦˜à¦¨à§à¦Ÿà¦¾",
        hh: "%d à¦˜à¦¨à§à¦Ÿà¦¾",
        d: "à¦à¦• à¦¦à¦¿à¦¨",
        dd: "%d à¦¦à¦¿à¦¨",
        M: "à¦à¦• à¦®à¦¾à¦¸",
        MM: "%d à¦®à¦¾à¦¸",
        y: "à¦à¦• à¦¬à¦›à¦°",
        yy: "%d à¦¬à¦›à¦°"
      },
      preparse: function(e) {
        return e.replace(/[à§§à§¨à§©à§ªà§«à§¬à§­à§®à§¯à§¦]/g, (function(e) {
          return n[e]
        }))
      },
      postformat: function(e) {
        return e.replace(/\d/g, (function(e) {
          return t[e]
        }))
      },
      meridiemParse: /à¦°à¦¾à¦¤|à¦¸à¦•à¦¾à¦²|à¦¦à§à¦ªà§à¦°|à¦¬à¦¿à¦•à¦¾à¦²|à¦°à¦¾à¦¤/,
      meridiemHour: function(e, t) {
        return 12 === e && (e = 0), "à¦°à¦¾à¦¤" === t && e >= 4 || "à¦¦à§à¦ªà§à¦°" === t && e < 5 || "à¦¬à¦¿à¦•à¦¾à¦²" === t ? e + 12 : e
      },
      meridiem: function(e, t, n) {
        return e < 4 ? "à¦°à¦¾à¦¤" : e < 10 ? "à¦¸à¦•à¦¾à¦²" : e < 17 ? "à¦¦à§à¦ªà§à¦°" : e < 20 ? "à¦¬à¦¿à¦•à¦¾à¦²" : "à¦°à¦¾à¦¤"
      },
      week: {
        dow: 0,
        doy: 6
      }
    })
  }(n(2))
}, function(e, t, n) {
  ! function(e) {
    "use strict";
    var t = {
        1: "à¼¡",
        2: "à¼¢",
        3: "à¼£",
        4: "à¼¤",
        5: "à¼¥",
        6: "à¼¦",
        7: "à¼§",
        8: "à¼¨",
        9: "à¼©",
        0: "à¼ "
      },
      n = {
        "à¼¡": "1",
        "à¼¢": "2",
        "à¼£": "3",
        "à¼¤": "4",
        "à¼¥": "5",
        "à¼¦": "6",
        "à¼§": "7",
        "à¼¨": "8",
        "à¼©": "9",
        "à¼ ": "0"
      };
    e.defineLocale("bo", {
      months: "à½Ÿà¾³à¼‹à½–à¼‹à½‘à½„à¼‹à½”à½¼_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½‰à½²à½¦à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½¦à½´à½˜à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½à½²à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½£à¾”à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à¾²à½´à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½‘à½´à½“à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½¢à¾’à¾±à½‘à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à½‚à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½…à½²à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½‰à½²à½¦à¼‹à½”".split("_"),
      monthsShort: "à½Ÿà¾³à¼‹à½–à¼‹à½‘à½„à¼‹à½”à½¼_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½‰à½²à½¦à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½¦à½´à½˜à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½à½²à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½£à¾”à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à¾²à½´à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½‘à½´à½“à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½¢à¾’à¾±à½‘à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à½‚à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½…à½²à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½‰à½²à½¦à¼‹à½”".split("_"),
      weekdays: "à½‚à½Ÿà½ à¼‹à½‰à½²à¼‹à½˜à¼‹_à½‚à½Ÿà½ à¼‹à½Ÿà¾³à¼‹à½–à¼‹_à½‚à½Ÿà½ à¼‹à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½‚à½Ÿà½ à¼‹à½£à¾·à½‚à¼‹à½”à¼‹_à½‚à½Ÿà½ à¼‹à½•à½´à½¢à¼‹à½–à½´_à½‚à½Ÿà½ à¼‹à½”à¼‹à½¦à½„à½¦à¼‹_à½‚à½Ÿà½ à¼‹à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"),
      weekdaysShort: "à½‰à½²à¼‹à½˜à¼‹_à½Ÿà¾³à¼‹à½–à¼‹_à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½£à¾·à½‚à¼‹à½”à¼‹_à½•à½´à½¢à¼‹à½–à½´_à½”à¼‹à½¦à½„à½¦à¼‹_à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"),
      weekdaysMin: "à½‰à½²à¼‹à½˜à¼‹_à½Ÿà¾³à¼‹à½–à¼‹_à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½£à¾·à½‚à¼‹à½”à¼‹_à½•à½´à½¢à¼‹à½–à½´_à½”à¼‹à½¦à½„à½¦à¼‹_à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"),
      longDateFormat: {
        LT: "A h:mm",
        LTS: "A h:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY, A h:mm",
        LLLL: "dddd, D MMMM YYYY, A h:mm"
      },
      calendar: {
        sameDay: "[à½‘à½²à¼‹à½¢à½²à½„] LT",
        nextDay: "[à½¦à½„à¼‹à½‰à½²à½“] LT",
        nextWeek: "[à½–à½‘à½´à½“à¼‹à½•à¾²à½‚à¼‹à½¢à¾—à½ºà½¦à¼‹à½˜], LT",
        lastDay: "[à½à¼‹à½¦à½„] LT",
        lastWeek: "[à½–à½‘à½´à½“à¼‹à½•à¾²à½‚à¼‹à½˜à½à½ à¼‹à½˜] dddd, LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "%s à½£à¼‹",
        past: "%s à½¦à¾”à½“à¼‹à½£",
        s: "à½£à½˜à¼‹à½¦à½„",
        ss: "%d à½¦à¾à½¢à¼‹à½†à¼",
        m: "à½¦à¾à½¢à¼‹à½˜à¼‹à½‚à½…à½²à½‚",
        mm: "%d à½¦à¾à½¢à¼‹à½˜",
        h: "à½†à½´à¼‹à½šà½¼à½‘à¼‹à½‚à½…à½²à½‚",
        hh: "%d à½†à½´à¼‹à½šà½¼à½‘",
        d: "à½‰à½²à½“à¼‹à½‚à½…à½²à½‚",
        dd: "%d à½‰à½²à½“à¼‹",
        M: "à½Ÿà¾³à¼‹à½–à¼‹à½‚à½…à½²à½‚",
        MM: "%d à½Ÿà¾³à¼‹à½–",
        y: "à½£à½¼à¼‹à½‚à½…à½²à½‚",
        yy: "%d à½£à½¼"
      },
      preparse: function(e) {
        return e.replace(/[à¼¡à¼¢à¼£à¼¤à¼¥à¼¦à¼§à¼¨à¼©à¼ ]/g, (function(e) {
          return n[e]
        }))
      },
      postformat: function(e) {
        return e.replace(/\d/g, (function(e) {
          return t[e]
        }))
      },
      meridiemParse: /à½˜à½šà½“à¼‹à½˜à½¼|à½à½¼à½‚à½¦à¼‹à½€à½¦|à½‰à½²à½“à¼‹à½‚à½´à½„|à½‘à½‚à½¼à½„à¼‹à½‘à½‚|à½˜à½šà½“à¼‹à½˜à½¼/,
      meridiemHour: function(e, t) {
        return 12 === e && (e = 0), "à½˜à½šà½“à¼‹à½˜à½¼" === t && e >= 4 || "à½‰à½²à½“à¼‹à½‚à½´à½„" === t && e < 5 || "à½‘à½‚à½¼à½„à¼‹à½‘à½‚" === t ? e + 12 : e
      },
      meridiem: function(e, t, n) {
        return e < 4 ? "à½˜à½šà½“à¼‹à½˜à½¼" : e < 10 ? "à½à½¼à½‚à½¦à¼‹à½€à½¦" : e < 17 ? "à½‰à½²à½“à¼‹à½‚à½´à½„" : e < 20 ? "à½‘à½‚à½¼à½„à¼‹à½‘à½‚" : "à½˜à½šà½“à¼‹à½˜à½¼"
      },
      week: {
        dow: 0,
        doy: 6
      }
    })
  }(n(2))
}, function(e, t, n) {
  ! function(e) {
    "use strict";

    function t(e, t, n) {
      return e + " " + function(e, t) {
        return 2 === t ? function(e) {
          var t = {
            m: "v",
            b: "v",
            d: "z"
          };
          return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
        }(e) : e
      }({
        mm: "munutenn",
        MM: "miz",
        dd: "devezh"
      } [n], e)
    }
    e.defineLocale("br", {
      months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
      monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
      weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
      weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
      weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "h[e]mm A",
        LTS: "h[e]mm:ss A",
        L: "DD/MM/YYYY",
        LL: "D [a viz] MMMM YYYY",
        LLL: "D [a viz] MMMM YYYY h[e]mm A",
        LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
      },
      calendar: {
        sameDay: "[Hiziv da] LT",
        nextDay: "[Warc'hoazh da] LT",
        nextWeek: "dddd [da] LT",
        lastDay: "[Dec'h da] LT",
        lastWeek: "dddd [paset da] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "a-benn %s",
        past: "%s 'zo",
        s: "un nebeud segondennoÃ¹",
        ss: "%d eilenn",
        m: "ur vunutenn",
        mm: t,
        h: "un eur",
        hh: "%d eur",
        d: "un devezh",
        dd: t,
        M: "ur miz",
        MM: t,
        y: "ur bloaz",
        yy: function(e) {
          switch (function e(t) {
            return t > 9 ? e(t % 10) : t
          }(e)) {
            case 1:
            case 3:
            case 4:
            case 5:
            case 9:
              return e + " bloaz";
            default:
              return e + " vloaz"
          }
        }
      },
      dayOfMonthOrdinalParse: /\d{1,2}(aÃ±|vet)/,
      ordinal: function(e) {
        return e + (1 === e ? "aÃ±" : "vet")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  }(n(2))
}, function(e, t, n) {
  ! function(e) {
    "use strict";

    function t(e, t, n) {
      var r = e + " ";
      switch (n) {
        case "ss":
          return r += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
        case "m":
          return t ? "jedna minuta" : "jedne minute";
        case "mm":
          return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
        case "h":
          return t ? "jedan sat" : "jednog sata";
        case "hh":
          return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
        case "dd":
          return r += 1 === e ? "dan" : "dana";
        case "MM":
          return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
        case "yy":
          return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
      }
    }
    e.defineLocale("bs", {
      months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
      monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
      monthsParseExact: !0,
      weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),
      weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"),
      weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd, D. MMMM YYYY H:mm"
      },
      calendar: {
        sameDay: "[danas u] LT",
        nextDay: "[sutra u] LT",
        nextWeek: function() {
          switch (this.day()) {
            case 0:
              return "[u] [nedjelju] [u] LT";
            case 3:
              return "[u] [srijedu] [u] LT";
            case 6:
              return "[u] [subotu] [u] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[u] dddd [u] LT"
          }
        },
        lastDay: "[juÄer u] LT",
        lastWeek: function() {
          switch (this.day()) {
            case 0:
            case 3:
              return "[proÅ¡lu] dddd [u] LT";
            case 6:
              return "[proÅ¡le] [subote] [u] LT";
            case 1:
            case 2:
            case 4:
            case 5:
              return "[proÅ¡li] dddd [u] LT"
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "prije %s",
        s: "par sekundi",
        ss: t,
        m: t,
        mm: t,
        h: t,
        hh: t,
        d: "dan",
        dd: t,
        M: "mjesec",
        MM: t,
        y: "godinu",
        yy: t
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 7
      }
    })
  }(n(2))
}, function(e, t, n) {
  ! function(e) {
    "use strict";
    e.defineLocale("ca", {
      months: {
        standalone: "gener_febrer_marÃ§_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
        format: "de gener_de febrer_de marÃ§_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
        isFormat: /D[oD]?(\s)+MMMM/
      },
      monthsShort: "gen._febr._marÃ§_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
      monthsParseExact: !0,
      weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
      weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
      weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM [de] YYYY",
        ll: "D MMM YYYY",
        LLL: "D MMMM [de] YYYY [a les] H:mm",
        lll: "D MMM YYYY, H:mm",
        LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
        llll: "ddd D MMM YYYY, H:mm"
      },
      calendar: {
        sameDay: function() {
          return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
        },
        nextDay: function() {
          return "[demÃ  a " + (1 !== this.hours() ? "les" : "la") + "] LT"
        },
        nextWeek: function() {
          return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
        },
        lastDay: function() {
          return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
        },
        lastWeek: function() {
          return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "d'aquÃ­ %s",
        past: "fa %s",
        s: "uns segons",
        ss: "%d segons",
        m: "un minut",
        mm: "%d minuts",
        h: "una hora",
        hh: "%d hores",
        d: "un dia",
        dd: "%d dies",
        M: "un mes",
        MM: "%d mesos",
        y: "un any",
        yy: "%d anys"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|Ã¨|a)/,
      ordinal: function(e, t) {
        var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "Ã¨";
        return "w" !== t && "W" !== t || (n = "a"), e + n
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  }(n(2))
}, function(e, t, n) {
  ! function(e) {
    "use strict";
    var t = "leden_Ãºnor_bÅ™ezen_duben_kvÄ›ten_Äerven_Äervenec_srpen_zÃ¡Å™Ã­_Å™Ã­jen_listopad_prosinec".split("_"),
      n = "led_Ãºno_bÅ™e_dub_kvÄ›_Ävn_Ävc_srp_zÃ¡Å™_Å™Ã­j_lis_pro".split("_"),
      r = [/^led/i, /^Ãºno/i, /^bÅ™e/i, /^dub/i, /^kvÄ›/i, /^(Ävn|Äerven$|Äervna)/i, /^(Ävc|Äervenec|Äervence)/i, /^srp/i, /^zÃ¡Å™/i, /^Å™Ã­j/i, /^lis/i, /^pro/i],
      i = /^(leden|Ãºnor|bÅ™ezen|duben|kvÄ›ten|Äervenec|Äervence|Äerven|Äervna|srpen|zÃ¡Å™Ã­|Å™Ã­jen|listopad|prosinec|led|Ãºno|bÅ™e|dub|kvÄ›|Ävn|Ävc|srp|zÃ¡Å™|Å™Ã­j|lis|pro)/i;

    function a(e) {
      return e > 1 && e < 5 && 1 != ~~(e / 10)
    }

    function o(e, t, n, r) {
      var i = e + " ";
      switch (n) {
        case "s":
          return t || r ? "pÃ¡r sekund" : "pÃ¡r sekundami";
        case "ss":
          return t || r ? i + (a(e) ? "sekundy" : "sekund") : i + "sekundami";
        case "m":
          return t ? "minuta" : r ? "minutu" : "minutou";
        case "mm":
          return t || r ? i + (a(e) ? "minuty" : "minut") : i + "minutami";
        case "h":
          return t ? "hodina" : r ? "hodinu" : "hodinou";
        case "hh":
          return t || r ? i + (a(e) ? "hodiny" : "hodin") : i + "hodinami";
        case "d":
          return t || r ? "den" : "dnem";
        case "dd":
          return t || r ? i + (a(e) ? "dny" : "dnÃ­") : i + "dny";
        case "M":
          return t || r ? "mÄ›sÃ­c" : "mÄ›sÃ­cem";
        case "MM":
          return t || r ? i + (a(e) ? "mÄ›sÃ­ce" : "mÄ›sÃ­cÅ¯") : i + "mÄ›sÃ­ci";
        case "y":
          return t || r ? "rok" : "rokem";
        case "yy":
          return t || r ? i + (a(e) ? "roky" : "let") : i + "lety"
      }
    }
    e.defineLocale("cs", {
      months: t,
      monthsShort: n,
      monthsRegex: i,
      monthsShortRegex: i,
      monthsStrictRegex: /^(leden|ledna|Ãºnora|Ãºnor|bÅ™ezen|bÅ™ezna|duben|dubna|kvÄ›ten|kvÄ›tna|Äervenec|Äervence|Äerven|Äervna|srpen|srpna|zÃ¡Å™Ã­|Å™Ã­jen|Å™Ã­jna|listopadu|listopad|prosinec|prosince)/i,
      monthsShortStrictRegex: /^(led|Ãºno|bÅ™e|dub|kvÄ›|Ävn|Ävc|srp|zÃ¡Å™|Å™Ã­j|lis|pro)/i,
      monthsParse: r,
      longMonthsParse: r,
      shortMonthsParse: r,
      weekdays: "nedÄ›le_pondÄ›lÃ­_ÃºterÃ½_stÅ™eda_Ätvrtek_pÃ¡tek_sobota".split("_"),
      weekdaysShort: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),
      weekdaysMin: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "H:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY H:mm",
        LLLL: "dddd D. MMMM YYYY H:mm",
        l: "D. M. YYYY"
      },
      calendar: {
        sameDay: "[dnes v] LT",
        nextDay: "[zÃ­tra v] LT",
        nextWeek: function() {
          switch (this.day()) {
            case 0:
              return "[v nedÄ›li v] LT";
            case 1:
            case 2:
              return "[v] dddd [v] LT";
            case 3:
              return "[ve stÅ™edu v] LT";
            case 4:
              return "[ve Ätvrtek v] LT";
            case 5:
              return "[v pÃ¡tek v] LT";
            case 6:
              return "[v sobotu v] LT"
          }
        },
        lastDay: "[vÄera v] LT",
        lastWeek: function() {
          switch (this.day()) {
            case 0:
              return "[minulou nedÄ›li v] LT";
            case 1:
            case 2:
              return "[minulÃ©] dddd [v] LT";
            case 3:
              return "[minulou stÅ™edu v] LT";
            case 4:
            case 5:
              return "[minulÃ½] dddd [v] LT";
            case 6:
              return "[minulou sobotu v] LT"
          }
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "za %s",
        past: "pÅ™ed %s",
        s: o,
        ss: o,
        m: o,
        mm: o,
        h: o,
        hh: o,
        d: o,
        dd: o,
        M: o,
        MM: o,
        y: o,
        yy: o
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  }(n(2))
}, function(e, t, n) {
  ! function(e) {
    "use strict";
    e.defineLocale("cv", {
      months: "ĞºÓ‘Ñ€Ğ»Ğ°Ñ‡_Ğ½Ğ°Ñ€Ó‘Ñ_Ğ¿ÑƒÑˆ_Ğ°ĞºĞ°_Ğ¼Ğ°Ğ¹_Ò«Ó—Ñ€Ñ‚Ğ¼Ğµ_ÑƒÑ‚Ó‘_Ò«ÑƒÑ€Ğ»Ğ°_Ğ°Ğ²Ó‘Ğ½_ÑĞ¿Ğ°_Ñ‡Ó³Ğº_Ñ€Ğ°ÑˆÑ‚Ğ°Ğ²".split("_"),
      monthsShort: "ĞºÓ‘Ñ€_Ğ½Ğ°Ñ€_Ğ¿ÑƒÑˆ_Ğ°ĞºĞ°_Ğ¼Ğ°Ğ¹_Ò«Ó—Ñ€_ÑƒÑ‚Ó‘_Ò«ÑƒÑ€_Ğ°Ğ²Ğ½_ÑĞ¿Ğ°_Ñ‡Ó³Ğº_Ñ€Ğ°Ñˆ".split("_"),
      weekdays: "Ğ²Ñ‹Ñ€ÑĞ°Ñ€Ğ½Ğ¸ĞºÑƒĞ½_Ñ‚ÑƒĞ½Ñ‚Ğ¸ĞºÑƒĞ½_Ñ‹Ñ‚Ğ»Ğ°Ñ€Ğ¸ĞºÑƒĞ½_ÑĞ½ĞºÑƒĞ½_ĞºÓ—Ò«Ğ½ĞµÑ€Ğ½Ğ¸ĞºÑƒĞ½_ÑÑ€Ğ½ĞµĞºÑƒĞ½_ÑˆÓ‘Ğ¼Ğ°Ñ‚ĞºÑƒĞ½".split("_"),
      weekdaysShort: "Ğ²Ñ‹Ñ€_Ñ‚ÑƒĞ½_Ñ‹Ñ‚Ğ»_ÑĞ½_ĞºÓ—Ò«_ÑÑ€Ğ½_ÑˆÓ‘Ğ¼".split("_"),
      weekdaysMin: "Ğ²Ñ€_Ñ‚Ğ½_Ñ‹Ñ‚_ÑĞ½_ĞºÒ«_ÑÑ€_ÑˆĞ¼".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD-MM-YYYY",
        LL: "YYYY [Ò«ÑƒĞ»Ñ…Ğ¸] MMMM [ÑƒĞ¹Ó‘Ñ…Ó—Ğ½] D[-Ğ¼Ó—ÑˆÓ—]",
        LLL: "YYYY [Ò«ÑƒĞ»Ñ…Ğ¸] MMMM [ÑƒĞ¹Ó‘Ñ…Ó—Ğ½] D[-Ğ¼Ó—ÑˆÓ—], HH:mm",
        LLLL: "dddd, YYYY [Ò«ÑƒĞ»Ñ…Ğ¸] MMMM [ÑƒĞ¹Ó‘Ñ…Ó—Ğ½] D[-Ğ¼Ó—ÑˆÓ—], HH:mm"
      },
      calendar: {
        sameDay: "[ĞŸĞ°ÑĞ½] LT [ÑĞµÑ…ĞµÑ‚Ñ€Ğµ]",
        nextDay: "[Ğ«Ñ€Ğ°Ğ½] LT [ÑĞµÑ…ĞµÑ‚Ñ€Ğµ]",
        lastDay: "[Ó–Ğ½ĞµÑ€] LT [ÑĞµÑ…ĞµÑ‚Ñ€Ğµ]",
        nextWeek: "[ÒªĞ¸Ñ‚ĞµÑ] dddd LT [ÑĞµÑ…ĞµÑ‚Ñ€Ğµ]",
        lastWeek: "[Ğ˜Ñ€Ñ‚Ğ½Ó—] dddd LT [ÑĞµÑ…ĞµÑ‚Ñ€Ğµ]",
        sameElse: "L"
      },
      relativeTime: {
        future: function(e) {
          return e + (/ÑĞµÑ…ĞµÑ‚$/i.exec(e) ? "Ñ€ĞµĞ½" : /Ò«ÑƒĞ»$/i.exec(e) ? "Ñ‚Ğ°Ğ½" : "Ñ€Ğ°Ğ½")
        },
        past: "%s ĞºĞ°ÑĞ»Ğ»Ğ°",
        s: "Ğ¿Ó—Ñ€-Ğ¸Ğº Ò«ĞµĞºĞºÑƒĞ½Ñ‚",
        ss: "%d Ò«ĞµĞºĞºÑƒĞ½Ñ‚",
        m: "Ğ¿Ó—Ñ€ Ğ¼Ğ¸Ğ½ÑƒÑ‚",
        mm: "%d Ğ¼Ğ¸Ğ½ÑƒÑ‚",
        h: "Ğ¿Ó—Ñ€ ÑĞµÑ…ĞµÑ‚",
        hh: "%d ÑĞµÑ…ĞµÑ‚",
        d: "Ğ¿Ó—Ñ€ ĞºÑƒĞ½",
        dd: "%d ĞºÑƒĞ½",
        M: "Ğ¿Ó—Ñ€ ÑƒĞ¹Ó‘Ñ…",
        MM: "%d ÑƒĞ¹Ó‘Ñ…",
        y: "Ğ¿Ó—Ñ€ Ò«ÑƒĞ»",
        yy: "%d Ò«ÑƒĞ»"
      },
      dayOfMonthOrdinalParse: /\d{1,2}-Ğ¼Ó—Ñˆ/,
      ordinal: "%d-Ğ¼Ó—Ñˆ",
      week: {
        dow: 1,
        doy: 7
      }
    })
  }(n(2))
}, function(e, t, n) {
  ! function(e) {
    "use strict";
    e.defineLocale("cy", {
      months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
      monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
      weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
      weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
      weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[Heddiw am] LT",
        nextDay: "[Yfory am] LT",
        nextWeek: "dddd [am] LT",
        lastDay: "[Ddoe am] LT",
        lastWeek: "dddd [diwethaf am] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "mewn %s",
        past: "%s yn Ã´l",
        s: "ychydig eiliadau",
        ss: "%d eiliad",
        m: "munud",
        mm: "%d munud",
        h: "awr",
        hh: "%d awr",
        d: "diwrnod",
        dd: "%d diwrnod",
        M: "mis",
        MM: "%d mis",
        y: "blwyddyn",
        yy: "%d flynedd"
      },
      dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
      ordinal: function(e) {
        var t = "";
        return e > 20 ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : e > 0 && (t = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]), e + t
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  }(n(2))
}, function(e, t, n) {
  ! function(e) {
    "use strict";
    e.defineLocale("da", {
      months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
      monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
      weekdays: "sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"),
      weekdaysShort: "sÃ¸n_man_tir_ons_tor_fre_lÃ¸r".split("_"),
      weekdaysMin: "sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY HH:mm",
        LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
      },
      calendar: {
        sameDay: "[i dag kl.] LT",
        nextDay: "[i morgen kl.] LT",
        nextWeek: "pÃ¥ dddd [kl.] LT",
        lastDay: "[i gÃ¥r kl.] LT",
        lastWeek: "[i] dddd[s kl.] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "om %s",
        past: "%s siden",
        s: "fÃ¥ sekunder",
        ss: "%d sekunder",
        m: "et minut",
        mm: "%d minutter",
        h: "en time",
        hh: "%d timer",
        d: "en dag",
        dd: "%d dage",
        M: "en mÃ¥ned",
        MM: "%d mÃ¥neder",
        y: "et Ã¥r",
        yy: "%d Ã¥r"
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  }(n(2))
}, function(e, t, n) {
  ! function(e) {
    "use strict";

    function t(e, t, n, r) {
      var i = {
        m: ["eine Minute", "einer Minute"],
        h: ["eine Stunde", "einer Stunde"],
        d: ["ein Tag", "einem Tag"],
        dd: [e + " Tage", e + " Tagen"],
        M: ["ein Monat", "einem Monat"],
        MM: [e + " Monate", e + " Monaten"],
        y: ["ein Jahr", "einem Jahr"],
        yy: [e + " Jahre", e + " Jahren"]
      };
      return t ? i[n][0] : i[n][1]
    }
    e.defineLocale("de", {
      months: "Januar_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
      monthsShort: "Jan._Feb._MÃ¤rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
      monthsParseExact: !0,
      weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
      weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
      weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY HH:mm",
        LLLL: "dddd, D. MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[heute um] LT [Uhr]",
        sameElse: "L",
        nextDay: "[morgen um] LT [Uhr]",
        nextWeek: "dddd [um] LT [Uhr]",
        lastDay: "[gestern um] LT [Uhr]",
        lastWeek: "[letzten] dddd [um] LT [Uhr]"
      },
      relativeTime: {
        future: "in %s",
        past: "vor %s",
        s: "ein paar Sekunden",
        ss: "%d Sekunden",
        m: t,
        mm: "%d Minuten",
        h: t,
        hh: "%d Stunden",
        d: t,
        dd: t,
        M: t,
        MM: t,
        y: t,
        yy: t
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  }(n(2))
}, function(e, t, n) {
  ! function(e) {
    "use strict";

    function t(e, t, n, r) {
      var i = {
        m: ["eine Minute", "einer Minute"],
        h: ["eine Stunde", "einer Stunde"],
        d: ["ein Tag", "einem Tag"],
        dd: [e + " Tage", e + " Tagen"],
        M: ["ein Monat", "einem Monat"],
        MM: [e + " Monate", e + " Monaten"],
        y: ["ein Jahr", "einem Jahr"],
        yy: [e + " Jahre", e + " Jahren"]
      };
      return t ? i[n][0] : i[n][1]
    }
    e.defineLocale("de-at", {
      months: "JÃ¤nner_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
      monthsShort: "JÃ¤n._Feb._MÃ¤rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
      monthsParseExact: !0,
      weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
      weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
      weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
      weekdaysParseExact: !0,
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY HH:mm",
        LLLL: "dddd, D. MMMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[heute um] LT [Uhr]",
        sameElse: "L",
        nextDay: "[morgen um] LT [Uhr]",
        nextWeek: "dddd [um] LT [Uhr]",
        lastDay: "[gestern um] LT [Uhr]",
        lastWeek: "[letzten] dddd [um] LT [Uhr]"
      },
      relativeTime: {
        future: "in %s",
        past: "vor %s",
        s: "ein paar Sekunden",
        ss: "%d Sekunden",
        m: t,
        mm: "%d Minuten",
        h: t,
        hh: "%d Stunden",
        d: t,
        dd: t,
        M: t,
        MM: t,
        y: t,
        yy: t
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  }(n(2))
}, function(e, t, n) {
  ! function(e) {
    "use strict";

    function t(e, t, n, r) {
      var i = {
        m: ["eine Minute", "einer Minute"],
        h: ["eine Stunde", "einer Stunde"],
        d: ["ein Tag", "einem Tag"],
        dd: [e + " Tage", e + 