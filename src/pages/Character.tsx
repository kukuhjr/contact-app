import { useParams } from "react-router-dom"
import { useCharacter } from "../hooks/useCharacter";
// STYLING
import { css } from "@emotion/css"
// TYPES
import { EpisodeProps } from "../types";

const Character = () => {
    const params = useParams()
    const { id } = params;

    const { error, loading, data } = useCharacter(id)

    if(loading) return <div>Loading...</div>

    if(error) return <div>Something went wrong.</div>

    return (
        <div className={css`
            padding: 1rem 0;
            display: flex;
        `}>
            <div>
                <img src={data.character.image} height={500} />
                <h1 className={css`margin-top: 1rem;`}>{data.character.name}</h1>
                <p>{data.character.gender}</p>
            </div>

            <div className={css`
                margin-left: 2rem;
            `}>
                <div>
                    <h1 className={css`margin-bottom: 1rem;`}>Episodes</h1>

                    <div className={css`
                        display: flex;
                        flex-direction: column;
                        row-gap: .5rem;
                    `}>
                        {data.character.episode.map((eps: EpisodeProps) => (
                            <div>
                                { eps.name } - <b>{ eps.episode }</b>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Character