<!--级联菜单-->
<script setup lang='ts'>
import ItemMenuView from './ItemMenu.vue'
import type { Menu } from './model'
import SubMenuView from './MenuView.vue'

defineProps<{
    menu: Menu,
    titleClick?: any
}>()
</script>
<template>
    <!--分组-->
    <ItemMenuView :menu="menu" :titleClick="titleClick">
        <!--当前分组下的子菜单-->
        <template #children v-if="menu.children.length > 0">
            <!--子级的子级-->
            <SubMenuView :menu="sub" v-for="(sub, index) in menu.children" :titleClick="titleClick" />
        </template>
    </ItemMenuView>
</template>