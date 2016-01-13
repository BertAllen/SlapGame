var playerHealth =100;
var hits = 0;

//keeps the player informed of their health
function update(){
    document.getElementById("pHealth").innerText="Player Health is: "+playerHealth ;
document.getElementById("playerHits").innerText="Total Player Hits: " + hits ;

//this element should change the panel color 
if(playerHealth <= 0){
         document.getElementById("player-panel").classList.add("panel-danger");
    }
    // else{
    //      document.getElementById("player-panel").classList.remove("panel-danger");
    // }
}

//tracks player hits
// function pHits(){
//     }

//slaps player, reducing his health
function slap(){
    playerHealth--;
    //this is to keep the health bars current
update();
hits++; 
//pHits()
}

//punches player, reducing his health
function punch(){
    playerHealth -=5;
    //this is to keep the health bars current
update();
hits++; 
//pHits()
}

//kicks player, reducing his health
function kick(){
    playerHealth -=10;
    //this is to keep the health bars current
update();
hits++; 
//pHits()
}
