import{s as y,r as t,e as b,g as P,j as e,L as d,f as m}from"./index-bbdbebe5.js";import{i as E}from"./Forgot-password-56850a88.js";import{S as _}from"./sweetalert2.all-a660dd7e.js";function C(){console.log("hi from reset");const{token:c}=y(),[k,u]=t.useState(!0),[n,h]=t.useState(),[x,p]=t.useState(),a=b(),l=P();function o(s,r){_.fire({title:s,icon:r,showConfirmButton:!1,timer:1500})}async function f(){console.log("hi from reset"),await m.post("/users/chk_tok",{token:c}).then(s=>{console.log(s.data),s.data.error?s.data.error=="too_many_requests"?(l(error_many(!0)),a("/",{replace:!0})):(o(s.data.error,"error"),a("/home",{replace:!0})):u(!0)})}async function w(){N===!0&&await m.post("/users/reset_password",{token:c,password:n,re_password:x}).then(s=>{s.data.success?(o(s.data.success,"success"),a("/login",{replace:!0})):s.data.error=="too_many_requests"?(l(error_many(!0)),a("/",{replace:!0})):o(s.data.error,"error")})}const[j,g]=t.useState(""),[N,v]=t.useState("");function i(s){let r=document.getElementById("rePassword");return s===n?(r.classList.add("d-none"),!0):(g("كلمتا المرور غير متطابقتان"),r.classList.remove("d-none"),!1)}return t.useEffect(()=>{f()},[]),e.jsx("div",{className:"resetPassword",children:e.jsx("div",{className:"container pt-5 ",children:e.jsxs("div",{className:"row ",children:[e.jsx("div",{className:"col-12 col-md-6 d-xl-block d-none",children:e.jsx("img",{className:"w-100",src:E,alt:"logo"})}),e.jsxs("div",{className:"col-12 float-end col-xl-6 col pt-5 text-end  text-white mt-5",children:[e.jsxs("div",{className:"mb-2",children:[e.jsxs("h1",{children:["نسيت كلمة المرور ؟ ",e.jsx("span",{className:"text-info",children:"منفعة"})," "]}),e.jsx("p",{className:"fw-bold",children:"قم بأدخال البريد الإلكتروني وستصلك رســـالة عليه "})]}),e.jsxs("form",{className:"my-3 ",children:[e.jsx("div",{className:"return text-center",children:e.jsx("h3",{className:"text-capitalize fw-bold ",children:"اعادة تعيين كلمة المرور"})}),e.jsx("p",{className:"text-capitalize ",children:"ادخل كملمة مرور قوية"}),e.jsx("input",{className:" form-control mb-3",type:"password",placeholder:"ادخل كلمة المرور الجديدة",onChange:s=>{h(s.target.value)},required:!0,autoFocus:!0}),e.jsx("input",{className:" form-control mb-3",type:"password",placeholder:"تأكيد كلمة المرور",onChange:s=>{i(s.target.value),v(i(s.target.value)),p(s.target.value)},required:!0,autoFocus:!0}),e.jsx("p",{id:"rePassword",className:"d-none text-danger mt-2",children:j}),e.jsx("button",{type:"button",onClick:w,className:" form-control btn text-capitalize ",children:"ارسال"}),e.jsx("div",{className:"mt-2",children:e.jsx(d,{className:" mx-2 text-danger",to:"/login",children:"تسجيل الدخول"})})]}),e.jsx("div",{className:" fw-bold",children:e.jsxs("p",{children:["لا يوجد لديك حساب؟ ",e.jsx(d,{className:"text-info",to:"/register",children:"التسجيل"})," "]})})]})]})})})}export{C as default};