<!--排行榜-->
<script setup lang='ts'>
import ItemRank from './ItemRank.vue';
import TabLayout from './TabLayout.vue'
import RankListView from './RankListView.vue';
import { rankDays, rankWeeks } from './model'
</script>

<template>
    <div class="page">
        <img class="header-image" src="@/assets/rank_bg.png" alt="header image">
        <TabLayout>
            <!--每日-->
            <template #list-view-day>
                <RankListView :list="rankDays" />
            </template>
            <!--每周-->
            <template #list-view-week>
                <RankListView :list="rankWeeks" />
            </template>
        </TabLayout>
    </div>
</template>

<style scoped>
.page {
    display: flex;
    flex-direction: column;
    background-color: white;
}

.header-image {
    max-height: 300px;
    /* object-fit: cover; */
}
</style>