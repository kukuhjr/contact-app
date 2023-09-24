import { gql, useMutation } from "@apollo/client"
import { Phone } from "../types"
import { GET_ALL_CONTACT } from "./useContacts"

const CREATE_CONTACT = gql`
    mutation AddContactWithPhones(
        $first_name: String!, 
        $last_name: String!, 
        $phones: [phone_insert_input!]!
    ) {
        insert_contact(
            objects: {
                first_name: $first_name, 
                last_name: 
                $last_name, 
                phones: { 
                    data: $phones
                    }
                }
            ) {
                returning {
                first_name
                last_name
                id
                phones {
                    number
                }
            }
        }
    }
`

interface useCreateContactInterface {
    firstName: string,
    lastName: string,
    phones: Array<Phone>
}

export const useCreateContactMutation = ({ firstName, lastName, phones }: useCreateContactInterface) => {
    const [createContact, { data, loading, error }] = useMutation(CREATE_CONTACT, {
        variables: {
            first_name: firstName,
            last_name: lastName,
            phones
        },
        refetchQueries: [
            { query: GET_ALL_CONTACT }
        ]
    })

    return { error, loading, data, createContact }
}