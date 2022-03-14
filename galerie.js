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
  categ1[0].src = "images/categ-1/image-1.jpg";
  categ1[1].src = "images/categ-1/image-2.jpg";
  categ1[2].src = "images/categ-1/image-3.jpg";
  categ1[3].src = "images/categ-1/image-4.jpg";
  categ1[4].src = "images/categ-1/image-5.jpg";
  categ1[5].src = "images/categ-1/image-6.jpg";
  /*ajout style sur le lien */
  btnMariage.style.color = "yellow";
  btnGrossesse.style.color = "white";
  btnBebe.style.color = "white";
  btnFamille.style.color = "white";
  btnBapteme.style.color = "white";
  btnCouple.style.color = "white";
  btnPortrait.style.color = "white";
});
btnGrossesse.addEventListener("click", function () {
  categ1[0].src = "images/categ-2/image-1.jpg";
  categ1[1].src = "images/categ-2/image-2.jpg";
  categ1[2].src = "images/categ-2/image-3.jpg";
  categ1[3].src = "images/categ-2/image-4.jpg";
  categ1[4].src = "images/categ-2/image-5.jpg";
  categ1[5].src = "images/categ-2/image-6.jpg";
  btnMariage.style.color = "white";
  btnGrossesse.style.color = "yellow";
  btnBebe.style.color = "white";
  btnFamille.style.color = "white";
  btnBapteme.style.color = "white";
  btnCouple.style.color = "white";
  btnPortrait.style.color = "white";
});
btnBebe.addEventListener("click", function () {
  categ1[0].src = "images/categ-3/image-1.jpg";
  categ1[1].src = "images/categ-3/image-2.jpg";
  categ1[2].src = "images/categ-3/image-3.jpg";
  categ1[3].src = "images/categ-3/image-4.jpg";
  categ1[4].src = "images/categ-3/image-5.jpg";
  categ1[5].src = "images/categ-3/image-6.jpg";
  btnMariage.style.color = "white";
  btnGrossesse.style.color = "white";
  btnBebe.style.color = "yellow";
  btnFamille.style.color = "white";
  btnBapteme.style.color = "white";
  btnCouple.style.color = "white";
  btnPortrait.style.color = "white";
});
btnFamille.addEventListener("click", function () {
  categ1[0].src = "images/categ-4/image-1.jpg";
  categ1[1].src = "images/categ-4/image-2.jpg";
  categ1[2].src = "images/categ-4/image-3.jpg";
  categ1[3].src = "images/categ-4/image-4.jpg";
  categ1[4].src = "images/categ-4/image-5.jpg";
  categ1[5].src = "images/categ-4/image-6.jpg";
  btnMariage.style.color = "white";
  btnGrossesse.style.color = "white";
  btnBebe.style.color = "white";
  btnFamille.style.color = "yellow";
  btnBapteme.style.color = "white";
  btnCouple.style.color = "white";
  btnPortrait.style.color = "white";
});
btnBapteme.addEventListener("click", function () {
  categ1[0].src = "images/categ-5/image-1.jpg";
  categ1[1].src = "images/categ-5/image-2.jpg";
  categ1[2].src = "images/categ-5/image-3.jpg";
  categ1[3].src = "images/categ-5/image-4.jpg";
  categ1[4].src = "images/categ-5/image-5.jpg";
  categ1[5].src = "images/categ-5/image-6.jpg";
  btnMariage.style.color = "white";
  btnGrossesse.style.color = "white";
  btnBebe.style.color = "white";
  btnFamille.style.color = "white";
  btnBapteme.style.color = "yellow";
  btnCouple.style.color = "white";
  btnPortrait.style.color = "white";
});
btnCouple.addEventListener("click", function () {
  categ1[0].src = "images/categ-6/image-1.jpg";
  categ1[1].src = "images/categ-6/image-2.jpg";
  categ1[2].src = "images/categ-6/image-3.jpg";
  categ1[3].src = "images/categ-6/image-4.jpg";
  categ1[4].src = "images/categ-6/image-5.jpg";
  categ1[5].src = "images/categ-6/image-6.jpg";
  btnMariage.style.color = "white";
  btnGrossesse.style.color = "white";
  btnBebe.style.color = "white";
  btnFamille.style.color = "white";
  btnBapteme.style.color = "white";
  btnCouple.style.color = "yellow";
  btnPortrait.style.color = "white";
});
btnPortrait.addEventListener("click", function () {
  categ1[0].src = "images/categ-7/image-1.jpg";
  categ1[1].src = "images/categ-7/image-2.jpg";
  categ1[2].src = "images/categ-7/image-3.jpg";
  categ1[3].src = "images/categ-7/image-4.jpg";
  categ1[4].src = "images/categ-7/image-5.jpg";
  categ1[5].src = "images/categ-7/image-6.jpg";
  btnMariage.style.color = "white";
  btnGrossesse.style.color = "white";
  btnBebe.style.color = "white";
  btnFamille.style.color = "white";
  btnBapteme.style.color = "white";
  btnCouple.style.color = "white";
  btnPortrait.style.color = "yellow";
});
