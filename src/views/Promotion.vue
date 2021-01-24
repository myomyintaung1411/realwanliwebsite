<template>
  <div class="promotion">
    <div class="banner">
      <CustomerService />
    </div>
    <div class="bg-img">
      <div class="card__parent">
        <div class="card">
          <img
            src="../assets/promotion/girl.png"
            alt=""
            class="girl"
            draggable="false"
          />
          <!-- upper img div -->
          <div class="upper_img_div">
            <img
              src="../assets/promotion/11.png"
              alt=""
              class="img11"
              draggable="false"
            />
            <img
              src="../assets/promotion/77.png"
              alt=""
              class="img77"
              draggable="false"
            />
            <img
              src="../assets/promotion/22.png"
              alt=""
              class="img22"
              draggable="false"
            />
            <img
              src="../assets/promotion/88.png"
              alt=""
              class="img88"
              draggable="false"
            />
            <img
              src="../assets/promotion/33.png"
              alt=""
              class="img33"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- below img div -->
    <div class="extra-card">
      <div class="card2_section">
        <div class="below_img_div">
          <img
            src="../assets/promotion/44.png"
            alt=""
            class="img44"
            draggable="false"
          />
          <img
            src="../assets/promotion/55.png"
            alt=""
            class="img55"
            draggable="false"
          />
          <img
            src="../assets/promotion/66.png"
            alt=""
            class="img66"
            draggable="false"
          />
          <img
            src="../assets/promotion/phone.png"
            alt=""
            class="img99"
            draggable="false"
          />
        </div>
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
    <!-- end -->
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
  components: {
    CustomerService,
  },
  methods: {
    //onliine service pic click and go to customer service
    Service() {
      AES.Service();
    },
  },
};
</script>

<style lang="scss" scoped>
.promotion {
  width: 100%;
  .banner {
    position: relative;
    height: 300px;
    width: 100%;
    background: url(../assets/promotion/banner.jpg) no-repeat;
    background-size: 100% 100%;
  }
}
.bg-img {
  // position: relative;
  width: 100%;
  height: 400px;
  background: url(../assets/appdownload/bgimg2.png) no-repeat;
  background-size: cover;
  .card__parent {
    height: 400px;
    // background: red;
    position: relative;
    .card {
      width: 1270px;
      margin: 0 auto;
      height: 400px;
      //   background: green;
      .girl {
        position: absolute;
        width: 400px;
        top: -300px;
        // left: 100px;
      }
    }
  }
}
.extra-card {
  height: 330px;
  background: #17163e;
  .card2_section {
    width: 1270px;
    margin: 0 auto;
    height: 300px;
    // background: red;
    .below_img_div {
      position: relative;
      display: flex;
      height: 300px;
      //   background: white;
      justify-content: space-between;
      .img44 {
        height: 100px;
        position: absolute;
        left: 100px;
        top: -60px;
      }
      .img55 {
        height: 100px;
        position: absolute;
        left: 100px;
        top: 50px;
      }
      .img66 {
        height: 100px;
        position: absolute;
        left: 100px;
        top: 160px;
      }
      .img99 {
        position: absolute;
        right: 0;
        height: 430px;
        top: -180px;
      }
    }
  }
}
.upper_img_div {
  height: 330px;
  position: relative;
  //   background: white;
  display: flex;
  justify-content: space-between;
  .img11 {
    top: 10px;
    height: 100px;
    position: absolute;
    left: 100px;
  }
  .img22 {
    top: 120px;
    height: 100px;
    position: absolute;
    left: 100px;
  }
  .img33 {
    top: 230px;
    height: 100px;
    position: absolute;
    left: 100px;
  }
  .img77 {
    height: 100px;
    position: absolute;
    right: 0px;
    top: 10px;
  }
  .img88 {
    height: 100px;
    position: absolute;
    right: 0px;
    top: 120px;
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
      left: -135px;
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

//
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