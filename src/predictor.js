import { getDayName, timeIsInInterval } from "./lib/dateManager";
const platesResctrictedByDate = (date) => {
  const platesByDay = {
    monday: [1, 2],
    tuesday: [3, 4],
    wednesday: [5, 6],
    thursday: [7, 8],
    friday: [9, 0],
    saturday: [0, 1, 2, 3, 4, 5, 6],
    sunday: [0, 1, 2, 3, 4, 5, 6],
  };

  return platesByDay[getDayName(date)];
};

const plateIsRestricted = (plate, date) => {
  const plateLastDigit = plate.substring(plate.length - 1, plate.length);

  const plates = platesResctrictedByDate(date);

  return plates.includes(Number(plateLastDigit));
};

const timeIsInRestriction = (time) => {
  const morningRestrictionInterval = {
    initialTime: "07:00:00",
    endTime: "09:30:00",
  };

  const afternoonRestrictionInterval = {
    initialTime: "16:00:00",
    endTime: "19:30:00",
  };
  return (
    timeIsInInterval(time, morningRestrictionInterval) ||
    timeIsInInterval(time, afternoonRestrictionInterval)
  );
};

const carCanBeOnRoad = (picoYPlacaInfo) => {
  if (plateIsRestricted(picoYPlacaInfo.carPlate, picoYPlacaInfo.date)) {
    if (timeIsInRestriction(picoYPlacaInfo.time)) {
      return {
        canBe: false,
        message: `Oh No! The vehicle with plate ${picoYPlacaInfo.carPlate} can not travel now.`,
      };
    } else {
      return {
        canBe: true,
        message: `Great! The vehicle with plate ${picoYPlacaInfo.carPlate} can travel now.`,
      };
    }
  }
  return {
    canBe: true,
    message: `Great! The vehicle with plate ${picoYPlacaInfo.carPlate} can travel now.`,
  };
};

export {
  platesResctrictedByDate,
  plateIsRestricted,
  timeIsInRestriction,
  carCanBeOnRoad,
};
