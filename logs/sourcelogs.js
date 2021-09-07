import Logs from "./index"

export default class Sourcelogs extends Logs {
    constructor(uploadType, errSource) {
        super(uploadType)
        this.errSource = errSource
    }
}