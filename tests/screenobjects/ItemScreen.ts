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
    get buyWithApplePay () {return $('~Buy with Apple Pay');}
    get thankYouForOrder_message () {return $('~THANK YOU FOR YOUR ORDER!');}    //check for visibility
    get smoothieReady_message () {return $('~YOUR SMOOTHIE IS READY!');}    //check for visibility

    async addItemToFavorites(){
        await this.addToFavorites.click();
    }

    async buyItem(){
        await this.buyWithApplePay.click();
    }

    async returnToMenu() {
        await this.returnToMenuButton.click();
    }

}

export default new ItemScreen();
