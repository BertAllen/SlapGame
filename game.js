var playerHealth =100;
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

document.getElementById("pHealth").innerText="Player Health is: "+playerHealth ;
document.getElementById("playerHits").innerText="Total Player Hits: " + hits ;

if(playerHealth <= 0){
		 document.getElementById("player-panel").classList.add("panel-danger")
	}else{
		 document.getElementById("player-panel").classList.remove("panel-danger")
	}
	}

    

//tracks player hits
// function pHits(){
//     }

//slaps ninja, reducing his health
function slap(){
    playerHealth--;
    //this is to keep the health bars current
hits++; 
update(); 
//pHits()
}

//punches ninja, reducing his health
function punch(){
    playerHealth -=5;
    //this is to keep the health bars current
hits++; 
update();
//pHits()
}

//kicks ninja, reducing his health
function kick(){
    playerHealth -=10;
    //this is to keep the health bars current
hits++; 
update();
//pHits()
}
