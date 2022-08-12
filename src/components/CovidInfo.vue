<template>
      <div class="cavidInfo">
           <p class="desc">
             <span>病毒信息</span>
           </p>
           <div class="text">
            <li>{{covidInfoStr.desc1}}</li>
            <li>{{covidInfoStr.desc2}}</li>
            <li>{{covidInfoStr.desc3}}</li>
            <li>{{covidInfoStr.desc4}}</li>
            <li>{{covidInfoStr.desc5}}</li>
            <li>{{covidInfoStr.desc6}}</li>
           </div>
      </div>
</template>

<script>
export default {
      props:{
            covidInfoStr:{
                  typeof:Object,
                  default:function(){
                        return {}
                  }
            }
      },
      mounted(){
      }
}
</script>

<style lang='scss' scoped>
      .cavidInfo{
            padding-bottom: 0.1rem;
            border-bottom: 0.001rem solid #ddd;
            .desc{
                  width: 100%;
                  height: 0.5rem;
                  font-size: 0.2rem;
                  font-weight: 800;
                  line-height: 0.5rem;
                  margin-left: 0.1rem;
                  span::before{
                        content: '|';
                        color: #3796ff;
                  }
            }
            .text{
                  margin: 0 0.1rem;
                  li{
                        list-style: none;
                        font-size: 0.15rem;
                  }
            }
      }
</style>