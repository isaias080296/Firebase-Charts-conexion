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
////Graficación
var low = new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'myfirstchart',


    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['total']


});

var data;
var s
var l;
let respuesta;
var tota1 = new Array();
var tota2 = new Array();
var tota3 = new Array();
var tota4 = new Array();
var tren1 = new Array();
var tren2 = new Array();
var tren3 = new Array();
var tren4 = new Array();
var suma;
var Uno = document.getElementById("Hola");
var dbRef = firebase.database().ref("boleto");
dbRef.on("value", snap => {
    data = snap.val();

    for (const key in data) {
        respuesta += data[key].datel + "---";
        respuesta += data[key].grande + "---";
        respuesta += data[key].total + "<br>";

        // totall += parseInt(data[key].total)

        if (data[key].transporteweb == "TR GRANDE") {
            tren1.push(data[key].transporteweb);
            tota1.push(data[key].total);


        }
        if (data[key].transporteweb == "TR CHICO") {
            tren2.push(data[key].transporteweb);
            tota2.push(data[key].total);
        }
        if (data[key].transporteweb == "TR NEGRO") {
            tren3.push(data[key].transporteweb);
            tota3.push(data[key].total);
        }
        if (data[key].transporteweb == "CAMIONETA") {
            tren4.push(data[key].transporteweb);
            tota4.push(data[key].total);
        }


        array = [
            { year: data[key].datel, value: data[key].total }

        ];

        low.setData(array);



        ////
    }

});


console.log(tren1);