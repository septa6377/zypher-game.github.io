(self.webpackChunkbingo_frontend=self.webpackChunkbingo_frontend||[]).push([[9867],{89552:(e,n,a)=>{"use strict";var t=a(49932).default,r=a(85269).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(a(32716)),l=r(a(23035)),o=r(a(67900)),c=r(a(94184)),s=r(a(23279)),u=r(a(54406)),d=t(a(67294)),m=a(31929),g=a(47419),N=a(66764),p=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(a[t[r]]=e[t[r]])}return a},v=((0,N.tuple)("small","default","large"),null);var f=function(e){var n=e.spinPrefixCls,a=e.spinning,t=void 0===a||a,r=e.delay,N=e.className,f=e.size,_=void 0===f?"default":f,y=e.tip,b=e.wrapperClassName,I=e.style,k=e.children,M=p(e,["spinPrefixCls","spinning","delay","className","size","tip","wrapperClassName","style","children"]),j=d.useState((function(){return t&&!function(e,n){return!!e&&!!n&&!isNaN(Number(n))}(t,r)})),E=(0,o.default)(j,2),D=E[0],C=E[1];d.useEffect((function(){var e=(0,s.default)((function(){C(t)}),r);return e(),function(){var n;null===(n=null==e?void 0:e.cancel)||void 0===n||n.call(e)}}),[r,t]);var h=function(a){var t,r=a.direction,o=(0,c.default)(n,(t={},(0,l.default)(t,"".concat(n,"-sm"),"small"===_),(0,l.default)(t,"".concat(n,"-lg"),"large"===_),(0,l.default)(t,"".concat(n,"-spinning"),D),(0,l.default)(t,"".concat(n,"-show-text"),!!y),(0,l.default)(t,"".concat(n,"-rtl"),"rtl"===r),t),N),s=(0,u.default)(M,["indicator","prefixCls"]),m=d.createElement("div",(0,i.default)({},s,{style:I,className:o,"aria-live":"polite","aria-busy":D}),function(e,n){var a=n.indicator,t="".concat(e,"-dot");return null===a?null:(0,g.isValidElement)(a)?(0,g.cloneElement)(a,{className:(0,c.default)(a.props.className,t)}):(0,g.isValidElement)(v)?(0,g.cloneElement)(v,{className:(0,c.default)(v.props.className,t)}):d.createElement("span",{className:(0,c.default)(t,"".concat(e,"-dot-spin"))},d.createElement("i",{className:"".concat(e,"-dot-item")}),d.createElement("i",{className:"".concat(e,"-dot-item")}),d.createElement("i",{className:"".concat(e,"-dot-item")}),d.createElement("i",{className:"".concat(e,"-dot-item")}))}(n,e),y?d.createElement("div",{className:"".concat(n,"-text")},y):null);if(void 0!==k){var p=(0,c.default)("".concat(n,"-container"),(0,l.default)({},"".concat(n,"-blur"),D));return d.createElement("div",(0,i.default)({},s,{className:(0,c.default)("".concat(n,"-nested-loading"),b)}),D&&d.createElement("div",{key:"loading"},m),d.createElement("div",{className:p,key:"container"},k))}return m};return d.createElement(m.ConfigConsumer,null,h)},_=function(e){var n=e.prefixCls,a=(0,d.useContext(m.ConfigContext).getPrefixCls)("spin",n),t=(0,i.default)((0,i.default)({},e),{spinPrefixCls:a});return d.createElement(f,(0,i.default)({},t))};_.setDefaultIndicator=function(e){v=e};var y=_;n.default=y},9405:(e,n,a)=>{"use strict";a(83099),a(87269)},76040:(e,n,a)=>{"use strict";a.d(n,{i:()=>p,Z:()=>v});a(9405);var t=a(89552),r=a(18446),i=a.n(r),l=a(67294),o=a(29163);const c="NoData_loadMore__JCdyH";var s,u,d=a(53308);function m(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}const g=o.ZP.div(s||(s=m(["\n  text-align: center;\n  padding-top: 172px;\n  padding-bottom: 273px;\n"]))),N=o.ZP.div(u||(u=m(["\n  color: #fff;\n  font-family: Poppins;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 30px; /* 214.286% */\n"]))),p=(0,l.memo)((e=>{let{hasError:n,loading:a,errorCss:r,loadMoreCss:i}=e;return n?l.createElement("div",{className:r},l.createElement("p",null,"Error")):a?l.createElement("div",{className:null!=i?i:c},l.createElement(t.default,{size:"large",tip:"Loading..."})):l.createElement(v,null)}),i());function v(){return l.createElement(l.Fragment,null,l.createElement(g,null,l.createElement("img",{src:d,alt:""}),l.createElement(N,null,"NO Data")))}},55142:(e,n,a)=>{"use strict";a.d(n,{Z:()=>g});var t=a(18446),r=a.n(t),i=a(94184),l=a.n(i),o=a(67294),c=a(9120);const s="tab_tab__bNuRB",u="tab_tabItem__Jq6pC",d="tab_cur__lzqtz",m=(0,o.memo)((e=>{let{tab:n,list:a,setTab:t,className:r}=e;const i=(0,c.d)();return o.createElement("div",{className:l()(s,r),style:{width:(i?110:120)*a.length}},a.map(((e,a)=>o.createElement("div",{key:e,className:l()(u,{[d]:n===a}),onClick:()=>t(a)},e))))}),r()),g=m},9867:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>J});a(9405);var t=a(89552),r=a(94184),i=a.n(r),l=a(67294),o=a(76040),c=a(9120),s=a(55142),u=a(18446),d=a.n(u),m=a(66847),g=a(61511);const N={ranking_banner:"rankingBanner_ranking_banner__pQvJf",ranking_banner_item:"rankingBanner_ranking_banner_item__zPHlu",ranking_logo:"rankingBanner_ranking_logo__gpjUN",bgAvatarBorder:"rankingBanner_bgAvatarBorder__UBhe9",account:"rankingBanner_account__vvjDe",avatarBorder:"rankingBanner_avatarBorder__3R-pk",box_top:"rankingBanner_box_top__NuNzd",box:"rankingBanner_box__7npuz",box_inner:"rankingBanner_box_inner__t2hog",ranking_banner_item_2:"rankingBanner_ranking_banner_item_2__1OX7S",ranking_banner_item_1:"rankingBanner_ranking_banner_item_1__0m7wt",ranking_banner_item_3:"rankingBanner_ranking_banner_item_3__anqyA"},p=(0,l.memo)((e=>{let{isMobile:n,players:a}=e;const t=(0,l.useMemo)((()=>n?{preLen:3,endLen:3,size:24}:{preLen:void 0,endLen:void 0,size:24}),[n]);return l.createElement("div",{className:N.ranking_banner},[1,0,2].map((e=>{var r,o;return l.createElement("div",{key:e,className:i()(N.ranking_banner_item,N["ranking_banner_item_".concat(null!==(r=null===(o=a[e])||void 0===o?void 0:o.index)&&void 0!==r?r:"")])},a[e]?l.createElement(l.Fragment,null,l.createElement("img",{src:"/img/ranking/rank0".concat(a[e].index,".png"),alt:"ranking",className:N.ranking_logo}),l.createElement(m.Z,{className:N.account,account:a[e].address,size:n?45:70,showAccount:!0,border:!1,preLen:t.preLen,endLen:t.endLen,AvatarBorder:n=>{let{children:a}=n;return l.createElement("div",{className:N.avatarBorder},l.createElement("div",{className:N.bgAvatarBorder},l.createElement("svg",{viewBox:"0 0 100 100",fill:"none"},l.createElement("rect",{x:"0.5",y:"0.5",width:"99",height:"99",rx:"49.5",stroke:["#FFF061","#BCF3FF","#F27500"][e]}))),a)}}),l.createElement("div",{className:N.box_top}),l.createElement("div",{className:N.box},l.createElement("div",{className:N.box_inner},l.createElement("p",{className:N.amount},a[e].amount),l.createElement(g.Z,{isMobile:n})))):null)})))}),d()),v="rankingMy_rank_my__Wxfhn",f="rankingMy_side__QciL1",_="rankingMy_rank_my_item__YwWE4";var y=a(44431),b=a.n(y);const I={rank:"RankCol_rank__jcfCI",p:"RankCol_p__ji0jD",rankIcon:"RankCol_rankIcon__FGCA7",nospan:"RankCol_nospan__wjF7j",line:"RankCol_line__NAm-q",account:"RankCol_account__59taW",avatarBorder:"RankCol_avatarBorder__kfNhR"},k=(0,l.memo)((e=>{let{rank:n,account:a,isMobile:t,showLine:r=!1,otherStr:i}=e;const o=(0,l.useMemo)((()=>{if(n&&"undefined"!==n)return new(b())(n).isLessThan(4)?l.createElement("img",{className:I.img,src:"/img/invitation/rank".concat(n,".svg"),title:"invitation"}):l.createElement("p",{className:I.p},"#",n)}),[n]),c=(0,l.useMemo)((()=>t?{preLen:3,endLen:3,size:24}:{preLen:void 0,endLen:void 0,size:24}),[t]);return l.createElement("div",{className:I.rank},o&&l.createElement("div",{className:I.rankIcon},o),o&&(!t||r)&&l.createElement("div",{className:I.line}),!o&&l.createElement("div",{className:I.nospan}),l.createElement(m.Z,{className:I.account,account:a,size:c.size,showAccount:!0,border:!1,preLen:c.preLen,endLen:c.endLen,AvatarBorder:M,otherStr:i}))}),d()),M=(0,l.memo)((e=>{let{children:n}=e;return l.createElement("div",{className:I.avatarBorder},n)})),j=k,E="rankingTable_ranking_table__5bcps",D="rankingTable_item__mpLGt",C="rankingTable_odd-row__7zZkt",h="rankingTable_even-row__2KnHr",w=(0,l.memo)((e=>{let{isMobile:n,players:a,tab:t}=e;return l.createElement("div",{className:E},a.map((e=>{var a;return l.createElement(x,{key:e.index,player:e,isMobile:n,tab:t,className:(null!==(a=null==e?void 0:e.index)&&void 0!==a?a:0)%2!=0?h:C})})))}),d()),x=(0,l.memo)((e=>{let{player:n,tab:a,isMobile:t,className:r,otherStr:o}=e;return l.createElement("div",{className:i()(D,r)},l.createElement(j,{rank:"".concat(n.index),account:n.address,isMobile:t,showLine:!0,otherStr:o}),l.createElement("p",null,0===a?n.joinAmount:n.winAmount,l.createElement(g.Z,{isMobile:t})))}),d()),A=w;function z(){return z=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},z.apply(this,arguments)}const S=(0,l.memo)((e=>l.createElement("div",{className:v},l.createElement("div",{className:f}),l.createElement(x,z({},e,{className:_,otherStr:"(YOU)"})))),d());var B=a(46474),T=a(59619),L=a(80941),W=a(88017),O=a(76098);const P="Ranking_ranking__nJfZu",Z="Ranking_rankingTab__Bfenk",Q="Ranking_loadMore__0tua6",J=e=>{const n=(0,c.d)(),{ranking:a,tab:r,setTab:u,loading:d,myItem:m}=(()=>{const[e,n]=(0,l.useState)(0),{chainId:a,account:t}=(0,T.a)(),[r,i]=(0,l.useState)(),[o,c]=(0,l.useState)(),[s,u]=(0,l.useState)(!1),d=(0,l.useCallback)((async()=>{const n=null!=a?a:O.VW,t=O.d8[n];if(!t)return;i(void 0),u(!0);const r=await(0,L.W)(t,{method:"POST",data:JSON.stringify({query:"query MyQuery {\n          playerDatas(orderBy: ".concat(0===e?"joinAmount":"winAmount",", orderDirection: desc, first: 20) {\n            winAmount\n            joinAmount\n            player\n          }\n        }"),variables:{},operationName:"MyQuery"}),headers:{"Content-Type":"application/json"}});if(r.data&&r.data.data&&r.data.data.playerDatas&&r.data.data.playerDatas.length){const n=r.data.data.playerDatas.map(((n,a)=>{const t=(0,W.lb)(Number(B.formatEther(n.joinAmount))),r=(0,W.lb)(Number(B.formatEther(n.winAmount)));return{index:a+1,address:n.player,amount:0===e?t:r,joinAmount:t,winAmount:r}}));i(n)}u(!1)}),[a,t,e]),m=(0,l.useCallback)((async()=>{if(!r)return;const n=null!=a?a:O.VW,i=O.d8[n];if(!i||!t)return;u(!0);const l=await(0,L.W)(i,{method:"POST",data:JSON.stringify({query:'\n        query MyQuery {\n          playerDatas(first: 1, where: {player: "'.concat(t,'"}) {\n            date\n            id\n            jCount\n            joinAmount\n            player\n            wCount\n            winAmount\n          }\n        }\n      '),variables:{},operationName:"MyQuery"}),headers:{"Content-Type":"application/json"}});if(l.data&&l.data.data&&l.data.data.playerDatas&&l.data.data.playerDatas.length){const n={address:t,winAmount:(0,W.lb)(Number(B.formatEther(l.data.data.playerDatas[0].winAmount))),joinAmount:(0,W.lb)(Number(B.formatEther(l.data.data.playerDatas[0].joinAmount)))},a=null==r?void 0:r.filter((e=>e.address.toLowerCase()===t.toLowerCase()));if(a&&a.length)n.index=a[0].index;else{let a;if(0===e){const e=l.data.data.playerDatas[0].winAmount;a=(await(0,L.W)(i,{method:"POST",data:JSON.stringify({query:'\n            query MyQuery {\n              playerDatas(\n                where: {winAmount_gt: "'.concat(e,'"}\n                orderDirection: desc\n                orderBy: winAmount\n              ) {\n                winAmount\n              }\n            }\n          '),variables:{},operationName:"MyQuery"}),headers:{"Content-Type":"application/json"}})).data.data.playerDatas.length}else{const e=l.data.data.playerDatas[0].joinAmount;a=(await(0,L.W)(i,{method:"POST",data:JSON.stringify({query:'\n                  query MyQuery {\n                    playerDatas(\n                      where: {joinAmount_gt: "'.concat(e,'"}\n                      orderDirection: desc\n                      orderBy: joinAmount\n                    ) {\n                      joinAmount\n                    }\n                  }\n                '),variables:{},operationName:"MyQuery"}),headers:{"Content-Type":"application/json"}})).data.data.playerDatas.length}a&&a<r.length?n.index=a+1:n.index=a}c(n)}u(!1)}),[r,a,e,t]);return(0,l.useEffect)((()=>{d()}),[a,t,e]),(0,l.useEffect)((()=>{t&&r&&m()}),[a,t,e,r]),{ranking:r,tab:e,setTab:n,loading:s,myItem:o}})(),g=(0,l.useMemo)((()=>a?a.slice(0,3):[]),[a]),N=(0,l.useMemo)((()=>a?a.slice(3):[]),[a]),v=(0,l.useMemo)((()=>(console.log({rankingPreList:g}),!d&&a&&g?0===g.length?l.createElement(o.Z,null):l.createElement(l.Fragment,null,l.createElement(p,{players:g,isMobile:n}),N&&N.length>0&&l.createElement(A,{players:N,isMobile:n,tab:r}),m&&l.createElement(S,{player:m,tab:r,isMobile:n})):l.createElement("div",{className:i()(Q)},l.createElement(t.default,{size:"large",tip:"Loading..."})))),[d,g]);return l.createElement("div",{className:P},l.createElement(s.Z,{tab:r,className:Z,setTab:u,list:["Pledged","Winnings"]}),v)}},27561:(e,n,a)=>{var t=a(67990),r=/^\s+/;e.exports=function(e){return e?e.slice(0,t(e)+1).replace(r,""):e}},67990:e=>{var n=/\s/;e.exports=function(e){for(var a=e.length;a--&&n.test(e.charAt(a)););return a}},23279:(e,n,a)=>{var t=a(13218),r=a(7771),i=a(14841),l=Math.max,o=Math.min;e.exports=function(e,n,a){var c,s,u,d,m,g,N=0,p=!1,v=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function _(n){var a=c,t=s;return c=s=void 0,N=n,d=e.apply(t,a)}function y(e){return N=e,m=setTimeout(I,n),p?_(e):d}function b(e){var a=e-g;return void 0===g||a>=n||a<0||v&&e-N>=u}function I(){var e=r();if(b(e))return k(e);m=setTimeout(I,function(e){var a=n-(e-g);return v?o(a,u-(e-N)):a}(e))}function k(e){return m=void 0,f&&c?_(e):(c=s=void 0,d)}function M(){var e=r(),a=b(e);if(c=arguments,s=this,g=e,a){if(void 0===m)return y(g);if(v)return clearTimeout(m),m=setTimeout(I,n),_(g)}return void 0===m&&(m=setTimeout(I,n)),d}return n=i(n)||0,t(a)&&(p=!!a.leading,u=(v="maxWait"in a)?l(i(a.maxWait)||0,n):u,f="trailing"in a?!!a.trailing:f),M.cancel=function(){void 0!==m&&clearTimeout(m),N=0,c=g=s=m=void 0},M.flush=function(){return void 0===m?d:k(r())},M}},33448:(e,n,a)=>{var t=a(44239),r=a(37005);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==t(e)}},7771:(e,n,a)=>{var t=a(55639);e.exports=function(){return t.Date.now()}},14841:(e,n,a)=>{var t=a(27561),r=a(13218),i=a(33448),l=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(r(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=r(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=t(e);var a=o.test(e);return a||c.test(e)?s(e.slice(2),a?2:8):l.test(e)?NaN:+e}},87269:(e,n,a)=>{"use strict";a.r(n)},53308:e=>{"use strict";e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDY0IDY0IiBmaWxsPSJub25lIj4KICA8bWFzayBpZD0ibWFzazBfNDAwMl8yNDk2IiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiPgogICAgPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjRDlEOUQ5Ii8+CiAgPC9tYXNrPgogIDxnIG1hc2s9InVybCgjbWFzazBfNDAwMl8yNDk2KSI+CiAgICA8cGF0aCBkPSJNMTkuNDk1MSAxNy4zNDVINDEuNDM4IiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC42IiBzdHJva2Utd2lkdGg9IjEuODI4NTciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogICAgPHBhdGggZD0iTTE5LjQ5NTEgMjcuNDAyMUg0MS40MzgiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjYiIHN0cm9rZS13aWR0aD0iMS44Mjg1NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgICA8cGF0aCBkPSJNMTkuNDk1MSAzNy40NTkySDMwLjQ2NjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjYiIHN0cm9rZS13aWR0aD0iMS44Mjg1NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgICA8cGF0aCBkPSJNMjYuMTUzMSA1NC4wOTg5SDE2LjQ1NjRDMTMuNDI2NyA1NC4wOTg5IDEwLjk3MDcgNTEuNjQyOCAxMC45NzA3IDQ4LjYxMzJWMTIuNzk5N0MxMC45NzA3IDkuNzcgMTMuNDI2NyA3LjMxMzk2IDE2LjQ1NjQgNy4zMTM5Nkg0Ni4yODUxQzQ5LjMxNDggNy4zMTM5NiA1MS43NzA4IDkuNzcgNTEuNzcwOCAxMi43OTk3VjM1Ljc4ODYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjYiIHN0cm9rZS13aWR0aD0iMS44Mjg1NyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgICA8Y2lyY2xlIGN4PSI0My4xMjU3IiBjeT0iNTAuNTA2MSIgcj0iOC43NjkwMiIgc3Ryb2tlPSIjNjY3M0ZGIiBzdHJva2Utd2lkdGg9IjEuODI4NTciIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDxwYXRoIGQ9Ik01Mi43NDY0IDYxLjQyQzUzLjEwMzQgNjEuNzc3IDUzLjY4MjMgNjEuNzc3IDU0LjAzOTQgNjEuNDJDNTQuMzk2NCA2MS4wNjI5IDU0LjM5NjQgNjAuNDg0MSA1NC4wMzk0IDYwLjEyN0w1Mi43NDY0IDYxLjQyWk00OC4xMjk5IDU2LjgwMzVMNTIuNzQ2NCA2MS40Mkw1NC4wMzk0IDYwLjEyN0w0OS40MjI5IDU1LjUxMDVMNDguMTI5OSA1Ni44MDM1WiIgZmlsbD0iIzY2NzNGRiIvPgogIDwvZz4KPC9zdmc+"}}]);