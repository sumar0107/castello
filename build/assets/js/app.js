!(function(t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function(t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function(t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
        for (var o in t)
          n.d(
            r,
            o,
            function(e) {
              return t[e];
            }.bind(null, o),
          );
      return r;
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 60));
})([
  function(t, e, n) {
    (function(e) {
      var n = function(t) {
        return t && t.Math == Math && t;
      };
      t.exports =
        n("object" == typeof globalThis && globalThis) ||
        n("object" == typeof window && window) ||
        n("object" == typeof self && self) ||
        n("object" == typeof e && e) ||
        Function("return this")();
    }.call(this, n(28)));
  },
  function(t, e) {
    t.exports = function(t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
      return n.call(t, e);
    };
  },
  function(t, e, n) {
    var r = n(1);
    t.exports = !r(function() {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function() {
            return 7;
          },
        })[1]
      );
    });
  },
  function(t, e) {
    t.exports = function(t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  },
  function(t, e, n) {
    var r = n(3),
      o = n(15),
      i = n(9);
    t.exports = r
      ? function(t, e, n) {
          return o.f(t, e, i(1, n));
        }
      : function(t, e, n) {
          return (t[e] = n), t;
        };
  },
  function(t, e, n) {
    var r = n(10),
      o = n(12);
    t.exports = function(t) {
      return r(o(t));
    };
  },
  function(t, e, n) {
    var r = n(0),
      o = n(5);
    t.exports = function(t, e) {
      try {
        o(r, t, e);
      } catch (n) {
        r[t] = e;
      }
      return e;
    };
  },
  function(t, e, n) {
    var r = n(3),
      o = n(29),
      i = n(9),
      a = n(6),
      s = n(13),
      c = n(2),
      u = n(14),
      f = Object.getOwnPropertyDescriptor;
    e.f = r
      ? f
      : function(t, e) {
          if (((t = a(t)), (e = s(e, !0)), u))
            try {
              return f(t, e);
            } catch (t) {}
          if (c(t, e)) return i(!o.f.call(t, e), t[e]);
        };
  },
  function(t, e) {
    t.exports = function(t, e) {
      return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
    };
  },
  function(t, e, n) {
    var r = n(1),
      o = n(11),
      i = "".split;
    t.exports = r(function() {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function(t) {
          return "String" == o(t) ? i.call(t, "") : Object(t);
        }
      : Object;
  },
  function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
      return n.call(t).slice(8, -1);
    };
  },
  function(t, e) {
    t.exports = function(t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    };
  },
  function(t, e, n) {
    var r = n(4);
    t.exports = function(t, e) {
      if (!r(t)) return t;
      var n, o;
      if (e && "function" == typeof (n = t.toString) && !r((o = n.call(t)))) return o;
      if ("function" == typeof (n = t.valueOf) && !r((o = n.call(t)))) return o;
      if (!e && "function" == typeof (n = t.toString) && !r((o = n.call(t)))) return o;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function(t, e, n) {
    var r = n(3),
      o = n(1),
      i = n(30);
    t.exports =
      !r &&
      !o(function() {
        return (
          7 !=
          Object.defineProperty(i("div"), "a", {
            get: function() {
              return 7;
            },
          }).a
        );
      });
  },
  function(t, e, n) {
    var r = n(3),
      o = n(14),
      i = n(16),
      a = n(13),
      s = Object.defineProperty;
    e.f = r
      ? s
      : function(t, e, n) {
          if ((i(t), (e = a(e, !0)), i(n), o))
            try {
              return s(t, e, n);
            } catch (t) {}
          if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
          return "value" in n && (t[e] = n.value), t;
        };
  },
  function(t, e, n) {
    var r = n(4);
    t.exports = function(t) {
      if (!r(t)) throw TypeError(String(t) + " is not an object");
      return t;
    };
  },
  function(t, e, n) {
    var r = n(18),
      o = Function.toString;
    "function" != typeof r.inspectSource &&
      (r.inspectSource = function(t) {
        return o.call(t);
      }),
      (t.exports = r.inspectSource);
  },
  function(t, e, n) {
    var r = n(0),
      o = n(7),
      i = r["__core-js_shared__"] || o("__core-js_shared__", {});
    t.exports = i;
  },
  function(t, e, n) {
    var r = n(35),
      o = n(18);
    (t.exports = function(t, e) {
      return o[t] || (o[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: "3.6.5",
      mode: r ? "pure" : "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
    });
  },
  function(t, e) {
    var n = 0,
      r = Math.random();
    t.exports = function(t) {
      return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + r).toString(36);
    };
  },
  function(t, e) {
    t.exports = {};
  },
  function(t, e, n) {
    var r = n(23),
      o = Math.min;
    t.exports = function(t) {
      return t > 0 ? o(r(t), 9007199254740991) : 0;
    };
  },
  function(t, e) {
    var n = Math.ceil,
      r = Math.floor;
    t.exports = function(t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
    };
  },
  function(t, e, n) {
    "use strict";
    var r = n(47).forEach,
      o = n(55),
      i = n(56),
      a = o("forEach"),
      s = i("forEach");
    t.exports =
      a && s
        ? [].forEach
        : function(t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
          };
  },
  function(t, e, n) {
    var r = n(1);
    t.exports =
      !!Object.getOwnPropertySymbols &&
      !r(function() {
        return !String(Symbol());
      });
  },
  function(t, e, n) {
    "use strict";
    var r = n(27),
      o = n(24);
    r({ target: "Array", proto: !0, forced: [].forEach != o }, { forEach: o });
  },
  function(t, e, n) {
    var r = n(0),
      o = n(8).f,
      i = n(5),
      a = n(31),
      s = n(7),
      c = n(36),
      u = n(46);
    t.exports = function(t, e) {
      var n,
        f,
        p,
        l,
        d,
        v = t.target,
        m = t.global,
        h = t.stat;
      if ((n = m ? r : h ? r[v] || s(v, {}) : (r[v] || {}).prototype))
        for (f in e) {
          if (
            ((l = e[f]),
            (p = t.noTargetGet ? (d = o(n, f)) && d.value : n[f]),
            !u(m ? f : v + (h ? "." : "#") + f, t.forced) && void 0 !== p)
          ) {
            if (typeof l == typeof p) continue;
            c(l, p);
          }
          (t.sham || (p && p.sham)) && i(l, "sham", !0), a(n, f, l, t);
        }
    };
  },
  function(t, e) {
    var n;
    n = (function() {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  },
  function(t, e, n) {
    "use strict";
    var r = {}.propertyIsEnumerable,
      o = Object.getOwnPropertyDescriptor,
      i = o && !r.call({ 1: 2 }, 1);
    e.f = i
      ? function(t) {
          var e = o(this, t);
          return !!e && e.enumerable;
        }
      : r;
  },
  function(t, e, n) {
    var r = n(0),
      o = n(4),
      i = r.document,
      a = o(i) && o(i.createElement);
    t.exports = function(t) {
      return a ? i.createElement(t) : {};
    };
  },
  function(t, e, n) {
    var r = n(0),
      o = n(5),
      i = n(2),
      a = n(7),
      s = n(17),
      c = n(32),
      u = c.get,
      f = c.enforce,
      p = String(String).split("String");
    (t.exports = function(t, e, n, s) {
      var c = !!s && !!s.unsafe,
        u = !!s && !!s.enumerable,
        l = !!s && !!s.noTargetGet;
      "function" == typeof n &&
        ("string" != typeof e || i(n, "name") || o(n, "name", e),
        (f(n).source = p.join("string" == typeof e ? e : ""))),
        t !== r ? (c ? !l && t[e] && (u = !0) : delete t[e], u ? (t[e] = n) : o(t, e, n)) : u ? (t[e] = n) : a(e, n);
    })(Function.prototype, "toString", function() {
      return ("function" == typeof this && u(this).source) || s(this);
    });
  },
  function(t, e, n) {
    var r,
      o,
      i,
      a = n(33),
      s = n(0),
      c = n(4),
      u = n(5),
      f = n(2),
      p = n(34),
      l = n(21),
      d = s.WeakMap;
    if (a) {
      var v = new d(),
        m = v.get,
        h = v.has,
        y = v.set;
      (r = function(t, e) {
        return y.call(v, t, e), e;
      }),
        (o = function(t) {
          return m.call(v, t) || {};
        }),
        (i = function(t) {
          return h.call(v, t);
        });
    } else {
      var g = p("state");
      (l[g] = !0),
        (r = function(t, e) {
          return u(t, g, e), e;
        }),
        (o = function(t) {
          return f(t, g) ? t[g] : {};
        }),
        (i = function(t) {
          return f(t, g);
        });
    }
    t.exports = {
      set: r,
      get: o,
      has: i,
      enforce: function(t) {
        return i(t) ? o(t) : r(t, {});
      },
      getterFor: function(t) {
        return function(e) {
          var n;
          if (!c(e) || (n = o(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
          return n;
        };
      },
    };
  },
  function(t, e, n) {
    var r = n(0),
      o = n(17),
      i = r.WeakMap;
    t.exports = "function" == typeof i && /native code/.test(o(i));
  },
  function(t, e, n) {
    var r = n(19),
      o = n(20),
      i = r("keys");
    t.exports = function(t) {
      return i[t] || (i[t] = o(t));
    };
  },
  function(t, e) {
    t.exports = !1;
  },
  function(t, e, n) {
    var r = n(2),
      o = n(37),
      i = n(8),
      a = n(15);
    t.exports = function(t, e) {
      for (var n = o(e), s = a.f, c = i.f, u = 0; u < n.length; u++) {
        var f = n[u];
        r(t, f) || s(t, f, c(e, f));
      }
    };
  },
  function(t, e, n) {
    var r = n(38),
      o = n(40),
      i = n(45),
      a = n(16);
    t.exports =
      r("Reflect", "ownKeys") ||
      function(t) {
        var e = o.f(a(t)),
          n = i.f;
        return n ? e.concat(n(t)) : e;
      };
  },
  function(t, e, n) {
    var r = n(39),
      o = n(0),
      i = function(t) {
        return "function" == typeof t ? t : void 0;
      };
    t.exports = function(t, e) {
      return arguments.length < 2 ? i(r[t]) || i(o[t]) : (r[t] && r[t][e]) || (o[t] && o[t][e]);
    };
  },
  function(t, e, n) {
    var r = n(0);
    t.exports = r;
  },
  function(t, e, n) {
    var r = n(41),
      o = n(44).concat("length", "prototype");
    e.f =
      Object.getOwnPropertyNames ||
      function(t) {
        return r(t, o);
      };
  },
  function(t, e, n) {
    var r = n(2),
      o = n(6),
      i = n(42).indexOf,
      a = n(21);
    t.exports = function(t, e) {
      var n,
        s = o(t),
        c = 0,
        u = [];
      for (n in s) !r(a, n) && r(s, n) && u.push(n);
      for (; e.length > c; ) r(s, (n = e[c++])) && (~i(u, n) || u.push(n));
      return u;
    };
  },
  function(t, e, n) {
    var r = n(6),
      o = n(22),
      i = n(43),
      a = function(t) {
        return function(e, n, a) {
          var s,
            c = r(e),
            u = o(c.length),
            f = i(a, u);
          if (t && n != n) {
            for (; u > f; ) if ((s = c[f++]) != s) return !0;
          } else for (; u > f; f++) if ((t || f in c) && c[f] === n) return t || f || 0;
          return !t && -1;
        };
      };
    t.exports = { includes: a(!0), indexOf: a(!1) };
  },
  function(t, e, n) {
    var r = n(23),
      o = Math.max,
      i = Math.min;
    t.exports = function(t, e) {
      var n = r(t);
      return n < 0 ? o(n + e, 0) : i(n, e);
    };
  },
  function(t, e) {
    t.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  function(t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  function(t, e, n) {
    var r = n(1),
      o = /#|\.prototype\./,
      i = function(t, e) {
        var n = s[a(t)];
        return n == u || (n != c && ("function" == typeof e ? r(e) : !!e));
      },
      a = (i.normalize = function(t) {
        return String(t)
          .replace(o, ".")
          .toLowerCase();
      }),
      s = (i.data = {}),
      c = (i.NATIVE = "N"),
      u = (i.POLYFILL = "P");
    t.exports = i;
  },
  function(t, e, n) {
    var r = n(48),
      o = n(10),
      i = n(50),
      a = n(22),
      s = n(51),
      c = [].push,
      u = function(t) {
        var e = 1 == t,
          n = 2 == t,
          u = 3 == t,
          f = 4 == t,
          p = 6 == t,
          l = 5 == t || p;
        return function(d, v, m, h) {
          for (
            var y,
              g,
              b = i(d),
              x = o(b),
              w = r(v, m, 3),
              O = a(x.length),
              E = 0,
              L = h || s,
              T = e ? L(d, O) : n ? L(d, 0) : void 0;
            O > E;
            E++
          )
            if ((l || E in x) && ((g = w((y = x[E]), E, b)), t))
              if (e) T[E] = g;
              else if (g)
                switch (t) {
                  case 3:
                    return !0;
                  case 5:
                    return y;
                  case 6:
                    return E;
                  case 2:
                    c.call(T, y);
                }
              else if (f) return !1;
          return p ? -1 : u || f ? f : T;
        };
      };
    t.exports = { forEach: u(0), map: u(1), filter: u(2), some: u(3), every: u(4), find: u(5), findIndex: u(6) };
  },
  function(t, e, n) {
    var r = n(49);
    t.exports = function(t, e, n) {
      if ((r(t), void 0 === e)) return t;
      switch (n) {
        case 0:
          return function() {
            return t.call(e);
          };
        case 1:
          return function(n) {
            return t.call(e, n);
          };
        case 2:
          return function(n, r) {
            return t.call(e, n, r);
          };
        case 3:
          return function(n, r, o) {
            return t.call(e, n, r, o);
          };
      }
      return function() {
        return t.apply(e, arguments);
      };
    };
  },
  function(t, e) {
    t.exports = function(t) {
      if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
      return t;
    };
  },
  function(t, e, n) {
    var r = n(12);
    t.exports = function(t) {
      return Object(r(t));
    };
  },
  function(t, e, n) {
    var r = n(4),
      o = n(52),
      i = n(53)("species");
    t.exports = function(t, e) {
      var n;
      return (
        o(t) &&
          ("function" != typeof (n = t.constructor) || (n !== Array && !o(n.prototype))
            ? r(n) && null === (n = n[i]) && (n = void 0)
            : (n = void 0)),
        new (void 0 === n ? Array : n)(0 === e ? 0 : e)
      );
    };
  },
  function(t, e, n) {
    var r = n(11);
    t.exports =
      Array.isArray ||
      function(t) {
        return "Array" == r(t);
      };
  },
  function(t, e, n) {
    var r = n(0),
      o = n(19),
      i = n(2),
      a = n(20),
      s = n(25),
      c = n(54),
      u = o("wks"),
      f = r.Symbol,
      p = c ? f : (f && f.withoutSetter) || a;
    t.exports = function(t) {
      return i(u, t) || (s && i(f, t) ? (u[t] = f[t]) : (u[t] = p("Symbol." + t))), u[t];
    };
  },
  function(t, e, n) {
    var r = n(25);
    t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  },
  function(t, e, n) {
    "use strict";
    var r = n(1);
    t.exports = function(t, e) {
      var n = [][t];
      return (
        !!n &&
        r(function() {
          n.call(
            null,
            e ||
              function() {
                throw 1;
              },
            1,
          );
        })
      );
    };
  },
  function(t, e, n) {
    var r = n(3),
      o = n(1),
      i = n(2),
      a = Object.defineProperty,
      s = {},
      c = function(t) {
        throw t;
      };
    t.exports = function(t, e) {
      if (i(s, t)) return s[t];
      e || (e = {});
      var n = [][t],
        u = !!i(e, "ACCESSORS") && e.ACCESSORS,
        f = i(e, 0) ? e[0] : c,
        p = i(e, 1) ? e[1] : void 0;
      return (s[t] =
        !!n &&
        !o(function() {
          if (u && !r) return !0;
          var t = { length: -1 };
          u ? a(t, 1, { enumerable: !0, get: c }) : (t[1] = 1), n.call(t, f, p);
        }));
    };
  },
  function(t, e, n) {
    var r = n(0),
      o = n(58),
      i = n(24),
      a = n(5);
    for (var s in o) {
      var c = r[s],
        u = c && c.prototype;
      if (u && u.forEach !== i)
        try {
          a(u, "forEach", i);
        } catch (t) {
          u.forEach = i;
        }
    }
  },
  function(t, e) {
    t.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    };
  },
  function(t, e, n) {},
  function(t, e, n) {
    "use strict";
    function r(t) {
      var e = t.getBoundingClientRect();
      return {
        width: e.width,
        height: e.height,
        top: e.top,
        right: e.right,
        bottom: e.bottom,
        left: e.left,
        x: e.left,
        y: e.top,
      };
    }
    function o(t) {
      if ("[object Window]" !== t.toString()) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window;
      }
      return t;
    }
    function i(t) {
      var e = o(t);
      return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
    }
    function a(t) {
      return t instanceof o(t).Element || t instanceof Element;
    }
    function s(t) {
      return t instanceof o(t).HTMLElement || t instanceof HTMLElement;
    }
    function c(t) {
      return t ? (t.nodeName || "").toLowerCase() : null;
    }
    function u(t) {
      return (a(t) ? t.ownerDocument : t.document).documentElement;
    }
    function f(t) {
      return r(u(t)).left + i(t).scrollLeft;
    }
    function p(t) {
      return o(t).getComputedStyle(t);
    }
    function l(t) {
      var e = p(t),
        n = e.overflow,
        r = e.overflowX,
        o = e.overflowY;
      return /auto|scroll|overlay|hidden/.test(n + o + r);
    }
    function d(t, e, n) {
      void 0 === n && (n = !1);
      var a,
        p,
        d = u(e),
        v = r(t),
        m = { scrollLeft: 0, scrollTop: 0 },
        h = { x: 0, y: 0 };
      return (
        n ||
          (("body" !== c(e) || l(d)) &&
            (m = (a = e) !== o(a) && s(a) ? { scrollLeft: (p = a).scrollLeft, scrollTop: p.scrollTop } : i(a)),
          s(e) ? (((h = r(e)).x += e.clientLeft), (h.y += e.clientTop)) : d && (h.x = f(d))),
        { x: v.left + m.scrollLeft - h.x, y: v.top + m.scrollTop - h.y, width: v.width, height: v.height }
      );
    }
    function v(t) {
      return { x: t.offsetLeft, y: t.offsetTop, width: t.offsetWidth, height: t.offsetHeight };
    }
    function m(t) {
      return "html" === c(t) ? t : t.assignedSlot || t.parentNode || t.host || u(t);
    }
    function h(t, e) {
      void 0 === e && (e = []);
      var n = (function t(e) {
          return ["html", "body", "#document"].indexOf(c(e)) >= 0 ? e.ownerDocument.body : s(e) && l(e) ? e : t(m(e));
        })(t),
        r = "body" === c(n),
        i = o(n),
        a = r ? [i].concat(i.visualViewport || [], l(n) ? n : []) : n,
        u = e.concat(a);
      return r ? u : u.concat(h(m(a)));
    }
    function y(t) {
      return ["table", "td", "th"].indexOf(c(t)) >= 0;
    }
    function g(t) {
      return s(t) && "fixed" !== p(t).position ? t.offsetParent : null;
    }
    function b(t) {
      for (var e = o(t), n = g(t); n && y(n); ) n = g(n);
      return n && "body" === c(n) && "static" === p(n).position ? e : n || e;
    }
    n.r(e);
    var x = "top",
      w = "bottom",
      O = "right",
      E = "left",
      L = "auto",
      T = [x, w, O, E],
      S = "start",
      j = "end",
      A = "clippingParents",
      M = "viewport",
      D = "popper",
      k = "reference",
      P = T.reduce(function(t, e) {
        return t.concat([e + "-" + S, e + "-" + j]);
      }, []),
      C = [].concat(T, [L]).reduce(function(t, e) {
        return t.concat([e, e + "-" + S, e + "-" + j]);
      }, []),
      V = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
    function _(t) {
      var e = new Map(),
        n = new Set(),
        r = [];
      return (
        t.forEach(function(t) {
          e.set(t.name, t);
        }),
        t.forEach(function(t) {
          n.has(t.name) ||
            (function t(o) {
              n.add(o.name),
                [].concat(o.requires || [], o.requiresIfExists || []).forEach(function(r) {
                  if (!n.has(r)) {
                    var o = e.get(r);
                    o && t(o);
                  }
                }),
                r.push(o);
            })(t);
        }),
        r
      );
    }
    var H = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function I() {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
      return !e.some(function(t) {
        return !(t && "function" == typeof t.getBoundingClientRect);
      });
    }
    function B(t) {
      void 0 === t && (t = {});
      var e = t,
        n = e.defaultModifiers,
        r = void 0 === n ? [] : n,
        o = e.defaultOptions,
        i = void 0 === o ? H : o;
      return function(t, e, n) {
        void 0 === n && (n = i);
        var o,
          s,
          c = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, H, {}, i),
            modifiersData: {},
            elements: { reference: t, popper: e },
            attributes: {},
            styles: {},
          },
          u = [],
          f = !1,
          p = {
            state: c,
            setOptions: function(n) {
              l(),
                (c.options = Object.assign({}, i, {}, c.options, {}, n)),
                (c.scrollParents = {
                  reference: a(t) ? h(t) : t.contextElement ? h(t.contextElement) : [],
                  popper: h(e),
                });
              var o = (function(t) {
                var e = _(t);
                return V.reduce(function(t, n) {
                  return t.concat(
                    e.filter(function(t) {
                      return t.phase === n;
                    }),
                  );
                }, []);
              })(
                (function(t) {
                  var e = t.reduce(function(t, e) {
                    var n = t[e.name];
                    return (
                      (t[e.name] = n
                        ? Object.assign({}, n, {}, e, {
                            options: Object.assign({}, n.options, {}, e.options),
                            data: Object.assign({}, n.data, {}, e.data),
                          })
                        : e),
                      t
                    );
                  }, {});
                  return Object.keys(e).map(function(t) {
                    return e[t];
                  });
                })([].concat(r, c.options.modifiers)),
              );
              return (
                (c.orderedModifiers = o.filter(function(t) {
                  return t.enabled;
                })),
                c.orderedModifiers.forEach(function(t) {
                  var e = t.name,
                    n = t.options,
                    r = void 0 === n ? {} : n,
                    o = t.effect;
                  if ("function" == typeof o) {
                    var i = o({ state: c, name: e, instance: p, options: r });
                    u.push(i || function() {});
                  }
                }),
                p.update()
              );
            },
            forceUpdate: function() {
              if (!f) {
                var t = c.elements,
                  e = t.reference,
                  n = t.popper;
                if (I(e, n)) {
                  (c.rects = { reference: d(e, b(n), "fixed" === c.options.strategy), popper: v(n) }),
                    (c.reset = !1),
                    (c.placement = c.options.placement),
                    c.orderedModifiers.forEach(function(t) {
                      return (c.modifiersData[t.name] = Object.assign({}, t.data));
                    });
                  for (var r = 0; r < c.orderedModifiers.length; r++)
                    if (!0 !== c.reset) {
                      var o = c.orderedModifiers[r],
                        i = o.fn,
                        a = o.options,
                        s = void 0 === a ? {} : a,
                        u = o.name;
                      "function" == typeof i && (c = i({ state: c, options: s, name: u, instance: p }) || c);
                    } else (c.reset = !1), (r = -1);
                }
              }
            },
            update:
              ((o = function() {
                return new Promise(function(t) {
                  p.forceUpdate(), t(c);
                });
              }),
              function() {
                return (
                  s ||
                    (s = new Promise(function(t) {
                      Promise.resolve().then(function() {
                        (s = void 0), t(o());
                      });
                    })),
                  s
                );
              }),
            destroy: function() {
              l(), (f = !0);
            },
          };
        if (!I(t, e)) return p;
        function l() {
          u.forEach(function(t) {
            return t();
          }),
            (u = []);
        }
        return (
          p.setOptions(n).then(function(t) {
            !f && n.onFirstUpdate && n.onFirstUpdate(t);
          }),
          p
        );
      };
    }
    var R = { passive: !0 };
    function N(t) {
      return t.split("-")[0];
    }
    function W(t) {
      return t.split("-")[1];
    }
    function q(t) {
      return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
    }
    function F(t) {
      var e,
        n = t.reference,
        r = t.element,
        o = t.placement,
        i = o ? N(o) : null,
        a = o ? W(o) : null,
        s = n.x + n.width / 2 - r.width / 2,
        c = n.y + n.height / 2 - r.height / 2;
      switch (i) {
        case x:
          e = { x: s, y: n.y - r.height };
          break;
        case w:
          e = { x: s, y: n.y + n.height };
          break;
        case O:
          e = { x: n.x + n.width, y: c };
          break;
        case E:
          e = { x: n.x - r.width, y: c };
          break;
        default:
          e = { x: n.x, y: n.y };
      }
      var u = i ? q(i) : null;
      if (null != u) {
        var f = "y" === u ? "height" : "width";
        switch (a) {
          case S:
            e[u] = Math.floor(e[u]) - Math.floor(n[f] / 2 - r[f] / 2);
            break;
          case j:
            e[u] = Math.floor(e[u]) + Math.ceil(n[f] / 2 - r[f] / 2);
        }
      }
      return e;
    }
    var U = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function z(t) {
      var e,
        n = t.popper,
        r = t.popperRect,
        i = t.placement,
        a = t.offsets,
        s = t.position,
        c = t.gpuAcceleration,
        f = t.adaptive,
        p = (function(t) {
          var e = t.x,
            n = t.y,
            r = window.devicePixelRatio || 1;
          return { x: Math.round(e * r) / r || 0, y: Math.round(n * r) / r || 0 };
        })(a),
        l = p.x,
        d = p.y,
        v = a.hasOwnProperty("x"),
        m = a.hasOwnProperty("y"),
        h = E,
        y = x,
        g = window;
      if (f) {
        var L = b(n);
        L === o(n) && (L = u(n)),
          i === x && ((y = w), (d -= L.clientHeight - r.height), (d *= c ? 1 : -1)),
          i === E && ((h = O), (l -= L.clientWidth - r.width), (l *= c ? 1 : -1));
      }
      var T,
        S = Object.assign({ position: s }, f && U);
      return c
        ? Object.assign(
            {},
            S,
            (((T = {})[y] = m ? "0" : ""),
            (T[h] = v ? "0" : ""),
            (T.transform =
              (g.devicePixelRatio || 1) < 2
                ? "translate(" + l + "px, " + d + "px)"
                : "translate3d(" + l + "px, " + d + "px, 0)"),
            T),
          )
        : Object.assign({}, S, (((e = {})[y] = m ? d + "px" : ""), (e[h] = v ? l + "px" : ""), (e.transform = ""), e));
    }
    var G = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function $(t) {
      return t.replace(/left|right|bottom|top/g, function(t) {
        return G[t];
      });
    }
    var Y = { start: "end", end: "start" };
    function X(t) {
      return t.replace(/start|end/g, function(t) {
        return Y[t];
      });
    }
    function J(t) {
      return parseFloat(t) || 0;
    }
    function K(t) {
      var e = o(t),
        n = (function(t) {
          var e = s(t) ? p(t) : {};
          return {
            top: J(e.borderTopWidth),
            right: J(e.borderRightWidth),
            bottom: J(e.borderBottomWidth),
            left: J(e.borderLeftWidth),
          };
        })(t),
        r = "html" === c(t),
        i = f(t),
        a = t.clientWidth + n.right,
        u = t.clientHeight + n.bottom;
      return (
        r && e.innerHeight - t.clientHeight > 50 && (u = e.innerHeight - n.bottom),
        {
          top: r ? 0 : t.clientTop,
          right: t.clientLeft > n.left ? n.right : r ? e.innerWidth - a - i : t.offsetWidth - a,
          bottom: r ? e.innerHeight - u : t.offsetHeight - u,
          left: r ? i : t.clientLeft,
        }
      );
    }
    function Q(t, e) {
      var n = Boolean(e.getRootNode && e.getRootNode().host);
      if (t.contains(e)) return !0;
      if (n) {
        var r = e;
        do {
          if (r && t.isSameNode(r)) return !0;
          r = r.parentNode || r.host;
        } while (r);
      }
      return !1;
    }
    function Z(t) {
      return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height });
    }
    function tt(t, e) {
      return e === M
        ? Z(
            (function(t) {
              var e = o(t),
                n = e.visualViewport,
                r = e.innerWidth,
                i = e.innerHeight;
              return (
                n && /iPhone|iPod|iPad/.test(navigator.platform) && ((r = n.width), (i = n.height)),
                { width: r, height: i, x: 0, y: 0 }
              );
            })(t),
          )
        : s(e)
        ? r(e)
        : Z(
            (function(t) {
              var e = o(t),
                n = i(t),
                r = d(u(t), e);
              return (
                (r.height = Math.max(r.height, e.innerHeight)),
                (r.width = Math.max(r.width, e.innerWidth)),
                (r.x = -n.scrollLeft),
                (r.y = -n.scrollTop),
                r
              );
            })(u(t)),
          );
    }
    function et(t, e, n) {
      var r =
          "clippingParents" === e
            ? (function(t) {
                var e = h(t),
                  n = ["absolute", "fixed"].indexOf(p(t).position) >= 0 && s(t) ? b(t) : t;
                return a(n)
                  ? e.filter(function(t) {
                      return a(t) && Q(t, n);
                    })
                  : [];
              })(t)
            : [].concat(e),
        o = [].concat(r, [n]),
        i = o[0],
        c = o.reduce(function(e, n) {
          var r = tt(t, n),
            o = K(s(n) ? n : u(t));
          return (
            (e.top = Math.max(r.top + o.top, e.top)),
            (e.right = Math.min(r.right - o.right, e.right)),
            (e.bottom = Math.min(r.bottom - o.bottom, e.bottom)),
            (e.left = Math.max(r.left + o.left, e.left)),
            e
          );
        }, tt(t, i));
      return (c.width = c.right - c.left), (c.height = c.bottom - c.top), (c.x = c.left), (c.y = c.top), c;
    }
    function nt(t) {
      return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, {}, t);
    }
    function rt(t, e) {
      return e.reduce(function(e, n) {
        return (e[n] = t), e;
      }, {});
    }
    function ot(t, e) {
      void 0 === e && (e = {});
      var n = e,
        o = n.placement,
        i = void 0 === o ? t.placement : o,
        s = n.boundary,
        c = void 0 === s ? A : s,
        f = n.rootBoundary,
        p = void 0 === f ? M : f,
        l = n.elementContext,
        d = void 0 === l ? D : l,
        v = n.altBoundary,
        m = void 0 !== v && v,
        h = n.padding,
        y = void 0 === h ? 0 : h,
        g = nt("number" != typeof y ? y : rt(y, T)),
        b = d === D ? k : D,
        E = t.elements.reference,
        L = t.rects.popper,
        S = t.elements[m ? b : d],
        j = et(a(S) ? S : S.contextElement || u(t.elements.popper), c, p),
        P = r(E),
        C = F({ reference: P, element: L, strategy: "absolute", placement: i }),
        V = Z(Object.assign({}, L, {}, C)),
        _ = d === D ? V : P,
        H = {
          top: j.top - _.top + g.top,
          bottom: _.bottom - j.bottom + g.bottom,
          left: j.left - _.left + g.left,
          right: _.right - j.right + g.right,
        },
        I = t.modifiersData.offset;
      if (d === D && I) {
        var B = I[i];
        Object.keys(H).forEach(function(t) {
          var e = [O, w].indexOf(t) >= 0 ? 1 : -1,
            n = [x, w].indexOf(t) >= 0 ? "y" : "x";
          H[t] += B[n] * e;
        });
      }
      return H;
    }
    function it(t, e, n) {
      return Math.max(t, Math.min(e, n));
    }
    function at(t, e, n) {
      return (
        void 0 === n && (n = { x: 0, y: 0 }),
        {
          top: t.top - e.height - n.y,
          right: t.right - e.width + n.x,
          bottom: t.bottom - e.height + n.y,
          left: t.left - e.width - n.x,
        }
      );
    }
    function st(t) {
      return [x, O, w, E].some(function(e) {
        return t[e] >= 0;
      });
    }
    var ct = B({
        defaultModifiers: [
          {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function() {},
            effect: function(t) {
              var e = t.state,
                n = t.instance,
                r = t.options,
                i = r.scroll,
                a = void 0 === i || i,
                s = r.resize,
                c = void 0 === s || s,
                u = o(e.elements.popper),
                f = [].concat(e.scrollParents.reference, e.scrollParents.popper);
              return (
                a &&
                  f.forEach(function(t) {
                    t.addEventListener("scroll", n.update, R);
                  }),
                c && u.addEventListener("resize", n.update, R),
                function() {
                  a &&
                    f.forEach(function(t) {
                      t.removeEventListener("scroll", n.update, R);
                    }),
                    c && u.removeEventListener("resize", n.update, R);
                }
              );
            },
            data: {},
          },
          {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function(t) {
              var e = t.state,
                n = t.name;
              e.modifiersData[n] = F({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement,
              });
            },
            data: {},
          },
          {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function(t) {
              var e = t.state,
                n = t.options,
                r = n.gpuAcceleration,
                o = void 0 === r || r,
                i = n.adaptive,
                a = void 0 === i || i,
                s = {
                  placement: N(e.placement),
                  popper: e.elements.popper,
                  popperRect: e.rects.popper,
                  gpuAcceleration: o,
                };
              null != e.modifiersData.popperOffsets &&
                (e.styles.popper = Object.assign(
                  {},
                  e.styles.popper,
                  {},
                  z(
                    Object.assign({}, s, {
                      offsets: e.modifiersData.popperOffsets,
                      position: e.options.strategy,
                      adaptive: a,
                    }),
                  ),
                )),
                null != e.modifiersData.arrow &&
                  (e.styles.arrow = Object.assign(
                    {},
                    e.styles.arrow,
                    {},
                    z(Object.assign({}, s, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: !1 })),
                  )),
                (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                  "data-popper-placement": e.placement,
                }));
            },
            data: {},
          },
          {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function(t) {
              var e = t.state;
              Object.keys(e.elements).forEach(function(t) {
                var n = e.styles[t] || {},
                  r = e.attributes[t] || {},
                  o = e.elements[t];
                s(o) &&
                  c(o) &&
                  (Object.assign(o.style, n),
                  Object.keys(r).forEach(function(t) {
                    var e = r[t];
                    !1 === e ? o.removeAttribute(t) : o.setAttribute(t, !0 === e ? "" : e);
                  }));
              });
            },
            effect: function(t) {
              var e = t.state,
                n = {
                  popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" },
                  arrow: { position: "absolute" },
                  reference: {},
                };
              return (
                Object.assign(e.elements.popper.style, n.popper),
                e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
                function() {
                  Object.keys(e.elements).forEach(function(t) {
                    var r = e.elements[t],
                      o = e.attributes[t] || {},
                      i = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce(function(t, e) {
                        return (t[e] = ""), t;
                      }, {});
                    s(r) &&
                      c(r) &&
                      (Object.assign(r.style, i),
                      Object.keys(o).forEach(function(t) {
                        r.removeAttribute(t);
                      }));
                  });
                }
              );
            },
            requires: ["computeStyles"],
          },
          {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function(t) {
              var e = t.state,
                n = t.options,
                r = t.name,
                o = n.offset,
                i = void 0 === o ? [0, 0] : o,
                a = C.reduce(function(t, n) {
                  return (
                    (t[n] = (function(t, e, n) {
                      var r = N(t),
                        o = [E, x].indexOf(r) >= 0 ? -1 : 1,
                        i = "function" == typeof n ? n(Object.assign({}, e, { placement: t })) : n,
                        a = i[0],
                        s = i[1];
                      return (a = a || 0), (s = (s || 0) * o), [E, O].indexOf(r) >= 0 ? { x: s, y: a } : { x: a, y: s };
                    })(n, e.rects, i)),
                    t
                  );
                }, {}),
                s = a[e.placement],
                c = s.x,
                u = s.y;
              null != e.modifiersData.popperOffsets &&
                ((e.modifiersData.popperOffsets.x += c), (e.modifiersData.popperOffsets.y += u)),
                (e.modifiersData[r] = a);
            },
          },
          {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function(t) {
              var e = t.state,
                n = t.options,
                r = t.name;
              if (!e.modifiersData[r]._skip) {
                for (
                  var o = n.mainAxis,
                    i = void 0 === o || o,
                    a = n.altAxis,
                    s = void 0 === a || a,
                    c = n.fallbackPlacements,
                    u = n.padding,
                    f = n.boundary,
                    p = n.rootBoundary,
                    l = n.altBoundary,
                    d = n.flipVariations,
                    v = void 0 === d || d,
                    m = n.allowedAutoPlacements,
                    h = e.options.placement,
                    y = N(h),
                    g =
                      c ||
                      (y === h || !v
                        ? [$(h)]
                        : (function(t) {
                            if (N(t) === L) return [];
                            var e = $(t);
                            return [X(t), e, X(e)];
                          })(h)),
                    b = [h].concat(g).reduce(function(t, n) {
                      return t.concat(
                        N(n) === L
                          ? (function(t, e) {
                              void 0 === e && (e = {});
                              var n = e,
                                r = n.placement,
                                o = n.boundary,
                                i = n.rootBoundary,
                                a = n.padding,
                                s = n.flipVariations,
                                c = n.allowedAutoPlacements,
                                u = void 0 === c ? C : c,
                                f = W(r),
                                p = (f
                                  ? s
                                    ? P
                                    : P.filter(function(t) {
                                        return W(t) === f;
                                      })
                                  : T
                                )
                                  .filter(function(t) {
                                    return u.indexOf(t) >= 0;
                                  })
                                  .reduce(function(e, n) {
                                    return (
                                      (e[n] = ot(t, { placement: n, boundary: o, rootBoundary: i, padding: a })[N(n)]),
                                      e
                                    );
                                  }, {});
                              return Object.keys(p).sort(function(t, e) {
                                return p[t] - p[e];
                              });
                            })(e, {
                              placement: n,
                              boundary: f,
                              rootBoundary: p,
                              padding: u,
                              flipVariations: v,
                              allowedAutoPlacements: m,
                            })
                          : n,
                      );
                    }, []),
                    j = e.rects.reference,
                    A = e.rects.popper,
                    M = new Map(),
                    D = !0,
                    k = b[0],
                    V = 0;
                  V < b.length;
                  V++
                ) {
                  var _ = b[V],
                    H = N(_),
                    I = W(_) === S,
                    B = [x, w].indexOf(H) >= 0,
                    R = B ? "width" : "height",
                    q = ot(e, { placement: _, boundary: f, rootBoundary: p, altBoundary: l, padding: u }),
                    F = B ? (I ? O : E) : I ? w : x;
                  j[R] > A[R] && (F = $(F));
                  var U = $(F),
                    z = [];
                  if (
                    (i && z.push(q[H] <= 0),
                    s && z.push(q[F] <= 0, q[U] <= 0),
                    z.every(function(t) {
                      return t;
                    }))
                  ) {
                    (k = _), (D = !1);
                    break;
                  }
                  M.set(_, z);
                }
                if (D)
                  for (
                    var G = function(t) {
                        var e = b.find(function(e) {
                          var n = M.get(e);
                          if (n)
                            return n.slice(0, t).every(function(t) {
                              return t;
                            });
                        });
                        if (e) return (k = e), "break";
                      },
                      Y = v ? 3 : 1;
                    Y > 0;
                    Y--
                  ) {
                    if ("break" === G(Y)) break;
                  }
                e.placement !== k && ((e.modifiersData[r]._skip = !0), (e.placement = k), (e.reset = !0));
              }
            },
            requiresIfExists: ["offset"],
            data: { _skip: !1 },
          },
          {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function(t) {
              var e = t.state,
                n = t.options,
                r = t.name,
                o = n.mainAxis,
                i = void 0 === o || o,
                a = n.altAxis,
                s = void 0 !== a && a,
                c = n.boundary,
                u = n.rootBoundary,
                f = n.altBoundary,
                p = n.padding,
                l = n.tether,
                d = void 0 === l || l,
                m = n.tetherOffset,
                h = void 0 === m ? 0 : m,
                y = ot(e, { boundary: c, rootBoundary: u, padding: p, altBoundary: f }),
                g = N(e.placement),
                L = W(e.placement),
                T = !L,
                j = q(g),
                A = "x" === j ? "y" : "x",
                M = e.modifiersData.popperOffsets,
                D = e.rects.reference,
                k = e.rects.popper,
                P = "function" == typeof h ? h(Object.assign({}, e.rects, { placement: e.placement })) : h,
                C = { x: 0, y: 0 };
              if (M) {
                if (i) {
                  var V = "y" === j ? x : E,
                    _ = "y" === j ? w : O,
                    H = "y" === j ? "height" : "width",
                    I = M[j],
                    B = M[j] + y[V],
                    R = M[j] - y[_],
                    F = d ? -k[H] / 2 : 0,
                    U = L === S ? D[H] : k[H],
                    z = L === S ? -k[H] : -D[H],
                    G = e.elements.arrow,
                    $ = d && G ? v(G) : { width: 0, height: 0 },
                    Y = e.modifiersData["arrow#persistent"]
                      ? e.modifiersData["arrow#persistent"].padding
                      : { top: 0, right: 0, bottom: 0, left: 0 },
                    X = Y[V],
                    J = Y[_],
                    K = it(0, D[H], $[H]),
                    Q = T ? D[H] / 2 - F - K - X - P : U - K - X - P,
                    Z = T ? -D[H] / 2 + F + K + J + P : z + K + J + P,
                    tt = e.elements.arrow && b(e.elements.arrow),
                    et = tt ? ("y" === j ? tt.clientTop || 0 : tt.clientLeft || 0) : 0,
                    nt = e.modifiersData.offset ? e.modifiersData.offset[e.placement][j] : 0,
                    rt = M[j] + Q - nt - et,
                    at = M[j] + Z - nt,
                    st = it(d ? Math.min(B, rt) : B, I, d ? Math.max(R, at) : R);
                  (M[j] = st), (C[j] = st - I);
                }
                if (s) {
                  var ct = "x" === j ? x : E,
                    ut = "x" === j ? w : O,
                    ft = M[A],
                    pt = it(ft + y[ct], ft, ft - y[ut]);
                  (M[A] = pt), (C[A] = pt - ft);
                }
                e.modifiersData[r] = C;
              }
            },
            requiresIfExists: ["offset"],
          },
          {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function(t) {
              var e,
                n = t.state,
                r = t.name,
                o = n.elements.arrow,
                i = n.modifiersData.popperOffsets,
                a = N(n.placement),
                s = q(a),
                c = [E, O].indexOf(a) >= 0 ? "height" : "width";
              if (o && i) {
                var u = n.modifiersData[r + "#persistent"].padding,
                  f = v(o),
                  p = "y" === s ? x : E,
                  l = "y" === s ? w : O,
                  d = n.rects.reference[c] + n.rects.reference[s] - i[s] - n.rects.popper[c],
                  m = i[s] - n.rects.reference[s],
                  h = b(o),
                  y = h ? ("y" === s ? h.clientHeight || 0 : h.clientWidth || 0) : 0,
                  g = d / 2 - m / 2,
                  L = u[p],
                  T = y - f[c] - u[l],
                  S = y / 2 - f[c] / 2 + g,
                  j = it(L, S, T),
                  A = s;
                n.modifiersData[r] = (((e = {})[A] = j), (e.centerOffset = j - S), e);
              }
            },
            effect: function(t) {
              var e = t.state,
                n = t.options,
                r = t.name,
                o = n.element,
                i = void 0 === o ? "[data-popper-arrow]" : o,
                a = n.padding,
                s = void 0 === a ? 0 : a;
              null != i &&
                ("string" != typeof i || (i = e.elements.popper.querySelector(i))) &&
                Q(e.elements.popper, i) &&
                ((e.elements.arrow = i),
                (e.modifiersData[r + "#persistent"] = { padding: nt("number" != typeof s ? s : rt(s, T)) }));
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"],
          },
          {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function(t) {
              var e = t.state,
                n = t.name,
                r = e.rects.reference,
                o = e.rects.popper,
                i = e.modifiersData.preventOverflow,
                a = ot(e, { elementContext: "reference" }),
                s = ot(e, { altBoundary: !0 }),
                c = at(a, r),
                u = at(s, o, i),
                f = st(c),
                p = st(u);
              (e.modifiersData[n] = {
                referenceClippingOffsets: c,
                popperEscapeOffsets: u,
                isReferenceHidden: f,
                hasPopperEscaped: p,
              }),
                (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                  "data-popper-reference-hidden": f,
                  "data-popper-escaped": p,
                }));
            },
          },
        ],
      }),
      ut = "tippy-box",
      ft = "tippy-content",
      pt = "tippy-backdrop",
      lt = "tippy-arrow",
      dt = "tippy-svg-arrow",
      vt = { passive: !0, capture: !0 };
    function mt(t, e, n) {
      if (Array.isArray(t)) {
        var r = t[e];
        return null == r ? (Array.isArray(n) ? n[e] : n) : r;
      }
      return t;
    }
    function ht(t, e) {
      var n = {}.toString.call(t);
      return 0 === n.indexOf("[object") && n.indexOf(e + "]") > -1;
    }
    function yt(t, e) {
      return "function" == typeof t ? t.apply(void 0, e) : t;
    }
    function gt(t, e) {
      return 0 === e
        ? t
        : function(r) {
            clearTimeout(n),
              (n = setTimeout(function() {
                t(r);
              }, e));
          };
      var n;
    }
    function bt(t) {
      return [].concat(t);
    }
    function xt(t, e) {
      -1 === t.indexOf(e) && t.push(e);
    }
    function wt(t) {
      return t.split("-")[0];
    }
    function Ot(t) {
      return [].slice.call(t);
    }
    function Et() {
      return document.createElement("div");
    }
    function Lt(t) {
      return ["Element", "Fragment"].some(function(e) {
        return ht(t, e);
      });
    }
    function Tt(t) {
      return ht(t, "MouseEvent");
    }
    function St(t) {
      return !(!t || !t._tippy || t._tippy.reference !== t);
    }
    function jt(t) {
      return Lt(t)
        ? [t]
        : (function(t) {
            return ht(t, "NodeList");
          })(t)
        ? Ot(t)
        : Array.isArray(t)
        ? t
        : Ot(document.querySelectorAll(t));
    }
    function At(t, e) {
      t.forEach(function(t) {
        t && (t.style.transitionDuration = e + "ms");
      });
    }
    function Mt(t, e) {
      t.forEach(function(t) {
        t && t.setAttribute("data-state", e);
      });
    }
    function Dt(t) {
      var e = bt(t)[0];
      return (e && e.ownerDocument) || document;
    }
    function kt(t, e, n) {
      var r = e + "EventListener";
      ["transitionend", "webkitTransitionEnd"].forEach(function(e) {
        t[r](e, n);
      });
    }
    var Pt = { isTouch: !1 },
      Ct = 0;
    function Vt() {
      Pt.isTouch || ((Pt.isTouch = !0), window.performance && document.addEventListener("mousemove", _t));
    }
    function _t() {
      var t = performance.now();
      t - Ct < 20 && ((Pt.isTouch = !1), document.removeEventListener("mousemove", _t)), (Ct = t);
    }
    function Ht() {
      var t = document.activeElement;
      if (St(t)) {
        var e = t._tippy;
        t.blur && !e.state.isVisible && t.blur();
      }
    }
    var It = "undefined" != typeof window && "undefined" != typeof document ? navigator.userAgent : "",
      Bt = /MSIE |Trident\//.test(It);
    var Rt = { animateFill: !1, followCursor: !1, inlinePositioning: !1, sticky: !1 },
      Nt = Object.assign(
        {
          appendTo: function() {
            return document.body;
          },
          aria: { content: "auto", expanded: "auto" },
          delay: 0,
          duration: [300, 250],
          getReferenceClientRect: null,
          hideOnClick: !0,
          ignoreAttributes: !1,
          interactive: !1,
          interactiveBorder: 2,
          interactiveDebounce: 0,
          moveTransition: "",
          offset: [0, 10],
          onAfterUpdate: function() {},
          onBeforeUpdate: function() {},
          onCreate: function() {},
          onDestroy: function() {},
          onHidden: function() {},
          onHide: function() {},
          onMount: function() {},
          onShow: function() {},
          onShown: function() {},
          onTrigger: function() {},
          onUntrigger: function() {},
          onClickOutside: function() {},
          placement: "top",
          plugins: [],
          popperOptions: {},
          render: null,
          showOnCreate: !1,
          touch: !0,
          trigger: "mouseenter focus",
          triggerTarget: null,
        },
        Rt,
        {},
        {
          allowHTML: !1,
          animation: "fade",
          arrow: !0,
          content: "",
          inertia: !1,
          maxWidth: 350,
          role: "tooltip",
          theme: "",
          zIndex: 9999,
        },
      ),
      Wt = Object.keys(Nt);
    function qt(t) {
      var e = (t.plugins || []).reduce(function(e, n) {
        var r = n.name,
          o = n.defaultValue;
        return r && (e[r] = void 0 !== t[r] ? t[r] : o), e;
      }, {});
      return Object.assign({}, t, {}, e);
    }
    function Ft(t, e) {
      var n = Object.assign(
        {},
        e,
        { content: yt(e.content, [t]) },
        e.ignoreAttributes
          ? {}
          : (function(t, e) {
              return (e ? Object.keys(qt(Object.assign({}, Nt, { plugins: e }))) : Wt).reduce(function(e, n) {
                var r = (t.getAttribute("data-tippy-" + n) || "").trim();
                if (!r) return e;
                if ("content" === n) e[n] = r;
                else
                  try {
                    e[n] = JSON.parse(r);
                  } catch (t) {
                    e[n] = r;
                  }
                return e;
              }, {});
            })(t, e.plugins),
      );
      return (
        (n.aria = Object.assign({}, Nt.aria, {}, n.aria)),
        (n.aria = {
          expanded: "auto" === n.aria.expanded ? e.interactive : n.aria.expanded,
          content: "auto" === n.aria.content ? (e.interactive ? null : "describedby") : n.aria.content,
        }),
        n
      );
    }
    var Ut = function() {
      return "innerHTML";
    };
    function zt(t, e) {
      t[Ut()] = e;
    }
    function Gt(t) {
      var e = Et();
      return !0 === t ? (e.className = lt) : ((e.className = dt), Lt(t) ? e.appendChild(t) : zt(e, t)), e;
    }
    function $t(t, e) {
      Lt(e.content)
        ? (zt(t, ""), t.appendChild(e.content))
        : "function" != typeof e.content && (e.allowHTML ? zt(t, e.content) : (t.textContent = e.content));
    }
    function Yt(t) {
      var e = t.firstElementChild,
        n = Ot(e.children);
      return {
        box: e,
        content: n.find(function(t) {
          return t.classList.contains(ft);
        }),
        arrow: n.find(function(t) {
          return t.classList.contains(lt) || t.classList.contains(dt);
        }),
        backdrop: n.find(function(t) {
          return t.classList.contains(pt);
        }),
      };
    }
    function Xt(t) {
      var e = Et(),
        n = Et();
      (n.className = ut), n.setAttribute("data-state", "hidden"), n.setAttribute("tabindex", "-1");
      var r = Et();
      function o(n, r) {
        var o = Yt(e),
          i = o.box,
          a = o.content,
          s = o.arrow;
        r.theme ? i.setAttribute("data-theme", r.theme) : i.removeAttribute("data-theme"),
          "string" == typeof r.animation
            ? i.setAttribute("data-animation", r.animation)
            : i.removeAttribute("data-animation"),
          r.inertia ? i.setAttribute("data-inertia", "") : i.removeAttribute("data-inertia"),
          (i.style.maxWidth = "number" == typeof r.maxWidth ? r.maxWidth + "px" : r.maxWidth),
          r.role ? i.setAttribute("role", r.role) : i.removeAttribute("role"),
          (n.content === r.content && n.allowHTML === r.allowHTML) || $t(a, t.props),
          r.arrow
            ? s
              ? n.arrow !== r.arrow && (i.removeChild(s), i.appendChild(Gt(r.arrow)))
              : i.appendChild(Gt(r.arrow))
            : s && i.removeChild(s);
      }
      return (
        (r.className = ft),
        r.setAttribute("data-state", "hidden"),
        $t(r, t.props),
        e.appendChild(n),
        n.appendChild(r),
        o(t.props, t.props),
        { popper: e, onUpdate: o }
      );
    }
    Xt.$$tippy = !0;
    var Jt = 1,
      Kt = [],
      Qt = [];
    function Zt(t, e) {
      var n,
        r,
        o,
        i,
        a,
        s,
        c,
        u,
        f = Ft(t, Object.assign({}, Nt, {}, qt(e))),
        p = !1,
        l = !1,
        d = !1,
        v = !1,
        m = [],
        h = gt($, f.interactiveDebounce),
        y = Dt(f.triggerTarget || t),
        g = Jt++,
        b = (u = f.plugins).filter(function(t, e) {
          return u.indexOf(t) === e;
        }),
        x = {
          id: g,
          reference: t,
          popper: Et(),
          popperInstance: null,
          props: f,
          state: { isEnabled: !0, isVisible: !1, isDestroyed: !1, isMounted: !1, isShown: !1 },
          plugins: b,
          clearDelayTimeouts: function() {
            clearTimeout(n), clearTimeout(r), cancelAnimationFrame(o);
          },
          setProps: function(e) {
            0;
            if (x.state.isDestroyed) return;
            C("onBeforeUpdate", [x, e]), z();
            var n = x.props,
              r = Ft(t, Object.assign({}, x.props, {}, e, { ignoreAttributes: !0 }));
            (x.props = r),
              U(),
              n.interactiveDebounce !== r.interactiveDebounce && (H(), (h = gt($, r.interactiveDebounce)));
            n.triggerTarget && !r.triggerTarget
              ? bt(n.triggerTarget).forEach(function(t) {
                  t.removeAttribute("aria-expanded");
                })
              : r.triggerTarget && t.removeAttribute("aria-expanded");
            _(), P(), E && E(n, r);
            x.popperInstance &&
              (K(),
              Z().forEach(function(t) {
                requestAnimationFrame(t._tippy.popperInstance.forceUpdate);
              }));
            C("onAfterUpdate", [x, e]);
          },
          setContent: function(t) {
            x.setProps({ content: t });
          },
          show: function() {
            0;
            var t = x.state.isVisible,
              e = x.state.isDestroyed,
              n = !x.state.isEnabled,
              r = Pt.isTouch && !x.props.touch,
              o = mt(x.props.duration, 0, Nt.duration);
            if (t || e || n || r) return;
            if (M().hasAttribute("disabled")) return;
            if ((C("onShow", [x], !1), !1 === x.props.onShow(x))) return;
            (x.state.isVisible = !0), A() && (O.style.visibility = "visible");
            P(), N(), x.state.isMounted || (O.style.transition = "none");
            if (A()) {
              var i = D(),
                a = i.box,
                c = i.content;
              At([a, c], 0);
            }
            (s = function() {
              if (x.state.isVisible && !v) {
                if (
                  ((v = !0), O.offsetHeight, (O.style.transition = x.props.moveTransition), A() && x.props.animation)
                ) {
                  var t = D(),
                    e = t.box,
                    n = t.content;
                  At([e, n], o), Mt([e, n], "visible");
                }
                V(),
                  _(),
                  xt(Qt, x),
                  (x.state.isMounted = !0),
                  C("onMount", [x]),
                  x.props.animation &&
                    A() &&
                    (function(t, e) {
                      q(t, e);
                    })(o, function() {
                      (x.state.isShown = !0), C("onShown", [x]);
                    });
              }
            }),
              (function() {
                var t,
                  e = x.props.appendTo,
                  n = M();
                t = (x.props.interactive && e === Nt.appendTo) || "parent" === e ? n.parentNode : yt(e, [n]);
                t.contains(O) || t.appendChild(O);
                K(), !1;
              })();
          },
          hide: function() {
            0;
            var t = !x.state.isVisible,
              e = x.state.isDestroyed,
              n = !x.state.isEnabled,
              r = mt(x.props.duration, 1, Nt.duration);
            if (t || e || n) return;
            if ((C("onHide", [x], !1), !1 === x.props.onHide(x))) return;
            (x.state.isVisible = !1), (x.state.isShown = !1), (v = !1), A() && (O.style.visibility = "hidden");
            if ((H(), W(), P(), A())) {
              var o = D(),
                i = o.box,
                a = o.content;
              x.props.animation && (At([i, a], r), Mt([i, a], "hidden"));
            }
            V(),
              _(),
              x.props.animation
                ? A() &&
                  (function(t, e) {
                    q(t, function() {
                      !x.state.isVisible && O.parentNode && O.parentNode.contains(O) && e();
                    });
                  })(r, x.unmount)
                : x.unmount();
          },
          hideWithInteractivity: function(t) {
            0;
            y.body.addEventListener("mouseleave", et), y.addEventListener("mousemove", h), xt(Kt, h), h(t);
          },
          enable: function() {
            x.state.isEnabled = !0;
          },
          disable: function() {
            x.hide(), (x.state.isEnabled = !1);
          },
          unmount: function() {
            0;
            x.state.isVisible && x.hide();
            if (!x.state.isMounted) return;
            Q(),
              Z().forEach(function(t) {
                t._tippy.unmount();
              }),
              O.parentNode && O.parentNode.removeChild(O);
            (Qt = Qt.filter(function(t) {
              return t !== x;
            })),
              (x.state.isMounted = !1),
              C("onHidden", [x]);
          },
          destroy: function() {
            0;
            if (x.state.isDestroyed) return;
            x.clearDelayTimeouts(), x.unmount(), z(), delete t._tippy, (x.state.isDestroyed = !0), C("onDestroy", [x]);
          },
        };
      if (!f.render) return x;
      var w = f.render(x),
        O = w.popper,
        E = w.onUpdate;
      O.setAttribute("data-tippy-root", ""), (O.id = "tippy-" + x.id), (x.popper = O), (t._tippy = x), (O._tippy = x);
      var L = b.map(function(t) {
          return t.fn(x);
        }),
        T = t.hasAttribute("aria-expanded");
      return (
        U(),
        _(),
        P(),
        C("onCreate", [x]),
        f.showOnCreate && tt(),
        O.addEventListener("mouseenter", function() {
          x.props.interactive && x.state.isVisible && x.clearDelayTimeouts();
        }),
        O.addEventListener("mouseleave", function(t) {
          x.props.interactive &&
            x.props.trigger.indexOf("mouseenter") >= 0 &&
            (y.addEventListener("mousemove", h), h(t));
        }),
        x
      );
      function S() {
        var t = x.props.touch;
        return Array.isArray(t) ? t : [t, 0];
      }
      function j() {
        return "hold" === S()[0];
      }
      function A() {
        var t;
        return !!(null == (t = x.props.render) ? void 0 : t.$$tippy);
      }
      function M() {
        return c || t;
      }
      function D() {
        return Yt(O);
      }
      function k(t) {
        return (x.state.isMounted && !x.state.isVisible) || Pt.isTouch || (i && "focus" === i.type)
          ? 0
          : mt(x.props.delay, t ? 0 : 1, Nt.delay);
      }
      function P() {
        (O.style.pointerEvents = x.props.interactive && x.state.isVisible ? "" : "none"),
          (O.style.zIndex = "" + x.props.zIndex);
      }
      function C(t, e, n) {
        var r;
        (void 0 === n && (n = !0),
        L.forEach(function(n) {
          n[t] && n[t].apply(void 0, e);
        }),
        n) && (r = x.props)[t].apply(r, e);
      }
      function V() {
        var e = x.props.aria;
        if (e.content) {
          var n = "aria-" + e.content,
            r = O.id;
          bt(x.props.triggerTarget || t).forEach(function(t) {
            var e = t.getAttribute(n);
            if (x.state.isVisible) t.setAttribute(n, e ? e + " " + r : r);
            else {
              var o = e && e.replace(r, "").trim();
              o ? t.setAttribute(n, o) : t.removeAttribute(n);
            }
          });
        }
      }
      function _() {
        !T &&
          x.props.aria.expanded &&
          bt(x.props.triggerTarget || t).forEach(function(t) {
            x.props.interactive
              ? t.setAttribute("aria-expanded", x.state.isVisible && t === M() ? "true" : "false")
              : t.removeAttribute("aria-expanded");
          });
      }
      function H() {
        y.body.removeEventListener("mouseleave", et),
          y.removeEventListener("mousemove", h),
          (Kt = Kt.filter(function(t) {
            return t !== h;
          }));
      }
      function I(t) {
        if (!((Pt.isTouch && (d || "mousedown" === t.type)) || (x.props.interactive && O.contains(t.target)))) {
          if (M().contains(t.target)) {
            if (Pt.isTouch) return;
            if (x.state.isVisible && x.props.trigger.indexOf("click") >= 0) return;
          } else C("onClickOutside", [x, t]);
          !0 === x.props.hideOnClick &&
            ((p = !1),
            x.clearDelayTimeouts(),
            x.hide(),
            (l = !0),
            setTimeout(function() {
              l = !1;
            }),
            x.state.isMounted || W());
        }
      }
      function B() {
        d = !0;
      }
      function R() {
        d = !1;
      }
      function N() {
        y.addEventListener("mousedown", I, !0),
          y.addEventListener("touchend", I, vt),
          y.addEventListener("touchstart", R, vt),
          y.addEventListener("touchmove", B, vt);
      }
      function W() {
        y.removeEventListener("mousedown", I, !0),
          y.removeEventListener("touchend", I, vt),
          y.removeEventListener("touchstart", R, vt),
          y.removeEventListener("touchmove", B, vt);
      }
      function q(t, e) {
        var n = D().box;
        function r(t) {
          t.target === n && (kt(n, "remove", r), e());
        }
        if (0 === t) return e();
        kt(n, "remove", a), kt(n, "add", r), (a = r);
      }
      function F(e, n, r) {
        void 0 === r && (r = !1),
          bt(x.props.triggerTarget || t).forEach(function(t) {
            t.addEventListener(e, n, r), m.push({ node: t, eventType: e, handler: n, options: r });
          });
      }
      function U() {
        var t;
        j() && (F("touchstart", G, { passive: !0 }), F("touchend", Y, { passive: !0 })),
          ((t = x.props.trigger), t.split(/\s+/).filter(Boolean)).forEach(function(t) {
            if ("manual" !== t)
              switch ((F(t, G), t)) {
                case "mouseenter":
                  F("mouseleave", Y);
                  break;
                case "focus":
                  F(Bt ? "focusout" : "blur", X);
                  break;
                case "focusin":
                  F("focusout", X);
              }
          });
      }
      function z() {
        m.forEach(function(t) {
          var e = t.node,
            n = t.eventType,
            r = t.handler,
            o = t.options;
          e.removeEventListener(n, r, o);
        }),
          (m = []);
      }
      function G(t) {
        var e,
          n = !1;
        if (x.state.isEnabled && !J(t) && !l) {
          var r = "focus" === (null == (e = i) ? void 0 : e.type);
          (i = t),
            (c = t.currentTarget),
            _(),
            !x.state.isVisible &&
              Tt(t) &&
              Kt.forEach(function(e) {
                return e(t);
              }),
            "click" === t.type &&
            (x.props.trigger.indexOf("mouseenter") < 0 || p) &&
            !1 !== x.props.hideOnClick &&
            x.state.isVisible
              ? (n = !0)
              : tt(t),
            "click" === t.type && (p = !n),
            n && !r && et(t);
        }
      }
      function $(e) {
        var n = e.target,
          r = t.contains(n) || O.contains(n);
        ("mousemove" === e.type && r) ||
          ((function(t, e) {
            var n = e.clientX,
              r = e.clientY;
            return t.every(function(t) {
              var e = t.popperRect,
                o = t.popperState,
                i = t.props.interactiveBorder,
                a = wt(o.placement),
                s = o.modifiersData.offset;
              if (!s) return !0;
              var c = "bottom" === a ? s.top.y : 0,
                u = "top" === a ? s.bottom.y : 0,
                f = "right" === a ? s.left.x : 0,
                p = "left" === a ? s.right.x : 0,
                l = e.top - r + c > i,
                d = r - e.bottom - u > i,
                v = e.left - n + f > i,
                m = n - e.right - p > i;
              return l || d || v || m;
            });
          })(
            Z()
              .concat(O)
              .map(function(t) {
                var e,
                  n = null == (e = t._tippy.popperInstance) ? void 0 : e.state;
                return n ? { popperRect: t.getBoundingClientRect(), popperState: n, props: f } : null;
              })
              .filter(Boolean),
            e,
          ) &&
            (H(), et(e)));
      }
      function Y(t) {
        J(t) ||
          (x.props.trigger.indexOf("click") >= 0 && p) ||
          (x.props.interactive ? x.hideWithInteractivity(t) : et(t));
      }
      function X(t) {
        (x.props.trigger.indexOf("focusin") < 0 && t.target !== M()) ||
          (x.props.interactive && t.relatedTarget && O.contains(t.relatedTarget)) ||
          et(t);
      }
      function J(t) {
        return !!Pt.isTouch && j() !== t.type.indexOf("touch") >= 0;
      }
      function K() {
        Q();
        var e = x.props,
          n = e.popperOptions,
          r = e.placement,
          o = e.offset,
          i = e.getReferenceClientRect,
          a = e.moveTransition,
          c = A() ? Yt(O).arrow : null,
          u = i ? { getBoundingClientRect: i, contextElement: i.contextElement || M() } : t,
          f = [
            { name: "offset", options: { offset: o } },
            { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } },
            { name: "flip", options: { padding: 5 } },
            { name: "computeStyles", options: { adaptive: !a } },
            {
              name: "$$tippy",
              enabled: !0,
              phase: "beforeWrite",
              requires: ["computeStyles"],
              fn: function(t) {
                var e = t.state;
                if (A()) {
                  var n = D().box;
                  ["placement", "reference-hidden", "escaped"].forEach(function(t) {
                    "placement" === t
                      ? n.setAttribute("data-placement", e.placement)
                      : e.attributes.popper["data-popper-" + t]
                      ? n.setAttribute("data-" + t, "")
                      : n.removeAttribute("data-" + t);
                  }),
                    (e.attributes.popper = {});
                }
              },
            },
          ];
        A() && c && f.push({ name: "arrow", options: { element: c, padding: 3 } }),
          f.push.apply(f, (null == n ? void 0 : n.modifiers) || []),
          (x.popperInstance = ct(u, O, Object.assign({}, n, { placement: r, onFirstUpdate: s, modifiers: f })));
      }
      function Q() {
        x.popperInstance && (x.popperInstance.destroy(), (x.popperInstance = null));
      }
      function Z() {
        return Ot(O.querySelectorAll("[data-tippy-root]"));
      }
      function tt(t) {
        x.clearDelayTimeouts(), t && C("onTrigger", [x, t]), N();
        var e = k(!0),
          r = S(),
          o = r[0],
          i = r[1];
        Pt.isTouch && "hold" === o && i && (e = i),
          e
            ? (n = setTimeout(function() {
                x.show();
              }, e))
            : x.show();
      }
      function et(t) {
        if ((x.clearDelayTimeouts(), C("onUntrigger", [x, t]), x.state.isVisible)) {
          if (
            !(
              x.props.trigger.indexOf("mouseenter") >= 0 &&
              x.props.trigger.indexOf("click") >= 0 &&
              ["mouseleave", "mousemove"].indexOf(t.type) >= 0 &&
              p
            )
          ) {
            var e = k(!1);
            e
              ? (r = setTimeout(function() {
                  x.state.isVisible && x.hide();
                }, e))
              : (o = requestAnimationFrame(function() {
                  x.hide();
                }));
          }
        } else W();
      }
    }
    function te(t, e) {
      void 0 === e && (e = {});
      var n = Nt.plugins.concat(e.plugins || []);
      document.addEventListener("touchstart", Vt, vt), window.addEventListener("blur", Ht);
      var r = Object.assign({}, e, { plugins: n }),
        o = jt(t).reduce(function(t, e) {
          var n = e && Zt(e, r);
          return n && t.push(n), t;
        }, []);
      return Lt(t) ? o[0] : o;
    }
    (te.defaultProps = Nt),
      (te.setDefaultProps = function(t) {
        Object.keys(t).forEach(function(e) {
          Nt[e] = t[e];
        });
      }),
      (te.currentInput = Pt);
    te.setDefaultProps({ render: Xt });
    var ee,
      ne,
      re,
      oe = te;
    n(26), n(57), n(59);
    console.log("webpack starterkit"),
      document.querySelector("#castello").addEventListener("click", function(t) {
        t.target.closest(".js-popover") && t.preventDefault();
      }),
      oe(".js-popover", {
        theme: "light-border",
        duration: 300,
        arrow: !0,
        appendTo: "parent",
        trigger: "click",
        hideOnClick: !0,
        animation: "scale",
        placement: "bottom",
        content: function(t) {
          var e = t.getAttribute("data-template");
          return document.getElementById(e).innerHTML;
        },
        allowHTML: !0,
      }),
      document.querySelectorAll(".popup-trigger") &&
        ((ee = document.querySelectorAll(".popup-trigger")),
        document.querySelector(".popup-modal__close"),
        (ne = document.querySelector(".body-blackout")),
        (re = document.querySelector("#castello")),
        ee.forEach(function(t) {
          t.addEventListener("click", function(e) {
            e.preventDefault();
            var n = t.dataset.popupTrigger,
              r = document.querySelector('[data-popup-modal="'.concat(n, '"]'));
            r.classList.add("is--visible"),
              re.classList.add("show-popup"),
              ne.classList.add("is-blacked-out"),
              r.querySelector(".popup-modal__close").addEventListener("click", function() {
                r.classList.remove("is--visible"),
                  re.classList.remove("show-popup"),
                  ne.classList.remove("is-blacked-out");
              }),
              ne.addEventListener("click", function() {
                r.classList.remove("is--visible"),
                  re.classList.remove("show-popup"),
                  ne.classList.remove("is-blacked-out");
              });
          });
        }));
  },
]);
//# sourceMappingURL=app.js.map
