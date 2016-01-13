//var playerHealth =100;
var hits = 0;

//keeps the player informed of their health
function update(){
    document.getElementById("pHealth").innerText="Player Health is: "+ Player.health ;
document.getElementById("playerHits").innerText="Total Player Hits: " + Player.hits ;

//this element should change the panel color 
if(Player.health <= 0){
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
    hits: 0,
    items: [items.shield],
}

//tracks player hits



//slaps player, reducing his health
function slap(){
    Player.health--;
    //this is to keep the health bars current
Player.hits++; 
update();

}

//punches player, reducing his health
function punch(){
    Player.health -=5;
    //this is to keep the health bars current
Player.hits++; 
update();

}

//kicks player, reducing his health
function kick(){
    Player.health -=10;
    //this is to keep the health bars current
Player.hits++; 
update();

}
