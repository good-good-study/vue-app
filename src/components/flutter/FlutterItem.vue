<!--Flutter图片流页面-->
<script setup lang="ts">
import type { PointerEventsProperty } from 'csstype';
import { onMounted, onUnmounted } from 'vue'

const props = defineProps<{
    index: number
    label: string,
    image?: string,
}>()

onMounted(() => {
    console.log(`${props.index} mounted!`);
})

onUnmounted(() => {
    console.log(`${props.index} onUnmounted!`);
})

function callback(event: PointerEventsProperty) {
    console.log(`${event}`);
}

</script>

<template>
    <div class="item" @click="callback">
        <span class='label'>{{ label }}</span>
        <img class='image' :src="image" alt="item image">
    </div>
</template>

<style scoped>
.item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
}

.label {
    font-size: 14px;
    font-weight: 500;
    padding: 8px;
}

.image {
    width: 200px;
    object-fit: contain;
}

.button {
    border-radius: 8px;
    border-style: none;
    border-color: black;
    background-color: gainsboro;
    color: black;
    padding: 24px;
    margin-top: 2px;
}
</style>