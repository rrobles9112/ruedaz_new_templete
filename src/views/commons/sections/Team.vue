<template>
    <section class="team-two-section ptb-100" v-bind:class="{  'gray-light-bg' : isGray }">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-8">
                    <div class="section-heading text-center">
                        <h2>Our Team Members</h2>
                        <p>Authoritatively mesh intuitive paradigms vis-a-vis goal-oriented partnerships. Continually extend open-source outside the box thinking after focused catalysts.</p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div v-for="member in members" v-bind:key="member.imageUrl" class="col-md-6 col-lg-3">
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
</template>

<script>
    import TeamMember from '../../../components/TeamMember';
    export default {
        name: "Team",
        components: { TeamMember },
        props: {
            isGray: {
                type: Boolean,
                default: false
            },
        },
        data() {
            return {
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
                    }
                ]
            };
        }
    };
</script>

<style>
</style>