<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 9bccedfc1814db765e8dcb7d99774123e6af130d
=======
>>>>>>> 77aec0f77cc7e5c27220c38986540b86a7594e44
var playerHealth =100;
var hits = 0;

//keeps the player informed of their health
function update(){
    document.getElementById("pHealth").innerText="Player Health is: "+playerHealth ;
<<<<<<< HEAD
if("playerHealth" <= 0){
		 document.getElementById("player-panel").classList.add("panel-danger")
	}else{
		 document.getElementById("player-panel").classList.remove("panel-danger")
	}}
=======
<<<<<<< HEAD
    

<<<<<<< HEAD

=======
}
>>>>>>> b45131fc992d92c0e6f8c1d8b7ece81f442ad199

=======
>>>>>>> 77aec0f77cc7e5c27220c38986540b86a7594e44
//tracks player hits
function pHits(){
>>>>>>> 9bccedfc1814db765e8dcb7d99774123e6af130d
    document.getElementById("playerHits").innerText="Total Player Hits: " + hits ;
 }

//slaps ninja, reducing his health
function slap(){
    playerHealth--;
    //this is to keep the health bars current
update();
//nupdate();
hits++; pHits()
}

//punches ninja, reducing his health
function punch(){
    playerHealth -=5;
    //this is to keep the health bars current
update();
<<<<<<< HEAD
<<<<<<< HEAD
//nupdate();
=======
nupdate()
>>>>>>> 9bccedfc1814db765e8dcb7d99774123e6af130d
=======
nupdate()
>>>>>>> 77aec0f77cc7e5c27220c38986540b86a7594e44
hits++; pHits()
}

//kicks ninja, reducing his health
function kick(){
    playerHealth -=10;
    //this is to keep the health bars current
update();
//nupdate();
hits++; pHits()
}
