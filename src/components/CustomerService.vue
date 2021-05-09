<template>
  <div>
    <div class="customer-service">
      <!-- <img
        src="../assets/home/cu_service.png"
        alt=""
        @click="Service()"
        draggable="false"
        class="img"
      /> -->
      <div class="image_div">
        <img
          src="../assets/home/cu_service.png"
          alt=""
          @click="Service()"
          draggable="false"
          class="img"
        />
      </div>
      <!-- <div class="text">sdfsdfsdfsdfdsfsdfsdfsdfsdfsdfsdfsdfsdfdsfsdafsdf</div>
      <div class="text">HelloTestingsdfsdfsdfdsfsdfdssdfdsfdsafdsf</div> -->
    </div>
    <!-- <div class="text">tttttttttttttttttttttttttttttt</div>
    <div class="text two">hello</div> -->
  </div>
</template>

<script>
import AES from "../api/aes";
export default {
  methods: {
    //onliine service pic click and go to customer service
    Service() {
      AES.Service();
    },
  },
};
</script>

<style  lang="scss" scoped>
.customer-service {
  position: fixed;
  width: 100px;
  /* height: 300px; */
  /* background: red; */
  height: auto;
  right: 1%;
  top: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  // margin: 10px 0px;
  /* transition: top 1s linear */
  .image_div {
    height: auto;
    width: auto;
    // background: red;
  }
  // .img {
  //   width: auto;
  //   height: auto;
  //   // cursor: pointer;
  // }
  // .img:hover {
  //   .text {
  //     display: none;
  //     width: 1000px;
  //   }
  // }

  .text {
    width: 80px;
    height: auto;
    // float: left;
    white-space: normal;
    word-wrap: break-word;
    word-break: break-all;
    background: #a87c25;
    text-align: center;
    color: #fff;
    font-weight: bold;
    padding: 5px 0px;
    // border: 3px solid #4e8df2;
    border-radius: 15px;
    margin: 4px 0px;
    // display: none;

    // display: flex;
  }
}

/* .text {
  position: fixed;
  width: 50px;
  height: auto;
  background: #a87c25;
  right: 2.5%;
  top: 51%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  border-radius: 3px;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
  padding: 5px 5px;
  color: #fff;
  font-size: 17px;
} */
</style>