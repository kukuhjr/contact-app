import { gql, useLazyQuery } from "@apollo/client"
import { css } from "@emotion/css"
import { useRef } from "react"
import { Container } from "../components/styled_component/Container"

const GET_CHARACTER_LOCATION = gql`
    query GetCharacterLocations($name: String!) {
        characters(filter: { name: $name }) {
            results {
                location {
                    name
                }
            }
        }
    }
`

const Search = () => {
    // const [name, setName] = useState("")
    const nameRef = useRef<HTMLInputElement>(null)

    const [getLocation, { loading, error, data, called }] = useLazyQuery(
        GET_CHARACTER_LOCATION,
        {
            variables: { name: nameRef.current?.value  }
        }
    )

    console.log({ loading, error, data, called });

    return (
        <Container>
            <div className={css`
                padding: 2rem 0;
            `}>
                <input type="text" ref={nameRef} />
                <button onClick={() => getLocation()}>Search</button>
            </div>
        </Container>
    )
}

export default Search