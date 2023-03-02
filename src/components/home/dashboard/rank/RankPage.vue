<!--排行榜-->
<script setup lang='ts'>
import TabLayout from './TabLayout.vue'
import RankListView from './RankListView.vue';
import { rankDays, rankWeeks } from './model'
defineProps<{
    stickyTop?: string,
}>()
</script>

<template>
    <a-layout>
        <div class="rankPage">
            <img class="header-image" src="@/assets/rank_bg.png" alt="header image">
            <KeepAlive>
                <TabLayout>
                    <!--每日-->
                    <template #list-view-day>
                        <RankListView :list="rankDays" :sticky-top="stickyTop" />
                    </template>
                    <!--每周-->
                    <template #list-view-week>
                        <RankListView :list="rankWeeks" />
                    </template>
                </TabLayout>
            </KeepAlive>
        </div>
    </a-layout>
</template>

<style scoped>
.rankPage {
    display: flex;
    flex-direction: column;
    background-color: white;
    z-index: 0;
}

.header-image {
    max-height: 300px;
    /* object-fit: cover; */
}
</style>