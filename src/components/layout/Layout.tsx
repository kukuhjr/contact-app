import { Outlet } from "react-router-dom"
import { Suspense, lazy } from "react"
// STYLING
import { css } from "@emotion/css"

const Footer = lazy(() => import("./Footer"))

const Layout = () => {
    return (
        <div className={css`
            position: relative;
        `}>
            <Outlet />

            <Suspense fallback={<p>Loading...</p>}>
                <Footer />
            </Suspense>

            {/* FOOTER HEIGHT */}
            <div className={css`height: 63.2px`} />
        </div>
    )
}

export default Layout