(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{37:function(t,e,n){},38:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){},46:function(t,e,n){},47:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){},57:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),a=n(28),s=n.n(a),r=(n(37),n(38),n(14)),i=n.n(r),u=n(15),l=n(5),d=n(6),j=n(22),f=(n(40),n(58),j.a.initializeApp({apiKey:"AIzaSyCkF4cag9y7dsYpkKXgFkl3_UkSyAMTOP0",authDomain:"notes-11360.firebaseapp.com",projectId:"notes-11360",storageBucket:"notes-11360.appspot.com",messagingSenderId:"1027385684806",appId:"1:1027385684806:web:767a31f30bd0d173612b47"})),b=f.auth(),O=new j.a.auth.GoogleAuthProvider,p=f.firestore(),x={users:p.collection("users"),notesM:p.collection("notes"),getCurrentTimeStamp:j.a.firestore.FieldValue.serverTimestamp},v=n(2),m=o.a.createContext();function h(){return Object(c.useContext)(m)}function g(t){var e=t.children,n=Object(c.useState)(),o=Object(l.a)(n,2),a=o[0],s=o[1],r=Object(c.useState)(!0),i=Object(l.a)(r,2),u=i[0],d=i[1];Object(c.useEffect)((function(){return b.onAuthStateChanged((function(t){t?(s(t),d(!1)):d(!1)}))}));var j={currentUser:a,logIn:function(){b.signInWithPopup(O).then().catch((function(t){return console.log(t)}))},logOut:function(){return b.signOut()}};return Object(v.jsx)(m.Provider,{value:j,children:!u&&e})}var S=o.a.createContext(),C=function(){return Object(c.useContext)(S)},y=function(t){var e=t.children,n=Object(c.useState)(!1),o=Object(l.a)(n,2),a=o[0],s=o[1],r=Object(c.useState)(""),i=Object(l.a)(r,2),u=i[0],d=i[1],j=Object(c.useState)([]),f=Object(l.a)(j,2),b=f[0],O=f[1],p=Object(c.useState)("#ffffff"),x=Object(l.a)(p,2),m=x[0],h=x[1],g=Object(c.useState)("#000000"),C=Object(l.a)(g,2),y=C[0],N=C[1],k=Object(c.useState)("Sans-serif"),w=Object(l.a)(k,2),E=w[0],z=w[1],F=Object(c.useState)("25"),T=Object(l.a)(F,2),I=T[0],B=T[1],A=Object(c.useState)(""),L=Object(l.a)(A,2),D={addNote:a,setAddNote:s,text:u,setText:d,notes:b,setNotes:O,noteBackgroundColor:m,setNoteBackgroundColor:h,textColor:y,setTextColor:N,font:E,setFont:z,fontSize:I,setFontSize:B,title:L[0],setTitle:L[1]};return Object(v.jsx)(S.Provider,{value:D,children:e})};n(44);function N(){var t=C().setAddNote;return Object(v.jsxs)("span",{className:"addNotesBtn",onClick:function(){t(!0)},children:[Object(v.jsx)("div",{}),Object(v.jsx)("div",{})]})}var k=n(31);n(45),n(46);function w(){var t=Object(c.useRef)(),e=Object(c.useState)(!1),n=Object(l.a)(e,2),o=n[0],a=n[1],s=C(),r=s.font,i=s.setFont,u=function(e){t.current.contains(e.target)||a(!1)};return Object(c.useEffect)((function(){return o?document.addEventListener("mousedown",u):document.removeEventListener("mousedown",u),function(){document.removeEventListener("mousedown",u)}}),[o]),Object(v.jsxs)("div",{style:{zIndex:"".concat(o?"4":"")},ref:t,className:"fontSelect",onClick:function(){return a(!o)},children:[Object(v.jsx)("div",{className:"title",children:"Font"}),Object(v.jsx)("div",{className:"selectDefault",style:{fontFamily:"".concat(r)},children:r}),Object(v.jsx)("div",{className:"fontCon",style:{height:"".concat(o?"250px":""),opacity:"".concat(o?"1":""),pointerEvents:"".concat(o?"all":"")},children:["Sans-serif","Cursive","Fantasy","Pattaya","Dancing Script"].map((function(t){return Object(v.jsxs)("div",{className:"fontOption",style:{},children:[Object(v.jsx)("input",{type:"radio",name:"font",value:t,onChange:function(t){return i(t.target.value)}},t),Object(v.jsx)("div",{className:t,style:{fontFamily:"".concat(t)},children:t})]},t)}))})]})}n(47);function E(){var t=Object(c.useRef)(),e=C(),n=e.fontSize,o=e.setFontSize,a=Object(c.useState)(!1),s=Object(l.a)(a,2),r=s[0],i=s[1],u=function(e){t.current.contains(e.target)||i(!1)};return Object(c.useEffect)((function(){return r?document.addEventListener("mousedown",u):document.removeEventListener("mousedown",u),function(){document.removeEventListener("mousedown",u)}}),[r]),Object(v.jsxs)("div",{ref:t,className:"fontSizeSelect",onClick:function(){return i(!r)},children:[Object(v.jsx)("div",{className:"fontSizeSelectDefault",style:{fontSize:"".concat(n,"px")},children:n}),Object(v.jsx)("div",{className:"fontSizeCon",style:{height:"".concat(r?"210px":""),opacity:"".concat(r?"1":""),pointerEvents:"".concat(r?"all":"")},children:[15,25,35,45].map((function(t){return Object(v.jsxs)("div",{className:"fontSizeOption",style:{},children:[Object(v.jsx)("input",{type:"radio",name:"fontSize",value:t,onChange:function(t){return o(t.target.value)}},t),Object(v.jsx)("div",{className:t,style:{fontSize:"".concat(t,"px")},children:t})]},t)}))})]})}n(48);function z(t){var e=t.color,n=t.setColor,o=t.title,a=t.paddingT,s=t.paddingB,r=t.align_1,i=t.align_2,u=t.colors,d=Object(c.useRef)(),j=Object(c.useState)(!1),f=Object(l.a)(j,2),b=f[0],O=f[1],p=Object(c.useState)(3),x=Object(l.a)(p,2),m=x[0],h=x[1],g=function(t){d.current.contains(t.target)||O(!1)};return Object(c.useEffect)((function(){return b?document.addEventListener("mousedown",g):document.removeEventListener("mousedown",g),function(){document.removeEventListener("mousedown",g)}}),[b]),Object(c.useEffect)((function(){b?h(6):setTimeout((function(){h(1)}),300)}),[b]),Object(v.jsx)("div",{ref:d,className:"selectCon",style:{paddingTop:"".concat(a),paddingBottom:"".concat(s),top:"".concat(r),bottom:"".concat(i),zIndex:"".concat(m)},children:Object(v.jsxs)("div",{className:"select",style:{width:"".concat(b?"95vw":""),height:"".concat(b?"80px":""),borderRadius:"".concat(b?"15px":"")},onClick:function(){O(!b)},children:[Object(v.jsx)("p",{children:o}),Object(v.jsx)("div",{className:"selected",style:{pointerEvents:"".concat(b?"none":""),opacity:"".concat(b?"0":""),background:"".concat(e)},children:Object(v.jsx)("div",{id:"tick-mark"})}),Object(v.jsxs)("div",{className:"colorInput optionCon",style:{width:"".concat(b?"100%":""),opacity:"".concat(b?"1":"")},children:[u.map((function(t){return Object(v.jsxs)("div",{className:"colorContainer option",style:{pointerEvents:"".concat(b?"all":""),margin:"".concat(b?"4%":"")},children:[Object(v.jsx)("div",{className:t,style:{background:"".concat(t)}}),Object(v.jsx)("input",{type:"radio",name:"color",value:t,onChange:function(t){return n(t.target.value)}},t)]},t)})),Object(v.jsxs)("div",{className:"colorContainer option",style:{pointerEvents:"".concat(b?"all":""),margin:"".concat(b?"4%":"")},children:[Object(v.jsx)("div",{}),Object(v.jsx)("input",{type:"color",value:e,onChange:function(t){return n(t.target.value)}})]})]})]})})}function F(){var t=C(),e=t.setAddNote,n=(t.notes,t.setNotes,t.text),o=t.setText,a=t.noteBackgroundColor,s=t.setNoteBackgroundColor,r=t.textColor,d=t.setTextColor,j=t.font,f=t.setFont,b=t.fontSize,O=t.setFontSize,p=t.title,m=t.setTitle,g=Object(c.useState)(!1),S=Object(l.a)(g,2),y=S[0],N=S[1],F=Object(c.useState)(!1),T=Object(l.a)(F,2),I=T[0],B=T[1],A=Object(c.useState)(!1),L=Object(l.a)(A,2),D=L[0],P=L[1],U=h().currentUser,_=function(){var t=Object(u.a)(i.a.mark((function t(c){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),P(!0),t.next=4,void x.users.doc(U.uid).get().then((function(t){if(t.exists){console.log("geting data");var c=t.data().note;console.log("setData"),c=[].concat(Object(k.a)(c),[{title:p,note:n,backgroundColor:a,textColor:r,font:j,fontSize:b,noteId:1e3*Math.random()}]),console.log("updated data"),x.users.doc(U.uid).update({note:c}).then((function(t){console.log("updated note at server"),o(""),m(""),d("#000000"),f("Sans-serif"),O("25"),s("#ffffff"),P(!1),e(!1)})),console.log("updated server data")}}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"formContainer",children:[D&&Object(v.jsx)("div",{className:"saving",children:"Saving..."}),Object(v.jsxs)("form",{onSubmit:_,children:[Object(v.jsx)("input",{className:"titleInput",type:"text",value:p,onChange:function(t){return m(t.target.value)},required:!0,placeholder:"Title...",style:{background:"".concat(a),color:"".concat(r),transition:"all 0.35s",fontFamily:"".concat(j)}}),Object(v.jsx)("textarea",{type:"text",value:n,onChange:function(t){return o(t.target.value)},required:!0,placeholder:"Note...",style:{background:"".concat(a),color:"".concat(r),transition:"all 0.35s",fontFamily:"".concat(j),fontSize:"".concat(b,"px")}}),Object(v.jsxs)("div",{className:"selectContainer",children:[Object(v.jsx)(z,{title:"Background",paddingT:"0px",paddingB:"0px",align_1:"0",color:a,setColor:s,colors:["#ffffff","#f2cdaf","#f9e2cf","#fcd9dd","#b6dee7"]}),Object(v.jsx)(z,{title:"Text Color",paddingT:"10px",paddingB:"0px",align_2:"0",color:r,setColor:d,colors:["#000000","#ffffff","#ff0000","#9500ff","#ff00ff"]}),Object(v.jsx)(w,{}),Object(v.jsx)(E,{})]}),Object(v.jsx)("button",{type:"submit",className:"save",onClick:function(t){B(!I);var e=t.target.className,n=t.clientX-t.target.offsetLeft,c=t.clientY-t.target.offsetTop,o=document.createElement("span");o.style.left=n+"px",o.style.top=c+"px",document.querySelector(".".concat(e)).appendChild(o),setTimeout((function(){o.remove()}),500)},children:"Save"})]}),Object(v.jsxs)("button",{className:"inputCloseBtn",onClick:function(){N(!0),e(!1),N(!1)},children:[Object(v.jsx)("div",{className:y?"close-1":""}),Object(v.jsx)("div",{className:y?"close-2":""})]})]})}n(49);function T(){var t=Object(c.useState)(""),e=Object(l.a)(t,2),n=(e[0],e[1]),o=Object(c.useState)(!1),a=Object(l.a)(o,2),s=a[0],r=a[1],j=Object(c.useState)(),f=Object(l.a)(j,2),O=f[0],p=f[1],m=Object(d.g)(),g=h(),S=g.logOut,y=g.currentUser,k=function(){var t=Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(""),r(!0),t.next=5,S();case 5:b.onAuthStateChanged((function(t){t||m.push("/Notes/login")})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n("Failed to logOUt");case 11:r(!1);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),w=C(),E=w.notes,z=w.addNote;!function(t){for(var e=[],n=t.length-1;n>=0;n--)e.push(t[n])}(E);if(y)x.users.doc(y.uid).get().then((function(t){t.exists||x.users.doc(y.uid).set({note:[],uid:y.uid})}));return Object(c.useEffect)(Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.users.doc(y.uid).get().then((function(t){var e=t.data().note;console.log(e),p(e),console.log(O)}));case 2:case"end":return t.stop()}}),t)}))),[z]),Object(v.jsx)(v.Fragment,{children:z?Object(v.jsx)(F,{}):Object(v.jsxs)("div",{className:"notesContainer",children:[Object(v.jsx)("ul",{children:O&&O.map((function(t){return Object(v.jsx)("li",{style:{background:"".concat(t.backgroundColor),color:"".concat(t.textColor),fontFamily:"".concat(t.font),fontSize:"".concat(t.fontSize,"px")},children:t.title},t.noteId)}))}),Object(v.jsx)(N,{}),Object(v.jsx)("button",{disabled:s,onClick:k,children:"log out"})]})})}var I=n(30);function B(){var t=Object(c.useState)(""),e=Object(l.a)(t,2),n=(e[0],e[1]),o=Object(c.useState)(!1),a=Object(l.a)(o,2),s=a[0],r=a[1],j=Object(d.g)(),f=h().logIn;b.onAuthStateChanged((function(t){t&&j.push("/Notes")}));var O=function(){var t=Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(""),r(!0),t.next=5,f();case 5:b.onAuthStateChanged((function(t){t&&j.push("/Notes")})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),n("Failed to Log in");case 11:r(!1);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("button",{disabled:s,onClick:O,children:"sign in"})})}var A=n(23),L=n(32);function D(t){var e=t.component,n=Object(L.a)(t,["component"]),c=h().currentUser;return Object(v.jsx)(d.b,Object(A.a)(Object(A.a)({},n),{},{render:function(t){return c?Object(v.jsx)(e,Object(A.a)({},t)):Object(v.jsx)(d.a,{to:"/Notes/login"})}}))}var P=function(){return Object(v.jsx)(g,{children:Object(v.jsx)(y,{children:Object(v.jsx)(I.a,{children:Object(v.jsxs)(d.d,{children:[Object(v.jsx)(D,{exact:!0,path:"/Notes",component:T}),Object(v.jsx)(d.b,{path:"/Notes/login",component:B})]})})})})};s.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)(P,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.73cb4624.chunk.js.map