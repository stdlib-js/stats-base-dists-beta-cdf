// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-betainc@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.0-esm/index.mjs";function r(t,s,r){return n(t)||n(s)||n(r)||s<=0||r<=0?NaN:t<=0?0:t>=1?1:e(t,s,r)}function i(t,r){return n(t)||n(r)||t<=0||r<=0?s(NaN):function(s){if(n(s))return NaN;if(s<=0)return 0;if(s>=1)return 1;return e(s,t,r)}}t(r,"factory",i);export{r as default,i as factory};
//# sourceMappingURL=index.mjs.map
