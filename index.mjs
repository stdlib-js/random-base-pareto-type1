// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.1.1-esm/index.mjs";import{factory as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import{isPrimitive as u}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.1.1-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";function h(e,t){return u(e)?u(t)?null:new TypeError(p("invalid argument. Second argument must be a positive number. Value: `%s`.",t)):new TypeError(p("invalid argument. First argument must be a positive number. Value: `%s`.",e))}function f(e,t,n){return n/g(e(),1/t)}function j(){var u,g,j,c,v,b;if(0===arguments.length)c=d();else if(1===arguments.length){if(!s(j=arguments[0]))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",j));if(i(j,"prng")){if(!r(j.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",j.prng));c=j.prng}else c=d(j)}else{if(b=h(u=arguments[0],g=arguments[1]))throw b;if(arguments.length>2){if(!s(j=arguments[2]))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",j));if(i(j,"prng")){if(!r(j.prng))throw new TypeError(p("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",j.prng));c=j.prng}else c=d(j)}else c=d()}return e(v=void 0===u?V:T,"NAME","pareto-type1"),j&&j.prng?(e(v,"seed",null),e(v,"seedLength",null),n(v,"state",o(null),m),e(v,"stateLength",null),e(v,"byteLength",null),e(v,"toJSON",o(null)),e(v,"PRNG",c)):(t(v,"seed",y),t(v,"seedLength",x),n(v,"state",N,E),t(v,"stateLength",w),t(v,"byteLength",L),e(v,"toJSON",O),e(v,"PRNG",c),c=c.normalized),v;function y(){return c.seed}function x(){return c.seedLength}function w(){return c.stateLength}function L(){return c.byteLength}function N(){return c.state}function E(e){c.state=e}function O(){var e={type:"PRNG"};return e.name=v.NAME,e.state=l(c.state),e.params=void 0===u?[]:[u,g],e}function T(){return f(c,u,g)}function V(e,t){return a(e)||a(t)||e<=0||t<=0?NaN:f(c,e,t)}}var c=j();e(c,"factory",j);export{c as default,j as factory};
//# sourceMappingURL=index.mjs.map
