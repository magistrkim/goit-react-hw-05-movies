"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[337],{337:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(439),a=n(791),i=n(689),s=n(264),c=n(844),o=n(474),u={item:"reviews-item_item__4Oso6",title:"reviews-item_title__n8TuR",text:"reviews-item_text__f0BJh",expandLink:"reviews-item_expandLink__LwJsb",description:"reviews-item_description__KV87W"},p=n(184),l=function(t){var e=t.data,n=e.author,i=e.content,s=(0,a.useState)(!1),c=(0,r.Z)(s,2),o=c[0],l=c[1];return(0,p.jsxs)("li",{className:u.item,children:[(0,p.jsxs)("p",{className:u.title,children:["Author: ",(0,p.jsx)("span",{className:u.span,children:n})]}),i.length>300?(0,p.jsxs)("p",{className:u.text,children:[o?i:"".concat(i.substring(0,300),"..."),(0,p.jsx)("span",{className:u.expandLink,onClick:function(){l(!o)},children:o?"See less":"See more"})]}):(0,p.jsx)("p",{className:u.text,children:i})]})},d="reviews-list_list__K+XdN",m=function(t){var e=t.data;return(0,p.jsx)("ul",{className:d,children:e.map((function(t){return(0,p.jsx)(l,{data:t},t.id)}))})},h=function(){var t=(0,a.useState)(null),e=(0,r.Z)(t,2),n=e[0],l=e[1],d=(0,a.useState)(!1),h=(0,r.Z)(d,2),f=h[0],v=h[1],g=(0,i.UO)().movieId;return(0,a.useEffect)((function(){v(!0),(0,c.tx)(g).then((function(t){return l(t)})).catch((function(){return s.Notify.warning("Oops! Something went wrong, please try again later.")})).finally((function(){return v(!1)}))}),[g]),(0,p.jsxs)(p.Fragment,{children:[f&&(0,p.jsx)(o.Z,{}),0===(null===n||void 0===n?void 0:n.length)&&(0,p.jsx)("p",{className:u.description,children:"There is no information about this movie."}),n&&(0,p.jsx)(m,{data:n})]})}},844:function(t,e,n){n.d(e,{Df:function(){return c},M1:function(){return p},Pt:function(){return o},tx:function(){return l},uR:function(){return u}});var r=n(861),a=n(757),i=n.n(a),s=n(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"248116f5568d54feca6593c74cdd2b90",language:"en-US",include_adult:!1,page:1},headers:{accept:"application/json"}}),c=function(){var t=(0,r.Z)(i().mark((function t(){var e,n,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/trending/movie/day",t.next=3,s.get("/trending/movie/day");case 3:return e=t.sent,n=e.data,r=n.results.map((function(t){var e=t.id,n=t.title,r=t.poster_path;return{id:e,movieTitle:n.length>25?"".concat(n.substring(0,22),"..."):n,src:r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://via.placeholder.com/200x300.png?text=No+Image"}})),t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(i().mark((function t(e){var n,r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/search/movie",t.next=3,s.get("/search/movie",{params:{query:e}});case 3:return n=t.sent,r=n.data,a=r.results.map((function(t){var e=t.id,n=t.name,r=t.title,a=t.poster_path,i=r||n;return i.length>25&&(i=i.substring(0,22)+"..."),{id:e,movieTitle:i,src:a?"https://image.tmdb.org/t/p/w500/".concat(a):"https://via.placeholder.com/200x300.png?text=No+Image"}})),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=(0,r.Z)(i().mark((function t(e){var n,r,a,c,o,u,p,l,d,m;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e),t.next=3,s.get(n);case 3:return r=t.sent,a=r.data,c=a.genres,o=a.title,u=a.poster_path,p=a.release_date,l=a.vote_average,d=a.overview,m=u?"https://image.tmdb.org/t/p/w500/".concat(u):"https://via.placeholder.com/200x300",t.abrupt("return",{id:e,title:o,posterPath:m,releaseYear:p.substr(0,4),voteAverage:"".concat((10*l).toFixed(0),"%"),overview:d,genres:c.length?c.map((function(t){return t.name})).join(", "):"Oops!! Unknown genres."});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(i().mark((function t(e){var n,r,a,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e,"/credits"),t.next=3,s.get(n);case 3:return r=t.sent,a=r.data,c=a.cast.map((function(t){var e=t.name,n=t.character,r=t.id,a=t.profile_path;return{name:e,character:n,id:r,src:a?"https://image.tmdb.org/t/p/w500/".concat(a):"https://via.placeholder.com/200x300"}})),t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(i().mark((function t(e){var n,r,a,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e,"/reviews"),t.next=3,s.get(n);case 3:return r=t.sent,a=r.data,c=a.results.map((function(t){return{author:t.author,id:t.id,content:t.content}})),t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=337.b2072080.chunk.js.map