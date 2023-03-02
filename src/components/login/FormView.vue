<template>
    <div style="display: flex; flex-direction: column; align-items: center;">

        <!--AntDesign表单-->
        <a-form :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }" autocomplete="off"
            @finish="onFinish" @finishFailed="onFinishFailed">
            <a-form-item label="用户名" name="account" :rules="[{ required: true, message: '请输入帐号!' }]">
                <a-input v-model:value="formState.account" />
            </a-form-item>

            <a-form-item label="验证码" name="code" :rules="[{ required: true, message: '请输入验证码!' }]">
                <a-input v-model:value="formState.code" />
            </a-form-item>

            <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
                <a-checkbox v-model:checked="formState.remember">记住验证码</a-checkbox>
            </a-form-item>

            <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <a-button type="primary" html-type="submit">登录</a-button>
            </a-form-item>
        </a-form>

        <br>
        <br>

        <!--按钮点击事件参数传参-->
        <h4>1.按钮点击事件参数传递:</h4>
        <div>
            <button @click="onInputDefault" style="margin-right: 16px;">按钮事件传惨</button>
            <button @click="onInput('Hello world!', $event)">按钮事件传惨</button>
        </div>
        <br />

        <!--输入框，初始化时自动获取输入焦点-->
        <p>
        <h4>2.输入框焦点控制</h4>
        <input ref="inputAccount" :placeholder="hint" class="input">
        </p>
        <!--输入框，点击按钮再获取焦点-->
        <p>
            <input ref="inputPassword" placeholder="一段输入框的文本" class="input">
            <button @click="onGetFocus" style="margin-left: 16px;">点击获取焦点</button>
        </p>
        <br />

        <!--表单输入绑定：Checkbox-->
        <p>
        <h4>3.表单输入绑定 v-model : Checkbox</h4>
        <label for="text">{{
        {
            status: response?.status,
            statusText: response?.statusText,
            body: response?.body,
            headers: response?.headers,
        }
        }}</label>
        <div style="display: flex; flex-direction: row;">
            <input type="checkbox" id="checkbox" v-model="checked" />
            <label for="checkbox" style="margin-left: 8px;">{{ checked }}</label>
        </div>
        </p>

        <!--表单输入绑定：Input-->
        <p>
        <h4>4.表单输入绑定 v-model : Input</h4>
        <input type="text" id="input-text" v-model="inputText" class="input" />
        <label for="text">{{ inputText }}</label>
        </p>

        <button @click="show = !show">Toggle</button>
        <Transition>
            <p v-if="show">hello</p>
        </Transition>

        <!--路由跳转-->
        <h4>3.路由跳转</h4>
        <p>
            <!--使用 router-link 组件进行导航 -->
            <!--通过传递 `to` 来指定链接 -->
            <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
            <router-link to="/">首页</router-link>
            <router-link to="/rank">排行榜</router-link>
        </p>

        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>

        <br />
    </div>
</template>

<style scoped>
/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

button {
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 2px;
    padding-bottom: 2px;
    border-radius: 4px;
    border-width: 1px;
    border-color: red;
    border-style: solid;
}

button:hover {
    background-color: gainsboro;
}

.input {
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 8px;
    border-radius: 4px;
    border-color: green;
    border-width: 2px;
    border-style: dashed;
}

.input:hover {
    border-radius: 4px;
    border-color: red;
    border-width: 2px;
    border-style: dashed;
}
</style>

<script lang="ts">
import { defineComponent, reactive, ref, onMounted, onUnmounted, watchEffect, watch } from 'vue';
import { loginState } from '@/service/loginstate';

interface FormState {
    account: string;
    code: string;
    remember: boolean;
}

export default defineComponent({
    emits: ['onSuccess', 'onFailed'],
    props: {
        account: { type: String, required: true },
        password: String,
    },

    setup(props, { emit }) {
        const onFinish = (values: any) => {
            const params = {
                account: values.account,
                password: values.code,
                nickname: values,
            };
            loginState.onLogin(params)
            emit('onSuccess', params)
        };
        const onFinishFailed = (errorInfo: any) => {
            emit('onFailed', errorInfo)
        };

        // 存储用户名输入框的实例引用，在组件被挂载时，主动获取输入框焦点
        const inputAccount = ref<HTMLInputElement>();
        const inputPassword = ref<HTMLInputElement>();
        const hint = ref('')
        const checked = ref(false)
        const inputText = ref('呵呵呵')
        const response = ref<Response | undefined>()
        const show = ref(false)

        const onInputDefault = (event: Event) => {
            console.log(event.target)
            alert(`默认点击事件，自动加的参数：${event.target}`)
        }

        const onInput = (args: any, event: Event) => {
            console.log(args + event)
            alert(`自定义了一个参数：${args}`)
        }
        const onGetFocus = () => {
            inputPassword.value?.focus()
        }

        const formState = reactive<FormState>({
            account: "",
            code: "",
            remember: true,
        });
        // 组件挂载后，获取焦点。
        onMounted(() => {
            hint.value = '初始化后自动获取焦点'
            inputAccount.value?.focus();
        });
        watchEffect(() => {
            if (inputAccount.value) {
                console.log("获取到了组件的引用");
                console.log(inputAccount.value.placeholder);
            }
            else {
                console.log("组件还没有挂载");
            }
        });

        // 监听复选框的状态改变（直接监听一个响应式数据的变化）
        watch(checked, () => {
            console.log(checked.value)
        })
        watch(checked, async (newValue, oldValue) => {
            try {
                const resp = await fetch('192.168.0.105:2023/')
                console.log(resp)
                response.value = resp
            } catch (error) {
                response.value = undefined
            }
        })

        // 页面挂载
        onMounted(() => {
            console.log('onMounted')
        })
        // 页面销毁
        onUnmounted(() => {
            console.log('onUnmounted');
        })

        return {
            formState,
            onFinish,
            onFinishFailed,
            inputAccount,
            inputPassword,
            onInputDefault,
            onInput,
            hint,
            onGetFocus,
            checked,
            inputText,
            response,
            show,
        };
    },
});
</script>
  
  