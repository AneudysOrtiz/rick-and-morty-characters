import axios from "axios";

export const useHttp = () => {
    const baseUrl = 'https://rickandmortyapi.com/api/character';

    const getCharacters = async () => {
        return (await axios.get(baseUrl)).data;
    }

    return { getCharacters };
}
