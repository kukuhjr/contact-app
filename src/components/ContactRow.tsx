import {  useState } from "react"
import { useNavigate } from "react-router-dom"
import { css } from "@emotion/css"
import styled from "@emotion/styled"
// ICONS
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined'
// CONSTANTS
import { fontPreset } from "../constants/fontPreset"
import { colorPalette } from "../constants/colorPalette"
// COMPONENTS
import ButtonNavItem from "./ButtonNavItem"
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"

interface ContactRowProps {
    first_name: string,
    last_name: string,
    id: number,
    phones: string
}

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

const ContactRow = ({ first_name, last_name, phones }: ContactRowProps) => {
    const navigate = useNavigate()
    const [active, setActive] = useState(false)
    const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false)
    const [isOpenFavoriteDialog, setIsOpenFavoriteDialog] = useState(false)

    const handleOpenDeleteDialog = () => { setIsOpenDeleteDialog(true) }
    const handleCloseDeleteDialog = () => { setIsOpenDeleteDialog(false) }

    const handleOpenFavoriteDialog = () => { setIsOpenFavoriteDialog(true) }
    const handleCloseFavoriteDialog = () => { setIsOpenFavoriteDialog(false) }

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
                            { phones }
                        </span>
                    </div>

                    {/* <div className={actionButtonStyle}>
                        Button
                    </div> */}
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
                    icon={<GradeOutlinedIcon />}
                    title={"Favorite"}
                    color="#ffc107"
                />

                <ButtonNavItem
                    active={false}
                    onClick={() => {
                        navigate("/123")
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
                        Are you sure want to delete this contact. CONTACT_NAME ?
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button
                        onClick={handleCloseDeleteDialog}
                        color="error"
                    >
                        No
                    </Button>
                    <Button
                        onClick={handleCloseDeleteDialog}
                    >
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={isOpenFavoriteDialog}
                keepMounted
                onClose={handleCloseFavoriteDialog}
                aria-describedby="alert-dialog-favorite-contact"
            >
                <DialogTitle>{"Delete Contact?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-favorite-contact">
                        Add this contact to Favorite list? CONTACT_NAME
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
                        onClick={handleCloseFavoriteDialog}
                    >
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ContactRow