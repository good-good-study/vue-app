<!--Toolbar-->
<script setup lang="ts">
import TabLayout from './TabLayout.vue';
import type { Tab } from './TabLayout.vue'
import navigator from '@/router';
import isLogin, { loginState } from '@/service/loginstate'
import Router from '@/router/routes';
import { ref, watch } from 'vue'

const emits = defineEmits<{
    (event: 'tabChecked', index: number): void,
    (event: 'tabReChecked', index: number): void,
}>()

const tencent = [
    { label: '精选', badge: (Math.random() * 1000) },
    { label: '电视剧', badge: (Math.random() * 1000) },
    { label: '动漫', badge: (Math.random() * 1000) },
    { label: '中视频', badge: (Math.random() * 1000) },
    { label: '十三邀', badge: (Math.random() * 1000) },
    { label: '综艺', badge: (Math.random() * 1000) },
    { label: '电影', badge: (Math.random() * 1000) },
    { label: '爱玩', badge: (Math.random() * 1000) },
    { label: '短剧', badge: (Math.random() * 1000) },
];

const buffun = [
    { label: '工作台', badge: (Math.random() * 1000) },
    { label: '企业邮箱', badge: (Math.random() * 1000) },
    { label: '绩效查询', badge: (Math.random() * 1000) },
    { label: '薪资缴金', badge: (Math.random() * 1000) },
    { label: '积分商城', badge: (Math.random() * 1000) },
    { label: '下载APP', badge: (Math.random() * 1000) },
];

const tabs = ref<Tab[]>(buffun)
const tabMarginRight = ref(isLogin.value ? 204 : 116);

watch(isLogin, (flag) => {
    tabMarginRight.value = flag ? 204 : 116
})

// 退出登录
function onLogout() {
    loginState.onLogout()
    navigator.push({ name: Router.login.name })
}


/// Tab
function onTab(index: number) {
    emits('tabChecked', index)
}

/// onReTab
function onReTab(index: number) {
    emits('tabReChecked', index)
}

</script>

<template>
    <div class="appBar">
        <!--不凡Logo-->
        <div class="logo">
            <img src="@/assets/rank_bg.png" alt="logo" class="logo-image">
            <div class="logo-content">
                <span class="logo-title">不凡玩品员工系统</span>
                <!-- <span class="logo-title">腾讯视频 · Tencent</span> -->
                <span class="logo-desc">boardon.buffun.cn</span>
            </div>
        </div>

        <!--Tab-->
        <TabLayout :tabs="tabs" :margin-right="tabMarginRight" v-on:on-tab="onTab" v-on:on-re-tab="onReTab"></TabLayout>

        <div class="actions">
            <!--去登录-->
            <router-link class="button-login" to="/login" v-show="!$route.meta.loginDisable && !isLogin">去登录</router-link>
            <!--退出登录-->
            <button class="button-login" @click="onLogout" v-show="isLogin">退出登录</button>
            <!--去发现-->
            <button class="button-login" @click="onLogout" v-show="isLogin">去发现</button>
        </div>

    </div>
</template>

<style scoped>
.appBar {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 76px;
    width: 100vW;
    top: 0;
    z-index: 100;
    position: fixed;
    background-color: rgb(247, 236, 203);
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 16px;
    padding-right: 16px;
    box-shadow: 0px 0px 8px 0px;
}

.logo {
    display: flex;
    flex-direction: row;
    margin-right: 16px;
    /* border-color: red;
    border-width: 2px;
    border-style: dashed; */
}

.logo-image {
    width: 48px;
    height: 48px;
}

.logo-content {
    display: flex;
    flex-direction: column;
    margin-left: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.logo-title {
    font-size: 20px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.logo-desc {
    font-size: 16px;
    font-weight: 500;
    margin-top: -4px;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.button-login {
    margin-left: 8px;
    margin-right: 8px;
    border-radius: 4px;
    padding-left: 12px;
    padding-right: 12px;
    color: white;
    padding-top: 4px;
    padding-bottom: 4px;
    background-color: rgb(74, 161, 74);
    border-style: none;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    z-index: 1;
    right: 0px;
    padding-left: 12px;
    padding-right: 12px;
    height: 82px;
    box-shadow: 0px 0px 16px 0px;
    background-color: rgb(246, 229, 133);
    border-top-left-radius: 32px;
    border-bottom-left-radius: 8px;
}
</style>