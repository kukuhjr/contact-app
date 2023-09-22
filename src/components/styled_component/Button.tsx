import styled from '@emotion/styled'
import { colorPalette } from '../../constants/colorPalette'
import { breakpoints } from '../../constants/mediaQueries'

export const Button = styled.button`
  color: white;
  background: ${colorPalette.primaryBlue};
  padding: 9px 22px;
  box-shadow: 0px 4px 12px 0px rgba(66, 163, 227, 0.50);
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  ${breakpoints.md} {
    font-size: 18px;
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