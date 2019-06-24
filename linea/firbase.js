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
var fechaacutal = moment();
var tota1 = new Array();
var tota2 = new Array();
var tota3 = new Array();
var tota4 = new Array();
var tren1 = new Array();
var tren2 = new Array();
var tren3 = new Array();
var tren4 = new Array();
var fecha1 = new Array();
var fecha2 = new Array();
var fecha3 = new Array();
var fecha4 = new Array();
var grande1 = new Array();
var grande2 = new Array();
var grande3 = new Array();
var grande4 = new Array();
var pequeño1 = new Array();
var pequeño2 = new Array();
var pequeño3 = new Array();
var pequeño4 = new Array();
var totaldia = new Array();
var hoy1 = new Array();
var semana1 = new Array();
var quince1 = new Array();
var mes1 = new Array();
var hoy2 = new Array();
var quince2 = new Array();
var hoy3 = new Array();
var quince3 = new Array();
var hoy3 = new Array();
var quince3 = new Array();
var semana2 = new Array();
var semana3 = new Array();
var semana4 = new Array();
/////
var pg = new Array();
var pequeñohoy1 = new Array();
var thoy1 = new Array();
var tq1 = new Array();
var pequeñoq1 = new Array();
var grandehoy1 = new Array();
var grandeq1 = new Array();
////
var pequeñohoy2 = new Array();
var thoy2 = new Array();
var tq2 = new Array();
var pequeñoq2 = new Array();
var grandehoy2 = new Array();
var grandeq2 = new Array();
/////////////////
var pequeñohoy3 = new Array();
var thoy3 = new Array();
var tq3 = new Array();
var pequeñoq3 = new Array();
var grandehoy3 = new Array();
var grandeq3 = new Array();
//////////////////////
var pequeñohoy4 = new Array();
var thoy4 = new Array();
var tq4 = new Array();
var pequeñoq4 = new Array();
var grandehoy4 = new Array();
var grandeq4 = new Array();

////
var mes2 = new Array();
var hoy3 = new Array();
var quince3 = new Array();
var mes3 = new Array();
var hoy4 = new Array();
var quince4 = new Array();
var mes4 = new Array();
var suma = 0;
var suma1 = 0;
var suma2 = 0;
var suma3 = 0;


/////////////////Areglos de sumatoria
////Tren1
var sumatpq1 = 0;
var sumatgq1 = 0;
var sumatq1 = 0;
var sumatph1 = 0;
var sumatgh1 = 0;
var sumath1 = 0;
var sumatp1 = 0;
var sumatg1 = 0;
var sumat1 = 0;
var tg1 = 0;
var tp1 = 0;
var t1 = 0;
////Tren2
var sumatpq2 = 0;
var sumatgq2 = 0;
var sumatq2 = 0;
var sumatph2 = 0;
var sumatgh2 = 0;
var sumath2 = 0;
var sumatp2 = 0;
var sumatg2 = 0;
var sumat2 = 0;
var tg2 = 0;
var tp2 = 0;
var t2 = 0;

///////Tren3
var sumatpq3 = 0;
var sumatgq3 = 0;
var sumatq3 = 0;
var sumatph3 = 0;
var sumatgh3 = 0;
var sumath3 = 0;
var sumatp3 = 0;
var sumatg3 = 0;
var sumat3 = 0;
var tg3 = 0;
var tp3 = 0;
var t3 = 0;
/////////////Tren 4
var sumatpq4 = 0;
var sumatgq4 = 0;
var sumatq4 = 0;
var sumatph4 = 0;
var sumatgh4 = 0;
var sumath4 = 0;
var sumatp4 = 0;
var sumatg4 = 0;
var sumat4 = 0;
var tg4 = 0;
var tp4 = 0;
var t4 = 0;


