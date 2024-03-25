export const DIRECTIONS = {
    DOWN: 'down',
    LEFT: 'left',
    RIGHT: 'right',
    UP: 'up',
};

class Gestures{

    async swipe(direction: typeof DIRECTIONS[keyof typeof DIRECTIONS]){
        await driver.execute('mobile: scroll', {'direction': direction});
        
        // Add a pause, just to make sure the swipe is done
        await driver.pause(1000);
    }
}


export default new Gestures();