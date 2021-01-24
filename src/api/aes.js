/* eslint-disable */
var CryptoJS = require("crypto-js");
var Base64 = require('js-base64')
var md5 = require('js-md5')
import store from '../store/index'
import Message from "../components/Message/index";
import global from './global'

export default {
  /**
   * aes加密解密
   * 加密encrypt
   * 解密decrypt
   */
  encrypt(data, G_KP) {
    var key = CryptoJS.enc.Utf8.parse(G_KP.key);
    var iv = CryptoJS.enc.Utf8.parse(G_KP.iv);
    var encrypted = CryptoJS.AES.encrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.toString();
  },


  decrypt(data, G_KP) {
    var key = CryptoJS.enc.Utf8.parse(G_KP.key);
    var iv = CryptoJS.enc.Utf8.parse(G_KP.iv);

    // var base64 = CryptoJS.enc.Base64.parse(data);
    // var src = CryptoJS.enc.Base64.stringify(base64);

    var decrypted = CryptoJS.AES.decrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  },

  gameEncrypt(data,G_KP) {
    var key = CryptoJS.enc.Utf8.parse(G_KP.key);
    var iv = CryptoJS.enc.Utf8.parse(G_KP.iv);
     
    // if (keyStr) {
    //   key = CryptoJS.enc.Utf8.parse(keyStr);
    //   iv = CryptoJS.enc.Utf8.parse(ivStr);
    // }
    // console.log("accept ", data, G_KP)
    let srcs = CryptoJS.enc.Utf8.parse(data);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    });
    // console.log("-=-=-=-", encrypted.ciphertext)
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
     
  },


  payEncrypt(data, G_KP) {
    var key = CryptoJS.enc.Utf8.parse(G_KP.key);
    var iv = CryptoJS.enc.Utf8.parse(G_KP.iv);

    var encrypted = CryptoJS.AES.encrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });

    var str = CryptoJS.enc.Utf8.parse(encrypted.toString());
    var base64 = CryptoJS.enc.Base64.stringify(str);

    // console.log('raw encrypt data is ', data);
    // console.log('base64 is ' , base64);

    return base64;
  },


  paymentDecrypt(data, G_KP) {

    var key = CryptoJS.enc.Utf8.parse(G_KP.key);
    var iv = CryptoJS.enc.Utf8.parse(G_KP.iv);

    // if (keyStr) {
    //   key = CryptoJS.enc.Utf8.parse(keyStr);
    //   iv = CryptoJS.enc.Utf8.parse(ivStr);
    // }

    let base64 = CryptoJS.enc.Base64.parse(data);
    let src = CryptoJS.enc.Base64.stringify(base64);

    var decrypt = CryptoJS.AES.decrypt(src, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    });

    var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
  },

  gameDecrypt(data, G_KP) {

    var key = CryptoJS.enc.Utf8.parse(G_KP.key);
    var iv = CryptoJS.enc.Utf8.parse(G_KP.iv);

    // if (keyStr) {
    //   key = CryptoJS.enc.Utf8.parse(keyStr);
    //   iv = CryptoJS.enc.Utf8.parse(ivStr);
    // }

    let base64 = CryptoJS.enc.Base64.parse(data);
    let src = CryptoJS.enc.Base64.stringify(base64);

    var decrypt = CryptoJS.AES.decrypt(src, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    });

    var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
  },


  randomString(len, charSet) {
    charSet =
      charSet ||
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var randomString = "";
    for (var i = 0; i < len; i++) {
      var randomPoz = Math.floor(Math.random() * charSet.length);
      randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
  },
  doEncrypt() {
    let data = {
      acc: store.state.myAccount,
      pwd: md5(store.state.myPassword),
    };
    // let data ={
    //   acc:"admin",
    //   pwd:this.$md5("111111")
    // }
    let data1 = Base64.encode(JSON.stringify(data));
    let data2 = data1.substring(0, 8);
    let data3 = data1.substring(8);
    let add8 = data2 + randomString(8);
    let token = randomString(9) + add8 + data3;
    // console.log(data1, data2, data3, add8, token)
    return token;
  },

  //onliine service pic click and go to customer service
  Service() {
    if (store.state.login == false) {
      return Message.warning("请先登录");
    } else {
      let u = global.myLoginInfo.customerId;
      let uid = global.myLoginInfo.loginId;
      let avatar = "";
      let name = store.state.myAccount;
      window.open(
        `http://live.sunnychat.me/index/index/kefu?u=${u}&uid=${uid}&name=${name}&avatar=${avatar}`
      );
    }
  },


};
