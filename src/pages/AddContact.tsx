import { useState, forwardRef, useMemo } from "react"
import { css } from "@emotion/css"
// ICONS
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import CircularProgress from '@mui/material/CircularProgress'
// MATERIAL UI
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
// COMPONENTS
import Header from "../components/layout/Header"
import { Button } from "../components/styled_component/Button"
import { TextInput } from "../components/styled_component/Input"
import { IconButtonStyled } from "../components/styled_component/IconButton"
// CONSTANTS
import { fontPreset } from "../constants/fontPreset"
// HOOKS
import { useCreateContactMutation } from "../hooks/useCreateContactMutation"
// TYPES
import { Phone } from "../types"
import { validNameContact, validPhoneNumber } from "../constants/regExp"

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
    const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
        props,
        ref,
    ) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const [openAlert, setOpenAlert] = useState({ open: false, message: "", error: false });
    const [enableContact, setEnableContact] = useState(1)
    
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const [phoneNumber, setPhoneNumber] = useState("")
    const [phoneNumber2, setPhoneNumber2] = useState("")
    const [phoneNumber3, setPhoneNumber3] = useState("")
    const [phoneNumber4, setPhoneNumber4] = useState("")
    const [phoneNumber5, setPhoneNumber5] = useState("")

    const phoneArr: Array<Phone> = [
        { number: phoneNumber },
        { number: phoneNumber2 },
        { number: phoneNumber3 },
        { number: phoneNumber4 },
        { number: phoneNumber5 },
    ]

    const { loading, error, data, createContact } = useCreateContactMutation({ 
        firstName: firstName,
        lastName: lastName,
        phones: phoneArr.filter((item, index) => index + 1 <= enableContact)
    })

    console.log({ loading, error, data });

    const handleOpenAlert = (message: string, error: boolean) => {
        setOpenAlert({ open: true, message, error });
    };
    
    const handleCloseAlert = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') { return; }
    
        setOpenAlert({ open: false, message: "", error: false });
    };

    const handleClickAddPhone = () => {
        if(enableContact < 5) setEnableContact((state) => state + 1)
        else console.log("5 already");
    }

    const handleClickRemovePhone = () => {
        if(enableContact > 1) {
            setEnableContact((state) => state - 1)
        }
        else console.log("1 already");
    }

    const handleSumbitForm = () => {
        let error = false;
        let message = "All forms are not fulfilled";

        if(firstName === "") { error = true } 
        else if(lastName === "") { error = true }
        else if(phoneNumber === "") { error = true }
        else if(!validNameContact.test(`${firstName} ${lastName}`)) {
            error = true
            message = "Name format is not valid (character only)"
        } else if(phoneNumber !== "" && !validPhoneNumber.test(phoneNumber)) {
            error = true
            message = "Phone number format is not valid. (indonesia phone number)"
        } else if(phoneNumber2 !== "" && !validPhoneNumber.test(phoneNumber2)) {
            error = true
            message = "Phone number 2 format is not valid. (indonesia phone number)"
        } else if(phoneNumber3 !== "" && !validPhoneNumber.test(phoneNumber3)) {
            error = true
            message = "Phone number 3 format is not valid. (indonesia phone number)"
        } else if(phoneNumber4 !== "" && !validPhoneNumber.test(phoneNumber4)) {
            error = true
            message = "Phone number 4 format is not valid. (indonesia phone number)"
        } else if(phoneNumber5 !== "" && !validPhoneNumber.test(phoneNumber5)) {
            error = true
            message = "Phone number 5 format is not valid. (indonesia phone number)"
        }

        if(error) {
            handleOpenAlert(message, true)
        } else {
            createContact()
            console.log(firstName, lastName, phoneArr.filter((item, index) => index + 1 <= enableContact));
        }
    }

    useMemo(() => {
        if(enableContact < 5) setPhoneNumber5("")
        if(enableContact < 4) setPhoneNumber4("")
        if(enableContact < 3) setPhoneNumber3("")
        if(enableContact < 2) setPhoneNumber2("")
    }, [enableContact])

    useMemo(() => {
        if(data) { 
            handleOpenAlert(`Add contact success`, false);
        }

        if(error) {
            if(error.message.includes(`Uniqueness violation. duplicate key value violates unique constraint "phone_number_key"`)) {
                handleOpenAlert(`Number phones already exist.`, true);
            } else {
                handleOpenAlert(`Add contact failed`, true);
            }
            
            console.log(error);
        }
    }, [data, error])

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
                                value={firstName}
                                onChange={(e) => {
                                    setFirstName(e.target.value)
                                }}
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
                                value={lastName}
                                onChange={(e) => {
                                    setLastName(e.target.value)
                                }}
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
                                value={phoneNumber}
                                onChange={(e) => {
                                    setPhoneNumber(e.target.value)
                                }}
                            />

                            <TextInput
                                placeholder="Phone Number 2"
                                value={phoneNumber2}
                                onChange={(e) => {
                                    setPhoneNumber2(e.target.value)
                                }}
                                className={css`
                                    display: ${enableContact > 1 ? 'block' : 'none'};
                                    transition: display 400ms ease;
                                `}
                            />

                            <TextInput
                                placeholder="Phone Number 3"
                                value={phoneNumber3}
                                onChange={(e) => {
                                    setPhoneNumber3(e.target.value)
                                }}
                                className={css`
                                    display: ${enableContact > 2 ? 'block' : 'none'};
                                    transition: display 400ms ease;
                                `}
                            />

                            <TextInput
                                placeholder="Phone Number 4"
                                value={phoneNumber4}
                                onChange={(e) => {
                                    setPhoneNumber4(e.target.value)
                                }}
                                className={css`
                                    display: ${enableContact > 3 ? 'block' : 'none'};
                                    transition: display 400ms ease;
                                `}
                            />

                            <TextInput
                                placeholder="Phone Number 5"
                                value={phoneNumber5}
                                onChange={(e) => {
                                    setPhoneNumber5(e.target.value)
                                }}
                                className={css`
                                    display: ${enableContact > 4 ? 'block' : 'none'};
                                    transition: display 400ms ease;
                                `}
                            />
                        </div>
                    </div>
                </div>

                <div className={actionButtonStyle}>
                    <Button onClick={handleSumbitForm} disabled={loading}>
                        {   loading ?
                                <div className={css`padding: 0 12px`}>
                                    <CircularProgress color="inherit" size={"14px"} />
                                </div> :
                            // NON LOADING
                                "Submit"
                        }
                    </Button>
                </div>
            </div>

            <Snackbar
                open={openAlert.open}
                autoHideDuration={6000}
                onClose={handleCloseAlert}
            >
                <Alert
                    onClose={handleCloseAlert}
                    sx={{ width: '100%' }}
                    severity={openAlert.error ? "error" : "success"}
                >
                    { openAlert.message }
                </Alert>
            </Snackbar>
        </>
    )
}

export default AddContact