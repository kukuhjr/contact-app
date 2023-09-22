import { css } from "@emotion/css"
// COMPONENTS
import { Container } from "../components/styled_component/Container"
import ContactRow from "../components/ContactRow"
import Header from "../components/layout/Header"
import { SearchInput } from "../components/styled_component/SearchInput"
import ContactCategoryDivider from "../components/ContactCategoryDivider"
import { Fragment } from "react"

const Homepage = () => {
    return (
        <>
            <Header title={"Contacts"}/>

            <Container>
                <div className={css`
                    display: flex;
                    flex-direction: column;
                `}>
                    <div className={css`
                        margin-bottom: 12px;
                        padding: 0 1rem;
                    `}>
                        <SearchInput />
                    </div>

                    { [0,1,2,3,4,5,0,1,2,3,4,5,0,1,2,3,4,5].map((num, index) => (
                        <Fragment key={`${num}-${index}`}>
                            { index === 0 && 
                                <div className={css`padding: 0 1rem;`}>
                                    <ContactCategoryDivider />
                                </div>
                            }

                            <ContactRow  />

                            { index === 7 && 
                                <div className={css`padding: 0 1rem;`}>
                                    <ContactCategoryDivider />
                                </div>
                            }
                        </Fragment>
                    )) }
                </div>
            </Container>
        </>
    )
}

export default Homepage