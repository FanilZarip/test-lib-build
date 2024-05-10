/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Sn(e, t) {
  const n = new Set(e.split(","));
  return (r) => n.has(r);
}
const D = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, bn = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], U = () => {
}, Vn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), b = Object.assign, Rn = Object.prototype.hasOwnProperty, E = (e, t) => Rn.call(e, t), p = Array.isArray, W = (e) => ae(e) === "[object Map]", It = (e) => ae(e) === "[object Set]", ht = (e) => ae(e) === "[object Date]", N = (e) => typeof e == "function", R = (e) => typeof e == "string", M = (e) => typeof e == "symbol", v = (e) => e !== null && typeof e == "object", xn = (e) => (v(e) || N(e)) && N(e.then) && N(e.catch), $t = Object.prototype.toString, ae = (e) => $t.call(e), Tt = (e) => ae(e).slice(8, -1), Pt = (e) => ae(e) === "[object Object]", Ze = (e) => R(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Qe = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Dn = /-(\w)/g, Cn = Qe((e) => e.replace(Dn, (t, n) => n ? n.toUpperCase() : "")), In = /\B([A-Z])/g, $n = Qe(
  (e) => e.replace(In, "-$1").toLowerCase()
), Tn = Qe((e) => e.charAt(0).toUpperCase() + e.slice(1)), T = (e, t) => !Object.is(e, t), Pn = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Mn = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
};
let _t;
const Mt = () => _t || (_t = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ke(e) {
  if (p(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = R(r) ? Ln(r) : ke(r);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else if (R(e) || v(e))
    return e;
}
const An = /;(?![^(]*\))/g, jn = /:([^]+)/, Fn = /\/\*[^]*?\*\//g;
function Ln(e) {
  const t = {};
  return e.replace(Fn, "").split(An).forEach((n) => {
    if (n) {
      const r = n.split(jn);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function $e(e) {
  let t = "";
  if (R(e))
    t = e;
  else if (p(e))
    for (let n = 0; n < e.length; n++) {
      const r = $e(e[n]);
      r && (t += r + " ");
    }
  else if (v(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Hn(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Ve(e[r], t[r]);
  return n;
}
function Ve(e, t) {
  if (e === t)
    return !0;
  let n = ht(e), r = ht(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = M(e), r = M(t), n || r)
    return e === t;
  if (n = p(e), r = p(t), n || r)
    return n && r ? Hn(e, t) : !1;
  if (n = v(e), r = v(t), n || r) {
    if (!n || !r)
      return !1;
    const s = Object.keys(e).length, o = Object.keys(t).length;
    if (s !== o)
      return !1;
    for (const i in e) {
      const c = e.hasOwnProperty(i), u = t.hasOwnProperty(i);
      if (c && !u || !c && u || !Ve(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Kn = (e) => R(e) ? e : e == null ? "" : p(e) || v(e) && (e.toString === $t || !N(e.toString)) ? JSON.stringify(e, At, 2) : String(e), At = (e, t) => t && t.__v_isRef ? At(e, t.value) : W(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], o) => (n[Le(r, o) + " =>"] = s, n),
    {}
  )
} : It(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Le(n))
} : M(t) ? Le(t) : v(t) && !p(t) && !Pt(t) ? String(t) : t, Le = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    M(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function X(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let zn;
function Un(e, t = zn) {
  t && t.active && t.effects.push(e);
}
let B;
class jt {
  constructor(t, n, r, s) {
    this.fn = t, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Un(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Te();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Wn(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Pe();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = L, n = B;
    try {
      return L = !0, B = this, this._runnings++, gt(this), this.fn();
    } finally {
      mt(this), this._runnings--, B = n, L = t;
    }
  }
  stop() {
    this.active && (gt(this), mt(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Wn(e) {
  return e.value;
}
function gt(e) {
  e._trackId++, e._depsLength = 0;
}
function mt(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Ft(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Ft(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let L = !0, Ue = 0;
const Lt = [];
function Te() {
  Lt.push(L), L = !1;
}
function Pe() {
  const e = Lt.pop();
  L = e === void 0 ? !0 : e;
}
function et() {
  Ue++;
}
function tt() {
  for (Ue--; !Ue && We.length; )
    We.shift()();
}
function Ht(e, t, n) {
  var r;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && Ft(s, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((r = e.onTrack) == null || r.call(e, b({ effect: e }, n)));
  }
}
const We = [];
function Kt(e, t, n) {
  var r;
  et();
  for (const s of e.keys()) {
    let o;
    s._dirtyLevel < t && (o ?? (o = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (o ?? (o = e.get(s) === s._trackId)) && (process.env.NODE_ENV !== "production" && ((r = s.onTrigger) == null || r.call(s, b({ effect: s }, n))), s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && We.push(s.scheduler)));
  }
  tt();
}
const zt = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Be = /* @__PURE__ */ new WeakMap(), q = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), qe = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function y(e, t, n) {
  if (L && B) {
    let r = Be.get(e);
    r || Be.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || r.set(n, s = zt(() => r.delete(n))), Ht(
      B,
      s,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function H(e, t, n, r, s, o) {
  const i = Be.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && p(e)) {
    const u = Number(r);
    i.forEach((f, h) => {
      (h === "length" || !M(h) && h >= u) && c.push(f);
    });
  } else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        p(e) ? Ze(n) && c.push(i.get("length")) : (c.push(i.get(q)), W(e) && c.push(i.get(qe)));
        break;
      case "delete":
        p(e) || (c.push(i.get(q)), W(e) && c.push(i.get(qe)));
        break;
      case "set":
        W(e) && c.push(i.get(q));
        break;
    }
  et();
  for (const u of c)
    u && Kt(
      u,
      4,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: r,
        oldValue: s,
        oldTarget: o
      } : void 0
    );
  tt();
}
const Bn = /* @__PURE__ */ Sn("__proto__,__v_isRef,__isVue"), Ut = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(M)
), Et = /* @__PURE__ */ qn();
function qn() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = d(this);
      for (let o = 0, i = this.length; o < i; o++)
        y(r, "get", o + "");
      const s = r[t](...n);
      return s === -1 || s === !1 ? r[t](...n.map(d)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Te(), et();
      const r = d(this)[t].apply(this, n);
      return tt(), Pe(), r;
    };
  }), e;
}
function Jn(e) {
  M(e) || (e = String(e));
  const t = d(this);
  return y(t, "has", e), t.hasOwnProperty(e);
}
class Wt {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    const s = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return r === (s ? o ? Yt : Gt : o ? ir : Jt).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = p(t);
    if (!s) {
      if (i && E(Et, n))
        return Reflect.get(Et, n, r);
      if (n === "hasOwnProperty")
        return Jn;
    }
    const c = Reflect.get(t, n, r);
    return (M(n) ? Ut.has(n) : Bn(n)) || (s || y(t, "get", n), o) ? c : x(c) ? i && Ze(n) ? c : c.value : v(c) ? s ? Zt(c) : Xt(c) : c;
  }
}
class Gn extends Wt {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const u = Z(o);
      if (!J(r) && !Z(r) && (o = d(o), r = d(r)), !p(t) && x(o) && !x(r))
        return u ? !1 : (o.value = r, !0);
    }
    const i = p(t) && Ze(n) ? Number(n) < t.length : E(t, n), c = Reflect.set(t, n, r, s);
    return t === d(s) && (i ? T(r, o) && H(t, "set", n, r, o) : H(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = E(t, n), s = t[n], o = Reflect.deleteProperty(t, n);
    return o && r && H(t, "delete", n, void 0, s), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!M(n) || !Ut.has(n)) && y(t, "has", n), r;
  }
  ownKeys(t) {
    return y(
      t,
      "iterate",
      p(t) ? "length" : q
    ), Reflect.ownKeys(t);
  }
}
class Bt extends Wt {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && X(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && X(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Yn = /* @__PURE__ */ new Gn(), Xn = /* @__PURE__ */ new Bt(), Zn = /* @__PURE__ */ new Bt(!0), nt = (e) => e, Me = (e) => Reflect.getPrototypeOf(e);
function he(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const s = d(e), o = d(t);
  n || (T(t, o) && y(s, "get", t), y(s, "get", o));
  const { has: i } = Me(s), c = r ? nt : n ? ot : le;
  if (i.call(s, t))
    return c(e.get(t));
  if (i.call(s, o))
    return c(e.get(o));
  e !== s && e.get(t);
}
function _e(e, t = !1) {
  const n = this.__v_raw, r = d(n), s = d(e);
  return t || (T(e, s) && y(r, "has", e), y(r, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function ge(e, t = !1) {
  return e = e.__v_raw, !t && y(d(e), "iterate", q), Reflect.get(e, "size", e);
}
function Nt(e) {
  e = d(e);
  const t = d(this);
  return Me(t).has.call(t, e) || (t.add(e), H(t, "add", e, e)), this;
}
function vt(e, t) {
  t = d(t);
  const n = d(this), { has: r, get: s } = Me(n);
  let o = r.call(n, e);
  o ? process.env.NODE_ENV !== "production" && qt(n, r, e) : (e = d(e), o = r.call(n, e));
  const i = s.call(n, e);
  return n.set(e, t), o ? T(t, i) && H(n, "set", e, t, i) : H(n, "add", e, t), this;
}
function wt(e) {
  const t = d(this), { has: n, get: r } = Me(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && qt(t, n, e) : (e = d(e), s = n.call(t, e));
  const o = r ? r.call(t, e) : void 0, i = t.delete(e);
  return s && H(t, "delete", e, void 0, o), i;
}
function yt() {
  const e = d(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? W(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && H(e, "clear", void 0, void 0, n), r;
}
function me(e, t) {
  return function(r, s) {
    const o = this, i = o.__v_raw, c = d(i), u = t ? nt : e ? ot : le;
    return !e && y(c, "iterate", q), i.forEach((f, h) => r.call(s, u(f), u(h), o));
  };
}
function Ee(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, o = d(s), i = W(o), c = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, f = s[e](...r), h = n ? nt : t ? ot : le;
    return !t && y(
      o,
      "iterate",
      u ? qe : q
    ), {
      // iterator protocol
      next() {
        const { value: l, done: a } = f.next();
        return a ? { value: l, done: a } : {
          value: c ? [h(l[0]), h(l[1])] : h(l),
          done: a
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function A(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      X(
        `${Tn(e)} operation ${n}failed: target is readonly.`,
        d(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Qn() {
  const e = {
    get(o) {
      return he(this, o);
    },
    get size() {
      return ge(this);
    },
    has: _e,
    add: Nt,
    set: vt,
    delete: wt,
    clear: yt,
    forEach: me(!1, !1)
  }, t = {
    get(o) {
      return he(this, o, !1, !0);
    },
    get size() {
      return ge(this);
    },
    has: _e,
    add: Nt,
    set: vt,
    delete: wt,
    clear: yt,
    forEach: me(!1, !0)
  }, n = {
    get(o) {
      return he(this, o, !0);
    },
    get size() {
      return ge(this, !0);
    },
    has(o) {
      return _e.call(this, o, !0);
    },
    add: A("add"),
    set: A("set"),
    delete: A("delete"),
    clear: A("clear"),
    forEach: me(!0, !1)
  }, r = {
    get(o) {
      return he(this, o, !0, !0);
    },
    get size() {
      return ge(this, !0);
    },
    has(o) {
      return _e.call(this, o, !0);
    },
    add: A("add"),
    set: A("set"),
    delete: A("delete"),
    clear: A("clear"),
    forEach: me(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    e[o] = Ee(o, !1, !1), n[o] = Ee(o, !0, !1), t[o] = Ee(o, !1, !0), r[o] = Ee(
      o,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    r
  ];
}
const [
  kn,
  er,
  tr,
  nr
] = /* @__PURE__ */ Qn();
function rt(e, t) {
  const n = t ? e ? nr : tr : e ? er : kn;
  return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    E(n, s) && s in r ? n : r,
    s,
    o
  );
}
const rr = {
  get: /* @__PURE__ */ rt(!1, !1)
}, sr = {
  get: /* @__PURE__ */ rt(!0, !1)
}, or = {
  get: /* @__PURE__ */ rt(!0, !0)
};
function qt(e, t, n) {
  const r = d(n);
  if (r !== n && t.call(e, r)) {
    const s = Tt(e);
    X(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Jt = /* @__PURE__ */ new WeakMap(), ir = /* @__PURE__ */ new WeakMap(), Gt = /* @__PURE__ */ new WeakMap(), Yt = /* @__PURE__ */ new WeakMap();
function cr(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function lr(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : cr(Tt(e));
}
function Xt(e) {
  return Z(e) ? e : st(
    e,
    !1,
    Yn,
    rr,
    Jt
  );
}
function Zt(e) {
  return st(
    e,
    !0,
    Xn,
    sr,
    Gt
  );
}
function Ne(e) {
  return st(
    e,
    !0,
    Zn,
    or,
    Yt
  );
}
function st(e, t, n, r, s) {
  if (!v(e))
    return process.env.NODE_ENV !== "production" && X(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = s.get(e);
  if (o)
    return o;
  const i = lr(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? r : n
  );
  return s.set(e, c), c;
}
function ee(e) {
  return Z(e) ? ee(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Z(e) {
  return !!(e && e.__v_isReadonly);
}
function J(e) {
  return !!(e && e.__v_isShallow);
}
function Je(e) {
  return e ? !!e.__v_raw : !1;
}
function d(e) {
  const t = e && e.__v_raw;
  return t ? d(t) : e;
}
function ur(e) {
  return Object.isExtensible(e) && Mn(e, "__v_skip", !0), e;
}
const le = (e) => v(e) ? Xt(e) : e, ot = (e) => v(e) ? Zt(e) : e, ar = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class Qt {
  constructor(t, n, r, s) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new jt(
      () => t(this._value),
      () => se(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = r;
  }
  get value() {
    const t = d(this);
    return (!t._cacheable || t.effect.dirty) && T(t._value, t._value = t.effect.run()) && se(t, 4), it(t), t.effect._dirtyLevel >= 2 && (process.env.NODE_ENV !== "production" && this._warnRecursive && X(ar, `

getter: `, this.getter), se(t, 2)), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function fr(e, t, n = !1) {
  let r, s;
  const o = N(e);
  o ? (r = e, s = process.env.NODE_ENV !== "production" ? () => {
    X("Write operation failed: computed value is readonly");
  } : U) : (r = e.get, s = e.set);
  const i = new Qt(r, s, o || !s, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
function it(e) {
  var t;
  L && B && (e = d(e), Ht(
    B,
    (t = e.dep) != null ? t : e.dep = zt(
      () => e.dep = void 0,
      e instanceof Qt ? e : void 0
    ),
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function se(e, t = 4, n) {
  e = d(e);
  const r = e.dep;
  r && Kt(
    r,
    t,
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "set",
      key: "value",
      newValue: n
    } : void 0
  );
}
function x(e) {
  return !!(e && e.__v_isRef === !0);
}
function Ot(e) {
  return dr(e, !1);
}
function dr(e, t) {
  return x(e) ? e : new pr(e, t);
}
class pr {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : d(t), this._value = n ? t : le(t);
  }
  get value() {
    return it(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || J(t) || Z(t);
    t = n ? t : d(t), T(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : le(t), se(this, 4, t));
  }
}
function hr(e) {
  return x(e) ? e.value : e;
}
const _r = {
  get: (e, t, n) => hr(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return x(s) && !x(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function gr(e) {
  return ee(e) ? e : new Proxy(e, _r);
}
class mr {
  constructor(t) {
    this.dep = void 0, this.__v_isRef = !0;
    const { get: n, set: r } = t(
      () => it(this),
      () => se(this)
    );
    this._get = n, this._set = r;
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Er(e) {
  return new mr(e);
}
/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const G = [];
function Nr(e) {
  G.push(e);
}
function vr() {
  G.pop();
}
function g(e, ...t) {
  Te();
  const n = G.length ? G[G.length - 1].component : null, r = n && n.appContext.config.warnHandler, s = wr();
  if (r)
    Y(
      r,
      n,
      11,
      [
        e + t.map((o) => {
          var i, c;
          return (c = (i = o.toString) == null ? void 0 : i.call(o)) != null ? c : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: o }) => `at <${wn(n, o.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    s.length && o.push(`
`, ...yr(s)), console.warn(...o);
  }
  Pe();
}
function wr() {
  let e = G[G.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function yr(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...Or(n));
  }), t;
}
function Or({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, s = ` at <${wn(
    e.component,
    e.type,
    r
  )}`, o = ">" + n;
  return e.props ? [s, ...Sr(e.props), o] : [s + o];
}
function Sr(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...kt(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function kt(e, t, n) {
  return R(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : x(t) ? (t = kt(e, d(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : N(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = d(t), n ? t : [`${e}=`, t]);
}
const en = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function Y(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    ct(s, t, n);
  }
}
function ye(e, t, n, r) {
  if (N(e)) {
    const s = Y(e, t, n, r);
    return s && xn(s) && s.catch((o) => {
      ct(o, t, n);
    }), s;
  }
  if (p(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++)
      s.push(ye(e[o], t, n, r));
    return s;
  } else
    process.env.NODE_ENV !== "production" && g(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function ct(e, t, n, r = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, c = process.env.NODE_ENV !== "production" ? en[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const f = o.ec;
      if (f) {
        for (let h = 0; h < f.length; h++)
          if (f[h](e, i, c) === !1)
            return;
      }
      o = o.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Te(), Y(
        u,
        null,
        10,
        [e, i, c]
      ), Pe();
      return;
    }
  }
  br(e, n, s, r);
}
function br(e, t, n, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = en[t];
    if (n && Nr(n), g(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && vr(), r)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Re = !1, Ge = !1;
const C = [];
let F = 0;
const te = [];
let P = null, j = 0;
const tn = /* @__PURE__ */ Promise.resolve();
let lt = null;
const Vr = 100;
function Rr(e) {
  const t = lt || tn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function xr(e) {
  let t = F + 1, n = C.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = C[r], o = ue(s);
    o < e || o === e && s.pre ? t = r + 1 : n = r;
  }
  return t;
}
function ut(e) {
  (!C.length || !C.includes(
    e,
    Re && e.allowRecurse ? F + 1 : F
  )) && (e.id == null ? C.push(e) : C.splice(xr(e.id), 0, e), nn());
}
function nn() {
  !Re && !Ge && (Ge = !0, lt = tn.then(sn));
}
function rn(e) {
  p(e) ? te.push(...e) : (!P || !P.includes(
    e,
    e.allowRecurse ? j + 1 : j
  )) && te.push(e), nn();
}
function Dr(e) {
  if (te.length) {
    const t = [...new Set(te)].sort(
      (n, r) => ue(n) - ue(r)
    );
    if (te.length = 0, P) {
      P.push(...t);
      return;
    }
    for (P = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), j = 0; j < P.length; j++)
      process.env.NODE_ENV !== "production" && on(e, P[j]) || P[j]();
    P = null, j = 0;
  }
}
const ue = (e) => e.id == null ? 1 / 0 : e.id, Cr = (e, t) => {
  const n = ue(e) - ue(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function sn(e) {
  Ge = !1, Re = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), C.sort(Cr);
  const t = process.env.NODE_ENV !== "production" ? (n) => on(e, n) : U;
  try {
    for (F = 0; F < C.length; F++) {
      const n = C[F];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Y(n, null, 14);
      }
    }
  } finally {
    F = 0, C.length = 0, Dr(e), Re = !1, lt = null, (C.length || te.length) && sn(e);
  }
}
function on(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Vr) {
      const r = t.ownerInstance, s = r && vn(r.type);
      return ct(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const ne = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Mt().__VUE_HMR_RUNTIME__ = {
  createRecord: He(Ir),
  rerender: He($r),
  reload: He(Tr)
});
const xe = /* @__PURE__ */ new Map();
function Ir(e, t) {
  return xe.has(e) ? !1 : (xe.set(e, {
    initialDef: oe(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function oe(e) {
  return yn(e) ? e.__vccOpts : e;
}
function $r(e, t) {
  const n = xe.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, oe(r.type).render = t), r.renderCache = [], r.effect.dirty = !0, r.update();
  }));
}
function Tr(e, t) {
  const n = xe.get(e);
  if (!n)
    return;
  t = oe(t), St(n.initialDef, t);
  const r = [...n.instances];
  for (const s of r) {
    const o = oe(s.type);
    ne.has(o) || (o !== n.initialDef && St(o, t), ne.add(o)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (ne.add(o), s.ceReload(t.styles), ne.delete(o)) : s.parent ? (s.parent.effect.dirty = !0, ut(s.parent.update)) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  rn(() => {
    for (const s of r)
      ne.delete(
        oe(s.type)
      );
  });
}
function St(e, t) {
  b(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function He(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Q, ve = [];
function cn(e, t) {
  var n, r;
  Q = e, Q ? (Q.enabled = !0, ve.forEach(({ event: s, args: o }) => Q.emit(s, ...o)), ve = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    cn(o, t);
  }), setTimeout(() => {
    Q || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, ve = []);
  }, 3e3)) : ve = [];
}
let S = null, Pr = null;
const Mr = Symbol.for("v-ndc"), Ar = (e) => e.__isSuspense;
function jr(e, t) {
  t && t.pendingBranch ? p(e) ? t.effects.push(...e) : t.effects.push(e) : rn(e);
}
const Fr = Symbol.for("v-scx"), Lr = () => {
  {
    const e = es(Fr);
    return e || process.env.NODE_ENV !== "production" && g(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Hr(e, t) {
  return ln(
    e,
    null,
    process.env.NODE_ENV !== "production" ? b({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
const we = {};
function ln(e, t, {
  immediate: n,
  deep: r,
  flush: s,
  once: o,
  onTrack: i,
  onTrigger: c
} = D) {
  if (t && o) {
    const _ = t;
    t = (...Fe) => {
      _(...Fe), je();
    };
  }
  process.env.NODE_ENV !== "production" && r !== void 0 && typeof r == "number" && g(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !t && (n !== void 0 && g(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && g(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && g(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const u = (_) => {
    g(
      "Invalid watch source: ",
      _,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, f = de, h = (_) => r === !0 ? _ : (
    // for deep: false, only traverse root-level properties
    k(_, r === !1 ? 1 : void 0)
  );
  let l, a = !1, m = !1;
  if (x(e) ? (l = () => e.value, a = J(e)) : ee(e) ? (l = () => h(e), a = !0) : p(e) ? (m = !0, a = e.some((_) => ee(_) || J(_)), l = () => e.map((_) => {
    if (x(_))
      return _.value;
    if (ee(_))
      return h(_);
    if (N(_))
      return Y(_, f, 2);
    process.env.NODE_ENV !== "production" && u(_);
  })) : N(e) ? t ? l = () => Y(e, f, 2) : l = () => (w && w(), ye(
    e,
    f,
    3,
    [$]
  )) : (l = U, process.env.NODE_ENV !== "production" && u(e)), t && r) {
    const _ = l;
    l = () => k(_());
  }
  let w, $ = (_) => {
    w = V.onStop = () => {
      Y(_, f, 4), w = V.onStop = void 0;
    };
  }, Ae;
  if (pt)
    if ($ = U, t ? n && ye(t, f, 3, [
      l(),
      m ? [] : void 0,
      $
    ]) : l(), s === "sync") {
      const _ = Lr();
      Ae = _.__watcherHandles || (_.__watcherHandles = []);
    } else
      return U;
  let K = m ? new Array(e.length).fill(we) : we;
  const z = () => {
    if (!(!V.active || !V.dirty))
      if (t) {
        const _ = V.run();
        (r || a || (m ? _.some((Fe, On) => T(Fe, K[On])) : T(_, K))) && (w && w(), ye(t, f, 3, [
          _,
          // pass undefined as the old value when it's changed for the first time
          K === we ? void 0 : m && K[0] === we ? [] : K,
          $
        ]), K = _);
      } else
        V.run();
  };
  z.allowRecurse = !!t;
  let pe;
  s === "sync" ? pe = z : s === "post" ? pe = () => Dt(z, f && f.suspense) : (z.pre = !0, f && (z.id = f.uid), pe = () => ut(z));
  const V = new jt(l, U, pe), je = () => {
    V.stop();
  };
  return process.env.NODE_ENV !== "production" && (V.onTrack = i, V.onTrigger = c), t ? n ? z() : K = V.run() : s === "post" ? Dt(
    V.run.bind(V),
    f && f.suspense
  ) : V.run(), Ae && Ae.push(je), je;
}
function Kr(e, t, n) {
  const r = this.proxy, s = R(e) ? e.includes(".") ? zr(r, e) : () => r[e] : e.bind(r, r);
  let o;
  N(t) ? o = t : (o = t.handler, n = t);
  const i = us(this), c = ln(s, o.bind(r), n);
  return i(), c;
}
function zr(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
function k(e, t = 1 / 0, n) {
  if (t <= 0 || !v(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, x(e))
    k(e.value, t, n);
  else if (p(e))
    for (let r = 0; r < e.length; r++)
      k(e[r], t, n);
  else if (It(e) || W(e))
    e.forEach((r) => {
      k(r, t, n);
    });
  else if (Pt(e))
    for (const r in e)
      k(e[r], t, n);
  return e;
}
function Ur(e, t) {
  return process.env.NODE_ENV !== "production" && g("withDirectives can only be used inside render functions."), e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function un(e, t) {
  return N(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    b({ name: e.name }, t, { setup: e })
  ) : e;
}
const Wr = (e) => !!e.type.__asyncLoader;
function Br(e, t, n, r) {
  let s;
  const o = n;
  if (p(e) || R(e)) {
    s = new Array(e.length);
    for (let i = 0, c = e.length; i < c; i++)
      s[i] = t(e[i], i, void 0, o);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && g(`The v-for range expect an integer value but got ${e}.`), s = new Array(e);
    for (let i = 0; i < e; i++)
      s[i] = t(i + 1, i, void 0, o);
  } else if (v(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (i, c) => t(i, c, void 0, o)
      );
    else {
      const i = Object.keys(e);
      s = new Array(i.length);
      for (let c = 0, u = i.length; c < u; c++) {
        const f = i[c];
        s[c] = t(e[f], f, c, o);
      }
    }
  else
    s = [];
  return s;
}
function qr(e, t, n = {}, r, s) {
  if (S.isCE || S.parent && Wr(S.parent) && S.parent.isCE)
    return ft("slot", n, r);
  let o = e[t];
  process.env.NODE_ENV !== "production" && o && o.length > 1 && (g(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), o = () => []), o && o._c && (o._d = !1), ce();
  const i = o && an(o(n)), c = os(
    fe,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      i && i.key || `_${t}`
    },
    i || [],
    i && e._ === 1 ? 64 : -2
  );
  return o && o._c && (o._d = !0), c;
}
function an(e) {
  return e.some((t) => hn(t) ? !(t.type === dn || t.type === fe && !an(t.children)) : !0) ? e : null;
}
const Ye = (e) => e ? as(e) ? fs(e) || e.proxy : Ye(e.parent) : null, ie = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ b(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Ne(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Ne(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Ne(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Ne(e.refs) : e.refs,
    $parent: (e) => Ye(e.parent),
    $root: (e) => Ye(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Xr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, ut(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Rr.bind(e.proxy)),
    $watch: (e) => Kr.bind(e)
  })
), Jr = (e) => e === "_" || e === "$", Ke = (e, t) => e !== D && !e.__isScriptSetup && E(e, t), Gr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: o, accessCache: i, type: c, appContext: u } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let f;
    if (t[0] !== "$") {
      const m = i[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (Ke(r, t))
          return i[t] = 1, r[t];
        if (s !== D && E(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && E(f, t)
        )
          return i[t] = 3, o[t];
        if (n !== D && E(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const h = ie[t];
    let l, a;
    if (h)
      return t === "$attrs" ? (y(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && y(e, "get", t), h(e);
    if (
      // css module (injected by vue-loader)
      (l = c.__cssModules) && (l = l[t])
    )
      return l;
    if (n !== D && E(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      a = u.config.globalProperties, E(a, t)
    )
      return a[t];
    process.env.NODE_ENV !== "production" && S && (!R(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== D && Jr(t[0]) && E(s, t) ? g(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === S && g(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: o } = e;
    return Ke(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && E(s, t) ? (g(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== D && E(r, t) ? (r[t] = n, !0) : E(e.props, t) ? (process.env.NODE_ENV !== "production" && g(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && g(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o }
  }, i) {
    let c;
    return !!n[i] || e !== D && E(e, i) || Ke(t, i) || (c = o[0]) && E(c, i) || E(r, i) || E(ie, i) || E(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : E(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Gr.ownKeys = (e) => (g(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function De(e) {
  return p(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Yr(e, t) {
  return !e || !t ? e || t : p(e) && p(t) ? e.concat(t) : b({}, De(e), De(t));
}
function Xr(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = o.get(t);
  let u;
  return c ? u = c : !s.length && !n && !r ? u = t : (u = {}, s.length && s.forEach(
    (f) => Ce(u, f, i, !0)
  ), Ce(u, t, i)), v(t) && o.set(t, u), u;
}
function Ce(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && Ce(e, o, n, !0), s && s.forEach(
    (i) => Ce(e, i, n, !0)
  );
  for (const i in t)
    if (r && i === "expose")
      process.env.NODE_ENV !== "production" && g(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = Zr[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const Zr = {
  data: bt,
  props: Rt,
  emits: Rt,
  // objects
  methods: re,
  computed: re,
  // lifecycle
  beforeCreate: O,
  created: O,
  beforeMount: O,
  mounted: O,
  beforeUpdate: O,
  updated: O,
  beforeDestroy: O,
  beforeUnmount: O,
  destroyed: O,
  unmounted: O,
  activated: O,
  deactivated: O,
  errorCaptured: O,
  serverPrefetch: O,
  // assets
  components: re,
  directives: re,
  // watch
  watch: kr,
  // provide / inject
  provide: bt,
  inject: Qr
};
function bt(e, t) {
  return t ? e ? function() {
    return b(
      N(e) ? e.call(this, this) : e,
      N(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Qr(e, t) {
  return re(Vt(e), Vt(t));
}
function Vt(e) {
  if (p(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function O(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function re(e, t) {
  return e ? b(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Rt(e, t) {
  return e ? p(e) && p(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : b(
    /* @__PURE__ */ Object.create(null),
    De(e),
    De(t ?? {})
  ) : t;
}
function kr(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = b(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = O(e[r], t[r]);
  return n;
}
let xt = null;
function es(e, t, n = !1) {
  const r = de || S;
  if (r || xt) {
    const s = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : xt._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && N(t) ? t.call(r && r.proxy) : t;
    process.env.NODE_ENV !== "production" && g(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && g("inject() can only be used inside setup() or functional components.");
}
const ts = {}, fn = (e) => Object.getPrototypeOf(e) === ts, Dt = jr, ns = (e) => e.__isTeleport, fe = Symbol.for("v-fgt"), rs = Symbol.for("v-txt"), dn = Symbol.for("v-cmt"), Oe = [];
let I = null;
function ce(e = !1) {
  Oe.push(I = e ? null : []);
}
function ss() {
  Oe.pop(), I = Oe[Oe.length - 1] || null;
}
function pn(e) {
  return e.dynamicChildren = I || bn, ss(), I && I.push(e), e;
}
function Se(e, t, n, r, s, o) {
  return pn(
    at(
      e,
      t,
      n,
      r,
      s,
      o,
      !0
    )
  );
}
function os(e, t, n, r, s) {
  return pn(
    ft(
      e,
      t,
      n,
      r,
      s,
      !0
    )
  );
}
function hn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const is = (...e) => gn(
  ...e
), _n = ({ key: e }) => e ?? null, be = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? R(e) || x(e) || N(e) ? { i: S, r: e, k: t, f: !!n } : e : null);
function at(e, t = null, n = null, r = 0, s = null, o = e === fe ? 0 : 1, i = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && _n(t),
    ref: t && be(t),
    scopeId: Pr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: S
  };
  return c ? (dt(u, n), o & 128 && e.normalize(u)) : n && (u.shapeFlag |= R(n) ? 8 : 16), process.env.NODE_ENV !== "production" && u.key !== u.key && g("VNode created with invalid key (NaN). VNode type:", u.type), // avoid a block node from tracking itself
  !i && // has current parent block
  I && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && I.push(u), u;
}
const ft = process.env.NODE_ENV !== "production" ? is : gn;
function gn(e, t = null, n = null, r = 0, s = null, o = !1) {
  if ((!e || e === Mr) && (process.env.NODE_ENV !== "production" && !e && g(`Invalid vnode type when creating vnode: ${e}.`), e = dn), hn(e)) {
    const c = Ie(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && dt(c, n), !o && I && (c.shapeFlag & 6 ? I[I.indexOf(e)] = c : I.push(c)), c.patchFlag |= -2, c;
  }
  if (yn(e) && (e = e.__vccOpts), t) {
    t = cs(t);
    let { class: c, style: u } = t;
    c && !R(c) && (t.class = $e(c)), v(u) && (Je(u) && !p(u) && (u = b({}, u)), t.style = ke(u));
  }
  const i = R(e) ? 1 : Ar(e) ? 128 : ns(e) ? 64 : v(e) ? 4 : N(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Je(e) && (e = d(e), g(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), at(
    e,
    t,
    n,
    r,
    s,
    i,
    o,
    !0
  );
}
function cs(e) {
  return e ? Je(e) || fn(e) ? b({}, e) : e : null;
}
function Ie(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: c, transition: u } = e, f = t ? ls(s || {}, t) : s, h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && _n(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? p(o) ? o.concat(be(t)) : [o, be(t)] : be(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && p(c) ? c.map(mn) : c,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== fe ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ie(e.ssContent),
    ssFallback: e.ssFallback && Ie(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && r && (h.transition = u.clone(h)), h;
}
function mn(e) {
  const t = Ie(e);
  return p(e.children) && (t.children = e.children.map(mn)), t;
}
function En(e = " ", t = 0) {
  return ft(rs, null, e, t);
}
function dt(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (p(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), dt(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !fn(t) ? t._ctx = S : s === 3 && S && (S.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    N(t) ? (t = { default: t, _ctx: S }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [En(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ls(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = $e([t.class, r.class]));
      else if (s === "style")
        t.style = ke([t.style, r.style]);
      else if (Vn(s)) {
        const o = t[s], i = r[s];
        i && o !== i && !(p(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else
        s !== "" && (t[s] = r[s]);
  }
  return t;
}
let de = null;
const Nn = () => de || S;
let Xe;
{
  const e = Mt(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (o) => {
      s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
    };
  };
  Xe = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => de = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => pt = n
  );
}
const us = (e) => {
  const t = de;
  return Xe(e), e.scope.on(), () => {
    e.scope.off(), Xe(t);
  };
};
function as(e) {
  return e.vnode.shapeFlag & 4;
}
let pt = !1;
process.env.NODE_ENV;
function fs(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(gr(ur(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in ie)
          return ie[n](e);
      },
      has(t, n) {
        return n in t || n in ie;
      }
    }));
}
const ds = /(?:^|[-_])(\w)/g, ps = (e) => e.replace(ds, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function vn(e, t = !0) {
  return N(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function wn(e, t, n = !1) {
  let r = vn(t);
  if (!r && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (r = s[1]);
  }
  if (!r && e && e.parent) {
    const s = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    r = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return r ? ps(r) : n ? "App" : "Anonymous";
}
function yn(e) {
  return N(e) && "__vccOpts" in e;
}
const hs = (e, t) => {
  const n = fr(e, t, pt);
  if (process.env.NODE_ENV !== "production") {
    const r = Nn();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function _s(e, t, n = D) {
  const r = Nn();
  if (process.env.NODE_ENV !== "production" && !r)
    return g("useModel() called without active instance."), Ot();
  if (process.env.NODE_ENV !== "production" && !r.propsOptions[0][t])
    return g(`useModel() called with prop "${t}" which is not declared.`), Ot();
  const s = Cn(t), o = $n(t), i = Er((u, f) => {
    let h;
    return Hr(() => {
      const l = e[t];
      T(h, l) && (h = l, f());
    }), {
      get() {
        return u(), n.get ? n.get(h) : h;
      },
      set(l) {
        const a = r.vnode.props;
        !(a && // check if parent has passed v-model
        (t in a || s in a || o in a) && (`onUpdate:${t}` in a || `onUpdate:${s}` in a || `onUpdate:${o}` in a)) && T(l, h) && (h = l, f()), r.emit(`update:${t}`, n.set ? n.set(l) : l);
      }
    };
  }), c = "modelModifiers";
  return i[Symbol.iterator] = () => {
    let u = 0;
    return {
      next() {
        return u < 2 ? { value: u++ ? e[c] || {} : i, done: !1 } : { done: !0 };
      }
    };
  }, i;
}
function gs() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, s = {
    header(l) {
      return v(l) ? l.__isVue ? ["div", e, "VueInstance"] : x(l) ? [
        "div",
        {},
        ["span", e, h(l)],
        "<",
        c(l.value),
        ">"
      ] : ee(l) ? [
        "div",
        {},
        ["span", e, J(l) ? "ShallowReactive" : "Reactive"],
        "<",
        c(l),
        `>${Z(l) ? " (readonly)" : ""}`
      ] : Z(l) ? [
        "div",
        {},
        ["span", e, J(l) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(l),
        ">"
      ] : null : null;
    },
    hasBody(l) {
      return l && l.__isVue;
    },
    body(l) {
      if (l && l.__isVue)
        return [
          "div",
          {},
          ...o(l.$)
        ];
    }
  };
  function o(l) {
    const a = [];
    l.type.props && l.props && a.push(i("props", d(l.props))), l.setupState !== D && a.push(i("setup", l.setupState)), l.data !== D && a.push(i("data", d(l.data)));
    const m = u(l, "computed");
    m && a.push(i("computed", m));
    const w = u(l, "inject");
    return w && a.push(i("injected", w)), a.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: l }]
    ]), a;
  }
  function i(l, a) {
    return a = b({}, a), Object.keys(a).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        l
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(a).map((m) => [
          "div",
          {},
          ["span", r, m + ": "],
          c(a[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(l, a = !0) {
    return typeof l == "number" ? ["span", t, l] : typeof l == "string" ? ["span", n, JSON.stringify(l)] : typeof l == "boolean" ? ["span", r, l] : v(l) ? ["object", { object: a ? d(l) : l }] : ["span", n, String(l)];
  }
  function u(l, a) {
    const m = l.type;
    if (N(m))
      return;
    const w = {};
    for (const $ in l.ctx)
      f(m, $, a) && (w[$] = l.ctx[$]);
    return w;
  }
  function f(l, a, m) {
    const w = l[m];
    if (p(w) && w.includes(a) || v(w) && a in w || l.extends && f(l.extends, a, m) || l.mixins && l.mixins.some(($) => f($, a, m)))
      return !0;
  }
  function h(l) {
    return J(l) ? "ShallowRef" : l.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
process.env.NODE_ENV;
Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function ms(e, t, n, r) {
  e.addEventListener(t, n, r);
}
const Ct = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return p(t) ? (n) => Pn(t, n) : t;
}, ze = Symbol("_assign"), Es = {
  created(e, { value: t }, n) {
    e.checked = Ve(t, n.props.value), e[ze] = Ct(n), ms(e, "change", () => {
      e[ze](Ns(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, r) {
    e[ze] = Ct(r), t !== n && (e.checked = Ve(t, r.props.value));
  }
};
function Ns(e) {
  return "_value" in e ? e._value : e.value;
}
/**
* vue v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function vs() {
  gs();
}
process.env.NODE_ENV !== "production" && vs();
const ws = /* @__PURE__ */ un({
  __name: "BaseButton",
  props: {
    type: { default: "primary" },
    size: { default: "normal" }
  },
  setup(e) {
    const t = e, n = hs(() => `test-lib-${t.type}`);
    return (r, s) => (ce(), Se("button", {
      class: $e(["button", n.value])
    }, [
      qr(r.$slots, "default", {}, void 0)
    ], 2));
  }
}), ys = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, Ss = /* @__PURE__ */ ys(ws, [["__scopeId", "data-v-83c926e5"]]), Os = ["id", "value"], bs = /* @__PURE__ */ un({
  __name: "RadioGroup",
  props: /* @__PURE__ */ Yr({
    options: {}
  }, {
    modelValue: { type: String },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = _s(e, "modelValue"), n = e;
    return (r, s) => (ce(), Se("div", null, [
      (ce(!0), Se(fe, null, Br(n.options, (o) => (ce(), Se("label", {
        key: o.id
      }, [
        Ur(at("input", {
          id: String(o.id),
          "onUpdate:modelValue": s[0] || (s[0] = (i) => t.value = i),
          value: o.value,
          type: "radio"
        }, null, 8, Os), [
          [Es, t.value]
        ]),
        En(" " + Kn(o.value), 1)
      ]))), 128))
    ]));
  }
});
export {
  Ss as BaseButton,
  bs as RadioGroup
};
