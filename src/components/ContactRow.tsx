import { useContext, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { css } from "@emotion/css"
import styled from "@emotion/styled"
// TYPES
import { Contact } from "../types"
// MATERIAL UI
import { Alert, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar } from "@mui/material"
// ICONS
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined'
import GradeIcon from '@mui/icons-material/Grade'
// CONSTANTS
import { fontPreset } from "../constants/fontPreset"
import { colorPalette } from "../constants/colorPalette"
import { fav_contact_key } from "../constants/global"
import { useDeleteContact } from "../hooks/useDeleteContact"
// COMPONENTS
import ButtonNavItem from "./ButtonNavItem"
import { HomeContext } from "../hooks/homeContext"

const rootSyle = css`
    display: flex;
    column-gap: 1rem;
    padding: .5rem 1rem;
    &:hover {
        cursor: pointer;
        background: #f5f5f5;
    }
    &:active {
        box-shadow: none;
    }
`

const ActionMenu = styled.div`
    display: flex;
    padding: ${({ active }: { active: boolean }) => (active ? '.5rem 1rem' : '0' )};
    justify-content: space-evenly;
    height: ${({ active }: { active: boolean }) => (active ? '64px' : '0' )};;
    overflow: hidden;
    transition: height 0.1s ease;
    overflow-y: auto;
`

const avatarStyle = css`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${colorPalette.blue300};
`

const contactDescStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
`

const contactAndPhoneStyle = css`
    display: flex;
    flex-direction: column;
    row-gap: 4px;
`

// const actionButtonStyle = css`
//     display: flex;
// `

const nameStyle = css`
    ${fontPreset.body16Med}
`

const phoneNumberStyle = css`
    ${fontPreset.body12Lig}
`

const ContactRow = ({ first_name, last_name, phones, id, created_at }: Contact) => {
    const navigate = useNavigate()
    const homeState = useContext(HomeContext)
    const isFavorite = JSON.parse(localStorage.getItem(fav_contact_key) ?? "[]").find((cont: Contact) => id === cont.id)

    const { loading, error, data, deleteContact } = useDeleteContact({ id })
    console.log({ loading, error, data });

    const [active, setActive] = useState(false)
    const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false)
    const [isOpenFavoriteDialog, setIsOpenFavoriteDialog] = useState(false)
    const [openAlert, setOpenAlert] = useState({ open: false, message: "", error: false });


    const handleOpenDeleteDialog = () => { setIsOpenDeleteDialog(true) }
    const handleCloseDeleteDialog = () => { setIsOpenDeleteDialog(false) }

    const handleOpenFavoriteDialog = () => { setIsOpenFavoriteDialog(true) }
    const handleCloseFavoriteDialog = () => { setIsOpenFavoriteDialog(false) }

    const handleOpenAlert = (message: string, error: boolean) => {
        setOpenAlert({ open: true, message, error });
    };
    const handleCloseAlert = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') { return; }
    
        setOpenAlert({ open: false, message: "", error: false });
    };

    const handleSubmitFavorite = (contact: Contact) => {
        const contacts = JSON.parse(localStorage.getItem(fav_contact_key) ?? "[]")

        if(isFavorite !== undefined) {
            const filteredContacts = contacts.filter((item: Contact) => { return item.id !== id })
            localStorage.setItem(fav_contact_key, JSON.stringify(filteredContacts));
        } else {
            localStorage.setItem(fav_contact_key, JSON.stringify([ ...contacts, contact ]));
        }
    }

    useMemo(() => {
        if(data?.delete_contact_by_pk !== undefined) { 
            handleCloseDeleteDialog()
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
            <div className={rootSyle}
                onClick={() => setActive((state) => !state)}
            >
                <div className={avatarStyle} />

                <div className={contactDescStyle}>
                    <div className={contactAndPhoneStyle}>
                        <h6 className={nameStyle}>
                            { first_name } { last_name }
                        </h6>

                        <span className={phoneNumberStyle}>
                            { phones[0].number }
                        </span>
                    </div>
                </div>
            </div>

            <ActionMenu active={active}>
                <ButtonNavItem
                    active={false}
                    onClick={() => {
                        handleOpenDeleteDialog()
                    }}
                    icon={<DeleteOutlineOutlinedIcon />}
                    title={"Delete"}
                    color="red"
                />

                <ButtonNavItem
                    active={false}
                    onClick={() => {
                        handleOpenFavoriteDialog()
                    }}
                    icon={isFavorite ? <GradeIcon /> : <GradeOutlinedIcon />}
                    title={"Favorite"}
                    color="#ffc107"
                />

                <ButtonNavItem
                    active={false}
                    onClick={() => {
                        navigate(`/${id}`)
                    }}
                    icon={<InfoOutlinedIcon />}
                    title={"Details"}
                />
            </ActionMenu>

            <Dialog
                open={isOpenDeleteDialog}
                keepMounted
                onClose={handleCloseDeleteDialog}
                aria-describedby="alert-dialog-delete-contact"
            >
                <DialogTitle>{"Add to Favorite?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-delete-contact">
                        Are you sure want to delete this contact. {first_name} {last_name} ?
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button
                        onClick={handleCloseDeleteDialog}
                        color="error"
                        disabled={loading}
                    >
                        {   loading ?
                                <div className={css`padding: 0 12px`}>
                                    <CircularProgress color="inherit" size={"14px"} />
                                </div> :
                            // NON-LOADING
                                "No"
                        }
                    </Button>

                    <Button
                        onClick={() => { 
                            const contacts = JSON.parse(localStorage.getItem(fav_contact_key) ?? "[]")
                            const filteredContacts = contacts.filter((item: Contact) => { return item.id !== id })

                            localStorage.setItem(fav_contact_key, JSON.stringify(filteredContacts));
                            deleteContact()
                        }}
                        disabled={loading}
                    >
                        {   loading ?
                                <div className={css`padding: 0 12px`}>
                                    <CircularProgress color="inherit" size={"14px"} />
                                </div> :
                            // NON-LOADING
                                "Yes"
                        }
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={isOpenFavoriteDialog}
                keepMounted
                onClose={handleCloseFavoriteDialog}
                aria-describedby="alert-dialog-favorite-contact"
            >
                <DialogTitle>{`${ isFavorite ? "Remove from" : "Add to" } Favorite list?`}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-favorite-contact">
                        { isFavorite ? "Remove" : "Add" } this contact { isFavorite ? "from" : "to" } Favorite list. {first_name} {last_name} ?
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button
                        onClick={handleCloseFavoriteDialog}
                        color="error"
                    >
                        No
                    </Button>
                    <Button
                        onClick={() => {
                            handleSubmitFavorite({ id, first_name, last_name, created_at, phones })
                            handleCloseFavoriteDialog()

                            homeState?.handleOpenAlert(`${isFavorite ? 'Removed from favorite' : 'Added to favorite' }`, false);  
                        }}
                    >
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>

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

export default ContactRow