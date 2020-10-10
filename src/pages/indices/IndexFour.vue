<template>
    <div>
        <nav-bar :colored-logo="true" />
        <div class="main">
            <banner />
            <promo />
            <offerings :is-gray="true"/>
            <features />
            <platform />
            <screenshots :padding-top="false" />
            <work-process :is-gray="true" />
            <price />
            <counter-section />
            <faq :is-gray="true" />
            <team />
            <testimonial />
            <blog :is-gray="true" />
            <contact />

        </div>
        <site-footer :show-subscribe="true" />
        <copyright />
    </div>
</template>

<script>
    import NavBar from "../../views/commons/NavBar.vue";
    import Banner from "../../views/index-four/Banner.vue";
    import Offerings from "../../views/about-us/Offerings.vue";
    import Promo from "../../views/index-two/Promo";
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
    import CounterSection from "../../views/index-one/CounterSection";
    import Team from "../../views/commons/sections/Team";


    export default {
        name: "IndexFour",
        components: {
            NavBar,
            Banner,
            Promo,
            Offerings,


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
            CounterSection,
            Team
        },
    };
</script>