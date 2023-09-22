import { Fragment } from "react"
import { css } from "@emotion/css"
// HOOKS
import { useContacts } from "../hooks/useContacts"
// MUI
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
// COMPONENTS
import { Container } from "../components/styled_component/Container"
import ContactRow from "../components/ContactRow"
import Header from "../components/layout/Header"
import { SearchInput } from "../components/styled_component/SearchInput"
import ContactCategoryDivider from "../components/ContactCategoryDivider"
import { colorPalette } from "../constants/colorPalette"
import LoadingComponent from "../components/LoadingComponent"
import { Contact } from "../types"

const Homepage = () => {
    const { error, loading, data } = useContacts()

    console.log({ error, loading, data });

    // if(loading) return <div>Loading...</div>

    // if(error) return <div>Something went wrong.</div>

    return (
        <>
            <Header
                title={"Contacts"}
                headerPadding="1.25rem 1rem .5rem 1rem"
            />

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
                        <SearchInput />
                    </div>

                    {   loading ?
                            <LoadingComponent height="calc(100vh - 63.2px)"/> :
                        error ?
                            <div>Something went wrong.</div> :
                        data ?
                            data.contact.map((contact: Contact, index: number) => (
                                <Fragment key={`${contact.first_name}-${contact.id}`}>
                                    { index === 0 && 
                                        <div className={css`padding: 0 1rem;`}>
                                            <ContactCategoryDivider />
                                        </div>
                                    }
        
                                    <ContactRow
                                        id={contact.id}
                                        first_name={contact.first_name}
                                        last_name={contact.last_name}
                                        phones={contact.phones[0].number}
                                    />
        
                                    { index === 7 && 
                                        <div className={css`padding: 0 1rem;`}>
                                            <ContactCategoryDivider />
                                        </div>
                                    }
                                </Fragment>
                            )) :
                        // ELSE
                            <div>Something went wrong.</div>
                    }

                    <div className={css`
                        padding: 12px 0;
                        display: flex;
                        justify-content: center;
                    `}>
                        <Stack spacing={2}>
                            <Pagination count={5} shape="rounded" />
                        </Stack>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Homepage