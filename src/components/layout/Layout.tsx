import { Outlet } from "react-router-dom"
// STYLING
import Footer from "./Footer"
import { css } from "@emotion/css"

const Layout = () => {
    return (
        <div className={css`
            position: relative;
        `}>
            <Outlet />

            <Footer />

            {/* FOOTER HEIGHT */}
            <div className={css`height: 63.2px`} />
        </div>
    )
}

export default Layout