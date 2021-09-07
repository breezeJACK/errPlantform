import Logs from "./index"

export default class BehaviorInfo extends Logs {
    constructor(uploadType, behaviorType, className, placeholder, inputValue, tagName, innerText) {
        super(uploadType)
        this.behaviorType = behaviorType;
        this.className = className;
        this.placeholder = placeholder;
        this.inputValue = inputValue;
        this.tagName = tagName;
        this.innerText = innerText;
    }
}