(this.webpackJsonpscribbled=this.webpackJsonpscribbled||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){e.exports=a.p+"static/media/profile.dcff22c9.JPG"},21:function(e,t,a){e.exports=a.p+"static/media/logo.bb149638.png"},32:function(e,t,a){e.exports=a.p+"static/media/homeback.2f31472f.jpg"},33:function(e,t,a){e.exports=a.p+"static/media/homeback-mob.d17c6498.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/Log.781cb8a1.png"},36:function(e,t,a){e.exports=a.p+"static/media/footer.da261dd9.jpg"},38:function(e,t,a){e.exports=a(74)},43:function(e,t,a){},44:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},74:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(31),s=a.n(c),r=(a(43),a(44),a(11),a(4)),i=a(12),o=a(32),m=a.n(o),d=a(33),u=a.n(d),p=a(21),f=a.n(p),E=a(13),h=a.n(E),b=a(17),g=a(6);var v=function(e){var t=e.data,a=e.id;return t.hasOwnProperty("uri")?l.a.createElement("div",{className:"row-right"},l.a.createElement("img",{className:"post-img",src:t.uri}),l.a.createElement("div",{className:"post-text-right"},l.a.createElement("p",{className:"post-head"},t.title),l.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"center"}},l.a.createElement(g.b,{to:"/posts/".concat(a),style:{textDecoration:"none"}},l.a.createElement("div",{className:"view-post-right"},"View-Post"))))):l.a.createElement("div",{className:"row-right"},l.a.createElement("div",{className:"post-text-right"},l.a.createElement("p",{className:"post-head"},t.title),l.a.createElement("div",{className:"profile-scroll"},l.a.createElement("p",{className:"profile-content"},t.description)),l.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"center"}},l.a.createElement(g.b,{to:"/posts/".concat(a),style:{textDecoration:"none"}},l.a.createElement("div",{className:"view-post-right"},"View-Post")))))};var N=function(e){var t=e.id1,a=e.data1,n=e.id2,c=e.data2,s=e.id3,r=e.data3;return null==r&&null!=c?l.a.createElement("div",{className:"posts"},l.a.createElement(v,{id:t,data:a}),l.a.createElement(v,{id:n,data:c})):null==r&&null==c?l.a.createElement("div",{className:"posts"},l.a.createElement(v,{id:t,data:a})):l.a.createElement("div",{className:"posts"},l.a.createElement(v,{id:t,data:a}),l.a.createElement(v,{id:n,data:c}),l.a.createElement(v,{id:s,data:r}))};var w=function(e){for(var t=e.data,a=[],n=null,c=Object.keys(t),s=0;s<c.length;s+=3)c.length-s>2?a.push(l.a.createElement(N,{id1:c[s],id2:c[s+1],id3:c[s+2],data1:t[c[s]],data2:t[c[s+1]],data3:t[c[s+2]]})):2==c.length?a.push(l.a.createElement(N,{id1:c[s],id2:c[s+1],id3:n,data1:t[c[s]],data2:t[c[s+1]],data3:n})):a.push(l.a.createElement(N,{id1:c[s],id2:n,id3:n,data1:t[c[s]],data2:n,data3:n}));return l.a.createElement("div",{className:"width"},l.a.createElement("p",{className:"post-title"},"POSTS"),a)},O=a(26),j=a.n(O);j.a.initializeApp({apiKey:"AIzaSyCpHGueU0tbyZ1csFvdQtLW-qVW35Q0OS0",authDomain:"scribbled-poetry.firebaseapp.com",databaseURL:"https://scribbled-poetry.firebaseio.com",projectId:"scribbled-poetry",storageBucket:"scribbled-poetry.appspot.com",messagingSenderId:"1071340003661",appId:"1:1071340003661:web:e5af497d43fbe66e391704",measurementId:"G-GFNLFSQTB5"});var y=j.a;function x(){var e=Object(n.useState)({name:"...",about:".....",uri:h.a}),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){y.database().ref("about").once("value",(function(e){var t=e.val();c(t)}))}),[]),l.a.createElement("div",{className:"about"},l.a.createElement("p",{className:"profile-title"},"ABOUT ME"),l.a.createElement("div",{className:"about-me"},l.a.createElement("img",{className:"profile",src:a.uri}),l.a.createElement("div",{className:"profile-text"},l.a.createElement("p",{className:"profile-head"},a.name),l.a.createElement("div",{className:"profile-scroll"},l.a.createElement("p",{className:"profile-content"},a.about)))))}var S=a(35),k=a.n(S),C=a(36),L=a.n(C);function P(){return l.a.createElement("div",{className:"Title-f"},l.a.createElement("img",{className:"footer-title",src:L.a}),l.a.createElement("div",{className:"foot-title"},l.a.createElement("img",{className:"foot-img",src:k.a}),l.a.createElement("p",{className:"title-foo"},"Scribbled Poetry")))}function D(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){fetch("https://www.instagram.com/scribbled_poetry_?__a=1").then((function(e){return e.json()})).then((function(e){var t=e.graphql.user.edge_owner_to_timeline_media.edges;c({d1:"https://www.instagram.com/p/"+t[0].node.shortcode+"/embed",d2:"https://www.instagram.com/p/"+t[1].node.shortcode+"/embed"})})).catch((function(e){return alert("Network issues")}))}),[]);var s=null;return s=null==a?null:l.a.createElement("div",{className:"insta-r"},l.a.createElement("iframe",{width:"300",height:"400",src:a.d1,frameborder:"0",className:"in"}),l.a.createElement("div",{className:"sep"}),l.a.createElement("iframe",{width:"300",height:"400",src:a.d2,frameborder:"0",className:"in"})),l.a.createElement("div",{className:"insta-c"},l.a.createElement("p",{className:"profile-head"},"My Latest Instagram Posts"),s)}var U=function(e){e.history;var t=Object(n.useRef)(null),a=Object(n.useState)(null),c=Object(r.a)(a,2),s=c[0],i=c[1],o=null;return o=null==s?l.a.createElement("div",{className:"width"},l.a.createElement("p",{className:"post-title"},"POSTS"),l.a.createElement("div",{style:{color:"#fff",width:"100%",textAlign:"center",marginBottom:30}},"Loading...")):l.a.createElement(w,{data:s}),Object(n.useEffect)((function(){y.database().ref("posts").once("value",(function(e){i(e.val())}))}),[]),l.a.createElement("div",{className:"Container"},l.a.createElement("div",{className:"Title"},l.a.createElement("header",null,l.a.createElement("img",{className:"logo",src:f.a})),l.a.createElement("img",{className:"back-title",src:m.a}),l.a.createElement("img",{className:"back-title-mob",src:u.a}),l.a.createElement("div",{className:"content-title"},l.a.createElement("div",{className:"content"},l.a.createElement("p",{className:"welcome"},"Welcome to"),l.a.createElement("p",{className:"title"},"Scribbled Poetry"))),l.a.createElement(b.a,{className:"down",onClick:function(){t.current.scrollIntoView({behavior:"smooth"})}})),l.a.createElement("div",{ref:t}),l.a.createElement(x,null),o,l.a.createElement(D,null),l.a.createElement(P,null))},R=a(5),I=a(18),T=a(37);function B(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),i=Object(r.a)(s,2),o=i[0],m=i[1];Object(n.useEffect)((function(){y.database().ref("about").once("value",(function(e){c(e.val().uri),y.database().ref("posts").once("value",(function(e){var t=Object.keys(e.val());m(t.length)}))})).catch((function(e){return alert("Network issue")}))}),[]);var d=null;return d=null==a?l.a.createElement("img",{className:"h-img",src:h.a}):l.a.createElement("img",{className:"h-img",src:a}),l.a.createElement("div",{className:"dash-com"},l.a.createElement("div",{className:"dash-about",style:{alignItems:"center"}},d,l.a.createElement("p",{className:"title-h"},"Posts"),l.a.createElement("p",{className:"sc-h"},o)))}function _(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),i=Object(r.a)(s,2),o=i[0],m=i[1],d=Object(n.useState)(""),u=Object(r.a)(d,2),p=u[0],f=u[1],E=Object(n.useState)(""),h=Object(r.a)(E,2),b=h[0],g=h[1],v=Object(n.useRef)(null),N=null;N=null==a?null:l.a.createElement("img",{className:"new-img-s",src:a});return l.a.createElement("div",{className:"dash-new"},l.a.createElement("div",{className:"new-row"},l.a.createElement("div",{className:"new-cont"},l.a.createElement("p",{className:"new-title"},"New Post"),l.a.createElement("p",{className:"dash-about-t"},"Title(Prefer short one):"),l.a.createElement("input",{style:{display:"flex",flexDirection:"column",outline:"none",border:0,borderRadius:5,padding:5,resize:"none",background:"rgba(0,0,0,0.3)"},value:p,onChange:function(e){return f(e.target.value)},placeholder:"Your Post Title"})),l.a.createElement("div",{className:"new-img-cont"},l.a.createElement("div",{className:"new-img"},N),l.a.createElement("div",{className:"new-choose"},l.a.createElement("button",{className:"new-choose-bt"},"Choose image"),l.a.createElement("input",{type:"file",accept:"image/*",className:"dash-ch-in",onChange:function(e){e.target.files&&e.target.files[0]?c(URL.createObjectURL(e.target.files[0])):c(null)},ref:v})))),l.a.createElement("div",{className:"new-row"},l.a.createElement("div",{className:"new-cont"},l.a.createElement("p",{className:"dash-about-t"},"Description:"),l.a.createElement("textarea",{style:{display:"flex",flexDirection:"column",flex:1,outline:"none",border:0,borderRadius:5,padding:5,resize:"none",background:"rgba(0,0,0,0.3)"},value:b,onChange:function(e){return g(e.target.value)},placeholder:"Your Post Description"}),l.a.createElement("div",{style:{marginTop:10}},o))),l.a.createElement("div",{className:"new-p",onClick:function(){if(""==p||""==b)alert("please fill all the inputs");else if(v.current.files&&v.current.files[0]){var e=v.current.files[0].name.split("."),t=y.storage().ref("images/profile"+e[e.length-1]);t.put(v.current.files[0]).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);m("image upload progress: "+t+"%")}),(function(e){m(null)}),(function(){m("wait...Uploading data..."),t.getDownloadURL().then((function(e){y.database().ref("posts").push().set({title:p,description:b,uri:e}).then((function(){alert("post added successfully"),f(""),g(""),c(null)})).catch((function(e){alert("Network issues...please try again!")})),m(null)}))}))}else m("wait...Uploading data..."),y.database().ref("posts").push().set({title:p,description:b}).then((function(){alert("post added successfully"),f(""),g(""),c(null)})).catch((function(e){alert("Network issues...please try again!")})),m(null)}},"Post"))}var z=function(e){var t=e.data,a=e.id;return t.hasOwnProperty("uri")?l.a.createElement("div",{className:"row-right"},l.a.createElement("img",{className:"post-img",src:t.uri}),l.a.createElement("div",{className:"post-text-right"},l.a.createElement("p",{className:"post-head"},t.title),l.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"center"}},l.a.createElement(g.b,{to:"/dashboard/posts/".concat(a),style:{textDecoration:"none"}},l.a.createElement("div",{className:"view-post-right"},"Edit-Post"))))):l.a.createElement("div",{className:"row-right"},l.a.createElement("div",{className:"post-text-right"},l.a.createElement("p",{className:"post-head"},t.title),l.a.createElement("div",{className:"profile-scroll"},l.a.createElement("p",{className:"profile-content"},t.description)),l.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"center"}},l.a.createElement(g.b,{to:"/dashboard/posts/".concat(a),style:{textDecoration:"none"}},l.a.createElement("div",{className:"view-post-right"},"Edit-Post")))))};var H=function(e){var t=e.id1,a=e.data1,n=e.id2,c=e.data2,s=e.id3,r=e.data3;return null==r&&null!=c?l.a.createElement("div",{className:"posts"},l.a.createElement(z,{id:t,data:a}),l.a.createElement(z,{id:n,data:c})):null==r&&null==c?l.a.createElement("div",{className:"posts"},l.a.createElement(z,{id:t,data:a})):l.a.createElement("div",{className:"posts"},l.a.createElement(z,{id:t,data:a}),l.a.createElement(z,{id:n,data:c}),l.a.createElement(z,{id:s,data:r}))};var A=function(){var e=null,t=null,a=Object(n.useState)(null),c=Object(r.a)(a,2),s=c[0],i=c[1];if(null==s)e=l.a.createElement("div",{style:{color:"#fff",width:"100%",textAlign:"center",marginBottom:30}},"Loading...");else{e=[];for(var o=Object.keys(s),m=0;m<o.length;m+=3)o.length-m>2?e.push(l.a.createElement(H,{id1:o[m],id2:o[m+1],id3:o[m+2],data1:s[o[m]],data2:s[o[m+1]],data3:s[o[m+2]]})):2==o.length?e.push(l.a.createElement(H,{id1:o[m],id2:o[m+1],id3:t,data1:s[o[m]],data2:s[o[m+1]],data3:t})):e.push(l.a.createElement(H,{id1:o[m],id2:t,id3:t,data1:s[o[m]],data2:t,data3:t}))}return Object(n.useEffect)((function(){y.database().ref("posts").once("value",(function(e){i(e.val())})).catch((function(e){return alert("Network issues")}))}),[]),l.a.createElement("div",{className:"dash-com"},l.a.createElement("p",{className:"post-title"},"POSTS"),e)};function G(){var e=Object(n.useState)("No file choosen"),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),i=Object(r.a)(s,2),o=i[0],m=i[1],d=Object(n.useState)(""),u=Object(r.a)(d,2),p=u[0],f=u[1],E=Object(n.useState)(""),h=Object(r.a)(E,2),b=h[0],g=h[1],v=Object(n.useState)(null),N=Object(r.a)(v,2),w=N[0],O=N[1],j=Object(n.useState)(!1),x=Object(r.a)(j,2),S=x[0],k=x[1],C=Object(n.useRef)(null),L=null;L="No file choosen"==a?null:l.a.createElement("img",{style:{maxWidth:100,maxHeight:100},src:o});return S?l.a.createElement(R.a,{push:!0,to:"/login"}):l.a.createElement("div",{className:"dash-com"},l.a.createElement("div",{className:"dash-about"},l.a.createElement("input",{className:"dash-input",placeholder:"Name",style:{outline:"none"},value:p,onChange:function(e){return f(e.target.value)}}),l.a.createElement("p",{className:"dash-about-t"},"About me:"),l.a.createElement("textarea",{className:"dash-text-are",style:{maxHeight:"300px",minHeight:"200px",outline:"none",border:0,borderRadius:5,padding:5,resize:"none",background:"rgba(20,20,20,0.1)"},placeholder:"Edit about-me content...",value:b,onChange:function(e){return g(e.target.value)}}),l.a.createElement("p",{className:"dash-about-t"},"Change image in homepage:"),l.a.createElement("div",{className:"dash-ch-wr"},l.a.createElement("button",{className:"dash-choose"},"Choose File"),l.a.createElement("input",{type:"file",accept:"image/*",className:"dash-ch-in",onChange:function(e){e.target.files&&e.target.files[0]?(c(e.target.files[0].name),m(URL.createObjectURL(e.target.files[0]))):(m(null),c("No file choosen"))},ref:C})),L,l.a.createElement("label",{className:"dash-about-t",htmlFor:"inputfile"},a),l.a.createElement("div",{style:{marginBottom:10}},w),l.a.createElement("div",{className:"Login-but",onClick:function(){if(C.current.files&&C.current.files[0]){var e=C.current.files[0].name.split("."),t=y.storage().ref("images/profile"+e[e.length-1]);t.put(C.current.files[0]).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);O("image upload progress: "+t+"%")}),(function(e){O(null)}),(function(){O("wait...Uploading data..."),t.getDownloadURL().then((function(e){y.database().ref("about").update({name:p,about:b,uri:e}).then((function(){alert("Updated successfully")})).catch((function(e){alert("Network issue")})),O(null),k(!0)}))}))}else O("wait...Uploading data..."),y.database().ref("about").update({name:p,about:b}),k(!0)}},"Update")))}function M(){var e=Object(R.g)().id,t=Object(n.useState)(null),a=Object(r.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)(null),o=Object(r.a)(i,2),m=o[0],d=o[1],u=Object(n.useState)(!1),p=Object(r.a)(u,2),f=p[0],E=p[1],h=Object(n.useState)("Loading..."),b=Object(r.a)(h,2),g=b[0],v=b[1],N=Object(n.useState)("Loading..."),w=Object(r.a)(N,2),O=w[0],j=w[1],x=Object(n.useRef)(null);Object(n.useEffect)((function(){y.database().ref("posts/"+e).once("value",(function(e){e.exists()?(v(e.val().title),j(e.val().description),e.val().hasOwnProperty("uri")&&s(e.val().uri)):(alert("Invalid post id"),E(!0))}))}),[]);var S=null;S=null==c?null:l.a.createElement("img",{className:"new-img-s",src:c});return f?l.a.createElement(R.a,{push:!0,to:"/dashboard/posts"}):l.a.createElement("div",{className:"dash-new"},l.a.createElement("div",{className:"new-row"},l.a.createElement("div",{className:"new-cont"},l.a.createElement("p",{className:"new-title"},"New Post"),l.a.createElement("p",{className:"dash-about-t"},"Title(Prefer short one):"),l.a.createElement("input",{style:{display:"flex",flexDirection:"column",outline:"none",border:0,borderRadius:5,padding:5,resize:"none",background:"rgba(0,0,0,0.3)"},value:g,onChange:function(e){return v(e.target.value)},placeholder:"Your Post Title"})),l.a.createElement("div",{className:"new-img-cont"},l.a.createElement("div",{className:"new-img"},S),l.a.createElement("div",{className:"new-choose"},l.a.createElement("button",{className:"new-choose-bt"},"Choose image"),l.a.createElement("input",{type:"file",accept:"image/*",className:"dash-ch-in",onChange:function(e){e.target.files&&e.target.files[0]?s(URL.createObjectURL(e.target.files[0])):s(null)},ref:x})))),l.a.createElement("div",{className:"new-row"},l.a.createElement("div",{className:"new-cont"},l.a.createElement("p",{className:"dash-about-t"},"Description:"),l.a.createElement("textarea",{style:{display:"flex",flexDirection:"column",flex:1,outline:"none",border:0,borderRadius:5,padding:5,resize:"none",background:"rgba(0,0,0,0.3)"},value:O,onChange:function(e){return j(e.target.value)},placeholder:"Your Post Description"}),l.a.createElement("div",{style:{marginTop:10}},m))),l.a.createElement("div",{className:"new-p",onClick:function(){if(""==g||""==O)alert("please fill all the inputs");else if(console.log("start"),x.current.files&&x.current.files[0]){var t=x.current.files[0].name.split("."),a=y.storage().ref("images/profile"+t[t.length-1]);a.put(x.current.files[0]).on("state_changed",(function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);d("image upload progress: "+t+"%")}),(function(e){d(null)}),(function(){d("wait...Uploading data..."),a.getDownloadURL().then((function(t){y.database().ref("posts/"+e).update({title:g,description:O,uri:t}).then((function(){E(!0),alert("post added successfully"),v(""),j(""),s(null)})).catch((function(e){alert("Network issues...please try again!")})),d(null)}))}))}else console.log("followed up"),d("wait...Uploading data..."),y.database().ref("posts/"+e).update({title:g,description:O}).then((function(){E(!0),alert("post updated successfully"),v(""),j(""),s(null)})).catch((function(e){alert("Network issues...please try again!")})),d(null)}},"Update"),l.a.createElement("div",{className:"new-p-d",onClick:function(){y.database().ref("posts/"+e).remove().then((function(){alert("successfully deleted"),E(!0)})).catch((function(e){alert("network issues...please try again")}))}},"Delete Post"))}function W(){var e=Object(R.h)(),t=(e.path,e.url,Object(n.useState)(localStorage.getItem("user")||"")),a=Object(r.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)(!0),o=Object(r.a)(i,2),m=o[0],d=o[1],u=Object(n.useState)({name:"....",about:".....",uri:h.a}),p=Object(r.a)(u,2),E=p[0],v=p[1],N=function(){localStorage.setItem("user",""),s("")};return Object(n.useEffect)((function(){y.database().ref("about").once("value",(function(e){var t=e.val();v(t)}))}),[]),""==c?l.a.createElement(R.a,{push:!0,to:"/login"}):l.a.createElement("div",{className:"dashboard"},l.a.createElement("header",null,l.a.createElement(I.c,{className:"men",onClick:function(){return d((function(e){return!e}))}}),l.a.createElement("img",{className:"logo",src:f.a}),l.a.createElement("div",{className:"head"},l.a.createElement("p",{className:"head-text",onClick:N},"Logout"),l.a.createElement(I.b,{className:"logout",onClick:N}))),l.a.createElement("main",null,l.a.createElement("div",{className:"lists ".concat(m?"hidden":"")},l.a.createElement("img",{className:"dash-img",src:E.uri}),l.a.createElement("p",{className:"dashboard-name"},E.name),l.a.createElement(g.b,{to:"/dashboard/",style:{textDecoration:"none"}},l.a.createElement("div",{className:"dash-item",onClick:function(){return d(!0)}},l.a.createElement(I.a,{className:"dash-icon"}),l.a.createElement("p",{className:"dash-text"},"Home"))),l.a.createElement(g.b,{to:"/dashboard/about",style:{textDecoration:"none"}},l.a.createElement("div",{className:"dash-item",onClick:function(){return d(!0)}},l.a.createElement(b.c,{className:"dash-icon"}),l.a.createElement("p",{className:"dash-text"},"Edit About"))),l.a.createElement(g.b,{to:"/dashboard/posts",style:{textDecoration:"none"}},l.a.createElement("div",{className:"dash-item",onClick:function(){return d(!0)}},l.a.createElement(b.b,{className:"dash-icon"}),l.a.createElement("p",{className:"dash-text"},"Posts"))),l.a.createElement(g.b,{to:"/dashboard/new",style:{textDecoration:"none"}},l.a.createElement("div",{className:"dash-item",onClick:function(){return d(!0)}},l.a.createElement(T.a,{className:"dash-icon"}),l.a.createElement("p",{className:"dash-text"},"New Post")))),l.a.createElement("div",{className:"cont ".concat(m?"":"c")},l.a.createElement(R.d,null,l.a.createElement(R.b,{exact:!0,path:"/dashboard/"},l.a.createElement(B,{url:E.uri})),l.a.createElement(R.b,{path:"/dashboard/about"},l.a.createElement(G,null)),l.a.createElement(R.b,{exact:!0,path:"/dashboard/posts"},l.a.createElement(A,null)),l.a.createElement(R.b,{exact:!0,path:"/dashboard/new"},l.a.createElement(_,null)),l.a.createElement(R.b,{exact:!0,path:"/dashboard/posts/:id"},l.a.createElement(M,null)),l.a.createElement(R.b,{path:"*"},l.a.createElement("div",null,"Error 404"))))))}function F(){var e=Object(n.useState)(localStorage.getItem("user")||""),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),i=Object(r.a)(s,2),o=i[0],m=i[1],d=Object(n.useState)(""),u=Object(r.a)(d,2),p=u[0],f=u[1],E=Object(n.useState)("Login"),h=Object(r.a)(E,2),b=h[0],g=h[1];return""==a?l.a.createElement("div",{className:"Login"},l.a.createElement("div",{className:"box"},l.a.createElement("p",{className:"title-login"},"LOGIN"),l.a.createElement("input",{className:"input",type:"text",style:{outline:"none"},placeholder:"Username",value:o,onChange:function(e){return m(e.target.value)}}),l.a.createElement("input",{className:"input",type:"password",style:{outline:"none"},placeholder:"Password",value:p,onChange:function(e){return f(e.target.value)}}),l.a.createElement("div",{className:"Login-but",onClick:function(){g("Loading..."),""==o||""==p?(alert("Don't leave an input empty"),g("Login")):y.database().ref("users").once("value",(function(e){var t=e.val();t.username==o?(t.password==p?(localStorage.setItem("user",o),c(o)):alert("Invalid password"),g("Login")):(g("Login"),alert("Invalid username"))}))}},b))):l.a.createElement(R.a,{push:!0,to:"/dashboard"})}function V(){var e=Object(R.g)().id,t=Object(n.useState)("Loading..."),a=Object(r.a)(t,2),c=a[0],s=a[1],o=Object(n.useState)("Loading..."),m=Object(r.a)(o,2),d=m[0],u=m[1],p=Object(n.useState)(null),f=Object(r.a)(p,2),E=f[0],h=f[1],b=Object(n.useState)(!1),g=Object(r.a)(b,2),v=g[0],N=g[1],w=null;w=null==E?l.a.createElement("p",{className:"view-head"},c):l.a.createElement("div",{className:"dash-v-c"},l.a.createElement("div",{className:"view-c"},l.a.createElement("p",{className:"view-head"},c)),l.a.createElement("div",{className:"view-img-c"},l.a.createElement("img",{className:"view-img",src:E})));return Object(n.useEffect)((function(){y.database().ref("posts/"+e).once("value",(function(e){e.exists()?(s(e.val().title),u(e.val().description),e.val().hasOwnProperty("uri")&&h(e.val().uri)):(alert("invalid post"),N(!0))})).catch((function(e){return alert("Network issue")}))}),[]),v?l.a.createElement(R.a,{push:!0,to:"/"}):l.a.createElement("div",{className:"dash-view"},l.a.createElement(i.Scrollbars,{style:{display:"flex",flex:1,width:"100%",justifyContent:"center",flexDirection:"column"}},l.a.createElement("div",{className:"dash-view"},l.a.createElement("div",{className:"dash-v"},w,l.a.createElement("div",{style:{width:"100%",display:"flex"}},l.a.createElement("textarea",{style:{width:"100%",outline:"none",border:0,resize:"none",color:"#fff",background:"transparent",marginTop:20,paddingRight:20,paddingLeft:20,fontSize:17,minHeight:"30vh",maxHeight:"60vh",height:"auto"},value:d,readOnly:!0}))))))}function Y(){return l.a.createElement("div",{className:"er-c"},l.a.createElement("div",{className:"er-n"},l.a.createElement("p",{className:"er-t"},"404"),l.a.createElement(g.b,{to:"/"},"Go to Home page")))}var J=function(){return l.a.createElement(g.a,null,l.a.createElement(R.d,null,l.a.createElement(R.b,{exact:!0,path:"/"},l.a.createElement(U,null)),l.a.createElement(R.b,{path:"/dashboard"},l.a.createElement(W,null)),l.a.createElement(R.b,{path:"/login"},l.a.createElement(F,null)),l.a.createElement(R.b,{path:"/posts/:id"},l.a.createElement(V,null)),l.a.createElement(R.b,{path:"*"},l.a.createElement(Y,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.4cc21d13.chunk.js.map