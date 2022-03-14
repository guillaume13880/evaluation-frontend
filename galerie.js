/*je recupere toute les images avec la classe */
let categ1 = document.getElementsByClassName("image--categ1");
let etape = 0;
let nbrImage = categ1.length;
let precedent = document.querySelector(".precedent");
let suivant = document.querySelector(".suivant");
/*recuperation des bouttons categorie*/
let btnMariage = document.querySelector("#li-mar");
let btnGrossesse = document.querySelector("#li-gro");
let btnBebe = document.querySelector("#li-beb");
let btnFamille = document.querySelector("#li-fam");
let btnBapteme = document.querySelector("#li-bap");
let btnCouple = document.querySelector("#li-cou");
let btnPortrait = document.querySelector("#li-por");

/* function qui enleve la classe active*/
function enleverActiveImages() {
  for (let i = 0; i < nbrImage; i++) {
    categ1[i].classList.remove("active");
  }
}
/* quand on click */
suivant.addEventListener("click", function () {
  /*l'etape s'incremente */
  etape++;
  /*si l'etape est superieur au nombre d'image on repart a 0*/
  if (etape >= nbrImage) {
    etape = 0;
  }
  /*la function qui enleve la classe active*/
  enleverActiveImages();
  /*j'ajoute la classe active sur l'etape */
  categ1[etape].classList.add("active");
});

precedent.addEventListener("click", function () {
  etape--;
  if (etape < 0) {
    etape = nbrImage - 1;
  }
  enleverActiveImages();
  categ1[etape].classList.add("active");
});

/*faire défiler le slider toute les 6s */
setInterval(function () {
  /*je recupere la meme etape que suivant */
  etape++;
  if (etape >= nbrImage) {
    etape = 0;
  }
  enleverActiveImages();
  categ1[etape].classList.add("active");
}, 6000);

btnMariage.addEventListener("click", function () {
  categ1[etape].src = "images/categ-1/image-1.jpg";
  console.log(categ1);
});
btnGrossesse.addEventListener("click", function () {
  categ1[etape].src = "images/categ-2/image-1.jpg";
  console.log(categ1);
});
btnBebe.addEventListener("click", function () {
  categ1[etape].src = "images/categ-3/image-1.jpg";
  console.log(categ1);
});
