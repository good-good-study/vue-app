<!--计数器-->
<script setup lang="ts">
import FlutterItem from "./FlutterItem.vue";
import FlutterSlot from "./FlutterSlot.vue";
const data = [
    {
        label: 'Flutter 3 正式发布',
        image: 'https://files.flutter-io.cn/flutter-cn/landing/images/stacking_dash_blog_image.width-635.png',
    },
    {
        label: 'Dart 2.17 正式发布',
        image: 'https://files.flutter-io.cn/flutter-cn/landing/images/dart_image.width-635.png'
    }
    ,
    {
        label: 'Flutter 3 更新详解',
        image: 'https://files.flutter-io.cn/flutter-cn/landing/images/Dash_Phone_Games_v04.width-635.png'
    },
    {
        label: '一起看 I/O | Flutter 休闲游戏工具包发布',
        image: 'https://files.flutter-io.cn/flutter-cn/landing/images/pinball_blog_image.width-635.png'
    },
    {
        label: '使用 Flutter 与 Firebase 制作弹球游戏',
        image: 'https://files.flutter-io.cn/flutter-cn/landing/images/windows_flutter.width-635.jpg'
    },
    {
        label: 'Flutter Windows 桌面端支持进入稳定版',
        image: 'https://files.flutter-io.cn/flutter-cn/landing/images/flutter_roadmap_2022.width-635.png'
    },
    {
        label: 'Flutter 2022 产品路线图发布',
        image: 'https://files.flutter-io.cn/flutter-cn/landing/f3deaf5ac8cba199e8e8.png'
    },
    {
        label: 'Flutter Forward 活动日程安排',
        image: 'https://files.flutter-io.cn/flutter-cn/landing/b6c333414eac6b599a1e.png'
    }
]

const list = [...data, ...data, ...data]

</script>

<template>
    <FlutterSlot title="为所有屏幕创造精彩">
        <!--图片流-->
        <template #imageFlow>
            <div class='grid'>
                <FlutterItem v-for="model in list" :index="list.indexOf(model)" :label="model.label" :image="model.image" />
            </div>
        </template>
    </FlutterSlot>
</template>


<style scoped>
.grid {
    display: grid;
    margin-top: 24px;
    grid-template-columns: 200px 200px 200px;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    padding-right: 24px;
}
</style>