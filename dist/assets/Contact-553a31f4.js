import{r as _,a,F as f,b as l}from"./index-af2325fb.js";import{a as w}from"./index.esm-02b72c41.js";import{b as y,c as x}from"./index.esm-85735b34.js";import{m as c}from"./motion-edf87d05.js";import"./iconBase-a605a36a.js";const m={_origin:"https://api.emailjs.com"},g=(t,e="https://api.emailjs.com")=>{m._userID=t,m._origin=e},h=(t,e,n)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class p{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}const u=(t,e,n={})=>new Promise((r,o)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:i})=>{const d=new p(i);d.status===200||d.text==="OK"?r(d):o(d)}),s.addEventListener("error",({target:i})=>{o(new p(i))}),s.open("POST",m._origin+t,!0),Object.keys(n).forEach(i=>{s.setRequestHeader(i,n[i])}),s.send(e)}),b=(t,e,n,r)=>{const o=r||m._userID;return h(o,t,e),u("/api/v1.0/email/send",JSON.stringify({lib_version:"3.10.0",user_id:o,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"})},N=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},v=(t,e,n,r)=>{const o=r||m._userID,s=N(n);h(o,t,e);const i=new FormData(s);return i.append("lib_version","3.10.0"),i.append("service_id",t),i.append("template_id",e),i.append("user_id",o),u("/api/v1.0/email/send-form",i)},I={init:g,send:b,sendForm:v},V=()=>{const t=_.useRef(),e=n=>{n.preventDefault(),I.sendForm("service_9ilfc2n","template_fvve9db",t.current,"tOQTdAh8jDRONzf3K").then(r=>{console.log(r.text)},r=>{console.log(r.text)}),n.target.reset()};return a(f,{children:l("section",{id:"contact",children:[a(c.h5,{initial:{opacity:0,y:-50,scale:.1},whileInView:{opacity:1,y:0,scale:1,transition:{duration:1.5}},children:"Get In Touch"}),a(c.h1,{initial:{opacity:0,y:-50,scale:.1},whileInView:{opacity:1,y:0,scale:1,transition:{duration:1.5}},children:"Contact Me"}),l("div",{className:"container contact__container",children:[l("div",{className:"contact__options",children:[l(c.article,{initial:{opacity:0,x:-100,scale:.5},whileInView:{opacity:1,x:0,scale:1,transition:{duration:1}},className:"contact__option",children:[a(w,{className:"contact__option-icon"}),a("h4",{children:"Email"}),a("h5",{children:"nikhilranjankumar1999@gmail.com"}),a("a",{href:"mailto:nikhilranjankumar1999@gmail.com",target:"_blank",rel:"noopener noreferrer",children:"Send a Message"})]}),l(c.article,{initial:{opacity:0,x:-100,scale:.5},whileInView:{opacity:1,x:0,scale:1,transition:{duration:1}},className:"contact__option",children:[a(y,{className:"contact__option-icon"}),a("h4",{children:"Instagram"}),a("h5",{children:"14_nikhil_kumar"}),a("a",{href:"https://www.instagram.com/14_nikhil_kumar/",target:"_blank",rel:"noopener noreferrer",children:"Send a Message"})]}),l(c.article,{initial:{opacity:0,x:-100,scale:.5},whileInView:{opacity:1,x:0,scale:1,transition:{duration:1}},className:"contact__option",children:[a(x,{className:"contact__option-icon"}),a("h4",{children:"Whatsapp"}),a("h5",{children:"+91-6205666646"}),a("a",{href:"https://api.whatsapp.com/send?phone=6205666646",target:"_blank",rel:"noopener noreferrer",children:"Send a Message"})]})]}),l("form",{ref:t,onSubmit:e,children:[a(c.input,{initial:{opacity:0,x:100,scale:.5},whileInView:{opacity:1,x:0,scale:1,transition:{duration:1}},type:"text",name:"forName",placeholder:"Your Good Name",required:!0}),a(c.input,{initial:{opacity:0,x:100,scale:.5},whileInView:{opacity:1,x:0,scale:1,transition:{duration:1}},type:"text",name:"Email",placeholder:"Your Email",required:!0}),a(c.textarea,{initial:{opacity:0,x:100,scale:.5},whileInView:{opacity:1,x:0,scale:1,transition:{duration:1}},name:"message",rows:"10",placeholder:"Enter Your Message Here ??????"}),a("button",{className:"btn btn-primary",children:"Send Message"})]})]})]})})};export{V as default};
