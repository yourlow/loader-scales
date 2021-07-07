(this["webpackJsonploader-scales"]=this["webpackJsonploader-scales"]||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},43:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(20),r=n.n(s),i=(n(35),n(21)),d=n(22),l=n(29),o=n(26),j=(n.p,n(36),n(49)),b=n(28),h=(n(37),n(1)),u=function(e){return Object(h.jsxs)("div",{className:"add-page",children:[Object(h.jsx)("h1",{children:"Add a Load"}),Object(h.jsxs)(j.a,{children:[Object(h.jsxs)(j.a.Group,{children:[Object(h.jsx)(j.a.Label,{children:"Choose a Customer"}),Object(h.jsxs)(j.a.Control,{as:"select",children:[Object(h.jsx)("option",{value:"Tweed Landscape and Gravel",children:"Tweed Landscape and Gravel"}),Object(h.jsx)("option",{value:"Chinderah Golf Course",children:"Chinderah Golf Course"}),Object(h.jsx)("option",{value:"All Saints Christian College",children:"All Saints Christian College"}),Object(h.jsx)("option",{value:"Tweed Moto X",children:"Tweed Moto X"})]})]}),Object(h.jsxs)(j.a.Group,{children:[Object(h.jsx)(j.a.Label,{children:"Choose a Product"}),Object(h.jsxs)(j.a.Control,{as:"select",children:[Object(h.jsx)("option",{value:"Fill Sand",children:"Fill Sand"}),Object(h.jsx)("option",{value:"Washed Sand",children:"Washed Sand"}),Object(h.jsx)("option",{value:"Top Soil",children:"Top Soil"}),Object(h.jsx)("option",{value:"Screened Sand",children:"Screened Sand"})]})]}),Object(h.jsxs)(j.a.Group,{children:[Object(h.jsx)(j.a.Label,{children:"Weight:"}),Object(h.jsx)(j.a.Control,{as:"input",type:"number",step:"0.01",id:"weight",name:"weight",min:"0",max:"100",pattern:"\\d*"})]}),Object(h.jsxs)(j.a.Group,{children:[Object(h.jsx)(j.a.Label,{children:"Number Plate (Optional):"}),Object(h.jsx)(j.a.Control,{as:"input",type:"text",id:"numberPlate",name:"numberPlate"})]}),Object(h.jsx)(b.a,{variant:"primary",type:"submit",children:"Submit"})]}),Object(h.jsxs)(j.a,{className:"email-submission",children:[Object(h.jsx)(j.a.Group,{children:Object(h.jsxs)(j.a.Control,{as:"select",children:[Object(h.jsx)("option",{value:"TweedLandscape@gmail.com",children:"TweedLandscape@gmail.com"}),Object(h.jsx)("option",{value:"Accounts@chinderahgolf.com",children:"Accounts@chinderahgolf.com"})]})}),Object(h.jsx)(b.a,{variant:"primary",type:"submit",children:"Send Docket"})]})]})},O=n(27),x=n(15),m=n.n(x),p=n(23),v=n(11),f=n(24),N=(n(43),function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://178.128.56.148:5000/loads");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),C=function(){var e=Object(c.useState)([]),t=Object(O.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){return N().then((function(e){return e.json()})).then((function(e){return a(e)})),function(){}}),[]),Object(h.jsx)("div",{className:"load-view",children:Object(h.jsxs)(f.a,{striped:!0,bordered:!0,hover:!0,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:"JobNumber",children:"JobNumber"}),Object(h.jsx)("th",{className:"EndTimeDate",children:"Date"}),Object(h.jsx)("th",{className:"UnitWeight",children:"Unit Weight"}),Object(h.jsx)("th",{className:"ProductName",children:"Product"}),Object(h.jsx)("th",{className:"CustomerName",children:"Customer"}),Object(h.jsx)("th",{className:"Edit",children:"Edit"})]})}),Object(h.jsx)("tbody",{children:n.slice(0).reverse().map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:"JobNumber",children:e.JobNumber}),Object(h.jsx)("td",{className:"EndTimeDate",children:e.EndTimeDate}),Object(h.jsx)("td",{className:"UnitWeight",children:e.UnitWeight}),Object(h.jsx)("td",{className:"ProductName",children:e.ProductName}),Object(h.jsx)("td",{className:"CustomerName",children:e.CustomerName}),Object(h.jsx)("td",{className:"Edit",children:Object(h.jsx)(v.b,{to:"/edit-load",children:Object(h.jsx)(b.a,{variant:"primary",children:"Edit"})})})]})}))})]})})},g=function(e){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Edit Load"})})},S=n(6);n(47);var w=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"nav",children:Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)(v.b,{to:"/add-loads",children:Object(h.jsx)(b.a,{variant:"primary",size:"lg",block:!0,className:"nav-button",children:"Add Load"})}),Object(h.jsx)(v.b,{to:"/view-loads",children:Object(h.jsx)(b.a,{variant:"primary",size:"lg",block:!0,className:"nav-button",children:"View Load"})})]})})}}]),n}(c.Component),y=function(){return Object(h.jsx)(v.a,{children:Object(h.jsx)("div",{children:Object(h.jsxs)(S.c,{children:[Object(h.jsx)(S.a,{path:"/add-loads",component:u}),Object(h.jsx)(S.a,{path:"/view-loads",component:C}),Object(h.jsx)(S.a,{path:"/edit-load",component:g}),Object(h.jsx)(S.a,{component:w})]})})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root")),L()}},[[48,1,2]]]);
//# sourceMappingURL=main.8632bedc.chunk.js.map