import { gql, useLazyQuery } from "@apollo/client"

const GET_CONTACTS = gql`
    query GetContactList (
        $distinct_on: [contact_select_column!], 
        $limit: Int, 
        $offset: Int, 
        $order_by: [contact_order_by!], 
        $where: contact_bool_exp
    ){
        contact(
            distinct_on: $distinct_on, 
            limit: $limit, 
            offset: $offset, 
            order_by: $order_by, 
            where: $where
        ){
            created_at
            first_name
            id
            last_name
            phones {
                number
            }
        }
    }
`

export const GET_ALL_CONTACT = gql`
    query {
        contact(
            limit: 20,
            where: { first_name: { _like: "%%" } }
        ){
            created_at
            first_name
            id
            last_name
            phones {
                number
            }
        }
    }
`

interface useContactsProps {
    where?: object,
    limit?: number,
    offset?: number,
}

export const useContacts = ({ where, limit, offset }: useContactsProps) => {
    const [getContacts, { error, loading, data, called, fetchMore, refetch }] = useLazyQuery(GET_CONTACTS, {
        variables: {
            where: where ?? { "first_name": {"_like": "%%" } },
            limit: limit ?? 20,
            offset: offset ?? 0,
        }
    })

    return { error, loading, data, called, getContacts, fetchMore, refetch }
}