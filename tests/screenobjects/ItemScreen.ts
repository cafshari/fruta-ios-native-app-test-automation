import AppScreen from './AppScreen.js';

const SELECTORS = {
    //doesn't have accessibility id
    SCREEN: '-ios predicate string:name CONTAINS " " AND type == "XCUIElementTypeNavigationBar"',
};

class ItemScreen extends AppScreen {
    constructor () {
        super(SELECTORS.SCREEN);
    }

    get screen () {return $(SELECTORS.SCREEN);}
    get addToFavorites () {return $('~Add to Favorites');}
    get removeFromFavorites () {return $('~Remove from Favorites');}
    get returnToMenuButton () {return $('-ios class chain:**/XCUIElementTypeButton[`name == "Menu"`][2]');}
    get ingredientsHeader () {return $('~Ingredients');}
    get ingredient_Results () {return $$('-ios predicate string:type == "XCUIElementTypeButton" AND name CONTAINS "Ingredient"');}

    async addItemToFavorites(){
        await this.addToFavorites.click();
    }

    async returnToMenu() {
        await this.returnToMenuButton.click();
    }
    
}

export default new ItemScreen();
