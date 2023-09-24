"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=c(function(g,f){
var v=require('@stdlib/math-base-special-betainc/dist'),t=require('@stdlib/math-base-assert-is-nan/dist');function N(e,r,n){return t(e)||t(r)||t(n)||r<=0||n<=0?NaN:e<=0?0:e>=1?1:v(e,r,n)}f.exports=N
});var a=c(function(j,o){
var y=require('@stdlib/utils-constant-function/dist'),d=require('@stdlib/math-base-special-betainc/dist'),u=require('@stdlib/math-base-assert-is-nan/dist');function m(e,r){if(u(e)||u(r)||e<=0||r<=0)return y(NaN);return n;function n(i){return u(i)?NaN:i<=0?0:i>=1?1:d(i,e,r)}}o.exports=m
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=s(),O=a();F(q,"factory",O);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
