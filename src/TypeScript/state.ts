type CarType = {
    model: string
    year: number
    on: boolean
    turnOn: () => void
    rename: (model: string) => void
}

let car: CarType = {
    model: 'Reno Stepway',
    year: 2016,
    on: false,
    turnOn() {
        this.on = true;
    },
    rename(model) {
        this.model = model;
    }
}

export default 1;
