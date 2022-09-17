import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../model/pokemon";
import {Router} from "@angular/router";
import {debounceTime, distinctUntilChanged, map, Observable, Subject, switchMap} from "rxjs";
import {PokemonService} from "../services/pokemon.service";

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
})
export class SearchPokemonComponent implements OnInit {
  searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;

  constructor(private router: Router,
              private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term) => this.pokemonService.searchPokemonList(term))
    )
  }

  search(term: string): void{
    this.searchTerms.next(term);
  }

  goToDetailPokemon(pokemon: Pokemon): void{
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
}
