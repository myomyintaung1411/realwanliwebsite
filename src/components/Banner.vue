<template>
  <div class="carousal">
    <div class="carousal-img" v-for="(item, index) in banners" :key="index">
      <transition name="fade">
        <img
          v-if="currentSlide == index"
          style="height: 400px; width: 100%"
          :src="item.image"
        />
      </transition>
    </div>
    <div style="height: 390px; width: 100%; position: relative">
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
          v-for="(item, index) in banners"
          :key="index"
          @click="makeActive(index)"
          :class="currentSlide == index ? 'gray' : 'white'"
          style="
            width: 60px;
            height: 15px;
            border-radius: 10%;
            cursor: pointer;
            margin: 5px;
          "
        ></div>
      </div>
    </div>
    <CustomerService/>
  </div>
</template>

<script>
import CustomerService from './CustomerService'
export default {
    components: {
    CustomerService,
  },
  data() {
    return {
      currentSlide: 1,
      banners: [
        {
          image: require("../assets/home/c1.jpg"),
        },
        {
          image: require("../assets/home/c2.jpg"),
        },
        {
          image: require("../assets/home/c3.jpg"),
        },
      ],
      interval: "",
      isTitleShowing: true,
    };
  },
  methods: {
    makeActive(index) {
      this.currentSlide = index;
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
    }, 4000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
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
.carousal {
  height: 400px;
  /* background: red; */
  width: 100%;
  position: relative;
}
.carousal-img {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.gray {
  background: rgb(42, 120, 165);
}
.white {
  background: #fff;
}
</style>