import{j as e,c as s,n as o,o as l,l as d,a6 as u}from"./index-f06a1b16.js";import{r as p,i as m}from"./createSvgIcon-be3a5855.js";import{d as v}from"./Add-4dec5537.js";import{f}from"./fontPreset-e335cba6.js";var n={},x=m;Object.defineProperty(n,"__esModule",{value:!0});var r=n.default=void 0,g=x(p()),h=e,j=(0,g.default)((0,h.jsx)("path",{d:"M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"}),"Contacts");r=n.default=j;const y=s`
    padding: .5rem 0;
    display: flex;
    justify-content: space-evenly;
    column-gap: 12px;
    align-items: center;
    background: ${o.white100};
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 10;
`,_=s`
    padding: 0 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 4px;
    width: 60px;
    cursor: pointer;
`,z=l.div`
    color: ${({active:a})=>a?o.primaryBlue:o.gray100};
`,S=[{title:"Contacts",icon:e.jsx(r,{}),url:"/"},{title:"Add",icon:e.jsx(v,{}),url:"/add-contact"}],b=()=>{const a=d(),i=u();return e.jsx("div",{className:y,children:S.map((t,c)=>e.jsxs("div",{className:_,onClick:()=>{a(t.url)},children:[e.jsx(z,{active:i.pathname===t.url,children:t.icon}),e.jsx("span",{className:s`
                        ${f.body12Lig}
                    `,children:t.title})]},`${t.title}-${c}`))})};export{b as default};
