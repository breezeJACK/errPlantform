import Logs from "./index"

export default class JsLogs extends Logs {
    constructor(customInfo, uploadType, errorMsg, errorStack) {
        super(customInfo, uploadType)
        this.errorMessage = errorMsg;
        this.errorStack = errorStack;
    }
}