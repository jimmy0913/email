export const qualityToTitle = (quality) => {
    const quailTitle = new Map()
        .set(0, '优秀').set(1, '较好').set(2, '一般').set(3, '较差')
    return quailTitle.get(quality)
}

export const taskStatus = (status) => {
    status = parseInt(status);
    const taskStatusList = new Map()
        .set(0, "进行中")
        .set(1, "有风险")
        .set(2, "已延误")
        .set(3, "已完成")
        .set(4, "待审核")
        .set(5, "已终止")
    return taskStatusList.get(status)
}

