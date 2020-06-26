import Validator from "../src/validator";
describe("Predictor input validations", () => {
  it("validates a car plate", () => {
    const validator = new Validator();
    const plate1 = "P768-345";
    const plate2 = "G768-3496";

    const plate1IsValid = validator.validatePlate(plate1);
    const plate2IsValid = validator.validatePlate(plate2);

    expect(plate1IsValid).toBeTruthy();
    expect(plate2IsValid).toBeTruthy();
  });

  it("invalidates a car plate", () => {
    const plate1 = "4";
    const plate2 = "9496";
    const plate3 = "G768-34";
    const validator = new Validator();

    const plate1IsValid = validator.validatePlate(plate1);
    const plate2IsValid = validator.validatePlate(plate2);
    const plate3IsValid = validator.validatePlate(plate3);

    expect(plate1IsValid).toBeFalsy();
    expect(plate2IsValid).toBeFalsy();
    expect(plate3IsValid).toBeFalsy();
  });

  it("is an invalid date", () => {
    const validator = new Validator();
    const date = "2020/02/31";
    const dateIsValid = validator.validateDate(date);
    expect(dateIsValid).toBeFalsy();
  });

  it("validates date format", () => {
    const validator = new Validator();
    const date1 = "2020/04/27";
    const date2 = "2020-03-10";
    const date1IsValid = validator.validateDate(date1);
    const date2IsValid = validator.validateDate(date2);
    expect(date1IsValid).toBeTruthy();
    expect(date2IsValid).toBeFalsy();
  });
  it("is another valid date", () => {
    const validator = new Validator();
    const date = "2020/01/21";
    const dateIsValid = validator.validateDate(date);
    expect(dateIsValid).toBeTruthy();
  });

  it("is a valid time", () => {
    const validator = new Validator();
    const time = "04:30:22";
    const timeIsValid = validator.validateTime(time);
    expect(timeIsValid).toBeTruthy();
  });

  it("is an invalid time", () => {
    const validator = new Validator();
    const time = "14:76:22";
    const timeIsValid = validator.validateTime(time);
    expect(timeIsValid).toBeFalsy();
  });
  it("is a second invalid time", () => {
    const validator = new Validator();
    const time = "14-76:22";
    const timeIsValid = validator.validateTime(time);
    expect(timeIsValid).toBeFalsy();
  });
});
