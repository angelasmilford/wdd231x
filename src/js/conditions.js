import { getParkData, getParkAlerts } from "./parkService.mjs";
import { alertTemplate } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";

function setAlerts(alerts) {
  const alertsContainer = document.querySelector(".alerts > ul");
  alertsContainer.innerHTML = "";
  const html = alerts.map(alertTemplate);
  alertsContainer.insertAdjacentHTML("beforeend", html.join(""));
}

async function init() {
  const parkData = await getParkData();
  const alerts = await getParkAlerts(parkData.parkCode);
  setHeaderFooter(parkData);
  setAlerts(alerts);
}

init();

function setVisitorCenters() {

}

import "../css/style.css"; // we can do this type of import because we are using Vite
import "../css/conditions.css";