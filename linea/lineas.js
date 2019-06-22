//////////////////////////////////////////
x = 8

new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'myfirstchart',

    data: [


        { year: '2008', value: 2 }
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value']


});