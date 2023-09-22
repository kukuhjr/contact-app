import { useNavigate } from "react-router-dom"
import { css } from "@emotion/css"
// MUI
import IconButton from '@mui/material/IconButton'
// COMPONENTS
import { Container } from "../components/styled_component/Container"
import Header from "../components/layout/Header"
// ICONS
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined'
import { Button } from "../components/styled_component/Button"
import { colorPalette } from "../constants/colorPalette"
import { fontPreset } from "../constants/fontPreset"

const ContactDetail = () => {
    const navigate = useNavigate()

    const headerStyle = css`
        background: ${colorPalette.primaryBlue};
        height: 100px;
    `
    const infoSection = css`
        height: 100%;
        background: #f5f5f5;
        padding: .5rem 1rem;
        display: flex;
        flex-direction: column;
        row-gap: .5rem;
        position: relative;
    `

    const nameSection = css`
        display: flex;
        flex-direction: column;
        background: #fff;
        padding: 1rem 0;
        position: relative;
    `

    const nameText = css`
        text-align: center;
        ${fontPreset.body16Med}
    `

    const avatarStyle = css`
        height: 4rem;
        width: 4rem;
        background: ${colorPalette.blue300};
        border: 2px solid #f5f5f5;
        border-radius: 50%;
        position: absolute;
        top: -2rem;
        left: .675rem;
    `
    
    return (
        <>
            <Header
                backButton={
                    <IconButton
                        aria-label="back"
                        size="small"
                        onClick={() => {
                            navigate("/")
                        }}
                    >
                        <ArrowBackIosNewOutlinedIcon fontSize="small" />
                    </IconButton>
                }
                actionButton={
                    <Button
                        onClick={() => {}}
                    >
                        Edit
                    </Button>
                }
            />
            
            <Container>
                <div className={headerStyle} />

                <div className={infoSection}>
                    <div className={nameSection}>
                        <h2 className={nameText}>
                            {/* CONTACT_NAME */}
                            NOT FOUND
                        </h2>

                        <div className={avatarStyle} />
                    </div>

                    <div className={nameSection}>
                        <div className={css`padding: 0 1rem`}>
                            <span className={css`${fontPreset.body12Lig}`}>
                                Phone
                            </span>

                            <p className={css`
                                ${fontPreset.body14Reg};
                                margin-top: 4px;
                            `}>
                                Phone
                            </p>
                        </div>
                    </div>

                    <div className={nameSection}>
                        <div className={css`padding: 0 1rem`}>
                            <span className={css`${fontPreset.body12Lig}`}>
                                Ditambahkan
                            </span>

                            <p className={css`
                                ${fontPreset.body14Reg};
                                margin-top: 4px;
                            `}>
                                Phone
                            </p>
                        </div>
                    </div>

                    {/* <div className={nameSection}>
                        <div className={css`
                            padding: 0 .75rem;
                        `}>
                            <span className={css`
                                ${fontPreset.body12Lig}
                                text-align: center;
                            `}>
                                The contact was not found, sorry.
                            </span>
                        </div>
                    </div> */}
                </div>
            </Container>
        </>
    )
}

export default ContactDetail