import { MouseEventHandler } from 'react'
import { css } from '@emotion/css'
import styled from '@emotion/styled'
// CONSTANTS
import { colorPalette } from '../constants/colorPalette'
import { fontPreset } from '../constants/fontPreset'

interface ButtonNavItemProps {
    active: boolean,
    onClick: MouseEventHandler<HTMLDivElement>,
    icon: React.ReactNode,
    title: string,
    color?: string,
}

const MenuItem = styled.div`
    padding: 0 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 4px;
    width: 60px;
    cursor: pointer;
    color: ${({ color }: { color: string | undefined }) => (color ?? colorPalette.gray100)};
`

const Icon = styled.div`
    color: ${({ active, color }: { active: boolean, color: string | undefined }) => (color ? color : active ? colorPalette.primaryBlue : colorPalette.gray100)};
`

const ButtonNavItem = ({ active, onClick, icon, title, color }: ButtonNavItemProps) => {

    return (
        <MenuItem onClick={onClick} color={color}>
            <Icon active={active} color={color}>
                { icon }
            </Icon>

            <span className={css`
                ${fontPreset.body12Lig}
            `}>
                { title }
            </span>
        </MenuItem>
    )
}

export default ButtonNavItem