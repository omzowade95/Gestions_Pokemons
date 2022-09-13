import { Component, OnInit } from '@angular/core';
import {Pokemon} from "./model/pokemon";
import {POKEMONS} from "./mock/mock-pokemon";

@Component({
  selector: 'app-root',
  template: `<h1> Liste des Pokémons </h1>`
})
export class AppComponent implements OnInit{
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit(): void {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(pokemon: Pokemon): void{
    console.log(`Vous avez cliqué sur le pokemon : ${pokemon.name}`);
  }
}
