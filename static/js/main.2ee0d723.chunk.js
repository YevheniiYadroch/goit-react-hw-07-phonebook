(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{38:function(t,e,n){},59:function(t,e,n){},61:function(t,e,n){},62:function(t,e,n){},63:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var a={};n.r(a),n.d(a,"addContact",(function(){return d})),n.d(a,"deleteContact",(function(){return b})),n.d(a,"searchContact",(function(){return h}));var c={};n.r(c),n.d(c,"fetchContacts",(function(){return C})),n.d(c,"pushContacts",(function(){return v}));var r=n(0),o=n.n(r),s=n(9),i=n.n(s),u=n(7),l=(n(38),n(3)),d=Object(l.b)("contacts/add"),b=Object(l.b)("contacts/delete"),h=Object(l.b)("contacts/search"),j=n(8),f=n.n(j),m=n(17),p=n(6),O=n.n(p),C=Object(l.c)("contacts/fetchContacts",Object(m.a)(f.a.mark((function t(){var e,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("http://localhost:3000/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))),v=Object(l.c)("contacts/pushContacts",function(){var t=Object(m.a)(f.a.mark((function t(e){var n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("http://localhost:3000/contacts");case 2:if(n=t.sent,a=n.data,!(e.length>a.length)){t.next=7;break}return t.next=7,O.a.post("http://localhost:3000/contacts",e[e.length-1]);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),g=function(t){return t.contacts.items},x=function(t){return t.contacts.filter},y=n(2),_=n(10),F=n(11),A=n(13),N=n(12),k=(n(59),n(1)),w=function(t){Object(A.a)(n,t);var e=Object(N.a)(n);function n(){var t;Object(_.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).initialState={name:"",number:""},t.state=t.initialState,t.handleFormReset=function(){t.setState((function(){return t.initialState}))},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(y.a)({},a,c))},t}return Object(F.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(k.jsxs)("form",{className:"ContactForm",onReset:this.handleFormReset,onSubmit:this.props.onChange,children:[Object(k.jsx)("label",{htmlFor:"name",className:"ContactForm__name",children:"Name"}),Object(k.jsx)("input",{className:"ContactForm__input",value:e,type:"text",name:"name",id:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange}),Object(k.jsx)("label",{htmlFor:"number",className:"ContactForm__number",children:"Number"}),Object(k.jsx)("input",{className:"ContactForm__input",value:n,type:"tel",name:"number",id:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange}),Object(k.jsx)("button",{type:"submit",className:"ContactForm__button",children:"Add contact"})]})}}]),n}(r.Component),S=w,L=(n(61),function(t){Object(A.a)(n,t);var e=Object(N.a)(n);function n(){return Object(_.a)(this,n),e.apply(this,arguments)}return Object(F.a)(n,[{key:"render",value:function(){return Object(k.jsxs)("div",{className:"Filter",children:[Object(k.jsx)("h3",{className:"Filter__title",children:"Find contacts by name"}),Object(k.jsx)("input",{type:"text",name:"search",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.props.onChange})]})}}]),n}(r.Component)),z=L;var D=function(t){var e=t.props;return Object(k.jsxs)("p",{className:"ContactList__text",children:[e.name,": ",e.number]})};n(62);var Z=function(t){var e=t.props,n=t.onDelete;return Object(k.jsx)("ul",{className:"ContactList",children:e.map((function(t){return Object(k.jsxs)("li",{className:"ContactList__item",children:[Object(k.jsx)(D,{props:t}),Object(k.jsx)("button",{className:"ContactList__button","data-id":t.id,onClick:n,type:"button",children:"Delete"})]},t.id)}))})};n(63);var B,J,T,q=Object(u.b)((function(t){return{contacts:g(t),filter:x(t)}}),(function(t){return{onAdd:function(e){return t(a.addContact(e))},onDelete:function(e){return t(a.deleteContact(e))},onSearch:function(e){return t(a.searchContact(e))}}}))((function(t){var e=t.contacts,n=t.filter,a=t.onAdd,o=t.onSearch,s=t.onDelete,i=Object(u.c)();Object(r.useEffect)((function(){i(c.fetchContacts())}),[i]),Object(r.useEffect)((function(){0!==e.length&&i(c.pushContacts(e))}),[e]);var l=e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}));return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)("h1",{children:"Phonebook"}),Object(k.jsx)(S,{onChange:a}),Object(k.jsx)("h2",{children:"Contacts"}),Object(k.jsx)(z,{onChange:o}),Object(k.jsx)(Z,{props:l,onDelete:s})]})})),E=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))},M=n(27),P=n(66),R=n(5),I=Object(l.d)("",Object(y.a)({},h,(function(t,e){return e.payload.currentTarget.value}))),$=Object(l.d)([],(B={},Object(y.a)(B,d,(function(t,e){var n=e.payload;n.preventDefault();var a=n.target;if(t.some((function(t){return t.name===n.target.children.name.value})))return alert("".concat(n.target.children.name.value," is already in contacts")),void a.reset();var c=[].concat(Object(M.a)(t),[{id:Object(P.a)(),name:n.target.children.name.value,number:n.target.children.number.value}]);return a.reset(),c})),Object(y.a)(B,b,(function(t,e){var n=e.payload;return O.a.delete("http://localhost:3000/contacts/".concat(n.target.dataset.id)),t.filter((function(t){return t.id!==n.target.dataset.id}))})),Object(y.a)(B,C.fulfilled,(function(t,e){return e.payload})),Object(y.a)(B,v.fulfilled,(function(t,e){return e.payload})),B)),G=Object(l.d)(!1,(J={},Object(y.a)(J,C.pending,(function(){return!0})),Object(y.a)(J,C.fulfilled,(function(){return!1})),Object(y.a)(J,C.rejected,(function(){return!1})),J)),H=Object(l.d)(null,(T={},Object(y.a)(T,C.rejected,(function(t,e){return e.payload})),Object(y.a)(T,C.pending,(function(){return null})),T)),K=Object(R.b)({items:$,filter:I,isLoading:G,error:H}),Q=Object(l.a)({reducer:{contacts:K}});i.a.render(Object(k.jsx)(o.a.StrictMode,{children:Object(k.jsx)(u.a,{store:Q,children:Object(k.jsx)(q,{})})}),document.getElementById("root")),E()}},[[64,1,2]]]);
//# sourceMappingURL=main.2ee0d723.chunk.js.map