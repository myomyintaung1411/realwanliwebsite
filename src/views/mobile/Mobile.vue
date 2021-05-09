<template>
  <div style="width: 100%; height: 100%; background: #051642">
    <div class="header">
      <div class="logo-section">
        <div class="login" @click="Gologin()">登录</div>
        <img src="../../assets/mobile/logo.png" alt="" class="logo-img" />
        <div class="login register" @click="GoRegister()">注册</div>
        <!-- <a href="#" class="register_btn" @click="gotoTestGame()">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          试玩
        </a> -->
      </div>
      <img class="head_line" src="../../assets/mobile/header_line.png" alt="" />
      <!-- nav -->
      <div class="nav">
        <ul>
          <li
            @click="goAssignBlock('block' + 0, 50)"
            :class="{ active: activeTab == 1 }"
          >
            万利国际
          </li>
          <li
            @click="goAssignBlock('block' + 1, 50)"
            :class="{ active: activeTab == 2 }"
          >
            公司实力
          </li>
          <li
            @click="goAssignBlock('block' + 2, 50)"
            :class="{ active: activeTab == 3 }"
          >
            APP下载
          </li>
          <li
            @click="goAssignBlock('block' + 3, 50)"
            :class="{ active: activeTab == 4 }"
          >
            前往游戏
          </li>
          <li
            @click="goAssignBlock('block' + 4, 50)"
            :class="{ active: activeTab == 5 }"
          >
            存取款
          </li>
        </ul>
      </div>
    </div>
    <!-- end header -->
    <!-- carousal -->
    <div class="carousal" ref="block0">
      <!-- carousal banner with img -->
      <div class="caro-main">
        <div class="carousal-img" v-for="(item, index) in cList" :key="index">
          <transition name="fade">
            <img
              v-if="currentSlide == index"
              style="height: 520px; width: 100%"
              :src="item.img"
            />
          </transition>
        </div>
        <!-- dot section -->
        <div style="height: 490px; width: 100%; position: relative">
          <div
            style="
              position: absolute;
              bottom: 0%;
              width: 100%;
              display: flex;
              justify-content: center;
            "
          >
            <div
              v-for="(item, index) in cList"
              :key="index"
              @click="makeActive(index)"
              :class="currentSlide == index ? 'gray' : 'white'"
              style="
                width: 5rem;
                height: 2rem;
                border-radius: 10%;
                cursor: pointer;
                margin: 5px;
              "
            ></div>
          </div>
        </div>
        <!--  -->
      </div>
      <!-- marquee text -->
      <div class="marquee">
        <marquee behavior="" direction="">{{ scrolldata }}</marquee>
      </div>

      <div class="customer-service">
        <img
          src="../../assets/home/cu_service.png"
          alt=""
          width="100%"
          height="auto"
          @click="Service()"
        />
      </div>
    </div>

    <!-- end carousal -->
    <div class="card">
      <div class="card_image">
        <div
          class="tab_image_parent"
          :class="{ actImg: activeImg == 1 }"
          @click="ImageActive(1)"
        >
          <img
            src="../../assets/home/ancer.png"
            alt=""
            style="position: absolute; left: 30%; top: -18%"
            draggable="false"
            width="50%"
            height="auto"
          />
          <span
            style="
              font-size: 2rem;
              font-weight: normal;
              position: absolute;
              left: 10%;
              top: 50%;
            "
            >真人视讯</span
          >
        </div>
        <div
          class="tab_image_parent"
          :class="{ actImg: activeImg == 2 }"
          @click="ImageActive(2)"
        >
          <img
            src="../../assets/home/2tab.png"
            alt=""
            style="position: absolute; left: 30%; top: -18%"
            draggable="false"
            width="50%"
            height="auto"
          />
          <span
            style="
              font-size: 2rem;
              font-weight: normal;
              position: absolute;
              left: 10%;
              top: 50%;
            "
            >电子游戏</span
          >
        </div>
        <div
          class="tab_image_parent"
          @click="ImageActive(3)"
          :class="{ actImg: activeImg == 3 }"
        >
          <img
            src="../../assets/home/3tab.png"
            alt=""
            style="position: absolute; left: 30%; top: -18%"
            draggable="false"
            width="50%"
            height="auto"
          />
          <span
            style="
              font-size: 2rem;
              font-weight: normal;
              position: absolute;
              left: 10%;
              top: 50%;
            "
            >捕鱼达人</span
          >
        </div>
        <div
          class="tab_image_parent"
          @click="ImageActive(4)"
          :class="{ actImg: activeImg == 4 }"
        >
          <img
            src="../../assets/home/4tab.png"
            alt=""
            style="position: absolute; left: 30%; top: -18%"
            draggable="false"
            width="50%"
            height="auto"
          />
          <span
            style="
              font-size: 2rem;
              font-weight: normal;
              position: absolute;
              left: 10%;
              top: 50%;
            "
            >棋牌游戏</span
          >
        </div>
      </div>
    </div>
    <!-- end card -->
    <div class="image_div" ref="block1">
      <img
        src="../../assets/home/activeimg1.png"
        alt=""
        width="100%"
        height="100%"
        draggable="false"
        v-show="this.activeImg == 1"
      />
      <img
        src="../../assets/home/activeimg2.png"
        alt=""
        width="100%"
        height="100%"
        v-show="this.activeImg == 2"
      />
      <img
        src="../../assets/home/activeimg3.png"
        alt=""
        width="100%"
        height="100%"
        v-show="this.activeImg == 3"
      />
      <img
        src="../../assets/home/activeimg4.png"
        alt=""
        width="100%"
        height="100%"
        v-show="this.activeImg == 4"
      />
    </div>
    <div class="info" ref="block2">
      <div class="info_img">
        <img
          src="../../assets/appdownload/cardimg.png"
          alt=""
          width="100%"
          height="100%"
          draggable="false"
          style="cursor: pointer"
        />
      </div>
    </div>
    <hr
      style="
        margin: 25px 15px;
        border: none;
        height: 2px;
        background-color: #ccc;
      "
    />
    <!-- <div class="three_image">
      <div class="img">
        <img src="../../assets/live/1.png" alt="" width="45%" height="100%" />
        <img src="../../assets/live/1.png" alt="" width="45%" height="100%" />
      </div>
    </div> -->
    <!-- qr code section -->
    <div class="download" ref="block2">
      <span>APP下载</span>
      <p>
        随时随地，手机投注，安全畅玩, 万利相伴 <br />
        赶紧扫描下载吧
      </p>
      <div class="qr_code">
        <img src="../../../public/wanliqr.png" alt="" />
      </div>
    </div>
    <!--  -->
    <hr
      style="margin: 15px; border: none; height: 2px; background-color: #ccc"
    />
    <div class="scroll__img__div" ref="block3">
      <div
        class="scroll_img"
        v-for="(s, index) in scrollImg"
        :key="index"
        @click="goPlayGame()"
      >
        <img :src="s.img" alt="" />
        <span>{{ s.text }}</span>
      </div>
    </div>
    <hr
      style="margin: 15px; border: none; height: 2px; background-color: #ccc"
    />
    <!-- payform -->
    <div class="payment" ref="block4">
      <span>存取款</span>
      <div class="form">
        <p>请输入转账金额</p>
        <input
          type="number"
          class="input"
          v-model="payment.paymentMoney"
          autocomplete="off"
        />
        <button class="pay_btn" @click="submitPayment()">立即支付</button>
        <hr
          style="
            border: none;
            height: 0.5rem;
            background-color: #ccc;
            margin: 3rem;
          "
        />

        <p>请输入银行名称</p>
        <input
          type="text"
          class="input"
          v-model="withdraw.bankname"
          autocomplete="off"
        />
        <p>请输入银行账户名称</p>
        <input
          type="text"
          class="input"
          v-model="withdraw.bankaccount"
          autocomplete="off"
        />
        <p>请输入银行账号</p>
        <input
          type="number"
          class="input"
          v-model="withdraw.bankcard"
          autocomplete="off"
        />
        <p>请输入取款金额</p>
        <input
          type="number"
          class="input"
          v-model="withdraw.withdrawmoneyamount"
          autocomplete="off"
        />
        <button class="withdraw_btn" @click="submitWithDraw()">立即取款</button>
      </div>
    </div>
    <div id="footer">
      <p>COPYRIGHT © WANLI INTERNATIONAL RESERVED.</p>
    </div>
  </div>
