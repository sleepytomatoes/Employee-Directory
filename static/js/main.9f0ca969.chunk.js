(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{39:function(e,a,n){},58:function(e,a,n){},64:function(e,a,n){},65:function(e,a,n){},66:function(e,a,n){},67:function(e,a,n){"use strict";n.r(a);var t=n(1),l=n(30),m=n.n(l),c=n(10),o=n(2),i=n(12),r=n(13),s=n(16),p=n(15),h=n(9),d=n(0);var j=function(e){return Object(d.jsxs)("table",{className:"table table-hover",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"ID"}),Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Phone"}),Object(d.jsx)("th",{children:"Email"}),Object(d.jsx)("th",{children:"DOB"})]})}),Object(d.jsx)("tbody",{children:e.results.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.id}),Object(d.jsx)("td",{children:e.employee_name}),Object(d.jsx)("td",{children:e.phone}),Object(d.jsx)("td",{children:e.email}),Object(d.jsx)("td",{children:e.DOB})]})}))})]})},u=function(e){Object(s.a)(n,e);var a=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var t=arguments.length,l=new Array(t),m=0;m<t;m++)l[m]=arguments[m];return(e=a.call.apply(a,[this].concat(l))).state={results:[]},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.setState({results:h})}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"text-center",children:"All Employees"}),Object(d.jsx)(j,{results:this.state.results})]})}}]),n}(t.Component);n(39);var b=function(e){return Object(d.jsx)("div",{className:"jumbotron styleJumbo",style:{backgroundImage:"url(".concat(e.backgroundImage,")")},children:e.children})};var x=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(b,{backgroundImage:"https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg?cs=srgb&dl=pexels-fauxels-3182765.jpg&fm=jpg",children:[Object(d.jsx)("h1",{children:"Employee Directory"}),Object(d.jsx)("h2",{children:"A tool for management"})]})})},O=n(14);var y=function(e){return Object(d.jsx)("form",{children:Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(d.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"search",id:"search",list:"names"}),Object(d.jsx)("datalist",{id:"names",children:e.names.map((function(e){return Object(d.jsx)("option",{value:e},e)}))}),Object(d.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-primary mt-3",children:"Search"})]})})},v=(n(31),function(e){Object(s.a)(n,e);var a=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var t=arguments.length,l=new Array(t),m=0;m<t;m++)l[m]=arguments[m];return(e=a.call.apply(a,[this].concat(l))).state={search:"",results:[],names:[],searchedEmployee:[]},e.searchEmployee=function(a){e.setState({searchedEmployee:h.filter((function(e){return e.employee_name===a}))})},e.handleInputChange=function(a){var n=a.target.name,t=a.target.value;e.setState(Object(O.a)({},n,t))},e.handleFormSubmit=function(a){a.preventDefault(),e.searchEmployee(e.state.search)},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.setState({results:h});var e=[];h.map((function(a){return e.push(a.employee_name)})),this.setState({names:e})}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(y,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange,names:this.state.names}),Object(d.jsx)(j,{results:this.state.searchedEmployee})]})}}]),n}(t.Component));var f=function(){return Object(d.jsx)(v,{})};n(58);var D=function(){return Object(d.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(d.jsx)("div",{children:Object(d.jsxs)("ul",{className:"navbar-nav",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(c.b,{to:"/home",className:"/home"===window.location.pathname?"nav-link active":"nav-link",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(c.b,{to:"/employees",className:"/employees"===window.location.pathname?"nav-link active":"nav-link",children:"All Employees"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(c.b,{to:"/search",className:"/search"===window.location.pathname?"nav-link active":"nav-link",children:"Search Employee"})})]})})})};n(64);var B=function(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("span",{children:"Employee Directory 2020"})})},g=n(33);n(65);var _=function(e){return Object(d.jsx)("main",Object(g.a)({className:"wrapper"},e))};var k=function(){return Object(d.jsx)(c.a,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)(D,{}),Object(d.jsxs)(_,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/Employee-Directory",component:x}),Object(d.jsx)(o.a,{exact:!0,path:"/home",component:x}),Object(d.jsx)(o.a,{exact:!0,path:"/employees",component:u}),Object(d.jsx)(o.a,{exact:!0,path:"/search",component:f})]}),Object(d.jsx)(B,{})]})})};n(66);m.a.render(Object(d.jsx)(k,{}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"id":"1","employee_name":"Sedef Eronat","phone":"1716202144","email":"sedef.eronat@example.com","DOB":"11/19/49"},{"id":"2","employee_name":"Isak Rahman","phone":"34596568","email":"isak.rahman@example.com","DOB":"11/26/62"},{"id":"3","employee_name":"Paige Smith","phone":"4860101387","email":"paige.smith@example.com","DOB":"10/13/81"},{"id":"4","employee_name":"Gilbert Vetter","phone":"01022232302","email":"gilbert.vetter@example.com","DOB":"12/18/95"},{"id":"5","employee_name":"Elisabeth Deckert","phone":"02047459234","email":"elisabeth.deckert@example.com","DOB":"03/15/53"},{"id":"6","employee_name":"Ella L\xf8demel","phone":"30687558","email":"ella.lodemel@example.com","DOB":"06/25/80"},{"id":"7","employee_name":"Charlene Van Wijgerden","phone":"7646420864","email":"charlene.vanwijgerden@example.com","DOB":"06/05/82"},{"id":"8","employee_name":"Yolanda da Cruz","phone":"2369628191","email":"yolanda.dacruz@example.com","DOB":"11/12/87"},{"id":"9","employee_name":"Alex Morris","phone":"0610902227","email":"alex.morris@example.com","DOB":"04/28/61"},{"id":"10","employee_name":"Francis Pries","phone":"02442831146","email":"francis.pries@example.com","DOB":"02/11/65"},{"id":"11","employee_name":"Hunter Mackay","phone":"5552794716","email":"hunter.mackay@example.com","DOB":"09/28/44"},{"id":"12","employee_name":"Brett Baker","phone":"0418495488","email":"brett.baker@example.com","DOB":"09/08/55"},{"id":"13","employee_name":"Armand Boyer","phone":"044933681","email":"armand.boyer@example.com","DOB":"11/18/63"},{"id":"14","employee_name":"Aur\xe9lien Perez","phone":"0756224271","email":"aurelien.perez@example.com","DOB":"04/09/80"},{"id":"15","employee_name":"Maya Philippe","phone":"0279267813","email":"maya.philippe@example.com","DOB":"08/30/97"},{"id":"16","employee_name":"Eetu Rinne","phone":"07693954","email":"eetu.rinne@example.com","DOB":"08/01/90"},{"id":"17","employee_name":"Topias Paavola","phone":"07456331","email":"topias.paavola@example.com","DOB":"08/04/65"},{"id":"18","employee_name":"Naiara Gon\xe7alves","phone":"5994992347","email":"naiara.goncalves@example.com","DOB":"06/24/81"},{"id":"19","employee_name":"Pauline Sawyer","phone":"5557810032","email":"pauline.sawyer@example.com","DOB":"06/13/79"},{"id":"20","employee_name":"M\xe9lody Laurent","phone":"0302334752","email":"melody.laurent@example.com","DOB":"04/13/67"},{"id":"21","employee_name":"Umut Ayaydin","phone":"9810037402","email":"umut.ayaydin@example.com","DOB":"09/07/45"},{"id":"22","employee_name":"Janet Harvey","phone":"01946771629","email":"janet.harvey@example.com","DOB":"11/19/96"},{"id":"23","employee_name":"Alexia Michel","phone":"0519908015","email":"alexia.michel@example.com","DOB":"05/23/52"},{"id":"24","employee_name":"Akseli Wainio","phone":"09960848","email":"akseli.wainio@example.com","DOB":"06/21/67"},{"id":"25","employee_name":"Antoine Bergeron","phone":"7976466689","email":"antoine.bergeron@example.com","DOB":"06/26/86"},{"id":"26","employee_name":"Emmi Hannula","phone":"03799840","email":"emmi.hannula@example.com","DOB":"10/15/50"},{"id":"27","employee_name":"Kenneth Fletcher","phone":"0858919607","email":"kenneth.fletcher@example.com","DOB":"08/21/82"},{"id":"28","employee_name":"Evelyn Taylor","phone":"3790921571","email":"evelyn.taylor@example.com","DOB":"06/18/81"},{"id":"29","employee_name":"Gustavo Castro","phone":"990985137","email":"gustavo.castro@example.com","DOB":"10/18/82"},{"id":"30","employee_name":"Andres Vermulst","phone":"9322930425","email":"andres.vermulst@example.com","DOB":"01/23/57"}]')}},[[67,1,2]]]);
//# sourceMappingURL=main.9f0ca969.chunk.js.map