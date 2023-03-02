<template>
    <a-space :size="12">
        <a-image :width="200"
            :src="`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`">
            <template #placeholder>
                <a-image
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                    :width="200" :preview="false" />
            </template>
        </a-image>
        <a-button type="primary" @click="random = Date.now()">reload</a-button>
    </a-space>

    <a-image-preview-group>
        <a-image :width="100"
            :src="`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`">
            <template #placeholder>
                <a-image
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                    :width="100" :preview="true" />
            </template>
        </a-image>
        <a-image :width="100"
            :src="`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`">
            <template #placeholder>
                <a-image
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                    :width="100" :preview="true" />
            </template>
        </a-image>
        <a-space :size="12">
            <a-image :width="100"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200">
                <template #placeholder>
                    <a-image :preview="true" :width="100" />
                </template>
            </a-image>
        </a-space>
    </a-image-preview-group>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue';
export default defineComponent({
    setup() {
        return {
            random: ref(),
        };
    },
});
</script>
  
  