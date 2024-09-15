'use strict'

// PLANET INPUTS
const planet = document.querySelectorAll('.planet h3');
const planetTexts = document.querySelectorAll('.planet p');
const planetImageBox = document.querySelectorAll('.planetImgBox img');
const planetDistance = document.querySelectorAll('.planetDistance');
const planetOrbit = document.querySelectorAll('.planetOrbit');
const planetMoon = document.querySelectorAll('.planetMoon');

// PLANET OUTPUTS
const planetName = document.querySelector('.planetName');
const aboutPlanet = document.querySelector('.aboutPlanet');
const planetImgOutputBox = document.querySelector('.planetImgOutputBox img')
const planetDistanceOutput = document.querySelector('.planetDistanceOutput');
const planetOrbitOutput = document.querySelector('.planetOrbitOutput');
const planetMoonOutput = document.querySelector('.planetMoonOutput');


for (let i = 0; i < planet.length; i++) {
    planet[i].addEventListener('click', function() {
        planetName.textContent = planet[i].textContent;
        aboutPlanet.textContent = planetTexts[i].textContent;
        planetImgOutputBox.src = planetImageBox[i].src;
        planetDistanceOutput.textContent = planetDistance[i].textContent;
        planetOrbitOutput.textContent = planetOrbit[i].textContent;
        planetMoonOutput.textContent = planetMoon[i].textContent; 
    });
}
