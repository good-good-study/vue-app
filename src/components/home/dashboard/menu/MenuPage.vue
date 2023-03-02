<!--菜单-->
<script setup lang='ts'>
import Scaffold from '@/components/view/Scaffold.vue';
import MenuLayout from '../menu/MenuLayout.vue';

</script>

<template>
    <a-layout>
        <Scaffold title="级联菜单" :show-leading="false">
            <template #content>
                <div style="display: flex; flex-direction: row; padding-top: 8px;">
                    <MenuLayout></MenuLayout>
                </div>
            </template>
        </Scaffold>
    </a-layout>
</template>