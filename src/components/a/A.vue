<!--A-->
<script setup lang='ts'>
import { h } from 'vue';
</script>
<template>
    <span>A</span>
</template>

<!-- <template>
    <div class="page">
        <img src="@/assets/rank_bg.png" alt="header image">
        <div class="container">
            排行榜分类
            <div class="tab">
                <button class="tab-item-select">每日榜单</button>
                <button class="tab-item">每周榜单</button>
            </div>
            列表标题
            <div class="list-title-container">
                <span class="list-title-item">排名</span>
                <span class="list-title-item">用户名</span>
                <span class="list-title-item-max">邀请人数</span>
            </div>
            列表

            <div class="list">
                <div class="list-item" v-for="index in 8">
                    <template v-if="index == 1">
                        <img class='list-item-image' src="@/assets/rank1.png">
                    </template>

                    <template v-if="index == 2">
                        <img class='list-item-image' src="@/assets/rank2.png">
                    </template>

                    <template v-if="index == 3">
                        <img class='list-item-image' src="@/assets/rank3.png">
                    </template>

                    <template v-if="index > 3">
                        <span class="list-item-rank">{{ index }}</span>
                    </template>

                    <span class="list-item-name">玫瑰少年</span>

                    <span class="list-item-count">{{ 199 }}</span>
                </div>
            </div>
        </div>
    </div>
</template> -->

<style scoped>
.page {
    display: flex;
    flex-direction: column;
    background-color: white;
}

.container {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    padding-top: 16px;
    margin-top: -12px;
}

.tab {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

.tab-item {
    color: #1D2129;
    border: none;
    background-color: transparent;
    font-size: 16px;
}

.tab-item-select {
    color: #1D2129;
    border: none;
    background-color: transparent;
    font-size: 16px;
    font-weight: 500;
}

.list-title-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #f4f4f4;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 16px;
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

.list-item {
    display: flex;
    flex-direction: row;
    margin-top: 8px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
}


.list-item-rank {
    width: 100px;
    color: black;
    text-align: center;
    font-weight: 500;
    font-size: 14px;
}

.list-item-name {
    color: black;
    width: 200px;
    font-size: 14px;
    padding-left: 24px;
}

.list-item-count {
    flex: 1;
    text-align: end;
    color: black;
    font-weight: 500;
    font-size: 18px;
    padding-right: 16px;
}

.list-item-image {
    width: 100px;
    height: 24px;
    object-fit: contain;

    /* border-style: dotted;
    border-width: 2px;
    border-color: red; */
}
</style>