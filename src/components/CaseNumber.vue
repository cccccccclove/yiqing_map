<template>
  <div class="caseNumber">
      <p class="time">
            <span>截至 {{caseNumberStr.modifyTime | formatData}} 全国数据统计</span>
      </p>
      <div class="box">
            <div class="item">
                  <span class="yearsteday">
                        较昨日 <span class="orange">{{caseNumberStr.currentConfirmedIncr | upFuc}}</span>
                  </span>
                  <span class="count orange">{{caseNumberStr.currentConfirmedIncr}}</span>
                  <span>现存确诊</span>
            </div>
             <div class="item">
                  <span class="yearsteday">
                        较昨日 <span class="yellow">{{caseNumberStr.suspectedIncr  | upFuc}}</span>
                  </span>
                  <span class="count yellow">{{caseNumberStr.suspectedCount}}</span>
                  <span>现存境外输入</span>
            </div>
            <div class="item">
                  <span class="yearsteday">
                        较昨日 <span class="blew">{{caseNumberStr.seriousIncr | upFuc}}</span>
                  </span>
                  <span class="count blew">{{caseNumberStr.seriousCount}}</span>
                  <span>现存无症状</span>
            </div>
            <div class="item">
                  <span class="yearsteday">
                        较昨日 <span class="red">{{caseNumberStr.confirmedIncr | upFuc}}</span>
                  </span>
                  <span class="count red">{{caseNumberStr.confirmedCount}}</span>
                  <span>累计确诊</span>
            </div>
            <div class="item">
                  <span class="yearsteday">
                        较昨日 <span class="blue">{{caseNumberStr.deadIncr | upFuc}}</span>
                  </span>
                  <span class="count blue">{{caseNumberStr.deadCount}}</span>
                  <span>累计死亡</span>
            </div>
            <div class="item">
                  <span class="yearsteday">
                        较昨日 <span class="gree">{{caseNumberStr.curedIncr | upFuc}}</span>
                  </span>
                  <span class="count gree">{{caseNumberStr.curedCount}}</span>
                  <span>累计治愈</span>
            </div>
      </div>
  </div>
</template>

<script>
export default {
      props:{
            caseNumberStr:{
                  type:Object,
                  default:function(){
                        return {}
                  }
            }
      },
      filters:{
            formatData:(time)=>{
                  let data = new Date(time)
                  // console.log(data)
                  let YY = (data.getFullYear() || ' ' ) + '-'
                  let MM = (
                        data.getMonth() + 1 < 10 ? '0' + (data.getMonth()+1) : (data.getMonth() + 1 )|| ' ' 
                  ) + '-'
                  let DD = (
                        data.getDate() < 10 ? '0' + data.getDate() : data.getDate() || ' '
                  ) + '     '
                  let hh = (
                        data.getHours() < 10 ? '0' + data.getHours() : data.getHours()|| ' ' 
                  )  + ':'
                  let mm = data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes() || ' ' 
                  return YY + MM + DD + hh + mm
            },
            upFuc:(num)=>{
                 return num > 0 ? '+' + num : '-' + num
            }
      },
      methods: {
            
      },
};
</script>

<style lang='scss' scoped>
.caseNumber {
  padding-bottom: 0.1rem;
//   border-bottom: 0.001rem solid #ddd;
  margin: 0 0.1rem;
  .time{
      font-size: 0.15rem;
      height: 0.4rem;
      line-height: 0.4rem;
  }
  .box{
      border: solid 0.01rem #ddd;
      border-radius: 0.05rem;
      display: flex;
      flex-wrap: wrap;
      .item{
            width: 33.3%;
            margin: auto;
            display: flex;   
            flex-direction: column;
            font-size: 0.15rem;
            font-weight: 600;
            text-align: center;
            margin: 0.1rem 0;
            .count{
                  font-weight: 800;
                  font-size: 0.2rem;
            }
            .orange{
                  color: #f8683b;
            }
            .yellow{
                  color: #f18841;
            }
            .blew{
                  color: #986355;
            }
            .red{
                  color: #ba2d2e;
            }
            .blue{
                  color: #5b6f93;
            }
            .gree{
                  color: #3ea7ae;
            }
      }
  }
}
</style>