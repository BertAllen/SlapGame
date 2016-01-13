var playerHealth =100;
var hits = 0;

//keeps the player informed of their health
function update(){
    document.getElementById("pHealth").innerText="Player Health is: "+playerHealth ;
document.getElementById("playerHits").innerText="Total Player Hits: " + hits ;

//this element should change the panel color 
if(playerHealth <= 0){
         document.getElementById("player-panel").classList.add("panel-danger");
    }else{
         document.getElementById("player-panel").classList.remove("panel-danger");
     }
}

var Item = function(name, mod, description){
    var self = this 
    this.name = name;
    this.mod = mod;
    this.description = description;
    this.draw = function(){
        //funky drawing stuff here...
        
    }
}

var items = {
    shield:new Item("Shield", 0.3, "This is an awesome shield."),
    boots:new Item("Boots", 0.6, "These boots smell funny..."),
    breastplate:new Item("Breastplate", 0.9, "Breastplates are cool!")
}

var Player = {
    health: 100,
    Pname: "",
    hitcount: 0,
    items: [items.shield],
}

//tracks player hits
// function pHits(){
//     }

//slaps player, reducing his health
function slap(){
    playerHealth--;
    //this is to keep the health bars current
hits++; 
update();
//pHits()
}

//punches player, reducing his health
function punch(){
    playerHealth -=5;
    //this is to keep the health bars current
hits++; 
update();
//pHits()
}

//kicks player, reducing his health
function kick(){
    playerHealth -=10;
    //this is to keep the health bars current
hits++; 
update();
//pHits()
}
