const Sun = require('./modules/sun');
const Flower = require('./modules/flower');
const SugarBird = require('./modules/sugar-bird');

const sun = new Sun();

const flowers = [];

for (let number = 1; number <= 10; number += 1) {

    const flower = new Flower(sun, number);
    flowers.push(flower);

}

const sugarbird = new SugarBird(sun, flowers, 'sweety');

let loopInterval = 0;

const loopBody = () => {

    let nectarTotal = 0;

    flowers.forEach((flower) => {

        nectarTotal += flower.nectar;

    });

    if (nectarTotal === 0) {
        console.log('No more nectar! Finishing application...');
        clearInterval(loopInterval);
        return;
    }

    // moves one hour
    sun.tick();

}

const loopPeriod = 0; // milliseconds

// loops until there is no nectar left in flowers
loopInterval = setInterval(loopBody, loopPeriod);