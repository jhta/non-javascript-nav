!function(n){function t(o){if(e[o])return e[o].exports;var c=e[o]={exports:{},id:o,loaded:!1};return n[o].call(c.exports,c,c.exports,t),c.loaded=!0,c.exports}var e={};return t.m=n,t.c=e,t.p="",t(0)}([function(n,t){"use strict";function e(){d.forEach(function(n){n.checked=!1})}function o(n){d.forEach(function(t){t.id!=n&&(t.checked=!1)})}function c(){f.style.display="block"}function i(){f.style.display="none"}function r(n){n.preventDefault(),e(),i()}function u(n){n.target.checked?(c(),o(n.target.id)):i()}function a(){f.addEventListener("click",r),d.forEach(function(n){n.onclick=u})}var d=void 0,f=void 0;setTimeout(function(){d=document.querySelectorAll("input[name='navigation']"),f=document.getElementById("overlay"),a()},500)}]);
//# sourceMappingURL=navigation.js.map