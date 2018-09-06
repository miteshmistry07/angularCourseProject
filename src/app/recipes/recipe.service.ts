import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    
    constructor(private slService: ShoppingListService) {}

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel', 
            'A super tasty schnitzel', 
            'https://upload.wikimedia.org/wikipedia/commons/a/ae/Wiener-Schnitzel02.jpg',
            [   
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Big Fat Burger',
            'What else can you say!', 
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Chicken_salad_sandwich_01.jpg/2560px-Chicken_salad_sandwich_01.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 3)
            ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

}