import Vue from 'vue';
import VueRouter from 'vue-router';

import IndexOne from '../pages/indices/Index'
import IndexTwo from '../pages/indices/IndexTwo.vue';
import IndexThree from '../pages/indices/IndexThree.vue';
import IndexFour from '../pages/indices/IndexFour.vue';
import IndexFive from '../pages/indices/IndexFive.vue';
import IndexSix from '../pages/indices/IndexSix.vue';
import IndexSeven from '../pages/indices/IndexSeven.vue';
import IndexEight from '../pages/indices/IndexEight.vue';
import IndexNine from '../pages/indices/IndexNine.vue';
import IndexTen from '../pages/indices/IndexTen.vue';
import SaleInvoice from '../pages/SaleInvoice';
import ContactUs from '../pages/ContactUs';
import AboutUs from '../pages/AboutUs';
import BlogGridPage from '../pages/blogs/BlogGridPage'
import LargeBlogPage from '../pages/blogs/LargeBlogPage'
import BlogLeftSideBarPage from '../pages/blogs/BlogLeftSideBarPage';
import BlogRightSideBarPage from '../pages/blogs/BlogRightSideBarPage';
import BlogDetailsLeftSideBarPage from '../pages/blogs/BlogDetailsLeftSideBarPage';
import BlogDetailsRightSideBarPage from '../pages/blogs/BlogDetailsRightSideBarPage';
import TeamsPage from '../pages/teams/TeamsPage';
import MemberProfilePage from '../pages/teams/MemberProfilePage';
import FaqPage from '../pages/utilities/FaqPage';
import Page404 from '../pages/utilities/Page404';
import ComingSoonPage from '../pages/utilities/ComingSoonPage';
import ThankYouPage from '../pages/utilities/ThankYouPage';
import DownloadPage from '../pages/utilities/DownloadPage';
import ReviewsPage from '../pages/utilities/ReviewsPage';
import LoginPage from '../pages/auth/LoginPage';
import SignUpPage from '../pages/auth/SignupPage';
import ResetPasswordPage from '../pages/auth/ResetPasswordPage';

Vue.use(VueRouter);


const routes = [
    {
        path: '/',
        name: 'IndexOne',
        component: IndexOne,
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
