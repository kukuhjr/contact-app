import { gql, useMutation } from "@apollo/client"
import { GET_CONTACT } from "./useContact"

const EDIT_CONTACT = gql`
    mutation EditContactById($id: Int!, $_set: contact_set_input) {
        update_contact_by_pk(pk_columns: {id: $id}, _set: $_set) {
            id
            first_name
            last_name
            phones {
            number
            }
        }
    }
`

interface useEditContactMutationInterface {
    id: number,
    inputData: any
}

export const useEditContactMutation = ({ id, inputData }: useEditContactMutationInterface) => {
    const [editContact, { data, loading, error }] = useMutation(EDIT_CONTACT, {
        variables: {
            id,
            _set: inputData
        },
        refetchQueries: [
            { query: GET_CONTACT }
        ]
    })

    return { error, loading, data, editContact }
}