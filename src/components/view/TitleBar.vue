<!--标题栏：返回箭头+标题-->
<script setup lang='ts'>

defineProps({
    title: { type: String, required: false },
    centerTitle: { type: Boolean, default: true },
    showLeading: { type: Boolean, default: true },
})

defineEmits(['onLeading'])

</script>

<template>
    <main :class="{ appbar: true, centerAppbar: centerTitle }">
        <!--返回按钮-->
        <img v-if="showLeading" class="arrow" @click="$emit('onLeading')" src="@/assets/navi_back.png" alt="arrow back">
        <!--标题-->
        <span :class="{ title: !centerTitle, titleCenter: centerTitle }">{{ title }}</span>
    </main>
</template>

<!--AppBar配置可以让标题悬浮在页面内容之上，不跟随列表滑动出屏幕
{
    position: sticky;
    top: 0px;
    z-index: 1;
}
-->
<style scoped>
.appbar {
    display: flex;
    flex-direction: row;
    width: 100vw;
    align-items: center;
    background-color: white;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 16px;
    padding-bottom: 16px;
    box-shadow: 0px 0px 1px gray;
}

.arrow {
    width: 24px;
    height: 24px;
}

.arrow:hover {
    background-color: gainsboro;
    border-radius: 50px;
    transform: scale(1.24);
    transition: 200ms;
}

.title {
    color: black;
    font-size: 16px;
    font-weight: 500;
}

.titleCenter {
    flex: 1;
    color: black;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
}
</style>