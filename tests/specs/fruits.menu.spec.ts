import TabBar from '../screenobjects/components/TabBar.js';
import MenuScreen from '../screenobjects/MenuScreen.js';
import FavoritesScreen from '../screenobjects/FavoritesScreen.js';
import ItemScreen from '../screenobjects/ItemScreen.js';

describe('WebdriverIO and Appium, when interacting with the Fruta app,', () => {
    beforeEach(async () => {
        console.log('inside beforeEach (doing nothing, just for demonstration)');
    });

    it('should be able to view Menu screen', async () => {
        await TabBar.openMenu();
        await MenuScreen.waitForIsShown(true);
    }),
    it('should be able to add an item as a favorite', async () => {
        await TabBar.openMenu();
        await MenuScreen.waitForIsShown(true);
        await MenuScreen.tapOnFirstItem();
        await ItemScreen.addItemToFavorites();
        await expect(ItemScreen.removeFromFavorites).toBeDisplayed();
        await ItemScreen.returnToMenu();
        await MenuScreen.waitForIsShown();

    }),
    it('should be able to search for an item', async () => {
        
    })
    ;
});
