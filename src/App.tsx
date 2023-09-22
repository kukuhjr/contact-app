import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
// STYLING
import { Global, css } from '@emotion/react'
import './App.css'
import { colorPalette } from "./constants/colorPalette";
// COMPONENTS
const Layout = lazy(() => import('./components/layout/Layout'))
// PAGES
const AddContact = lazy(() => import("./pages/AddContact"))
const ContactDetail = lazy(() => import("./pages/ContactDetail"))
const Homepage = lazy(() => import("./pages/Homepage"))
// const Character = lazy(() => import("./pages/Character"))
const Search = lazy(() => import("./pages/Search"))
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"))

const global = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, p, span {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    color: ${colorPalette.primaryBlack}
  }

`

function App() {
  return (
    <div>
      <Global styles={global} />

      <Suspense fallback={<p>Loading....</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="add-contact" element={<AddContact />} />
            <Route path=":contactId" element={<ContactDetail />} />

            {/* <Route path=":id" element={<Character />} /> */}
            <Route path="search" element={<Search />} />
            
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
