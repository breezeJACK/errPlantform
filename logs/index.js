const WEB_MONITOR_ID = "ceshiProject"
const customInfo = "ceshi"
import {
    BrowserInfo,
    getOsInfo
}
from "../utils"



export default class Logs {
    constructor(uploadType) {
        this.happenTime = new Date().getTime(); // 日志发生时间
        this.webMonitorId = WEB_MONITOR_ID; // 用于区分应用的唯一标识（一个项目对应一个）
        this.simpleUrl = window.location.href.split('?')[0].replace('#', ''); // 页面的url
        this.os = getOsInfo().name;
        this.customInfo = customInfo;
        this.uploadType = uploadType;
        this.osVersion = getOsInfo().version
        this.browserName = BrowserInfo().browserName;
        this.browserVersion = BrowserInfo().browserVersion;
        /* global returnCitySN */
        this.monitorIp = returnCitySN['cip']; // 用户的IP地址
        this.area = returnCitySN['cname'];
        //此处执行上传
        console.log(this, "处理逻辑")
    }
}