<script lang="ts" setup>
import { h } from "vue";
import { useTheme } from "@/hooks/useTheme";
import { ElNotification } from "element-plus";
// 将 Element Plus 的语言设置为中文
import zhCn from "element-plus/es/locale/lang/zh-cn";

const { initTheme } = useTheme();

/** 初始化主题 */
initTheme();

/** 作者小心思 */
ElNotification({
  title: "欢迎小土豆",
  type: "success",
  message: h(
    "a",
    {
      style: "color: teal",
      target: "_blank",
      href: "https://github.com/yuhang1130/vue3-admin-template"
    },
    "这里可以捉我，欢迎点击这里支持一个 star ！"
  ),
  duration: 0,
  position: "top-right"
});
</script>

<template>
  <el-config-provider :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>
