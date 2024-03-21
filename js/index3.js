
//左1
(function() {
    var myChart = echarts.init(document.querySelector(".Boxplot .chart")); // 实例化对象
    $.get('/data/3_1.json', function (data) {
        var option = {
            title: {
                text: 'upper: Q3 + 1.5 * IQR \nlower: Q1 - 1.5 * IQR',
                borderColor: '#999',
                borderWidth: 1,
                textStyle: {
                    color: "#eeeeee",
                    fontSize: "12"
                },
                left: '10%',
                top: '85%'
            },
            dataset: [
                {source: data},
                {
                    transform: {
                        type: 'boxplot',
                        config: { itemNameFormatter: 'expr {value}' }
                    }
                },
                {
                    fromDatasetIndex: 1,
                    fromTransformResult: 1
                }
            ],
            tooltip: {
                trigger: 'axis',
                confine: true
            },
            grid: {
                left: '10%',
                right: '10%',
                bottom: '25%',
                top:'5%'
            },
            yAxis: {// 修改x和y就会变成竖版或横版
                type: 'category',
                boundaryGap: true,
                nameGap: 30,
                axisLine:{
                    lineStyle:{
                        color: "#eeeeee"
                    }
                }
            },
            xAxis: {
                type: 'value',
                name: 'km/s minus 299,000',
                axisLine:{
                    lineStyle:{
                        color: "#eeeeee"
                    }
                },
                min:500
            },
            series: [
                {
                    name: 'boxplot',
                    type: 'boxplot',
                    datasetIndex: 1,
                    itemStyle: {
                        color: '#b8c5f2',
                        borderWidth: 2
                    }
                },
                {
                    name: 'outlier',
                    type: 'scatter',
                    datasetIndex: 2,
                    itemStyle: {
                        color: '#b8c5f2'
                    }
                }
            ]
        };
        myChart.setOption(option);//把配置项给实例对象
    });
    window.addEventListener("resize", function() {
        myChart.resize();
    });// 图表跟随屏幕自动的去适应
})();

