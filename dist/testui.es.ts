import { defineComponent as u, computed as i, openBlock as a, createElementBlock as s, normalizeClass as p, renderSlot as c, mergeModels as m, useModel as _, Fragment as v, renderList as f, withDirectives as y, createElementVNode as V, vModelRadio as g, createTextVNode as B, toDisplayString as b } from "vue";
const k = /* @__PURE__ */ u({
  __name: "BaseButton",
  props: {
    type: { default: "primary" },
    size: { default: "normal" }
  },
  setup(e) {
    const t = e, o = i(() => `test-lib-${t.type}`);
    return (l, r) => (a(), s("button", {
      class: p(["button", o.value])
    }, [
      c(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), x = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [l, r] of t)
    o[l] = r;
  return o;
}, R = /* @__PURE__ */ x(k, [["__scopeId", "data-v-d0645755"]]), M = ["id", "value"], $ = /* @__PURE__ */ u({
  __name: "RadioGroup",
  props: /* @__PURE__ */ m({
    options: {}
  }, {
    modelValue: { type: String },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = _(e, "modelValue"), o = e;
    return (l, r) => (a(), s("div", null, [
      (a(!0), s(v, null, f(o.options, (n) => (a(), s("label", {
        key: n.id
      }, [
        y(V("input", {
          id: String(n.id),
          "onUpdate:modelValue": r[0] || (r[0] = (d) => t.value = d),
          value: n.value,
          type: "radio"
        }, null, 8, M), [
          [g, t.value]
        ]),
        B(" " + b(n.value), 1)
      ]))), 128))
    ]));
  }
});
export {
  R as BaseButton,
  $ as RadioGroup
};
