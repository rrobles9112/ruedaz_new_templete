import Vue from 'vue';
import VueRouter from 'vue-router';

import IndexOne from '../pages/indices/Index'
import IndexPromociones from "@/pages/indices/IndexPromociones";


Vue.use(VueRouter);


const routes = [
    {
        path: '/',
        name: 'IndexOne',
        component: IndexOne,
        meta: { title: 'Ruedaz - Movilidad Colaborativa'}
    },
    {
        path: '/promociones',
        name: 'IndexPromociones',
        component: IndexPromociones,
        meta: { title: 'Ruedaz - Movilidad Colaborativa'}
    },

];

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            const element = document.getElementById(to.meta.anchor);
            if (element) {
                return window.scrollTo({
                    top: element.offsetTop,
                    behavior: 'smooth'
                });
            }
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return {x: 0, y: 0}
        }
    }
});

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.title)
        document.title = to.meta.title;
    next();
});


export default router;
