import { useQuery } from "@tanstack/react-query";

export const usePokemon = () => {
    return useQuery({
        queryKey: ['pokemon'],
        queryFn: () => {
            return fetch('https://pokeapi.co/api/v2/pokemon?limit=5')
                .then(response => response.json())
        }
    })
}