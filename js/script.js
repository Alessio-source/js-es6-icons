// milestone 1:
// definire un array di oggetti; ogni oggetto rappresenta un'icona,
// che è caratterizzata da: nome, prefisso, tipo e famiglia.
// Utilizzando la funzione forEach e il template literal, visualizzare in pagina
// tutte le icone con il proprio nome.

// milestone 2:
// definire un array di colori e associare ad ogni tipo di icona un colore.
// Visualizzare le icone di colore diverso in base al tipo.

$(document).ready(
  function() {

    const icons = [
      {
        name: "dog",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "fish",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "tractor",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "hippo",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "spider",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "apple-alt",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "carrot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "lemon",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "dragon",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "pepper-hot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "space-shuttle",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "truck-monster",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "wheelchair",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "tram",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "fighter-jet",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "helicopter",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
    ];

    const colors = ["green", "red", "lightblue"]

    colorsForType(icons, colors);
    printIcons(icons);

    console.log(icons);
  }
);

function printIcons(array) {

  let htmlElement = $(".icons");

  array.forEach(
    function(element, index){
      let {name, prefix, family, color} = array[index];
      htmlElement.append(`<div class="${family} ${prefix}${name}" style="color: ${color};"><span>${name}</span></div>`)
    }
  );
}

function colorsForType(array, colorArray) {
  array.forEach(
    function(element, index) {
      if (element.type == "animal") {
        element.color = colorArray[0];
      } else if (element.type == "vehicle") {
        element.color = colorArray[1];
      } else if (element.type == "vegetable") {
        element.color = colorArray[2];
      }
    }
  );
}
