(this["webpackJsonploader-scales"]=this["webpackJsonploader-scales"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},28:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(16),i=c.n(r),a=(c(24),c.p,c(25),c(0)),d=function(e){return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{children:[Object(a.jsx)("label",{for:"customer",children:"Choose a customer"}),Object(a.jsxs)("select",{id:"customer",name:"customer",children:[Object(a.jsx)("option",{value:"Tweed Landscape and Gravel",children:"Tweed Landscape and Gravel"}),Object(a.jsx)("option",{value:"Chinderah Golf Course",children:"Chinderah Golf Course"}),Object(a.jsx)("option",{value:"All Saints Christian College",children:"All Saints Christian College"}),Object(a.jsx)("option",{value:"Tweed Moto X",children:"Tweed Moto X"})]}),Object(a.jsx)("label",{for:"product",children:"Choose a Product"}),Object(a.jsxs)("select",{id:"product",name:"products",children:[Object(a.jsx)("option",{value:"Fill Sand",children:"Fill Sand"}),Object(a.jsx)("option",{value:"Washed Sand",children:"Washed Sand"}),Object(a.jsx)("option",{value:"Top Soil",children:"Top Soil"}),Object(a.jsx)("option",{value:"Screened Sand",children:"Screened Sand"})]}),Object(a.jsx)("lable",{for:"weight",children:"Weight: "}),Object(a.jsx)("input",{type:"number",id:"weight",name:"weight",min:"0",max:"100",pattern:"\\d*"}),Object(a.jsx)("submit",{children:"Submit"})]})})},l=c(19),o=c(12),j=c.n(o),h=c(17),b=c(8),u=(c(28),function(){var e=Object(h.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:5000/loads");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),O=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){return u().then((function(e){return e.json()})).then((function(e){return s(e)})),function(){}}),[]),Object(a.jsx)("div",{children:Object(a.jsxs)("table",{className:"table",children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{className:"JobNumber",children:"JobNumber"}),Object(a.jsx)("th",{className:"EndTimeDate",children:"Date"}),Object(a.jsx)("th",{className:"UnitWeight",children:"Unit Weight"}),Object(a.jsx)("th",{className:"ProductName",children:"Product"}),Object(a.jsx)("th",{className:"CustomerName",children:"Customer"}),Object(a.jsx)("th",{className:"Edit",children:"Edit"})]}),c.slice(0).reverse().map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"JobNumber",children:e.JobNumber}),Object(a.jsx)("td",{className:"EndTimeDate",children:e.EndTimeDate}),Object(a.jsx)("td",{className:"UnitWeight",children:e.UnitWeight}),Object(a.jsx)("td",{className:"ProductName",children:e.ProductName}),Object(a.jsx)("td",{className:"CustomerName",children:e.CustomerName}),Object(a.jsx)("td",{className:"Edit",children:Object(a.jsx)(b.b,{to:"/edit-load",children:Object(a.jsx)("button",{className:"table-Button",children:"Edit"})})})]})}))]})})},x=c(2);var m=function(){return Object(a.jsx)(b.a,{children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("nav",{children:[Object(a.jsx)(b.b,{to:"/add-loads",children:Object(a.jsx)("button",{children:"Add Loads"})}),Object(a.jsx)(b.b,{to:"/view-loads",children:Object(a.jsx)("button",{children:"View Loads"})})]}),Object(a.jsxs)(x.c,{children:[Object(a.jsx)(x.a,{path:"/add-loads",children:Object(a.jsx)(d,{})}),Object(a.jsx)(x.a,{path:"/view-loads",children:Object(a.jsx)(O,{})})]})]})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(m,{})}),document.getElementById("root")),p()}},[[34,1,2]]]);
//# sourceMappingURL=main.5b28267d.chunk.js.map