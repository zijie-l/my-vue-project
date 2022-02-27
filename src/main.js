import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import Antd from 'ant-design-vue'// 引入Ant Design Vue组件
//import 'ant-design-vue/dist/antd.css';
import { DatePicker } from 'ant-design-vue';

const app = createApp(App);

app.use(router)
app.use(DatePicker);

app.mount('#app')


router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})
