<script setup lang="ts">
import type { StyleValue } from 'vue';

defineProps<{
    backgroundColor?: String
}>()

</script>

<template>
    <div class="page" style="background-color: blueviolet;">
        <slot name="content"></slot>
    </div>
</template>

<style scoped>
.page {
    width: 100vW;
    height: 100vH;
    display: flex;
    flex-direction: column;

}
</style>