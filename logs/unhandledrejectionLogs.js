import Logs from "./index"

export default class UnhandledrejectionLogs extends Logs {
    constructor(uploadType, errorMessage, errorStack) {
        super(uploadType)
        this.errorMessage = errorMessage;
        this.errorStack = errorStack;
    }
}