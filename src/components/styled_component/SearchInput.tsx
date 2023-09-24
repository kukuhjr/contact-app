import { LazyQueryExecFunction, OperationVariables } from '@apollo/client';
import styled from '@emotion/styled'
import { css } from "@emotion/css"
// CONSTANTS
import { breakpoints } from '../../constants/mediaQueries'
import { colorPalette } from '../../constants/colorPalette'
// ICONS
import SearchIcon from '@mui/icons-material/Search'
// COMPONENTS
import { Button } from './Button';

const SearchInputStyle = styled.input`
  width: 100%;
  padding: .5rem;
  padding-left: 2.125rem;
  background: ${colorPalette.white300};
  border: 2px solid ${colorPalette.white300};
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
    border-color: ${colorPalette.white300};
  }
`

interface SearchInputProps {
  getContact: LazyQueryExecFunction<any, OperationVariables>,
  inputRef: React.RefObject<HTMLInputElement>
}

export const SearchInput = ({ inputRef, getContact }: SearchInputProps) => {
  return (
    <div className={css`
      display: flex;
      column-gap: 6px;
    `}>
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
          ref={inputRef}
        />
      </div>

      <Button
        onClick={() => {
          getContact()
        }}
      >
        <SearchIcon fontSize='small' />
      </Button>
    </div>
  )
}