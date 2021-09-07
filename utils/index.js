export const BrowserInfo = () => {
    const ua = navigator.userAgent.toLowerCase();

    if (ua.match(/msie ([\d.]+)/)) {

        return {
            browserName: 'IE',
            browserVersion: ua.match(/msie ([\d.]+)/)[1]
        }
    }
    if (ua.match(/firefox\/([\d.]+)/)) {
        return {
            browserName: 'firefox',
            browserVersion: ua.match(/firefox\/([\d.]+)/)[1]
        }
    }
    if (ua.match(/chrome\/([\d.]+)/)) {
        return {
            browserName: 'chrome',
            browserVersion: ua.match(/chrome\/([\d.]+)/)[1]
        }
    }
    if (ua.match(/opera.([\d.]+)/)) {
        return {
            browserName: 'opera',
            browserVersion: ua.match(/opera.([\d.]+)/)[1]
        }
    }
    if (ua.match(/version\/([\d.]+).*safari/)) {
        return {
            browserName: 'safari',
            browserVersion: ua.match(/version\/([\d.]+).*safari/)[1]
        }
    }
}


// 获取操作系统信息 
export const getOsInfo = () => {
    var userAgent = navigator.userAgent.toLowerCase();
    var name = 'Unknown';
    var version = 'Unknown';
    if (userAgent.indexOf('win') > -1) {
        name = 'Windows';
        if (userAgent.indexOf('windows nt 5.0') > -1) {
            version = 'Windows 2000';
        } else if (userAgent.indexOf('windows nt 5.1') > -1 || userAgent.indexOf('windows nt 5.2') > -1) {
            version = 'Windows XP';
        } else if (userAgent.indexOf('windows nt 6.0') > -1) {
            version = 'Windows Vista';
        } else if (userAgent.indexOf('windows nt 6.1') > -1 || userAgent.indexOf('windows 7') > -1) {
            version = 'Windows 7';
        } else if (userAgent.indexOf('windows nt 6.2') > -1 || userAgent.indexOf('windows 8') > -1) {
            version = 'Windows 8';
        } else if (userAgent.indexOf('windows nt 6.3') > -1) {
            version = 'Windows 8.1';
        } else if (userAgent.indexOf('windows nt 6.2') > -1 || userAgent.indexOf('windows nt 10.0') > -1) {
            version = 'Windows 10';
        } else {
            version = 'Unknown';
        }
    } else if (userAgent.indexOf('iphone') > -1) {
        name = 'Iphone';
    } else if (userAgent.indexOf('mac') > -1) {
        name = 'Mac';
    } else if (userAgent.indexOf('x11') > -1 || userAgent.indexOf('unix') > -1 || userAgent.indexOf('sunname') > -1 || userAgent.indexOf('bsd') > -1) {
        name = 'Unix';
    } else if (userAgent.indexOf('linux') > -1) {
        if (userAgent.indexOf('android') > -1) {
            name = 'Android';
        } else {
            name = 'Linux';
        }
    } else {
        name = 'Unknown';
    }
    return {
        name,
        version
    };
}