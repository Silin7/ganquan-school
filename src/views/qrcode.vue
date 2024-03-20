<script setup lang="ts">
  const qrCodeValue = 'https://www.baidu.com'
  const qrCodeSize = 300
</script>

<template>
  <div class="qrcodePage">
    <div class="codeBox">
      <vue-qrcode :value="qrCodeValue" :size="qrCodeSize">
      </vue-qrcode>
    </div>
  </div>
</template>

<style>
  .qrcodePage {
    padding: 15px;
    height: 100vh;
    background-color: #f0f0f4;
  }

  .codeBox {
    margin: 0 auto;
    width: 180px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: #fff;
  }

  .codeBox img {
    width: 150px;
    height: 150px;
  }
</style>