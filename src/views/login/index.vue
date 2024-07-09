<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/modules/user";
import { ElMessage, type FormInstance, type FormRules } from "element-plus";
import { User, Lock, Key } from "@element-plus/icons-vue";
import { getLoginCodeApi } from "@/api/login";
import { InputDomType, type LoginRequestData } from "@/api/login/types/login";
import ThemeSwitch from "@/components/ThemeSwitch/index.vue";
import { nanoid } from "nanoid";

const router = useRouter();

const loginFormRef = ref<FormInstance | null>(null);
const loading = ref(false);
const codeUrl = ref("");
const loginFormData: LoginRequestData = reactive({
  userName: "",
  passWord: "",
  code: "",
  sid: ""
});

const loginFormRules: FormRules = {
  userName: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  passWord: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" }
  ],
  code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
};

const inputDom = reactive<InputDomType[]>([
  {
    prop: "username",
    vModel: "userName",
    placeholder: "用户名",
    type: "text",
    tabIndex: "1",
    prefixIcon: User as any,
    size: "large",
    showPassword: false,
    showCodeUrl: false
  },
  {
    prop: "password",
    vModel: "passWord",
    placeholder: "密码",
    type: "password",
    tabIndex: "2",
    prefixIcon: Lock as any,
    size: "large",
    showPassword: true,
    showCodeUrl: false
  },
  {
    prop: "code",
    vModel: "code",
    placeholder: "验证码",
    type: "text",
    tabIndex: "3",
    prefixIcon: Key as any,
    size: "large",
    showPassword: false,
    showCodeUrl: true
  }
]);

const handleLogin = () => {
  console.log("loginFormData------", loginFormData);
  loginFormRef.value?.validate((valid: boolean) => {
    if (valid) {
      loading.value = true;
      useUserStore()
        .login(loginFormData)
        .then(() => {
          router.push({ path: "/" });
        })
        .catch(() => {
          createCode();
        })
        .finally(() => {
          loading.value = false;
        });
    } else {
      ElMessage.error("表单校验不通过！");
    }
  });
};

const createCode = () => {
  loginFormData.code = "";
  codeUrl.value = "";
  loginFormData.sid = nanoid();
  getLoginCodeApi({ sid: loginFormData.sid }).then((res) => {
    codeUrl.value = res.data;
  });
};
createCode();
</script>

<template>
  <div class="login-container">
    <ThemeSwitch class="theme-switch" />
    <div class="login-card">
      <div class="title">
        <img src="@/assets/layouts/logo-text-2.png" alt="加载中..." />
      </div>
      <div class="content">
        <el-form
          ref="loginFormRef"
          :model="loginFormData"
          :rules="loginFormRules"
          @keyup.enter="handleLogin"
        >
          <el-form-item
            v-for="item in inputDom"
            :prop="item.prop"
            :key="`form-item-${item.tabIndex}`"
          >
            <el-input
              v-model.trim="loginFormData[item.vModel]"
              :placeholder="item.placeholder"
              :type="item.type"
              :tabindex="item.tabIndex"
              :prefix-icon="item.prefixIcon"
              :size="item.size"
              :show-password="item.showPassword"
            >
              <template v-if="item.showCodeUrl" #append>
                <div
                  style="height: 50px; cursor: pointer"
                  v-html="codeUrl"
                  @click="createCode"
                />
              </template>
            </el-input>
          </el-form-item>
          <el-button
            :loading="loading"
            type="primary"
            size="large"
            @click.prevent="handleLogin"
            >登 录</el-button
          >
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  .theme-switch {
    position: fixed;
    top: 5%;
    right: 5%;
    cursor: pointer;
  }
  .login-card {
    width: 480px;
    border-radius: 20px;
    box-shadow: 0 0 10px #dcdfe6;
    background-color: #fff;
    overflow: hidden;
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 150px;
      img {
        height: 100%;
      }
    }
    .content {
      padding: 20px 50px 50px 50px;
      :deep(.el-input-group__append) {
        padding: 0;
        overflow: hidden;
        .el-image {
          width: 100px;
          height: 40px;
          border-left: 0px;
          user-select: none;
          cursor: pointer;
          text-align: center;
        }
      }
      .el-button {
        width: 100%;
        margin-top: 10px;
      }
    }
  }
}
</style>
