//var playerHealth =100;
var hits = 0;
var Item = function(name, modifier, description){
    this.name = name;
    this.modifier = modifier;
    this.description = description;
    this.draw = function(){
    }
}
var items = {
    shield:new Item("Shield",0.3,"This is an awesome shield!"),
    helmet:new Item("Helmet",0.2,"This is an awesome helmet!"),
    armor:new Item("Armor",0.5,"This is an awesome set of armor!")
}
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



//slaps ninja, reducing his health
function slap(){
    Player.health--;
    //this is to keep the health bars current
Player.hits++; 
update();

<<<<<<< HEAD
=======
//pHits()
>>>>>>> 64d55cc000f023dab1e9390d9136f61158eeffcf
}

//punches ninja, reducing his health
function punch(){
    Player.health -=5;
    //this is to keep the health bars current
Player.hits++; 
update();

}

//kicks ninja, reducing his health
function kick(){
    Player.health -=10;
    //this is to keep the health bars current
Player.hits++; 
update();

}
