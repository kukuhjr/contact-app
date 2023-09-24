import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { css } from "@emotion/css"
import { useContact } from "../hooks/useContact"
import { Phone } from "../types"
// MUI
import IconButton from '@mui/material/IconButton'
import Skeleton from '@mui/material/Skeleton'
// ICONS
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined'
// COMPONENTS
import { Container } from "../components/styled_component/Container"
import Header from "../components/layout/Header"
import { Button } from "../components/styled_component/Button"
import EditContact from "./EditContact"
// CONSTANTS
import { colorPalette } from "../constants/colorPalette"
import { fontPreset } from "../constants/fontPreset"

const ContactDetail = () => {
    const navigate = useNavigate()
    const params = useParams()

    const [viewEdit, setViewEdit] = useState(false)

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

    const { error, loading, data } = useContact(params.contactId)

    // console.log({ error, loading, data });

    const handleGoToAllContacts = () => {
        navigate("/")
    }

    if(viewEdit) {
        return <EditContact
            contactData={data.contact_by_pk}
            changeView={() => {
                setViewEdit(false)
            }}
        />
    }
    
    return (
        <>
            <Header
                backButton={
                    <IconButton
                        aria-label="back"
                        size="small"
                        onClick={() => { handleGoToAllContacts() }}
                    >
                        <ArrowBackIosNewOutlinedIcon fontSize="small" />
                    </IconButton>
                }
                actionButton={
                    <Button
                        onClick={() => { setViewEdit(true) }}
                    >
                        Edit
                    </Button>
                }
            />
            
            <Container>
                <div className={headerStyle} />

                {   loading ?
                        <div className={infoSection}>
                            <Skeleton variant="rounded" width={"100%"} height={51} />
                            <Skeleton variant="rounded" width={"100%"} height={72} />
                            <Skeleton variant="rounded" width={"100%"} height={72} />
                        </div> :
                    error ?
                        <div className={infoSection}>
                            <div className={nameSection}>
                                <h2 className={nameText}>
                                    Oops, something went wrong.
                                </h2>

                                <div className={avatarStyle} />
                            </div>

                            <div className={nameSection}>
                                <div className={css`padding: .25rem 1rem;`}>
                                    <span className={css`
                                        ${fontPreset.body12Reg}
                                    `}>
                                        { error.message }
                                    </span>
                                </div>
                            </div>
                        </div> :
                    data ?
                        <div className={infoSection}>
                            <div className={nameSection}>
                                <h2 className={nameText}>
                                    {   data.contact_by_pk !== null ? 
                                            `${data.contact_by_pk?.first_name ?? ""} ${data.contact_by_pk?.last_name ?? ""}` 
                                        // NULL
                                            : "CONTACT NOT FOUND." 
                                    }
                                </h2>

                                <div className={avatarStyle} />
                            </div>

                            {   data.contact_by_pk === null ? 
                                    <div className={nameSection}>
                                        <div className={css`
                                            padding: 1.25rem .75rem;
                                            display: flex;
                                            flex-direction: column;
                                            justify-content: center;
                                            align-items: center;
                                            row-gap: .75rem;
                                        `}>
                                            <div>
                                                <span className={css`
                                                    ${fontPreset.body12Lig}
                                                    text-align: center;
                                                `}>
                                                    The contact was not found, sorry.
                                                </span>
                                            </div>

                                            <Button
                                                onClick={() => { handleGoToAllContacts() }}
                                            >
                                                See All Contacts
                                            </Button>
                                        </div>
                                    </div> :
                                // NULL VALUE
                                    <>
                                        <div className={nameSection}>
                                            <div className={css`padding: 0 1rem`}>
                                                <span className={css`${fontPreset.body12Lig}`}>
                                                    Phone
                                                </span>

                                                <div className={css`
                                                    margin-top: 4px;
                                                    display: flex;
                                                    flex-direction: column;
                                                    row-gap: 4px;
                                                `}>
                                                    { data.contact_by_pk?.phones.map((phone: Phone | undefined, index: number) => (
                                                        <p className={css`
                                                            ${fontPreset.body14Reg};
                                                            margin-top: 4px;
                                                        `}
                                                            key={`phone-${index + 1}`}
                                                        >
                                                            { phone?.number ?? "" }
                                                        </p>
                                                    )) }
                                                </div>
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
                                                    { data.contact_by_pk?.created_at }
                                                </p>
                                            </div>
                                        </div>
                                    </>
                            }
                        </div> :
                    // ELSE CONDITION
                        <div className={infoSection}>
                            <span>Something went wrong.</span>
                        </div>
                }
            </Container>
        </>
    )
}

export default ContactDetail