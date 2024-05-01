setInterval(function () {
//Los Angeles//
let losAngelesElement = document.querySelector("#la-city");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");

//Paris//
let parisElement = document.querySelector("#paris-city");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");

parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");

//Manila//
let mnlElement = document.querySelector("#mnl-city");
let mnlDateElement = mnlElement.querySelector(".date");
let mnlTimeElement = mnlElement.querySelector(".time");
let mnlTime = moment().tz("Asia/Manila");

mnlDateElement.innerHTML = mnlTime.format("MMMM Do YYYY");
mnlTimeElement.innerHTML = mnlTime.format("h:mm:ss [<small>]A[</small>]");

//London//
let londonElement = document.querySelector("#london-city");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");

londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");
});

function updateCity(event) {
    let cityTimeZone = event.target.value;
    cityTime = moment().tz(cityTimeZone.format("MMMM Do YYYY"));

}

let citiesSelect = document.querySelector("#city-elements");
citiesSelect.addEventListener("change", updateCity);