import styled from "@emotion/styled";
// CONSTANTS
import { breakpoints } from "../../constants/mediaQueries";
import { colorPalette } from "../../constants/colorPalette";

export const TextInput = styled.input`
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
  ${breakpoints.md} {
    font-size: 16px;
  }
  &:placeholder {
    font-size: 16px;
  }
  &:hover {
    border: 2px solid ${colorPalette.primaryBlue};
  }
  &:focus {
    border: 2px solid ${colorPalette.primaryBlue};
  }
  &:disabled {
    border-color: #F5F5F5;
  }
`