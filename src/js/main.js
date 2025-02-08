import { getParkData, parkInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";


//set of functions
function setParkIntro(data) {
  const introEl = document.querySelector(".intro");
  introEl.innerHTML = `<h1>${parkData.fullName}</h1>
  <p>${parkData.description}</p>`;
}


function setParkInfoLinks(data) {
  const infoEl = document.querySelector(".info");
  const html = data.map(mediaCardTemplate);
  infoEl.insertAdjacentHTML("afterbegin", html.join(""));
}


async function init(){
  const parkData = getParkData();
  const links = getInfoLinks(parkData.images);
  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfoLinks(parkInfoLinks);
}

init();

import "../css/style.css"; // we can do this type of import because we are using Vite
import "../css/conditions.css";