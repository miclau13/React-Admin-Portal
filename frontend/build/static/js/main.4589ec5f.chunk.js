(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{117:function(e,t,a){e.exports=a(147)},121:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),i=a.n(o),c=(a(121),a(7)),l=a.n(c),u=a(22),s=a(16),m=a(12),p=a(31),d=a(42),f=a(19),b=a(36),v=a(25),g=a.n(v),h=a(35),E=a(182),C=a(189),j=a(190),O=a(205),y=a(187),x=a(209),k=a(185),w=a(186),S=a(204),N=a(149),B=[{group:"About Us",items:["title","content","footer"]},{group:"Faq",items:["content"]},{group:"Terms",items:["title1","content1","title2","content2","title3","content3"]},{group:"Privacy",items:["title1","content1","title2","content2","title3","content3","title4","content4","title5","content5","title6","content6","title7","content7","title8","content8","title9","content9","title10","content10"]},{group:"Info",items:["title1","content1","title2","content2","title3","content3"]},{group:"Version",items:["content"]}],T=Object(E.a)((function(e){return{formControl:{margin:e.spacing(1),padding:e.spacing(3),display:"flex"}}})),I=function(e){var t=e.formik,a=t.handleSubmit,n=t.handleChange,o=t.handleBlur,i=t.values,c=t.initialValues,l=T();return r.a.createElement(x.a,{component:"form",className:l.formControl,onSubmit:function(e){e.preventDefault(),a()}},B.map((function(e,t){return r.a.createElement(k.a,{key:t},r.a.createElement(N.a,{variant:"h6"},e.group),r.a.createElement(w.a,null),r.a.createElement(O.a,{component:"div",p:1,mt:1},e.items.map((function(t,a){var l=Object(f.startCase)(t),u=Object(f.camelCase)("".concat(e.group," ").concat(t)),s=i[u],m=c[u];return r.a.createElement(S.a,{fullWidth:!0,placeholder:!0,multiline:!0,key:a,rows:5,label:l,variant:"outlined",margin:"dense",name:u,inputProps:{onBlur:o,onChange:n,value:s},defaultValue:m})}))))})),r.a.createElement(y.a,{color:"primary",variant:"contained","aria-label":"update",type:"submit"},"Update"))},P=a(188);function V(e){var t=e.loading;return void 0===t||t?r.a.createElement(P.a,{height:300}):null}var D=Object(E.a)((function(e){return{root:{width:"100vw"}}}));function U(e){var t=D(),a=r.a.useState(!1),n=Object(m.a)(a,2),o=n[0],i=n[1],c=e.data;console.log("data",c);var p=c&&c[0]||{aboutUs:{aboutUsContent:"",aboutUsFooter:"",aboutUsTitle:""},faq:{faqContent:""},terms:{termsTitle1:"",termsContent1:"",termsTitle2:"",termsContent2:"",termsTitle3:"",termsContent3:""},privacy:{title1:"",content1:"",title2:"",content2:"",title3:"",content3:"",title4:"",content4:"",title5:"",content5:"",title6:"",content6:"",title7:"",content7:"",title8:"",content8:"",title9:"",content9:"",title10:"",content10:""},info:{infoTitle1:"",infoContent1:"",infoTitle2:"",infoContent2:"",infoTitle3:"",infoContent3:""},version:{versionContent:""}},d=p.id,v=p.aboutUs,E=v.content,O=v.footer,y=v.title,x=p.faq.content,k=p.terms,w=k.title1,S=k.content1,N=k.title2,B=k.content2,T=k.title3,P=k.content3,U=p.privacy,L=U.title1,_=U.content1,A=U.title2,q=U.content2,W=U.title3,F=U.content3,R=U.title4,G=U.content4,H=U.title5,J=U.content5,M=U.title6,$=U.content6,z=U.title7,K=U.content7,Q=U.title8,X=U.content8,Y=U.title9,Z=U.content9,ee=U.title10,te=U.content10,ae=p.info,ne=ae.title1,re=ae.content1,oe=ae.title2,ie=ae.content2,ce=ae.title3,le=ae.content3,ue=p.version.content,se=Object(h.b)({initialValues:{aboutUsContent:E,aboutUsFooter:O,aboutUsTitle:y,faqContent:x,termsTitle1:w,termsContent1:S,termsTitle2:N,termsContent2:B,termsTitle3:T,termsContent3:P,privacyTitle1:L,privacyContent1:_,privacyTitle2:A,privacyContent2:q,privacyTitle3:W,privacyContent3:F,privacyTitle4:R,privacyContent4:G,privacyTitle5:H,privacyContent5:J,privacyTitle6:M,privacyContent6:$,privacyTitle7:z,privacyContent7:K,privacyTitle8:Q,privacyContent8:X,privacyTitle9:Y,privacyContent9:Z,privacyTitle10:ee,privacyContent10:te,infoTitle1:ne,infoContent1:re,infoTitle2:oe,infoContent2:ie,infoTitle3:ce,infoContent3:le,versionContent:ue},onSubmit:function(){var e=Object(s.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=Object(f.reduce)(t,(function(e,t,a){if(a.startsWith("aboutUs")){var n=Object(f.camelCase)(a.substring(7));e.aboutUs=Object(u.a)({},e.aboutUs,Object(b.a)({},n,t))}else if(a.startsWith("faq")){var r=Object(f.camelCase)(a.substring(3));e.faq=Object(u.a)({},e.faq,Object(b.a)({},r,t))}else if(a.startsWith("terms")){var o=Object(f.camelCase)(a.substring(5));e.terms=Object(u.a)({},e.terms,Object(b.a)({},o,t))}else if(a.startsWith("privacy")){var i=Object(f.camelCase)(a.substring(7));e.privacy=Object(u.a)({},e.privacy,Object(b.a)({},i,t))}else if(a.startsWith("info")){var c=Object(f.camelCase)(a.substring(4));e.info=Object(u.a)({},e.info,Object(b.a)({},c,t))}else if(a.startsWith("version")){var l=Object(f.camelCase)(a.substring(7));e.version=Object(u.a)({},e.version,Object(b.a)({},l,t))}return e}),{}),console.log("body",a),i(!0),!d){e.next=8;break}return e.next=6,g.a.post("/admin/"+d,a);case 6:e.next=10;break;case 8:return e.next=10,g.a.post("/admin/",a);case 10:i(!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});return o?r.a.createElement(V,null):r.a.createElement(C.a,{className:t.root},r.a.createElement(j.a,null,r.a.createElement(h.a,{initialValues:se.initialValues,onSubmit:se.onSubmit},r.a.createElement(I,{formik:se}))))}var L=a(99),_=Object(E.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",marginBottom:8,justifyContent:"center"},input:{marginLeft:e.spacing(1),flex:1},button:{marginLeft:10}}})),A=r.a.forwardRef((function(e,t){var a=e.onSubmit,n=_();return r.a.createElement(L.a,{component:"form",className:n.root,onSubmit:a},r.a.createElement(S.a,{name:"upload-file",type:"file",inputRef:t}),r.a.createElement(y.a,{className:n.button,color:"primary",variant:"contained","aria-label":"upload",type:"submit"},"Import"))}));function q(){var e=r.a.useState(!1),t=Object(m.a)(e,2),a=t[0],n=t[1],o=r.a.useRef(null),i=function(){var e=Object(s.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=new FormData).append("file",o.current.files[0]),n(!0),e.next=6,g.a.post("/products/import",a,{headers:{"Content-Type":"multipart/form-data"},responseType:"blob"});case 6:n(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,a?r.a.createElement(V,null):r.a.createElement(A,{onSubmit:i,ref:o}))}var W=a(195),F=a(197),R=a(201),G=a(200),H=a(196),J=a(198),M=a(199),$=a(98),z=a.n($),K=a(208),Q=a(194),X=a(193),Y=a(192),Z=a(191),ee=a(30);function te(e){var t=Object(ee.a)(),a=Object(Z.a)(t.breakpoints.down("sm"));return r.a.createElement(K.a,Object.assign({fullScreen:a},e),r.a.createElement(Y.a,{id:"import-data"},"Import Data"),r.a.createElement(X.a,null,r.a.createElement(q,null)),r.a.createElement(Q.a,null,r.a.createElement(y.a,{onClick:e.onClose,color:"primary"},"Close")))}var ae=Object(E.a)((function(e){return{root:{display:"flex",justifyContent:"flex-end",marginBottom:e.spacing(1),padding:e.spacing(1)}}}));function ne(e){var t=ae(),a=(Object(d.g)(),r.a.useState(!1)),n=Object(m.a)(a,2),o=n[0],i=n[1],c=r.a.useCallback((function(e){i(!0)}),[]),l=r.a.useCallback((function(e){i(!1)}),[]);return r.a.createElement(L.a,{variant:"outlined",className:t.root,square:!0},r.a.createElement(y.a,{color:"primary",variant:"contained","aria-label":"import",onClick:c},"Import"),r.a.createElement(te,{open:o,onClose:l}))}var re=a(210),oe=a(69),ie=a.n(oe),ce=a(97),le=a.n(ce),ue=Object(E.a)((function(e){return{divider:{height:28,margin:4},root:{padding:"2px 4px",display:"flex",alignItems:"center",marginBottom:8},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10}}}));function se(e){var t=e.onSubmit,a=e.onChange,n=e.handleAddIconOnClick,o=ue();return r.a.createElement(L.a,{component:"form",className:o.root,onSubmit:t},r.a.createElement(re.a,{autoFocus:!0,onChange:a,className:o.input,placeholder:"Search By Name",inputProps:{"aria-label":"name"}}),r.a.createElement(W.a,{className:o.iconButton,"aria-label":"search",type:"submit"},r.a.createElement(ie.a,null)),r.a.createElement(w.a,{className:o.divider,orientation:"vertical"}),r.a.createElement(W.a,{color:"primary",className:o.iconButton,"aria-label":"add",onClick:n},r.a.createElement(le.a,null)))}var me=Object(E.a)((function(e){return{formControl:{margin:e.spacing(1),display:"flex"}}})),pe=function(e){var t=e.formik,a=t.handleSubmit,n=t.handleChange,o=t.handleBlur,i=t.values,c=t.initialValues,l=me();return r.a.createElement(x.a,{component:"form",className:l.formControl,onSubmit:function(e){e.preventDefault(),a()}},r.a.createElement(S.a,{id:"productName",label:"Product Name",variant:"outlined",name:"name",margin:"normal",inputProps:{onBlur:o,onChange:n,value:i.name},defaultValue:c.name}),r.a.createElement(S.a,{id:"brandName",label:"Brand Name",variant:"outlined",name:"brandName",margin:"normal",inputProps:{onBlur:o,onChange:n,value:i.brandName},defaultValue:c.brandName}),r.a.createElement(S.a,{id:"category",label:"Category",variant:"outlined",name:"category",margin:"normal",inputProps:{onBlur:o,onChange:n,value:i.category},defaultValue:c.category}),r.a.createElement(S.a,{id:"price",label:"Price",variant:"outlined",name:"price",margin:"normal",inputProps:{onBlur:o,onChange:n,value:i.price},defaultValue:c.price}),r.a.createElement(S.a,{id:"origin",label:"Origin",variant:"outlined",name:"origin",margin:"normal",inputProps:{onBlur:o,onChange:n,value:i.origin},defaultValue:c.origin}),r.a.createElement(S.a,{id:"labels",label:"Labels",variant:"outlined",name:"labels",margin:"normal",inputProps:{onBlur:o,onChange:n,value:i.labels},defaultValue:c.labels}),r.a.createElement(y.a,{color:"primary",variant:"contained","aria-label":"update",type:"submit"},"Update"))},de=Object(E.a)((function(e){return{root:{width:"100vw"}}}));function fe(e){var t=de(),a=r.a.useState(!1),n=Object(m.a)(a,2),o=n[0],i=n[1],c=Object(d.h)().id,p=e.data,f=(void 0===p?[]:p).filter((function(e){return e.id===c}))[0]||{},b=f.name,v=f.category,E=f.price,O=f.origin,y=f.labels,x=(f.productionDate,f.brandName),k=Object(h.b)({initialValues:{name:b,category:v,price:E,origin:O,labels:y,brandName:x},onSubmit:function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i(!0),e.prev=1,"add"===c){e.next=7;break}return e.next=5,g.a.post("/products/"+c,Object(u.a)({},t,{devicedId:"admin"}));case 5:e.next=9;break;case 7:return e.next=9,g.a.post("/products",Object(u.a)({},t,{devicedId:"admin"}));case 9:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log("Error",e.t0);case 15:i(!1);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}()});return o?r.a.createElement(V,null):r.a.createElement(C.a,{className:t.root},r.a.createElement(j.a,null,r.a.createElement(h.a,{initialValues:k.initialValues,onSubmit:k.onSubmit},r.a.createElement(pe,{formik:k}))))}var be=Object(E.a)((function(e){return{root:{width:"100vw"},table:{maxHeight:"100vh"},hover:{cursor:"pointer"},iconButton:{padding:10}}}));function ve(e){var t=e.data,a=void 0===t?[]:t,n=e.fetchProductList,o=be(),i=Object(d.g)(),c=r.a.useState(),u=Object(m.a)(c,2),p=u[0],f=u[1],b=r.a.useState(!1),v=Object(m.a)(b,2),h=v[0],E=v[1],O=r.a.useMemo((function(){return p?a.filter((function(e){return e.productName.toLowerCase().includes(p.toLowerCase())})):a}),[a,p]),y=r.a.useCallback((function(e){f(e.target.value)}),[f]),x=r.a.useCallback(function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),E(!0),E(!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[O,p]),k=r.a.useCallback((function(e){return function(t){i.push("/product/".concat(e))}}),[]),w=r.a.useCallback((function(e){return function(){var t=Object(s.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.stopPropagation(),E(!0),t.prev=2,t.next=5,g.a.delete("/products/delete/"+e);case 5:return t.next=7,n();case 7:t.next=11;break;case 9:t.prev=9,t.t0=t.catch(2);case 11:E(!1);case 13:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()}),[n]),S=r.a.useCallback((function(e){i.push("/product/add")}),[]);return h?r.a.createElement(V,null):r.a.createElement(C.a,{className:o.root},r.a.createElement(j.a,null,r.a.createElement(ne,null),r.a.createElement(se,{onSubmit:x,onChange:y,handleAddIconOnClick:S}),r.a.createElement(H.a,{className:o.table},r.a.createElement(F.a,null,r.a.createElement(J.a,null,r.a.createElement(M.a,null,r.a.createElement(G.a,null),r.a.createElement(G.a,null,"Name"),r.a.createElement(G.a,{align:"right"},"Category"),r.a.createElement(G.a,{align:"right"},"Price"),r.a.createElement(G.a,{align:"right"},"Origin"),r.a.createElement(G.a,{align:"right"},"Labels"),r.a.createElement(G.a,{align:"right"},"Production Date"))),r.a.createElement(R.a,null,O.map((function(e){var t=e.id,a=e.category,n=e.labels,i=e.origin,c=e.price,l=e.name,u=e.productionDate;e.rating;return r.a.createElement(M.a,{hover:!0,key:t,className:o.hover,onClick:k(e.id)},r.a.createElement(G.a,{component:"th",scope:"row"},r.a.createElement(W.a,{className:o.iconButton,"aria-label":"delete",onClick:w(e.id)},r.a.createElement(z.a,{color:"error"}))),r.a.createElement(G.a,{component:"th",scope:"row"},l),r.a.createElement(G.a,{align:"right"},a),r.a.createElement(G.a,{align:"right"},c),r.a.createElement(G.a,{align:"right"},i),r.a.createElement(G.a,{align:"right"},n),r.a.createElement(G.a,{align:"right"},u))})))))))}var ge=Object(E.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",marginBottom:8},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10}}}));function he(e){var t=e.onSubmit,a=e.onChange,n=ge();return r.a.createElement(L.a,{component:"form",className:n.root,onSubmit:t},r.a.createElement(re.a,{autoFocus:!0,onChange:a,className:n.input,placeholder:"Search By DeviceId",inputProps:{"aria-label":"name"}}),r.a.createElement(W.a,{className:n.iconButton,"aria-label":"search",type:"submit"},r.a.createElement(ie.a,null)))}var Ee=Object(E.a)((function(e){return{formControl:{margin:e.spacing(1),display:"flex"}}})),Ce=function(e){var t=e.formik,a=t.handleSubmit,n=t.handleChange,o=t.handleBlur,i=t.values,c=t.initialValues,l=Ee();return r.a.createElement(x.a,{component:"form",className:l.formControl,onSubmit:function(e){e.preventDefault(),a()}},r.a.createElement(S.a,{id:"deviceId",label:"Device Id",variant:"outlined",name:"deviceId",margin:"normal",inputProps:{onBlur:o,onChange:n,value:i.deviceId},defaultValue:c.deviceId}),r.a.createElement(S.a,{id:"comments",label:"Comments",variant:"outlined",name:"comments",margin:"normal",inputProps:{onBlur:o,onChange:n,value:i.comments},defaultValue:c.comments}),r.a.createElement(S.a,{id:"rating",label:"Rating",variant:"outlined",name:"rating",margin:"normal",inputProps:{onBlur:o,onChange:n,value:i.rating},defaultValue:c.Rrating}),r.a.createElement(y.a,{color:"primary",variant:"contained","aria-label":"update",type:"submit"},"Update"))},je=Object(E.a)((function(e){return{root:{width:"100vw"}}}));function Oe(e){var t=je(),a=r.a.useState(!1),n=Object(m.a)(a,2),o=n[0],i=n[1],c=Object(d.h)().id,u=e.data,p=u.filter((function(e){return e.id===c}))[0]||{},f=p.deviceId,b=p.rating,v=p.comments;console.log("deviceId",f);var E=Object(h.b)({initialValues:{deviceId:f,rating:b,comments:v},onSubmit:function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,g.a.post("/profiles/update/"+c,t);case 3:i(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});return r.a.useEffect((function(){E.resetForm()}),[u]),o?r.a.createElement(V,null):r.a.createElement(C.a,{className:t.root},r.a.createElement(j.a,null,r.a.createElement(h.a,{initialValues:E.initialValues,onSubmit:E.onSubmit},r.a.createElement(Ce,{formik:E}))))}var ye=Object(E.a)((function(e){return{root:{width:"100vw"},table:{maxHeight:"100vh"},hover:{cursor:"pointer"}}}));function xe(e){var t=e.data,a=void 0===t?[]:t,n=ye(),o=Object(d.g)(),i=r.a.useState(),c=Object(m.a)(i,2),u=c[0],p=c[1],f=r.a.useState(!1),b=Object(m.a)(f,2),v=b[0],g=(b[1],r.a.useMemo((function(){return u?a.filter((function(e){return e.deviceId.toLowerCase().includes(u.toLowerCase())})):a}),[a,u])),h=r.a.useCallback((function(e){p(e.target.value)}),[p]),E=r.a.useCallback(function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[u]),O=r.a.useCallback((function(e){return function(t){o.push("/profile/".concat(e))}}),[]);return v?r.a.createElement(V,null):r.a.createElement(C.a,{className:n.root},r.a.createElement(j.a,null,r.a.createElement(he,{onSubmit:E,onChange:h}),r.a.createElement(H.a,{className:n.table},r.a.createElement(F.a,null,r.a.createElement(J.a,null,r.a.createElement(M.a,null,r.a.createElement(G.a,null,"DeviceId"),r.a.createElement(G.a,{align:"right"},"Comments"),r.a.createElement(G.a,{align:"right"},"Rating"))),r.a.createElement(R.a,null,g.map((function(e){var t=e.id,a=e.deviceId,o=e.rating,i=e.comments;return r.a.createElement(M.a,{hover:!0,key:t,className:n.hover,onClick:O(e.id)},r.a.createElement(G.a,{component:"th",scope:"row"},a),r.a.createElement(G.a,{align:"right"},i),r.a.createElement(G.a,{align:"right"},o))})))))))}a(146);var ke=a(202),we=a(206),Se=a(203),Ne=Object(E.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),Be=["product","profile","admin-panel"];function Te(){var e=Ne(),t=Object(d.g)(),a=t.location.pathname.split("/")[1],n=r.a.useState(Be.indexOf(a)),o=Object(m.a)(n,2),i=o[0],c=o[1];return r.a.createElement("div",{className:e.root},r.a.createElement(ke.a,{position:"static"},r.a.createElement(we.a,{value:i,onChange:function(e,a){c(a),t.replace("/".concat(Be[a]))},indicatorColor:"secondary",centered:!0},r.a.createElement(Se.a,{label:"Product"}),r.a.createElement(Se.a,{label:"Profile"}),r.a.createElement(Se.a,{label:"Others"}))))}var Ie=function(){var e=r.a.useState([]),t=Object(m.a)(e,2),a=t[0],n=t[1],o=r.a.useState([]),i=Object(m.a)(o,2),c=i[0],b=i[1],v=r.a.useState([]),g=Object(m.a)(v,2),h=g[0],E=g[1],C=r.a.useState(!1),j=Object(m.a)(C,2),O=j[0],y=j[1],x=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(!0),e.next=4,fetch("/products",{method:"get",headers:{Accept:"application/json","Content-Type":"application/json"}});case 4:return t=e.sent,e.next=7,t.json();case 7:if(e.t0=e.sent,e.t0){e.next=10;break}e.t0=[];case 10:a=e.t0,n=a.map((function(e){return Object(f.omit)(Object(u.a)({id:e._id},e),["__v","_id","updatedAt"])})),b(n),e.next=18;break;case 15:e.prev=15,e.t1=e.catch(0),console.log(" fetchProductList error:",e.t1);case 18:return e.prev=18,y(!1),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[0,15,18,21]])})));return function(){return e.apply(this,arguments)}}();return r.a.useEffect((function(){var e=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(!0),e.next=4,fetch("/admin",{method:"get",headers:{Accept:"application/json","Content-Type":"application/json"}});case 4:return t=e.sent,e.next=7,t.json();case 7:if(e.t0=e.sent,e.t0){e.next=10;break}e.t0=[];case 10:a=e.t0,r=a.map((function(e){return Object(f.omit)(Object(u.a)({id:e._id},e),["__v","_id","updatedAt"])})),n(r),e.next=18;break;case 15:e.prev=15,e.t1=e.catch(0),console.log(" fetchAdminData error:",e.t1);case 18:return e.prev=18,y(!1),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[0,15,18,21]])})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(!0),e.next=4,fetch("/profiles",{method:"get",headers:{Accept:"application/json","Content-Type":"application/json"}});case 4:return t=e.sent,e.next=7,t.json();case 7:if(e.t0=e.sent,e.t0){e.next=10;break}e.t0=[];case 10:a=e.t0,n=a.map((function(e){return Object(f.omit)(Object(u.a)({id:e._id},e),["__v","_id","updatedAt"])})),E(n),e.next=18;break;case 15:e.prev=15,e.t1=e.catch(0),console.log(" fetchProfileData error:",e.t1);case 18:return e.prev=18,y(!1),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[0,15,18,21]])})));return function(){return e.apply(this,arguments)}}();e(),x(),t()}),[]),O?r.a.createElement(V,null):r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(Te,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/admin-panel"},r.a.createElement(U,{data:a})),r.a.createElement(d.b,{path:"/product/:id"},r.a.createElement(fe,{data:c})),r.a.createElement(d.b,{path:"/product/add"},r.a.createElement(fe,null)),r.a.createElement(d.b,{path:"/product"},r.a.createElement(ve,{data:c,fetchProductList:x})),r.a.createElement(d.b,{path:"/products-import"},r.a.createElement(q,null)),r.a.createElement(d.b,{path:"/profile/:id"},r.a.createElement(Oe,{data:h})),r.a.createElement(d.b,{path:"/profile"},r.a.createElement(xe,{data:h})),r.a.createElement(d.b,{path:"/"},r.a.createElement(d.a,{to:"/product"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[117,1,2]]]);
//# sourceMappingURL=main.4589ec5f.chunk.js.map