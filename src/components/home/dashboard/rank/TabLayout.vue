<script lang="ts">

import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        return {
            activeKey: ref('1'),
        };
    },
});

</script>  

<template>
    <a-tabs class="tablayout" v-model:activeKey="activeKey" centered :tabBarGutter='100'>
        <a-tab-pane key="1" tab="每日榜单">
            <slot name="list-view-day">first page</slot>
        </a-tab-pane>
        <a-tab-pane key="2" tab="每周榜单">
            <slot name="list-view-week">secondary page</slot>
        </a-tab-pane>
    </a-tabs>
</template>

<style scoped>
.tablayout {
    overflow: visible;
    background-color: white;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-top: -12px;
}
</style>