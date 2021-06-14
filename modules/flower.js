class Flower {

    constructor(sun, number) {
        this.open = false;
        this.number = number;
        this.nectar = 10;

        const listenerDayStart = this.listenDayStart.bind(this);
        const listenerDayEnd = this.listenDayEnd.bind(this);

        sun.onDayStart(listenerDayStart);
        sun.onDayEnd(listenerDayEnd);
    }

    listenDayStart() {

        const { number } = this;

        this.open = true;
        console.log(`The flower #${ number } is now open.`);

    }

    listenDayEnd() {

        const { number } = this;

        this.open = false;
        console.log(`The flower #${ number } is now closed.`);

    }

    feed() {

        const { nectar, open, number } = this;

        if (!open) {

            console.log(`The flower #${ number } is closed, can't feed from it.`);
            return false;

        }

        if (nectar === 0) {

            console.log(`There's no nectar on flower #${ number }, can't feed from it.`);
            return false;

        }

        this.nectar = nectar - 1;

        console.log(`A sugarbird has picked one nectar from flower #${ number }`);
        return true;

    }

}

module.exports = Flower;