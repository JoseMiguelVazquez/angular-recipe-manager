import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingListComponent } from './views/shopping-list/shopping-list.component';
import { RecipesComponent } from './views/recipes/recipes.component';
import { RecipeListComponent } from './views/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './views/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './views/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './views/shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './services/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './views/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './views/recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
