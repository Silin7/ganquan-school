<script setup lang="ts">
  import {
    ref,
    onMounted
  } from 'vue';
  import {
    showToast,
    showFailToast,
    showSuccessToast,
  } from 'vant';
  import axios from 'axios'
  import {
    validateMobile,
  } from '@/utils/regular'

  const name = ref('')
  const classesName = ref('')
  const classes = ref('')
  const fphone = ref('')
  const mphone = ref('')

  const classesShow = ref(false);

  function showPopup() {
    classesShow.value = true;
  };

  const classesData: any = ref([]);

  onMounted(() => {
    for (let i = 1; i <= 34; i++) {
      classesData.value.push({
        text: `高一${i}班`,
        value: i,
      })
    }
  })

  function classesConfirm(event: any) {
    classesName.value = event.selectedOptions[0].text
    classes.value = event.selectedOptions[0].value
    classesShow.value = false;
  };

  function classesCancel() {
    classesShow.value = false;
    showToast('取消')
  };

  async function saveFunc() {
    if (!name.value) {
      showFailToast('请填写学生姓名')
      return
    }
    if (!classes.value) {
      showFailToast('请选择班级')
      return
    }
    if (!fphone.value) {
      showFailToast('请填写爸爸手机号')
      return
    }
    if (!validateMobile(fphone.value)) {
      showFailToast('爸爸手机号格式错误')
      return
    }
    if (!mphone.value) {
      showFailToast('请填写妈妈手机号')
      return
    }
    if (!validateMobile(mphone.value)) {
      showFailToast('妈妈手机号格式错误')
      return
    }
    const response: any = await axios.post('https://www.silin7.cn/ganquan/stu/save',null, {
      params: {
        name: name.value,
        classes: classes.value,
        fphone: fphone.value,
        mphone: mphone.value,
      }
    })
    if (response.data && response.data.code === 1) {
      showSuccessToast('保存成功')
    } else {
      showFailToast('操作失败：' + response.data.message)
    }
  }
</script>

<template>
  <div class="registerPage">
    <div class="center">
      <div class="title">完善学生信息</div>
      <div class="cardBox">
        <van-field v-model="name" required label="学生姓名" placeholder="请输入学生姓名" input-align="right" />
      </div>
      <div class="cardBox">
        <van-field v-model="classesName" required label="班级" placeholder="请选择班级" input-align="right" readonly
          @click="showPopup" />
      </div>
      <div class="cardBox">
        <van-field v-model="fphone" required label="爸爸手机号" placeholder="请输入爸爸手机号" input-align="right" />
      </div>
      <div class="cardBox">
        <van-field v-model="mphone" required label="妈妈手机号" placeholder="请输入妈妈手机号" input-align="right" />
      </div>
    </div>
    <div class="saveBtn" @click="saveFunc">保存</div>

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
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  }

  .center {
    height: calc(100vh - 110px);
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
    line-height: 60px;
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