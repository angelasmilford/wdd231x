import { parkInfoTemplate, footerTemplate } from "./templates.mjs";


function setHeaderInfo(data){
    const disclaimer = document.querySelector(".disclaimer > a");
    
    disclaimer.href = parkData.url;
    disclaimer.innerHTML = parkData.fullName;
    
    document.querySelector("head > title").textContent = parkData.fullName;
    document.querySelector(".hero-banner > img").src = parkData.images[0].url;
    document.querySelector(".hero-banner__content").innerHTML = parkInfoTemplate(parkData);
}


function setFooter(data) {
    const footerEl = document.querySelector("#park-footer");
    footerEl.innerHTML = footerTemplate(data);
}


export default function setHeaderFooter(data) {
    setHeaderInfo(data);
    setFooter(data);
}