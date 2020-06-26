import {
  platesRestrictedByDate,
  timeIsInRestriction,
} from "../src/lib/predictorSettings";

import Predictor from "../src/predictor.js";

describe("a car can be on the road", () => {
  it("gets the plate number allowed on a certain day", () => {
    const date = "2020/06/29";

    const plates = platesRestrictedByDate(date);

    expect(plates).toEqual([1, 2]);
  });

  it("tells if time is in morning restriction interval", () => {
    const time = "7:15:05";

    const isInMorningRestriction = timeIsInRestriction(time);

    expect(isInMorningRestriction).toBeTruthy();
  });
  it("tells if time is not in morning restriction interval", () => {
    const time = "10:35:05";

    const isInMorningRestriction = timeIsInRestriction(time);

    expect(isInMorningRestriction).toBeFalsy();
  });

  it("tells if time is in afternoon restriction interval", () => {
    const time = "16:45:15";

    const isInMorningRestriction = timeIsInRestriction(time);

    expect(isInMorningRestriction).toBeTruthy();
  });

  it("tells if time is not in afternoon restriction interval", () => {
    const time = "13:55:20";

    const isInMorningRestriction = timeIsInRestriction(time);

    expect(isInMorningRestriction).toBeFalsy();
  });

  it("tells if plate is restricted on a certain date", () => {
    const date = "2020/06/29";
    const carPlate = "PM2-7821";

    const predictor = new Predictor(carPlate, date);

    const isRestricted = predictor.plateIsRestricted();

    expect(isRestricted).toBeTruthy();
  });

  it("tells if plate is not restricted on a certain date", () => {
    const date = "2020/06/29";
    const plate = "P67-9874";
    const predictor = new Predictor(plate, date);
    const isRestricted = predictor.plateIsRestricted();

    expect(isRestricted).toBeFalsy();
  });

  it("tells car can be on the road", () => {
    const carPlate = "P423-357";
    const date = "2020/06/30";
    const time = "18:24:56";

    const predictor = new Predictor(carPlate, date, time);

    const canBeOnRoad = predictor.carCanBeOnRoad();

    expect(canBeOnRoad.canBe).toBeTruthy();
    expect(canBeOnRoad.message).toBe(
      `Great! The vehicle with plate ${carPlate} is allowed to be on road.`
    );
  });

  it("tells car can not be on the road", () => {
    const carPlate = "P462-274";
    const date = "2020/06/30";
    const time = "7:24:56";

    const predictor = new Predictor(carPlate, date, time);

    const canBeOnRoad = predictor.carCanBeOnRoad();

    expect(canBeOnRoad.canBe).toBeFalsy();
    expect(canBeOnRoad.message).toBe(
      `Oh No! The vehicle with plate ${carPlate} is not allowed to be on road.`
    );
  });

  it("tells car can be on the road in pico y placa time", () => {
    const carPlate = "P713-453";
    const date = "2020/06/30";
    const time = "14:54:26";

    const predictor = new Predictor(carPlate, date, time);

    const canBeOnRoad = predictor.carCanBeOnRoad();

    expect(canBeOnRoad.canBe).toBeTruthy();
    expect(canBeOnRoad.message).toBe(
      `Great! The vehicle with plate ${carPlate} is allowed to be on road.`
    );
  });
});
