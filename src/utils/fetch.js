import Axios from 'axios';
import config from '@/config';

import { Indicator } from 'mint-ui';

const baseURL = config.base_url;
export default (url = '', data = {}, type = 'GET', requestPage = 'common', responseType = 'json') => {
    const http = Axios.create({
        baseURL: baseURL,
        responseType: responseType,
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        transformRequest: [data => {
            return JSON.stringify(data);
        }]
    })
    let config = {
        url,
        method: type
    }
    if (type.toUpperCase() == 'GET') {
        config.params = data;
        config.data = {};
    } else {
        config.data = data;
    }
    // iView.LoadingBar.start();

    Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
    });
    
    return http(config).then(res => {
        if (responseType == 'json') {
            return res.data
        } else {
            const blob = res.data
            const fileName = 'user.xlsx'
            if ('download' in document.createElement('a')) { // 非IE下载
                const elink = document.createElement('a')
                elink.download = fileName
                elink.style.display = 'none'
                elink.href = URL.createObjectURL(blob)
                document.body.appendChild(elink)
                elink.click()
                URL.revokeObjectURL(elink.href) // 释放URL 对象
                document.body.removeChild(elink)
            } else { // IE10+下载
                navigator.msSaveBlob(blob, fileName)
            }
        }
    }).finally(() => {
        // iView.LoadingBar.finish();
        Indicator.close();
    })
};