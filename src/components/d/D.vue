<script setup lang="ts">
import { ref } from "vue";
import CommonView from "../Common.vue";

const title = ref('D')
const count = ref(0)

</script>


<template>
    <CommonView backgroundColor="false">
        <button @click="count++">{{ title }} : clicked me {{ count }} times</button>
    </CommonView>
</template>