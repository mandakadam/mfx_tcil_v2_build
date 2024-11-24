"use strict";(self["webpackChunkmfx_tcil_v2"]=self["webpackChunkmfx_tcil_v2"]||[]).push([[919],{9763:function(a,e,t){t.r(e),t.d(e,{default:function(){return re}});var s=t(6768);const l={class:"container-fluid page-body-wrapper pt-0 sidebar-dark"};function r(a,e,t,r,i,d){const o=(0,s.g2)("SideBar"),c=(0,s.g2)("MainPanel");return(0,s.uX)(),(0,s.CE)("div",l,[(0,s.bF)(o,{userList:t.userList},null,8,["userList"]),(0,s.bF)(c,{dataSource:t.dataSource},null,8,["dataSource"])])}var i=t(4232);const d={class:"sidebar sidebar-offcanvas",id:"sidebar"},o={class:"nav"},c={class:"d-flex flex-column"},n={class:"menu-title fs-14"},m={class:"badge badge-primary fs-11 py-1 me-3"},u={class:"nav-link",href:"#"},p={class:"menu-title"};function v(a,e,t,l,r,v){const b=(0,s.g2)("RouterLink");return(0,s.uX)(),(0,s.CE)("nav",d,[(0,s.Lk)("ul",o,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(t.userList,((e,t)=>((0,s.uX)(),(0,s.CE)("li",{class:(0,i.C4)(["nav-item shadow my-0",""+(a.$route.params.id==e.id?"bg-gradient-warning active":"bg-gradient-primary")]),key:t},[(0,s.bF)(b,{class:(0,i.C4)(["nav-link",""+(a.$route.params.id==e.id?"text-white":"text-light")]),to:`/leads/${e.id}`},{default:(0,s.k6)((()=>[(0,s.Lk)("div",c,[(0,s.Lk)("span",null,[(0,s.Lk)("span",n,(0,i.v_)(e.title),1)]),(0,s.Lk)("span",null,[(0,s.Lk)("small",m,(0,i.v_)(e.product),1),(0,s.Lk)("strong",null,(0,i.v_)(e.currency)+" "+(0,i.v_)(e.fc_amount)+"K",1)])])])),_:2},1032,["class","to"])],2)))),128)),e[0]||(e[0]=(0,s.Lk)("li",{class:"nav-item nav-category"},"Quick Links",-1)),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.quickLinks,((a,e)=>((0,s.uX)(),(0,s.CE)("li",{class:"nav-item",key:e},[(0,s.Lk)("a",u,[(0,s.Lk)("i",{class:(0,i.C4)(["menu-icon mdi",a.icon])},null,2),(0,s.Lk)("span",p,(0,i.v_)(a.title),1)])])))),128))])])}var b={props:["userList"],data(){return{userListTemp:[{title:"Sachin Tendulkar",product:"Card",currency:"USD",fc_amount:"2",variant:"primary"},{title:"Sunil Gavaskar",product:"Remittances",currency:"UK",fc_amount:"10",variant:"info"},{title:"Rohit Sharma",product:"TT",currency:"USD",fc_amount:"12",variant:"warning"},{title:"Suryakumar Yadav",product:"TT",currency:"USD",fc_amount:"12",variant:"secondary"},{title:"Ajinkya Rahane",product:"TT",currency:"USD",fc_amount:"12",variant:"success"}],quickLinks:[{title:"Forex Card",icon:"mdi-credit-card",link:""},{title:"Remittances",icon:"mdi-tune-variant",link:""},{title:"Currency Notes",icon:"mdi-currency-inr",link:""},{title:"Payments/Receipts",icon:"mdi-account-credit-card",link:""},{title:"Margin Matrix",icon:"mdi-margin",link:""},{title:"Customer Onboarding",icon:"mdi-account-check",link:""},{title:"Partners & Agents",icon:"mdi-handshake-outline",link:""},{title:"Compliance",icon:"mdi-domain",link:""},{title:"Admin",icon:"mdi-security",link:""},{title:"MISC Transactions",icon:"mdi-credit-card-outline",link:""},{title:"Specialized Processes",icon:"mdi-comment-processing",link:"mdi-bank-transfer-out"}]}}},f=t(1241);const k=(0,f.A)(b,[["render",v]]);var L=k;const g={class:"main-panel"},y={class:"content-wrapper py-2"},h={class:"row"},w={class:"col-lg-8"},x={class:"col-lg-4"};function C(a,e,t,l,r,i){const d=(0,s.g2)("SummaryDetails"),o=(0,s.g2)("LeadsForm"),c=(0,s.g2)("MembersDetails"),n=(0,s.g2)("QuotesForm"),m=(0,s.g2)("QuotesDetails"),u=(0,s.g2)("QuotesHistory");return(0,s.uX)(),(0,s.CE)("div",g,[(0,s.Lk)("div",y,[(0,s.bF)(d),(0,s.bF)(o),(0,s.bF)(c,{membersList:t.dataSource.membersList},null,8,["membersList"]),(0,s.bF)(n),(0,s.Lk)("div",h,[(0,s.Lk)("div",w,[(0,s.bF)(m)]),(0,s.Lk)("div",x,[(0,s.bF)(u)])])])])}const D={class:"statistics-details d-flex align-items-center justify-content-between"},S={class:"card-body py-2 d-flex flex-column"},F={class:"card-title card-title-dash text-white fs-12 mb-0"},A={class:"mb-0 mt-auto text-white"};function U(a,e,t,l,r,d){return(0,s.uX)(),(0,s.CE)("div",D,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.SummaryCard,((a,t)=>((0,s.uX)(),(0,s.CE)("div",{key:t,class:(0,i.C4)(["card card-rounded shadow-lg h-100 text-gray pe-4",`bg-${a.variant}`])},[(0,s.Lk)("div",S,[(0,s.Lk)("h6",F,(0,i.v_)(a.title),1),(0,s.Lk)("h2",A,(0,i.v_)(a.matrics),1),e[0]||(e[0]=(0,s.Lk)("i",{class:"mdi mdi-arrow-top-right-thin-circle-outline text-white fs-2 position-absolute",style:{right:"10px",top:"10px",opacity:"0.2"}},null,-1))])],2)))),128))])}var _={data(){return{SummaryCard:[{title:"Not Attended",variant:"primary",matrics:"10"},{title:"Quote Pending",variant:"info",matrics:"12"},{title:"Payment Pending",variant:"secondary",matrics:"5"},{title:"Quote Expired",variant:"warning",matrics:"15"},{title:"Payment Received",variant:"success",matrics:"8"},{title:"Transactions Initiated",variant:"dark",matrics:"10"}]}}};const T=(0,f.A)(_,[["render",U]]);var I=T;const M={class:"card my-3"};function E(a,e){return(0,s.uX)(),(0,s.CE)("div",M,e[0]||(e[0]=[(0,s.Fv)('<div class="card-body py-1" data-v-1690f12c><form class="row row-cols-lg-auto align-items-center" data-v-1690f12c><div data-v-1690f12c><label class="visually-hidden" for="inlineFormInputGroupUsername" data-v-1690f12c>Mobile</label><div class="input-group" data-v-1690f12c><div class="input-group-text" data-v-1690f12c>+91</div><input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="9876543210" data-v-1690f12c><button type="submit" class="btn btn-primary btn-sm rounded-1 py-1" data-v-1690f12c><i class="mdi mdi-check" data-v-1690f12c></i> Verify</button></div></div><div data-v-1690f12c><label class="visually-hidden" for="inlineFormSelectPref" data-v-1690f12c>Doc Type</label><select class="form-select" id="inlineFormSelectPref" data-v-1690f12c><option selected data-v-1690f12c>Passport</option><option value="1" data-v-1690f12c>PanCard</option></select></div><div data-v-1690f12c><label class="visually-hidden" for="inlineFormInputGroupUsername" data-v-1690f12c>Doc ID</label><div class="input-group" data-v-1690f12c><input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Doc ID " data-v-1690f12c></div></div><div data-v-1690f12c><label class="visually-hidden" for="inlineFormSelectPref" data-v-1690f12c>Country</label><select class="form-select" id="inlineFormSelectPref" data-v-1690f12c><option selected data-v-1690f12c>India</option><option value="1" data-v-1690f12c>One</option><option value="2" data-v-1690f12c>Two</option><option value="3" data-v-1690f12c>Three</option></select></div><div class="col-12 ms-auto" data-v-1690f12c><button type="submit" class="btn btn-warning btn-sm" data-v-1690f12c><i class="mdi mdi-refresh" data-v-1690f12c></i> Refresh</button></div></form></div>',1)]))}const P={},R=(0,f.A)(P,[["render",E],["__scopeId","data-v-1690f12c"]]);var N=R;const X={class:"row flex-grow"},G={class:"col-12 grid-margin stretch-card"},j={class:"card card-rounded"},V={class:"card-body py-2 pb-0"},K={class:"row"},Q={class:"col-lg-12"},B={class:"home-tab"},J={class:"d-sm-flex align-items-center justify-content-between border-bottom"},W={class:"nav nav-tabs",role:"tablist"},O=["onClick"],$={class:"tab-content tab-content-basic pb-2"},q={class:"tab-pane fade show active",id:"overview",role:"tabpanel","aria-labelledby":"home-tab"},H={class:"list-wrapper"},z={class:"row"},Y={class:"card shadow h-100"},Z={class:"card-header d-flex bg-transparent border-0 pb-0"},aa={class:"text-small"},ea={class:"ms-auto"},ta={class:"card-body px-3 py-2 d-flex"},sa={class:"badge badge-dark text-white fs-11 py-1"},la={class:"modal modal-md fade",id:"AddForm",tabindex:"-1","aria-labelledby":"AddFormLabel","aria-hidden":"true"};function ra(a,e,t,l,r,d){const o=(0,s.g2)("MemberForm");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("div",X,[(0,s.Lk)("div",G,[(0,s.Lk)("div",j,[(0,s.Lk)("div",V,[(0,s.Lk)("div",K,[(0,s.Lk)("div",Q,[e[3]||(e[3]=(0,s.Fv)('<div class="d-flex justify-content-between align-items-center"><h4 class="card-title card-title-dash">Members</h4><div class=""><button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#AddForm"><i class="mdi mdi-plus"></i> Add Member </button></div></div>',1)),(0,s.Lk)("div",B,[(0,s.Lk)("div",J,[(0,s.Lk)("ul",W,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(t.membersList,((a,e)=>((0,s.uX)(),(0,s.CE)("li",{class:"nav-item",role:"presentation",key:e},[(0,s.Lk)("button",{class:(0,i.C4)(["nav-link",""+(a.firstName==r.selectedMember.firstName?"active":"")]),onClick:e=>r.selectedMember=a},(0,i.v_)(a.firstName)+" "+(0,i.v_)(a.LastName),11,O)])))),128))])]),(0,s.Lk)("div",$,[(0,s.Lk)("div",q,[(0,s.Lk)("div",H,[(0,s.Lk)("div",z,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.selectedMember.leads,((a,t)=>((0,s.uX)(),(0,s.CE)("div",{key:t,class:"col-12 col-md-6 col-lg-3 mb-3"},[(0,s.Lk)("div",Y,[(0,s.Lk)("div",Z,[(0,s.Lk)("div",null,[(0,s.Lk)("div",null,(0,i.v_)(a.currency)+" "+(0,i.v_)(a.fc_amount)+"k @"+(0,i.v_)(a.rate),1),(0,s.Lk)("span",aa,(0,i.v_)(a.date),1)]),(0,s.Lk)("div",ea,[(0,s.Lk)("span",{class:(0,i.C4)(["badge badge-primary py-1","badge-"+("TT"==a.product?"warning":"primary")])},(0,i.v_)(a.product),3)])]),(0,s.Lk)("div",ta,[(0,s.Lk)("div",sa,(0,i.v_)(a.domain),1),e[0]||(e[0]=(0,s.Lk)("button",{class:"btn btn-sm p-0 btn-link ms-auto"},[(0,s.Lk)("i",{class:"mdi mdi-repeat ms-2 flag-color"})],-1))])])])))),128))])])]),e[1]||(e[1]=(0,s.Lk)("div",{class:"tab-pane fade",id:"audiences",role:"tabpanel","aria-labelledby":"profile-tab"},[(0,s.Lk)("div",{class:"media"},[(0,s.Lk)("div",{class:"media-body"},[(0,s.Lk)("h4",{class:"mt-0"},"John Doe"),(0,s.Lk)("p",null," Fail most room even gone her end like. Comparison dissimilar unpleasant six compliment two unpleasing any add. Ashamed my company thought wishing colonel it prevent he in. Pretended residence are something far engrossed old off. ")])])],-1)),e[2]||(e[2]=(0,s.Lk)("div",{class:"tab-pane fade",id:"demographics",role:"tabpanel","aria-labelledby":"contact-tab"},[(0,s.Lk)("h4",null,"Contact us "),(0,s.Lk)("p",null," Feel free to contact us if you have any questions! "),(0,s.Lk)("p",null,[(0,s.Lk)("i",{class:"ti-headphone-alt text-info"}),(0,s.eW)(" +123456789 ")]),(0,s.Lk)("p",null,[(0,s.Lk)("i",{class:"ti-email text-success"}),(0,s.eW)(" contactus@example.com ")])],-1))])])])])])])])]),e[4]||(e[4]=(0,s.Lk)("div",{class:"row flex-grow"},[(0,s.Lk)("div",{class:"col-md-6 col-lg-6 grid-margin stretch-card"},[(0,s.Lk)("div",{class:"card card-rounded"},[(0,s.Lk)("div",{class:"card-header bg-transparent border-0 pb-0"},[(0,s.Lk)("h4",{class:"card-title card-title-dash mb-0"},"Purpose (Optional)")]),(0,s.Lk)("div",{class:"card-body card-rounded py-2",style:{display:"grid","grid-template-columns":"1fr 1fr"}},[(0,s.Lk)("div",{class:"list align-items-center border-bottom py-2"},[(0,s.Lk)("div",{class:"wrapper w-100"},[(0,s.Lk)("p",{class:"mb-2 fw-medium"}," Doc Checklist "),(0,s.Lk)("div",{class:"d-flex justify-content-between align-items-center"},[(0,s.Lk)("div",{class:"d-flex align-items-center"},[(0,s.Lk)("i",{class:"mdi mdi-calendar text-muted me-1"}),(0,s.Lk)("p",{class:"mb-0 text-small text-muted"},"Details")])])])]),(0,s.Lk)("div",{class:"list align-items-center border-bottom py-2"},[(0,s.Lk)("div",{class:"wrapper w-100"},[(0,s.Lk)("p",{class:"mb-2 fw-medium"}," Pan Card "),(0,s.Lk)("div",{class:"d-flex justify-content-between align-items-center"},[(0,s.Lk)("div",{class:"d-flex align-items-center"},[(0,s.Lk)("i",{class:"mdi mdi-calendar text-muted me-1"}),(0,s.Lk)("p",{class:"mb-0 text-small text-muted"},"ABC1245C")])])])]),(0,s.Lk)("div",{class:"list align-items-center border-bottom py-2"},[(0,s.Lk)("div",{class:"wrapper w-100"},[(0,s.Lk)("p",{class:"mb-2 fw-medium"}," Passport "),(0,s.Lk)("div",{class:"d-flex justify-content-between align-items-center"},[(0,s.Lk)("div",{class:"d-flex align-items-center"},[(0,s.Lk)("i",{class:"mdi mdi-calendar text-muted me-1"}),(0,s.Lk)("p",{class:"mb-0 text-small text-muted"},"ABRISEC (20-Jan-2028)")])])])]),(0,s.Lk)("div",{class:"list align-items-center border-bottom py-2"},[(0,s.Lk)("div",{class:"wrapper w-100"},[(0,s.Lk)("p",{class:"mb-2 fw-medium"}," Aadhaar "),(0,s.Lk)("div",{class:"d-flex justify-content-between align-items-center"},[(0,s.Lk)("div",{class:"d-flex align-items-center"},[(0,s.Lk)("i",{class:"mdi mdi-calendar text-muted me-1"}),(0,s.Lk)("p",{class:"mb-0 text-small text-muted"},"Not Available")])])])]),(0,s.Lk)("div",{class:"list align-items-center pt-3"},[(0,s.Lk)("div",{class:"wrapper w-100"},[(0,s.Lk)("p",{class:"mb-0"},[(0,s.Lk)("a",{href:"#",class:"fw-bold text-primary"},[(0,s.eW)("Show all "),(0,s.Lk)("i",{class:"mdi mdi-arrow-right ms-2"})])])])])])])]),(0,s.Lk)("div",{class:"col-md-6 col-lg-6 grid-margin stretch-card"},[(0,s.Lk)("div",{class:"card card-rounded"},[(0,s.Lk)("div",{class:"card-body py-2"},[(0,s.Lk)("div",{class:"d-flex align-items-center justify-content-between mb-3"},[(0,s.Lk)("h4",{class:"card-title card-title-dash"},"Limit Details"),(0,s.Lk)("p",{class:"mb-0"},"5 Limits Utilised")]),(0,s.Lk)("div",{class:"row"},[(0,s.Lk)("div",{class:"col-6 mb-4"},[(0,s.Lk)("h4",{class:"fs-14 fw-bold"},"Cash Limit Balance"),(0,s.Lk)("div",{class:"d-flex justify-content-between"},[(0,s.Lk)("p",{class:"text-muted"},"UDD 2.3K")]),(0,s.Lk)("div",{class:"progress progress-md"},[(0,s.Lk)("div",{class:"progress-bar bg-info w-25",role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})])]),(0,s.Lk)("div",{class:"col-6 mb-4"},[(0,s.Lk)("h4",{class:"fs-14 fw-bold"},"LRS Limit Balance"),(0,s.Lk)("div",{class:"d-flex justify-content-between"},[(0,s.Lk)("p",{class:"text-muted"},"USD 150K")]),(0,s.Lk)("div",{class:"progress progress-md"},[(0,s.Lk)("div",{class:"progress-bar bg-info w-25",role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})])]),(0,s.Lk)("div",{class:"col-6 mb-4"},[(0,s.Lk)("h4",{class:"fs-14 fw-bold"},[(0,s.eW)("TCS Applicable "),(0,s.Lk)("i",{class:"mdi mdi-check-circle-outline h5 text-warning"})]),(0,s.Lk)("div",{class:"d-flex justify-content-between"},[(0,s.Lk)("p",{class:"text-muted"},"INR 123K")]),(0,s.Lk)("div",{class:"progress progress-md"},[(0,s.Lk)("div",{class:"progress-bar bg-warning w-25",role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"})])]),(0,s.Lk)("div",{class:"col-6 mb-4"},[(0,s.Lk)("h4",{class:"fs-14 fw-bold"},[(0,s.eW)("Previous Screening "),(0,s.Lk)("i",{class:"mdi mdi-check-decagram-outline h5 text-success"})]),(0,s.Lk)("div",{class:"d-flex justify-content-between"},[(0,s.Lk)("p",{class:"badge badge-success"},"Authorized")])])])])])])],-1)),(0,s.Lk)("div",la,[(0,s.bF)(o,{onOnAddMembers:d.onAddMembers},null,8,["onOnAddMembers"])])])}var ia=t(5130);const da={class:"modal-content"},oa={class:"modal-body pt-3"},ca={class:"row"},na={class:"form-group col-lg-4"},ma={class:"form-group col-lg-4"},ua={class:"form-group col-lg-4"},pa={class:"form-group col-lg-4"},va={class:"form-group col-lg-4"},ba={class:"form-group col-lg-4"},fa={class:"form-group col-lg-4"},ka={class:"form-group col-lg-4"},La={class:"form-group col-lg-4"},ga={class:"form-group col-lg-4"},ya={class:"form-group col-lg-4"},ha={class:"form-group col-lg-4"},wa={class:"form-group col-lg-4"};function xa(a,e,t,l,r,i){return(0,s.uX)(),(0,s.CE)("form",{class:"modal-dialog modal-dialog-scrollable",onSubmit:e[13]||(e[13]=(0,ia.D$)(((...a)=>i.addMembers&&i.addMembers(...a)),["prevent"]))},[(0,s.Lk)("div",da,[e[35]||(e[35]=(0,s.Lk)("div",{class:"modal-header"},[(0,s.Lk)("h5",{class:"modal-title"},"Add Members"),(0,s.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),(0,s.Lk)("div",oa,[(0,s.Lk)("div",ca,[e[33]||(e[33]=(0,s.Lk)("div",{class:"col-lg-12"},[(0,s.Lk)("h5",{class:"text-primary pb-2"},"Personal Details")],-1)),(0,s.Lk)("div",na,[e[14]||(e[14]=(0,s.Lk)("label",{for:"firstName"},"First Name",-1)),(0,s.bo)((0,s.Lk)("input",{type:"text",class:"form-control",required:"",id:"firstName","onUpdate:modelValue":e[0]||(e[0]=a=>r.formData.firstName=a),placeholder:"firstName"},null,512),[[ia.Jo,r.formData.firstName]])]),(0,s.Lk)("div",ma,[e[15]||(e[15]=(0,s.Lk)("label",{for:"LastName"},"Last Name",-1)),(0,s.bo)((0,s.Lk)("input",{type:"text",class:"form-control",required:"",id:"LastName","onUpdate:modelValue":e[1]||(e[1]=a=>r.formData.LastName=a),placeholder:"Last Name"},null,512),[[ia.Jo,r.formData.LastName]])]),(0,s.Lk)("div",ua,[e[16]||(e[16]=(0,s.Lk)("label",{for:"EmailAddress"},"Email address",-1)),(0,s.bo)((0,s.Lk)("input",{type:"email",class:"form-control",id:"EmailAddress","onUpdate:modelValue":e[2]||(e[2]=a=>r.formData.EmailAddress=a),placeholder:"Email Address"},null,512),[[ia.Jo,r.formData.EmailAddress]])]),(0,s.Lk)("div",pa,[e[18]||(e[18]=(0,s.Lk)("label",{for:"gender"},"Gender",-1)),(0,s.bo)((0,s.Lk)("select",{class:"form-select",id:"gender","onUpdate:modelValue":e[3]||(e[3]=a=>r.formData.gender=a)},e[17]||(e[17]=[(0,s.Lk)("option",null,"Male",-1),(0,s.Lk)("option",null,"Female",-1)]),512),[[ia.u1,r.formData.gender]])]),(0,s.Lk)("div",va,[e[19]||(e[19]=(0,s.Lk)("label",{for:"dob"},"Date of Birth",-1)),(0,s.bo)((0,s.Lk)("input",{type:"text",class:"form-control",id:"dob","onUpdate:modelValue":e[4]||(e[4]=a=>r.formData.dob=a),placeholder:"DOB"},null,512),[[ia.Jo,r.formData.dob]])]),(0,s.Lk)("div",ba,[e[21]||(e[21]=(0,s.Lk)("label",{for:"product"},"Product",-1)),(0,s.bo)((0,s.Lk)("select",{class:"form-select",id:"product","onUpdate:modelValue":e[5]||(e[5]=a=>r.formData.product=a)},e[20]||(e[20]=[(0,s.Lk)("option",null,"Card",-1),(0,s.Lk)("option",null,"TT",-1)]),512),[[ia.u1,r.formData.product]])]),e[34]||(e[34]=(0,s.Lk)("div",{class:"col-lg-12 border-top mt-3 pt-3"},[(0,s.Lk)("h5",{class:"text-primary pb-2"},"Address")],-1)),(0,s.Lk)("div",fa,[e[22]||(e[22]=(0,s.Lk)("label",{for:"address1"},"Address 1",-1)),(0,s.bo)((0,s.Lk)("input",{type:"text",class:"form-control",id:"address1","onUpdate:modelValue":e[6]||(e[6]=a=>r.formData.address1=a),placeholder:"Location"},null,512),[[ia.Jo,r.formData.address1]])]),(0,s.Lk)("div",ka,[e[23]||(e[23]=(0,s.Lk)("label",{for:"address2"},"Address 2",-1)),(0,s.bo)((0,s.Lk)("input",{type:"text",class:"form-control",id:"address2","onUpdate:modelValue":e[7]||(e[7]=a=>r.formData.address2=a),placeholder:"Location"},null,512),[[ia.Jo,r.formData.address2]])]),(0,s.Lk)("div",La,[e[25]||(e[25]=(0,s.Lk)("label",{for:"state"},"State",-1)),(0,s.bo)((0,s.Lk)("select",{class:"form-select",id:"state","onUpdate:modelValue":e[8]||(e[8]=a=>r.formData.state=a)},e[24]||(e[24]=[(0,s.Lk)("option",null,"Maharashtra",-1)]),512),[[ia.u1,r.formData.state]])]),(0,s.Lk)("div",ga,[e[27]||(e[27]=(0,s.Lk)("label",{for:"country"},"Country",-1)),(0,s.bo)((0,s.Lk)("select",{class:"form-select",id:"country","onUpdate:modelValue":e[9]||(e[9]=a=>r.formData.country=a)},e[26]||(e[26]=[(0,s.Lk)("option",null,"India",-1)]),512),[[ia.u1,r.formData.country]])]),(0,s.Lk)("div",ya,[e[29]||(e[29]=(0,s.Lk)("label",{for:"state"},"State",-1)),(0,s.bo)((0,s.Lk)("select",{class:"form-select",id:"state","onUpdate:modelValue":e[10]||(e[10]=a=>r.formData.state=a)},e[28]||(e[28]=[(0,s.Lk)("option",null,"Maharashtra",-1)]),512),[[ia.u1,r.formData.state]])]),(0,s.Lk)("div",ha,[e[31]||(e[31]=(0,s.Lk)("label",{for:"city"},"City",-1)),(0,s.bo)((0,s.Lk)("select",{class:"form-select",id:"city","onUpdate:modelValue":e[11]||(e[11]=a=>r.formData.city=a)},e[30]||(e[30]=[(0,s.Lk)("option",null,"Mumbai",-1)]),512),[[ia.u1,r.formData.city]])]),(0,s.Lk)("div",wa,[e[32]||(e[32]=(0,s.Lk)("label",{for:"postcode"},"Postcode",-1)),(0,s.bo)((0,s.Lk)("input",{type:"text",class:"form-control",id:"postcode","onUpdate:modelValue":e[12]||(e[12]=a=>r.formData.postcode=a),placeholder:"Location"},null,512),[[ia.Jo,r.formData.postcode]])])])]),e[36]||(e[36]=(0,s.Lk)("div",{class:"modal-footer"},[(0,s.Lk)("button",{class:"btn btn-light btn-sm me-2",id:"btnClose","data-bs-dismiss":"modal"},"Cancel"),(0,s.Lk)("button",{type:"submit",id:"btnSave",class:"btn btn-sm btn-primary"},"Submit")],-1))])],32)}var Ca={data(){return{formData:{}}},methods:{addMembers(){this.$emit("onAddMembers",this.formData)}}};const Da=(0,f.A)(Ca,[["render",xa],["__scopeId","data-v-9ebc94f4"]]);var Sa=Da,Fa={components:{MemberForm:Sa},props:["membersList"],data(){return{selectedMember:this.membersList[0],items:[{date:"10-05-2024 22:15:00",currency:"USD",product:"TT",fc_amount:"3",rate:"84.45",domain:"ASTRA"},{date:"10-05-2024 22:15:00",currency:"USD",product:"Card",fc_amount:"10",rate:"84.45",domain:"CRM"},{date:"10-05-2024 22:15:00",currency:"USD",product:"Card",fc_amount:"20",rate:"84.45",domain:"MUDRA"},{date:"10-05-2024 22:15:00",currency:"USD",product:"Card",fc_amount:"2",rate:"84.45",domain:"ASTRA"},{date:"10-05-2024 22:15:00",currency:"USD",product:"Card",fc_amount:"3",rate:"84.45",domain:"CRM"},{date:"10-05-2024 22:15:00",currency:"USD",product:"TT",fc_amount:"4",rate:"84.45",domain:"ASTRA"},{date:"10-05-2024 22:15:00",currency:"USD",product:"Card",fc_amount:"4",rate:"84.45",domain:"CRM"},{date:"10-05-2024 22:15:00",currency:"USD",product:"Card",fc_amount:"3",rate:"84.45",domain:"MUDRA"}]}},methods:{onAddMembers(a){console.log(a)}},watch:{membersList(a){this.selectedMember=a[0]}}};const Aa=(0,f.A)(Fa,[["render",ra]]);var Ua=Aa;const _a={class:"card my-3"};function Ta(a,e){return(0,s.uX)(),(0,s.CE)("div",_a,e[0]||(e[0]=[(0,s.Fv)('<div class="card-body pt-1 pb-3" data-v-38c5eb38><form class="d-flex gap-3 align-items-center flex-wrap" data-v-38c5eb38><div style="width:90px;" data-v-38c5eb38><label class="form-label" for="" data-v-38c5eb38>Currency <span class="text-danger" data-v-38c5eb38>*</span></label><select class="form-select" id="" data-v-38c5eb38><option value="USD" selected data-v-38c5eb38>USD</option><option value="INR" data-v-38c5eb38>INR</option><option value="INR" data-v-38c5eb38>UK</option></select></div><div style="width:100px;" data-v-38c5eb38><label class="form-label" for="" data-v-38c5eb38>Product <span class="text-danger" data-v-38c5eb38>*</span></label><select class="form-select" id="" data-v-38c5eb38><option value="CARD" selected data-v-38c5eb38>CARD</option><option value="TT" data-v-38c5eb38>TT</option></select></div><div style="width:140px;" data-v-38c5eb38><label class="form-label" for="inlineFormInputGroupUsername" data-v-38c5eb38>FC Amount <span class="text-danger" data-v-38c5eb38>*</span></label><div class="input-group" data-v-38c5eb38><input type="number" class="form-control" id="inlineFormInputGroupUsername" placeholder="FC Amount" data-v-38c5eb38></div></div><div style="width:75px;" data-v-38c5eb38><label class="form-label" for="inlineFormInputGroupUsername" data-v-38c5eb38>Rate <span class="text-danger" data-v-38c5eb38>*</span></label><div class="input-group" data-v-38c5eb38><input type="number" class="form-control" id="inlineFormInputGroupUsername" placeholder="Rate" data-v-38c5eb38></div></div><div style="width:100px;" data-v-38c5eb38><label class="form-label" for="inlineFormInputGroupUsername" data-v-38c5eb38>Charges <span class="text-danger" data-v-38c5eb38>*</span></label><div class="input-group" data-v-38c5eb38><input type="number" class="form-control" id="inlineFormInputGroupUsername" placeholder="Charges" data-v-38c5eb38></div></div><div style="width:75px;" data-v-38c5eb38><label class="form-label" for="inlineFormInputGroupUsername" data-v-38c5eb38>GST</label><div class="input-group" data-v-38c5eb38><input type="number" class="form-control" id="inlineFormInputGroupUsername" placeholder="GST" data-v-38c5eb38></div></div><div style="width:75px;" data-v-38c5eb38><label class="form-label" for="inlineFormInputGroupUsername" data-v-38c5eb38>TCS</label><div class="input-group" data-v-38c5eb38><input type="number" class="form-control" id="inlineFormInputGroupUsername" placeholder="TCS" data-v-38c5eb38></div></div><div style="width:140px;" data-v-38c5eb38><label class="form-label" for="inlineFormInputGroupUsername" data-v-38c5eb38>Bill Amount</label><div class="input-group" data-v-38c5eb38><input type="number" class="form-control" id="inlineFormInputGroupUsername" placeholder="Bill Amount" data-v-38c5eb38></div></div><div class="ms-auto mt-auto" data-v-38c5eb38><button type="submit" class="btn btn-warning btn-sm text-nowrap" data-v-38c5eb38><i class="mdi mdi-arrow-right" data-v-38c5eb38></i> Send Quote</button></div></form></div>',1)]))}const Ia={},Ma=(0,f.A)(Ia,[["render",Ta],["__scopeId","data-v-38c5eb38"]]);var Ea=Ma;const Pa={class:"card"},Ra={class:"card-body py-2"},Na={class:"table-responsive"},Xa={class:"table table-hover table-sm"};function Ga(a,e){return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("div",Pa,[(0,s.Lk)("div",Ra,[e[2]||(e[2]=(0,s.Lk)("h4",{class:"card-title mb-2"},"Quotes",-1)),(0,s.Lk)("div",Na,[(0,s.Lk)("table",Xa,[e[1]||(e[1]=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th",null,"Product"),(0,s.Lk)("th",null,"FC Amount"),(0,s.Lk)("th",null,"Rate"),(0,s.Lk)("th",null,"GST"),(0,s.Lk)("th",null,"TCS"),(0,s.Lk)("th",null,"Bill Amount"),(0,s.Lk)("th",null,"Status")])],-1)),(0,s.Lk)("tbody",null,[((0,s.uX)(),(0,s.CE)(s.FK,null,(0,s.pI)(5,((a,t)=>(0,s.Lk)("tr",{key:t},e[0]||(e[0]=[(0,s.Lk)("td",null,[(0,s.Lk)("span",{class:"badge badge-primary fs-11"},"Card")],-1),(0,s.Lk)("td",null,"USD 30k @28.76%",-1),(0,s.Lk)("td",null,"100",-1),(0,s.Lk)("td",null,"0",-1),(0,s.Lk)("td",null,"0",-1),(0,s.Lk)("td",null,"10k",-1),(0,s.Lk)("td",null,[(0,s.Lk)("label",{class:"badge badge-danger"},"Pending")],-1)])))),64))])])])])])])}const ja={},Va=(0,f.A)(ja,[["render",Ga]]);var Ka=Va;const Qa={class:"card card-rounded"},Ba={class:"card-body py-2"},Ja={class:"bullet-line-list"},Wa={class:"d-flex justify-content-between"},Oa={class:"text-success"},$a={class:"text-muted fs-12"},qa={class:"fs-12",href:"#"};function Ha(a,e,t,l,r,d){return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("div",Qa,[(0,s.Lk)("div",Ba,[e[2]||(e[2]=(0,s.Lk)("div",{class:"d-flex align-items-center justify-content-between mb-3"},[(0,s.Lk)("h4",{class:"card-title card-title-dash"},"Quotes History"),(0,s.Lk)("p",{class:"mb-0"},"20 finished, 5 remaining")],-1)),(0,s.Lk)("ul",Ja,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.items,((a,t)=>((0,s.uX)(),(0,s.CE)("li",{key:t},[(0,s.Lk)("div",Wa,[(0,s.Lk)("div",null,[(0,s.Lk)("span",Oa,[(0,s.Lk)("span",{class:(0,i.C4)(["badge py-1 fs-10","badge-"+("TT"==a.product?"warning":"primary")])},(0,i.v_)(a.product),3),e[0]||(e[0]=(0,s.eW)()),(0,s.Lk)("strong",null,(0,i.v_)(a.currency)+" "+(0,i.v_)(a.fc_amount)+" @"+(0,i.v_)(a.rate),1)]),e[1]||(e[1]=(0,s.eW)()),(0,s.Lk)("div",$a,(0,i.v_)(a.date),1)])]),(0,s.Lk)("a",qa,(0,i.v_)(a.action),1)])))),128))]),e[3]||(e[3]=(0,s.Fv)('<div class="list align-items-center pt-3"><div class="wrapper w-100"><p class="mb-0"><a href="#" class="fw-bold text-primary">Show all <i class="mdi mdi-arrow-right ms-2"></i></a></p></div></div>',1))])])])}var za={data(){return{items:[{date:"10-05-2024 22:15:00",currency:"USD",product:"TT",fc_amount:"3000",rate:"84.45",action:"Send Payment Link"},{date:"10-05-2024 22:15:00",currency:"USD",product:"Card",fc_amount:"3000",rate:"84.45",action:"Proceed with transaction"},{date:"10-05-2024 22:15:00",currency:"USD",product:"Card",fc_amount:"3000",rate:"84.45",action:"Expired "}]}}};const Ya=(0,f.A)(za,[["render",Ha]]);var Za=Ya,ae={name:"App",props:["dataSource"],components:{SummaryDetails:I,LeadsForm:N,MembersDetails:Ua,QuotesForm:Ea,QuotesDetails:Ka,QuotesHistory:Za}};const ee=(0,f.A)(ae,[["render",C]]);var te=ee,se={name:"LeadView",props:["dataSource","userList"],components:{SideBar:L,MainPanel:te}};const le=(0,f.A)(se,[["render",r]]);var re=le}}]);
//# sourceMappingURL=LeadsView.459f1865.js.map