import { carCanBeOnRoad } from "./predictor";
import Validator from "./validator";

const form = document.getElementById("predictorForm");
const inputs = form.elements;
const results = document.getElementById("results");

const validateInfo = (info) => {
  const validator = new Validator();
  results.innerHTML = "";
  results.classList.remove("not-on-road");
  if (!validator.validatePlate(info.carPlate)) {
    results.classList.add("not-on-road");
    results.innerHTML =
      "The car Plate is incorrect. Please verify it has the correct format (Example:P456-345)";
    return false;
  } else if (!validator.validateDate(info.date)) {
    results.classList.add("not-on-road");
    results.innerHTML =
      "The date specified is incorrect. Please verify it has the correct format and date is real (Example: 2020/02/18 for year/month/dat)";
    return false;
  } else if (!validator.validateTime(info.time)) {
    results.classList.add("not-on-road");
    results.innerHTML =
      "The time specified is incorrect. Please verify it has the correct format (Example: 08:30:29 for hour/min/sec)";
    return false;
  }
  return true;
};

const canBeOnRoad = (event) => {
  event.preventDefault();
  results.classList.remove("on-road");
  results.classList.remove("not-on-road");

  const picoYPlacaInfo = {
    carPlate: inputs["carPlate"].value,
    date: inputs["date"].value,
    time: inputs["time"].value,
  };

  if (validateInfo(picoYPlacaInfo)) {
    const result = carCanBeOnRoad(picoYPlacaInfo);
    if (result.canBe) {
      results.classList.add("on-road");
    } else {
      results.classList.add("not-on-road");
    }
    results.innerHTML = result.message;
  }
};

form.addEventListener("submit", canBeOnRoad);
