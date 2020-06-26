const button = document.getElementById("check");
var inputs = document.getElementById("predictorForm").elements;

const canBeOnRoad = (event) => {
  event.preventDefault();
  const picoYPlacaInfo = {
    carPlate: inputs["carPlate"].value,
    date: inputs["date"].value,
    time: inputs["time"].value,
  };
};

button.addEventListener("click", canBeOnRoad);
