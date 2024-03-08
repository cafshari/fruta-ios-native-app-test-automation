import AppScreen from './AppScreen.js';

const SELECTORS = {
    //doesn't have accessibility id
    SCREEN: '-ios predicate string:name == "Favorites" AND label == "Favorites" AND value == "Favorites"',
};

class FavoritesScreen extends AppScreen {
    constructor () {
        super(SELECTORS.SCREEN);
    }

    get screen () {return $(SELECTORS.SCREEN);}

    private get favoritesSearchBar () {return $('~Search');}

    async tapSearchBar() {
        (await this.favoritesSearchBar).click();
    }
}

export default new FavoritesScreen();
