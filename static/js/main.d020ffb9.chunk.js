(this["webpackJsonpreact-capstone"]=this["webpackJsonpreact-capstone"]||[]).push([[0],{123:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(16),r=c.n(s),o=c(13),i=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,134)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))},l=(c(68),c(69),c(24)),j=c(54),d=c(53),b=c(7),u="FETCH_STOCK_ITEM_SUCCESS",h="FETCH_STOCK_ITEM_FAILURE",O="FETCH_STOCK_ITEM_REQUEST",p={loading:!1,stockItem:{},error:""},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case u:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,stockItem:t.payload,error:""});case h:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,stockItem:[],error:t.payload});default:return e}},x="FETCH_STOCK_SUCCESS",f="FETCH_STOCK_FAILURE",g="FETCH_STOCK_REQUEST",v={loading:!1,stocks:[],error:""},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case x:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,stocks:t.payload,error:""});case f:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,stocks:[],error:t.payload});default:return e}},y="FETCH_NEWS_SUCCESS",N="FETCH_NEWS_FAILURE",S="FETCH_NEWS_REQUEST",C={loading:!1,news:[],error:""},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case y:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,news:t.payload,error:""});case N:return Object(b.a)(Object(b.a)({},e),{},{loading:!1,news:[],error:t.payload});default:return e}},F=Object(l.combineReducers)({stocks:k,stockItem:m,stockNews:w}),E=Object(l.createStore)(F,Object(d.composeWithDevTools)(Object(l.applyMiddleware)(j.a))),T=c(60),_=c(29),I=c(127),R=c(130),D=c(132),L=c(131),H=c(126),K=c(2);var M=function(e){var t=e.handleOnSelect;return Object(K.jsxs)(R.a,{bg:"dark",variant:"dark",children:[Object(K.jsx)(R.a.Brand,{href:"/Capstone-React-Finance",children:"STOCKIST"}),Object(K.jsx)(R.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(K.jsxs)(R.a.Collapse,{id:"basic-navbar-nav",children:[Object(K.jsxs)(D.a,{className:"mr-auto",children:[Object(K.jsx)(D.a.Link,{href:"/Capstone-React-Finance",children:"Home"}),Object(K.jsx)(D.a.Link,{href:"/Capstone-React-Finance/news",children:"Stock News"})]}),Object(K.jsxs)(L.a,{inline:!0,children:[Object(K.jsxs)(L.a.Control,{onChange:t,as:"select",className:"mr-sm-2",children:[Object(K.jsx)("option",{value:"active",children:"Most Active "}),Object(K.jsx)("option",{value:"gainers",children:"Most Gainers "}),Object(K.jsx)("option",{value:"losers",children:"Most Losers "})]}),Object(K.jsx)(H.a,{variant:"outline-success",children:"Filter by category"})]})]})]})},P=c(26),U=c(133),A=c(19);var z=function(e){var t=e.stock,c=t.changesPercentage.match(/(-|\+)|(\.)|\d+/g).join(""),a=parseFloat(c);return Object(K.jsx)(U.a,{style:{width:"16rem"},className:"m-2 bg-dark",children:Object(K.jsxs)(U.a.Body,{className:"d-flex flex-column",children:[Object(K.jsx)(U.a.Title,{className:"text-light font-weight-bold",children:t.ticker}),Object(K.jsx)(U.a.Subtitle,{className:"mb-2 text-muted",children:t.companyName}),Object(K.jsxs)(U.a.Text,{className:"d-flex justify-content-between ".concat(a>0?"text-success":"text-danger"),children:[" ".concat(t.price," ").concat(t.currency||"USD")," ",Object(K.jsx)(A.a,{}),Object(K.jsx)("em",{children:"".concat(a,"%")}),a>0?Object(K.jsx)(A.c,{}):Object(K.jsx)(A.b,{})]}),Object(K.jsx)("div",{className:"mt-auto",children:Object(K.jsx)("a",{href:"\\Capstone-React-Finance\\stock\\".concat(t.ticker),className:"btn btn-outline-success w-100",children:"Details"})})]})})},B=c(27),W=c.n(B),Q=c(59);c.n(Q).a.config();var J="ad6d90ac5538dd0a055083eb9761f0b3",G="https://financialmodelingprep.com/api/v3/actives?apikey=".concat(J),V="https://financialmodelingprep.com/api/v3/gainers?apikey=".concat(J),Y="https://financialmodelingprep.com/api/v3/losers?apikey=".concat(J),q="https://financialmodelingprep.com/api/v3/stock_news?limit=50&apikey=".concat(J),X=function(e){return function(t){var c=G;"active"===e&&(c=G),"gainers"===e&&(c=V),"losers"===e&&(c=Y),t({type:g}),W.a.get(c,{mode:"cors"}).then((function(e){var c=e.data;t({type:x,payload:c})})).catch((function(e){t(function(e){return{type:f,payload:e}}(e.message))}))}};function Z(e){var t=e.stockData,c=e.fetchStocks,n=Object(o.d)((function(e){return e.urlType}));return Object(a.useEffect)((function(){c(n)}),[n]),t.loading?Object(K.jsx)("h2",{className:"text-center pt-5",children:Object(K.jsx)(P.ScaleLoader,{size:16,color:"green"})}):t.error?Object(K.jsx)("h2",{className:"text-center pt-5",children:"Kindly check back, Server currently not responding"}):Object(K.jsx)("div",{className:"mt-5 d-flex flex-wrap justify-content-center",children:t.stocks.map((function(e){return Object(K.jsx)(z,{stock:e},e.ticker)}))})}Z.defaultProps={stockData:{stocks:[],loading:!1}};var $=Object(o.b)((function(e){return{stockData:e.stocks}}),(function(e){return{fetchStocks:function(t){return e(X(t))}}}))(Z),ee=function(e){return function(t){var c;t({type:O}),W.a.get((c=e,"https://financialmodelingprep.com/api/v3/profile/".concat(c,"?apikey=").concat(J)),{mode:"cors"}).then((function(e){var c,a=e.data;t((c=a[0],{type:u,payload:c}))})).catch((function(e){t(function(e){return{type:h,payload:e}}(e.message))}))}},te=function(){return function(e){e({type:S}),W.a.get(q,{mode:"cors"}).then((function(t){var c=t.data;e({type:y,payload:c})})).catch((function(t){e(function(e){return{type:N,payload:e}}(t.message))}))}};var ce=function(){var e=Object(o.c)();return Object(K.jsxs)(I.a,{className:"pt-5 pb-5",children:[Object(K.jsx)(M,{handleOnSelect:function(t){e(X(t.target.value))}}),Object(K.jsx)($,{})]})};function ae(){return Object(K.jsx)("footer",{className:"footer",children:Object(K.jsx)("div",{className:"container",children:Object(K.jsxs)("span",{className:"text-muted",children:["\xa9"," ".concat((new Date).getFullYear()," All rights reserved | site by Acushla Koncepts.")]})})})}var ne=c(57);function se(e){var t=e.handleFormClick;return Object(K.jsxs)(R.a,{bg:"dark",variant:"dark",children:[Object(K.jsx)(R.a.Brand,{href:"/Capstone-React-Finance",children:"STOCKIST"}),Object(K.jsxs)(D.a,{className:"mr-auto",children:[Object(K.jsx)(D.a.Link,{href:"/Capstone-React-Finance",children:"Home"}),Object(K.jsx)(D.a.Link,{href:"/Capstone-React-Finance/news",children:"Stock News"})]}),Object(K.jsxs)(L.a,{inline:!0,onSubmit:t,children:[Object(K.jsx)(ne.a,{type:"text",placeholder:"Search Stock",className:"mr-sm-2",name:"ticker"}),Object(K.jsx)(H.a,{type:"submit",variant:"outline-success",children:"Search"})]})]})}se.defaultProps={handleFormClick:function(e){e.preventDefault();var t="/stock/".concat(e.target[0].value);window.location.href=t}};var re=se,oe=c(128),ie=c(40),le=c.p+"static/media/not_found.0c7994f7.jpg";function je(e){var t=e.stockItem;return Object(K.jsx)("div",{children:Object(K.jsx)(oe.a,{fluid:!0,children:Object(K.jsxs)(I.a,{children:[Object(K.jsxs)("h1",{className:"shadow-sm pb-2 mb-3",children:[t.symbol,Object(K.jsxs)("small",{className:"priceChange",children:[Object(K.jsx)(A.a,{color:"transparent"}),"Price:"," ",t.price,Object(K.jsx)(A.a,{color:"transparent"}),"Price change:"," ",Object(K.jsx)("span",{className:"".concat(t.changes>0?"text-success":"text-danger"),children:t.changes}),Object(K.jsx)(A.a,{color:"transparent"}),t.changes>0?Object(K.jsx)(ie.b,{size:40}):Object(K.jsx)(ie.a,{size:40})]})]}),Object(K.jsxs)("h4",{className:"text-center text-success",children:[t.companyName,Object(K.jsx)(A.a,{color:"transparent"}),Object(K.jsxs)("small",{children:["Industry:",t.industry]}),Object(K.jsx)("hr",{})]}),Object(K.jsxs)("p",{className:"lead text-justify readMaxLength",children:[Object(K.jsx)("img",{src:t.image,alt:t.symbol,onError:function(e){e.target.src=le},className:"float-left m-2 img-thumbnail w-25"}),t.description,Object(K.jsxs)("a",{href:t.website,target:"__blank",rel:"noopener",children:[" ","Visit Website"]})]})]})})})}function de(){var e=Object(_.c)().ticker,t=Object(o.c)(),c=Object(o.d)((function(e){return e.stockItem})).stockItem,n=Object(o.d)((function(e){return e.loading}));return Object(a.useEffect)((function(){t(ee(e))}),[t]),n?Object(K.jsx)("h2",{className:"text-center pt-5",children:Object(K.jsx)(P.ScaleLoader,{size:16,color:"white"})}):void 0===c?Object(K.jsx)("h2",{className:"text-center pt-5 pb-5",children:"Stock Item Not Found!"}):Object(K.jsx)(je,{stockItem:c})}function be(){return Object(K.jsxs)(I.a,{className:"pt-5 pb-5",children:[Object(K.jsx)(re,{handleFormClick:function(e){e.preventDefault();var t="/stock/".concat(e.target[0].value);window.location.href=t}}),Object(K.jsx)(de,{}),Object(K.jsx)(ae,{})]})}je.defaultProps={stockItem:{}};var ue=c(129),he=c(58);function Oe(e){var t=e.news;return Object(K.jsx)(oe.a,{fluid:!0,className:"rounded mt-3 mb-2",children:Object(K.jsx)(I.a,{children:Object(K.jsxs)(ue.a,{children:[Object(K.jsxs)(he.a,{md:4,children:[" ",Object(K.jsx)("img",{src:t.image,className:"img-fluid img-thumbnail rounded",alt:""})]}),Object(K.jsxs)(he.a,{md:8,children:[Object(K.jsx)("h1",{children:t.symbol}),Object(K.jsx)("h4",{children:t.title}),Object(K.jsxs)("small",{className:"text-muted",children:["published:",t.publishedDate]}),Object(K.jsx)("hr",{}),Object(K.jsxs)("p",{className:"lead",children:[t.text,Object(K.jsx)("br",{}),Object(K.jsx)("a",{href:t.url,className:"text-light btn btn-success mt-2",target:"__blank",rel:"noopener",children:" Read more"})]})]})]})})})}Oe.defaultProps={news:{}};var pe=Oe;function me(e){var t=e.newsData,c=e.fetchNews;return Object(a.useEffect)((function(){c()}),[]),t.loading?Object(K.jsx)("h2",{className:"text-center pt-5",children:Object(K.jsx)(P.ScaleLoader,{size:16,color:"green"})}):t.error||Object.keys(t.news)<2?Object(K.jsx)("h2",{className:"text-center pt-5",children:"Kindly check back, Server currently not responding"}):Object(K.jsx)("div",{className:"mt-5 d-flex flex-wrap justify-content-center",children:t.news.map((function(e){return Object(K.jsx)(pe,{news:e},"".concat(e.symbol,"-").concat(Math.floor(11*Math.random())))}))})}me.defaultProps={newsData:{}};var xe=Object(o.b)((function(e){return{newsData:e.stockNews}}),(function(e){return{fetchNews:function(){return e(te())}}}))(me);function fe(){return Object(K.jsxs)(I.a,{className:"pt-5 pb-5",children:[Object(K.jsx)(re,{}),Object(K.jsx)(xe,{})]})}var ge=Object(T.a)(),ve=function(){return Object(K.jsxs)(_.b,{history:ge,children:[Object(K.jsx)(_.a,{exact:!0,path:"/Capstone-React-Finance",component:ce}),Object(K.jsx)(_.a,{exact:!0,path:"/Capstone-React-Finance/news",component:fe}),Object(K.jsx)(_.a,{exact:!0,path:"/Capstone-React-Finance/stock/:ticker",component:be})]})};r.a.render(Object(K.jsx)(n.a.StrictMode,{children:Object(K.jsx)(o.a,{store:E,children:Object(K.jsx)(ve,{})})}),document.getElementById("root")),i()},69:function(e,t,c){}},[[123,1,2]]]);
//# sourceMappingURL=main.d020ffb9.chunk.js.map