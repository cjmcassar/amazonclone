(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{48:function(e,t,i){},49:function(e,t,i){},50:function(e,t,i){},60:function(e,t,i){},61:function(e,t,i){},62:function(e,t,i){},63:function(e,t,i){},64:function(e,t,i){},66:function(e,t,i){},68:function(e,t,i){"use strict";i.r(t);var c=i(3),a=i.n(c),n=i(25),s=i.n(n),r=(i(48),i(38)),o=i(13),l=(i(49),i(50),i(40)),j=i.n(l),d=i(41),b=i.n(d),u=i(20),A=i(2),g=Object(c.createContext)(),h=function(e){var t=e.reducer,i=e.initialState,a=e.children;return Object(A.jsx)(g.Provider,{value:Object(c.useReducer)(t,i),children:a})},O=function(){return Object(c.useContext)(g)},m=i(31),p=(m.a.initializeApp({apiKey:"AIzaSyC8iLXY-pOni4-D3GUDJBXJnIQ1LKWR0tA",authDomain:"challenge-384e4.firebaseapp.com",projectId:"challenge-384e4",storageBucket:"challenge-384e4.appspot.com",messagingSenderId:"924995575382",appId:"1:924995575382:web:aa83de39484803b6f765f7",measurementId:"G-QVZ63QER31"}).firestore(),m.a.auth());var x=function(){var e=O(),t=Object(o.a)(e,2),i=t[0],c=i.basket,a=i.user;return t[1],Object(A.jsxs)("div",{className:"header",children:[Object(A.jsx)(u.b,{to:"/",children:Object(A.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})}),Object(A.jsxs)("div",{className:"header__search",children:[Object(A.jsx)("input",{className:"header__searchInput",type:"text"}),Object(A.jsx)(j.a,{className:"header__searchIcon"})]}),Object(A.jsxs)("div",{className:"header__nav",children:[Object(A.jsx)(u.b,{to:!a&&"/login",children:Object(A.jsxs)("div",{onClick:function(){a&&p.signOut()},className:"header__option",children:[Object(A.jsx)("span",{className:"header__optionLineOne",children:"Hello Guest"}),Object(A.jsx)("span",{className:"header__optionLineTwo",children:a?"Sign Out":"Sign In"})]})}),Object(A.jsxs)("div",{className:"header__option",children:[Object(A.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(A.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]}),Object(A.jsxs)("div",{className:"header__option",children:[Object(A.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(A.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(A.jsx)(u.b,{to:"/checkout",children:Object(A.jsxs)("div",{className:"header__optionBasket",children:[Object(A.jsx)(b.a,{}),Object(A.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===c||void 0===c?void 0:c.length})]})})]})]})};i(60),i(61);var I=function(e){var t=e.id,i=e.title,c=e.image,a=e.price,n=e.rating,s=O(),r=Object(o.a)(s,2),l=(r[0].basket,r[1]);return Object(A.jsxs)("div",{className:"product",children:[Object(A.jsxs)("div",{className:"product__info",children:[Object(A.jsx)("p",{children:i}),Object(A.jsxs)("p",{className:"product__price",children:[Object(A.jsx)("small",{children:"$"}),Object(A.jsx)("strong",{children:a})]}),Object(A.jsx)("div",{className:"product__rating",children:Array(n).fill().map((function(e,t){return Object(A.jsx)("p",{children:"\ud83c\udf1f"})}))})]}),Object(A.jsx)("img",{src:c,alt:""}),Object(A.jsx)("button",{onClick:function(){l({type:"ADD_TO_BASKET",item:{id:t,title:i,image:c,price:a,rating:n}})},children:"Add to Basket"})]})};var v=function(){return Object(A.jsx)("div",{className:"home",children:Object(A.jsxs)("div",{className:"home__container",children:[Object(A.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:"background amazon image"}),Object(A.jsxs)("div",{className:"home__row",children:[Object(A.jsx)(I,{id:"12345432",title:"The Lean Startup",price:29.99,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",rating:5}),Object(A.jsx)(I,{id:"232323",title:"The Holiday",price:5.99,image:"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_UY1200_CR90,0,630,1200_AL_.jpg",rating:4})]}),Object(A.jsxs)("div",{className:"home__row",children:[Object(A.jsx)(I,{id:"286932323",title:"AI in a Box",price:455.99,image:"data:image/jpeg;base64,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",rating:3}),Object(A.jsx)(I,{id:"2389623",title:"Instant coding knowledge",price:305.99,image:"https://specials-images.forbesimg.com/imageserve/5e5646e1d2111200062ef3aa/960x0.jpg?fit=scale",rating:4}),Object(A.jsx)(I,{id:"2389623",title:"NReal AR headset",price:100.99,image:"https://uploads.ifdesign.de/award_img_337/oex_large/271136_01_if_2020_nreal_light_r1.jpg",rating:4})]}),Object(A.jsx)("div",{className:"home__row",children:Object(A.jsx)(I,{id:"85733",title:"Cheap Bitcoin",price:100.99,image:"https://logos-world.net/wp-content/uploads/2020/08/Bitcoin-Logo.png",rating:2})})]})})},E=i(10);i(62),i(63);var f=function(e){var t=e.id,i=e.image,c=e.title,a=e.price,n=e.rating,s=O(),r=Object(o.a)(s,2),l=(r[0].basket,r[1]);return Object(A.jsxs)("div",{className:"checkoutProduct",children:[Object(A.jsx)("img",{className:"checkoutProduct__image",src:i}),Object(A.jsxs)("div",{className:"checkoutProduct__info",children:[Object(A.jsx)("p",{className:"checkoutProduct__title",children:c}),Object(A.jsxs)("p",{className:"checkoutProduct__price",children:[Object(A.jsx)("small",{children:"$"}),Object(A.jsx)("strong",{children:a})]}),Object(A.jsx)("div",{className:"checkoutProduct__rating",children:Array(n).fill().map((function(e,t){return Object(A.jsx)("p",{children:"\ud83c\udf1f"})}))}),Object(A.jsx)("button",{onClick:function(){l({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})]})]})},k=(i(64),i(42)),T=i.n(k),B=i(32),N=i(22),C=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},w=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(N.a)(Object(N.a)({},e),{},{basket:[].concat(Object(B.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var i=e.basket.findIndex((function(e){return e.id===t.id})),c=Object(B.a)(e.basket);return i>=0?c.splice(i,1):console.warn("Cant remove product (id: ${action.id} as its not in the basket!"),Object(N.a)(Object(N.a)({},e),{},{basket:c});case"SET_USER":return Object(N.a)(Object(N.a)({},e),{},{user:t.user});default:return e}};var R=function(){var e=O(),t=Object(o.a)(e,2),i=t[0].basket;return t[1],Object(A.jsxs)("div",{className:"subtotal",children:[Object(A.jsx)(T.a,{renderText:function(e){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("p",{children:["Subtotal (",i.length," items): ",Object(A.jsx)("strong",{children:e})]}),Object(A.jsxs)("small",{className:"subtotal__gift",children:[Object(A.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:C(i),displayType:"text",thousandSeparator:!0,prefix:"\xa3"}),Object(A.jsx)("button",{children:"Proceed to Checkout"})]})};var M=function(){var e=O(),t=Object(o.a)(e,2),i=t[0],c=i.basket,a=i.user;return t[1],Object(A.jsxs)("div",{className:"checkout",children:[Object(A.jsxs)("div",{className:"checkout__left",children:[Object(A.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:"Amazon banner"}),Object(A.jsxs)("div",{children:[Object(A.jsxs)("h3",{children:["Hello, ",null===a||void 0===a?void 0:a.email]}),Object(A.jsx)("h2",{className:"checkout__title",children:"Your shopping Basket"}),c.map((function(e){return Object(A.jsx)(f,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(A.jsx)("div",{className:"checkout__right",children:Object(A.jsx)(R,{})})]})};i(66);var P=function(){var e=Object(E.f)(),t=Object(c.useState)(""),i=Object(o.a)(t,2),a=i[0],n=i[1],s=Object(c.useState)(""),r=Object(o.a)(s,2),l=r[0],j=r[1];return Object(A.jsxs)("div",{className:"login",children:[Object(A.jsx)(u.b,{to:"/",children:Object(A.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})}),Object(A.jsxs)("div",{className:"login__container",children:[Object(A.jsx)("h1",{children:"Sign in"}),Object(A.jsxs)("form",{children:[Object(A.jsx)("h5",{children:"Email"}),Object(A.jsx)("input",{type:"text",value:a,onChange:function(e){return n(e.target.value)}}),Object(A.jsx)("h5",{children:"Password"}),Object(A.jsx)("input",{type:"password",value:l,onChange:function(e){return j(e.target.value)}}),Object(A.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),p.signInWithEmailAndPassword(a,l).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton",children:"Sign In"})]}),Object(A.jsx)("p",{children:"By signing-in you agree to all of the amazonclone's condition of use. Please don't bother reading our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice. Instead sign away your soul for the sake of instant gratification."}),Object(A.jsx)("button",{onClick:function(t){t.preventDefault(),p.createUserWithEmailAndPassword(a,l).then((function(t){console.log(t),t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton",children:"Create your Account Here"})]})]})};var Q=function(){var e=O(),t=Object(o.a)(e,2);Object(r.a)(t[0]);var i=t[1];return Object(c.useEffect)((function(){p.onAuthStateChanged((function(e){console.log("User is >>>",e),i(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(A.jsx)(u.a,{children:Object(A.jsx)("div",{className:"app",children:Object(A.jsxs)(E.c,{children:[Object(A.jsx)(E.a,{path:"/login",children:Object(A.jsx)(P,{})}),Object(A.jsxs)(E.a,{path:"/checkout",children:[Object(A.jsx)(x,{}),Object(A.jsx)(M,{})]}),Object(A.jsxs)(E.a,{path:"/",children:[Object(A.jsx)(x,{}),Object(A.jsx)(v,{})]})]})})})},V=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,80)).then((function(t){var i=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,s=t.getTTFB;i(e),c(e),a(e),n(e),s(e)}))};s.a.render(Object(A.jsx)(a.a.StrictMode,{children:Object(A.jsx)(h,{initialState:{basket:[],user:null},reducer:w,children:Object(A.jsx)(Q,{})})}),document.getElementById("root")),V()}},[[68,1,2]]]);
//# sourceMappingURL=main.0fc7ee80.chunk.js.map