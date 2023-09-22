import { useRef, useState } from "react"
import { css } from "@emotion/css"
// ICONS
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
// COMPONENTS
import Header from "../components/layout/Header"
import { Button } from "../components/styled_component/Button"
import { fontPreset } from "../constants/fontPreset"
import { TextInput } from "../components/styled_component/Input"
import { IconButtonStyled } from "../components/styled_component/IconButton"

const containerStyle = css`
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
`

const formSectionStyle = css`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
`

const labelStyle = css`
    padding-left: 2px;
    ${fontPreset.body14Lig}
`

const actionButtonStyle = css`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
`

const AddContact = () => {
    const [enableContact, setEnableContact] = useState(1)

    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)

    const phoneNumberRef = useRef(null)
    const phoneNumberRef2 = useRef(null)
    const phoneNumberRef3 = useRef(null)
    const phoneNumberRef4 = useRef(null)
    const phoneNumberRef5 = useRef(null)

    const handleSumbitForm = () => {
        console.log("HELLO");
    }

    const handleClickAddPhone = () => {
        if(enableContact < 5) setEnableContact((state) => state + 1)
        else console.log("5 already");
    }

    const handleClickRemovePhone = () => {
        if(enableContact > 1) setEnableContact((state) => state - 1)
        else console.log("1 already");
    }

    return (
        <>
            <Header title={"Add Contact"}/>

            <div className={containerStyle}>
                <div className={formSectionStyle}>
                    <div>
                        <span className={labelStyle}>
                            First Name
                        </span>

                        <div className={css`margin-top: 8px`}>
                            <TextInput
                                placeholder="First Name"
                                ref={firstNameRef}
                            />
                        </div>
                    </div>

                    <div>
                        <span className={labelStyle}>
                            Last Name
                        </span>

                        <div className={css`margin-top: 8px`}>
                            <TextInput
                                placeholder="Last Name"
                                ref={lastNameRef}
                            />
                        </div>
                    </div>

                    <div>
                        <div className={css`
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        `}>
                            <span className={labelStyle}>
                                Phone Number
                            </span>

                            <div className={css`
                                display: flex;
                                column-gap: 6px;
                            `}>
                                { enableContact > 1 &&
                                    <IconButtonStyled
                                        onClick={() => { handleClickRemovePhone() }}
                                    >
                                        <RemoveIcon fontSize="small" sx={{ color: "red" }} />
                                    </IconButtonStyled>
                                }

                                <IconButtonStyled
                                    onClick={() => { handleClickAddPhone() }}
                                    disabled={enableContact > 4}
                                >
                                    <AddIcon fontSize="small" />
                                </IconButtonStyled>
                            </div>
                        </div>

                        <div className={css`
                            margin-top: 8px;
                            display: flex;
                            flex-direction: column;
                            row-gap: 8px;
                        `}>
                            <TextInput
                                placeholder="Phone Number"
                                ref={phoneNumberRef}
                            />

                            <TextInput
                                placeholder="Phone Number 2"
                                ref={phoneNumberRef2}
                                className={css`
                                    display: ${enableContact > 1 ? 'block' : 'none'};
                                    transition: display 400ms ease;
                                `}
                            />

                            <TextInput
                                placeholder="Phone Number 3"
                                ref={phoneNumberRef3}
                                className={css`
                                    display: ${enableContact > 2 ? 'block' : 'none'};
                                    transition: display 400ms ease;
                                `}
                            />

                            <TextInput
                                placeholder="Phone Number 4"
                                ref={phoneNumberRef4}
                                className={css`
                                    display: ${enableContact > 3 ? 'block' : 'none'};
                                    transition: display 400ms ease;
                                `}
                            />

                            <TextInput
                                placeholder="Phone Number 5"
                                ref={phoneNumberRef5}
                                className={css`
                                    display: ${enableContact > 4 ? 'block' : 'none'};
                                    transition: display 400ms ease;
                                `}
                            />
                        </div>
                    </div>
                </div>

                <div className={actionButtonStyle}>
                    <Button onClick={handleSumbitForm}>
                        Submit
                    </Button>
                </div>
            </div>
        </>
    )
}

export default AddContact