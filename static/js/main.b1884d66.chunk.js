(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{104:function(e,t,n){e.exports=n(225)},224:function(e,t,n){},225:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(10),u=n.n(c),o=n(11),l=n.n(o),s=n(14),i=n(26),d=n(266),p=n(45),f=n.n(p),b=(n(61),"https://covid19.mathdro.id/api"),v=function(){var e=Object(s.a)(l.a.mark((function e(t){var n,r,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=b,t&&"global"!=t&&(n="".concat(b,"/countries/").concat(t)),e.prev=2,e.next=5,f.a.get(n);case 5:return r=e.sent,a=r.data,c={confirmed:a.confirmed,recovered:a.recovered,deaths:a.deaths,lastUpdate:a.lastUpdate},e.abrupt("return",c);case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(s.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(b,"/daily"));case 3:return t=e.sent,n=t.data,e.abrupt("return",n.map((function(e){var t=e.confirmed,n=e.deaths,r=e.reportDate;return{confirmed:t.total,deaths:n.total,date:r}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(s.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(b,"/countries"));case 3:return t=e.sent,n=t.data.countries,e.abrupt("return",n.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),E=n(264),O=n(265),g=n(258),w=Object(g.a)({root:{background:"#222",borderRadius:3,border:0,color:"white"},inputRoot:{color:"#bbb","& .MuiOutlinedInput-notchedOutline":{borderColor:"black"},"&:hover .MuiOutlinedInput-notchedOutline":{borderColor:"black"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"#222"}},clearIndicator:{color:"#070707"}}),C=function(e){var t=e.setCountry,n=Object(r.useState)([]),c=Object(i.a)(n,2),u=c[0],o=c[1],d=w(),p=[{name:"Global"}];Object(r.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,h();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]);return a.a.createElement("div",null,function(){for(var e=u.map((function(e,t){return e})),t=e.length,n=1;n<t+1;n++)p.push({name:e[n-1]})}(),a.a.createElement(O.a,{onChange:function(e,n){t(null==n?"".toLowerCase():n.name.toLowerCase())},classes:d,options:p,getOptionLabel:function(e){return e.name},renderInput:function(e){return a.a.createElement(E.a,Object.assign({},e,{placeholder:"Search for a Country or Click One Below",variant:"outlined",fullWidth:!0}))}}))},j=n(46),k=n.n(j),x=function(e){var t=e.data,n=t.confirmed,r=t.recovered,c=t.deaths;t.lastUpdate;return n?a.a.createElement("div",null,a.a.createElement("br",null),a.a.createElement("p",null,"DEATHS: ",a.a.createElement(k.a,{start:0,end:c.value,duration:1.5,separator:","})),a.a.createElement("p",null,"RECOVERED: ",a.a.createElement(k.a,{start:0,end:r.value,duration:1.5,separator:","})),a.a.createElement("p",null,"CONFIRMED CASES: ",a.a.createElement(k.a,{start:0,end:n.value,duration:1.5,separator:","}))):"Loading..."},y=n(56),S=function(e){var t=e.data,n=t.confirmed,c=t.recovered,u=t.deaths,o=e.country,d=Object(r.useState)([]),p=Object(i.a)(d,2),f=p[0],b=p[1];Object(r.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=b,e.next=3,m();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=f.length?a.a.createElement(y.Line,{data:{labels:f.map((function(e){return e.date})),datasets:[{data:f.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#333fff",backgroundColor:"rgba(15, 128, 215, .1)",fill:!0},{data:f.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.2)",fill:!0}]}}):null,h=n?a.a.createElement(y.Bar,{data:{labels:["Deaths","Recovered","Infected"],datasets:[{label:"People",backgroundColor:["rgba(255, 0, 0, 0.5)","rgba(0, 255, 0, 0.5)","rgba(0, 0, 255, 0.5)"],data:[u.value,c.value,n.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(o)},hover:{mode:null}}}):null;return a.a.createElement("div",null,o?h:v)};n(224);var I=function(){var e=Object(r.useState)({}),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(r.useState)(""),o=Object(i.a)(u,2),p=o[0],f=o[1];Object(r.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,console.log("data is ",t),c(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var b=function(){var e=Object(s.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:n=e.sent,console.log("fetchedCountries is ",t),c(n),f(t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement(d.a,null,a.a.createElement("h4",null,0==p.length?"GLOBAL STATS":p.toUpperCase()+" STATS"),a.a.createElement("p",null,a.a.createElement("i",null,"Last update:  "),new Date(n.lastUpdate).toDateString()," "),a.a.createElement(C,{setCountry:b}),a.a.createElement(x,{data:n}),a.a.createElement(S,{data:n,country:p}))};u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(I,null)),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.b1884d66.chunk.js.map