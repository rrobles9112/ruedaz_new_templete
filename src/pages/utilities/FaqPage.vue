<template>
    <div>
        <nav-bar />

        <div class="main">
            <page-header
                    title="FAQ"
                    subtitle="Rapidiously deploy world-class platforms whereas collaborative interfaces. Phosfluorescently facilitate corporate."
            />
            <breadcrumb :crumbs="crumbs" />

            <faq :is-gray="true" />

            <section class="ptb-100">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-9 col-lg-8">
                            <div class="section-heading mb-3 text-center">
                                <h2>Frequently Asked Questions</h2>
                                <p class="lead">
                                    Quickly morph client-centric results through performance based applications. Proactively facilitate professional human capital for cutting-edge.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="single-faq mt-3">
                                <h5><span class="color-primary">Q.</span> How can I pay for this?</h5>
                                <p>Intrinsicly implement high standards in strategic theme areas via inexpensive solutions.
                                    Assertively conceptualize prospective bandwidth whereas xpedite intuitive services rather than process-centric.</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="single-faq mt-3">
                                <h5><span class="color-primary">Q.</span> Is it possible to pay yearly?</h5>
                                <p>Assertively iterate user friendly innovation without open-source markets. Monotonectally extend
                                    resource sucking without high-payoff paradigms. Objectively customize sound relationships. </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="single-faq mt-3">
                                <h5><span class="color-primary">Q.</span> Do you offer discounts on multiple items?</h5>
                                <p>Dramatically target focused testing procedures after holistic ideas. Collaboratively maximize
                                    high-payoff ROI and value-added products. Distinctively deliver cooperative whereas customized</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="single-faq mt-3">
                                <h5><span class="color-primary">Q.</span> Is VAT included in plan prices?</h5>
                                <p>Distinctively simplify high-quality initiatives for highly efficient applications. Monotonectally
                                    repurpose integrated customer service after magnetic e-services matrix exceptional results. </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="single-faq mt-3">
                                <h5><span class="color-primary">Q.</span> Will I pay more for some features?</h5>
                                <p>Enthusiastically pontificate resource-leveling supply chains whereas scalable markets.
                                    Authoritatively streamline resource Continually re-engineer ethical niches re-engineer ethical niches with real-time e-tailers.</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="single-faq mt-3">
                                <h5><span class="color-primary">Q.</span> Why are there no limits on the number of messages?</h5>
                                <p>Assertively target turnkey ideas for market-driven portals.Continually re-engineer ethical niches with real-time e-tailers
                                    intellectual capital whereas 2.0 mindshare cultivate prospective process improvements .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
        <site-footer />
        <copyright />
    </div>
</template>
<script>
    import NavBar from "../../views/commons/NavBar";
    import PageHeader from "../../views/commons/PageHeader";
    import SiteFooter from "../../views/commons/SiteFooter";
    import Breadcrumb from "../../views/commons/Breadcrumb";
    import Copyright from "../../views/commons/Copyright";
    import Faq from "../../views/index-one/Faq";

    export default {
        name: 'FaqPage',
        components: { Breadcrumb, SiteFooter, PageHeader, NavBar, Copyright, Faq },
        data: function(){
            return {
                crumbs: [
                    { 'link': '#', 'name': 'Home', 'isActive': false },
                    { 'link': '#', 'name': 'Pages', 'isActive': false },
                    { 'link': '#', 'name': 'Faq', 'isActive': true }
                ]
            }
        }
    }
</script>