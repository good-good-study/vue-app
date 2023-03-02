<!--Page Slot-->
<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>
<template>
    <div class="page">
        <!--标题,固定格式-->
        <span class="title">{{ title }}</span>
        <!---图片流-->
        <slot name="imageFlow"></slot>
    </div>
</template>

<style scoped>
.page {
    width: 100vw;
    height: 100vH;
    display: flex;
    flex-direction: column;
    padding-left: 24px;
    padding-top: 24px;
    background-color: blanchedalmond;
}

.title {
    color: black;
    font-size: 22px;
    font-weight: 500;
}
</style>