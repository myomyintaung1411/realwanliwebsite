<template>
  <div class="customer-service">
    <img
      src="../assets/home/cu_service.png"
      alt=""
      height="70px;"
      style="cursor: pointer"
      @click="Service()"
      draggable="false"
    />
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

<style  scoped>
.customer-service {
  position: fixed;
  width: 100px;
  height: 100px;
  /* background: red; */
  right: 1%;
  top: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
</style>