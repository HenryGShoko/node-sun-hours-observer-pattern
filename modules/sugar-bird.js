const TIME_DAY = 1;
const TIME_NIGHT = 2;

const randomInteger = (range) => {

    const space = range * range;
    const random = Math.trunc(Math.random() * space);

    return random % range;

};

class SugarBird {

    constructor(sun, flowers, name) {
        this.flowers = flowers;
        this.name = name;
        this.sleeping = true;

        const listenerDayStart = this.listenDayStart.bind(this);
        const listenerDayEnd = this.listenDayEnd.bind(this);
        const listenerHourChange = this.listenHourChange.bind(this);

        sun.onDayStart(listenerDayStart);
        sun.onDayEnd(listenerDayEnd);
        sun.onHourChange(listenerHourChange);
    }

    listenDayStart() {

        // the day start wakes up the sugarbird
        this.sleeping = false;

        const { name } = this;

        console.log(`Sugarbird '${ name }' is now awake.`);

    }

    listenDayEnd() {

        // the sugarbird goes to sleep when the day ends
        this.sleeping = true;

        const { name } = this;

        console.log(`Sugarbird '${ name }' is now sleeping.`);

    }

    listenHourChange() {

        const { flowers, sleeping, name } = this;

        if (sleeping) {
            return;
        }

        let hasFed = false;

        const vetos = new Set();

        while (!hasFed) {

            const index = randomInteger(flowers.length);

            if (vetos.has(index)) {
                continue;
            }

            vetos.add(index);

            const flower = flowers[index];

            const { number } = flower;

            console.log(`Sugarbird '${ name }' trying to feed on flower #${ number }.`);

            hasFed = flower.feed();

            if (!hasFed) {

                console.log(`Sugarbird '${ name }' failed to feed on flower #${ number }.`);

            } else {

                console.log(`Sugarbird '${ name }' fed on flower #${ number }.`);

            }

        }

    }

}

module.exports = SugarBird;