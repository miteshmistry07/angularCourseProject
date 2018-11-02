import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    
    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (let ingred of ingredients) {
        //     this.addIngredient(ingred);
        // }
        // ^^ would cause alot of events to be emitted and for larger apps not suitable

        this.ingredients.push(...ingredients); //turns array into a list of elements
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}