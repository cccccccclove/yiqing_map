<template>
  <div class="caseNumber">
      <p class="time">
            <span>截至 2021-01-21 08:38 全国数据统计</span>
      </p>
      <div class="box">
            <div class="item">
                  <span class="yearsteday">
                        较昨日 <span class="orange">+163</span>
                  </span>
                  <span class="count orange">2456</span>
                  <span>现存确诊</span>
            </div>
             <div class="item">
                  <span class="yearsteday">
                        较昨日 <span class="yellow">+163</span>
                  </span>
                  <span class="count yellow">2456</span>
                  <span>现存确诊</span>
            </div>
            <div class="item">
                  <span class="yearsteday">
                        较昨日 <span class="blew">+163</span>
                  </span>
                  <span class="count blew">2456</span>
                  <span>现存确诊</span>
            </div>
            <div class="item">
                  <span class="yearsteday">
                        较昨日 <span class="red">+163</span>
                  </span>
                  <span class="count red">2456</span>
                  <span>现存确诊</span>
            </div>
            <div class="item">
                  <span class="yearsteday">
                        较昨日 <span class="blue">+163</span>
                  </span>
                  <span class="count blue">2456</span>
                  <span>现存确诊</span>
            </div>
            <div class="item">
                  <span class="yearsteday">
                        较昨日 <span class="gree">+163</span>
                  </span>
                  <span class="count gree">2456</span>
                  <span>现存确诊</span>
            </div>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.caseNumber {
  padding-bottom: 0.1rem;
  border-bottom: 0.001rem solid #ddd;
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