<script setup lang='ts'>
import { ref } from 'vue'

export interface Tab {
    label: string;
    badge?: number;
}

const props = defineProps({
    tabs: Array<Tab>,
    marginRight: Number,
    index: { type: Number, default: 0 },
})

const emits = defineEmits<{
    (event: 'onTab', index: number): void,// 选中Tab
    (event: 'onReTab', index: number): void,// 已选中状态下，再次选中此Tab
}>()

// 当前选中的索引
const tabIndex = ref(props.index)

// const translateX = ref(0)

// Tab点击事件
function onTab(index: number, event: Event) {
    if (tabIndex.value == index) {
        emits('onReTab', index)
        return
    }
    tabIndex.value = index
    emits('onTab', index)
}

</script>

<template>
    <div id='tab' class="layout" :style="{ marginRight: marginRight + 'px' }">
        <div :class="{ tab, tabSelect: tabIndex == index }" v-for="(tab, index) in tabs" :key="index"
            @click="onTab(index, $event)">
            <span>
                {{ tab.label }}
            </span>
            <a-badge :count="tab.badge?.toFixed()" :overflow-count="999" :offset="[-4, -24]" :key="tab.label"></a-badge>
        </div>
    </div>
</template>

<style scoped>
.layout {
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow-x: scroll;
    scroll-behavior: smooth;
    animation-duration: 200ms;
    border-radius: 50px;
    padding-left: 16px;
    padding-right: 16px;
}

.tab {
    padding-top: 16px;
    padding-bottom: 16px;
    padding-right: 8px;
    padding-left: 8px;
    color: black;
    font-size: 16px;
    font-weight: 500;
    margin-left: 8px;
    margin-right: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.tabSelect {
    color: white;
    border-radius: 8px;
    background-color: rgb(97, 97, 213);
}

.tab:hover {
    transition-duration: 200ms;
    background-color: rgb(228, 219, 206);
    border-radius: 8px;
}

.tabSelect:hover {
    color: white;
    border-radius: 8px;
    background-color: rgb(97, 97, 213);
}
</style>