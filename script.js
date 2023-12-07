
var pikacu = document.getElementById('pikacu');
var pokemon = document.getElementById('pokemon');
var score = 0; // Puan değişkeni

function jump(){
    if(pikacu.classList != "jump"){
        pikacu.classList.add("jump");

        setTimeout(function(){
            pikacu.classList.remove("jump");
        },300);
    }
}

var isAlive = setInterval(function(){
    var pikacutop = parseInt(window.getComputedStyle(pikacu).getPropertyValue("top"));
    var pokemonleft = parseInt(window.getComputedStyle(pokemon).getPropertyValue("left"));

    if(pokemonleft < 50 && pokemonleft > 0 && pikacutop >= 140){
        alert("Oyun bitti! Puanınız: " + score); // Oyun bittiğinde puanı alert olarak göster
    }
  
}, 10);

document.addEventListener("keydown", function(event){
    jump();
    increaseScore(); // Tuşa basıldığında puanı artır
});

function increaseScore() {
    score++; // Puanı artır
    var scoreDisplay = document.getElementById("puan"); // Puanı göstermek için bir element

    if(scoreDisplay) {
        scoreDisplay.innerText = "Puan: " + score; // Puanı ekranda göster
    }
}