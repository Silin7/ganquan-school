<script setup lang="ts">
  const qrCodeValue = 'https://www.baidu.com'
  const qrCodeSize = 300
</script>

<template>
  <div>
    <vue-qrcode :value="qrCodeValue" :size="qrCodeSize" style="border: 1px solid red; width: 200px; height: 200px;"></vue-qrcode>
  </div>
</template>