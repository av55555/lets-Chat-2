
    var firebaseConfig = {
      apiKey: "AIzaSyD3OCtDyK-C_Y4kiVMyKzYld2t8XeQ3xLE",
      authDomain: "lets-chat-bf7f9.firebaseapp.com",
      projectId: "lets-chat-bf7f9",
      storageBucket: "lets-chat-bf7f9.appspot.com",
      messagingSenderId: "271861202571",
      appId: "1:271861202571:web:60e925c061dc1c6d081e8e",
      measurementId: "G-ZHRVTEN47P"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

name=localStorage.getItem("user_name");
name=document.getElementById("name").innerHTML;