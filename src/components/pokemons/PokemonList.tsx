import { createSignal, For, type Component } from "solid-js";
import { PokemonFavoriteCard } from "./PokemonFavoriteCard";

interface FavoritePokemon {
    name: string;
    id: number;
}

const getPokemonsFromLocalStorage = () => {
    const pokemons: FavoritePokemon[] = JSON.parse(localStorage.getItem('favorite_pokemons') || '[]');
    return pokemons;
}

const savePokemonsToLocalStorage = (pokemons: FavoritePokemon[]) => {
    localStorage.setItem('favorite_pokemons', JSON.stringify(pokemons));
}

export const PokemonList: Component = () => {
    const [pokemons, setFavoritePokemons] = createSignal(getPokemonsFromLocalStorage());

    const deletePokemon = (id: number) => {
        savePokemonsToLocalStorage(pokemons().filter((pokemon) => pokemon.id !== id));
        setFavoritePokemons(getPokemonsFromLocalStorage());
    }

    return <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <For each={pokemons()} fallback={<p class='text-white w-100'>No hay pokemones favoritos</p>}>
            {
                (pokemon) => (
                    <PokemonFavoriteCard
                        id={pokemon.id}
                        name={pokemon.name}
                        deletePokemon={deletePokemon}
                    />
                )
            }
        </For>
    </div>

}