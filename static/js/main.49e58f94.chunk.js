(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{29:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n.n(c),s=n(30),a=n.n(s),i=(n(39),n(40),n(9)),r=n.n(i),l=n(15),d=n(3),u=n(23),j=(n(42),n(61),u.a.initializeApp({apiKey:"AIzaSyCkF4cag9y7dsYpkKXgFkl3_UkSyAMTOP0",authDomain:"notes-11360.firebaseapp.com",projectId:"notes-11360",storageBucket:"notes-11360.appspot.com",messagingSenderId:"1027385684806",appId:"1:1027385684806:web:767a31f30bd0d173612b47"})),f=j.auth(),b=new u.a.auth.GoogleAuthProvider,x=j.firestore(),O={users:x.collection("users"),notesM:x.collection("notes"),getCurrentTimeStamp:u.a.firestore.FieldValue.serverTimestamp},h=n(1),m=o.a.createContext();function v(){return Object(c.useContext)(m)}function p(e){var t=e.children,n=Object(c.useState)(),o=Object(d.a)(n,2),s=o[0],a=o[1],i=Object(c.useState)(!0),r=Object(d.a)(i,2),l=r[0],u=r[1];Object(c.useEffect)((function(){return f.onAuthStateChanged((function(e){e?(a(e),u(!1)):u(!1)}))}));var j={currentUser:s,logIn:function(){f.signInWithPopup(b).then().catch((function(e){return console.log(e)}))},logOut:function(){return f.signOut()}};return Object(h.jsx)(m.Provider,{value:j,children:!l&&t})}var g=o.a.createContext(),y=function(){return Object(c.useContext)(g)},N=function(e){var t=e.children,n=Object(c.useState)(!1),o=Object(d.a)(n,2),s=o[0],a=o[1],i=Object(c.useState)(""),r=Object(d.a)(i,2),l=r[0],u=r[1],j=Object(c.useState)([]),f=Object(d.a)(j,2),b=f[0],x=f[1],O=Object(c.useState)("#ffffff"),m=Object(d.a)(O,2),v=m[0],p=m[1],y=Object(c.useState)("#000000"),N=Object(d.a)(y,2),S=N[0],C=N[1],k=Object(c.useState)("Sans-serif"),L=Object(d.a)(k,2),w=L[0],z=L[1],B=Object(c.useState)("25"),T=Object(d.a)(B,2),E=T[0],F=T[1],I=Object(c.useState)(""),A=Object(d.a)(I,2),W=A[0],q=A[1],D=Object(c.useState)("title"),_=Object(d.a)(D,2),M=_[0],P=_[1],J=Object(c.useState)({}),U=Object(d.a)(J,2),Y=U[0],R=U[1],X=Object(c.useState)(!1),V=Object(d.a)(X,2),K=V[0],G=V[1],Z=Object(c.useState)(!1),H=Object(d.a)(Z,2),Q=H[0],$=H[1],ee=Object(c.useState)(!1),te=Object(d.a)(ee,2),ne={addNote:s,setAddNote:a,text:l,setText:u,notes:b,setNotes:x,noteBackgroundColor:v,setNoteBackgroundColor:p,textColor:S,setTextColor:C,font:w,setFont:z,fontSize:E,setFontSize:F,title:W,setTitle:q,sort:M,setSort:P,currentNote:Y,setCurrentNote:R,preview:K,setPreview:G,edit:Q,setEdit:$,sideNavbar:te[0],setSideNavbar:te[1]};return Object(h.jsx)(g.Provider,{value:ne,children:t})};n(46);function S(){var e=y().setAddNote,t=Object(c.useState)(!0),n=Object(d.a)(t,2),o=n[0],s=n[1];return Object(h.jsxs)(h.Fragment,{children:[!o&&Object(h.jsx)("div",{className:"offline",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Check your internet connection and try again."}),Object(h.jsx)("button",{onClick:function(){return s(!0)},children:"Close"})]})}),Object(h.jsxs)("span",{className:"addNotesBtn",onClick:function(){navigator.onLine&&e(!0),!1===navigator.onLine&&s(!1)},children:[Object(h.jsx)("div",{}),Object(h.jsx)("div",{})]})]})}var C=n(22);n(29),n(47);function k(e){e.Font;var t=Object(c.useRef)(),n=Object(c.useState)(!1),o=Object(d.a)(n,2),s=o[0],a=o[1],i=y(),r=i.font,l=i.setFont,u=function(e){t.current.contains(e.target)||a(!1)};return Object(c.useEffect)((function(){return s?document.addEventListener("mousedown",u):document.removeEventListener("mousedown",u),function(){document.removeEventListener("mousedown",u)}}),[s]),Object(h.jsxs)("div",{style:{zIndex:"".concat(s?"4":"")},ref:t,className:"fontSelect",onClick:function(){return a(!s)},children:[Object(h.jsx)("div",{className:"title",children:"Font"}),Object(h.jsx)("div",{className:"selectDefault",style:{fontFamily:"".concat(r)},children:r}),Object(h.jsx)("div",{className:"fontCon",style:{height:"".concat(s?"250px":""),opacity:"".concat(s?"1":""),pointerEvents:"".concat(s?"all":"")},children:["Sans-serif","Cursive","Fantasy","Pattaya","Dancing Script"].map((function(e){return Object(h.jsxs)("div",{className:"fontOption",style:{},children:[Object(h.jsx)("input",{type:"radio",name:"font",value:e,onChange:function(e){return l(e.target.value)}},e),Object(h.jsx)("div",{className:e,style:{fontFamily:"".concat(e)},children:e})]},e)}))})]})}n(48);function L(){var e=Object(c.useRef)(),t=y(),n=t.fontSize,o=t.setFontSize,s=Object(c.useState)(!1),a=Object(d.a)(s,2),i=a[0],r=a[1],l=function(t){e.current.contains(t.target)||r(!1)};return Object(c.useEffect)((function(){return i?document.addEventListener("mousedown",l):document.removeEventListener("mousedown",l),function(){document.removeEventListener("mousedown",l)}}),[i]),Object(h.jsxs)("div",{ref:e,className:"fontSizeSelect",onClick:function(){return r(!i)},children:[Object(h.jsx)("div",{className:"fontSizeSelectDefault",style:{fontSize:"".concat(n,"px")},children:n}),Object(h.jsx)("div",{className:"fontSizeCon",style:{height:"".concat(i?"210px":""),opacity:"".concat(i?"1":""),pointerEvents:"".concat(i?"all":"")},children:[15,25,35,45].map((function(e){return Object(h.jsxs)("div",{className:"fontSizeOption",style:{},children:[Object(h.jsx)("input",{type:"radio",name:"fontSize",value:e,onChange:function(e){return o(e.target.value)}},e),Object(h.jsx)("div",{className:e,style:{fontSize:"".concat(e,"px")},children:e})]},e)}))})]})}n(49);function w(e){var t=e.color,n=e.setColor,o=e.title,s=e.paddingT,a=e.paddingB,i=e.align_1,r=e.align_2,l=e.colors,u=Object(c.useRef)(),j=Object(c.useState)(!1),f=Object(d.a)(j,2),b=f[0],x=f[1],O=Object(c.useState)(3),m=Object(d.a)(O,2),v=m[0],p=m[1],g=function(e){u.current.contains(e.target)||x(!1)};return Object(c.useEffect)((function(){return b?document.addEventListener("mousedown",g):document.removeEventListener("mousedown",g),function(){document.removeEventListener("mousedown",g)}}),[b]),Object(c.useEffect)((function(){b?p(6):setTimeout((function(){p(1)}),300)}),[b]),Object(h.jsx)("div",{ref:u,className:"selectCon",style:{paddingTop:"".concat(s),paddingBottom:"".concat(a),top:"".concat(i),bottom:"".concat(r),zIndex:"".concat(v)},children:Object(h.jsxs)("div",{className:"select",style:{width:"".concat(b?"95vw":""),height:"".concat(b?"80px":""),borderRadius:"".concat(b?"15px":"")},onClick:function(){x(!b)},children:[Object(h.jsx)("p",{children:o}),Object(h.jsx)("div",{className:"selected",style:{pointerEvents:"".concat(b?"none":""),opacity:"".concat(b?"0":""),background:"".concat(t)},children:Object(h.jsx)("div",{id:"tick-mark"})}),Object(h.jsxs)("div",{className:"colorInput optionCon",style:{width:"".concat(b?"100%":""),opacity:"".concat(b?"1":"")},children:[l.map((function(e){return Object(h.jsxs)("div",{className:"colorContainer option",style:{pointerEvents:"".concat(b?"all":""),margin:"".concat(b?"4%":"")},children:[Object(h.jsx)("div",{className:e,style:{background:"".concat(e)}}),Object(h.jsx)("input",{type:"radio",name:"color",value:e,onChange:function(e){return n(e.target.value)}},e)]},e)})),Object(h.jsxs)("div",{className:"colorContainer option",style:{pointerEvents:"".concat(b?"all":""),margin:"".concat(b?"4%":"")},children:[Object(h.jsx)("div",{}),Object(h.jsx)("input",{type:"color",value:t,onChange:function(e){return n(e.target.value)}})]})]})]})})}var z=n(62);function B(){var e=y(),t=e.setAddNote,n=e.text,o=e.setText,s=e.noteBackgroundColor,a=e.setNoteBackgroundColor,i=e.textColor,r=e.setTextColor,l=e.font,u=e.setFont,j=e.fontSize,f=e.setFontSize,b=e.title,x=e.setTitle,m=Object(c.useState)(!1),p=Object(d.a)(m,2),g=(p[0],p[1]),N=Object(c.useState)(!1),S=Object(d.a)(N,2),B=S[0],T=S[1],E=Object(c.useState)(!1),F=Object(d.a)(E,2),I=F[0],A=F[1],W=Object(c.useState)(!0),q=Object(d.a)(W,2),D=q[0],_=q[1],M=v().currentUser,P=Object(z.a)();return Object(h.jsxs)("div",{className:"formContainer",children:[I&&Object(h.jsxs)("div",{className:"loading",children:[Object(h.jsx)("svg",{className:"svgLoad2",height:"100",width:"100",children:Object(h.jsx)("circle",{cx:"50",cy:"50",r:"40",strokeLinecap:"round",strokeWidth:"10",fill:"none"})}),Object(h.jsx)("svg",{className:"svgLoad1",height:"100",width:"100",children:Object(h.jsx)("circle",{cx:"50",cy:"50",r:"40",stroke:"#fff",strokeLinecap:"round",strokeWidth:"10",fill:"none"})})]}),!D&&Object(h.jsx)("div",{className:"offline",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Check your internet connection and try again."}),Object(h.jsx)("button",{onClick:function(){return _(!0)},children:"Close"})]})}),Object(h.jsxs)("div",{className:"navInput",children:[Object(h.jsx)("button",{className:"backInput",onClick:function(){g(!0),document.querySelector(".formContainer").classList.add("close"),setTimeout((function(){t(!1),g(!1)}),300)},children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 119.57 219.15",style:{fill:"none",stroke:"#fff",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"23px",width:"37px",height:"37px",overflow:"visible"},children:Object(h.jsx)("g",{id:"Layer_2","data-name":"Layer 2",children:Object(h.jsxs)("g",{id:"Layer_1-2","data-name":"Layer 1",children:[Object(h.jsx)("line",{className:"cls-1",x1:"10",y1:"109.57",x2:"109.57",y2:"10"}),Object(h.jsx)("line",{className:"cls-1",x1:"10",y1:"109.57",x2:"109.57",y2:"209.15"})]})})})}),Object(h.jsx)("h1",{children:"Add Note"})]}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),navigator.onLine&&(console.log("online"),A(!0),function(){var e=new Date,c="".concat(e.getDate()," ").concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]," ").concat(e.getFullYear());O.users.doc(M.uid).get().then((function(e){if(e.exists){console.log("geting data");var d=e.data().note;console.log("setData"),d=[].concat(Object(C.a)(d),[{title:b,note:n,backgroundColor:s,textColor:i,font:l,fontSize:j,noteId:P,date:c}]),console.log("updated data"),O.users.doc(M.uid).update({note:d}).then((function(e){console.log("updated note at server"),o(""),x(""),r("#000000"),u("Sans-serif"),f("25"),a("#ffffff"),A(!1),t(!1)})),console.log("updated server data")}}))}()),!1===navigator.onLine&&(_(!1),console.log("offline"))},children:[Object(h.jsxs)("div",{className:"inputCon",children:[Object(h.jsx)("input",{className:"titleInput",type:"text",value:b,onChange:function(e){return x(e.target.value)},required:!0,placeholder:"Title...",maxLength:"15",style:{background:"".concat(s),color:"".concat(i),transition:"all 0.35s",fontFamily:"".concat(l)}}),Object(h.jsxs)("div",{className:"chaLimit",children:[b.length,"/15"]})]}),Object(h.jsxs)("div",{className:"textareaCon",children:[Object(h.jsx)("textarea",{type:"text",value:n,onChange:function(e){return o(e.target.value)},required:!0,placeholder:"Note...",maxLength:"1000",style:{background:"".concat(s),color:"".concat(i),transition:"all 0.35s",fontFamily:"".concat(l),fontSize:"".concat(j,"px")}}),Object(h.jsxs)("div",{className:"chaLimit",children:[n.length,"/1000"]})]}),Object(h.jsxs)("div",{className:"selectContainer",children:[Object(h.jsx)(w,{title:"Background",paddingT:"0px",paddingB:"0px",align_1:"0",color:s,setColor:a,colors:["#ffffff","#f2cdaf","#f9e2cf","#fcd9dd","#b6dee7"]}),Object(h.jsx)(w,{title:"Text Color",paddingT:"10px",paddingB:"0px",align_2:"0",color:i,setColor:r,colors:["#000000","#ffffff","#ff0000","#9500ff","#ff00ff"]}),Object(h.jsx)(k,{}),Object(h.jsx)(L,{})]}),Object(h.jsx)("button",{type:"submit",className:"save",onClick:function(e){T(!B);var t=e.target.className,n=e.clientX-e.target.offsetLeft,c=e.clientY-e.target.offsetTop,o=document.createElement("span");o.style.left=n+"px",o.style.top=c+"px",document.querySelector(".".concat(t)).appendChild(o),setTimeout((function(){o.remove()}),500)},children:"Save"})]})]})}n(50),n(51);function T(e){var t=e.note,n=v().currentUser;return Object(c.useEffect)((function(){n&&O.users.doc(n.uid)}),[]),Object(h.jsx)("div",{className:"previewCon",children:Object(h.jsxs)("div",{className:"preview",style:{background:"".concat(t.backgroundColor),color:"".concat(t.textColor),fontFamily:"".concat(t.font)},children:[Object(h.jsx)("h1",{children:t.title}),Object(h.jsx)("div",{style:{fontSize:"".concat(t.fontSize,"px")},children:t.note}),Object(h.jsx)("p",{children:t.date})]})})}function E(){var e=y(),t=e.setAddNote,n=e.text,o=e.setText,s=e.noteBackgroundColor,a=e.setNoteBackgroundColor,i=e.textColor,u=e.setTextColor,j=e.font,f=e.setFont,b=e.fontSize,x=e.setFontSize,m=e.title,p=e.setTitle,g=e.currentNote,N=e.setPreview,S=e.setEdit,B=Object(c.useState)(!1),T=Object(d.a)(B,2),E=(T[0],T[1]),F=Object(c.useState)(!1),I=Object(d.a)(F,2),A=I[0],W=I[1],q=Object(c.useState)(!1),D=Object(d.a)(q,2),_=D[0],M=D[1],P=Object(c.useState)(!0),J=Object(d.a)(P,2),U=J[0],Y=J[1],R=v().currentUser,X=Object(z.a)();Object(c.useEffect)((function(){p(g.title),o(g.note),u(g.textColor),a(g.backgroundColor),f(g.font),x(g.fontSize)}),[]);var V=function(){var e=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,document.querySelector(".formContainer").classList.add("close");case 2:setTimeout((function(){o(""),p(""),u("#000000"),f("Sans-serif"),x("25"),a("#ffffff"),N(!1),E(!0),t(!1),E(!1),S(!1)}),300);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"formContainer",children:[_&&Object(h.jsxs)("div",{className:"loading",children:[Object(h.jsx)("svg",{className:"svgLoad2",height:"100",width:"100",children:Object(h.jsx)("circle",{cx:"50",cy:"50",r:"40",strokeLinecap:"round",strokeWidth:"10",fill:"none"})}),Object(h.jsx)("svg",{className:"svgLoad1",height:"100",width:"100",children:Object(h.jsx)("circle",{cx:"50",cy:"50",r:"40",stroke:"#fff",strokeLinecap:"round",strokeWidth:"10",fill:"none"})})]}),!U&&Object(h.jsx)("div",{className:"offline",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Check your internet connection and try again."}),Object(h.jsx)("button",{onClick:function(){return Y(!0)},children:"Close"})]})}),Object(h.jsxs)("div",{className:"navInput",children:[Object(h.jsx)("button",{className:"backInput",onClick:V,children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 119.57 219.15",style:{fill:"none",stroke:"#fff",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"23px",width:"37px",height:"37px",overflow:"visible"},children:Object(h.jsx)("g",{id:"Layer_2","data-name":"Layer 2",children:Object(h.jsxs)("g",{id:"Layer_1-2","data-name":"Layer 1",children:[Object(h.jsx)("line",{className:"cls-1",x1:"10",y1:"109.57",x2:"109.57",y2:"10"}),Object(h.jsx)("line",{className:"cls-1",x1:"10",y1:"109.57",x2:"109.57",y2:"209.15"})]})})})}),Object(h.jsx)("h1",{children:"Edit Note"})]}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),navigator.onLine&&(console.log("online"),M(!0),function(){var e=new Date,c="".concat(e.getDate()," ").concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]," ").concat(e.getFullYear());O.users.doc(R.uid).get().then((function(e){if(e.exists){console.log("geting data");var r=e.data().note,l=-1;r.map((function(e){l+=1,e.noteId!==g.noteId||r.splice(l,1)})),console.log("setData"),r=[].concat(Object(C.a)(r),[{title:m,note:n,backgroundColor:s,textColor:i,font:j,fontSize:b,noteId:X,date:c}]),console.log("updated data"),O.users.doc(R.uid).update({note:r}).then((function(e){console.log("updated note at server"),o(""),p(""),u("#000000"),f("Sans-serif"),x("25"),a("#ffffff"),M(!1),t(!1),N(!1),S(!1)})),console.log("updated server data")}}))}()),!1===navigator.onLine&&(Y(!1),console.log("offline"))},children:[Object(h.jsxs)("div",{className:"inputCon",children:[Object(h.jsx)("input",{className:"titleInput",type:"text",value:m,onChange:function(e){return p(e.target.value)},required:!0,placeholder:"Title...",maxLength:"15",style:{background:"".concat(s),color:"".concat(i),transition:"all 0.35s",fontFamily:"".concat(j)}}),Object(h.jsxs)("div",{className:"chaLimit",children:[m.length,"/15"]})]}),Object(h.jsxs)("div",{className:"textareaCon",children:[Object(h.jsx)("textarea",{type:"text",value:n,onChange:function(e){return o(e.target.value)},required:!0,placeholder:"Note...",maxLength:"1000",style:{background:"".concat(s),color:"".concat(i),transition:"all 0.35s",fontFamily:"".concat(j),fontSize:"".concat(b,"px")}}),Object(h.jsxs)("div",{className:"chaLimit",children:[n.length,"/1000"]})]}),Object(h.jsxs)("div",{className:"selectContainer",children:[Object(h.jsx)(w,{title:"Background",paddingT:"0px",paddingB:"0px",align_1:"0",color:s,setColor:a,colors:["#ffffff","#f2cdaf","#f9e2cf","#fcd9dd","#b6dee7"]}),Object(h.jsx)(w,{title:"Text Color",paddingT:"10px",paddingB:"0px",align_2:"0",color:i,setColor:u,colors:["#000000","#ffffff","#ff0000","#9500ff","#ff00ff"]}),Object(h.jsx)(k,{}),Object(h.jsx)(L,{})]}),Object(h.jsx)("button",{type:"submit",className:"save",onClick:function(e){W(!A);var t=e.target.className,n=e.clientX-e.target.offsetLeft,c=e.clientY-e.target.offsetTop,o=document.createElement("span");o.style.left=n+"px",o.style.top=c+"px",document.querySelector(".".concat(t)).appendChild(o),setTimeout((function(){o.remove()}),500)},children:"Save"})]})]})}function F(){return Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 208.52 219.6",style:{fill:"none",stroke:"#fff",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"18px",width:"35px",height:"35px",overflow:"visible"},children:Object(h.jsx)("g",{id:"Layer_2","data-name":"Layer 2",children:Object(h.jsxs)("g",{id:"Layer_1-2","data-name":"Layer 1",children:[Object(h.jsx)("line",{className:"cls-1",x1:"10",y1:"43.8",x2:"198.52",y2:"43.8"}),Object(h.jsx)("line",{className:"cls-1",x1:"70.94",y1:"10",x2:"70.94",y2:"34.18"}),Object(h.jsx)("line",{className:"cls-1",x1:"70.94",y1:"10",x2:"137.61",y2:"10.35"}),Object(h.jsx)("line",{className:"cls-1",x1:"137.61",y1:"10.35",x2:"137.61",y2:"36.9"}),Object(h.jsx)("line",{className:"cls-1",x1:"170.94",y1:"43.8",x2:"170.94",y2:"209.6"}),Object(h.jsx)("line",{className:"cls-1",x1:"37.61",y1:"45.04",x2:"37.61",y2:"209.6"}),Object(h.jsx)("line",{className:"cls-1",x1:"37.61",y1:"209.6",x2:"170.94",y2:"209.6"}),Object(h.jsx)("line",{className:"cls-1",x1:"70.64",y1:"76.73",x2:"71.6",y2:"176.27"}),Object(h.jsx)("line",{className:"cls-1",x1:"104.53",y1:"76.73",x2:"104.53",y2:"176.05"}),Object(h.jsx)("line",{className:"cls-1",x1:"137.4",y1:"76.27",x2:"137.61",y2:"176.27"})]})})})}function I(){return Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 120.32 120.15",style:{fill:"#fff",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"18px",width:"35px",height:"35px",overflow:"visible"},children:Object(h.jsx)("g",{id:"Layer_2","data-name":"Layer 2",children:Object(h.jsxs)("g",{id:"Layer_1-2","data-name":"Layer 1",children:[Object(h.jsx)("rect",{x:"0.49",y:"48.35",width:"99.86",height:"42.76",transform:"translate(-34.54 56.08) rotate(-45)"}),Object(h.jsx)("rect",{x:"0.16",y:"89.94",width:"30.14",height:"30.14",transform:"translate(-89.78 120.25) rotate(-90)"}),Object(h.jsx)("path",{d:"M89.31-.59h16.6A3.64,3.64,0,0,1,109.55,3V38.81A3.22,3.22,0,0,1,106.33,42h-17a0,0,0,0,1,0,0V-.59A0,0,0,0,1,89.31-.59Z",transform:"translate(14.47 76.38) rotate(-45)"})]})})})}var A=n(6);n(52);function W(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=(t[0],t[1]),o=Object(c.useState)(""),s=Object(d.a)(o,2),a=(s[0],s[1]),i=Object(A.g)(),u=v().logOut,j=y(),b=(j.sideNavbar,j.setSideNavbar),x=function(){var e=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(""),n(!0),e.next=5,u();case 5:f.onAuthStateChanged((function(e){e||i.push("/Notes/login")})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),a("Failed to logOUt");case 11:n(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"sideNav",children:[Object(h.jsx)("button",{onClick:function(){document.querySelector(".sideNav").classList.add("navBarOut"),setTimeout((function(){b(!1)}),400)},children:Object(h.jsxs)("div",{className:"burger",children:[Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{})]})}),Object(h.jsxs)("div",{className:"optionCon",children:[Object(h.jsx)("div",{className:"themes",children:"Themes"}),Object(h.jsx)("div",{className:"about",children:"About"}),Object(h.jsx)("div",{className:"contact",children:"Contact"}),Object(h.jsx)("div",{className:"logOut",onClick:x,children:"Log Out"})]})]})}function q(){var e=Object(c.useState)(!0),t=Object(d.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)(),a=Object(d.a)(s,2),i=a[0],u=a[1],j=Object(c.useState)({}),f=Object(d.a)(j,2),b=f[0],x=f[1],m=Object(c.useState)(!1),p=Object(d.a)(m,2),g=p[0],N=p[1],C=Object(c.useState)(!1),k=Object(d.a)(C,2),L=k[0],w=k[1],z=v().currentUser,A=y(),q=A.addNote,D=A.setNotes,_=A.sort,M=(A.setSort,A.setCurrentNote),P=A.preview,J=A.setPreview,U=A.edit,Y=A.setEdit,R=A.sideNavbar,X=A.setSideNavbar;if(z)O.users.doc(z.uid).get().then((function(e){e.exists||O.users.doc(z.uid).set({note:[],uid:z.uid})}));Object(c.useEffect)((function(){O.users.doc(z.uid).get().then((function(e){var t=e.data().note;t=function(e){for(var t=[],n=e.length-1;n>=0;n--)t.push(e[n]);return t}(t),u(t),D(t),o(!1)}))}),[q,U,g]);var V=function(e){var t=e.target.id,n=document.getElementById("".concat(t)).dataset;x({note:n.note,title:n.title,backgroundColor:n.backgroundcolor,textColor:n.textcolor,font:n.font,fontSize:n.fontsize,date:n.date,noteId:n.noteid}),M({note:n.note,title:n.title,backgroundColor:n.backgroundcolor,textColor:n.textcolor,font:n.font,fontSize:n.fontsize,date:n.date,noteId:n.noteid}),J(!0)},K=function(){var e=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(!0);case 2:document.querySelector(".delCon").classList.add("openAnime");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,document.querySelector(".delCon").classList.remove("openAnime");case 2:document.querySelector(".delCon").classList.add("cancelAnime"),setTimeout((function(){w(!1)}),300);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=!1,H=function(){var e=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Z=!Z,X(!R);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){Q()}),[R]);var Q=function(){var e=document.querySelector(".burger").children;R?(e.item(0).classList.remove("closeBurger1"),e.item(1).classList.remove("closeBurger2"),e.item(2).classList.remove("closeBurger3"),e.item(0).offsetWidth,e.item(1).offsetWidth,e.item(2).offsetWidth,e.item(0).classList.add("openBurger1"),e.item(1).classList.add("openBurger2"),e.item(2).classList.add("openBurger3")):R||(e.item(0).classList.remove("openBurger1"),e.item(1).classList.remove("openBurger2"),e.item(2).classList.remove("openBurger3"),e.item(0).offsetWidth,e.item(1).offsetWidth,e.item(2).offsetWidth,e.item(0).classList.add("closeBurger1"),e.item(1).classList.add("closeBurger2"),e.item(2).classList.add("closeBurger3"))};return Object(h.jsxs)(h.Fragment,{children:[R&&Object(h.jsx)(W,{}),P&&!U&&Object(h.jsxs)("div",{className:"preCon",children:[Object(h.jsxs)("div",{className:"navPreview",children:[Object(h.jsx)("button",{className:"back",onClick:function(){return document.querySelector(".preCon").classList.add("back1"),void setTimeout((function(){J(!1)}),400)},children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 119.57 219.15",style:{fill:"none",stroke:"#fff",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"23px",width:"37px",height:"37px",overflow:"visible"},children:Object(h.jsx)("g",{id:"Layer_2","data-name":"Layer 2",children:Object(h.jsxs)("g",{id:"Layer_1-2","data-name":"Layer 1",children:[Object(h.jsx)("line",{className:"cls-1",x1:"10",y1:"109.57",x2:"109.57",y2:"10"}),Object(h.jsx)("line",{className:"cls-1",x1:"10",y1:"109.57",x2:"109.57",y2:"209.15"})]})})})}),Object(h.jsx)("h1",{children:"Note"}),Object(h.jsx)("button",{className:"edit",onClick:function(){return Y(!0)},children:Object(h.jsx)(I,{})}),Object(h.jsx)("button",{className:"delete",onClick:K,children:Object(h.jsx)(F,{})})]}),L&&Object(h.jsx)("div",{className:"delCon",children:Object(h.jsxs)("div",{className:"del",children:[Object(h.jsx)("h1",{children:"Are you sure to delete?"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{className:"cancelDel",onClick:G,children:"Cancel"}),Object(h.jsx)("button",{className:"deleteDel",id:"".concat(b.noteId),onClick:function(e){!function(e){var t=e.target.className,n=e.clientX-e.target.offsetLeft,c=e.clientY-e.target.offsetTop,o=document.createElement("span");o.style.left=n+"px",o.style.top=c+"px",document.querySelector(".".concat(t)).appendChild(o),setTimeout((function(){o.remove()}),500)}(e),document.querySelector(".delCon").classList.remove("openAnime"),document.querySelector(".delCon").classList.add("cancelAnime"),setTimeout((function(){w(!1)}),300),N(!0);var t=e.target.id;console.log(e.target.id),O.users.doc(z.uid).get().then((function(e){if(e.exists){console.log("geting data");var n=e.data().note,c=-1;n.map((function(e){c+=1,e.noteId!==t||n.splice(c,1)})),O.users.doc(z.uid).update({note:n}),console.log("deleted"),N(!1),J(!1)}}))},children:"Delete"})]})]})}),g&&Object(h.jsxs)("div",{className:"loading",children:[Object(h.jsx)("svg",{className:"svgLoad2",height:"100",width:"100",children:Object(h.jsx)("circle",{cx:"50",cy:"50",r:"40",strokeLinecap:"round",strokeWidth:"10",fill:"none"})}),Object(h.jsx)("svg",{className:"svgLoad1",height:"100",width:"100",children:Object(h.jsx)("circle",{cx:"50",cy:"50",r:"40",stroke:"#fff",strokeLinecap:"round",strokeWidth:"10",fill:"none"})})]}),Object(h.jsx)(T,{note:b})]}),U&&Object(h.jsx)("div",{className:"preCon",children:Object(h.jsx)(E,{})}),q&&!P&&Object(h.jsx)(B,{}),!q&&!P&&Object(h.jsxs)("div",{className:"notesContainer",children:[Object(h.jsxs)("h1",{className:"logo",children:["Notes",Object(h.jsx)("button",{onClick:H,children:Object(h.jsxs)("div",{className:"burger",children:[Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{})]})})]}),n&&Object(h.jsxs)("div",{className:"loading",children:[Object(h.jsx)("svg",{className:"svgLoad2",height:"100",width:"100",children:Object(h.jsx)("circle",{cx:"50",cy:"50",r:"40",strokeLinecap:"round",strokeWidth:"10",fill:"none"})}),Object(h.jsx)("svg",{className:"svgLoad1",height:"100",width:"100",children:Object(h.jsx)("circle",{cx:"50",cy:"50",r:"40",stroke:"#fff",strokeLinecap:"round",strokeWidth:"10",fill:"none"})})]}),Object(h.jsx)("div",{className:"noteCon",children:i&&i.map((function(e){return Object(h.jsxs)("div",{className:"notes",style:{background:"".concat(e.backgroundColor),color:"".concat(e.textColor),fontFamily:"".concat(e.font),fontSize:"".concat(e.fontSize,"px")},onClick:V,id:"a".concat(e.noteId),"data-note":e.note,"data-title":e.title,"data-date":e.date,"data-backgroundcolor":e.backgroundColor,"data-textcolor":e.textColor,"data-font":e.font,"data-fontsize":e.fontSize,"data-noteid":e.noteId,children:[Object(h.jsx)("h1",{children:e.title}),Object(h.jsx)("div",{style:{padding:"".concat("title"===_?"0px":"10px")},children:"grid"===_&&(e.note.length>460&&"15"===e.fontSize?Object(h.jsxs)("p",{children:[e.note.slice(0,461),Object(h.jsx)("a",{style:{fontSize:"".concat(e.fontSize,"px")},children:"..."})]}):e.note.length>250&&"25"===e.fontSize?Object(h.jsxs)("p",{children:[e.note.slice(0,240),Object(h.jsx)("a",{style:{fontSize:"".concat(e.fontSize,"px")},children:"..."})]}):e.note.length>115&&"35"===e.fontSize?Object(h.jsxs)("p",{children:[e.note.slice(0,120),Object(h.jsx)("a",{style:{fontSize:"".concat(e.fontSize,"px")},children:"..."})]}):e.note.length>44&&"45"===e.fontSize?Object(h.jsxs)("p",{children:[e.note.slice(0,45),Object(h.jsx)("a",{style:{fontSize:"".concat(e.fontSize,"px")},children:"..."})]}):e.note)}),Object(h.jsx)("p",{className:"date",children:e.date})]},e.noteId)}))}),Object(h.jsx)(S,{})]})]})}var D=n(32);function _(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=(t[0],t[1]),o=Object(c.useState)(!1),s=Object(d.a)(o,2),a=s[0],i=s[1],u=Object(A.g)(),j=v().logIn;f.onAuthStateChanged((function(e){e&&u.push("/Notes")}));var b=function(){var e=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(""),i(!0),e.next=5,j();case 5:f.onAuthStateChanged((function(e){e&&u.push("/Notes")})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n("Failed to Log in");case 11:i(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("button",{disabled:a,onClick:b,children:"sign in"})})}var M=n(24),P=n(33);function J(e){var t=e.component,n=Object(P.a)(e,["component"]),c=v().currentUser;return Object(h.jsx)(A.b,Object(M.a)(Object(M.a)({},n),{},{render:function(e){return c?Object(h.jsx)(t,Object(M.a)({},e)):Object(h.jsx)(A.a,{to:"/Notes/login"})}}))}var U=function(){return Object(h.jsx)(p,{children:Object(h.jsx)(N,{children:Object(h.jsx)(D.a,{children:Object(h.jsxs)(A.d,{children:[Object(h.jsx)(J,{exact:!0,path:"/Notes",component:q}),Object(h.jsx)(A.b,{path:"/Notes/login",component:_})]})})})})};a.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(U,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.49e58f94.chunk.js.map