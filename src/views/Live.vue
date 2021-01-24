<template>
  <div style="parent">
    <div class="b-img">
      <CustomerService />
    </div>
    <div class="bg-img">
      <!--  -->
      <div class="scrolldiv">
        <div class="scroll-text">
          <div class="btn-div">
            <img
              src="../assets/home/sound.png"
              alt=""
              style="height: 28px"
              draggable="false"
            />
            <p>最新公告</p>
          </div>
          <marquee
            onmouseover="this.stop();"
            onmouseout="this.start();"
            style="
              cursor: pointer;
              color: #fff;
              font-size: 16px;
              font-weight: 800;
              text-align: center;
              padding-bottom: 5px;
            "
            >{{ this.scrolldata }}</marquee
          >
        </div>
      </div>
      <!-- scrolldiv end -->
      <div class="th-img-div">
        <div class="img-div">
          <div style="width: 250px; height: 350px">
            <img
              src="../assets/live/1.png"
              alt=""
              style="width: 100%; height: 300px; cursor: pointer"
              draggable="false"
              @click="Gogame()"
            />
          </div>
          <div style="width: 300px; height: 350px">
            <img
              src="../assets/live/2.png"
              alt=""
              style="width: 100%; height: 350px; cursor: pointer"
              draggable="false"
              @click="Gogame()"
            />
          </div>
          <div style="width: 250px; height: 350px">
            <img
              src="../assets/live/3.png"
              alt=""
              style="width: 100%; height: 300px; cursor: pointer"
              draggable="false"
              @click="Gogame()"
            />
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="five-img-parent">
      <div class="five-img">
        <img
          src="../assets/live/11.png"
          alt=""
          style="position: absolute; top: -40px; cursor: pointer"
          height="auto"
          width="auto"
          draggable="false"
          @click="Gogame()"
        />
        <img
          src="../assets/live/22.png"
          alt=""
          style="position: absolute; top: 80px; left: 250px; cursor: pointer"
          height="auto"
          width="auto"
          draggable="false"
          @click="Gogame()"
        />
        <img
          src="../assets/live/33.png"
          alt=""
          style="position: absolute; top: 25px; left: 480px; cursor: pointer"
          height="auto"
          width="auto"
          draggable="false"
          @click="Gogame()"
        />
        <img
          src="../assets/live/44.png"
          alt=""
          style="position: absolute; top: 80px; left: 720px; cursor: pointer"
          height="auto"
          width="auto"
          draggable="false"
          @click="Gogame()"
        />
        <img
          src="../assets/live/55.png"
          alt=""
          style="position: absolute; top: -40px; right: 100px; cursor: pointer"
          height="auto"
          width="auto"
          draggable="false"
          @click="Gogame()"
        />
        <img
          src="../assets/live/66.png"
          alt=""
          style="position: absolute; top: 80px; right: -120px; cursor: pointer"
          height="auto"
          width="auto"
          draggable="false"
          @click="Gogame()"
        />
      </div>
    </div>
    <!-- footer section -->
    <div class="footer-parent">
      <div class="footer__sub">
        <div class="footer_img_div">
          <img
            src="../assets/home/onlineservice.png"
            alt=""
            style="height: 100%; cursor: pointer"
            draggable="false"
            @click="Service()"
          />
        </div>
        <!-- three image div -->
        <div class="th__text__div">
          <div class="text">
            <h1>代理合作</h1>
            <h3>代理方案</h3>
            <h3>加盟协议</h3>
            <h3>代理注册</h3>
            <h3>代理登录</h3>
          </div>
          <div class="text">
            <h1>关于我们</h1>
            <h3>关于我们</h3>
            <h3>最新优惠</h3>
            <h3>服务时间</h3>
            <h3>账号安全</h3>
          </div>
          <div class="text">
            <h1>常见问题</h1>
            <h3>游戏规则</h3>
            <h3>游戏问题</h3>
            <h3>技术问题</h3>
            <h3>充值提现</h3>
          </div>
        </div>
        <!-- qrcode -->
        <div class="qr_code">
          <img
            src="../assets/live/qr.png"
            alt=""
            style="height: 100%; width: 100%"
            draggable="false"
          />
        </div>
      </div>
    </div>
    <!-- footer img -->
    <div class="fot-img">
      <div class="f__img">
        <img
          src="../assets/home/footer.png"
          alt=""
          draggable="false"
          style="cursor: pointer"
        />
        <h3>COPYRIGHT © WANLI INTERNATIONAL RESERVED.</h3>
      </div>
    </div>
  </div>
