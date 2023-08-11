// 你可以在相应的生命周期去对文件的增删改查
module.exports = {
    // 刚刚下载完模板，还没有移动到新建目录下
    beforeUserTem ({ fse, path }, inDirName) {
        // cliGloble中包含fse、path函数库
        // inDirName用户创建项目的名称
        console.log('beforeUserTem', cliGloble)

        /*获取中心数据实例*/


    },
    // 已经移动到新建目录下和用户已经选择完毕，但是还未开始渲染
    beforeRendenTem (handleFunc, inDirName, selectData) {
        // selectData用户选择的数据
    },
    // 渲染完毕
    mouthedRendenTem (handleFunc, inDirName, selectData) {

    }
}
