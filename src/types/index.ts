export interface CharacterProps {
    gender: string;
    id: string;
    image: string;
    name: string;
    __typename: string;
}

export interface EpisodeProps {
    name: string;
    episode: string;
}
export interface Phone {
    number: string;
}

export interface Contact {
    created_at: string;
    first_name: string;
    id: number;
    last_name: string;
    phones: Array<Phone>;
}
