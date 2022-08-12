<template>
  <div class="home">
      <headerVue></headerVue>
      <covid-info :covidInfoStr = 'covidInfoStr'></covid-info>
      <case-number></case-number>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import headerVue from '../components/headerVue.vue'
import covidInfo from '../components/CovidInfo.vue'
import caseNumber from '../components/CaseNumber.vue'
import api from '../api/index'
export default{
  components: {
    // HelloWorld,
    headerVue,
    covidInfo,
    caseNumber
  },
  data(){
    return{
      covidInfoStr:{
        desc1:'',
        desc2:'',
        desc3:'',
        desc4:'',
        desc5:'',
        desc6:'',
      }
    }
  },
  mounted(){
            api.getNcov({
                  key: "32044bf28bb4abcf3384b3e5ab0c4808",
            }).then(res=>{
              if(res.data.code === 200){
                this.covidInfoStr.desc1 = res.data.newslist[0].desc.desc1 || '新型冠状病毒肺炎（Corona Virus Disease 2019，COVID-19），简称“新冠肺炎”，世界卫生组织命名为“2019冠状病毒病。'
                this.covidInfoStr.desc2 = res.data.newslist[0].desc.desc1 || '2019年12月以来，湖北省武汉市部分医院陆续发现了多例有华南海鲜市场暴露史的不明原因肺炎病例，证实为2019新型冠状病毒感染引起的急性呼吸道传染病。'
                this.covidInfoStr.desc3 = res.data.newslist[0].desc.desc1 || '2020年2月11日，世界卫生组织总干事谭德塞在瑞士日内瓦宣布，将新型冠状病毒感染的肺炎命名为“COVID-19”'
                this.covidInfoStr.desc4 = res.data.newslist[0].desc.desc1 || '2月22日，国家卫生健康委发布通知，“新型冠状病毒肺炎”英文名称修订为“COVID-19”。'
                this.covidInfoStr.desc5 = res.data.newslist[0].desc.desc1 || '截至欧洲中部时间2022年8月11日17时01分（北京时间23时01分），全球确诊病例较前一日增加905979例，达到585086861例；死亡病例增加2572例，达到6422914例。'
                this.covidInfoStr.desc6 = res.data.newslist[0].desc.desc1 || '累计追踪到密切接触者4830513人，尚在医学观察的密切接触者148648人。'
              }
              console.log(this.covidInfoStr)
            })
            .catch(err => console.log(err))
      }
}
// @Component({
//   )
// export default class HomeView extends Vue {}
</script>
