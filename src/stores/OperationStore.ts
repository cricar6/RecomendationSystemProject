import { observable, action, computed } from 'mobx';
import { store } from './Stores';
import { array } from 'prop-types';

export class OperationStore {

    @observable titlesForFood: any = ["Mexicana", "Italiana", "Japonesa", "Española", "India"];
    @observable titlesForRestaurant: any = ["Precio", "Decoracion", "Variedad"];

    @observable titlesForMexicanIngredients: any = ["Maduro", "Maiz", "Salami", "Jalapeños"];
    @observable titlesForItalianIngredients: any = ["Tomate", "Queso", "Carne", "Peperoni"];
    @observable titlesForJapaneseIngredients: any = ["Cebolla", "Oregano", "Albahaca", "Berenjena"];
    @observable titlesForSpainIngredients: any = ["Aceitunas", "Jamon", "Pimenton", "Mariscos"];
    @observable titlesForIndianIngredients: any = ["Albahaca", "Rugula", "Pimenton", "Tomate"];

    @observable userArray: any = [];
    @observable userArrayBackup: any = [];
    @observable foodArray: any = [];
    @observable mexicanIngredientsArray: any = [];
    @observable italianIngredientsArray: any = [];
    @observable japaneseIngredientsArray: any = [];
    @observable spainIngredientsArray: any = [];
    @observable indianIngredientsArray: any = [];
    @observable restaurantArray: any = [];

    @observable actualUserID: string = "";
    @observable actualPerson: any = {};

    @observable k: number = 4;

    @observable foodHood: any = [];

    @observable topFoodName: string = "Comida";
    @observable topFoodPunctation: number = 0;
    @observable topIngredientsArray: any = [];
    @observable topRestaurantName: string = "Comida";
    @observable topRestaurantPunctation: number = 0;

    @action getSelectedPersonData() {
        this.getFoodHood(store.operations.actualUserID, store.operations.foodArray, store.operations.k);
        this.generateFoodResults();
        this.generateIngredientResults();
        this.generateRestaurantResults();

        this.actualPerson = {
            id: this.foodHood[this.foodHood.length - 1].id,
            name: this.foodHood[this.foodHood.length - 1].name,
            image: this.foodHood[this.foodHood.length - 1].image
        }

        console.log(this.actualPerson.name, "This is the user selected")
    }

    @action generateUserArray() {
        store.data.users.forEach((element: any) => {
            const nameTemp = element[0];
            const idTemp = element[1];
            const imgTemp = element[2];


            let user = {
                name: nameTemp,
                id: idTemp,
                image: imgTemp
            };

            this.userArray.push(user);
            this.userArrayBackup.push(user);
        });

        console.log(this.userArray);
    }

    @action numberifyArray(array: any) {
        let finalArray: any = [];

        array.forEach((element: any) => {
            let tempArray: any = [];

            element.forEach((elemento: any) => {
                let elementoInt = parseInt(elemento);
                tempArray.push(elementoInt);
            });

            finalArray.push(tempArray);
        });

        return finalArray;
    }

    @action calculateCosSim(array: any, array0: any) {

        let aibiArray = [];
        let aPotenciedArray = [];
        let bPotenciedArray = [];

        for (let index = 0; index < array.length; index++) {
            const a = array[index];
            const b = array0[index];

            aibiArray.push(a * b);
            aPotenciedArray.push(Math.pow(a, 2));
            bPotenciedArray.push(Math.pow(b, 2));
        }


        let aibi = aibiArray.reduce((a, b) => a + b, 0);
        let aPotencied = aPotenciedArray.reduce((a, b) => a + b, 0);
        let bPotencied = bPotenciedArray.reduce((a, b) => a + b, 0);

        return aibi / ((Math.sqrt(aPotencied)) * (Math.sqrt(bPotencied)));
    }
    @action getFoodHood(userID: string, arrayToFind: any, k: number) {

        let thisUserIndex = this.userArray.findIndex((e: any) => {
            return e.id == userID;
        });

        let userSimilaritiesUserArray: any = [];
        let userSimilaritiesArray: any = [];
        let userSimilaritiesArrayBackUp: any = [];

        for (let index = 0; index < arrayToFind.length; index++) {
            const element = arrayToFind[index];
            let cosineSimilarity = this.calculateCosSim(element, arrayToFind[thisUserIndex]);
            let name = this.userArray[index].name;
            let id = this.userArray[index].id;
            let img = this.userArray[index].image;


            let user = {
                name: name,
                id: id,
                image: img,
                index: index,
                cosineSimilarity: cosineSimilarity,
            }
            userSimilaritiesArray.push(cosineSimilarity);
            userSimilaritiesArrayBackUp.push(cosineSimilarity);
            userSimilaritiesUserArray.push(user);
        }

        console.log(userSimilaritiesUserArray);

        userSimilaritiesArray.sort();

        console.log(userSimilaritiesArray);

        while (userSimilaritiesArray.length != k + 1) {
            userSimilaritiesArray.shift();
        }

        this.foodHood = [];

        userSimilaritiesArray.forEach((element: any) => {


            let index = userSimilaritiesArrayBackUp.findIndex((e: any) => {
                return e == element;
            });

            this.foodHood.push(userSimilaritiesUserArray[index]);
        });

        console.log(userSimilaritiesArray);

        console.log(this.foodHood);
    }

    @action initializeVariables() {
        this.foodArray = this.numberifyArray(store.data.foods);
        this.mexicanIngredientsArray = this.numberifyArray(store.data.ingredientsMexican);
        this.italianIngredientsArray = this.numberifyArray(store.data.ingredientsItalian);
        this.japaneseIngredientsArray = this.numberifyArray(store.data.ingredientsJapanese);
        this.spainIngredientsArray = this.numberifyArray(store.data.ingredientsSpain);
        this.indianIngredientsArray = this.numberifyArray(store.data.ingredientsIndian);
        this.restaurantArray = this.numberifyArray(store.data.restaurants);
    }

