<!--级联菜单-->
<template>
    <div class="menu-layout">
        <a-menu id="buff-menu" v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" theme="dark" mode="inline"
            @click="handleClick">
            <MenuView :menu="menu" v-for="(menu, index) in menus" :titleClick="titleClick" />
        </a-menu>
    </div>
</template>

<style scoped>
.menu-layout {
    display: flex;
    flex-direction: column;
    /* margin-left: 16px; */
    /* margin-right: 16px; */
    /* border-radius: 4px; */
    overflow: hidden;
}
</style>

<script setup lang="ts">
import { ref, watch, defineEmits } from 'vue';
import { MailOutlined, QqOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';

import MenuView from './MenuView.vue';
import { menus } from './model'
import type { MenuProps } from 'ant-design-vue';
import type { MenuInfo } from 'ant-design-vue/lib/menu/src/interface';

const emits = defineEmits<{
    (event: 'menuEvent', menu: MenuInfo): any
}>()

const selectedKeys = ref<string[]>(['A'])
const openKeys = ref<string[]>(['A'])

// 菜单分组点击事件
const titleClick = (e: Event) => {
    // console.log('titleClick - 分组点击事件', e);
}

// 菜单点击事件
const handleClick: MenuProps['onClick'] = info => {
    // console.log('click - 具体菜单点击事件', info);
    emits('menuEvent', info)
}

watch(
    () => openKeys,
    val => {
        // console.log('openKeys', val);
    },
)
</script>