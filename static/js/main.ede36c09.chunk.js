(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(4),o=n.n(c),a=(n(14),n(3)),i=n.n(a),u=n(5),h=n(6),l=n(7),d=n(9),j=n(8),m=(n(16),n(17),n(0)),f=function(e){return Object(m.jsxs)("div",{className:"card-container",children:[Object(m.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(m.jsx)("h2",{children:e.monster.name}),Object(m.jsx)("p",{children:e.monster.email})]})},p=(n(19),function(e){return Object(m.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(m.jsx)(f,{monster:e},e.id)}))})}),b=(n(20),function(e){var t=e.placeholder,n=e.handleChange;return Object(m.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),x=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({monsters:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,r=t.searchField,s=n.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Monster Holodex"}),Object(m.jsx)(b,{placeholder:"search monsters",handleChange:function(t){return e.setState({searchField:t.target.value})}}),Object(m.jsx)(p,{monsters:s})]})}}]),n}(s.a.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),s(e),c(e),o(e)}))};o.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root")),O()}],[[21,1,2]]]);
//# sourceMappingURL=main.ede36c09.chunk.js.map