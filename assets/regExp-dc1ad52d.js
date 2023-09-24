import{r as n,i as a}from"./createSvgIcon-be3a5855.js";import{j as i,o as r,n as e}from"./index-f06a1b16.js";import{b as d}from"./Button-1ed3c6ee.js";var o={},s=a;Object.defineProperty(o,"__esModule",{value:!0});var u=o.default=void 0,l=s(n()),p=i,c=(0,l.default)((0,p.jsx)("path",{d:"M19 13H5v-2h14v2z"}),"Remove");u=o.default=c;const f=r.input`
  width: 100%;
  padding: .5rem;
  background: #F5F5F5;
  border: 2px solid #F5F5F5;
  border-radius: 4px;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  outline: none;
  ${d.md} {
    font-size: 16px;
  }
  &:placeholder {
    font-size: 16px;
  }
  &:hover {
    border: 2px solid ${e.primaryBlue};
  }
  &:focus {
    border: 2px solid ${e.primaryBlue};
  }
  &:disabled {
    border-color: #F5F5F5;
  }
`,x=r.button`
    outline: none;
    border: none;
    background: none;
    display: ${({display:t})=>t??"flex"};
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background 100ms ease;
    &:hover {
        background: ${e.gray50};
        cursor: pointer;
    }
    &:active {
        background: ${e.gray100};
        box-shadow: none;
    }
    &:disabled {
        background: none;
    }
`,g=new RegExp(/^[_A-z]*((-|\s)*[_A-z])*$/),h=new RegExp(/^(\+628|628|08|8)[1-9][0-9]{6,9}$/);export{x as I,f as T,h as a,u as d,g as v};
