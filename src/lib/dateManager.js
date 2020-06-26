import { getDay, isWithinInterval } from "date-fns";

const getDayName = (date) => {
  const dateParts = date.split("/");
  const dateObject = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);

  switch (getDay(dateObject)) {
    case 0:
      return "sunday";
    case 1:
      return "monday";

    case 2:
      return "tuesday";
    case 3:
      return "wednesday";
    case 4:
      return "thursday";
    case 5:
      return "friday";
    case 6:
      return "saturday";
  }
};

const timeIsInInterval = (time, interval) => {
  const initialTimeParts = interval.initialTime.split(":");
  const endTimeParts = interval.endTime.split(":");
  const timeParts = time.split(":");
  const initialDate = new Date(
    "",
    "",
    "",
    initialTimeParts[0],
    initialTimeParts[1],
    initialTimeParts[2]
  );

  const endDate = new Date(
    "",
    "",
    "",
    endTimeParts[0],
    endTimeParts[1],
    endTimeParts[2]
  );

  const date = new Date("", "", "", timeParts[0], timeParts[1], timeParts[2]);

  return isWithinInterval(date, {
    start: initialDate,
    end: endDate,
  });
};

export { getDayName, timeIsInInterval };
