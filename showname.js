fetch("./characters.json")
.then(response => response.json())
.then(myCharacters => loadCharacters(myCharacters));


function loadCharacters(myCharacters) {
  // Find the element “col” in HTML
  var CardCharacter = document.getElementById("col");
  var cardName = document.getElementById("desc");
  var cardImage = document.getElementById("img");
  var cardTitle = document.getElementById("title");
  var checkboxes = [];
  var cards = [];
  // Read every character from the array
  let addCardName = document.createElement("div")
  let addCardTitle = document.createElement("div");
  let addCardImg = document.createElement("div");
  addCardTitle.classList.add("title");
  addCardName.classList.add("desc");
  addCardImg.classList.add("img");
  let seriesID = localStorage.getItem("value");
  let title = myCharacters.series[seriesID].title;
  console.log(title);
  let description = myCharacters.series[seriesID].description;
  for (var i = 0; i<myCharacters.series[seriesID].characters.length; i++){
  let cname = myCharacters.series[seriesID].characters[i].name;
  let Chardescription = myCharacters.series[seriesID].characters[i].description;
  let url = myCharacters.series[seriesID].url;
  let cUrl = myCharacters.series[seriesID].characters[i].charImage;
  let checkbox = "checkbox" + i.toString();
  let card = "card" + i.toString();

  // create a new HTML div division
let AddCardCharacter = document.createElement("div");
// add class = “col” to new division for Bootstrap
AddCardCharacter.classList.add("col");

addCardTitle.innerHTML =`
<h1 style="text-align: center; font-size: 32px"><br>${title}</h1>
`;
addCardName.innerHTML =`
<p class="card-text" style="font-size: 15px text-align:center"> ${description}</p>
`;
addCardImg.innerHTML =`
<img src="${url}" width="200" "></img>
`;
// create Bootstrap card
AddCardCharacter.innerHTML = `
<div id=${card} class="card shadow-sm">
<img src=${cUrl} class="card-img-top" alt="..."></img>
<div class="card-body">
<p class="card-text"> <strong>${cname}</strong>: ${Chardescription}</p>
<div class="d-flex justify-content-between align-items-center">
<div class="btn-group">
</div>
</div>
</div>
</div>
`;
// append new division
CardCharacter.appendChild(AddCardCharacter);


let cbox = document.getElementById(checkbox);
checkboxes.push(cbox);
let ccard = document.getElementById(card);
cards.push(ccard);
} // end of for
cardTitle.appendChild(addCardTitle);
cardName.appendChild(addCardName);
cardImage.appendChild(addCardImg);
console.log(checkboxes);
checkboxes.forEach((checkboxParam, index) => {
  console.log(index);
  checkboxParam.addEventListener('change', () => {
  if (checkboxParam.checked) {
  cards[index].style.display = 'block'; // Show the card
  } else {
  cards[index].style.display = 'none'; // Hide the card
  }
  });
  });


}