import { gql, useMutation } from "@apollo/client"
import { GET_CONTACT } from "./useContact"

const EDIT_PHONE = gql`
    mutation EditPhoneNumber($pk_columns: phone_pk_columns_input!, $new_phone_number:String!) {
        update_phone_by_pk(pk_columns: $pk_columns, _set: {number: $new_phone_number}) {
            contact {
            id
            last_name
            first_name
            created_at
            phones {
                number
            }
            }
        }
    }

`

interface useEditPhoneMutationInterface {
    new_phone_number: string,
    pk_columns: any
}

export const useEditPhoneMutation = ({ new_phone_number, pk_columns }: useEditPhoneMutationInterface) => {
    const [editPhone, { data, loading, error }] = useMutation(EDIT_PHONE, {
        variables: {
            new_phone_number,
            pk_columns
        },
        refetchQueries: [
            { query: GET_CONTACT }
        ]
    })

    return { error, loading, data, editPhone }
}