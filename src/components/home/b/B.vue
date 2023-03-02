<script setup lang='ts'>
import Scaffold from '@/components/view/Scaffold.vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute()
const title = ref<string>((route.meta?.title ?? '') as string)


</script>

<template>
    <Scaffold :title="title" background-color="white">
        <template #content>
            <span>{{ title }}</span>
        </template>
    </Scaffold>
</template>