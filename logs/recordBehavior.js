import JsLogs from "./jslogs"
import Sourcelogs from "./sourcelogs";
import UnhandledrejectionLogs from "./unhandledrejectionLogs"
import BehaviorInfo from "./behaviorInfo"


/**
 * 页面JS错误监控
 */
const recordJavaScriptError = () => {

    //处理js报错
    function siftAndMakeUpJSMessage(origin_errorMsg, origin_errorObj) {
        let errorMsg = origin_errorMsg ? origin_errorMsg : '';
        let errorObj = origin_errorObj ? origin_errorObj : '';
        let errorType = "";
        if (errorMsg) {
            let errorStackStr = JSON.stringify(errorObj)
            errorType = errorStackStr.split(": ")[0].replace('"', "");
        }
        let javaScriptErrorInfo = new JsLogs("jsErr", errorType + ": " + errorMsg, errorObj);
        console.log(javaScriptErrorInfo)
    }
    //处理资源错误
    function siftAndMakeUpSourceMessage(errorSource) {
        let sourceErrorInfo = new Sourcelogs("sourceErr", errorSource)
        console.log(sourceErrorInfo)
    }


    window.addEventListener("error", (err) => {
        console.log(err, "error", err instanceof ErrorEvent)
        if (err instanceof ErrorEvent) {
            const {
                message,
                error
            } = err
            siftAndMakeUpJSMessage(message, error.stack);

        } else {
            const target = err.target
            siftAndMakeUpSourceMessage(target.outerHTML);
        }
        return true
    }, true)
    //处理promise错误
    window.addEventListener("unhandledrejection", error => {
        let UnhandledrejectionLogsInfo = new UnhandledrejectionLogs("sourceErr", error.reason.message, error.reason.stack)
        console.log(UnhandledrejectionLogsInfo)
    });
    //处理浏览器崩溃现象
}


recordJavaScriptError()


/**
 * 用户行为记录监控
 */
function recordBehavior() {

    // 记录行为前，检查一下url记录是否变化
    // checkUrlChange();
    // 记录用户点击元素的行为数据
    document.onclick = function (e) {
        console.log(e)
        var className = "";
        var placeholder = "";
        var inputValue = "";
        var tagName = e.target.tagName;
        var innerText = "";
        if (e.target.tagName != "svg" && e.target.tagName != "use") {
            className = e.target.className;
            placeholder = e.target.placeholder || "";
            inputValue = e.target.value || "";
            innerText = e.target.innerText.replace(/\s*/g, "");
            // 如果点击的内容过长，就截取上传
            if (innerText.length > 200) innerText = innerText.substring(0, 100) + "... ..." + innerText.substring(innerText.length - 99, innerText.length - 1);
            innerText = innerText.replace(/\s/g, '');
        }
        var behaviorInfo = new BehaviorInfo("ELE_BEHAVIOR", "click", className, placeholder, inputValue, tagName, innerText);
    }

}
recordBehavior()