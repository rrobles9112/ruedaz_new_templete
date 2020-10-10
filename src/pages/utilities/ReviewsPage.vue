<template>
    <div>
        <nav-bar />

        <div class="main">
            <page-header
                    title="Review"
                    subtitle="Rapidiously deploy world-class platforms whereas collaborative interfaces. Phosfluorescently facilitate corporate."
            />
            <breadcrumb :crumbs="crumbs" />
            <section class="review-section ptb-100">
                <div class="container">
                    <div class="row">
                        <div v-for="(review, i) in reviews" v-bind:key="i" class="col-md-6 col-lg-4">
                            <review
                                :rating="review.rating"
                                :name="review.name"
                                :org="review.org"
                                :title="review.title"
                                :review="review.review"
                                :image-url="review.imageUrl"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <site-footer :show-subscribe="true" />
        <copyright />
    </div>
</template>
<script>

    import NavBar from "../../views/commons/NavBar";
    import PageHeader from "../../views/commons/PageHeader";
    import SiteFooter from "../../views/commons/SiteFooter";
    import Copyright from "../../views/commons/Copyright";
    import Breadcrumb from "../../views/commons/Breadcrumb";
    import Review from "../../components/Review"

    export default {
        name: 'AboutUs',
        components: { Breadcrumb, SiteFooter, PageHeader, NavBar, Copyright, Review },
        data: function(){
            return {
                crumbs: [
                    { 'link': '#', 'name': 'Home', 'isActive': false },
                    { 'link': '#', 'name': 'Pages', 'isActive': false },
                    { 'link': '#', 'name': 'Review', 'isActive': true }
                ],
                reviews: [
                    {
                        rating: '4.7',
                        title: 'Amazing template',
                        review: 'Distinctively foster maintainable metrics whereas multidisciplinary process improvements. Objectively implement strategic niches through.',
                        name: 'Ana Joly',
                        org: 'BizBite',
                        imageUrl: 'assets/img/client/1.jpg'
                    },
                    {
                        rating: '5',
                        title: 'Best template for app',
                        review: 'Distinctively foster maintainable metrics whereas multidisciplinary process improvements. Objectively implement strategic niches through.',
                        name: 'Ana Joly',
                        org: 'BizBite',
                        imageUrl: 'assets/img/client/2.jpg'
                    },
                    {
                        rating: '3.5',
                        title: 'Efficiently innovate app',
                        review: 'Distinctively foster maintainable metrics whereas multidisciplinary process improvements. Objectively implement strategic niches through.',
                        name: 'Ana Joly',
                        org: 'BizBite',
                        imageUrl: 'assets/img/client/3.jpg'
                    },
                    {
                        rating: '4.7',
                        title: 'Uniquely mesh flexible',
                        review: 'Distinctively foster maintainable metrics whereas multidisciplinary process improvements. Objectively implement strategic niches through.',
                        name: 'Ana Joly',
                        org: 'BizBite',
                        imageUrl: 'assets/img/client/4.jpg'
                    },
                    {
                        rating: '5',
                        title: 'Compellingly empower app',
                        review: 'Distinctively foster maintainable metrics whereas multidisciplinary process improvements. Objectively implement strategic niches through.',
                        name: 'Ana Joly',
                        org: 'BizBite',
                        imageUrl: 'assets/img/client/1.jpg'
                    },
                    {
                        rating: '4.7',
                        title: 'Holisticly reintermediate',
                        review: 'Distinctively foster maintainable metrics whereas multidisciplinary process improvements. Objectively implement strategic niches through.',
                        name: 'Ana Joly',
                        org: 'BizBite',
                        imageUrl: 'assets/img/client/2.jpg'
                    },
                    {
                        rating: '4.5',
                        title: 'Uniquely mesh flexible',
                        review: 'Distinctively foster maintainable metrics whereas multidisciplinary process improvements. Objectively implement strategic niches through.',
                        name: 'Ana Joly',
                        org: 'BizBite',
                        imageUrl: 'assets/img/client/3.jpg'
                    },
                    {
                        rating: '5',
                        title: 'Compellingly empower app',
                        review: 'Distinctively foster maintainable metrics whereas multidisciplinary process improvements. Objectively implement strategic niches through.',
                        name: 'Ana Joly',
                        org: 'BizBite',
                        imageUrl: 'assets/img/client/4.jpg'
                    },
                    {
                        rating: '5',
                        title: 'Holisticly reintermediate',
                        review: 'Distinctively foster maintainable metrics whereas multidisciplinary process improvements. Objectively implement strategic niches through.',
                        name: 'Ana Joly',
                        org: 'BizBite',
                        imageUrl: 'assets/img/client/1.jpg'
                    }
                ]
            }
        }
    }
</script>