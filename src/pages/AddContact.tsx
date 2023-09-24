import { useRef, useState, forwardRef, useMemo } from "react"
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
    
    const firstNameRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    
    const phoneNumberRef = useRef<HTMLInputElement>(null)
    const phoneNumberRef2 = useRef<HTMLInputElement>(null)
    const phoneNumberRef3 = useRef<HTMLInputElement>(null)
    const phoneNumberRef4 = useRef<HTMLInputElement>(null)
    const phoneNumberRef5 = useRef<HTMLInputElement>(null)

    const phoneArr: Array<Phone> = [
        { number: phoneNumberRef.current?.value ?? "" },
        { number: phoneNumberRef2.current?.value ?? "" },
        { number: phoneNumberRef3.current?.value ?? "" },
        { number: phoneNumberRef4.current?.value ?? "" },
        { number: phoneNumberRef5.current?.value ?? "" },
    ]

    const { loading, error, data, createContact } = useCreateContactMutation({ 
        firstName: firstNameRef.current?.value ?? "",
        lastName: lastNameRef.current?.value ?? "",
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

        if(firstNameRef.current?.value === "") error = true
        if(lastNameRef.current?.value === "") error = true
        if(phoneNumberRef.current?.value === "") error = true

        if(error) {
            handleOpenAlert("All forms are not fulfilled", true)
        } else {
            createContact()
        }
    }

    useMemo(() => {
        // if(enableContact < 5) phoneNumberRef5.current?.value = ""
        // if(enableContact < 4) phoneNumberRef4.current?.value = ""
        // if(enableContact < 3) phoneNumberRef3.current?.value = ""
        // if(enableContact < 2) phoneNumberRef2.current?.value = ""
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