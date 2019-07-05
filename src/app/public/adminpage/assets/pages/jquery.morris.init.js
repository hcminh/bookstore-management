
/**
* Theme: Adminto Admin Template
* Author: Coderthemes
* Morris Chart
*/

!function($) {
    "use strict";

    var MorrisCharts = function() {};

    //creates line chart
    MorrisCharts.prototype.createLineChart = function(element, data, xkey, ykeys, labels, opacity, Pfillcolor, Pstockcolor, lineColors) {
        Morris.Line({
          element: element,
          data: data,
          xkey: xkey,
          ykeys: ykeys,
          labels: labels,
          fillOpacity: opacity,
          pointFillColors: Pfillcolor,
          pointStrokeColors: Pstockcolor,
          behaveLikeLine: true,
          gridLineColor: '#eef0f2',
          hideHover: 'auto',
          lineWidth: '3px',
          pointSize: 0,
          preUnits: 'SL ',
          resize: true, //defaulted to true
          lineColors: lineColors
        });
    }
    MorrisCharts.prototype.init = function() {

        //create line chart
        var $data  = [
             { y: '01', a: 50, b: 0 },
            { y: '02', a: 75, b: 50 },
            { y: '03', a: 30, b: 80 },
            { y: '04', a: 50, b: 50 },
            { y: '05', a: 75, b: 10 },
            { y: '06', a: 50, b: 40 },
            { y: '07', a: 75, b: 50 },
            { y: '08', a: 100, b: 70 },
            { y: '09', a: 100, b: 70 },
            { y: '10', a: 80, b: 70 },
            { y: '11', a: 60, b: 70 },
            { y: '12', a: 20, b: 30 },
          ];
        this.createLineChart('morris-line-example', $data, 'y', ['a', 'b'], ['Sách bán', 'Sách mua'],['0.1'],['#ffffff'],['#999999'], ['#ff8acc', '#5b69bc']);

    },
    //init
    $.MorrisCharts = new MorrisCharts, $.MorrisCharts.Constructor = MorrisCharts
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.MorrisCharts.init();
}(window.jQuery);