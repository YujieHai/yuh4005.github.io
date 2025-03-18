
//左1：折线图堆叠
(function() {
    var myChart = echarts.init(document.querySelector(".Stacked_Line .chart")); // 实例化对象
    const data = {
        "Email": [120,220,150,320,820,132,182],
        "Union_Ads": [101,191,201,301,232,332,932],
        "Video_Ads": [901,134,234,154,334,934,90],
        "Direct": [230,330,330,290,190,390,1290],
        "Search_Engine": [330,1330,210,310,410,320,1320]
    }
    var option = {// 2. 指定配置项和数据
        color: ["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#ea7ccc"],//可以多写几种颜色
        tooltip: {
            trigger: "axis",
            axisPointer: {// 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: "3%",
            top: "3%",
            right: "10%",
            bottom: "10%",
            containLabel: true,
            show:false,
            borderColor: "#eeeeee"
        },// 修改图表的大小
        legend: {
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
            textStyle: {
                color: "#eeeeee",
                fontSize: "10"
            },
            itemWidth: 10,
            itemHeight: 10,
            bottom: "0%"
        },//图例设置
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },//x轴设置
        yAxis: {
            type: 'value',
            splitLine:false
        },//y轴设置
        axisLabel: { color: "#eeeeee"}, //轴标签设置
        series: [
            {
                name: 'Email',
                type: 'line', //stack: 'Total', //堆叠
                data: data.Email
            },
            {
                name: 'Union Ads',
                type: 'line',
                data: data.Union_Ads
            },
            {
                name: 'Video Ads',
                type: 'line',
                data: data.Video_Ads
            },
            {
                name: 'Direct',
                type: 'line',
                data: data.Direct
            },
            {
                name: 'Search Engine',
                type: 'line',
                data: data.Search_Engine
            }
        ] //显示数据设置
    };
    myChart.setOption(option);
    //把配置项给实例对象
    window.addEventListener("resize", function() {
        myChart.resize();
    });// 图表跟随屏幕自动的去适应
})();

//左2：渐变堆叠面积图
(function() {
    var myChart = echarts.init(document.querySelector(".Gradient_Stacked_Area .chart"));
    const data = {
        "L1": [120,220,150,320,820,132,182],
        "L2": [101,191,201,301,232,332,932],
        "L3": [901,134,234,154,334,934,90],
        "L4": [230,330,330,290,190,390,1290],
        "L5": [330,1330,210,310,410,320,1320]
    };
    var option = {
        color: ["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#ea7ccc"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5'],
            textStyle: {
                color: "#eeeeee",
                fontSize: "10"
            },
            itemWidth: 10,
            itemHeight: 10
        },
        axisLabel: {color: "#eeeeee"},
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value',
            splitLine:false
        },
        series:[
            {
                name: 'Line 1',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(128, 255, 165)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(1, 191, 236)'
                    }
                    ])
                },
                emphasis: {focus: 'series'},
                data: data.L1
            },
            {
                name: 'Line 2',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#edafda'
                    },
                    {
                        offset: 1,
                        color: '#93b7e3'
                    }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: data.L2
            },
            {
                name: 'Line 3',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#93b7e3'
                    },
                    {
                        offset: 1,
                        color: '#a5e7f0'
                    }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: data.L3
            },
            {
                name: 'Line 4',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#a5e7f0'
                    },
                    {
                        offset: 1,
                        color: '#cbb0e3'
                    }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: data.L4
            },
            {
                name: 'Line 5',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                label: {
                    show: true,
                    position: 'top'
                },
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#e098c7'
                    },
                    {
                        offset: 1,
                        color: '#7cb4cc'
                    }
                    ])
                },
                emphasis: {
                    focus: 'series'
                },
                data: data.L5
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

