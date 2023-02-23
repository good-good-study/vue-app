<!--排行榜列表数据-->
<script setup lang='ts'>
import ItemRank from './ItemRank.vue';
import type { Rank } from './model';

defineProps<{
    list?: Rank[]
}>()

</script>

<template>
    <div class="container">
        <!--列表标题-->
        <div class="list-title-container">
            <span class="list-title-item">排名</span>
            <span class="list-title-item">用户名</span>
            <span class="list-title-item-max">邀请人数</span>
        </div>

        <!--列表-->
        <div class="list" v-if="list">
            <ItemRank :index="list.indexOf(model) + 1" :model="model" v-for="model in list" />
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    padding-top: 16px;
    margin-top: -12px;
}

.list-title-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #f4f4f4;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-left: 12px;
    margin-right: 12px;
    border-radius: 2px;
}

.list-title-item {
    color: #86909C;
    width: 100px;
    border-width: 2px;
    text-align: center;
}

.list-title-item-max {
    flex: 1;
    align-self: flex-end;
    text-align: end;
    color: #86909C;
    padding-right: 16px;
}

.list {
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    padding-bottom: 48px;
}
</style>