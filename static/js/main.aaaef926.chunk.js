(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},52:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n.n(c),a=n(28),s=n.n(a),i=(n(37),n(38),n(17)),r=n.n(i),l=n(20),d=n(5),u=n(6),j=n(22),f=(n(40),n(59),j.a.initializeApp({apiKey:"AIzaSyCkF4cag9y7dsYpkKXgFkl3_UkSyAMTOP0",authDomain:"notes-11360.firebaseapp.com",projectId:"notes-11360",storageBucket:"notes-11360.appspot.com",messagingSenderId:"1027385684806",appId:"1:1027385684806:web:767a31f30bd0d173612b47"})),b=f.auth(),O=new j.a.auth.GoogleAuthProvider,x=f.firestore(),p={users:x.collection("users"),notesM:x.collection("notes"),getCurrentTimeStamp:j.a.firestore.FieldValue.serverTimestamp},h=n(1),g=o.a.createContext();function v(){return Object(c.useContext)(g)}function m(e){var t=e.children,n=Object(c.useState)(),o=Object(d.a)(n,2),a=o[0],s=o[1],i=Object(c.useState)(!0),r=Object(d.a)(i,2),l=r[0],u=r[1];Object(c.useEffect)((function(){return b.onAuthStateChanged((function(e){e?(s(e),u(!1)):u(!1)}))}));var j={currentUser:a,logIn:function(){b.signInWithPopup(O).then().catch((function(e){return console.log(e)}))},logOut:function(){return b.signOut()}};return Object(h.jsx)(g.Provider,{value:j,children:!l&&t})}var S=o.a.createContext(),y=function(){return Object(c.useContext)(S)},C=function(e){var t=e.children,n=Object(c.useState)(!1),o=Object(d.a)(n,2),a=o[0],s=o[1],i=Object(c.useState)(""),r=Object(d.a)(i,2),l=r[0],u=r[1],j=Object(c.useState)([]),f=Object(d.a)(j,2),b=f[0],O=f[1],x=Object(c.useState)("#ffffff"),p=Object(d.a)(x,2),g=p[0],v=p[1],m=Object(c.useState)("#000000"),y=Object(d.a)(m,2),C=y[0],N=y[1],k=Object(c.useState)("Sans-serif"),z=Object(d.a)(k,2),I=z[0],E=z[1],F=Object(c.useState)("25"),T=Object(d.a)(F,2),w=T[0],L=T[1],B=Object(c.useState)(""),A=Object(d.a)(B,2),D=A[0],M=A[1],P=Object(c.useState)("title"),U=Object(d.a)(P,2),J={addNote:a,setAddNote:s,text:l,setText:u,notes:b,setNotes:O,noteBackgroundColor:g,setNoteBackgroundColor:v,textColor:C,setTextColor:N,font:I,setFont:E,fontSize:w,setFontSize:L,title:D,setTitle:M,sort:U[0],setSort:U[1]};return Object(h.jsx)(S.Provider,{value:J,children:t})};n(44);function N(){var e=y().setAddNote,t=Object(c.useState)(!0),n=Object(d.a)(t,2),o=n[0],a=n[1];return Object(h.jsxs)(h.Fragment,{children:[!o&&Object(h.jsx)("div",{className:"offline",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Check your internet connection and try again."}),Object(h.jsx)("button",{onClick:function(){return a(!0)},children:"Close"})]})}),Object(h.jsxs)("span",{className:"addNotesBtn",onClick:function(){navigator.onLine&&(console.log("online"),e(!0)),!1===navigator.onLine&&(a(!1),console.log("offline"))},children:[Object(h.jsx)("div",{}),Object(h.jsx)("div",{})]})]})}var k=n(31);n(45),n(46);function z(){var e=Object(c.useRef)(),t=Object(c.useState)(!1),n=Object(d.a)(t,2),o=n[0],a=n[1],s=y(),i=s.font,r=s.setFont,l=function(t){e.current.contains(t.target)||a(!1)};return Object(c.useEffect)((function(){return o?document.addEventListener("mousedown",l):document.removeEventListener("mousedown",l),function(){document.removeEventListener("mousedown",l)}}),[o]),Object(h.jsxs)("div",{style:{zIndex:"".concat(o?"4":"")},ref:e,className:"fontSelect",onClick:function(){return a(!o)},children:[Object(h.jsx)("div",{className:"title",children:"Font"}),Object(h.jsx)("div",{className:"selectDefault",style:{fontFamily:"".concat(i)},children:i}),Object(h.jsx)("div",{className:"fontCon",style:{height:"".concat(o?"250px":""),opacity:"".concat(o?"1":""),pointerEvents:"".concat(o?"all":"")},children:["Sans-serif","Cursive","Fantasy","Pattaya","Dancing Script"].map((function(e){return Object(h.jsxs)("div",{className:"fontOption",style:{},children:[Object(h.jsx)("input",{type:"radio",name:"font",value:e,onChange:function(e){return r(e.target.value)}},e),Object(h.jsx)("div",{className:e,style:{fontFamily:"".concat(e)},children:e})]},e)}))})]})}n(47);function I(){var e=Object(c.useRef)(),t=y(),n=t.fontSize,o=t.setFontSize,a=Object(c.useState)(!1),s=Object(d.a)(a,2),i=s[0],r=s[1],l=function(t){e.current.contains(t.target)||r(!1)};return Object(c.useEffect)((function(){return i?document.addEventListener("mousedown",l):document.removeEventListener("mousedown",l),function(){document.removeEventListener("mousedown",l)}}),[i]),Object(h.jsxs)("div",{ref:e,className:"fontSizeSelect",onClick:function(){return r(!i)},children:[Object(h.jsx)("div",{className:"fontSizeSelectDefault",style:{fontSize:"".concat(n,"px")},children:n}),Object(h.jsx)("div",{className:"fontSizeCon",style:{height:"".concat(i?"210px":""),opacity:"".concat(i?"1":""),pointerEvents:"".concat(i?"all":"")},children:[15,25,35,45].map((function(e){return Object(h.jsxs)("div",{className:"fontSizeOption",style:{},children:[Object(h.jsx)("input",{type:"radio",name:"fontSize",value:e,onChange:function(e){return o(e.target.value)}},e),Object(h.jsx)("div",{className:e,style:{fontSize:"".concat(e,"px")},children:e})]},e)}))})]})}n(48);function E(e){var t=e.color,n=e.setColor,o=e.title,a=e.paddingT,s=e.paddingB,i=e.align_1,r=e.align_2,l=e.colors,u=Object(c.useRef)(),j=Object(c.useState)(!1),f=Object(d.a)(j,2),b=f[0],O=f[1],x=Object(c.useState)(3),p=Object(d.a)(x,2),g=p[0],v=p[1],m=function(e){u.current.contains(e.target)||O(!1)};return Object(c.useEffect)((function(){return b?document.addEventListener("mousedown",m):document.removeEventListener("mousedown",m),function(){document.removeEventListener("mousedown",m)}}),[b]),Object(c.useEffect)((function(){b?v(6):setTimeout((function(){v(1)}),300)}),[b]),Object(h.jsx)("div",{ref:u,className:"selectCon",style:{paddingTop:"".concat(a),paddingBottom:"".concat(s),top:"".concat(i),bottom:"".concat(r),zIndex:"".concat(g)},children:Object(h.jsxs)("div",{className:"select",style:{width:"".concat(b?"95vw":""),height:"".concat(b?"80px":""),borderRadius:"".concat(b?"15px":"")},onClick:function(){O(!b)},children:[Object(h.jsx)("p",{children:o}),Object(h.jsx)("div",{className:"selected",style:{pointerEvents:"".concat(b?"none":""),opacity:"".concat(b?"0":""),background:"".concat(t)},children:Object(h.jsx)("div",{id:"tick-mark"})}),Object(h.jsxs)("div",{className:"colorInput optionCon",style:{width:"".concat(b?"100%":""),opacity:"".concat(b?"1":"")},children:[l.map((function(e){return Object(h.jsxs)("div",{className:"colorContainer option",style:{pointerEvents:"".concat(b?"all":""),margin:"".concat(b?"4%":"")},children:[Object(h.jsx)("div",{className:e,style:{background:"".concat(e)}}),Object(h.jsx)("input",{type:"radio",name:"color",value:e,onChange:function(e){return n(e.target.value)}},e)]},e)})),Object(h.jsxs)("div",{className:"colorContainer option",style:{pointerEvents:"".concat(b?"all":""),margin:"".concat(b?"4%":"")},children:[Object(h.jsx)("div",{}),Object(h.jsx)("input",{type:"color",value:t,onChange:function(e){return n(e.target.value)}})]})]})]})})}n(49);function F(){var e=y(),t=e.setAddNote,n=(e.notes,e.setNotes,e.text),o=e.setText,a=e.noteBackgroundColor,s=e.setNoteBackgroundColor,i=e.textColor,r=e.setTextColor,l=e.font,u=e.setFont,j=e.fontSize,f=e.setFontSize,b=e.title,O=e.setTitle,x=Object(c.useState)(!1),g=Object(d.a)(x,2),m=(g[0],g[1]),S=Object(c.useState)(!1),C=Object(d.a)(S,2),N=C[0],F=C[1],T=Object(c.useState)(!1),w=Object(d.a)(T,2),L=w[0],B=w[1],A=Object(c.useState)(!0),D=Object(d.a)(A,2),M=D[0],P=D[1],U=v().currentUser;return Object(h.jsxs)("div",{className:"formContainer",children:[L&&Object(h.jsx)("div",{className:"saving",children:Object(h.jsx)("div",{children:Object(h.jsx)("p",{children:"saving..."})})}),!M&&Object(h.jsx)("div",{className:"offline",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Check your internet connection and try again."}),Object(h.jsx)("button",{onClick:function(){return P(!0)},children:"Close"})]})}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),navigator.onLine&&(console.log("online"),B(!0),function(){var e=new Date,c="".concat(e.getDate()," ").concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]," ").concat(e.getFullYear());p.users.doc(U.uid).get().then((function(e){if(e.exists){console.log("geting data");var d=e.data().note;console.log("setData"),d=[].concat(Object(k.a)(d),[{title:b,note:n,backgroundColor:a,textColor:i,font:l,fontSize:j,noteId:1e3*Math.random(),date:c}]),console.log("updated data"),p.users.doc(U.uid).update({note:d}).then((function(e){console.log("updated note at server"),o(""),O(""),r("#000000"),u("Sans-serif"),f("25"),s("#ffffff"),B(!1),t(!1)})),console.log("updated server data")}}))}()),0==navigator.onLine&&(P(!1),console.log("offline"))},children:[Object(h.jsx)("input",{className:"titleInput",type:"text",value:b,onChange:function(e){return O(e.target.value)},required:!0,placeholder:"Title...",maxLength:"15",style:{background:"".concat(a),color:"".concat(i),transition:"all 0.35s",fontFamily:"".concat(l)}}),Object(h.jsx)("textarea",{type:"text",value:n,onChange:function(e){return o(e.target.value)},required:!0,placeholder:"Note...",maxLength:"1000",style:{background:"".concat(a),color:"".concat(i),transition:"all 0.35s",fontFamily:"".concat(l),fontSize:"".concat(j,"px")}}),Object(h.jsxs)("div",{className:"selectContainer",children:[Object(h.jsx)(E,{title:"Background",paddingT:"0px",paddingB:"0px",align_1:"0",color:a,setColor:s,colors:["#ffffff","#f2cdaf","#f9e2cf","#fcd9dd","#b6dee7"]}),Object(h.jsx)(E,{title:"Text Color",paddingT:"10px",paddingB:"0px",align_2:"0",color:i,setColor:r,colors:["#000000","#ffffff","#ff0000","#9500ff","#ff00ff"]}),Object(h.jsx)(z,{}),Object(h.jsx)(I,{})]}),Object(h.jsx)("button",{type:"submit",className:"save",onClick:function(e){F(!N);var t=e.target.className,n=e.clientX-e.target.offsetLeft,c=e.clientY-e.target.offsetTop,o=document.createElement("span");o.style.left=n+"px",o.style.top=c+"px",document.querySelector(".".concat(t)).appendChild(o),setTimeout((function(){o.remove()}),500)},children:"Save"})]}),Object(h.jsxs)("button",{className:"inputCloseBtn",onClick:function(){m(!0),document.querySelector(".formContainer").classList.add("close"),setTimeout((function(){t(!1),m(!1)}),300)},children:[Object(h.jsx)("div",{}),Object(h.jsx)("div",{})]})]})}n(52);var T=n.p+"static/media/title.bdb5a219.svg",w=n.p+"static/media/grid.59597fc2.svg";function L(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=(t[0],t[1]),o=Object(c.useState)(!1),a=Object(d.a)(o,2),s=a[0],i=a[1],j=Object(c.useState)(),f=Object(d.a)(j,2),O=f[0],x=f[1],g=Object(u.g)(),m=v(),S=m.logOut,C=m.currentUser,k=function(){var e=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(""),i(!0),e.next=5,S();case 5:b.onAuthStateChanged((function(e){e||g.push("/Notes/login")})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n("Failed to logOUt");case 11:i(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),z=y(),I=z.notes,E=z.addNote,L=z.sort,B=z.setSort;!function(e){for(var t=[],n=e.length-1;n>=0;n--)t.push(e[n])}(I);if(C)p.users.doc(C.uid).get().then((function(e){e.exists||p.users.doc(C.uid).set({note:[],uid:C.uid})}));Object(c.useEffect)((function(){p.users.doc(C.uid).get().then((function(e){var t=e.data().note;x(t)}))}),[E]);var A=function(e){var t=e.target.className,n=document.getElementById("".concat(t));console.log(e.target.style.fontSize),"...read more"===e.target.innerText?(n.style.display="inline",e.target.innerText=" read less"):" read less"===e.target.innerText&&(n.style.display="none",e.target.innerText="...read more")},D=function(e){var t=e.target.id;console.log(t),g.push("/Notes/".concat(t))};return Object(h.jsx)(h.Fragment,{children:E?Object(h.jsx)(F,{}):Object(h.jsxs)("div",{className:"notesContainer",children:[Object(h.jsxs)("h1",{className:"logo",children:["Notes",Object(h.jsx)("button",{onClick:function(){"title"===L?B("grid"):"grid"===L&&B("title")},children:Object(h.jsx)("img",{src:"title"===L?T:w})})]}),Object(h.jsx)("div",{className:"noteCon",children:O&&O.map((function(e){return Object(h.jsxs)("div",{className:"notes",style:{background:"".concat(e.backgroundColor),color:"".concat(e.textColor),fontFamily:"".concat(e.font),fontSize:"".concat(e.fontSize,"px")},onClick:D,id:"show:".concat(e.noteId),children:[Object(h.jsx)("h1",{children:e.title}),Object(h.jsx)("div",{style:{padding:"".concat("title"===L?"0px":"10px")},children:"grid"===L&&(e.note.length>460&&"15"===e.fontSize?Object(h.jsxs)("p",{children:[e.note.slice(0,461),Object(h.jsx)("span",{id:e.noteId,style:{display:"none"},children:e.note.slice(461)}),Object(h.jsx)("a",{onClick:A,style:{fontSize:"".concat(e.fontSize,"px")},className:e.noteId,children:"...read more"})]}):e.note.length>250&&"25"===e.fontSize?Object(h.jsxs)("p",{children:[e.note.slice(0,240),Object(h.jsx)("span",{id:e.noteId,style:{display:"none"},children:e.note.slice(240)}),Object(h.jsx)("a",{onClick:A,style:{fontSize:"".concat(e.fontSize,"px")},className:e.noteId,children:"...read more"})]}):e.note.length>115&&"35"===e.fontSize?Object(h.jsxs)("p",{children:[e.note.slice(0,120),Object(h.jsx)("span",{id:e.noteId,style:{display:"none"},children:e.note.slice(120)}),Object(h.jsx)("a",{onClick:A,style:{fontSize:"".concat(e.fontSize,"px")},className:e.noteId,children:"...read more"})]}):e.note.length>44&&"45"===e.fontSize?Object(h.jsxs)("p",{children:[e.note.slice(0,45),Object(h.jsx)("span",{id:e.noteId,style:{display:"none"},children:e.note.slice(45)}),Object(h.jsx)("a",{onClick:A,style:{fontSize:"".concat(e.fontSize,"px")},className:e.noteId,children:"...read more"})]}):e.note)}),Object(h.jsx)("p",{className:"date",children:e.date})]},e.noteId)}))}),Object(h.jsx)(N,{}),Object(h.jsx)("button",{disabled:s,onClick:k,children:"log out"})]})})}var B=n(30);function A(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=(t[0],t[1]),o=Object(c.useState)(!1),a=Object(d.a)(o,2),s=a[0],i=a[1],j=Object(u.g)(),f=v().logIn;b.onAuthStateChanged((function(e){e&&j.push("/Notes")}));var O=function(){var e=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(""),i(!0),e.next=5,f();case 5:b.onAuthStateChanged((function(e){e&&j.push("/Notes")})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n("Failed to Log in");case 11:i(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("button",{disabled:s,onClick:O,children:"sign in"})})}var D=n(23),M=n(32);function P(e){var t=e.component,n=Object(M.a)(e,["component"]),c=v().currentUser;return Object(h.jsx)(u.b,Object(D.a)(Object(D.a)({},n),{},{render:function(e){return c?Object(h.jsx)(t,Object(D.a)({},e)):Object(h.jsx)(u.a,{to:"/Notes/login"})}}))}var U=function(){return Object(h.jsx)(m,{children:Object(h.jsx)(C,{children:Object(h.jsx)(B.a,{children:Object(h.jsxs)(u.d,{children:[Object(h.jsx)(P,{exact:!0,path:"/Notes",component:L}),Object(h.jsx)(u.b,{path:"/Notes/login",component:A})]})})})})};s.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(U,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.aaaef926.chunk.js.map