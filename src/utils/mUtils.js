/**
 * 存储localStorage
 */
export const setStore = (name, content, expireTime = 864000) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }

    let storageValue = {
        expireTime: new Date().setHours((new Date().getHours() + expireTime / 3600)),
        value: content
    }
    window.localStorage.setItem(name, JSON.stringify(storageValue));
}

/**
 * 获取localStorage
 */
export const getStore = name => {
    if (!name) return;
    let storage = window.localStorage.getItem(name);
    storage = JSON.parse(storage);
    if (!storage) {
        return;
    }
    if (storage.expireTime < new Date()) {
        return;
    } else {
        return storage.value;
    }
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
}

/**
 * 获取style样式
 */
export const getStyle = (element, attr, NumberMode = 'int') => {
    let target;
    // scrollTop 获取方式不同，没有它不属于style，而且只有document.body才能用
    if (attr === 'scrollTop') {
        target = element.scrollTop;
    } else if (element.currentStyle) {
        target = element.currentStyle[attr];
    } else {
        target = document.defaultView.getComputedStyle(element, null)[attr];
    }
    //在获取 opactiy 时需要获取小数 parseFloat
    return NumberMode == 'float' ? parseFloat(target) : parseInt(target);
}
