/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx31228a1e3e1e4669',
  
  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET:'ce77d6cd2ea6567d6ff5e27288e11c99',
  
  PROVINCE: '贵州',
  CITY: '遵义',
  
  USERS: [
    {
      // 想要发送的人的名字
      name: '筠筠乖乖',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'omv-p5sJ1Sg7o6eco4s3527DcbOM',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '_1HLERe7sKl8y6OL9s5wz6kK0V0Qi8qNfGLfdkAr99Q',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '06-15',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        // {
        //   type: '*生日', name: '宝贝', year: '1996', date: '06-15',
        //},
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '筠筠乖乖', year: '2005', date: '06-15',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 恋爱日
        { keyword: 'love_day', date: '2023-02-05' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    {
      name: '筠筠老婆',
      id: 'omv-p5s5DNCQzdPFu2KRe4sed6tI',
      useTemplateId: '_1HLERe7sKl8y6OL9s5wz6kK0V0Qi8qNfGLfdkAr99Q',
      province: '贵州',
      city: '遵义',
      horoscopeDate: '06-15',
      festivals: [
        {
          type: '生日', name: '筠筠老婆', year: '2005', date: '06-15',
        },
      ],
      customizedDateList: [
        { keyword: 'love_day', date: '2023-02-05' },
      ],
      courseSchedule: null
    },

  ],

// 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
CALLBACK_TEMPLATE_ID: 'raY0i9JWvIaQycmO2w4w6maeGkD-tdz0NR5iZjU7hCM',
  
  CALLBACK_USERS: [
  {
    name: '自己',
    // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
    id: 'omv-p5s5DNCQzdPFu2KRe4sed6tI',
  }
],

}

module.exports = USER_CONFIG
