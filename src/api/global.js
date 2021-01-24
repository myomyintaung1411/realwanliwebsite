// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars

var BASE_URL = "http://114.29.253.162:3198/";
export default
  {
    optioner: {
      Agentid: '',
      Agentname: "",
    },

    myLoginInfo: {
      loginId: "",
      loginName: '',
      loginBalance: '',
      loginEnable: '',
      customerId:'',
    },

    registerurl: BASE_URL + 'regist',
    loginurl: BASE_URL + 'login',
    agentUrl: BASE_URL + 'getAgentInfo ',
    scrollData: BASE_URL + 'getBulletin',
    PaymentUrl: 'http://wlzh.hn885.com/payment/xjw/pay',
    PaymentCallbackUrl: BASE_URL + 'pay',
    Withdrawurl: 'http://wlzh.hn885.com/payment/xjw/draw',
    WithDrawCallbackUrl: BASE_URL + 'draw',
    Oid_Partner: 'd9fce17200317431b1b43b27508224cf0294759a',

    addPwStr: "$hn_ok$my_ok$hn_ok",
    en: {
      key: "#4dFER#@&wqDcv#@67$jNLj#",
      iv: '8975624324562108'
    },
    gameEn: {
      key: "@hKe9@A1lKe9$Tz1kE@8HnG7",
      iv: '1234567890123456'
    },

    paymentEn: {
      key: "@hKe9@A1lKe9$Tz1kE@8HnG7",
      iv: '1234567890123456'
    },

    withdrawEn: {
      key: "@hKe9@A1lKe9$Tz1kE@8HnG7",
      iv: '1234567890123456'
    },
  }
