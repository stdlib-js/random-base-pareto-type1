// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.1.0-esm/index.mjs";import{factory as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";import{isPrimitive as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";function j(t,e){return h(t)?h(e)?null:new TypeError(a("0ot72,Go",e)):new TypeError(a("0ot71,NQ",t))}function u(t,e,n){return n/f(t(),1/e)}function g(){var h,f,g,c,v,b;if(0===arguments.length)c=m();else if(1===arguments.length){if(!s(g=arguments[0]))throw new TypeError(a("0ot2V,FD",g));if(i(g,"prng")){if(!r(g.prng))throw new TypeError(a("0ot6u,JI","prng",g.prng));c=g.prng}else c=m(g)}else{if(b=j(h=arguments[0],f=arguments[1]))throw b;if(arguments.length>2){if(!s(g=arguments[2]))throw new TypeError(a("0ot2V,FD",g));if(i(g,"prng")){if(!r(g.prng))throw new TypeError(a("0ot6u,JI","prng",g.prng));c=g.prng}else c=m(g)}else c=m()}return t(v=void 0===h?J:G,"NAME","pareto-type1"),g&&g.prng?(t(v,"seed",null),t(v,"seedLength",null),n(v,"state",o(null),d),t(v,"stateLength",null),t(v,"byteLength",null),t(v,"toJSON",o(null)),t(v,"PRNG",c)):(e(v,"seed",y),e(v,"seedLength",x),n(v,"state",L,E),e(v,"stateLength",w),e(v,"byteLength",N),t(v,"toJSON",T),t(v,"PRNG",c),c=c.normalized),v;function y(){return c.seed}function x(){return c.seedLength}function w(){return c.stateLength}function N(){return c.byteLength}function L(){return c.state}function E(t){c.state=t}function T(){var t={type:"PRNG"};return t.name=v.NAME,t.state=p(c.state),t.params=void 0===h?[]:[h,f],t}function G(){return u(c,h,f)}function J(t,e){return l(t)||l(e)||t<=0||e<=0?NaN:u(c,t,e)}}var c=g();t(c,"factory",g);export{c as default,g as factory};
//# sourceMappingURL=index.mjs.map
