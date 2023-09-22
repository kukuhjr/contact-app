import styled from '@emotion/styled'
import { css } from "@emotion/css"
// CONSTANTS
import { breakpoints } from '../../constants/mediaQueries'
import { colorPalette } from '../../constants/colorPalette'
// ICONS
import SearchIcon from '@mui/icons-material/Search';

const SearchInputStyle = styled.input`
  width: 100%;
  padding: .5rem;
  padding-left: 2.125rem;
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

export const SearchInput = () => (
  <div className={css`
    width: 100%;
  `}>
    <SearchIcon 
      sx={{
        position: "absolute",
        padding: "8px",
        textAlign: "center",
        color: colorPalette.primaryBlue
      }}
      fontSize={"large"}
    />

    <SearchInputStyle
      placeholder="Search contact"
    />
  </div>
)