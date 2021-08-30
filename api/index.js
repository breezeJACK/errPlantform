import axios from "axios"

axios.interceptors.response.use( response=> {

    return response;
  }, error =>{
    // 对响应错误做点什么
    console.log("对相应数据错误进行上报处理")
    return Promise.reject(error);
  })

export default axios