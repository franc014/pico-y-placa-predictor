import Predictor from "./predictor";
import UI from "./ui";

const form = document.getElementById("predictorForm");
const inputs = form.elements;
const results = document.getElementById("results");

const canBeOnRoad = (event) => {
  event.preventDefault();

  const carPlate = inputs["carPlate"].value;
  const date = inputs["date"].value;
  const time = inputs["time"].value;

  const predictor = new Predictor(carPlate, date, time);
  const ui = new UI(results, { carPlate, date, time });

  ui.removeStateClasses();

  if (ui.validateInput()) {
    const result = predictor.carCanBeOnRoad();
    if (result.canBe) {
      ui.setOnRoadState();
    } else {
      ui.setNotOnRoadState();
    }
    ui.setResultAlertMessage(result);
  }
};

form.addEventListener("submit", canBeOnRoad);
