//Firebase

const firebaseConfig = {
    apiKey: "AIzaSyBCuWL2gXFjk5PxIuVN2NLQmqaT8x_fOTQ",
    authDomain: "chat-room-3ae01.firebaseapp.com",
    databaseURL: "https://chat-room-3ae01-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chat-room-3ae01",
    storageBucket: "chat-room-3ae01.appspot.com",
    messagingSenderId: "494880681319",
    appId: "1:494880681319:web:1c8634b25ce7fab59393c2"

};

firebase.initializeApp(firebaseConfig); 
console.log(firebase);

  
var d = new Date();
var n = d.toLocaleString();
console.log(n);


function storage(){  
    console.log('name');

    if (document.getElementById('inputName').value !== "" && document.getElementById('inputEmail').value !=="" && document.getElementById('inputRemarks').value !=="" ){

        //we push to firebase
        firebase.database().ref("profile").child("response").push({
        date: n,
        name: document.getElementById('inputName').value,
        email: document.getElementById('inputEmail').value,
        remarks: document.getElementById('inputRemarks').value,
    })
    
    }else {
        alert('please fill in all input');
    }

    document.getElementById('inputName').value = "";
    document.getElementById('inputEmail').value = "";
    document.getElementById('inputRemarks').value = "";
}


// overlay

let overlay = document.querySelector('.overlay');
let noti = document.querySelector('.noti');
const btnClose = document.querySelector('.close');


//click btn pop up
function email(){

    noti.classList.remove('hidden');
    console.log('class hidden is removed');
    
    overlay.classList.remove('hidden');
    console.log('overlay class hidden is removed');
}


//when click btn pop down
btnClose.addEventListener('click',function(){
    noti.classList.add('hidden');
    overlay.classList.add('hidden');
})

window.addEventListener('keydown', function(evt){ 
    console.log(evt); //detected
    if (evt.key == 'Escape') {
        console.log('esc pressed');
        noti.classList.add('hidden');
        overlay.classList.add('hidden');
    }
})


// Animation Bouce

let aboutMe = document.getElementById('about-me');
let aboutMePic = document.getElementById('about-me-picture');
let aboutMe1 = document.getElementById('about-me1');
let interest = document.getElementById('interest');
let games = document.getElementById('interactive-games');
let contactMe = document.getElementById('contact-me');


window.addEventListener('scroll', onScroll);

function onScroll (evt) {

  

    if (window.scrollY + 100 >= aboutMe.offsetTop){
    aboutMe.classList.add('animate__animated');
    aboutMe.classList.add('animate__fadeInRight');
    aboutMe.classList.add('opacity');
    aboutMe1.classList.add('animate__animated');
    aboutMe1.classList.add('animate__fadeInRight');
    aboutMe1.classList.add('opacity');
    aboutMePic.classList.add('opacity');
    aboutMePic.classList.add('animate__animated');
    aboutMePic.classList.add('animate__fadeInLeft');
    console.log(window.scrollY);
    } 

    if (window.scrollY + 100 >= interest.offsetTop){
        interest.classList.add('animate__animated');
        interest.classList.add('animate__bounce');
        
    } 

    if (window.scrollY + 100 >= games.offsetTop){
        games.classList.add('animate__animated');
        games.classList.add('animate__bounce');
        
    } 

    if (window.scrollY + 280 >= contactMe.offsetTop){
        contactMe.classList.add('animate__animated');
        contactMe.classList.add('animate__wobble');
        
    } 

}