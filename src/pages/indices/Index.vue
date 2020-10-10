<template>
    <div>
        <nav-bar />
        <div class="main">
            <banner />
            <promo />
            <about />
            <share-photos />
            <download />
            <features />
            <screenshots :is-gray="true" />
            <work-process />
            <counter-section />
            <price :is-gray="true"/>
            <faq />
            <testimonial />
            <team :is-gray="true" />
            <contact />
            <blog :is-gray="true" />
            <customers />
        </div>
        <site-footer :show-subscribe="true" />
        <copyright />
    </div>
</template>

<script>
    import NavBar from "../../views/commons/NavBar";
    import Banner from "../../views/index-one/Banner";
    import Promo from "../../views/index-one/Promo";
    import About from "../../views/index-one/About";
    import SharePhotos from "../../views/index-one/SharePhotos";
    import Download from "../../views/index-one/Download";
    import Features from "../../views/index-one/Features";
    import Screenshots from "../../views/index-one/Screenshots";
    import WorkProcess from "../../views/commons/sections/WorkProcess";
    import CounterSection from "../../views/index-one/CounterSection";
    import Price from "../../views/index-one/Price";
    import Team from "../../views/commons/sections/Team";
    import Faq from "../../views/index-one/Faq";
    import Testimonial from "../../views/index-one/Testimonial";
    import Contact from "../../views/index-one/Contact";
    import Blog from "../../views/index-one/Blog";
    import SiteFooter from "../../views/commons/SiteFooter";
    import Copyright from "../../views/commons/Copyright";
    import Customers from "../../views/commons/sections/Customers";

    export default {
        name: "IndexOne",
        components: {
            NavBar,
            Banner,
            Promo,
            About,
            SharePhotos,
            Download,
            Features,
            Screenshots,
            WorkProcess,
            CounterSection,
            Price,
            Faq,
            Testimonial,
            Team,
            Contact,
            Blog,
            Customers,
            SiteFooter,
            Copyright,
        }
    };
</script>