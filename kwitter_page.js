// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEKYcTMOSOAkfkYDF4Y_6LuYKTv1tjD7k",
authDomain: "project-93-32f1d.firebaseapp.com",
databaseURL: "https://project-93-32f1d-default-rtdb.firebaseio.com",
projectId: "project-93-32f1d",
storageBucket: "project-93-32f1d.appspot.com",
messagingSenderId: "1088653578706",
appId: "1:1088653578706:web:e2fb3f0e153d977cd8f80b"
};
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    room_name = localStorage.getItem("Roomname");
    user_name = localStorage.getItem("Username");

    console.log("room name "+room_name);
    console.log("user name "+user_name);

    function logout() {
          localStorage.removeItem("Roomname");
          localStorage.removeItem("Username");
          window.location.replace("index.html");
    }
    function send() {
          msg = document.getElementById("msg").value;
          console.log("Message "+msg);
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0,
                dislike:0
          });
          document.getElementById("msg").value = "";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      
//End code
      } });  }); }
getData();
