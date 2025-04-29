import type { Component } from "solid-js";
import { FaRegularTrashCan } from 'solid-icons/fa'

interface FavoritePokemon {
    name: string;
    id: number;
    deletePokemon: (id: number) => void;
}

export const PokemonFavoriteCard: Component<FavoritePokemon> = (props) => {
    const id = props.id;
    const name = props.name;
    const deletePokemon = props.deletePokemon;
    const url = `/pokemons/${name}`;
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;


    return (
        <div class="rounded justify-center flex flex-col items-center border-sky-600 relative p-3 m-3 border border-azul-500 text-white hover:scale-102 transition-all duration-200">
            <button
                class="absolute top-2 right-2 text-white hover:text-red-500 cursor-pointer hover:scale-110 transition-all duration-200"
                onClick={() => deletePokemon(id)}
            >
                <FaRegularTrashCan />
            </button>
            <a href={url}>
                <img
                    src={imageUrl}
                    class="w-80"
                    style={`view-transition-name: ${name}-image;`}
                />
            </a>

            <span class="text-blue-100 text-sm capitalize">#{id} {name}</span>
        </div>
    )
}