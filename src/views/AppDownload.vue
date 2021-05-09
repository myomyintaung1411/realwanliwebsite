<template>
  <div class="live">
    <div class="banner">
      <CustomerService />
    </div>
    <div class="bg-live">
      <!-- card -->
      <!-- <div class="card">
        <img src="../assets/live/cardimg.png" alt="" />
      </div> -->
      <div style="position: relative; width: 100%; height: 400px">
        <div class="img-div">
          <img
            src="../assets/appdownload/cardimg.png"
            alt=""
            draggable="false"
          />
        </div>
      </div>
    </div>
    <div style="height: 100px; width: 100%; background: #18173f"></div>
    <!-- end card -->
    <div class="text-section">
      <div class="mid-div">
        <div class="mid-text">
          <h2>精彩娱乐 从这里开始</h2>
          <h4>随时随地 畅玩手机游戏</h4>
        </div>
        <!-- mid img -->
        <div style="height: 180px; width: 300px; margin: 0 auto">
          <img
            src="../assets/appdownload/phone.png"
            alt=""
            style="width: 300px; cursor: pointer; margin-top: 8px"
            draggable="false"
          />
        </div>
        <!--  -->
        <div class="left-div1">128为SSL安全加密</div>
        <div class="left-div2">走到哪里.投到哪里</div>
        <div class="left-div3">无需 越域即可安装</div>

        <div class="right-div1">简洁易用操作方便</div>
        <div class="right-div2">取款更方便快捷</div>
        <div class="right-div3">公平公正博彩平台, 为您呈现奢华游戏体验。</div>

        <!-- qrcode -->
        <div
          style="
            position: absolute;
            right: -200px;
            height: auto;
            width: 200px;
            background: ;
            top: 20px;
          "
        >
          <img
            src="../../public/wanliqr.png"
            alt=""
            style="height: 100%; width: 100%; cursor: pointer"
            draggable="false"
          />
        </div>
        <!-- qrend -->

        <div class="online-service-img">
          <img
            src="../assets/home/onlineservice.png"
            alt=""
            draggable="false"
            style="cursor: pointer"
            @click="Service()"
          />
        </div>
        <div class="footer-img">
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
  </div>
</template>

<script>
import CustomerService from "../components/CustomerService";
import AES from "../api/aes";
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
.live {
  width: 100%;
  .banner {
    position: relative;
    height: 400px;
    width: 100%;
    background: url(../assets/appdownload/banner.jpg) no-repeat;
    background-size: 100% 100%;
    // overflow: hidden;
  }
  .bg-live {
    // position: relative;
    // height: 400px;
    width: 100%;
    height: 400px;
    background: url(../assets/appdownload/bgimg2.png) no-repeat;
    background-size: cover;
    .img-div {
      width: 900px;
      // background: green;
      margin: 0 auto;
      height: 400px;
      img {
        height: 500px;
        width: 900px;
      }
    }
  }
}
.text-section {
  height: 350px;
  width: 100%;
  background: #18173f;
  position: relative;
  .mid-div {
    position: relative;
    width: 950px;
    margin: 0 auto;
    height: 350px;
    // background: green;
    text-align: center;
    .mid-text {
      // display: flex;

      color: #b5dbfe;
    }
    .ph-img {
      width: 300px;
      // background: red;
      position: absolute;
    }
    .online-service-img {
      position: absolute;
      width: 300px;
      height: 100px;
      // background: red;
      left: -200px;
      top: 100px;
      img {
        width: 300px;
        height: auto;
      }
    }
    .footer-img {
      width: 100%;
      // background: red;
      height: 80px;
      position: absolute;
      bottom: 0;
      img {
        width: 100%;
      }
      h3 {
        color: #fff;
        font-weight: bold;
        padding-top: 5px;
        cursor: pointer;
      }
    }
    .left-div1 {
      // height: 20px;
      // width: 200px;
      // background: red;
      position: absolute;
      top: 20px;
      text-align: center;
      font-weight: bold;
      color: #fff;
      letter-spacing: 3px;
      left: 90px;
    }
    .left-div2 {
      position: absolute;
      top: 120px;
      text-align: center;
      font-weight: bold;
      color: #fff;
      letter-spacing: 3px;
      left: 120px;
    }
    .left-div3 {
      position: absolute;
      top: 210px;
      text-align: center;
      font-weight: bold;
      color: #fff;
      letter-spacing: 3px;
      left: 140px;
    }
    .right-div1 {
      position: absolute;
      top: 20px;
      text-align: center;
      font-weight: bold;
      color: #fff;
      letter-spacing: 3px;
      right: 120px;
    }
    .right-div2 {
      position: absolute;
      top: 120px;
      text-align: center;
      font-weight: bold;
      color: #fff;
      letter-spacing: 3px;
      right: 100px;
    }
    .right-div3 {
      position: absolute;
      top: 210px;
      text-align: center;
      font-weight: bold;
      color: #fff;
      letter-spacing: 3px;
      right: 10px;
    }
  }
}
</style>
