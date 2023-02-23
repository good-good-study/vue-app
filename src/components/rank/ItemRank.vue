<!--排行榜列表Item-->
<script setup lang='ts'>
import type { Rank } from './model'

const props = defineProps<{
    index: number,
    model: Rank
}>()

// 前三名需要显示对应的图片
const image = props.index < 3 ? `@/assets/rank${props.index}.png`.toString : null

</script>

<template>
    <div class="item">
        <!--排行版前三名icon-->
        <img v-if="index == 1" class='item-rank-image' src="@/assets/rank1.png">
        <img v-else-if="index == 2" class='item-rank-image' src="@/assets/rank2.png">
        <img v-else-if="index == 3" class='item-rank-image' src="@/assets/rank3.png">
        <!--排行榜顺序-->
        <span v-else class="item-rank">{{ index }}</span>

        <!--用户信息-->
        <div>
            <img class="item-avatar" :src="model.avatar" alt="avatar">
            <span class="item-name">{{ model.name }}</span>
        </div>

        <!--邀请人数-->
        <span class="item-invite">{{ model.invite }}</span>
    </div>
</template>

<style scoped>
.item {
    display: flex;
    flex-direction: row;
    margin-top: 8px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
}

.item-rank {
    width: 100px;
    color: black;
    text-align: center;
    font-weight: 500;
    font-size: 14px;
}

.item-rank-image {
    width: 100px;
    height: 24px;
    object-fit: contain;

    /* border-style: dotted;
    border-width: 2px;
    border-color: red; */
}

.item-avatar {
    width: 24px;
    height: 24px;
    margin-left: 24px;
    object-fit: cover;
    border-radius: 50px;
}

.item-name {
    color: black;
    font-size: 14px;
    padding-left: 8px;
    overflow: hidden;
    max-width: 100px;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.item-invite {
    flex: 1;
    text-align: end;
    color: black;
    font-weight: 500;
    font-size: 18px;
    padding-right: 16px;
}
</style>