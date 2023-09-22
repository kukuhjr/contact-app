import { css } from "@emotion/css";
import { CharacterProps } from "../types";
import { useCharacters } from "../hooks/useCharacters";

const CharacterLists = () => {
    const { error, loading, data } = useCharacters()

    if(loading) return <div>Loading...</div>

    if(error) return <div>Something went wrong.</div>

    return (
        <div className={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            column-gap: 8px;
        `}>
            { data.characters.results.map((character: CharacterProps) => (
                <div>
                    <img src={character.image} />
                    <h2>{ character.name }</h2>
                </div>
            )) }
        </div>
    )
}

export default CharacterLists