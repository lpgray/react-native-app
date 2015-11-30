/*jslint node: true, esnext: true, multistr: true */
/* globals module, require */

const TASK_DATA = [
    {
        id: 0,
        title : 'QQ音乐试玩',
        thum: 'http://facebook.github.io/react/img/logo_og.png',
        salary: '2元/次',
        body: 'UPDATE list：\n \
9.21 React Native Android 9.15 提前发布，补充AppStore审核政策变化。：\n \
5.23 Slide：上海前端技术峰会，http://yunpan.taobao.com/s/GeUkc7lAfI：\n \
4.24 Slide：QCon北京2015，“http://www.stuq.org/ppt/show/95/5c28db3ecf661208387127be8878aed3#/1”：\n \
4.17 天猫前端@横天同学发表的react-native 之布局篇对css-layout的布局能力做了一些实验，给出了一些有价值的结论，如：react 宽度基于pt为单位；flex能实现网格系统需求，且网格能够各种嵌套无bug；padding 设置在Text元素上所有padding变成了marginBottom...：\n \
4.11 风险，iOS6 javascriptCore.framework 为私有，可以通过JavaScriptCore-iOS · GitHub这个库代替。'
    },
    {
        id: 1,
        title : '火枪手注册任务',
        thum: 'http://facebook.github.io/react/img/logo_og.png',
        salary: '5元/次',
        body: '摘自3.26 React Native的发布稿（Introducing React Native），加粗的关键字传达了React Native的设计理念：既拥有Native的用户体验、又保留React的开发效率。这个理念似乎迎合了业界普遍存在的痛点，开源不到1周github star破万，目前是11000+。'
    },
    {
        id: 2,
        title : '保持10分钟在线',
        thum: 'http://facebook.github.io/react/img/logo_og.png',
        salary: '1元/次',
        body: '对React的理解，认为React是一种架构模式，无论是内建的DOM、Native还是React Canvas都是的一种基于React模式的具体实现，当我们评价React Native还是评价React Canvas，都是React生态想象空间的一种表现。'
    },
    {
        id: 3,
        title : '钱宝App推广',
        thum: 'http://facebook.github.io/react/img/logo_og.png',
        salary: '3元/次',
        body: '但是，Android版本还未开源，React Native只支持iOS7+平台，而在淘宝移动业务里依旧需要支持iOS6平台，所以在iOS6与Android平台上只能暂时继续跑H5页面，在技术上我们很快就确定将React Native代码转为H5版本，做到大家梦寐以求 Write once, run everywhere，就如大家在微博http://weibo.com/1797897057/CcFmN3nwp上看到的，我们就做了一个简单的DEMO，基本确定这个方向的可行性。'
    },
    {
        id: 4,
        title : '使用帮帮APP',
        thum: 'http://facebook.github.io/react/img/logo_og.png',
        salary: '1元/次',
        body: 'React native充分利用了Facebook的现有轮子，是一个很优秀的集成作品，并且我相信这个团队对前端的了解很深刻，否则不可能让Native code「退居二线」。'
    }
];

export {TASK_DATA};
