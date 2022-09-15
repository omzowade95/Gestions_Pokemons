import { Injectable } from '@angular/core';
import {Pokemon} from "../model/pokemon";
import {POKEMONS} from "../mock/mock-pokemon";

@Injectable()
export class PokemonService {

  getPokemonList(): Pokemon[]{
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon | undefined{
    return this.getPokemonList().find(pokemon => pokemonId == pokemonId);
  }

  getPokemonTypeList(): string[]{
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy'];
  }

}
