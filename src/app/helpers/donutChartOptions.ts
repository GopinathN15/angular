import { Options } from "highcharts";

export const donutChartOptions: Options = {

    chart:{
        type:'pie',
        plotShadow:false
    },
    credits:{
        enabled:false
    },
    plotOptions:{
        pie:{
            innerSize:'99%',
            borderWidth:40,
            borderColor:'',
            slicedOffset:20,
            dataLabels:{
                connectorWidth:0
            }
    
        }
    },
    title:{
        verticalAlign:'middle',
        floating: true,
        text:'$ 5000,000.00'
    },
    legend:{
        enabled:false,
    },
    series:[
        {
        type:'pie',
        data:[
            
                { name:'',y: 1, color:'#eeaee'},
                {name:'b',y: 2, color:'red'},
                {name:'c',y: 3, color:'#80adb5'},
                {name:'d',y: 4, color:'#eeeee'},
                {name:'e',y: 5, color:'#506ef9'},

        ]
    }
    ]

}