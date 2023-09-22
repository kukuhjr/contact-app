import styled from "@emotion/styled";
import { colorPalette } from "../../constants/colorPalette";

export const IconButtonStyled = styled.button`
    outline: none;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background 100ms ease;
    &:hover {
        background: ${colorPalette.gray50};
        cursor: pointer;
    }
    &:active {
        background: ${colorPalette.gray100};
        box-shadow: none;
    }
    &:disabled {
        background: none;
    }
`