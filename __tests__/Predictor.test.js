import {
  platesResctrictedByDate,
  plateIsRestricted,
  timeIsInRestriction,
  carCanBeOnRoad,
} from "../src/predictor";
import { getDayName, timeIsInInterval } from "../src/lib/dateManager";

describe("a car can be on the road", () => {
  it("gets the plate number allowed on a certain day", () => {
    const date = "2020/06/29";

    const plates = platesResctrictedByDate(date);

    expect(plates).toEqual([1, 2]);
  });

  it("tells if plate is restricted on a certain date", () => {
    const date = "2020/06/29";
    const plate = "PM2-7821";

    const isRestricted = plateIsRestricted(plate, date);

    expect(isRestricted).toBeTruthy();
  });
  it("tells if plate is not restricted on a certain date", () => {
    const date = "2020/06/29";
    const plate = "P67-9874";

    const isRestricted = plateIsRestricted(plate, date);

    expect(isRestricted).toBeFalsy();
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

  it("tells car can be on the road", () => {
    const picoYPlacaInfo = {
      carPlate: "P423-357",
      date: "2020/06/30",
      time: "18:24:56",
    };

    const canBeOnRoad = carCanBeOnRoad(picoYPlacaInfo);
    expect(canBeOnRoad.canBe).toBeTruthy();
    expect(canBeOnRoad.message).toBe(
      `Great! The vehicle with plate ${picoYPlacaInfo.carPlate} can travel now.`
    );
  });

  it("tells car can not be on the road", () => {
    const picoYPlacaInfo = {
      carPlate: "P462-274",
      date: "2020/06/30",
      time: "7:24:56",
    };

    const canBeOnRoad = carCanBeOnRoad(picoYPlacaInfo);
    expect(canBeOnRoad.canBe).toBeFalsy();
    expect(canBeOnRoad.message).toBe(
      `Oh No! The vehicle with plate ${picoYPlacaInfo.carPlate} can not travel now.`
    );
  });

  it("tells car can be on the road in pico y placa time", () => {
    const picoYPlacaInfo = {
      carPlate: "P713-453",
      date: "2020/06/30",
      time: "14:54:26",
    };

    const canBeOnRoad = carCanBeOnRoad(picoYPlacaInfo);
    expect(canBeOnRoad.canBe).toBeTruthy();
    expect(canBeOnRoad.message).toBe(
      `Great! The vehicle with plate ${picoYPlacaInfo.carPlate} can travel now.`
    );
  });
});

describe("Date management", () => {
  it("gets the name of a day", () => {
    const date = "2020/06/25";
    const dayName = getDayName(date);
    expect(dayName).toBe("thursday");
  });
  it("tells if time belongs to an interval", () => {
    const time = "08:30:25";
    const initialTime = "07:00:00";
    const endTime = "09:00:00";

    const inInterval = timeIsInInterval(time, { initialTime, endTime });

    expect(inInterval).toBeTruthy();
  });

  it("tells if time does not belong to an interval", () => {
    const time = "23:45:02";
    const initialTime = "07:00:00";
    const endTime = "23:45:00";

    const inInterval = timeIsInInterval(time, { initialTime, endTime });

    expect(inInterval).toBeFalsy();
  });
});
