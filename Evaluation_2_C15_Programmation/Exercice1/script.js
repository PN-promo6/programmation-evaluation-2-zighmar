function fish(array) {
  let currentElement1;
  let currentElement2;
  let i = 1;
  let j = 0;
  let textTable = document.createElement("table");
  let textTHead = document.createElement("thead");
  textTable.appendChild(textTHead);
  let textTBody = document.createElement("tbody"); //Create var
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
    textTRHead.appendChild(textTH); //While for "th"
    textTH.textContent = currentElement1;
    textTH.style.color = "red";
    j++;
  }

  while (i < array.length) {
    currentElement1 = array[i];
    textTRBody = document.createElement("tr"); //While for "td"
    textTBody.appendChild(textTRBody);
    j = 0;

    while (j < currentElement1.length) {
      currentElement2 = currentElement1[j];
      textTD = document.createElement("td"); //While for "td"
      textTRBody.appendChild(textTD);
      textTD.textContent = currentElement2;
      //Miss italic police for last col, WIP
      // textTD.colSpan[4] = "italic"
      j++;
    }
    i++
  }
}

//Multi-Dim Array
let fishList = [
  ["Ordre", "Famille", "Nom vernaculaire", "Nom binomial"],
  ["Aulopiformes", "Synodontidae", "Poisson lézard", "Synodus saurus"],
  ["Aulopiformes", "Anguilliformes", "Anguille", "Anguilla anguilla"],
  ["Aulopiformes", "Congridae", "Congre", "Conger conger"],
  ["Atheriniformes", "Atherinidae", "Joël", "Atherina boyeri"],
];
fish(fishList); //Call Function
