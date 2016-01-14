//var playerHealth =100;
//var hits = 0;


//keeps the player informed of their health
function update() {

    document.getElementById("pHealth").innerText = "Player Health is: " + Player.health;
    document.getElementById("playerHits").innerText = "Total Player Hits: " + Player.hits;


    //this element should change the panel color 
    if (Player.health <= 0) {
        document.getElementById("player-panel").classList.add("panel-danger");
    } else {
        document.getElementById("player-panel").classList.remove("panel-danger");
    }
}

var Item = function (name, mod, description) {
    //var self = this
    this.name = name;
    this.mod = mod;
    this.description = description;
    this.draw = function () {
        //funky drawing stuff here...
        
    }
}

var items = {
    shield: new Item("Shield", 0.3, "This is an awesome shield."),
    boots: new Item("Boots", 0.6, "These boots smell funny..."),
    breastplate: new Item("Breastplate", 0.9, "Breastplates are cool!")
}

var Player = {
    health: 100,
    Pname: "",
    hits: 0,
     wornItems: [],
    addMods: function(){
        var totMod =0
    for(var i=0; i< this.wornItems.length; i++){
        totMod += this.wornItems[i].mod; //is ".mod" reference correct?;
        
   }
    return totMod;
    }


}

//tracks player hits



//slaps players, reducing his health
function slap() {
    Player.health -= 1 - (1*Player.addMods());
    //this is to keep the health bars current
    Player.hits++;
    update();

}

//punches players, reducing his health
function punch() {
    Player.health -= 5 - (5*Player.addMods());
    //this is to keep the health bars current
    Player.hits++;
    update();

}

//kicks players, reducing his health
function kick() {
    Player.health -= 10 - (10*Player.addMods());
    //this is to keep the health bars current
    Player.hits++;
    update();

}
