// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOY4FGNP7r1s844IGEqS1sMOoIK12wooc",
  authDomain: "project93-5ad5f.firebaseapp.com",
  databaseURL: "https://project93-5ad5f-default-rtdb.firebaseio.com",
  projectId: "project93-5ad5f",
  storageBucket: "project93-5ad5f.appspot.com",
  messagingSenderId: "499847069342",
  appId: "1:499847069342:web:1e6853f45ab4c97b1b458f"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("Username");
  document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

  function addroom() {
         room_name = document.getElementById("room_name").value;

        localStorage.setItem("Roomname",room_name);
    
        window.location = "kwitter_page.html";

        firebase.database().ref("/").child(room_name).update({
              purpose: "Adding Room Name"
        });
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code

  //End code
  });});}
getData();
