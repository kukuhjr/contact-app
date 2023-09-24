import { gql, useQuery } from "@apollo/client"

export const GET_CONTACT = gql`
    query GetContactDetail($id: Int!){
        contact_by_pk(id: $id) {
            last_name
            id
            first_name
            created_at
            phones {
                number
            }
        }
    }
`

export const useContact = (id: string | undefined) => {
    const { error, loading, data } = useQuery(GET_CONTACT, {
        variables: {
            id
        }
    })

    return { error, loading, data }
}