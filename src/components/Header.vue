<template>
  <div class="header-main">
    <div class="max-div">
      <img src="../assets/logo.png" alt="" class="logo" />
      <div style="display: flex; flex-direction: column">
        <!-- three text div -->
        <div class="upper-header">
          <span>设为主页</span>

          <span class="line"></span>
          <span>代理加盟</span>
          <span class="line"></span>
          <span>收藏我们</span>
        </div>
        <!-- input -->
        <div class="input-section">
          <input
            type="text"
            placeholder="账号"
            class="input"
            autocomplete="off"
            v-model="login.username"
          />
          <input
            type="password"
            placeholder="密码"
            class="input"
            autocomplete="off"
            v-model.trim="login.password"
          />
          <input
            type="text"
            placeholder="验证码"
            class="input"
            autocomplete="off"
            @focus="yzhm()"
            v-model="login.code"
          />

          <p class="ValidCode disabled-select">
            <span
              v-for="(item, index) in codeList"
              :key="index"
              :style="getStyle(item)"
              >{{ item.code }}</span
            >
          </p>

          <button class="login-btn" @click="Login()">登录</button>
          <button class="login-btn register" @click="openRegister()">
            注册
          </button>
          <button class="login-btn test" @click="gotoTestGame()">试玩</button>
        </div>
      </div>

      <!--  -->
      <!-- register -->
      <div class="wrapper" v-if="RegisterDialog">
        <img
          src="../assets/closesearch.png"
          alt=""
          @click="CloseDialog"
          class="close-img"
        />
        <div class="title">万利国际</div>
        <form class="form" novalidate @submit.prevent="Register">
          <div class="field">
            <input
              type="text"
              required
              autocomplete="off"
              v-model="register.name"
            />
            <label>请输入账号</label>
          </div>

          <div class="field">
            <input
              type="password"
              required
              autocomplete="off"
              v-model="register.pass"
            />
            <label>请输入密码</label>
          </div>

          <div class="field">
            <input
              type="password"
              required
              autocomplete="off"
              v-model="register.checkpass"
            />
            <label>请确认密码</label>
          </div>

          <div class="field">
            <input
              type="number"
              required
              autocomplete="off"
              v-model="register.phone"
            />
            <label>请输入手机号</label>
          </div>

          <div class="field">
            <input type="submit" value="注册账号" />
            <!-- <button class="btn-regi">注册账号</button> -->
          </div>
        </form>
      </div>
      <!-- end register -->
    </div>
    <div style="width: 100%; background: #2a2a66; position: relative">
      <div class="tab">
        <span
          class="nav-text"
          :class="{ active: activeTab == 1 }"
          @click="Tabclick(1)"
          >首页</span
        >
        <span
          class="nav-text"
          :class="{ active: activeTab == 2 }"
          @click="Tabclick(2)"
          >真人视讯</span
        >
        <span
          class="nav-text"
          :class="{ active: activeTab == 3 }"
          @click="Tabclick(3)"
          >优惠活动</span
        >
        <span
          class="nav-text"
          :class="{ active: activeTab == 4 }"
          @click="Tabclick(4)"
          >APP下载</span
        >
        <span
          class="nav-text"
          :class="{ active: activeTab == 5 }"
          @click="Tabclick(5)"
          >存取款</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import AES from "@/api/aes";
