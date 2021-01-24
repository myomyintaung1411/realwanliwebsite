<template>
  <div class="payment">
    <div class="b-img">
      <CustomerService />
    </div>
    <div class="bg-img">
      <div class="card-img-div">
        <div class="img-d">
          <img src="../assets/payment/info.png" alt="" draggable="false" />
        </div>
      </div>
      <!-- form section -->
      <div class="pay-p">
        <div class="pay-form-main">
          <!-- upperform -->
          <div class="upper-form">
            <div class="upp-text">
              <span class="text" style="padding-top: 8px"> 存款操作 </span>
              <span style="height: 2px; width: 120px; background: red"></span>
            </div>
            <div class="below-text">
              <div class="label-text">请输入转账金额:</div>
              <input
                type="number"
                class="input"
                v-model="payment.paymentMoney"
                autocomplete="off"
              />
              <div class="pay-btn" @click="submitPayment()">立即支付</div>
            </div>
          </div>
          <div class="divided"></div>

          <!-- below form -->
          <div class="below-pay-form">
            <div class="upp-text">
              <span class="text"> 取款操作 </span>
              <span style="height: 2px; width: 120px; background: red"></span>
            </div>
            <!-- form  -->
            <div class="below-text">
              <div class="label-text">请输入银行名称:</div>
              <input
                type="text"
                class="input"
                v-model="withdraw.bankname"
                autocomplete="off"
              />
            </div>
            <!-- 2 -->
            <div class="below-text">
              <div class="label-text__long">请输入银行账户名称:</div>
              <input
                type="text"
                class="input"
                v-model="withdraw.bankaccount"
                autocomplete="off"
              />
            </div>
            <!-- 3 -->
            <div class="below-text">
              <div class="label-text">请输入银行账号:</div>
              <input
                type="number"
                class="input"
                v-model="withdraw.bankcard"
                autocomplete="off"
              />
            </div>
            <!-- 4 -->
            <div class="below-text">
              <div class="label-text">请输入取款金额:</div>
              <input
                type="number"
                class="input"
                v-model="withdraw.withdrawmoneyamount"
                autocomplete="off"
              />
            </div>
            <!-- submit btn -->
            <div class="submit-withdraw" @click="submitWithDraw()">
              <p>立</p>
              <p>即</p>
              <p>取</p>
              <p>款</p>
            </div>
          </div>
          <!-- below form -->
        </div>
      </div>
    </div>
    <!-- bg-img end -->
    <div class="footer-section">
      <div class="footer">
        <div class="footer-img">
          <img
            src="../assets/home/footer.png"
            alt=""
            draggable="false"
            style="cursor: pointer"
          />
        </div>

        <img
          src="../assets/home/onlineservice.png"
          alt=""
          class="online"
          draggable="false"
          style="cursor: pointer"
          @click="Service()"
        />
      </div>
    </div>
    <!-- h3 -->
    <div class="copyright">
      <div class="copy">
        <h3>COPYRIGHT © WANLI INTERNATIONAL RESERVED.</h3>
      </div>
    </div>
  </div>
</template>

