'use strict'
 const firebaseConfig = {
    apiKey: "AIzaSyBCuWL2gXFjk5PxIuVN2NLQmqaT8x_fOTQ",
    authDomain: "chat-room-3ae01.firebaseapp.com",
    databaseURL: "https://chat-room-3ae01-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chat-room-3ae01",
    storageBucket: "chat-room-3ae01.appspot.com",
    messagingSenderId: "494880681319",
    appId: "1:494880681319:web:1c8634b25ce7fab59393c2"
  };
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig); 
  console.log(firebase);
  
  
  //! Dont touch
  let responseBox = document.getElementById('responseBox');  
  var d = new Date();
  var n = d.toString().substr(0,10);
  

  //!get data from Firebase when page reload / start

  firebase.database().ref(`profile`).child(`response`).on(`child_added`, function(snapshot){
    //  console.log(`check data ${snapshot}`);
  
     // console.log(`check data ${snapshot.val}`);
     
     var dateVal = snapshot.val().date;
     var nameVal = snapshot.val().name; //string
     var emailVal = snapshot.val().email; //string
     var remarkVal = snapshot.val().remarks;
     

     console.log(nameVal,emailVal,remarkVal);
     
     
    //  create element when firebase got new child
  
     let division = document.createElement('div'); //to float
     let responseRow = document.createElement('section');
     let userName = document.createElement('p');
     let userEmail = document.createElement('p');
     let userRemark = document.createElement('p');
      
     let dateText = document.createElement('p');
     
     //printf
     dateText.innerHTML = dateVal;
     userName.innerHTML = nameVal;
     userEmail.innerHTML = emailVal;
     userRemark.innerHTML = remarkVal;
     
  
  
  
     //Append
     responseBox.append(division);
     division.append(responseRow);
      
     responseRow.append(userName);
     responseRow.append(userEmail);
     responseRow.append(userRemark);
     responseRow.append(dateText);
  
     responseRow.classList.add('responseRow'); 
     userName.classList.add('userName');
     userEmail.classList.add('userEmail');
     userRemark.classList.add('userRemark');
     dateText.classList.add('date');
  })

    
  
  
   
  