</template>

<script>
import AES from "../api/aes";

import CustomerService from "../components/CustomerService";
export default {
  data() {
    return {
      scrolldata: "",
      id: this.$Global.myLoginInfo.loginId,
    };
  },
  components: {
    CustomerService,
  },
  methods: {
    // here i am sending userlogin id to get scroll data
    GetScrollData(id) {
      var en = this.$Global.en;
      let data = JSON.stringify({ Id: id });
      let endata = AES.encrypt(data, en);
      // var decryptdata = JSON.parse(AES.decrypt(endata, en));

      this.axios
        .post(this.$Global.scrollData, { data: endata })
        .then((res) => {
          var body = res.data;
          var msg = JSON.parse(AES.decrypt(body, en));
          //console.log(msg, "scroll");
          if (msg.JsonData.code == 200) {
            this.scrolldata = msg.JsonData.msg;
          } else {
            this.scrolldata =
              "为了给广大游戏玩家带来更安全稳定的线上体验环境，公司将针对在线上进行游戏无差额对打套利,洗钱等违反公司常规游戏操作的用户进行净网行动，一经发现封号冻结资金，概不退还！";
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },

    //onliine service pic click and go to customer service
    Service() {
      AES.Service();
    },
    Gogame() {
      window.open(`http://wl2021.com/`);
    },
  },
  created() {
    this.GetScrollData(this.id);
  },
};
</script>

<style lang="scss" scoped>
.parent {
  width: 100%;
}

.b-img {
  position: relative;
  height: 400px;
  width: 100%;
  background: url(../assets/live/banner.jpg) no-repeat;
  background-size: 100% 100%;
}
.bg-img {
  // position: relative;
  width: 100%;
  height: 400px;
  background: url(../assets/appdownload/bgimg2.png) no-repeat;
  background-size: cover;
  .scrolldiv {
    height: 50px;
    // background: red;
    .scroll-text {
      width: 1000px;
      background: #003567;
      height: 50px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      .btn-div {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 250px;

        p {
          text-align: center;
          font-weight: bold;
          letter-spacing: 3px;
          font-size: 22px;
          color: #efe956;
          padding-left: 5px;
          max-lines: 1;
        }
      }
    }
  }
}
.th-img-div {
  height: 350px;
  //   background: red;
  .img-div {
    width: 1275px;
    // background: #fff;
    height: 350px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    img {
      height: 200px;
      width: 300px;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
        0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
        0 16px 16px rgba(0, 0, 0, 0.12);
      -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
      transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    img:hover {
      -webkit-transform: scale(1.25, 1.25);
      transform: scale(1.25, 1.25);
      cursor: pointer;
    }
  }
}
.five-img-parent {
  height: 300px;
  background: #17163e;
  .five-img {
    width: 1200px;
    // background: #fff;
    height: 200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
  }
}
.footer-parent {
  height: 250px;
  //   background: red;
  background: #17163e;
  .footer__sub {
    width: 1275px;

    // background: #ccc;
    margin: 0 auto;
    height: 250px;
    display: flex;
    position: relative;
    // justify-content: space-between;
    align-items: center;
    .footer_img_div {
      width: 210px;
      height: 150px;
      //   background: green;
      position: absolute;
      left: -50px;
    }
    .th__text__div {
      height: 250px;
      width: 850px;
      // background: red;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .text {
        width: 250px;
        height: 250px;
        // background: yellow;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        h1 {
          color: #fff;
          font-weight: 800;
        }
        h3 {
          color: #fff;
        }
      }
    }
  }
}
.qr_code {
  position: absolute;
  height: 220px;
  width: 200px;
  // background: #fff;
  right: -70px;
}
.fot-img {
  height: 120px;
  //   background: red;
  background: #17163e;

  .f__img {
    margin: 0 auto;
    width: 1000px;
    // background: white;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h3 {
      color: #fff;
      font-weight: bold;
      padding-top: 15px;
      cursor: pointer;
    }
  }
}
</style>