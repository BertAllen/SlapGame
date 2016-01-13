<<<<<<< HEAD

=======
>>>>>>> 9bccedfc1814db765e8dcb7d99774123e6af130d
var playerHealth =100;
var hits = 0;

//keeps the player informed of their health
function update(){
    document.getElementById("pHealth").innerText="Player Health is: "+playerHealth ;
<<<<<<< HEAD
    


=======
}

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
//nupdate();
=======
nupdate()
>>>>>>> 9bccedfc1814db765e8dcb7d99774123e6af130d
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
