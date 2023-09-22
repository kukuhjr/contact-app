import { css } from "@emotion/css"

interface ContainerProps {
  children: React.ReactNode
}

const style = css`
    max-width: 75rem;
    margin: 0 auto;
`

export const Container = ({ children }: ContainerProps) => (
    <div className={style}>
      {children}
    </div>
)