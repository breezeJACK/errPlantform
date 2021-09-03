import axios from "axios"
import HttpLogs from "../logs/httplogs"

axios.interceptors.response.use(response => {

  return response;
}, error => {

  const httplogs = new HttpLogs("ceshi", "httperr", error.config.url, error.message)
  console.log(httplogs, "httplogs")
  //此处不能返回reject 否则会触发unhandledrejectionLogs
  // return Promise.reject(error);
})

export default axios