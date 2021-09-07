import sourceMap from "source-map-js";


const getErrInfo = (errStack) => {
    const {
        columnNumber,
        fileName,
        functionName,
        lineNumber,
        source
    } = errStack


}







export const handleErr = (errStack) => {
    const errInfo = errStack[0]
    return getErrInfo(errInfo)

}