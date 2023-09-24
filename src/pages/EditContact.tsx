import { useState, forwardRef, useMemo } from "react"
import { css } from "@emotion/css"
// ICONS
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import CircularProgress from '@mui/material/CircularProgress'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined'
import EditIcon from '@mui/icons-material/Edit'
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
// TYPES
import { Contact } from "../types"
import { validNameContact, validPhoneNumber } from "../constants/regExp"
import { Button as MUIButton, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from "@mui/material"
import { useEditContactMutation } from "../hooks/useEditContact"
import { useEditPhoneMutation } from "../hooks/useEditPhoneNumber"

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

const phoneFormStyle = css`display: flex; column-gap: 4px`

const EditContact = ({ contactData, changeView }: { contactData: Contact, changeView: Function }) => {
    const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
        props,
        ref,
    ) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const [openAlert, setOpenAlert] = useState({ open: false, message: "", error: false });
    const [enableContact, setEnableContact] = useState(contactData?.phones?.length ?? 1)
    
    const [firstName, setFirstName] = useState(contactData.first_name ?? "")
    const [lastName, setLastName] = useState(contactData.last_name ?? "")
    
    const [phoneNumber, setPhoneNumber] = useState(contactData?.phones[0]?.number ?? "")
    const [phoneNumber2, setPhoneNumber2] = useState(contactData?.phones[1]?.number ?? "")
    const [phoneNumber3, setPhoneNumber3] = useState(contactData?.phones[2]?.number ?? "")
    const [phoneNumber4, setPhoneNumber4] = useState(contactData?.phones[3]?.number ?? "")
    const [phoneNumber5, setPhoneNumber5] = useState(contactData?.phones[4]?.number ?? "")
    
    // EDIT STATE
    const [isOpenDialog, setIsOpenDialog] = useState({ open: false, message: "", error: false, phoneNum: "" });
    const [oldNumber, setoldNumber] = useState("")
    const [newNumber, setNewNumber] = useState("")

    // const phoneArr: Array<Phone> = [
    //     { number: phoneNumber },
    //     { number: phoneNumber2 },
    //     { number: phoneNumber3 },
    //     { number: phoneNumber4 },
    //     { number: phoneNumber5 },
    // ]

    const { loading, error, data, editContact } = useEditContactMutation({ 
        id: contactData.id,
        inputData: {
            first_name: firstName,
            last_name: lastName,
        }
    })

    const editPhoneMutation = useEditPhoneMutation({ 
        new_phone_number: newNumber,
        pk_columns: {
            number: oldNumber,
            contact_id: contactData.id
        }
    })

    const handleOpenAlert = (message: string, error: boolean) => {
        setOpenAlert({ open: true, message, error });
    };
    
    const handleCloseAlert = (_?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') { return; }
    
        setOpenAlert({ open: false, message: "", error: false });
    };

    const handleClickAddPhone = () => {
        if(enableContact < 5) setEnableContact((state) => state + 1)
        // else console.log("5 already");
    }

    const handleClickRemovePhone = () => {
        if(enableContact > 1) {
            setEnableContact((state) => state - 1)
        }
        // else console.log("1 already");
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
            editContact()
        }
    }

    const handleCloseDialog = () => {
        setIsOpenDialog({ open: false, message: "", error: false, phoneNum: "" })
    }

    const handleOpenDialog = (message: string, error: boolean, phoneNum: string) => {
        setoldNumber(phoneNum)
        setIsOpenDialog({ open: true, message, error: error ?? false, phoneNum: phoneNum ?? "" })
    }

    const handleSubmitEditPhone = () => {
        let error = false;
        let message = "All forms are not fulfilled";

        if(newNumber === "" || oldNumber === "") {
            error = true
        } else if(newNumber === oldNumber) {
            error = true
            message = "Cannot change to same number."
        } else if(newNumber !== "" && !validPhoneNumber.test(newNumber)) {
            error = true
            message = "New number is invalid."
        } else if(oldNumber !== "" && !validPhoneNumber.test(oldNumber)) {
            error = true
            message = "Old number is invalid."
        }

        if(error) {
            handleOpenAlert(message, true)
        } else {
            // console.log({ newNumber, oldNumber });
            
            editPhoneMutation.editPhone()
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
            handleOpenAlert(`Edit contact success`, false);
        }

        if(error) {
            if(error.message.includes(`Uniqueness violation. duplicate key value violates unique constraint "phone_number_key"`)) {
                handleOpenAlert(`Number phones already exist.`, true);
            } else {
                handleOpenAlert(`Edit contact failed`, true);
            }
        }
    }, [data, error])

    useMemo(() => {
        if(editPhoneMutation.data) { 
            handleOpenAlert(`Phone number updated.`, false);

            setTimeout(() => {
                handleCloseAlert()
                changeView()
            }, 3000)

            changeView()
        }

        if(editPhoneMutation.error) {
            if(editPhoneMutation.error.message.includes(`Uniqueness violation. duplicate key value violates unique constraint "phone_number_key"`)) {
                handleOpenAlert(`Number phones already exist.`, true);
            } else {
                handleOpenAlert(`Edit number failed`, true);
            }
            
            // console.log(editPhoneMutation.error);
        }
    }, [editPhoneMutation.data, editPhoneMutation.error])

    return (
        <>
            <Header
                backButton={
                    <IconButton
                        aria-label="back"
                        size="small"
                        onClick={() => { changeView() }}
                    >
                        <ArrowBackIosNewOutlinedIcon fontSize="small" />
                    </IconButton>
                }
            />

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

                        {/* PHONE SECTION */}
                        <div className={css`
                            margin-top: 8px;
                            display: flex;
                            flex-direction: column;
                            row-gap: 8px;
                        `}>
                            <div className={phoneFormStyle}>
                                <TextInput
                                    placeholder="Phone Number"
                                    value={phoneNumber}
                                    onChange={(e) => {
                                        setPhoneNumber(e.target.value)
                                    }}
                                    readOnly
                                />

                                <IconButtonStyled
                                    onClick={() => { handleOpenDialog("Phone Number 1", false, phoneNumber) }}
                                    disabled={false}
                                >
                                    <EditIcon fontSize="small" /> 
                                </IconButtonStyled>
                            </div>

                            <div className={phoneFormStyle}>
                                <TextInput
                                    placeholder="Phone Number 2"
                                    value={phoneNumber2}
                                    onChange={(e) => {
                                        setPhoneNumber2(e.target.value)
                                    }}
                                    className={css`display: ${enableContact > 1 ? 'block' : 'none'}`}
                                    readOnly
                                />

                                <IconButtonStyled
                                    onClick={() => { handleOpenDialog("Phone Number 2", false, phoneNumber2) }}
                                    disabled={enableContact > 1}
                                    display={enableContact > 1 ? 'flex' : 'none'}
                                >
                                    <EditIcon fontSize="small" /> 
                                </IconButtonStyled>
                            </div>

                            <div className={phoneFormStyle}>
                                <TextInput
                                    placeholder="Phone Number 3"
                                    value={phoneNumber3}
                                    onChange={(e) => {
                                        setPhoneNumber3(e.target.value)
                                    }}
                                    className={css`display: ${enableContact > 2 ? 'block' : 'none'}`}
                                    readOnly
                                />

                                <IconButtonStyled
                                    onClick={() => { handleOpenDialog("Phone Number 3", false, phoneNumber3) }}
                                    disabled={enableContact > 2}
                                    display={enableContact > 2 ? 'flex' : 'none'}
                                >
                                    <EditIcon fontSize="small" /> 
                                </IconButtonStyled>
                            </div>

                            <div className={phoneFormStyle}>
                                <TextInput
                                    placeholder="Phone Number 4"
                                    value={phoneNumber4}
                                    onChange={(e) => {
                                        setPhoneNumber4(e.target.value)
                                    }}
                                    className={css`display: ${enableContact > 3 ? 'block' : 'none'}`}
                                    readOnly
                                />

                                <IconButtonStyled
                                    onClick={() => { handleOpenDialog("Phone Number 4", false, phoneNumber4) }}
                                    disabled={enableContact > 3}
                                    display={enableContact > 3 ? 'flex' : 'none'}
                                >
                                    <EditIcon fontSize="small" /> 
                                </IconButtonStyled>
                            </div>

                            <div className={phoneFormStyle}>
                                <TextInput
                                    placeholder="Phone Number 5"
                                    value={phoneNumber5}
                                    onChange={(e) => {
                                        setPhoneNumber5(e.target.value)
                                    }}
                                    className={css`display: ${enableContact > 4 ? 'block' : 'none'}`}
                                    readOnly
                                />

                                <IconButtonStyled
                                    onClick={() => { handleOpenDialog("Phone Number 5", false, phoneNumber5) }}
                                    disabled={enableContact > 4}
                                    display={enableContact > 4 ? 'flex' : 'none'}
                                >
                                    <EditIcon fontSize="small" /> 
                                </IconButtonStyled>
                            </div>
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

            <Dialog
                open={isOpenDialog.open}
                keepMounted
                onClose={handleCloseDialog}
                aria-describedby="alert-edit-number"
                fullWidth
                maxWidth={"md"}
            >
                <DialogTitle sx={{ fontSize: "18px", fontWeight: "400" }}>{`Edit Phone Number`}</DialogTitle>
                <DialogContent>
                    <div className={formSectionStyle}>
                        <div>
                            <span className={labelStyle}>
                                Old Number
                            </span>

                            <div className={css`margin-top: 8px`}>
                                <TextInput
                                    value={oldNumber}
                                    onChange={(e) => { setoldNumber(e.target.value) }}
                                    readOnly
                                />
                            </div>
                        </div>

                        <div>
                            <span className={labelStyle}>
                                New Number
                            </span>

                            <div className={css`margin-top: 8px`}>
                                <TextInput
                                    value={newNumber}
                                    onChange={(e) => { setNewNumber(e.target.value) }}
                                />
                            </div>
                        </div>
                    </div>
                </DialogContent>

                <DialogActions>
                    <MUIButton
                        onClick={handleCloseDialog}
                        color="error"
                        disabled={editPhoneMutation.loading}
                    >
                        Cancel
                    </MUIButton>

                    <MUIButton
                        onClick={() => {
                            handleSubmitEditPhone()
                            handleCloseDialog()

                            handleOpenAlert("Phone number updated.", false)
                        }}
                    >
                        {   editPhoneMutation.loading ?
                                <div className={css`padding: 0 12px`}>
                                    <CircularProgress color="inherit" size={"14px"} />
                                </div> :
                            // NON LOADING
                                "Save"
                        }
                    </MUIButton>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default EditContact