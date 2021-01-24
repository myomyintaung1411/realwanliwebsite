<template>
  <div class="home">
    <Banner></Banner>

    <!-- backgroundimg -->
    <section>
      <div class="home_bgimg">
        <!-- scroll div -->
        <div class="scroll">
          <div class="scroll-sub">
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
            >
              {{ this.scrolldata }}
            </marquee>
          </div>
        </div>
        <!-- end -->
        <div class="img__tab__div">
          <div class="sub-img-div">
            <div class="tab_img_div">
              <!-- 1 -->
              <div
                class="tab_img_parent"
                :class="{ actImg: activeImg == 1 }"
                @click="ImageActive(1)"
              >
                <img
                  src="../assets/home/ancer.png"
                  alt=""
                  style="
                    height: auto;
                    width: 70px;
                    position: absolute;
                    left: 30%;
                    top: -12%;
                  "
                  draggable="false"
                />
                <span
                  style="
                    font-size: 19px;
                    font-weight: bold;
                    position: absolute;
                    left: 23%;
                    top: 60%;
                  "
                  >真人视讯</span
                >
              </div>
              <!-- 2 -->
              <div
                class="tab_img_parent"
                @click="ImageActive(2)"
                :class="{ actImg: activeImg == 2 }"
              >
                <img
                  src="../assets/home/2tab.png"
                  alt=""
                  style="
                    height: auto;
                    width: 70px;
                    position: absolute;
                    left: 30%;
                    top: -12%;
                  "
                  draggable="false"
                />
                <span
                  style="
                    font-size: 19px;
                    font-weight: bold;
                    position: absolute;
                    left: 23%;
                    top: 60%;
                  "
                  >电子游戏</span
                >
              </div>
              <!-- 3 -->
              <div
                class="tab_img_parent"
                @click="ImageActive(3)"
                :class="{ actImg: activeImg == 3 }"
              >
                <img
                  src="../assets/home/3tab.png"
                  alt=""
                  style="
                    height: auto;
                    width: 60px;
                    position: absolute;
                    left: 30%;
                    top: -12%;
                  "
                  draggable="false"
                />
                <span
                  style="
                    font-size: 19px;
                    font-weight: bold;
                    position: absolute;
                    left: 23%;
                    top: 60%;
                  "
                  >捕鱼达人</span
                >
              </div>
              <!-- 4 -->
              <div
                class="tab_img_parent"
                @click="ImageActive(4)"
                :class="{ actImg: activeImg == 4 }"
              >
                <img
                  src="../assets/home/4tab.png"
                  alt=""
                  style="
                    height: auto;
                    width: 60px;
                    position: absolute;
                    left: 30%;
                    top: -12%;
                  "
                  draggable="false"
                />
                <span
                  style="
                    font-size: 19px;
                    font-weight: bold;
                    position: absolute;
                    left: 23%;
                    top: 60%;
                  "
                  >棋牌游戏</span
                >
              </div>
            </div>
          </div>
        </div>
        <!--end active img tab div -->
        <div class="display__parent">
          <div class="display__img">
            <div class="img_parent">
              <img
                src="../assets/home/activeimg1.png"
                alt=""
                v-show="this.activeImg == 1"
                draggable="false"
              />

              <img
                src="../assets/home/activeimg2.png"
                alt=""
                v-show="this.activeImg == 2"
                draggable="false"
              />

              <img
                src="../assets/home/activeimg3.png"
                alt=""
                v-show="this.activeImg == 3"
                draggable="false"
              />

              <img
                src="../assets/home/activeimg4.png"
                alt=""
                v-show="this.activeImg == 4"
                draggable="false"
              />
            </div>
          </div>
        </div>
        <!-- end -->
        <div class="text-div">
          <div class="__text">
            <p>超级彩金等你来站!</p>
          </div>
        </div>
        <!-- text-div end -->
        <div class="online">
          <div class="ol__sub">
            <img
              src="../assets/home/onlineservice.png"
              alt=""
              draggable="false"
              @click="GoService()"
            />
          </div>
          <!-- threediv -->
          <div class="three__div">
            <div class="items">
              <h1>代理合作</h1>
              <h3>代理方案</h3>
              <h3>加盟协议</h3>
              <h3>代理注册</h3>
              <h3>代理登录</h3>
            </div>
            <div class="items">
              <h1>关于我们</h1>
              <h3>关于我们</h3>
              <h3>最新优惠</h3>
              <h3>服务时间</h3>
              <h3>账号安全</h3>
            </div>
            <div class="items">
              <h1>常见问题</h1>
              <h3>游戏规则</h3>
              <h3>游戏问题</h3>
              <h3>技术问题</h3>
              <h3>充值提现</h3>
            </div>
          </div>
          <!--  -->
          <img
            src="../assets/home/footer.png"
            alt=""
            class="footer"
            draggable="false"
          />
        </div>
        <div class="copyright">
          <div class="copy_text">
            <h3 class="h3_copy">COPYRIGHT © WANLI INTERNATIONAL RESERVED.</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import AES from "../api/aes";

