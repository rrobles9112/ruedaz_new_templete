<template>
    <div>
        <nav-bar :colored-logo="true" />
        <div class="main">
            <banner />
            <promo />
            <about :is-gray="true" />
            <offerings />
            <download />
            <screenshots :is-gray="true" />
            <work-process />
            <price :is-gray="true" />
            <counter-section />
            <faq :is-gray="true" />
            <team />
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
    import Banner from "../../views/index-ten/Banner.vue";
    import Promo from "../../views/index-two/Promo";
    import Offerings from "../../views/about-us/Offerings";
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
    import About from "../../views/index-ten/About";
    import Download from "../../views/index-one/Download.vue";

    export default {
        name: "IndexTen",
        components: {
            Download,
            NavBar,
            Banner,
            Promo,
            Offerings,
            Screenshots,
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
            Contact,
            About
        },
    };
</script>