    @action sortArray(array: any) {
        array.sort((a: any, b: any) => {
            if (a.value < b.value)
                return -1;
            if (a.value > b.value)
                return 1;
            return 0;
        });

        return array;
    }

    @action getTopSums(arrayToTop: any, type: string, hood: any) {

        let topUserArray: any = [];
        let hoodTopArray: any = [];
        let topSums: any = [];

        hood.forEach((element: any) => {
            let user = hood.find((elemento: any) => {
                return element.index == elemento.index;
            });

            if (type == "foods") {
                user.foods = arrayToTop[user.index];
                hoodTopArray.push(user.foods)
            } else if (type == "ingredients") {
                user.ingredients = arrayToTop[user.index];
                hoodTopArray.push(user.ingredients)
            } else if (type == "restaurants") {
                user.restaurants = arrayToTop[user.index];
                hoodTopArray.push(user.restaurants)
            }
            topUserArray.push(user);
        });

        for (let i = 0; i < hoodTopArray[0].length; i++) {
            let topToSumArray = []
            for (let j = 0; j < hoodTopArray.length; j++) {
                let topVal = hoodTopArray[j][i];
                //check if a value is 0 and delete all the line
                topToSumArray.push(topVal);
            }

            let topFinalSum = topToSumArray.reduce((a, b) => a + b, 0);
            topSums.push(topFinalSum);
        }

        return topSums;
    }

    @action generateFoodResults() {

        let foodSums = this.getTopSums(this.foodArray, "foods", this.foodHood);

        let foodSumArray: any = [];

        for (let index = 0; index < foodSums.length; index++) {

            let food = {
                name: this.titlesForFood[index],
                value: foodSums[index]
            }

            foodSumArray.push(food);
        }

        foodSumArray = this.sortArray(foodSumArray);

        this.topFoodName = foodSumArray[foodSumArray.length - 1].name;
        this.topFoodPunctation = (foodSumArray[foodSumArray.length - 1].value / ((this.k + 1) * 10)) * 5;

        console.log(this.topFoodName + " " + this.topFoodPunctation, "Name and Punctuation of Food");
    }

    @action getIngredientTop(ingredientSumArray: any) {
        let ingredientTop: any = [];

        for (let index = 1; index < 5; index++) {
            let element = ingredientSumArray[ingredientSumArray.length - (index)];

            let ingredient = {
                name: element.name,
                value: (element.value / ((this.k + 1) * 10)) * 5
            }
            ingredientTop.push(ingredient);
        }

        return ingredientTop;
    }

    @action generateIngredientResults() {

        let ingredientSums: any = [];
        let ingredientSumArray: any = [];

        if (this.topFoodName == "Mexicana")
            ingredientSums = this.getTopSums(this.mexicanIngredientsArray, "ingredients", this.foodHood);
        if (this.topFoodName == "Italiana")
            ingredientSums = this.getTopSums(this.mexicanIngredientsArray, "ingredients", this.foodHood);
        if (this.topFoodName == "Japonesa")
            ingredientSums = this.getTopSums(this.mexicanIngredientsArray, "ingredients", this.foodHood);
        if (this.topFoodName == "Española")
            ingredientSums = this.getTopSums(this.mexicanIngredientsArray, "ingredients", this.foodHood);
        if (this.topFoodName == "India")
            ingredientSums = this.getTopSums(this.mexicanIngredientsArray, "ingredients", this.foodHood);

        for (let index = 0; index < ingredientSums.length; index++) {
            let name = "";
            if (this.topFoodName == "Mexicana")
                name = this.titlesForMexicanIngredients[index];
            if (this.topFoodName == "Italiana")
                name = this.titlesForItalianIngredients[index];
            if (this.topFoodName == "Japonesa")
                name = this.titlesForJapaneseIngredients[index];
            if (this.topFoodName == "Española")
                name = this.titlesForSpainIngredients[index];
            if (this.topFoodName == "India")
                name = this.titlesForIndianIngredients[index];

            let ingredient = {
                name: name,
                value: ingredientSums[index]
            }

            ingredientSumArray.push(ingredient);
        }

        ingredientSumArray = this.sortArray(ingredientSumArray);
        let ingredientTop = this.getIngredientTop(ingredientSumArray);


        this.topIngredientsArray = ingredientTop;

        console.log(this.topIngredientsArray[0].name + " " + this.topIngredientsArray[0].value, "Best Ingredient and its punctuations");
        console.log(this.topIngredientsArray, "Array of the top of the Ingredients and their punctuations");
    }

    @action generateRestaurantResults() {
        let restaurantSums: any = [];
        let restaurantSumArray: any = [];

        restaurantSums = this.getTopSums(this.restaurantArray, "restaurants", this.foodHood);



        for (let index = 0; index < restaurantSums.length; index++) {

            let restaurant = {
                name: this.titlesForRestaurant[index],
                value: restaurantSums[index]
            }

            restaurantSumArray.push(restaurant);
        }

        restaurantSumArray = this.sortArray(restaurantSumArray);
        console.log(restaurantSumArray, "RESTAURANT SUMS");

        this.topRestaurantName = restaurantSumArray[restaurantSumArray.length - 1].name;
        this.topRestaurantPunctation = (restaurantSumArray[restaurantSumArray.length - 1].value / ((this.k + 1) * 10)) * 5;

        console.log(this.topRestaurantName + " " + this.topRestaurantPunctation, "Name and Importance of Restaurant Variable");

    }
}