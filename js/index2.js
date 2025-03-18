
//左1
(function() {
    var myChart = echarts.init(document.querySelector(".Pie .chart")); // 实例化对象
    var option = {
        color: ["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#ea7ccc"],//可以多写几种颜色
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: "#eeeeee",
                fontSize: "12"
            },
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '60%',
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    myChart.setOption(option);//把配置项给实例对象
    window.addEventListener("resize", function() {
        myChart.resize();
    });// 图表跟随屏幕自动的去适应
})();

//左2
(function() {
    var myChart = echarts.init(document.querySelector(".Doughnut .chart"));
    var option = {
        color: ["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#ea7ccc"],//可以多写几种颜色
        tooltip: {
            trigger: 'item'
        },
        legend: {
            left: 'center',
            textStyle: {
                color: "#eeeeee",
                fontSize: "12"
            },
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['50%', '80%'],
                avoidLabelOverlap: false,
                padAngle: 2, //间隔大小，但是版本低
                itemStyle: { //圆角，但是版本低
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 14,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ]
            }
        ]
    };
    myChart.setOption(option);//把配置项给实例对象
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

//左3
(function() {
    var myChart = echarts.init(document.querySelector(".Nightingale .chart"));
    var option = {
        color: ["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#ea7ccc"],//可以多写几种颜色
        grid: {
            left: "3%",
            top: "3%",
            right: "10%",
            bottom: "10%",
            containLabel: true,
            show:false,
            borderColor: "#eeeeee"
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: "#eeeeee",
                fontSize: "12"
            }
        },
        series: [
            {
                name: 'Radius Mode',
                type: 'pie',
                radius: [20, 80],
                roseType: 'radius',//roseType: 'area',
                itemStyle: {
                    borderRadius: 10
                },
                label: {
                    show: true
                },
                emphasis: {
                    label: {
                        show: true
                    }
                },
                data: [
                    { value: 40, name: 'rose 1' },
                    { value: 33, name: 'rose 2' },
                    { value: 28, name: 'rose 3' },
                    { value: 22, name: 'rose 4' },
                    { value: 20, name: 'rose 5' },
                    { value: 15, name: 'rose 6' },
                    { value: 12, name: 'rose 7' },
                    { value: 10, name: 'rose 8' }
                ]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

//中1
(function() {
    var myChart = echarts.init(document.querySelector(".Nested_Pies .chart"));
    var option = {
        color: ["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#ea7ccc"],//可以多写几种颜色
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        grid: {
            left: "3%",
            top: "10%",
            right: "10%",
            bottom: "10%",
            containLabel: true,
            show:false,
            borderColor: "#eeeeee"
        },
        legend: {
            show: false
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                selectedMode: 'single',
                radius: [0, '30%'],
                label: {
                    position: 'inner',
                    fontSize: 10
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1548, name: 'Search Engine' },
                    { value: 775, name: 'Direct' },
                    { value: 679, name: 'Marketing', selected: true }
                ]
            },
            {
                name: 'Access From',
                type: 'pie',
                radius: ['45%', '60%'],
                labelLine: {
                    length: 10
                },
                label: {
                    formatter: '{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    //formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eeeeee',
                    borderColor: '#8C8D8E',
                    borderWidth: 1,
                    borderRadius: 4,
                    rich: {
                        a: { // 主题
                            color: '#6E7079',
                            lineHeight: 12,
                            align: 'center'
                        },
                        hr: {
                            borderColor: '#8C8D8E',
                            width: '100%',
                            borderWidth: 1,
                            height: 0
                        },
                        b: {
                            color: '#4C5058',
                            fontSize: 8,
                            fontWeight: 'bold',
                            lineHeight: 15
                        },
                        per: {
                            color: '#fff',
                            backgroundColor: '#4C5058',
                            padding: [3, 4],
                            borderRadius: 4
                        }
                    }
                },
                data: [
                    { value: 1048, name: 'Baidu' },
                    { value: 335, name: 'Direct' },
                    { value: 310, name: 'Email' },
                    { value: 251, name: 'Google' },
                    { value: 234, name: 'Union Ads' },
                    { value: 147, name: 'Bing' },
                    { value: 135, name: 'Video Ads' },
                    { value: 102, name: 'Others' }
                ]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

//中2
(function() {
    var myChart = echarts.init(document.querySelector(".Scatter .chart"));
    var option={
        grid: {
            left: "3%",
            top: "10%",
            right: "10%",
            bottom: "10%",
            containLabel: true,
            show:false,
            borderColor: "#eeeeee"
        },
        axisLabel: { color: "#eeeeee"},
        xAxis: {
            name:"x轴",
            nameTextStyle:{
                fontSize:14,
                color:"#eeeeee",
                padding:[8,0,0,0]
            },
            nameLocation:'center',
            scale: true,
            splitLine:false,
            axisLine:{
                lineStyle:{
                    color: "#eeeeee"
                }
            }
        },
        yAxis: {
            name:"y轴",
            nameTextStyle:{
                fontSize:14,
                color:"#eeeeee",
                padding:[0,0,8,0]
            },
            nameLocation:'center',
            scale: true,
            splitLine:false,
            axisLine:{
                lineStyle:{
                    color: "#eeeeee"
                }
            }
        },
        series: [
            {
                type: 'effectScatter', //涟漪特效
                symbolSize: 20,
                color:'#91cc75',
                data: [
                    [172.7, 105.2],
                    [153.4, 42]
                ]
            },
            {
                type: 'scatter',
                data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
                      [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
                      [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
                      [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
                      [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
                      [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
                      [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
                      [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],
                      [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5],
                      [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
                      [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2],
                      [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2],
                      [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3],
                      [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2],
                      [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6],
                      [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0],
                      [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0],
                      [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9],
                      [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
                      [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
                      [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
                      [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
                      [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
                      [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
                      [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
                      [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
                      [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
                      [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]],
                color:'#ee6666'
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

//中3
(function() {
    var myChart = echarts.init(document.querySelector(".Scatter_Single_Axis .chart"));
    const hours = [
        '12a', '1a', '2a', '3a', '4a', '5a', '6a',
        '7a', '8a', '9a', '10a', '11a',
        '12p', '1p', '2p', '3p', '4p', '5p',
        '6p', '7p', '8p', '9p', '10p', '11p'
    ];
    const days = ['Sat', 'Fri', 'Thu','Wed', 'Tue', 'Mon', 'Sun'];
    const data = [
                [0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0],
                [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1],
                [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3],
                [0, 21, 3], [0, 22, 2], [0, 23, 5],
                [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0],
                [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6],
                [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5],
                [1, 21, 5], [1, 22, 7], [1, 23, 2],
                [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0],
                [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9],
                [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7],
                [2, 21, 4], [2, 22, 2], [2, 23, 4],
                [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0],
                [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14],
                [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6],
                [3, 21, 4], [3, 22, 4], [3, 23, 1],
                [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0],
                [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4],
                [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3],
                [4, 21, 7], [4, 22, 3], [4, 23, 0],
                [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0],
                [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10],
                [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3],
                [5, 21, 4], [5, 22, 2], [5, 23, 0],
                [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0],
                [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1],
                [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1],
                [6, 21, 2], [6, 22, 2], [6, 23, 6]
                ];
    const title = [];
    const singleAxis = [];
    const series = [];
    days.forEach(function (day, idx) {
        title.push({ //左侧标题
            textBaseline: 'middle', //居中
            top: ((idx + 0.5) * 90) / 7 + '%', // 距离
            text: day, // 设置文字
            textStyle:{
                color: "#eeeeee"
            } // 设置颜色
        });
        singleAxis.push({
            left: 50, // 设置左侧距离
            type: 'category',
            boundaryGap: false,
            data: hours, // 设置轴数据
            top: (idx * 90) / 7 + 5 + '%', // 设置上方距离
            height: 100 / 7 - 10 + '%', // 设置轴高度
            axisLabel: {
                interval: 2
            }, // 设置轴标签显示
            axisLine:{
                lineStyle:{
                    color: "#eeeeee"
                }
            } // 设置轴颜色
        });
        series.push({
            singleAxisIndex: idx,
            coordinateSystem: 'singleAxis',
            type: 'scatter',
            data: [],
            symbolSize: function (dataItem) {
                return dataItem[1] * 3;
            } // 大小按idx的第二列设置
        });
    });
    data.forEach(function (dataItem) {
        series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
    });
    var option = {
        color: ["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#ea7ccc"],//可以多写几种颜色
        title: title,
        textStyle:{
            color:"#eeeeee"
        },
        singleAxis: singleAxis,
        series: series
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

//右1
(function() {
    var myChart = echarts.init(document.querySelector(".Distribution .chart"));
    const data = {
        "Female": [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
                    [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
                    [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
                    [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
                    [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
                    [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
                    [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
                    [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
                    [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
                    [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1],
                    [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5],
                    [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2],
                    [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6],
                    [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0],
                    [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
                    [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
                    [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
                    [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]
                ],
        "Male": [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
                    [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6],
                    [180.0, 76.6], [177.8, 83.6], [192.0, 90.0], [176.0, 74.6], [174.0, 71.0],
                    [184.0, 79.6], [192.7, 93.8], [171.5, 70.0], [173.0, 72.4], [176.0, 85.9],
                    [176.0, 78.8], [180.5, 77.8], [172.7, 66.2], [176.0, 86.4], [173.5, 81.8],
                    [178.0, 89.6], [180.3, 82.8], [180.3, 76.4], [164.5, 63.2], [173.0, 60.9],
                    [183.5, 74.8], [175.5, 70.0], [188.0, 72.4], [189.2, 84.1], [172.8, 69.1],
                    [170.0, 59.5], [182.0, 67.2], [170.0, 61.3], [177.8, 68.6], [184.2, 80.1],
                    [186.7, 87.8], [171.4, 84.7], [172.7, 73.4], [175.3, 72.1], [180.3, 82.6],
                    [182.9, 88.7], [188.0, 84.1], [177.2, 94.1], [172.1, 74.9], [167.0, 59.1],
                    [169.5, 75.6], [174.0, 86.2], [172.7, 75.3], [182.2, 87.1], [164.1, 55.2],
                    [163.0, 57.0], [171.5, 61.4], [184.2, 76.8], [174.0, 86.8], [174.0, 72.2],
                    [177.8, 79.5], [177.8, 78.6], [177.8, 71.8], [177.8, 116.4], [163.8, 72.2],
                    [188.0, 83.6], [198.1, 85.5], [175.3, 90.9], [166.4, 85.9], [190.5, 89.1],
                    [166.4, 75.0], [177.8, 77.7], [179.7, 86.4], [172.7, 90.9], [190.5, 73.6],
                    [185.4, 76.4], [168.9, 69.1], [167.6, 84.5], [175.3, 64.5], [170.2, 69.1],
                    [190.5, 108.6], [177.8, 86.4], [190.5, 80.9], [177.8, 87.7], [184.2, 94.5],
                    [176.5, 80.2], [177.8, 72.0], [180.3, 71.4], [171.4, 72.7], [172.7, 84.1],
                    [188.0, 82.7], [175.3, 86.4], [170.5, 67.7], [179.1, 92.7], [177.8, 93.6],
                    [174.0, 80.0], [176.5, 82.3], [180.3, 73.6], [167.6, 74.1], [188.0, 85.9],
                    [180.3, 73.2], [167.6, 76.3], [183.0, 65.9], [183.0, 90.9], [179.1, 89.1],
                    [170.2, 62.3], [177.8, 82.7], [179.1, 79.1], [190.5, 98.2], [177.8, 84.1],
                    [180.3, 83.2], [180.3, 83.2]]
    }
    var option = {
        color: ["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#ea7ccc"],//可以多写几种颜色
        grid: {
            left: '3%',
            right: '7%',
            bottom: '7%',
            top:'15%',
            containLabel: true
        },
        tooltip: {
            showDelay: 0,
            formatter: function (params) {
                if (params.value.length > 1) {
                    return (
                        params.seriesName +' :<br/>' +params.value[0] +'cm ' +params.value[1] +'kg '
                    );
                } else {
                    return (
                        params.seriesName +' :<br/>' +params.name +' : ' +params.value +'kg '
                    );
                }
            },
            axisPointer: {
                show: true,
                type: 'cross',
                lineStyle: {
                    type: 'solid',
                    width: 1
                }
            }
        },
        toolbox: {
            feature: {
                dataZoom: {},
                brush: {
                    type: ['rect', 'polygon', 'clear']
                }
            }
        },
        legend: {
            data: ['Female', 'Male'],
            left: 'center',
            bottom: 10,
            textStyle: {
                color: "#eeeeee",
                fontSize: "10"
            }
        },
        xAxis: {
            type: 'value',
            scale: true,
            axisLabel: {formatter: '{value} cm'},
            splitLine: {
                show: false
            },
            axisLine:{
                lineStyle:{
                    color: "#eeeeee"
                }
            }
        },
        yAxis: {
            type: 'value',
            scale: true,
            axisLabel: { formatter: '{value} kg' },
            splitLine: { show: false },
            axisLine:{
                lineStyle:{
                    color: "#eeeeee"
                }
            }
        },
        series: [
            {
                name: 'Female',
                type: 'scatter',
                emphasis: {
                    focus: 'series'
                },
                data: data.Female,
                markArea: {
                    silent: true,
                    itemStyle: {
                        color: 'transparent',
                        borderWidth: 1,
                        borderType: 'solid'
                    },
                    data:[[
                        {
                            name: 'Female Data Range',
                            xAxis: 'min',
                            yAxis: 'min'
                        },
                        {
                            xAxis: 'max',
                            yAxis: 'max'
                        }
                    ]]
                },
                markPoint: {
                    data: [
                      { type: 'max', name: 'Max' },
                      { type: 'min', name: 'Min' }
                    ]
                },
                markLine: {
                    lineStyle: {
                        type: 'solid'
                    },
                    data: [{ type: 'average', name: 'AVG' }, { xAxis: 160 }]
                }
            },
            {
                name: 'Male',
                type: 'scatter',
                emphasis: {
                    focus: 'series'
                },
                data: data.Male,
                markArea: {
                    silent: true,
                    itemStyle: {
                        color: 'transparent',
                        borderWidth: 1,
                        borderType: 'solid'
                    },
                    data: [[
                        {
                            name: 'Male Data Range',
                            xAxis: 'min',
                            yAxis: 'min'
                        },
                        {
                            xAxis: 'max',
                            yAxis: 'max'
                        }
                    ]]
                },
                markPoint: {
                    data: [
                        { type: 'max', name: 'Max' },
                        { type: 'min', name: 'Min' }
                    ]
                },
                markLine: {
                    lineStyle: {
                        type: 'solid'
                    },
                    data: [{ type: 'average', name: 'Average' }, { xAxis: 170 }]
                }
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

//右2
(function() {
    var myChart = echarts.init(document.querySelector(".ShangHai_Index .chart"));
    const upColor = '#ec0000';
    const upBorderColor = '#8A0000';
    const downColor = '#00da3c';
    const downBorderColor = '#008F28';
    const data0 = splitData([
      ['2013/1/24', 2320.26, 2320.26, 2287.3, 2362.94],
      ['2013/1/25', 2300, 2291.3, 2288.26, 2308.38],
      ['2013/1/28', 2295.35, 2346.5, 2295.35, 2346.92],
      ['2013/1/29', 2347.22, 2358.98, 2337.35, 2363.8],
      ['2013/1/30', 2360.75, 2382.48, 2347.89, 2383.76],
      ['2013/1/31', 2383.43, 2385.42, 2371.23, 2391.82],
      ['2013/2/1', 2377.41, 2419.02, 2369.57, 2421.15],
      ['2013/2/4', 2425.92, 2428.15, 2417.58, 2440.38],
      ['2013/2/5', 2411, 2433.13, 2403.3, 2437.42],
      ['2013/2/6', 2432.68, 2434.48, 2427.7, 2441.73],
      ['2013/2/7', 2430.69, 2418.53, 2394.22, 2433.89],
      ['2013/2/8', 2416.62, 2432.4, 2414.4, 2443.03],
      ['2013/2/18', 2441.91, 2421.56, 2415.43, 2444.8],
      ['2013/2/19', 2420.26, 2382.91, 2373.53, 2427.07],
      ['2013/2/20', 2383.49, 2397.18, 2370.61, 2397.94],
      ['2013/2/21', 2378.82, 2325.95, 2309.17, 2378.82],
      ['2013/2/22', 2322.94, 2314.16, 2308.76, 2330.88],
      ['2013/2/25', 2320.62, 2325.82, 2315.01, 2338.78],
      ['2013/2/26', 2313.74, 2293.34, 2289.89, 2340.71],
      ['2013/2/27', 2297.77, 2313.22, 2292.03, 2324.63],
      ['2013/2/28', 2322.32, 2365.59, 2308.92, 2366.16],
      ['2013/3/1', 2364.54, 2359.51, 2330.86, 2369.65],
      ['2013/3/4', 2332.08, 2273.4, 2259.25, 2333.54],
      ['2013/3/5', 2274.81, 2326.31, 2270.1, 2328.14],
      ['2013/3/6', 2333.61, 2347.18, 2321.6, 2351.44],
      ['2013/3/7', 2340.44, 2324.29, 2304.27, 2352.02],
      ['2013/3/8', 2326.42, 2318.61, 2314.59, 2333.67],
      ['2013/3/11', 2314.68, 2310.59, 2296.58, 2320.96],
      ['2013/3/12', 2309.16, 2286.6, 2264.83, 2333.29],
      ['2013/3/13', 2282.17, 2263.97, 2253.25, 2286.33],
      ['2013/3/14', 2255.77, 2270.28, 2253.31, 2276.22],
      ['2013/3/15', 2269.31, 2278.4, 2250, 2312.08],
      ['2013/3/18', 2267.29, 2240.02, 2239.21, 2276.05],
      ['2013/3/19', 2244.26, 2257.43, 2232.02, 2261.31],
      ['2013/3/20', 2257.74, 2317.37, 2257.42, 2317.86],
      ['2013/3/21', 2318.21, 2324.24, 2311.6, 2330.81],
      ['2013/3/22', 2321.4, 2328.28, 2314.97, 2332],
      ['2013/3/25', 2334.74, 2326.72, 2319.91, 2344.89],
      ['2013/3/26', 2318.58, 2297.67, 2281.12, 2319.99],
      ['2013/3/27', 2299.38, 2301.26, 2289, 2323.48],
      ['2013/3/28', 2273.55, 2236.3, 2232.91, 2273.55],
      ['2013/3/29', 2238.49, 2236.62, 2228.81, 2246.87],
      ['2013/4/1', 2229.46, 2234.4, 2227.31, 2243.95],
      ['2013/4/2', 2234.9, 2227.74, 2220.44, 2253.42],
      ['2013/4/3', 2232.69, 2225.29, 2217.25, 2241.34],
      ['2013/4/8', 2196.24, 2211.59, 2180.67, 2212.59],
      ['2013/4/9', 2215.47, 2225.77, 2215.47, 2234.73],
      ['2013/4/10', 2224.93, 2226.13, 2212.56, 2233.04],
      ['2013/4/11', 2236.98, 2219.55, 2217.26, 2242.48],
      ['2013/4/12', 2218.09, 2206.78, 2204.44, 2226.26],
      ['2013/4/15', 2199.91, 2181.94, 2177.39, 2204.99],
      ['2013/4/16', 2169.63, 2194.85, 2165.78, 2196.43],
      ['2013/4/17', 2195.03, 2193.8, 2178.47, 2197.51],
      ['2013/4/18', 2181.82, 2197.6, 2175.44, 2206.03],
      ['2013/4/19', 2201.12, 2244.64, 2200.58, 2250.11],
      ['2013/4/22', 2236.4, 2242.17, 2232.26, 2245.12],
      ['2013/4/23', 2242.62, 2184.54, 2182.81, 2242.62],
      ['2013/4/24', 2187.35, 2218.32, 2184.11, 2226.12],
      ['2013/4/25', 2213.19, 2199.31, 2191.85, 2224.63],
      ['2013/4/26', 2203.89, 2177.91, 2173.86, 2210.58],
      ['2013/5/2', 2170.78, 2174.12, 2161.14, 2179.65],
      ['2013/5/3', 2179.05, 2205.5, 2179.05, 2222.81],
      ['2013/5/6', 2212.5, 2231.17, 2212.5, 2236.07],
      ['2013/5/7', 2227.86, 2235.57, 2219.44, 2240.26],
      ['2013/5/8', 2242.39, 2246.3, 2235.42, 2255.21],
      ['2013/5/9', 2246.96, 2232.97, 2221.38, 2247.86],
      ['2013/5/10', 2228.82, 2246.83, 2225.81, 2247.67],
      ['2013/5/13', 2247.68, 2241.92, 2231.36, 2250.85],
      ['2013/5/14', 2238.9, 2217.01, 2205.87, 2239.93],
      ['2013/5/15', 2217.09, 2224.8, 2213.58, 2225.19],
      ['2013/5/16', 2221.34, 2251.81, 2210.77, 2252.87],
      ['2013/5/17', 2249.81, 2282.87, 2248.41, 2288.09],
      ['2013/5/20', 2286.33, 2299.99, 2281.9, 2309.39],
      ['2013/5/21', 2297.11, 2305.11, 2290.12, 2305.3],
      ['2013/5/22', 2303.75, 2302.4, 2292.43, 2314.18],
      ['2013/5/23', 2293.81, 2275.67, 2274.1, 2304.95],
      ['2013/5/24', 2281.45, 2288.53, 2270.25, 2292.59],
      ['2013/5/27', 2286.66, 2293.08, 2283.94, 2301.7],
      ['2013/5/28', 2293.4, 2321.32, 2281.47, 2322.1],
      ['2013/5/29', 2323.54, 2324.02, 2321.17, 2334.33],
      ['2013/5/30', 2316.25, 2317.75, 2310.49, 2325.72],
      ['2013/5/31', 2320.74, 2300.59, 2299.37, 2325.53],
      ['2013/6/3', 2300.21, 2299.25, 2294.11, 2313.43],
      ['2013/6/4', 2297.1, 2272.42, 2264.76, 2297.1],
      ['2013/6/5', 2270.71, 2270.93, 2260.87, 2276.86],
      ['2013/6/6', 2264.43, 2242.11, 2240.07, 2266.69],
      ['2013/6/7', 2242.26, 2210.9, 2205.07, 2250.63],
      ['2013/6/13', 2190.1, 2148.35, 2126.22, 2190.1]
    ]);
    function splitData(rawData) {
        const categoryData = [];
        const values = [];
        for (var i = 0; i < rawData.length; i++) {
            categoryData.push(rawData[i].splice(0, 1)[0]);
            values.push(rawData[i]);
        }
        return {
            categoryData: categoryData,
            values: values
        };
    }
    function calculateMA(dayCount) {
        var result = [];
        for (var i = 0, len = data0.values.length; i < len; i++) {
            if (i < dayCount) {
                result.push('-');
                continue;
            }
            var sum = 0;
            for (var j = 0; j < dayCount; j++) {
                sum += +data0.values[i - j][1];
            }
            result.push(sum / dayCount);
        }
        return result;
    }
    var option = {
        color: ["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#ea7ccc"],//可以多写几种颜色
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30'],
            textStyle: {
                color: "#eeeeee",
                fontSize: "10"
            }
        },
        grid: {
            left: '5%',
            right: '10%',
            bottom: '18%',
            top:'15%'
        },
        xAxis: {
            type: 'category',
            data: data0.categoryData,
            boundaryGap: false,
            axisLine: { onZero: false },
            splitLine: { show: false },
            min: 'dataMin',
            max: 'dataMax',
            axisLine:{
                lineStyle:{
                    color: "#eeeeee"
                }
            }
        },
        yAxis: {
            scale: true,
            splitArea: {
                show: false
            },
            axisLine:{
                lineStyle:{
                    color: "#eeeeee"
                }
            }
        },
        dataZoom: [
            {
              type: 'inside',
              start: 75,
              end: 100,
              color:'#eeeeee'
            },
            {
              show: true,
              type: 'slider',
              top: '85%',
              start: 75,
              end: 100,
              backgroundColor: 'transparent',
              dataBackground: {//数据阴影的样式。
                    lineStyle: {color: '#eeeeee'},//阴影的线条样式
                    areaStyle: {color: '#eeeeee'},//阴影的填充样式
              },
            }
        ],
        series: [
            {
                name: '日K',
                type: 'candlestick',
                data: data0.values,
                itemStyle: {
                    color: upColor,
                    color0: downColor,
                    borderColor: upBorderColor,
                    borderColor0: downBorderColor
                },
                markPoint: {
                    label: {
                        formatter: function (param) {
                            return param != null ? Math.round(param.value) + '' : '';
                        }
                    },
                    data: [
                        {
                            name: 'highest value',
                            type: 'max',
                            valueDim: 'highest'
                        },
                        {
                            name: 'lowest value',
                            type: 'min',
                            valueDim: 'lowest'
                        },
                        {
                            name: 'average value on close',
                            type: 'average',
                            valueDim: 'close'
                        }
                    ],
                    tooltip: {
                        formatter: function (param) {
                            return param.name + '<br>' + (param.data.coord || '');
                        }
                    }
                },
                markLine: {
                    symbol: ['none', 'none'],
                    data: [
                        {
                            name: 'from lowest to highest',
                            type: 'min',
                            valueDim: 'lowest',
                            symbol: 'circle',
                            symbolSize: 10,
                            label: {
                                show: false
                            },
                            emphasis: {
                                label: {
                                    show: false
                                }
                            },
                            lineStyle:{
                                type:'dashed',
                                color: '#eeeeee',
                                width: 1
                            }
                        },
                        {
                            type: 'max',
                            valueDim: 'highest',
                            symbol: 'circle',
                            symbolSize: 10,
                            label: {
                                show: false
                            },
                            emphasis: {
                                label: {
                                    show: false
                                }
                            }
                        },
                        {
                            name: 'min line on close',
                            type: 'min',
                            valueDim: 'close',
                            lineStyle:{
                                    type:'dashed',
                                    color: '#eeeeee',
                                    width: 1
                            }
                        },
                        {
                            name: 'max line on close',
                            type: 'max',
                            valueDim: 'close',
                            lineStyle:{
                                    type:'dashed',
                                    color: '#eeeeee',
                                    width: 1
                            }
                        }
                    ]
                }
            },
            {
                name: 'MA5',
                type: 'line',
                data: calculateMA(5),
                smooth: true,
                lineStyle: {
                    width:3,
                    opacity:0.5
                }
            },
            {
                name: 'MA10',
                type: 'line',
                data: calculateMA(10),
                smooth: true,
                lineStyle: {
                    width:3,
                    opacity:0.5
                }
            },
            {
                name: 'MA20',
                type: 'line',
                data: calculateMA(20),
                smooth: true,
                lineStyle: {
                    width:3,
                    opacity:0.5
                }
            },
            {
                name: 'MA30',
                type: 'line',
                data: calculateMA(30),
                smooth: true,
                lineStyle: {
                    width:3,
                    opacity:0.5
                }
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

//右3
(function() {
    var myChart = echarts.init(document.querySelector(".Radar .chart"));
    var option = {
        color: ["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#ea7ccc"],//可以多写几种颜色
        tooltip: {trigger: 'item'},
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['Allocated Budget', 'Actual Spending'],
            textStyle: {
                color: "#eeeeee",
                fontSize: 14
            }
        },
        grid: {
            left: '5%',
            right: '10%',
            bottom: '18%',
            top:'15%'
        },
        backgroundColor:'',
        radar: {// shape: 'circle',
            indicator: [
                { name: 'Sales', max: 6500 },
                { name: 'Administration', max: 16000 },
                { name: 'Information Technology', max: 30000 },
                { name: 'Customer Support', max: 38000 },
                { name: 'Development', max: 52000 },
                { name: 'Marketing', max: 25000 }
            ],
            splitArea: {
                areaStyle: {
                    color: 'transparent' // 雷达图区域网格的颜色
                }
            },
            lineStyle:{
                width:3
            },
            axisLabel:{
                fontSize:14,
                color: "#eeeeee"
            }
        },
        series: [
            {
                name: 'Budget vs spending',
                type: 'radar',
                data: [
                    {
                        value: [4200, 3000, 20000, 35000, 50000, 18000],
                        name: 'Allocated Budget'
                    },
                    {
                        value: [5000, 14000, 28000, 26000, 42000, 21000],
                        name: 'Actual Spending'
                    }
                ]
           }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();
