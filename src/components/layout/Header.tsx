import { css } from "@emotion/css"
import { Container } from "../styled_component/Container"

const Header = () => {
    return (
        <div
            className={css`
                padding: 1.5rem;
                font-size: 24px;
                border-radius: 4px;
                background: pink;
            `}
        >
            <Container>
                Contact
            </Container>
        </div>
    )
}

export default Header