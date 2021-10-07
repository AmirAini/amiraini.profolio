//list all vars
var song1 = document.getElementById('song1');
var song2 = document.getElementById('song2');
var song3 = document.getElementById('song3');
var song4 = document.getElementById('song4');
var song5 = document.getElementById('song5');
var song6 = document.getElementById('song6');
var song7 = document.getElementById('song7');
var song8 = document.getElementById('song8');
var song9 = document.getElementById('song9');
var song10 = document.getElementById('song10');

var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var b4 = document.getElementById('b4');
var b5 = document.getElementById('b5');
var b6 = document.getElementById('b6');
var b7 = document.getElementById('b7');
var b8 = document.getElementById('b8');
var b9 = document.getElementById('b9');
var b10 = document.getElementById('b10');

//Array 
// var keyList = [
//     {
//     song: 'song1',
//     key: '1',


// };

//events
window.addEventListener("keydown",keyPressed);
window.addEventListener("keyup", keyReleased);


//key pressed
function keyPressed (evt){
    //printf the Keycodes
    console.log(evt.keyCode);

    // //logic if in array
    // keyList[evt.keyCode] = true;

    //condition when to sound
    if(evt.keyCode==81){
        song1.play();
        b1.style.backgroundColor ='red';
    }

    if(evt.keyCode==87){
        song2.play();
        b2.style.backgroundColor ='red';

    }

    if(evt.keyCode==69){
        song3.play();
        b3.style.backgroundColor ='red';
         
    }

    if(evt.keyCode==82){
        song4.play();
        b4.style.backgroundColor ='red';
     
    }

    if(evt.keyCode==65){
        song5.play();
        b5.style.backgroundColor ='red';
         
    }

    if(evt.keyCode==83){
        song6.play();
        b6.style.backgroundColor ='red';
         
    }

    if(evt.keyCode==68){
        song7.play();
        b7.style.backgroundColor ='red';
        
    }

    if(evt.keyCode==90){
        song8.play();
        b8.style.backgroundColor ='red';
        
    }

    if(evt.keyCode==88){
        song9.play();
        b9.style.backgroundColor ='red';
        
    }

    if(evt.keyCode == 67){
        song10.play();
        b10.style.backgroundColor ='red';
    }
    
}

function keyReleased(evt){
    b1.style.backgroundColor ='white';
    b2.style.backgroundColor ='white';
    b3.style.backgroundColor ='white';
    b4.style.backgroundColor ='white';
    b5.style.backgroundColor ='white';
    b6.style.backgroundColor ='white';
    b7.style.backgroundColor ='white';
    b8.style.backgroundColor ='white';
    b9.style.backgroundColor ='white';
    b10.style.backgroundColor='white';
}


