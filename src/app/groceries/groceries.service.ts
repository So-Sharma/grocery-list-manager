import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceriesService {

  constructor() { }

  groceryList = [
    { "name": "Bread", "category": "Baked" },
    { "name": "Mango", "category": "Fruits" },
    { "name": "Blueberries", "category": "Fruits" },
    { "name": "Asparagus", "category": "Vegetables" },
    { "name": "Broccoli", "category": "Vegetables" },
    { "name": "Carrots", "category": "Vegetables" },
    { "name": "Cauliflower", "category": "Vegetables" },
    { "name": "Celery", "category": "Vegetables" },
    { "name": "Cucumbers", "category": "Vegetables" },
    { "name": "Lettuce", "category": "Vegetables" },
    { "name": "Onions", "category": "Vegetables" },
    { "name": "Peppers", "category": "Vegetables" },
    { "name": "Potatoes", "category": "Vegetables" },
    { "name": "Squash", "category": "Vegetables" },
    { "name": "Apples", "category": "Fruits" },
    { "name": "Avocados", "category": "Fruits" },
    { "name": "Bananas", "category": "Fruits" },
    { "name": "Cherries", "category": "Fruits" },
    { "name": "Grapefruit", "category": "Fruits" },
    { "name": "Grapes", "category": "Fruits" },
    { "name": "Kiwis", "category": "Fruits" },
    { "name": "Oranges", "category": "Fruits" },
    { "name": "Peaches", "category": "Fruits" },
    { "name": "Nectarines", "category": "Fruits" },
    { "name": "Pears", "category": "Fruits" },
    { "name": "Butter", "category": "Dairy" },
    { "name": "Cottage cheese", "category": "Dairy" },
    { "name": "Milk", "category": "Dairy" },
    { "name": "Yogurt", "category": "Dairy" },
    { "name": "Sour cream", "category": "Dairy" },
    { "name": "Basil", "category": "Spices and Herbs" },
    { "name": "Black pepper", "category": "Spices and Herbs" },
    { "name": "Cilantro", "category": "Spices and Herbs" },
    { "name": "Cinnamon", "category": "Spices and Herbs" },
    { "name": "Garlic", "category": "Spices and Herbs" },
    { "name": "Mint", "category": "Spices and Herbs" },
    { "name": "Ginger", "category": "Spices and Herbs" },
    { "name": "Oregano", "category": "Spices and Herbs" },
    { "name": "Paprika", "category": "Spices and Herbs" },
    { "name": "Parsley", "category": "Spices and Herbs" },
    { "name": "Salt", "category": "Spices and Herbs" },
    { "name": "Bagels", "category": "Baked goods" },
    { "name": "Buns", "category": "Baked goods" },
    { "name": "Cake", "category": "Baked goods" },
    { "name": "Donuts", "category": "Baked goods" },
    { "name": "Pita bread", "category": "Baked goods" },
    { "name": "Cookies", "category": "Baked goods" },
    { "name": "Croissants", "category": "Baked goods" },
    { "name": "Wheat flour", "category": "Baked goods" },
    { "name": "Pancake mix", "category": "Baked goods" },
    { "name": "Sugar", "category": "Baked goods" },
    { "name": "White Rice", "category": "Grains, Pasta and Sides" },
    { "name": "Brown Rice", "category": "Grains, Pasta and Sides" },
    { "name": "Rice Noodles", "category": "Grains, Pasta and Sides" },
    { "name": "Wheat Germ", "category": "Grains, Pasta and Sides" },
    { "name": "Cracked Wheat", "category": "Grains, Pasta and Sides" },
    { "name": "Whole wheat pasta", "category": "Grains, Pasta and Sides" },
    { "name": "Cereal", "category": "Grains, Pasta and Sides" },
    { "name": "Frozen peas", "category": "Frozen Foods" },
    { "name": "Popsicles", "category": "Frozen Foods" },
    { "name": "Ice cream", "category": "Frozen Foods" },
    { "name": "Sorbet", "category": "Frozen Foods" },
    { "name": "Frozen corn", "category": "Frozen Foods" },
    { "name": "Salsa", "category": "Condiments and Dressings" },
    { "name": "Ketchup", "category": "Condiments and Dressings" },
    { "name": "Mayonnaise", "category": "Condiments and Dressings" },
    { "name": "Olive oil", "category": "Condiments and Dressings" },
    { "name": "Soy sauce", "category": "Condiments and Dressings" },
    { "name": "Crackers", "category": "Snacks" },
    { "name": "Popcorn", "category": "Snacks" },
    { "name": "Oatmeal", "category": "Snacks" },
    { "name": "Nuts", "category": "Snacks" },
    { "name": "Granola bars", "category": "Snacks" },
    { "name": "Aluminum foil", "category": "Household and Cleaning" },
    { "name": "Paper towels", "category": "Household and Cleaning" },
    { "name": "Plastic wrap", "category": "Household and Cleaning" },
    { "name": "Garbage bags", "category": "Household and Cleaning" },
    { "name": "Dishwasher soap", "category": "Household and Cleaning" }
]
getGroceryList() {
    return this.groceryList;
}
}