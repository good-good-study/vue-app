<!--工作台-->
<script setup lang="ts">
import type { MenuInfo } from 'ant-design-vue/lib/menu/src/interface';
import MenuLayout from './menu/MenuLayout.vue';
import { kToolbarHeight } from '@/values';
import navigator from '@/router';

/// 菜单点击事件，匹配路由
function menuEvent(menuInfo: MenuInfo) {
    const routes = ['user', 'rank', 'flutter']
    const to = routes[menuInfo.key.toString().length % routes.length]
    console.log(`to : ${to}`);
    navigator.push({ path: `/home/dashboard/${to}` })
}

</script>

<template>
    <a-layout has-sider>
        <!--左侧菜单-->
        <a-layout-sider key="root-menu"
            :style="{ overflow: 'scroll', height: '100vh', position: 'fixed', zIndex: 1, left: 0, top: 0, bottom: 0, paddingTop: kToolbarHeight }">
            <MenuLayout v-on:menu-event="menuEvent"></MenuLayout>
        </a-layout-sider>
        <!--右侧内容主体-->
        <!--三级路由出口-->
        <a-layout>
            <router-view :key="$route.fullPath" :style="{ marginLeft: '200px' }">
            </router-view>
        </a-layout>
    </a-layout>
</template>

<style>
#components-layout-demo-fixed-sider .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
}

.site-layout .site-layout-background {
    background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
}
</style>
