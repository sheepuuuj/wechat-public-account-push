/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx1ea4c491f41bc11c',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '2c13af3043df30e361fbe294ccecdd02',
  IS_SHOW_COLOR: true,

  // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句
    CIBA: true,
    // 每日一言
    oneTalk: false,
    // 土味情话(彩虹屁)
    earthyLoveWords: false,
    // 朋友圈文案
    momentCopyrighting: false,
    // 毒鸡汤
    poisonChickenSoup: false,
    // 古诗古文
    poetry: false,

    /** 星座运势 */
    horoscope: false,

    /** 生日消息和节日消息 */
    birthdayMessage: true,

    // 学生课表
    courseSchedule: false,
  },
  PROVINCE: '河南',
  CITY: '驻马店',

  USERS: [
    {
      // 想要发送的人的名字
      name: '大哥',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oLTRz6H5iBoG2ULFBdB4RoDIG2GI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      
      
    },
  ],


  
 

  CALLBACK_USERS: [
    {
      name: '小弟',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oLTRz6BktdWCRA5VZi-KtvHW6ucI',
      useTemplateId:"XD8p5bqfmZ5oPpJYmzkLwSz4qnTQc5VbJ9rv1hGr9Nc",
    }
  ],

}

module.exports = USER_CONFIG

