import { getDayName, timeIsInInterval } from "../src/lib/dateManager";

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
