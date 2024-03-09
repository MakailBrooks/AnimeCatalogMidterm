fetch("./data.json")
    .then(response => response.json())
    .then(mySeries => loadSeries(mySeries));
function loadSeries(mySeries) {
        var cardSeries = document.getElementById("col");

        for(var i =0;i<mySeries.Anime.length;i++){
            let title = mySeries.Anime[i].title;
            let image = mySeries.Anime[i].image;
            let link = mySeries.Anime[i].link;
            let addCardSeries = document.createElement("div");
            addCardSeries.classList.add("col");
            addCardSeries.innerHTML = `
                    <a href=${link} <p class ="all" class="card-text"> <strong>${title} </strong></p></a>
                    <div class="card-body">
                    <img src=${image} height = "500" class = "card-img-top" onclick="shiftPage('${link}','${i}')"></img>
                        <div class = "d-flext justify-content-between align-items-center">            
                    </div>
                </div>
            </div>
            `;
            cardSeries.appendChild(addCardSeries);
        
        }

}
function shiftPage(seriesLink,seriesValue){
   window.location.href = seriesLink;
    localStorage.setItem("value",seriesValue);
    console.log(localStorage);
}