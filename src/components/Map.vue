<template>
  <div class="map">
    <p class="desc">
      <span>疫情地图</span>
    </p>
    <div id="chinaMap"></div>
    <div id="line"></div>
  </div>
</template>

<script>
import api from '../api/index'
export default {
  mounted() {
      api.getNcovCity({
      key: "32044bf28bb4abcf3384b3e5ab0c4808",
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    this.$charts.chinaMap("chinaMap",[]);
    this.$charts.line('line')
  },
};
</script>

<style lang='scss' scoped>
.map {
  .desc {
    width: 100%;
    height: 0.5rem;
    font-size: 0.2rem;
    font-weight: 800;
    line-height: 0.5rem;
    margin-left: 0.1rem;
    span::before {
      content: "|";
      color: #3796ff;
    }
  }
  #line {
    width: 4rem;
    height: 3rem;
  }
  #chinaMap {
    width: 4rem;
    height: 4rem;
    display: block;
  }
}
</style>