import AppScreen from './AppScreen.js';

const SELECTORS = {
    //doesn't have accessibility id
    SCREEN: '-ios class chain:**/XCUIElementTypeNavigationBar[`name == "Menu"`]',
};

class MenuScreen extends AppScreen {
    constructor () {
        super(SELECTORS.SCREEN);
    }

    get screen () {return $(SELECTORS.SCREEN);}
    get searchField () {return $('~Search');}
    private get firstItem () {return $('-ios class chain:**/XCUIElementTypeCollectionView[`name == "Sidebar"`]/XCUIElementTypeCell[1]');}
    get berry_searchResults () {return $$('-ios class chain:**/XCUIElementTypeButton[`name CONTAINS "berry" AND visible == 1`]');}

    async tapOnFirstItem(){
        await this.firstItem.click();
    }

    // async tapOnSearchField(){
    //     await this.searchField.click();
    // }

}

export default new MenuScreen();
