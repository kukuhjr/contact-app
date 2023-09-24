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
    id: number;
    first_name: string;
    last_name: string;
    created_at: string;
    phones: Array<Phone>;
}