import Banner from "../components/Banner";
export default {
  name: "Home",
  data() {
    return {
      activeImg: 1,
      scrolldata: "",
      id: this.$Global.myLoginInfo.loginId,
    };
  },
  components: {
    Banner,
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
          //console.log(msg,"scroll")
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
    GoService() {
      AES.Service();
    },
    GetAgentdata(id) {
      var en = this.$Global.en;
      let data = JSON.stringify({ Id: id });
      let endata = AES.encrypt(data, en);
      // console.log(endata,"data of endata")
      //var decryptdata = JSON.parse(AES.decrypt(endata, en));
      // console.log(decryptdata,"data of decryptdata")
      this.axios
        .post(this.$Global.agentUrl, { data: endata })
        .then((res) => {
          var body = res.data;
          var msg = JSON.parse(AES.decrypt(body, en));
          // console.log(msg, "response msg of created");
          if (msg.JsonData.code == 200) {
            //saving first time creted agentid and name to use in register section
            this.$Global.optioner.Agentid = msg.JsonData.Id;
            this.$Global.optioner.Agentname = msg.JsonData.name;
            // console.log(this.$Global.optioner.Agentname);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  created() {
    // var url = window.location.href;
    var url = "http://21020.localhost:8080";
    var s = url;
    //  console.log("ss", s);
    var a = s.split(".")[0];
    // console.log("h is", a);
    var userid = a.split("//")[1];
    //  console.log(userid,"a isssssssssssssss")
    this.GetAgentdata(userid);
    this.GetScrollData(this.id);
  },
};
</script>

<style lang="scss" scoped>
.home {
  // width: 100%;
  width: 100% !important;
  section {
    // min-width: 1400px;
    // overflow: hidden;
    display: block;

    .home_bgimg {
      margin: 0 auto;
      width: 100%;
      background-image: url(../assets/home/homebg.png);
      // min-height: 1000px;

      background-repeat: no-repeat;
      // background-position: left right;
      //  background-color: #051642;
      // position: relative;
      // background-size: cover;
      // background-size: 100% 100%;
      // background: red;
      // background-size: 100% 100%;

      .scroll {
        // display: flex;
        position: relative;
        width: 100%;
        // background: red;
        padding-top: 10px;

        // height: 200px;
        .scroll-sub {
          margin: 0 auto;
          width: 1080px;
          background: #003567;
          padding: 10px 0px;
          display: flex;
          // justify-content: space-between;
          align-items: center;
          .btn-div {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 250px;
            //background: red;
            //padding: 0 100px;
          }
          .btn-div p {
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
      //
      .img__tab__div {
        width: 100%;
        // background: #fff;
        height: 110px;
        margin-top: 10px;
        position: relative;
        .sub-img-div {
          // width: 900px !important;
          width: 900px;
          // background: rgb(100, 88, 88);
          height: 110px;
          // margin: 0 auto;
          position: absolute;
          left: 500px;
          // padding-left:1% ;
          .tab_img_div {
            width: 700px;
            //width: 80% !important;
            height: 110px;
            // background: red;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .tab_img_parent {
              height: 110px;
              width: 200px;
              // background: green;
              position: relative;
              background: url(../assets/home/bg_normal_tab.png) no-repeat center
                center;
              background-size: 100% 100%;
              display: flex;
              flex-direction: column;
              text-align: center;
              justify-content: space-between;
              color: #fff;
              letter-spacing: 3px;
              cursor: pointer;
              user-select: none;
            }
          }
        }
      }
      .actImg {
        background: url(../assets/home/bg_tab.png) no-repeat center center !important;
        color: #000000 !important;
        background-size: 100% 100% !important;
      }
      .display__parent {
        width: 100%;
        position: relative;
        //height: 320px;
        margin-top: 49px;
        // background: #fff;

        .display__img {
          //width: 1080px !important;
          position: absolute;
          left: 448px;
          .img_parent {
            //height: 350px;
            // background: red;
            width: 1008px !important;
            img {
              height: 335px;
              width: 1008px;
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
        }
      }
    }
  }
  // min-height: 100%;
  // height: 100vh;
}
.text-div {
  width: 100%;
  position: relative;
  margin-top: 420px;
  // background: red;
  .__text {
    position: absolute;
    // background: #fff;
    left: 800px;

    p {
      font-weight: bolder;
      font-size: 30px;
      // color: #fff;
      letter-spacing: 3px;
      cursor: pointer;
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
  }
}
.copyright {
  height: 50px;
  background: #051642;
  .copy_text {
    margin: 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    // background: red;
    margin-top: 15px;
    h3 {
      color: #fff;
      font-weight: bold;
      cursor: pointer;
    }
  }
}
.online {
  height: 230px;
  //  background: #fff;
  width: 100%;
  margin-top: 600px;
  position: relative;

  .ol__sub {
    position: relative;
    width: 250px;
    // background: red;
    height: 100px;
    left: 120px;
    top: 55px;
    // height: 200px;
    // background: #000000;
    // //left: 800px;
    // position: absolute;
    // top: 100px;
    // width: 100%;
    img {
      width: 250px;
      position: absolute;
      top: -10px;
      cursor: pointer;
      // height: 100px;
    }
  }
  .three__div {
    width: 900px;
    //  background: #efe956;
    height: 180px;
    position: absolute;
    left: 450px;
    top: -15px;
    display: flex;
    .items {
      width: 300px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      // background: green;
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
  .footer {
    position: absolute;
    left: 450px;
    bottom: 8px;
  }
}
</style>
