import { reactive, ref, watch } from "vue";

export class User {
  account?: string | undefined;
  password?: string | undefined;
  nickname?: string | undefined;
}

export interface LoginState {
  user?: User | null | undefined;
  onLogin(user: User): LoginState;
  onLogout(): boolean;
}

export const loginState = reactive<LoginState>({
  onLogin(user: User) {
    // 登录成功,保存用户信息
    this.user = user;
    return this;
  },

  onLogout() {
    // 登出
    loginState.user = undefined;
    return true;
  },
});


// 是否登录
const isLogin = ref(loginState.user != null)

// 登录用户改变时，更新登录信息
watch(loginState, (newState) => {
  isLogin.value = newState.user != null
})

export default isLogin

abstract class LoginStateClass {
  user?: User | null | undefined;
  abstract onLogin(user: User): LoginStateClass;
  abstract onLogout(): boolean;
}

const loginStateClass = reactive<LoginStateClass>({
  user: {
    account: "admin",
    password: "admin",
    nickname: "xt.sun",
  },
  onLogin(user) {
    this.user = user;
    return this;
  },
  onLogout() {
    this.user = undefined;
    return true;
  },
});
