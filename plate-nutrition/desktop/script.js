let broc = document.getElementsByClassName("asset-x");
let wheat = document.getElementsByClassName("asset-2");
let apple = document.getElementsByClassName("img");
let fish = document.getElementsByClassName("asset-3");

//document.body.classList.toggle = ("asset-x");
//document.body.classList.toggle = ("asset-2");
//document.body.classList.toggle = ("asset-3");
//document.body.classList.toggle = ("img");

//document.body.classList.toggle = ("greens");
//document.body.classList.toggle = ("wheat");
//document.body.classList.toggle = ("protein");

let vege = document.querySelectorAll("#img");
let info = document.querySelectorAll("#info");

function showInfo(){
    for (let veg of vege){
        veg.style.display = "none"; 
    }
    for(let infos of info){
        infos.style.display = "block";
    }
}

