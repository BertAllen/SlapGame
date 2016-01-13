var ninjaHealth = 100;
var playerHealth =100;
var hits = 0;

//keeps the player informed of their health
function update(){
    document.getElementById("pHealth").innerText="Player Health is: "+playerHealth ;
}

//keeps the player informed of Ninja's health
function nupdate(){
    document.getElementById("nHealth").innerText="Ninja Health is: "+ninjaHealth ;

 if(ninjaHealth <= 0){
         document.getElementById("player-panel").classList.add("panel-danger")
    }else{
         document.getElementById("player-panel").classList.remove("panel-danger")
    }
}

//tracks player hits
function pHits(){
    document.getElementById("playerHits").innerText="Total Player Hits: " + hits ;
}

//slaps ninja, reducing his health
function slap(){
    ninjaHealth--;
    //this is to keep the health bars current
update();
nupdate();
hits++; pHits()
}

//punches ninja, reducing his health
function punch(){
    ninjaHealth -=5;
    //this is to keep the health bars current
update();
nupdate();
hits++; pHits()
}

//kicks ninja, reducing his health
function kick(){
    ninjaHealth -=10;
    //this is to keep the health bars current
update();
nupdate();
hits++; pHits()
}
