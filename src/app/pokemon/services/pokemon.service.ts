import { Injectable } from '@angular/core';
import {Pokemon} from "../model/pokemon";
import {HttpClient, HttpHeaders, HttpParamsOptions} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable()
export class PokemonService {

  constructor(private httpClient: HttpClient) {
  }

  getPokemonList(): Observable<Pokemon[]>{
    return this.httpClient.get<Pokemon[]>('api/pokemons').pipe(
      tap((pokemonList) => this.log(pokemonList)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getPokemonById(pokemonId: number): Observable<Pokemon | undefined>{
    return this.httpClient.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, undefined))
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'content-Type': 'application/json'})
    };

    return this.httpClient.put('api/pokemons',pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deletePokemon(pokemon: Pokemon): Observable<null>{
    return this.httpClient.delete<null>(`api/pokemons/${pokemon.id}`).pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, null))
    );
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon>{
    const httpOptions = {
      headers: new HttpHeaders({ 'content-Type': 'application/json'})
    };

    return this.httpClient.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, null))
    );
  }

  getPokemonTypeList(): string[]{
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy'];
  }

  private log(response: any): void {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any){
    console.error(error);
    return of(errorValue);
  }
}