//左2
(function() {
    var myChart = echarts.init(document.querySelector(".Heatmap .chart"));
    $.get('/data/3_2.json', function (graph) {
        const hours = [
            '12a', '1a', '2a', '3a', '4a', '5a', '6a',
            '7a', '8a', '9a', '10a', '11a',
            '12p', '1p', '2p', '3p', '4p', '5p',
            '6p', '7p', '8p', '9p', '10p', '11p'
        ];
        const days = [
            'Saturday', 'Friday', 'Thursday',
            'Wednesday', 'Tuesday', 'Monday', 'Sunday'
        ];
        const data = graph.map(function (item) {
                return [item[1], item[0], item[2] || '-'];
            });
        var option = {
            tooltip: {
                position: 'top'
            },
            grid: {
                height: '75%',
                top: '0%',
                left:'15%',
                right:'5%'
            },
            xAxis: {
                type: 'category',
                data: hours,
                splitArea: {
                    show: true
                },
                axisLine:{
                    lineStyle:{
                        color: "#eeeeee"
                    }
                }
            },
            yAxis: {
                type: 'category',
                data: days,
                splitArea: {
                    show: true
                },
                axisLine:{
                    lineStyle:{
                        color: "#eeeeee"
                    }
                }
            },
            visualMap: {
                min: 0,
                max: 14,
                calculable: true,//滑块可以滑动
                orient: 'horizontal',//滑块方向
                left: 'center',
                bottom: '0%'//滑块位置
            },
            series: [
            {
                name: 'Punch Card',
                type: 'heatmap',
                data: data,
                label: {
                    show: false
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
            ]
        };
    myChart.setOption(option);//把配置项给实例对象
    });
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

//左3
(function() {
    var myChart = echarts.init(document.querySelector(".Force .chart"));
    myChart.showLoading();
    $.get('/data/3_3.json', function (graph) {
        myChart.hideLoading();
        graph.nodes.forEach(function (node) {
            node.symbolSize = 8;
        });
        option = {
            tooltip: {},
            legend: {
                data: graph.categories.map(function (a) {
                    return a.name;
                }),
                textStyle: {
                    color: "#eeeeee",
                    fontSize: "10"
                },
                left:"left",
                orient: 'vertical'
            },
            series: [
                {
                    name: 'Les Miserables',
                    type: 'graph',
                    layout: 'force',
                    data: graph.nodes,
                    links: graph.links,
                    categories: graph.categories,
                    roam: true,
                    label: {
                        position: 'right'
                    },
                    force: {
                        repulsion: 300
                    }
                }
            ]
        };
        myChart.setOption(option);
    });
    window.addEventListener("resize", function() {
        myChart.resize();
    })
})();

//中1
(function() {
    var myChart = echarts.init(document.querySelector(".Les_Miserables .chart"));
    myChart.showLoading();
    $.get('/data/3_4.json', function (graph) {
        myChart.hideLoading();
        graph.nodes.forEach(function (node) {
            node.label = {
                show: node.symbolSize > 20
            };
            node.value = node.value/10;
            node.symbolSize = node.value*8
        });
        option = {
            tooltip: {},
            legend: [
                {
                    data: graph.categories.map(function (a) {
                        return a.name;
                    }),
                    textStyle: {
                        color: "#eeeeee",
                        fontSize: "10"
                    },
                    left:"left",
                    orient: 'vertical'
                }
            ],
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [
            {
                name: 'Les Miserables',
                type: 'graph',
                layout: 'circular',
                circular: {
                    rotateLabel: true
                },
                data: graph.nodes,
                links: graph.links,
                categories: graph.categories,
                roam: true,
                label: {
                    position: 'right',
                    formatter: '{b}',
                    color: "#eeeeee"
                },
                lineStyle: {
                    color: 'source',
                    curveness: 0.3
                }
            }
            ]
        };
        myChart.setOption(option);
    });
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

//中2
(function() {
    var myChart = echarts.init(document.querySelector(".Tree .chart"));
    myChart.showLoading();
    $.get('/data/3_5.json', function (graph) {
        myChart.hideLoading();
        option = {
          tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
          },
          series: [
            {
              type: 'tree',
              data: [graph],
              left: '2%',
              right: '2%',
              top: '8%',
              bottom: '20%',
              roam: true,
              symbol: 'emptyCircle',
              orient: 'vertical',
              expandAndCollapse: true,
              label: {
                position: 'top',
                rotate: -90,
                verticalAlign: 'middle',
                align: 'right',
                fontSize: 12,
                color:"#eeeeee"
              },
              leaves: {
                label: {
                  position: 'bottom',
                  rotate: -90,
                  verticalAlign: 'middle',
                  align: 'left',
                  fontSize: 12,
                  color:"#eeeeee"
                }
              },
              animationDurationUpdate: 750
            }
          ]
        };
        myChart.setOption(option);
    });
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

//中3
(function() {
    var myChart = echarts.init(document.querySelector(".Tree2 .chart"));
    myChart.showLoading();
    $.get('/data/3_6.json', function (graph) {
        myChart.hideLoading();
        option = {
          tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
          },
          series: [
            {
              type: 'tree',
              data: [graph],
              top: '18%',
              bottom: '14%',
              layout: 'radial',
              symbol: 'emptyCircle',
              roam: true,
              symbolSize: 7,
              initialTreeDepth: 3,
              animationDurationUpdate: 750,
              emphasis: {
                focus: 'descendant'
              },
              label: {
                fontSize: 9,
                color:"#eeeeee"
              }
            }
          ]
        };
        myChart.setOption(option);
    });
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

//右1
(function() {
    var myChart = echarts.init(document.querySelector(".Treemap .chart"));
    myChart.showLoading();
    $.get('/data/3_7.json', function (data) {
        myChart.hideLoading();
        var option = {
          grid:{
            top:'5%',
            bottom:'10%',
            left:'3%',
            right:'3%'
          },
          tooltip:{},
          series: [
            {
              type: 'treemap',
              id: 'echarts-package-size',
              animationDurationUpdate: 1000,
              roam: false,
              nodeClick: undefined,
              data: data.children,
              universalTransition: true,
              label: {
                show: false
              },
              breadcrumb: {
                show: false
              }
            }
          ]
        };
        myChart.setOption(option);
    });
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

//右2
(function() {
    var myChart = echarts.init(document.querySelector(".Sunburst .chart"));
    var data = [
      {
        name: 'Flora',
        itemStyle: {
          color: '#da0d68'
        },
        children: [
          {
            name: 'Black Tea',
            value: 1,
            itemStyle: {
              color: '#975e6d'
            }
          },
          {
            name: 'Floral',
            itemStyle: {
              color: '#e0719c'
            },
            children: [
              {
                name: 'Chamomile',
                value: 1,
                itemStyle: {
                  color: '#f99e1c'
                }
              },
              {
                name: 'Rose',
                value: 1,
                itemStyle: {
                  color: '#ef5a78'
                }
              },
              {
                name: 'Jasmine',
                value: 1,
                itemStyle: {
                  color: '#f7f1bd'
                }
              }
            ]
          }
        ]
      },
      {
        name: 'Fruity',
        itemStyle: {
          color: '#da1d23'
        },
        children: [
          {
            name: 'Berry',
            itemStyle: {
              color: '#dd4c51'
            },
            children: [
              {
                name: 'Blackberry',
                value: 1,
                itemStyle: {
                  color: '#3e0317'
                }
              },
              {
                name: 'Raspberry',
                value: 1,
                itemStyle: {
                  color: '#e62969'
                }
              },
              {
                name: 'Blueberry',
                value: 1,
                itemStyle: {
                  color: '#6569b0'
                }
              },
              {
                name: 'Strawberry',
                value: 1,
                itemStyle: {
                  color: '#ef2d36'
                }
              }
            ]
          },
          {
            name: 'Dried Fruit',
            itemStyle: {
              color: '#c94a44'
            },
            children: [
              {
                name: 'Raisin',
                value: 1,
                itemStyle: {
                  color: '#b53b54'
                }
              },
              {
                name: 'Prune',
                value: 1,
                itemStyle: {
                  color: '#a5446f'
                }
              }
            ]
          },
          {
            name: 'Other Fruit',
            itemStyle: {
              color: '#dd4c51'
            },
            children: [
              {
                name: 'Coconut',
                value: 1,
                itemStyle: {
                  color: '#f2684b'
                }
              },
              {
                name: 'Cherry',
                value: 1,
                itemStyle: {
                  color: '#e73451'
                }
              },
              {
                name: 'Pomegranate',
                value: 1,
                itemStyle: {
                  color: '#e65656'
                }
              },
              {
                name: 'Pineapple',
                value: 1,
                itemStyle: {
                  color: '#f89a1c'
                }
              },
              {
                name: 'Grape',
                value: 1,
                itemStyle: {
                  color: '#aeb92c'
                }
              },
              {
                name: 'Apple',
                value: 1,
                itemStyle: {
                  color: '#4eb849'
                }
              },
              {
                name: 'Peach',
                value: 1,
                itemStyle: {
                  color: '#f68a5c'
                }
              },
              {
                name: 'Pear',
                value: 1,
                itemStyle: {
                  color: '#baa635'
                }
              }
            ]
          },
          {
            name: 'Citrus Fruit',
            itemStyle: {
              color: '#f7a128'
            },
            children: [
              {
                name: 'Grapefruit',
                value: 1,
                itemStyle: {
                  color: '#f26355'
                }
              },
              {
                name: 'Orange',
                value: 1,
                itemStyle: {
                  color: '#e2631e'
                }
              },
              {
                name: 'Lemon',
                value: 1,
                itemStyle: {
                  color: '#fde404'
                }
              },
              {
                name: 'Lime',
                value: 1,
                itemStyle: {
                  color: '#7eb138'
                }
              }
            ]
          }
        ]
      },
      {
        name: 'Sour/\nFermented',
        itemStyle: {
          color: '#ebb40f'
        },
        children: [
          {
            name: 'Sour',
            itemStyle: {
              color: '#e1c315'
            },
            children: [
              {
                name: 'Sour Aromatics',
                value: 1,
                itemStyle: {
                  color: '#9ea718'
                }
              },
              {
                name: 'Acetic Acid',
                value: 1,
                itemStyle: {
                  color: '#94a76f'
                }
              },
              {
                name: 'Butyric Acid',
                value: 1,
                itemStyle: {
                  color: '#d0b24f'
                }
              },
              {
                name: 'Isovaleric Acid',
                value: 1,
                itemStyle: {
                  color: '#8eb646'
                }
              },
              {
                name: 'Citric Acid',
                value: 1,
                itemStyle: {
                  color: '#faef07'
                }
              },
              {
                name: 'Malic Acid',
                value: 1,
                itemStyle: {
                  color: '#c1ba07'
                }
              }
            ]
          },
          {
            name: 'Alcohol/\nFremented',
            itemStyle: {
              color: '#b09733'
            },
            children: [
              {
                name: 'Winey',
                value: 1,
                itemStyle: {
                  color: '#8f1c53'
                }
              },
              {
                name: 'Whiskey',
                value: 1,
                itemStyle: {
                  color: '#b34039'
                }
              },
              {
                name: 'Fremented',
                value: 1,
                itemStyle: {
                  color: '#ba9232'
                }
              },
              {
                name: 'Overripe',
                value: 1,
                itemStyle: {
                  color: '#8b6439'
                }
              }
            ]
          }
        ]
      }
    ];
    option = {
        tooltip:{},
        series: {
            type: 'sunburst',
            data: data,

            sort: undefined,
            radius: [0, '95%'],
            emphasis: {
              focus: 'ancestor'
            },
            levels: [
              {},
              {
                r0: '15%',
                r: '35%',
                itemStyle: {
                  borderWidth: 2
                },
                label: {
                  rotate: 'tangential'
                }
              },
              {
                r0: '35%',
                r: '70%',
                label: {
                  rotate: 'tangential'
                }
              },
              {
                r0: '70%',
                r: '72%',
                label: {
                  position: 'outside',
                  padding: 1,
                  silent: false,
                  color:"#eeeeee"
                }
              }
            ]
        }
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

//右3
(function() {
    var myChart = echarts.init(document.querySelector(".Parallel .chart"));
    $.get('/data/3_9.json', function (data) {
        var schema = [
          { name: 'date', index: 0, text: '日期' },
          { name: 'AQIindex', index: 1, text: 'AQI' },
          { name: 'PM25', index: 2, text: 'PM2.5' },
          { name: 'PM10', index: 3, text: 'PM10' },
          { name: 'CO', index: 4, text: ' CO' },
          { name: 'NO2', index: 5, text: 'NO2' },
          { name: 'SO2', index: 6, text: 'SO2' }
        ];
        var lineStyle = {
          width: 1,
          opacity: 0.5
        };
        option = {
          legend: {
            bottom: 10,
            data: ['Beijing', 'Shanghai', 'Guangzhou'],
            itemGap: 20,
            textStyle: {
              color: '#fff',
              fontSize: 12
            }
          },
          tooltip: {
            padding: 10,
            borderColor: '#777',
            borderWidth: 1
          },
          parallelAxis: [
            {
              dim: 0,
              name: schema[0].text,
              inverse: true,
              max: 31,
              nameLocation: 'start'
            },
            { dim: 1, name: schema[1].text },
            { dim: 2, name: schema[2].text },
            { dim: 3, name: schema[3].text },
            { dim: 4, name: schema[4].text },
            { dim: 5, name: schema[5].text },
            { dim: 6, name: schema[6].text }
          ],
          parallel: {
            left: '5%',
            right: '8%',
            bottom: '18%',
            top:'15%',
            parallelAxisDefault: {
              type: 'value',
              axisLine: {
                lineStyle: {
                  color: '#aaa'
                }
              },
              axisLabel: {
                color: '#fff'
              }
            }
          },
          series: [
            {
              name: 'Beijing',
              type: 'parallel',
              lineStyle: lineStyle,
              data: data.dataBJ
            },
            {
              name: 'Guangzhou',
              type: 'parallel',
              lineStyle: lineStyle,
              data: data.dataGZ
            },
            {
              name: 'Shanghai',
              type: 'parallel',
              lineStyle: lineStyle,
              data: data.dataSH
            }
          ]
        };
        myChart.setOption(option)
    });
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();
