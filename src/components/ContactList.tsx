import { Fragment } from "react";
import { css } from "@emotion/css";
import { Contact } from "../types"
// CONSTANTS
// COMPONENTS
import ContactCategoryDivider from "./ContactCategoryDivider";
import ContactRow from "./ContactRow";

interface ContactListProps {
    isFavorite: boolean,
    contactData: any,
    onLoadPage: Function,
    sectionName: string
}

const ContactList = ({ isFavorite = false, contactData, sectionName }: ContactListProps) => {
    if(isFavorite) {
        return (
            <div id="contact_list">
                {   contactData.map((contact: Contact, index: number) => (
                        <Fragment key={`${contact.first_name}-${contact.id}`}>
                            { index === 0 && 
                                <div className={css`padding: 0 1rem;`}>
                                    <ContactCategoryDivider title={sectionName} />
                                </div>
                            }

                            <ContactRow
                                id={contact.id}
                                first_name={contact.first_name}
                                last_name={contact.last_name}
                                phones={contact.phones}
                                created_at={contact.created_at}
                            />
                        </Fragment>
                    )) 
                }
            </div>
        )
    } 

    return (
        // <InfiniteScroll
        //     dataLength={contactData.length}
        //     next={() => onLoadPage()}
        //     hasMore={true}
        //     loader={<h4>Loading...</h4>}
        // >
        <>
            {   contactData.map((contact: Contact, index: number) => (
                    <Fragment key={`${contact.first_name}-${contact.id}`}>
                        { index === 0 && 
                            <div className={css`padding: 0 1rem;`}>
                                <ContactCategoryDivider title={sectionName} />
                            </div>
                        }

                        <ContactRow
                            id={contact.id}
                            first_name={contact.first_name}
                            last_name={contact.last_name}
                            phones={contact.phones}
                            created_at={contact.created_at}
                        />
                    </Fragment>
                )) 
            }
        </>
        // </InfiniteScroll>
    )
}

export default ContactList