var dbRef = firebase.database().ref("boleto");
dbRef.on("value", snap => {
    data = snap.val();

    for (const key in data) {
        respuesta += data[key].datel + "---";
        respuesta += data[key].grande + "---";
        respuesta += data[key].total + "<br>";

        // totall += parseInt(data[key].total)

        if (data[key].transporteweb == "TR GRANDE") {



            if (fechaacutal.diff(data[key].datel, 'days') >= 7 && fechaacutal.diff(data[key].datel, 'days') <= 20) {
                tren1.push(data[key].transporteweb);
                tq1.push(parseInt(data[key].total));
                quince1.push(data[key].datel);
                grandeq1.push(data[key].grande);
                pequeñoq1.push(data[key].pequeño);
            } else if (fechaacutal.diff(data[key].datel, 'days') <= 12) {
                tren1.push(data[key].transporteweb);
                thoy1.push(parseInt(data[key].total));
                semana1.push(data[key].datel);
                grandehoy1.push(data[key].grande);
                pequeñohoy1.push(data[key].pequeño);
            } else {
                tren1.push(data[key].transporteweb);
                tota1.push(parseInt(data[key].total));
                fecha1.push(data[key].datel);
                grande1.push(data[key].grande);
                pequeño1.push(data[key].pequeño);

            }





        }
        if (data[key].transporteweb == "TR CHICO") {

            if (fechaacutal.diff(data[key].datel, 'days') >= 7 && fechaacutal.diff(data[key].datel, 'days') <= 20) {
                tren2.push(data[key].transporteweb);
                tq2.push(parseInt(data[key].total));
                quince2.push(data[key].datel);
                grandeq2.push(data[key].grande);
                pequeñoq2.push(data[key].pequeño);
            } else if (fechaacutal.diff(data[key].datel, 'days') <= 12) {
                tren2.push(data[key].transporteweb);
                thoy2.push(parseInt(data[key].total));
                semana2.push(data[key].datel);
                grandehoy2.push(data[key].grande);
                pequeñohoy2.push(data[key].pequeño);
            } else {
                tren2.push(data[key].transporteweb);
                tota2.push(parseInt(data[key].total));
                fecha2.push(data[key].datel);
                grande2.push(data[key].grande);
                pequeño2.push(data[key].pequeño);

            }


        }
        if (data[key].transporteweb == "TR NEGRO") {

            if (fechaacutal.diff(data[key].datel, 'days') >= 7 && fechaacutal.diff(data[key].datel, 'days') <= 20) {
                tren3.push(data[key].transporteweb);
                tq3.push(parseInt(data[key].total));
                quince3.push(data[key].datel);
                grandeq3.push(data[key].grande);
                pequeñoq3.push(data[key].pequeño);
            } else if (fechaacutal.diff(data[key].datel, 'days') <= 12) {
                tren3.push(data[key].transporteweb);
                thoy3.push(parseInt(data[key].total));
                semana3.push(data[key].datel);
                grandehoy3.push(data[key].grande);
                pequeñohoy3.push(data[key].pequeño);
            } else {
                tren3.push(data[key].transporteweb);
                tota3.push(parseInt(data[key].total));
                fecha3.push(data[key].datel);
                grande3.push(data[key].grande);
                pequeño3.push(data[key].pequeño);

            }


        }
        if (data[key].transporteweb == "CAMIONETA") {

            if (fechaacutal.diff(data[key].datel, 'days') >= 7 && fechaacutal.diff(data[key].datel, 'days') <= 20) {
                tren4.push(data[key].transporteweb);
                tq4.push(parseInt(data[key].total));
                quince4.push(data[key].datel);
                grandeq4.push(data[key].grande);
                pequeñoq4.push(data[key].pequeño);
            } else if (fechaacutal.diff(data[key].datel, 'days') <= 12) {
                tren4.push(data[key].transporteweb);
                thoy4.push(parseInt(data[key].total));
                semana4.push(data[key].datel);
                grandehoy4.push(data[key].grande);
                pequeñohoy4.push(data[key].pequeño);
            } else {
                tren4.push(data[key].transporteweb);
                tota4.push(parseInt(data[key].total));
                fecha4.push(data[key].datel);
                grande4.push(data[key].grande);
                pequeño4.push(data[key].pequeño);

            }


        }


        //
        //low.setData(array);



        ////

    }

    //////Tren 1


    ///////////////************Quincena */
    tq1.forEach(function(element) {
        sumatq1 = sumatq1 + element;

    });

    grandeq1.forEach(function(element) {
        sumatgq1 = sumatgq1 + element;

    });

    pequeñoq1.forEach(function(element) {
        sumatpq1 = sumatpq1 + element;

    });

    //////////////////////***Semana */

    thoy1.forEach(function(element) {
        sumath1 = sumath1 + element;

    });

    grandeq1.forEach(function(element) {
        sumatgh1 = sumatgh1 + element;

    });

    pequeñoq1.forEach(function(element) {
        sumatph1 = sumatph1 + element;

    });

    ////////////****Menos de una semana*/

    tota1.forEach(function(element) {
        sumat1 = sumat1 + element;

    });

    grande1.forEach(function(element) {
        sumatg1 = sumatg1 + element;

    });

    pequeño1.forEach(function(element) {
        sumatp1 = sumatp1 + element;

    });


    //////Suma Total de Tren1

    t1 = sumat1 + sumatq1 + sumath1;
    tp1 = sumatpq1 + sumatph1 + sumatp1;
    tg2 = sumatgq1 + sumatgh1 + sumatg1;



    ///////////////////////////////////
    /////////////***Tren 2 */

    tq2.forEach(function(element) {
        sumatq2 = sumatq2 + element;

    });

    grandeq2.forEach(function(element) {
        sumatgq2 = sumatgq2 + element;

    });

    pequeñoq2.forEach(function(element) {
        sumatpq2 = sumatpq2 + element;

    });

    //////////////////////***Semana */

    thoy2.forEach(function(element) {
        sumath2 = sumath2 + element;

    });

    grandeq2.forEach(function(element) {
        sumatgh2 = sumatgh2 + element;

    });

    pequeñoq2.forEach(function(element) {
        sumatph2 = sumatph2 + element;

    });

    ////////////****Menos de una semana*/

    tota2.forEach(function(element) {
        sumat2 = sumat2 + element;

    });

    grande2.forEach(function(element) {
        sumatg2 = sumatg2 + element;

    });

    pequeño2.forEach(function(element) {
        sumatp2 = sumatp2 + element;

    });


    //////Suma Total de Tren1

    t2 = sumat2 + sumatq2 + sumath2;
    tp2 = sumatpq2 + sumatph2 + sumatp2;
    tg2 = sumatgq2 + sumatgh2 + sumatg2;

    ////////////////***Tren 3 */

    tq3.forEach(function(element) {
        sumatq3 = sumatq3 + element;

    });

    grandeq3.forEach(function(element) {
        sumatgq3 = sumatgq3 + element;

    });

    pequeñoq3.forEach(function(element) {
        sumatpq3 = sumatpq3 + element;

    });

    //////////////////////***Semana */

    thoy3.forEach(function(element) {
        sumath3 = sumath3 + element;

    });

    grandeq3.forEach(function(element) {
        sumatgh3 = sumatgh3 + element;

    });

    pequeñoq3.forEach(function(element) {
        sumatph3 = sumatph3 + element;

    });

    ////////////****Menos de una semana*/

    tota3.forEach(function(element) {
        sumat3 = sumat3 + element;

    });

    grande3.forEach(function(element) {
        sumatg3 = sumatg3 + element;

    });

    pequeño3.forEach(function(element) {
        sumatp3 = sumatp3 + element;

    });


    //////Suma Total de Tren1

    t3 = sumat3 + sumatq3 + sumath3;
    tp3 = sumatpq3 + sumatph3 + sumatp3;
    tg3 = sumatgq3 + sumatgh3 + sumatg3;
    /////////////////***Tren 4 */


    tq4.forEach(function(element) {
        sumatq4 = sumatq4 + element;

    });

    grandeq4.forEach(function(element) {
        sumatgq4 = sumatgq4 + element;

    });

    pequeñoq4.forEach(function(element) {
        sumatpq4 = sumatpq4 + element;

    });

    //////////////////////***Semana */

    thoy4.forEach(function(element) {
        sumath4 = sumath4 + element;

    });

    grandeq4.forEach(function(element) {
        sumatgh4 = sumatgh4 + element;

    });

    pequeñoq4.forEach(function(element) {
        sumatph4 = sumatph4 + element;

    });

    ////////////****Menos de una semana*/

    tota4.forEach(function(element) {
        sumat4 = sumat4 + element;

    });

    grande4.forEach(function(element) {
        sumatg4 = sumatg4 + element;

    });

    pequeño4.forEach(function(element) {
        sumatp4 = sumatp4 + element;

    });


    //////Suma Total de Tren1

    t4 = sumat4 + sumatq4 + sumath4;
    tp4 = sumatpq4 + sumatph4 + sumatp4;
    tg4 = sumatgq4 + sumatgh4 + sumatg4;





    //console.log(fechaactual);
    //console.log(fecha1[15])

    //console.log(moment(fecha).format('MM/DD/YYYY HH:mm:ss'));




});




//var fechaacutal = moment();

//////Datos

//});