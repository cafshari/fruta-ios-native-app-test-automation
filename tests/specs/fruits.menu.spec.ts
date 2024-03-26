import TabBar from '../screenobjects/components/TabBar.js';
import MenuScreen from '../screenobjects/MenuScreen.js';
import ItemScreen from '../screenobjects/ItemScreen.js';
import Gestures, { DIRECTIONS } from '../helpers/Gestures.js';

describe('WebdriverIO and Appium, when interacting with the Fruta app,', () => {
    beforeEach('restart app', async () => {
        await driver.execute('mobile: terminateApp', {'bundleId': 'com.example.apple-samplecode.fruta'});
        await driver.execute('mobile: launchApp', {'bundleId': 'com.example.apple-samplecode.fruta'});
    });

    it('should be able to view Menu screen', async () => {
        //await TabBar.openMenu();
        await MenuScreen.waitForIsShown(true);
    }),
    it('should be able to add an item as a favorite', async () => {
        //await TabBar.openMenu();
        await MenuScreen.waitForIsShown(true);
        await MenuScreen.tapOnFirstItem();
        await ItemScreen.addItemToFavorites();
        await expect(ItemScreen.removeFromFavorites).toBeDisplayed();
        await ItemScreen.returnToMenu();
        await MenuScreen.waitForIsShown();

    }),
    it('should be able to search for an item', async () => {
        //await TabBar.openMenu();
        await MenuScreen.waitForIsShown(true);
        await MenuScreen.searchField.setValue("berry");

        const berry_searchResults = await MenuScreen.berry_searchResults;
        await expect(berry_searchResults).toBeElementsArrayOfSize(3);   //Blueberry, Raspberry, Strawberry (results will not change)

        await berry_searchResults.forEach(async result => {
            await expect(result).toHaveAttribute('name', expect.stringContaining('berry'));

        });
    }),
    it('should be able to view ingredients of an item', async () => {
        //await TabBar.openMenu();
        await MenuScreen.waitForIsShown(true);
        await MenuScreen.tapOnFirstItem();
        await Gestures.swipe(DIRECTIONS.DOWN);
        
        const ingredients = await ItemScreen.ingredient_Results;
        await ingredients.forEach(async (ingredient, index) => {
            let ing = await ingredient.getAttribute('name');
            console.log(`ingredient ${index}: ${ing}`); //print the list of ingredients in order to potentially reveal anything abnormal
        });
        
        await expect(ingredients).toBeElementsArrayOfSize({ gte: 2 });  //every item has at least 2 ingredients
    })
    it('should be able to order an item', async () => {

        await MenuScreen.waitForIsShown(true);
        await MenuScreen.tapOnFirstItem();
        await ItemScreen.buyItem();

        expect(await ItemScreen.thankYouForOrder_message).toBeDisplayed();
        
        //'YOUR SMOOTHIE IS READY!' message appears automatically after 5 seconds. 
        //we'll wait 10 seconds and keep checking every 2.5
        await expect(await ItemScreen.smoothieReady_message).toBeDisplayed({'wait': 10000, 'interval': 2500});
    })
    ;
});
