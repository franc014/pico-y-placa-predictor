import Validator from "./validator";
const validateInput = (results, { carPlate, date, time }) => {
  const validator = new Validator();
  results.innerHTML = "";
  results.classList.remove("not-on-road");
  if (!validator.validatePlate(carPlate)) {
    results.classList.add("not-on-road");
    results.innerHTML =
      "The car Plate is incorrect. Please verify it has the correct format (Example:P456-345)";
    return false;
  } else if (!validator.validateDate(date)) {
    results.classList.add("not-on-road");
    results.innerHTML =
      "The date specified is incorrect. Please verify it has the correct format and date is real (Example: 2020/02/18 for year/month/dat)";
    return false;
  } else if (!validator.validateTime(time)) {
    results.classList.add("not-on-road");
    results.innerHTML =
      "The time specified is incorrect. Please verify it has the correct format (Example: 08:30:29 for hour/min/sec)";
    return false;
  }
  return true;
};

export { validateInput };
