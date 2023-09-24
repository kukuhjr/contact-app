import{g as Pe,a as Oe,k as xe,s as Ae,b as B,d as Ee,e as le,r as d,u as Re,f as Me,j as e,h as Te,i as ze,c as i,C as oe,l as Ie,m as Be,n as de}from"./index-f06a1b16.js";import{g as X,u as qe}from"./useQuery-cc2bd7c9.js";import{r as be,i as ge}from"./createSvgIcon-be3a5855.js";import{C as Fe}from"./Container-34179d87.js";import{u as ve,A as Le,H as je,I as Ne,S as Ue}from"./Header-04034204.js";import{B as H}from"./Button-1ed3c6ee.js";import{d as We}from"./Add-4dec5537.js";import{T as b,I as y,d as He,v as Xe,a as C}from"./regExp-dc1ad52d.js";import{f as j}from"./fontPreset-e335cba6.js";import{D as Ge,a as Qe,b as Ke,c as Ve,B as ce}from"./DialogTitle-5318645b.js";function Je(s){return String(s).match(/[\d.\-+]*\s*(.*)/)[1]||""}function Ye(s){return parseFloat(s)}function Ze(s){return Pe("MuiSkeleton",s)}Oe("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const De=["animation","className","component","height","style","variant","width"];let q=s=>s,ue,me,he,pe;const es=s=>{const{classes:a,variant:r,animation:l,hasChildren:u,width:t,height:m}=s;return ze({root:["root",r,l,u&&"withChildren",u&&!t&&"fitContent",u&&!m&&"heightAuto"]},Ze,a)},ss=xe(ue||(ue=q`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),ns=xe(me||(me=q`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),as=Ae("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(s,a)=>{const{ownerState:r}=s;return[a.root,a[r.variant],r.animation!==!1&&a[r.animation],r.hasChildren&&a.withChildren,r.hasChildren&&!r.width&&a.fitContent,r.hasChildren&&!r.height&&a.heightAuto]}})(({theme:s,ownerState:a})=>{const r=Je(s.shape.borderRadius)||"px",l=Ye(s.shape.borderRadius);return B({display:"block",backgroundColor:s.vars?s.vars.palette.Skeleton.bg:Ee(s.palette.text.primary,s.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${l}${r}/${Math.round(l/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(s.vars||s).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:s})=>s.animation==="pulse"&&le(he||(he=q`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),ss),({ownerState:s,theme:a})=>s.animation==="wave"&&le(pe||(pe=q`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),ns,(a.vars||a).palette.action.hover)),ts=d.forwardRef(function(a,r){const l=Re({props:a,name:"MuiSkeleton"}),{animation:u="pulse",className:t,component:m="span",height:h,style:k,variant:p="text",width:P}=l,c=Me(l,De),N=B({},l,{animation:u,component:m,variant:p,hasChildren:!!c.children}),f=es(N);return e.jsx(as,B({as:m,ref:r,className:Te(f.root,t),ownerState:N},c,{style:B({width:P,height:h},k)}))}),W=ts,G=X`
    query GetContactDetail($id: Int!){
        contact_by_pk(id: $id) {
            last_name
            id
            first_name
            created_at
            phones {
                number
            }
        }
    }
`,is=s=>{const{error:a,loading:r,data:l}=qe(G,{variables:{id:s}});return{error:a,loading:r,data:l}};var Q={},rs=ge;Object.defineProperty(Q,"__esModule",{value:!0});var K=Q.default=void 0,ls=rs(be()),os=e,ds=(0,ls.default)((0,os.jsx)("path",{d:"M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"}),"ArrowBackIosNewOutlined");K=Q.default=ds;var V={},cs=ge;Object.defineProperty(V,"__esModule",{value:!0});var w=V.default=void 0,us=cs(be()),ms=e,hs=(0,us.default)((0,ms.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");w=V.default=hs;const ps=X`
    mutation EditContactById($id: Int!, $_set: contact_set_input) {
        update_contact_by_pk(pk_columns: {id: $id}, _set: $_set) {
            id
            first_name
            last_name
            phones {
            number
            }
        }
    }
`,fs=({id:s,inputData:a})=>{const[r,{data:l,loading:u,error:t}]=ve(ps,{variables:{id:s,_set:a},refetchQueries:[{query:G}]});return{error:t,loading:u,data:l,editContact:r}},xs=X`
    mutation EditPhoneNumber($pk_columns: phone_pk_columns_input!, $new_phone_number:String!) {
        update_phone_by_pk(pk_columns: $pk_columns, _set: {number: $new_phone_number}) {
            contact {
            id
            last_name
            first_name
            created_at
            phones {
                number
            }
            }
        }
    }

`,bs=({new_phone_number:s,pk_columns:a})=>{const[r,{data:l,loading:u,error:t}]=ve(xs,{variables:{new_phone_number:s,pk_columns:a},refetchQueries:[{query:G}]});return{error:t,loading:u,data:l,editPhone:r}},gs=i`
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
`,fe=i`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
`,R=i`
    padding-left: 2px;
    ${j.body14Lig}
`,vs=i`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
`,M=i`display: flex; column-gap: 4px`,js=({contactData:s,changeView:a})=>{var se,ne,ae,te,ie,re;const r=d.forwardRef(function(o,I){return e.jsx(Le,{elevation:6,ref:I,variant:"filled",...o})}),[l,u]=d.useState({open:!1,message:"",error:!1}),[t,m]=d.useState(((se=s==null?void 0:s.phones)==null?void 0:se.length)??1),[h,k]=d.useState(s.first_name??""),[p,P]=d.useState(s.last_name??""),[c,N]=d.useState(((ne=s==null?void 0:s.phones[0])==null?void 0:ne.number)??""),[f,O]=d.useState(((ae=s==null?void 0:s.phones[1])==null?void 0:ae.number)??""),[_,A]=d.useState(((te=s==null?void 0:s.phones[2])==null?void 0:te.number)??""),[g,T]=d.useState(((ie=s==null?void 0:s.phones[3])==null?void 0:ie.number)??""),[z,J]=d.useState(((re=s==null?void 0:s.phones[4])==null?void 0:re.number)??""),[_e,Y]=d.useState({open:!1,message:"",error:!1,phoneNum:""}),[S,Z]=d.useState(""),[$,ye]=d.useState(""),{loading:D,error:F,data:ee,editContact:Ce}=fs({id:s.id,inputData:{first_name:h,last_name:p}}),v=bs({new_phone_number:$,pk_columns:{number:S,contact_id:s.id}}),x=(n,o)=>{u({open:!0,message:n,error:o})},L=(n,o)=>{o!=="clickaway"&&u({open:!1,message:"",error:!1})},ke=()=>{t<5&&m(n=>n+1)},Se=()=>{t>1&&m(n=>n-1)},$e=()=>{let n=!1,o="All forms are not fulfilled";h===""||p===""||c===""?n=!0:Xe.test(`${h} ${p}`)?c!==""&&!C.test(c)?(n=!0,o="Phone number format is not valid. (indonesia phone number)"):f!==""&&!C.test(f)?(n=!0,o="Phone number 2 format is not valid. (indonesia phone number)"):_!==""&&!C.test(_)?(n=!0,o="Phone number 3 format is not valid. (indonesia phone number)"):g!==""&&!C.test(g)?(n=!0,o="Phone number 4 format is not valid. (indonesia phone number)"):z!==""&&!C.test(z)&&(n=!0,o="Phone number 5 format is not valid. (indonesia phone number)"):(n=!0,o="Name format is not valid (character only)"),n?x(o,!0):Ce()},U=()=>{Y({open:!1,message:"",error:!1,phoneNum:""})},E=(n,o,I)=>{Z(I),Y({open:!0,message:n,error:o??!1,phoneNum:I??""})},we=()=>{let n=!1,o="All forms are not fulfilled";$===""||S===""?n=!0:$===S?(n=!0,o="Cannot change to same number."):$!==""&&!C.test($)?(n=!0,o="New number is invalid."):S!==""&&!C.test(S)&&(n=!0,o="Old number is invalid."),n?x(o,!0):v.editPhone()};return d.useMemo(()=>{t<5&&J(""),t<4&&T(""),t<3&&A(""),t<2&&O("")},[t]),d.useMemo(()=>{ee&&x("Edit contact success",!1),F&&(F.message.includes('Uniqueness violation. duplicate key value violates unique constraint "phone_number_key"')?x("Number phones already exist.",!0):x("Edit contact failed",!0))},[ee,F]),d.useMemo(()=>{v.data&&(x("Phone number updated.",!1),setTimeout(()=>{L(),a()},3e3),a()),v.error&&(v.error.message.includes('Uniqueness violation. duplicate key value violates unique constraint "phone_number_key"')?x("Number phones already exist.",!0):x("Edit number failed",!0))},[v.data,v.error]),e.jsxs(e.Fragment,{children:[e.jsx(je,{backButton:e.jsx(Ne,{"aria-label":"back",size:"small",onClick:()=>{a()},children:e.jsx(K,{fontSize:"small"})})}),e.jsxs("div",{className:gs,children:[e.jsxs("div",{className:fe,children:[e.jsxs("div",{children:[e.jsx("span",{className:R,children:"First Name"}),e.jsx("div",{className:i`margin-top: 8px`,children:e.jsx(b,{placeholder:"First Name",value:h,onChange:n=>{k(n.target.value)}})})]}),e.jsxs("div",{children:[e.jsx("span",{className:R,children:"Last Name"}),e.jsx("div",{className:i`margin-top: 8px`,children:e.jsx(b,{placeholder:"Last Name",value:p,onChange:n=>{P(n.target.value)}})})]}),e.jsxs("div",{children:[e.jsxs("div",{className:i`
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        `,children:[e.jsx("span",{className:R,children:"Phone Number"}),e.jsxs("div",{className:i`
                                display: flex;
                                column-gap: 6px;
                            `,children:[t>1&&e.jsx(y,{onClick:()=>{Se()},children:e.jsx(He,{fontSize:"small",sx:{color:"red"}})}),e.jsx(y,{onClick:()=>{ke()},disabled:t>4,children:e.jsx(We,{fontSize:"small"})})]})]}),e.jsxs("div",{className:i`
                            margin-top: 8px;
                            display: flex;
                            flex-direction: column;
                            row-gap: 8px;
                        `,children:[e.jsxs("div",{className:M,children:[e.jsx(b,{placeholder:"Phone Number",value:c,onChange:n=>{N(n.target.value)},readOnly:!0}),e.jsx(y,{onClick:()=>{E("Phone Number 1",!1,c)},disabled:!1,children:e.jsx(w,{fontSize:"small"})})]}),e.jsxs("div",{className:M,children:[e.jsx(b,{placeholder:"Phone Number 2",value:f,onChange:n=>{O(n.target.value)},className:i`display: ${t>1?"block":"none"}`,readOnly:!0}),e.jsx(y,{onClick:()=>{E("Phone Number 2",!1,f)},disabled:t>1,display:t>1?"flex":"none",children:e.jsx(w,{fontSize:"small"})})]}),e.jsxs("div",{className:M,children:[e.jsx(b,{placeholder:"Phone Number 3",value:_,onChange:n=>{A(n.target.value)},className:i`display: ${t>2?"block":"none"}`,readOnly:!0}),e.jsx(y,{onClick:()=>{E("Phone Number 3",!1,_)},disabled:t>2,display:t>2?"flex":"none",children:e.jsx(w,{fontSize:"small"})})]}),e.jsxs("div",{className:M,children:[e.jsx(b,{placeholder:"Phone Number 4",value:g,onChange:n=>{T(n.target.value)},className:i`display: ${t>3?"block":"none"}`,readOnly:!0}),e.jsx(y,{onClick:()=>{E("Phone Number 4",!1,g)},disabled:t>3,display:t>3?"flex":"none",children:e.jsx(w,{fontSize:"small"})})]}),e.jsxs("div",{className:M,children:[e.jsx(b,{placeholder:"Phone Number 5",value:z,onChange:n=>{J(n.target.value)},className:i`display: ${t>4?"block":"none"}`,readOnly:!0}),e.jsx(y,{onClick:()=>{E("Phone Number 5",!1,z)},disabled:t>4,display:t>4?"flex":"none",children:e.jsx(w,{fontSize:"small"})})]})]})]})]}),e.jsx("div",{className:vs,children:e.jsx(H,{onClick:$e,disabled:D,children:D?e.jsx("div",{className:i`padding: 0 12px`,children:e.jsx(oe,{color:"inherit",size:"14px"})}):"Submit"})})]}),e.jsx(Ue,{open:l.open,autoHideDuration:6e3,onClose:L,children:e.jsx(r,{onClose:L,sx:{width:"100%"},severity:l.error?"error":"success",children:l.message})}),e.jsxs(Ge,{open:_e.open,keepMounted:!0,onClose:U,"aria-describedby":"alert-edit-number",fullWidth:!0,maxWidth:"md",children:[e.jsx(Qe,{sx:{fontSize:"18px",fontWeight:"400"},children:"Edit Phone Number"}),e.jsx(Ke,{children:e.jsxs("div",{className:fe,children:[e.jsxs("div",{children:[e.jsx("span",{className:R,children:"Old Number"}),e.jsx("div",{className:i`margin-top: 8px`,children:e.jsx(b,{value:S,onChange:n=>{Z(n.target.value)},readOnly:!0})})]}),e.jsxs("div",{children:[e.jsx("span",{className:R,children:"New Number"}),e.jsx("div",{className:i`margin-top: 8px`,children:e.jsx(b,{value:$,onChange:n=>{ye(n.target.value)}})})]})]})}),e.jsxs(Ve,{children:[e.jsx(ce,{onClick:U,color:"error",disabled:v.loading,children:"Cancel"}),e.jsx(ce,{onClick:()=>{we(),U(),x("Phone number updated.",!1)},children:v.loading?e.jsx("div",{className:i`padding: 0 12px`,children:e.jsx(oe,{color:"inherit",size:"14px"})}):"Save"})]})]})]})},As=()=>{var f,O,_,A;const s=Ie(),a=Be(),[r,l]=d.useState(!1),u=i`
        background: ${de.primaryBlue};
        height: 100px;
    `,t=i`
        height: 100%;
        background: #f5f5f5;
        padding: .5rem 1rem;
        display: flex;
        flex-direction: column;
        row-gap: .5rem;
        position: relative;
    `,m=i`
        display: flex;
        flex-direction: column;
        background: #fff;
        padding: 1rem 0;
        position: relative;
    `,h=i`
        text-align: center;
        ${j.body16Med}
    `,k=i`
        height: 4rem;
        width: 4rem;
        background: ${de.blue300};
        border: 2px solid #f5f5f5;
        border-radius: 50%;
        position: absolute;
        top: -2rem;
        left: .675rem;
    `,{error:p,loading:P,data:c}=is(a.contactId),N=()=>{s("/")};return r?e.jsx(js,{contactData:c.contact_by_pk,changeView:()=>{l(!1)}}):e.jsxs(e.Fragment,{children:[e.jsx(je,{backButton:e.jsx(Ne,{"aria-label":"back",size:"small",onClick:()=>{N()},children:e.jsx(K,{fontSize:"small"})}),actionButton:e.jsx(H,{onClick:()=>{l(!0)},children:"Edit"})}),e.jsxs(Fe,{children:[e.jsx("div",{className:u}),P?e.jsxs("div",{className:t,children:[e.jsx(W,{variant:"rounded",width:"100%",height:51}),e.jsx(W,{variant:"rounded",width:"100%",height:72}),e.jsx(W,{variant:"rounded",width:"100%",height:72})]}):p?e.jsxs("div",{className:t,children:[e.jsxs("div",{className:m,children:[e.jsx("h2",{className:h,children:"Oops, something went wrong."}),e.jsx("div",{className:k})]}),e.jsx("div",{className:m,children:e.jsx("div",{className:i`padding: .25rem 1rem;`,children:e.jsx("span",{className:i`
                                        ${j.body12Reg}
                                    `,children:p.message})})})]}):c?e.jsxs("div",{className:t,children:[e.jsxs("div",{className:m,children:[e.jsx("h2",{className:h,children:c.contact_by_pk!==null?`${((f=c.contact_by_pk)==null?void 0:f.first_name)??""} ${((O=c.contact_by_pk)==null?void 0:O.last_name)??""}`:"CONTACT NOT FOUND."}),e.jsx("div",{className:k})]}),c.contact_by_pk===null?e.jsx("div",{className:m,children:e.jsxs("div",{className:i`
                                            padding: 1.25rem .75rem;
                                            display: flex;
                                            flex-direction: column;
                                            justify-content: center;
                                            align-items: center;
                                            row-gap: .75rem;
                                        `,children:[e.jsx("div",{children:e.jsx("span",{className:i`
                                                    ${j.body12Lig}
                                                    text-align: center;
                                                `,children:"The contact was not found, sorry."})}),e.jsx(H,{onClick:()=>{N()},children:"See All Contacts"})]})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:m,children:e.jsxs("div",{className:i`padding: 0 1rem`,children:[e.jsx("span",{className:i`${j.body12Lig}`,children:"Phone"}),e.jsx("div",{className:i`
                                                    margin-top: 4px;
                                                    display: flex;
                                                    flex-direction: column;
                                                    row-gap: 4px;
                                                `,children:(_=c.contact_by_pk)==null?void 0:_.phones.map((g,T)=>e.jsx("p",{className:i`
                                                            ${j.body14Reg};
                                                            margin-top: 4px;
                                                        `,children:(g==null?void 0:g.number)??""},`phone-${T+1}`))})]})}),e.jsx("div",{className:m,children:e.jsxs("div",{className:i`padding: 0 1rem`,children:[e.jsx("span",{className:i`${j.body12Lig}`,children:"Ditambahkan"}),e.jsx("p",{className:i`
                                                    ${j.body14Reg};
                                                    margin-top: 4px;
                                                `,children:(A=c.contact_by_pk)==null?void 0:A.created_at})]})})]})]}):e.jsx("div",{className:t,children:e.jsx("span",{children:"Something went wrong."})})]})]})};export{As as default};
