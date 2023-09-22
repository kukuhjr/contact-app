// COMPONENTS
import { css } from "@emotion/css"
import CharacterLists from "../components/CharacterLists"
import { Container } from "../components/styled_component/Container"
import { Button } from "../components/styled_component/Button"
import { SearchInput } from "../components/styled_component/SearchInput"

const Homepage = () => {
    return (
        <Container>
            <Button>
                Hello
            </Button>

            <SearchInput
                placeholder="Nama"
            />

            <div className={css`
                padding: 1rem 0;
            `}>
                <CharacterLists />
            </div>
        </Container>
    )
}

export default Homepage