<script setup lang="ts">
  import {
    ref
  } from 'vue';
  import {
    showToast
  } from 'vant';

  const name = ref('')
  const classes = ref('')
  const fphone = ref('')
  const mphone = ref('')

  const classesShow = ref(false);

  function showPopup() {
    classesShow.value = true;
  };

  const classesData = [{
      text: '一年级',
      value: '1'
    },
    {
      text: '二年级',
      value: '2'
    },
    {
      text: '三年级',
      value: '3'
    },
    {
      text: '四年级',
      value: '4'
    },
    {
      text: '五年级',
      value: '5'
    },
    {
      text: '六年级',
      value: '6'
    },
  ];

  function classesConfirm(event: any) {
    console.log(' -------->', event.selectedOptions[0].text)
    console.log(' -------->', event.selectedOptions[0].value)
  };

  function classesCancel() {
    showToast('取消')
  };
</script>

<template>
  <div class="registerPage">
    <div class="center">
      <div class="title">添加学生信息</div>
      <div class="cardBox">
        <van-field v-model="name" required label="学生姓名" placeholder="请输入学生姓名" input-align="right" />
      </div>
      <div class="cardBox">
        <van-field v-model="classes" required label="班级" placeholder="请选择班级" input-align="right" readonly
          @click="showPopup" />
      </div>
      <div class="cardBox">
        <van-field v-model="fphone" required label="爸爸手机号" placeholder="请输入爸爸手机号" input-align="right" />
      </div>
      <div class="cardBox">
        <van-field v-model="mphone" required label="妈妈手机号" placeholder="请输入妈妈手机号" input-align="right" />
      </div>
    </div>
    <div class="saveBtn">保存</div>

    <!-- 选择班级弹框 -->
    <van-popup v-model:show="classesShow" position="bottom">
      <van-picker title="请选择班级" :columns="classesData" @confirm="classesConfirm" @cancel="classesCancel" />
    </van-popup>
  </div>
</template>

<style>
  .registerPage {
    padding: 15px;
    /* background-color: #f0f0f4; */
    background-image:linear-gradient(120deg,#fdfbfb 0%, #ebedee 100%);
  }

  .center {
    height: calc(100vh - 100px);
  }

  .title {
    margin-bottom: 10px;
    line-height: 40px;
    color: #4545FF;
  }

  .cardBox {
    margin-bottom: 20px;
    padding: 10px 0;
    border-radius: 10px;
    background-color: #fff;
  }

  .saveBtn {
    margin-top: 20px;
    padding-left: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 40px;
    line-height: 50px;
    font-weight: 700;
    border-radius: 10px;
    color: #fff;
    background-color: #4545FF
  }

  /* 全局组件样式 */
  .van-picker__toolbar {
    height: 60px !important;
    line-height: 60px !important;
    border-bottom: 1px solid #f0f0f4 !important;
  }

  .van-picker__title {
    color: #333 !important;
  }

  .van-picker__cancel {
    color: #4545FF !important;
  }

  .van-picker__confirm {
    color: #4545FF !important;
  }
</style>