(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{21:function(e,t,n){e.exports=n(43)},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),u=n.n(c),o=n(2),s=n.n(o),l=n(4),i=n(9),p=n(45),d=n(46),f=n(8),v=n.n(f),h=(n(11),"https://covid19.mathdro.id/api"),m=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,a,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=h,t&&"global"!=t&&(n="".concat(h,"/countries/").concat(t)),e.prev=2,e.next=5,v.a.get(n);case 5:return a=e.sent,r=a.data,c={confirmed:r.confirmed,recovered:r.recovered,deaths:r.deaths,lastUpdate:r.lastUpdate},e.abrupt("return",c);case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();var b=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),o=Object(i.a)(u,2),f=o[0];return o[1],Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,console.log("data is ",t),c(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",null,r.a.createElement(p.a,null),r.a.createElement(d.a,null,r.a.createElement("h4",null,0==f.length?"GLOBAL STATS":f.toUpperCase()+" STATS"),r.a.createElement("p",null,r.a.createElement("i",null,"Last update:  "),new Date(n.lastUpdate).toDateString()," ")))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.d954c5aa.chunk.js.map