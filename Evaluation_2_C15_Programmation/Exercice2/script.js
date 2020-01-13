//Create var
let movieTH = document.createElement("th");
movieTH.textContent = "Cinéma le Dauphin";
document.body.appendChild(movieTH);

let description = document.createElement("p");
description.textContent = "Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualit. Des avant premières, des recontres, des cinés-repas, des débats, des ateliers, des ciné-goûters, de 11h30 à 23h du mardi au dimanche (jusqu'à minuit le vendredi et le samedi).";
document.body.appendChild(description);
description.style.display = "block";

let displayButton1 = document.createElement("div");
document.body.appendChild(displayButton1);

let continue1 = document.createElement("input");
continue1.type = "button";
continue1.value = "Voir les films à l'affiche cette semaine";
displayButton1.appendChild(continue1);

//Continue function
continue1.addEventListener("click", function() {
  if (continue1.clicked) {

  } else {
    movieTH.style.display = "none";
    description.style.display = "none";
    displayButton1.style.display = "none";
    //Array function
    function foo(array) {
      let currentElement1;
      let currentElement2;
      let i = 1;
      let j = 0;
      let textTable = document.createElement("table");
      let textTHead = document.createElement("thead");
      textTable.appendChild(textTHead);
      let textTBody = document.createElement("tbody");
      let textTRHead = document.createElement("tr");
      textTHead.appendChild(textTRHead);
      let textTH;
      let textTRBody;
      let textTD;
      let headerData = array[0]
      document.body.appendChild(textTable);
      textTable.appendChild(textTBody);

      while (j < headerData.length) {
        currentElement1 = headerData[j];
        textTH = document.createElement("th");
        textTRHead.appendChild(textTH);
        textTH.textContent = currentElement1;
        j++;
      }

      while (i < array.length) {
        currentElement1 = array[i];
        textTRBody = document.createElement("tr");
        textTBody.appendChild(textTRBody);
        j = 0;

        while (j < currentElement1.length) {
          currentElement2 = currentElement1[j];
          textTD = document.createElement("td");
          textTRBody.appendChild(textTD);
          textTD.textContent = currentElement2;
          j++;
        }
        i++;
      }
    }
    //Create movies array
    let movies = [
      ["Titre du film", "Réalisateur", "Nationalité", "Année", "Durée", "Version"],
      ["IN MY ROOM", "Ulrich Köhler", "Allemagne", "2019", "2h", "vf"],
      ["UN VIOLENT DÉSIR DE BONHEUR", "Clément Schneider", "France", "2018", "1h15", "vf"],
      ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE ?", "Roberto Minervini", "Etats-Unis/Italie", "2018", "2h03", "vostfr"],
      ["GRASS", "Hong Sang-Soo", "Corée du Sud", "2018", "1h06", "vostfr"]
    ];
    foo(movies);
  }

}, true)
