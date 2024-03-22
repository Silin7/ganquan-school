<script setup lang="ts">
  import VueQr from 'vue-qr/src/packages/vue-qr.vue'
</script>

<template>
  <div class="qrcodePage">
    <div class="codeBox">
      <vue-qr qid="testid" text="https://www.silin7.cn/ganquanSchool/#/register" :margin="0" :size="280"
        colorDark="#4545ff" colorLight="#fff"
        logoSrc="https://www.silin7.cn/ganquanSchool/ganquanxiaohui.jpg">
      </vue-qr>
    </div>
    <!-- <div class="title">
      长按识别二维码
    </div> -->
  </div>
</template>

<style>
  .qrcodePage {
    padding: 15px;
    height: 100vh;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  }

  .codeBox {
    margin: 20vh auto 0;
    width: 320px;
    height: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: #fff;
  }

  .title {
    margin: 10px auto;
    width: 320px;
    line-height: 40px;
    color: #646566;
  }
</style>