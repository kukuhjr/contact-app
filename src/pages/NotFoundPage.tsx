import { useNavigate } from "react-router-dom"
// STYLED
import { css } from "@emotion/css"
// COMPONENTS
import { Container } from "../components/styled_component/Container"
import { Button } from "../components/styled_component/Button"
// CONSTANTS
import { fontPreset } from "../constants/fontPreset"

const NotFoundPage = () => {
    const navigate = useNavigate()

    return (
        <Container>
            <div className={css`
                display: flex;
                height: calc(100vh - 63.4px);
                align-items: center;
                justify-content: center;
                flex-direction: column;
                row-gap: .25rem;
            `}>
                <h1 className={css`
                    ${fontPreset.body32Med}
                `}>
                    404 Error
                </h1>
                <h2 className={css`
                    ${fontPreset.body18Reg}
                `}>
                    Oops, not found page.
                </h2>

                <Button 
                    className={css`margin-top: 1rem;`}
                    onClick={() => {
                        navigate("/")
                    }}
                >
                    All Contacts
                </Button>
            </div>
        </Container>
    )
}

export default NotFoundPage