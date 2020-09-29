(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{231:function(e,t,a){e.exports=a(433)},432:function(e,t,a){},433:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(15),o=a.n(c),l=a(16),i=a.n(l),u=a(22),s=a(23),d=a(87),m=a.n(d),f=(a(124),"https://covid19.mathdro.id/api"),p=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=f,t&&"global"!==t&&(a="".concat(f,"/countries/").concat(t)),e.prev=2,e.next=5,m.a.get(a);case 5:return n=e.sent,r=n.data,c={confirmed:r.confirmed,recovered:r.recovered,deaths:r.deaths,lastUpdate:r.lastUpdate},e.abrupt("return",c);case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("".concat(f,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,date:n}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("".concat(f,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),E=a(203),b=a(485),g=a(486),x=a(471),y=Object(x.a)({root:{background:"#ffff",borderRadius:3,border:0,color:"white"},inputRoot:{color:"black","& .MuiOutlinedInput-notchedOutline":{borderColor:"grey"},"&:hover .MuiOutlinedInput-notchedOutline":{borderColor:"grey"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"grey"}},clearIndicator:{color:"red"},paperWidth:{marginLeft:"15px",marginRight:"15px"}}),O=function(e){var t=e.setCountry,a=Object(n.useState)([]),c=Object(s.a)(a,2),o=c[0],l=c[1],d=y(),m=[{name:"Global"}];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,v();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]);return r.a.createElement("div",null,r.a.createElement(E.a,{className:d.paperWidth,elevation:0},function(){for(var e=o.map((function(e,t){return e})),t=e.length,a=1;a<t+1;a++)m.push({name:e[a-1]})}(),r.a.createElement(g.a,{onChange:function(e,a){t(null==a?"".toLowerCase():a.name.toLowerCase())},classes:d,options:m,getOptionLabel:function(e){return e.name},renderInput:function(e){return r.a.createElement(b.a,Object.assign({},e,{placeholder:"Search for a Country or Click One Below",variant:"outlined",fullWidth:!0}))}})))},j=a(201),w=a(480),k=a(477),C=a(478),S=a(479),B=a(481),D=a(188),I=a.n(D),A=Object(j.a)({palette:{primary:{main:"#84d4d8"},secondary:{main:"#d88884"},error:{main:"#84d888"}}}),R=Object(x.a)({root:{marginTop:"5px"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},cardContainer:{marginLeft:"15px",marginRight:"15px"}}),L=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate,l=R(),i=function(e,t,a,n){return r.a.createElement(k.a,{justifyContent:"center",className:l.root},r.a.createElement(C.a,{className:a},r.a.createElement(S.a,{color:"textSecondary",gutterBottom:!0,variant:"h5"},e),r.a.createElement(S.a,{color:n,variant:"h5",gutterBottom:!0},r.a.createElement(I.a,{prefix:"+",start:0,end:t,duration:1.5,separator:","})),r.a.createElement(S.a,{color:"textSecondary",gutterBottom:!0},new Date(o).toDateString())))};return a?r.a.createElement("div",{className:"cardContainer cardGrid"},r.a.createElement(w.a,{theme:A},r.a.createElement(B.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(B.a,{item:!0,xs:12,md:4},i("Confirmed Cases",a.value,"confirmed","primary")),r.a.createElement(B.a,{item:!0,xs:12,md:4},i("Deaths",c.value,"deaths","secondary")),r.a.createElement(B.a,{item:!0,xs:12,md:4},i("Recovered",n.value,"recovered","error"))))):"Loading..."},M=a(19),N=(a(181),a(482)),P=a(487),U=Object(x.a)((function(e){return{paperPadding:{marginBottom:"10px",marginLeft:"15px",marginRight:"15px"},buttonAlignment:{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"25px"}}})),z=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,l=e.country,d=e.totalDeaths,m=U(),f=Object(n.useState)([]),p=Object(s.a)(f,2),v=p[0],b=p[1],g=Object(n.useState)([]),x=Object(s.a)(g,2),y=x[0],O=x[1],j=Object(n.useState)("right"),w=Object(s.a)(j,2),k=w[0],C=w[1],B=Object(n.useState)(!0),D=Object(s.a)(B,2),I=D[0],A=D[1],R=Math.PI/180;Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,b(t),0!=v.length&&O(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var L=y.map((function(e){return{date:e.date,confirmed:e.confirmed,deaths:e.deaths}})),z=function(e){var t=e.x,a=e.y,n=(e.stroke,e.payload);return r.a.createElement("g",{transform:"translate(".concat(t,",").concat(a,")")},r.a.createElement("text",{x:0,y:0,dy:16,textAnchor:"end",fill:"#666"},n.value.substring(5)))},F=function(e){if(e){var t=v.slice(-e);O(t)}else O(v)},G=v.length?r.a.createElement("div",null,r.a.createElement(E.a,{className:m.paperPadding},r.a.createElement(S.a,{variant:"h5",align:"center",color:"textSecondary",gutterBottom:!0},"COVID-19 Daily Reports"),r.a.createElement(P.a,{value:k,exclusive:!0,onChange:function(e,t){C(t)},className:m.buttonAlignment,size:"small"},r.a.createElement(N.a,{value:"leftleft",onClick:function(){return F(5)}},"5D"),r.a.createElement(N.a,{value:"left",onClick:function(){return F(30)}},"1M"),r.a.createElement(N.a,{value:"center",onClick:function(){return F(180)}},"6M"),r.a.createElement(N.a,{value:"right",onClick:function(){return F()}},"YTD")),r.a.createElement(M.g,{width:"100%",height:500},r.a.createElement(M.d,{data:L,margin:{top:5,right:40,left:45,bottom:5}},r.a.createElement(M.a,{strokeDasharray:"3 3"}),r.a.createElement(M.i,{dataKey:"date",height:90,tick:r.a.createElement(z,null)}),r.a.createElement(M.j,{tickFormatter:function(e){return e.toLocaleString()}}),r.a.createElement(M.h,{formatter:function(e){return new Intl.NumberFormat("en").format(e)}}),r.a.createElement(M.b,{verticalAlign:"bottom",height:36}),r.a.createElement(M.c,{dot:!1,type:"monotone",dataKey:"confirmed",stroke:"#84d4d8"}),r.a.createElement(M.c,{dot:!1,type:"monotone",dataKey:"deaths",stroke:"#d88884"}))))):r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("p",null," The API ",r.a.createElement("i",null,"https://covid19.mathdro.id/api/daily "),"is ",r.a.createElement("a",{href:"https://covid19.mathdro.id/api/daily"},"currently down")),r.a.createElement("p",null," Line Chart won't render untill it's back up")));var K=a?r.a.createElement(M.g,{width:"100%",height:400,key:"makeid()"},r.a.createElement(M.f,null,r.a.createElement(M.b,{layout:"horizontal",verticalAlign:"bottom",align:"center"}),r.a.createElement(M.e,{data:[{name:"Deaths",value:o.value,fill:"#d88884"},{name:"Infected",value:a.value,fill:"#84d4d8"},{name:"Recovered ",value:c.value,fill:"#84d888"}],stroke:"none",cx:"50%",isAnimationActive:I,onAnimationEnd:function(){return A(!1)},label:function(e){var t=e.cx,a=e.cy,n=e.midAngle,c=e.innerRadius,o=e.outerRadius,l=e.percent,i=(e.index,c+.5*(o-c)),u=t+i*Math.cos(-n*R),s=a+i*Math.sin(-n*R);return r.a.createElement("text",{x:u,y:s,fill:"white",textAnchor:u>t?"start":"end",dominantBaseline:"central"},"".concat((100*l).toFixed(0),"%"))},outerRadius:150,labelLine:!1,fill:"#8884d8",dataKey:"value"}))):null;return r.a.createElement("div",null,l?r.a.createElement("div",null,r.a.createElement(E.a,{className:m.paperPadding},r.a.createElement(S.a,{align:"center",variant:"h4",color:"textSecondary",gutterBottom:!0},l.toUpperCase()),K,r.a.createElement("br",null),r.a.createElement(S.a,{variant:"overline",align:"center",component:"h2",color:"#e0e0e0",gutterBottom:!0},l.charAt(0).toUpperCase()+l.slice(1)," has ",100*(o.value/d).toFixed(4),"% of all of COVID related dealths"))):G)},F=a(483),G=a(484),K=a(476),T=Object(x.a)((function(e){return{root:{flexGrow:1,height:"500px"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},padding:{marginBottom:"50px"}}})),W=function(){var e=T();return r.a.createElement(F.a,{color:"secondary",position:"fixed"},r.a.createElement(G.a,null,r.a.createElement(K.a,{edge:"start",className:e.menuButton,color:"inherit",onClick:function(){return window.location.reload(!1)}},r.a.createElement("i",{class:"fas fa-biohazard"})),r.a.createElement(S.a,{variant:"h6",className:e.title},"COVID-19 Worldwide Tracker")))};a(432);var V=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(s.a)(o,2),d=l[0],m=l[1],f=Object(n.useState)(""),h=Object(s.a)(f,2),v=h[0],E=h[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,c(t),m(t.deaths.value);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var b=function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:a=e.sent,c(a),E(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(W,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(O,{setCountry:b}),r.a.createElement("br",null),r.a.createElement(L,{data:a}),r.a.createElement("br",null),r.a.createElement(z,{data:a,country:v,totalDeaths:d}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root"))}},[[231,1,2]]]);
//# sourceMappingURL=main.8fd5ec09.chunk.js.map