</template>

<script>
import AES from "../../api/aes";

export default {
  data() {
    return {
      id: this.$Global.myLoginInfo.loginId,
      activeTab: 1,
      activeImg: 1,
      interval: "",
      isTitleShowing: true,
      currentSlide: 1,
      scrolldata: "华纳国际欢迎您",
      //payment
      payment: {
        paymentMoney: "",
      },
      //withdraw
      withdraw: {
        bankname: "",
        bankaccount: "",
        bankcard: "",
        withdrawmoneyamount: "",
      },
      cList: [
        { img: require("../../assets/home/c1.jpg") },
        { img: require("../../assets/home/c2.jpg") },
        { img: require("../../assets/home/c3.jpg") },
      ],
      scrollImg: [
        {
          img: require("../../assets/live/11.png"),
          text: "推筒子",
        },
        {
          img: require("../../assets/live/22.png"),
          text: "大小点",
        },
        {
          img: require("../../assets/live/33.png"),
          text: "百家乐",
        },
        {
          img: require("../../assets/live/44.png"),
          text: "龙虎斗",
        },
        {
          img: require("../../assets/live/55.png"),
          text: "牛牛",
        },
        {
          img: require("../../assets/live/66.png"),
          text: "炸金花",
        },
      ],
    };
  },
  created() {
    let s = window.location.href;
     // var s = "http://21019.hn232.com";
    let h = s.split(".")[0];
    let a = h.split("//")[1];
    this.getAgentInfo(a);

    this.GetScrollData(this.id);
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
    }, 4000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    ImageActive(n) {
      if (n == 1) {
        this.activeImg = 1;
        //console.log("hello");
      }
      if (n == 2) {
        this.activeImg = 2;
      }
      if (n == 3) {
        this.activeImg = 3;
      }
      if (n == 4) {
        this.activeImg = 4;
      }
    },
    makeActive(index) {
      this.currentSlide = index;
    },
    getAgentInfo(id) {
      var en = this.$Global.en;
      let data = JSON.stringify({ Id: id });
      let endata = AES.encrypt(data, en);

      // var decryptdata = JSON.parse(AES.decrypt(endata, en));
      this.axios
        .post(this.$Global.agentUrl, { data: endata })
        .then((res) => {
          var body = res.data;
          var msg = JSON.parse(AES.decrypt(body, en));

          if (msg.JsonData.code == 200) {
            this.$Global.optioner.AgentId = msg.JsonData.Id;
            this.$Global.optioner.AgentName = msg.JsonData.name;
            // console.log(this.$Global)
          }
        })
        .catch((e) => {
          console.error(e);
        });
    },
    GetScrollData(id) {
      var en = this.$Global.en;
      let data = JSON.stringify({ Id: id });
      let endata = AES.encrypt(data, en);
      //  var decryptdata = JSON.parse(AES.decrypt(endata, en));

      this.axios
        .post(this.$Global.scrollData, { data: endata })
        .then((res) => {
          var body = res.data;
          var msg = JSON.parse(AES.decrypt(body, en));
          //console.log(msg);
          if (msg.JsonData.code == 200) {
            this.scrolldata = msg.JsonData.msg;
          } else {
            this.scrolldata =
              "为了给广大游戏玩家带来更安全稳定的线上体验环境，公司将针对在线上进行游戏无差额对打套利,洗钱等违反公司常规游戏操作的用户进行净网行动，一经发现封号冻结资金，概不退还！";
          }
        })
        .catch((e) => {
          console.error(e);
        });
    },
    Gologin() {
      if (this.$store.state.login == true)
        return this.$mobilemessage.warning("您已登陆成功");
      this.$router.push("/m/login");
    },
    GoRegister() {
      this.$router.push("/m/register");
    },
    goPlayGame() {
      if (this.$store.state.login == false) {
        return this.$mobilemessage.warning("请先登录");
      } else {
        var gameEn = this.$Global.gameEn;
        let data = {
          name: this.$store.state.myAccount,
          password: this.$md5(this.$store.state.myPassword),
        };

        var endata = AES.encrypt(JSON.stringify(data), gameEn);
        window.open(`http://wl2021.com/?token=${endata}`);
      }
    },
    //submit payment
    submitPayment() {
      if (this.$store.state.login == false)
        return this.$mobilemessage.warning("请先登录");

      if (this.payment.paymentMoney == "")
        return this.$mobilemessage.warning("付款金额不能为空！");

      if (this.payment.paymentMoney < 100)
        return this.$mobilemessage.warning("付款金额不能少于100元");

      //payment en
      let paymentEn = this.$Global.paymentEn;
      let data = {
        id: this.$Global.myLoginInfo.loginId,
        m: this.payment.paymentMoney,
      };
      // var endata = "sZHOqLO6s7O5Lyw+VysKzDHev00mwbp6yj6JabuehTq3K3ixgvz5IHSY14QKfrZumY2cWSuiQrppMSflR4DpNg=="
      var endata = AES.payEncrypt(JSON.stringify(data), paymentEn);
      //  console.log(endata, "endata is of payment is ***************************");

      this.axios
        .post(`${this.$Global.PaymentUrl}?d=${endata}`)
        .then((res) => {
          var body = res.data;
          // console.log(body, "response body of payment **************");
          if (body.status == "200") {
            window.open(body.pay_url);
            //return success here
            this.payment.paymentMoney = "";
          }
          //response error msg
          else {
            return this.$mobilemessage.error(body.msg);
          }
        })
        .catch((e) => {
          // console.log(e);

          this.$mobilemessage.error(e.toString());
        });
    },
    //withdraw payment method
    submitWithDraw() {
      if (this.$store.state.login == false)
        return this.$mobilemessage.warning("请先登录");

      if (this.withdraw.bankname == "")
        return this.$mobilemessage.warning("请输入银行名称");
      if (this.withdraw.bankname.length < 4)
        return this.$mobilemessage.warning("银行名称应有四位数");

      if (this.withdraw.bankaccount == "")
        return this.$mobilemessage.warning("账户名称不能为空！");

      if (this.withdraw.bankaccount.length < 2)
        return this.$mobilemessage.warning("账户名称最少两位数");

      if (this.withdraw.bankcard == "")
        return this.$mobilemessage.warning("银行卡号不能为空！");
      if (this.withdraw.bankcard.length < 16)
        return this.$mobilemessage.warning("银行卡号至少16位！");

      if (this.withdraw.withdrawmoneyamount == "")
        return this.$mobilemessage.warning("请输入取款金额");
      if (this.withdraw.withdrawmoneyamount < 100)
        return this.$mobilemessage.warning("取款金额不能少于100元");

      //  this data is for create sign key of withdraw money
      //withdraw en
      let withdrawEn = this.$Global.withdrawEn;
      let data = {
        id: this.$Global.myLoginInfo.loginId,
        bank_name: this.withdraw.bankname,
        bank_account: this.withdraw.bankaccount,
        bank_card: this.withdraw.bankcard,
        amount: this.withdraw.withdrawmoneyamount, // $amount,
      };
      var endata = AES.payEncrypt(JSON.stringify(data), withdrawEn);
      this.axios
        .post(`${this.$Global.Withdrawurl}?d=${endata}`)
        .then((res) => {
          var body = res.data;
          if (body.status == "200") {
            this.withdraw.bankname = "";
            this.withdraw.bankaccount = "";
            this.withdraw.bankcard = "";
            this.withdraw.withdrawmoneyamount = "";

            return this.$mobilemessage.success(body.msg);
          } else {
            return this.$mobilemessage.error(body.msg);
          }
        })
        .catch((e) => {
          // console.log(e);
          this.$mobilemessage.error(e.toString());
        });
    },

    //el 标签  speed 滚动速率 此处是50px 值越大滚动的越快
    goAssignBlock(el, speed) {
      switch (el) {
        case "block0":
          this.activeTab = 1;
          break;
        case "block1":
          this.activeTab = 2;
          break;
        case "block2":
          this.activeTab = 3;
          break;
        case "block3":
          this.activeTab = 4;
          break;
        case "block4":
          this.activeTab = 5;
          break;
      }
      // let _this = this
      let windowH = window.innerHeight; //浏览器窗口高度
      let h = this.$refs[el].offsetHeight; //模块内容高度
      let t = this.$refs[el].offsetTop; //模块相对于内容顶部的距离
      let top = t - (windowH - h) / 2; //需要滚动到的位置，若改为 t 则滚动到模块顶部位置，此处是滚动到模块相对于窗口垂直居中的位置
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop; //滚动条距离顶部高度
      let currentTop = scrollTop; //默认滚动位置为当前滚动条位置，若改为0，则每次都会从顶部滚动到指定位置
      let requestId;
      //采用requestAnimationFrame，平滑动画
      function step() {
        //判断让滚动条向上滚还是向下滚
        if (scrollTop < top) {
          if (currentTop <= top) {
            //   window.scrollTo(x,y) y为上下滚动位置
            window.scrollTo(0, currentTop);
            requestId = window.requestAnimationFrame(step);
          } else {
            window.cancelAnimationFrame(requestId);
          }
          //向下滚动
          currentTop += speed;
        } else {
          if (top <= currentTop) {
            //注：此处 - speed 是解决居中时存在的问题，可自行设置或去掉
            window.scrollTo(0, currentTop - speed);
            requestId = window.requestAnimationFrame(step);
          } else {
            window.cancelAnimationFrame(requestId);
          }
          //向上滚动
          currentTop -= speed;
        }
      }
      window.requestAnimationFrame(step);
    },
    Service() {
      if (this.$store.state.login == false) {
        return this.$mobilemessage.warning("请先登录");
      } else {
        let u = this.$Global.myLoginInfo.customerId;
        let uid = this.$Global.myLoginInfo.loginId;
        let avatar = "";
        let name = this.$store.state.myAccount;
        // let loginId = this.$Global.myLoginInfo.loginId;
        // let loginName = this.$Global.myLoginInfo.loginName;
        // // console.log(name,"name");
        // window.open(
        //   `http://wanlikefu.hn885.com/index/index/home?visiter_id=${loginId}&visiter_name=${loginName}&avatar=&business_id=1&groupid=0&special=1`
        // );
        window.open(
          `http://live.sunnychat.me/index/index/kefu?u=${u}&uid=${uid}&name=${name}&avatar=${avatar}`
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 230px;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  // background: white;
  background: #051642;
  .logo-section {
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // height: 180px;
    // background: rgb(116, 129, 95);
    // height: 210px;
    width: 100%;
    .login {
      //   height: 210px;
      margin: 0 5%;
      width: 15%;
      background: linear-gradient(-135deg, #db396f, #009dec);
      height: 50%;
      cursor: pointer;
      font-size: 2.5rem;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      letter-spacing: 0.2em;
    }
    .register {
      background: linear-gradient(-135deg, #7f7db1, #2e7dd8);
    }

    .logo-img {
      margin: 5px 0;
      // background: red;
      height: 150px;
      width: auto;
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
  .head_line {
    width: 100%;
    margin: 0;
    // height: 2px;
  }
  .nav {
    width: 100%;
    height: 50px;
    // margin: 20px 0;
    // margin: 5px 0 0 0;
    // background-color: red;
    margin-top: 20px;
    margin-bottom: 25px;
    ul {
      display: flex;
      justify-content: space-around;
      //   height: 10px;
      list-style: none;
      text-align: center;
      align-items: center;
      margin: 5px;
      //    height: 100%;
      //    margin: 5px;
      //   margin: 20px 0 15px 0;
      //   background: #ccc;
      li {
        color: white;
        line-height: 30px;
        font-size: 2vh;
        text-align: center;
      }
    }
  }
}
.active {
  color: #39c3db !important;
}
//carousal
.carousal {
  height: 600px;
  margin-top: 230px;
  position: relative;
  //   background: blue;
  overflow: hidden;
  .caro-main {
    height: 520px;
    // background: red;
    position: relative;
    .carousal-img {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      // background: green;
    }
    .fade-enter-active,
    .fade-leave-active {
      transition: all 1s ease;
    }
    .fade-enter-from {
      opacity: 0;
      transform: translateX(-100%);
    }
    .fade-leave-to {
      opacity: 0;
      transform: translateX(100%);
    }

    .gray {
      background: #4f7ae7;
    }
    .white {
      background: rgb(255, 249, 249);
    }
  }
  // marquee
  .marquee {
    height: 80px;
    background: #fff;
    width: 100%;
    marquee {
      height: 80px;
      width: 100%;
      background: #051642;
      line-height: 80px;
      color: #fff;
      font-size: 3rem;
    }
  }

  .customer-service {
    width: 8rem;
    height: 8rem;
    position: fixed;
    top: 30%;
    z-index: 1000;
    right: 1%;
    // background: red;
  }
}

.card {
  height: 15rem;
  background: #052359;
  overflow: hidden;

  .card_image {
    width: 90%;
    height: 100%;
    margin: 0 5%;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    .tab_image_parent {
      height: 10rem;
      width: 20%;
      // background: green;
      position: relative;
      background: url(../../assets/home/bg_normal_tab.png) no-repeat center
        center;
      background-size: 100% 100%;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: space-between;
      color: #fff;
      letter-spacing: 2px;
      cursor: pointer;
      user-select: none;
    }
  }
  .actImg {
    background: url(../../assets/home/bg_tab.png) no-repeat center center !important;
    // color: #131318 !important;
    color: #051642 !important;
    background-size: 100% 100% !important;
  }
}
.image_div {
  height: 30rem;
  background: white;
  width: 100%;
  img {
    -webkit-animation: fadeInRight 1s 0.2s ease both;
    -moz-animation: fadeInRight 1s 0.2s ease both;
    animation: fadeInRight 1s 0.2s ease both;
  }
  @-webkit-keyframes fadeInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
    }
  }
  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @-moz-keyframes fadeInRight {
    0% {
      opacity: 0;
      -moz-transform: translateX(20px);
    }
    100% {
      opacity: 1;
      -moz-transform: translateX(0);
    }
  }
}

.info {
  height: 40rem;
  width: 100%;
  margin-top: 2rem;
  // background: red;
  .info_img {
    width: 94%;
    margin: 0 3%;
    // background: green;
    height: 100%;
  }
}

.three_image {
  height: 40rem;
  width: 100%;
  margin-top: 3rem;
  .img {
    width: 94%;
    margin: 0 3%;
    // background: green;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
}

.download {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 0 10px 0;
  margin-top: 20px;
  background: #051642;
  span {
    font-size: 3.5vh;
    font-weight: 700;
    color: #789aee;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    // color: #fff;
    text-align: center;
    word-wrap: break-word;
    padding: 10px 20px;
    font-size: 2.5vh;
    background: linear-gradient(
      90deg,
      #fffffffa,
      rgb(255, 255, 255),
      rgba(255, 249, 249, 0.493)
    );
    background-repeat: no-repeat;
    background-size: 80%;
    animation: animate 3s linear infinite;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: rgba(255, 255, 255, 0.336);
  }
  @keyframes animate {
    0% {
      background-position: -500%;
    }
    100% {
      background-position: 500%;
    }
  }
  .qr_code {
    // background: red;
    // margin: 0 auto;
    padding: 10px;
    // display: flex;
    // justify-content: space-around;
    text-align: center;
    img {
      padding-top: 10px;
      width: 65%;
      height: auto;
    }
  }
  // .down_text {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   p {
  //     width: 55%;
  //     font-size: 2.5vh;
  //     font-weight: 700;
  //     color: white;
  //     text-align: center;
  //     a {
  //       // text-decoration: none;
  //       color: white;
  //     }
  //   }
  // }
}

//
.scroll__img__div {
  // height: 300px;
  width: 100%;
  // background: red;
  display: flex;
  align-items: center;
  //justify-content: center;
  margin: 2rem 0;
  overflow-x: scroll;
  .scroll_img {
    // background: wheat;
    display: flex;
    flex-direction: column;
    // margin:0 3rem;
    padding: 0 3rem;
    img {
      width: 200px;
      height: auto;
    }
    // img:last-child{
    //   margin-right: 3rem;
    // }
    span {
      text-align: center;
      font-size: 2.5rem;
      font-weight: 600;
      color: #fff;
      padding-top: 5px;
    }
  }
}

.payment {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  // background: red;
  span {
    text-align: center;
    font-size: 4rem;
    font-weight: 600;
    color: #789aee;
    // padding-top: 5px;
    margin-bottom: 2rem;
    font-weight: bold;
  }
  .form {
    width: 90%;
    margin: 0 5%;
    // background: red;
    // height: 500px;
    border: 0.2rem solid #fff;
    p {
      padding: 3rem;
      font-size: 3rem;
      font-weight: bold;
      color: #fff;
    }
    .input {
      border: 0.5rem solid #009dec;
      background: transparent;

      outline: none;
      border-radius: 2px;
      width: 87%;
      font-size: 2.4vh;
      padding: 2rem 3rem;
      margin: 0 3rem;
      color: rgb(255, 255, 255) !important;
      caret-color: rgb(255, 255, 255);
    }
    ::placeholder {
      color: #fff;
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #fff;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: #fff;
    }
    .pay_btn {
      outline: none;
      border: none;
      background: linear-gradient(-135deg, #3e39db, #009dec);
      margin: 0 auto;
      // width: 40%;
      // height: 5rem;
      margin-top: 2rem;
      padding: 1rem 5rem;
      // margin: 3rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3vh;
      // border: 0.5rem solid rgb(64, 117, 230);
      color: #fff;
    }
    .withdraw_btn {
      outline: none;
      border: none;
      background: linear-gradient(-135deg, #db396f, #009dec);
      margin: 0 auto;
      // width: 40%;
      // height: 5rem;
      margin-top: 2rem;
      margin-bottom: 3rem;
      padding: 1rem 5rem;
      // margin: 3rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3vh;
      // border: 0.5rem solid rgb(64, 117, 230);
      color: #fff;
      cursor: pointer;
    }
  }
}

#footer {
  // background: #0d4e8b;
  width: 100%;
  height: 120px;
  box-shadow: 0 7px 20px 2px #d1d1d1;
  // border-top: 2px solid #770d0d;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  p {
    font-weight: bold;
    font-size: 2vh;
    cursor: pointer;
  }
}
</style>