//左3凹凸图
(function() {
    var myChart = echarts.init(document.querySelector(".Bump .chart"));
    const names = [
      'Orange',
      'Tomato',
      'Apple',
      'Sakana'
    ];
    const years = ['2001', '2002', '2003', '2004', '2005', '2006'];
    const generateRankingData = () => {
        const map = new Map();
        const defaultRanking = [1,2,3,4,2,3];
        for (const _ of years) {
            const rank = [[1,4,3,2,3,1],[2,3,1,4,4,2],[3,2,4,1,2,3],[4,1,2,3,1,4]];
            names.forEach((name, i) => {
                map.set(name, (map.get(name) || []).concat(rank[i]));
            });
        }
        return map;
    };
    const generateSeriesList = () => {
        const seriesList = [];
        const rankingMap = generateRankingData();
        rankingMap.forEach((data, name) => {
            const series = {
                name,
                symbolSize: 10,
                type: 'line',
                smooth: true,
                emphasis: {
                    focus: 'series'
                },
                endLabel: {
                    show: true,
                    formatter: '{a}',
                    distance: 20
                },
                lineStyle: {
                    width: 2
                },
                data
            };
            seriesList.push(series);
        });
        return seriesList;
    };
    var option = {
        color: ["#5470c6","#91cc75","#fac858","#ee6666","#73c0de",
            "#3ba272","#fc8452","#ea7ccc"],
        tooltip: {
            trigger: 'item'
        },
        axisLabel: {
            color: "#fff"
        },
        grid: {
            left: '4%',
            right: '10%',
            bottom: '3%',
            top:'5%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            splitLine: {
                show: true
            },
            axisLabel: {
                margin: 30,
                fontSize: 12
            },
            boundaryGap: false,
            data: years
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                margin: 30,
                fontSize: 12,
                formatter: '#{value}'
            },
            inverse: true,
            interval: 1,
            min: 1,
            max: names.length,
            splitLine:false
        },
        series: generateSeriesList()
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

//右1柱状图
(function() {
    var myChart = echarts.init(document.querySelector(".Bar .chart"));
    const labelOption = {
        show: true,
        fontSize: 10,
    };
    const emphasis= {focus: 'series'};
    const data = {
        "Forest": [320, 320, 350, 308, 382],
        "Steppe": [220, 200, 250, 298,232],
        "Desert": [132, 182, 132, 177, 190],
        "Wetland": [234, 154, 199,190,201]
    };
    var option = {
        color: ["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#ea7ccc"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['Forest', 'Steppe', 'Desert', 'Wetland'],
            textStyle: {
                color: "#eeeeee",
                fontSize: "10"
            }
        },
        axisLabel: { color: "#eeeeee" },
        grid: {
            left: '3%',
            right: '10%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar', 'stack'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        xAxis: {
            type: 'category',
            axisTick: {show: false},
            data: ['2012', '2013', '2014', '2015', '2016']
        },
        yAxis: {
            type: 'value',
            splitLine:false
        },
        series: [
            {
                name: 'Forest',
                type: 'bar',
                barGap: 0,
                label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: data.Forest
            },
            {
                name: 'Steppe',
                type: 'bar',
                label: labelOption,
                emphasis: emphasis,
                data: data.Steppe
            },
            {
                name: 'Desert',
                type: 'bar',
                label: labelOption,
                emphasis: emphasis,
                data: data.Desert
            },
            {
                name: 'Wetland',
                type: 'bar',
                label: labelOption,
                emphasis: emphasis,
                data: data.Wetland
            }
        ]
    }
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

//右2正负条形图
(function() {
    var myChart = echarts.init(document.querySelector(".Negative_Value_Bar .chart"));
    const itemStyle = {barBorderRadius: 20};
    const emphasis = {focus: 'series'};
    const label = {
        show: true,
        position: 'inside'
    };
    const data = {
        "Profit": [220, 320, 350, 308, 382, 220, 200],
        "Income": [250, 298, 232, 132, 182, 132, 177],
        "Expenses": [-190, -234, -154, -199, -190, -201, -100]
    }
    var option = {
        color: ["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#ea7ccc"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['Profit', 'Expenses', 'Income'],
            textStyle: {
                color: "#eeeeee",
                fontSize: "10"
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top:'12%',
            containLabel: true
        },
        xAxis:{type: 'value'},
        yAxis: {
            type: 'category',
            axisTick: { show: false },
            data:  ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        axisLabel: {
            color: "#eeeeee",
            fontSize: "10"
        },
        series: [
            {
                name: 'Profit',
                type: 'bar',
                label: label,
                emphasis: emphasis,
                data: data.Profit,
                itemStyle: itemStyle
                // 柱子之间的距离
                //barCategoryGap: 50,
                //柱子的宽度
                //barWidth: 10
            },
            {
                name: 'Income',
                type: 'bar',
                stack: 'Total',
                label: label,
                emphasis: emphasis,
                data: data.Income,
                itemStyle: itemStyle
            },
            {
                name: 'Expenses',
                type: 'bar',
                stack: 'Total',
                label: label,
                emphasis: emphasis,
                data: data.Expenses,
                itemStyle: itemStyle
            }
        ]
    }
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

//右3折柱混合
(function() {
    var myChart = echarts.init(document.querySelector(".Mixed_Line_Bar .chart"));
    const data = {
        "Evaporation": [2.20, 3.20, 3.50, 3.08, 3.82, 2.20, 2.00],
        "Precipitation": [2.50, 2.98, 2.32, 1.32, 1.82, 1.32, 1.77],
        "Temperature": [1.90, 2.34, 1.54, 1.99, 1.90, 2.01, 1.28]
    };
    var option = {
        color: ["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#3ba272","#fc8452","#ea7ccc"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#eeeee'
                }
            }
        },
        grid: {
            left: '3%',
            right: '8%',
            bottom: '3%',
            top:'15%',
            containLabel: true
        },
        toolbox: {
            feature: {
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            },
            orient: 'vertical'
        },
        legend: {
            data: ['Evaporation', 'Precipitation', 'Temperature'],
            textStyle: {
                color: "#eeeeee",
                fontSize: "10"
            }
        },
        xAxis:{
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisPointer: {
                type: 'shadow'
            },
            boundaryGap: true
        },
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: '{value} ml'
                }
            },
            {//第二个轴
                type: 'value',
                axisLabel: {
                    formatter: '{value} °C'
                }
            }
        ],
        axisLabel: {
            color: "#eeeeee",
            fontSize: "10"
        },
        series: [
            {
                name: 'Evaporation',
                type: 'bar', //若为line则转右轴
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' ml';
                    }
                },
                data: data.Evaporation
            },
            {
                name: 'Precipitation',
                type: 'bar',
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' ml';
                    }
                },
                data: data.Precipitation
            },
            {
                name: 'Temperature',
                type: 'line',
                yAxisIndex: 1,
                tooltip: {
                    valueFormatter: function (value) {
                        return value + ' °C';
                    }
                },
                data: data.Temperature
            }
        ]
    }
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();
