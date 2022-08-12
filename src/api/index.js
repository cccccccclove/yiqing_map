import axios from "../utils/request";

const base = {
      baseUrl:'http://api.tianapi.com',
      ncov:'/txapi/ncov/index'
}

const api = {
      //抗击疫情
      getNcov(param){
            return axios.get(base.baseUrl + base.ncov + '?key=' + param.key)
      }
}

export default api