export default {
  data() {
    return {
      activeTab: 1,
      codeList: [],
      login: {
        username: "",
        password: "",
        code: "",
      },
      RegisterDialog: false,
      register: {
        name: "",
        pass: "",
        checkpass: "",
        phone: "",
      },
    };
  },
  methods: {
    Tabclick(n) {
      if (n == 1) {
        this.activeTab = 1;
        this.$router.push("/home");
      }
      if (n == 2) {
        this.activeTab = 2;
        this.$router.push("/live");
      }
      if (n == 3) {
        this.activeTab = 3;
        this.$router.push("/promotion");
      }
      if (n == 4) {
        this.activeTab = 4;
        this.$router.push("/appdownload");
      }
      if (n == 5) {
        this.activeTab = 5;
        this.$router.push("/payment");
      }
    },
    yzhm() {
      this.codeList = [];
      const len = 4;
      const chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789";
      const charsLen = chars.length;
      for (let i = 0; i < len; i++) {
        const rgb = [
          Math.round(Math.random() * 220),
          Math.round(Math.random() * 240),
          Math.round(Math.random() * 200),
        ];
        this.codeList.push({
          code: chars.charAt(Math.floor(Math.random() * charsLen)),
          color: `rgb(${rgb})`,
          fontSize: `1${[Math.floor(Math.random() * 10)]}px`,
          padding: `${[Math.floor(Math.random() * 15)]}px`,
          transform: `rotate(${
            Math.floor(Math.random() * 90) - Math.floor(Math.random() * 90)
          }deg)`,
        });
      }
      // 将当前数据派发出去
      // this.$emit('update:value', codeList.map(item => item.code).join(''))
      this.code = this.codeList.map((item) => item.code).join("");
    },
    getStyle(data) {
      return `color: ${data.color}; font-size: ${data.fontSize}; padding: ${data.padding}; transform: ${data.transform}`;
    },
    openRegister() {
      this.RegisterDialog = true;
    },
    CloseDialog() {
      this.RegisterDialog = false;
    },

    //go to test game site
    gotoTestGame() {
      window.open(`http://wl2021.com/?token=`);
    },

    Register() {
      // console.log("enter register");
      var en = this.$Global.en;
      if (this.register.name == "") return this.$message.warning("请输入账号");
      if (this.register.pass == "") return this.$message.warning("请输入密码");
      if (this.register.checkpass == "")
        return this.$message.warning("请输入确认密码");
      if (this.register.phone == "")
        return this.$message.warning("请输入手机号");
      if (this.register.pass !== this.register.checkpass)
        return this.$message.warning("两次输入密码不一致");

      if (
        !/^((1[3,5,8,7,9][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/.test(
          this.register.phone
        )
      ) {
        return this.$message.warning("手机号码格式不对");
      }

      if (
        !/\d/.test(this.register.pass) ||
        !/[a-zA-Z]/.test(this.register.pass)
      )
        return this.$message.warning("密码必须包含数字和英文字母");

      var agentName = this.$Global.optioner.Agentname;
      //console.log(agentName, "name of agent is777777777");
      let data = {
        name: this.register.name,
        pw: this.$md5(this.register.pass),
        phone: this.register.phone,
        agent: agentName,
      };
      // console.log(data, "sendStr");
      let endata = AES.encrypt(JSON.stringify(data), en);

      //var decryptdata = JSON.parse(AES.decrypt(endata, en));

      this.axios
        .post(this.$Global.registerurl, { data: endata })
        .then((res) => {
          var body = res.data;
          var msg = JSON.parse(AES.decrypt(body, en));
          //console.log(msg, "response msg of register is");
          if (msg.JsonData.result == "102") {
            return this.$message.warning("无此代理");
          }
          if (msg.JsonData.result == "103") {
            return this.$message.warning("已存在此帐号");
          }
          if (msg.JsonData.result == "104") {
            return this.$message.warning("注册失败");
          }
          if (msg.JsonData.result == "101") {
            this.register.name = "";
            this.register.pass = "";
            this.register.checkpass = "";
            this.register.phone = "";
            this.RegisterDialog = false;
            return this.$message.success("注册成功");
          }
        })
        .catch((e) => {
          // console.log(e);
          this.$message.error(e.toString());
        });
    },
    //user login method
    Login() {
      var en = this.$Global.en;
      if (this.$store.state.login == true)
        return this.$message.warning("您已登陆成功");
      if (this.login.username == "") return this.$message.warning("请输入账号");
      if (this.login.password == "") return this.$message.warning("请输入密码");
      if (this.login.code == "") return this.$message.warning("请输入验证码");

      if (this.code != this.login.code)
        return this.$message.warning("验证码不正确！");

      let logindata = {
        name: this.login.username,
        pw: this.$md5(this.login.password),
      };

      let endata = AES.encrypt(JSON.stringify(logindata), en);
      //console.log(endata, "login encrypt data is *");
      this.axios
        .post(this.$Global.loginurl, { data: endata })
        .then((res) => {
          //console.log("response of login --------------", res);
          var body = res.data;
          //console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaa", body);
          var msg = JSON.parse(AES.decrypt(body, en));
          // console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaa", msg);
          if (msg.JsonData.code == 200) {
            this.$store.state.login = true;
            //here i am store user input name and pass to state
            this.$store.state.myAccount = this.login.username;
            this.$store.state.myPassword = this.login.password;
            //here i am storing user response information to global
            this.$Global.myLoginInfo.loginId = msg.JsonData.Id;
            this.$Global.myLoginInfo.loginBalance = msg.JsonData.balance;
            this.$Global.myLoginInfo.loginEnable = msg.JsonData.enable;
            this.$Global.myLoginInfo.loginName = msg.JsonData.username;
            this.$Global.myLoginInfo.customerId = msg.JsonData.customerId;
            // console.log(
            //   "account and password is -------->",
            //   this.$store.state.myPassword,
            //   this.$store.state.myAccount
            // );
            this.login.username = "";
            this.login.password = "";
            this.login.code = "";
            return this.$message.success("登录成功");
          } else {
            // console.log("error ocuured")
            return this.$message.error("登录失败");
          }
        })
        .catch((e) => {
          // console.log(e);
          this.$message.error(e.toString());
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.header-main {
  width: 100%;
  background: #18173f;
  color: #fff;
  .max-div {
    max-width: 1200px !important;
    // background: gray;
    margin: 0 auto;
    display: flex;
    position: relative;
    .logo {
      height: 180px;
      width: 200px;
      animation: move-byline 10s ease-out infinite;
    }

    @keyframes move-byline {
      0%,
      10% {
        opacity: 0;
        transform: rotateY(90deg);
      }
      30% {
        opacity: 1;
      }
      70%,
      86% {
        transform: rotateY(0);
        opacity: 1;
      }
      95%,
      100% {
        opacity: 0;
      }
    }
  }
  .upper-header {
    // max-width: 1200px !important;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    // background: red;
    margin: 0 auto;
    width: 1000px;
    height: 100px;
    span {
      font-weight: bold;
      font-size: 20px;
      letter-spacing: 2px;
      //   padding: 10px 0px;
      margin: 0 10px;
    }
    .line {
      width: 2px;
      background: #fff;
      transform: rotate(35deg);
      height: 20px;
      margin: 0 15px;
    }
  }
  .input-section {
    display: flex;
    width: 1000px;
    // background: green;
    height: 60px;
    justify-content: flex-end;
    align-items: center;

    .input {
      border: 2px solid #009dec;
      background: transparent;
      outline: none;
      width: 180px;
      height: auto;
      padding: 7px 10px;
      margin: 0px 10px;
      color: #f9f7f8;
      height: 40px;
      border-radius: 3px;
      font-size: 18px;
    }

    ::placeholder {
      color: #71b2d9;
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
        color: #71b2d9;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
        color: #71b2d9;
    }

    .ValidCode {
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f5f7fa;
      width: 150px;
      margin: 0 10px;
      // padding: 0.5em 10em;
      //   width: 45%;
      //   height: 80px;
      //   margin-right: 10px;
      cursor: pointer;
      span {
        display: inline-block;
        font-size: 20px !important;
        color: #009dec;
      }
    }

    .login-btn {
      height: 35px;
      width: 80px;
      border-radius: 2px;

      background: linear-gradient(to bottom, #7ac1fe, #c2d8ee, #7ac1fe);
      border: none;
      //   margin: 0px 8px;
      font-weight: 700;
      letter-spacing: 1px;
      cursor: pointer;
      //   padding: 5px 0px;
      //   border: 1px solid #cdcb4c;
      outline: none;
      border-radius: 5px;
      margin: 0px 10px;
      color: #2a21d9;
    }
    .register {
      background: linear-gradient(to bottom, #ee7735, #e2ef48, #ee7735);
      color: #f23f71;
    }
    .test {
      background: #ed6942;
      color: #fff;
    }
  }
}

.tab {
  max-width: 800px !important;
  background: #2a2a66;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav-text {
    cursor: pointer;
    font-weight: 800;
    font-size: 20px;
    letter-spacing: 1px;
    padding: 10px 0;
    transition: 0.5s;
    position: relative;

    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      background: #ffffff;
      transition: 0.5s;
      opacity: 0;
    }

    &:before {
      top: 0;
      left: 0;
    }

    &:after {
      bottom: 0;
      right: 0;
    }

    &:hover:before,
    &:hover:after {
      opacity: 1;
      width: 100%;
      transition: 0.5s;
    }
    // &:hover{
    //   box-shadow:
    //     inset 0px 11px 8px -10px rgba(204, 204, 204, 0.548),
    //     inset 0px -11px 8px -10px rgb(204, 204, 204);

    // }
  }

  .active {
    color: #44b6f0 !important;
    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      background: #44b6f0;
      transition: 0.5s;
      opacity: 0;
    }

    &:before {
      top: 0;
      left: 0;
    }

    &:after {
      bottom: 0;
      right: 0;
    }

    &:before,
    &:after {
      opacity: 1;
      width: 100%;
      transition: 0.5s;
    }
  }
}

/* register */
.close-img {
  position: absolute;
  width: 20px;
  height: 20px;
  right: 2%;
  top: 2%;
  cursor: pointer;
}

.wrapper {
  position: absolute;
  top: 100%;
  left: 30%;
  width: 380px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
  z-index: 1;
}
.wrapper .title {
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  line-height: 100px;
  color: #fff;
  user-select: none;
  border-radius: 15px 15px 0 0;
  background: linear-gradient(-135deg, #18173f, #009dec);
}
.wrapper .form {
  padding: 10px 30px 50px 30px;
}
.wrapper .form .field {
  height: 50px;
  width: 100%;
  margin-top: 20px;
  position: relative;
}
.wrapper .form .field input {
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 17px;
  padding-left: 20px;
  border: 1px solid lightgrey;
  border-radius: 25px;
  transition: all 0.3s ease;
}
.wrapper .form .field input:focus,
form .field input:valid {
  border-color: #4158d0;
}
.wrapper .form .field label {
  position: absolute;
  top: 50%;
  left: 20px;
  color: #999999;
  font-weight: 400;
  font-size: 17px;
  pointer-events: none;
  transform: translateY(-50%);
  transition: all 0.3s ease;
}
.form .field input:focus ~ label,
.form .field input:valid ~ label {
  top: 0%;
  font-size: 16px;
  color: #4158d0;
  background: #fff;
  transform: translateY(-50%);
}

.form .field input[type="submit"] {
  color: #fff;
  border: none;
  padding-left: 0;
  margin-top: 13px;
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
  background: linear-gradient(-135deg, #18173f, #009dec);
  transition: all 0.3s ease;
}
.form .field input[type="submit"]:active {
  transform: scale(0.95);
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
/* .btn-regi {
  background: linear-gradient(-135deg, #ddb811, #d0aa41);
  width: 100%;
  padding: 9px 0;
  outline: none;
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
  color: #fff;
  border-radius: 25px;
  border: none;
} */
</style>