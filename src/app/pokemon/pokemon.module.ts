import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonTypeColorPipe} from "./pipes/pokemon-type-color.pipe";
import {BorderCardDirective} from "./directives/border-card.directive";
import {ListPokemonComponent} from "./list-pokemon/list-pokemon.component";
import {DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";
import {RouterModule, Routes} from "@angular/router";
import {PokemonService} from "./services/pokemon.service";
import {FormsModule} from "@angular/forms";
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { LoaderComponent } from './loader/loader.component';

const pokemonRoutes: Routes = [
    { path: 'pokemon/add', component: AddPokemonComponent },
    { path: 'edit/pokemon/:id', component: EditPokemonComponent },
    { path: 'pokemons', component: ListPokemonComponent },
    { path: 'pokemon/:id', component: DetailPokemonComponent },
];


@NgModule({
  declarations: [
      DetailPokemonComponent,
      ListPokemonComponent,
      PokemonTypeColorPipe,
      BorderCardDirective,
      PokemonFormComponent,
      EditPokemonComponent,
      AddPokemonComponent,
      SearchPokemonComponent,
      LoaderComponent
  ],
  imports: [
     CommonModule,
     FormsModule,
     RouterModule.forChild(pokemonRoutes)
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
