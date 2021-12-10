const firebaseConfig = {
      apiKey: "AIzaSyCM3R6t8vhOOHlHB2bV-nUcsOSjfMjAu0E",
      authDomain: "let-s-chat-72488.firebaseapp.com",
      projectId: "let-s-chat-72488",
      storageBucket: "let-s-chat-72488.appspot.com",
      messagingSenderId: "227504139754",
      appId: "1:227504139754:web:31d5c1bd0f57281b605693"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
