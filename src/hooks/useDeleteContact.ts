import { gql, useMutation } from "@apollo/client"
import { GET_ALL_CONTACT } from "./useContacts"

const DELETE_CONTACTS = gql`
    mutation MyMutation($id: Int!) {
        delete_contact_by_pk(id: $id) {
            first_name
            last_name
            id
        }
    }
`

interface useDeleteContactProps {
    id?: number,
}

export const useDeleteContact = ({ id }: useDeleteContactProps) => {
    const [deleteContact, { error, loading, data, called }] = useMutation(DELETE_CONTACTS, {
        variables: {
            id
        },
        refetchQueries: [
            { query: GET_ALL_CONTACT }
        ]
    })

    return { error, loading, data, called, deleteContact }
}