import { css } from "@emotion/css"

const style = css`
    max-width: 75rem;
    margin: 0 auto;
`

export const Container = ({ children }: { children: React.ReactNode }) => (
    <div className={style}>
      {children}
    </div>
)