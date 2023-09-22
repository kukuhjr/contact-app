import styled from '@emotion/styled'
import { colorPalette } from '../../constants/colorPalette'
import { breakpoints } from '../../constants/mediaQueries'

export const Button = styled.button`
  color: white;
  background: ${colorPalette.primaryBlue};
  padding: 8px 16px;
  box-shadow: 0px 4px 12px 0px rgba(66, 163, 227, 0.50);
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  outline: none;
  border: none;
  ${breakpoints.md} {
    font-size: 14px;
    padding: 9px 22px;
  }
  ${breakpoints.xmd} {
    font-size: 18px;
    padding: 9px 22px;
  }
  &:hover {
    background: ${colorPalette.blue600};
    cursor: pointer;
  }
  &:active {
    box-shadow: none;
  }
  &:disabled {
    background: ${colorPalette.blue300};
  }
`