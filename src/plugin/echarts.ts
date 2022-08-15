import echarts from 'echarts';

const install = function (Vue: any) {
  Object.defineProperties(Vue.prototype, {
    $charts: {
      get() {
        return {
          line: function (id: any) {
            var dom = document.getElementById(id)
            var myEchart = echarts.init(dom)
            var option = {
              xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              yAxis: {
                type: 'value'
              },
              series: [
                {
                  data: [150, 230, 224, 218, 135, 147, 260],
                  type: 'line'
                }
              ]
            }
            myEchart.setOption(option)
          },
          chinaMap: function (id: any,data:any) {
            var dom = document.getElementById(id)
            var myEchart = echarts.init(dom)
            var option = {
              tooltip: {}, //点击时的提示信息
              series: [{
                name: '省',
                type: 'map', //配置图表类型
                map: 'china',//中国地图
                roam: false,//是否允许自动缩放
                zoom: 1.2,//地图缩放比例，标准比例为1.2
                aspectScale: 0.75,
                label: {//配置颜色字体背景等
                  normal: {//必须字段
                    show: true,//是否显示地图上文字
                    textStyle: {
                      color: 'rgba(0,0,0,0.4)'
                    }
                  }
                },
                itemStyle: {//地图样式
                  normal: {
                    areaColor: 'rgba(0,0,0,0.1)',
                    borderColor: 'rgba(118,237,236,1)',
                  },
                  emphasis: {//边框样式
                    areaColor: 'rgba(118,237,236,0.8)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,//模糊程度
                    borderWidth: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                },
               data
              }]
            }
            myEchart.setOption(option)
          }
        }
      }
    }
  })
}

export default install