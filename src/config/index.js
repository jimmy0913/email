//系统配置文件
import develop from './develop'
import production from './production'

const config = {
    env: process.env.NODE_ENV,
    site_name: '数据统计平台'
}

export default {
    ...config,
    ...(config.env === 'development' ? develop : production)
}