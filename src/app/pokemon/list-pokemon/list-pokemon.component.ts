import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../model/pokemon";
import {Router} from "@angular/router";
import {PokemonService} from "../services/pokemon.service";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit{
  pokemonList: Pokemon[];

  constructor(private router: Router,
              private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe(
        pokemonList => this.pokemonList = pokemonList
    );
  }

  goToPokemon(pokemon: Pokemon): void {
    this.router.navigate(['/pokemon', pokemon.id]);
  }
}
