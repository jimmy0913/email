export const formatTime = (date) => {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()


    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

export const isPhone = (str) => {
    let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
    return reg.test(str) ? true:false;
}

export const isIdentyId = (str) =>{
    let reg = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
    return reg.test(str);
}

export const arrayUnique2 = (arr, name) => {
    // 数组根据属性去重
    var hash = {};
    return arr.reduce(function(item, next) {
        hash[next[name]] ? '' : hash[next[name]] = true && item.push(next);
        return item;
    }, []);
}
export const timestampToChinaDate = (timestamp) => {
    if (typeof(timestamp) != undefined) {
        var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '年';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '月';
        var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + '日';
        return Y + M + D;
    } else {
        return new Error();
    }

}

export const timestampToNormalDate = (timestamp) => {
    if (typeof(timestamp) != undefined) {
        var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '/';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/';
        var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) ;
        return Y + M + D;
    } else {
        return new Error();
    }

}

export const timestampToTime = (timestamp) => {
    var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()) + ':';
    var m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + ':';
    var s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());
    return Y + M + D + h + m + s;
}

export const timestampToTimeYMD = (timestamp) => {
    timestamp = new Date(timestamp * 1000);
    var Y = timestamp.getFullYear() + '-';
    var M = (timestamp.getMonth() + 1 < 10 ? '0' + (timestamp.getMonth() + 1) : timestamp.getMonth() + 1) + '-';
    var D = (timestamp.getDate() < 10 ? '0' + (timestamp.getDate()) : timestamp.getDate()) + '';
    return Y + M + D;
}

export const dateToJsonTime = (date) => {
    date = new Date(date);
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + '';
    return Y + M + D;
}

export const isJson = (str) => {
    if (typeof str == 'string') {
        try {
            var obj = JSON.parse(str);
            if (typeof obj == 'object' && obj) {
                return true;
            } else {
                return false;
            }
        } catch (e) {
            return false;
        }
    }
}

export const dateToTimestamp = (date) => {
    return Date.parse(date);
}

export const caculateRemainTime = (startTime, endTime) => {
    let remainTime = endTime - startTime;
    return Math.floor(remainTime / 1000 / 60 / 60 / 24) + 1;
}

export const changeNumToLetter = (num) => {
    return String.fromCharCode(64 + parseInt(num)) || 'A'
}

export const changeTimeButton = (timeClass) => {
    let startDate = new Date();
    let endDate = new Date();
    let now = new Date();
    let getQuarterStartMonth = nowMonth => {
        var quarterStartMonth = 0;
        if (nowMonth < 3) {
            quarterStartMonth = 0;
        }
        if (2 < nowMonth && nowMonth < 6) {
            quarterStartMonth = 3;
        }
        if (5 < nowMonth && nowMonth < 9) {
            quarterStartMonth = 6;
        }
        if (nowMonth > 8) {
            quarterStartMonth = 9;
        }
        return quarterStartMonth;
    };
    const doTime = new Map()
        .set("全年", () => {
            startDate = new Date(now.getFullYear() + "-01-01");
            endDate = new Date(now.getFullYear() + "-12-31");
        })
        .set("本季", () => {
            startDate = new Date(
                now.getFullYear(),
                getQuarterStartMonth(now.getMonth()),
                1
            );
            endDate = new Date(
                now.getFullYear(),
                getQuarterStartMonth(now.getMonth()) + 3,
                0
            );
        })
        .set("本月", () => {
            startDate = new Date(now.getFullYear(), now.getMonth(), 1);
            endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        });
    let selectTime = doTime.get(timeClass);
    selectTime();
    return [startDate, endDate];
}

export const changeWeightToTitle = (weight) => {
    const titleList = new Map()
        .set(20, "不太重要")
        .set(40, "一般")
        .set(60, "重要")
        .set(80, "非常重要")
        .set(100, "超级重要");
    return titleList.get(weight);
}
export const emptyStr = function(str) {
    // return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '').length==0 ? true:false;
    return str == null || str == '' || str.Trim() == '' ? true : false
}

String.prototype.replaceAll = function(source, object) {
    var reg = new RegExp(source, "g");
    return this.replace(reg, object);
}

String.prototype.isEmpty =function(){
  return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '').length==0 ? true:false;
}

String.prototype.Trim = function(){    
    return this.replace(/(^\s*)|(\s*$)/g, "");
}   

/**数组根据数组对象中的某个属性值进行排序的方法 
 * 使用例子：newArray.sort(sortBy('number',false)) //表示根据number属性降序排列;若第二个参数不传递，默认表示升序排序
 * @param attr 排序的属性 如number属性
 * @param rev true表示升序排列，false降序排序
 * */
export const sortBy = (attr, rev) => {
    //第二个参数没有传递 默认升序排列
    if (rev == undefined) {
        rev = 1;
    } else {
        rev = (rev) ? 1 : -1;
    }
    return function(a, b) {
        a = a[attr];
        b = b[attr];
        if (a < b) {
            return rev * -1;
        }
        if (a > b) {
            return rev * 1;
        }
        return 0;
    }
}

export const cumLengthOfStr = (str) => {
    var bytesCount = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (/^[\u0000-\u00ff]$/.test(c)) //匹配双字节
        {
            bytesCount += 1;
        } else {
            bytesCount += 2;
        }
    }
    return bytesCount
}

/**字符串根据字节长度去截取字符串的方法 
 * @param {String} str 源字符串
 * @param {Number} cumlength 需要截取的字节长度
 * @param {String} replaceStr 需要截取的替换字符串
 * */
export const subStringCum = (str, cumlength, replaceStr) => {
    let bytesCount = 0;
    let byteIndex = 0;
    for (let i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        if (/^[\u0000-\u00ff]$/.test(c)) //匹配双字节
        {
            bytesCount += 1;
        } else {
            bytesCount += 2;
        }
        if (bytesCount >= cumlength) {
            byteIndex = i;
            return str.substring(0, i) + replaceStr + subStringCum(str.substring(i, str.length - 1), cumlength, replaceStr);
        }
        if (i == str.length - 1) {
            return str;
        }
    }
}

export const maxSimilarNum = (num) => {
    for (let i = 0; i < 6; i++) {
        if (num <= (i + 1) * 20) {
            return (i + 1) * 20;
        }
    }
}


Date.prototype.Format = function(fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };

    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
}


Date.prototype.lessDay = function(days){
    if(days<1) return this;
    var cd = this.getDate();
    cd -= parseInt(days);
    this.setDate(cd);
    return this;
}

Date.prototype.addDay = function(days){
    if(days<1) return this;
    var cd = this.getDate();
    cd += parseInt(days);
    this.setDate(cd);
    return this;
}