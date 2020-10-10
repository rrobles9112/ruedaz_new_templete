<template>
    <div>
        <nav-bar />
        <div class="main">
            <banner />
            <promo />
            <about :is-gray="true" />
            <share-photos />
            <features :is-gray="true" />
            <platform />
            <screenshots :padding-top="false" />
            <work-process :is-gray="true"/>
            <price />
            <testimonial />
            <faq />
            <blog :is-gray="true" />
            <contact />
        </div>
        <site-footer :show-subscribe="true" />
        <copyright />
    </div>
</template>

<script>
    import NavBar from "../../views/commons/NavBar.vue";
    import Banner from "../../views/index-three/Banner.vue";
    import About from "../../views/index-three/About";
    import SharePhotos from "../../views/index-three/SharePhotos";
    import Promo from "../../views/index-three/Promo";
    import Platform from "../../views/index-two/Platform";
    import Features from "../../views/index-three/Features";
    import Price from "../../views/index-one/Price";
    import Screenshots from "../../views/index-one/Screenshots";
    import WorkProcess from "../../views/commons/sections/WorkProcess";
    import SiteFooter from "../../views/commons/SiteFooter.vue";
    import Copyright from "../../views/commons/Copyright.vue";
    import Faq from "../../views/index-one/Faq";
    import Testimonial from "../../views/index-one/Testimonial";
    import Contact from "../../views/index-one/Contact";
    import Blog from "../../views/index-one/Blog";


    export default {
        name: "IndexThree",
        components: {
            About,
            NavBar,
            Banner,
            Promo,
            SharePhotos,

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
            Contact
        },
    };
</script>