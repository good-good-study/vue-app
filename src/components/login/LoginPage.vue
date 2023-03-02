<script setup lang="ts">
import { ref } from "vue";
import Scaffold from "../view/Scaffold.vue";
import FormView from "./FormView.vue";
import navigator from "@/router";
import Router from "@/router/routes";

// 登录成功
function onSuccess(args: any) {
    console.log(`登录成功: ${JSON.stringify(args)}`)
    navigator.push({ name: Router.home.name, params: args })
}
// 登录失败
function onFailed(errorInfo: any) {
    console.log(`登录失败: ${errorInfo}`)
}

</script>

<template>
    <Scaffold :title="($route.meta.title as string | undefined)" :show-leading="false">
        <template #content>
            <div class="container">
                <FormView account="用户名" password="密码" @on-success="onSuccess" @on-failed="onFailed" />
            </div>
        </template>
    </Scaffold>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    padding: 24px;
    font-size: 17px;
    font-weight: 500;
}
</style>