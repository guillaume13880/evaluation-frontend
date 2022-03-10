let categ1 = document.getElementsByClassName("image--categ1");
console.log(categ1);

let etape = 0;

let nbrImage = categ1.length;

let precedent = document.querySelector(".precedent");
let suivant = document.querySelector(".suivant");

function enleverActiveImages() {
  for (let i = 0; i < nbrImage; i++) {
    categ1[i].classList.remove("active");
  }
}
suivant.addEventListener("click", function () {
  etape++;
  if (etape >= nbrImage) {
    etape = 0;
  }
  enleverActiveImages();
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

setInterval(function () {
  etape++;
  if (etape >= nbrImage) {
    etape = 0;
  }
  enleverActiveImages();
  categ1[etape].classList.add("active");
}, 6000);
