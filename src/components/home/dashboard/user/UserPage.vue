<script setup lang='ts'>
import Scaffold from '@/components/view/Scaffold.vue';
import { loginState } from '@/service/loginstate';
import { version, computed, watch, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import GalleryPage from './GalleryPage.vue'
import ListView from './ListView.vue'
import Layout from './Layout.vue'
// 退出登录
function onLogout() {
    if (!loginState.user?.account) {
        alert('还没有登录过哟～')
        return
    }
    loginState.onLogout();
}

// const router = useRouter()
// console.log(`router${String(router)}`)

// 当前页面的路由信息
const route = useRoute()
const info = {
    name: String(route.name),
    path: String(route.path),
    params: route.params,
    query: route.query,
};
console.log(`当前页面的路由信息：${info}`)


const userData = ref()

watch(() => route.params.id,
    async newId => {
        userData.value = await fetch('192.168.0.105:2023')
    }
)

/// 使用 `Router.push ` 实现路由跳转
function onRoute() {
    // 路由导航实例
    const navigator = useRouter()
    // 当前页面的路由信息
    const route = useRoute()
    navigator.push(
        {
            name: '排行榜',
            path: '/rank',
            query: { ...route.query }
        })
}

</script>

<template>
    <Scaffold title="用户" :show-leading="false">
        <template #content>
            <!-- <RankPage stickyTop="44px" /> -->
            <div class="containerPage">
                <h3>Vue版本：{{ version }}</h3>
                <br>
                <h4>当前登录用户信息：</h4>
                <span v-if="loginState.user">{{ loginState }}</span>
                <br>
                <button @click="onLogout">退出登录</button>
                <br>
                <button @click="onRoute">Router.push 路由跳转</button>

                <!--加载多图-->
                <!-- <br> -->
                <!-- <GalleryPage /> -->

                <!--ListView-->
                <ListView />

            </div>
        </template>
    </Scaffold>
</template>

<style scoped>
.containerPage {
    display: flex;
    flex-direction: column;
    padding: 24px;
    background-color: white;
}
</style>

