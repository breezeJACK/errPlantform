import Logs from "./index"

export default class HttpLogs extends Logs {
    constructor(uploadType, router, reason) {
        super(uploadType)
        this.router = router;
        this.reason = reason;
    }
}