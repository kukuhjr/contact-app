import{c as n,r,j as e,C as R}from"./index-f06a1b16.js";import{d as z}from"./Add-4dec5537.js";import{T as o,I as T,d as H,v as I,a as m}from"./regExp-dc1ad52d.js";import{u as G,A as D,H as Q,S as U}from"./Header-04034204.js";import{B as W}from"./Button-1ed3c6ee.js";import{f as J}from"./fontPreset-e335cba6.js";import{G as K}from"./useContacts-53481c0f.js";import{g as V}from"./useQuery-cc2bd7c9.js";import"./createSvgIcon-be3a5855.js";import"./Container-34179d87.js";import"./useLazyQuery-1df3faf7.js";const X=V`
    mutation AddContactWithPhones(
        $first_name: String!, 
        $last_name: String!, 
        $phones: [phone_insert_input!]!
    ) {
        insert_contact(
            objects: {
                first_name: $first_name, 
                last_name: 
                $last_name, 
                phones: { 
                    data: $phones
                    }
                }
            ) {
                returning {
                first_name
                last_name
                id
                phones {
                    number
                }
            }
        }
    }
`,Y=({firstName:v,lastName:i,phones:d})=>{const[t,{data:u,loading:l,error:g}]=G(X,{variables:{first_name:v,last_name:i,phones:d},refetchQueries:[{query:K}]});return{error:g,loading:l,data:u,createContact:t}},Z=n`
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
`,ee=n`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
`,C=n`
    padding-left: 2px;
    ${J.body14Lig}
`,se=n`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
`,pe=()=>{const v=r.forwardRef(function(a,O){return e.jsx(D,{elevation:6,ref:O,variant:"filled",...a})}),[i,d]=r.useState({open:!1,message:"",error:!1}),[t,u]=r.useState(1),[l,g]=r.useState(""),[p,w]=r.useState(""),[c,E]=r.useState(""),[h,y]=r.useState(""),[f,S]=r.useState(""),[x,P]=r.useState(""),[b,_]=r.useState(""),L=[{number:c},{number:h},{number:f},{number:x},{number:b}],{loading:A,error:j,data:$,createContact:F}=Y({firstName:l,lastName:p,phones:L.filter((s,a)=>a+1<=t)}),N=(s,a)=>{d({open:!0,message:s,error:a})},k=(s,a)=>{a!=="clickaway"&&d({open:!1,message:"",error:!1})},q=()=>{t<5&&u(s=>s+1)},B=()=>{t>1&&u(s=>s-1)},M=()=>{let s=!1,a="All forms are not fulfilled";l===""||p===""||c===""?s=!0:I.test(`${l} ${p}`)?c!==""&&!m.test(c)?(s=!0,a="Phone number format is not valid. (indonesia phone number)"):h!==""&&!m.test(h)?(s=!0,a="Phone number 2 format is not valid. (indonesia phone number)"):f!==""&&!m.test(f)?(s=!0,a="Phone number 3 format is not valid. (indonesia phone number)"):x!==""&&!m.test(x)?(s=!0,a="Phone number 4 format is not valid. (indonesia phone number)"):b!==""&&!m.test(b)&&(s=!0,a="Phone number 5 format is not valid. (indonesia phone number)"):(s=!0,a="Name format is not valid (character only)"),s?N(a,!0):F()};return r.useMemo(()=>{t<5&&_(""),t<4&&P(""),t<3&&S(""),t<2&&y("")},[t]),r.useMemo(()=>{$&&N("Add contact success",!1),j&&(j.message.includes('Uniqueness violation. duplicate key value violates unique constraint "phone_number_key"')?N("Number phones already exist.",!0):N("Add contact failed",!0))},[$,j]),e.jsxs(e.Fragment,{children:[e.jsx(Q,{title:"Add Contact"}),e.jsxs("div",{className:Z,children:[e.jsxs("div",{className:ee,children:[e.jsxs("div",{children:[e.jsx("span",{className:C,children:"First Name"}),e.jsx("div",{className:n`margin-top: 8px`,children:e.jsx(o,{placeholder:"First Name",value:l,onChange:s=>{g(s.target.value)}})})]}),e.jsxs("div",{children:[e.jsx("span",{className:C,children:"Last Name"}),e.jsx("div",{className:n`margin-top: 8px`,children:e.jsx(o,{placeholder:"Last Name",value:p,onChange:s=>{w(s.target.value)}})})]}),e.jsxs("div",{children:[e.jsxs("div",{className:n`
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        `,children:[e.jsx("span",{className:C,children:"Phone Number"}),e.jsxs("div",{className:n`
                                display: flex;
                                column-gap: 6px;
                            `,children:[t>1&&e.jsx(T,{onClick:()=>{B()},children:e.jsx(H,{fontSize:"small",sx:{color:"red"}})}),e.jsx(T,{onClick:()=>{q()},disabled:t>4,children:e.jsx(z,{fontSize:"small"})})]})]}),e.jsxs("div",{className:n`
                            margin-top: 8px;
                            display: flex;
                            flex-direction: column;
                            row-gap: 8px;
                        `,children:[e.jsx(o,{placeholder:"Phone Number",value:c,onChange:s=>{E(s.target.value)}}),e.jsx(o,{placeholder:"Phone Number 2",value:h,onChange:s=>{y(s.target.value)},className:n`
                                    display: ${t>1?"block":"none"};
                                    transition: display 400ms ease;
                                `}),e.jsx(o,{placeholder:"Phone Number 3",value:f,onChange:s=>{S(s.target.value)},className:n`
                                    display: ${t>2?"block":"none"};
                                    transition: display 400ms ease;
                                `}),e.jsx(o,{placeholder:"Phone Number 4",value:x,onChange:s=>{P(s.target.value)},className:n`
                                    display: ${t>3?"block":"none"};
                                    transition: display 400ms ease;
                                `}),e.jsx(o,{placeholder:"Phone Number 5",value:b,onChange:s=>{_(s.target.value)},className:n`
                                    display: ${t>4?"block":"none"};
                                    transition: display 400ms ease;
                                `})]})]})]}),e.jsx("div",{className:se,children:e.jsx(W,{onClick:M,disabled:A,children:A?e.jsx("div",{className:n`padding: 0 12px`,children:e.jsx(R,{color:"inherit",size:"14px"})}):"Submit"})})]}),e.jsx(U,{open:i.open,autoHideDuration:6e3,onClose:k,children:e.jsx(v,{onClose:k,sx:{width:"100%"},severity:i.error?"error":"success",children:i.message})})]})};export{pe as default};
