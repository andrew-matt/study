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

interface IGarage {
    addCar: (car: CarType) => void
    logAllCarsNames: () => void
    getAllCars: () => CarType[]
}

let createGarage = (): IGarage => {
    let _cars: CarType[] = [];

    return {
        addCar(car) {
            _cars.push(car);
        },
        logAllCarsNames() {
            console.log('Cars in the garage: ');
            _cars.forEach(c => console.log(c.model));
        },
        getAllCars() {
            return _cars;
        }
    }
}



export default 1;
