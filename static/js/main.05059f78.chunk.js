(this["webpackJsonploader-scales"]=this["webpackJsonploader-scales"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(20),r=n.n(a),i=(n(30),n.p,n(31),n(44)),d=n(1),l=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Add a Load"}),Object(d.jsxs)(i.a,{children:[Object(d.jsxs)(i.a.Group,{children:[Object(d.jsx)(i.a.Label,{children:"Choose a Customer"}),Object(d.jsxs)(i.a.Control,{as:"select",children:[Object(d.jsx)("option",{value:"Tweed Landscape and Gravel",children:"Tweed Landscape and Gravel"}),Object(d.jsx)("option",{value:"Chinderah Golf Course",children:"Chinderah Golf Course"}),Object(d.jsx)("option",{value:"All Saints Christian College",children:"All Saints Christian College"}),Object(d.jsx)("option",{value:"Tweed Moto X",children:"Tweed Moto X"})]})]}),Object(d.jsxs)(i.a.Group,{children:[Object(d.jsx)(i.a.Label,{children:"Choose a Product"}),Object(d.jsxs)(i.a.Control,{as:"select",children:[Object(d.jsx)("option",{value:"Fill Sand",children:"Fill Sand"}),Object(d.jsx)("option",{value:"Washed Sand",children:"Washed Sand"}),Object(d.jsx)("option",{value:"Top Soil",children:"Top Soil"}),Object(d.jsx)("option",{value:"Screened Sand",children:"Screened Sand"})]}),Object(d.jsx)(i.a.Label,{children:"Weight:"}),Object(d.jsx)(i.a.Control,{as:"input",type:"number",id:"weight",name:"weight",min:"0",max:"100",pattern:"\\d*"}),Object(d.jsx)(i.a.Label,{children:"Number Plate:"}),Object(d.jsx)(i.a.Control,{as:"input",type:"text",id:"numberPlate",name:"numberPlate"})]})]})]})},j=n(24),o=n(15),h=n.n(o),b=n(21),u=n(11),x=n(22),O=n(25),m=(n(37),function(){var e=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:5000/loads");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),p=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){return m().then((function(e){return e.json()})).then((function(e){return s(e)})),function(){}}),[]),Object(d.jsx)("div",{children:Object(d.jsxs)(x.a,{striped:!0,bordered:!0,hover:!0,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"JobNumber",children:"JobNumber"}),Object(d.jsx)("th",{className:"EndTimeDate",children:"Date"}),Object(d.jsx)("th",{className:"UnitWeight",children:"Unit Weight"}),Object(d.jsx)("th",{className:"ProductName",children:"Product"}),Object(d.jsx)("th",{className:"CustomerName",children:"Customer"}),Object(d.jsx)("th",{className:"Edit",children:"Edit"})]})}),Object(d.jsx)("tbody",{children:n.slice(0).reverse().map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"JobNumber",children:e.JobNumber}),Object(d.jsx)("td",{className:"EndTimeDate",children:e.EndTimeDate}),Object(d.jsx)("td",{className:"UnitWeight",children:e.UnitWeight}),Object(d.jsx)("td",{className:"ProductName",children:e.ProductName}),Object(d.jsx)("td",{className:"CustomerName",children:e.CustomerName}),Object(d.jsx)("td",{className:"Edit",children:Object(d.jsx)(u.b,{to:"/edit-load",children:Object(d.jsx)(O.a,{variant:"primary",children:"Edit"})})})]})}))})]})})},f=n(6);n(41);var v=function(){return Object(d.jsx)(u.a,{children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("nav",{children:[Object(d.jsx)(u.b,{to:"/add-loads",children:Object(d.jsx)("button",{children:"Add Loads"})}),Object(d.jsx)(u.b,{to:"/view-loads",children:Object(d.jsx)("button",{children:"View Loads"})})]}),Object(d.jsxs)(f.c,{children:[Object(d.jsx)(f.a,{path:"/add-loads",children:Object(d.jsx)(l,{})}),Object(d.jsx)(f.a,{path:"/view-loads",children:Object(d.jsx)(p,{})})]})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),N()}},[[42,1,2]]]);
//# sourceMappingURL=main.05059f78.chunk.js.map