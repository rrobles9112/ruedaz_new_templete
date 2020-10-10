<template>
    <div>

        <nav-bar />

            <div class="main">

            <page-header
                    title="Contact Us"
                    subtitle="Rapidiously deploy world-class platforms whereas collaborative interfaces. Phosfluorescently facilitate corporate innovation via excellent web technically sound."
            />

            <breadcrumb :crumbs="crumbs" />

            <section class="promo-section pt-100 ">
                <div class="container">
                    <div class="row justify-content-md-center justify-content-sm-center">
                        <div class="col-md-6 col-lg-4">
                            <div class="card single-promo-card shadow-sm text-center p-3 my-3">
                                <div class="card-body">
                                    <div class="pb-2">
                                        <span class="fas fa-envelope icon-size-lg color-primary"></span>
                                    </div>
                                    <div class="pt-2 pb-3">
                                        <h5>Mail Us</h5>
                                        <p class="mb-0">Say something to start a live chat hello@yourdomain.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="card single-promo-card shadow-sm text-center p-3 my-3">
                                <div class="card-body">
                                    <div class="pb-2">
                                        <span class="fas fa-headset icon-size-lg color-primary"></span>
                                    </div>
                                    <div class="pt-2 pb-3">
                                        <h5>24/7 Live Chat</h5>
                                        <p class="mb-0">We endeavour to answer all enquiries within 24 hours on business days.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="card single-promo-card shadow-sm text-center p-3 my-3">
                                <div class="card-body">
                                    <div class="pb-2">
                                        <span class="fas fa-map-marker-alt icon-size-lg color-primary"></span>
                                    </div>
                                    <div class="pt-2 pb-3">
                                        <h5>Visit Us</h5>
                                        <p class="mb-0">100 Yellow House, los angeles Factory, United State, 13420.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <contact />


            <!--our google map section from partials/contact-section start-->
            <div class="google-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450937!2d144.953735315922!3d-37.817323442021234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sbd!4v1571030260624!5m2!1sen!2sbd" height="450" style="border:0;" allowfullscreen=""></iframe>
            </div>
            <!--our google map section from partials/contact-section end-->

            <site-footer />
            <copyright />
        </div>
    </div>


</template>

<script>
    import NavBar from "../views/commons/NavBar";
    import PageHeader from "../views/commons/PageHeader";
    import SiteFooter from "../views/commons/SiteFooter";
    import Copyright from "../views/commons/Copyright";
    import Breadcrumb from "../views/commons/Breadcrumb";
    import Contact from "../views/index-one/Contact";

    export default {
        name: 'ContactUs',
        components: {Contact, Breadcrumb, SiteFooter, PageHeader, NavBar, Copyright },
        data: function(){
            return {
                crumbs: [
                    { 'link': '#', 'name': 'Home', 'isActive': false },
                    { 'link': '#', 'name': 'Pages', 'isActive': false },
                    { 'link': '#', 'name': 'Contact Us', 'isActive': true }
                ]
            }
        }
    }
</script>