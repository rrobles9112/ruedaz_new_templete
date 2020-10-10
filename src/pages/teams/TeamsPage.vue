<template>
    <div>

        <nav-bar />

        <div class="main">

            <page-header
                    title="Our Team"
                    subtitle="Rapidiously deploy world-class platforms whereas collaborative interfaces. Phosfluorescently facilitate corporate innovation via excellent web technically sound."
            />

            <breadcrumb :crumbs="crumbs" />

            <section class="team-two-section ptb-100 ">
                <div class="container">
                    <div class="row">
                        <div v-for="(member, i) in members" v-bind:key="i" class="col-md-6 col-lg-3">
                            <team-member
                                :name="member.name"
                                :post="member.post"
                                :desc="member.desc"
                                :image-url="member.imageUrl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <site-footer :show-subscribe="true"/>
            <copyright />
        </div>
    </div>


</template>

<script>
    import NavBar from "../../views/commons/NavBar";
    import PageHeader from "../../views/commons/PageHeader";
    import SiteFooter from "../../views/commons/SiteFooter";
    import Copyright from "../../views/commons/Copyright";
    import Breadcrumb from "../../views/commons/Breadcrumb";
    import TeamMember from "../../components/TeamMember"

    export default {
        name: 'ContactUs',
        components: { Breadcrumb, SiteFooter, PageHeader, NavBar, Copyright, TeamMember },
        data: function(){
            return {
                crumbs: [
                    { 'link': '#', 'name': 'Home', 'isActive': false },
                    { 'link': '#', 'name': 'Pages', 'isActive': false },
                    { 'link': '#', 'name': 'Our Team', 'isActive': true }
                ],
                members: [
                    {
                        name: 'Richard Ford',
                        post: 'Instructor of Mathematics',
                        desc: 'Authoritatively engage leading-edge processes tactical capital',
                        imageUrl: '../../assets/img/team/team-member-1.png'
                    },
                    {
                        name: 'Kely Roy',
                        post: 'Lead Designer',
                        desc: 'Monotonectally engage sticky collaborative markets synergistically',
                        imageUrl: '../../assets/img/team/team-member-2.png'
                    },
                    {
                        name: 'Gerald Nichols',
                        post: 'Managing Director',
                        desc: 'Assertively procrastinate standardized whereas technically sound',
                        imageUrl: '../../assets/img/team/team-member-3.png'
                    },
                    {
                        name: 'Gerald Nichols',
                        post: 'Team Manager',
                        desc: 'Synergistically actualize out the-box technologies before parallel process',
                        imageUrl: '../../assets/img/team/team-member-4.png'
                    },
                    {
                        name: 'Richard Ford',
                        post: 'Instructor of Mathematics',
                        desc: 'Authoritatively engage leading-edge processes tactical capital',
                        imageUrl: '../../assets/img/team/team-member-1.png'
                    },
                    {
                        name: 'Kely Roy',
                        post: 'Lead Designer',
                        desc: 'Monotonectally engage sticky collaborative markets synergistically',
                        imageUrl: '../../assets/img/team/team-member-2.png'
                    },
                    {
                        name: 'Gerald Nichols',
                        post: 'Managing Director',
                        desc: 'Assertively procrastinate standardized whereas technically sound',
                        imageUrl: '../../assets/img/team/team-member-3.png'
                    },
                    {
                        name: 'Gerald Nichols',
                        post: 'Team Manager',
                        desc: 'Synergistically actualize out the-box technologies before parallel process',
                        imageUrl: '../../assets/img/team/team-member-4.png'
                    }
                ]
            }
        }
    }
</script>