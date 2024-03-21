
//左1
(function() {
    var myChart = echarts.init(document.querySelector(".Sankey .chart")); // 实例化对象
    var option = {
        tooltip: {trigger: 'item'},
        series: [
        {
            type: 'sankey',
            roam: true,
            left: '5%',
            top: '10%',
            right: '5%',
            bottom: '10%',
            data: [
                {
                  name: 'Werne',
                  itemStyle: {
                    color: '#f18bbf',
                    borderColor: '#f18bbf'
                  }
                },
                {
                  name: 'Duesseldorf',
                  itemStyle: {
                    color: '#0078D7',
                    borderColor: '#0078D7'
                  }
                },
                {
                  name: 'Cambridge',
                  itemStyle: {
                    color: '#3891A7',
                    borderColor: '#3891A7'
                  }
                },
                {
                  name: 'Colma',
                  itemStyle: {
                    color: '#0037DA',
                    borderColor: '#0037DA'
                  }
                },// CAD
                {
                  name: 'W. York',
                  itemStyle: {
                    color: '#C0BEAF',
                    borderColor: '#C0BEAF'
                  }
                },
                {
                  name: 'Orleans',
                  itemStyle: {
                    color: '#567C73',
                    borderColor: '#567C73'
                  }
                },
                {
                  name: 'Hof',
                  itemStyle: {
                    color: '#2BCC7F',
                    borderColor: '#2BCC7F'
                  }
                },
                {
                  name: 'Leeds',
                  itemStyle: {
                    color: '#9B2D1F',
                    borderColor: '#9B2D1F'
                  }
                },
                {
                  name: 'Victoria',
                  itemStyle: {
                    color: '#604878',
                    borderColor: '#604878'
                  }
                },//GBP
                {
                  name: 'Erlangen',
                  itemStyle: {
                    color: '#A5644E',
                    borderColor: '#A5644E'
                  }
                },
                {
                  name: 'Wokingham',
                  itemStyle: {
                    color: '#B1BADD',
                    borderColor: '#B1BADD'
                  }
                },
                {
                  name: 'Runcorn',
                  itemStyle: {
                    color: '#B0CCB0',
                    borderColor: '#B0CCB0'
                  }
                },
                {
                  name: 'Newton',
                  itemStyle: {
                    color: '#8164A3',
                    borderColor: '#8164A3'
                  }
                },
                {
                  name: 'Morangis',
                  itemStyle: {
                    color: '#8E562E',
                    borderColor: '#8E562E'
                  }
                },//DEM
                {
                  name: 'Metchosin',
                  itemStyle: {
                    color: '#C1504D',
                    borderColor: '#C1504D'
                  }
                },
                {
                  name: 'Kirkby',
                  itemStyle: {
                    color: '#CCAF0A',
                    borderColor: '#CCAF0A'
                  }
                },
                {
                  name: 'London',
                  itemStyle: {
                    color: '#956251',
                    borderColor: '#956251'
                  }
                },
                {
                  name: 'Offenbach',
                  itemStyle: {
                    color: '#C17529',
                    borderColor: '#C17529'
                  }
                },//FRF
                {
                  name: 'Vista',
                  itemStyle: {
                    color: 'rgba(106,82,134,255)',
                    borderColor: 'rgba(106,82,134,255)'
                  }
                },
                {
                  name: 'Distinguish',
                  itemStyle: {
                    color: '#40699D',
                    borderColor: 'rgba(106,82,134,255)'
                  }
                },
                {
                  name: 'ColonialVoice',
                  itemStyle: {
                    color: '#C32D2E',
                    borderColor: 'rgba(106,82,134,255)'
                  }
                },
                {
                  name: 'SuperiorCard',
                  itemStyle: {
                    color: '#5ba33b',
                    borderColor: 'rgba(106,82,134,255)'
                  }
                },
                {
                  name: 'CAD',
                  itemStyle: {
                    color: '#40699D',
                    borderColor: '#40699D'
                  }
                },
                {
                  name: 'GBP',
                  itemStyle: {
                    color: '#C32D2E',
                    borderColor: '#C32D2E'
                  }
                },
                {
                  name: 'DEM',
                  itemStyle: {
                    color: '#fac858',
                    borderColor: '#4E342E'
                  }
                },
                {
                  name: 'FRF',
                  itemStyle: {
                    color: '#5ba33b',
                    borderColor: '#5ba33b'
                  }
                }
              ],
            links: [
                {
                  source: 'CAD',
                  target: 'Werne',
                  value: 357.8399963378906
                },
                {
                  source: 'GBP',
                  target: 'Victoria',
                  value: 157.8399963378906
                },
                {
                  source: 'CAD',
                  target: 'Cambridge',
                  value: 157.8399963378906
                },
                {
                  source: 'CAD',
                  target: 'Colma',
                  value: 157.8399963378906
                },
                {
                  source: 'GBP',
                  target: 'W. York',
                  value: 157.8399963378906
                },
                {
                  source: 'GBP',
                  target: 'Orleans',
                  value: 157.8399963378906
                },
                {
                  source: 'CAD',
                  target: 'Duesseldorf',
                  value: 157.8399963378906
                },
                {
                  source: 'GBP',
                  target: 'Hof',
                  value: 157.8399963378906
                },
                {
                  source: 'GBP',
                  target: 'Leeds',
                  value: 157.8399963378906
                },
                {
                  source: 'DEM',
                  target: 'Erlangen',
                  value: 157.8399963378906
                },
                {
                  source: 'DEM',
                  target: 'Wokingham',
                  value: 157.8399963378906
                },
                {
                  source: 'DEM',
                  target: 'Runcorn',
                  value: 157.8399963378906
                },
                {
                  source: 'DEM',
                  target: 'Newton',
                  value: 157.8399963378906
                },
                {
                  source: 'DEM',
                  target: 'Morangis',
                  value: 157.8399963378906
                },
                {
                  source: 'FRF',
                  target: 'Metchosin',
                  value: 157.8399963378906
                },
                {
                  source: 'FRF',
                  target: 'Kirkby',
                  value: 157.8399963378906
                },
                {
                  source: 'FRF',
                  target: 'London',
                  value: 157.8399963378906
                },
                {
                  source: 'FRF',
                  target: 'Offenbach',
                  value: 157.8399963378906
                },
                {
                  source: 'SuperiorCard',
                  target: 'FRF',
                  value: 894.5999908447266
                },
                {
                  source: 'Vista',
                  target: 'FRF',
                  value: 1789.1999816894531
                },
                {
                  source: 'Distinguish',
                  target: 'FRF',
                  value: 2683.7999725341797
                },
                {
                  source: 'SuperiorCard',
                  target: 'DEM',
                  value: 1431.3599853515625
                },
                {
                  source: 'Vista',
                  target: 'CAD',
                  value: 5369.929964579642
                },
                {
                  source: 'Distinguish',
                  target: 'DEM',
                  value: 2504.8799743652344
                },
                {
                  source: 'Distinguish',
                  target: 'GBP',
                  value: 10384.949975416064
                },
                {
                  source: 'Distinguish',
                  target: 'CAD',
                  value: 6950.059956334531
                },
                {
                  source: 'SuperiorCard',
                  target: 'GBP',
                  value: 8228.39999615401
                },
                {
                  source: 'SuperiorCard',
                  target: 'CAD',
                  value: 7388.099954992533
                },
                {
                  source: 'Vista',
                  target: 'GBP',
                  value: 9497.539981640875
                },
                {
                  source: 'Vista',
                  target: 'DEM',
                  value: 1968.1199798583984
                }
              ],
            lineStyle: {
                color: 'source',
                curveness: 0.5,
                opacity: 0.7
            },
            itemStyle: {
                color: '#1f77b4',
                borderColor: '#1f77b4'
            },
            label: {
                color: '#eeeeee',
                fontFamily: 'Arial',
                fontSize: 12
            },
            orient: "horizontal",
            nodeGap: 10,
            nodeWidth: 20,
            nodeAlign: "justify",
            animationEasing: "linear"
        }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });// 图表跟随屏幕自动的去适应
})();

