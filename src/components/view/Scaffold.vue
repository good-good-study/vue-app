<script setup lang="ts">
import TitleBar from './TitleBar.vue';
import { useRouter } from 'vue-router';

const props = defineProps(
    {
        title: String,
        centerTitle: { type: Boolean, default: true },
        showLeading: { type: Boolean, default: false },
        backgroundColor: { type: String, default: "#F2F2F2" },
        padding: String,
        onLeading: { type: Function }
    }
)

// 路由实例
const Navigator = useRouter()

// 如果调用者提供了`onLeading`，则自行处理返回事件
// 默认返回上一级路由。
function onLeading() {
    if (props.onLeading) {
        props.onLeading()
    } else {
        Navigator.back()
    }
}

</script>

<template>
    <div class="scaffold">
        <TitleBar :title="title" :centerTitle="centerTitle" :showLeading="showLeading" @onLeading="onLeading" />
        <slot name="content"></slot>
    </div>
</template>

<style>
.scaffold {
    /* width: 100vW; */
    height: 100vH;
    display: flex;
    flex-direction: column;
    padding: v-bind(padding);
    background-color: v-bind(backgroundColor);
    z-index: none;
}
</style>