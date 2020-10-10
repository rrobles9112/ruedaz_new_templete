<template>
    <div>
        <nav-bar />
        <div class="main">
            <banner />
            <about />
            <offerings :is-gray="true" />
            <features />
            <platform />
            <screenshots :padding-top="false" />
            <work-process :is-gray="true"/>
            <price />
            <testimonial />
            <faq />
            <team :is-gray="true" />
            <contact />
            <blog :is-gray="true"/>
            <customers />

        </div>
        <site-footer :show-subscribe="true" />
        <copyright />
    </div>
</template>

<script>
    import NavBar from "../../views/commons/NavBar.vue";
    import Banner from "../../views/index-seven/Banner.vue";
    import About from "../../views/index-seven/About.vue";

    import Platform from "../../views/index-two/Platform";
    import Features from "../../views/index-one/Features";
    import Price from "../../views/index-one/Price";
    import Screenshots from "../../views/index-one/Screenshots";
    import WorkProcess from "../../views/commons/sections/WorkProcess";
    import SiteFooter from "../../views/commons/SiteFooter.vue";
    import Copyright from "../../views/commons/Copyright.vue";

    import Faq from "../../views/index-one/Faq";
    import Testimonial from "../../views/index-one/Testimonial";
    import Contact from "../../views/index-one/Contact";
    import Blog from "../../views/index-one/Blog";
    import Offerings from "../../views/about-us/Offerings";
    import Team from "../../views/commons/sections/Team";
    import Customers from "../../views/commons/sections/Customers.vue";


    export default {
        name: "IndexSeven",
        components: {
            NavBar,
            Banner,
            // Promo,
            About,
            // CounterSection,


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
            Team,
            Offerings,
            Customers
        },
    };
</script>