//左2
(function() {
    var myChart = echarts.init(document.querySelector(".Funnel .chart"));
    option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}%'
      },
      legend: {
        data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order'],
        textStyle:{
            color:"#eeeeee"
        }
      },
      series: [
        {
          name: 'Expected',
          type: 'funnel',
          left: '10%',
          bottom:'10%',
          width: '80%',
          label: {
            formatter: '{b}Expected',
            color:"#eeeeee"
          },
          labelLine: { show: false },
          itemStyle: { opacity: 0.7},
          emphasis: {
            label: {
              position: 'inside',
              formatter: '{b}Expected: {c}%'
            }
          },
          data: [
            { value: 60, name: 'Visit' },
            { value: 40, name: 'Inquiry' },
            { value: 20, name: 'Order' },
            { value: 80, name: 'Click' },
            { value: 100, name: 'Show' }
          ]
        },
        {
          name: 'Actual',
          type: 'funnel',
          left: '10%',
          bottom:'10%',
          width: '80%',
          maxSize: '80%',
          label: {
            position: 'inside',
            formatter: '{c}%',
            color:"#eeeeee"
          },
          itemStyle: {
            opacity: 0.5,
            borderColor: '#fff',
            borderWidth: 2
          },
          emphasis: {
            label: {
              position: 'inside',
              formatter: '{b}Actual: {c}%'
            }
          },
          data: [
            { value: 30, name: 'Visit' },
            { value: 10, name: 'Inquiry' },
            { value: 5, name: 'Order' },
            { value: 50, name: 'Click' },
            { value: 80, name: 'Show' }
          ],
          z: 100
        }
      ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

//左3
(function() {
    var myChart = echarts.init(document.querySelector(".Gauge .chart"));
    option = {
      tooltip:{},
      grid:{
        top:'10%',
        bottom:'10%'
      },
      series: [
        {
          type: 'gauge',
          axisLine: {
            lineStyle: {
              width: 20,
              color: [
                [0.3, '#67e0e3'],
                [0.7, '#37a2da'],
                [1, '#fd666d']
              ],
              opacity:0.7
            }
          },
          pointer: {
            itemStyle: {
                color: 'auto',
                opacity:0.7
            }
          },
          axisTick: {
            distance: -15,
            length: 8,
            lineStyle: {
              color: '#fff',
              width: 2
            }
          },
          splitLine: {
            distance: -15,
            length: 20,
            lineStyle: {
              color: '#fff',
              width: 4
            }
          },
          axisLabel: {
            color: '#eeeeee',
            distance: 25,
            fontSize: 12
          },
          detail: {
            valueAnimation: true,
            formatter: 'km/h',
            color: '#eeeeee',
            fontSize:14
          },
          data: [
            {
                name:"1",
                value: 70
            },
            {
                name:"2",
                value:80
            },
            {
                name:"3",
                value:20
            }
          ]
        }
      ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    })
})();

//中1
(function() {
    var myChart = echarts.init(document.querySelector(".date .chart"));
    const layouts = [
      [[0, 0]],
      [
        [-0.25, 0],
        [0.25, 0]
      ],
      [
        [0, -0.2],
        [-0.2, 0.2],
        [0.2, 0.2]
      ],
      [
        [-0.25, -0.25],
        [-0.25, 0.25],
        [0.25, -0.25],
        [0.25, 0.25]
      ]
    ];
    const pathes = [
      'M936.857805 523.431322c0 0-42.065715-68.89513-88.786739-68.89513-46.68416 0-95.732122 71.223091-95.732122 71.223091s-44.28544-72.503296-93.440922-71.152538c-35.565466 0.977306-62.89705 30.882406-79.124275 64.06615L579.773747 790.800797c-3.253248 37.391565-5.677568 50.904371-12.002816 69.63497-6.651802 19.698688-19.544883 35.227341-31.650099 45.909606-14.30231 12.621414-29.59831 22.066586-45.854208 27.424563-16.28969 5.362074-30.098739 6.496973-51.536794 6.496973-19.498906 0-36.95104-2.963456-52.395418-8.850534-15.410586-5.887078-28.420403-14.313984-39.034573-25.246003-10.613146-10.930995-18.757939-24.08151-24.435507-39.525171-5.676544-15.443763-8.532685-40.195482-8.532685-59.270963l0-26.232454 74.435273 0c0 24.644301-0.17705 64.452915 8.81408 77.006848 9.02697 12.515021 22.756147 18.092032 41.148826 18.791014 16.728678 0.636518 30.032179-8.061645 30.032179-8.061645s11.922022-10.5472 14.992077-19.756954c2.674995-8.025805 3.565363-22.180147 3.565363-22.180147s2.080461-21.789286 2.080461-34.234675L489.399906 514.299369c-16.678502-18.827776-43.801395-61.938688-82.756096-60.927693-54.699008 1.419366-100.422144 70.059622-100.422144 70.059622s-56.065126-70.059622-93.440922-70.059622c-37.376717 0-91.077939 70.059622-91.077939 70.059622S105.343488 156.737741 476.742042 119.363584l53.70327-74.714624 51.373056 74.714624C964.889395 142.740992 936.857805 523.431322 936.857805 523.431322z',
      'M533.504 268.288q33.792-41.984 71.68-75.776 32.768-27.648 74.24-50.176t86.528-19.456q63.488 5.12 105.984 30.208t67.584 63.488 34.304 87.04 6.144 99.84-17.92 97.792-36.864 87.04-48.64 74.752-53.248 61.952q-40.96 41.984-85.504 78.336t-84.992 62.464-73.728 41.472-51.712 15.36q-20.48 1.024-52.224-14.336t-69.632-41.472-79.872-61.952-82.944-75.776q-26.624-25.6-57.344-59.392t-57.856-74.24-46.592-87.552-21.504-100.352 11.264-99.84 39.936-83.456 65.536-61.952 88.064-35.328q24.576-5.12 49.152-1.536t48.128 12.288 45.056 22.016 40.96 27.648q45.056 33.792 86.016 80.896z',
      'M741.06368 733.310464c8.075264-29.262438 20.615373-40.632422 14.64105-162.810061C966.089728 361.789952 967.93897 72.37847 967.855002 54.693683c0.279347-0.279347 0.418509-0.419533 0.418509-0.419533s-0.17705-0.00512-0.428749-0.00512c0-0.251699 0-0.428749 0-0.428749s-0.139162 0.14633-0.418509 0.425677c-17.695744-0.083866-307.10784 1.760051-515.833958 212.142592-122.181632-5.984256-133.55305 6.563533-162.815693 14.644531C235.35063 295.798886 103.552614 436.975309 90.630758 486.076621c-12.921856 49.105408 39.634227 56.859034 58.579558 58.581197 18.953421 1.724314 121.471386-9.475789 130.09111 4.309094 0 0 16.367411 11.200102 17.226035 41.346662 0.850432 29.796659 15.173222 71.354163 37.123994 97.267302-0.028672 0.027648-0.05632 0.054272-0.083866 0.074752 0.158618 0.13097 0.316211 0.261939 0.474829 0.390861 0.129946 0.149402 0.261939 0.319283 0.393011 0.468685 0.019456-0.019456 0.04608-0.049152 0.075776-0.075674 25.918362 21.961216 67.477504 36.272128 97.269248 37.122458 30.149837 0.859546 41.354547 17.234534 41.354547 17.234534 13.779354 8.608051 2.583962 111.122842 4.302131 130.075546 1.727386 18.95168 9.477222 71.498445 58.579558 58.576077C585.12896 918.526771 726.311117 786.734182 741.06368 733.310464zM595.893555 426.206003c-39.961702-39.965184-39.961702-104.75991 0-144.720077 39.970918-39.96928 104.768307-39.96928 144.730112 0 39.970918 39.960064 39.970918 104.75479 0 144.720077C700.661862 466.171187 635.864474 466.171187 595.893555 426.206003zM358.53312 769.516032c-31.923302-4.573184-54.890394-18.410291-71.41847-35.402342-16.984474-16.526438-30.830387-39.495475-35.405824-71.420621-4.649062-28.082586-20.856832-41.167565-38.76649-38.763827-17.906586 2.40681-77.046886 66.714419-80.857805 89.475891-3.80887 22.752154 29.271859 12.081152 46.424166 27.654861 17.151283 15.590093-2.139853 61.93664-14.733107 86.845952-6.441984 12.735078-10.289766 26.42176-4.22953 33.76087 7.346586 6.070272 21.03593 2.222592 33.769472-4.220109 24.912384-12.585677 71.258829-31.872922 86.842368-14.731469 15.583539 17.160806 4.911002 50.229965 27.674419 46.419251 22.754099-3.807744 87.065395-62.946611 89.466163-80.85248C399.70857 790.374093 386.627072 774.166938 358.53312 769.516032z',
      'M848.794624 939.156685 571.780416 939.156685 571.780416 653.17123l341.897539 0 0 221.100654C913.677926 909.960704 884.482867 939.156685 848.794624 939.156685zM571.780403 318.743552c-11.861606-3.210138-31.443354-8.36864-39.829709-16.176435-0.596582-0.561766-1.016218-1.246413-1.613824-1.841971-0.560845 0.596582-1.016218 1.280205-1.613824 1.841971-8.386355 7.807795-15.96631 12.965274-27.827917 16.176435l0 263.544325L141.030675 582.287877 141.030675 355.202884c0-35.687834 29.195059-64.882688 64.883302-64.882688l150.649125 0c-16.984474-9.525965-32.846438-20.56233-46.111027-32.932045-60.250624-56.144691-71.129907-137.062605-24.283034-180.767027 19.615539-18.264986 46.252237-27.124736 75.026739-27.124736 39.933133 0 83.972915 17.070797 118.995968 49.706086 20.353331 18.983322 37.722624 43.405619 50.145075 69.056819 12.457267-25.6512 29.791744-50.074419 50.180915-69.056819 35.022029-32.63529 79.062835-49.706086 118.994944-49.706086 28.74071 0 55.410176 8.860774 75.025715 27.124736 46.882611 43.704422 35.96759 124.622336-24.283034 180.767027-13.264589 12.368691-29.127578 23.40608-46.111027 32.932045l144.649234 0c35.688243 0 64.882278 29.195981 64.882278 64.882688l0 227.084948L571.780416 582.287833 571.780416 318.743508zM435.064218 147.625267c-21.476966-19.965747-49.094144-31.913882-73.868288-31.913882-7.404954 0-21.125018 1.211597-29.863322 9.386803-2.000691 1.824563-8.070144 7.439462-8.070144 21.369754 0 15.650406 8.492749 40.24873 32.319386 62.477926 29.124506 27.12576 77.202432 47.601152 111.76704 47.601152 12.176794 0 16.492237-2.666701 16.527053-2.702541C489.524736 242.54505 475.664486 185.453773 435.064218 147.625267zM577.78135 254.790963c0 0 0.034816-0.034816 0.069632-0.034816 0.807424 0 5.50871 1.790771 15.509914 1.790771 34.564608 0 82.64151-20.47529 111.76704-47.601152 23.826637-22.229299 32.283546-46.810112 32.283546-62.442189 0-13.930291-6.033613-19.562496-8.035328-21.404467-8.77312-8.17623-22.457344-9.386803-29.864346-9.386803-24.808038 0-52.390298 11.948134-73.867264 31.913882C585.325466 185.208218 571.358822 241.73865 577.78135 254.790963zM500.89513 939.156685 205.914017 939.156685c-35.688243 0-64.883302-29.195981-64.883302-64.883712L141.030714 653.17123l359.864462 0L500.895177 939.15666z'
    ];
    const colors = ['#c4332b', '#16B644', '#6862FD', '#FDC763'];
    function getVirtulData(year) {
      year = year || '2024';
      let date = +echarts.number.parseDate(year + '-01-01');
      let end = +echarts.number.parseDate(+year + 1 + '-01-01');
      let dayTime = 3600 * 24 * 1000;
      let data = [];
      for (let time = date; time < end; time += dayTime) {
        let items = [];
        let eventCount = Math.round(Math.random() * pathes.length);
        for (let i = 0; i < eventCount; i++) {
          items.push(Math.round(Math.random() * (pathes.length - 1)));
        }
        data.push([echarts.format.formatTime('yyyy-MM-dd', time), items.join('|')]);
      }
      return data;
    }
    option = {
      tooltip: {},
      calendar: [
        {
          left: 'center',
          top: 'middle',
          cellSize: [80, 50],
          yearLabel: { show: false },
          orient: 'vertical',
          dayLabel: {
            firstDay: 1,
            nameMap: 'CN',
            color:"#eeeeee"
          },
          monthLabel: {
            show: true
          },
          range: '2024-04',
          itemStyle:{
            color:"lightblue",
            opacity:0.7
          }
        }
      ],
      series: [
        {
          type: 'custom',
          coordinateSystem: 'calendar',
          renderItem: function (params, api) {
            const cellPoint = api.coord(api.value(0));
            const cellWidth = params.coordSys.cellWidth;
            const cellHeight = params.coordSys.cellHeight;
            const value = api.value(1);
            const events = value && value.split('|');
            if (isNaN(cellPoint[0]) || isNaN(cellPoint[1])) {
              return;
            }
            const group = {
              type: 'group',
              children:
                (layouts[events.length - 1] || []).map(function (
                  itemLayout,
                  index
                ) {
                  return {
                    type: 'path',
                    shape: {
                      pathData: pathes[+events[index]],
                      x: -8,
                      y: -8,
                      width: 14,
                      height: 14
                    },
                    position: [
                      cellPoint[0] +
                        echarts.number.linearMap(
                          itemLayout[0],
                          [-0.5, 0.5],
                          [-cellWidth / 2, cellWidth / 2]
                        ),
                      cellPoint[1] +
                        echarts.number.linearMap(
                          itemLayout[1],
                          [-0.5, 0.5],
                          [-cellHeight / 2 + 20, cellHeight / 2]
                        )
                    ],
                    style: api.style({
                      fill: colors[+events[index]]
                    })
                  };
                }) || []
            };
            group.children.push({
              type: 'text',
              style: {
                x: cellPoint[0] - cellWidth/2 + 10,
                y: cellPoint[1] - cellHeight / 2 + 10,
                text: echarts.format.formatTime('dd', api.value(0)),
                fill: '#eeeeee',
                textFont: api.font({ fontSize: 15 })
              }
            });
            return group;
          },
          dimensions: [undefined, { type: 'ordinal' }],
          data: getVirtulData('2024')
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
    var myChart = echarts.init(document.querySelector(".heat2 .chart"));
    let noise = getNoiseHelper();
    let xData = [];
    let yData = [];
    noise.seed(Math.random());
    function generateData(theta, min, max) {
      let data = [];
      for (let i = 0; i <= 200; i++) {
        for (let j = 0; j <= 100; j++) {
          data.push([i, j, noise.perlin2(i / 40, j / 20) + 0.5]);
        }
        xData.push(i);
      }
      for (let j = 0; j < 100; j++) {
        yData.push(j);
      }
      return data;
    }
    let data = generateData(2, -5, 5);
    option = {
      tooltip: {},
      grid: {
        right: '20%',
        left: '5%',
        bottom:'10%',
        top:'0%'
      },
      xAxis: {
        type: 'category',
        data: xData,
        axisLine:{
            lineStyle:{
                color: "#eeeeee"
            }
        }
      },
      yAxis: {
        type: 'category',
        data: yData,
        axisLine:{
            lineStyle:{
                color: "#eeeeee"
            }
        }
      },
      visualMap: {
        type: 'piecewise',
        min: 0,
        max: 1,
        left: 'right',
        top: 'center',
        calculable: true,
        realtime: false,
        splitNumber: 8,
        inRange: {
          color: ['#313695','#4575b4','#74add1','#abd9e9','#e0f3f8','#ffffbf','#fee090','#fdae61','#f46d43','#d73027','#a50026']
        },
        textStyle:{color:"#eeeeee", fontSize:13}
      },
      series: [
        {
          name: 'Gaussian',
          type: 'heatmap',
          data: data,
          emphasis: {
            itemStyle: {
              borderColor: '#333',
              borderWidth: 1
            }
          },
          progressive: 1000,
          animation: false
        }
      ]
    };
    function getNoiseHelper() {
      class Grad {
        constructor(x, y, z) {
          this.x = x;
          this.y = y;
          this.z = z;
        }
        dot2(x, y) {
          return this.x * x + this.y * y;
        }
        dot3(x, y, z) {
          return this.x * x + this.y * y + this.z * z;
        }
      }
      const grad3 = [new Grad(1, 1, 0),new Grad(-1, 1, 0),new Grad(1, -1, 0),new Grad(-1, -1, 0),new Grad(1, 0, 1),new Grad(-1, 0, 1),new Grad(1, 0, -1),new Grad(-1, 0, -1),new Grad(0, 1, 1),new Grad(0, -1, 1),new Grad(0, 1, -1),new Grad(0, -1, -1)]
      const p = [
        151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140,
        36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120,
        234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33,
        88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71,
        134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133,
        230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161,
        1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130,
        116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250,
        124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227,
        47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44,
        154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98,
        108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34,
        242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14,
        239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121,
        50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243,
        141, 128, 195, 78, 66, 215, 61, 156, 180
      ];
      let perm = new Array(512);
      let gradP = new Array(512);
      function seed(seed) {
        if (seed > 0 && seed < 1) {
          seed *= 65536;
        }
        seed = Math.floor(seed);
        if (seed < 256) {
          seed |= seed << 8;
        }
        for (let i = 0; i < 256; i++) {
          let v;
          if (i & 1) {
            v = p[i] ^ (seed & 255);
          } else {
            v = p[i] ^ ((seed >> 8) & 255);
          }
          perm[i] = perm[i + 256] = v;
          gradP[i] = gradP[i + 256] = grad3[v % 12];
        }
      }
      seed(0);
      function fade(t) {
        return t * t * t * (t * (t * 6 - 15) + 10);
      }
      function lerp(a, b, t) {
        return (1 - t) * a + t * b;
      }
      function perlin2(x, y) {
        let X = Math.floor(x),
          Y = Math.floor(y);
        x = x - X;
        y = y - Y;
        X = X & 255;
        Y = Y & 255;
        let n00 = gradP[X + perm[Y]].dot2(x, y);
        let n01 = gradP[X + perm[Y + 1]].dot2(x, y - 1);
        let n10 = gradP[X + 1 + perm[Y]].dot2(x - 1, y);
        let n11 = gradP[X + 1 + perm[Y + 1]].dot2(x - 1, y - 1);
        let u = fade(x);
        return lerp(lerp(n00, n10, u), lerp(n01, n11, u), fade(y));
      }
      return {
        seed,
        perlin2
      };
    }
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

//中3
(function() {
    var myChart = echarts.init(document.querySelector(".Map2 .chart"));
    $.get('/data/4_6.json',function(usaJson){
        echarts.registerMap('USA', usaJson, {
            Alaska: {
              left: -131,
              top: 25,
              width: 15
            },
            Hawaii: {
              left: -110,
              top: 28,
              width: 5
            },
            'Puerto Rico': {
              left: -76,
              top: 26,
              width: 2
            }
        });
        option = {
            tooltip: {
              trigger: 'item',
              showDelay: 0,
              transitionDuration: 0.2
            },
            visualMap: {
              left: 'right',
              min: 500000,
              max: 38000000,
              inRange: {
                color: [
                  '#313695',
                  '#4575b4',
                  '#74add1',
                  '#abd9e9',
                  '#e0f3f8',
                  '#ffffbf',
                  '#fee090',
                  '#fdae61',
                  '#f46d43',
                  '#d73027',
                  '#a50026'
                ]
              },
              text: ['High', 'Low'],
              calculable: true
            },
            series: [
              {
                name: 'USA PopEstimates',
                type: 'map',
                roam: true,
                map: 'USA',
                emphasis: {
                  label: {
                    show: true,
                    textStyle:{color:"#eeeeee"}
                  }
                },
                data: [
                  { name: 'Alabama', value: 4822023 },
                  { name: 'Alaska', value: 731449 },
                  { name: 'Arizona', value: 6553255 },
                  { name: 'Arkansas', value: 2949131 },
                  { name: 'California', value: 38041430 },
                  { name: 'Colorado', value: 5187582 },
                  { name: 'Connecticut', value: 3590347 },
                  { name: 'Delaware', value: 917092 },
                  { name: 'District of Columbia', value: 632323 },
                  { name: 'Florida', value: 19317568 },
                  { name: 'Georgia', value: 9919945 },
                  { name: 'Hawaii', value: 1392313 },
                  { name: 'Idaho', value: 1595728 },
                  { name: 'Illinois', value: 12875255 },
                  { name: 'Indiana', value: 6537334 },
                  { name: 'Iowa', value: 3074186 },
                  { name: 'Kansas', value: 2885905 },
                  { name: 'Kentucky', value: 4380415 },
                  { name: 'Louisiana', value: 4601893 },
                  { name: 'Maine', value: 1329192 },
                  { name: 'Maryland', value: 5884563 },
                  { name: 'Massachusetts', value: 6646144 },
                  { name: 'Michigan', value: 9883360 },
                  { name: 'Minnesota', value: 5379139 },
                  { name: 'Mississippi', value: 2984926 },
                  { name: 'Missouri', value: 6021988 },
                  { name: 'Montana', value: 1005141 },
                  { name: 'Nebraska', value: 1855525 },
                  { name: 'Nevada', value: 2758931 },
                  { name: 'New Hampshire', value: 1320718 },
                  { name: 'New Jersey', value: 8864590 },
                  { name: 'New Mexico', value: 2085538 },
                  { name: 'New York', value: 19570261 },
                  { name: 'North Carolina', value: 9752073 },
                  { name: 'North Dakota', value: 699628 },
                  { name: 'Ohio', value: 11544225 },
                  { name: 'Oklahoma', value: 3814820 },
                  { name: 'Oregon', value: 3899353 },
                  { name: 'Pennsylvania', value: 12763536 },
                  { name: 'Rhode Island', value: 1050292 },
                  { name: 'South Carolina', value: 4723723 },
                  { name: 'South Dakota', value: 833354 },
                  { name: 'Tennessee', value: 6456243 },
                  { name: 'Texas', value: 26059203 },
                  { name: 'Utah', value: 2855287 },
                  { name: 'Vermont', value: 626011 },
                  { name: 'Virginia', value: 8185867 },
                  { name: 'Washington', value: 6897012 },
                  { name: 'West Virginia', value: 1855413 },
                  { name: 'Wisconsin', value: 5726398 },
                  { name: 'Wyoming', value: 576412 },
                  { name: 'Puerto Rico', value: 3667084 }
                ]
              }
            ]
          };
        myChart.setOption(option);
    });
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();
