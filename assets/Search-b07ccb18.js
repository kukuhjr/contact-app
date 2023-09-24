import{r as i,j as e,c as l}from"./index-f06a1b16.js";import{C as m}from"./Container-34179d87.js";import{g as u}from"./useQuery-cc2bd7c9.js";import{u as d}from"./useLazyQuery-1df3faf7.js";const p=u`
    query GetCharacterLocations($name: String!) {
        characters(filter: { name: $name }) {
            results {
                location {
                    name
                }
            }
        }
    }
`,C=()=>{var a;const r=i.useRef(null),[t,{loading:s,error:n,data:o,called:c}]=d(p,{variables:{name:(a=r.current)==null?void 0:a.value}});return console.log({loading:s,error:n,data:o,called:c}),e.jsx(m,{children:e.jsxs("div",{className:l`
                padding: 2rem 0;
            `,children:[e.jsx("input",{type:"text",ref:r}),e.jsx("button",{onClick:()=>t(),children:"Search"})]})})};export{C as default};
