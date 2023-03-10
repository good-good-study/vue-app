import { createApp } from "vue";
import App from "@/App.vue";

import roter from "./router";
import "./assets/main.css";
// 引入AntDesign
import AntDesign from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);

app
  .use(roter)
  .use(AntDesign) // 全局注册AntDesign
  .mount("#app");
