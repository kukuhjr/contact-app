import{o as e,n as i}from"./index-f06a1b16.js";const d={xs:"@media (min-width: 0px)",sm:"@media (min-width: 576px)",sm2:"@media (min-width: 720px)",md:"@media (min-width: 900px)",xmd:"@media (min-width: 1030px)",lg:"@media (min-width: 1200px)",xl:"@media (min-width: 1536px)"},n=e.button`
  color: white;
  background: ${i.primaryBlue};
  padding: 8px 16px;
  box-shadow: 0px 4px 12px 0px rgba(66, 163, 227, 0.50);
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  outline: none;
  border: none;
  ${d.md} {
    font-size: 14px;
    padding: 9px 22px;
  }
  ${d.xmd} {
    font-size: 18px;
    padding: 9px 22px;
  }
  &:hover {
    background: ${i.blue600};
    cursor: pointer;
  }
  &:active {
    box-shadow: none;
  }
  &:disabled {
    background: ${i.blue300};
  }
`;export{n as B,d as b};
