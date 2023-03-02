<!--TypeScript语法-->
<script setup lang="ts">
import Scaffold from "@/components/view/Scaffold.vue";
import { ref, reactive } from "vue";
import type { User } from "@/service/loginstate";

let name: string = 'xt.sun'
let start = 2018
let end = 2023
let years = end - start;

// reactive数据类型是对象或者其他的引用类型，不能是基本数据类型
const reactiveUser = reactive<User>({
    account: '17612109899',
    password: '666666',
})

// ref数据类型是任意数据类型
const refUser = ref<User>({
    account: '17612109899',
    password: '666666',
})

// console.log(reactiveUser)
// console.log(refUser)

console.log(typeof refUser.value + ' : ' + refUser.value.account);

const list: string[] = ['a', 'b', 'c', 'd']
for (var item in list) {
    console.log(item)
}

</script>

<template>
    <a-layout>
        <Scaffold title="TypeScript语法" :showLeading="false">
            <template #content>
                <div class="container">
                    <span>
                        <span class="highlight">{{ name }}</span>
                        ,您好，今年是
                        <span class="highlight">`Flutter`</span>
                        发布的第 {{ years }}年
                    </span>
                    <br>
                    <span>最新的稳定版是
                        <span class="highlight">
                            `[✓] Flutter (Channel stable, 3.7.3, on macOS 12.6.1 21G217 darwin-arm64, locale
                            zh-Hans-CN)`
                        </span>
                    </span>
                </div>
            </template>
        </Scaffold>
    </a-layout>
</template>

<style scoped>
.container {
    display: flex;
    padding: 24px;
    flex-direction: column;
}

.highlight {
    color: red;
    font-weight: 500;
    padding-left: 4px;
    padding-right: 4px;
    font-size: 16px;
}
</style>