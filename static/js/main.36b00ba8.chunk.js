(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(11),o=t.n(i),c=(t(77),t(14)),u=t(15),l=t(18),s=t(16),m=t(19),d=t(6),p=t(113),f=t(1),h=t(114),b=t(112),g=t(116),x=t(24);function v(){var n=Object(d.a)(["\n    margin: 2rem;\n    width: 50%;\n    text-align: center;\n    align-self: center;\n"]);return v=function(){return n},n}var w=f.default.div(v()),y=function(n){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(m.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement(w,null,r.a.createElement(h.a,{onSubmit:this.props.submitHandler},r.a.createElement("div",null,r.a.createElement(b.a,{placeholder:"Search by Title or Author",onChange:this.props.changeHandler,value:this.props.searchQuery}),r.a.createElement(g.a,{style:{marginTop:"1rem"},type:"submit",primary:!0,label:r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{icon:"search"}),"\xa0Search")}))))}}]),e}(a.Component),j=t(66),O=t.n(j);function k(){var n=Object(d.a)(["\n    from {\n        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);\n        animation-timing-function: ease-out;\n    }\n\n    40% {\n        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n        rotate3d(0, 1, 0, -190deg);\n        animation-timing-function: ease-out;\n    }\n\n    50% {\n        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n        rotate3d(0, 1, 0, -170deg);\n        animation-timing-function: ease-in;\n    }\n\n    80% {\n        transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n        rotate3d(0, 1, 0, 0deg);\n        animation-timing-function: ease-in;\n    }\n\n    to {\n        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);\n        animation-timing-function: ease-in;\n    }\n"]);return k=function(){return n},n}function E(){var n=Object(d.a)(["\n    from,\n    20%,\n    53%,\n    80%,\n    to {\n        animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n        transform: translate3d(0, 0, 0);\n    }\n\n    40%,\n    43% {\n        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n        transform: translate3d(0, -30px, 0);\n    }\n\n    70% {\n        animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n        transform: translate3d(0, -15px, 0);\n    }\n\n    90% {\n        transform: translate3d(0, -4px, 0);\n    }\n"]);return E=function(){return n},n}Object(f.keyframes)(E());var S=Object(f.keyframes)(k());function z(){var n=Object(d.a)(["\n    display: block;\n    position: absolute;\n    bottom: 10px;\n    right: 10px;\n    padding: 5px;\n    border-radius: 10px;\n    background-color: #6fd696;\n    font-size: 0.6rem;\n    text-decoration: none;\n    color: black;\n"]);return z=function(){return n},n}function H(){var n=Object(d.a)(["\n    /* width: 100%; */\n    /* grid-row: 1 / span 2; */\n    padding-left: 20px;\n    grid-column: 2 / span 1;\n"]);return H=function(){return n},n}function Q(){var n=Object(d.a)(["animation: "," 1s linear;"]);return Q=function(){return n},n}function C(){var n=Object(d.a)(["\n    margin-top: -25px;\n    /* grid-row: 1 / span 2; */\n    grid-column: 1 / span 1;\n    display: block;\n    width: 128px;\n    height: 198px;\n    box-shadow: 2px 2px 18px -1px rgba(191,191,191,1);\n    ","\n"]);return C=function(){return n},n}function B(){var n=Object(d.a)(["\n    position: relative;\n    font-size: 0.9rem;\n    margin: 20px;\n    background-color: white;\n    border-radius: 10px;\n    display: grid;\n    grid-template-columns: 128px 1fr;\n    grid-template-rows: 1fr;\n    width: 600px;\n    height: 208px;\n    padding: 5px 20px;\n    overflow: visible;\n    box-sizing: border-box;\n    box-shadow: 2px 2px 18px -1px rgba(191,191,191,1);\n    transition: transform 0.2s ease-out;\n    &:hover {\n        transform: scale(1.03);\n        transition: transform 0.15s ease-out;\n    }\n\n    @media(max-width: 650px) {\n        @media(min-width: 421px) {\n            width: 550px;\n            font-size: 0.7rem;\n        }\n        @media(max-width: 420px) {\n        width: 320px;\n        font-size: 0.6rem;\n        }\n    }\n"]);return B=function(){return n},n}var D=f.default.div(B()),F=f.default.img(C(),function(n){return n.animate?Object(f.css)(Q(),S):null}),I=f.default.div(H()),L=f.default.a(z()),M=function(n){function e(){var n,t;Object(c.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(l.a)(this,(n=Object(s.a)(e)).call.apply(n,[this].concat(r)))).state={animate:!1},t}return Object(m.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){var n=this,e=this.props;return r.a.createElement(D,{onMouseEnter:function(){return n.setState(function(){return{animate:!0}})},onMouseLeave:function(){return n.setState(function(){return{animate:!1}})}},r.a.createElement(F,{src:e.imgSrc,alt:e.title,animate:this.state.animate}),r.a.createElement(I,null,r.a.createElement("h3",null,e.title),r.a.createElement("p",null,r.a.createElement("em",null,"By:")," ",e.authors),r.a.createElement("p",null,r.a.createElement("em",null,"Publisher:")," ",e.publisher)),r.a.createElement(L,{href:e.link},"More Info"))}}]),e}(r.a.Component),A=t(67),J=t.n(A);function N(){var n=Object(d.a)(["\n    margin-top: 100%;\n    animation: "," 1s linear infinite;\n    color: lightgrey;\n"]);return N=function(){return n},n}function T(){var n=Object(d.a)(["\n    display: flex;\n    flex-flow: row;\n    flex-wrap: wrap;\n    max-width: 1450px;\n    justify-content: center;\n"]);return T=function(){return n},n}var W=f.default.div(T()),q=Object(f.default)(x.a)(N(),S),P=function(n){var e=null;return n.loading?e=r.a.createElement(q,{icon:"book",size:"6x"}):n.bookData&&(e=n.bookData.map(function(n,e){var t=n.volumeInfo;return r.a.createElement(M,{key:n.id,imgSrc:t.imageLinks?t.imageLinks.thumbnail:J.a,title:t.title,authors:t.authors?t.authors.length>1?t.authors.join(", "):t.authors:"--None Found--",publisher:t.publisher?t.publisher:"--None Found--",link:t.previewLink})})),n.err&&(e=r.a.createElement("h3",null,"Unable to Fetch Book Data")),r.a.createElement(W,null,e)},U=t(21),$=t(41);function G(){var n=Object(d.a)(["\n    display: flex;\n    flex-flow: column;\n    width: 100%;\n    height: 100vh;\n    justify-content: flex-start;\n    align-items: center;\n"]);return G=function(){return n},n}U.b.add($.b,$.a);var K={global:{font:{family:"Montserrat",size:"14px",height:"20px"}}},R=f.default.div(G()),V=function(n){function e(){var n,t;Object(c.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(l.a)(this,(n=Object(s.a)(e)).call.apply(n,[this].concat(r)))).state={searchQuery:"",bookData:null,err:null,loading:!1},t.inputChangeHandler=function(n){t.setState({searchQuery:n.target.value})},t.submitHandler=function(){t.setState({loading:!0}),O.a.get("https://www.googleapis.com/books/v1/volumes",{params:{q:t.state.searchQuery}}).then(function(n){return t.setState({bookData:n.data.items,loading:!1,searchQuery:""})}).catch(function(n){return t.setState({err:n,loading:!1,searchQuery:""})})},t}return Object(m.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){var n=this;return r.a.createElement(p.a,{theme:K},r.a.createElement(R,null,r.a.createElement("h1",null,"Book Finder"),r.a.createElement(y,{changeHandler:function(e){return n.inputChangeHandler(e)},submitHandler:this.submitHandler,searchQuery:this.state.searchQuery}),r.a.createElement(P,this.state)))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},67:function(n,e,t){n.exports=t.p+"static/media/noImg.ec6ec063.png"},72:function(n,e,t){n.exports=t(106)},77:function(n,e,t){}},[[72,1,2]]]);
//# sourceMappingURL=main.36b00ba8.chunk.js.map