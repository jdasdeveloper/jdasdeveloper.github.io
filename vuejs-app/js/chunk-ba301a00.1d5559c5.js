(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba301a00"],{"38d0":function(e,a,s){},"7c5f":function(e,a,s){"use strict";s("38d0")},fa57:function(e,a,s){"use strict";s.r(a);var t=s("7a23");const i=e=>(Object(t["z"])("data-v-1cabf8ac"),e=e(),Object(t["x"])(),e),c=i(()=>Object(t["i"])("h1",null,"Contact coach",-1)),l=i(()=>Object(t["i"])("label",{for:"email"},"Your E-Mail",-1)),o=i(()=>Object(t["i"])("label",{for:"message"},"Message",-1)),m={key:0,class:"errors"};function d(e,a,s,i,d,n){const r=Object(t["E"])("base-button"),b=Object(t["E"])("base-card");return Object(t["w"])(),Object(t["h"])("div",null,[Object(t["k"])(b,{mode:"outline"},{default:Object(t["N"])(()=>[c,Object(t["i"])("form",{onSubmit:a[2]||(a[2]=Object(t["P"])((...e)=>n.submitForm&&n.submitForm(...e),["prevent"]))},[Object(t["i"])("div",{class:Object(t["s"])(["form-control",{invalid:!d.emailIsValid}])},[l,Object(t["O"])(Object(t["i"])("input",{type:"email",name:"email",id:"email",placeholder:"test@test.com","onUpdate:modelValue":a[0]||(a[0]=e=>d.email=e)},null,512),[[t["K"],d.email,void 0,{trim:!0}]]),Object(t["i"])("h2",null,Object(t["H"])(d.email.isValid),1)],2),Object(t["i"])("div",{class:Object(t["s"])(["form-control",{invalid:!d.messageIsValid}])},[o,Object(t["O"])(Object(t["i"])("textarea",{name:"message",id:"message",cols:"30",rows:"5","onUpdate:modelValue":a[1]||(a[1]=e=>d.message=e)},null,512),[[t["K"],d.message,void 0,{trim:!0}]]),d.formIsValid?Object(t["g"])("",!0):(Object(t["w"])(),Object(t["h"])("p",m," Please enter a valid email and non-empty message. "))],2),Object(t["k"])(r,{class:"btn-center"},{default:Object(t["N"])(()=>[Object(t["j"])("Send Message")]),_:1})],32)]),_:1})])}var n=s("5502"),r={emits:["save-request"],data(){return{email:"",message:"",formIsValid:!0,emailIsValid:!0,messageIsValid:!0}},computed:{coachDetails(){return this.coaches.find(e=>e.id===this.userId)},...Object(n["b"])(["coaches","userId"])},methods:{submitForm(){if(this.formIsValid=!0,this.emailIsValid=!0,this.messageIsValid=!0,""===this.email||!this.email.includes("@")||""===this.message)return this.formIsValid=!1,this.emailIsValid=!1,void(this.messageIsValid=!1);this.$store.dispatch("contactCoach",{email:this.email,message:this.message,coachId:this.$route.params.id,to:this.fullName}),this.$router.replace("/coaches")}}},b=(s("7c5f"),s("6b0d")),u=s.n(b);const h=u()(r,[["render",d],["__scopeId","data-v-1cabf8ac"]]);a["default"]=h}}]);
//# sourceMappingURL=chunk-ba301a00.1d5559c5.js.map