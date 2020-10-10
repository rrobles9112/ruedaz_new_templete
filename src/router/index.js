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
        meta: { title: 'Home 1 - Apdash - App Landing Page Template'}
    },
    {
        path: '/invoice',
        name: 'Invoice',
        component: SaleInvoice,
        meta: { title: 'Sales Invoice - Apdash - App Landing Page Template'}
    },
    {
        path: '/contact-us',
        name: 'Contact Us',
        component: ContactUs,
        meta: { title: 'Contact Us - Apdash - App Landing Page Template'}
    },
    {
        path: '/about-us',
        name: 'About Us',
        component: AboutUs,
        meta: { title: 'About Us - Apdash - App Landing Page Template'}
    },
    {
        path: '/blog-grid',
        name: 'Blog Grid',
        component: BlogGridPage,
        meta: { title: 'Blogs - Apdash - App Landing Page Template'}
    },
    {
        path: '/blog-large',
        name: 'Blog Large',
        component: LargeBlogPage,
        meta: { title: 'Blogs - Apdash - App Landing Page Template'}
    },
    {
        path: '/blog-left-sidebar',
        name: 'Blog Left Side Bar',
        component: BlogLeftSideBarPage,
        meta: { title: 'Blogs - Apdash - App Landing Page Template'}
    },
    {
        path: '/blog-right-sidebar',
        name: 'Blog Right Side Bar',
        component: BlogRightSideBarPage,
        meta: { title: 'Blogs - Apdash - App Landing Page Template'}
    },
    {
        path: '/blog-details-left-sidebar',
        name: 'Blog Details Left Side Bar',
        component: BlogDetailsLeftSideBarPage,
        meta: { title: 'Blog Details - Apdash - App Landing Page Template'}
    },
    {
        path: '/blog-details-right-sidebar',
        name: 'Blog Details Right Side Bar',
        component: BlogDetailsRightSideBarPage,
        meta: { title: 'Blog Details - Apdash - App Landing Page Template'}
    },
    {
        path: '/team',
        name: 'Team',
        component: TeamsPage,
        meta: { title: 'Team - Apdash - App Landing Page Template'}
    },
    {
        path: '/profile',
        name: 'Profile',
        component: MemberProfilePage,
        meta: { title: 'Profile - Apdash - App Landing Page Template'}
    },
    {
        path: '/faq',
        name: 'Faq',
        component: FaqPage,
        meta: { title: 'FAQ - Apdash - App Landing Page Template'}
    },
    {
        path: '/404',
        name: '404',
        component: Page404,
        meta: { title: 'Not Found - Apdash - App Landing Page Template'}
    },
    {
        path: '/coming-soon',
        name: 'coming-soon',
        component: ComingSoonPage,
        meta: { title: 'Coming Soon - Apdash - App Landing Page Template'}
    },
    {
        path: '/thank-you',
        name: 'thank-you',
        component: ThankYouPage,
        meta: { title: 'Thank You - Apdash - App Landing Page Template'}
    },
    {
        path: '/download',
        name: 'download',
        component: DownloadPage,
        meta: { title: 'Download - Apdash - App Landing Page Template'}
    },
    {
        path: '/review',
        name: 'review',
        component: ReviewsPage,
        meta: { title: 'Reviews - Apdash - App Landing Page Template'}
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage,
        meta: { title: 'Login - Apdash - App Landing Page Template'}
    },
    {
        path: '/sign-up',
        name: 'sign-up',
        component: SignUpPage,
        meta: { title: 'Sign Up - Apdash - App Landing Page Template'}
    },
    {
        path: '/reset',
        name: 'reset',
        component: ResetPasswordPage,
        meta: { title: 'Reset Password - Apdash - App Landing Page Template'}
    },
    {
        path: '/index-2',
        name: 'index-2',
        component: IndexTwo,
        meta: { title: 'Home 2 - Apdash - App Landing Page Template'}
    },
    {
        path: '/index-3',
        name: 'index-3',
        component: IndexThree,
        meta: { title: 'Home 3 - Apdash - App Landing Page Template'}
    },
    {
        path: '/index-4',
        name: 'index-4',
        component: IndexFour,
        meta: { title: 'Home 4 - Apdash - App Landing Page Template'}
    },
    {
        path: '/index-5',
        name: 'index-5',
        component: IndexFive,
        meta: { title: 'Home 5 - Apdash - App Landing Page Template'}
    },
    {
        path: '/index-6',
        name: 'index-6',
        component: IndexSix,
        meta: { title: 'Home 6 - Apdash - App Landing Page Template'}
    },
    {
        path: '/index-7',
        name: 'index-7',
        component: IndexSeven,
        meta: { title: 'Home 7 - Apdash - App Landing Page Template'}
    },
    {
        path: '/index-8',
        name: 'index-8',
        component: IndexEight,
        meta: { title: 'Home 8 - Apdash - App Landing Page Template'}
    },
    {
        path: '/index-9',
        name: 'index-9',
        component: IndexNine,
        meta: { title: 'Home 9 - Apdash - App Landing Page Template'}
    },
    {
        path: '/index-10',
        name: 'index-10',
        component: IndexTen,
        meta: { title: 'Home 10 - Apdash - App Landing Page Template'}
    },
    {
        path: '/about',
        name: 'IndexOne#about',
        component: IndexOne,
        meta: { anchor: 'about'}
    },
    {
        path: '/features',
        name: 'IndexOne#features',
        component: IndexOne,
        meta: { anchor: 'features'}
    },
    {
        path: '/screenshots',
        name: 'IndexOne#screenshots',
        component: IndexOne,
        meta: { anchor: 'screenshots'}
    },
    {
        path: '/process',
        name: 'IndexOne#process',
        component: IndexOne,
        meta: { anchor: 'process'}
    },
    {
        path: '/pricing',
        name: 'IndexOne#pricing',
        component: IndexOne,
        meta: { anchor: 'pricing'}
    },
    {
        path: '/contact',
        name: 'IndexOne#contact',
        component: IndexOne,
        meta: { anchor: 'contact'}
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
