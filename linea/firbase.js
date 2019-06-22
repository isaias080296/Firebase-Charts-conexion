var array = new Array();
firebase.initializeApp({
    apiKey: "AIzaSyCj0DyiwISKB57b8uMCrA135THYEPQtK1s",
    authDomain: "vitorina-10560.firebaseapp.com",
    databaseURL: "https://vitorina-10560.firebaseio.com",
    projectId: "vitorina-10560",
    storageBucket: "vitorina-10560.appspot.com",
    messagingSenderId: "1049772645679",
    appId: "1:1049772645679:web:3d9d6e8990d1d1f8"
});

// Initialize Firebase

var data;
let respuesta;
var totall;
var Uno = document.getElementById("Hola");
var dbRef = firebase.database().ref("boleto");
dbRef.on("value", snap => {
    data = snap.val();

    for (const key in data) {
        respuesta += data[key].datel + "---";
        respuesta += data[key].grande + "---";
        respuesta += data[key].total + "<br>";
        totall += parseInt(data[key].total)
        array.push(data[key].grande);


        document.getElementById("Hola").innerHTML = respuesta;
    }
});