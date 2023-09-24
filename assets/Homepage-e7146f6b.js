import{g as ie,a as oe,s as B,p as Ce,r as u,u as ne,f as se,j as e,b as x,h as le,i as ce,d as _e,o as L,n as g,c as o,l as ye,C as U,L as $e}from"./index-f06a1b16.js";import{G as Se,u as De}from"./useContacts-53481c0f.js";import{C as we}from"./Container-34179d87.js";import{u as Ne,S as de,A as pe,H as ke}from"./Header-04034204.js";import{b as Ae,B as Ie}from"./Button-1ed3c6ee.js";import{r as O,i as R}from"./createSvgIcon-be3a5855.js";import{f as y}from"./fontPreset-e335cba6.js";import{g as Oe}from"./useQuery-cc2bd7c9.js";import{T as Re,D as Q,a as Y,b as K,c as Z,B as M}from"./DialogTitle-5318645b.js";import"./useLazyQuery-1df3faf7.js";function Me(t){return ie("MuiDialogContentText",t)}oe("MuiDialogContentText",["root"]);const Le=["children","className"],Te=t=>{const{classes:r}=t,a=ce({root:["root"]},Me,r);return x({},r,a)},Fe=B(Re,{shouldForwardProp:t=>Ce(t)||t==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(t,r)=>r.root})({}),ze=u.forwardRef(function(r,i){const a=ne({props:r,name:"MuiDialogContentText"}),{className:n}=a,p=se(a,Le),s=Te(p);return e.jsx(Fe,x({component:"p",variant:"body1",color:"text.secondary",ref:i,ownerState:p,className:le(s.root,n)},a,{classes:s}))}),X=ze;function Pe(t){return ie("MuiDivider",t)}oe("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const Be=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],qe=t=>{const{absolute:r,children:i,classes:a,flexItem:n,light:p,orientation:s,textAlign:l,variant:f}=t;return ce({root:["root",r&&"absolute",f,p&&"light",s==="vertical"&&"vertical",n&&"flexItem",i&&"withChildren",i&&s==="vertical"&&"withChildrenVertical",l==="right"&&s!=="vertical"&&"textAlignRight",l==="left"&&s!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",s==="vertical"&&"wrapperVertical"]},Pe,a)},Ee=B("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:i}=t;return[r.root,i.absolute&&r.absolute,r[i.variant],i.light&&r.light,i.orientation==="vertical"&&r.vertical,i.flexItem&&r.flexItem,i.children&&r.withChildren,i.children&&i.orientation==="vertical"&&r.withChildrenVertical,i.textAlign==="right"&&i.orientation!=="vertical"&&r.textAlignRight,i.textAlign==="left"&&i.orientation!=="vertical"&&r.textAlignLeft]}})(({theme:t,ownerState:r})=>x({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},r.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},r.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:_e(t.palette.divider,.08)},r.variant==="inset"&&{marginLeft:72},r.variant==="middle"&&r.orientation==="horizontal"&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},r.variant==="middle"&&r.orientation==="vertical"&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},r.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},r.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:t})=>x({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:t,ownerState:r})=>x({},r.children&&r.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`}}),({theme:t,ownerState:r})=>x({},r.children&&r.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`}}),({ownerState:t})=>x({},t.textAlign==="right"&&t.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},t.textAlign==="left"&&t.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),He=B("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,r)=>{const{ownerState:i}=t;return[r.wrapper,i.orientation==="vertical"&&r.wrapperVertical]}})(({theme:t,ownerState:r})=>x({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},r.orientation==="vertical"&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})),ue=u.forwardRef(function(r,i){const a=ne({props:r,name:"MuiDivider"}),{absolute:n=!1,children:p,className:s,component:l=p?"div":"hr",flexItem:f=!1,light:h=!1,orientation:j="horizontal",role:b=l!=="hr"?"separator":void 0,textAlign:A="center",variant:D="fullWidth"}=a,w=se(a,Be),C=x({},a,{absolute:n,component:l,flexItem:f,light:h,orientation:j,role:b,textAlign:A,variant:D}),N=qe(C);return e.jsx(Ee,x({as:l,className:le(N.root,s),role:b,ref:i,ownerState:C},w,{children:p?e.jsx(He,{className:N.wrapper,ownerState:C,children:p}):null}))});ue.muiSkipListHighlight=!0;const Je=ue,ge=u.createContext(void 0);var q={},Ve=R;Object.defineProperty(q,"__esModule",{value:!0});var P=q.default=void 0,We=Ve(O()),Ge=e,Ue=(0,We.default)((0,Ge.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");P=q.default=Ue;const Qe=L.input`
  width: 100%;
  padding: .5rem;
  padding-left: 2.125rem;
  background: ${g.white300};
  border: 2px solid ${g.white300};
  border-radius: 4px;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  outline: none;
  ${Ae.md} {
    font-size: 16px;
  }
  &:placeholder {
    font-size: 16px;
  }
  &:hover {
    border: 2px solid ${g.primaryBlue};
  }
  &:focus {
    border: 2px solid ${g.primaryBlue};
  }
  &:disabled {
    border-color: ${g.white300};
  }
`,Ye=({inputRef:t,getContact:r})=>e.jsxs("div",{className:o`
      display: flex;
      column-gap: 6px;
    `,children:[e.jsxs("div",{className:o`
        width: 100%;
      `,children:[e.jsx(P,{sx:{position:"absolute",padding:"8px",textAlign:"center",color:g.primaryBlue},fontSize:"large"}),e.jsx(Qe,{placeholder:"Search contact",ref:t})]}),e.jsx(Ie,{onClick:()=>{r()},children:e.jsx(P,{fontSize:"small"})})]}),Ke=o`
    display: flex;
    align-items: center;
    column-gap: 12px;
    padding: 4px 0;
`,ee=({title:t})=>e.jsxs("div",{className:Ke,children:[e.jsx("div",{children:e.jsx("span",{className:o`
                    ${y.body14Med}
                `,children:t??""})}),e.jsx("div",{className:o`
                flex-grow: 1;
            `,children:e.jsx(Je,{})})]});var E={},Ze=R;Object.defineProperty(E,"__esModule",{value:!0});var he=E.default=void 0,Xe=Ze(O()),et=e,tt=(0,Xe.default)((0,et.jsx)("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"InfoOutlined");he=E.default=tt;var H={},rt=R;Object.defineProperty(H,"__esModule",{value:!0});var fe=H.default=void 0,at=rt(O()),it=e,ot=(0,at.default)((0,it.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z"}),"DeleteOutlineOutlined");fe=H.default=ot;var J={},nt=R;Object.defineProperty(J,"__esModule",{value:!0});var xe=J.default=void 0,st=nt(O()),lt=e,ct=(0,st.default)((0,lt.jsx)("path",{d:"m12 7.13.97 2.29.47 1.11 1.2.1 2.47.21-1.88 1.63-.91.79.27 1.18.56 2.41-2.12-1.28-1.03-.64-1.03.62-2.12 1.28.56-2.41.27-1.18-.91-.79-1.88-1.63 2.47-.21 1.2-.1.47-1.11.97-2.27M12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2z"}),"GradeOutlined");xe=J.default=ct;var V={},dt=R;Object.defineProperty(V,"__esModule",{value:!0});var ve=V.default=void 0,pt=dt(O()),ut=e,gt=(0,pt.default)((0,ut.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Grade");ve=V.default=gt;const S="fav_contact",ht=Oe`
    mutation MyMutation($id: Int!) {
        delete_contact_by_pk(id: $id) {
            first_name
            last_name
            id
        }
    }
`,ft=({id:t})=>{const[r,{error:i,loading:a,data:n,called:p}]=Ne(ht,{variables:{id:t},refetchQueries:[{query:Se}]});return{error:i,loading:a,data:n,called:p,deleteContact:r}},xt=L.div`
    padding: 0 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 4px;
    width: 60px;
    cursor: pointer;
    color: ${({color:t})=>t??g.gray100};
`,vt=L.div`
    color: ${({active:t,color:r})=>r||(t?g.primaryBlue:g.gray100)};
`,z=({active:t,onClick:r,icon:i,title:a,color:n})=>e.jsxs(xt,{onClick:r,color:n,children:[e.jsx(vt,{active:t,color:n,children:i}),e.jsx("span",{className:o`
                ${y.body12Lig}
            `,children:a})]}),mt=o`
    display: flex;
    column-gap: 1rem;
    padding: .5rem 1rem;
    &:hover {
        cursor: pointer;
        background: #f5f5f5;
    }
    &:active {
        box-shadow: none;
    }
`,jt=L.div`
    display: flex;
    padding: ${({active:t})=>t?".5rem 1rem":"0"};
    justify-content: space-evenly;
    height: ${({active:t})=>t?"64px":"0"};;
    overflow: hidden;
    transition: height 0.1s ease;
    overflow-y: auto;
`,bt=o`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${g.blue300};
`,Ct=o`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
`,_t=o`
    display: flex;
    flex-direction: column;
    row-gap: 4px;
`,yt=o`
    ${y.body16Med}
`,$t=o`
    ${y.body12Lig}
`,te=({first_name:t,last_name:r,phones:i,id:a,created_at:n})=>{const p=ye(),s=u.useContext(ge),l=JSON.parse(localStorage.getItem(S)??"[]").find(m=>a===m.id),{loading:f,error:h,data:j,deleteContact:b}=ft({id:a}),[A,D]=u.useState(!1),[w,C]=u.useState(!1),[N,I]=u.useState(!1),[k,c]=u.useState({open:!1,message:"",error:!1}),d=()=>{C(!0)},v=()=>{C(!1)},me=()=>{I(!0)},T=()=>{I(!1)},W=(m,_)=>{c({open:!0,message:m,error:_})},G=(m,_)=>{_!=="clickaway"&&c({open:!1,message:"",error:!1})},je=m=>{const _=JSON.parse(localStorage.getItem(S)??"[]");if(l!==void 0){const F=_.filter(be=>be.id!==a);localStorage.setItem(S,JSON.stringify(F))}else localStorage.setItem(S,JSON.stringify([..._,m]))};return u.useMemo(()=>{(j==null?void 0:j.delete_contact_by_pk)!==void 0&&v(),h&&(h.message.includes('Uniqueness violation. duplicate key value violates unique constraint "phone_number_key"')?W("Number phones already exist.",!0):W("Add contact failed",!0))},[j,h]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:mt,onClick:()=>D(m=>!m),children:[e.jsx("div",{className:bt}),e.jsx("div",{className:Ct,children:e.jsxs("div",{className:_t,children:[e.jsxs("h6",{className:yt,children:[t," ",r]}),e.jsx("span",{className:$t,children:i[0].number})]})})]}),e.jsxs(jt,{active:A,children:[e.jsx(z,{active:!1,onClick:()=>{d()},icon:e.jsx(fe,{}),title:"Delete",color:"red"}),e.jsx(z,{active:!1,onClick:()=>{me()},icon:l?e.jsx(ve,{}):e.jsx(xe,{}),title:"Favorite",color:"#ffc107"}),e.jsx(z,{active:!1,onClick:()=>{p(`/${a}`)},icon:e.jsx(he,{}),title:"Details"})]}),e.jsxs(Q,{open:w,keepMounted:!0,onClose:v,"aria-describedby":"alert-dialog-delete-contact",children:[e.jsx(Y,{children:"Add to Favorite?"}),e.jsx(K,{children:e.jsxs(X,{id:"alert-dialog-delete-contact",children:["Are you sure want to delete this contact. ",t," ",r," ?"]})}),e.jsxs(Z,{children:[e.jsx(M,{onClick:v,color:"error",disabled:f,children:f?e.jsx("div",{className:o`padding: 0 12px`,children:e.jsx(U,{color:"inherit",size:"14px"})}):"No"}),e.jsx(M,{onClick:()=>{const _=JSON.parse(localStorage.getItem(S)??"[]").filter(F=>F.id!==a);localStorage.setItem(S,JSON.stringify(_)),b()},disabled:f,children:f?e.jsx("div",{className:o`padding: 0 12px`,children:e.jsx(U,{color:"inherit",size:"14px"})}):"Yes"})]})]}),e.jsxs(Q,{open:N,keepMounted:!0,onClose:T,"aria-describedby":"alert-dialog-favorite-contact",children:[e.jsx(Y,{children:`${l?"Remove from":"Add to"} Favorite list?`}),e.jsx(K,{children:e.jsxs(X,{id:"alert-dialog-favorite-contact",children:[l?"Remove":"Add"," this contact ",l?"from":"to"," Favorite list. ",t," ",r," ?"]})}),e.jsxs(Z,{children:[e.jsx(M,{onClick:T,color:"error",children:"No"}),e.jsx(M,{onClick:()=>{je({id:a,first_name:t,last_name:r,created_at:n,phones:i}),T(),s==null||s.handleOpenAlert(`${l?"Removed from favorite":"Added to favorite"}`,!1)},children:"Yes"})]})]}),e.jsx(de,{open:k.open,autoHideDuration:6e3,onClose:G,children:e.jsx(pe,{onClose:G,sx:{width:"100%"},severity:k.error?"error":"success",children:k.message})})]})},re=({isFavorite:t=!1,contactData:r,sectionName:i})=>t?e.jsx("div",{id:"contact_list",children:r.map((a,n)=>e.jsxs(u.Fragment,{children:[n===0&&e.jsx("div",{className:o`padding: 0 1rem;`,children:e.jsx(ee,{title:i})}),e.jsx(te,{id:a.id,first_name:a.first_name,last_name:a.last_name,phones:a.phones,created_at:a.created_at})]},`${a.first_name}-${a.id}`))}):e.jsx(e.Fragment,{children:r.map((a,n)=>e.jsxs(u.Fragment,{children:[n===0&&e.jsx("div",{className:o`padding: 0 1rem;`,children:e.jsx(ee,{title:i})}),e.jsx(te,{id:a.id,first_name:a.first_name,last_name:a.last_name,phones:a.phones,created_at:a.created_at})]},`${a.first_name}-${a.id}`))}),St=o`
    padding: .5rem 1rem;
`,ae=o`padding: 8px; background: ${g.gray50};border-radius: 4px;flex-grow: 1;text-align:center;${y.body14Reg};cursor: pointer`,$=10,Tt=()=>{var k;const t=u.useRef(null),r=localStorage.getItem(S),i=localStorage.getItem("current_page")!==""?localStorage.getItem("current_page"):"1",[a,n]=u.useState(parseInt(i??"1")),[p,s]=u.useState({open:!1,message:"",error:!1}),{error:l,loading:f,data:h,called:j,getContacts:b,fetchMore:A,refetch:D}=De({where:{first_name:{_like:`%${(k=t.current)==null?void 0:k.value}%`}},limit:$,offset:(a-1)*$});console.log({called:j});const[w,C]=u.useState([]);u.useEffect(()=>{b()},[]);const N=(c,d)=>{s({open:!0,message:c,error:d})},I=(c,d)=>{d!=="clickaway"&&s({open:!1,message:"",error:!1})};return e.jsxs(e.Fragment,{children:[e.jsx(ke,{title:"Contacts",headerPadding:"1.25rem 1rem .5rem 1rem"}),e.jsxs(ge.Provider,{value:{error:l,loading:f,data:h,getContacts:b,handleOpenAlert:N},children:[e.jsx(we,{children:e.jsxs("div",{className:o`
                        display: flex;
                        flex-direction: column;
                    `,children:[e.jsx("div",{className:o`
                            padding: .75rem 1rem;
                            position: -webkit-sticky;
                            position: sticky;
                            top: 0;
                            background: ${g.white100};
                        `,children:e.jsx(Ye,{inputRef:t,getContact:b})}),f?e.jsx($e,{height:"calc(100vh - 63.2px)"}):l?e.jsx("div",{className:St,children:e.jsx("div",{className:o`
                                        height: 160px;
                                        background: pink;
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                    `,children:e.jsxs("div",{children:[e.jsx("h5",{className:o`
                                                ${y.body20Med}
                                            `,children:"Oops, error."}),e.jsxs("span",{className:o`
                                                ${y.body12Reg}
                                            `,children:["Something went wrong. ",l.message]})]})})}):h?h.contact.length>0?e.jsxs(e.Fragment,{children:[e.jsx(re,{isFavorite:!0,contactData:JSON.parse(r??"[]"),onLoadPage:()=>{},sectionName:"Favorite"}),e.jsx(re,{isFavorite:!1,contactData:w.length>0?w.filter(c=>{var d;return!((d=JSON.parse(r??"[]"))!=null&&d.find(v=>c.id===v.id))}):h.contact.filter(c=>{var d;return!((d=JSON.parse(r??"[]"))!=null&&d.find(v=>c.id===v.id))}),sectionName:"All Contact",onLoadPage:()=>{A({variables:{limit:20,offset:20},updateQuery(c,d){const v=d.fetchMoreResult.contact;C([...c.contact,...v])}})}}),e.jsxs("div",{className:o`
                                            padding: 12px 0;
                                            margin: 0 1rem;
                                            display: flex;
                                            justify-content: space-between;
                                            column-gap: 10px;
                                        `,children:[a>1&&e.jsx("div",{className:ae,onClick:()=>{var c;D({where:{first_name:{_like:`%${(c=t.current)==null?void 0:c.value}%`}},limit:$,offset:(a-1)*$}),n(d=>d-1),localStorage.setItem("current_page",`${a-1}`)},children:"back"}),h.contact.length===$&&e.jsx("div",{className:ae,onClick:()=>{var c;D({where:{first_name:{_like:`%${(c=t.current)==null?void 0:c.value}%`}},limit:$,offset:(a+1)*$}),n(d=>d+1),localStorage.setItem("current_page",`${a+1}`)},children:"next"})]})]}):e.jsx("div",{className:o`
                                        height: 80px;
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        background: ${g.gray50};
                                        margin: 0 1rem;
                                        border-radius: 6px;
                                    `,children:e.jsx("span",{className:o`
                                            ${y.body14Lig}
                                        `,children:"Kontak yang dicari tidak ada."})}):e.jsx("div",{children:"Something went wrong."})]})}),e.jsx(de,{open:p.open,autoHideDuration:6e3,onClose:I,children:e.jsx(pe,{onClose:I,sx:{width:"100%"},severity:p.error?"error":"success",children:p.message})})]})]})};export{Tt as default};
