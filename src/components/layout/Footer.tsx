import { useLocation, useNavigate } from 'react-router-dom';
import { css } from '@emotion/css'
import styled from '@emotion/styled'
// ICONS
import ContactsIcon from '@mui/icons-material/Contacts';
import AddIcon from '@mui/icons-material/Add';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// CONSTANTS
import { fontPreset } from '../../constants/fontPreset';
import { colorPalette } from '../../constants/colorPalette';

const containerStyle = css`
    padding: .5rem 0;
    display: flex;
    justify-content: space-evenly;
    column-gap: 12px;
    align-items: center;
    background: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 10;
`

const menuItemStyle = css`
    padding: 0 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 4px;
    width: 60px;
    cursor: pointer;
`

const Icon = styled.div`
    color: ${({ active }: { active: boolean }) => (active ? colorPalette.primaryBlue : colorPalette.gray100)};
`

const menus = [
    { title: "Contacts", icon: <ContactsIcon />, url: "/" },
    { title: "Add", icon: <AddIcon />, url: "/add-contact" },
    // { title: "Profile", icon: <AccountBoxIcon />, url: "/profile" },
]

const Footer = () => {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <div className={containerStyle}>
            { menus.map((item, index) => (
                <div
                    key={`${item.title}-${index}`}
                    className={menuItemStyle}
                    onClick={() => { navigate(item.url) }}
                >
                    <Icon active={location.pathname === item.url}>
                        { item.icon }
                    </Icon>

                    <span className={css`
                        ${fontPreset.body12Lig}
                    `}>
                        { item.title }
                    </span>
                </div>
            )) }
        </div>
    )
}

export default Footer