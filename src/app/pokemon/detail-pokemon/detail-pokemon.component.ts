import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Pokemon} from "../model/pokemon";
import {PokemonService} from "../services/pokemon.service";

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonList = this.pokemonService.getPokemonList();
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

    if(pokemonId)
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    else
      this.pokemon = undefined;
  }

  goToPokemonList(): void{
    this.router.navigate(['/pokemons']);
  }

  goToEditPokemon(pokemon: Pokemon): void{
    this.router.navigate(['/edit/pokemon',pokemon.id]);
  }

}
