(this["webpackJsonpstarter-bt5"]=this["webpackJsonpstarter-bt5"]||[]).push([[24],{190:function(e,t,n){"use strict";function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}n.d(t,"a",(function(){return c}));var a=n(108),s=n(25);function o(e,t){return!t||"object"!==Object(a.a)(t)&&"function"!==typeof t?Object(s.a)(e):t}function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=r(e);if(t){var s=r(this).constructor;n=Reflect.construct(a,arguments,s)}else n=a.apply(this,arguments);return o(this,n)}}},355:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(214),a=n.n(r),s="http://localhost:8080/",o=function(e){return a.a.post(s+"users/register",{firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,confirmPassword:e.confirmPassword}).then((function(e){return e}))},c=function(e){return a.a.post(s+"users/login",{email:e.email,password:e.password}).then((function(e){return localStorage.setItem("usertoken",e.data.token),e.data})).catch((function(e){console.log(e)}))}},356:function(e,t,n){},64:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},678:function(e,t,n){"use strict";n.r(t);var r=n(64),a=n(88),s=n(85),o=n(25),c=n(96),i=n(190),l=n(1),u=n(14),m=n(355),f=(n(356),n(3)),d=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).handleFormSubmit=function(t){t.preventDefault(),e.state.firstName;var n={firstName:e.state.firstName,lastName:e.state.lastName,email:e.state.email,password:e.state.password,confirmPassword:e.state.confirmPassword};Object(m.b)(n).then((function(t){console.log(e.props.history)}))},e.state={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},e.onChange=e.onChange.bind(Object(o.a)(e)),e}return Object(s.a)(n,[{key:"onChange",value:function(e){this.setState(Object(r.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"main-content-container",children:[Object(f.jsx)("div",{className:"form",children:Object(f.jsxs)("form",{className:"signForm",children:[Object(f.jsx)("h1",{className:"h3 mb-3 font-weight-normal",children:"Sign Up to Lightspeed Retail (X-Series)"}),Object(f.jsx)("div",{className:"notStore",children:Object(f.jsx)(u.b,{to:"/",children:"Already have account?"})}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"email",children:"First name"}),Object(f.jsx)("input",{type:"text",className:"form-control",name:"firstName",placeholder:"Enter your first name",required:!0,value:this.state.firstName,onChange:this.onChange})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"email",children:"Last name"}),Object(f.jsx)("input",{type:"text",className:"form-control",name:"lastName",placeholder:"Enter your last name",required:!0,value:this.state.lastName,onChange:this.onChange})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(f.jsx)("input",{type:"email",className:"form-control",name:"email",placeholder:"Enter email",required:!0,value:this.state.email,onChange:this.onChange})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"password",children:"Password"}),Object(f.jsx)("input",{type:"password",className:"form-control",name:"password",placeholder:"Password",value:this.state.password,onChange:this.onChange})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"password",children:"Confirm Password"}),Object(f.jsx)("input",{type:"password",className:"form-control",name:"confirmPassword",placeholder:"Confirm Password",value:this.state.confirmPassword,onChange:this.onChange})]}),Object(f.jsx)("div",{className:"notStore",children:Object(f.jsx)("button",{type:"submit",onClick:this.handleFormSubmit,className:"btn btn-primary",children:"Sign Up"})})]})}),Object(f.jsx)("div",{className:"vd-signin-background",style:{backgroundImage:'url("https://vendfrontendassets.freetls.fastly.net/images/backgrounds/login-background-xseries.jpg")'}})]})}}]),n}(l.Component);t.default=d},85:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return a}))},88:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=24.352e2f35.chunk.js.map