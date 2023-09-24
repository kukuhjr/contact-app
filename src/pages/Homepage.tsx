import { useEffect, useRef, useState } from "react"
import { css } from "@emotion/css"
import { Contact } from "../types"
// HOOKS
import { useContacts } from "../hooks/useContacts"
import { HomeContext } from "../hooks/homeContext"
// MUI
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
// COMPONENTS
import { Container } from "../components/styled_component/Container"
import Header from "../components/layout/Header"
import { SearchInput } from "../components/styled_component/SearchInput"
import LoadingComponent from "../components/LoadingComponent"
import ContactList from "../components/ContactList"
// CONSTANTS
import { colorPalette } from "../constants/colorPalette"
import { fontPreset } from "../constants/fontPreset"
import { fav_contact_key } from "../constants/global"

const rootSyle = css`
    padding: .5rem 1rem;
`

const paginationStyle = css`padding: 8px; background: ${colorPalette.gray50};border-radius: 4px;flex-grow: 1;text-align:center;${fontPreset.body14Reg};cursor: pointer`

const SIZE_PAGE = 10

const Homepage = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const fav_list = localStorage.getItem(fav_contact_key)

    const current_page = localStorage.getItem("current_page") !== "" ? localStorage.getItem("current_page") : "1"

    const [page, setPage] = useState<number>(parseInt(current_page ?? "1"))
    const [openAlert, setOpenAlert] = useState({ open: false, message: "", error: false });

    const { error, loading, data, called, getContacts, fetchMore, refetch } = useContacts({
        where: { "first_name": { "_like": `%${inputRef.current?.value}%` } },
        limit: SIZE_PAGE,
        offset: (page - 1) * SIZE_PAGE,
    })
    console.log({ error, loading, data, called });
    
    const [contactData, setContactData] = useState<Array<Contact>>([])

    useEffect(() => {
        getContacts()
    }, [])


    const handleOpenAlert = (message: string, error: boolean) => {
        setOpenAlert({ open: true, message, error });
    };
    
    const handleCloseAlert = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') { return; }
    
        setOpenAlert({ open: false, message: "", error: false });
    };

    return (
        <>
            <Header
                title={"Contacts"}
                headerPadding="1.25rem 1rem .5rem 1rem"
            />

            <HomeContext.Provider
                value={{ error, loading, data, getContacts, handleOpenAlert }}
            >
                <Container>
                    <div className={css`
                        display: flex;
                        flex-direction: column;
                    `}>
                        <div className={css`
                            padding: .75rem 1rem;
                            position: -webkit-sticky;
                            position: sticky;
                            top: 0;
                            background: ${colorPalette.white100};
                        `}>
                            <SearchInput
                                inputRef={inputRef}
                                getContact={getContacts}
                            />
                        </div>

                        {   loading ?
                                <LoadingComponent height="calc(100vh - 63.2px)"/> :
                            error ?
                                <div className={rootSyle}>
                                    <div className={css`
                                        height: 160px;
                                        background: pink;
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                    `}>
                                        <div>
                                            <h5 className={css`
                                                ${fontPreset.body20Med}
                                            `}>
                                                Oops, error.
                                            </h5>

                                            <span className={css`
                                                ${fontPreset.body12Reg}
                                            `}>
                                                Something went wrong. { error.message }
                                            </span>
                                        </div>
                                    </div>
                                </div> :
                            data ?
                                data.contact.length > 0 ?
                                    <>
                                        <ContactList
                                            isFavorite={true}
                                            contactData={JSON.parse(fav_list ?? "[]")}
                                            onLoadPage={() => {}}
                                            sectionName="Favorite"
                                        />

                                        
                                        <ContactList
                                            isFavorite={false}
                                            contactData={ 
                                                contactData.length > 0 ?
                                                    contactData.filter((item: Contact) => !JSON.parse(fav_list ?? "[]")?.find((cont: Contact) => item.id === cont.id)) :
                                                // CONTACT DATA = 0
                                                    data.contact.filter((item: Contact) => !JSON.parse(fav_list ?? "[]")?.find((cont: Contact) => item.id === cont.id))
                                            }
                                            sectionName="All Contact"
                                            onLoadPage={() => {
                                                fetchMore({
                                                    variables: {
                                                        limit: 20,
                                                        offset: 20,
                                                    },
                                                    updateQuery(previousQueryResult, options) {
                                                        const newEdges = options.fetchMoreResult.contact;
                                
                                                        console.log("newEdges", newEdges);
                                                        console.log("previousResult", previousQueryResult);

                                                        setContactData([ ...previousQueryResult.contact, ...newEdges ])
                                                    },
                                                })
                                            }}
                                        />

                                        <div className={css`
                                            padding: 12px 0;
                                            margin: 0 1rem;
                                            display: flex;
                                            justify-content: space-between;
                                            column-gap: 10px;
                                        `}>
                                            {   page > 1 &&
                                                    <div className={paginationStyle}
                                                        onClick={() => {
                                                            refetch({
                                                                where: { "first_name": { "_like": `%${inputRef.current?.value}%` } },
                                                                limit: SIZE_PAGE,
                                                                offset: (page - 1) * SIZE_PAGE,
                                                            })
                                                            setPage((page) => page - 1)
                                                            localStorage.setItem("current_page", `${page - 1}`)
                                                        }}
                                                    >
                                                        back
                                                    </div>
                                            }

                                            {   data.contact.length === SIZE_PAGE &&
                                                    <div className={paginationStyle}
                                                        onClick={() => {
                                                            refetch({
                                                                where: { "first_name": { "_like": `%${inputRef.current?.value}%` } },
                                                                limit: SIZE_PAGE,
                                                                offset: (page + 1) * SIZE_PAGE,
                                                            })
                                                            setPage((page) => page + 1)
                                                            localStorage.setItem("current_page", `${page + 1}`)
                                                        }}
                                                    >
                                                        next
                                                    </div>
                                            }
                                        </div>
                                    </> :
                                // EMPTY
                                    <div className={css`
                                        height: 80px;
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        background: ${colorPalette.gray50};
                                        margin: 0 1rem;
                                        border-radius: 6px;
                                    `}>
                                        <span className={css`
                                            ${fontPreset.body14Lig}
                                        `}>
                                            Kontak yang dicari tidak ada.
                                        </span>
                                    </div>
                                    :
                            // ELSE
                                <div>Something went wrong.</div>
                        }
                    </div>
                </Container>

                <Snackbar
                    open={openAlert.open}
                    autoHideDuration={6000}
                    onClose={handleCloseAlert}
                >
                    <Alert
                        onClose={handleCloseAlert}
                        sx={{ width: '100%' }}
                        severity={openAlert.error ? "error" : "success"}
                    >
                        { openAlert.message }
                    </Alert>
                </Snackbar>
            </HomeContext.Provider>
        </>
    )
}

export default Homepage