(this["webpackJsonpcamp-booking"]=this["webpackJsonpcamp-booking"]||[]).push([[0],{19:function(c,e,a){},20:function(c,e,a){},21:function(c,e,a){},23:function(c,e,a){"use strict";a.r(e);var t=a(3),p=a.n(t),n=a(12),m=a.n(n),s=(a(19),a(20),a(14)),i=a(10),o=a(13),r=(a(21),Object(t.createContext)()),d=r.Provider,l=(r.Consumer,r),j=a(26),b=a(27),u=a(0),O=function(){var c=Object(t.useContext)(l);Object(o.a)(c);var e=Object(t.useState)(),a=Object(i.a)(e,2),p=a[0],n=a[1],m=Object(t.useState)([]),r=Object(i.a)(m,2),O=r[0],g=r[1],y=Object(t.useState)(""),f=Object(i.a)(y,2);f[0],f[1];console.log("campSelectedList",O),Object(t.useEffect)((function(){var c=new WebSocket("wss://camp-booking-websocket.herokuapp.com");console.log("ws",c),n(c),c.onopen=function(){console.log("open connection")},c.onclose=function(){console.log("close connection")},c.onmessage=function(c){console.log("event",c),console.log("event.data",JSON.parse(c.data)),g(JSON.parse(c.data))}}),[]);return Object(u.jsx)("div",{className:"booking_container",children:Object(u.jsx)(d,{value:c,children:Object(u.jsxs)("div",{className:"camp_section",children:[[{campId:"01",campArea:"A1",campType:"budget",campName:"\u60a0\u904a\u751f\u6d3b",campCapacity:4,campPrice:2e3},{campId:"02",campArea:"A1",campType:"budget",campName:"\u60a0\u904a\u751f\u6d3b",campCapacity:4,campPrice:2e3},{campId:"03",campArea:"A1",campType:"budget",campName:"\u606c\u975c\u751f\u6d3b",campCapacity:4,campPrice:2e3},{campId:"04",campArea:"A1",campType:"budget",campName:"\u606c\u975c\u751f\u6d3b",campCapacity:4,campPrice:2e3},{campId:"01",campArea:"B1",campType:"fancy",campName:"\u590f\u65e5\u6d77\u6d0b",campCapacity:6,campPrice:4e3},{campId:"02",campArea:"B1",campType:"fancy",campName:"\u590f\u65e5\u6d77\u6d0b",campCapacity:6,campPrice:4e3},{campId:"03",campArea:"B1",campType:"fancy",campName:"\u9b54\u5e7b\u68ee\u6797",campCapacity:6,campPrice:4e3},{campId:"04",campArea:"B1",campType:"fancy",campName:"\u9b54\u5e7b\u68ee\u6797",campCapacity:6,campPrice:4e3}].map((function(c,e){return Object(u.jsxs)("div",{className:"each_camp ".concat(j.a(c,O)?"selected":""),onClick:function(){return function(c){var e=Object(s.a)(O);console.log("campItem",c),j.a(c,e)?e=b.a([c],e):e.push(c),console.log("tempCampList",e),g(e),p.send(JSON.stringify(e))}(c)},children:[Object(u.jsx)("div",{className:"camp_area",children:c.campArea}),Object(u.jsx)("div",{className:"camp_id",children:c.campId}),Object(u.jsx)("div",{className:"camp_type ".concat("budget"===c.campType?"budget":"fancy")}),Object(u.jsxs)("div",{className:"camp_capacity",children:[c.campCapacity,"\u4eba"]}),Object(u.jsxs)("div",{className:"camp_price",children:[c.campPrice,"\u5143"]})]},e)})),Object(u.jsx)("div",{className:"camp"}),Object(u.jsx)("div",{className:"img"})]})})})},g=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(d,{value:{},children:Object(u.jsx)(O,{})})})},y=function(c){c&&c instanceof Function&&a.e(3).then(a.bind(null,28)).then((function(e){var a=e.getCLS,t=e.getFID,p=e.getFCP,n=e.getLCP,m=e.getTTFB;a(c),t(c),p(c),n(c),m(c)}))};m.a.render(Object(u.jsx)(p.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),y()}},[[23,1,2]]]);
//# sourceMappingURL=main.4887800a.chunk.js.map