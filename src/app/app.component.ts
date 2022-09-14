import { Component, OnInit } from '@angular/core';
import {Pokemon} from "./model/pokemon";
import {POKEMONS} from "./mock/mock-pokemon";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string): void{
    const id: number = +pokemonId;
    const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);

    if(pokemon) {
      console.log(`Vous avez cliqué sur le pokemon : ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    }
    else {
      console.log("Vous avez demandé un pokemon qui n'existe pas");
      this.pokemonSelected = pokemon;
    }
  }
}
