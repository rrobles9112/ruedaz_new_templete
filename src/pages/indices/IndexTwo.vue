<template>
    <div>
        <nav-bar />
        <div class="main">
            <banner />
            <promo />
            <offerings :is-gray="true"/>
            <features />
            <platform />
            <screenshots :padding-top="false" />
            <work-process :is-gray="true"/>
            <price />
            <counter-section />
            <team />
            <faq :is-gray="true" />
            <testimonial />
            <contact />
            <blog :is-gray="true" />
            <customers />

        </div>
        <site-footer :show-subscribe="true" />
        <copyright />
    </div>
</template>

<script>
    import NavBar from "../../views/commons/NavBar.vue";
    import Banner from "../../views/index-two/Banner.vue";
    import Promo from "../../views/index-two/Promo";
    import Offerings from "../../views/about-us/Offerings";
    import Platform from "../../views/index-two/Platform";
    import Features from "../../views/index-one/Features";
    import Price from "../../views/index-one/Price";
    import Screenshots from "../../views/index-one/Screenshots";
    import WorkProcess from "../../views/commons/sections/WorkProcess";
    import Team from "../../views/commons/sections/Team";
    import SiteFooter from "../../views/commons/SiteFooter.vue";
    import Copyright from "../../views/commons/Copyright.vue";
    import Customers from "../../views/commons/sections/Customers.vue";
    import CounterSection from "../../views/index-one/CounterSection";
    import Faq from "../../views/index-one/Faq";
    import Testimonial from "../../views/index-one/Testimonial";
    import Contact from "../../views/index-one/Contact";
    import Blog from "../../views/index-one/Blog";

    export default {
        name: "IndexTwo",
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
            Team,
            Customers,
            SiteFooter,
            Copyright,
            CounterSection,
            Faq,
            Testimonial,
            Blog,
            Contact
        },
    };
</script>