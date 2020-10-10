<template>
    <div>
        <nav-bar />
        <div class="main">
            <banner />
            <customers :is-gray="true" />
            <promo />
            <offerings :is-gray="true" />
            <share-photos />
            <features :is-gray="true" />
            <download />
            <screenshots :is-gray="true" />
            <work-process />
            <price :is-gray="true" />
            <testimonial />
            <team :is-gray="true" />
            <faq />
            <blog :is-gray="true" />
            <contact />
        </div>
        <site-footer />
        <copyright />

    </div>
</template>

<script>
    import NavBar from "../../views/commons/NavBar.vue";
    import Banner from "../../views/index-nine/Banner.vue";
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
    import Offerings from "../../views/about-us/Offerings";
    import Team from "../../views/commons/sections/Team";
    import Customers from "../../views/index-nine/Customers.vue";
    import Download from "../../views/index-one/Download";
    import SharePhotos from "../../views/index-one/SharePhotos";

    export default {
        name: "IndexNine",
        components: {
            Promo,
            NavBar,
            Banner,
            SharePhotos,
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
            Offerings,
            Customers
        },
    };
</script>