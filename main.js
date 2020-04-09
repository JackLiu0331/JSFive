// JavaScript Document

let townChoose = document.querySelector('select');
let informationDisplay = document.querySelector('p');

townChoose.onchange = function() {
  let town = townChoose.value;
  updateDisplay(town);
  initMap(town);
};

function updateDisplay(town) {
  town = town.replace(' ', '');
  town = town.toLowerCase();
  let url = town + '.txt';

  fetch(url).then(function(response) {
      response.text().then(function(text) {
         informationDisplay.textContent = text;
      });
    });
  }

var map, infoWindow;
var downtown = {lat: 43.649020, lng: -79.386009};
var midtown  = {lat: 43.708050, lng: -79.397251};
var uptown  = {lat: 43.874672, lng: -79.439987};
var westtown = {lat: 43.631647, lng: -79.472544};
function initMap(town) {
        if(town == 'Downtown'){
          map = new google.maps.Map(document.getElementById('map'), {
            center: downtown,
            zoom: 17
          });
          var downtownmarker = new google.maps.Marker({position:downtown, map: map});
        }
        if(town == 'Midtown'){
          map = new google.maps.Map(document.getElementById('map'), {
            center: midtown,
            zoom: 17
          });
          var downtownmarker = new google.maps.Marker({position:midtown, map: map});
        }
        if(town == 'Uptown'){
          map = new google.maps.Map(document.getElementById('map'), {
            center: uptown,
            zoom: 17
          });
          var downtownmarker = new google.maps.Marker({position:uptown, map: map});
        }
        if(town == 'Westtown'){
          map = new google.maps.Map(document.getElementById('map'), {
            center: westtown,
            zoom: 17
          });
          var downtownmarker = new google.maps.Marker({position:westtown, map: map});
        }

      }
