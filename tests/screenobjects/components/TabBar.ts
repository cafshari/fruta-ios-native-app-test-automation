export default class TabBar {

    static async openMenu () {
        //(await $('~Menu')).click();
        (await $('-ios class chain:**/XCUIElementTypeButton[`name == "Menu"`][1]')).click();
    }

    static async openFavorites() {
        (await $('~Favorites')).click();
    }
}
