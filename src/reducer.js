import carData from "./assets/dealershipData";

export const initialState = {
  cars: carData,
  prevCars: null,
  option: [],
  prevOption: null
};

export default function reducer(state, action) {
  switch (action.type) {
    case "HAS_SUN_ROOF":
      return {
        ...state,
        cars: state.cars.filter(car => car.hasSunroof),
        prevCars: state.cars,
        option: [...state.option, action.type],
        prevOption: state.option
      };
    case "IS_FOUR_WHEEL":
      return {
        ...state,
        cars: state.cars.filter(car => car.isFourWheelDrive),
        prevCars: state.cars,
        option: [...state.option, action.type],
        prevOption: state.option
      };
    case "HAS_LOW_MILES":
      return {
        ...state,
        cars: state.cars.filter(car => car.hasLowMiles),
        prevCars: state.cars,
        option: [...state.option, action.type],
        prevOption: state.option
      };
    case "HAS_POWER_WINDOWS":
      return {
        ...state,
        cars: state.cars.filter(car => car.hasPowerWindows),
        prevCars: state.cars,
        option: [...state.option, action.type],
        prevOption: state.option
      };
    case "HAS_NAVIGATION":
      return {
        ...state,
        cars: state.cars.filter(car => car.hasNavigation),
        prevCars: state.cars,
        option: [...state.option, action.type],
        prevOption: state.option
      };
    case "HAS_HEATED_SEATS":
      return {
        ...state,
        cars: state.cars.filter(car => car.hasHeatedSeats),
        prevCars: state.cars,
        option: [...state.option, action.type],
        prevOption: state.option
      };
    case "COLOR":
      return {
        ...state,
        cars: state.cars.filter(car => car.color == action.color),
        prevCars: state.cars,
        option: [...state.option, action.type, action.color],
        prevOption: state.option
      };
    case "UNDO":
      return {
        ...state,
        cars: state.prevCars,
        prevCars: null,
        option: state.prevOption,
        prevOption: null
      };
    case "RESET":
      return {
        ...state,
        cars: initialState.cars,
        prevCars: null,
        option: initialState.option,
        prevOption: null
      };
    default:
      return state;
  }
}
