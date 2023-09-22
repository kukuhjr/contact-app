import { css } from "@emotion/css"
// COMPONENTS
import { Container } from "../styled_component/Container"
// CONSTANTS
import { fontPreset } from "../../constants/fontPreset"
import { breakpoints } from "../../constants/mediaQueries"

interface HeaderProps {
    title?: string,
    actionButton?: React.ReactNode,
    backButton?: React.ReactNode
}

const Header = ({ title, actionButton, backButton }: HeaderProps) => {
    return (
        <div
            className={css`
                padding: 1.25rem 1rem;
                font-size: 20px;
                border-radius: 4px;
                ${breakpoints.md} {
                    padding: 1.25rem;
                }
            `}
        >
            <Container>
                <div className={css`
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                `}>
                    { backButton }

                    <div>
                        <h1 className={css`
                            ${fontPreset.body20Med}
                        `}>
                            { title }
                        </h1>
                    </div>

                    { actionButton }
                </div>
            </Container>
        </div>
    )
}

export default Header