<!--级联菜单-->
<script setup lang='ts'>
import MenuView from './MenuView.vue';
import type { Menu } from './model'
import { menus } from './model'

</script>
<template>
    <div class="menu-layout">
        <a-menu id="buff-menu" v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" style="width: 256px"
            mode="inline" @click="handleClick">
            <MenuView :menu="menu" v-for="(menu, index) in menus" />
        </a-menu>
    </div>
</template>

<style scoped>
.menu-layout {
    display: flex;
    flex-direction: column;
    margin-left: 24px;
}
</style>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { MailOutlined, QqOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue';
export default defineComponent({
    components: {
        MailOutlined,
        QqOutlined,
        AppstoreOutlined,
        SettingOutlined,
    },
    setup() {
        const selectedKeys = ref<string[]>(['1']);
        const openKeys = ref<string[]>(['sub1']);
        const handleClick: MenuProps['onClick'] = e => {
            console.log('click', e);
        };
        const titleClick = (e: Event) => {
            console.log('titleClick', e);
        };
        watch(
            () => openKeys,
            val => {
                console.log('openKeys', val);
            },
        );
        return {
            selectedKeys,
            openKeys,

            handleClick,
            titleClick,
        };
    },
});
</script>