var firebaseConfig = {
  apiKey: "AIzaSyADI5i38tRoxmas3c_fZWjXDVss4xHscDk",
  authDomain: "cityguy-jyeg.firebaseapp.com",
  databaseURL: "https://cityguy-jyeg-default-rtdb.firebaseio.com",
  projectId: "cityguy-jyeg",
  storageBucket: "cityguy-jyeg.appspot.com",
  messagingSenderId: "195496305375",
  appId: "1:195496305375:web:80038c881484b114f2bf6a"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addRoom(){
  document.getElementById("room_make").value;
  localStorage.setItem("room_name", room_name);
}

//Start code


