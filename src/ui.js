import Validator from "./validator";

class UI {
  constructor(results, { carPlate, date, time }) {
    this.results = results;
    this.carPlate = carPlate;
    this.date = date;
    this.time = time;
  }

  validateInput() {
    const validator = new Validator();
    this.results.innerHTML = "";
    this.results.classList.remove("not-on-road");
    if (!validator.validatePlate(this.carPlate)) {
      this.results.classList.add("not-on-road");
      this.results.innerHTML =
        "The car Plate is incorrect. Please verify it has the correct format (Example: P456-345)";
      return false;
    } else if (!validator.validateDate(this.date)) {
      this.results.classList.add("not-on-road");
      this.results.innerHTML =
        "The date specified is incorrect. Please verify it has the correct format and date is real (Example: 2020/02/18 for year/month/day)";
      return false;
    } else if (!validator.validateTime(this.time)) {
      this.results.classList.add("not-on-road");
      this.results.innerHTML =
        "The time specified is incorrect. Please verify it has the correct format (Example: 08:30:29 for hour/min/sec)";
      return false;
    }
    return true;
  }

  removeStateClasses() {
    this.results.classList.remove("on-road");
    this.results.classList.remove("not-on-road");
  }

  setOnRoadState() {
    this.results.classList.add("on-road");
  }

  setNotOnRoadState() {
    this.results.classList.add("not-on-road");
  }

  setResultAlertMessage(result) {
    this.results.innerHTML = result.message;
  }
}

export default UI;
