<!--主页-->
<script setup lang="ts">
import { ref } from 'vue'
import Toolbar from './Toolbar.vue'
import { kToolbarHeight } from '@/values'
import { useRoute } from 'vue-router';
import { loginState } from '@/service/loginstate'
import navigator from '@/router/index'
import Router from '@/router/routes';

// 展示当前登录的用户
if (loginState.user) {
    alert(
        `登录用户:
     ${JSON.stringify(loginState.user)}
     `)
}

/// Tab
function onTab(index: number) {
    console.log(`onTab : ${index}`);
    const routes = ['/home/dashboard', '/home/a', '/home/b', '/home/c', '/home/d']
    const next = index % routes.length
    const route = routes[next]
    console.log(`onTab route: ${route}`);
    navigator.push({ path: route })
}

/// onReTab
function onReTab(index: number) {
    console.log(`onReTab : ${index}`);
}

console.log('路由信息：');
console.log(`${JSON.stringify(Object.values(Router))}`);

</script>

<template>
    <main>
        <!--顶部操作栏-->
        <Toolbar key='home#toolbar' v-on:tab-checked="onTab" :on-tab-re-checked="onReTab"></Toolbar>
        <!--二级路由出口-->
        <router-view key="home" :style="{ marginTop: kToolbarHeight }"></router-view>
    </main>
</template>
