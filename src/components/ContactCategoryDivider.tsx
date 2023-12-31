import { css } from "@emotion/css"
import { Divider } from "@mui/material"
import { fontPreset } from "../constants/fontPreset"

const containerStyle = css`
    display: flex;
    align-items: center;
    column-gap: 12px;
    padding: 4px 0;
`

interface ContactCategoryDividerProps {
    title: string
}

const ContactCategoryDivider = ({ title }: ContactCategoryDividerProps) => {
    return (
        <div className={containerStyle}>
            <div>
                <span className={css`
                    ${fontPreset.body14Med}
                `}>
                    { title ?? "" }
                </span>
            </div>

            <div className={css`
                flex-grow: 1;
            `}>
                <Divider />
            </div>
        </div>
    )
}

export default ContactCategoryDivider