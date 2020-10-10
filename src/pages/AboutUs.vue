<template>
    <div>
        <nav-bar />

        <div class="main">
            <page-header
                title="Sale Invoice Page"
                subtitle="Rapidiously deploy world-class platforms whereas collaborative interfaces. Phosfluorescently facilitate corporate."
            />
            <breadcrumb :crumbs="crumbs" />
            <offerings />
            <stats />
            <work-process :padding-top="false" />
            <team :is-gray="true" />
            <customers />
        </div>
        <site-footer :show-subscribe="true" />
        <copyright />
    </div>
</template>
<script>
    import Offerings from "../views/about-us/Offerings";
    import NavBar from "../views/commons/NavBar";
    import PageHeader from "../views/commons/PageHeader";
    import SiteFooter from "../views/commons/SiteFooter";
    import Copyright from "../views/commons/Copyright";
    import Breadcrumb from "../views/commons/Breadcrumb";
    import Stats from "../views/about-us/Stats";
    import WorkProcess from "../views/commons/sections/WorkProcess";
    import Team from "../views/commons/sections/Team";
    import Customers from "../views/commons/sections/Customers";

    export default {
        name: 'AboutUs',
        components: {Team, Breadcrumb, SiteFooter, PageHeader, NavBar, Copyright, Offerings, Stats, WorkProcess, Customers },
        data: function(){
            return {
                crumbs: [
                    { 'link': '#', 'name': 'Home', 'isActive': false },
                    { 'link': '#', 'name': 'Pages', 'isActive': false },
                    { 'link': '#', 'name': 'About Us', 'isActive': true }
                ]
            }
        }
    }
</script>