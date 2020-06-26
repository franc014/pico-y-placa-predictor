import { getDayName, timeIsInInterval } from "./dateManager";
const platesRestrictedByDate = (date) => {
  const platesByDay = {
    monday: [1, 2],
    tuesday: [3, 4],
    wednesday: [5, 6],
    thursday: [7, 8],
    friday: [9, 0],
    saturday: [],
    sunday: [],
  };

  return platesByDay[getDayName(date)];
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

export { platesRestrictedByDate, timeIsInRestriction };
