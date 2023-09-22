import { Outlet } from "react-router-dom"
// STYLING
import Footer from "./Footer"
import Header from "./Header"

const Layout = () => {
    return (
        <div>
            <Header />

            <Outlet />

            <Footer />
        </div>
    )
}

export default Layout