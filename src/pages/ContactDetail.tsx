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

const ContactDetail = () => {
    const navigate = useNavigate()
    
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
                <div className={css`
                    padding: 0 1rem;
                    display: flex;
                    flex-direction: column;
                `}>
                    Contact Detail
                </div>
            </Container>
        </>
    )
}

export default ContactDetail