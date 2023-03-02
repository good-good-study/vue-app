<!--菜单实现-->
<script setup lang='ts'>
import type { Menu } from './model'
const props = defineProps<{
    menu: Menu
    titleClick?: any
}>()

// 是否为一个分组，包含子菜单，否则为一个普通父级菜单
const hasSub = props.menu.children.length > 0
// 为每一个item设置一个key
const itemKey = props.menu.name;

</script>

<template>
    <!--没有子菜单-->
    <a-menu-item v-if="!hasSub" :key="itemKey" @titleClick="titleClick">{{ menu.name }}</a-menu-item>

    <!--有子菜单-->
    <a-sub-menu v-else :key="itemKey" :title="menu.name" @titleClick="titleClick">
        <slot name="children"></slot>
    </a-sub-menu>
</template>

<!-- <template>
    <div class="menu">
        <span class="group">{{ menu.name }}</span>
        <slot name="children"></slot>
    </div>
</template> -->
<!-- 
<style scoped>
.menu {
    display: flex;
    flex-direction: column;
    padding-left: 16px;
    padding-top: 2px;
    padding-bottom: 2px;
    max-width: 200px;
    margin-top: 1px;
    margin-bottom: 1px;
}

.group {
    margin-top: 1px;
    margin-bottom: 1px;
    background-color: white;
}
</style> -->