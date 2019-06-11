import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
    mode: "hash",
    linkActiveClass: "active",
    routes: [
        {
            path: "/",
            redirect:'/index'
        },
        {
            path: "/index",
            meta: {
                title: "报名页"
            },
            component: () =>
                import ("@/components/mail.vue"),
        },

        {
            path: "/success",
            meta: {
                title: "报名成功"
            },
            component: () =>
                import ("@/components/success.vue"),
        },
        
    ]
});