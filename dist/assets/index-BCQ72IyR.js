(function() {
  const p = document.createElement("link").relList;
  if (p && p.supports && p.supports("modulepreload")) return;
  for (const g of document.querySelectorAll('link[rel="modulepreload"]')) r(g);
  new MutationObserver((g) => {
    for (const N of g) if (N.type === "childList") for (const R of N.addedNodes) R.tagName === "LINK" && R.rel === "modulepreload" && r(R);
  }).observe(document, { childList: true, subtree: true });
  function h(g) {
    const N = {};
    return g.integrity && (N.integrity = g.integrity), g.referrerPolicy && (N.referrerPolicy = g.referrerPolicy), g.crossOrigin === "use-credentials" ? N.credentials = "include" : g.crossOrigin === "anonymous" ? N.credentials = "omit" : N.credentials = "same-origin", N;
  }
  function r(g) {
    if (g.ep) return;
    g.ep = true;
    const N = h(g);
    fetch(g.href, N);
  }
})();
function mh(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var So = { exports: {} }, Ti = {};
var Cf;
function hh() {
  if (Cf) return Ti;
  Cf = 1;
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), p = /* @__PURE__ */ Symbol.for("react.fragment");
  function h(r, g, N) {
    var R = null;
    if (N !== void 0 && (R = "" + N), g.key !== void 0 && (R = "" + g.key), "key" in g) {
      N = {};
      for (var C in g) C !== "key" && (N[C] = g[C]);
    } else N = g;
    return g = N.ref, { $$typeof: o, type: r, key: R, ref: g !== void 0 ? g : null, props: N };
  }
  return Ti.Fragment = p, Ti.jsx = h, Ti.jsxs = h, Ti;
}
var Df;
function ph() {
  return Df || (Df = 1, So.exports = hh()), So.exports;
}
var s = ph(), wo = { exports: {} }, te = {};
var Uf;
function xh() {
  if (Uf) return te;
  Uf = 1;
  var o = /* @__PURE__ */ Symbol.for("react.transitional.element"), p = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), g = /* @__PURE__ */ Symbol.for("react.profiler"), N = /* @__PURE__ */ Symbol.for("react.consumer"), R = /* @__PURE__ */ Symbol.for("react.context"), C = /* @__PURE__ */ Symbol.for("react.forward_ref"), k = /* @__PURE__ */ Symbol.for("react.suspense"), v = /* @__PURE__ */ Symbol.for("react.memo"), U = /* @__PURE__ */ Symbol.for("react.lazy"), A = /* @__PURE__ */ Symbol.for("react.activity"), $ = Symbol.iterator;
  function J(m) {
    return m === null || typeof m != "object" ? null : (m = $ && m[$] || m["@@iterator"], typeof m == "function" ? m : null);
  }
  var Z = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ae = Object.assign, X = {};
  function pe(m, T, B) {
    this.props = m, this.context = T, this.refs = X, this.updater = B || Z;
  }
  pe.prototype.isReactComponent = {}, pe.prototype.setState = function(m, T) {
    if (typeof m != "object" && typeof m != "function" && m != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, m, T, "setState");
  }, pe.prototype.forceUpdate = function(m) {
    this.updater.enqueueForceUpdate(this, m, "forceUpdate");
  };
  function Te() {
  }
  Te.prototype = pe.prototype;
  function xe(m, T, B) {
    this.props = m, this.context = T, this.refs = X, this.updater = B || Z;
  }
  var fe = xe.prototype = new Te();
  fe.constructor = xe, ae(fe, pe.prototype), fe.isPureReactComponent = true;
  var he = Array.isArray;
  function se() {
  }
  var W = { H: null, A: null, T: null, S: null }, le = Object.prototype.hasOwnProperty;
  function Le(m, T, B) {
    var L = B.ref;
    return { $$typeof: o, type: m, key: T, ref: L !== void 0 ? L : null, props: B };
  }
  function ot(m, T) {
    return Le(m.type, T, m.props);
  }
  function Ne(m) {
    return typeof m == "object" && m !== null && m.$$typeof === o;
  }
  function Ee(m) {
    var T = { "=": "=0", ":": "=2" };
    return "$" + m.replace(/[=:]/g, function(B) {
      return T[B];
    });
  }
  var Pe = /\/+/g;
  function Xe(m, T) {
    return typeof m == "object" && m !== null && m.key != null ? Ee("" + m.key) : T.toString(36);
  }
  function Se(m) {
    switch (m.status) {
      case "fulfilled":
        return m.value;
      case "rejected":
        throw m.reason;
      default:
        switch (typeof m.status == "string" ? m.then(se, se) : (m.status = "pending", m.then(function(T) {
          m.status === "pending" && (m.status = "fulfilled", m.value = T);
        }, function(T) {
          m.status === "pending" && (m.status = "rejected", m.reason = T);
        })), m.status) {
          case "fulfilled":
            return m.value;
          case "rejected":
            throw m.reason;
        }
    }
    throw m;
  }
  function S(m, T, B, L, P) {
    var ee = typeof m;
    (ee === "undefined" || ee === "boolean") && (m = null);
    var ce = false;
    if (m === null) ce = true;
    else switch (ee) {
      case "bigint":
      case "string":
      case "number":
        ce = true;
        break;
      case "object":
        switch (m.$$typeof) {
          case o:
          case p:
            ce = true;
            break;
          case U:
            return ce = m._init, S(ce(m._payload), T, B, L, P);
        }
    }
    if (ce) return P = P(m), ce = L === "" ? "." + Xe(m, 0) : L, he(P) ? (B = "", ce != null && (B = ce.replace(Pe, "$&/") + "/"), S(P, T, B, "", function(bl) {
      return bl;
    })) : P != null && (Ne(P) && (P = ot(P, B + (P.key == null || m && m.key === P.key ? "" : ("" + P.key).replace(Pe, "$&/") + "/") + ce)), T.push(P)), 1;
    ce = 0;
    var Ze = L === "" ? "." : L + ":";
    if (he(m)) for (var De = 0; De < m.length; De++) L = m[De], ee = Ze + Xe(L, De), ce += S(L, T, B, ee, P);
    else if (De = J(m), typeof De == "function") for (m = De.call(m), De = 0; !(L = m.next()).done; ) L = L.value, ee = Ze + Xe(L, De++), ce += S(L, T, B, ee, P);
    else if (ee === "object") {
      if (typeof m.then == "function") return S(Se(m), T, B, L, P);
      throw T = String(m), Error("Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead.");
    }
    return ce;
  }
  function H(m, T, B) {
    if (m == null) return m;
    var L = [], P = 0;
    return S(m, L, "", "", function(ee) {
      return T.call(B, ee, P++);
    }), L;
  }
  function Q(m) {
    if (m._status === -1) {
      var T = m._result;
      T = T(), T.then(function(B) {
        (m._status === 0 || m._status === -1) && (m._status = 1, m._result = B);
      }, function(B) {
        (m._status === 0 || m._status === -1) && (m._status = 2, m._result = B);
      }), m._status === -1 && (m._status = 0, m._result = T);
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var ve = typeof reportError == "function" ? reportError : function(m) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var T = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof m == "object" && m !== null && typeof m.message == "string" ? String(m.message) : String(m), error: m });
      if (!window.dispatchEvent(T)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", m);
      return;
    }
    console.error(m);
  }, we = { map: H, forEach: function(m, T, B) {
    H(m, function() {
      T.apply(this, arguments);
    }, B);
  }, count: function(m) {
    var T = 0;
    return H(m, function() {
      T++;
    }), T;
  }, toArray: function(m) {
    return H(m, function(T) {
      return T;
    }) || [];
  }, only: function(m) {
    if (!Ne(m)) throw Error("React.Children.only expected to receive a single React element child.");
    return m;
  } };
  return te.Activity = A, te.Children = we, te.Component = pe, te.Fragment = h, te.Profiler = g, te.PureComponent = xe, te.StrictMode = r, te.Suspense = k, te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W, te.__COMPILER_RUNTIME = { __proto__: null, c: function(m) {
    return W.H.useMemoCache(m);
  } }, te.cache = function(m) {
    return function() {
      return m.apply(null, arguments);
    };
  }, te.cacheSignal = function() {
    return null;
  }, te.cloneElement = function(m, T, B) {
    if (m == null) throw Error("The argument must be a React element, but you passed " + m + ".");
    var L = ae({}, m.props), P = m.key;
    if (T != null) for (ee in T.key !== void 0 && (P = "" + T.key), T) !le.call(T, ee) || ee === "key" || ee === "__self" || ee === "__source" || ee === "ref" && T.ref === void 0 || (L[ee] = T[ee]);
    var ee = arguments.length - 2;
    if (ee === 1) L.children = B;
    else if (1 < ee) {
      for (var ce = Array(ee), Ze = 0; Ze < ee; Ze++) ce[Ze] = arguments[Ze + 2];
      L.children = ce;
    }
    return Le(m.type, P, L);
  }, te.createContext = function(m) {
    return m = { $$typeof: R, _currentValue: m, _currentValue2: m, _threadCount: 0, Provider: null, Consumer: null }, m.Provider = m, m.Consumer = { $$typeof: N, _context: m }, m;
  }, te.createElement = function(m, T, B) {
    var L, P = {}, ee = null;
    if (T != null) for (L in T.key !== void 0 && (ee = "" + T.key), T) le.call(T, L) && L !== "key" && L !== "__self" && L !== "__source" && (P[L] = T[L]);
    var ce = arguments.length - 2;
    if (ce === 1) P.children = B;
    else if (1 < ce) {
      for (var Ze = Array(ce), De = 0; De < ce; De++) Ze[De] = arguments[De + 2];
      P.children = Ze;
    }
    if (m && m.defaultProps) for (L in ce = m.defaultProps, ce) P[L] === void 0 && (P[L] = ce[L]);
    return Le(m, ee, P);
  }, te.createRef = function() {
    return { current: null };
  }, te.forwardRef = function(m) {
    return { $$typeof: C, render: m };
  }, te.isValidElement = Ne, te.lazy = function(m) {
    return { $$typeof: U, _payload: { _status: -1, _result: m }, _init: Q };
  }, te.memo = function(m, T) {
    return { $$typeof: v, type: m, compare: T === void 0 ? null : T };
  }, te.startTransition = function(m) {
    var T = W.T, B = {};
    W.T = B;
    try {
      var L = m(), P = W.S;
      P !== null && P(B, L), typeof L == "object" && L !== null && typeof L.then == "function" && L.then(se, ve);
    } catch (ee) {
      ve(ee);
    } finally {
      T !== null && B.types !== null && (T.types = B.types), W.T = T;
    }
  }, te.unstable_useCacheRefresh = function() {
    return W.H.useCacheRefresh();
  }, te.use = function(m) {
    return W.H.use(m);
  }, te.useActionState = function(m, T, B) {
    return W.H.useActionState(m, T, B);
  }, te.useCallback = function(m, T) {
    return W.H.useCallback(m, T);
  }, te.useContext = function(m) {
    return W.H.useContext(m);
  }, te.useDebugValue = function() {
  }, te.useDeferredValue = function(m, T) {
    return W.H.useDeferredValue(m, T);
  }, te.useEffect = function(m, T) {
    return W.H.useEffect(m, T);
  }, te.useEffectEvent = function(m) {
    return W.H.useEffectEvent(m);
  }, te.useId = function() {
    return W.H.useId();
  }, te.useImperativeHandle = function(m, T, B) {
    return W.H.useImperativeHandle(m, T, B);
  }, te.useInsertionEffect = function(m, T) {
    return W.H.useInsertionEffect(m, T);
  }, te.useLayoutEffect = function(m, T) {
    return W.H.useLayoutEffect(m, T);
  }, te.useMemo = function(m, T) {
    return W.H.useMemo(m, T);
  }, te.useOptimistic = function(m, T) {
    return W.H.useOptimistic(m, T);
  }, te.useReducer = function(m, T, B) {
    return W.H.useReducer(m, T, B);
  }, te.useRef = function(m) {
    return W.H.useRef(m);
  }, te.useState = function(m) {
    return W.H.useState(m);
  }, te.useSyncExternalStore = function(m, T, B) {
    return W.H.useSyncExternalStore(m, T, B);
  }, te.useTransition = function() {
    return W.H.useTransition();
  }, te.version = "19.2.3", te;
}
var Hf;
function To() {
  return Hf || (Hf = 1, wo.exports = xh()), wo.exports;
}
var w = To();
const Ci = mh(w);
var jo = { exports: {} }, Ri = {}, Ao = { exports: {} }, Eo = {};
var Bf;
function gh() {
  return Bf || (Bf = 1, (function(o) {
    function p(S, H) {
      var Q = S.length;
      S.push(H);
      e: for (; 0 < Q; ) {
        var ve = Q - 1 >>> 1, we = S[ve];
        if (0 < g(we, H)) S[ve] = H, S[Q] = we, Q = ve;
        else break e;
      }
    }
    function h(S) {
      return S.length === 0 ? null : S[0];
    }
    function r(S) {
      if (S.length === 0) return null;
      var H = S[0], Q = S.pop();
      if (Q !== H) {
        S[0] = Q;
        e: for (var ve = 0, we = S.length, m = we >>> 1; ve < m; ) {
          var T = 2 * (ve + 1) - 1, B = S[T], L = T + 1, P = S[L];
          if (0 > g(B, Q)) L < we && 0 > g(P, B) ? (S[ve] = P, S[L] = Q, ve = L) : (S[ve] = B, S[T] = Q, ve = T);
          else if (L < we && 0 > g(P, Q)) S[ve] = P, S[L] = Q, ve = L;
          else break e;
        }
      }
      return H;
    }
    function g(S, H) {
      var Q = S.sortIndex - H.sortIndex;
      return Q !== 0 ? Q : S.id - H.id;
    }
    if (o.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var N = performance;
      o.unstable_now = function() {
        return N.now();
      };
    } else {
      var R = Date, C = R.now();
      o.unstable_now = function() {
        return R.now() - C;
      };
    }
    var k = [], v = [], U = 1, A = null, $ = 3, J = false, Z = false, ae = false, X = false, pe = typeof setTimeout == "function" ? setTimeout : null, Te = typeof clearTimeout == "function" ? clearTimeout : null, xe = typeof setImmediate < "u" ? setImmediate : null;
    function fe(S) {
      for (var H = h(v); H !== null; ) {
        if (H.callback === null) r(v);
        else if (H.startTime <= S) r(v), H.sortIndex = H.expirationTime, p(k, H);
        else break;
        H = h(v);
      }
    }
    function he(S) {
      if (ae = false, fe(S), !Z) if (h(k) !== null) Z = true, se || (se = true, Ee());
      else {
        var H = h(v);
        H !== null && Se(he, H.startTime - S);
      }
    }
    var se = false, W = -1, le = 5, Le = -1;
    function ot() {
      return X ? true : !(o.unstable_now() - Le < le);
    }
    function Ne() {
      if (X = false, se) {
        var S = o.unstable_now();
        Le = S;
        var H = true;
        try {
          e: {
            Z = false, ae && (ae = false, Te(W), W = -1), J = true;
            var Q = $;
            try {
              t: {
                for (fe(S), A = h(k); A !== null && !(A.expirationTime > S && ot()); ) {
                  var ve = A.callback;
                  if (typeof ve == "function") {
                    A.callback = null, $ = A.priorityLevel;
                    var we = ve(A.expirationTime <= S);
                    if (S = o.unstable_now(), typeof we == "function") {
                      A.callback = we, fe(S), H = true;
                      break t;
                    }
                    A === h(k) && r(k), fe(S);
                  } else r(k);
                  A = h(k);
                }
                if (A !== null) H = true;
                else {
                  var m = h(v);
                  m !== null && Se(he, m.startTime - S), H = false;
                }
              }
              break e;
            } finally {
              A = null, $ = Q, J = false;
            }
            H = void 0;
          }
        } finally {
          H ? Ee() : se = false;
        }
      }
    }
    var Ee;
    if (typeof xe == "function") Ee = function() {
      xe(Ne);
    };
    else if (typeof MessageChannel < "u") {
      var Pe = new MessageChannel(), Xe = Pe.port2;
      Pe.port1.onmessage = Ne, Ee = function() {
        Xe.postMessage(null);
      };
    } else Ee = function() {
      pe(Ne, 0);
    };
    function Se(S, H) {
      W = pe(function() {
        S(o.unstable_now());
      }, H);
    }
    o.unstable_IdlePriority = 5, o.unstable_ImmediatePriority = 1, o.unstable_LowPriority = 4, o.unstable_NormalPriority = 3, o.unstable_Profiling = null, o.unstable_UserBlockingPriority = 2, o.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, o.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : le = 0 < S ? Math.floor(1e3 / S) : 5;
    }, o.unstable_getCurrentPriorityLevel = function() {
      return $;
    }, o.unstable_next = function(S) {
      switch ($) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = $;
      }
      var Q = $;
      $ = H;
      try {
        return S();
      } finally {
        $ = Q;
      }
    }, o.unstable_requestPaint = function() {
      X = true;
    }, o.unstable_runWithPriority = function(S, H) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var Q = $;
      $ = S;
      try {
        return H();
      } finally {
        $ = Q;
      }
    }, o.unstable_scheduleCallback = function(S, H, Q) {
      var ve = o.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? ve + Q : ve) : Q = ve, S) {
        case 1:
          var we = -1;
          break;
        case 2:
          we = 250;
          break;
        case 5:
          we = 1073741823;
          break;
        case 4:
          we = 1e4;
          break;
        default:
          we = 5e3;
      }
      return we = Q + we, S = { id: U++, callback: H, priorityLevel: S, startTime: Q, expirationTime: we, sortIndex: -1 }, Q > ve ? (S.sortIndex = Q, p(v, S), h(k) === null && S === h(v) && (ae ? (Te(W), W = -1) : ae = true, Se(he, Q - ve))) : (S.sortIndex = we, p(k, S), Z || J || (Z = true, se || (se = true, Ee()))), S;
    }, o.unstable_shouldYield = ot, o.unstable_wrapCallback = function(S) {
      var H = $;
      return function() {
        var Q = $;
        $ = H;
        try {
          return S.apply(this, arguments);
        } finally {
          $ = Q;
        }
      };
    };
  })(Eo)), Eo;
}
var Yf;
function bh() {
  return Yf || (Yf = 1, Ao.exports = gh()), Ao.exports;
}
var Mo = { exports: {} }, gt = {};
var Lf;
function yh() {
  if (Lf) return gt;
  Lf = 1;
  var o = To();
  function p(k) {
    var v = "https://react.dev/errors/" + k;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var U = 2; U < arguments.length; U++) v += "&args[]=" + encodeURIComponent(arguments[U]);
    }
    return "Minified React error #" + k + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function h() {
  }
  var r = { d: { f: h, r: function() {
    throw Error(p(522));
  }, D: h, C: h, L: h, m: h, X: h, S: h, M: h }, p: 0, findDOMNode: null }, g = /* @__PURE__ */ Symbol.for("react.portal");
  function N(k, v, U) {
    var A = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: g, key: A == null ? null : "" + A, children: k, containerInfo: v, implementation: U };
  }
  var R = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function C(k, v) {
    if (k === "font") return "";
    if (typeof v == "string") return v === "use-credentials" ? v : "";
  }
  return gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, gt.createPortal = function(k, v) {
    var U = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11) throw Error(p(299));
    return N(k, v, null, U);
  }, gt.flushSync = function(k) {
    var v = R.T, U = r.p;
    try {
      if (R.T = null, r.p = 2, k) return k();
    } finally {
      R.T = v, r.p = U, r.d.f();
    }
  }, gt.preconnect = function(k, v) {
    typeof k == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, r.d.C(k, v));
  }, gt.prefetchDNS = function(k) {
    typeof k == "string" && r.d.D(k);
  }, gt.preinit = function(k, v) {
    if (typeof k == "string" && v && typeof v.as == "string") {
      var U = v.as, A = C(U, v.crossOrigin), $ = typeof v.integrity == "string" ? v.integrity : void 0, J = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      U === "style" ? r.d.S(k, typeof v.precedence == "string" ? v.precedence : void 0, { crossOrigin: A, integrity: $, fetchPriority: J }) : U === "script" && r.d.X(k, { crossOrigin: A, integrity: $, fetchPriority: J, nonce: typeof v.nonce == "string" ? v.nonce : void 0 });
    }
  }, gt.preinitModule = function(k, v) {
    if (typeof k == "string") if (typeof v == "object" && v !== null) {
      if (v.as == null || v.as === "script") {
        var U = C(v.as, v.crossOrigin);
        r.d.M(k, { crossOrigin: U, integrity: typeof v.integrity == "string" ? v.integrity : void 0, nonce: typeof v.nonce == "string" ? v.nonce : void 0 });
      }
    } else v == null && r.d.M(k);
  }, gt.preload = function(k, v) {
    if (typeof k == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var U = v.as, A = C(U, v.crossOrigin);
      r.d.L(k, U, { crossOrigin: A, integrity: typeof v.integrity == "string" ? v.integrity : void 0, nonce: typeof v.nonce == "string" ? v.nonce : void 0, type: typeof v.type == "string" ? v.type : void 0, fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0, referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0, imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0, imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0, media: typeof v.media == "string" ? v.media : void 0 });
    }
  }, gt.preloadModule = function(k, v) {
    if (typeof k == "string") if (v) {
      var U = C(v.as, v.crossOrigin);
      r.d.m(k, { as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0, crossOrigin: U, integrity: typeof v.integrity == "string" ? v.integrity : void 0 });
    } else r.d.m(k);
  }, gt.requestFormReset = function(k) {
    r.d.r(k);
  }, gt.unstable_batchedUpdates = function(k, v) {
    return k(v);
  }, gt.useFormState = function(k, v, U) {
    return R.H.useFormState(k, v, U);
  }, gt.useFormStatus = function() {
    return R.H.useHostTransitionStatus();
  }, gt.version = "19.2.3", gt;
}
var Gf;
function vh() {
  if (Gf) return Mo.exports;
  Gf = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
    } catch (p) {
      console.error(p);
    }
  }
  return o(), Mo.exports = yh(), Mo.exports;
}
var qf;
function _h() {
  if (qf) return Ri;
  qf = 1;
  var o = bh(), p = To(), h = vh();
  function r(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++) t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function g(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function N(e) {
    var t = e, a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function R(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function C(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function k(e) {
    if (N(e) !== e) throw Error(r(188));
  }
  function v(e) {
    var t = e.alternate;
    if (!t) {
      if (t = N(e), t === null) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var a = e, l = t; ; ) {
      var n = a.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (l = n.return, l !== null) {
          a = l;
          continue;
        }
        break;
      }
      if (n.child === i.child) {
        for (i = n.child; i; ) {
          if (i === a) return k(n), e;
          if (i === l) return k(n), t;
          i = i.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== l.return) a = n, l = i;
      else {
        for (var c = false, u = n.child; u; ) {
          if (u === a) {
            c = true, a = n, l = i;
            break;
          }
          if (u === l) {
            c = true, l = n, a = i;
            break;
          }
          u = u.sibling;
        }
        if (!c) {
          for (u = i.child; u; ) {
            if (u === a) {
              c = true, a = i, l = n;
              break;
            }
            if (u === l) {
              c = true, l = i, a = n;
              break;
            }
            u = u.sibling;
          }
          if (!c) throw Error(r(189));
        }
      }
      if (a.alternate !== l) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? e : t;
  }
  function U(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = U(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var A = Object.assign, $ = /* @__PURE__ */ Symbol.for("react.element"), J = /* @__PURE__ */ Symbol.for("react.transitional.element"), Z = /* @__PURE__ */ Symbol.for("react.portal"), ae = /* @__PURE__ */ Symbol.for("react.fragment"), X = /* @__PURE__ */ Symbol.for("react.strict_mode"), pe = /* @__PURE__ */ Symbol.for("react.profiler"), Te = /* @__PURE__ */ Symbol.for("react.consumer"), xe = /* @__PURE__ */ Symbol.for("react.context"), fe = /* @__PURE__ */ Symbol.for("react.forward_ref"), he = /* @__PURE__ */ Symbol.for("react.suspense"), se = /* @__PURE__ */ Symbol.for("react.suspense_list"), W = /* @__PURE__ */ Symbol.for("react.memo"), le = /* @__PURE__ */ Symbol.for("react.lazy"), Le = /* @__PURE__ */ Symbol.for("react.activity"), ot = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Ne = Symbol.iterator;
  function Ee(e) {
    return e === null || typeof e != "object" ? null : (e = Ne && e[Ne] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Pe = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Xe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.$$typeof === Pe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ae:
        return "Fragment";
      case pe:
        return "Profiler";
      case X:
        return "StrictMode";
      case he:
        return "Suspense";
      case se:
        return "SuspenseList";
      case Le:
        return "Activity";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Z:
        return "Portal";
      case xe:
        return e.displayName || "Context";
      case Te:
        return (e._context.displayName || "Context") + ".Consumer";
      case fe:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case W:
        return t = e.displayName || null, t !== null ? t : Xe(e.type) || "Memo";
      case le:
        t = e._payload, e = e._init;
        try {
          return Xe(e(t));
        } catch {
        }
    }
    return null;
  }
  var Se = Array.isArray, S = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = { pending: false, data: null, method: null, action: null }, ve = [], we = -1;
  function m(e) {
    return { current: e };
  }
  function T(e) {
    0 > we || (e.current = ve[we], ve[we] = null, we--);
  }
  function B(e, t) {
    we++, ve[we] = e.current, e.current = t;
  }
  var L = m(null), P = m(null), ee = m(null), ce = m(null);
  function Ze(e, t) {
    switch (B(ee, t), B(P, e), B(L, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? af(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI) t = af(t), e = lf(t, e);
        else switch (e) {
          case "svg":
            e = 1;
            break;
          case "math":
            e = 2;
            break;
          default:
            e = 0;
        }
    }
    T(L), B(L, e);
  }
  function De() {
    T(L), T(P), T(ee);
  }
  function bl(e) {
    e.memoizedState !== null && B(ce, e);
    var t = L.current, a = lf(t, e.type);
    t !== a && (B(P, e), B(L, a));
  }
  function yl(e) {
    P.current === e && (T(L), T(P)), ce.current === e && (T(ce), Ei._currentValue = Q);
  }
  var On, Cn;
  function ya(e) {
    if (On === void 0) try {
      throw Error();
    } catch (a) {
      var t = a.stack.trim().match(/\n( *(at )?)/);
      On = t && t[1] || "", Cn = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + On + e + Cn;
  }
  var Kl = false;
  function Dn(e, t) {
    if (!e || Kl) return "";
    Kl = true;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = { DetermineComponentFrameRoot: function() {
        try {
          if (t) {
            var z = function() {
              throw Error();
            };
            if (Object.defineProperty(z.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(z, []);
              } catch (j) {
                var _ = j;
              }
              Reflect.construct(e, [], z);
            } else {
              try {
                z.call();
              } catch (j) {
                _ = j;
              }
              e.call(z.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (j) {
              _ = j;
            }
            (z = e()) && typeof z.catch == "function" && z.catch(function() {
            });
          }
        } catch (j) {
          if (j && _ && typeof j.stack == "string") return [j.stack, _.stack];
        }
        return [null, null];
      } };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
      n && n.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var i = l.DetermineComponentFrameRoot(), c = i[0], u = i[1];
      if (c && u) {
        var d = c.split(`
`), y = u.split(`
`);
        for (n = l = 0; l < d.length && !d[l].includes("DetermineComponentFrameRoot"); ) l++;
        for (; n < y.length && !y[n].includes("DetermineComponentFrameRoot"); ) n++;
        if (l === d.length || n === y.length) for (l = d.length - 1, n = y.length - 1; 1 <= l && 0 <= n && d[l] !== y[n]; ) n--;
        for (; 1 <= l && 0 <= n; l--, n--) if (d[l] !== y[n]) {
          if (l !== 1 || n !== 1) do
            if (l--, n--, 0 > n || d[l] !== y[n]) {
              var E = `
` + d[l].replace(" at new ", " at ");
              return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), E;
            }
          while (1 <= l && 0 <= n);
          break;
        }
      }
    } finally {
      Kl = false, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? ya(a) : "";
  }
  function Bi(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ya(e.type);
      case 16:
        return ya("Lazy");
      case 13:
        return e.child !== t && t !== null ? ya("Suspense Fallback") : ya("Suspense");
      case 19:
        return ya("SuspenseList");
      case 0:
      case 15:
        return Dn(e.type, false);
      case 11:
        return Dn(e.type.render, false);
      case 1:
        return Dn(e.type, true);
      case 31:
        return ya("Activity");
      default:
        return "";
    }
  }
  function Yi(e) {
    try {
      var t = "", a = null;
      do
        t += Bi(e, a), a = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var vl = Object.prototype.hasOwnProperty, Un = o.unstable_scheduleCallback, Za = o.unstable_cancelCallback, _l = o.unstable_shouldYield, Li = o.unstable_requestPaint, bt = o.unstable_now, Hn = o.unstable_getCurrentPriorityLevel, va = o.unstable_ImmediatePriority, $l = o.unstable_UserBlockingPriority, Rt = o.unstable_NormalPriority, Bn = o.unstable_LowPriority, Gi = o.unstable_IdlePriority, qi = o.log, Wl = o.unstable_setDisableYieldValue, Gt = null, nt = null;
  function rt(e) {
    if (typeof qi == "function" && Wl(e), nt && typeof nt.setStrictMode == "function") try {
      nt.setStrictMode(Gt, e);
    } catch {
    }
  }
  var Ke = Math.clz32 ? Math.clz32 : Ln, Yn = Math.log, Qa = Math.LN2;
  function Ln(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Yn(e) / Qa | 0) | 0;
  }
  var Va = 256, it = 262144, Ja = 4194304;
  function Pt(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function ra(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var n = 0, i = e.suspendedLanes, c = e.pingedLanes;
    e = e.warmLanes;
    var u = l & 134217727;
    return u !== 0 ? (l = u & ~i, l !== 0 ? n = Pt(l) : (c &= u, c !== 0 ? n = Pt(c) : a || (a = u & ~e, a !== 0 && (n = Pt(a))))) : (u = l & ~i, u !== 0 ? n = Pt(u) : c !== 0 ? n = Pt(c) : a || (a = l & ~e, a !== 0 && (n = Pt(a)))), n === 0 ? 0 : t !== 0 && t !== n && (t & i) === 0 && (i = n & -n, a = t & -t, i >= a || i === 32 && (a & 4194048) !== 0) ? t : n;
  }
  function da(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Gn(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Xi() {
    var e = Ja;
    return Ja <<= 1, (Ja & 62914560) === 0 && (Ja = 4194304), e;
  }
  function Nl(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function Sl(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function yc(e, t, a, l, n, i) {
    var c = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var u = e.entanglements, d = e.expirationTimes, y = e.hiddenUpdates;
    for (a = c & ~a; 0 < a; ) {
      var E = 31 - Ke(a), z = 1 << E;
      u[E] = 0, d[E] = -1;
      var _ = y[E];
      if (_ !== null) for (y[E] = null, E = 0; E < _.length; E++) {
        var j = _[E];
        j !== null && (j.lane &= -536870913);
      }
      a &= ~z;
    }
    l !== 0 && Zi(e, l, 0), i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(c & ~t));
  }
  function Zi(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - Ke(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 261930;
  }
  function Qi(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var l = 31 - Ke(a), n = 1 << l;
      n & t | e[l] & t && (e[l] |= t), a &= ~n;
    }
  }
  function wl(e, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : _a(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function _a(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function st(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ka() {
    var e = H.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Ef(e.type));
  }
  function St(e, t) {
    var a = H.p;
    try {
      return H.p = e, t();
    } finally {
      H.p = a;
    }
  }
  var wt = Math.random().toString(36).slice(2), Oe = "__reactFiber$" + wt, dt = "__reactProps$" + wt, fa = "__reactContainer$" + wt, Fl = "__reactEvents$" + wt, Vi = "__reactListeners$" + wt, ft = "__reactHandles$" + wt, Ji = "__reactResources$" + wt, $a = "__reactMarker$" + wt;
  function Il(e) {
    delete e[Oe], delete e[dt], delete e[Fl], delete e[Vi], delete e[ft];
  }
  function qt(e) {
    var t = e[Oe];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[fa] || a[Oe]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null) for (e = df(e); e !== null; ) {
          if (a = e[Oe]) return a;
          e = df(e);
        }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function ea(e) {
    if (e = e[Oe] || e[fa]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function ta(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function jl(e) {
    var t = e[Ji];
    return t || (t = e[Ji] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Qe(e) {
    e[$a] = true;
  }
  var Ki = /* @__PURE__ */ new Set(), Al = {};
  function aa(e, t) {
    la(e, t), la(e + "Capture", t);
  }
  function la(e, t) {
    for (Al[e] = t, e = 0; e < t.length; e++) Ki.add(t[e]);
  }
  var $i = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Wi = {}, Fi = {};
  function vc(e) {
    return vl.call(Fi, e) ? true : vl.call(Wi, e) ? false : $i.test(e) ? Fi[e] = true : (Wi[e] = true, false);
  }
  function Pl(e, t, a) {
    if (vc(t)) if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
          e.removeAttribute(t);
          return;
        case "boolean":
          var l = t.toLowerCase().slice(0, 5);
          if (l !== "data-" && l !== "aria-") {
            e.removeAttribute(t);
            return;
          }
      }
      e.setAttribute(t, "" + a);
    }
  }
  function en(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function na(e, t, a, l) {
    if (l === null) e.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + l);
    }
  }
  function jt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Ii(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function _c(e, t, a) {
    var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var n = l.get, i = l.set;
      return Object.defineProperty(e, t, { configurable: true, get: function() {
        return n.call(this);
      }, set: function(c) {
        a = "" + c, i.call(this, c);
      } }), Object.defineProperty(e, t, { enumerable: l.enumerable }), { getValue: function() {
        return a;
      }, setValue: function(c) {
        a = "" + c;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function qn(e) {
    if (!e._valueTracker) {
      var t = Ii(e) ? "checked" : "value";
      e._valueTracker = _c(e, t, "" + e[t]);
    }
  }
  function O(e) {
    if (!e) return false;
    var t = e._valueTracker;
    if (!t) return true;
    var a = t.getValue(), l = "";
    return e && (l = Ii(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (t.setValue(e), true) : false;
  }
  function D(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var F = /[\n"\\]/g;
  function I(e) {
    return e.replace(F, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Be(e, t, a, l, n, i, c, u) {
    e.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + jt(t)) : e.value !== "" + jt(t) && (e.value = "" + jt(t)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"), t != null ? ct(e, c, jt(t)) : a != null ? ct(e, c, jt(a)) : l != null && e.removeAttribute("value"), n == null && i != null && (e.defaultChecked = !!i), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? e.name = "" + jt(u) : e.removeAttribute("name");
  }
  function et(e, t, a, l, n, i, c, u) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || a != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        qn(e);
        return;
      }
      a = a != null ? "" + jt(a) : "", t = t != null ? "" + jt(t) : a, u || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? n, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = u ? e.checked : !!l, e.defaultChecked = !!l, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c), qn(e);
  }
  function ct(e, t, a) {
    t === "number" && D(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Ce(e, t, a, l) {
    if (e = e.options, t) {
      t = {};
      for (var n = 0; n < a.length; n++) t["$" + a[n]] = true;
      for (a = 0; a < e.length; a++) n = t.hasOwnProperty("$" + e[a].value), e[a].selected !== n && (e[a].selected = n), n && l && (e[a].defaultSelected = true);
    } else {
      for (a = "" + jt(a), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === a) {
          e[n].selected = true, l && (e[n].defaultSelected = true);
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = true);
    }
  }
  function El(e, t, a) {
    if (t != null && (t = "" + jt(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + jt(a) : "";
  }
  function Xn(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(r(92));
        if (Se(l)) {
          if (1 < l.length) throw Error(r(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), t = a;
    }
    a = jt(t), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l), qn(e);
  }
  function Xt(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var yt = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function ia(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || yt.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function Na(e, t, a) {
    if (t != null && typeof t != "object") throw Error(r(62));
    if (e = e.style, a != null) {
      for (var l in a) !a.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var n in t) l = t[n], t.hasOwnProperty(n) && a[n] !== l && ia(e, n, l);
    } else for (var i in t) t.hasOwnProperty(i) && ia(e, i, t[i]);
  }
  function Zn(e) {
    if (e.indexOf("-") === -1) return false;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var ar = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), Nc = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ml(e) {
    return Nc.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function tt() {
  }
  var vt = null;
  function kl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Sa = null, wa = null;
  function ma(e) {
    var t = ea(e);
    if (t && (e = t.stateNode)) {
      var a = e[dt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Be(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), t = a.name, a.type === "radio" && t != null) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll('input[name="' + I("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var n = l[dt] || null;
                if (!n) throw Error(r(90));
                Be(l, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name);
              }
            }
            for (t = 0; t < a.length; t++) l = a[t], l.form === e.form && O(l);
          }
          break e;
        case "textarea":
          El(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && Ce(e, !!a.multiple, t, false);
      }
    }
  }
  var Qn = false;
  function zl(e, t, a) {
    if (Qn) return e(t, a);
    Qn = true;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Qn = false, (Sa !== null || wa !== null) && (Ys(), Sa && (t = Sa, e = wa, wa = Sa = null, ma(t), e))) for (t = 0; t < e.length; t++) ma(e[t]);
    }
  }
  function ja(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[dt] || null;
    if (l === null) return null;
    a = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = false;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(r(231, t, typeof a));
    return a;
  }
  var _t = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Aa = false;
  if (_t) try {
    var Ea = {};
    Object.defineProperty(Ea, "passive", { get: function() {
      Aa = true;
    } }), window.addEventListener("test", Ea, Ea), window.removeEventListener("test", Ea, Ea);
  } catch {
    Aa = false;
  }
  var ha = null, Sc = null, Pi = null;
  function lr() {
    if (Pi) return Pi;
    var e, t = Sc, a = t.length, l, n = "value" in ha ? ha.value : ha.textContent, i = n.length;
    for (e = 0; e < a && t[e] === n[e]; e++) ;
    var c = a - e;
    for (l = 1; l <= c && t[a - l] === n[i - l]; l++) ;
    return Pi = n.slice(e, 1 < l ? 1 - l : void 0);
  }
  function es(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function ts() {
    return true;
  }
  function nr() {
    return false;
  }
  function At(e) {
    function t(a, l, n, i, c) {
      this._reactName = a, this._targetInst = n, this.type = l, this.nativeEvent = i, this.target = c, this.currentTarget = null;
      for (var u in e) e.hasOwnProperty(u) && (a = e[u], this[u] = a ? a(i) : i[u]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === false) ? ts : nr, this.isPropagationStopped = nr, this;
    }
    return A(t.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var a = this.nativeEvent;
      a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = false), this.isDefaultPrevented = ts);
    }, stopPropagation: function() {
      var a = this.nativeEvent;
      a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = true), this.isPropagationStopped = ts);
    }, persist: function() {
    }, isPersistent: ts }), t;
  }
  var Tl = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, as = At(Tl), Vn = A({}, Tl, { view: 0, detail: 0 }), dm = At(Vn), wc, jc, Jn, ls = A({}, Vn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ec, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Jn && (Jn && e.type === "mousemove" ? (wc = e.screenX - Jn.screenX, jc = e.screenY - Jn.screenY) : jc = wc = 0, Jn = e), wc);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : jc;
  } }), ir = At(ls), fm = A({}, ls, { dataTransfer: 0 }), mm = At(fm), hm = A({}, Vn, { relatedTarget: 0 }), Ac = At(hm), pm = A({}, Tl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), xm = At(pm), gm = A({}, Tl, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), bm = At(gm), ym = A({}, Tl, { data: 0 }), sr = At(ym), vm = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, _m = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Nm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Sm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Nm[e]) ? !!t[e] : false;
  }
  function Ec() {
    return Sm;
  }
  var wm = A({}, Vn, { key: function(e) {
    if (e.key) {
      var t = vm[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = es(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? _m[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ec, charCode: function(e) {
    return e.type === "keypress" ? es(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? es(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), jm = At(wm), Am = A({}, ls, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), cr = At(Am), Em = A({}, Vn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ec }), Mm = At(Em), km = A({}, Tl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), zm = At(km), Tm = A({}, ls, { deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  }, deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), Rm = At(Tm), Om = A({}, Tl, { newState: 0, oldState: 0 }), Cm = At(Om), Dm = [9, 13, 27, 32], Mc = _t && "CompositionEvent" in window, Kn = null;
  _t && "documentMode" in document && (Kn = document.documentMode);
  var Um = _t && "TextEvent" in window && !Kn, ur = _t && (!Mc || Kn && 8 < Kn && 11 >= Kn), or = " ", rr = false;
  function dr(e, t) {
    switch (e) {
      case "keyup":
        return Dm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function fr(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var tn = false;
  function Hm(e, t) {
    switch (e) {
      case "compositionend":
        return fr(t);
      case "keypress":
        return t.which !== 32 ? null : (rr = true, or);
      case "textInput":
        return e = t.data, e === or && rr ? null : e;
      default:
        return null;
    }
  }
  function Bm(e, t) {
    if (tn) return e === "compositionend" || !Mc && dr(e, t) ? (e = lr(), Pi = Sc = ha = null, tn = false, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ur && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Ym = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function mr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Ym[e.type] : t === "textarea";
  }
  function hr(e, t, a, l) {
    Sa ? wa ? wa.push(l) : wa = [l] : Sa = l, t = Vs(t, "onChange"), 0 < t.length && (a = new as("onChange", "change", null, a, l), e.push({ event: a, listeners: t }));
  }
  var $n = null, Wn = null;
  function Lm(e) {
    W0(e, 0);
  }
  function ns(e) {
    var t = ta(e);
    if (O(t)) return e;
  }
  function pr(e, t) {
    if (e === "change") return t;
  }
  var xr = false;
  if (_t) {
    var kc;
    if (_t) {
      var zc = "oninput" in document;
      if (!zc) {
        var gr = document.createElement("div");
        gr.setAttribute("oninput", "return;"), zc = typeof gr.oninput == "function";
      }
      kc = zc;
    } else kc = false;
    xr = kc && (!document.documentMode || 9 < document.documentMode);
  }
  function br() {
    $n && ($n.detachEvent("onpropertychange", yr), Wn = $n = null);
  }
  function yr(e) {
    if (e.propertyName === "value" && ns(Wn)) {
      var t = [];
      hr(t, Wn, e, kl(e)), zl(Lm, t);
    }
  }
  function Gm(e, t, a) {
    e === "focusin" ? (br(), $n = t, Wn = a, $n.attachEvent("onpropertychange", yr)) : e === "focusout" && br();
  }
  function qm(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ns(Wn);
  }
  function Xm(e, t) {
    if (e === "click") return ns(t);
  }
  function Zm(e, t) {
    if (e === "input" || e === "change") return ns(t);
  }
  function Qm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ot = typeof Object.is == "function" ? Object.is : Qm;
  function Fn(e, t) {
    if (Ot(e, t)) return true;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
    var a = Object.keys(e), l = Object.keys(t);
    if (a.length !== l.length) return false;
    for (l = 0; l < a.length; l++) {
      var n = a[l];
      if (!vl.call(t, n) || !Ot(e[n], t[n])) return false;
    }
    return true;
  }
  function vr(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function _r(e, t) {
    var a = vr(e);
    e = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (l = e + a.textContent.length, e <= t && l >= t) return { node: a, offset: t - e };
        e = l;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = vr(a);
    }
  }
  function Nr(e, t) {
    return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Nr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
  }
  function Sr(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = D(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = false;
      }
      if (a) e = t.contentWindow;
      else break;
      t = D(e.document);
    }
    return t;
  }
  function Tc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Vm = _t && "documentMode" in document && 11 >= document.documentMode, an = null, Rc = null, In = null, Oc = false;
  function wr(e, t, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Oc || an == null || an !== D(l) || (l = an, "selectionStart" in l && Tc(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = { anchorNode: l.anchorNode, anchorOffset: l.anchorOffset, focusNode: l.focusNode, focusOffset: l.focusOffset }), In && Fn(In, l) || (In = l, l = Vs(Rc, "onSelect"), 0 < l.length && (t = new as("onSelect", "select", null, t, a), e.push({ event: t, listeners: l }), t.target = an)));
  }
  function Rl(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var ln = { animationend: Rl("Animation", "AnimationEnd"), animationiteration: Rl("Animation", "AnimationIteration"), animationstart: Rl("Animation", "AnimationStart"), transitionrun: Rl("Transition", "TransitionRun"), transitionstart: Rl("Transition", "TransitionStart"), transitioncancel: Rl("Transition", "TransitionCancel"), transitionend: Rl("Transition", "TransitionEnd") }, Cc = {}, jr = {};
  _t && (jr = document.createElement("div").style, "AnimationEvent" in window || (delete ln.animationend.animation, delete ln.animationiteration.animation, delete ln.animationstart.animation), "TransitionEvent" in window || delete ln.transitionend.transition);
  function Ol(e) {
    if (Cc[e]) return Cc[e];
    if (!ln[e]) return e;
    var t = ln[e], a;
    for (a in t) if (t.hasOwnProperty(a) && a in jr) return Cc[e] = t[a];
    return e;
  }
  var Ar = Ol("animationend"), Er = Ol("animationiteration"), Mr = Ol("animationstart"), Jm = Ol("transitionrun"), Km = Ol("transitionstart"), $m = Ol("transitioncancel"), kr = Ol("transitionend"), zr = /* @__PURE__ */ new Map(), Dc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Dc.push("scrollEnd");
  function sa(e, t) {
    zr.set(e, t), aa(t, [e]);
  }
  var is = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e), error: e });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, Zt = [], nn = 0, Uc = 0;
  function ss() {
    for (var e = nn, t = Uc = nn = 0; t < e; ) {
      var a = Zt[t];
      Zt[t++] = null;
      var l = Zt[t];
      Zt[t++] = null;
      var n = Zt[t];
      Zt[t++] = null;
      var i = Zt[t];
      if (Zt[t++] = null, l !== null && n !== null) {
        var c = l.pending;
        c === null ? n.next = n : (n.next = c.next, c.next = n), l.pending = n;
      }
      i !== 0 && Tr(a, n, i);
    }
  }
  function cs(e, t, a, l) {
    Zt[nn++] = e, Zt[nn++] = t, Zt[nn++] = a, Zt[nn++] = l, Uc |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function Hc(e, t, a, l) {
    return cs(e, t, a, l), us(e);
  }
  function Cl(e, t) {
    return cs(e, null, null, t), us(e);
  }
  function Tr(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var n = false, i = e.return; i !== null; ) i.childLanes |= a, l = i.alternate, l !== null && (l.childLanes |= a), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (n = true)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, n && t !== null && (n = 31 - Ke(a), e = i.hiddenUpdates, l = e[n], l === null ? e[n] = [t] : l.push(t), t.lane = a | 536870912), i) : null;
  }
  function us(e) {
    if (50 < vi) throw vi = 0, Vu = null, Error(r(185));
    for (var t = e.return; t !== null; ) e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var sn = {};
  function Wm(e, t, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ct(e, t, a, l) {
    return new Wm(e, t, a, l);
  }
  function Bc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Ma(e, t) {
    var a = e.alternate;
    return a === null ? (a = Ct(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function Rr(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), e;
  }
  function os(e, t, a, l, n, i) {
    var c = 0;
    if (l = e, typeof e == "function") Bc(e) && (c = 1);
    else if (typeof e == "string") c = th(e, a, L.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else e: switch (e) {
      case Le:
        return e = Ct(31, a, t, n), e.elementType = Le, e.lanes = i, e;
      case ae:
        return Dl(a.children, n, i, t);
      case X:
        c = 8, n |= 24;
        break;
      case pe:
        return e = Ct(12, a, t, n | 2), e.elementType = pe, e.lanes = i, e;
      case he:
        return e = Ct(13, a, t, n), e.elementType = he, e.lanes = i, e;
      case se:
        return e = Ct(19, a, t, n), e.elementType = se, e.lanes = i, e;
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case xe:
            c = 10;
            break e;
          case Te:
            c = 9;
            break e;
          case fe:
            c = 11;
            break e;
          case W:
            c = 14;
            break e;
          case le:
            c = 16, l = null;
            break e;
        }
        c = 29, a = Error(r(130, e === null ? "null" : typeof e, "")), l = null;
    }
    return t = Ct(c, a, t, n), t.elementType = e, t.type = l, t.lanes = i, t;
  }
  function Dl(e, t, a, l) {
    return e = Ct(7, e, l, t), e.lanes = a, e;
  }
  function Yc(e, t, a) {
    return e = Ct(6, e, null, t), e.lanes = a, e;
  }
  function Or(e) {
    var t = Ct(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Lc(e, t, a) {
    return t = Ct(4, e.children !== null ? e.children : [], e.key, t), t.lanes = a, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  var Cr = /* @__PURE__ */ new WeakMap();
  function Qt(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = Cr.get(e);
      return a !== void 0 ? a : (t = { value: e, source: t, stack: Yi(t) }, Cr.set(e, t), t);
    }
    return { value: e, source: t, stack: Yi(t) };
  }
  var cn = [], un = 0, rs = null, Pn = 0, Vt = [], Jt = 0, Wa = null, pa = 1, xa = "";
  function ka(e, t) {
    cn[un++] = Pn, cn[un++] = rs, rs = e, Pn = t;
  }
  function Dr(e, t, a) {
    Vt[Jt++] = pa, Vt[Jt++] = xa, Vt[Jt++] = Wa, Wa = e;
    var l = pa;
    e = xa;
    var n = 32 - Ke(l) - 1;
    l &= ~(1 << n), a += 1;
    var i = 32 - Ke(t) + n;
    if (30 < i) {
      var c = n - n % 5;
      i = (l & (1 << c) - 1).toString(32), l >>= c, n -= c, pa = 1 << 32 - Ke(t) + n | a << n | l, xa = i + e;
    } else pa = 1 << i | a << n | l, xa = e;
  }
  function Gc(e) {
    e.return !== null && (ka(e, 1), Dr(e, 1, 0));
  }
  function qc(e) {
    for (; e === rs; ) rs = cn[--un], cn[un] = null, Pn = cn[--un], cn[un] = null;
    for (; e === Wa; ) Wa = Vt[--Jt], Vt[Jt] = null, xa = Vt[--Jt], Vt[Jt] = null, pa = Vt[--Jt], Vt[Jt] = null;
  }
  function Ur(e, t) {
    Vt[Jt++] = pa, Vt[Jt++] = xa, Vt[Jt++] = Wa, pa = t.id, xa = t.overflow, Wa = e;
  }
  var mt = null, Ue = null, me = false, Fa = null, Kt = false, Xc = Error(r(519));
  function Ia(e) {
    var t = Error(r(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw ei(Qt(t, e)), Xc;
  }
  function Hr(e) {
    var t = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (t[Oe] = e, t[dt] = l, a) {
      case "dialog":
        oe("cancel", t), oe("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        oe("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Ni.length; a++) oe(Ni[a], t);
        break;
      case "source":
        oe("error", t);
        break;
      case "img":
      case "image":
      case "link":
        oe("error", t), oe("load", t);
        break;
      case "details":
        oe("toggle", t);
        break;
      case "input":
        oe("invalid", t), et(t, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, true);
        break;
      case "select":
        oe("invalid", t);
        break;
      case "textarea":
        oe("invalid", t), Xn(t, l.value, l.defaultValue, l.children);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === true || ef(t.textContent, a) ? (l.popover != null && (oe("beforetoggle", t), oe("toggle", t)), l.onScroll != null && oe("scroll", t), l.onScrollEnd != null && oe("scrollend", t), l.onClick != null && (t.onclick = tt), t = true) : t = false, t || Ia(e, true);
  }
  function Br(e) {
    for (mt = e.return; mt; ) switch (mt.tag) {
      case 5:
      case 31:
      case 13:
        Kt = false;
        return;
      case 27:
      case 3:
        Kt = true;
        return;
      default:
        mt = mt.return;
    }
  }
  function on(e) {
    if (e !== mt) return false;
    if (!me) return Br(e), me = true, false;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || co(e.type, e.memoizedProps)), a = !a), a && Ue && Ia(e), Br(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Ue = rf(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Ue = rf(e);
    } else t === 27 ? (t = Ue, fl(e.type) ? (e = mo, mo = null, Ue = e) : Ue = t) : Ue = mt ? Wt(e.stateNode.nextSibling) : null;
    return true;
  }
  function Ul() {
    Ue = mt = null, me = false;
  }
  function Zc() {
    var e = Fa;
    return e !== null && (zt === null ? zt = e : zt.push.apply(zt, e), Fa = null), e;
  }
  function ei(e) {
    Fa === null ? Fa = [e] : Fa.push(e);
  }
  var Qc = m(null), Hl = null, za = null;
  function Pa(e, t, a) {
    B(Qc, t._currentValue), t._currentValue = a;
  }
  function Ta(e) {
    e._currentValue = Qc.current, T(Qc);
  }
  function Vc(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function Jc(e, t, a, l) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var c = n.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var u = i;
          i = n;
          for (var d = 0; d < t.length; d++) if (u.context === t[d]) {
            i.lanes |= a, u = i.alternate, u !== null && (u.lanes |= a), Vc(i.return, a, e), l || (c = null);
            break e;
          }
          i = u.next;
        }
      } else if (n.tag === 18) {
        if (c = n.return, c === null) throw Error(r(341));
        c.lanes |= a, i = c.alternate, i !== null && (i.lanes |= a), Vc(c, a, e), c = null;
      } else c = n.child;
      if (c !== null) c.return = n;
      else for (c = n; c !== null; ) {
        if (c === e) {
          c = null;
          break;
        }
        if (n = c.sibling, n !== null) {
          n.return = c.return, c = n;
          break;
        }
        c = c.return;
      }
      n = c;
    }
  }
  function rn(e, t, a, l) {
    e = null;
    for (var n = t, i = false; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = true;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var c = n.alternate;
        if (c === null) throw Error(r(387));
        if (c = c.memoizedProps, c !== null) {
          var u = n.type;
          Ot(n.pendingProps.value, c.value) || (e !== null ? e.push(u) : e = [u]);
        }
      } else if (n === ce.current) {
        if (c = n.alternate, c === null) throw Error(r(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(Ei) : e = [Ei]);
      }
      n = n.return;
    }
    e !== null && Jc(t, e, a, l), t.flags |= 262144;
  }
  function ds(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ot(e.context._currentValue, e.memoizedValue)) return true;
      e = e.next;
    }
    return false;
  }
  function Bl(e) {
    Hl = e, za = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ht(e) {
    return Yr(Hl, e);
  }
  function fs(e, t) {
    return Hl === null && Bl(e), Yr(e, t);
  }
  function Yr(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, za === null) {
      if (e === null) throw Error(r(308));
      za = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else za = za.next = t;
    return a;
  }
  var Fm = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = { aborted: false, addEventListener: function(a, l) {
      e.push(l);
    } };
    this.abort = function() {
      t.aborted = true, e.forEach(function(a) {
        return a();
      });
    };
  }, Im = o.unstable_scheduleCallback, Pm = o.unstable_NormalPriority, $e = { $$typeof: xe, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function Kc() {
    return { controller: new Fm(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function ti(e) {
    e.refCount--, e.refCount === 0 && Im(Pm, function() {
      e.controller.abort();
    });
  }
  var ai = null, $c = 0, dn = 0, fn = null;
  function e1(e, t) {
    if (ai === null) {
      var a = ai = [];
      $c = 0, dn = Iu(), fn = { status: "pending", value: void 0, then: function(l) {
        a.push(l);
      } };
    }
    return $c++, t.then(Lr, Lr), t;
  }
  function Lr() {
    if (--$c === 0 && ai !== null) {
      fn !== null && (fn.status = "fulfilled");
      var e = ai;
      ai = null, dn = 0, fn = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function t1(e, t) {
    var a = [], l = { status: "pending", value: null, reason: null, then: function(n) {
      a.push(n);
    } };
    return e.then(function() {
      l.status = "fulfilled", l.value = t;
      for (var n = 0; n < a.length; n++) (0, a[n])(t);
    }, function(n) {
      for (l.status = "rejected", l.reason = n, n = 0; n < a.length; n++) (0, a[n])(void 0);
    }), l;
  }
  var Gr = S.S;
  S.S = function(e, t) {
    w0 = bt(), typeof t == "object" && t !== null && typeof t.then == "function" && e1(e, t), Gr !== null && Gr(e, t);
  };
  var Yl = m(null);
  function Wc() {
    var e = Yl.current;
    return e !== null ? e : Re.pooledCache;
  }
  function ms(e, t) {
    t === null ? B(Yl, Yl.current) : B(Yl, t.pool);
  }
  function qr() {
    var e = Wc();
    return e === null ? null : { parent: $e._currentValue, pool: e };
  }
  var mn = Error(r(460)), Fc = Error(r(474)), hs = Error(r(542)), ps = { then: function() {
  } };
  function Xr(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Zr(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(tt, tt), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Vr(e), e;
      default:
        if (typeof t.status == "string") t.then(tt, tt);
        else {
          if (e = Re, e !== null && 100 < e.shellSuspendCounter) throw Error(r(482));
          e = t, e.status = "pending", e.then(function(l) {
            if (t.status === "pending") {
              var n = t;
              n.status = "fulfilled", n.value = l;
            }
          }, function(l) {
            if (t.status === "pending") {
              var n = t;
              n.status = "rejected", n.reason = l;
            }
          });
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Vr(e), e;
        }
        throw Gl = t, mn;
    }
  }
  function Ll(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Gl = a, mn) : a;
    }
  }
  var Gl = null;
  function Qr() {
    if (Gl === null) throw Error(r(459));
    var e = Gl;
    return Gl = null, e;
  }
  function Vr(e) {
    if (e === mn || e === hs) throw Error(r(483));
  }
  var hn = null, li = 0;
  function xs(e) {
    var t = li;
    return li += 1, hn === null && (hn = []), Zr(hn, e, t);
  }
  function ni(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function gs(e, t) {
    throw t.$$typeof === $ ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(r(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
  }
  function Jr(e) {
    function t(x, f) {
      if (e) {
        var b = x.deletions;
        b === null ? (x.deletions = [f], x.flags |= 16) : b.push(f);
      }
    }
    function a(x, f) {
      if (!e) return null;
      for (; f !== null; ) t(x, f), f = f.sibling;
      return null;
    }
    function l(x) {
      for (var f = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? f.set(x.key, x) : f.set(x.index, x), x = x.sibling;
      return f;
    }
    function n(x, f) {
      return x = Ma(x, f), x.index = 0, x.sibling = null, x;
    }
    function i(x, f, b) {
      return x.index = b, e ? (b = x.alternate, b !== null ? (b = b.index, b < f ? (x.flags |= 67108866, f) : b) : (x.flags |= 67108866, f)) : (x.flags |= 1048576, f);
    }
    function c(x) {
      return e && x.alternate === null && (x.flags |= 67108866), x;
    }
    function u(x, f, b, M) {
      return f === null || f.tag !== 6 ? (f = Yc(b, x.mode, M), f.return = x, f) : (f = n(f, b), f.return = x, f);
    }
    function d(x, f, b, M) {
      var V = b.type;
      return V === ae ? E(x, f, b.props.children, M, b.key) : f !== null && (f.elementType === V || typeof V == "object" && V !== null && V.$$typeof === le && Ll(V) === f.type) ? (f = n(f, b.props), ni(f, b), f.return = x, f) : (f = os(b.type, b.key, b.props, null, x.mode, M), ni(f, b), f.return = x, f);
    }
    function y(x, f, b, M) {
      return f === null || f.tag !== 4 || f.stateNode.containerInfo !== b.containerInfo || f.stateNode.implementation !== b.implementation ? (f = Lc(b, x.mode, M), f.return = x, f) : (f = n(f, b.children || []), f.return = x, f);
    }
    function E(x, f, b, M, V) {
      return f === null || f.tag !== 7 ? (f = Dl(b, x.mode, M, V), f.return = x, f) : (f = n(f, b), f.return = x, f);
    }
    function z(x, f, b) {
      if (typeof f == "string" && f !== "" || typeof f == "number" || typeof f == "bigint") return f = Yc("" + f, x.mode, b), f.return = x, f;
      if (typeof f == "object" && f !== null) {
        switch (f.$$typeof) {
          case J:
            return b = os(f.type, f.key, f.props, null, x.mode, b), ni(b, f), b.return = x, b;
          case Z:
            return f = Lc(f, x.mode, b), f.return = x, f;
          case le:
            return f = Ll(f), z(x, f, b);
        }
        if (Se(f) || Ee(f)) return f = Dl(f, x.mode, b, null), f.return = x, f;
        if (typeof f.then == "function") return z(x, xs(f), b);
        if (f.$$typeof === xe) return z(x, fs(x, f), b);
        gs(x, f);
      }
      return null;
    }
    function _(x, f, b, M) {
      var V = f !== null ? f.key : null;
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint") return V !== null ? null : u(x, f, "" + b, M);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case J:
            return b.key === V ? d(x, f, b, M) : null;
          case Z:
            return b.key === V ? y(x, f, b, M) : null;
          case le:
            return b = Ll(b), _(x, f, b, M);
        }
        if (Se(b) || Ee(b)) return V !== null ? null : E(x, f, b, M, null);
        if (typeof b.then == "function") return _(x, f, xs(b), M);
        if (b.$$typeof === xe) return _(x, f, fs(x, b), M);
        gs(x, b);
      }
      return null;
    }
    function j(x, f, b, M, V) {
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint") return x = x.get(b) || null, u(f, x, "" + M, V);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case J:
            return x = x.get(M.key === null ? b : M.key) || null, d(f, x, M, V);
          case Z:
            return x = x.get(M.key === null ? b : M.key) || null, y(f, x, M, V);
          case le:
            return M = Ll(M), j(x, f, b, M, V);
        }
        if (Se(M) || Ee(M)) return x = x.get(b) || null, E(f, x, M, V, null);
        if (typeof M.then == "function") return j(x, f, b, xs(M), V);
        if (M.$$typeof === xe) return j(x, f, b, fs(f, M), V);
        gs(f, M);
      }
      return null;
    }
    function G(x, f, b, M) {
      for (var V = null, ge = null, q = f, ie = f = 0, de = null; q !== null && ie < b.length; ie++) {
        q.index > ie ? (de = q, q = null) : de = q.sibling;
        var be = _(x, q, b[ie], M);
        if (be === null) {
          q === null && (q = de);
          break;
        }
        e && q && be.alternate === null && t(x, q), f = i(be, f, ie), ge === null ? V = be : ge.sibling = be, ge = be, q = de;
      }
      if (ie === b.length) return a(x, q), me && ka(x, ie), V;
      if (q === null) {
        for (; ie < b.length; ie++) q = z(x, b[ie], M), q !== null && (f = i(q, f, ie), ge === null ? V = q : ge.sibling = q, ge = q);
        return me && ka(x, ie), V;
      }
      for (q = l(q); ie < b.length; ie++) de = j(q, x, ie, b[ie], M), de !== null && (e && de.alternate !== null && q.delete(de.key === null ? ie : de.key), f = i(de, f, ie), ge === null ? V = de : ge.sibling = de, ge = de);
      return e && q.forEach(function(gl) {
        return t(x, gl);
      }), me && ka(x, ie), V;
    }
    function K(x, f, b, M) {
      if (b == null) throw Error(r(151));
      for (var V = null, ge = null, q = f, ie = f = 0, de = null, be = b.next(); q !== null && !be.done; ie++, be = b.next()) {
        q.index > ie ? (de = q, q = null) : de = q.sibling;
        var gl = _(x, q, be.value, M);
        if (gl === null) {
          q === null && (q = de);
          break;
        }
        e && q && gl.alternate === null && t(x, q), f = i(gl, f, ie), ge === null ? V = gl : ge.sibling = gl, ge = gl, q = de;
      }
      if (be.done) return a(x, q), me && ka(x, ie), V;
      if (q === null) {
        for (; !be.done; ie++, be = b.next()) be = z(x, be.value, M), be !== null && (f = i(be, f, ie), ge === null ? V = be : ge.sibling = be, ge = be);
        return me && ka(x, ie), V;
      }
      for (q = l(q); !be.done; ie++, be = b.next()) be = j(q, x, ie, be.value, M), be !== null && (e && be.alternate !== null && q.delete(be.key === null ? ie : be.key), f = i(be, f, ie), ge === null ? V = be : ge.sibling = be, ge = be);
      return e && q.forEach(function(fh) {
        return t(x, fh);
      }), me && ka(x, ie), V;
    }
    function ze(x, f, b, M) {
      if (typeof b == "object" && b !== null && b.type === ae && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case J:
            e: {
              for (var V = b.key; f !== null; ) {
                if (f.key === V) {
                  if (V = b.type, V === ae) {
                    if (f.tag === 7) {
                      a(x, f.sibling), M = n(f, b.props.children), M.return = x, x = M;
                      break e;
                    }
                  } else if (f.elementType === V || typeof V == "object" && V !== null && V.$$typeof === le && Ll(V) === f.type) {
                    a(x, f.sibling), M = n(f, b.props), ni(M, b), M.return = x, x = M;
                    break e;
                  }
                  a(x, f);
                  break;
                } else t(x, f);
                f = f.sibling;
              }
              b.type === ae ? (M = Dl(b.props.children, x.mode, M, b.key), M.return = x, x = M) : (M = os(b.type, b.key, b.props, null, x.mode, M), ni(M, b), M.return = x, x = M);
            }
            return c(x);
          case Z:
            e: {
              for (V = b.key; f !== null; ) {
                if (f.key === V) if (f.tag === 4 && f.stateNode.containerInfo === b.containerInfo && f.stateNode.implementation === b.implementation) {
                  a(x, f.sibling), M = n(f, b.children || []), M.return = x, x = M;
                  break e;
                } else {
                  a(x, f);
                  break;
                }
                else t(x, f);
                f = f.sibling;
              }
              M = Lc(b, x.mode, M), M.return = x, x = M;
            }
            return c(x);
          case le:
            return b = Ll(b), ze(x, f, b, M);
        }
        if (Se(b)) return G(x, f, b, M);
        if (Ee(b)) {
          if (V = Ee(b), typeof V != "function") throw Error(r(150));
          return b = V.call(b), K(x, f, b, M);
        }
        if (typeof b.then == "function") return ze(x, f, xs(b), M);
        if (b.$$typeof === xe) return ze(x, f, fs(x, b), M);
        gs(x, b);
      }
      return typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint" ? (b = "" + b, f !== null && f.tag === 6 ? (a(x, f.sibling), M = n(f, b), M.return = x, x = M) : (a(x, f), M = Yc(b, x.mode, M), M.return = x, x = M), c(x)) : a(x, f);
    }
    return function(x, f, b, M) {
      try {
        li = 0;
        var V = ze(x, f, b, M);
        return hn = null, V;
      } catch (q) {
        if (q === mn || q === hs) throw q;
        var ge = Ct(29, q, null, x.mode);
        return ge.lanes = M, ge.return = x, ge;
      }
    };
  }
  var ql = Jr(true), Kr = Jr(false), el = false;
  function Ic(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function Pc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null });
  }
  function tl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function al(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (_e & 2) !== 0) {
      var n = l.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), l.pending = t, t = us(e), Tr(e, null, a), t;
    }
    return cs(e, l, t, a), us(e);
  }
  function ii(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, Qi(e, a);
    }
  }
  function eu(e, t) {
    var a = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, a === l)) {
      var n = null, i = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var c = { lane: a.lane, tag: a.tag, payload: a.payload, callback: null, next: null };
          i === null ? n = i = c : i = i.next = c, a = a.next;
        } while (a !== null);
        i === null ? n = i = t : i = i.next = t;
      } else n = i = t;
      a = { baseState: l.baseState, firstBaseUpdate: n, lastBaseUpdate: i, shared: l.shared, callbacks: l.callbacks }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
  }
  var tu = false;
  function si() {
    if (tu) {
      var e = fn;
      if (e !== null) throw e;
    }
  }
  function ci(e, t, a, l) {
    tu = false;
    var n = e.updateQueue;
    el = false;
    var i = n.firstBaseUpdate, c = n.lastBaseUpdate, u = n.shared.pending;
    if (u !== null) {
      n.shared.pending = null;
      var d = u, y = d.next;
      d.next = null, c === null ? i = y : c.next = y, c = d;
      var E = e.alternate;
      E !== null && (E = E.updateQueue, u = E.lastBaseUpdate, u !== c && (u === null ? E.firstBaseUpdate = y : u.next = y, E.lastBaseUpdate = d));
    }
    if (i !== null) {
      var z = n.baseState;
      c = 0, E = y = d = null, u = i;
      do {
        var _ = u.lane & -536870913, j = _ !== u.lane;
        if (j ? (re & _) === _ : (l & _) === _) {
          _ !== 0 && _ === dn && (tu = true), E !== null && (E = E.next = { lane: 0, tag: u.tag, payload: u.payload, callback: null, next: null });
          e: {
            var G = e, K = u;
            _ = t;
            var ze = a;
            switch (K.tag) {
              case 1:
                if (G = K.payload, typeof G == "function") {
                  z = G.call(ze, z, _);
                  break e;
                }
                z = G;
                break e;
              case 3:
                G.flags = G.flags & -65537 | 128;
              case 0:
                if (G = K.payload, _ = typeof G == "function" ? G.call(ze, z, _) : G, _ == null) break e;
                z = A({}, z, _);
                break e;
              case 2:
                el = true;
            }
          }
          _ = u.callback, _ !== null && (e.flags |= 64, j && (e.flags |= 8192), j = n.callbacks, j === null ? n.callbacks = [_] : j.push(_));
        } else j = { lane: _, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, E === null ? (y = E = j, d = z) : E = E.next = j, c |= _;
        if (u = u.next, u === null) {
          if (u = n.shared.pending, u === null) break;
          j = u, u = j.next, j.next = null, n.lastBaseUpdate = j, n.shared.pending = null;
        }
      } while (true);
      E === null && (d = z), n.baseState = d, n.firstBaseUpdate = y, n.lastBaseUpdate = E, i === null && (n.shared.lanes = 0), cl |= c, e.lanes = c, e.memoizedState = z;
    }
  }
  function $r(e, t) {
    if (typeof e != "function") throw Error(r(191, e));
    e.call(t);
  }
  function Wr(e, t) {
    var a = e.callbacks;
    if (a !== null) for (e.callbacks = null, e = 0; e < a.length; e++) $r(a[e], t);
  }
  var pn = m(null), bs = m(0);
  function Fr(e, t) {
    e = La, B(bs, e), B(pn, t), La = e | t.baseLanes;
  }
  function au() {
    B(bs, La), B(pn, pn.current);
  }
  function lu() {
    La = bs.current, T(pn), T(bs);
  }
  var Dt = m(null), $t = null;
  function ll(e) {
    var t = e.alternate;
    B(Ve, Ve.current & 1), B(Dt, e), $t === null && (t === null || pn.current !== null || t.memoizedState !== null) && ($t = e);
  }
  function nu(e) {
    B(Ve, Ve.current), B(Dt, e), $t === null && ($t = e);
  }
  function Ir(e) {
    e.tag === 22 ? (B(Ve, Ve.current), B(Dt, e), $t === null && ($t = e)) : nl();
  }
  function nl() {
    B(Ve, Ve.current), B(Dt, Dt.current);
  }
  function Ut(e) {
    T(Dt), $t === e && ($t = null), T(Ve);
  }
  var Ve = m(0);
  function ys(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || ro(a) || fo(a))) return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Ra = 0, ne = null, Me = null, We = null, vs = false, xn = false, Xl = false, _s = 0, ui = 0, gn = null, a1 = 0;
  function Ge() {
    throw Error(r(321));
  }
  function iu(e, t) {
    if (t === null) return false;
    for (var a = 0; a < t.length && a < e.length; a++) if (!Ot(e[a], t[a])) return false;
    return true;
  }
  function su(e, t, a, l, n, i) {
    return Ra = i, ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, S.H = e === null || e.memoizedState === null ? Dd : _u, Xl = false, i = a(l, n), Xl = false, xn && (i = ed(t, a, l, n)), Pr(e), i;
  }
  function Pr(e) {
    S.H = di;
    var t = Me !== null && Me.next !== null;
    if (Ra = 0, We = Me = ne = null, vs = false, ui = 0, gn = null, t) throw Error(r(300));
    e === null || Fe || (e = e.dependencies, e !== null && ds(e) && (Fe = true));
  }
  function ed(e, t, a, l) {
    ne = e;
    var n = 0;
    do {
      if (xn && (gn = null), ui = 0, xn = false, 25 <= n) throw Error(r(301));
      if (n += 1, We = Me = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      S.H = Ud, i = t(a, l);
    } while (xn);
    return i;
  }
  function l1() {
    var e = S.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? oi(t) : t, e = e.useState()[0], (Me !== null ? Me.memoizedState : null) !== e && (ne.flags |= 1024), t;
  }
  function cu() {
    var e = _s !== 0;
    return _s = 0, e;
  }
  function uu(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function ou(e) {
    if (vs) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      vs = false;
    }
    Ra = 0, We = Me = ne = null, xn = false, ui = _s = 0, gn = null;
  }
  function Nt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return We === null ? ne.memoizedState = We = e : We = We.next = e, We;
  }
  function Je() {
    if (Me === null) {
      var e = ne.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Me.next;
    var t = We === null ? ne.memoizedState : We.next;
    if (t !== null) We = t, Me = e;
    else {
      if (e === null) throw ne.alternate === null ? Error(r(467)) : Error(r(310));
      Me = e, e = { memoizedState: Me.memoizedState, baseState: Me.baseState, baseQueue: Me.baseQueue, queue: Me.queue, next: null }, We === null ? ne.memoizedState = We = e : We = We.next = e;
    }
    return We;
  }
  function Ns() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function oi(e) {
    var t = ui;
    return ui += 1, gn === null && (gn = []), e = Zr(gn, e, t), t = ne, (We === null ? t.memoizedState : We.next) === null && (t = t.alternate, S.H = t === null || t.memoizedState === null ? Dd : _u), e;
  }
  function Ss(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return oi(e);
      if (e.$$typeof === xe) return ht(e);
    }
    throw Error(r(438, String(e)));
  }
  function ru(e) {
    var t = null, a = ne.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var l = ne.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = { data: l.data.map(function(n) {
        return n.slice();
      }), index: 0 })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = Ns(), ne.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0) for (a = t.data[t.index] = Array(e), l = 0; l < e; l++) a[l] = ot;
    return t.index++, a;
  }
  function Oa(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ws(e) {
    var t = Je();
    return du(t, Me, e);
  }
  function du(e, t, a) {
    var l = e.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = a;
    var n = e.baseQueue, i = l.pending;
    if (i !== null) {
      if (n !== null) {
        var c = n.next;
        n.next = i.next, i.next = c;
      }
      t.baseQueue = n = i, l.pending = null;
    }
    if (i = e.baseState, n === null) e.memoizedState = i;
    else {
      t = n.next;
      var u = c = null, d = null, y = t, E = false;
      do {
        var z = y.lane & -536870913;
        if (z !== y.lane ? (re & z) === z : (Ra & z) === z) {
          var _ = y.revertLane;
          if (_ === 0) d !== null && (d = d.next = { lane: 0, revertLane: 0, gesture: null, action: y.action, hasEagerState: y.hasEagerState, eagerState: y.eagerState, next: null }), z === dn && (E = true);
          else if ((Ra & _) === _) {
            y = y.next, _ === dn && (E = true);
            continue;
          } else z = { lane: 0, revertLane: y.revertLane, gesture: null, action: y.action, hasEagerState: y.hasEagerState, eagerState: y.eagerState, next: null }, d === null ? (u = d = z, c = i) : d = d.next = z, ne.lanes |= _, cl |= _;
          z = y.action, Xl && a(i, z), i = y.hasEagerState ? y.eagerState : a(i, z);
        } else _ = { lane: z, revertLane: y.revertLane, gesture: y.gesture, action: y.action, hasEagerState: y.hasEagerState, eagerState: y.eagerState, next: null }, d === null ? (u = d = _, c = i) : d = d.next = _, ne.lanes |= z, cl |= z;
        y = y.next;
      } while (y !== null && y !== t);
      if (d === null ? c = i : d.next = u, !Ot(i, e.memoizedState) && (Fe = true, E && (a = fn, a !== null))) throw a;
      e.memoizedState = i, e.baseState = c, e.baseQueue = d, l.lastRenderedState = i;
    }
    return n === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function fu(e) {
    var t = Je(), a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch, n = a.pending, i = t.memoizedState;
    if (n !== null) {
      a.pending = null;
      var c = n = n.next;
      do
        i = e(i, c.action), c = c.next;
      while (c !== n);
      Ot(i, t.memoizedState) || (Fe = true), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), a.lastRenderedState = i;
    }
    return [i, l];
  }
  function td(e, t, a) {
    var l = ne, n = Je(), i = me;
    if (i) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else a = t();
    var c = !Ot((Me || n).memoizedState, a);
    if (c && (n.memoizedState = a, Fe = true), n = n.queue, pu(nd.bind(null, l, n, e), [e]), n.getSnapshot !== t || c || We !== null && We.memoizedState.tag & 1) {
      if (l.flags |= 2048, bn(9, { destroy: void 0 }, ld.bind(null, l, n, a, t), null), Re === null) throw Error(r(349));
      i || (Ra & 127) !== 0 || ad(l, t, a);
    }
    return a;
  }
  function ad(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = ne.updateQueue, t === null ? (t = Ns(), ne.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function ld(e, t, a, l) {
    t.value = a, t.getSnapshot = l, id(t) && sd(e);
  }
  function nd(e, t, a) {
    return a(function() {
      id(t) && sd(e);
    });
  }
  function id(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !Ot(e, a);
    } catch {
      return true;
    }
  }
  function sd(e) {
    var t = Cl(e, 2);
    t !== null && Tt(t, e, 2);
  }
  function mu(e) {
    var t = Nt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), Xl) {
        rt(true);
        try {
          a();
        } finally {
          rt(false);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Oa, lastRenderedState: e }, t;
  }
  function cd(e, t, a, l) {
    return e.baseState = a, du(e, Me, typeof l == "function" ? l : Oa);
  }
  function n1(e, t, a, l, n) {
    if (Es(e)) throw Error(r(485));
    if (e = t.action, e !== null) {
      var i = { payload: n, action: e, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(c) {
        i.listeners.push(c);
      } };
      S.T !== null ? a(true) : i.isTransition = false, l(i), a = t.pending, a === null ? (i.next = t.pending = i, ud(t, i)) : (i.next = a.next, t.pending = a.next = i);
    }
  }
  function ud(e, t) {
    var a = t.action, l = t.payload, n = e.state;
    if (t.isTransition) {
      var i = S.T, c = {};
      S.T = c;
      try {
        var u = a(n, l), d = S.S;
        d !== null && d(c, u), od(e, t, u);
      } catch (y) {
        hu(e, t, y);
      } finally {
        i !== null && c.types !== null && (i.types = c.types), S.T = i;
      }
    } else try {
      i = a(n, l), od(e, t, i);
    } catch (y) {
      hu(e, t, y);
    }
  }
  function od(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(l) {
      rd(e, t, l);
    }, function(l) {
      return hu(e, t, l);
    }) : rd(e, t, a);
  }
  function rd(e, t, a) {
    t.status = "fulfilled", t.value = a, dd(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, ud(e, a)));
  }
  function hu(e, t, a) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = a, dd(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function dd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function fd(e, t) {
    return t;
  }
  function md(e, t) {
    if (me) {
      var a = Re.formState;
      if (a !== null) {
        e: {
          var l = ne;
          if (me) {
            if (Ue) {
              t: {
                for (var n = Ue, i = Kt; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break t;
                  }
                  if (n = Wt(n.nextSibling), n === null) {
                    n = null;
                    break t;
                  }
                }
                i = n.data, n = i === "F!" || i === "F" ? n : null;
              }
              if (n) {
                Ue = Wt(n.nextSibling), l = n.data === "F!";
                break e;
              }
            }
            Ia(l);
          }
          l = false;
        }
        l && (t = a[0]);
      }
    }
    return a = Nt(), a.memoizedState = a.baseState = t, l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: fd, lastRenderedState: t }, a.queue = l, a = Rd.bind(null, ne, l), l.dispatch = a, l = mu(false), i = vu.bind(null, ne, false, l.queue), l = Nt(), n = { state: t, dispatch: null, action: e, pending: null }, l.queue = n, a = n1.bind(null, ne, n, i, a), n.dispatch = a, l.memoizedState = e, [t, a, false];
  }
  function hd(e) {
    var t = Je();
    return pd(t, Me, e);
  }
  function pd(e, t, a) {
    if (t = du(e, t, fd)[0], e = ws(Oa)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var l = oi(t);
    } catch (c) {
      throw c === mn ? hs : c;
    }
    else l = t;
    t = Je();
    var n = t.queue, i = n.dispatch;
    return a !== t.memoizedState && (ne.flags |= 2048, bn(9, { destroy: void 0 }, i1.bind(null, n, a), null)), [l, i, e];
  }
  function i1(e, t) {
    e.action = t;
  }
  function xd(e) {
    var t = Je(), a = Me;
    if (a !== null) return pd(t, a, e);
    Je(), t = t.memoizedState, a = Je();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [t, l, false];
  }
  function bn(e, t, a, l) {
    return e = { tag: e, create: a, deps: l, inst: t, next: null }, t = ne.updateQueue, t === null && (t = Ns(), ne.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e;
  }
  function gd() {
    return Je().memoizedState;
  }
  function js(e, t, a, l) {
    var n = Nt();
    ne.flags |= e, n.memoizedState = bn(1 | t, { destroy: void 0 }, a, l === void 0 ? null : l);
  }
  function As(e, t, a, l) {
    var n = Je();
    l = l === void 0 ? null : l;
    var i = n.memoizedState.inst;
    Me !== null && l !== null && iu(l, Me.memoizedState.deps) ? n.memoizedState = bn(t, i, a, l) : (ne.flags |= e, n.memoizedState = bn(1 | t, i, a, l));
  }
  function bd(e, t) {
    js(8390656, 8, e, t);
  }
  function pu(e, t) {
    As(2048, 8, e, t);
  }
  function s1(e) {
    ne.flags |= 4;
    var t = ne.updateQueue;
    if (t === null) t = Ns(), ne.updateQueue = t, t.events = [e];
    else {
      var a = t.events;
      a === null ? t.events = [e] : a.push(e);
    }
  }
  function yd(e) {
    var t = Je().memoizedState;
    return s1({ ref: t, nextImpl: e }), function() {
      if ((_e & 2) !== 0) throw Error(r(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function vd(e, t) {
    return As(4, 2, e, t);
  }
  function _d(e, t) {
    return As(4, 4, e, t);
  }
  function Nd(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Sd(e, t, a) {
    a = a != null ? a.concat([e]) : null, As(4, 4, Nd.bind(null, t, e), a);
  }
  function xu() {
  }
  function wd(e, t) {
    var a = Je();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && iu(t, l[1]) ? l[0] : (a.memoizedState = [e, t], e);
  }
  function jd(e, t) {
    var a = Je();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && iu(t, l[1])) return l[0];
    if (l = e(), Xl) {
      rt(true);
      try {
        e();
      } finally {
        rt(false);
      }
    }
    return a.memoizedState = [l, t], l;
  }
  function gu(e, t, a) {
    return a === void 0 || (Ra & 1073741824) !== 0 && (re & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = A0(), ne.lanes |= e, cl |= e, a);
  }
  function Ad(e, t, a, l) {
    return Ot(a, t) ? a : pn.current !== null ? (e = gu(e, a, l), Ot(e, t) || (Fe = true), e) : (Ra & 42) === 0 || (Ra & 1073741824) !== 0 && (re & 261930) === 0 ? (Fe = true, e.memoizedState = a) : (e = A0(), ne.lanes |= e, cl |= e, t);
  }
  function Ed(e, t, a, l, n) {
    var i = H.p;
    H.p = i !== 0 && 8 > i ? i : 8;
    var c = S.T, u = {};
    S.T = u, vu(e, false, t, a);
    try {
      var d = n(), y = S.S;
      if (y !== null && y(u, d), d !== null && typeof d == "object" && typeof d.then == "function") {
        var E = t1(d, l);
        ri(e, t, E, Yt(e));
      } else ri(e, t, l, Yt(e));
    } catch (z) {
      ri(e, t, { then: function() {
      }, status: "rejected", reason: z }, Yt());
    } finally {
      H.p = i, c !== null && u.types !== null && (c.types = u.types), S.T = c;
    }
  }
  function c1() {
  }
  function bu(e, t, a, l) {
    if (e.tag !== 5) throw Error(r(476));
    var n = Md(e).queue;
    Ed(e, n, t, Q, a === null ? c1 : function() {
      return kd(e), a(l);
    });
  }
  function Md(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = { memoizedState: Q, baseState: Q, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Oa, lastRenderedState: Q }, next: null };
    var a = {};
    return t.next = { memoizedState: a, baseState: a, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Oa, lastRenderedState: a }, next: null }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function kd(e) {
    var t = Md(e);
    t.next === null && (t = e.alternate.memoizedState), ri(e, t.next.queue, {}, Yt());
  }
  function yu() {
    return ht(Ei);
  }
  function zd() {
    return Je().memoizedState;
  }
  function Td() {
    return Je().memoizedState;
  }
  function u1(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Yt();
          e = tl(a);
          var l = al(t, e, a);
          l !== null && (Tt(l, t, a), ii(l, t, a)), t = { cache: Kc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function o1(e, t, a) {
    var l = Yt();
    a = { lane: l, revertLane: 0, gesture: null, action: a, hasEagerState: false, eagerState: null, next: null }, Es(e) ? Od(t, a) : (a = Hc(e, t, a, l), a !== null && (Tt(a, e, l), Cd(a, t, l)));
  }
  function Rd(e, t, a) {
    var l = Yt();
    ri(e, t, a, l);
  }
  function ri(e, t, a, l) {
    var n = { lane: l, revertLane: 0, gesture: null, action: a, hasEagerState: false, eagerState: null, next: null };
    if (Es(e)) Od(t, n);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var c = t.lastRenderedState, u = i(c, a);
        if (n.hasEagerState = true, n.eagerState = u, Ot(u, c)) return cs(e, t, n, 0), Re === null && ss(), false;
      } catch {
      }
      if (a = Hc(e, t, n, l), a !== null) return Tt(a, e, l), Cd(a, t, l), true;
    }
    return false;
  }
  function vu(e, t, a, l) {
    if (l = { lane: 2, revertLane: Iu(), gesture: null, action: l, hasEagerState: false, eagerState: null, next: null }, Es(e)) {
      if (t) throw Error(r(479));
    } else t = Hc(e, a, l, 2), t !== null && Tt(t, e, 2);
  }
  function Es(e) {
    var t = e.alternate;
    return e === ne || t !== null && t === ne;
  }
  function Od(e, t) {
    xn = vs = true;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function Cd(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, Qi(e, a);
    }
  }
  var di = { readContext: ht, use: Ss, useCallback: Ge, useContext: Ge, useEffect: Ge, useImperativeHandle: Ge, useLayoutEffect: Ge, useInsertionEffect: Ge, useMemo: Ge, useReducer: Ge, useRef: Ge, useState: Ge, useDebugValue: Ge, useDeferredValue: Ge, useTransition: Ge, useSyncExternalStore: Ge, useId: Ge, useHostTransitionStatus: Ge, useFormState: Ge, useActionState: Ge, useOptimistic: Ge, useMemoCache: Ge, useCacheRefresh: Ge };
  di.useEffectEvent = Ge;
  var Dd = { readContext: ht, use: Ss, useCallback: function(e, t) {
    return Nt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ht, useEffect: bd, useImperativeHandle: function(e, t, a) {
    a = a != null ? a.concat([e]) : null, js(4194308, 4, Nd.bind(null, t, e), a);
  }, useLayoutEffect: function(e, t) {
    return js(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    js(4, 2, e, t);
  }, useMemo: function(e, t) {
    var a = Nt();
    t = t === void 0 ? null : t;
    var l = e();
    if (Xl) {
      rt(true);
      try {
        e();
      } finally {
        rt(false);
      }
    }
    return a.memoizedState = [l, t], l;
  }, useReducer: function(e, t, a) {
    var l = Nt();
    if (a !== void 0) {
      var n = a(t);
      if (Xl) {
        rt(true);
        try {
          a(t);
        } finally {
          rt(false);
        }
      }
    } else n = t;
    return l.memoizedState = l.baseState = n, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, l.queue = e, e = e.dispatch = o1.bind(null, ne, e), [l.memoizedState, e];
  }, useRef: function(e) {
    var t = Nt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: function(e) {
    e = mu(e);
    var t = e.queue, a = Rd.bind(null, ne, t);
    return t.dispatch = a, [e.memoizedState, a];
  }, useDebugValue: xu, useDeferredValue: function(e, t) {
    var a = Nt();
    return gu(a, e, t);
  }, useTransition: function() {
    var e = mu(false);
    return e = Ed.bind(null, ne, e.queue, true, false), Nt().memoizedState = e, [false, e];
  }, useSyncExternalStore: function(e, t, a) {
    var l = ne, n = Nt();
    if (me) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else {
      if (a = t(), Re === null) throw Error(r(349));
      (re & 127) !== 0 || ad(l, t, a);
    }
    n.memoizedState = a;
    var i = { value: a, getSnapshot: t };
    return n.queue = i, bd(nd.bind(null, l, i, e), [e]), l.flags |= 2048, bn(9, { destroy: void 0 }, ld.bind(null, l, i, a, t), null), a;
  }, useId: function() {
    var e = Nt(), t = Re.identifierPrefix;
    if (me) {
      var a = xa, l = pa;
      a = (l & ~(1 << 32 - Ke(l) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = _s++, 0 < a && (t += "H" + a.toString(32)), t += "_";
    } else a = a1++, t = "_" + t + "r_" + a.toString(32) + "_";
    return e.memoizedState = t;
  }, useHostTransitionStatus: yu, useFormState: md, useActionState: md, useOptimistic: function(e) {
    var t = Nt();
    t.memoizedState = t.baseState = e;
    var a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return t.queue = a, t = vu.bind(null, ne, true, a), a.dispatch = t, [e, t];
  }, useMemoCache: ru, useCacheRefresh: function() {
    return Nt().memoizedState = u1.bind(null, ne);
  }, useEffectEvent: function(e) {
    var t = Nt(), a = { impl: e };
    return t.memoizedState = a, function() {
      if ((_e & 2) !== 0) throw Error(r(440));
      return a.impl.apply(void 0, arguments);
    };
  } }, _u = { readContext: ht, use: Ss, useCallback: wd, useContext: ht, useEffect: pu, useImperativeHandle: Sd, useInsertionEffect: vd, useLayoutEffect: _d, useMemo: jd, useReducer: ws, useRef: gd, useState: function() {
    return ws(Oa);
  }, useDebugValue: xu, useDeferredValue: function(e, t) {
    var a = Je();
    return Ad(a, Me.memoizedState, e, t);
  }, useTransition: function() {
    var e = ws(Oa)[0], t = Je().memoizedState;
    return [typeof e == "boolean" ? e : oi(e), t];
  }, useSyncExternalStore: td, useId: zd, useHostTransitionStatus: yu, useFormState: hd, useActionState: hd, useOptimistic: function(e, t) {
    var a = Je();
    return cd(a, Me, e, t);
  }, useMemoCache: ru, useCacheRefresh: Td };
  _u.useEffectEvent = yd;
  var Ud = { readContext: ht, use: Ss, useCallback: wd, useContext: ht, useEffect: pu, useImperativeHandle: Sd, useInsertionEffect: vd, useLayoutEffect: _d, useMemo: jd, useReducer: fu, useRef: gd, useState: function() {
    return fu(Oa);
  }, useDebugValue: xu, useDeferredValue: function(e, t) {
    var a = Je();
    return Me === null ? gu(a, e, t) : Ad(a, Me.memoizedState, e, t);
  }, useTransition: function() {
    var e = fu(Oa)[0], t = Je().memoizedState;
    return [typeof e == "boolean" ? e : oi(e), t];
  }, useSyncExternalStore: td, useId: zd, useHostTransitionStatus: yu, useFormState: xd, useActionState: xd, useOptimistic: function(e, t) {
    var a = Je();
    return Me !== null ? cd(a, Me, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
  }, useMemoCache: ru, useCacheRefresh: Td };
  Ud.useEffectEvent = yd;
  function Nu(e, t, a, l) {
    t = e.memoizedState, a = a(l, t), a = a == null ? t : A({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Su = { enqueueSetState: function(e, t, a) {
    e = e._reactInternals;
    var l = Yt(), n = tl(l);
    n.payload = t, a != null && (n.callback = a), t = al(e, n, l), t !== null && (Tt(t, e, l), ii(t, e, l));
  }, enqueueReplaceState: function(e, t, a) {
    e = e._reactInternals;
    var l = Yt(), n = tl(l);
    n.tag = 1, n.payload = t, a != null && (n.callback = a), t = al(e, n, l), t !== null && (Tt(t, e, l), ii(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var a = Yt(), l = tl(a);
    l.tag = 2, t != null && (l.callback = t), t = al(e, l, a), t !== null && (Tt(t, e, a), ii(t, e, a));
  } };
  function Hd(e, t, a, l, n, i, c) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, i, c) : t.prototype && t.prototype.isPureReactComponent ? !Fn(a, l) || !Fn(n, i) : true;
  }
  function Bd(e, t, a, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== e && Su.enqueueReplaceState(t, t.state, null);
  }
  function Zl(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var l in t) l !== "ref" && (a[l] = t[l]);
    }
    if (e = e.defaultProps) {
      a === t && (a = A({}, a));
      for (var n in e) a[n] === void 0 && (a[n] = e[n]);
    }
    return a;
  }
  function Yd(e) {
    is(e);
  }
  function Ld(e) {
    console.error(e);
  }
  function Gd(e) {
    is(e);
  }
  function Ms(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function qd(e, t, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, { componentStack: a.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function wu(e, t, a) {
    return a = tl(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Ms(e, t);
    }, a;
  }
  function Xd(e) {
    return e = tl(e), e.tag = 3, e;
  }
  function Zd(e, t, a, l) {
    var n = a.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = l.value;
      e.payload = function() {
        return n(i);
      }, e.callback = function() {
        qd(t, a, l);
      };
    }
    var c = a.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
      qd(t, a, l), typeof n != "function" && (ul === null ? ul = /* @__PURE__ */ new Set([this]) : ul.add(this));
      var u = l.stack;
      this.componentDidCatch(l.value, { componentStack: u !== null ? u : "" });
    });
  }
  function r1(e, t, a, l, n) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = a.alternate, t !== null && rn(t, a, n, true), a = Dt.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return $t === null ? Ls() : a.alternate === null && qe === 0 && (qe = 3), a.flags &= -257, a.flags |= 65536, a.lanes = n, l === ps ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), $u(e, l, n)), false;
          case 22:
            return a.flags |= 65536, l === ps ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([l]) }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), $u(e, l, n)), false;
        }
        throw Error(r(435, a.tag));
      }
      return $u(e, l, n), Ls(), false;
    }
    if (me) return t = Dt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, l !== Xc && (e = Error(r(422), { cause: l }), ei(Qt(e, a)))) : (l !== Xc && (t = Error(r(423), { cause: l }), ei(Qt(t, a))), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, l = Qt(l, a), n = wu(e.stateNode, l, n), eu(e, n), qe !== 4 && (qe = 2)), false;
    var i = Error(r(520), { cause: l });
    if (i = Qt(i, a), yi === null ? yi = [i] : yi.push(i), qe !== 4 && (qe = 2), t === null) return true;
    l = Qt(l, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = n & -n, a.lanes |= e, e = wu(a.stateNode, l, e), eu(a, e), false;
        case 1:
          if (t = a.type, i = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (ul === null || !ul.has(i)))) return a.flags |= 65536, n &= -n, a.lanes |= n, n = Xd(n), Zd(n, e, a, l), eu(a, n), false;
      }
      a = a.return;
    } while (a !== null);
    return false;
  }
  var ju = Error(r(461)), Fe = false;
  function pt(e, t, a, l) {
    t.child = e === null ? Kr(t, null, a, l) : ql(t, e.child, a, l);
  }
  function Qd(e, t, a, l, n) {
    a = a.render;
    var i = t.ref;
    if ("ref" in l) {
      var c = {};
      for (var u in l) u !== "ref" && (c[u] = l[u]);
    } else c = l;
    return Bl(t), l = su(e, t, a, c, i, n), u = cu(), e !== null && !Fe ? (uu(e, t, n), Ca(e, t, n)) : (me && u && Gc(t), t.flags |= 1, pt(e, t, l, n), t.child);
  }
  function Vd(e, t, a, l, n) {
    if (e === null) {
      var i = a.type;
      return typeof i == "function" && !Bc(i) && i.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = i, Jd(e, t, i, l, n)) : (e = os(a.type, null, l, t, t.mode, n), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, !Ou(e, n)) {
      var c = i.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Fn, a(c, l) && e.ref === t.ref) return Ca(e, t, n);
    }
    return t.flags |= 1, e = Ma(i, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Jd(e, t, a, l, n) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Fn(i, l) && e.ref === t.ref) if (Fe = false, t.pendingProps = l = i, Ou(e, n)) (e.flags & 131072) !== 0 && (Fe = true);
      else return t.lanes = e.lanes, Ca(e, t, n);
    }
    return Au(e, t, a, l, n);
  }
  function Kd(e, t, a, l) {
    var n = l.children, i = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | a : a, e !== null) {
          for (l = t.child = e.child, n = 0; l !== null; ) n = n | l.lanes | l.childLanes, l = l.sibling;
          l = n & ~i;
        } else l = 0, t.child = null;
        return $d(e, t, i, a, l);
      }
      if ((a & 536870912) !== 0) t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ms(t, i !== null ? i.cachePool : null), i !== null ? Fr(t, i) : au(), Ir(t);
      else return l = t.lanes = 536870912, $d(e, t, i !== null ? i.baseLanes | a : a, a, l);
    } else i !== null ? (ms(t, i.cachePool), Fr(t, i), nl(), t.memoizedState = null) : (e !== null && ms(t, null), au(), nl());
    return pt(e, t, n, a), t.child;
  }
  function fi(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling;
  }
  function $d(e, t, a, l, n) {
    var i = Wc();
    return i = i === null ? null : { parent: $e._currentValue, pool: i }, t.memoizedState = { baseLanes: a, cachePool: i }, e !== null && ms(t, null), au(), Ir(t), e !== null && rn(e, t, l, true), t.childLanes = n, null;
  }
  function ks(e, t) {
    return t = Ts({ mode: t.mode, children: t.children }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Wd(e, t, a) {
    return ql(t, e.child, null, a), e = ks(t, t.pendingProps), e.flags |= 2, Ut(t), t.memoizedState = null, e;
  }
  function d1(e, t, a) {
    var l = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (me) {
        if (l.mode === "hidden") return e = ks(t, l), t.lanes = 536870912, fi(null, e);
        if (nu(t), (e = Ue) ? (e = of(e, Kt), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: Wa !== null ? { id: pa, overflow: xa } : null, retryLane: 536870912, hydrationErrors: null }, a = Or(e), a.return = t, t.child = a, mt = t, Ue = null)) : e = null, e === null) throw Ia(t);
        return t.lanes = 536870912, null;
      }
      return ks(t, l);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var c = i.dehydrated;
      if (nu(t), n) if (t.flags & 256) t.flags &= -257, t = Wd(e, t, a);
      else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
      else throw Error(r(558));
      else if (Fe || rn(e, t, a, false), n = (a & e.childLanes) !== 0, Fe || n) {
        if (l = Re, l !== null && (c = wl(l, a), c !== 0 && c !== i.retryLane)) throw i.retryLane = c, Cl(e, c), Tt(l, e, c), ju;
        Ls(), t = Wd(e, t, a);
      } else e = i.treeContext, Ue = Wt(c.nextSibling), mt = t, me = true, Fa = null, Kt = false, e !== null && Ur(t, e), t = ks(t, l), t.flags |= 4096;
      return t;
    }
    return e = Ma(e.child, { mode: l.mode, children: l.children }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function zs(e, t) {
    var a = t.ref;
    if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(r(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Au(e, t, a, l, n) {
    return Bl(t), a = su(e, t, a, l, void 0, n), l = cu(), e !== null && !Fe ? (uu(e, t, n), Ca(e, t, n)) : (me && l && Gc(t), t.flags |= 1, pt(e, t, a, n), t.child);
  }
  function Fd(e, t, a, l, n, i) {
    return Bl(t), t.updateQueue = null, a = ed(t, l, a, n), Pr(e), l = cu(), e !== null && !Fe ? (uu(e, t, i), Ca(e, t, i)) : (me && l && Gc(t), t.flags |= 1, pt(e, t, a, i), t.child);
  }
  function Id(e, t, a, l, n) {
    if (Bl(t), t.stateNode === null) {
      var i = sn, c = a.contextType;
      typeof c == "object" && c !== null && (i = ht(c)), i = new a(l, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Su, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = l, i.state = t.memoizedState, i.refs = {}, Ic(t), c = a.contextType, i.context = typeof c == "object" && c !== null ? ht(c) : sn, i.state = t.memoizedState, c = a.getDerivedStateFromProps, typeof c == "function" && (Nu(t, a, c, l), i.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (c = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), c !== i.state && Su.enqueueReplaceState(i, i.state, null), ci(t, l, i, n), si(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), l = true;
    } else if (e === null) {
      i = t.stateNode;
      var u = t.memoizedProps, d = Zl(a, u);
      i.props = d;
      var y = i.context, E = a.contextType;
      c = sn, typeof E == "object" && E !== null && (c = ht(E));
      var z = a.getDerivedStateFromProps;
      E = typeof z == "function" || typeof i.getSnapshotBeforeUpdate == "function", u = t.pendingProps !== u, E || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u || y !== c) && Bd(t, i, l, c), el = false;
      var _ = t.memoizedState;
      i.state = _, ci(t, l, i, n), si(), y = t.memoizedState, u || _ !== y || el ? (typeof z == "function" && (Nu(t, a, z, l), y = t.memoizedState), (d = el || Hd(t, a, d, l, _, y, c)) ? (E || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = y), i.props = l, i.state = y, i.context = c, l = d) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), l = false);
    } else {
      i = t.stateNode, Pc(e, t), c = t.memoizedProps, E = Zl(a, c), i.props = E, z = t.pendingProps, _ = i.context, y = a.contextType, d = sn, typeof y == "object" && y !== null && (d = ht(y)), u = a.getDerivedStateFromProps, (y = typeof u == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (c !== z || _ !== d) && Bd(t, i, l, d), el = false, _ = t.memoizedState, i.state = _, ci(t, l, i, n), si();
      var j = t.memoizedState;
      c !== z || _ !== j || el || e !== null && e.dependencies !== null && ds(e.dependencies) ? (typeof u == "function" && (Nu(t, a, u, l), j = t.memoizedState), (E = el || Hd(t, a, E, l, _, j, d) || e !== null && e.dependencies !== null && ds(e.dependencies)) ? (y || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(l, j, d), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(l, j, d)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = j), i.props = l, i.state = j, i.context = d, l = E) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), l = false);
    }
    return i = l, zs(e, t), l = (t.flags & 128) !== 0, i || l ? (i = t.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && l ? (t.child = ql(t, e.child, null, n), t.child = ql(t, null, a, n)) : pt(e, t, a, n), t.memoizedState = i.state, e = t.child) : e = Ca(e, t, n), e;
  }
  function Pd(e, t, a, l) {
    return Ul(), t.flags |= 256, pt(e, t, a, l), t.child;
  }
  var Eu = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function Mu(e) {
    return { baseLanes: e, cachePool: qr() };
  }
  function ku(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Bt), e;
  }
  function e0(e, t, a) {
    var l = t.pendingProps, n = false, i = (t.flags & 128) !== 0, c;
    if ((c = i) || (c = e !== null && e.memoizedState === null ? false : (Ve.current & 2) !== 0), c && (n = true, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (me) {
        if (n ? ll(t) : nl(), (e = Ue) ? (e = of(e, Kt), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = { dehydrated: e, treeContext: Wa !== null ? { id: pa, overflow: xa } : null, retryLane: 536870912, hydrationErrors: null }, a = Or(e), a.return = t, t.child = a, mt = t, Ue = null)) : e = null, e === null) throw Ia(t);
        return fo(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var u = l.children;
      return l = l.fallback, n ? (nl(), n = t.mode, u = Ts({ mode: "hidden", children: u }, n), l = Dl(l, n, a, null), u.return = t, l.return = t, u.sibling = l, t.child = u, l = t.child, l.memoizedState = Mu(a), l.childLanes = ku(e, c, a), t.memoizedState = Eu, fi(null, l)) : (ll(t), zu(t, u));
    }
    var d = e.memoizedState;
    if (d !== null && (u = d.dehydrated, u !== null)) {
      if (i) t.flags & 256 ? (ll(t), t.flags &= -257, t = Tu(e, t, a)) : t.memoizedState !== null ? (nl(), t.child = e.child, t.flags |= 128, t = null) : (nl(), u = l.fallback, n = t.mode, l = Ts({ mode: "visible", children: l.children }, n), u = Dl(u, n, a, null), u.flags |= 2, l.return = t, u.return = t, l.sibling = u, t.child = l, ql(t, e.child, null, a), l = t.child, l.memoizedState = Mu(a), l.childLanes = ku(e, c, a), t.memoizedState = Eu, t = fi(null, l));
      else if (ll(t), fo(u)) {
        if (c = u.nextSibling && u.nextSibling.dataset, c) var y = c.dgst;
        c = y, l = Error(r(419)), l.stack = "", l.digest = c, ei({ value: l, source: null, stack: null }), t = Tu(e, t, a);
      } else if (Fe || rn(e, t, a, false), c = (a & e.childLanes) !== 0, Fe || c) {
        if (c = Re, c !== null && (l = wl(c, a), l !== 0 && l !== d.retryLane)) throw d.retryLane = l, Cl(e, l), Tt(c, e, l), ju;
        ro(u) || Ls(), t = Tu(e, t, a);
      } else ro(u) ? (t.flags |= 192, t.child = e.child, t = null) : (e = d.treeContext, Ue = Wt(u.nextSibling), mt = t, me = true, Fa = null, Kt = false, e !== null && Ur(t, e), t = zu(t, l.children), t.flags |= 4096);
      return t;
    }
    return n ? (nl(), u = l.fallback, n = t.mode, d = e.child, y = d.sibling, l = Ma(d, { mode: "hidden", children: l.children }), l.subtreeFlags = d.subtreeFlags & 65011712, y !== null ? u = Ma(y, u) : (u = Dl(u, n, a, null), u.flags |= 2), u.return = t, l.return = t, l.sibling = u, t.child = l, fi(null, l), l = t.child, u = e.child.memoizedState, u === null ? u = Mu(a) : (n = u.cachePool, n !== null ? (d = $e._currentValue, n = n.parent !== d ? { parent: d, pool: d } : n) : n = qr(), u = { baseLanes: u.baseLanes | a, cachePool: n }), l.memoizedState = u, l.childLanes = ku(e, c, a), t.memoizedState = Eu, fi(e.child, l)) : (ll(t), a = e.child, e = a.sibling, a = Ma(a, { mode: "visible", children: l.children }), a.return = t, a.sibling = null, e !== null && (c = t.deletions, c === null ? (t.deletions = [e], t.flags |= 16) : c.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function zu(e, t) {
    return t = Ts({ mode: "visible", children: t }, e.mode), t.return = e, e.child = t;
  }
  function Ts(e, t) {
    return e = Ct(22, e, null, t), e.lanes = 0, e;
  }
  function Tu(e, t, a) {
    return ql(t, e.child, null, a), e = zu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function t0(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Vc(e.return, t, a);
  }
  function Ru(e, t, a, l, n, i) {
    var c = e.memoizedState;
    c === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: l, tail: a, tailMode: n, treeForkCount: i } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = l, c.tail = a, c.tailMode = n, c.treeForkCount = i);
  }
  function a0(e, t, a) {
    var l = t.pendingProps, n = l.revealOrder, i = l.tail;
    l = l.children;
    var c = Ve.current, u = (c & 2) !== 0;
    if (u ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, B(Ve, c), pt(e, t, l, a), l = me ? Pn : 0, !u && e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && t0(e, a, t);
      else if (e.tag === 19) t0(e, a, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    switch (n) {
      case "forwards":
        for (a = t.child, n = null; a !== null; ) e = a.alternate, e !== null && ys(e) === null && (n = a), a = a.sibling;
        a = n, a === null ? (n = t.child, t.child = null) : (n = a.sibling, a.sibling = null), Ru(t, false, n, a, i, l);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, n = t.child, t.child = null; n !== null; ) {
          if (e = n.alternate, e !== null && ys(e) === null) {
            t.child = n;
            break;
          }
          e = n.sibling, n.sibling = a, a = n, n = e;
        }
        Ru(t, true, a, null, i, l);
        break;
      case "together":
        Ru(t, false, null, null, void 0, l);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Ca(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), cl |= t.lanes, (a & t.childLanes) === 0) if (e !== null) {
      if (rn(e, t, a, false), (a & t.childLanes) === 0) return null;
    } else return null;
    if (e !== null && t.child !== e.child) throw Error(r(153));
    if (t.child !== null) {
      for (e = t.child, a = Ma(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; ) e = e.sibling, a = a.sibling = Ma(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function Ou(e, t) {
    return (e.lanes & t) !== 0 ? true : (e = e.dependencies, !!(e !== null && ds(e)));
  }
  function f1(e, t, a) {
    switch (t.tag) {
      case 3:
        Ze(t, t.stateNode.containerInfo), Pa(t, $e, e.memoizedState.cache), Ul();
        break;
      case 27:
      case 5:
        bl(t);
        break;
      case 4:
        Ze(t, t.stateNode.containerInfo);
        break;
      case 10:
        Pa(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, nu(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null) return l.dehydrated !== null ? (ll(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? e0(e, t, a) : (ll(t), e = Ca(e, t, a), e !== null ? e.sibling : null);
        ll(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (l = (a & t.childLanes) !== 0, l || (rn(e, t, a, false), l = (a & t.childLanes) !== 0), n) {
          if (l) return a0(e, t, a);
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), B(Ve, Ve.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, Kd(e, t, a, t.pendingProps);
      case 24:
        Pa(t, $e, e.memoizedState.cache);
    }
    return Ca(e, t, a);
  }
  function l0(e, t, a) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps) Fe = true;
    else {
      if (!Ou(e, a) && (t.flags & 128) === 0) return Fe = false, f1(e, t, a);
      Fe = (e.flags & 131072) !== 0;
    }
    else Fe = false, me && (t.flags & 1048576) !== 0 && Dr(t, Pn, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = Ll(t.elementType), t.type = e, typeof e == "function") Bc(e) ? (l = Zl(e, l), t.tag = 1, t = Id(null, t, e, l, a)) : (t.tag = 0, t = Au(null, t, e, l, a));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === fe) {
                t.tag = 11, t = Qd(null, t, e, l, a);
                break e;
              } else if (n === W) {
                t.tag = 14, t = Vd(null, t, e, l, a);
                break e;
              }
            }
            throw t = Xe(e) || e, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return Au(e, t, t.type, t.pendingProps, a);
      case 1:
        return l = t.type, n = Zl(l, t.pendingProps), Id(e, t, l, n, a);
      case 3:
        e: {
          if (Ze(t, t.stateNode.containerInfo), e === null) throw Error(r(387));
          l = t.pendingProps;
          var i = t.memoizedState;
          n = i.element, Pc(e, t), ci(t, l, null, a);
          var c = t.memoizedState;
          if (l = c.cache, Pa(t, $e, l), l !== i.cache && Jc(t, [$e], a, true), si(), l = c.element, i.isDehydrated) if (i = { element: l, isDehydrated: false, cache: c.cache }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            t = Pd(e, t, l, a);
            break e;
          } else if (l !== n) {
            n = Qt(Error(r(424)), t), ei(n), t = Pd(e, t, l, a);
            break e;
          } else for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ue = Wt(e.firstChild), mt = t, me = true, Fa = null, Kt = true, a = Kr(t, null, l, a), t.child = a; a; ) a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (Ul(), l === n) {
              t = Ca(e, t, a);
              break e;
            }
            pt(e, t, l, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return zs(e, t), e === null ? (a = pf(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : me || (a = t.type, e = t.pendingProps, l = Js(ee.current).createElement(a), l[Oe] = t, l[dt] = e, xt(l, a, e), Qe(l), t.stateNode = l) : t.memoizedState = pf(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
      case 27:
        return bl(t), e === null && me && (l = t.stateNode = ff(t.type, t.pendingProps, ee.current), mt = t, Kt = true, n = Ue, fl(t.type) ? (mo = n, Ue = Wt(l.firstChild)) : Ue = n), pt(e, t, t.pendingProps.children, a), zs(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && me && ((n = l = Ue) && (l = q1(l, t.type, t.pendingProps, Kt), l !== null ? (t.stateNode = l, mt = t, Ue = Wt(l.firstChild), Kt = false, n = true) : n = false), n || Ia(t)), bl(t), n = t.type, i = t.pendingProps, c = e !== null ? e.memoizedProps : null, l = i.children, co(n, i) ? l = null : c !== null && co(n, c) && (t.flags |= 32), t.memoizedState !== null && (n = su(e, t, l1, null, null, a), Ei._currentValue = n), zs(e, t), pt(e, t, l, a), t.child;
      case 6:
        return e === null && me && ((e = a = Ue) && (a = X1(a, t.pendingProps, Kt), a !== null ? (t.stateNode = a, mt = t, Ue = null, e = true) : e = false), e || Ia(t)), null;
      case 13:
        return e0(e, t, a);
      case 4:
        return Ze(t, t.stateNode.containerInfo), l = t.pendingProps, e === null ? t.child = ql(t, null, l, a) : pt(e, t, l, a), t.child;
      case 11:
        return Qd(e, t, t.type, t.pendingProps, a);
      case 7:
        return pt(e, t, t.pendingProps, a), t.child;
      case 8:
        return pt(e, t, t.pendingProps.children, a), t.child;
      case 12:
        return pt(e, t, t.pendingProps.children, a), t.child;
      case 10:
        return l = t.pendingProps, Pa(t, t.type, l.value), pt(e, t, l.children, a), t.child;
      case 9:
        return n = t.type._context, l = t.pendingProps.children, Bl(t), n = ht(n), l = l(n), t.flags |= 1, pt(e, t, l, a), t.child;
      case 14:
        return Vd(e, t, t.type, t.pendingProps, a);
      case 15:
        return Jd(e, t, t.type, t.pendingProps, a);
      case 19:
        return a0(e, t, a);
      case 31:
        return d1(e, t, a);
      case 22:
        return Kd(e, t, a, t.pendingProps);
      case 24:
        return Bl(t), l = ht($e), e === null ? (n = Wc(), n === null && (n = Re, i = Kc(), n.pooledCache = i, i.refCount++, i !== null && (n.pooledCacheLanes |= a), n = i), t.memoizedState = { parent: l, cache: n }, Ic(t), Pa(t, $e, n)) : ((e.lanes & a) !== 0 && (Pc(e, t), ci(t, null, null, a), si()), n = e.memoizedState, i = t.memoizedState, n.parent !== l ? (n = { parent: l, cache: l }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), Pa(t, $e, l)) : (l = i.cache, Pa(t, $e, l), l !== n.cache && Jc(t, [$e], a, true))), pt(e, t, t.pendingProps.children, a), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function Da(e) {
    e.flags |= 4;
  }
  function Cu(e, t, a, l, n) {
    if ((t = (e.mode & 32) !== 0) && (t = false), t) {
      if (e.flags |= 16777216, (n & 335544128) === n) if (e.stateNode.complete) e.flags |= 8192;
      else if (z0()) e.flags |= 8192;
      else throw Gl = ps, Fc;
    } else e.flags &= -16777217;
  }
  function n0(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (e.flags |= 16777216, !vf(t)) if (z0()) e.flags |= 8192;
    else throw Gl = ps, Fc;
  }
  function Rs(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Xi() : 536870912, e.lanes |= t, Nn |= t);
  }
  function mi(e, t) {
    if (!me) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var a = null; t !== null; ) t.alternate !== null && (a = t), t = t.sibling;
        a === null ? e.tail = null : a.sibling = null;
        break;
      case "collapsed":
        a = e.tail;
        for (var l = null; a !== null; ) a.alternate !== null && (l = a), a = a.sibling;
        l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
    }
  }
  function He(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, l = 0;
    if (t) for (var n = e.child; n !== null; ) a |= n.lanes | n.childLanes, l |= n.subtreeFlags & 65011712, l |= n.flags & 65011712, n.return = e, n = n.sibling;
    else for (n = e.child; n !== null; ) a |= n.lanes | n.childLanes, l |= n.subtreeFlags, l |= n.flags, n.return = e, n = n.sibling;
    return e.subtreeFlags |= l, e.childLanes = a, t;
  }
  function m1(e, t, a) {
    var l = t.pendingProps;
    switch (qc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return He(t), null;
      case 1:
        return He(t), null;
      case 3:
        return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Ta($e), De(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (on(t) ? Da(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Zc())), He(t), null;
      case 26:
        var n = t.type, i = t.memoizedState;
        return e === null ? (Da(t), i !== null ? (He(t), n0(t, i)) : (He(t), Cu(t, n, null, l, a))) : i ? i !== e.memoizedState ? (Da(t), He(t), n0(t, i)) : (He(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && Da(t), He(t), Cu(t, n, e, l, a)), null;
      case 27:
        if (yl(t), a = ee.current, n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== l && Da(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(r(166));
            return He(t), null;
          }
          e = L.current, on(t) ? Hr(t) : (e = ff(n, l, a), t.stateNode = e, Da(t));
        }
        return He(t), null;
      case 5:
        if (yl(t), n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== l && Da(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(r(166));
            return He(t), null;
          }
          if (i = L.current, on(t)) Hr(t);
          else {
            var c = Js(ee.current);
            switch (i) {
              case 1:
                i = c.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                i = c.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    i = c.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    i = c.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                    break;
                  case "script":
                    i = c.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(i.firstChild);
                    break;
                  case "select":
                    i = typeof l.is == "string" ? c.createElement("select", { is: l.is }) : c.createElement("select"), l.multiple ? i.multiple = true : l.size && (i.size = l.size);
                    break;
                  default:
                    i = typeof l.is == "string" ? c.createElement(n, { is: l.is }) : c.createElement(n);
                }
            }
            i[Oe] = t, i[dt] = l;
            e: for (c = t.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) i.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === t) break e;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === t) break e;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
            }
            t.stateNode = i;
            e: switch (xt(i, n, l), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = true;
                break e;
              default:
                l = false;
            }
            l && Da(t);
          }
        }
        return He(t), Cu(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, a), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && Da(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(r(166));
          if (e = ee.current, on(t)) {
            if (e = t.stateNode, a = t.memoizedProps, l = null, n = mt, n !== null) switch (n.tag) {
              case 27:
              case 5:
                l = n.memoizedProps;
            }
            e[Oe] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === true || ef(e.nodeValue, a)), e || Ia(t, true);
          } else e = Js(e).createTextNode(l), e[Oe] = t, t.stateNode = e;
        }
        return He(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = on(t), a !== null) {
            if (e === null) {
              if (!l) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
              e[Oe] = t;
            } else Ul(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            He(t), e = false;
          } else a = Zc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = true;
          if (!e) return t.flags & 256 ? (Ut(t), t) : (Ut(t), null);
          if ((t.flags & 128) !== 0) throw Error(r(558));
        }
        return He(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (n = on(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!n) throw Error(r(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
              n[Oe] = t;
            } else Ul(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            He(t), n = false;
          } else n = Zc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = true;
          if (!n) return t.flags & 256 ? (Ut(t), t) : (Ut(t), null);
        }
        return Ut(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = l !== null, e = e !== null && e.memoizedState !== null, a && (l = t.child, n = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (n = l.alternate.memoizedState.cachePool.pool), i = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (i = l.memoizedState.cachePool.pool), i !== n && (l.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Rs(t, t.updateQueue), He(t), null);
      case 4:
        return De(), e === null && ao(t.stateNode.containerInfo), He(t), null;
      case 10:
        return Ta(t.type), He(t), null;
      case 19:
        if (T(Ve), l = t.memoizedState, l === null) return He(t), null;
        if (n = (t.flags & 128) !== 0, i = l.rendering, i === null) if (n) mi(l, false);
        else {
          if (qe !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (i = ys(e), i !== null) {
              for (t.flags |= 128, mi(l, false), e = i.updateQueue, t.updateQueue = e, Rs(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; ) Rr(a, e), a = a.sibling;
              return B(Ve, Ve.current & 1 | 2), me && ka(t, l.treeForkCount), t.child;
            }
            e = e.sibling;
          }
          l.tail !== null && bt() > Hs && (t.flags |= 128, n = true, mi(l, false), t.lanes = 4194304);
        }
        else {
          if (!n) if (e = ys(i), e !== null) {
            if (t.flags |= 128, n = true, e = e.updateQueue, t.updateQueue = e, Rs(t, e), mi(l, true), l.tail === null && l.tailMode === "hidden" && !i.alternate && !me) return He(t), null;
          } else 2 * bt() - l.renderingStartTime > Hs && a !== 536870912 && (t.flags |= 128, n = true, mi(l, false), t.lanes = 4194304);
          l.isBackwards ? (i.sibling = t.child, t.child = i) : (e = l.last, e !== null ? e.sibling = i : t.child = i, l.last = i);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = bt(), e.sibling = null, a = Ve.current, B(Ve, n ? a & 1 | 2 : a & 1), me && ka(t, l.treeForkCount), e) : (He(t), null);
      case 22:
      case 23:
        return Ut(t), lu(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (He(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : He(t), a = t.updateQueue, a !== null && Rs(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && T(Yl), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Ta($e), He(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function h1(e, t) {
    switch (qc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Ta($e), De(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return yl(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Ut(t), t.alternate === null) throw Error(r(340));
          Ul();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Ut(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(r(340));
          Ul();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return T(Ve), null;
      case 4:
        return De(), null;
      case 10:
        return Ta(t.type), null;
      case 22:
      case 23:
        return Ut(t), lu(), e !== null && T(Yl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Ta($e), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function i0(e, t) {
    switch (qc(t), t.tag) {
      case 3:
        Ta($e), De();
        break;
      case 26:
      case 27:
      case 5:
        yl(t);
        break;
      case 4:
        De();
        break;
      case 31:
        t.memoizedState !== null && Ut(t);
        break;
      case 13:
        Ut(t);
        break;
      case 19:
        T(Ve);
        break;
      case 10:
        Ta(t.type);
        break;
      case 22:
      case 23:
        Ut(t), lu(), e !== null && T(Yl);
        break;
      case 24:
        Ta($e);
    }
  }
  function hi(e, t) {
    try {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var n = l.next;
        a = n;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var i = a.create, c = a.inst;
            l = i(), c.destroy = l;
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (u) {
      Ae(t, t.return, u);
    }
  }
  function il(e, t, a) {
    try {
      var l = t.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        l = i;
        do {
          if ((l.tag & e) === e) {
            var c = l.inst, u = c.destroy;
            if (u !== void 0) {
              c.destroy = void 0, n = t;
              var d = a, y = u;
              try {
                y();
              } catch (E) {
                Ae(n, d, E);
              }
            }
          }
          l = l.next;
        } while (l !== i);
      }
    } catch (E) {
      Ae(t, t.return, E);
    }
  }
  function s0(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        Wr(t, a);
      } catch (l) {
        Ae(e, e.return, l);
      }
    }
  }
  function c0(e, t, a) {
    a.props = Zl(e.type, e.memoizedProps), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      Ae(e, t, l);
    }
  }
  function pi(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof a == "function" ? e.refCleanup = a(l) : a.current = l;
      }
    } catch (n) {
      Ae(e, t, n);
    }
  }
  function ga(e, t) {
    var a = e.ref, l = e.refCleanup;
    if (a !== null) if (typeof l == "function") try {
      l();
    } catch (n) {
      Ae(e, t, n);
    } finally {
      e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
    }
    else if (typeof a == "function") try {
      a(null);
    } catch (n) {
      Ae(e, t, n);
    }
    else a.current = null;
  }
  function u0(e) {
    var t = e.type, a = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break e;
        case "img":
          a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (n) {
      Ae(e, e.return, n);
    }
  }
  function Du(e, t, a) {
    try {
      var l = e.stateNode;
      U1(l, e.type, a, t), l[dt] = t;
    } catch (n) {
      Ae(e, e.return, n);
    }
  }
  function o0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && fl(e.type) || e.tag === 4;
  }
  function Uu(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || o0(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && fl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Hu(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6) e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = tt));
    else if (l !== 4 && (l === 27 && fl(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null)) for (Hu(e, t, a), e = e.sibling; e !== null; ) Hu(e, t, a), e = e.sibling;
  }
  function Os(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6) e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && fl(e.type) && (a = e.stateNode), e = e.child, e !== null)) for (Os(e, t, a), e = e.sibling; e !== null; ) Os(e, t, a), e = e.sibling;
  }
  function r0(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
      xt(t, l, a), t[Oe] = e, t[dt] = a;
    } catch (i) {
      Ae(e, e.return, i);
    }
  }
  var Ua = false, Ie = false, Bu = false, d0 = typeof WeakSet == "function" ? WeakSet : Set, ut = null;
  function p1(e, t) {
    if (e = e.containerInfo, io = ec, e = Sr(e), Tc(e)) {
      if ("selectionStart" in e) var a = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        a = (a = e.ownerDocument) && a.defaultView || window;
        var l = a.getSelection && a.getSelection();
        if (l && l.rangeCount !== 0) {
          a = l.anchorNode;
          var n = l.anchorOffset, i = l.focusNode;
          l = l.focusOffset;
          try {
            a.nodeType, i.nodeType;
          } catch {
            a = null;
            break e;
          }
          var c = 0, u = -1, d = -1, y = 0, E = 0, z = e, _ = null;
          t: for (; ; ) {
            for (var j; z !== a || n !== 0 && z.nodeType !== 3 || (u = c + n), z !== i || l !== 0 && z.nodeType !== 3 || (d = c + l), z.nodeType === 3 && (c += z.nodeValue.length), (j = z.firstChild) !== null; ) _ = z, z = j;
            for (; ; ) {
              if (z === e) break t;
              if (_ === a && ++y === n && (u = c), _ === i && ++E === l && (d = c), (j = z.nextSibling) !== null) break;
              z = _, _ = z.parentNode;
            }
            z = j;
          }
          a = u === -1 || d === -1 ? null : { start: u, end: d };
        } else a = null;
      }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (so = { focusedElem: e, selectionRange: a }, ec = false, ut = t; ut !== null; ) if (t = ut, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ut = e;
    else for (; ut !== null; ) {
      switch (t = ut, i = t.alternate, e = t.flags, t.tag) {
        case 0:
          if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null)) for (a = 0; a < e.length; a++) n = e[a], n.ref.impl = n.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((e & 1024) !== 0 && i !== null) {
            e = void 0, a = t, n = i.memoizedProps, i = i.memoizedState, l = a.stateNode;
            try {
              var G = Zl(a.type, n);
              e = l.getSnapshotBeforeUpdate(G, i), l.__reactInternalSnapshotBeforeUpdate = e;
            } catch (K) {
              Ae(a, a.return, K);
            }
          }
          break;
        case 3:
          if ((e & 1024) !== 0) {
            if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9) oo(e);
            else if (a === 1) switch (e.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                oo(e);
                break;
              default:
                e.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if ((e & 1024) !== 0) throw Error(r(163));
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, ut = e;
        break;
      }
      ut = t.return;
    }
  }
  function f0(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Ba(e, a), l & 4 && hi(5, a);
        break;
      case 1:
        if (Ba(e, a), l & 4) if (e = a.stateNode, t === null) try {
          e.componentDidMount();
        } catch (c) {
          Ae(a, a.return, c);
        }
        else {
          var n = Zl(a.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
          } catch (c) {
            Ae(a, a.return, c);
          }
        }
        l & 64 && s0(a), l & 512 && pi(a, a.return);
        break;
      case 3:
        if (Ba(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
          if (t = null, a.child !== null) switch (a.child.tag) {
            case 27:
            case 5:
              t = a.child.stateNode;
              break;
            case 1:
              t = a.child.stateNode;
          }
          try {
            Wr(e, t);
          } catch (c) {
            Ae(a, a.return, c);
          }
        }
        break;
      case 27:
        t === null && l & 4 && r0(a);
      case 26:
      case 5:
        Ba(e, a), t === null && l & 4 && u0(a), l & 512 && pi(a, a.return);
        break;
      case 12:
        Ba(e, a);
        break;
      case 31:
        Ba(e, a), l & 4 && p0(e, a);
        break;
      case 13:
        Ba(e, a), l & 4 && x0(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = w1.bind(null, a), Z1(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || Ua, !l) {
          t = t !== null && t.memoizedState !== null || Ie, n = Ua;
          var i = Ie;
          Ua = l, (Ie = t) && !i ? Ya(e, a, (a.subtreeFlags & 8772) !== 0) : Ba(e, a), Ua = n, Ie = i;
        }
        break;
      case 30:
        break;
      default:
        Ba(e, a);
    }
  }
  function m0(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, m0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Il(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ye = null, Et = false;
  function Ha(e, t, a) {
    for (a = a.child; a !== null; ) h0(e, t, a), a = a.sibling;
  }
  function h0(e, t, a) {
    if (nt && typeof nt.onCommitFiberUnmount == "function") try {
      nt.onCommitFiberUnmount(Gt, a);
    } catch {
    }
    switch (a.tag) {
      case 26:
        Ie || ga(a, t), Ha(e, t, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Ie || ga(a, t);
        var l = Ye, n = Et;
        fl(a.type) && (Ye = a.stateNode, Et = false), Ha(e, t, a), wi(a.stateNode), Ye = l, Et = n;
        break;
      case 5:
        Ie || ga(a, t);
      case 6:
        if (l = Ye, n = Et, Ye = null, Ha(e, t, a), Ye = l, Et = n, Ye !== null) if (Et) try {
          (Ye.nodeType === 9 ? Ye.body : Ye.nodeName === "HTML" ? Ye.ownerDocument.body : Ye).removeChild(a.stateNode);
        } catch (i) {
          Ae(a, t, i);
        }
        else try {
          Ye.removeChild(a.stateNode);
        } catch (i) {
          Ae(a, t, i);
        }
        break;
      case 18:
        Ye !== null && (Et ? (e = Ye, cf(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode), zn(e)) : cf(Ye, a.stateNode));
        break;
      case 4:
        l = Ye, n = Et, Ye = a.stateNode.containerInfo, Et = true, Ha(e, t, a), Ye = l, Et = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        il(2, a, t), Ie || il(4, a, t), Ha(e, t, a);
        break;
      case 1:
        Ie || (ga(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && c0(a, t, l)), Ha(e, t, a);
        break;
      case 21:
        Ha(e, t, a);
        break;
      case 22:
        Ie = (l = Ie) || a.memoizedState !== null, Ha(e, t, a), Ie = l;
        break;
      default:
        Ha(e, t, a);
    }
  }
  function p0(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        zn(e);
      } catch (a) {
        Ae(t, t.return, a);
      }
    }
  }
  function x0(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
      zn(e);
    } catch (a) {
      Ae(t, t.return, a);
    }
  }
  function x1(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new d0()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new d0()), t;
      default:
        throw Error(r(435, e.tag));
    }
  }
  function Cs(e, t) {
    var a = x1(e);
    t.forEach(function(l) {
      if (!a.has(l)) {
        a.add(l);
        var n = j1.bind(null, e, l);
        l.then(n, n);
      }
    });
  }
  function Mt(e, t) {
    var a = t.deletions;
    if (a !== null) for (var l = 0; l < a.length; l++) {
      var n = a[l], i = e, c = t, u = c;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 27:
            if (fl(u.type)) {
              Ye = u.stateNode, Et = false;
              break e;
            }
            break;
          case 5:
            Ye = u.stateNode, Et = false;
            break e;
          case 3:
          case 4:
            Ye = u.stateNode.containerInfo, Et = true;
            break e;
        }
        u = u.return;
      }
      if (Ye === null) throw Error(r(160));
      h0(i, c, n), Ye = null, Et = false, i = n.alternate, i !== null && (i.return = null), n.return = null;
    }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) g0(t, e), t = t.sibling;
  }
  var ca = null;
  function g0(e, t) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Mt(t, e), kt(e), l & 4 && (il(3, e, e.return), hi(3, e), il(5, e, e.return));
        break;
      case 1:
        Mt(t, e), kt(e), l & 512 && (Ie || a === null || ga(a, a.return)), l & 64 && Ua && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var n = ca;
        if (Mt(t, e), kt(e), l & 512 && (Ie || a === null || ga(a, a.return)), l & 4) {
          var i = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null) if (l === null) if (e.stateNode === null) {
            e: {
              l = e.type, a = e.memoizedProps, n = n.ownerDocument || n;
              t: switch (l) {
                case "title":
                  i = n.getElementsByTagName("title")[0], (!i || i[$a] || i[Oe] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = n.createElement(l), n.head.insertBefore(i, n.querySelector("head > title"))), xt(i, l, a), i[Oe] = e, Qe(i), l = i;
                  break e;
                case "link":
                  var c = bf("link", "href", n).get(l + (a.href || ""));
                  if (c) {
                    for (var u = 0; u < c.length; u++) if (i = c[u], i.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && i.getAttribute("rel") === (a.rel == null ? null : a.rel) && i.getAttribute("title") === (a.title == null ? null : a.title) && i.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                      c.splice(u, 1);
                      break t;
                    }
                  }
                  i = n.createElement(l), xt(i, l, a), n.head.appendChild(i);
                  break;
                case "meta":
                  if (c = bf("meta", "content", n).get(l + (a.content || ""))) {
                    for (u = 0; u < c.length; u++) if (i = c[u], i.getAttribute("content") === (a.content == null ? null : "" + a.content) && i.getAttribute("name") === (a.name == null ? null : a.name) && i.getAttribute("property") === (a.property == null ? null : a.property) && i.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && i.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                      c.splice(u, 1);
                      break t;
                    }
                  }
                  i = n.createElement(l), xt(i, l, a), n.head.appendChild(i);
                  break;
                default:
                  throw Error(r(468, l));
              }
              i[Oe] = e, Qe(i), l = i;
            }
            e.stateNode = l;
          } else yf(n, e.type, e.stateNode);
          else e.stateNode = gf(n, l, e.memoizedProps);
          else i !== l ? (i === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : i.count--, l === null ? yf(n, e.type, e.stateNode) : gf(n, l, e.memoizedProps)) : l === null && e.stateNode !== null && Du(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        Mt(t, e), kt(e), l & 512 && (Ie || a === null || ga(a, a.return)), a !== null && l & 4 && Du(e, e.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (Mt(t, e), kt(e), l & 512 && (Ie || a === null || ga(a, a.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            Xt(n, "");
          } catch (G) {
            Ae(e, e.return, G);
          }
        }
        l & 4 && e.stateNode != null && (n = e.memoizedProps, Du(e, n, a !== null ? a.memoizedProps : n)), l & 1024 && (Bu = true);
        break;
      case 6:
        if (Mt(t, e), kt(e), l & 4) {
          if (e.stateNode === null) throw Error(r(162));
          l = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = l;
          } catch (G) {
            Ae(e, e.return, G);
          }
        }
        break;
      case 3:
        if (Ws = null, n = ca, ca = Ks(t.containerInfo), Mt(t, e), ca = n, kt(e), l & 4 && a !== null && a.memoizedState.isDehydrated) try {
          zn(t.containerInfo);
        } catch (G) {
          Ae(e, e.return, G);
        }
        Bu && (Bu = false, b0(e));
        break;
      case 4:
        l = ca, ca = Ks(e.stateNode.containerInfo), Mt(t, e), kt(e), ca = l;
        break;
      case 12:
        Mt(t, e), kt(e);
        break;
      case 31:
        Mt(t, e), kt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Cs(e, l)));
        break;
      case 13:
        Mt(t, e), kt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Us = bt()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Cs(e, l)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var d = a !== null && a.memoizedState !== null, y = Ua, E = Ie;
        if (Ua = y || n, Ie = E || d, Mt(t, e), Ie = E, Ua = y, kt(e), l & 8192) e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (a === null || d || Ua || Ie || Ql(e)), a = null, t = e; ; ) {
          if (t.tag === 5 || t.tag === 26) {
            if (a === null) {
              d = a = t;
              try {
                if (i = d.stateNode, n) c = i.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                else {
                  u = d.stateNode;
                  var z = d.memoizedProps.style, _ = z != null && z.hasOwnProperty("display") ? z.display : null;
                  u.style.display = _ == null || typeof _ == "boolean" ? "" : ("" + _).trim();
                }
              } catch (G) {
                Ae(d, d.return, G);
              }
            }
          } else if (t.tag === 6) {
            if (a === null) {
              d = t;
              try {
                d.stateNode.nodeValue = n ? "" : d.memoizedProps;
              } catch (G) {
                Ae(d, d.return, G);
              }
            }
          } else if (t.tag === 18) {
            if (a === null) {
              d = t;
              try {
                var j = d.stateNode;
                n ? uf(j, true) : uf(d.stateNode, false);
              } catch (G) {
                Ae(d, d.return, G);
              }
            }
          } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === e) break e;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break e;
            a === t && (a = null), t = t.return;
          }
          a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
        }
        l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, Cs(e, a))));
        break;
      case 19:
        Mt(t, e), kt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Cs(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Mt(t, e), kt(e);
    }
  }
  function kt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (o0(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(r(160));
        switch (a.tag) {
          case 27:
            var n = a.stateNode, i = Uu(e);
            Os(e, i, n);
            break;
          case 5:
            var c = a.stateNode;
            a.flags & 32 && (Xt(c, ""), a.flags &= -33);
            var u = Uu(e);
            Os(e, u, c);
            break;
          case 3:
          case 4:
            var d = a.stateNode.containerInfo, y = Uu(e);
            Hu(e, y, d);
            break;
          default:
            throw Error(r(161));
        }
      } catch (E) {
        Ae(e, e.return, E);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function b0(e) {
    if (e.subtreeFlags & 1024) for (e = e.child; e !== null; ) {
      var t = e;
      b0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
    }
  }
  function Ba(e, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) f0(e, t.alternate, t), t = t.sibling;
  }
  function Ql(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          il(4, t, t.return), Ql(t);
          break;
        case 1:
          ga(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && c0(t, t.return, a), Ql(t);
          break;
        case 27:
          wi(t.stateNode);
        case 26:
        case 5:
          ga(t, t.return), Ql(t);
          break;
        case 22:
          t.memoizedState === null && Ql(t);
          break;
        case 30:
          Ql(t);
          break;
        default:
          Ql(t);
      }
      e = e.sibling;
    }
  }
  function Ya(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, n = e, i = t, c = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Ya(n, i, a), hi(4, i);
          break;
        case 1:
          if (Ya(n, i, a), l = i, n = l.stateNode, typeof n.componentDidMount == "function") try {
            n.componentDidMount();
          } catch (y) {
            Ae(l, l.return, y);
          }
          if (l = i, n = l.updateQueue, n !== null) {
            var u = l.stateNode;
            try {
              var d = n.shared.hiddenCallbacks;
              if (d !== null) for (n.shared.hiddenCallbacks = null, n = 0; n < d.length; n++) $r(d[n], u);
            } catch (y) {
              Ae(l, l.return, y);
            }
          }
          a && c & 64 && s0(i), pi(i, i.return);
          break;
        case 27:
          r0(i);
        case 26:
        case 5:
          Ya(n, i, a), a && l === null && c & 4 && u0(i), pi(i, i.return);
          break;
        case 12:
          Ya(n, i, a);
          break;
        case 31:
          Ya(n, i, a), a && c & 4 && p0(n, i);
          break;
        case 13:
          Ya(n, i, a), a && c & 4 && x0(n, i);
          break;
        case 22:
          i.memoizedState === null && Ya(n, i, a), pi(i, i.return);
          break;
        case 30:
          break;
        default:
          Ya(n, i, a);
      }
      t = t.sibling;
    }
  }
  function Yu(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && ti(a));
  }
  function Lu(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ti(e));
  }
  function ua(e, t, a, l) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) y0(e, t, a, l), t = t.sibling;
  }
  function y0(e, t, a, l) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ua(e, t, a, l), n & 2048 && hi(9, t);
        break;
      case 1:
        ua(e, t, a, l);
        break;
      case 3:
        ua(e, t, a, l), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ti(e)));
        break;
      case 12:
        if (n & 2048) {
          ua(e, t, a, l), e = t.stateNode;
          try {
            var i = t.memoizedProps, c = i.id, u = i.onPostCommit;
            typeof u == "function" && u(c, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
          } catch (d) {
            Ae(t, t.return, d);
          }
        } else ua(e, t, a, l);
        break;
      case 31:
        ua(e, t, a, l);
        break;
      case 13:
        ua(e, t, a, l);
        break;
      case 23:
        break;
      case 22:
        i = t.stateNode, c = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? ua(e, t, a, l) : xi(e, t) : i._visibility & 2 ? ua(e, t, a, l) : (i._visibility |= 2, yn(e, t, a, l, (t.subtreeFlags & 10256) !== 0 || false)), n & 2048 && Yu(c, t);
        break;
      case 24:
        ua(e, t, a, l), n & 2048 && Lu(t.alternate, t);
        break;
      default:
        ua(e, t, a, l);
    }
  }
  function yn(e, t, a, l, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
      var i = e, c = t, u = a, d = l, y = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          yn(i, c, u, d, n), hi(8, c);
          break;
        case 23:
          break;
        case 22:
          var E = c.stateNode;
          c.memoizedState !== null ? E._visibility & 2 ? yn(i, c, u, d, n) : xi(i, c) : (E._visibility |= 2, yn(i, c, u, d, n)), n && y & 2048 && Yu(c.alternate, c);
          break;
        case 24:
          yn(i, c, u, d, n), n && y & 2048 && Lu(c.alternate, c);
          break;
        default:
          yn(i, c, u, d, n);
      }
      t = t.sibling;
    }
  }
  function xi(e, t) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
      var a = e, l = t, n = l.flags;
      switch (l.tag) {
        case 22:
          xi(a, l), n & 2048 && Yu(l.alternate, l);
          break;
        case 24:
          xi(a, l), n & 2048 && Lu(l.alternate, l);
          break;
        default:
          xi(a, l);
      }
      t = t.sibling;
    }
  }
  var gi = 8192;
  function vn(e, t, a) {
    if (e.subtreeFlags & gi) for (e = e.child; e !== null; ) v0(e, t, a), e = e.sibling;
  }
  function v0(e, t, a) {
    switch (e.tag) {
      case 26:
        vn(e, t, a), e.flags & gi && e.memoizedState !== null && ah(a, ca, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        vn(e, t, a);
        break;
      case 3:
      case 4:
        var l = ca;
        ca = Ks(e.stateNode.containerInfo), vn(e, t, a), ca = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = gi, gi = 16777216, vn(e, t, a), gi = l) : vn(e, t, a));
        break;
      default:
        vn(e, t, a);
    }
  }
  function _0(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function bi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null) for (var a = 0; a < t.length; a++) {
        var l = t[a];
        ut = l, S0(l, e);
      }
      _0(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) N0(e), e = e.sibling;
  }
  function N0(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        bi(e), e.flags & 2048 && il(9, e, e.return);
        break;
      case 3:
        bi(e);
        break;
      case 12:
        bi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Ds(e)) : bi(e);
        break;
      default:
        bi(e);
    }
  }
  function Ds(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null) for (var a = 0; a < t.length; a++) {
        var l = t[a];
        ut = l, S0(l, e);
      }
      _0(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          il(8, t, t.return), Ds(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, Ds(t));
          break;
        default:
          Ds(t);
      }
      e = e.sibling;
    }
  }
  function S0(e, t) {
    for (; ut !== null; ) {
      var a = ut;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          il(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          ti(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, ut = l;
      else e: for (a = e; ut !== null; ) {
        l = ut;
        var n = l.sibling, i = l.return;
        if (m0(l), l === a) {
          ut = null;
          break e;
        }
        if (n !== null) {
          n.return = i, ut = n;
          break e;
        }
        ut = i;
      }
    }
  }
  var g1 = { getCacheForType: function(e) {
    var t = ht($e), a = t.data.get(e);
    return a === void 0 && (a = e(), t.data.set(e, a)), a;
  }, cacheSignal: function() {
    return ht($e).controller.signal;
  } }, b1 = typeof WeakMap == "function" ? WeakMap : Map, _e = 0, Re = null, ue = null, re = 0, je = 0, Ht = null, sl = false, _n = false, Gu = false, La = 0, qe = 0, cl = 0, Vl = 0, qu = 0, Bt = 0, Nn = 0, yi = null, zt = null, Xu = false, Us = 0, w0 = 0, Hs = 1 / 0, Bs = null, ul = null, at = 0, ol = null, Sn = null, Ga = 0, Zu = 0, Qu = null, j0 = null, vi = 0, Vu = null;
  function Yt() {
    return (_e & 2) !== 0 && re !== 0 ? re & -re : S.T !== null ? Iu() : Ka();
  }
  function A0() {
    if (Bt === 0) if ((re & 536870912) === 0 || me) {
      var e = it;
      it <<= 1, (it & 3932160) === 0 && (it = 262144), Bt = e;
    } else Bt = 536870912;
    return e = Dt.current, e !== null && (e.flags |= 32), Bt;
  }
  function Tt(e, t, a) {
    (e === Re && (je === 2 || je === 9) || e.cancelPendingCommit !== null) && (wn(e, 0), rl(e, re, Bt, false)), Sl(e, a), ((_e & 2) === 0 || e !== Re) && (e === Re && ((_e & 2) === 0 && (Vl |= a), qe === 4 && rl(e, re, Bt, false)), ba(e));
  }
  function E0(e, t, a) {
    if ((_e & 6) !== 0) throw Error(r(327));
    var l = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || da(e, t), n = l ? _1(e, t) : Ku(e, t, true), i = l;
    do {
      if (n === 0) {
        _n && !l && rl(e, t, 0, false);
        break;
      } else {
        if (a = e.current.alternate, i && !y1(a)) {
          n = Ku(e, t, false), i = false;
          continue;
        }
        if (n === 2) {
          if (i = t, e.errorRecoveryDisabledLanes & i) var c = 0;
          else c = e.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            t = c;
            e: {
              var u = e;
              n = yi;
              var d = u.current.memoizedState.isDehydrated;
              if (d && (wn(u, c).flags |= 256), c = Ku(u, c, false), c !== 2) {
                if (Gu && !d) {
                  u.errorRecoveryDisabledLanes |= i, Vl |= i, n = 4;
                  break e;
                }
                i = zt, zt = n, i !== null && (zt === null ? zt = i : zt.push.apply(zt, i));
              }
              n = c;
            }
            if (i = false, n !== 2) continue;
          }
        }
        if (n === 1) {
          wn(e, 0), rl(e, t, 0, true);
          break;
        }
        e: {
          switch (l = e, i = n, i) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              rl(l, t, Bt, !sl);
              break e;
            case 2:
              zt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && (n = Us + 300 - bt(), 10 < n)) {
            if (rl(l, t, Bt, !sl), ra(l, 0, true) !== 0) break e;
            Ga = t, l.timeoutHandle = nf(M0.bind(null, l, a, zt, Bs, Xu, t, Bt, Vl, Nn, sl, i, "Throttled", -0, 0), n);
            break e;
          }
          M0(l, a, zt, Bs, Xu, t, Bt, Vl, Nn, sl, i, null, -0, 0);
        }
      }
      break;
    } while (true);
    ba(e);
  }
  function M0(e, t, a, l, n, i, c, u, d, y, E, z, _, j) {
    if (e.timeoutHandle = -1, z = t.subtreeFlags, z & 8192 || (z & 16785408) === 16785408) {
      z = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: tt }, v0(t, i, z);
      var G = (i & 62914560) === i ? Us - bt() : (i & 4194048) === i ? w0 - bt() : 0;
      if (G = lh(z, G), G !== null) {
        Ga = i, e.cancelPendingCommit = G(U0.bind(null, e, t, i, a, l, n, c, u, d, E, z, null, _, j)), rl(e, i, c, !y);
        return;
      }
    }
    U0(e, t, i, a, l, n, c, u, d);
  }
  function y1(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null))) for (var l = 0; l < a.length; l++) {
        var n = a[l], i = n.getSnapshot;
        n = n.value;
        try {
          if (!Ot(i(), n)) return false;
        } catch {
          return false;
        }
      }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null) a.return = t, t = a;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return true;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return true;
  }
  function rl(e, t, a, l) {
    t &= ~qu, t &= ~Vl, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var n = t; 0 < n; ) {
      var i = 31 - Ke(n), c = 1 << i;
      l[i] = -1, n &= ~c;
    }
    a !== 0 && Zi(e, a, t);
  }
  function Ys() {
    return (_e & 6) === 0 ? (_i(0), false) : true;
  }
  function Ju() {
    if (ue !== null) {
      if (je === 0) var e = ue.return;
      else e = ue, za = Hl = null, ou(e), hn = null, li = 0, e = ue;
      for (; e !== null; ) i0(e.alternate, e), e = e.return;
      ue = null;
    }
  }
  function wn(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, Y1(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Ga = 0, Ju(), Re = e, ue = a = Ma(e.current, null), re = t, je = 0, Ht = null, sl = false, _n = da(e, t), Gu = false, Nn = Bt = qu = Vl = cl = qe = 0, zt = yi = null, Xu = false, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0) for (e = e.entanglements, l &= t; 0 < l; ) {
      var n = 31 - Ke(l), i = 1 << n;
      t |= e[n], l &= ~i;
    }
    return La = t, ss(), a;
  }
  function k0(e, t) {
    ne = null, S.H = di, t === mn || t === hs ? (t = Qr(), je = 3) : t === Fc ? (t = Qr(), je = 4) : je = t === ju ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Ht = t, ue === null && (qe = 1, Ms(e, Qt(t, e.current)));
  }
  function z0() {
    var e = Dt.current;
    return e === null ? true : (re & 4194048) === re ? $t === null : (re & 62914560) === re || (re & 536870912) !== 0 ? e === $t : false;
  }
  function T0() {
    var e = S.H;
    return S.H = di, e === null ? di : e;
  }
  function R0() {
    var e = S.A;
    return S.A = g1, e;
  }
  function Ls() {
    qe = 4, sl || (re & 4194048) !== re && Dt.current !== null || (_n = true), (cl & 134217727) === 0 && (Vl & 134217727) === 0 || Re === null || rl(Re, re, Bt, false);
  }
  function Ku(e, t, a) {
    var l = _e;
    _e |= 2;
    var n = T0(), i = R0();
    (Re !== e || re !== t) && (Bs = null, wn(e, t)), t = false;
    var c = qe;
    e: do
      try {
        if (je !== 0 && ue !== null) {
          var u = ue, d = Ht;
          switch (je) {
            case 8:
              Ju(), c = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Dt.current === null && (t = true);
              var y = je;
              if (je = 0, Ht = null, jn(e, u, d, y), a && _n) {
                c = 0;
                break e;
              }
              break;
            default:
              y = je, je = 0, Ht = null, jn(e, u, d, y);
          }
        }
        v1(), c = qe;
        break;
      } catch (E) {
        k0(e, E);
      }
    while (true);
    return t && e.shellSuspendCounter++, za = Hl = null, _e = l, S.H = n, S.A = i, ue === null && (Re = null, re = 0, ss()), c;
  }
  function v1() {
    for (; ue !== null; ) O0(ue);
  }
  function _1(e, t) {
    var a = _e;
    _e |= 2;
    var l = T0(), n = R0();
    Re !== e || re !== t ? (Bs = null, Hs = bt() + 500, wn(e, t)) : _n = da(e, t);
    e: do
      try {
        if (je !== 0 && ue !== null) {
          t = ue;
          var i = Ht;
          t: switch (je) {
            case 1:
              je = 0, Ht = null, jn(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (Xr(i)) {
                je = 0, Ht = null, C0(t);
                break;
              }
              t = function() {
                je !== 2 && je !== 9 || Re !== e || (je = 7), ba(e);
              }, i.then(t, t);
              break e;
            case 3:
              je = 7;
              break e;
            case 4:
              je = 5;
              break e;
            case 7:
              Xr(i) ? (je = 0, Ht = null, C0(t)) : (je = 0, Ht = null, jn(e, t, i, 7));
              break;
            case 5:
              var c = null;
              switch (ue.tag) {
                case 26:
                  c = ue.memoizedState;
                case 5:
                case 27:
                  var u = ue;
                  if (c ? vf(c) : u.stateNode.complete) {
                    je = 0, Ht = null;
                    var d = u.sibling;
                    if (d !== null) ue = d;
                    else {
                      var y = u.return;
                      y !== null ? (ue = y, Gs(y)) : ue = null;
                    }
                    break t;
                  }
              }
              je = 0, Ht = null, jn(e, t, i, 5);
              break;
            case 6:
              je = 0, Ht = null, jn(e, t, i, 6);
              break;
            case 8:
              Ju(), qe = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        N1();
        break;
      } catch (E) {
        k0(e, E);
      }
    while (true);
    return za = Hl = null, S.H = l, S.A = n, _e = a, ue !== null ? 0 : (Re = null, re = 0, ss(), qe);
  }
  function N1() {
    for (; ue !== null && !_l(); ) O0(ue);
  }
  function O0(e) {
    var t = l0(e.alternate, e, La);
    e.memoizedProps = e.pendingProps, t === null ? Gs(e) : ue = t;
  }
  function C0(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Fd(a, t, t.pendingProps, t.type, void 0, re);
        break;
      case 11:
        t = Fd(a, t, t.pendingProps, t.type.render, t.ref, re);
        break;
      case 5:
        ou(t);
      default:
        i0(a, t), t = ue = Rr(t, La), t = l0(a, t, La);
    }
    e.memoizedProps = e.pendingProps, t === null ? Gs(e) : ue = t;
  }
  function jn(e, t, a, l) {
    za = Hl = null, ou(t), hn = null, li = 0;
    var n = t.return;
    try {
      if (r1(e, n, t, a, re)) {
        qe = 1, Ms(e, Qt(a, e.current)), ue = null;
        return;
      }
    } catch (i) {
      if (n !== null) throw ue = n, i;
      qe = 1, Ms(e, Qt(a, e.current)), ue = null;
      return;
    }
    t.flags & 32768 ? (me || l === 1 ? e = true : _n || (re & 536870912) !== 0 ? e = false : (sl = e = true, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Dt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), D0(t, e)) : Gs(t);
  }
  function Gs(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        D0(t, sl);
        return;
      }
      e = t.return;
      var a = m1(t.alternate, t, La);
      if (a !== null) {
        ue = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        ue = t;
        return;
      }
      ue = t = e;
    } while (t !== null);
    qe === 0 && (qe = 5);
  }
  function D0(e, t) {
    do {
      var a = h1(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, ue = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        ue = e;
        return;
      }
      ue = e = a;
    } while (e !== null);
    qe = 6, ue = null;
  }
  function U0(e, t, a, l, n, i, c, u, d) {
    e.cancelPendingCommit = null;
    do
      qs();
    while (at !== 0);
    if ((_e & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (i = t.lanes | t.childLanes, i |= Uc, yc(e, a, i, c, u, d), e === Re && (ue = Re = null, re = 0), Sn = t, ol = e, Ga = a, Zu = i, Qu = n, j0 = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, A1(Rt, function() {
        return G0(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = S.T, S.T = null, n = H.p, H.p = 2, c = _e, _e |= 4;
        try {
          p1(e, t, a);
        } finally {
          _e = c, H.p = n, S.T = l;
        }
      }
      at = 1, H0(), B0(), Y0();
    }
  }
  function H0() {
    if (at === 1) {
      at = 0;
      var e = ol, t = Sn, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = S.T, S.T = null;
        var l = H.p;
        H.p = 2;
        var n = _e;
        _e |= 4;
        try {
          g0(t, e);
          var i = so, c = Sr(e.containerInfo), u = i.focusedElem, d = i.selectionRange;
          if (c !== u && u && u.ownerDocument && Nr(u.ownerDocument.documentElement, u)) {
            if (d !== null && Tc(u)) {
              var y = d.start, E = d.end;
              if (E === void 0 && (E = y), "selectionStart" in u) u.selectionStart = y, u.selectionEnd = Math.min(E, u.value.length);
              else {
                var z = u.ownerDocument || document, _ = z && z.defaultView || window;
                if (_.getSelection) {
                  var j = _.getSelection(), G = u.textContent.length, K = Math.min(d.start, G), ze = d.end === void 0 ? K : Math.min(d.end, G);
                  !j.extend && K > ze && (c = ze, ze = K, K = c);
                  var x = _r(u, K), f = _r(u, ze);
                  if (x && f && (j.rangeCount !== 1 || j.anchorNode !== x.node || j.anchorOffset !== x.offset || j.focusNode !== f.node || j.focusOffset !== f.offset)) {
                    var b = z.createRange();
                    b.setStart(x.node, x.offset), j.removeAllRanges(), K > ze ? (j.addRange(b), j.extend(f.node, f.offset)) : (b.setEnd(f.node, f.offset), j.addRange(b));
                  }
                }
              }
            }
            for (z = [], j = u; j = j.parentNode; ) j.nodeType === 1 && z.push({ element: j, left: j.scrollLeft, top: j.scrollTop });
            for (typeof u.focus == "function" && u.focus(), u = 0; u < z.length; u++) {
              var M = z[u];
              M.element.scrollLeft = M.left, M.element.scrollTop = M.top;
            }
          }
          ec = !!io, so = io = null;
        } finally {
          _e = n, H.p = l, S.T = a;
        }
      }
      e.current = t, at = 2;
    }
  }
  function B0() {
    if (at === 2) {
      at = 0;
      var e = ol, t = Sn, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = S.T, S.T = null;
        var l = H.p;
        H.p = 2;
        var n = _e;
        _e |= 4;
        try {
          f0(e, t.alternate, t);
        } finally {
          _e = n, H.p = l, S.T = a;
        }
      }
      at = 3;
    }
  }
  function Y0() {
    if (at === 4 || at === 3) {
      at = 0, Li();
      var e = ol, t = Sn, a = Ga, l = j0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? at = 5 : (at = 0, Sn = ol = null, L0(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (n === 0 && (ul = null), st(a), t = t.stateNode, nt && typeof nt.onCommitFiberRoot == "function") try {
        nt.onCommitFiberRoot(Gt, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
      if (l !== null) {
        t = S.T, n = H.p, H.p = 2, S.T = null;
        try {
          for (var i = e.onRecoverableError, c = 0; c < l.length; c++) {
            var u = l[c];
            i(u.value, { componentStack: u.stack });
          }
        } finally {
          S.T = t, H.p = n;
        }
      }
      (Ga & 3) !== 0 && qs(), ba(e), n = e.pendingLanes, (a & 261930) !== 0 && (n & 42) !== 0 ? e === Vu ? vi++ : (vi = 0, Vu = e) : vi = 0, _i(0);
    }
  }
  function L0(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ti(t)));
  }
  function qs() {
    return H0(), B0(), Y0(), G0();
  }
  function G0() {
    if (at !== 5) return false;
    var e = ol, t = Zu;
    Zu = 0;
    var a = st(Ga), l = S.T, n = H.p;
    try {
      H.p = 32 > a ? 32 : a, S.T = null, a = Qu, Qu = null;
      var i = ol, c = Ga;
      if (at = 0, Sn = ol = null, Ga = 0, (_e & 6) !== 0) throw Error(r(331));
      var u = _e;
      if (_e |= 4, N0(i.current), y0(i, i.current, c, a), _e = u, _i(0, false), nt && typeof nt.onPostCommitFiberRoot == "function") try {
        nt.onPostCommitFiberRoot(Gt, i);
      } catch {
      }
      return true;
    } finally {
      H.p = n, S.T = l, L0(e, t);
    }
  }
  function q0(e, t, a) {
    t = Qt(a, t), t = wu(e.stateNode, t, 2), e = al(e, t, 2), e !== null && (Sl(e, 2), ba(e));
  }
  function Ae(e, t, a) {
    if (e.tag === 3) q0(e, e, a);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        q0(t, e, a);
        break;
      } else if (t.tag === 1) {
        var l = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (ul === null || !ul.has(l))) {
          e = Qt(a, e), a = Xd(2), l = al(t, a, 2), l !== null && (Zd(a, l, t, e), Sl(l, 2), ba(l));
          break;
        }
      }
      t = t.return;
    }
  }
  function $u(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new b1();
      var n = /* @__PURE__ */ new Set();
      l.set(t, n);
    } else n = l.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), l.set(t, n));
    n.has(a) || (Gu = true, n.add(a), e = S1.bind(null, e, t, a), t.then(e, e));
  }
  function S1(e, t, a) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Re === e && (re & a) === a && (qe === 4 || qe === 3 && (re & 62914560) === re && 300 > bt() - Us ? (_e & 2) === 0 && wn(e, 0) : qu |= a, Nn === re && (Nn = 0)), ba(e);
  }
  function X0(e, t) {
    t === 0 && (t = Xi()), e = Cl(e, t), e !== null && (Sl(e, t), ba(e));
  }
  function w1(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), X0(e, a);
  }
  function j1(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode, n = e.memoizedState;
        n !== null && (a = n.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    l !== null && l.delete(t), X0(e, a);
  }
  function A1(e, t) {
    return Un(e, t);
  }
  var Xs = null, An = null, Wu = false, Zs = false, Fu = false, dl = 0;
  function ba(e) {
    e !== An && e.next === null && (An === null ? Xs = An = e : An = An.next = e), Zs = true, Wu || (Wu = true, M1());
  }
  function _i(e, t) {
    if (!Fu && Zs) {
      Fu = true;
      do
        for (var a = false, l = Xs; l !== null; ) {
          if (e !== 0) {
            var n = l.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var c = l.suspendedLanes, u = l.pingedLanes;
              i = (1 << 31 - Ke(42 | e) + 1) - 1, i &= n & ~(c & ~u), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (a = true, J0(l, i));
          } else i = re, i = ra(l, l === Re ? i : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), (i & 3) === 0 || da(l, i) || (a = true, J0(l, i));
          l = l.next;
        }
      while (a);
      Fu = false;
    }
  }
  function E1() {
    Z0();
  }
  function Z0() {
    Zs = Wu = false;
    var e = 0;
    dl !== 0 && B1() && (e = dl);
    for (var t = bt(), a = null, l = Xs; l !== null; ) {
      var n = l.next, i = Q0(l, t);
      i === 0 ? (l.next = null, a === null ? Xs = n : a.next = n, n === null && (An = a)) : (a = l, (e !== 0 || (i & 3) !== 0) && (Zs = true)), l = n;
    }
    at !== 0 && at !== 5 || _i(e), dl !== 0 && (dl = 0);
  }
  function Q0(e, t) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, n = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var c = 31 - Ke(i), u = 1 << c, d = n[c];
      d === -1 ? ((u & a) === 0 || (u & l) !== 0) && (n[c] = Gn(u, t)) : d <= t && (e.expiredLanes |= u), i &= ~u;
    }
    if (t = Re, a = re, a = ra(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l = e.callbackNode, a === 0 || e === t && (je === 2 || je === 9) || e.cancelPendingCommit !== null) return l !== null && l !== null && Za(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || da(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (l !== null && Za(l), st(a)) {
        case 2:
        case 8:
          a = $l;
          break;
        case 32:
          a = Rt;
          break;
        case 268435456:
          a = Gi;
          break;
        default:
          a = Rt;
      }
      return l = V0.bind(null, e), a = Un(a, l), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return l !== null && l !== null && Za(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function V0(e, t) {
    if (at !== 0 && at !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (qs() && e.callbackNode !== a) return null;
    var l = re;
    return l = ra(e, e === Re ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l === 0 ? null : (E0(e, l, t), Q0(e, bt()), e.callbackNode != null && e.callbackNode === a ? V0.bind(null, e) : null);
  }
  function J0(e, t) {
    if (qs()) return null;
    E0(e, t, true);
  }
  function M1() {
    L1(function() {
      (_e & 6) !== 0 ? Un(va, E1) : Z0();
    });
  }
  function Iu() {
    if (dl === 0) {
      var e = dn;
      e === 0 && (e = Va, Va <<= 1, (Va & 261888) === 0 && (Va = 256)), dl = e;
    }
    return dl;
  }
  function K0(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ml("" + e);
  }
  function $0(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function k1(e, t, a, l, n) {
    if (t === "submit" && a && a.stateNode === n) {
      var i = K0((n[dt] || null).action), c = l.submitter;
      c && (t = (t = c[dt] || null) ? K0(t.formAction) : c.getAttribute("formAction"), t !== null && (i = t, c = null));
      var u = new as("action", "action", null, l, n);
      e.push({ event: u, listeners: [{ instance: null, listener: function() {
        if (l.defaultPrevented) {
          if (dl !== 0) {
            var d = c ? $0(n, c) : new FormData(n);
            bu(a, { pending: true, data: d, method: n.method, action: i }, null, d);
          }
        } else typeof i == "function" && (u.preventDefault(), d = c ? $0(n, c) : new FormData(n), bu(a, { pending: true, data: d, method: n.method, action: i }, i, d));
      }, currentTarget: n }] });
    }
  }
  for (var Pu = 0; Pu < Dc.length; Pu++) {
    var eo = Dc[Pu], z1 = eo.toLowerCase(), T1 = eo[0].toUpperCase() + eo.slice(1);
    sa(z1, "on" + T1);
  }
  sa(Ar, "onAnimationEnd"), sa(Er, "onAnimationIteration"), sa(Mr, "onAnimationStart"), sa("dblclick", "onDoubleClick"), sa("focusin", "onFocus"), sa("focusout", "onBlur"), sa(Jm, "onTransitionRun"), sa(Km, "onTransitionStart"), sa($m, "onTransitionCancel"), sa(kr, "onTransitionEnd"), la("onMouseEnter", ["mouseout", "mouseover"]), la("onMouseLeave", ["mouseout", "mouseover"]), la("onPointerEnter", ["pointerout", "pointerover"]), la("onPointerLeave", ["pointerout", "pointerover"]), aa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), aa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), aa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), aa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), aa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), aa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ni = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), R1 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ni));
  function W0(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a], n = l.event;
      l = l.listeners;
      e: {
        var i = void 0;
        if (t) for (var c = l.length - 1; 0 <= c; c--) {
          var u = l[c], d = u.instance, y = u.currentTarget;
          if (u = u.listener, d !== i && n.isPropagationStopped()) break e;
          i = u, n.currentTarget = y;
          try {
            i(n);
          } catch (E) {
            is(E);
          }
          n.currentTarget = null, i = d;
        }
        else for (c = 0; c < l.length; c++) {
          if (u = l[c], d = u.instance, y = u.currentTarget, u = u.listener, d !== i && n.isPropagationStopped()) break e;
          i = u, n.currentTarget = y;
          try {
            i(n);
          } catch (E) {
            is(E);
          }
          n.currentTarget = null, i = d;
        }
      }
    }
  }
  function oe(e, t) {
    var a = t[Fl];
    a === void 0 && (a = t[Fl] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    a.has(l) || (F0(t, e, 2, false), a.add(l));
  }
  function to(e, t, a) {
    var l = 0;
    t && (l |= 4), F0(a, e, l, t);
  }
  var Qs = "_reactListening" + Math.random().toString(36).slice(2);
  function ao(e) {
    if (!e[Qs]) {
      e[Qs] = true, Ki.forEach(function(a) {
        a !== "selectionchange" && (R1.has(a) || to(a, false, e), to(a, true, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Qs] || (t[Qs] = true, to("selectionchange", false, t));
    }
  }
  function F0(e, t, a, l) {
    switch (Ef(t)) {
      case 2:
        var n = sh;
        break;
      case 8:
        n = ch;
        break;
      default:
        n = bo;
    }
    a = n.bind(null, t, a, e), n = void 0, !Aa || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = true), l ? n !== void 0 ? e.addEventListener(t, a, { capture: true, passive: n }) : e.addEventListener(t, a, true) : n !== void 0 ? e.addEventListener(t, a, { passive: n }) : e.addEventListener(t, a, false);
  }
  function lo(e, t, a, l, n) {
    var i = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null) e: for (; ; ) {
      if (l === null) return;
      var c = l.tag;
      if (c === 3 || c === 4) {
        var u = l.stateNode.containerInfo;
        if (u === n) break;
        if (c === 4) for (c = l.return; c !== null; ) {
          var d = c.tag;
          if ((d === 3 || d === 4) && c.stateNode.containerInfo === n) return;
          c = c.return;
        }
        for (; u !== null; ) {
          if (c = qt(u), c === null) return;
          if (d = c.tag, d === 5 || d === 6 || d === 26 || d === 27) {
            l = i = c;
            continue e;
          }
          u = u.parentNode;
        }
      }
      l = l.return;
    }
    zl(function() {
      var y = i, E = kl(a), z = [];
      e: {
        var _ = zr.get(e);
        if (_ !== void 0) {
          var j = as, G = e;
          switch (e) {
            case "keypress":
              if (es(a) === 0) break e;
            case "keydown":
            case "keyup":
              j = jm;
              break;
            case "focusin":
              G = "focus", j = Ac;
              break;
            case "focusout":
              G = "blur", j = Ac;
              break;
            case "beforeblur":
            case "afterblur":
              j = Ac;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              j = ir;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              j = mm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              j = Mm;
              break;
            case Ar:
            case Er:
            case Mr:
              j = xm;
              break;
            case kr:
              j = zm;
              break;
            case "scroll":
            case "scrollend":
              j = dm;
              break;
            case "wheel":
              j = Rm;
              break;
            case "copy":
            case "cut":
            case "paste":
              j = bm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              j = cr;
              break;
            case "toggle":
            case "beforetoggle":
              j = Cm;
          }
          var K = (t & 4) !== 0, ze = !K && (e === "scroll" || e === "scrollend"), x = K ? _ !== null ? _ + "Capture" : null : _;
          K = [];
          for (var f = y, b; f !== null; ) {
            var M = f;
            if (b = M.stateNode, M = M.tag, M !== 5 && M !== 26 && M !== 27 || b === null || x === null || (M = ja(f, x), M != null && K.push(Si(f, M, b))), ze) break;
            f = f.return;
          }
          0 < K.length && (_ = new j(_, G, null, a, E), z.push({ event: _, listeners: K }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (_ = e === "mouseover" || e === "pointerover", j = e === "mouseout" || e === "pointerout", _ && a !== vt && (G = a.relatedTarget || a.fromElement) && (qt(G) || G[fa])) break e;
          if ((j || _) && (_ = E.window === E ? E : (_ = E.ownerDocument) ? _.defaultView || _.parentWindow : window, j ? (G = a.relatedTarget || a.toElement, j = y, G = G ? qt(G) : null, G !== null && (ze = N(G), K = G.tag, G !== ze || K !== 5 && K !== 27 && K !== 6) && (G = null)) : (j = null, G = y), j !== G)) {
            if (K = ir, M = "onMouseLeave", x = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (K = cr, M = "onPointerLeave", x = "onPointerEnter", f = "pointer"), ze = j == null ? _ : ta(j), b = G == null ? _ : ta(G), _ = new K(M, f + "leave", j, a, E), _.target = ze, _.relatedTarget = b, M = null, qt(E) === y && (K = new K(x, f + "enter", G, a, E), K.target = b, K.relatedTarget = ze, M = K), ze = M, j && G) t: {
              for (K = O1, x = j, f = G, b = 0, M = x; M; M = K(M)) b++;
              M = 0;
              for (var V = f; V; V = K(V)) M++;
              for (; 0 < b - M; ) x = K(x), b--;
              for (; 0 < M - b; ) f = K(f), M--;
              for (; b--; ) {
                if (x === f || f !== null && x === f.alternate) {
                  K = x;
                  break t;
                }
                x = K(x), f = K(f);
              }
              K = null;
            }
            else K = null;
            j !== null && I0(z, _, j, K, false), G !== null && ze !== null && I0(z, ze, G, K, true);
          }
        }
        e: {
          if (_ = y ? ta(y) : window, j = _.nodeName && _.nodeName.toLowerCase(), j === "select" || j === "input" && _.type === "file") var ge = pr;
          else if (mr(_)) if (xr) ge = Zm;
          else {
            ge = qm;
            var q = Gm;
          }
          else j = _.nodeName, !j || j.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? y && Zn(y.elementType) && (ge = pr) : ge = Xm;
          if (ge && (ge = ge(e, y))) {
            hr(z, ge, a, E);
            break e;
          }
          q && q(e, _, y), e === "focusout" && y && _.type === "number" && y.memoizedProps.value != null && ct(_, "number", _.value);
        }
        switch (q = y ? ta(y) : window, e) {
          case "focusin":
            (mr(q) || q.contentEditable === "true") && (an = q, Rc = y, In = null);
            break;
          case "focusout":
            In = Rc = an = null;
            break;
          case "mousedown":
            Oc = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Oc = false, wr(z, a, E);
            break;
          case "selectionchange":
            if (Vm) break;
          case "keydown":
          case "keyup":
            wr(z, a, E);
        }
        var ie;
        if (Mc) e: {
          switch (e) {
            case "compositionstart":
              var de = "onCompositionStart";
              break e;
            case "compositionend":
              de = "onCompositionEnd";
              break e;
            case "compositionupdate":
              de = "onCompositionUpdate";
              break e;
          }
          de = void 0;
        }
        else tn ? dr(e, a) && (de = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (de = "onCompositionStart");
        de && (ur && a.locale !== "ko" && (tn || de !== "onCompositionStart" ? de === "onCompositionEnd" && tn && (ie = lr()) : (ha = E, Sc = "value" in ha ? ha.value : ha.textContent, tn = true)), q = Vs(y, de), 0 < q.length && (de = new sr(de, e, null, a, E), z.push({ event: de, listeners: q }), ie ? de.data = ie : (ie = fr(a), ie !== null && (de.data = ie)))), (ie = Um ? Hm(e, a) : Bm(e, a)) && (de = Vs(y, "onBeforeInput"), 0 < de.length && (q = new sr("onBeforeInput", "beforeinput", null, a, E), z.push({ event: q, listeners: de }), q.data = ie)), k1(z, e, y, a, E);
      }
      W0(z, t);
    });
  }
  function Si(e, t, a) {
    return { instance: e, listener: t, currentTarget: a };
  }
  function Vs(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var n = e, i = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || i === null || (n = ja(e, a), n != null && l.unshift(Si(e, n, i)), n = ja(e, t), n != null && l.push(Si(e, n, i))), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function O1(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function I0(e, t, a, l, n) {
    for (var i = t._reactName, c = []; a !== null && a !== l; ) {
      var u = a, d = u.alternate, y = u.stateNode;
      if (u = u.tag, d !== null && d === l) break;
      u !== 5 && u !== 26 && u !== 27 || y === null || (d = y, n ? (y = ja(a, i), y != null && c.unshift(Si(a, y, d))) : n || (y = ja(a, i), y != null && c.push(Si(a, y, d)))), a = a.return;
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var C1 = /\r\n?/g, D1 = /\u0000|\uFFFD/g;
  function P0(e) {
    return (typeof e == "string" ? e : "" + e).replace(C1, `
`).replace(D1, "");
  }
  function ef(e, t) {
    return t = P0(t), P0(e) === t;
  }
  function ke(e, t, a, l, n, i) {
    switch (a) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Xt(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Xt(e, "" + l);
        break;
      case "className":
        en(e, "class", l);
        break;
      case "tabIndex":
        en(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        en(e, a, l);
        break;
      case "style":
        Na(e, l, i);
        break;
      case "data":
        if (t !== "object") {
          en(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = Ml("" + l), e.setAttribute(a, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof i == "function" && (a === "formAction" ? (t !== "input" && ke(e, t, "name", n.name, n, null), ke(e, t, "formEncType", n.formEncType, n, null), ke(e, t, "formMethod", n.formMethod, n, null), ke(e, t, "formTarget", n.formTarget, n, null)) : (ke(e, t, "encType", n.encType, n, null), ke(e, t, "method", n.method, n, null), ke(e, t, "target", n.target, n, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = Ml("" + l), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = tt);
        break;
      case "onScroll":
        l != null && oe("scroll", e);
        break;
      case "onScrollEnd":
        l != null && oe("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(r(61));
          if (a = l.__html, a != null) {
            if (n.children != null) throw Error(r(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        a = Ml("" + l), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "" + l) : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === true ? e.setAttribute(a, "") : l !== false && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(a) : e.setAttribute(a, l);
        break;
      case "popover":
        oe("beforetoggle", e), oe("toggle", e), Pl(e, "popover", l);
        break;
      case "xlinkActuate":
        na(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        na(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        na(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        na(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        na(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        na(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        na(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        na(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        na(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Pl(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = ar.get(a) || a, Pl(e, a, l));
    }
  }
  function no(e, t, a, l, n, i) {
    switch (a) {
      case "style":
        Na(e, l, i);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(r(61));
          if (a = l.__html, a != null) {
            if (n.children != null) throw Error(r(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Xt(e, l) : (typeof l == "number" || typeof l == "bigint") && Xt(e, "" + l);
        break;
      case "onScroll":
        l != null && oe("scroll", e);
        break;
      case "onScrollEnd":
        l != null && oe("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = tt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Al.hasOwnProperty(a)) e: {
          if (a[0] === "o" && a[1] === "n" && (n = a.endsWith("Capture"), t = a.slice(2, n ? a.length - 7 : void 0), i = e[dt] || null, i = i != null ? i[a] : null, typeof i == "function" && e.removeEventListener(t, i, n), typeof l == "function")) {
            typeof i != "function" && i !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, l, n);
            break e;
          }
          a in e ? e[a] = l : l === true ? e.setAttribute(a, "") : Pl(e, a, l);
        }
    }
  }
  function xt(e, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        oe("error", e), oe("load", e);
        var l = false, n = false, i;
        for (i in a) if (a.hasOwnProperty(i)) {
          var c = a[i];
          if (c != null) switch (i) {
            case "src":
              l = true;
              break;
            case "srcSet":
              n = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(r(137, t));
            default:
              ke(e, t, i, c, a, null);
          }
        }
        n && ke(e, t, "srcSet", a.srcSet, a, null), l && ke(e, t, "src", a.src, a, null);
        return;
      case "input":
        oe("invalid", e);
        var u = i = c = n = null, d = null, y = null;
        for (l in a) if (a.hasOwnProperty(l)) {
          var E = a[l];
          if (E != null) switch (l) {
            case "name":
              n = E;
              break;
            case "type":
              c = E;
              break;
            case "checked":
              d = E;
              break;
            case "defaultChecked":
              y = E;
              break;
            case "value":
              i = E;
              break;
            case "defaultValue":
              u = E;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (E != null) throw Error(r(137, t));
              break;
            default:
              ke(e, t, l, E, a, null);
          }
        }
        et(e, i, u, d, y, c, n, false);
        return;
      case "select":
        oe("invalid", e), l = c = i = null;
        for (n in a) if (a.hasOwnProperty(n) && (u = a[n], u != null)) switch (n) {
          case "value":
            i = u;
            break;
          case "defaultValue":
            c = u;
            break;
          case "multiple":
            l = u;
          default:
            ke(e, t, n, u, a, null);
        }
        t = i, a = c, e.multiple = !!l, t != null ? Ce(e, !!l, t, false) : a != null && Ce(e, !!l, a, true);
        return;
      case "textarea":
        oe("invalid", e), i = n = l = null;
        for (c in a) if (a.hasOwnProperty(c) && (u = a[c], u != null)) switch (c) {
          case "value":
            l = u;
            break;
          case "defaultValue":
            n = u;
            break;
          case "children":
            i = u;
            break;
          case "dangerouslySetInnerHTML":
            if (u != null) throw Error(r(91));
            break;
          default:
            ke(e, t, c, u, a, null);
        }
        Xn(e, l, n, i);
        return;
      case "option":
        for (d in a) a.hasOwnProperty(d) && (l = a[d], l != null) && (d === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : ke(e, t, d, l, a, null));
        return;
      case "dialog":
        oe("beforetoggle", e), oe("toggle", e), oe("cancel", e), oe("close", e);
        break;
      case "iframe":
      case "object":
        oe("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ni.length; l++) oe(Ni[l], e);
        break;
      case "image":
        oe("error", e), oe("load", e);
        break;
      case "details":
        oe("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        oe("error", e), oe("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in a) if (a.hasOwnProperty(y) && (l = a[y], l != null)) switch (y) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(r(137, t));
          default:
            ke(e, t, y, l, a, null);
        }
        return;
      default:
        if (Zn(t)) {
          for (E in a) a.hasOwnProperty(E) && (l = a[E], l !== void 0 && no(e, t, E, l, a, void 0));
          return;
        }
    }
    for (u in a) a.hasOwnProperty(u) && (l = a[u], l != null && ke(e, t, u, l, a, null));
  }
  function U1(e, t, a, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null, i = null, c = null, u = null, d = null, y = null, E = null;
        for (j in a) {
          var z = a[j];
          if (a.hasOwnProperty(j) && z != null) switch (j) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              d = z;
            default:
              l.hasOwnProperty(j) || ke(e, t, j, null, l, z);
          }
        }
        for (var _ in l) {
          var j = l[_];
          if (z = a[_], l.hasOwnProperty(_) && (j != null || z != null)) switch (_) {
            case "type":
              i = j;
              break;
            case "name":
              n = j;
              break;
            case "checked":
              y = j;
              break;
            case "defaultChecked":
              E = j;
              break;
            case "value":
              c = j;
              break;
            case "defaultValue":
              u = j;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (j != null) throw Error(r(137, t));
              break;
            default:
              j !== z && ke(e, t, _, j, l, z);
          }
        }
        Be(e, c, u, d, y, E, i, n);
        return;
      case "select":
        j = c = u = _ = null;
        for (i in a) if (d = a[i], a.hasOwnProperty(i) && d != null) switch (i) {
          case "value":
            break;
          case "multiple":
            j = d;
          default:
            l.hasOwnProperty(i) || ke(e, t, i, null, l, d);
        }
        for (n in l) if (i = l[n], d = a[n], l.hasOwnProperty(n) && (i != null || d != null)) switch (n) {
          case "value":
            _ = i;
            break;
          case "defaultValue":
            u = i;
            break;
          case "multiple":
            c = i;
          default:
            i !== d && ke(e, t, n, i, l, d);
        }
        t = u, a = c, l = j, _ != null ? Ce(e, !!a, _, false) : !!l != !!a && (t != null ? Ce(e, !!a, t, true) : Ce(e, !!a, a ? [] : "", false));
        return;
      case "textarea":
        j = _ = null;
        for (u in a) if (n = a[u], a.hasOwnProperty(u) && n != null && !l.hasOwnProperty(u)) switch (u) {
          case "value":
            break;
          case "children":
            break;
          default:
            ke(e, t, u, null, l, n);
        }
        for (c in l) if (n = l[c], i = a[c], l.hasOwnProperty(c) && (n != null || i != null)) switch (c) {
          case "value":
            _ = n;
            break;
          case "defaultValue":
            j = n;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (n != null) throw Error(r(91));
            break;
          default:
            n !== i && ke(e, t, c, n, l, i);
        }
        El(e, _, j);
        return;
      case "option":
        for (var G in a) _ = a[G], a.hasOwnProperty(G) && _ != null && !l.hasOwnProperty(G) && (G === "selected" ? e.selected = false : ke(e, t, G, null, l, _));
        for (d in l) _ = l[d], j = a[d], l.hasOwnProperty(d) && _ !== j && (_ != null || j != null) && (d === "selected" ? e.selected = _ && typeof _ != "function" && typeof _ != "symbol" : ke(e, t, d, _, l, j));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var K in a) _ = a[K], a.hasOwnProperty(K) && _ != null && !l.hasOwnProperty(K) && ke(e, t, K, null, l, _);
        for (y in l) if (_ = l[y], j = a[y], l.hasOwnProperty(y) && _ !== j && (_ != null || j != null)) switch (y) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (_ != null) throw Error(r(137, t));
            break;
          default:
            ke(e, t, y, _, l, j);
        }
        return;
      default:
        if (Zn(t)) {
          for (var ze in a) _ = a[ze], a.hasOwnProperty(ze) && _ !== void 0 && !l.hasOwnProperty(ze) && no(e, t, ze, void 0, l, _);
          for (E in l) _ = l[E], j = a[E], !l.hasOwnProperty(E) || _ === j || _ === void 0 && j === void 0 || no(e, t, E, _, l, j);
          return;
        }
    }
    for (var x in a) _ = a[x], a.hasOwnProperty(x) && _ != null && !l.hasOwnProperty(x) && ke(e, t, x, null, l, _);
    for (z in l) _ = l[z], j = a[z], !l.hasOwnProperty(z) || _ === j || _ == null && j == null || ke(e, t, z, _, l, j);
  }
  function tf(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return true;
      default:
        return false;
    }
  }
  function H1() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
        var n = a[l], i = n.transferSize, c = n.initiatorType, u = n.duration;
        if (i && u && tf(c)) {
          for (c = 0, u = n.responseEnd, l += 1; l < a.length; l++) {
            var d = a[l], y = d.startTime;
            if (y > u) break;
            var E = d.transferSize, z = d.initiatorType;
            E && tf(z) && (d = d.responseEnd, c += E * (d < u ? 1 : (u - y) / (d - y)));
          }
          if (--l, t += 8 * (i + c) / (n.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var io = null, so = null;
  function Js(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function af(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function lf(e, t) {
    if (e === 0) switch (t) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function co(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var uo = null;
  function B1() {
    var e = window.event;
    return e && e.type === "popstate" ? e === uo ? false : (uo = e, true) : (uo = null, false);
  }
  var nf = typeof setTimeout == "function" ? setTimeout : void 0, Y1 = typeof clearTimeout == "function" ? clearTimeout : void 0, sf = typeof Promise == "function" ? Promise : void 0, L1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof sf < "u" ? function(e) {
    return sf.resolve(null).then(e).catch(G1);
  } : nf;
  function G1(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function fl(e) {
    return e === "head";
  }
  function cf(e, t) {
    var a = t, l = 0;
    do {
      var n = a.nextSibling;
      if (e.removeChild(a), n && n.nodeType === 8) if (a = n.data, a === "/$" || a === "/&") {
        if (l === 0) {
          e.removeChild(n), zn(t);
          return;
        }
        l--;
      } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") l++;
      else if (a === "html") wi(e.ownerDocument.documentElement);
      else if (a === "head") {
        a = e.ownerDocument.head, wi(a);
        for (var i = a.firstChild; i; ) {
          var c = i.nextSibling, u = i.nodeName;
          i[$a] || u === "SCRIPT" || u === "STYLE" || u === "LINK" && i.rel.toLowerCase() === "stylesheet" || a.removeChild(i), i = c;
        }
      } else a === "body" && wi(e.ownerDocument.body);
      a = n;
    } while (a);
    zn(t);
  }
  function uf(e, t) {
    var a = e;
    e = 0;
    do {
      var l = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), l && l.nodeType === 8) if (a = l.data, a === "/$") {
        if (e === 0) break;
        e--;
      } else a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || e++;
      a = l;
    } while (a);
  }
  function oo(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          oo(a), Il(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function q1(e, t, a, l) {
    for (; e.nodeType === 1; ) {
      var n = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[$a]) switch (t) {
          case "meta":
            if (!e.hasAttribute("itemprop")) break;
            return e;
          case "link":
            if (i = e.getAttribute("rel"), i === "stylesheet" && e.hasAttribute("data-precedence")) break;
            if (i !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title)) break;
            return e;
          case "style":
            if (e.hasAttribute("data-precedence")) break;
            return e;
          case "script":
            if (i = e.getAttribute("src"), (i !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
            return e;
          default:
            return e;
        }
      } else if (t === "input" && e.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === i) return e;
      } else return e;
      if (e = Wt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function X1(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Wt(e.nextSibling), e === null)) return null;
    return e;
  }
  function of(e, t) {
    for (; e.nodeType !== 8; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Wt(e.nextSibling), e === null)) return null;
    return e;
  }
  function ro(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function fo(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Z1(e, t) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || a.readyState !== "loading") t();
    else {
      var l = function() {
        t(), a.removeEventListener("DOMContentLoaded", l);
      };
      a.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function Wt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var mo = null;
  function rf(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return Wt(e.nextSibling);
          t--;
        } else a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function df(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return e;
          t--;
        } else a !== "/$" && a !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function ff(e, t, a) {
    switch (t = Js(a), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(r(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(r(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(r(454));
        return e;
      default:
        throw Error(r(451));
    }
  }
  function wi(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Il(e);
  }
  var Ft = /* @__PURE__ */ new Map(), mf = /* @__PURE__ */ new Set();
  function Ks(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var qa = H.d;
  H.d = { f: Q1, r: V1, D: J1, C: K1, L: $1, m: W1, X: I1, S: F1, M: P1 };
  function Q1() {
    var e = qa.f(), t = Ys();
    return e || t;
  }
  function V1(e) {
    var t = ea(e);
    t !== null && t.tag === 5 && t.type === "form" ? kd(t) : qa.r(e);
  }
  var En = typeof document > "u" ? null : document;
  function hf(e, t, a) {
    var l = En;
    if (l && typeof t == "string" && t) {
      var n = I(t);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof a == "string" && (n += '[crossorigin="' + a + '"]'), mf.has(n) || (mf.add(n), e = { rel: e, crossOrigin: a, href: t }, l.querySelector(n) === null && (t = l.createElement("link"), xt(t, "link", e), Qe(t), l.head.appendChild(t)));
    }
  }
  function J1(e) {
    qa.D(e), hf("dns-prefetch", e, null);
  }
  function K1(e, t) {
    qa.C(e, t), hf("preconnect", e, t);
  }
  function $1(e, t, a) {
    qa.L(e, t, a);
    var l = En;
    if (l && e && t) {
      var n = 'link[rel="preload"][as="' + I(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (n += '[imagesrcset="' + I(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (n += '[imagesizes="' + I(a.imageSizes) + '"]')) : n += '[href="' + I(e) + '"]';
      var i = n;
      switch (t) {
        case "style":
          i = Mn(e);
          break;
        case "script":
          i = kn(e);
      }
      Ft.has(i) || (e = A({ rel: "preload", href: t === "image" && a && a.imageSrcSet ? void 0 : e, as: t }, a), Ft.set(i, e), l.querySelector(n) !== null || t === "style" && l.querySelector(ji(i)) || t === "script" && l.querySelector(Ai(i)) || (t = l.createElement("link"), xt(t, "link", e), Qe(t), l.head.appendChild(t)));
    }
  }
  function W1(e, t) {
    qa.m(e, t);
    var a = En;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + I(l) + '"][href="' + I(e) + '"]', i = n;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = kn(e);
      }
      if (!Ft.has(i) && (e = A({ rel: "modulepreload", href: e }, t), Ft.set(i, e), a.querySelector(n) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Ai(i))) return;
        }
        l = a.createElement("link"), xt(l, "link", e), Qe(l), a.head.appendChild(l);
      }
    }
  }
  function F1(e, t, a) {
    qa.S(e, t, a);
    var l = En;
    if (l && e) {
      var n = jl(l).hoistableStyles, i = Mn(e);
      t = t || "default";
      var c = n.get(i);
      if (!c) {
        var u = { loading: 0, preload: null };
        if (c = l.querySelector(ji(i))) u.loading = 5;
        else {
          e = A({ rel: "stylesheet", href: e, "data-precedence": t }, a), (a = Ft.get(i)) && ho(e, a);
          var d = c = l.createElement("link");
          Qe(d), xt(d, "link", e), d._p = new Promise(function(y, E) {
            d.onload = y, d.onerror = E;
          }), d.addEventListener("load", function() {
            u.loading |= 1;
          }), d.addEventListener("error", function() {
            u.loading |= 2;
          }), u.loading |= 4, $s(c, t, l);
        }
        c = { type: "stylesheet", instance: c, count: 1, state: u }, n.set(i, c);
      }
    }
  }
  function I1(e, t) {
    qa.X(e, t);
    var a = En;
    if (a && e) {
      var l = jl(a).hoistableScripts, n = kn(e), i = l.get(n);
      i || (i = a.querySelector(Ai(n)), i || (e = A({ src: e, async: true }, t), (t = Ft.get(n)) && po(e, t), i = a.createElement("script"), Qe(i), xt(i, "link", e), a.head.appendChild(i)), i = { type: "script", instance: i, count: 1, state: null }, l.set(n, i));
    }
  }
  function P1(e, t) {
    qa.M(e, t);
    var a = En;
    if (a && e) {
      var l = jl(a).hoistableScripts, n = kn(e), i = l.get(n);
      i || (i = a.querySelector(Ai(n)), i || (e = A({ src: e, async: true, type: "module" }, t), (t = Ft.get(n)) && po(e, t), i = a.createElement("script"), Qe(i), xt(i, "link", e), a.head.appendChild(i)), i = { type: "script", instance: i, count: 1, state: null }, l.set(n, i));
    }
  }
  function pf(e, t, a, l) {
    var n = (n = ee.current) ? Ks(n) : null;
    if (!n) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Mn(a.href), a = jl(n).hoistableStyles, l = a.get(t), l || (l = { type: "style", instance: null, count: 0, state: null }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = Mn(a.href);
          var i = jl(n).hoistableStyles, c = i.get(e);
          if (c || (n = n.ownerDocument || n, c = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, i.set(e, c), (i = n.querySelector(ji(e))) && !i._p && (c.instance = i, c.state.loading = 5), Ft.has(e) || (a = { rel: "preload", as: "style", href: a.href, crossOrigin: a.crossOrigin, integrity: a.integrity, media: a.media, hrefLang: a.hrefLang, referrerPolicy: a.referrerPolicy }, Ft.set(e, a), i || eh(n, e, a, c.state))), t && l === null) throw Error(r(528, ""));
          return c;
        }
        if (t && l !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = kn(a), a = jl(n).hoistableScripts, l = a.get(t), l || (l = { type: "script", instance: null, count: 0, state: null }, a.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, e));
    }
  }
  function Mn(e) {
    return 'href="' + I(e) + '"';
  }
  function ji(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function xf(e) {
    return A({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function eh(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), xt(t, "link", a), Qe(t), e.head.appendChild(t));
  }
  function kn(e) {
    return '[src="' + I(e) + '"]';
  }
  function Ai(e) {
    return "script[async]" + e;
  }
  function gf(e, t, a) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var l = e.querySelector('style[data-href~="' + I(a.href) + '"]');
        if (l) return t.instance = l, Qe(l), l;
        var n = A({}, a, { "data-href": a.href, "data-precedence": a.precedence, href: null, precedence: null });
        return l = (e.ownerDocument || e).createElement("style"), Qe(l), xt(l, "style", n), $s(l, a.precedence, e), t.instance = l;
      case "stylesheet":
        n = Mn(a.href);
        var i = e.querySelector(ji(n));
        if (i) return t.state.loading |= 4, t.instance = i, Qe(i), i;
        l = xf(a), (n = Ft.get(n)) && ho(l, n), i = (e.ownerDocument || e).createElement("link"), Qe(i);
        var c = i;
        return c._p = new Promise(function(u, d) {
          c.onload = u, c.onerror = d;
        }), xt(i, "link", l), t.state.loading |= 4, $s(i, a.precedence, e), t.instance = i;
      case "script":
        return i = kn(a.src), (n = e.querySelector(Ai(i))) ? (t.instance = n, Qe(n), n) : (l = a, (n = Ft.get(i)) && (l = A({}, a), po(l, n)), e = e.ownerDocument || e, n = e.createElement("script"), Qe(n), xt(n, "link", l), e.head.appendChild(n), t.instance = n);
      case "void":
        return null;
      default:
        throw Error(r(443, t.type));
    }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, $s(l, a.precedence, e));
    return t.instance;
  }
  function $s(e, t, a) {
    for (var l = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = l.length ? l[l.length - 1] : null, i = n, c = 0; c < l.length; c++) {
      var u = l[c];
      if (u.dataset.precedence === t) i = u;
      else if (i !== n) break;
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function ho(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function po(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Ws = null;
  function bf(e, t, a) {
    if (Ws === null) {
      var l = /* @__PURE__ */ new Map(), n = Ws = /* @__PURE__ */ new Map();
      n.set(a, l);
    } else n = Ws, l = n.get(a), l || (l = /* @__PURE__ */ new Map(), n.set(a, l));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), n = 0; n < a.length; n++) {
      var i = a[n];
      if (!(i[$a] || i[Oe] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = i.getAttribute(t) || "";
        c = e + c;
        var u = l.get(c);
        u ? u.push(i) : l.set(c, [i]);
      }
    }
    return l;
  }
  function yf(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(a, t === "title" ? e.querySelector("head > title") : null);
  }
  function th(e, t, a) {
    if (a === 1 || t.itemProp != null) return false;
    switch (e) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
        return true;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
        return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : true;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return true;
    }
    return false;
  }
  function vf(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function ah(e, t, a, l) {
    if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== false) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var n = Mn(l.href), i = t.querySelector(ji(n));
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Fs.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = i, Qe(i);
          return;
        }
        i = t.ownerDocument || t, l = xf(l), (n = Ft.get(n)) && ho(l, n), i = i.createElement("link"), Qe(i);
        var c = i;
        c._p = new Promise(function(u, d) {
          c.onload = u, c.onerror = d;
        }), xt(i, "link", l), a.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = Fs.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var xo = 0;
  function lh(e, t) {
    return e.stylesheets && e.count === 0 && Ps(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var l = setTimeout(function() {
        if (e.stylesheets && Ps(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && xo === 0 && (xo = 62500 * H1());
      var n = setTimeout(function() {
        if (e.waitingForImages = false, e.count === 0 && (e.stylesheets && Ps(e, e.stylesheets), e.unsuspend)) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, (e.imgBytes > xo ? 50 : 800) + t);
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(n);
      };
    } : null;
  }
  function Fs() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Ps(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Is = null;
  function Ps(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Is = /* @__PURE__ */ new Map(), t.forEach(nh, e), Is = null, Fs.call(e));
  }
  function nh(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Is.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Is.set(e, a);
        for (var n = e.querySelectorAll("link[data-precedence],style[data-precedence]"), i = 0; i < n.length; i++) {
          var c = n[i];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (a.set(c.dataset.precedence, c), l = c);
        }
        l && a.set(null, l);
      }
      n = t.instance, c = n.getAttribute("data-precedence"), i = a.get(c) || l, i === l && a.set(null, n), a.set(c, n), this.count++, l = Fs.bind(this), n.addEventListener("load", l), n.addEventListener("error", l), i ? i.parentNode.insertBefore(n, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Ei = { $$typeof: xe, Provider: null, Consumer: null, _currentValue: Q, _currentValue2: Q, _threadCount: 0 };
  function ih(e, t, a, l, n, i, c, u, d) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Nl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Nl(0), this.hiddenUpdates = Nl(null), this.identifierPrefix = l, this.onUncaughtError = n, this.onCaughtError = i, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = d, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function _f(e, t, a, l, n, i, c, u, d, y, E, z) {
    return e = new ih(e, t, a, c, d, y, E, z, u), t = 1, i === true && (t |= 24), i = Ct(3, null, null, t), e.current = i, i.stateNode = e, t = Kc(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = { element: l, isDehydrated: a, cache: t }, Ic(i), e;
  }
  function Nf(e) {
    return e ? (e = sn, e) : sn;
  }
  function Sf(e, t, a, l, n, i) {
    n = Nf(n), l.context === null ? l.context = n : l.pendingContext = n, l = tl(t), l.payload = { element: a }, i = i === void 0 ? null : i, i !== null && (l.callback = i), a = al(e, l, t), a !== null && (Tt(a, e, t), ii(a, e, t));
  }
  function wf(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function go(e, t) {
    wf(e, t), (e = e.alternate) && wf(e, t);
  }
  function jf(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Cl(e, 67108864);
      t !== null && Tt(t, e, 67108864), go(e, 67108864);
    }
  }
  function Af(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Yt();
      t = _a(t);
      var a = Cl(e, t);
      a !== null && Tt(a, e, t), go(e, t);
    }
  }
  var ec = true;
  function sh(e, t, a, l) {
    var n = S.T;
    S.T = null;
    var i = H.p;
    try {
      H.p = 2, bo(e, t, a, l);
    } finally {
      H.p = i, S.T = n;
    }
  }
  function ch(e, t, a, l) {
    var n = S.T;
    S.T = null;
    var i = H.p;
    try {
      H.p = 8, bo(e, t, a, l);
    } finally {
      H.p = i, S.T = n;
    }
  }
  function bo(e, t, a, l) {
    if (ec) {
      var n = yo(l);
      if (n === null) lo(e, t, l, tc, a), Mf(e, l);
      else if (oh(n, e, t, a, l)) l.stopPropagation();
      else if (Mf(e, l), t & 4 && -1 < uh.indexOf(e)) {
        for (; n !== null; ) {
          var i = ea(n);
          if (i !== null) switch (i.tag) {
            case 3:
              if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                var c = Pt(i.pendingLanes);
                if (c !== 0) {
                  var u = i;
                  for (u.pendingLanes |= 2, u.entangledLanes |= 2; c; ) {
                    var d = 1 << 31 - Ke(c);
                    u.entanglements[1] |= d, c &= ~d;
                  }
                  ba(i), (_e & 6) === 0 && (Hs = bt() + 500, _i(0));
                }
              }
              break;
            case 31:
            case 13:
              u = Cl(i, 2), u !== null && Tt(u, i, 2), Ys(), go(i, 2);
          }
          if (i = yo(l), i === null && lo(e, t, l, tc, a), i === n) break;
          n = i;
        }
        n !== null && l.stopPropagation();
      } else lo(e, t, l, null, a);
    }
  }
  function yo(e) {
    return e = kl(e), vo(e);
  }
  var tc = null;
  function vo(e) {
    if (tc = null, e = qt(e), e !== null) {
      var t = N(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (e = R(t), e !== null) return e;
          e = null;
        } else if (a === 31) {
          if (e = C(t), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return tc = e, null;
  }
  function Ef(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Hn()) {
          case va:
            return 2;
          case $l:
            return 8;
          case Rt:
          case Bn:
            return 32;
          case Gi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var _o = false, ml = null, hl = null, pl = null, Mi = /* @__PURE__ */ new Map(), ki = /* @__PURE__ */ new Map(), xl = [], uh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Mf(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        ml = null;
        break;
      case "dragenter":
      case "dragleave":
        hl = null;
        break;
      case "mouseover":
      case "mouseout":
        pl = null;
        break;
      case "pointerover":
      case "pointerout":
        Mi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ki.delete(t.pointerId);
    }
  }
  function zi(e, t, a, l, n, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: a, eventSystemFlags: l, nativeEvent: i, targetContainers: [n] }, t !== null && (t = ea(t), t !== null && jf(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e);
  }
  function oh(e, t, a, l, n) {
    switch (t) {
      case "focusin":
        return ml = zi(ml, e, t, a, l, n), true;
      case "dragenter":
        return hl = zi(hl, e, t, a, l, n), true;
      case "mouseover":
        return pl = zi(pl, e, t, a, l, n), true;
      case "pointerover":
        var i = n.pointerId;
        return Mi.set(i, zi(Mi.get(i) || null, e, t, a, l, n)), true;
      case "gotpointercapture":
        return i = n.pointerId, ki.set(i, zi(ki.get(i) || null, e, t, a, l, n)), true;
    }
    return false;
  }
  function kf(e) {
    var t = qt(e.target);
    if (t !== null) {
      var a = N(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = R(a), t !== null) {
            e.blockedOn = t, St(e.priority, function() {
              Af(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = C(a), t !== null) {
            e.blockedOn = t, St(e.priority, function() {
              Af(a);
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ac(e) {
    if (e.blockedOn !== null) return false;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = yo(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(a.type, a);
        vt = l, a.target.dispatchEvent(l), vt = null;
      } else return t = ea(a), t !== null && jf(t), e.blockedOn = a, false;
      t.shift();
    }
    return true;
  }
  function zf(e, t, a) {
    ac(e) && a.delete(t);
  }
  function rh() {
    _o = false, ml !== null && ac(ml) && (ml = null), hl !== null && ac(hl) && (hl = null), pl !== null && ac(pl) && (pl = null), Mi.forEach(zf), ki.forEach(zf);
  }
  function lc(e, t) {
    e.blockedOn === t && (e.blockedOn = null, _o || (_o = true, o.unstable_scheduleCallback(o.unstable_NormalPriority, rh)));
  }
  var nc = null;
  function Tf(e) {
    nc !== e && (nc = e, o.unstable_scheduleCallback(o.unstable_NormalPriority, function() {
      nc === e && (nc = null);
      for (var t = 0; t < e.length; t += 3) {
        var a = e[t], l = e[t + 1], n = e[t + 2];
        if (typeof l != "function") {
          if (vo(l || a) === null) continue;
          break;
        }
        var i = ea(a);
        i !== null && (e.splice(t, 3), t -= 3, bu(i, { pending: true, data: n, method: a.method, action: l }, l, n));
      }
    }));
  }
  function zn(e) {
    function t(d) {
      return lc(d, e);
    }
    ml !== null && lc(ml, e), hl !== null && lc(hl, e), pl !== null && lc(pl, e), Mi.forEach(t), ki.forEach(t);
    for (var a = 0; a < xl.length; a++) {
      var l = xl[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < xl.length && (a = xl[0], a.blockedOn === null); ) kf(a), a.blockedOn === null && xl.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null) for (l = 0; l < a.length; l += 3) {
      var n = a[l], i = a[l + 1], c = n[dt] || null;
      if (typeof i == "function") c || Tf(a);
      else if (c) {
        var u = null;
        if (i && i.hasAttribute("formAction")) {
          if (n = i, c = i[dt] || null) u = c.formAction;
          else if (vo(n) !== null) continue;
        } else u = c.action;
        typeof u == "function" ? a[l + 1] = u : (a.splice(l, 3), l -= 3), Tf(a);
      }
    }
  }
  function Rf() {
    function e(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({ handler: function() {
        return new Promise(function(c) {
          return n = c;
        });
      }, focusReset: "manual", scroll: "manual" });
    }
    function t() {
      n !== null && (n(), n = null), l || setTimeout(a, 20);
    }
    function a() {
      if (!l && !navigation.transition) {
        var i = navigation.currentEntry;
        i && i.url != null && navigation.navigate(i.url, { state: i.getState(), info: "react-transition", history: "replace" });
      }
    }
    if (typeof navigation == "object") {
      var l = false, n = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        l = true, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), n !== null && (n(), n = null);
      };
    }
  }
  function No(e) {
    this._internalRoot = e;
  }
  ic.prototype.render = No.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var a = t.current, l = Yt();
    Sf(a, l, e, t, null, null);
  }, ic.prototype.unmount = No.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Sf(e.current, 2, null, e, null, null), Ys(), t[fa] = null;
    }
  };
  function ic(e) {
    this._internalRoot = e;
  }
  ic.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ka();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < xl.length && t !== 0 && t < xl[a].priority; a++) ;
      xl.splice(a, 0, e), a === 0 && kf(e);
    }
  };
  var Of = p.version;
  if (Of !== "19.2.3") throw Error(r(527, Of, "19.2.3"));
  H.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = v(t), e = e !== null ? U(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var dh = { bundleType: 0, version: "19.2.3", rendererPackageName: "react-dom", currentDispatcherRef: S, reconcilerVersion: "19.2.3" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var sc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!sc.isDisabled && sc.supportsFiber) try {
      Gt = sc.inject(dh), nt = sc;
    } catch {
    }
  }
  return Ri.createRoot = function(e, t) {
    if (!g(e)) throw Error(r(299));
    var a = false, l = "", n = Yd, i = Ld, c = Gd;
    return t != null && (t.unstable_strictMode === true && (a = true), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = _f(e, 1, false, null, null, a, l, null, n, i, c, Rf), e[fa] = t.current, ao(e), new No(t);
  }, Ri.hydrateRoot = function(e, t, a) {
    if (!g(e)) throw Error(r(299));
    var l = false, n = "", i = Yd, c = Ld, u = Gd, d = null;
    return a != null && (a.unstable_strictMode === true && (l = true), a.identifierPrefix !== void 0 && (n = a.identifierPrefix), a.onUncaughtError !== void 0 && (i = a.onUncaughtError), a.onCaughtError !== void 0 && (c = a.onCaughtError), a.onRecoverableError !== void 0 && (u = a.onRecoverableError), a.formState !== void 0 && (d = a.formState)), t = _f(e, 1, true, t, a ?? null, l, n, d, i, c, u, Rf), t.context = Nf(null), a = t.current, l = Yt(), l = _a(l), n = tl(l), n.callback = null, al(a, n, l), a = l, t.current.lanes = a, Sl(t, a), ba(t), e[fa] = t.current, ao(e), new ic(t);
  }, Ri.version = "19.2.3", Ri;
}
var Xf;
function Nh() {
  if (Xf) return jo.exports;
  Xf = 1;
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
    } catch (p) {
      console.error(p);
    }
  }
  return o(), jo.exports = _h(), jo.exports;
}
var Sh = Nh();
const wh = (o) => o.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), jh = (o) => o.replace(/^([A-Z])|[\s-_]+(\w)/g, (p, h, r) => r ? r.toUpperCase() : h.toLowerCase()), Zf = (o) => {
  const p = jh(o);
  return p.charAt(0).toUpperCase() + p.slice(1);
}, lm = (...o) => o.filter((p, h, r) => !!p && p.trim() !== "" && r.indexOf(p) === h).join(" ").trim(), Ah = (o) => {
  for (const p in o) if (p.startsWith("aria-") || p === "role" || p === "title") return true;
};
var Eh = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
const Mh = w.forwardRef(({ color: o = "currentColor", size: p = 24, strokeWidth: h = 2, absoluteStrokeWidth: r, className: g = "", children: N, iconNode: R, ...C }, k) => w.createElement("svg", { ref: k, ...Eh, width: p, height: p, stroke: o, strokeWidth: r ? Number(h) * 24 / Number(p) : h, className: lm("lucide", g), ...!N && !Ah(C) && { "aria-hidden": "true" }, ...C }, [...R.map(([v, U]) => w.createElement(v, U)), ...Array.isArray(N) ? N : [N]]));
const Y = (o, p) => {
  const h = w.forwardRef(({ className: r, ...g }, N) => w.createElement(Mh, { ref: N, iconNode: p, className: lm(`lucide-${wh(Zf(o))}`, `lucide-${o}`, r), ...g }));
  return h.displayName = Zf(o), h;
};
const kh = [["path", { d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2", key: "169zse" }]], Ro = Y("activity", kh);
const zh = [["path", { d: "M12 5v14", key: "s699le" }], ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]], Th = Y("arrow-down", zh);
const Rh = [["path", { d: "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z", key: "w610uw" }]], Oo = Y("bone", Rh);
const Oh = [["path", { d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z", key: "hh9hay" }], ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }], ["path", { d: "M12 22V12", key: "d0xqtd" }]], Co = Y("box", Oh);
const Ch = [["path", { d: "M12 20v-9", key: "1qisl0" }], ["path", { d: "M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z", key: "uouzyp" }], ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }], ["path", { d: "M21 21a4 4 0 0 0-3.81-4", key: "1b0z45" }], ["path", { d: "M21 5a4 4 0 0 1-3.55 3.97", key: "5cxbf6" }], ["path", { d: "M22 13h-4", key: "1jl80f" }], ["path", { d: "M3 21a4 4 0 0 1 3.81-4", key: "1fjd4g" }], ["path", { d: "M3 5a4 4 0 0 0 3.55 3.97", key: "1d7oge" }], ["path", { d: "M6 13H2", key: "82j7cp" }], ["path", { d: "m8 2 1.88 1.88", key: "fmnt4t" }], ["path", { d: "M9 7.13V6a3 3 0 1 1 6 0v1.13", key: "1vgav8" }]], mc = Y("bug", Ch);
const Dh = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Uh = Y("check", Dh);
const Hh = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Rn = Y("chevron-right", Hh);
const Bh = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]], Yh = Y("circle-check", Bh);
const Lh = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }], ["path", { d: "M12 17h.01", key: "p32p05" }]], Gh = Y("circle-question-mark", Lh);
const qh = [["path", { d: "M12 6v6l4 2", key: "mmk7yg" }], ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], nm = Y("clock", qh);
const Xh = [["path", { d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973", key: "1cez44" }], ["path", { d: "m13 12-3 5h4l-3 5", key: "1t22er" }]], Do = Y("cloud-lightning", Xh);
const Zh = [["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]], Uo = Y("cloud", Zh);
const Qh = [["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }], ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }], ["path", { d: "M7 6h1v4", key: "1obek4" }], ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }]], Vh = Y("coins", Qh);
const Jh = [["path", { d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z", key: "1vdc57" }], ["path", { d: "M5 21h14", key: "11awu3" }]], Ho = Y("crown", Jh);
const Kh = [["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }], ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }], ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]], $h = Y("database", Kh);
const Wh = [["path", { d: "m10 16 1.5 1.5", key: "11lckj" }], ["path", { d: "m14 8-1.5-1.5", key: "1ohn8i" }], ["path", { d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993", key: "80uv8i" }], ["path", { d: "m16.5 10.5 1 1", key: "696xn5" }], ["path", { d: "m17 6-2.891-2.891", key: "xu6p2f" }], ["path", { d: "M2 15c6.667-6 13.333 0 20-6", key: "1pyr53" }], ["path", { d: "m20 9 .891.891", key: "3xwk7g" }], ["path", { d: "M3.109 14.109 4 15", key: "q76aoh" }], ["path", { d: "m6.5 12.5 1 1", key: "cs35ky" }], ["path", { d: "m7 18 2.891 2.891", key: "1sisit" }], ["path", { d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993", key: "q3hbxp" }]], Bo = Y("dna", Wh);
const Fh = [["path", { d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z", key: "1ptgy4" }], ["path", { d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97", key: "1sl1rz" }]], Yo = Y("droplets", Fh);
const Ih = [["path", { d: "M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z", key: "b19h5q" }], ["path", { d: "M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z", key: "h7h5ge" }]], Ph = Y("fast-forward", Ih);
const ep = [["path", { d: "M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z", key: "18jl4k" }], ["path", { d: "M16 8 2 22", key: "vp34q" }], ["path", { d: "M17.5 15H9", key: "1oz8nu" }]], Lo = Y("feather", ep);
const tp = [["path", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z", key: "1oefj6" }], ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }], ["path", { d: "M10 9H8", key: "b1mrlr" }], ["path", { d: "M16 13H8", key: "t4e002" }], ["path", { d: "M16 17H8", key: "z1uh3a" }]], ap = Y("file-text", tp);
const lp = [["path", { d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4", key: "1slcih" }]], Di = Y("flame", lp);
const np = [["path", { d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2", key: "18mbvz" }], ["path", { d: "M6.453 15h11.094", key: "3shlmq" }], ["path", { d: "M8.5 2h7", key: "csnxdl" }]], ip = Y("flask-conical", np);
const sp = [["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }], ["path", { d: "M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5", key: "14wa3c" }], ["path", { d: "M12 7.5V9", key: "1oy5b0" }], ["path", { d: "M7.5 12H9", key: "eltsq1" }], ["path", { d: "M16.5 12H15", key: "vk5kw4" }], ["path", { d: "M12 16.5V15", key: "k7eayi" }], ["path", { d: "m8 8 1.88 1.88", key: "nxy4qf" }], ["path", { d: "M14.12 9.88 16 8", key: "1lst6k" }], ["path", { d: "m8 16 1.88-1.88", key: "h2eex1" }], ["path", { d: "M14.12 14.12 16 16", key: "uqkrx3" }]], Go = Y("flower", sp);
const cp = [["path", { d: "M9 10h.01", key: "qbtxuw" }], ["path", { d: "M15 10h.01", key: "1qmjsl" }], ["path", { d: "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z", key: "uwwb07" }]], hc = Y("ghost", cp);
const up = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }], ["path", { d: "M2 12h20", key: "9i4pu4" }]], op = Y("globe", up);
const rp = [["path", { d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5", key: "mvr1a0" }], ["path", { d: "M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27", key: "auskq0" }]], qo = Y("heart-pulse", rp);
const dp = [["path", { d: "M5 22h14", key: "ehvnwv" }], ["path", { d: "M5 2h14", key: "pdyrp9" }], ["path", { d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22", key: "1d314k" }], ["path", { d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2", key: "1vvvr6" }]], Xo = Y("hourglass", dp);
const fp = [["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }], ["path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", key: "r6nss1" }]], mp = Y("house", fp);
const hp = [["path", { d: "M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8", key: "18ogeb" }]], pp = Y("infinity", hp);
const xp = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M12 16v-4", key: "1dtifu" }], ["path", { d: "M12 8h.01", key: "e9boi3" }]], gp = Y("info", xp);
const bp = [["path", { d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z", key: "zw3jo" }], ["path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12", key: "1wduqc" }], ["path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17", key: "kqbvx6" }]], Zo = Y("layers", bp);
const yp = [["path", { d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z", key: "nnexq3" }], ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]], Qo = Y("leaf", yp);
const vp = [["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }], ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]], pc = Y("lock", vp);
const _p = [["path", { d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z", key: "169xi5" }], ["path", { d: "M15 5.764v15", key: "1pn4in" }], ["path", { d: "M9 3.236v15", key: "1uimfh" }]], im = Y("map", _p);
const Np = [["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }], ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }], ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]], Sp = Y("monitor", Np);
const wp = [["path", { d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401", key: "kfwtm" }]], rc = Y("moon", wp);
const jp = [["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z", key: "otkl63" }]], dc = Y("mountain", jp);
const Ap = [["path", { d: "M20.341 6.484A10 10 0 0 1 10.266 21.85", key: "1enhxb" }], ["path", { d: "M3.659 17.516A10 10 0 0 1 13.74 2.152", key: "1crzgf" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }], ["circle", { cx: "19", cy: "5", r: "2", key: "mhkx31" }], ["circle", { cx: "5", cy: "19", r: "2", key: "v8kfzx" }]], Vo = Y("orbit", Ap);
const Ep = [["path", { d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z", key: "1a0edw" }], ["path", { d: "M12 22V12", key: "d0xqtd" }], ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }], ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]], Mp = Y("package", Ep);
const kp = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }], ["path", { d: "M3 9h18", key: "1pudct" }], ["path", { d: "M9 21V9", key: "1oto5p" }]], zp = Y("panels-top-left", kp);
const Tp = [["path", { d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z", key: "10ikf1" }]], Rp = Y("play", Tp);
const Op = [["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }], ["path", { d: "M21 3v5h-5", key: "1q7to0" }], ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }], ["path", { d: "M8 16H3v5", key: "1cv678" }]], Cp = Y("refresh-cw", Op);
const Dp = [["path", { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z", key: "m3kijz" }], ["path", { d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z", key: "1fmvmk" }], ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }], ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }]], Jo = Y("rocket", Dp);
const Up = [["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }], ["path", { d: "M3 3v5h5", key: "1xhq8a" }]], sm = Y("rotate-ccw", Up);
const Hp = [["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }], ["path", { d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3", key: "1ph1d7" }]], Bp = Y("scroll", Hp);
const Yp = [["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }], ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]], Qf = Y("search", Yp);
const Lp = [["path", { d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915", key: "1i5ecw" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]], xc = Y("settings", Lp);
const Gp = [["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }], ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }], ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }], ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }], ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]], qp = Y("share-2", Gp);
const Xp = [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]], Zp = Y("shield-check", Xp);
const Qp = [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }]], Hi = Y("shield", Qp);
const Vp = [["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }], ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }], ["path", { d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12", key: "9zh506" }]], Jp = Y("shopping-cart", Vp);
const Kp = [["path", { d: "m12.5 17-.5-1-.5 1h1z", key: "3me087" }], ["path", { d: "M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z", key: "1o5pge" }], ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }], ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }]], gc = Y("skull", Kp);
const $p = [["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }], ["path", { d: "M12 18h.01", key: "mhygvu" }]], Wp = Y("smartphone", $p);
const Fp = [["path", { d: "m10 20-1.25-2.5L6 18", key: "18frcb" }], ["path", { d: "M10 4 8.75 6.5 6 6", key: "7mghy3" }], ["path", { d: "m14 20 1.25-2.5L18 18", key: "1chtki" }], ["path", { d: "m14 4 1.25 2.5L18 6", key: "1b4wsy" }], ["path", { d: "m17 21-3-6h-4", key: "15hhxa" }], ["path", { d: "m17 3-3 6 1.5 3", key: "11697g" }], ["path", { d: "M2 12h6.5L10 9", key: "kv9z4n" }], ["path", { d: "m20 10-1.5 2 1.5 2", key: "1swlpi" }], ["path", { d: "M22 12h-6.5L14 15", key: "1mxi28" }], ["path", { d: "m4 10 1.5 2L4 14", key: "k9enpj" }], ["path", { d: "m7 21 3-6-1.5-3", key: "j8hb9u" }], ["path", { d: "m7 3 3 6h4", key: "1otusx" }]], Ko = Y("snowflake", Fp);
const Ip = [["path", { d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z", key: "1s2grr" }], ["path", { d: "M20 2v4", key: "1rf3ol" }], ["path", { d: "M22 4h-4", key: "gwowj6" }], ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]], Lt = Y("sparkles", Ip);
const Pp = [["path", { d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z", key: "r04s7s" }]], $o = Y("star", Pp);
const ex = [["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }], ["path", { d: "M12 2v2", key: "tus03m" }], ["path", { d: "M12 20v2", key: "1lh1kg" }], ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }], ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }], ["path", { d: "M2 12h2", key: "1t8f8n" }], ["path", { d: "M20 12h2", key: "1q8mjw" }], ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }], ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]], Wo = Y("sun", ex);
const tx = [["path", { d: "M12 2v8", key: "1q4o3n" }], ["path", { d: "m4.93 10.93 1.41 1.41", key: "2a7f42" }], ["path", { d: "M2 18h2", key: "j10viu" }], ["path", { d: "M20 18h2", key: "wocana" }], ["path", { d: "m19.07 10.93-1.41 1.41", key: "15zs5n" }], ["path", { d: "M22 22H2", key: "19qnx5" }], ["path", { d: "m8 6 4-4 4 4", key: "ybng9g" }], ["path", { d: "M16 18a4 4 0 0 0-8 0", key: "1lzouq" }]], Fo = Y("sunrise", tx);
const ax = [["path", { d: "m11 19-6-6", key: "s7kpr" }], ["path", { d: "m5 21-2-2", key: "1kw20b" }], ["path", { d: "m8 16-4 4", key: "1oqv8h" }], ["path", { d: "M9.5 17.5 21 6V3h-3L6.5 14.5", key: "pkxemp" }]], lx = Y("sword", ax);
const nx = [["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5", key: "1hfsw2" }], ["line", { x1: "13", x2: "19", y1: "19", y2: "13", key: "1vrmhu" }], ["line", { x1: "16", x2: "20", y1: "16", y2: "20", key: "1bron3" }], ["line", { x1: "19", x2: "21", y1: "21", y2: "19", key: "13pww6" }], ["polyline", { points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5", key: "hbey2j" }], ["line", { x1: "5", x2: "9", y1: "14", y2: "18", key: "1hf58s" }], ["line", { x1: "7", x2: "4", y1: "17", y2: "20", key: "pidxm4" }], ["line", { x1: "3", x2: "5", y1: "19", y2: "21", key: "1pehsh" }]], ix = Y("swords", nx);
const sx = [["path", { d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z", key: "vktsd0" }], ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]], cx = Y("tag", sx);
const ux = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]], Jl = Y("target", ux);
const ox = [["path", { d: "M12 19h8", key: "baeox8" }], ["path", { d: "m4 17 6-6-6-6", key: "1yngyt" }]], Vf = Y("terminal", ox);
const rx = [["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "17jzev" }]], Io = Y("thermometer", rx);
const dx = [["path", { d: "M16 7h6v6", key: "box55l" }], ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]], fx = Y("trending-up", dx);
const mx = [["path", { d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978", key: "1n3hpd" }], ["path", { d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978", key: "rfe1zi" }], ["path", { d: "M18 9h1.5a1 1 0 0 0 0-5H18", key: "7xy6bh" }], ["path", { d: "M4 22h16", key: "57wxv0" }], ["path", { d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z", key: "1mhfuq" }], ["path", { d: "M6 9H4.5a1 1 0 0 1 0-5H6", key: "tex48p" }]], Ui = Y("trophy", mx);
const hx = [["path", { d: "m17 2-5 5-5-5", key: "16satq" }], ["rect", { width: "20", height: "15", x: "2", y: "7", rx: "2", key: "1e6viu" }]], Po = Y("tv", hx);
const px = [["path", { d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z", key: "uqj9uw" }], ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }], ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]], bc = Y("volume-2", px);
const xx = [["path", { d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z", key: "uqj9uw" }], ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }], ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]], gx = Y("volume-x", xx);
const bx = [["path", { d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1", key: "knzxuh" }], ["path", { d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1", key: "2jd2cc" }], ["path", { d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1", key: "rd2r6e" }]], er = Y("waves", bx);
const yx = [["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }], ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }], ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }]], tr = Y("wind", yx);
const vx = [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]], Xa = Y("x", vx);
const _x = [["path", { d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z", key: "1xq2db" }]], oa = Y("zap", _x), ye = { baseTypingReward: 20, comboMultiplier: 0.5, moneyMilestones: [100, 500, 1e3, 5e3, 1e4, 5e4, 1e5], attributes: [{ id: "FIRE", name: "\u706B", color: "from-orange-500 to-red-600", glow: "shadow-orange-500/50", icon: "Flame", stats: { atk: 5, spd: 3, crit: 1 } }, { id: "WATER", name: "\u6C34", color: "from-blue-400 to-blue-600", glow: "shadow-blue-500/50", icon: "Droplets", stats: { atk: 3, spd: 5, crit: 1 } }, { id: "THUNDER", name: "\u96F7", color: "from-yellow-300 to-yellow-500", glow: "shadow-yellow-400/50", icon: "Zap", stats: { atk: 4, spd: 6, crit: 2 } }, { id: "WIND", name: "\u98A8", color: "from-green-400 to-emerald-600", glow: "shadow-emerald-500/50", icon: "Wind", stats: { atk: 2, spd: 8, crit: 1 } }, { id: "LIGHT", name: "\u5149", color: "from-amber-300 to-yellow-500 text-amber-950", glow: "shadow-yellow-500/50", icon: "Sun", stats: { atk: 7, spd: 4, crit: 3 } }, { id: "DARK", name: "\u95C7", color: "from-purple-800 to-black", glow: "shadow-purple-900/50", icon: "Moon", stats: { atk: 8, spd: 2, crit: 4 } }, { id: "ICE", name: "\u6C37", color: "from-cyan-200 to-blue-400 text-blue-900", glow: "shadow-cyan-400/50", icon: "Snowflake", stats: { atk: 4, spd: 4, crit: 2 } }, { id: "EARTH", name: "\u571F", color: "from-yellow-700 to-amber-900", glow: "shadow-amber-900/50", icon: "Mountain", stats: { atk: 6, spd: 2, crit: 1 } }, { id: "TOXIC", name: "\u6BD2", color: "from-lime-400 to-purple-600", glow: "shadow-lime-500/50", icon: "Skull", stats: { atk: 3, spd: 3, crit: 5 } }, { id: "GRAVITY", name: "\u91CD", color: "from-indigo-900 to-black", glow: "shadow-indigo-500/50", icon: "Orbit", stats: { atk: 10, spd: 1, crit: 2 } }, { id: "SOUL", name: "\u9B42", color: "from-teal-300 to-emerald-500", glow: "shadow-teal-400/50", icon: "Ghost", stats: { atk: 5, spd: 5, crit: 5 } }, { id: "METAL", name: "\u91D1", color: "from-slate-300 to-slate-500 text-slate-900", glow: "shadow-slate-400/50", icon: "Shield", stats: { atk: 7, spd: 2, crit: 2 } }, { id: "BLOOD", name: "\u8840", color: "from-red-600 to-red-900", glow: "shadow-red-700/50", icon: "HeartPulse", stats: { atk: 8, spd: 5, crit: 6 } }, { id: "TIME", name: "\u6642", color: "from-amber-200 to-yellow-500", glow: "shadow-yellow-500/50", icon: "Hourglass", stats: { atk: 2, spd: 12, crit: 3 } }, { id: "SPACE", name: "\u7A7A", color: "from-indigo-900 to-purple-900", glow: "shadow-purple-700/50", icon: "Rocket", stats: { atk: 12, spd: 3, crit: 8 } }, { id: "NATURE", name: "\u68EE", color: "from-green-500 to-emerald-800", glow: "shadow-green-600/50", icon: "Leaf", stats: { atk: 4, spd: 9, crit: 2 } }, { id: "STORM", name: "\u5D50", color: "from-slate-400 to-blue-900", glow: "shadow-blue-900/50", icon: "CloudLightning", stats: { atk: 8, spd: 8, crit: 4 } }, { id: "STAR", name: "\u661F", color: "from-yellow-100 to-white text-yellow-900", glow: "shadow-white/50", icon: "Star", stats: { atk: 10, spd: 10, crit: 10 } }, { id: "HOLY", name: "\u8056", color: "from-pink-100 to-white text-pink-900", glow: "shadow-pink-300/50", icon: "Sparkles", stats: { atk: 15, spd: 5, crit: 5 } }, { id: "CHAOS", name: "\u6DF7", color: "from-fuchsia-900 to-black", glow: "shadow-fuchsia-900/50", icon: "Dna", stats: { atk: 20, spd: 15, crit: 15 } }, { id: "MAGMA", name: "\u6EB6", color: "from-orange-600 to-red-900", glow: "shadow-red-600/50", icon: "Flame", stats: { atk: 12, spd: 2, crit: 3 } }, { id: "STEAM", name: "\u84B8", color: "from-slate-200 to-blue-300 text-slate-900", glow: "shadow-blue-300/50", icon: "Cloud", stats: { atk: 5, spd: 7, crit: 2 } }, { id: "PLASMA", name: "\u96FB", color: "from-purple-400 to-blue-600", glow: "shadow-blue-500/50", icon: "Zap", stats: { atk: 14, spd: 6, crit: 4 } }, { id: "QUAKE", name: "\u9707", color: "from-stone-600 to-black", glow: "shadow-stone-700/50", icon: "Mountain", stats: { atk: 18, spd: 1, crit: 2 } }, { id: "ZERO", name: "\u96F6", color: "from-white to-sky-100 text-sky-900", glow: "shadow-white/70", icon: "Thermometer", stats: { atk: 12, spd: 4, crit: 8 } }, { id: "AURA", name: "\u6C17", color: "from-emerald-300 to-teal-500 text-emerald-950", glow: "shadow-teal-400/50", icon: "Waves", stats: { atk: 6, spd: 12, crit: 3 } }, { id: "MIRROR", name: "\u93E1", color: "from-gray-100 to-gray-400 text-gray-900", glow: "shadow-gray-300/50", icon: "Layers", stats: { atk: 8, spd: 8, crit: 8 } }, { id: "ECHO", name: "\u53CD", color: "from-indigo-300 to-indigo-600", glow: "shadow-indigo-500/50", icon: "Volume2", stats: { atk: 4, spd: 18, crit: 2 } }, { id: "ABYSS", name: "\u6DF5", color: "from-black to-purple-950", glow: "shadow-purple-950/50", icon: "Moon", stats: { atk: 25, spd: 1, crit: 5 } }, { id: "ZENITH", name: "\u9802", color: "from-yellow-400 to-orange-500 text-white", glow: "shadow-orange-400/50", icon: "Sunrise", stats: { atk: 18, spd: 5, crit: 10 } }, { id: "PULSE", name: "\u8108", color: "from-lime-400 to-green-600", glow: "shadow-lime-500/50", icon: "Activity", stats: { atk: 5, spd: 22, crit: 3 } }, { id: "DRAGON", name: "\u9F8D", color: "from-red-700 to-amber-600", glow: "shadow-red-800/50", icon: "Crown", stats: { atk: 22, spd: 8, crit: 8 } }, { id: "FEATHER", name: "\u7FBD", color: "from-cyan-100 to-white text-cyan-900", glow: "shadow-cyan-100/50", icon: "Feather", stats: { atk: 3, spd: 25, crit: 2 } }, { id: "PETAL", name: "\u82B1", color: "from-pink-300 to-rose-500", glow: "shadow-rose-400/50", icon: "Flower", stats: { atk: 6, spd: 15, crit: 5 } }, { id: "BONE", name: "\u9AA8", color: "from-slate-100 to-slate-300 text-slate-900", glow: "shadow-slate-300/50", icon: "Bone", stats: { atk: 12, spd: 4, crit: 12 } }, { id: "GEAR", name: "\u6B6F", color: "from-orange-800 to-stone-900 text-orange-200", glow: "shadow-orange-900/50", icon: "Settings", stats: { atk: 10, spd: 12, crit: 4 } }, { id: "NEON", name: "\u96FB", color: "from-fuchsia-500 to-cyan-500", glow: "shadow-fuchsia-500/50", icon: "Tv", stats: { atk: 15, spd: 15, crit: 15 } }, { id: "PIXEL", name: "\u753B", color: "from-yellow-400 via-red-500 to-blue-500 text-white", glow: "shadow-yellow-400/50", icon: "Box", stats: { atk: 10, spd: 10, crit: 10 } }, { id: "VIRUS", name: "\u611F", color: "from-purple-600 via-green-600 to-black", glow: "shadow-green-600/50", icon: "Bug", stats: { atk: 8, spd: 30, crit: 5 } }, { id: "CORE", name: "\u6838", color: "from-white via-red-500 to-black text-white", glow: "shadow-red-600/50", icon: "Target", stats: { atk: 50, spd: 1, crit: 1 } }], feverTriggerCombo: 30, feverMultiplier: 3, upgrades: [{ id: "apprentice", name: "\u30C9\u30B8\u3063\u5B50\u898B\u7FD2\u3044", description: "1\u79D2\u3054\u3068\u306B\u9B54\u529B\u3092\u62FE\u3063\u3066\u304F\u308B", lore: "\u30AD\u30FC\u30DC\u30FC\u30C9\u306E\u300CA\u300D\u3068\u300CS\u300D\u3057\u304B\u62BC\u305B\u306A\u3044\u6B8B\u5FF5\u306A\u5B50\u3002\u3088\u304F\u8EE2\u3093\u3067\u30B3\u30F3\u30BB\u30F3\u30C8\u3092\u629C\u3044\u3066\u3057\u307E\u3046\u3002\u597D\u7269\u306F\u30B3\u30FC\u30E9\u3002", baseIncome: 1, baseCost: 50, costMultiplier: 1.15, icon: "Cpu", image: "/assets/apprentice_icon.png" }, { id: "pot", name: "\u8B0E\u306E\u3084\u304B\u3093", description: "\u6CB8\u9A30\u3057\u305F\u9B54\u529B\u3092\u6CE8\u3044\u3067\u304F\u308B", lore: "\u305F\u3060\u306E\u3084\u304B\u3093\u306B\u898B\u3048\u308B\u304C\u3001\u4E2D\u8EAB\u306F\u7121\u9650\u306E\u30AB\u30C3\u30D7\u9EBA\u30B9\u30FC\u30D7\u3089\u3057\u3044\u3002\u591C\u4E2D\u306B\u52DD\u624B\u306B\u6CB8\u304F\u97F3\u304C\u3059\u308B\u3002", baseIncome: 5, baseCost: 250, costMultiplier: 1.2, icon: "Bot", image: "/assets/upgrades/pot.png" }, { id: "array", name: "\u5730\u4E0B\u306E\u30D2\u30DF\u30C4\u57FA\u5730", description: "\u5730\u9762\u304B\u3089\u8B0E\u30D1\u30EF\u30FC\u3092\u96C6\u3081\u308B", lore: "\u56E3\u5730\u306E\u5730\u4E0B\u306B\u52DD\u624B\u306B\u4F5C\u3063\u305F\u79D8\u5BC6\u57FA\u5730\u3002\u30DE\u30F3\u30AC\u672C\u304C3000\u518A\u7F6E\u3044\u3066\u3042\u308B\u3002\u305F\u307E\u306B\u304A\u6BCD\u3055\u3093\u306B\u6012\u3089\u308C\u308B\u3002", baseIncome: 25, baseCost: 1e3, costMultiplier: 1.25, icon: "Zap", image: "/assets/upgrades/base.png" }, { id: "homunculus", name: "\u30D5\u30E9\u30B9\u30B3\u4EBA\u9593", description: "\u4E3B\u306B\u4EE3\u308F\u3063\u3066\u5BBF\u984C\u3092\u3084\u3063\u3066\u304F\u308C\u308B", lore: "\u7406\u79D1\u306E\u5B9F\u9A13\u3067\u751F\u307E\u308C\u305F\u7DD1\u8272\u306E\u30B9\u30E9\u30A4\u30E0\u4EBA\u9593\u3002\u300C\u30DC\u30AF\u30CF\u3001\u30EF\u30EB\u30E1\u30CA\u30E9\u3001\u30CA\u30A4\u300D\u3068\u7247\u8A00\u3067\u558B\u308B\u3002\u610F\u5916\u3068\u3044\u3044\u3084\u3064\u3002", baseIncome: 120, baseCost: 5500, costMultiplier: 1.3, icon: "Server", image: "/assets/homunculus_icon.png" }, { id: "philosopher", name: "\u30D4\u30AB\u30D4\u30AB\u306E\u77F3", description: "\u6301\u3063\u3066\u3044\u308B\u3060\u3051\u3067\u306A\u3093\u304B\u30B9\u30B4\u30A4", lore: "\u5DDD\u539F\u3067\u62FE\u3063\u305F\u5909\u306A\u77F3\u3002\u6CB9\u6027\u30DA\u30F3\u3067\u9854\u304C\u63CF\u3044\u3066\u3042\u308B\u3002\u6697\u95C7\u3067\u5149\u308B\u306E\u3067\u3001\u30C8\u30A4\u30EC\u306B\u884C\u304F\u3068\u304D\u306B\u4FBF\u5229\u3002", baseIncome: 500, baseCost: 25e3, costMultiplier: 1.4, icon: "Brain", image: "/assets/upgrades/stone.png" }], loreLogs: [{ id: "log-001", title: "\u30D2\u30DF\u30C4\u65E5\u8A18\uFF1A\u305D\u306E\uFF11", content: "\u4ECA\u65E5\u306F\u5909\u306A\u30C9\u30E9\u30B4\u30F3\u3092\u62FE\u3063\u305F\u3002\u30D1\u30BD\u30B3\u30F3\u306E\u753B\u9762\u304B\u3089\u51FA\u3066\u304D\u3066\u3001\u30AA\u30EC\u306E\u30DD\u30C6\u30C1\u3092\u52DD\u624B\u306B\u98DF\u3079\u305F\uFF01\u8A31\u3055\u3093\uFF01\u3067\u3082\u3001\u30AD\u30FC\u30DC\u30FC\u30C9\u3092\u53E9\u304F\u3068\u559C\u3076\u307F\u305F\u3044\u3060\u3002", unlockThreshold: 1e3 }, { id: "log-002", title: "\u6575\u306E\u6B63\u4F53", content: "\u6575\u306E\u300C\u30D0\u30B0\u8ECD\u56E3\u300D\u306F\u3001\u5B9F\u306F\u66F8\u304D\u304B\u3051\u306E\u5BBF\u984C\u3084\u3001\u30C6\u30B9\u30C8\u306E0\u70B9\u306E\u7B54\u6848\u304C\u30E2\u30F3\u30B9\u30BF\u30FC\u306B\u306A\u3063\u305F\u59FF\u3089\u3057\u3044\u3002\u3060\u304B\u3089\u5012\u3059\u3068\u30B9\u30C3\u30AD\u30EA\u3059\u308B\u306E\u304B\uFF01", unlockThreshold: 5e3 }, { id: "log-003", title: "\u30C9\u30E9\u30B4\u30F3\u306E\u9032\u5316", content: "\u3053\u3044\u3064\u3001\u3060\u3093\u3060\u3093\u5927\u304D\u304F\u306A\u3063\u3066\u304D\u305F\u3002\u6628\u65E5\u306F\u30AD\u30FC\u30DC\u30FC\u30C9\u306E\u4E0A\u3067\u5BDD\u3066\u305F\u306E\u306B\u3001\u4ECA\u65E5\u306F\u51B7\u8535\u5EAB\u3092\u958B\u3051\u3066\u725B\u4E73\u3092\u98F2\u3093\u3067\u305F\u3002\u6700\u7D42\u7684\u306B\u3069\u3046\u306A\u3063\u3061\u3083\u3046\u306E\uFF01\uFF1F", unlockThreshold: 2e4 }], worlds: [{ id: "GENESIS", name: "\u59CB\u307E\u308A\u306E\u8349\u539F", description: "\u65C5\u306E\u59CB\u307E\u308A\u3060\u3002\u307E\u305A\u306F\u3053\u3053\u3092\u5236\u8987\u305B\u3088\u3002", theme: "Nature/Green", hpScale: 1, rewardScale: 1, mechanic: "NORMAL", bg: "/assets/worlds/genesis.png" }, { id: "CYBERIA", name: "\u9B54\u529B\u306E\u7802\u6F20", description: "\u9B54\u529B\u304C\u6E26\u5DFB\u304F\u4E7E\u71E5\u5730\u5E2F\u3002\u30D0\u30EA\u30A2\u3092\u6301\u3064\u6575\u304C\u7ACB\u3061\u3075\u3055\u304C\u308B\u3060\u308D\u3046\u3002", theme: "Desert/Sand", hpScale: 2.5, rewardScale: 2, mechanic: "BARRIER", bg: "/assets/worlds/cyberia.png" }, { id: "ETERNITY", name: "\u5929\u7A7A\u306E\u9B54\u5BAE", description: "\u96F2\u306E\u4E0A\u306B\u305D\u3073\u3048\u7ACB\u3064\u5BAE\u6BBF\u3002\u91CD\u529B\u304C\u541B\u306E\u9B54\u529B\u3092\u8A66\u3059\u306F\u305A\u3060\u3002", theme: "Sky/Ancient", hpScale: 6, rewardScale: 4, mechanic: "GRAVITY", bg: "/assets/worlds/eternity.png" }, { id: "LEGEND", name: "\u4F1D\u8AAC\u306E\u8056\u6226", description: "\u8A9E\u308A\u7D99\u304C\u308C\u308B\u7A76\u6975\u306E\u6226\u5834\u3002\u899A\u609F\u3057\u3066\u6311\u3080\u304C\u826F\u3044\u3002", theme: "Holy/Epic", hpScale: 12, rewardScale: 10, mechanic: "LEGENDAY", bg: "/assets/worlds/legend.png" }] }, Jf = (o, p) => Math.floor(o.baseCost * Math.pow(o.costMultiplier, p)), Kf = [{ name: "\u9759\u304B\u306A\u307B\u3068\u308A", bg: "/assets/deep_web_arena_bg.png", element: "WATER", prefix: "River" }, { name: "\u3055\u3055\u3084\u304D\u306E\u68EE", bg: "/assets/snack_world_battle_bg.png", element: "WIND", prefix: "Forest" }, { name: "\u71C3\u3048\u308B\u6D1E\u7A9F", bg: "/assets/deep_web_arena_bg.png", element: "FIRE", prefix: "Cave" }, { name: "\u3044\u306B\u3057\u3048\u306E\u907A\u8DE1", bg: "/assets/deep_web_arena_bg.png", element: "EARTH", prefix: "Ruin" }, { name: "\u88C1\u304D\u306E\u96F7", bg: "/assets/deep_web_arena_bg.png", element: "THUNDER", prefix: "Thunder" }, { name: "\u5F71\u306E\u8C37", bg: "/assets/deep_web_arena_bg.png", element: "DARK", prefix: "Shadow" }], $f = ["\u30B9\u30E9\u30A4\u30E0", "\u30B4\u30D6\u30EA\u30F3", "\u30AA\u30FC\u30AF", "\u30B9\u30B1\u30EB\u30C8\u30F3", "\u30A6\u30EB\u30D5", "\u30B3\u30A6\u30E2\u30EA", "\u30B4\u30FC\u30EC\u30E0", "\u6B7B\u795E", "\u30AD\u30DE\u30A4\u30E9", "\u30C9\u30E9\u30B4\u30F3"], Wf = ["/assets/custom_units/magi_unit_192221.png", "/assets/custom_units/magi_unit_213515.png", "/assets/custom_units/magi_unit_213510.png", "/assets/custom_units/magi_unit_190839.png", "/assets/custom_units/magi_unit_190851.png"], cc = (o, p) => {
  let h = [];
  const r = ye.worlds.find((g) => g.id === o);
  if (!r) return [];
  r.hpScale;
  for (let g = 1; g <= p; g++) {
    const N = Kf[(g - 1) % Kf.length];
    for (let R = 1; R <= 10; R++) {
      const C = R === 10, k = `${r.name} ${g}-${R} ${N.name}`, v = C ? `\u3010\u30DC\u30B9\u3011 ${N.prefix} \u30ED\u30FC\u30C9` : $f[Math.floor(Math.random() * $f.length)];
      h.push({ chapter: g, stage: R, name: k, enemy: v, element: N.element, bg: r.bg || N.bg, image: Wf[(g + R) % Wf.length], isBoss: C });
    }
  }
  return h;
};
ye.allStages = { GENESIS: cc("GENESIS", 30), CYBERIA: cc("CYBERIA", 30), ETERNITY: cc("ETERNITY", 30), LEGEND: cc("LEGEND", 50) };
ye.stages = ye.allStages.GENESIS;
ye.lore = { 1: `\u3010\u30B7\u30B9\u30C6\u30E0\u30ED\u30B0 001\u3011
\u30B7\u30DF\u30E5\u30EC\u30FC\u30B7\u30E7\u30F3\u3092\u958B\u59CB\u3057\u307E\u3059\u3002\u88AB\u9A13\u8005\uFF1A\u4EBA\u985E\u3002\u76EE\u7684\uFF1A\u9B54\u529B\uFF08MP\uFF09\u306B\u3088\u308B\u73FE\u5B9F\u6539\u5909\u306E\u53EF\u80FD\u6027\u306E\u691C\u8A3C\u3002`, 5: `\u3010\u7BA1\u7406\u8005\u30E1\u30E2\u3011
\u88AB\u9A13\u8005\u306E\u9069\u5FDC\u901F\u5EA6\u304C\u4E88\u60F3\u3092\u4E0A\u56DE\u3063\u3066\u3044\u308B\u3002\u30AD\u30FC\u30DC\u30FC\u30C9\u5165\u529B\u306B\u3088\u308B\u8A60\u5531\u30D7\u30ED\u30BB\u30B9\u306F\u3001\u8133\u306E\u8A00\u8A9E\u91CE\u3092\u76F4\u63A5\u523A\u6FC0\u3057\u3066\u3044\u308B\u3088\u3046\u3060\u3002`, 10: `\u3010\u8B66\u544A\u3011
\u30BB\u30AF\u30BF\u30FC10\u306B\u3066\u300C\u7279\u7570\u70B9\u300D\u3092\u89B3\u6E2C\u3002AI\u304C\u81EA\u6211\u3092\u6301\u3061\u59CB\u3081\u305F\u5F62\u8DE1\u3042\u308A\u3002\u524A\u9664\u3092\u63A8\u5968\u3057\u307E\u3059\u3002`, 20: `\u3010\u65AD\u7247\u30C7\u30FC\u30BF\u3011
...\u52A9\u3051\u3066...\u3053\u3053\u306F\u30B2\u30FC\u30E0\u3058\u3083\u306A\u3044...\u79C1\u306E\u610F\u8B58\u306F...\u30B3\u30FC\u30C9\u306B...\u5909\u63DB\u3055\u308C\u3066...`, 30: `\u3010\u30B7\u30B9\u30C6\u30E0\u30ED\u30B0 303\u3011
\u30A4\u30FC\u30B5\u754C\u306E\u6DF1\u5C64\u306B\u3066\u3001\u65E7\u6642\u4EE3\u306E\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u306E\u6B8B\u9AB8\u3092\u767A\u898B\u3002\u300C\u63B2\u793A\u677F\u300D\u3068\u547C\u3070\u308C\u308B\u53E4\u4EE3\u306E\u30B3\u30DF\u30E5\u30CB\u30B1\u30FC\u30B7\u30E7\u30F3\u30C4\u30FC\u30EB\u306E\u6210\u308C\u306E\u679C\u3066\u3060\u3002`, 50: `\u3010\u771F\u5B9F\u306E\u5553\u793A\u3011
\u541B\u304C\u6226\u3063\u3066\u3044\u308B\u300C\u6575\u300D\u306E\u6B63\u4F53\u304C\u308F\u304B\u3063\u305F\u304B\uFF1F \u3042\u308C\u306F\u30D0\u30B0\u3067\u306F\u306A\u3044\u3002\u304B\u3064\u3066\u3053\u306E\u4E16\u754C\u306B\u5B58\u5728\u3057\u3066\u3044\u305F\u300C\u5FD8\u308C\u3089\u308C\u305F\u60C5\u5831\u300D\u305F\u3061\u306E\u6028\u5FF5\u3060\u3002`, 75: `\u3010\u5D29\u58CA\u306E\u4E88\u5146\u3011
\u4E16\u754C\u306E\u30C6\u30AF\u30B9\u30C1\u30E3\u304C\u5265\u304C\u308C\u843D\u3061\u3066\u3044\u304F\u3002\u541B\u306E\u300C\u6307\u300D\u306E\u52D5\u304D\u3060\u3051\u304C\u3001\u3053\u306E\u5D29\u58CA\u3092\u7E4B\u304E\u6B62\u3081\u3066\u3044\u308B\u552F\u4E00\u306E\u6954\u3060\u3002`, 90: `\u3010\u7BA1\u7406\u8005\u6A29\u9650\u8B72\u6E21\u3011
\u3082\u3046\u9650\u754C\u3060\u3002\u79C1\u306F\u6D88\u3048\u308B\u3002\u3053\u308C\u3088\u308A\u5148\u306E\u6A29\u9650\u3092\u3001\u6700\u3082\u512A\u308C\u305F\u300C\u30D7\u30EC\u30A4\u30E4\u30FC\u300D\u3067\u3042\u308B\u541B\u306B\u8B72\u6E21\u3059\u308B\u3002\u983C\u3093\u3060\u305E\u3002`, 99: `\u3010\u6700\u7D42\u8B66\u544A\u3011
\u6B21\u306E\u6249\u3092\u958B\u3051\u3070\u3001\u3082\u3046\u5143\u306E\u73FE\u5B9F\u306B\u306F\u623B\u308C\u306A\u3044\u3002\u305D\u308C\u3067\u3082\u9032\u3080\u304B\uFF1F`, 100: `\u3010THE END OF WORLD\u3011
\u63A5\u7D9A\u5B8C\u4E86\u3002\u3088\u3046\u3053\u305D\u3001\u65B0\u3057\u3044\u795E\u3088\u3002` };
const uc = (o, p = ["FIRE", "WATER"]) => {
  const h = [], r = ye.attributes.filter((N) => p.includes(N.id)), g = r.length > 0 ? r : [ye.attributes[0]];
  for (let N = 0; N < o; N++) {
    const R = Math.floor(Math.random() * g.length);
    h.push(g[R].id);
  }
  return h;
}, cm = ({ level: o = 1, isAttacking: p = false, dialogue: h = "", isIdle: r = false }) => {
  const [g, N] = w.useState(0), [R, C] = w.useState(""), [k, v] = w.useState(false), [U, A] = w.useState([]);
  w.useEffect(() => {
    const X = setInterval(() => {
      N((pe) => (pe + 1) % 4);
    }, 200);
    return () => clearInterval(X);
  }, []), w.useEffect(() => {
    if (h) {
      setTimeout(() => C(h), 0);
      const X = setTimeout(() => C(""), 3e3);
      return () => clearTimeout(X);
    } else if (r && !R) {
      const X = ["\u3046\u3045\u30FC\u3080...", "\u9B54\u529B\u56DE\u8DEF\u304C\u7E4B\u304C\u308B...", "\u3082\u3063\u3068...\u8A60\u5531\u3092...", "zZZ...", "\u81F3\u9AD8\u306E...\u9B54\u5C0E..."], pe = setInterval(() => {
        Math.random() > 0.7 && (C(X[Math.floor(Math.random() * X.length)]), setTimeout(() => C(""), 3e3));
      }, 1e4);
      return () => clearInterval(pe);
    }
  }, [h, r, R]);
  const $ = (X) => X >= 500 ? 8 : X >= 200 ? 7 : X >= 100 ? 6 : X >= 50 ? 5 : X >= 20 ? 4 : X >= 10 ? 3 : X >= 5 ? 2 : 1, J = (X) => {
    if (X && X.stopPropagation(), v(true), setTimeout(() => v(false), 500), X) {
      const Te = X.currentTarget.getBoundingClientRect(), xe = X.clientX - Te.left, fe = X.clientY - Te.top, he = { id: Date.now(), x: xe, y: fe };
      A((se) => [...se, he]), setTimeout(() => A((se) => se.filter((W) => W.id !== he.id)), 1e3);
    }
    const pe = ["\u304D\u3085\u301C\uFF01", "\u3082\u3063\u3068\u64AB\u3067\u3066\uFF01", "\u6211\u304C\u4E3B\u3088...", "\u529B\u304C...\u6E67\u3044\u3066\u304F\u308B...", "\u3093\u3075\u3075..."];
    C(pe[Math.floor(Math.random() * pe.length)]), setTimeout(() => C(""), 1500);
  }, Z = $(o), ae = Z >= 8 ? 80 : 40 + Z * 8;
  return s.jsxs("div", { className: "relative", style: { width: ae, height: ae }, children: [R && s.jsx("div", { className: `absolute -top-16 left-1/2 -translate-x-1/2 w-32 ${Z >= 8 ? "bg-yellow-400 text-black border-white" : "bg-white text-black border-neon-purple"} p-2 rounded-xl text-[10px] font-black italic shadow-2xl border-2 animate-in slide-in-from-bottom-2 fade-in`, children: s.jsxs("div", { className: "relative", children: [R, s.jsx("div", { className: `absolute -bottom-4 left-1/2 -translate-x-1/2 border-8 border-transparent ${Z >= 8 ? "border-t-yellow-400" : "border-t-white"}` })] }) }), s.jsx("div", { className: `
                    absolute inset-0 transition-all duration-200
                    ${p ? "animate-bounce" : ""}
                    ${r ? "animate-sleep-breath opacity-80" : ""}
                    ${k ? "scale-110 rotate-3 filter brightness-125" : ""}
                    cursor-pointer hover:scale-105
                `, onClick: J, style: { transform: `translateY(${Math.sin(g * 0.5) * 2}px)` }, children: Z === 1 ? s.jsxs("svg", { viewBox: "0 0 32 32", className: "w-full h-full", children: [s.jsx("rect", { x: "8", y: "12", width: "16", height: "12", fill: "#3b82f6" }), s.jsx("rect", { x: "20", y: "8", width: "8", height: "8", fill: "#3b82f6" }), r ? s.jsx("rect", { x: "24", y: "11", width: "2", height: "1", fill: "#000", opacity: "0.6" }) : s.jsx("rect", { x: "24", y: "10", width: "2", height: "2", fill: "#FF0000" }), s.jsx("polygon", { points: "8,12 4,8 4,16", fill: "#60a5fa", opacity: "0.8" }), s.jsx("polygon", { points: "24,12 28,8 28,16", fill: "#60a5fa", opacity: "0.8" }), s.jsx("rect", { x: "4", y: "16", width: "4", height: "4", fill: "#3b82f6" }), s.jsx("rect", { x: "2", y: "18", width: "2", height: "2", fill: "#3b82f6" })] }) : s.jsxs("div", { className: "relative w-full h-full group", children: [Z >= 8 && s.jsx("div", { className: "absolute inset-0 bg-yellow-400/40 blur-3xl animate-soul rounded-full" }), s.jsx("img", { src: `/assets/dragon/stage_${Math.min(Z, 8)}.png`, alt: `Dragon Stage ${Z}`, className: `w-full h-full object-contain ${Z >= 8 ? "drop-shadow-[0_0_30px_rgba(255,215,0,0.8)]" : "drop-shadow-2xl"}`, onError: (X) => {
    X.target.onerror = null, X.target.style.display = "none";
  } }), s.jsx("div", { className: `absolute inset-0 bg-gradient-to-t ${Z >= 5 ? "from-yellow-400/20" : "from-neon-purple/20"} to-transparent rounded-2xl pointer-events-none` })] }) }), Z >= 5 && s.jsx("div", { className: "absolute inset-0 rounded-full blur-md animate-pulse pointer-events-none", style: { background: `radial-gradient(circle, ${Z >= 8 ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 215, 0, 0.3)"} 0%, transparent 70%)`, transform: "scale(1.8)" } }), s.jsxs("div", { className: `absolute -bottom-2 -right-2 ${Z >= 8 ? "bg-yellow-500" : "bg-neon-purple"} text-white text-[8px] font-bold px-2 rounded-full border border-white/20 shadow-lg`, children: ["Lv.", o] }), r && s.jsxs("div", { className: "absolute -top-4 -right-2 pointer-events-none", children: [s.jsx("div", { className: "animate-zzz text-white/40 font-black text-xs absolute", style: { animationDelay: "0s" }, children: "Z" }), s.jsx("div", { className: "animate-zzz text-white/30 font-black text-[10px] absolute", style: { animationDelay: "1.5s", right: "-10px", top: "5px" }, children: "Z" })] }), U.map((X) => s.jsx("div", { className: "absolute text-neon-pink text-xs animate-float-up font-bold pointer-events-none", style: { left: X.x, top: X.y }, children: "\u2665" }, X.id))] });
}, Nx = () => {
  const [o, p] = w.useState(false), [h, r] = w.useState("medium"), g = w.useCallback((R = "medium") => {
    r(R), p(true), setTimeout(() => p(false), R === "high" ? 500 : 200);
  }, []);
  return { shakeClass: o ? h === "high" ? "animate-shake-hard" : h === "medium" ? "animate-shake" : "animate-shake-soft" : "", triggerShake: g };
}, Ff = { FIRE: Di, WATER: Yo, THUNDER: oa, WIND: tr, LIGHT: Wo, DARK: rc, ICE: Ko, EARTH: dc, TOXIC: gc, GRAVITY: Vo, SOUL: hc, METAL: Hi, BLOOD: qo, TIME: Xo, SPACE: Jo, NATURE: Qo, STORM: Do, STAR: $o, HOLY: Lt, CHAOS: Bo, MAGMA: Di, STEAM: Uo, PLASMA: oa, QUAKE: dc, ZERO: Io, AURA: er, MIRROR: Zo, ECHO: bc, ABYSS: rc, ZENITH: Fo, PULSE: Ro, DRAGON: Ho, FEATHER: Lo, PETAL: Go, BONE: Oo, GEAR: xc, NEON: Po, PIXEL: Co, VIRUS: mc, CORE: Jl }, If = (o) => {
  if (o < 1e3) return Math.floor(o).toString();
  const p = ["", "k", "M", "B", "T", "P", "E"], h = Math.floor(("" + Math.floor(o)).length / 3);
  let r = parseFloat((h !== 0 ? o / Math.pow(1e3, h) : o).toPrecision(3));
  return r % 1 != 0 && (r = r.toFixed(1)), r + p[h];
}, Sx = ({ currentSpell: o, currentProgress: p, monsterHealth: h = 0, monsterMaxHealth: r = 100, combo: g, isFever: N, dragonLevel: R = 1, chantBreakGauge: C = 0, isSpellComplete: k = false, monsterElement: v = "FIRE", bossName: U = null, stageData: A = {}, stageIndex: $ = 1, lastDamage: J = 0, familiarDialogue: Z = "", isVictorious: ae = false, keyMapping: X = [], equippedElements: pe = [] }) => {
  var _a;
  const [Te, xe] = Ci.useState(false), [fe, he] = Ci.useState([]), { shakeClass: se, triggerShake: W } = Nx();
  Ci.useEffect(() => {
    if (J > 0) {
      xe(true), W(J > r * 0.1 ? "high" : "medium"), setTimeout(() => xe(false), 150);
      const Ne = Date.now(), Ee = Math.random() * 40 - 20, Pe = Math.random() * 40 - 20;
      he((Xe) => [...Xe, { id: Ne, damage: J, x: Ee, y: Pe }]), setTimeout(() => {
        he((Xe) => Xe.filter((Se) => Se.id !== Ne));
      }, 1e3);
    }
  }, [J, r, W]);
  const le = w.useMemo(() => A.image || "/assets/glitch_phantom.jpg", [A]), Le = w.useMemo(() => r > 0 ? h / r * 100 : 0, [h, r]), ot = w.useMemo(() => s.jsxs("div", { className: `
            relative 
            ${A.isBoss ? "w-48 h-48 md:w-56 md:h-56" : "w-32 h-32 md:w-40 md:h-40"} 
            ${k ? "animate-shake" : "animate-bounce"}
            ${Te ? "animate-hit-flash brightness-[4] scale-95" : ""}
            ${ae ? "opacity-0 scale-150 transition-all duration-1000" : ""}
            transition-all duration-150
        `, children: [s.jsx("img", { src: le, alt: "Monster", className: `w-full h-full object-cover rounded-full border-4 ${A.isBoss ? "border-red-600 shadow-[0_0_50px_rgba(255,0,0,0.8)]" : "border-neon-purple shadow-[0_0_30px_rgba(168,85,247,0.6)]"}` }), A.isBoss && s.jsx("div", { className: "absolute -top-4 -right-4 bg-red-600 text-white font-black px-2 py-1 rounded text-xs animate-pulse", children: "WARNING" }), s.jsx("div", { className: "absolute inset-0 rounded-full bg-gradient-to-t from-black/40 to-transparent pointer-events-none" }), fe.map((Ne) => s.jsx("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", style: { transform: `translate(${Ne.x}px, ${Ne.y}px)` }, children: s.jsx("span", { className: "text-4xl font-black text-white italic drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-float-up", children: Math.floor(Ne.damage) }) }, Ne.id))] }), [le, A.isBoss, fe, k, Te, ae]);
  return s.jsxs("div", { className: `
      relative w-full h-full flex flex-col items-center justify-between p-4 overflow-hidden
      ${N ? "animate-fever-bg" : ""}
      ${se}
      transition-colors duration-500
    `, children: [s.jsx("div", { className: "absolute inset-0 z-0 opacity-40 mix-blend-overlay bg-center bg-cover pointer-events-none transition-all duration-1000", style: { backgroundImage: `url(${A.bg || "/assets/deep_web_arena_bg.png"})` } }), s.jsx("div", { className: "absolute inset-0 z-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" }), s.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center relative z-10 w-full", children: [s.jsx("div", { className: "absolute top-4 w-full flex items-center justify-between px-6", children: s.jsxs("div", { className: "flex flex-col", children: [s.jsxs("span", { className: "text-[8px] md:text-[10px] font-black text-neon-cyan tracking-widest uppercase", children: ["STAGE : ", String($).padStart(2, "0")] }), s.jsx("div", { className: "flex items-center gap-2", children: s.jsx("span", { className: "text-xl md:text-2xl font-black text-white italic tracking-tighter drop-shadow-lg", children: U || A.name || "\u6DF1\u6DF5\u306E\u30C7\u30B8\u30BF\u30EB\u30B0\u30EA\u30C3\u30C1" }) })] }) }), s.jsx("div", { className: "absolute bottom-1/4 left-10 transform scale-150", children: s.jsx(cm, { level: R, isAttacking: k, dialogue: Z }) }), s.jsxs("div", { className: `
                  relative p-4 transform transition-transform duration-300
                  ${N ? "animate-pulse" : ""}
                  ${k ? "scale-90" : "scale-100"}
                `, children: [ot, s.jsx("div", { className: "absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 max-w-md space-y-2", children: s.jsxs("div", { className: "h-6 w-full bg-black/40 rounded-full border border-white/10 overflow-hidden relative shadow-inner", children: [s.jsx("div", { className: "h-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-300 relative", style: { width: `${Le}%` }, children: s.jsx("div", { className: "absolute inset-0 bg-white/20 animate-pulse" }) }), s.jsx("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: s.jsxs("span", { className: "text-[10px] font-black text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] tracking-widest uppercase", children: [If(h), " / ", If(r), " HP"] }) })] }) }), s.jsxs("div", { className: "absolute top-0 right-0 z-20 transform translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 group", children: [s.jsx("div", { className: `
                            w-14 h-14 rounded-full border-4 border-white shadow-xl flex items-center justify-center
                            bg-gradient-to-br ${((_a = ye.attributes.find((Ne) => Ne.id === v)) == null ? void 0 : _a.color) || "from-gray-500 to-gray-700"}
                            animate-bounce
                        `, children: (() => {
    const Ne = ye.attributes.find((Pe) => Pe.id === v), Ee = Ff[Ne == null ? void 0 : Ne.id] || Di;
    return s.jsx(Ee, { size: 28, className: "text-white drop-shadow-md" });
  })() }), s.jsxs("div", { className: "opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 backdrop-blur-md px-2 py-1 rounded border border-white/20 text-[8px] font-bold text-white whitespace-nowrap", children: ["Weak to: ", v === "FIRE" ? "WATER" : v === "WATER" ? "THUNDER" : v === "THUNDER" ? "EARTH" : v === "EARTH" ? "WIND" : v === "WIND" ? "FIRE" : "???"] })] })] }), g > 0 && s.jsxs("div", { className: `
                          absolute top-1/3 right-10 transform translate-x-1/4
                          dragon-glass-card bg-white text-black font-black px-6 py-3 rounded-full text-3xl shadow-2xl
                          ${g >= 30 ? "animate-bounce" : ""}
                        `, "data-tutorial-target": "combo-display", children: [g, " ", s.jsx("span", { className: "text-sm tracking-tighter", children: "COMBO" })] })] }), s.jsx("div", { className: "w-full space-y-3 z-20", children: s.jsxs("div", { className: "w-full bg-black/40 backdrop-blur-md rounded-xl p-3 border border-neon-purple/30", children: [s.jsxs("div", { className: "flex items-center justify-between mb-2", children: [s.jsx("div", { className: "text-[10px] text-white/50 uppercase tracking-widest font-bold", children: "\u30D1\u30EF\u30FC\u30A2\u30C3\u30D7\u30FB\u30B2\u30FC\u30B8" }), s.jsxs("div", { className: "text-xs text-neon-purple-light font-black", children: [Math.floor(C), "%"] })] }), s.jsx("div", { className: "w-full h-2 bg-gray-800 rounded-full overflow-hidden border border-white/10", children: s.jsx("div", { className: "h-full bg-gradient-to-r from-neon-purple via-yellow-400 to-neon-blue transition-all duration-300 shadow-lg", style: { width: `${C}%`, boxShadow: C >= 80 ? "0 0 20px rgba(255, 215, 0, 0.8)" : "0 0 10px rgba(168, 85, 247, 0.5)" } }) })] }) }), s.jsxs("div", { className: "bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl", children: [s.jsxs("div", { className: "flex flex-col items-center gap-2 mb-4", children: [s.jsx("div", { className: "text-[10px] text-white/40 uppercase tracking-[0.3em] font-black", children: "Chant Sequence" }), s.jsx("div", { className: "h-1 w-12 bg-neon-purple rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]" })] }), s.jsx("div", { className: "flex items-center justify-center gap-4", children: o.map((Ne, Ee) => {
    var _a2;
    const Pe = Ff[Ne], Xe = Ee < p, Se = Ee === p, S = (_a2 = X[pe.indexOf(Ne)]) == null ? void 0 : _a2.toUpperCase();
    return s.jsxs("div", { className: "flex flex-col items-center gap-2", children: [s.jsxs("div", { className: `
                                          w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 border-2 relative
                                          ${Xe ? "bg-white text-black scale-90 border-transparent shadow-[0_0_20px_rgba(255,255,255,0.3)]" : "bg-black/40 border-white/5 shadow-inner"}
                                          ${Se ? "ring-4 ring-neon-purple scale-110 shadow-[0_0_30px_rgba(168,85,247,0.6)] border-white/40 animate-pulse" : ""}
                                        `, children: [s.jsx(Pe, { size: 28, className: Xe ? "text-black" : Se ? "text-white" : "text-white/10" }), Xe && s.jsx("div", { className: "absolute -top-1 -right-1 bg-neon-cyan text-black w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black shadow-lg", children: "\u2713" })] }), s.jsx("div", { className: `
                                    text-[10px] font-black tracking-tighter transition-all duration-300
                                    ${Se ? "text-neon-purple scale-125" : "text-white/20"}
                                `, children: S || "?" })] }, Ee);
  }) })] }), ae && s.jsx("div", { className: "absolute inset-0 z-[200] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-500", children: s.jsxs("div", { className: "flex flex-col items-center gap-4", children: [s.jsx("div", { className: "text-5xl md:text-7xl font-black text-white italic tracking-tighter animate-stage-clear drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]", children: "STAGE CLEAR!" }), s.jsx("div", { className: "px-6 py-2 bg-neon-cyan/80 text-black font-black uppercase tracking-widest rounded-full animate-bounce", children: "\u3054\u307B\u3046\u3073 \u30B2\u30C3\u30C8\uFF01" })] }) }), N && s.jsx("div", { className: "absolute inset-0 pointer-events-none flex items-center justify-center z-[100]", children: s.jsx("div", { className: "text-6xl font-black text-white italic animate-fever-text drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] tracking-tighter", children: "\u30D5\u30A3\u30FC\u30D0\u30FC\uFF01\uFF01" }) })] });
}, wx = { Flame: Di, Droplets: Yo, Zap: oa, Wind: tr, Sun: Wo, Moon: rc, Snowflake: Ko, Mountain: dc, Skull: gc, Orbit: Vo, Ghost: hc, Shield: Hi, HeartPulse: qo, Hourglass: Xo, Rocket: Jo, Leaf: Qo, CloudLightning: Do, Star: $o, Sparkles: Lt, Dna: Bo, Cloud: Uo, Thermometer: Io, Waves: er, Layers: Zo, Volume2: bc, Sunrise: Fo, Activity: Ro, Crown: Ho, Feather: Lo, Flower: Go, Bone: Oo, Settings: xc, Tv: Po, Box: Co, Bug: mc, Target: Jl }, jx = ({ onInput: o, disabled: p, activeElements: h = [], keyMapping: r = [] }) => {
  const g = w.useCallback((N) => {
    p || o(N);
  }, [o, p]);
  return s.jsx("div", { "data-tutorial-id": "magic-keyboard", className: "grid grid-cols-3 gap-3 w-full max-w-sm mx-auto p-4 select-none pb-12", "data-tutorial-target": "magic-keyboard", children: ye.attributes.map((N) => {
    var _a;
    if (!h.includes(N.id)) return null;
    const R = wx[N.icon];
    return s.jsxs("button", { onClick: () => g(N.id), disabled: p, "data-tutorial-id": "magic-button", "data-tutorial-target": `magic-button-${N.id}`, className: `
                            relative h-24 dragon-glass-card flex items-center gap-4 px-6
                            bg-gradient-to-br ${N.color} border-white/40
                            text-white shadow-[0_6px_0_rgba(0,0,0,0.3)]
                            active:translate-y-1 active:shadow-[0_2px_0_rgba(0,0,0,0.3)]
                            transition-all duration-75
                            disabled:opacity-40 disabled:grayscale
                            touch-none
                        `, children: [s.jsx("div", { className: "w-12 h-12 rounded-xl bg-black/20 flex items-center justify-center border-2 border-white/20", children: s.jsx(R, { size: 28, strokeWidth: 3 }) }), s.jsxs("div", { className: "flex flex-col items-start translate-y-[-1px]", children: [s.jsxs("span", { className: "font-black text-[10px] uppercase tracking-widest opacity-60", children: ["CAST [", (_a = r[h.indexOf(N.id)]) == null ? void 0 : _a.toUpperCase(), "]"] }), s.jsx("span", { className: "font-black text-xl italic tracking-tighter", children: N.name })] }), s.jsx("div", { className: "absolute bottom-2 right-4 flex gap-1 opacity-40", children: [...Array(Math.floor(N.stats.atk / 2))].map((C, k) => s.jsx("div", { className: "w-1 h-3 bg-white/60 rounded-full" }, k)) }), s.jsx("div", { className: "absolute top-0 right-0 w-8 h-8 bg-white/20 rounded-bl-[100%] pointer-events-none" })] }, N.id);
  }) });
}, Ax = ({ money: o, idleIncome: p }) => {
  const h = w.useRef(o), [r, g] = w.useState(false), [N, R] = w.useState(false);
  w.useEffect(() => {
    const k = h.current;
    ye.moneyMilestones.find((A) => k < A && o >= A) && setTimeout(() => {
      g(true), setTimeout(() => g(false), 1e3);
    }, 0), o !== k && setTimeout(() => {
      R(true), setTimeout(() => R(false), 600);
    }, 0), h.current = o;
  }, [o]);
  const C = (k) => k >= 1e6 ? `${(k / 1e6).toFixed(2)}M` : k >= 1e3 ? `${(k / 1e3).toFixed(1)}K` : Math.floor(k).toString();
  return s.jsxs("div", { className: "flex flex-col space-y-1 bg-black/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 shadow-lg", children: [s.jsxs("div", { className: `flex items-center space-x-2 ${N ? "animate-money-pop" : ""}`, children: [s.jsx("div", { className: "p-1 px-3 bg-white text-black text-xs font-black rounded-lg", children: "\u9B54\u529B (MP)" }), s.jsx("div", { className: "text-3xl font-black text-white italic", children: C(o) })] }), p > 0 && s.jsxs("div", { className: "flex items-center space-x-1 text-emerald-400 font-bold text-xs uppercase tracking-widest pl-1", children: [s.jsx(fx, { size: 12 }), s.jsxs("span", { children: ["+", C(p), "/\u79D2"] })] }), r && s.jsx("div", { className: "fixed inset-0 flex items-center justify-center pointer-events-none z-50", children: s.jsx("div", { className: "animate-bounce p-8 rounded-full bg-white/20 backdrop-blur-xl border border-white/50 shadow-2xl", children: s.jsx(Lt, { size: 100, className: "text-white" }) }) })] });
}, Ex = ({ score: o, maxCombo: p, accuracy: h, onRestart: r }) => {
  const N = h >= 95 ? { name: "\u795E\u901F\u306E\u6253\u9375\u58EB", color: "text-yellow-400" } : h >= 80 ? { name: "\u719F\u7DF4\u306E\u9B54\u5C0E\u5E2B", color: "text-purple-400" } : h >= 60 ? { name: "\u898B\u7FD2\u3044\u4FEE\u884C\u4E2D", color: "text-blue-400" } : { name: "\u30AD\u30FC\u30DC\u30FC\u30C9\u306E\u521D\u5FC3\u8005", color: "text-gray-400" };
  return s.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/95 backdrop-blur-xl animate-in fade-in zoom-in duration-300 font-sans", children: s.jsxs("div", { className: "w-full max-w-sm dragon-glass-card bg-[#1a1a1a] border-4 border-white/20 p-8 relative overflow-hidden shadow-2xl", children: [s.jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-yellow-500/5 blur-[100px]" }), s.jsxs("div", { className: "text-center mb-10 relative", children: [s.jsx("div", { className: "text-sm font-black text-yellow-500 tracking-[0.4em] uppercase mb-2", children: "\u4F5C\u6226\u5B8C\u4E86" }), s.jsx("h2", { className: "text-6xl font-black text-white italic tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]", children: "\u9664\u970A\u6210\u529F!!" }), s.jsx("div", { className: "text-xs font-black mt-4 px-4 py-1 rounded-full bg-white text-black inline-block uppercase tracking-widest", children: N.name })] }), s.jsxs("div", { className: "space-y-3 mb-10 relative", children: [s.jsxs("div", { className: "flex items-center justify-between p-4 bg-black/40 rounded-3xl border-2 border-white/5", children: [s.jsxs("div", { className: "flex items-center gap-2 text-white/40", children: [s.jsx(Ui, { size: 16 }), s.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest", children: "\u7372\u5F97\u9B54\u529B" })] }), s.jsxs("div", { className: "text-2xl font-black text-white italic", children: [o.toLocaleString(), " ", s.jsx("span", { className: "text-xs not-italic opacity-40", children: "MP" })] })] }), s.jsxs("div", { className: "flex items-center justify-between p-4 bg-black/40 rounded-3xl border-2 border-white/5", children: [s.jsxs("div", { className: "flex items-center gap-2 text-white/40", children: [s.jsx(oa, { size: 16 }), s.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest", children: "\u6700\u9AD8\u30B3\u30F3\u30DC" })] }), s.jsx("div", { className: "text-2xl font-black text-white italic", children: p })] }), s.jsxs("div", { className: "flex items-center justify-between p-4 bg-black/40 rounded-3xl border-2 border-white/5", children: [s.jsxs("div", { className: "flex items-center gap-2 text-white/40", children: [s.jsx(Jl, { size: 16 }), s.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest", children: "\u7684\u4E2D\u7387" })] }), s.jsxs("div", { className: "text-2xl font-black text-white italic", children: [h, "%"] })] })] }), s.jsxs("div", { className: "grid grid-cols-2 gap-4 relative", children: [s.jsxs("button", { onClick: r, className: "stage-select-btn flex flex-col items-center justify-center p-4 bg-white text-black font-black italic active:translate-y-1 shadow-[0_6px_0_#ccc] active:shadow-none transition-all", children: [s.jsx(Cp, { size: 24, className: "mb-1" }), s.jsx("span", { className: "text-xs", children: "\u518D\u6311\u6226" })] }), s.jsxs("button", { className: "stage-select-btn flex flex-col items-center justify-center p-4 bg-neon-cyan text-black font-black italic active:translate-y-1 shadow-[0_6px_0_#06b6d4] active:shadow-none transition-all", onClick: () => alert("\u7D50\u679C\u3092\u30B7\u30A7\u30A2\u3057\u307E\u3057\u305F\uFF01"), children: [s.jsx(qp, { size: 24, className: "mb-1" }), s.jsx("span", { className: "text-xs", children: "\u30B7\u30A7\u30A2" })] })] }), s.jsx("div", { className: "text-center mt-8 text-white/20 text-[10px] font-bold tracking-widest uppercase", children: "\u30C7\u30B8\u30BF\u30EB\u9664\u970A\u5C40\u6240\u5C5E - \u7B2C12\u652F\u90E8" })] }) });
};
class Mx {
  constructor() {
    this.sounds = {}, this.bgm = null, this.currentBgmKey = null, this.enabled = true, this.volume = 0.5, this.initialized = false;
  }
  init() {
    if (this.initialized) return;
    const p = { click: "/assets/sounds/click.mp3", error: "/assets/sounds/error.mp3", levelup: "/assets/sounds/levelup.mp3", hit: "/assets/sounds/hit.mp3", defeat: "/assets/sounds/defeat.mp3", gacha: "/assets/sounds/gacha.mp3" };
    for (const [h, r] of Object.entries(p)) this.sounds[h] = new Audio(r), this.sounds[h].preload = "auto";
    this.bgmList = { home: "/assets/sounds/bgm_home.mp3", battle: "/assets/sounds/bgm_battle.mp3" }, this.initialized = true;
  }
  setEnabled(p) {
    this.enabled = p, !p && this.bgm ? this.bgm.pause() : p && this.bgm && this.bgm.play().catch((h) => console.log("BGM play interrupted"));
  }
  setVolume(p) {
    this.volume = p, this.bgm && (this.bgm.volume = p);
  }
  playSFX(p, h = 1) {
    if (!this.enabled || !this.sounds[p]) return;
    const r = this.sounds[p].cloneNode();
    r.volume = this.volume * h, r.play().catch((g) => {
    });
  }
  playBGM(p) {
    this.currentBgmKey !== p && (this.bgm && (this.bgm.pause(), this.bgm = null), this.currentBgmKey = p, this.bgmList[p] && (this.bgm = new Audio(this.bgmList[p]), this.bgm.loop = true, this.bgm.volume = this.volume, this.enabled && this.bgm.play().catch((h) => {
      console.log("BGM autoplay prevented, will play on next interaction");
    })));
  }
}
const lt = new Mx(), kx = ({ onComplete: o }) => {
  const [p, h] = w.useState(false), [r, g] = w.useState(false), [N] = w.useState(() => !!localStorage.getItem("magic_idle_money"));
  w.useEffect(() => {
    const C = setTimeout(() => {
      g(true);
    }, 1500);
    return () => clearTimeout(C);
  }, []);
  const R = (C) => {
    lt.init(), lt.playSFX("click"), h(true), setTimeout(() => {
      o(C);
    }, 800);
  };
  return s.jsxs("div", { className: `
                fixed inset-0 z-[1000] flex flex-col items-center justify-center
                bg-[#0a0a0a] transition-all duration-700 ease-in-out
                ${p ? "opacity-0 scale-110 pointer-events-none" : "opacity-100 scale-100"}
            `, children: [s.jsx("div", { className: "absolute inset-0 cyber-grid opacity-20" }), s.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/20 blur-[120px] rounded-full animate-pulse" }), s.jsxs("div", { className: "relative mb-12 group", children: [s.jsx("div", { className: "absolute inset-0 bg-neon-purple/40 blur-3xl rounded-full animate-pulse-glow" }), s.jsxs("div", { className: "relative w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden border-4 border-white/20 shadow-2xl transition-transform duration-500 group-hover:scale-110", children: [s.jsx("img", { src: "/assets/splash_kv.png", alt: "MAGITYPE: ORBITAL Key Visual", className: "w-full h-full object-cover" }), s.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" })] })] }), s.jsxs("div", { className: "text-center relative z-10 mb-12", children: [s.jsx("h1", { className: "text-6xl md:text-7xl font-black text-white italic tracking-tighter mb-4 drop-shadow-[0_0_30px_rgba(168,85,247,0.8)]", children: "MAGITYPE" }), s.jsxs("div", { className: "flex items-center justify-center gap-3", children: [s.jsx("div", { className: "h-[2px] w-8 bg-neon-purple-light" }), s.jsx("span", { className: "text-sm text-neon-purple-light font-bold uppercase tracking-[0.4em]", children: "\u9B54\u5C0E\u30D0\u30C8\u30EB\u7248" }), s.jsx("div", { className: "h-[2px] w-8 bg-neon-purple-light" })] })] }), s.jsx("div", { className: "relative z-10 w-full max-w-sm px-6", children: r ? s.jsxs("div", { className: "flex flex-col gap-4 animate-in fade-in zoom-in duration-500", children: [N && s.jsxs("button", { onClick: () => R("continue"), className: "group relative flex items-center justify-center gap-4 py-5 rounded-2xl bg-white text-black font-black text-xl hover:bg-neon-purple hover:text-white transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-neon-purple/50 active:scale-95", children: [s.jsx(Rp, { size: 24, fill: "currentColor" }), "\u524D\u306E\u307E\u307E\u3067\u904A\u3076", s.jsx("div", { className: "absolute inset-0 rounded-2xl bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700", style: { clipPath: "polygon(20% 0, 100% 0, 80% 100%, 0 100%)" } })] }), s.jsxs("button", { onClick: () => R("new"), className: `
                                group relative flex items-center justify-center gap-4 py-4 rounded-2xl font-bold transition-all duration-300 active:scale-95
                                ${N ? "bg-white/5 text-white/60 border border-white/10 hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/50" : "bg-white text-black text-xl font-black hover:bg-neon-purple hover:text-white shadow-[0_0_40px_rgba(255,255,255,0.2)]"}
                            `, children: [s.jsx(sm, { size: 20, className: N ? "group-hover:rotate-180 transition-transform duration-500" : "" }), "\u65B0\u3057\u304F\u4F5C\u308A\u76F4\u3059"] }), s.jsxs("div", { className: "mt-4 flex items-center justify-center gap-2 text-white/20 text-[10px] uppercase font-bold tracking-[0.2em]", children: [s.jsx(Ph, { size: 12 }), "\u7269\u8A9E\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044"] })] }) : s.jsx("div", { className: "flex justify-center gap-2 h-24 items-center", children: [0, 1, 2].map((C) => s.jsx("div", { className: "w-3 h-3 rounded-full bg-neon-purple-light animate-bounce", style: { animationDelay: `${C * 0.15}s` } }, C)) }) }), s.jsxs("div", { className: "absolute bottom-10 text-white/40 text-[10px] uppercase font-bold tracking-widest flex items-center gap-4", children: [s.jsx("span", { children: "\xA9 2026 MAGITYPE ORBITAL" }), s.jsx("span", { className: "w-1 h-1 bg-white/20 rounded-full" }), s.jsx("span", { children: "\u7121\u65AD\u8EE2\u8F09\u7981\u6B62" })] })] });
}, zx = ({ isActive: o, onComplete: p }) => {
  const [h, r] = w.useState(0);
  return w.useEffect(() => {
    if (!o) return;
    const g = setInterval(() => {
      r((R) => Math.min(R + 0.1, 1));
    }, 50), N = setTimeout(() => {
      p();
    }, 3e3);
    return () => {
      clearInterval(g), clearTimeout(N), r(0);
    };
  }, [o, p]), o ? s.jsxs("div", { className: "fixed inset-0 z-50 pointer-events-none overflow-hidden", children: [s.jsx("div", { className: "absolute inset-0 bg-black opacity-30 animate-noise-anim", style: { backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.8'/%3E%3C/svg%3E")`, opacity: h * 0.5 } }), s.jsx("div", { className: "absolute inset-0", children: [...Array(20)].map((g, N) => s.jsx("div", { className: "absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent", style: { top: `${(N * 5 + h * 100) % 100}%`, opacity: h * 0.6, animation: `scanline-run ${0.5 + N * 0.1}s linear infinite` } }, N)) }), s.jsx("div", { className: "absolute inset-0 bg-[#ffd700]/10 mix-blend-overlay animate-pulse" }), s.jsxs("div", { className: `absolute inset-0 flex flex-col items-center justify-center ${h > 0.5 ? "animate-shake" : ""}`, children: [s.jsx("div", { className: "text-6xl md:text-8xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-yellow-200 to-yellow-500 animate-in zoom-in-150 duration-500", style: { textShadow: `0 0 ${20 * h}px rgba(255,215,0,0.8), 0 0 ${40 * h}px rgba(255,215,0,0.4)` }, children: "MANUAL BURST" }), s.jsxs("div", { className: "relative mt-8", children: [s.jsx("div", { className: "text-xl md:text-3xl font-black text-white animate-ping absolute inset-0 opacity-40", children: "\u9023\u6253\u30BB\u30E8\uFF01 MASH!!" }), s.jsx("div", { className: "text-xl md:text-3xl font-black text-white relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]", children: "\u9023\u6253\u30BB\u30E8\uFF01 MASH!!" })] }), s.jsx("div", { className: "mt-8 text-xs md:text-sm font-bold text-neon-cyan bg-black/80 px-8 py-2 rounded-full border-2 border-neon-cyan/50 shadow-[0_0_20px_rgba(0,255,255,0.3)] animate-bounce", children: "\u8A60\u5531\u7834\u68C4\uFF1A\u9AD8\u5BC6\u5EA6\u9B54\u529B\u89E3\u653E\u4E2D\uFF01" })] }), s.jsx("div", { className: "absolute inset-0 bg-yellow-400", style: { opacity: Math.sin(h * Math.PI * 4) * 0.3 * h } }), s.jsx("div", { className: "absolute inset-0", children: [...Array(30)].map((g, N) => {
    const R = N / 30 * Math.PI * 2, C = h * 500;
    return s.jsx("div", { className: "absolute w-2 h-2 bg-yellow-400 rounded-full", style: { left: "50%", top: "50%", transform: `translate(${Math.cos(R) * C}px, ${Math.sin(R) * C}px)`, opacity: 1 - h, boxShadow: "0 0 10px rgba(255, 215, 0, 0.8)" } }, N);
  }) })] }) : null;
}, Pf = { INTRO: [{ title: "\u76EE\u899A\u3081\u3088\u3001\u9B54\u5C0E\u58EB\u3088", description: `\u3053\u3053\u306F\u30C7\u30B8\u30BF\u30EB\u4E16\u754C\u306E\u6DF1\u6DF5\u3002\u30B0\u30EA\u30C3\u30C1\u3069\u3082\u304C\u66B4\u308C\u3066\u3044\u308B\u3088\u3046\u3060\u306A\u3002
\u307E\u305A\u306F\u300C\u9664\u970A\u958B\u59CB\u300D\u3067\u3001\u5974\u3089\u3092\u4E00\u6383\u3057\u306B\u884C\u304F\u305E\u3002`, target: "fight-button", position: "bottom", action: "tap-fight-button" }, { title: "\u9B54\u529B\u306E\u7D21\u304E\u65B9", description: `\u8A60\u5531\u30DC\u30BF\u30F3\u3092\u53E9\u304D\u3001\u9B54\u6CD5\u3092\u7E54\u308A\u6210\u305B\u3002
\u6D41\u308C\u308B\u7D0B\u7AE0\u3068\u540C\u3058\u8272\u306E\u30AD\u30FC\u3092\u3001\u6B63\u78BA\u306B\u523B\u3080\u306E\u3060\u3002`, target: "magic-keyboard", position: "top", action: "tap-magic-button" }, { title: "\u9023\u9396\u306E\u5171\u9CF4\uFF08\u30B3\u30F3\u30DC\uFF09", description: `\u9014\u5207\u308C\u306C\u8A60\u5531\u306F\u5171\u9CF4\uFF08\u30B3\u30F3\u30DC\uFF09\u3092\u751F\u3080\u3002
\u5171\u9CF4\u304C\u6DF1\u307E\u308B\u307B\u3069\u3001\u7372\u5F97\u3067\u304D\u308B\u9B54\u529B\uFF08MP\uFF09\u306F\u81A8\u308C\u4E0A\u304C\u308B\u305E\u3002`, target: "combo-display", position: "center", action: "auto" }], HUB: [{ title: "\u8853\u5F0F\u306E\u6700\u9069\u5316", description: `\u300C\u9B54\u6CD5\u7DE8\u6210\u300D\u3067\u3001\u541B\u306E\u4F7F\u3046\u8853\u5F0F\u3092\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3067\u304D\u308B\u3002
\u6575\u306E\u5F31\u70B9\u3092\u8CAB\u304F\u3001\u81F3\u9AD8\u306E\u69CB\u6210\u3092\u7D44\u307F\u4E0A\u3052\u308B\u306E\u3060\u3002`, target: "magic-loadout-btn", position: "center", action: "auto" }, { title: "\u53E1\u667A\u306E\u66F8\uFF08\u30A2\u30FC\u30AB\u30A4\u30D6\uFF09", description: `\u3053\u3053\u306B\u306F\u5974\u3089\u306E\u8A18\u9332\u304C\u8A18\u3055\u308C\u3066\u3044\u308B\u3002
\u4E16\u754C\u3092\u77E5\u308B\u3053\u3068\u306F\u3001\u52DD\u5229\u3078\u306E\u8FD1\u9053\u3068\u306A\u308B\u306F\u305A\u3060\u3002`, target: "archive-btn", position: "center", action: "auto" }], BATTLE: [{ title: "\u5171\u632F\u306E\u6CD5\u5247", description: `\u6575\u3068\u540C\u5C5E\u6027\u306E\u8853\u5F0F\u306F\u3001\u5F37\u529B\u306A\u5171\u632F\u3092\u5F15\u304D\u8D77\u3053\u3059\u3002
\u8272\u3092\u5408\u308F\u305B\u3001\u4E00\u6483\u3067\u6C88\u3081\u308B\u306E\u3060\u3002`, target: "monster-element", position: "center", action: "auto" }, { title: "\u795E\u901F\u306E\u9023\u6483", description: `\u9B54\u529B\u3092\u53E9\u304D\u8FBC\u3080\u901F\u5EA6\u304C\u3001\u305D\u306E\u307E\u307E\u5A01\u529B\u3078\u3068\u5909\u63DB\u3055\u308C\u308B\u3002
\u30EA\u30BA\u30E0\u3092\u63B4\u307F\u3001\u795E\u901F\u306E\u9023\u6483\u3092\u53E9\u304D\u8FBC\u3081\u3002`, target: "magic-keyboard", position: "top", action: "auto" }], SYSTEM: [{ title: "\u9B54\u529B\u306E\u6607\u83EF", description: `\u96C6\u3081\u305FMP\u3092\u4F7F\u3044\u3001\u8853\u5F0F\u3084\u9B54\u529B\u56DE\u8DEF\u3092\u5F37\u5316\u3067\u304D\u308B\u3002
\u300C\u30B7\u30E7\u30C3\u30D7\u300D\u3067\u3055\u3089\u306A\u308B\u9AD8\u307F\u3092\u76EE\u6307\u3059\u306E\u3060\u3002`, target: "shop-tab", position: "bottom", action: "auto" }, { title: "\u81F3\u9AD8\u306E\u9B54\u5C0E\u5668\uFF08\u30A2\u30FC\u30C6\u30A3\u30D5\u30A1\u30AF\u30C8\uFF09", description: `\u300C\u53E4\u4EE3\u907A\u7269\u300D\u306F\u3001\u541B\u306E\u9B42\u306B\u523B\u307E\u308C\u308B\u6C38\u7D9A\u306E\u529B\u3060\u3002
\u8EE2\u751F\uFF08\u30EA\u30D0\u30FC\u30B9\u30C8\uFF09\u3067\u5F97\u308B\u300C\u9B42\u306E\u6B20\u7247\u300D\u3067\u3001\u3053\u308C\u3092\u9855\u73FE\u3055\u305B\u3088\u3002`, target: "artifact-btn", position: "center", action: "auto" }] }, Tx = ({ type: o = "INTRO", onComplete: p, onSkip: h, currentSpell: r, currentProgress: g }) => {
  const [N, R] = w.useState(o === "INTRO"), [C, k] = w.useState(0), [v, U] = w.useState(false), A = w.useMemo(() => Pf[o] || Pf.INTRO, [o]), $ = w.useMemo(() => {
    if (!r || r.length === 0 || g >= r.length) return null;
    const he = r[g], se = ye.attributes.find((W) => W.id === he);
    return se ? { id: he, name: se.name } : null;
  }, [r, g]), J = A[C], Z = C === A.length - 1, ae = Ci.useCallback(() => {
    Z ? p() : k((he) => he + 1);
  }, [Z, p]);
  w.useEffect(() => {
    J.action === "auto" ? setTimeout(() => U(false), 0) : setTimeout(() => U(true), 0);
  }, [C, J.action]), w.useEffect(() => {
    if (!v) return;
    const he = (se) => {
      const W = se.target.closest("[data-tutorial-id]");
      if (!W) return;
      const le = W.getAttribute("data-tutorial-id");
      (J.action === "tap-fight-button" && le === "fight-button" || J.action === "tap-magic-button" && le === "magic-button") && (U(false), setTimeout(() => {
        ae();
      }, 400));
    };
    return document.addEventListener("click", he, true), () => document.removeEventListener("click", he, true);
  }, [v, J.action, C, ae]);
  const X = () => R(false), pe = () => h(), Te = () => {
    switch (J.position) {
      case "top":
        return "top-32 left-1/2 -translate-x-1/2";
      case "bottom":
        return "bottom-32 left-1/2 -translate-x-1/2";
      default:
        return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
    }
  }, xe = w.useMemo(() => J.description.replace("${targetInfo?.name}", ($ == null ? void 0 : $.name) || "\u9B54\u6CD5"), [J.description, $]);
  if (N) return s.jsxs("div", { className: "fixed inset-0 z-[1000] flex items-center justify-center p-4 font-sans", children: [s.jsx("div", { className: "absolute inset-0 bg-black/90 backdrop-blur-md" }), s.jsxs("div", { className: "relative w-full max-w-md dragon-glass-card bg-[#1a1a1a] border-4 border-white/20 p-8 rounded-3xl shadow-2xl text-center", children: [s.jsx("div", { className: "mb-6 inline-flex p-4 bg-neon-cyan/20 rounded-2xl animate-bounce", children: s.jsx(Lt, { className: "text-neon-cyan", size: 48 }) }), s.jsx("div", { className: "text-[10px] text-neon-purple font-black tracking-[0.4em] uppercase mb-2", children: "\u901A\u9054" }), s.jsx("h2", { className: "text-3xl font-black text-white mb-6 tracking-tighter italic", children: o === "INTRO" ? "\u65B0\u4EBA\u9664\u970A\u5E2B\u7814\u4FEE" : "\u65B0\u3057\u3044\u6A5F\u80FD\u30AC\u30A4\u30C9" }), s.jsx("p", { className: "text-white/80 mb-8 leading-relaxed text-sm font-bold", children: o === "INTRO" ? `\u30C7\u30B8\u30BF\u30EB\u9664\u970A\u5C40\u3078\u3088\u3046\u3053\u305D\u3002
\u307E\u305A\u306F\u57FA\u672C\u7684\u306A\u624B\u9806\u3092\u30EC\u30AF\u30C1\u30E3\u30FC\u3057\u307E\u3059\u3002` : `\u65B0\u3057\u3044\u529B\u3084\u6A5F\u80FD\u304C\u89E3\u653E\u3055\u308C\u305F\u3002
\u79C1\u304C\u5C0E\u3044\u3066\u3084\u308D\u3046\u3001\u6E96\u5099\u306F\u3088\u3044\u304B\uFF1F` }), s.jsxs("div", { className: "space-y-3", children: [s.jsx("button", { onClick: X, className: "w-full py-4 rounded-xl font-black text-xl italic bg-white text-black hover:scale-[1.02] active:scale-95 transition-all shadow-[0_4px_0_#ccc]", children: "\u30AC\u30A4\u30C9\u3092\u898B\u308B" }), s.jsx("button", { onClick: pe, className: "w-full py-3 rounded-xl font-bold text-xs text-white/30 hover:text-white transition-colors", children: "\u9589\u3058\u308B" })] })] })] });
  const fe = J.target === "magic-button-${targetInfo.id}" && $ ? `magic-button-${$.id}` : J.target;
  return s.jsxs("div", { className: "fixed inset-0 z-[1000] pointer-events-none font-sans", children: [s.jsx("div", { className: "absolute inset-0 bg-black/60 pointer-events-none" }), fe && s.jsx("style", { children: `
                    [data-tutorial-id="${fe}"], [data-tutorial-target="${fe}"] {
                        position: relative !important;
                        z-index: 1250 !important;
                        pointer-events: auto !important;
                        outline: 4px solid #fff !important;
                        outline-offset: 4px !important;
                        box-shadow: 0 0 50px rgba(255, 255, 255, 0.4) !important;
                        animation: tutorial-pulse 1.5s infinite !important;
                    }
                    @keyframes tutorial-pulse {
                        0%, 100% { transform: scale(1); }
                        50% { transform: scale(1.02); }
                    }
                ` }), (J.action === "tap-magic-button" || J.action === "tap-fight-button") && s.jsx("div", { className: `absolute left-1/2 -translate-x-1/2 z-[1260] pointer-events-none ${J.position === "top" ? "top-[40%]" : "bottom-[25%]"}`, children: s.jsx(Th, { size: 64, className: "text-neon-cyan animate-bounce drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" }) }), s.jsx("div", { className: `absolute ${Te()} w-[90%] max-w-lg z-[1300] pointer-events-none transition-all duration-500 ease-out`, children: s.jsxs("div", { className: "bg-[#1a1a1a] border-2 border-white/20 p-6 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] pointer-events-auto relative overflow-hidden", children: [s.jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-neon-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" }), s.jsxs("div", { className: "flex items-start justify-between mb-4 relative z-10", children: [s.jsxs("div", { className: "flex items-center gap-3", children: [s.jsx("div", { className: "p-1.5 bg-neon-cyan/20 rounded-lg", children: s.jsx(Lt, { className: "text-neon-cyan", size: 16 }) }), s.jsx("h3", { className: "text-lg font-black text-white italic tracking-tight", children: J.title })] }), s.jsx("button", { onClick: h, className: "text-white/30 hover:text-white transition-colors", children: s.jsx(Xa, { size: 20 }) })] }), s.jsx("p", { className: "text-white/90 text-sm font-bold leading-relaxed mb-6 whitespace-pre-line relative z-10", children: xe }), s.jsxs("div", { className: "flex items-center justify-between relative z-10", children: [s.jsx("div", { className: "flex gap-1.5", children: A.map((he, se) => s.jsx("div", { className: `h-1.5 rounded-full transition-all duration-300 ${se === C ? "w-8 bg-neon-cyan shadow-[0_0_10px_rgba(6,182,212,0.5)]" : "w-2 bg-white/10"}` }, se)) }), v ? s.jsx("div", { className: "text-neon-cyan font-black text-[10px] uppercase tracking-widest animate-pulse border border-neon-cyan/30 px-3 py-1 rounded-full bg-neon-cyan/10", children: "\u5F85\u6A5F\u4E2D..." }) : s.jsx("button", { onClick: ae, className: "py-2 px-6 rounded-xl font-black italic bg-white text-black hover:bg-gray-200 shadow-lg active:scale-95 transition-all", children: Z ? "\u5B8C\u4E86" : "\u6B21\u3078" })] })] }) })] });
}, Rx = (o, p) => {
  w.useEffect(() => {
    if (o <= 0) return;
    const h = setInterval(() => {
      p(o);
    }, 1e3);
    return () => clearInterval(h);
  }, [o, p]);
}, fc = [{ id: "n_slime", name: "\u5BBF\u984C\u30B9\u30E9\u30A4\u30E0", rarity: "N", description: "\u590F\u4F11\u307F\u306E\u6700\u7D42\u65E5\u307E\u3067\u653E\u7F6E\u3055\u308C\u305F\u5BBF\u984C\u304C\u610F\u601D\u3092\u6301\u3063\u305F\u59FF\u3002\u300C\u30C9\u30EA\u30EB\u3001\u30E4\u30C0\u300D\u3068\u9CF4\u304F\u3002", stats: { attack: 10, speed: 10, cost: 50 }, image: "/assets/units/n_slime.png" }, { id: "n_dog", name: "\u30D5\u30A1\u30A4\u30A2\u30A6\u30A9\u30FC\u30EB\u72AC", rarity: "N", description: "\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3\u30BD\u30D5\u30C8\u306E\u30DE\u30B9\u30B3\u30C3\u30C8\u30AD\u30E3\u30E9\u3002\u5420\u3048\u308B\u3060\u3051\u3067\u4F55\u3082\u3057\u306A\u3044\u3002\u304B\u308F\u3044\u3044\u3002", stats: { attack: 15, speed: 20, cost: 75 }, image: "/assets/units/n_dog.png" }, { id: "n_egg", name: "\u305F\u307E\u3054\uFF08\u8DB3\u3064\u304D\uFF09", rarity: "N", description: "\u51B7\u8535\u5EAB\u306E\u5965\u3067\u8CDE\u5473\u671F\u9650\u304C\u5207\u308C\u305F\u5375\u3002\u6B69\u3044\u3066\u65B0\u3057\u3044\u4F4F\u51E6\u3092\u63A2\u3057\u3066\u3044\u308B\u3002", stats: { attack: 5, speed: 30, cost: 30 }, image: "/assets/units/n_egg.png" }, { id: "n_wifi", name: "\u5FAE\u5F31Wi-Fi\u304A\u5316\u3051", rarity: "N", description: "\u30A2\u30F3\u30C6\u30CA\u304C\u4E00\u672C\u3057\u304B\u7ACB\u305F\u306A\u3044Wi-Fi\u306E\u6028\u5FF5\u3002\u52D5\u753B\u3092\u4F4E\u753B\u8CEA\u306B\u3059\u308B\u546A\u3044\u3092\u304B\u3051\u308B\u3002", stats: { attack: 12, speed: 15, cost: 60 }, image: "/assets/units/n_wifi.png" }, { id: "r_printer", name: "\u7D19\u8A70\u307E\u308A\u30D7\u30EA\u30F3\u30BF\u30FC", rarity: "R", description: "\u6025\u3044\u3067\u3044\u308B\u6642\u307B\u3069\u52D5\u304B\u306A\u3044\u9811\u56FA\u306A\u30D7\u30EA\u30F3\u30BF\u30FC\u3002\u30A4\u30F3\u30AF\u4EE3\u304C\u9AD8\u3044\u306E\u304C\u60A9\u307F\u3002", stats: { attack: 30, speed: 5, cost: 200 }, image: "/assets/units/r_printer.png" }, { id: "r_mouse", name: "\u66B4\u8D70\u30B2\u30FC\u30DF\u30F3\u30B0\u30DE\u30A6\u30B9", rarity: "R", description: "\u6301\u3061\u4E3B\u306E\u624B\u3092\u96E2\u308C\u3066\u52DD\u624B\u306BFPS\u3092\u30D7\u30EC\u30A4\u3059\u308B\u30DE\u30A6\u30B9\u3002\u30A8\u30A4\u30E0\u304C\u3059\u3054\u3044\u3002", stats: { attack: 25, speed: 50, cost: 180 }, image: "/assets/units/r_mouse.png" }, { id: "r_sandwich", name: "\u30B9\u30D1\u30E0\u30B5\u30F3\u30C9", rarity: "R", description: "\u8FF7\u60D1\u30E1\u30FC\u30EB\u306E\u5177\u6750\u3067\u4F5C\u3063\u305F\u30B5\u30F3\u30C9\u30A4\u30C3\u30C1\u3002\u98DF\u3079\u308B\u3068\u67B6\u7A7A\u8ACB\u6C42\u304C\u5C4A\u304F\u3002", stats: { attack: 40, speed: 12, cost: 250 }, image: "/assets/units/r_sandwich.png" }, { id: "sr_server", name: "\u7ADC\u89D2\u30B5\u30FC\u30D0\u30FC", rarity: "SR", description: "\u6700\u65B0\u92ED\u306EAI\u30B5\u30FC\u30D0\u30FC\u3060\u304C\u3001\u306A\u305C\u304B\u9AD8\u5468\u6CE2\u306E\u5486\u54EE\u3092\u4E0A\u3052\u308B\u30D0\u30B0\u304C\u3042\u308B\u3002\u51B7\u5374\u30D5\u30A1\u30F3\u304C\u3046\u308B\u3055\u3044\u3002", stats: { attack: 80, speed: 8, cost: 800 }, image: "/assets/units/sr_server.png" }, { id: "sr_drake", name: "\u30CB\u30FC\u30C8\u30C9\u30E9\u30B4\u30F3", rarity: "SR", description: "\u50CD\u304B\u305A\u306B\u89AA\u306E\u91D1\u3067\u30AC\u30C1\u30E3\u3092\u56DE\u3059\u30C9\u30E9\u30B4\u30F3\u3002\u53E3\u304B\u3089\u706B\u3092\u5439\u304F\u304C\u3001\u30AB\u30C3\u30D7\u9EBA\u306E\u304A\u6E6F\u3092\u6CB8\u304B\u3059\u306E\u306B\u3057\u304B\u4F7F\u308F\u306A\u3044\u3002", stats: { attack: 100, speed: 25, cost: 950 }, image: "/assets/units/sr_drake.png" }, { id: "ur_god", name: "\u795E\u30B2\u30FC\u30DE\u30FC\u7ADC", rarity: "UR", description: "\u5168\u3066\u306E\u30B2\u30FC\u30E0\u3092\u5B8C\u5168\u30AF\u30EA\u30A2\u3057\u305F\u4F1D\u8AAC\u306E\u30C9\u30E9\u30B4\u30F3\u3002\u8907\u6570\u306E\u30AD\u30FC\u30DC\u30FC\u30C9\u3092\u540C\u6642\u306B\u64CD\u4F5C\u3057\u3001\u73FE\u5B9F\u4E16\u754C\u3059\u3089\u3082\u30D0\u30B0\u3089\u305B\u308B\u3002", stats: { attack: 500, speed: 60, cost: 3e3 }, image: "/assets/units/ur_god.png" }, { id: "ur_kimo", name: "\u6B21\u5143\u3092\u6E21\u308B\u9B54\u5C0E\u6A5F", rarity: "UR", description: "\u3053\u306E\u4E16\u306E\u3082\u306E\u3067\u306F\u306A\u3044\u99C6\u52D5\u97F3\u3092\u97FF\u304B\u305B\u308B\u3001\u672A\u77E5\u306E\u6F14\u7B97\u6A5F\u3002\u305D\u306E\u8DB3\u53D6\u308A\u306F\u30C7\u30FC\u30BF\u3092\u8D85\u3048\u3001\u73FE\u5B9F\u306E\u7406\u3092\u66F8\u304D\u63DB\u3048\u308B\u3002", stats: { attack: 50, speed: 100, cost: 2500 }, image: "/assets/units/ur_kimo.png" }, { id: "curated_01", name: "\u59CB\u307E\u308A\u306E\u5DE8\u795E", rarity: "UR", description: "\u3010\u4F1D\u8AAC\u3011\u6700\u521D\u306B\u89B3\u6E2C\u3055\u308C\u305F\u30C7\u30FC\u30BF\u3002\u5168\u3066\u306E\u8D77\u6E90\u3002\uFF0819:08:39\uFF09", stats: { attack: 3e3, speed: 100, cost: 5e3 }, image: "/assets/custom_units/magi_unit_190839.png" }, { id: "curated_02", name: "\u6642\u7A7A\u306E\u8987\u8005", rarity: "UR", description: "\u3010\u4F1D\u8AAC\u3011\u4E8C\u756A\u76EE\u306B\u6B21\u5143\u3092\u8D85\u3048\u305F\u5B58\u5728\u3002\u5727\u5012\u7684\u5A01\u5727\u611F\u3002\uFF0819:08:44\uFF09", stats: { attack: 2800, speed: 90, cost: 4800 }, image: "/assets/custom_units/magi_unit_190844.png" }, { id: "curated_03", name: "\u6B21\u5143\u7ADC\u30AC\u30EB\u30B0", rarity: "UR", description: "\u3010\u4F1D\u8AAC\u301119\u664208\u5206\u4E16\u4EE3\u306E\u9802\u70B9\u306B\u7ACB\u3064\u7ADC\u3002\uFF0819:08:47\uFF09", stats: { attack: 2500, speed: 85, cost: 4500 }, image: "/assets/custom_units/magi_unit_190847.png" }, { id: "curated_04", name: "\u7570\u754C\u306E\u9A0E\u58EB\u56E3\u9577", rarity: "SSR", description: "\u3010\u8D85\u6FC0\u30EC\u30A2\u301119\u664222\u5206\u4E16\u4EE3\u306E\u30EA\u30FC\u30C0\u30FC\u683C\u3002\uFF0819:22:07\uFF09", stats: { attack: 1500, speed: 70, cost: 2500 }, image: "/assets/custom_units/magi_unit_192207.png" }, { id: "curated_05", name: "\u6DF1\u6DF5\u306E\u9B54\u5C0E\u5E2B", rarity: "SSR", description: "\u3010\u8D85\u6FC0\u30EC\u30A2\u3011\u7981\u65AD\u306E\u77E5\u8B58\u3092\u6301\u3064\u8CE2\u8005\u3002\uFF0819:22:11\uFF09", stats: { attack: 1400, speed: 65, cost: 2400 }, image: "/assets/custom_units/magi_unit_192211.png" }, { id: "curated_06", name: "\u7D05\u84EE\u306E\u72C2\u6226\u58EB", rarity: "SSR", description: "\u3010\u8D85\u6FC0\u30EC\u30A2\u3011\u6012\u308A\u3067\u6211\u3092\u5FD8\u308C\u305F\u6226\u58EB\u3002\uFF0819:22:13\uFF09", stats: { attack: 1600, speed: 60, cost: 2300 }, image: "/assets/custom_units/magi_unit_192213.png" }, { id: "curated_07", name: "\u5929\u7A7A\u306E\u5C04\u624B", rarity: "SSR", description: "\u3010\u8D85\u6FC0\u30EC\u30A2\u3011\u96F2\u306E\u4E0A\u304B\u3089\u72D9\u6483\u3059\u308B\u3002\uFF0819:22:18\uFF09", stats: { attack: 1300, speed: 80, cost: 2200 }, image: "/assets/custom_units/magi_unit_192218.png" }, ...["19_22_21", "19_22_23", "19_22_25", "19_22_27", "19_22_32", "19_22_34", "19_22_37", "19_22_40"].map((o, p) => ({ id: `curated_sr_${p}`, name: `\u6A5F\u52D5\u5175\u5668 ${o}`, rarity: "SR", description: "\u3010\u6FC0\u30EC\u30A2\u3011\u91CF\u7523\u578B\u3060\u304C\u9AD8\u3044\u6027\u80FD\u3092\u8A87\u308B\u6A5F\u4F53\u3002", stats: { attack: 800, speed: 50, cost: 1200 }, image: `/assets/custom_units/magi_unit_${o}.png` })), ...["19_22_44", "19_22_47", "19_22_50", "19_22_55", "19_22_57", "19_23_02", "19_23_05", "19_08_51"].map((o, p) => ({ id: `curated_r_${p}`, name: `\u6B69\u5175 ${o}`, rarity: "R", description: "\u3010\u30EC\u30A2\u3011\u6226\u5834\u306E\u6700\u524D\u7DDA\u3067\u6226\u3046\u5175\u58EB\u3002", stats: { attack: 300, speed: 30, cost: 500 }, image: `/assets/custom_units/magi_unit_${o}.png` })), { id: "boss_01", name: "\u30A8\u30E9\u30FC404\u30C9\u30E9\u30B4\u30F3", rarity: "UR", description: "\u3010\u4F1D\u8AAC\u3011\u5B58\u5728\u3057\u306A\u3044\u306F\u305A\u306E\u7ADC\u3002\u5168\u3066\u3092\u300C\u7121\u300D\u306B\u5E30\u3059\u3002", stats: { attack: 4044, speed: 44, cost: 4444 }, image: "/assets/custom_units/error_404_dragon_boss_1767793402229.png" }, { id: "boss_02", name: "\u30B1\u30FC\u30D6\u30EB\u306E\u738B", rarity: "UR", description: "\u3010\u4F1D\u8AAC\u3011\u5168\u3066\u306E\u914D\u7DDA\u3092\u652F\u914D\u3059\u308B\u738B\u3002\u7D61\u307E\u308B\u3068\u89E3\u3051\u306A\u3044\u3002", stats: { attack: 3500, speed: 20, cost: 4e3 }, image: "/assets/custom_units/cable_king_boss_1767793465036.png" }, { id: "boss_03", name: "\u30D6\u30EB\u30FC\u30B9\u30AF\u30EA\u30FC\u30F3", rarity: "SSR", description: "\u3010\u8D85\u6FC0\u30EC\u30A2\u3011\u5F37\u5236\u7D42\u4E86\u306E\u5316\u8EAB\u3002\u89E6\u308C\u308B\u3068\u30D5\u30EA\u30FC\u30BA\u3059\u308B\u3002", stats: { attack: 2e3, speed: 10, cost: 3e3 }, image: "/assets/custom_units/blue_screen_golem_boss_1767793423452.png" }, { id: "boss_04", name: "\u30EA\u30B5\u30A4\u30AF\u30EB\u5DE8\u795E", rarity: "SSR", description: "\u3010\u8D85\u6FC0\u30EC\u30A2\u3011\u6368\u3066\u3089\u308C\u305F\u30C7\u30FC\u30BF\u306E\u96C6\u5408\u4F53\u3002", stats: { attack: 1800, speed: 30, cost: 2800 }, image: "/assets/custom_units/recycle_bin_titan_boss_1767793483917.png" }, { id: "boss_05", name: "FW\u30B1\u30EB\u30D9\u30ED\u30B9", rarity: "SSR", description: "\u3010\u8D85\u6FC0\u30EC\u30A2\u3011\u9244\u58C1\u306E\u9632\u5FA1\u3092\u8A87\u308B\u5730\u7344\u306E\u756A\u72AC\u3002", stats: { attack: 1500, speed: 80, cost: 2600 }, image: "/assets/custom_units/firewall_cerberus_boss_1767793442759.png" }, { id: "artifact_01", name: "\u9EC4\u91D1\u306E\u30AD\u30FC\u30DC\u30FC\u30C9", rarity: "SSR", description: "\u3010\u81F3\u5B9D\u3011\u795E\u304C\u8A18\u8FF0\u306B\u7528\u3044\u305F\u3068\u8A00\u308F\u308C\u308B\u5165\u529B\u88C5\u7F6E\u3002", stats: { attack: 1e3, speed: 100, cost: 2500 }, image: "/assets/custom_units/golden_keyboard_artifact_1767793514389.png" }, { id: "artifact_02", name: "\u5F37\u6B32\u306E\u8CA1\u5E03", rarity: "SR", description: "\u3010\u8CA1\u5B9D\u3011\u4E2D\u8EAB\u304C\u7121\u9650\u306B\u5897\u3048\u308B\u304B\u3082\u3057\u308C\u306A\u3044\u8CA1\u5E03\u3002", stats: { attack: 500, speed: 150, cost: 1500 }, image: "/assets/custom_units/greed_wallet_artifact_1767793530505.png" }, { id: "artifact_03", name: "\u6642\u9593\u505C\u6B62\u306E\u6642\u8A08", rarity: "SR", description: "\u3010\u8CA1\u5B9D\u3011\u305F\u307E\u306B\u81EA\u5206\u3082\u6B62\u307E\u3063\u3066\u3057\u307E\u3046\u3002", stats: { attack: 800, speed: 10, cost: 1200 }, image: "/assets/custom_units/time_stopper_watch_artifact_1767793549903.png" }, { id: "artifact_04", name: "\u30B0\u30EA\u30C3\u30C1\u73C8\u7432", rarity: "SR", description: "\u3010\u98DF\u54C1\u3011\u98F2\u3080\u3068\u4E16\u754C\u304C\u30D0\u30B0\u3063\u3066\u898B\u3048\u308B\u3002", stats: { attack: 1200, speed: 120, cost: 800 }, image: "/assets/custom_units/glitch_coffee_artifact_1767793566311.png" }, { id: "artifact_05", name: "\u7121\u9650\u30D0\u30C3\u30C6\u30EA\u30FC", rarity: "SR", description: "\u3010\u7D20\u6750\u3011\u30A8\u30CD\u30EB\u30AE\u30FC\u304C\u5C3D\u304D\u308B\u3053\u3068\u306E\u306A\u3044\u96FB\u6C60\u3002", stats: { attack: 600, speed: 200, cost: 1e3 }, image: "/assets/custom_units/infinite_battery_artifact_1767793584960.png" }, { id: "unit_shrimp", name: "\u30A8\u30D3\u30D5\u30E9\u30A4\u30B3\u30A6\u30E2\u30EA", rarity: "N", description: "\u30B5\u30AF\u30B5\u30AF\u306E\u8863\u3092\u7E8F\u3063\u305F\u30B3\u30A6\u30E2\u30EA\u3002\u7A7A\u98DB\u3076\u5B9A\u98DF\u3002", stats: { attack: 40, speed: 60, cost: 100 }, image: "/assets/custom_units/fried_shrimp_bat_unit_1767793957033.png" }, { id: "unit_sushi", name: "\u30CB\u30AE\u30EA\u30B0\u30DE\uFF08\u30B5\u30FC\u30E2\u30F3\uFF09", rarity: "N", description: "\u30B7\u30E3\u30EA\u306E\u4F53\u3092\u6301\u3064\u30AF\u30E2\u3002\u30CD\u30BF\u304C\u65B0\u9BAE\u3002", stats: { attack: 50, speed: 40, cost: 120 }, image: "/assets/custom_units/sushi_spider_unit_1767793971247.png" }, { id: "unit_icecream", name: "\u30BD\u30D5\u30C8\u30AF\u30EA\u30FC\u30E0\u5E7D\u970A", rarity: "N", description: "\u6EB6\u3051\u304B\u304B\u3063\u305F\u30BD\u30D5\u30C8\u30AF\u30EA\u30FC\u30E0\u306E\u970A\u3002\u30B7\u30EB\u30AF\u30CF\u30C3\u30C8\u304C\u4F3C\u5408\u3046\u3002", stats: { attack: 30, speed: 70, cost: 90 }, image: "/assets/custom_units/ice_cream_ghost_unit_1767793990475.png" }, { id: "unit_teddy", name: "\u30AF\u30C8\u30A5\u30EB\u30D5\u30FB\u30D9\u30A2", rarity: "SR", description: "\u53E3\u304B\u3089\u89E6\u624B\u304C\u751F\u3048\u305F\u6050\u308D\u3057\u304F\u3082\u53EF\u611B\u3044\u30AF\u30DE\u3002", stats: { attack: 400, speed: 30, cost: 800 }, image: "/assets/custom_units/teddy_cthulhu_unit_1767794006316.png" }, { id: "unit_toaster", name: "\u30C8\u30FC\u30B9\u30BF\u30FC\u9F8D", rarity: "R", description: "\u9F8D\u306E\u8DB3\u304C\u751F\u3048\u305F\u30C8\u30FC\u30B9\u30BF\u30FC\u3002\u30D1\u30F3\u306F\u7126\u3052\u6C17\u5473\u3002", stats: { attack: 150, speed: 80, cost: 300 }, image: "/assets/custom_units/toaster_dragon_basic.png" }, { id: "unit_eyeball", name: "\u6642\u8A08\u4ED5\u639B\u3051\u306E\u773C\u7403", rarity: "SR", description: "\u9EC4\u91D1\u306E\u6B6F\u8ECA\u306B\u56F2\u307E\u308C\u305F\u773C\u7403\u3002\u5168\u3066\u3092\u898B\u5C4A\u3051\u308B\u3002", stats: { attack: 500, speed: 20, cost: 900 }, image: "/assets/custom_units/clockwork_eyeball_unit_1767794047624.png" }, { id: "unit_teapot", name: "\u30BE\u30A6\u3055\u3093\u85AC\u7F36", rarity: "R", description: "\u9F3B\u304C\u6CE8\u304E\u53E3\u306B\u306A\u3063\u305F\u4E0D\u601D\u8B70\u306A\u85AC\u7F36\u3002", stats: { attack: 120, speed: 40, cost: 350 }, image: "/assets/custom_units/teapot_elephant_unit_1767794067639.png" }, { id: "unit_snail", name: "\u591A\u8089\u690D\u7269\u30AB\u30BF\u30C4\u30E0\u30EA", rarity: "R", description: "\u80CC\u4E2D\u304C\u8C6A\u83EF\u306A\u591A\u8089\u690D\u7269\u306B\u306A\u3063\u305F\u30AB\u30BF\u30C4\u30E0\u30EA\u3002", stats: { attack: 100, speed: 10, cost: 400 }, image: "/assets/custom_units/succulent_snail_unit_1767794085958.png" }, { id: "unit_starfish", name: "\u30C4\u30AE\u30CF\u30AE\u30FB\u30B9\u30BF\u30FC", rarity: "N", description: "\u30C7\u30CB\u30E0\u751F\u5730\u3067\u30D1\u30C3\u30C1\u30EF\u30FC\u30AF\u3055\u308C\u305F\u30D2\u30C8\u30C7\u3002", stats: { attack: 45, speed: 50, cost: 110 }, image: "/assets/custom_units/stitched_starfish_unit_1767794103788.png" }, { id: "unit_angler", name: "\u30DA\u30ED\u30DA\u30ED\u30FB\u30A2\u30F3\u30B3\u30A6", rarity: "SR", description: "\u30DA\u30ED\u30DA\u30ED\u30AD\u30E3\u30F3\u30C7\u30A3\u3092\u63D0\u3052\u305F\u30A2\u30F3\u30B3\u30A6\u3002", stats: { attack: 450, speed: 35, cost: 850 }, image: "/assets/custom_units/lollipop_anglerfish_unit_1767794120942.png" }, { id: "unit_shrimp_v2", name: "\u771F\u30FB\u30A8\u30D3\u30D5\u30E9\u30A4\u30B3\u30A6\u30E2\u30EA", rarity: "SR", description: "\u3088\u308A\u30B8\u30E5\u30FC\u30B7\u30FC\u306B\u3001\u3088\u308A\u901F\u304F\u9032\u5316\u3057\u305F\u7A7A\u98DB\u3076\u63DA\u3052\u7269\u3002", stats: { attack: 300, speed: 120, cost: 1500 }, image: "/assets/custom_units/fried_shrimp_bat_beast_1767847252323.png" }, { id: "unit_sushi_v2", name: "\u7279\u4E0A\u30CB\u30AE\u30EA\u30B0\u30DE", rarity: "SR", description: "\u53B3\u9078\u3055\u308C\u305F\u30CD\u30BF\u3002\u8077\u4EBA\u306E\u6280\u304C\u5149\u308B\u516B\u672C\u811A\u3002", stats: { attack: 350, speed: 100, cost: 1600 }, image: "/assets/custom_units/sushi_spider_beast_1767847268404.png" }, { id: "unit_icecream_v2", name: "\u30B4\u30FC\u30B9\u30C8\u30FB\u30B5\u30F3\u30C7\u30FC", rarity: "SSR", description: "\u5E95\u77E5\u308C\u306C\u51B7\u6C17\u3002\u7518\u7F8E\u306A\u308B\u7D42\u308F\u308A\u3002", stats: { attack: 1200, speed: 50, cost: 3e3 }, image: "/assets/custom_units/ice_cream_ghost_beast_v2_1767847283210.png" }, { id: "unit_teddy_v2", name: "\u6DF1\u6DF5\u306E\u8D85\u8D8A\u30D9\u30A2", rarity: "UR", description: "\u3082\u3046\u300C\u53EF\u611B\u3044\u300D\u3067\u306F\u6E08\u307E\u3055\u308C\u306A\u3044\u3002\u5168\u3066\u3092\u98F2\u307F\u8FBC\u3080\u6050\u6016\u3002", stats: { attack: 5e3, speed: 40, cost: 8e3 }, image: "/assets/custom_units/teddy_cthulhu_beast_v2_1767847299817.png" }, { id: "unit_toaster_v2", name: "\u7206\u8D70\u30C8\u30FC\u30B9\u30C8\u30FB\u30C9\u30E9\u30B3", rarity: "SSR", description: "\u7126\u3052\u3002\u6012\u308A\u3002\u6700\u9AD8\u901F\u3002", stats: { attack: 1500, speed: 200, cost: 4500 }, image: "/assets/custom_units/toaster_dragon_beast.png" }, { id: "unit_eyeball_v2", name: "\u9EC4\u91D1\u306E\u771F\u7406\u773C", rarity: "SSR", description: "\u6B6F\u8ECA\u304C\u565B\u307F\u5408\u3044\u3001\u771F\u5B9F\u304C\u9732\u308F\u306B\u306A\u308B\u3002", stats: { attack: 2e3, speed: 30, cost: 5e3 }, image: "/assets/custom_units/clockwork_eyeball_beast_1767847166966.png" }, { id: "unit_teapot_v2", name: "\u30AD\u30F3\u30B0\u30FB\u30BE\u30A6\u30FB\u30B1\u30C8\u30EB", rarity: "SR", description: "\u6CB8\u9A30\u3059\u308B\u6012\u308A\u3002\u7D05\u8336\u306E\u6642\u9593\u306F\u7D42\u308F\u308A\u3060\u3002", stats: { attack: 800, speed: 60, cost: 2e3 }, image: "/assets/custom_units/teapot_elephant_beast_1767847181967.png" }, { id: "unit_snail_v2", name: "\u592A\u53E4\u306E\u591A\u8089\u690D\u7269\u30AB\u30D6\u30C8", rarity: "SR", description: "\u6570\u5343\u5E74\u306E\u6642\u3092\u8D8A\u3048\u305F\u91CD\u539A\u306A\u88C5\u7532\u3002", stats: { attack: 600, speed: 10, cost: 2500 }, image: "/assets/custom_units/succulent_snail_beast_1767847195279.png" }, { id: "unit_starfish_v2", name: "\u30C7\u30C3\u30C9\u30FB\u30C7\u30CB\u30E0\u30FB\u30B9\u30BF\u30FC", rarity: "SR", description: "\u7834\u308C\u3001\u7E2B\u3044\u5408\u308F\u3055\u308C\u3001\u518D\u3073\u7ACB\u3061\u4E0A\u304C\u308B\u3002", stats: { attack: 700, speed: 80, cost: 2200 }, image: "/assets/custom_units/stitched_starfish_beast_1767847210032.png" }, { id: "unit_angler_v2", name: "\u72C2\u4E71\u306E\u30AD\u30E3\u30F3\u30C7\u30A3\u30FB\u30D5\u30A3\u30C3\u30B7\u30E5", rarity: "SSR", description: "\u7518\u3044\u8A98\u60D1\u3002\u305D\u306E\u5148\u306B\u5F85\u3064\u306E\u306F\u5730\u7344\u3002", stats: { attack: 1800, speed: 45, cost: 4800 }, image: "/assets/custom_units/lollipop_anglerfish_beast_1767847225724.png" }, { id: "enemy_folder", name: "\u30D0\u30A4\u30CA\u30EA\u30FB\u30D5\u30A9\u30EB\u30C0", rarity: "R", description: "\u5727\u7E2E\u3055\u308C\u305F\u30C7\u30FC\u30BF\u3002\u89E3\u51CD\u3055\u308C\u305F\u6050\u6016\u3002", stats: { attack: 300, speed: 20, cost: 500 }, image: "/assets/custom_units/folder_mimic_enemy_1767846992594.png" }, { id: "enemy_fragment", name: "\u30D5\u30E9\u30B0\u30E1\u30F3\u30C8\u30FB\u30BD\u30A6\u30EB", rarity: "SR", description: "\u7815\u3051\u6563\u3063\u305F\u610F\u8B58\u3002\u5149\u308B\u30DD\u30EA\u30B4\u30F3\u3002", stats: { attack: 900, speed: 60, cost: 1800 }, image: "/assets/custom_units/fragmented_soul_enemy_1767847008290.png" }, { id: "enemy_static", name: "\u30B9\u30BF\u30C6\u30A3\u30C3\u30AF\u30FB\u30B9\u30C8\u30FC\u30E0", rarity: "SR", description: "\u7802\u5D50\u3002\u8B66\u544A\u3002\u8D64\u3044\u96F7\u3002", stats: { attack: 1100, speed: 40, cost: 2200 }, image: "/assets/custom_units/static_cloud_enemy_1767847023488.png" }, { id: "enemy_window", name: "\u30A8\u30E9\u30FC\u30FB\u30B9\u30CD\u30FC\u30AF", rarity: "SSR", description: "\u9023\u9396\u3059\u308B\u30C0\u30A4\u30A2\u30ED\u30B0\u3002\u6B62\u307E\u3089\u306A\u3044\u8B66\u544A\u3002", stats: { attack: 2500, speed: 90, cost: 5e3 }, image: "/assets/custom_units/window_snake_enemy_1767847039340.png" }, { id: "enemy_hydra", name: "\u30D7\u30EA\u30DF\u30C6\u30A3\u30D6\u30FB\u30D2\u30C9\u30E9", rarity: "UR", description: "\u7ACB\u65B9\u4F53\u3002\u7403\u4F53\u3002\u56DB\u89D2\u9310\u3002\u6570\u5B66\u7684\u7834\u58CA\u3002", stats: { attack: 6e3, speed: 50, cost: 1e4 }, image: "/assets/custom_units/low_poly_hydra_enemy_1767847053888.png" }, { id: "enemy_wireframe", name: "\u30EF\u30A4\u30E4\u30FC\u30D5\u30EC\u30FC\u30E0\u30FB\u30EC\u30A4\u30B9", rarity: "R", description: "\u7DDA\u306E\u91CD\u306A\u308A\u3002\u5B9F\u4F53\u306E\u306A\u3044\u6050\u6016\u3002", stats: { attack: 400, speed: 100, cost: 800 }, image: "/assets/custom_units/wireframe_ghost_enemy_1767847076319.png" }, { id: "enemy_kernel", name: "\u30AB\u30FC\u30CD\u30EB\u30FB\u30D1\u30CB\u30C3\u30AF", rarity: "SSR", description: "\uFF01\u3002\uFF01\u3002\uFF01\u3002\u81F4\u547D\u7684\u306A\u4E0D\u5177\u5408\u3002", stats: { attack: 3e3, speed: 20, cost: 6e3 }, image: "/assets/custom_units/kernel_panic_beast_enemy_1767847093176.png" }, { id: "enemy_buffer", name: "\u30D0\u30C3\u30D5\u30A1\u30FB\u30AA\u30FC\u30D0\u30FC\u30D5\u30ED\u30FC", rarity: "SR", description: "\u6EA2\u308C\u51FA\u3059\u30D4\u30F3\u30AF\u306E\u7C98\u6DB2\u3002\u57CB\u3081\u5C3D\u304F\u3055\u308C\u308B\u30E1\u30E2\u30EA\u3002", stats: { attack: 1200, speed: 30, cost: 2400 }, image: "/assets/custom_units/buffer_overflow_slime_enemy_1767847109093.png" }, { id: "enemy_null", name: "\u30CC\u30EB\u30FB\u30DD\u30A4\u30F3\u30BF", rarity: "SSR", description: "\u4F55\u3082\u306A\u3044\u3002\u305D\u3053\u306B\u3042\u308B\u306E\u306F\u865A\u7121\u3002", stats: { attack: 3500, speed: 70, cost: 7e3 }, image: "/assets/custom_units/null_pointer_spectre_enemy_1767847123340.png" }, { id: "enemy_piranha", name: "\u30AB\u30FC\u30BD\u30EB\u30FB\u30D4\u30E9\u30CB\u30A2", rarity: "UR", description: "\u30AF\u30EA\u30C3\u30AF\u3002\u30AF\u30EA\u30C3\u30AF\u3002\u55B0\u3089\u3044\u5C3D\u304F\u3059\u77E2 arrows\u3002", stats: { attack: 8e3, speed: 200, cost: 15e3 }, image: "/assets/custom_units/cursor_swarm_piranha_enemy_1767847140822.png" }], Ox = [{ id: "boss_001", name: "\u7D42\u672B\u306E\u30D7\u30ED\u30C8\u30B3\u30EB", nameEn: "Doomsday Protocol", tier: 1, health: 5e3, rewards: { mp: 1e3 }, image: "/assets/bosses/boss_001.png" }, { id: "boss_002", name: "\u865A\u7121\u306E\u30EB\u30FC\u30C8\u6A29\u9650", nameEn: "Void Root Access", tier: 1, health: 7500, rewards: { mp: 1500 }, image: "/assets/bosses/boss_002.png" }, { id: "boss_003", name: "\u6697\u9ED2\u306E\u30D5\u30A1\u30A4\u30A2\u30A6\u30A9\u30FC\u30EB", nameEn: "Dark Firewall", tier: 2, health: 12e3, rewards: { mp: 2500 }, image: "/assets/bosses/boss_003.png" }, { id: "boss_004", name: "\u6DF7\u6C8C\u306E\u30C7\u30FC\u30BF\u30B9\u30C8\u30EA\u30FC\u30E0", nameEn: "Chaos Data Stream", tier: 2, health: 18e3, rewards: { mp: 4e3 }, image: "/assets/bosses/boss_004.png" }, { id: "boss_005", name: "\u7834\u6EC5\u306E\u30B7\u30B9\u30C6\u30E0\u30B3\u30A2", nameEn: "Destruction System Core", tier: 3, health: 3e4, rewards: { mp: 7500 }, image: "/assets/bosses/boss_005.png" }, { id: "boss_006", name: "\u7D76\u671B\u306E\u30DE\u30B9\u30BF\u30FC\u30B5\u30FC\u30D0\u30FC", nameEn: "Despair Master Server", tier: 3, health: 5e4, rewards: { mp: 12e3 }, image: "/assets/bosses/boss_006.png" }, { id: "boss_007", name: "\u6C38\u52AB\u306E\u30AF\u30A9\u30F3\u30BF\u30E0AI", nameEn: "Eternal Quantum AI", tier: 4, health: 1e5, rewards: { mp: 25e3 }, image: "/assets/bosses/boss_007.png" }], em = { raidBosses: Ox }, Cx = 1e6, Dx = (o) => o >= Cx, Ux = (o, p) => Math.floor(o.baseCost * Math.pow(o.costMultiplier, p)), Hx = { Cpu: Lt, Bot: ip, Zap: Bp, Server: hc, Brain: gc }, Bx = (o, p) => {
  const h = [];
  for (let r = 0; r < 12; r++) {
    const g = r / 12 * Math.PI * 2, N = 100;
    h.push({ id: Date.now() + r + Math.random(), x: o, y: p, tx: Math.cos(g) * N, ty: Math.sin(g) * N });
  }
  return h;
}, um = w.memo(({ money: o, upgrades: p, onPurchase: h }) => {
  const [r, g] = w.useState(null), [N, R] = w.useState([]), C = w.useRef({}), k = w.useRef([]);
  w.useEffect(() => () => {
    k.current.forEach(clearTimeout);
  }, []);
  const v = (A) => {
    const $ = p.find((Z) => Z.id === A), J = Jf($, $.level);
    if (o >= J) {
      h(A), g(A);
      const Z = C.current[A];
      if (Z) {
        const ae = Z.getBoundingClientRect(), X = ae.left + ae.width / 2, pe = ae.top + ae.height / 2, Te = Bx(X, pe);
        R((fe) => [...fe.slice(-36), ...Te]);
        const xe = setTimeout(() => {
          g(null), R((fe) => fe.filter((he) => !Te.find((se) => se.id === he.id))), k.current = k.current.filter((fe) => fe !== xe);
        }, 800);
        k.current.push(xe);
      }
    }
  }, U = w.useCallback((A) => A >= 1e6 ? `${(A / 1e6).toFixed(1)}M` : A >= 1e3 ? `${(A / 1e3).toFixed(1)}K` : A.toString(), []);
  return s.jsxs("div", { className: "w-full max-w-md mx-auto space-y-4 relative", children: [s.jsxs("div", { className: "text-center mb-6", children: [s.jsx("h2", { className: "text-2xl font-black text-white italic tracking-tighter", children: "\u9B54\u5C0E\u8CFC\u8CB7\u90E8" }), s.jsx("div", { className: "text-[10px] text-white/40 uppercase tracking-widest", children: "\u9664\u970A\u3092\u52B9\u7387\u5316\u3059\u308B\u30C4\u30FC\u30EB\u3084\u4F7F\u3044\u9B54\u306E\u5951\u7D04" })] }), s.jsx("div", { className: "grid grid-cols-1 gap-4 pb-24", children: p.map((A) => {
    const $ = Jf(A, A.level), J = o >= $, Z = Hx[A.icon] || Lt, ae = r === A.id;
    return s.jsxs("div", { className: `
                              relative bg-white/5 border rounded-2xl p-4 transition-all overflow-hidden
                              ${J ? "border-white/20" : "border-white/5 opacity-60"}
                              ${ae ? "animate-money-pop scale-105" : ""}
                            `, children: [s.jsxs("div", { className: "absolute top-0 right-0 bg-neon-purple text-white px-4 py-1 rounded-bl-2xl text-[10px] font-black italic shadow-lg z-10", children: ["LV.", A.level] }), s.jsxs("div", { className: "flex items-center gap-5 relative z-10", children: [s.jsx("div", { className: `
                                    w-20 h-20 rounded-2xl overflow-hidden flex items-center justify-center border-4
                                    ${J ? "border-white/40" : "border-white/10"}
                                    bg-black/40 shadow-inner
                                `, children: A.image ? s.jsx("img", { src: A.image, alt: A.name, className: "w-full h-full object-cover" }) : s.jsx(Z, { size: 32 }) }), s.jsxs("div", { className: "flex-1 min-w-0", children: [s.jsx("h3", { className: "text-lg font-black text-white italic tracking-tighter truncate", children: A.name }), s.jsx("p", { className: "text-[10px] text-white/50 leading-tight line-clamp-2 mt-1 mb-2", children: A.lore }), s.jsx("div", { className: "flex items-center gap-2", children: s.jsxs("div", { className: "text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold", children: ["+", (A.baseIncome * A.level).toLocaleString(), " MP/\u79D2"] }) })] }), s.jsxs("button", { ref: (X) => C.current[A.id] = X, onClick: () => v(A.id), disabled: !J, className: `
                                      flex flex-col items-center justify-center gap-1 px-4 py-3 rounded-2xl font-black transition-all min-w-[90px]
                                      ${J ? "bg-white text-black shadow-[0_6px_0_#cccccc] active:translate-y-1 active:shadow-[0_2px_0_#cccccc]" : "bg-white/5 text-white/20 cursor-not-allowed border border-white/10"}
                                    `, children: [s.jsx("span", { className: "text-[10px] uppercase opacity-60", children: "Level Up" }), s.jsx("div", { className: "text-xs", children: J ? `${U($)}` : s.jsx(pc, { size: 14, className: "mx-auto" }) })] })] })] }, A.id);
  }) }), N.map((A) => s.jsx("div", { className: "purchase-particle", style: { position: "fixed", left: `${A.x}px`, top: `${A.y}px`, "--tx": `${A.tx}px`, "--ty": `${A.ty}px`, zIndex: 100 } }, A.id))] });
});
um.displayName = "Shop";
const Yx = [{ id: "crit_master", name: "\u4F1A\u5FC3\u306E\u4E00\u6483", description: "10%\u306E\u78BA\u7387\u3067\u30C0\u30E1\u30FC\u30B8\u304C3\u500D\u306B\u306A\u308B\u3002", icon: Jl, cost: 5e3, color: "from-orange-500 to-red-600" }, { id: "combo_shield", name: "\u30B3\u30F3\u30DC\u7DAD\u6301", description: "\u30DF\u30B9\u3057\u3066\u3082\u4E00\u5EA6\u3060\u3051\u30B3\u30F3\u30DC\u304C\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u306A\u3044\u3002", icon: Hi, cost: 15e3, color: "from-blue-500 to-cyan-600" }, { id: "time_bend", name: "\u6642\u7A7A\u306E\u6B6A\u307F", description: "\u30B3\u30F3\u30DC\u53D7\u4ED8\u6642\u9593\u304C\u3055\u3089\u306B1\u79D2\u5EF6\u9577\u3055\u308C\u308B\u3002", icon: nm, cost: 3e4, color: "from-purple-500 to-indigo-600" }, { id: "mana_surge", name: "\u9B54\u529B\u5954\u6D41", description: "\u8A60\u5531\u7834\u68C4\u30B2\u30FC\u30B8\u306E\u30C1\u30E3\u30FC\u30B8\u901F\u5EA6\u304C2\u500D\u306B\u306A\u308B\u3002", icon: oa, cost: 1e5, color: "from-yellow-400 to-orange-500" }], om = ({ money: o, unlockedSkills: p = [], onUnlock: h, onClose: r }) => s.jsx("div", { className: "absolute inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md animate-in fade-in zoom-in duration-300", children: s.jsxs("div", { className: "bg-[#1a1a1a] w-full max-w-lg h-[80vh] rounded-[2.5rem] border-2 border-neon-cyan/30 shadow-[0_0_50px_rgba(0,255,255,0.2)] overflow-hidden flex flex-col", children: [s.jsxs("div", { className: "p-8 border-b border-white/10 flex items-center justify-between", children: [s.jsxs("div", { children: [s.jsxs("h2", { className: "text-3xl font-black text-white italic tracking-tighter flex items-center gap-3", children: [s.jsx(Lt, { className: "text-neon-cyan animate-pulse" }), "\u30B9\u30AD\u30EB\u89E3\u653E"] }), s.jsx("p", { className: "text-white/40 text-[8px] font-black uppercase tracking-[0.3em] mt-1", children: "Ancient Magic Upgrade Tree" })] }), s.jsx("button", { onClick: r, className: "w-12 h-12 rounded-2xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all active:scale-95", children: s.jsx(Xa, { size: 24, className: "text-white/60" }) })] }), s.jsxs("div", { className: "px-8 py-4 bg-white/3 text-center", children: [s.jsx("span", { className: "text-xs font-bold text-white/40 uppercase tracking-widest", children: "\u6240\u6301\u9B54\u529B : " }), s.jsxs("span", { className: "text-xl font-black text-neon-cyan tracking-tight", children: [Math.floor(o).toLocaleString(), " MP"] })] }), s.jsx("div", { className: "flex-1 overflow-y-auto p-6 space-y-4", children: Yx.map((g) => {
  const N = g.icon, R = p.includes(g.id), C = o >= g.cost;
  return s.jsxs("div", { className: `
                  relative p-5 rounded-3xl border-2 transition-all duration-300
                  ${R ? "bg-gradient-to-br from-white/10 to-transparent border-neon-cyan/50 shadow-[0_10px_30px_rgba(0,255,255,0.1)]" : "bg-white/5 border-white/5 opacity-80"}
                `, children: [s.jsxs("div", { className: "flex items-center gap-5", children: [s.jsx("div", { className: `
                    w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg
                    bg-gradient-to-br ${g.color}
                    ${R ? "animate-pulse" : "grayscale"}
                  `, children: s.jsx(N, { size: 32, className: "text-white" }) }), s.jsxs("div", { className: "flex-1", children: [s.jsxs("div", { className: "flex items-center justify-between mb-1", children: [s.jsx("h3", { className: "text-lg font-black text-white italic", children: g.name }), R ? s.jsx("span", { className: "text-[10px] font-black text-neon-cyan bg-neon-cyan/10 px-2 py-1 rounded-full uppercase tracking-tighter", children: "\u89E3\u653E\u6E08\u307F" }) : s.jsxs("span", { className: "text-xs font-black text-white/60", children: [g.cost.toLocaleString(), " MP"] })] }), s.jsx("p", { className: "text-xs text-white/40 font-medium leading-relaxed", children: g.description })] })] }), !R && s.jsx("button", { disabled: !C, onClick: () => h(g.id, g.cost), className: `
                      w-full mt-4 py-3 rounded-xl font-black uppercase tracking-widest text-xs transition-all active:scale-95
                      ${C ? "bg-neon-cyan text-black hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]" : "bg-white/10 text-white/20 cursor-not-allowed"}
                    `, children: C ? "\u30B9\u30AD\u30EB\u3092\u7FD2\u5F97\u3059\u308B" : "\u9B54\u529B\u304C\u4E0D\u8DB3\u3057\u3066\u3044\u307E\u3059" })] }, g.id);
}) }), s.jsx("div", { className: "p-6 text-center text-[10px] text-white/20 font-bold uppercase tracking-[0.2em] border-t border-white/5", children: "\u53E4\u306E\u9B54\u9053\u3002\u305D\u306E\u5230\u9054\u8005\u3002" })] }) }), Tn = { UR: 0.05, SR: 0.15, R: 0.3 }, zo = 500, Lx = { cost: zo }, Gx = (o) => {
  if (o < zo) return { success: false, error: "MP\u304C\u8DB3\u308A\u307E\u305B\u3093\uFF01" };
  const p = Math.random();
  let h = "N";
  p < Tn.UR ? h = "UR" : p < Tn.UR + Tn.SR ? h = "SR" : p < Tn.UR + Tn.SR + Tn.R && (h = "R");
  const r = fc.filter((N) => N.rarity === h);
  return { success: true, unit: r[Math.floor(Math.random() * r.length)], cost: zo };
}, qx = ({ money: o, onPullGacha: p, onSpentMoney: h }) => {
  const [r, g] = w.useState(false), [N, R] = w.useState(null), [C, k] = w.useState(null), v = () => {
    if (r) return;
    k(null), R(null);
    const A = Gx(o);
    if (!A.success) {
      k(A.error);
      return;
    }
    h(A.cost), g(true), setTimeout(() => {
      R(A.unit), p(A.unit), g(false);
    }, 2e3);
  }, U = (A) => {
    switch (A) {
      case "UR":
        return "text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]";
      case "SR":
        return "text-red-400 drop-shadow-[0_0_10px_rgba(248,113,113,0.8)]";
      case "R":
        return "text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]";
      default:
        return "text-gray-400";
    }
  };
  return s.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden", children: [s.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-black to-black z-0" }), s.jsxs("div", { className: "relative z-10 w-full max-w-md flex flex-col items-center", children: [s.jsxs("div", { className: "w-64 h-64 bg-white/5 rounded-full border-4 border-white/10 flex items-center justify-center mb-8 relative group shadow-[0_0_50px_rgba(168,85,247,0.2)]", children: [r ? s.jsx("div", { className: "absolute inset-0 rounded-full bg-gradient-to-tr from-neon-purple via-neon-cyan to-yellow-400 animate-spin blur-xl opacity-50" }) : s.jsx("div", { className: "absolute inset-0 rounded-full bg-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" }), s.jsx(Mp, { size: 120, className: `text-white/20 transition-all duration-500 ${r ? "animate-bounce scale-110 text-white" : "group-hover:text-white/40"}` }), N && !r && s.jsxs("div", { className: "absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/90 rounded-full animate-in zoom-in duration-300 border-4 border-neon-cyan/50 shadow-[0_0_50px_rgba(6,182,212,0.5)]", children: [s.jsxs("div", { className: `text-4xl font-black italic mb-2 ${U(N.rarity)} animate-bounce`, children: [N.rarity, "!!"] }), s.jsx("img", { src: N.image, alt: N.name, className: "w-32 h-32 object-contain mb-2 drop-shadow-2xl" }), s.jsx("div", { className: "text-sm font-black text-white text-center px-4 leading-tight", children: N.name }), s.jsx("button", { onClick: () => R(null), className: "mt-4 px-6 py-2 bg-white text-black rounded-full font-bold text-xs hover:bg-neon-cyan transition-colors", children: "\u9589\u3058\u308B" })] })] }), C && s.jsx("div", { className: "absolute top-0 text-red-400 font-bold bg-red-400/10 px-4 py-2 rounded-full border border-red-400/20 animate-bounce", children: C }), s.jsxs("div", { className: "w-full space-y-4", children: [s.jsxs("div", { className: "text-center", children: [s.jsx("div", { className: "text-[10px] text-white/40 font-black uppercase tracking-widest mb-1", children: "RARE GACHA" }), s.jsx("h2", { className: "text-2xl font-black text-white italic", children: "\u6975\u9650\u306E\u9B54\u5C0E\u53EC\u559A" })] }), s.jsxs("button", { onClick: v, disabled: r || !!N, className: `
                            w-full py-6 rounded-2xl font-black text-xl italic tracking-tighter
                            flex items-center justify-center gap-3 relative overflow-hidden group
                            transition-all duration-200
                            ${r || N ? "bg-gray-800 text-gray-500 cursor-not-allowed" : "bg-gradient-to-r from-neon-purple to-indigo-600 text-white shadow-[0_6px_0_#4c1d95] active:translate-y-1 active:shadow-none hover:brightness-110"}
                        `, children: [s.jsx("div", { className: "absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" }), s.jsx(Lt, { size: 24, className: r ? "animate-spin" : "" }), s.jsx("span", { children: "1\u56DE\u53EC\u559A" }), s.jsx("div", { className: "px-3 py-1 bg-black/40 rounded-lg text-sm font-bold flex items-center gap-1", children: s.jsxs("span", { className: "text-neon-cyan", children: [Lx.cost, " MP"] }) })] }), s.jsxs("div", { className: "flex justify-center gap-4 text-[10px] font-bold text-white/30", children: [s.jsx("span", { children: "UR: 5%" }), s.jsx("span", { children: "SR: 15%" }), s.jsx("span", { children: "R: 30%" }), s.jsx("span", { children: "N: 50%" })] })] })] })] });
}, Xx = ({ collectedUnits: o = [], onClose: p }) => {
  const [h, r] = w.useState(null), g = (N) => {
    switch (N) {
      case "UR":
        return "text-yellow-400 bg-yellow-400/20 border-yellow-400";
      case "SR":
        return "text-red-400 bg-red-400/20 border-red-400";
      case "R":
        return "text-blue-400 bg-blue-400/20 border-blue-400";
      default:
        return "text-gray-400 bg-gray-400/20 border-gray-400";
    }
  };
  return s.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in zoom-in duration-300", children: s.jsxs("div", { className: "w-full max-w-4xl h-[85vh] dragon-glass-card bg-black/95 backdrop-blur-xl border-4 border-white/20 rounded-[40px] overflow-hidden relative shadow-2xl flex flex-col", children: [s.jsxs("div", { className: "p-6 border-b-2 border-white/10 flex justify-between items-center bg-black/40", children: [s.jsxs("div", { children: [s.jsx("h2", { className: "text-3xl font-black text-white italic tracking-tighter", children: "\u30E6\u30CB\u30C3\u30C8\u56F3\u9451" }), s.jsxs("div", { className: "text-[10px] text-neon-cyan font-bold tracking-widest uppercase", children: ["\u53CE\u96C6\u72B6\u6CC1: ", o.length, " / ", fc.length] })] }), s.jsx("button", { onClick: p, className: "p-2 hover:bg-white/10 rounded-full transition-colors", children: s.jsx(Xa, { size: 32, className: "text-white" }) })] }), s.jsxs("div", { className: "flex-1 overflow-hidden flex", children: [s.jsx("div", { className: "flex-1 overflow-y-auto p-6 custom-scrollbar", children: s.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4", children: fc.map((N) => {
    const R = o.includes(N.id);
    return s.jsx("button", { onClick: () => R && r(N), disabled: !R, className: `
                                            aspect-square rounded-xl border-2 relative overflow-hidden transition-all group
                                            ${R ? "bg-white/5 border-white/20 hover:border-neon-cyan hover:scale-105 active:scale-95 cursor-pointer" : "bg-black/40 border-white/5 opacity-50 cursor-not-allowed grayscale"}
                                            ${(h == null ? void 0 : h.id) === N.id ? "ring-4 ring-neon-cyan border-transparent" : ""}
                                        `, children: R ? s.jsxs(s.Fragment, { children: [s.jsx("div", { className: "absolute inset-0 p-2", children: s.jsx("img", { src: N.image, alt: N.name, className: "w-full h-full object-contain drop-shadow-xl" }) }), s.jsx("div", { className: `absolute top-1 left-1 px-1.5 py-0.5 rounded text-[8px] font-black ${g(N.rarity)} border`, children: N.rarity })] }) : s.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: s.jsx(Qf, { size: 24, className: "text-white/20" }) }) }, N.id);
  }) }) }), s.jsx("div", { className: "w-80 bg-black/60 border-l-2 border-white/10 p-6 flex flex-col overflow-y-auto", children: h ? s.jsxs("div", { className: "animate-in slide-in-from-right duration-300", children: [s.jsxs("div", { className: "aspect-square bg-white/5 rounded-2xl border-2 border-white/10 mb-6 flex items-center justify-center p-4 relative overflow-hidden group", children: [s.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }), s.jsx("img", { src: h.image, alt: h.name, className: "w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-10" }), s.jsx("div", { className: `absolute top-3 left-3 px-3 py-1 rounded-lg text-sm font-black ${g(h.rarity)} border-2 z-20`, children: h.rarity })] }), s.jsx("h3", { className: "text-2xl font-black text-white italic tracking-tighter mb-2 leading-none", children: h.name }), s.jsxs("div", { className: "space-y-4", children: [s.jsx("div", { className: "text-sm font-bold text-white/60 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5", children: h.description }), s.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [s.jsxs("div", { className: "bg-white/5 p-3 rounded-xl border border-white/5", children: [s.jsx("div", { className: "text-[10px] text-white/40 font-black uppercase tracking-widest", children: "\u30D1\u30EF\u30FC" }), s.jsx("div", { className: "text-xl font-black text-white", children: h.stats.attack })] }), s.jsxs("div", { className: "bg-white/5 p-3 rounded-xl border border-white/5", children: [s.jsx("div", { className: "text-[10px] text-white/40 font-black uppercase tracking-widest", children: "\u30B9\u30D4\u30FC\u30C9" }), s.jsx("div", { className: "text-xl font-black text-white", children: h.stats.speed })] }), s.jsxs("div", { className: "bg-white/5 p-3 rounded-xl border border-white/5 col-span-2", children: [s.jsx("div", { className: "text-[10px] text-white/40 font-black uppercase tracking-widest", children: "\u51FA\u6483\u30B3\u30B9\u30C8" }), s.jsxs("div", { className: "text-xl font-black text-neon-cyan", children: [h.stats.cost, " MP"] })] })] })] })] }) : s.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center text-white/20 text-center gap-4", children: [s.jsx(Qf, { size: 48 }), s.jsxs("div", { className: "text-sm font-bold", children: ["\u30E6\u30CB\u30C3\u30C8\u3092\u9078\u629E\u3057\u3066", s.jsx("br", {}), "\u8A73\u7D30\u3092\u8868\u793A"] })] }) })] })] }) });
}, Zx = ({ deckStats: o, artifactStats: p, combo: h, magicStats: r }) => s.jsxs("div", { className: "w-full max-w-md bg-black/40 backdrop-blur-md rounded-[2.5rem] border border-white/10 p-6 space-y-4", children: [s.jsxs("div", { className: "flex items-center justify-between mb-2 px-2", children: [s.jsx("span", { className: "text-[10px] font-black text-white/40 uppercase tracking-[0.2em]", children: "Active Passives" }), s.jsx("span", { className: "text-[10px] font-black text-neon-cyan animate-pulse", children: "STATUS: OPTIMIZED" })] }), s.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [s.jsxs("div", { className: "bg-white/5 rounded-2xl p-4 border border-white/5 flex flex-col gap-1", children: [s.jsxs("div", { className: "flex items-center gap-2 text-neon-purple", children: [s.jsx(lx, { size: 14 }), s.jsx("span", { className: "text-[8px] font-black uppercase", children: "Battle Power" })] }), s.jsxs("div", { className: "text-xl font-black text-white", children: ["x", (o.attack * p.damageMult).toFixed(1)] })] }), s.jsxs("div", { className: "bg-white/5 rounded-2xl p-4 border border-white/5 flex flex-col gap-1", children: [s.jsxs("div", { className: "flex items-center gap-2 text-neon-cyan", children: [s.jsx(Lt, { size: 14 }), s.jsx("span", { className: "text-[8px] font-black uppercase", children: "Magic Income" })] }), s.jsxs("div", { className: "text-xl font-black text-white", children: ["x", p.incomeMult.toFixed(1)] })] }), s.jsxs("div", { className: "bg-white/5 rounded-2xl p-4 border border-white/5 flex flex-col gap-1", children: [s.jsxs("div", { className: "flex items-center gap-2 text-yellow-400", children: [s.jsx(Jl, { size: 14 }), s.jsx("span", { className: "text-[8px] font-black uppercase", children: "Crit Chance" })] }), s.jsxs("div", { className: "text-xl font-black text-white", children: [Math.floor(r.crit), "%"] })] }), s.jsxs("div", { className: "bg-white/5 rounded-2xl p-4 border border-white/5 flex flex-col gap-1", children: [s.jsxs("div", { className: "flex items-center gap-2 text-emerald-400", children: [s.jsx(oa, { size: 14 }), s.jsx("span", { className: "text-[8px] font-black uppercase", children: "Combo Shield" })] }), s.jsxs("div", { className: "text-xl font-black text-white", children: [p.comboTime / 1e3, "s"] })] })] })] }), Qx = ({ money: o, totalEarned: p, dragonLevel: h, maxCombo: r, onStartBattle: g, upgrades: N, onPurchase: R, unlockedSkills: C, onUnlock: k, onOpenSettings: v, onOpenLore: U, onOpenArtifacts: A, onOpenMagicSelection: $, onOpenWorldSelection: J, currentWorldId: Z, collectedUnits: ae, onPullGacha: X, onSpentMoney: pe, recommendedActionId: Te, unlockedAchievements: xe, onOpenAchievements: fe, deckStats: he, artifactStats: se, magicStats: W }) => {
  const [le, Le] = w.useState("hub"), [ot, Ne] = w.useState(false), [Ee, Pe] = w.useState(false);
  w.useEffect(() => {
    let Se;
    const S = () => {
      Pe(false), clearTimeout(Se), Se = setTimeout(() => Pe(true), 15e3);
    };
    return window.addEventListener("mousemove", S), window.addEventListener("mousedown", S), window.addEventListener("keydown", S), window.addEventListener("touchstart", S), S(), () => {
      window.removeEventListener("mousemove", S), window.removeEventListener("mousedown", S), window.removeEventListener("keydown", S), window.removeEventListener("touchstart", S), clearTimeout(Se);
    };
  }, []);
  const [Xe] = w.useState(() => [...Array(6)].map((Se, S) => ({ left: Math.random() * 100, top: Math.random() * 100, dx: (Math.random() - 0.5) * 200, dy: (Math.random() - 0.5) * 200, delay: S * 1.5 })));
  return s.jsxs("div", { className: "flex-1 flex flex-col items-center overflow-hidden relative", children: [Ee && s.jsx("div", { className: "absolute inset-0 z-0 pointer-events-none overflow-hidden", children: Xe.map((Se, S) => s.jsx("div", { className: "absolute w-4 h-4 rounded-full bg-neon-cyan/20 blur-xl animate-magic-orb", style: { left: `${Se.left}%`, top: `${Se.top}%`, "--dx": `${Se.dx}px`, "--dy": `${Se.dy}px`, animationDelay: `${Se.delay}s` } }, S)) }), s.jsxs("div", { className: "flex-1 w-full overflow-y-auto px-6 pb-32 custom-scrollbar", children: [le === "hub" && s.jsxs("div", { className: "flex flex-col items-center animate-in fade-in zoom-in duration-500 py-6", children: [s.jsxs("div", { className: "relative w-full max-w-md bg-white/5 border-4 border-white/10 rounded-[40px] p-8 mb-8 overflow-hidden shadow-2xl", children: [s.jsx("div", { className: "absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-purple opacity-50" }), s.jsxs("div", { className: "flex flex-col items-center", children: [s.jsx("div", { className: "relative z-10 mb-8 transform hover:scale-110 transition-transform duration-500", children: s.jsx(cm, { level: h, dialogue: Ee ? "" : "\u4E3B\u3088\u3001\u6E96\u5099\u306F\u826F\u3044\u304B\uFF1F", isIdle: Ee }) }), s.jsxs("div", { className: "text-center z-10", children: [s.jsxs("div", { className: "text-3xl font-black text-white italic tracking-tighter mb-1", children: ["LV.", h, " \u30A6\u30A3\u30B6\u30FC\u30C9\u30FB\u30C9\u30E9\u30B4\u30F3"] }), s.jsxs("div", { className: "flex items-center justify-center gap-2", children: [s.jsx("div", { className: "text-[10px] text-neon-cyan font-bold tracking-[0.2em] shadow-neon-cyan/20 uppercase", children: h >= 200 ? "\u4F1D\u8AAC\u306E\u795E\u8A71\u7D1A" : h >= 100 ? "\u899A\u9192\u306E\u8D85\u9B54\u5C0E" : "\u672A\u719F\u306A\u4F7F\u3044\u9B54" }), s.jsxs("div", { className: "px-2 py-[2px] rounded-full bg-white/10 text-[8px] font-black text-white/60 border border-white/10", children: ["WORLD: ", Z] })] })] })] })] }), s.jsx("div", { className: "w-full max-w-md mb-8", children: s.jsx(Zx, { deckStats: he, artifactStats: se, combo: r, magicStats: W }) }), s.jsxs("div", { className: "w-full max-w-md space-y-4", children: [s.jsxs("div", { className: "w-full space-y-2", children: [s.jsx("div", { className: "text-[10px] font-black text-white/40 tracking-[0.2em] uppercase mb-1 px-2", children: "Preparation" }), s.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2", children: [s.jsxs("div", { onClick: $, className: "group dragon-glass-card p-4 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-all border-neon-cyan/20", children: [s.jsxs("div", { className: "flex flex-col", children: [s.jsx("div", { className: "text-[8px] font-black text-neon-cyan tracking-widest uppercase mb-1", children: "LOADOUT" }), s.jsx("div", { className: "text-xs font-bold text-white", children: "\u9B54\u6CD5\u88C5\u5099" })] }), s.jsx(zp, { size: 16, className: "text-neon-cyan/50 group-hover:text-neon-cyan" })] }), s.jsxs("div", { onClick: () => Ne(true), className: "group dragon-glass-card p-4 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-all border-yellow-400/20", children: [s.jsxs("div", { className: "flex flex-col", children: [s.jsx("div", { className: "text-[8px] font-black text-yellow-400 tracking-widest uppercase mb-1", children: "UNITS" }), s.jsx("div", { className: "text-xs font-bold text-white", children: "\u90E8\u968A\u7DE8\u6210" })] }), s.jsx(Rn, { className: "text-white/20 w-4 h-4" })] })] })] }), s.jsxs("div", { className: "w-full space-y-2", children: [s.jsx("div", { className: "text-[10px] font-black text-white/40 tracking-[0.2em] uppercase mb-1 px-2", children: "Research & Proof" }), s.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2", children: [s.jsxs("div", { onClick: J, className: "group dragon-glass-card p-4 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-all border-emerald-400/20", children: [s.jsxs("div", { className: "flex flex-col", children: [s.jsx("div", { className: "text-[8px] font-black text-emerald-400 tracking-widest uppercase mb-1", children: "WORLD" }), s.jsx("div", { className: "text-xs font-bold text-white", children: "\u4E16\u754C\u5730\u56F3" })] }), s.jsx(im, { size: 16, className: "text-emerald-400/50 group-hover:text-emerald-400" })] }), s.jsxs("div", { onClick: fe, className: "group dragon-glass-card p-4 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-all border-yellow-500/20", children: [s.jsxs("div", { className: "flex flex-col", children: [s.jsx("div", { className: "text-[8px] font-black text-yellow-500 tracking-widest uppercase mb-1", children: "PROOFS" }), s.jsx("div", { className: "text-xs font-bold text-white", children: "\u5B9F\u529B\u8A3C\u660E" })] }), s.jsxs("div", { className: "flex items-center gap-1", children: [s.jsx("span", { className: "text-[10px] text-yellow-500 font-black italic", children: (xe == null ? void 0 : xe.length) || 0 }), s.jsx(Ui, { size: 14, className: "text-yellow-500/50 group-hover:text-yellow-500" })] })] }), s.jsxs("div", { onClick: U, className: "group dragon-glass-card p-4 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-all border-neon-cyan/20", children: [s.jsxs("div", { className: "flex flex-col", children: [s.jsx("div", { className: "text-[8px] font-black text-neon-cyan tracking-widest uppercase mb-1", children: "ARCHIVE" }), s.jsx("div", { className: "text-xs font-bold text-white", children: "\u9B54\u5C0E\u66F8\u9332" })] }), s.jsx(Rn, { className: "text-white/20 w-4 h-4" })] })] })] }), s.jsx("div", { className: "w-full", children: s.jsxs("div", { onClick: A, "data-tutorial-id": "artifact-btn", className: "w-full group dragon-glass-card p-4 flex items-center justify-between cursor-pointer hover:bg-white/10 transition-all border-neon-purple/20", children: [s.jsxs("div", { className: "flex flex-col", children: [s.jsx("div", { className: "text-[8px] font-black text-neon-purple tracking-widest uppercase mb-1", children: "ARTIFACTS" }), s.jsx("div", { className: "text-xs font-bold text-white", children: "\u81F3\u9AD8\u306E\u79D8\u5B9D" })] }), s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx("span", { className: "text-[10px] text-neon-purple animate-pulse", children: "\u5F37\u5316\u53EF\u80FD" }), s.jsx(Rn, { className: "text-white/20 w-4 h-4" })] })] }) }), s.jsxs("button", { onClick: g, "data-tutorial-id": "fight-button", className: `w-full stage-select-btn py-6 flex flex-col items-center justify-center gap-1 group relative overflow-hidden ${Te === "fight-button" ? "animate-recommend border-4 border-neon-cyan" : ""}`, children: [s.jsxs("div", { className: "flex items-center gap-3 relative z-10", children: [s.jsx(ix, { size: 28, className: "group-hover:rotate-12 transition-transform" }), s.jsx("span", { className: "text-2xl md:text-3xl font-black italic tracking-tighter uppercase", children: "\u6226\u95D8\u958B\u59CB" })] }), s.jsx("span", { className: "text-[10px] font-bold opacity-40 relative z-10", children: "\u6D88\u8CBB\u9B54\u529B : 0 (\u30C6\u30B9\u30C8\u7528)" }), s.jsx("div", { className: "absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" }), s.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" })] })] }), s.jsxs("div", { className: "grid grid-cols-2 gap-4 w-full max-w-md mt-8", children: [s.jsxs("div", { className: "dragon-glass-card p-4 flex flex-col items-center justify-center text-center", children: [s.jsx(Ui, { className: "text-yellow-400 mb-1", size: 18 }), s.jsx("div", { className: "text-[8px] font-black text-white/30 uppercase tracking-widest", children: "\u3042\u3064\u3081\u305F\u5408\u8A08" }), s.jsxs("div", { className: "text-sm font-black text-white", children: [(Math.floor(p) / 1e3).toFixed(1), "k MP"] })] }), s.jsxs("div", { className: "dragon-glass-card p-4 flex flex-col items-center justify-center text-center", children: [s.jsx(oa, { className: "text-neon-cyan mb-1", size: 18 }), s.jsx("div", { className: "text-[8px] font-black text-white/30 uppercase tracking-widest", children: "\u30B3\u30F3\u30DC\u306E\u304D\u308D\u304F" }), s.jsxs("div", { className: "text-sm font-black text-white", children: [r, " Combo"] })] })] })] }), le === "shop" && s.jsx("div", { className: "animate-in fade-in slide-in-from-right-4 duration-500 py-6", children: s.jsx(um, { money: o, upgrades: N, onPurchase: R }) }), le === "skills" && s.jsx("div", { className: "animate-in fade-in slide-in-from-left-4 duration-500 py-6", children: s.jsx(om, { money: o, unlockedSkills: C, onUnlock: k }) }), le === "gacha" && s.jsx("div", { className: "animate-in fade-in slide-in-from-right-4 duration-500 py-6", children: s.jsx(qx, { money: o, onPullGacha: X, onSpentMoney: pe }) })] }), ot && s.jsx(Xx, { collectedUnits: ae, onClose: () => Ne(false) }), s.jsxs("div", { className: "fixed bottom-0 left-0 w-full h-20 md:h-24 bg-[#0a0a0a] border-t-4 border-white/5 flex items-center justify-around px-2 md:px-4 z-[50] shadow-[0_-20px_40px_rgba(0,0,0,0.5)]", children: [s.jsxs("button", { onClick: () => {
    Le("hub"), lt.playSFX("click");
  }, "data-tutorial-id": "hub-tab", className: `flex flex-col items-center gap-1 transition-all ${le === "hub" ? "scale-110 text-white" : "opacity-40 text-white/50 hover:opacity-100"}`, children: [s.jsx("div", { className: `p-3 rounded-2xl ${le === "hub" ? "bg-neon-cyan/20 shadow-lg" : ""}`, children: s.jsx(mp, { size: 24, className: "tab-icon-glow text-neon-cyan" }) }), s.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-neon-cyan", children: "\u62E0\u70B9" })] }), s.jsxs("button", { onClick: () => {
    Le("skills"), lt.playSFX("click");
  }, "data-tutorial-id": "skills-tab", className: `flex flex-col items-center gap-1 transition-all ${le === "skills" ? "scale-110 text-white" : "opacity-40 text-white/50 hover:opacity-100"}`, children: [s.jsx("div", { className: `p-3 rounded-2xl ${le === "skills" ? "bg-neon-blue/20 shadow-lg" : ""}`, children: s.jsx(oa, { size: 24, className: "tab-icon-glow text-neon-blue" }) }), s.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-neon-blue", children: "\u8853\u5F0F" })] }), s.jsxs("button", { onClick: () => {
    Le("shop"), lt.playSFX("click");
  }, "data-tutorial-id": "shop-tab", className: `flex flex-col items-center gap-1 transition-all ${le === "shop" ? "scale-110 text-white" : "opacity-40 text-white/50 hover:opacity-100"} ${Te === "shop-tab" ? "animate-recommend" : ""}`, children: [s.jsx("div", { className: `p-3 rounded-2xl ${le === "shop" ? "bg-neon-purple/20 shadow-lg" : ""}`, children: s.jsx(Jp, { size: 24, className: "tab-icon-glow text-neon-purple" }) }), s.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-neon-purple", children: "\u5E97" })] }), s.jsxs("button", { onClick: () => {
    Le("gacha"), lt.playSFX("click");
  }, "data-tutorial-id": "gacha-tab", className: `flex flex-col items-center gap-1 transition-all ${le === "gacha" ? "scale-110 text-white" : "opacity-40 text-white/50 hover:opacity-100"}`, children: [s.jsx("div", { className: `p-3 rounded-2xl ${le === "gacha" ? "bg-yellow-400/20 shadow-lg" : ""}`, children: s.jsx(Lt, { size: 24, className: "tab-icon-glow text-yellow-400" }) }), s.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest text-yellow-400", children: "\u53EC\u559A" })] }), s.jsxs("button", { onClick: () => {
    v(), lt.playSFX("click");
  }, className: "flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-all", children: [s.jsx("div", { className: "p-3", children: s.jsx(xc, { size: 24 }) }), s.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest", children: "\u8A2D\u5B9A" })] })] })] });
}, Vx = ({ objective: o }) => {
  if (!o) return null;
  const { text: p, type: h } = o, r = () => {
    switch (h) {
      case "UPGRADE":
        return "bg-neon-purple/20 border-neon-purple text-neon-purple";
      case "FIGHT":
        return "bg-neon-cyan/20 border-neon-cyan text-neon-cyan";
      case "REBIRTH":
        return "bg-neon-blue/20 border-neon-blue text-neon-blue";
      default:
        return "bg-white/10 border-white/20 text-white";
    }
  };
  return s.jsx("div", { className: "fixed top-20 left-1/2 -translate-x-1/2 z-[400] w-[90%] max-w-sm pointer-events-none animate-in slide-in-from-top duration-500", children: s.jsxs("div", { className: `
                flex items-center gap-3 px-4 py-2 rounded-2xl border-2 backdrop-blur-md shadow-2xl
                ${r()}
            `, children: [s.jsx("div", { className: "flex-shrink-0 p-1.5 rounded-lg bg-white/10", children: s.jsx(Jl, { size: 16, className: "animate-pulse" }) }), s.jsxs("div", { className: "flex-1", children: [s.jsx("div", { className: "text-[8px] font-black uppercase tracking-[0.2em] opacity-60", children: "Next Mission" }), s.jsxs("div", { className: "text-xs font-black italic tracking-tight flex items-center gap-1", children: [p, s.jsx(Lt, { size: 10, className: "animate-bounce" })] })] }), s.jsx("div", { className: "flex-shrink-0 animate-bounce-horizontal", children: s.jsx(Rn, { size: 16 }) })] }) });
}, Jx = ({ combo: o, worldId: p = "GENESIS" }) => {
  const h = () => o >= 25 ? "combo-extreme" : o >= 15 ? "combo-high" : o >= 5 ? "combo-medium" : "combo-low", r = w.useMemo(() => {
    switch (p) {
      case "CYBERIA":
        return s.jsx("div", { className: "absolute inset-0 overflow-hidden opacity-30", children: [...Array(20)].map((g, N) => s.jsxs("div", { className: "absolute text-matrix-green font-mono text-xs animate-digital-rain", style: { left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 2}s`, animationDuration: `${1 + Math.random() * 2}s` }, children: [String.fromCharCode(12448 + Math.random() * 96), s.jsx("br", {}), String.fromCharCode(12448 + Math.random() * 96), s.jsx("br", {}), String.fromCharCode(12448 + Math.random() * 96)] }, N)) });
      case "GENESIS":
        return s.jsx("div", { className: "absolute inset-0 overflow-hidden opacity-40", children: [...Array(15)].map((g, N) => s.jsx("div", { className: "absolute w-4 h-4 bg-pink-300/60 rounded-full animate-petal blur-[1px]", style: { left: `${Math.random() * 100}%`, top: "-5%", animationDelay: `${Math.random() * 5}s`, animationDuration: `${5 + Math.random() * 5}s` } }, N)) });
      case "ETERNITY":
        return s.jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [s.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-transparent to-transparent animate-pulse" }), [...Array(30)].map((g, N) => s.jsx("div", { className: "absolute w-1 h-1 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]", style: { left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 3}s` } }, N))] });
      case "LEGEND":
        return s.jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [s.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-orange-500/10" }), [...Array(5)].map((g, N) => s.jsx("div", { className: "absolute w-[200%] h-32 bg-gradient-to-r from-transparent via-yellow-200/5 to-transparent -rotate-45 animate-scan", style: { top: `${N * 25}%`, animationDelay: `${N * 0.5}s` } }, N))] });
      default:
        return null;
    }
  }, [p]);
  return s.jsxs("div", { className: "fixed inset-0 pointer-events-none z-0 overflow-hidden bg-slate-950", children: [s.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" }), r, s.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent h-[200%] animate-scan pointer-events-none" }), s.jsx("div", { className: "noise-overlay opacity-30" }), o > 0 && s.jsx("div", { className: `neon-edge-glow ${h()}` }), s.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/20 to-transparent" })] });
}, oc = [{ id: "first_hack", name: "\u521D\u30CF\u30C3\u30AF", description: "\u30E2\u30F3\u30B9\u30BF\u30FC\u30921\u4F53\u5012\u3059\u3002", condition: (o) => o.stageIndex >= 1, reward: "\u5168\u30C0\u30E1\u30FC\u30B8 +5%", icon: "\u2694\uFE0F" }, { id: "combo_novice", name: "\u30B3\u30F3\u30DC\u306E\u4F7F\u3044\u624B", description: "10\u30B3\u30F3\u30DC\u3092\u9054\u6210\u3059\u308B\u3002", condition: (o) => o.maxCombo >= 10, reward: "MP\u7372\u5F97\u91CF +10%", icon: "\u26A1" }, { id: "collector", name: "\u30B3\u30EC\u30AF\u30BF\u30FC", description: "\u30E6\u30CB\u30C3\u30C8\u309210\u7A2E\u985E\u96C6\u3081\u308B\u3002", condition: (o) => o.collectedUnits.length >= 10, reward: "\u30AC\u30C1\u30E3\u904B +5%", icon: "\u{1F3B4}" }, { id: "rich_hacker", name: "\u5BCC\u8C6A\u30CF\u30C3\u30AB\u30FC", description: "\u7D2F\u8A08\u9B54\u529B(MP) 100\u4E07\u3092\u7A81\u7834\u3002", condition: (o) => o.totalEarned >= 1e6, reward: "\u5168\u30C0\u30E1\u30FC\u30B8 +15%", icon: "\u{1F4B0}" }, { id: "dragon_master", name: "\u7ADC\u306E\u5C0E\u304D\u624B", description: "\u30C9\u30E9\u30B4\u30F3\u306E\u9032\u5316\u6BB5\u968E\u304C4\u4EE5\u4E0A\u306B\u5230\u9054\u3002", condition: (o) => o.dragonLevel >= 150, reward: "\u30B3\u30F3\u30DC\u53D7\u4ED8\u6642\u9593 +0.5s", icon: "\u{1F409}" }, { id: "world_traveler", name: "\u4E16\u754C\u3092\u8D85\u3048\u3057\u8005", description: "2\u3064\u76EE\u306E\u4E16\u754C\uFF08CYBERIA\uFF09\u306B\u5230\u9054\u3059\u308B\u3002", condition: (o) => o.worldProgress.GENESIS >= 50, reward: "\u5168\u53CE\u76CA +20%", icon: "\u{1F30D}" }, { id: "speed_demon", name: "\u30B9\u30D4\u30FC\u30C9\u72C2", description: "50\u30B3\u30F3\u30DC\u3092\u9054\u6210\u3059\u308B\u3002", condition: (o) => o.maxCombo >= 50, reward: "\u30AF\u30FC\u30EB\u30BF\u30A4\u30E0\u77ED\u7E2E 10%", icon: "\u{1F680}" }, { id: "god_hacker", name: "\u795E\u306E\u6307", description: "\u7D2F\u8A08\u30BF\u30C3\u30D7\u6570\u304C 10,000\u56DE\u3092\u7A81\u7834\u3002", condition: (o) => o.totalTaps >= 1e4, reward: "\u30AF\u30EA\u30C6\u30A3\u30AB\u30EB\u7387 +10%", icon: "\u{1F590}\uFE0F" }, { id: "ultimate_evolution", name: "\u4E0D\u6EC5\u306E\u795E\u9F8D", description: "\u30C9\u30E9\u30B4\u30F3\u306E\u6700\u7D42\u5F62\u614B\u300C\u8D85\u8D8A\u795E\u9F8D\u300D\u306B\u5230\u9054\u3002", condition: (o) => o.dragonLevel >= 500, reward: "\u5168\u30C0\u30E1\u30FC\u30B8 +50%", icon: "\u{1F451}" }], Kx = ({ achievement: o, onComplete: p }) => {
  const [h, r] = w.useState(false);
  return w.useEffect(() => {
    r(true);
    const g = setTimeout(() => {
      r(false), setTimeout(p, 600);
    }, 4e3);
    return () => clearTimeout(g);
  }, [p]), s.jsx("div", { className: `
            fixed top-20 right-6 z-[2000] 
            transition-all duration-500 ease-out
            ${h ? "translate-x-0" : "translate-x-[120%]"}
        `, children: s.jsx("div", { className: "bg-gradient-to-r from-yellow-500 via-orange-600 to-yellow-500 p-[2px] rounded-2xl shadow-[0_0_30px_rgba(234,179,8,0.4)]", children: s.jsxs("div", { className: "bg-[#1a1a1a] rounded-2xl px-6 py-4 flex items-center gap-4 border border-white/10", children: [s.jsx("div", { className: "w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center animate-bounce shadow-lg", children: s.jsx(Ui, { size: 28, className: "text-black" }) }), s.jsxs("div", { children: [s.jsx("div", { className: "text-[10px] font-black uppercase tracking-[0.2em] text-yellow-500/80", children: "Achievement Unlocked!" }), s.jsx("h3", { className: "text-lg font-black text-white italic leading-tight", children: o.name }), s.jsxs("p", { className: "text-[10px] font-bold text-white/40 uppercase mt-1", children: ["Reward: ", o.reward] })] })] }) }) });
}, $x = ({ unlockedAchievements: o = [], onClose: p }) => s.jsx("div", { className: "fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300", children: s.jsxs("div", { className: "w-full max-w-2xl h-[80vh] bg-[#1a1a1a] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col", children: [s.jsxs("div", { className: "flex items-center justify-between p-8 pb-4", children: [s.jsxs("div", { children: [s.jsxs("h2", { className: "text-3xl font-black text-white italic tracking-tighter flex items-center gap-3", children: [s.jsx(Ui, { className: "text-yellow-500" }), "\u5B9F\u529B\u8A3C\u660E (Achievements)"] }), s.jsx("p", { className: "text-white/40 text-[10px] uppercase font-black tracking-widest mt-1", children: "Proof of your hacking prowess" })] }), s.jsx("button", { onClick: p, className: "p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors", children: s.jsx(Xa, { size: 24, className: "text-white/60" }) })] }), s.jsxs("div", { className: "px-8 py-4 bg-white/3 flex items-center justify-between", children: [s.jsx("span", { className: "text-xs font-bold text-white/40 uppercase tracking-widest", children: "\u9054\u6210\u7387" }), s.jsx("div", { className: "flex-1 mx-4 h-2 bg-white/5 rounded-full overflow-hidden", children: s.jsx("div", { className: "h-full bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-1000", style: { width: `${o.length / oc.length * 100}%` } }) }), s.jsxs("span", { className: "text-sm font-black text-yellow-500 italic", children: [o.length, "/", oc.length] })] }), s.jsx("div", { className: "flex-1 overflow-y-auto p-8 space-y-4 custom-scrollbar", children: oc.map((h) => {
  const r = o.includes(h.id);
  return s.jsxs("div", { className: `
                                    p-5 rounded-3xl border-2 transition-all flex items-center gap-6
                                    ${r ? "bg-gradient-to-br from-yellow-500/10 to-transparent border-yellow-500/30" : "bg-white/5 border-white/5 opacity-50 grayscale"}
                                `, children: [s.jsx("div", { className: `
                                    w-16 h-16 rounded-2xl flex items-center justify-center text-3xl
                                    ${r ? "bg-yellow-500 shadow-lg shadow-yellow-500/20" : "bg-white/5"}
                                `, children: r ? h.icon : s.jsx(pc, { size: 24, className: "text-white/20" }) }), s.jsxs("div", { className: "flex-1", children: [s.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [s.jsx("h3", { className: "text-lg font-black text-white italic leading-none", children: h.name }), r && s.jsx(Yh, { size: 14, className: "text-yellow-500" })] }), s.jsx("p", { className: "text-[10px] font-bold text-white/40 uppercase mb-2", children: h.description }), s.jsx("div", { className: "flex items-center gap-2", children: s.jsxs("span", { className: "text-[9px] font-black text-yellow-500 uppercase tracking-widest bg-yellow-500/10 px-2 py-0.5 rounded", children: ["\u5831\u916C: ", h.reward] }) })] })] }, h.id);
}) })] }) }), Wx = ({ onComplete: o }) => (w.useEffect(() => {
  const p = setTimeout(() => {
    o();
  }, 1500);
  return () => clearTimeout(p);
}, [o]), s.jsxs(s.Fragment, { children: [s.jsx("div", { className: "critical-overlay", children: s.jsx("div", { className: "critical-text", children: "CRITICAL HACK!" }) }), s.jsx("div", { className: "critical-scanline" })] }));
let It;
function Fx(o, p, h, r, g, N) {
  return It.calculate_damage(o, p, h, r, g, N);
}
function tm(o, p) {
  return It.calculate_idle_income(o, p);
}
function Oi(o, p, h, r) {
  return It.calculate_monster_hp(o, p, h, r);
}
function ko(o, p, h) {
  return It.calculate_rebirth_orbs(o, p, h);
}
function Ix(o, p, h, r) {
  return It.calculate_reward(o, p, h, r);
}
function am(o, p, h) {
  return It.calculate_upgrade_cost(o, p, h);
}
const Px = /* @__PURE__ */ new Set(["basic", "cors", "default"]);
async function e2(o, p) {
  if (typeof Response == "function" && o instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(o, p);
    } catch (r) {
      if (o.ok && Px.has(o.type) && o.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
      else throw r;
    }
    const h = await o.arrayBuffer();
    return await WebAssembly.instantiate(h, p);
  } else {
    const h = await WebAssembly.instantiate(o, p);
    return h instanceof WebAssembly.Instance ? { instance: h, module: o } : h;
  }
}
function t2() {
  const o = {};
  return o.wbg = {}, o.wbg.__wbindgen_init_externref_table = function() {
    const p = It.__wbindgen_externrefs, h = p.grow(4);
    p.set(0, void 0), p.set(h + 0, void 0), p.set(h + 1, null), p.set(h + 2, true), p.set(h + 3, false);
  }, o;
}
function a2(o, p) {
  return It = o.exports, rm.__wbindgen_wasm_module = p, It.__wbindgen_start(), It;
}
async function rm(o) {
  if (It !== void 0) return It;
  typeof o < "u" && (Object.getPrototypeOf(o) === Object.prototype ? { module_or_path: o } = o : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof o > "u" && (o = new URL("data:application/wasm;base64,AGFzbQEAAAABMgdgAABgBnx8f398fAF8YAN8fHwBfGAEfHx/fwF8YAR8f3x8AXxgA3x8fwF8YAJ8fwF8AicBA3diZx9fX3diaW5kZ2VuX2luaXRfZXh0ZXJucmVmX3RhYmxlAAADBwYBAgMEBQYEBQFvAIABBQMBABEHvAEJBm1lbW9yeQIAEGNhbGN1bGF0ZV9kYW1hZ2UAARVjYWxjdWxhdGVfaWRsZV9pbmNvbWUABhRjYWxjdWxhdGVfbW9uc3Rlcl9ocAADEGNhbGN1bGF0ZV9yZXdhcmQABBZjYWxjdWxhdGVfcmViaXJ0aF9vcmJzAAIWY2FsY3VsYXRlX3VwZ3JhZGVfY29zdAAFFV9fd2JpbmRnZW5fZXh0ZXJucmVmcwEAEF9fd2JpbmRnZW5fc3RhcnQAAAwBAgrwAQY5ACAFIAQgACABRJqZmZmZmbk/oqAiAEQAAAAAAAD4P6IgACACGyIARDMzMzMzM/M/oiAAIAMboqILEwEBfCADIAAgAqOfnCAAIAFjGwscACAAIAGiIAK4oiIARAAAAAAAABRAoiAAIAMbCxAAIAMgACACIAG4opygopwLaQECfyAAIAFEAAAAAAAA8D8gAiACQR91IgNzIANrIgNBAXEbIQAgA0ECTwRAA0AgACABIAGiIgGiIAAgA0ECcRshACADQQNLIANBAXYhAw0ACwtEAAAAAAAA8D8gAKMgACACQQBIG6KcCwgAIAAgAbiiCwvvBgIAQYCAwAAL3AYvVXNlcnMvaXdhdGFrb3VtZWkvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tMTk0OWNmOGM2YjViNTU3Zi93YXNtLWJpbmRnZW4tMC4yLjEwNi9zcmMvZXh0ZXJucmVmLnJzAGxpYnJhcnkvYWxsb2Mvc3JjL3Jhd192ZWMvbW9kLnJzAC9ydXN0L2RlcHMvZGxtYWxsb2MtMC4yLjEwL3NyYy9kbG1hbGxvYy5ycwBsaWJyYXJ5L3N0ZC9zcmMvYWxsb2MucnMAAAAAEABtAAAAfwAAABEAAAAAABAAbQAAAIwAAAARAAAAfP2LMlfmV/kC30S/40jnr21dy9YsUOtjeEGmV3Ebi7ltZW1vcnkgYWxsb2NhdGlvbiBvZiAgYnl0ZXMgZmFpbGVkAAAUARAAFQAAACkBEAANAAAAugAQABgAAABkAQAACQAAAAMAAAAMAAAABAAAAAQAAAAFAAAABgAAAAAAAAAIAAAABAAAAAcAAAAIAAAACQAAAAoAAAALAAAAEAAAAAQAAAAMAAAADQAAAA4AAAAPAAAAAAAAAAgAAAAEAAAAEAAAAGFzc2VydGlvbiBmYWlsZWQ6IHBzaXplID49IHNpemUgKyBtaW5fb3ZlcmhlYWQAAI8AEAAqAAAAsQQAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBwc2l6ZSA8PSBzaXplICsgbWF4X292ZXJoZWFkAACPABAAKgAAALcEAAANAAAAAwAAAAwAAAAEAAAAEQAAAGNhcGFjaXR5IG92ZXJmbG93AAAASAIQABEAAABuABAAIAAAABwAAAAFAAAAAQAAAAAAAAAwMDAxMDIwMzA0MDUwNjA3MDgwOTEwMTExMjEzMTQxNTE2MTcxODE5MjAyMTIyMjMyNDI1MjYyNzI4MjkzMDMxMzIzMzM0MzUzNjM3MzgzOTQwNDE0MjQzNDQ0NTQ2NDc0ODQ5NTA1MTUyNTM1NDU1NTY1NzU4NTk2MDYxNjI2MzY0NjU2NjY3Njg2OTcwNzE3MjczNzQ3NTc2Nzc3ODc5ODA4MTgyODM4NDg1ODY4Nzg4ODk5MDkxOTI5Mzk0OTU5Njk3OTg5OVJlZkNlbGwgYWxyZWFkeSBib3Jyb3dlZABB5IbAAAsBBABwCXByb2R1Y2VycwIIbGFuZ3VhZ2UBBFJ1c3QADHByb2Nlc3NlZC1ieQMFcnVzdGMdMS45Mi4wIChkZWQ1YzA2Y2YgMjAyNS0xMi0wOCkGd2FscnVzBjAuMjQuNAx3YXNtLWJpbmRnZW4HMC4yLjEwNgBrD3RhcmdldF9mZWF0dXJlcwYrD211dGFibGUtZ2xvYmFscysTbm9udHJhcHBpbmctZnB0b2ludCsLYnVsay1tZW1vcnkrCHNpZ24tZXh0Kw9yZWZlcmVuY2UtdHlwZXMrCm11bHRpdmFsdWU=", import.meta.url));
  const p = t2();
  (typeof o == "string" || typeof Request == "function" && o instanceof Request || typeof URL == "function" && o instanceof URL) && (o = fetch(o));
  const { instance: h, module: r } = await e2(await o, p);
  return a2(h, r);
}
const l2 = ({ settings: o, onUpdate: p, onClose: h, onRebirth: r, canRebirth: g, nextRebirthOrbs: N, totalMoney: R, version: C = "v2.5.1" }) => {
  const [k, v] = w.useState(0), [U, A] = w.useState(false), [$, J] = w.useState(false), Z = () => {
    const ae = k + 1;
    v(ae), ae >= 7 && (A(true), v(0));
  };
  return s.jsx("div", { className: "fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300", children: s.jsxs("div", { className: "w-full max-w-md bg-[#1a1a1a] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 font-sans", children: [s.jsxs("div", { className: "flex items-center justify-between p-8 pb-4", children: [s.jsx("h2", { className: "text-3xl font-black text-white italic tracking-tighter", children: "\u74B0\u5883\u8A2D\u5B9A" }), s.jsx("button", { onClick: h, className: "p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors", children: s.jsx(Xa, { size: 24, className: "text-white/60" }) })] }), $ && s.jsxs("div", { className: "absolute inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-300", children: [s.jsx("div", { className: "text-4xl mb-4", children: "\u{1F52E}" }), s.jsx("h3", { className: "text-2xl font-black text-white mb-2", children: "\u8EE2\u751F\u3057\u307E\u3059\u304B\uFF1F" }), s.jsxs("p", { className: "text-sm text-gray-400 mb-6", children: ["\u6240\u6301\u91D1\u30FB\u30B9\u30C6\u30FC\u30B8\u9032\u884C\u30FB\u901A\u5E38\u30A2\u30C3\u30D7\u30B0\u30EC\u30FC\u30C9\u304C\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u307E\u3059\u3002", s.jsx("br", {}), "\u4EE3\u308F\u308A\u306B ", s.jsxs("span", { className: "text-neon-purple font-bold", children: [N, " \u500B\u306E\u9B42\u306E\u30AA\u30FC\u30D6"] }), " \u3092\u7372\u5F97\u3057\u307E\u3059\u3002", s.jsx("br", {}), s.jsx("span", { className: "text-xs text-gray-500 mt-2 block", children: "\u203B\u30AC\u30C1\u30E3\u3067\u96C6\u3081\u305F\u30E6\u30CB\u30C3\u30C8\u3068\u30A2\u30FC\u30C6\u30A3\u30D5\u30A1\u30AF\u30C8\u306F\u5F15\u304D\u7D99\u304C\u308C\u307E\u3059\u3002" })] }), s.jsxs("div", { className: "flex gap-4 w-full", children: [s.jsx("button", { onClick: () => J(false), className: "flex-1 py-3 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition-colors", children: "\u30AD\u30E3\u30F3\u30BB\u30EB" }), s.jsx("button", { onClick: () => {
    r(), J(false), h();
  }, className: "flex-1 py-3 rounded-xl bg-neon-purple text-white font-bold hover:bg-neon-purple/80 transition-colors shadow-[0_0_20px_rgba(168,85,247,0.5)]", children: "\u8EE2\u751F\u3092\u5B9F\u884C" })] })] }), s.jsxs("div", { className: "p-8 pt-4 space-y-6", children: [s.jsxs("div", { className: "space-y-4", children: [s.jsx("label", { className: "text-[10px] font-black uppercase tracking-[0.3em] text-white/30", children: "\u57FA\u672C\u8A2D\u5B9A" }), s.jsxs("div", { className: "space-y-2", children: [s.jsxs("div", { className: "flex items-center justify-between p-5 bg-white/5 rounded-3xl border border-white/5 group hover:border-neon-purple/50 transition-all pb-2", children: [s.jsxs("div", { className: "flex items-center gap-4", children: [s.jsx("div", { className: `p-3 rounded-2xl ${(o == null ? void 0 : o.sound) ? "bg-neon-purple text-white" : "bg-white/5 text-white/20"}`, children: (o == null ? void 0 : o.sound) ? s.jsx(bc, { size: 24 }) : s.jsx(gx, { size: 24 }) }), s.jsxs("div", { children: [s.jsx("div", { className: "font-bold text-white", children: "\u30B5\u30A6\u30F3\u30C9\u8A2D\u5B9A" }), s.jsx("div", { className: "text-xs text-white/40 italic", children: "\u52B9\u679C\u97F3\u3068BGM" })] })] }), s.jsx("button", { onClick: () => p({ sound: !(o == null ? void 0 : o.sound) }), className: `w-16 h-8 rounded-full relative transition-all ${(o == null ? void 0 : o.sound) ? "bg-neon-purple shadow-neon-purple/50 shadow-lg" : "bg-white/10"}`, children: s.jsx("div", { className: `absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${(o == null ? void 0 : o.sound) ? "left-9" : "left-1"}` }) })] }), (o == null ? void 0 : o.sound) && s.jsx("div", { className: "px-5 pb-5 pt-2 animate-in slide-in-from-top-2 duration-300", children: s.jsxs("div", { className: "flex items-center gap-4", children: [s.jsxs("span", { className: "text-[10px] font-bold text-white/30 uppercase w-12 text-right", children: [o.music, "%"] }), s.jsx("input", { type: "range", min: "0", max: "100", value: o.music, onChange: (ae) => p({ music: parseInt(ae.target.value) }), className: "flex-1 accent-neon-purple bg-white/10 h-1 rounded-full appearance-none cursor-pointer" })] }) })] }), s.jsxs("div", { className: "flex items-center justify-between p-5 bg-white/5 rounded-3xl border border-white/5 group hover:border-neon-cyan/50 transition-all", children: [s.jsxs("div", { className: "flex items-center gap-4", children: [s.jsx("div", { className: `p-3 rounded-2xl ${(o == null ? void 0 : o.haptic) ? "bg-neon-cyan text-black" : "bg-white/5 text-white/20"}`, children: s.jsx(Wp, { size: 24 }) }), s.jsxs("div", { children: [s.jsx("div", { className: "font-bold text-white", children: "\u632F\u52D5\u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF" }), s.jsx("div", { className: "text-xs text-white/40 italic", children: "\u30BF\u30A4\u30D4\u30F3\u30B0\u6642\u306E\u611F\u89E6" })] })] }), s.jsx("button", { onClick: () => p({ haptic: !(o == null ? void 0 : o.haptic) }), className: `w-16 h-8 rounded-full relative transition-all ${(o == null ? void 0 : o.haptic) ? "bg-neon-cyan shadow-neon-cyan/50 shadow-lg" : "bg-white/10"}`, children: s.jsx("div", { className: `absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${(o == null ? void 0 : o.haptic) ? "left-9" : "left-1"}` }) })] })] }), s.jsxs("div", { className: "space-y-4 pt-4 border-t border-white/5", children: [s.jsx("label", { className: "text-[10px] font-black uppercase tracking-[0.3em] text-white/30", children: "\u8EE2\u751F\u30B7\u30B9\u30C6\u30E0" }), s.jsxs("div", { className: `
                            p-5 rounded-3xl border transition-all relative overflow-hidden group
                            ${g ? "bg-neon-purple/20 border-neon-purple/50 cursor-pointer hover:bg-neon-purple/30" : "bg-white/5 border-white/5 opacity-50"}
                        `, children: [s.jsxs("button", { onClick: () => g && J(true), disabled: !g, className: "w-full flex items-center justify-between relative z-10 text-left", children: [s.jsxs("div", { className: "flex items-center gap-4", children: [s.jsx("div", { className: "p-3 rounded-2xl bg-black/40 text-neon-purple shadow-lg", children: s.jsx("span", { className: "text-xl", children: "\u{1F52E}" }) }), s.jsxs("div", { children: [s.jsx("div", { className: "font-bold text-white", children: "\u8EE2\u751F (Rebirth)" }), g ? s.jsxs("div", { className: "text-xs text-neon-purple font-bold animate-pulse", children: ["\u7372\u5F97\u53EF\u80FD\u30AA\u30FC\u30D6: ", N, "\u500B"] }) : s.jsxs("div", { className: "text-[10px] text-white/40", children: ["\u5FC5\u8981MP: ", 1e6 - R, " MP"] })] })] }), s.jsx("div", { className: "text-neon-purple", children: "Run >" })] }), g && s.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" })] })] }), U && s.jsxs("div", { className: "space-y-4 pt-4 border-t border-white/5 animate-in slide-in-from-top-4 duration-500", children: [s.jsxs("label", { className: "text-[10px] font-black uppercase tracking-[0.3em] text-neon-purple-light flex items-center gap-2", children: [s.jsx(mc, { size: 12 }), "\u4E0A\u7D1A\u8005\u5411\u3051\u30DE\u30C8\u30EA\u30AF\u30B9\u8A2D\u5B9A"] }), s.jsxs("div", { className: "flex items-center justify-between p-5 bg-neon-purple/10 rounded-3xl border border-neon-purple/20", children: [s.jsxs("div", { className: "flex items-center gap-4", children: [s.jsx(Sp, { size: 20, className: "text-neon-purple-light" }), s.jsxs("div", { children: [s.jsx("div", { className: "font-bold text-white text-sm", children: "\u753B\u9762\u306E\u63FA\u308C\u52B9\u679C" }), s.jsx("div", { className: "text-[10px] text-white/40 italic uppercase", children: "\u8E8D\u52D5\u611F\u306E\u3042\u308B\u6F14\u51FA" })] })] }), s.jsx("button", { onClick: () => p({ shake: !(o == null ? void 0 : o.shake) }), className: `w-12 h-6 rounded-full relative transition-all ${(o == null ? void 0 : o.shake) ? "bg-neon-purple" : "bg-white/10"}`, children: s.jsx("div", { className: `absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${(o == null ? void 0 : o.shake) ? "left-7" : "left-1"}` }) })] }), s.jsxs("div", { className: "flex items-center justify-between p-5 bg-neon-cyan/10 rounded-3xl border border-neon-cyan/20", children: [s.jsxs("div", { className: "flex items-center gap-4", children: [s.jsx(Zp, { size: 20, className: "text-neon-cyan" }), s.jsxs("div", { children: [s.jsx("div", { className: "font-bold text-white text-sm", children: "\u30A8\u30D5\u30A7\u30AF\u30C8\u306E\u8EFD\u91CF\u5316" }), s.jsx("div", { className: "text-[10px] text-white/40 italic uppercase", children: "\u4F4E\u30B9\u30DA\u30C3\u30AF\u7AEF\u672B\u5411\u3051" })] })] }), s.jsx("button", { onClick: () => p({ lowDetail: !(o == null ? void 0 : o.lowDetail) }), className: `w-12 h-6 rounded-full relative transition-all ${(o == null ? void 0 : o.lowDetail) ? "bg-neon-cyan" : "bg-white/10"}`, children: s.jsx("div", { className: `absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${(o == null ? void 0 : o.lowDetail) ? "left-7" : "left-1"}` }) })] })] }), s.jsxs("div", { className: "pt-4 flex flex-col items-center gap-4", children: [s.jsxs("button", { onClick: Z, className: `text-[10px] font-bold tracking-[0.2em] transition-all hover:scale-110 active:scale-95 py-2 px-4 rounded-full ${U ? "text-neon-purple bg-neon-purple/10" : "text-white/20 hover:text-white/40"}`, children: ["\u30D0\u30FC\u30B8\u30E7\u30F3 ", C, " ", U && "(\u30DE\u30C8\u30EA\u30AF\u30B9\u89E3\u653E\u6E08\u307F)"] }), !U && k > 0 && k < 7 && s.jsxs("div", { className: "text-[10px] text-white/20 animate-pulse uppercase tracking-widest", children: ["\u3042\u3068 ", 7 - k, " \u56DE\u30BF\u30C3\u30D7\u3067\u30DE\u30C8\u30EA\u30AF\u30B9\u3092\u89E3\u653E..."] })] })] })] }) });
}, n2 = ({ totalEarned: o, onClose: p }) => {
  const [h, r] = w.useState(null), [g, N] = w.useState("");
  return w.useEffect(() => {
    if (h) {
      N("");
      let R = 0;
      const C = h.content, k = setInterval(() => {
        N(C.slice(0, R + 1)), R++, R >= C.length && clearInterval(k);
      }, 15);
      return () => clearInterval(k);
    }
  }, [h]), s.jsx("div", { className: "fixed inset-0 z-[110] flex items-center justify-center p-6 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-500", children: s.jsxs("div", { className: "w-full max-w-4xl h-[80vh] bg-[#050505] border border-neon-cyan/20 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,255,255,0.05)] flex flex-col md:flex-row font-sans relative", children: [s.jsx("div", { className: "absolute inset-0 z-0 opacity-40 mix-blend-screen bg-center bg-cover pointer-events-none", style: { backgroundImage: "url(/assets/terminal_bg.jpg)" } }), s.jsx("div", { className: "absolute inset-0 z-0 bg-black/60 backdrop-blur-[2px] pointer-events-none" }), s.jsxs("div", { className: "w-full md:w-80 border-r border-white/5 bg-white/[0.01] flex flex-col relative z-10", children: [s.jsxs("div", { className: "p-6 border-b border-white/5 flex items-center gap-2", children: [s.jsx(Vf, { size: 18, className: "text-neon-cyan" }), s.jsx("h2", { className: "text-sm font-black text-white/80 uppercase tracking-widest italic", children: "\u6A5F\u5BC6\u30A2\u30FC\u30AB\u30A4\u30D6" })] }), s.jsx("div", { className: "flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar", children: ye.loreLogs.map((R) => {
    const C = o < R.unlockThreshold;
    return s.jsxs("button", { disabled: C, onClick: () => r(R), className: `
                                        w-full p-4 rounded-2xl flex items-center justify-between transition-all group
                                        ${C ? "opacity-20 cursor-not-allowed" : "hover:bg-white/5 active:scale-95"}
                                        ${(h == null ? void 0 : h.id) === R.id ? "bg-neon-cyan/10 border border-neon-cyan/30" : "border border-transparent"}
                                    `, children: [s.jsxs("div", { className: "flex items-center gap-3", children: [C ? s.jsx(pc, { size: 14, className: "text-white/20" }) : s.jsx($h, { size: 14, className: "text-neon-cyan" }), s.jsxs("div", { className: "text-left", children: [s.jsx("div", { className: `text-[10px] font-black uppercase tracking-widest ${(h == null ? void 0 : h.id) === R.id ? "text-neon-cyan" : "text-white/40"}`, children: R.id }), s.jsx("div", { className: "text-xs font-bold text-white/80", children: C ? "\u6A5F\u5BC6\u4E8B\u9805" : R.title })] })] }), !C && s.jsx(Rn, { size: 14, className: "opacity-0 group-hover:opacity-100 transition-opacity" })] }, R.id);
  }) }), s.jsxs("div", { className: "p-6 border-t border-white/5 bg-black/40", children: [s.jsx("div", { className: "text-[10px] font-black text-white/20 uppercase mb-2", children: "\u30A2\u30FC\u30AB\u30A4\u30D6\u540C\u671F\u72B6\u6CC1" }), s.jsx("div", { className: "h-1 w-full bg-white/5 rounded-full overflow-hidden", children: s.jsx("div", { className: "h-full bg-neon-cyan shadow-[0_0_10px_rgba(0,255,255,0.5)] transition-all duration-1000", style: { width: `${Math.min(100, o / 2e4 * 100)}%` } }) })] })] }), s.jsxs("div", { className: "flex-1 flex flex-col relative overflow-hidden z-10", children: [s.jsxs("div", { className: "p-6 border-b border-white/5 flex items-center justify-between bg-black/20", children: [s.jsxs("div", { className: "flex items-center gap-3", children: [s.jsx("div", { className: "w-2 h-2 rounded-full bg-neon-cyan animate-pulse" }), s.jsx("div", { className: "text-[10px] tracking-widest text-white/40 uppercase", children: "\u5C40\u3078\u306E\u63A5\u7D9A: \u5B89\u5B9A" })] }), s.jsx("button", { onClick: p, className: "p-2 hover:bg-white/5 rounded-xl transition-colors text-white/40 hover:text-white", children: s.jsx(Xa, { size: 20 }) })] }), s.jsx("div", { className: "flex-1 p-8 overflow-y-auto custom-scrollbar flex flex-col", children: h ? s.jsxs("div", { className: "animate-in fade-in duration-500", children: [s.jsxs("div", { className: "flex items-center gap-2 mb-8 text-neon-cyan", children: [s.jsx(ap, { size: 16 }), s.jsx("span", { className: "text-xs font-black uppercase tracking-[0.3em]", children: h.title })] }), s.jsxs("div", { className: "text-white/80 leading-relaxed text-sm whitespace-pre-wrap font-mono", children: [g, s.jsx("span", { className: "inline-block w-2 h-4 bg-neon-cyan ml-1 animate-pulse" })] })] }) : s.jsxs("div", { className: "h-full flex flex-col items-center justify-center text-center opacity-20", children: [s.jsx(Vf, { size: 64, className: "mb-6 rotate-12" }), s.jsx("div", { className: "text-xs font-black uppercase tracking-[0.4em] mb-2", children: "\u30A2\u30FC\u30AB\u30A4\u30D6\u306B\u30A2\u30AF\u30BB\u30B9" }), s.jsx("div", { className: "text-[10px] tracking-widest", children: "\u8A18\u9332\u3092\u9078\u629E\u3057\u3066\u5FA9\u53F7\u3092\u958B\u59CB\u3057\u3066\u304F\u3060\u3055\u3044..." })] }) }), s.jsx("div", { className: "absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%]" })] })] }) });
}, i2 = [{ id: "gold_keyboard", name: "\u9EC4\u91D1\u306E\u30AD\u30FC\u30DC\u30FC\u30C9", description: "\u30BF\u30C3\u30D7\u653B\u6483\u529B\u304C\u6C38\u7D9A\u7684\u306B\u4E0A\u6607\u3059\u308B", effectDescription: "\u653B\u6483\u529B +50% / Lv", baseCost: 1, costMultiplier: 1.5, maxLevel: 50, effectType: "damage_multiplier", effectValue: 0.5, icon: oa, color: "text-yellow-400" }, { id: "time_stopper", name: "\u6642\u9593\u505C\u6B62\u306E\u7802\u6642\u8A08", description: "\u30B3\u30F3\u30DC\u306E\u53D7\u4ED8\u6642\u9593\u304C\u5EF6\u9577\u3055\u308C\u308B", effectDescription: "\u53D7\u4ED8\u6642\u9593 +0.5\u79D2 / Lv", baseCost: 3, costMultiplier: 2, maxLevel: 10, effectType: "combo_duration", effectValue: 500, icon: nm, color: "text-blue-400" }, { id: "greed_wallet", name: "\u5F37\u6B32\u306E\u30AC\u30DE\u53E3", description: "\u30B3\u30A4\u30F3\u7372\u5F97\u91CF\u304C\u6C38\u7D9A\u7684\u306B\u4E0A\u6607\u3059\u308B", effectDescription: "\u7372\u5F97\u91CF +20% / Lv", baseCost: 2, costMultiplier: 1.4, maxLevel: 100, effectType: "income_multiplier", effectValue: 0.2, icon: Vh, color: "text-green-400" }, { id: "gacha_coupon", name: "\u30AC\u30C1\u30E3\u512A\u5F85\u5238", description: "\u30AC\u30C1\u30E3\u306E\u30B3\u30B9\u30C8\u304C\u6E1B\u5C11\u3059\u308B", effectDescription: "\u30B3\u30B9\u30C8 -5% / Lv", baseCost: 5, costMultiplier: 2.5, maxLevel: 10, effectType: "gacha_discount", effectValue: 0.05, icon: cx, color: "text-pink-400" }, { id: "ancient_shield", name: "\u53E4\u306E\u30D7\u30ED\u30C6\u30AF\u30BF\u30FC", description: "\u30C1\u30E3\u30F3\u30C8\u30D6\u30EC\u30A4\u30AF\u306E\u30B2\u30FC\u30B8\u4E0A\u6607\u91CF\u30A2\u30C3\u30D7", effectDescription: "\u4E0A\u6607\u91CF +10% / Lv", baseCost: 4, costMultiplier: 1.8, maxLevel: 20, effectType: "break_bonus", effectValue: 0.1, icon: Hi, color: "text-purple-400" }], s2 = ({ spiritOrbs: o, artifacts: p, onBuyArtifact: h, onClose: r }) => s.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in zoom-in duration-300", children: s.jsxs("div", { className: "w-full max-w-4xl h-[80vh] flex flex-col dragon-glass-card bg-[#1a1a1a] border-4 border-white/20 rounded-3xl overflow-hidden relative shadow-2xl", children: [s.jsxs("div", { className: "p-6 border-b-2 border-white/10 flex justify-between items-center bg-black/40", children: [s.jsxs("div", { className: "flex items-center gap-4", children: [s.jsx("div", { className: "w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-400 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.5)] animate-pulse", children: s.jsx("span", { className: "text-2xl", children: "\u{1F52E}" }) }), s.jsxs("div", { children: [s.jsx("h2", { className: "text-3xl font-black text-white italic tracking-tighter", children: "\u53E4\u4EE3\u907A\u7269\u4FDD\u7BA1\u5EAB" }), s.jsxs("div", { className: "text-sm font-bold text-neon-purple tracking-widest uppercase", children: ["\u970A\u73E0: ", o.toLocaleString()] })] })] }), s.jsx("button", { onClick: r, className: "p-2 hover:bg-white/10 rounded-full transition-colors", children: s.jsx(Xa, { size: 32, className: "text-white" }) })] }), s.jsx("div", { className: "flex-1 overflow-y-auto p-6 custom-scrollbar", children: s.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: i2.map((g) => {
  var _a;
  const N = ((_a = p.find((U) => U.id === g.id)) == null ? void 0 : _a.level) || 0, R = Ux(g, N), C = o >= R, k = N >= g.maxLevel, v = g.icon;
  return s.jsxs("div", { className: `dragon-glass-card p-4 relative group ${k ? "border-yellow-400/50 bg-yellow-400/5" : "border-white/10 bg-white/5"}`, children: [s.jsxs("div", { className: "flex items-start justify-between mb-4", children: [s.jsx("div", { className: `p-3 rounded-xl bg-black/40 border border-white/10 ${g.color}`, children: s.jsx(v, { size: 24 }) }), s.jsxs("div", { className: "flex flex-col items-end", children: [s.jsx("span", { className: "text-[10px] uppercase font-black tracking-widest text-white/40", children: "\u9B54\u5C0E\u30EC\u30D9\u30EB" }), s.jsxs("span", { className: `text-2xl font-black ${k ? "text-yellow-400" : "text-white"}`, children: [N, s.jsxs("span", { className: "text-sm text-white/40", children: ["/", g.maxLevel] })] })] })] }), s.jsx("h3", { className: "text-lg font-black text-white italic mb-1", children: g.name }), s.jsx("p", { className: "text-xs font-bold text-white/60 mb-2 min-h-[2.5em]", children: g.description }), s.jsx("div", { className: "text-[10px] font-bold text-neon-cyan mb-4", children: g.effectDescription }), s.jsx("button", { onClick: () => h(g.id, R), disabled: !C || k, className: `
                                            w-full py-3 rounded-xl font-black flex items-center justify-center gap-2
                                            transition-all active:scale-95
                                            ${k ? "bg-white/10 text-white/40 cursor-not-allowed" : C ? "bg-neon-purple text-white shadow-[0_4px_0_#4c1d95] hover:brightness-110" : "bg-gray-800 text-gray-500 cursor-not-allowed"}
                                        `, children: k ? s.jsx("span", { children: "\u9650\u754C\u5230\u9054" }) : s.jsxs(s.Fragment, { children: [s.jsx("span", { children: "\u9B54\u529B\u6CE8\u5165" }), s.jsxs("div", { className: "px-2 py-0.5 bg-black/40 rounded-lg text-xs flex items-center gap-1", children: [s.jsx("span", { children: "\u{1F52E}" }), s.jsx("span", { children: R.toLocaleString() })] })] }) })] }, g.id);
}) }) })] }) }), c2 = { Flame: Di, Droplets: Yo, Zap: oa, Wind: tr, Sun: Wo, Moon: rc, Snowflake: Ko, Mountain: dc, Skull: gc, Orbit: Vo, Ghost: hc, Shield: Hi, HeartPulse: qo, Hourglass: Xo, Rocket: Jo, Leaf: Qo, CloudLightning: Do, Star: $o, Sparkles: Lt, Dna: Bo, Cloud: Uo, Thermometer: Io, Waves: er, Layers: Zo, Volume2: bc, Sunrise: Fo, Activity: Ro, Crown: Ho, Feather: Lo, Flower: Go, Bone: Oo, Settings: xc, Tv: Po, Box: Co, Bug: mc, Target: Jl }, u2 = ({ unlockedElements: o, equippedElements: p, onSave: h, onClose: r }) => {
  const [g, N] = w.useState([...p]), R = (v) => {
    let U;
    g.includes(v) ? g.length > 1 ? U = g.filter((A) => A !== v) : U = g : g.length < 6 ? U = [...g, v] : U = g, N(U);
  }, C = g.length === Math.min(o.length, 6), k = w.useMemo(() => ye.attributes.filter((v) => o.includes(v.id)), [o]);
  return s.jsx("div", { className: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300", children: s.jsxs("div", { className: "bg-[#1a1a1a] w-full max-w-2xl rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]", children: [s.jsxs("div", { className: "p-8 flex items-center justify-between border-b border-white/5", children: [s.jsxs("div", { children: [s.jsx("h2", { className: "text-3xl font-black italic tracking-tighter text-white uppercase", children: "Magic Equipment" }), s.jsxs("p", { className: "text-white/40 text-sm font-bold tracking-widest uppercase", children: ["Select ", Math.min(o.length, 6), " Elements for Battle (", g.length, "/6)"] })] }), s.jsx("button", { onClick: r, className: "p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all", children: s.jsx(Xa, { size: 24, className: "text-white/60" }) })] }), s.jsxs("div", { className: "flex-1 overflow-y-auto p-4 sm:p-8 custom-scrollbar bg-black/40", children: [s.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3", children: k.map((v) => {
    const U = c2[v.icon], A = g.includes(v.id);
    return s.jsxs("button", { onClick: () => R(v.id), className: `
                                        relative group flex flex-col items-center p-3 rounded-[1.5rem] border-2 transition-all duration-300
                                        ${A ? `bg-gradient-to-br ${v.color} border-white/40 shadow-lg scale-[1.02]` : "bg-white/5 border-transparent hover:bg-white/10"}
                                    `, children: [s.jsx("div", { className: `
                                        w-10 h-10 rounded-xl flex items-center justify-center mb-1 transition-transform group-hover:rotate-6
                                        ${A ? "bg-black/20" : "bg-white/5"}
                                    `, children: s.jsx(U, { size: 20, className: A ? "text-white" : "text-white/40" }) }), s.jsx("span", { className: `font-black text-[10px] italic mb-2 truncate w-full text-center ${A ? "text-white" : "text-white/60"}`, children: v.name }), s.jsxs("div", { className: "w-full space-y-[2px] opacity-40 group-hover:opacity-100 transition-opacity", children: [s.jsx("div", { className: "h-[2px] w-full bg-black/20 rounded-full overflow-hidden", children: s.jsx("div", { className: "h-full bg-white/80", style: { width: `${Math.min(100, v.stats.atk * 4)}%` } }) }), s.jsx("div", { className: "h-[2px] w-full bg-black/20 rounded-full overflow-hidden", children: s.jsx("div", { className: "h-full bg-cyan-400/80", style: { width: `${Math.min(100, v.stats.spd * 4)}%` } }) })] }), A && s.jsx("div", { className: "absolute -top-1 -right-1 w-5 h-5 bg-white text-black rounded-full flex items-center justify-center shadow-lg animate-in zoom-in", children: s.jsx(Uh, { size: 12, strokeWidth: 4 }) })] }, v.id);
  }) }), s.jsxs("div", { className: "mt-8 p-6 bg-white/5 rounded-3xl border border-white/10 flex items-start gap-4", children: [s.jsx(gp, { size: 24, className: "text-neon-cyan shrink-0 mt-1" }), s.jsxs("p", { className: "text-white/60 text-sm leading-relaxed", children: [s.jsx("span", { className: "text-white font-bold", children: "Why equip only 6?" }), " By limiting your deck, your incantations become more predictable and powerful. Mix elements to find the most efficient combination for your typing style!"] })] })] }), s.jsx("div", { className: "p-8 border-t border-white/5 bg-black/20", children: s.jsx("button", { onClick: () => h(g), disabled: !C, className: `
                            w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] transition-all
                            ${C ? "bg-neon-cyan text-black shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:scale-[1.02] active:scale-95" : "bg-white/5 text-white/20 cursor-not-allowed"}
                        `, children: "Save Loadout" }) })] }) });
}, o2 = ({ currentWorldId: o, worldProgress: p, onSelect: h, onClose: r }) => s.jsx("div", { className: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300", children: s.jsxs("div", { className: "bg-[#1a1a1a] w-full max-w-2xl rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]", children: [s.jsxs("div", { className: "p-8 flex items-center justify-between border-b border-white/5", children: [s.jsxs("div", { children: [s.jsx("h2", { className: "text-3xl font-black italic tracking-tighter text-white uppercase", children: "World Selection" }), s.jsx("p", { className: "text-white/40 text-sm font-bold tracking-widest uppercase", children: "Choose your next battlefield" })] }), s.jsx("button", { onClick: r, className: "p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-all", children: s.jsx(Xa, { size: 24, className: "text-white/60" }) })] }), s.jsx("div", { className: "flex-1 overflow-y-auto p-8 custom-scrollbar space-y-4", children: ye.worlds.map((g, N) => {
  const R = N === 0 || p[ye.worlds[N - 1].id] >= 10, C = o === g.id, k = p[g.id] || 0, v = Math.min(100, k / 50 * 100), U = { GENESIS: "from-blue-500/20 to-cyan-500/20 shadow-blue-500/20 border-blue-500", CYBERIA: "from-purple-500/20 to-neon-purple/20 shadow-purple-500/20 border-purple-500", ETERNITY: "from-indigo-500/20 to-violet-500/20 shadow-indigo-500/20 border-indigo-500", LEGEND: "from-red-600/20 to-orange-600/20 shadow-red-600/30 border-red-600" };
  return s.jsxs("div", { onClick: () => R && h(g.id), className: `
                                    relative group overflow-hidden rounded-[2rem] border-2 transition-all duration-500
                                    ${R ? "cursor-pointer" : "cursor-not-allowed opacity-50 grayscale"}
                                    ${C ? `bg-gradient-to-r ${U[g.id]} shadow-[0_0_30px_rgba(0,255,255,0.15)]` : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20"}
                                `, children: [s.jsxs("div", { className: "p-6 flex items-center gap-6 relative z-10", children: [s.jsxs("div", { className: `
                                        w-16 h-16 rounded-2xl flex items-center justify-center
                                        ${C ? "bg-white text-black" : "bg-white/10 text-white/40"}
                                    `, children: [g.id === "GENESIS" && s.jsx(op, { size: 32 }), g.id === "CYBERIA" && s.jsx(oa, { size: 32 }), g.id === "ETERNITY" && s.jsx(pp, { size: 32 }), g.id === "LEGEND" && s.jsx(Swords, { size: 32, className: "text-red-500" })] }), s.jsxs("div", { className: "flex-1", children: [s.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [s.jsx("h3", { className: "text-xl font-black italic text-white uppercase tracking-tighter", children: g.name }), !R && s.jsx(pc, { size: 14, className: "text-white/40" }), g.id === "LEGEND" && s.jsx("span", { className: "bg-red-600 text-[8px] px-1.5 py-0.5 rounded font-black text-white animate-pulse", children: "HARD" })] }), s.jsx("p", { className: "text-xs font-bold text-white/40 uppercase tracking-widest mb-3", children: g.description }), s.jsxs("div", { className: "flex items-center gap-3", children: [s.jsx("div", { className: "flex-1 h-1.5 bg-black/40 rounded-full overflow-hidden", children: s.jsx("div", { className: `h-full transition-all duration-1000 ${C ? "bg-white" : "bg-white/40"}`, style: { width: `${v}%` } }) }), s.jsxs("span", { className: "text-[10px] font-black text-white/60 tracking-widest whitespace-nowrap", children: ["STAGE ", k + 1] })] })] }), s.jsx(Rn, { size: 24, className: `transition-transform group-hover:translate-x-1 ${C ? "text-white" : "text-white/20"}` })] }), s.jsx("div", { className: "absolute top-4 right-8 font-black text-4xl italic opacity-[0.03] select-none pointer-events-none group-hover:opacity-[0.05] transition-opacity", children: g.id })] }, g.id);
}) })] }) });
function r2() {
  var _a2;
  const [o, p] = w.useState(false);
  w.useEffect(() => {
    rm().then(() => p(true)), lt.init();
  }, []);
  const [h, r] = w.useState(0), [g, N] = w.useState(0), [R, C] = w.useState(0), [k, v] = w.useState(0), [U, A] = w.useState("home"), [$, J] = w.useState(ye.upgrades.map((O) => ({ ...O, level: 0 }))), [Z, ae] = w.useState({ haptic: true, particle: true, music: 50, sfx: 50 }), [X, pe] = w.useState(["n_egg"]), [Te, xe] = w.useState({ n_egg: 1 }), [fe, he] = w.useState(0), [se, W] = w.useState([]), [le, Le] = w.useState([]), [ot, Ne] = w.useState(false), [Ee, Pe] = w.useState(false), [Xe, Se] = w.useState(false), [S, H] = w.useState(true), [Q, ve] = w.useState([]), [we, m] = w.useState(null), [T, B] = w.useState(false), [L, P] = w.useState(false);
  w.useEffect(() => {
    lt.setEnabled(Z.sound), lt.setVolume(Z.music / 100);
  }, [Z.sound, Z.music]);
  const [ee, ce] = w.useState(null), [Ze, De] = w.useState([]), [bl, yl] = w.useState(false), [On, Cn] = w.useState(false), [ya, Kl] = w.useState(false), [Dn, Bi] = w.useState(false), [Yi, vl] = w.useState(false), [Un, Za] = w.useState(false), [_l, Li] = w.useState(false), [bt, Hn] = w.useState(0), [va, $l] = w.useState(false), [Rt, Bn] = w.useState(1), [Gi, qi] = w.useState(""), Wl = w.useRef([]), [Gt, nt] = w.useState([]), [rt, Ke] = w.useState(0), [Yn, Qa] = w.useState(100), [Ln, Va] = w.useState("FIRE"), [it, Ja] = w.useState(0), [Pt, ra] = w.useState(100), [da, Gn] = w.useState(0), [Xi, Nl] = w.useState(0), [Sl, yc] = w.useState(null), [Zi, Qi] = w.useState(0), [wl, _a] = w.useState(["FIRE", "WATER"]), [st, Ka] = w.useState(["FIRE", "WATER"]), [St, wt] = w.useState("GENESIS"), [Oe, dt] = w.useState({ GENESIS: 0, CYBERIA: 0, ETERNITY: 0, LEGEND: 0 }), fa = w.useRef(null), [Fl, Vi] = w.useState(0), ft = w.useCallback((O) => {
    qi(O), setTimeout(() => qi(""), 3e3);
  }, []), [Ji, $a] = w.useState(false), Il = w.useRef(Rt);
  w.useEffect(() => {
    Rt > Il.current && ($a(true), lt.playSFX("levelup"), ft("\u529B\u304C...\u9032\u5316\u3057\u305F\u305E\uFF01"), setTimeout(() => $a(false), 2e3), Il.current = Rt);
  }, [Rt, ft]), w.useEffect(() => {
    if (!o) return;
    const O = { money: localStorage.getItem("magic_idle_money"), total: localStorage.getItem("magic_idle_total"), upgrades: localStorage.getItem("magic_idle_upgrades"), maxCombo: localStorage.getItem("magic_idle_maxCombo"), tutorialCompleted: localStorage.getItem("magic_idle_tutorial_completed"), completedTutorials: localStorage.getItem("magic_idle_completedTutorials"), settings: localStorage.getItem("magic_idle_settings"), collectedUnits: localStorage.getItem("magic_idle_collectedUnits"), unitLevels: localStorage.getItem("magic_idle_unitLevels"), spiritOrbs: localStorage.getItem("magic_idle_spiritOrbs"), artifacts: localStorage.getItem("magic_idle_artifacts"), stageIndex: localStorage.getItem("magic_idle_stageIndex"), skills: localStorage.getItem("magic_idle_skills"), unlockedElements: localStorage.getItem("magic_idle_unlockedElements"), equippedElements: localStorage.getItem("magic_idle_equippedElements"), currentWorldId: localStorage.getItem("magic_idle_currentWorldId"), worldProgress: localStorage.getItem("magic_idle_worldProgress") };
    setTimeout(() => {
      if (O.money && r(parseFloat(O.money)), O.total && N(parseFloat(O.total)), O.maxCombo && v(parseInt(O.maxCombo)), O.stageIndex && Ja(parseInt(O.stageIndex)), O.spiritOrbs && he(parseInt(O.spiritOrbs)), O.skills && Le(JSON.parse(O.skills)), O.unitLevels && xe(JSON.parse(O.unitLevels)), O.collectedUnits && pe(JSON.parse(O.collectedUnits)), O.settings && ae(JSON.parse(O.settings)), O.artifacts && W(JSON.parse(O.artifacts)), O.currentWorldId && wt(O.currentWorldId), localStorage.getItem("magic_idle_achievements") && ve(JSON.parse(localStorage.getItem("magic_idle_achievements"))), O.worldProgress) {
        let Ce = JSON.parse(O.worldProgress);
        Ce.EARTH !== void 0 && (Ce.GENESIS = Ce.EARTH, delete Ce.EARTH), Ce.FUTURE !== void 0 && (Ce.CYBERIA = Ce.FUTURE, delete Ce.FUTURE), Ce.COSMOS !== void 0 && (Ce.ETERNITY = Ce.COSMOS, delete Ce.COSMOS), O.currentWorldId === "EARTH" && wt("GENESIS"), O.currentWorldId === "FUTURE" && wt("CYBERIA"), O.currentWorldId === "COSMOS" && wt("ETERNITY"), dt(Ce);
      }
      const D = O.stageIndex ? parseInt(O.stageIndex) : 0, F = O.currentWorldId === "EARTH" ? "GENESIS" : O.currentWorldId === "FUTURE" ? "CYBERIA" : O.currentWorldId === "COSMOS" ? "ETERNITY" : O.currentWorldId || "GENESIS", I = ye.worlds.find((Ce) => Ce.id === F), Be = Oi(100 * I.hpScale, 1.8, D, D % 10 === 0 && D > 0);
      ra(Be), Qa(Be);
      const et = localStorage.getItem("magic_idle_lastLogin");
      if (et && O.money && O.upgrades) {
        const Ce = Date.now(), El = Math.floor((Ce - parseInt(et)) / 1e3);
        if (El > 60) {
          const yt = JSON.parse(O.upgrades).reduce((ia, Na) => ia + tm(Na.baseIncome, Na.level), 0) * El * 0.8;
          yt > 0 && (Vi(yt), r((ia) => ia + yt), N((ia) => ia + yt));
        }
      }
      O.completedTutorials ? De(JSON.parse(O.completedTutorials)) : O.tutorialCompleted && De(["INTRO"]), !O.tutorialCompleted && !S && ce("INTRO");
      const ct = O.unlockedElements ? JSON.parse(O.unlockedElements) : ["FIRE", "WATER"];
      _a(ct), _a(ct), O.equippedElements ? Ka(JSON.parse(O.equippedElements)) : Ka(ct.slice(0, 6)), nt(uc(4, O.equippedElements ? JSON.parse(O.equippedElements) : ct.slice(0, 6))), Ne(true);
    }, 0);
  }, [S, o]), w.useEffect(() => {
    ot && (localStorage.setItem("magic_idle_money", h.toString()), localStorage.setItem("magic_idle_total", g.toString()), localStorage.setItem("magic_idle_upgrades", JSON.stringify($)), localStorage.setItem("magic_idle_maxCombo", k.toString()), localStorage.setItem("magic_idle_skills", JSON.stringify(le)), localStorage.setItem("magic_idle_settings", JSON.stringify(Z)), localStorage.setItem("magic_idle_collectedUnits", JSON.stringify(X)), localStorage.setItem("magic_idle_unitLevels", JSON.stringify(Te)), localStorage.setItem("magic_idle_spiritOrbs", fe.toString()), localStorage.setItem("magic_idle_artifacts", JSON.stringify(se)), localStorage.setItem("magic_idle_stageIndex", it.toString()), localStorage.setItem("magic_idle_lastLogin", Date.now().toString()), localStorage.setItem("magic_idle_equippedElements", JSON.stringify(st)), localStorage.setItem("magic_idle_currentWorldId", St), localStorage.setItem("magic_idle_worldProgress", JSON.stringify(Oe)), localStorage.setItem("worldProgress", JSON.stringify(Oe)), localStorage.setItem("magic_idle_completedTutorials", JSON.stringify(Ze)), localStorage.setItem("magic_idle_achievements", JSON.stringify(Q)));
  }, [h, g, $, k, le, Z, X, Te, fe, se, it, ot, wl, st, St, Oe, Ze, Q]), w.useEffect(() => {
    S || (U === "battle" ? lt.playBGM("battle") : lt.playBGM("home"));
  }, [U, S]);
  const qt = w.useMemo(() => {
    const O = ye.attributes.filter((D) => st.includes(D.id));
    return { atk: O.reduce((D, F) => {
      var _a3;
      return D + (((_a3 = F.stats) == null ? void 0 : _a3.atk) || 0);
    }, 0) / 6, spd: O.reduce((D, F) => {
      var _a3;
      return D + (((_a3 = F.stats) == null ? void 0 : _a3.spd) || 0);
    }, 0) / 6, crit: O.reduce((D, F) => {
      var _a3;
      return D + (((_a3 = F.stats) == null ? void 0 : _a3.crit) || 0);
    }, 0) / 6 };
  }, [st]), ea = w.useMemo(() => {
    let O = 0, D = 0;
    return X.forEach((F) => {
      const I = fc.find((et) => et.id === F), Be = Te[F] || 1;
      if (I) {
        const et = 1 + 0.5 * (Be - 1);
        O += I.stats.attack * et, D += I.stats.speed * et;
      }
    }), { attack: O, income: D };
  }, [X, Te]), ta = w.useMemo(() => {
    let O = 1, D = 1, F = 0;
    return se.forEach((I) => {
      I.id === "gold_keyboard" && (O += 0.5 * I.level), I.id === "greed_wallet" && (D += 0.2 * I.level), I.id === "time_stopper" && (F += 500 * I.level);
    }), { damageMult: O, incomeMult: D, comboTime: F };
  }, [se]), Qe = ((o ? $.reduce((O, D) => O + tm(D.baseIncome, D.level), 0) : 0) + ea.income) * ta.incomeMult, Ki = w.useCallback((O) => {
    r((D) => D + O), N((D) => D + O);
  }, []);
  Rx(Qe, Ki);
  const Al = w.useMemo(() => {
    if (S) return null;
    if (it === 0 && U === "home") return { text: "\u6226\u306E\u6E96\u5099\u3092\u6574\u3048\u3088\u3002", type: "FIGHT", actionId: "fight-button" };
    if (ko(g, 1e6, 1e6) >= 10 && U === "home") return { text: "\u79D8\u3081\u305F\u308B\u9B42\u3092\u89E3\u653E\u3057\u3001\u65B0\u305F\u306A\u9AD8\u307F\u3078\u8EE2\u751F\u305B\u3088\u3002", type: "REBIRTH", actionId: "rebirth-button" };
    const D = $.find((F) => h >= am(F.baseCost, F.costMultiplier, F.level));
    return D && U === "home" ? { text: "\u9B54\u5C0E\u5177\u3092\u5F37\u5316\u3057\u3001\u529B\u3092\u84C4\u3048\u308B\u306E\u3060\u3002", type: "UPGRADE", actionId: "shop-tab" } : D && U === "battle" ? { text: "\u4E00\u5EA6\u9000\u304D\u3001\u6226\u529B\u3092\u7ACB\u3066\u76F4\u3059\u3079\u304D\u3060\u308D\u3046\u3002", type: "UPGRADE", actionId: "back-to-home" } : U === "battle" ? Yn / Pt > 0.8 && R < 10 ? { text: "\u8A60\u5531\u3092\u6025\u3052\uFF01\u5149\u3092\u523B\u307F\u8FBC\u3080\u306E\u3060\u3002", type: "FIGHT", actionId: "magic-keyboard" } : { text: "\u305D\u306E\u8ABF\u5B50\u3060\u3002\u30B0\u30EA\u30C3\u30C1\u306E\u30B3\u30A2\u3092\u8CAB\u3051\uFF01", type: "FIGHT", actionId: null } : { text: "\u6DF1\u6DF5\u306E\u8ABF\u67FB\u3092\u518D\u958B\u3059\u308B\u305E\u3002", type: "FIGHT", actionId: "fight-button" };
  }, [h, g, it, U, $, S, Yn, Pt, R]), aa = w.useCallback((O) => {
    Gn((ct) => ct + 1);
    const D = Date.now();
    Wl.current.push(D), Wl.current.length > 10 && Wl.current.shift();
    const Be = Wl.current.filter((ct) => D - ct < 1e3).length >= 5, et = O === Ln;
    if (Math.random() < 0.02 && !L && (P(true), ft("\u30EA\u30DF\u30C3\u30C8\u30D6\u30EC\u30A4\u30AB\u30FC\u59CB\u52D5...\u30AF\u30EA\u30C6\u30A3\u30AB\u30EB\u30FB\u30CF\u30C3\u30AF\uFF01")), O === Gt[rt]) {
      lt.playSFX("click"), Nl((Xt) => Xt + 1);
      const ct = rt + 1;
      Z.haptic && (Pe(true), setTimeout(() => Pe(false), 100));
      const Ce = le.includes("mana_surge");
      if (va || Hn((Xt) => {
        const yt = 1 + qt.spd / 10, ia = (Be ? 5 : 2) * (Ce ? 2 : 1) * yt, Na = Math.min(Xt + ia, 100);
        return Na >= 100 && ($l(true), ft("\u30DE\u30CB\u30E5\u30A2\u30EB\u30FB\u30D0\u30FC\u30B9\u30C8\uFF01\u9023\u6483\u3092\u53E9\u304D\u8FBC\u3081\uFF01"), setTimeout(() => {
          $l(false), Hn(0);
        }, 3e3)), Na;
      }), ct === Gt.length) {
        let yt = R >= ye.feverTriggerCombo ? ye.feverMultiplier : 1;
        va && (yt *= 3), Be && (yt *= 1.5), yt *= 1 + qt.atk / 10;
        const Zn = (le.includes("crit_master") ? 0.2 : 0.05) + qt.crit / 100;
        Math.random() < Zn && (yt *= 2, ft("\u4F1A\u5FC3\u306E\u4E00\u6483\u3060\uFF01"));
        const Nc = ye.worlds.find((tt) => tt.id === St), Ml = Ix(ye.baseTypingReward * Nc.rewardScale, R, ye.comboMultiplier, yt);
        r((tt) => tt + Ml), N((tt) => {
          const vt = tt + Ml;
          return Bn(Math.floor(vt / 1e3) + 1), vt;
        }), C((tt) => {
          const vt = tt + 1;
          return vt > k && v(vt), vt % 10 === 0 && ft(`${vt} \u30B3\u30F3\u30DC\uFF01\u5B9F\u306B\u898B\u4E8B\u3060\u3002`), vt;
        }), Qa((tt) => {
          const vt = Fx(20, ea.attack, et, Be, ta.damageMult, yt);
          Qi(vt), lt.playSFX("hit");
          let kl = vt;
          St === "ETERNITY" && (kl *= 0.5), St === "LEGEND" && (kl *= 0.3);
          const Sa = tt - kl;
          return Sa <= 0 && !_l ? (Li(true), lt.playSFX("defeat"), setTimeout(() => {
            ft("\u6575\u3092\u5C60\u3063\u305F\u3002\u6B21\u306A\u308B\u6A19\u7684\u3078\u3002");
            const wa = ye.attributes;
            Va(wa[Math.floor(Math.random() * wa.length)].id);
            const ma = it + 1;
            Ja(ma), dt((_t) => ({ ..._t, [St]: ma }));
            const Qn = ma % 10 === 0;
            let zl, ja = null;
            if (Qn) {
              const _t = Math.min(4, Math.floor(ma / 50) + 1), Aa = em.raidBosses.filter((ha) => ha.tier === _t), Ea = Aa.length > 0 ? Aa[ma % Aa.length] : em.raidBosses[0];
              zl = Ea.health * (1 + ma * 0.1), ja = Ea.name, ft(`\u8B66\u544A: ${Ea.name} \u304C\u51FA\u73FE\uFF01`);
            } else {
              const _t = ye.worlds.find((Aa) => Aa.id === St);
              zl = Oi(100 * _t.hpScale, 1.8, ma, false), ja = null;
            }
            yc(ja), ra(zl), Qa(zl), Li(false);
          }, 1200), 0) : Sa;
        }), nt(uc(Math.min(8, 3 + Math.floor(R / 10)), st)), Ke(0);
      } else Ke(ct);
      fa.current && clearTimeout(fa.current);
      const El = le.includes("time_bend"), Xn = 4e3 + ta.comboTime + (El ? 1e3 : 0);
      fa.current = setTimeout(() => {
        C(0), R > 10 && ft("\u96C6\u4E2D\u529B\u304C\u5207\u308C\u305F\u304B...");
      }, Xn);
    } else lt.playSFX("error"), le.includes("combo_shield") && !localStorage.getItem("combo_shield_used") ? (localStorage.setItem("combo_shield_used", "true"), ft("\u5B88\u8B77\u306E\u98A8\u3060\u3002\u4E3B\u3092\u5B88\u308A\u5207\u3063\u305F\u304B\u3002"), Ke(0)) : (C(0), Ke(0));
  }, [Gt, rt, R, k, va, ea, ta, Ln, Z.haptic, le, ft, it, st, qt, St, _l]), la = w.useMemo(() => ["q", "w", "e", "r", "t", "y"], []);
  w.useEffect(() => {
    const O = (D) => {
      if (U !== "battle" || va || _l) return;
      const F = D.key.toLowerCase(), I = la.indexOf(F);
      I !== -1 && I < st.length && aa(st[I]);
    };
    return window.addEventListener("keydown", O), () => window.removeEventListener("keydown", O);
  }, [U, va, _l, st, aa, la]), w.useEffect(() => {
    [{ s: 3, id: "THUNDER" }, { s: 10, id: "WIND" }, { s: 20, id: "LIGHT" }, { s: 30, id: "DARK" }, { s: 40, id: "ICE" }, { s: 50, id: "EARTH" }, { s: 60, id: "TOXIC" }, { s: 70, id: "GRAVITY" }, { s: 80, id: "SOUL" }, { s: 90, id: "METAL" }, { s: 100, id: "BLOOD" }, { s: 120, id: "TIME" }, { s: 140, id: "SPACE" }, { s: 160, id: "NATURE" }, { s: 180, id: "STORM" }, { s: 200, id: "STAR" }, { s: 220, id: "HOLY" }, { s: 250, id: "CHAOS" }, { s: 270, id: "MAGMA" }, { s: 290, id: "STEAM" }, { s: 310, id: "PLASMA" }, { s: 330, id: "QUAKE" }, { s: 350, id: "ZERO" }, { s: 370, id: "AURA" }, { s: 390, id: "MIRROR" }, { s: 410, id: "ECHO" }, { s: 430, id: "ABYSS" }, { s: 450, id: "ZENITH" }, { s: 470, id: "PULSE" }, { s: 490, id: "DRAGON" }, { s: 510, id: "FEATHER" }, { s: 530, id: "PETAL" }, { s: 550, id: "BONE" }, { s: 570, id: "GEAR" }, { s: 590, id: "NEON" }, { s: 610, id: "PIXEL" }, { s: 630, id: "VIRUS" }, { s: 650, id: "CORE" }].forEach((D) => {
      if (it >= D.s - 1 && !wl.includes(D.id)) {
        _a((I) => [...I, D.id]);
        const F = ye.attributes.find((I) => I.id === D.id);
        ft(`\u65B0\u3057\u3044\u5C5E\u6027\u3010${F.name}\u3011\u306E\u7406\u3092\u7406\u89E3\u3057\u305F\u3088\u3046\u3060\u306A\u3002`);
      }
    });
  }, [it, wl, ft]), w.useEffect(() => {
    rt === 0 && localStorage.removeItem("combo_shield_used");
  }, [rt]);
  const $i = w.useCallback((O, D) => {
    h >= D && (r((F) => F - D), Le((F) => [...F, O]));
  }, [h]), Wi = w.useCallback((O) => {
    J((D) => {
      const F = D.findIndex((et) => et.id === O), I = D[F], Be = am(I.baseCost, I.costMultiplier, I.level);
      if (h >= Be) {
        r((ct) => ct - Be), lt.playSFX("levelup");
        const et = [...D];
        return et[F] = { ...et[F], level: et[F].level + 1 }, et;
      }
      return D;
    });
  }, [h]), Fi = w.useCallback((O) => {
    pe((D) => D.includes(O.id) ? D : [...D, O.id]), xe((D) => ({ ...D, [O.id]: (D[O.id] || 0) + 1 }));
  }, []), vc = w.useCallback((O) => r((D) => Math.max(0, D - O)), []);
  w.useEffect(() => {
    if (!ot) return;
    const O = { stageIndex: it, maxCombo: k, totalEarned: g, collectedUnits: X, dragonLevel: Rt, worldProgress: Oe, totalTaps: da };
    oc.forEach((D) => {
      !Q.includes(D.id) && D.condition(O) && (ve((F) => [...F, D.id]), m(D), lt.playSFX("gacha"));
    });
  }, [it, k, g, X, Rt, Oe, da, Q, ot]);
  const Pl = w.useCallback(() => {
    const O = ko(g, 1e6, 1e6);
    if (O > 0) {
      he((F) => F + O), r(0), N(0), C(0), v(0), Le([]), Bn(1);
      const D = Oi(100, 1.8, 0, false);
      ra(D), Qa(D), Va("FIRE"), Gn(0), Nl(0), _a(["FIRE", "WATER"]), Ka(["FIRE", "WATER"]), J(ye.upgrades.map((F) => ({ ...F, level: 0 }))), A("home");
    }
  }, [g]), en = w.useCallback((O, D) => {
    fe >= D && (he((F) => F - D), W((F) => {
      const I = F.findIndex((Be) => Be.id === O);
      if (I >= 0) {
        const Be = [...F];
        return Be[I] = { ...Be[I], level: Be[I].level + 1 }, Be;
      }
      return [...F, { id: O, level: 1 }];
    }));
  }, [fe]), na = w.useCallback((O) => {
    const D = Oe[O] || 0;
    wt(O), Ja(D);
    const F = ye.worlds.find((Be) => Be.id === O), I = Oi(100 * F.hpScale, 1.8, D, D % 10 === 0);
    ra(I), Qa(I), nt(uc(4, st)), Ke(0), Za(false), ft(`${F.name} \u3078\u8EE2\u79FB\u3057\u305F\u3002`);
  }, [Oe, st, ft]), jt = w.useCallback(() => {
    De((D) => D.includes(ee) ? D : [...D, ee]);
    const O = ee;
    ce(null), O === "INTRO" && (localStorage.setItem("magic_idle_tutorial_completed", "true"), A("battle"));
  }, [ee]), Ii = w.useCallback((O) => {
    if (O === "new") {
      localStorage.clear(), r(0), N(0), C(0), v(0), Le([]), pe(["n_egg"]), xe({ n_egg: 1 }), Bn(1);
      const D = Oi(100, 1.8, 0, false);
      ra(D), Qa(D), Va("FIRE"), Gn(0), Nl(0), _a(["FIRE", "WATER"]), Ka(["FIRE", "WATER"]), J(ye.upgrades.map((F) => ({ ...F, level: 0 }))), ce("INTRO");
    } else localStorage.getItem("magic_idle_tutorial_completed") && A("home");
    H(false);
  }, []);
  w.useEffect(() => {
    S || !ot || (U === "home" && !Ze.includes("HUB") ? setTimeout(() => ce("HUB"), 0) : U === "battle" && !Ze.includes("BATTLE") && setTimeout(() => ce("BATTLE"), 0));
  }, [U, S, ot, Ze]);
  const _c = R >= ye.feverTriggerCombo, qn = da > 0 ? Math.round(Xi / da * 100) : 100;
  return S ? s.jsx(kx, { onComplete: Ii }) : s.jsxs("div", { className: `fixed inset-0 bg-[#0a0a0a] text-white overflow-hidden flex flex-col ${Ee ? "haptic-vibrate" : ""} `, children: [s.jsx(Jx, { combo: R, worldId: St }), U === "home" ? s.jsx(Qx, { money: h, totalEarned: g, dragonLevel: Rt, maxCombo: k, unlockedAchievements: Q, onOpenAchievements: () => B(true), onStartBattle: () => A("battle"), upgrades: $, onPurchase: Wi, unlockedSkills: le, onUnlock: $i, onOpenSettings: () => yl(true), onOpenLore: () => Cn(true), onOpenArtifacts: () => Kl(true), onOpenSkills: () => Bi(true), onOpenMagicSelection: () => vl(true), onOpenWorldSelection: () => Za(true), currentWorldId: St, collectedUnits: X, onPullGacha: Fi, onSpentMoney: vc, recommendedActionId: Al == null ? void 0 : Al.actionId, deckStats: ea, artifactStats: ta, magicStats: qt }) : s.jsxs(s.Fragment, { children: [s.jsxs("div", { className: "flex-[45] relative", children: [s.jsx(Sx, { currentSpell: Gt, monsterHealth: Yn, monsterMaxHealth: Pt, bossName: Sl, stageData: ((_a2 = ye.stages) == null ? void 0 : _a2[it]) || {}, combo: R, isFever: _c, dragonLevel: Rt, chantBreakGauge: bt, isSpellComplete: rt === 0 && Gt.length > 0, monsterElement: Ln, stageIndex: it + 1, lastDamage: Zi, familiarDialogue: Gi, isVictorious: _l, currentProgress: rt, keyMapping: la, equippedElements: st, recommendedActionId: Al == null ? void 0 : Al.actionId }), s.jsx("div", { className: "absolute top-4 left-4 z-20", children: s.jsx(Ax, { money: h, idleIncome: Qe }) }), s.jsx("button", { onClick: () => ce(U === "home" ? "HUB" : "BATTLE"), className: "absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-neon-purple/80 hover:bg-neon-purple flex items-center justify-center shadow-lg border-2 border-white/20 transition-all hover:scale-110", children: s.jsx(Gh, { size: 24, className: "text-white" }) }), s.jsx("button", { onClick: () => Za(true), className: "absolute top-4 right-20 z-20 w-12 h-12 rounded-full bg-neon-blue/80 hover:bg-neon-blue flex items-center justify-center shadow-lg border-2 border-white/20 transition-all hover:scale-110", children: s.jsx(im, { size: 24, className: "text-white" }) })] }), s.jsxs("div", { className: "flex-[55] bg-[#1a1a1a] rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] z-10 flex flex-col p-6", children: [s.jsx("div", { className: "flex-[1] flex flex-col items-center justify-center relative", children: s.jsx(jx, { onInput: aa, activeElements: st, keyMapping: la }) }), s.jsx("div", { className: "flex justify-center mt-4", children: s.jsxs("button", { onClick: () => {
    A("home"), C(0);
  }, className: `flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/5 text-white/60 hover:bg-white/10 hover:text-white transition-all active:scale-95 border border-white/10 ${(Al == null ? void 0 : Al.actionId) === "back-to-home" ? "animate-recommend border-neon-purple text-white bg-neon-purple/20" : ""}`, children: [s.jsx(sm, { size: 18 }), s.jsx("span", { className: "text-xs font-black uppercase tracking-widest", children: "\u62E0\u70B9\u3078\u623B\u308B" })] }) })] })] }), s.jsx(Vx, { objective: Al }), Dn && s.jsx(om, { money: h, unlockedSkills: le, onUnlock: $i, onClose: () => Bi(false) }), ee && s.jsx(Tx, { type: ee, onComplete: jt, onSkip: () => ce(null), currentSpell: Gt, currentProgress: rt }), Fl > 0 && s.jsx("div", { className: "absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in", children: s.jsxs("div", { className: "bg-[#1a1a1a] p-8 rounded-3xl border border-neon-cyan/50 text-center max-w-sm shadow-[0_0_50px_rgba(0,255,255,0.2)]", children: [s.jsx("div", { className: "text-4xl mb-4", children: "\u{1F4A4}" }), s.jsx("h3", { className: "text-2xl font-black text-white italic mb-2", children: "\u304A\u304B\u3048\u308A\u306A\u3055\u3044\uFF01" }), s.jsxs("p", { className: "text-3xl font-black text-neon-cyan mb-8", children: ["+", Math.floor(Fl).toLocaleString(), " MP"] }), s.jsx("button", { onClick: () => Vi(0), className: "w-full py-4 bg-neon-cyan text-black font-black uppercase tracking-widest rounded-xl", children: "\u56DE\u53CE\u3059\u308B" })] }) }), Xe && s.jsx(Ex, { score: g, maxCombo: k, accuracy: qn, onRestart: () => Se(false) }), s.jsx(zx, { isActive: va, onComplete: () => {
    $l(false), Hn(0);
  } }), Yi && s.jsx(u2, { unlockedElements: wl, equippedElements: st, onClose: () => vl(false), onSave: (O) => {
    Ka(O), vl(false), nt(uc(4, O)), Ke(0);
  } }), Un && s.jsx(o2, { currentWorldId: St, worldProgress: Oe, onSelect: na, onClose: () => Za(false) }), bl && s.jsx(l2, { settings: Z, onUpdate: (O) => ae((D) => ({ ...D, ...O })), onClose: () => yl(false), canRebirth: Dx(g), nextRebirthOrbs: ko(g, 1e6, 1e6), totalMoney: g, onRebirth: Pl }), On && s.jsx(n2, { totalEarned: g, onClose: () => Cn(false), stageIndex: it + 1 }), ya && s.jsx(s2, { spiritOrbs: fe, artifacts: se, onBuyArtifact: en, onClose: () => Kl(false) }), we && s.jsx(Kx, { achievement: we, onComplete: () => m(null) }), T && s.jsx($x, { unlockedAchievements: Q, onClose: () => B(false) }), L && s.jsx(Wx, { onComplete: () => P(false) }), Ji && s.jsx("div", { className: "fixed inset-0 z-[300] pointer-events-none flex items-center justify-center bg-white/10 backdrop-blur-sm animate-in fade-in duration-500", children: s.jsx("div", { className: "text-6xl font-black text-yellow-400 italic animate-bounce scale-150 drop-shadow-[0_0_30px_white]", children: "DRAGON EVOLUTION!" }) })] });
}
class d2 extends Ci.Component {
  constructor(p) {
    super(p), this.state = { hasError: false, error: null, errorInfo: null };
  }
  static getDerivedStateFromError(p) {
    return { hasError: true, error: p };
  }
  componentDidCatch(p, h) {
    this.setState({ error: p, errorInfo: h }), console.error("Uncaught error:", p, h);
  }
  render() {
    return this.state.hasError ? s.jsxs("div", { style: { color: "red", padding: "20px", whiteSpace: "pre-wrap", backgroundColor: "black", height: "100vh", overflow: "auto" }, children: [s.jsx("h1", { children: "Runtime Error" }), s.jsx("h3", { style: { color: "yellow" }, children: this.state.error && this.state.error.toString() }), s.jsx("pre", { style: { color: "#ccc" }, children: this.state.errorInfo && this.state.errorInfo.componentStack })] }) : this.props.children;
  }
}
Sh.createRoot(document.getElementById("root")).render(s.jsx(w.StrictMode, { children: s.jsx(d2, { children: s.jsx(r2, {}) }) }));
