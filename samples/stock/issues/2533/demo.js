$(function () {
    $('#container').highcharts('StockChart', {
        title: {
            text: 'In Highstock <= 1.3.9 the first point was not visible as the group start was outside the dataMin'
        },


        rangeSelector: {
            inputEnabled: false
        },

        series: [{
            data: [
                [1223596800001, -5.8], // 10 Oct 2008 00:00:01 GMT. No issue if the timestamp is 1223596800000 (10 Oct 2008 00:00:00 GMT)
                [1230858000000, -4.1],
                [1230944400000, -0.5],
                [1231030800000, -8.9],
                [1231117200000, -9.7],
                [1231203600000, -3.4],
                [1231290000000, -3.9],
                [1231376400000, -2.4],
                [1231462800000, 3.8],
                [1231549200000, 3.1],
                [1231635600000, 0.0],
                [1231722000000, 5.6],
                [1231808400000, 3.6],
                [1231894800000, -3.6],
                [1231981200000, -6.0],
                [1232067600000, -3.8],
                [1232154000000, 1.5],
                [1232240400000, 0.0],
                [1232326800000, -1.1],
                [1232413200000, 0.5],
                [1232499600000, 0.0],
                [1232586000000, -0.6],
                [1232672400000, 0.8],
                [1232758800000, 0.6],
                [1232845200000, -3.9],
                [1232931600000, -4.3],
                [1233018000000, -6.1],
                [1233104400000, -0.3],
                [1233190800000, -2.9],
                [1233277200000, -4.0],
                [1233363600000, -4.4]
            ],
            dataGrouping: {
                forced: true, // No issue when dataGrouping isn't forced
                units: [
                    [
                        'day',
                        [1]
                    ]
                ]
            },
            marker: {
                enabled: true
            }
        }]

    });

});