(function(t,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(t=typeof globalThis<"u"?globalThis:t||self,e(t.testui={},t.Vue))})(this,function(t,e){"use strict";const i=((o,n)=>{const l=o.__vccOpts||o;for(const[r,s]of n)l[r]=s;return l})(e.defineComponent({__name:"BaseButton",props:{type:{default:"primary"},size:{default:"normal"}},setup(o){const n=o,l=e.computed(()=>`test-lib-${n.type}`);return(r,s)=>(e.openBlock(),e.createElementBlock("button",{class:e.normalizeClass(["button",l.value])},[e.renderSlot(r.$slots,"default",{},void 0,!0)],2))}}),[["__scopeId","data-v-83c926e5"]]),d=["id","value"],c=e.defineComponent({__name:"RadioGroup",props:e.mergeModels({options:{}},{modelValue:{type:String},modelModifiers:{}}),emits:["update:modelValue"],setup(o){const n=e.useModel(o,"modelValue"),l=o;return(r,s)=>(e.openBlock(),e.createElementBlock("div",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(l.options,a=>(e.openBlock(),e.createElementBlock("label",{key:a.id},[e.withDirectives(e.createElementVNode("input",{id:String(a.id),"onUpdate:modelValue":s[0]||(s[0]=p=>n.value=p),value:a.value,type:"radio"},null,8,d),[[e.vModelRadio,n.value]]),e.createTextVNode(" "+e.toDisplayString(a.value),1)]))),128))]))}});t.BaseButton=i,t.RadioGroup=c,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});
