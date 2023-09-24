import{g as t}from"./useQuery-cc2bd7c9.js";import{u as l}from"./useLazyQuery-1df3faf7.js";const f=t`
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
`,$=t`
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
`,h=({where:e,limit:r,offset:o})=>{const[n,{error:a,loading:s,data:i,called:c,fetchMore:_,refetch:m}]=l(f,{variables:{where:e??{first_name:{_like:"%%"}},limit:r??20,offset:o??0}});return{error:a,loading:s,data:i,called:c,getContacts:n,fetchMore:_,refetch:m}};export{$ as G,h as u};
