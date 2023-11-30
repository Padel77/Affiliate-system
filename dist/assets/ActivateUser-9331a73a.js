import{s as d,r as a,e as u,g as f,j as e,f as o}from"./index-bbdbebe5.js";import{S as h}from"./sweetalert2.all-a660dd7e.js";function p(){console.log("hi from reset");const{token:r}=d();a.useState(!0),a.useState(),a.useState();const s=u(),c=f();function i(t,m){h.fire({title:t,icon:m,showConfirmButton:!1,timer:1500})}async function n(){await o.post("/users/chk_active",{token:r}).then(t=>{t.data.success?l():t.data.error=="too_many_requests"?(c(error_many(!0)),s("/",{replace:!0})):document.getElementById("form").innerHTML=`<div className="text-center ">
          <h4 className="text-capitalize fw-bold">
           res.data.error    
          </h4>
          </div>`})}async function l(){console.log("from activate ",r),await o.post("/users/marketer_activation",{token:r}).then(t=>{t.data.success?(i(t.data.success,"success"),s("/login",{replace:!0})):t.data.error=="too_many_requests"?(c(error_many(!0)),s("/",{replace:!0})):(s("/activate",{replace:!0}),i(t.data.error,"error"),document.getElementById("form").innerHTML=`<div className="text-center ">
            <h4 className="text-capitalize fw-bold">
           {res.data.error} 
            </h4>
            </div>`)})}return a.useEffect(()=>{n()},[]),e.jsx(e.Fragment,{children:e.jsx("section",{className:" ",children:e.jsx("div",{className:"d-flex align-items-center",children:e.jsx("div",{className:"w-100",children:e.jsx("div",{className:"  row  mt-5",children:e.jsx("div",{className:" my-5 form ",children:e.jsx("div",{className:"forText",children:e.jsx("div",{className:"form-contain",children:e.jsx("form",{id:"form",className:"my-3 "})})})})})})})})})}export{p as default};
