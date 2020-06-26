import { isValid, parseISO } from "date-fns";

class Validator {
  validatePlate(plate) {
    const regExp = /[A-Z][0-9]{1,3}-[0-9]{3,4}$/g;
    return regExp.test(plate);
  }
  validateDate(date) {
    const [year, month, day] = date.split("/");
    const regExp = /\d{4}\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/g;
    return regExp.test(date) && isValid(parseISO(`${year}-${month}-${day}`));
  }
  validateTime(time) {
    const regExp = /([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/g;
    return regExp.test(time);
  }
}

export default Validator;
