<template>
    <div>
        <nav-bar />
        <div class="main">
            <banner />
            <promo />
            <about :is-gray="true" />
            <features />
            <download />
            <screenshots :is-gray="true"  />
            <work-process/>
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
    import Banner from "../../views/index-eight/Banner.vue";
    import About from "../../views/index-eight/About.vue";
    import Promo from "../../views/index-two/Promo";
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
    import Team from "../../views/commons/sections/Team";
    import Customers from "../../views/commons/sections/Customers";
    import Download from "../../views/index-one/Download";
    import CounterSection from "../../views/index-one/CounterSection";

    export default {
        name: "IndexEight",
        components: {
            Promo,
            NavBar,
            Banner,
            About,
            CounterSection,
            Download,
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
            Customers
        },
    };
</script>