<script>
import AES from "@/api/aes";
import CustomerService from "../components/CustomerService";
export default {
  components: {
    CustomerService,
  },
  data() {
    return {
      payment: {
        paymentMoney: "",
      },
      withdraw: {
        bankname: "",
        bankaccount: "",
        bankcard: "",
        withdrawmoneyamount: "",
      },
    };
  },
  methods: {
    //onliine service pic click and go to customer service
    Service() {
      AES.Service();
    },
    //submit payment
    submitPayment() {
      if (this.$store.state.login == false)
        return this.$message.warning("请先登录");

      if (this.payment.paymentMoney == "")
        return this.$message.warning("付款金额不能为空！");

      if (this.payment.paymentMoney < 100)
        return this.$message.warning("付款金额不能少于100元");

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
            return this.$message.error(body.msg);
          }
        })
        .catch((e) => {
          // console.log(e);

          this.$message.error(e.toString());
        });
    },

    //withdraw payment method
    submitWithDraw() {
      if (this.$store.state.login == false)
        return this.$message.warning("请先登录");

      if (this.withdraw.bankname == "")
        return this.$message.warning("请输入银行名称");
      if (this.withdraw.bankname.length < 4)
        return this.$message.warning("银行名称应有四位数");

      if (this.withdraw.bankaccount == "")
        return this.$message.warning("账户名称不能为空！");

      if (this.withdraw.bankaccount.length < 2)
        return this.$message.warning("账户名称最少两位数");

      if (this.withdraw.bankcard == "")
        return this.$message.warning("银行卡号不能为空！");
      if (this.withdraw.bankcard.length < 16)
        return this.$message.warning("银行卡号至少16位！");

      if (this.withdraw.withdrawmoneyamount == "")
        return this.$message.warning("请输入取款金额");
      if (this.withdraw.withdrawmoneyamount < 100)
        return this.$message.warning("取款金额不能少于100元");

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

            return this.$message.success(body.msg);
          } else {
            return this.$message.error(body.msg);
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
.payment {
  width: 100%;
  .b-img {
    position: relative;
    height: 400px;
    width: 100%;
    background: url(../assets/payment/banner.jpg) no-repeat;
    background-size: 100% 100%;
  }
  .bg-img {
    // position: relative;
    // height: 400px;
    width: 100%;
    height: 600px;
    background: url(../assets/appdownload/bgimg.png) no-repeat;
    background-size: cover;

    .card-img-div {
      width: 100%;
      height: 100px;
      //   background: red;
      .img-d {
        width: 1100px;
        // background: green;
        margin: 0 auto;
        height: 100px;
        img {
          height: 100px;
          width: 1100px;
        }
      }
    }
    .pay-p {
      //   background: red;
      height: 450px;
      width: 100%;
      margin-top: 20px;
      .pay-form-main {
        width: 1100px;
        height: 450px;
        //   background: whitesmoke;
        margin: 0 auto;
        border: 2px solid salmon;
        .upper-form {
          height: 100px;
          width: 100%;

          //   border-bottom: 2px solid #ccc;
          //   background: red;
          .upp-text {
            height: 50px;
            // background: green;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .text {
              font-weight: bold;
              font-size: 22px;
              letter-spacing: 2px;
              // border-bottom: 1px solid red;
              margin-left: 10px;
              margin-top: 5px;
              color: #fff;
            }
          }
          .below-text {
            height: 50px;
            // background: yellow;
            display: flex;
            text-align: center;
            align-items: center;
            .label-text {
              text-align: center;
              //   width: ;
              //   background: red;
              font-weight: bold;
              color: #fff;
              letter-spacing: 3px;
              font-size: 20px;
              margin-left: 95px;

              //@at-root  overflow: hidden;
            }

            .input {
              height: 35px;
              width: 400px;
              margin-left: 40px;
              outline: none;
              padding-left: 20px;
              font-size: 22px;
              border: none;
            }
            .pay-btn {
              background: transparent;
              border: 1px solid salmon;
              height: 35px;
              width: 120px;
              margin-left: 40px;
              text-align: center;
              color: #c9e111;
              font-weight: bold;
              font-size: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              letter-spacing: 2px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
.divided {
  height: 2px;
  background: #ccc;
  width: 100%;
  margin-top: 10px;
}
.below-pay-form {
  height: 310px;
  width: 100%;
  //   background: #17163e;
  position: relative;
  .upp-text {
    // background: red;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    .text {
      font-weight: bold;
      font-size: 22px;
      letter-spacing: 2px;
      margin-left: 10px;
      margin-top: 5px;
      color: #fff;
    }
  }
  //   background: #fff;
  .below-text {
    height: 60px;
    // background: yellow;
    display: flex;
    text-align: center;
    align-items: center;
    .label-text {
      text-align: center;
      //   width: ;
      //   background: red;
      font-weight: bold;
      color: #fff;
      letter-spacing: 3px;
      font-size: 20px;
      margin-left: 95px;
    }
    .label-text__long {
      font-weight: bold;
      color: #fff;
      letter-spacing: 3px;
      font-size: 20px;
      margin-left: 48px;
    }
    .input {
      height: 35px;
      width: 400px;
      margin-left: 40px;
      outline: none;
      padding-left: 20px;
      font-size: 22px;
      border: none;
    }
  }
}

.submit-withdraw {
  // height: 100px;
  position: absolute;
  width: 50px;
  background: transparent;
  height: 150px;
  right: 230px;
  top: 120px;
  border: 1px solid salmon;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  p {
    font-weight: bold;
    color: #c9e111;
    //   letter-spacing: 3px;
    padding: 2px 0px;
    font-size: 20px;
  }
}

.footer-section {
  height: 120px;
  background: #17163e;
  //   background: red;
  .footer {
    height: 120px;
    width: 1100px;
    // background: green;
    margin: 0 auto;
    position: relative;

    .footer-img {
      width: 100%;
      // background: red;
      // height: 100px;
      position: absolute;
      bottom: 0px;
      img {
        width: 100%;
      }
    }
    .online {
      width: 280px;
      position: absolute;
      top: -60px;
      height: 150px;
      left: -290px;
    }
  }
}
.copyright {
  height: 50px;
  background: #17163e;
  .copy {
    height: 50px;
    width: 1100px;
    // background: green;
    margin: 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    h3 {
      color: #fff;
      font-weight: bold;
      cursor: pointer;
    }
  }
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
</style>