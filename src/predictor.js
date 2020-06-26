import {
  platesRestrictedByDate,
  timeIsInRestriction,
} from "./lib/predictorSettings";

class Predictor {
  constructor(carPlate, date, time = null) {
    this.carPlate = carPlate;
    this.date = date;
    this.time = time;
  }

  plateIsRestricted() {
    const plateLastDigit = this.carPlate.substring(
      this.carPlate.length - 1,
      this.carPlate.length
    );

    const plates = platesRestrictedByDate(this.date);

    return plates.includes(Number(plateLastDigit));
  }

  __notOnRoadResponse() {
    return {
      canBe: false,
      message: `Oh No! The vehicle with plate ${this.carPlate} is not allowed to be on road.`,
    };
  }

  __onRoadResponse() {
    return {
      canBe: true,
      message: `Great! The vehicle with plate ${this.carPlate} is allowed to be on road.`,
    };
  }

  carCanBeOnRoad() {
    if (this.plateIsRestricted(this.carPlate, this.date)) {
      if (timeIsInRestriction(this.time)) {
        return this.__notOnRoadResponse();
      } else {
        return this.__onRoadResponse();
      }
    }
    return this.__onRoadResponse();
  }
}

export default Predictor;
