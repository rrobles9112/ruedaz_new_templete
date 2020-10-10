<template>
    <div>
        <nav-bar />
        <div class="main">
            <banner />
            <promo :show-desc="true" />
            <about :is-gray="true" />
            <features />
            <platform />
            <screenshots :padding-top="false" />
            <work-process :is-gray="true" />
            <price />
            <testimonial />
            <faq :is-gray="true" />
            <team />
            <blog :is-gray="true" />
            <contact />

        </div>
        <site-footer :show-subscribe="true" />
        <copyright />

    </div>
</template>

<script>
    import NavBar from "../../views/commons/NavBar.vue";
    import Banner from "../../views/index-five/Banner.vue";
    import About from "../../views/index-three/About.vue";

    import Promo from "../../views/index-one/Promo";
    import Platform from "../../views/index-two/Platform";
    import Features from "../../views/index-four/Features";
    import Price from "../../views/index-one/Price";
    import Screenshots from "../../views/index-one/Screenshots";
    import WorkProcess from "../../views/commons/sections/WorkProcess";
    import SiteFooter from "../../views/commons/SiteFooter.vue";
    import Copyright from "../../views/commons/Copyright.vue";
    import Faq from "../../views/index-one/Faq";
    import Testimonial from "../../views/index-one/Testimonial";
    import Contact from "../../views/index-one/Contact";
    import Blog from "../../views/index-one/Blog";

    import Team from "../../views/commons/sections/Team";


    export default {
        name: "IndexFive",
        components: {
            NavBar,
            Banner,
            Promo,
            About,
            Platform,
            Screenshots,
            Features,
            WorkProcess,
            Price,
            SiteFooter,
            Copyright,
            Faq,
            Testimonial,
            Blog,
            Contact,
            Team
        },
    };
</script>