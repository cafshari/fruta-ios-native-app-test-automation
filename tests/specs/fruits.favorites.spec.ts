import TabBar from '../screenobjects/components/TabBar.js';
import MenuScreen from '../screenobjects/MenuScreen.js';
import FavoritesScreen from '../screenobjects/FavoritesScreen.js';
import ItemScreen from '../screenobjects/ItemScreen.js';

describe('WebdriverIO and Appium, when interacting with the Fruta app,', () => {
    beforeEach(async () => {
        console.log('inside beforeEach (doing nothing, just for demonstration)');
    });

    it('should be able to view Favorites screen', async () => {

        await TabBar.openFavorites();
        await FavoritesScreen.waitForIsShown(true);
    })
    ;
});
