class Sun {

    constructor() {
        this.hour = 0;
        this.listenersDayStart = [];
        this.listenersDayEnd = [];
        this.listenersHourChange = [];
    }

    onDayStart(listener) {
        this.listenersDayStart.push(listener);
    }

    onDayEnd(listener) {
        this.listenersDayEnd.push(listener);
    }

    onHourChange(listener) {
        this.listenersHourChange.push(listener);
    }

    tick() { // moves the time one hour forward

        const emitEvent = (listener) => {

            setTimeout(listener);

        };

        this.hour = (this.hour + 1) % 24;

        console.log(`The sun say it's ${ this.hour } hour(s) now.`);

        if (this.hour === 6) { // the day has started

            console.log('The sun says that the day has started.');
            this.listenersDayStart.forEach(emitEvent);

        }

        if (this.hour === 18) { // the day has ended

            console.log('The sun says that the day has ended.');
            this.listenersDayEnd.forEach(emitEvent);

        }

        // one hour has passed
        this.listenersHourChange.forEach(emitEvent);

    }

}

module.exports = Sun;