// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBxH7SArOQJipUVqRg43Jv08UsNUGIWZgY",
      authDomain: "project---96.firebaseapp.com",
      projectId: "project---96",
      storageBucket: "project---96.appspot.com",
      messagingSenderId: "803724124824",
      appId: "1:803724124824:web:05cc33c9f95c0f023c66ed"
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
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+ name+"<img class = 'user_tick' src = 'tick.png'></h4>";
message_with_tag = "<h4 class = 'message_h4'>"+message+"</h4>";
like_button = "<button class = 'btn btn-warning' id = "+firebase_message_id+" value = "+like+" onclick = 'updates_like(this.id)'>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Likes: "+like+"</span></button>";

row = name_with_tag + message_with_tag + like_button+ span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
