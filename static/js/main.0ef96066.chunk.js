(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{227:function(e,t,n){e.exports=n(436)},435:function(e,t,n){},436:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(14),u=n.n(c),o=n(16),l=n.n(o),i=n(20),s=n(40),d=n(478),p=n(81),f=n.n(p),m=(n(119),"https://covid19.mathdro.id/api"),v=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m,t&&"global"!=t&&(n="".concat(m,"/countries/").concat(t)),e.prev=2,e.next=5,f.a.get(n);case 5:return a=e.sent,r=a.data,c={confirmed:r.confirmed,recovered:r.recovered,deaths:r.deaths,lastUpdate:r.lastUpdate},e.abrupt("return",c);case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(i.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(m,"/daily"));case 3:return t=e.sent,n=t.data,e.abrupt("return",n.map((function(e){var t=e.confirmed,n=e.deaths,a=e.reportDate;return{confirmed:t.total,deaths:n.total,date:a}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(i.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(m,"/countries"));case 3:return t=e.sent,n=t.data.countries,e.abrupt("return",n.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),E=n(476),O=n(477),w=n(470),g=Object(w.a)({root:{background:"#ffff",borderRadius:3,border:0,color:"white"},inputRoot:{color:"#0D2451","& .MuiOutlinedInput-notchedOutline":{borderColor:"black"},"&:hover .MuiOutlinedInput-notchedOutline":{borderColor:"black"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"#222"}},clearIndicator:{color:"red"}}),j=function(e){var t=e.setCountry,n=Object(a.useState)([]),c=Object(s.a)(n,2),u=c[0],o=c[1],d=g(),p=[{name:"Global"}];Object(a.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,b();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]);return r.a.createElement("div",null,function(){for(var e=u.map((function(e,t){return e})),t=e.length,n=1;n<t+1;n++)p.push({name:e[n-1]})}(),r.a.createElement(O.a,{onChange:function(e,n){t(null==n?"".toLowerCase():n.name.toLowerCase())},classes:d,options:p,getOptionLabel:function(e){return e.name},renderInput:function(e){return r.a.createElement(E.a,Object.assign({},e,{placeholder:"Search for a Country or Click One Below",variant:"outlined",fullWidth:!0}))}}))},y=n(82),k=n.n(y),x=function(e){var t=e.data,n=t.confirmed,a=t.recovered,c=t.deaths;t.lastUpdate;return n?r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("p",null,"DEATHS: ",r.a.createElement(k.a,{start:0,end:c.value,duration:1.5,separator:","})),r.a.createElement("p",null,"RECOVERED: ",r.a.createElement(k.a,{start:0,end:a.value,duration:1.5,separator:","})),r.a.createElement("p",null,"CONFIRMED CASES: ",r.a.createElement(k.a,{start:0,end:n.value,duration:1.5,separator:","}))):"Loading..."},C=n(179),S=n(21),D=function(e){var t=e.data,n=t.confirmed,c=t.recovered,u=t.deaths,o=e.country,d=Object(a.useState)([]),p=Object(s.a)(d,2),f=p[0],m=p[1];Object(a.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,h();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);f.length&&(S.c,f.map((function(e){return e.date})),f.map((function(e){return e.confirmed})),f.map((function(e){return e.deaths}))),n&&(C.Bar,u.value,c.value,n.value,"Current state in ".concat(o));var v=[{date:"12-02-21",confirmed:555555,deaths:666666},{date:"12-02-22",confirmed:33333,deaths:2222}],b=f.map((function(e){return{date:e.date,confirmed:e.confirmed,deaths:e.deaths}})),E=r.a.createElement(S.e,{width:"99%",height:700},r.a.createElement(S.d,{data:b,margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(S.a,{strokeDasharray:"3 3"}),r.a.createElement(S.g,{dataKey:"date"}),r.a.createElement(S.h,null),r.a.createElement(S.f,null),r.a.createElement(S.b,null),r.a.createElement(S.c,{dot:!1,type:"monotone",dataKey:"confirmed",stroke:"#8884d8"}),r.a.createElement(S.c,{dot:!1,type:"monotone",dataKey:"deaths",stroke:"#82ca9d"})));return r.a.createElement("div",null,(console.log(v[0]),void console.log(b[1])),E)};n(435);var I=function(){var e=Object(a.useState)({}),t=Object(s.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),o=Object(s.a)(u,2),p=o[0],f=o[1];Object(a.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:n=e.sent,c(n),f(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement("h4",null,0==p.length?"GLOBAL STATS":p.toUpperCase()+" STATS"),r.a.createElement("p",null,r.a.createElement("i",null,"Last update:  "),new Date(n.lastUpdate).toDateString()," "),r.a.createElement(j,{setCountry:m}),r.a.createElement(x,{data:n}),r.a.createElement(D,{data:n,country:p})))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root"))}},[[227,1,2]]]);
//# sourceMappingURL=main.0ef96066.chunk.js.map