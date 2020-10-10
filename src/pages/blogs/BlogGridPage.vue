<template>
    <div>
        <nav-bar />

        <div class="main">
            <page-header
                    title="Blog Default"
                    subtitle="Rapidiously deploy world-class platforms whereas collaborative interfaces. Phosfluorescently facilitate corporate innovation via excellent web technically sound."
            />
            <breadcrumb :crumbs="crumbs" />

            <section class="our-blog-section ptb-100">
                <div class="container">
                    <div class="row">
                        <div v-for="(blog, i) in blogs" class="col-md-6 col-lg-4" v-bind:key="i">
                            <small-blog-item
                                :image-url="blog.imageUrl"
                                :comments="blog.comments"
                                :shares="blog.shares"
                                :day="blog.day"
                                :month="blog.month"
                                :title="blog.title"
                                :desc="blog.desc"
                                :is-gray="true"
                            />
                        </div>
                    </div>

                    <!--pagination start-->
                    <div class="row">
                        <div class="col-md-12">
                            <nav class="custom-pagination-nav mt-4">
                                <ul class="pagination justify-content-center">
                                    <li class="page-item"><a class="page-link" href="#"><span class="ti-angle-left"></span></a></li>
                                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                                    <li class="page-item"><a class="page-link" href="#"><span class="ti-angle-right"></span></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <!--pagination end-->

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
    import Copyright from "../../views/commons/Copyright";
    import Breadcrumb from "../../views/commons/Breadcrumb";
    import SmallBlogItem from "../../components/SmallBlogItem";

    export default {
        components: { Breadcrumb, SiteFooter, PageHeader, NavBar, Copyright, SmallBlogItem },
        data: function(){
            return {
                crumbs: [
                    { 'link': '#', 'name': 'Home', 'isActive': false },
                    { 'link': '#', 'name': 'Pages', 'isActive': false },
                    { 'link': '#', 'name': 'Blog Default', 'isActive': true }
                ],
                blogs: [
                    {
                        imageUrl: 'assets/img/blog/1.jpg',
                        day: 24,
                        month: 'Apr',
                        comments: 45,
                        shares: 10,
                        title: 'Appropriately productize fully',
                        desc: 'Some quick example text to build on the card title and make up the bulk.'
                    },
                    {
                        imageUrl: 'assets/img/blog/2.jpg',
                        day: 24,
                        month: 'Apr',
                        comments: 45,
                        shares: 10,
                        title: 'Quickly formulate backend',
                        desc: 'Synergistically engage effective ROI after customer directed partnerships.'
                    },
                    {
                        imageUrl: 'assets/img/blog/3.jpg',
                        day: 24,
                        month: 'Apr',
                        comments: 45,
                        shares: 10,
                        title: 'Objectively extend extensive',
                        desc: 'Holisticly mesh open-source leadership rather than proactive users.'
                    },
                    {
                        imageUrl: 'assets/img/blog/1.jpg',
                        day: 24,
                        month: 'Apr',
                        comments: 45,
                        shares: 10,
                        title: 'Appropriately productize fully',
                        desc: 'Some quick example text to build on the card title and make up the bulk.'
                    },
                    {
                        imageUrl: 'assets/img/blog/2.jpg',
                        day: 24,
                        month: 'Apr',
                        comments: 45,
                        shares: 10,
                        title: 'Quickly formulate backend',
                        desc: 'Synergistically engage effective ROI after customer directed partnerships.'
                    },
                    {
                        imageUrl: 'assets/img/blog/3.jpg',
                        day: 24,
                        month: 'Apr',
                        comments: 45,
                        shares: 10,
                        title: 'Objectively extend extensive',
                        desc: 'Holisticly mesh open-source leadership rather than proactive users.'
                    }
                ]
            }
        }
    }
</script>