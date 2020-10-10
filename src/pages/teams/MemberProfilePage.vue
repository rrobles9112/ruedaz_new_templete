<template>
    <div>

        <nav-bar />

        <div class="main">

            <page-header
                    title="Our Team"
                    subtitle="Rapidiously deploy world-class platforms whereas collaborative interfaces. Phosfluorescently facilitate corporate innovation via excellent web technically sound."
            />

            <breadcrumb :crumbs="crumbs" />

            <section class="team-single-section ptb-100">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-12 col-sm-12 col-lg-6">
                            <div class="team-single-img">
                                <img src="../../assets/img/team/6.jpg" alt="member" class="img-fluid rounded shadow-sm">
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12 col-lg-6">
                            <div class="team-single-text">
                                <div class="team-name mb-4">
                                    <h4 class="mb-1">Lily Henry</h4>
                                    <span>Managing Director</span>
                                </div>
                                <ul class="team-single-info">
                                    <li><strong>Phone:</strong><span> (+123) 123-456-789</span></li>
                                    <li><strong>Email:</strong><span> yourname@domain.com</span></li>
                                </ul>
                                <div class="text-content mt-20">
                                    <p>Authoritatively deploy fully researched leadership skills whereas one-to-one best
                                        practices. Monotonectally aggregate virtual imperatives and accurate technology.
                                        Dynamically streamline progressive sources before user friendly.</p>
                                    <p>Enthusiastically synthesize cross-unit technology for sticky results.
                                    </p>
                                    <p>Progressively productize vertical alignments after sticky process improvements. Competently scale transparent methods of empowerment and visionary products.</p>
                                </div>
                                <ul class="list-inline social-list-default social-color background-color social-hover-2">
                                    <li class="list-inline-item">
                                        <a class="facebook" href="#" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="twitter" href="#" target="_blank"><i class="fab fa-twitter"></i></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="dribbble" href="#" target="_blank"><i class="fab fa-dribbble"></i></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="linkedin" href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-md-6 col-sm-6 col-12">
                            <div class="section-heading">
                                <h5>Activities And Skills</h5>
                                <div class="section-heading-line-left"></div>
                            </div>
                            <ul class="check-list-wrap pt-3">
                                <li><strong>Big Data Consulting</strong> – Holisticly leverage existing tactical core competencies with error-free methods of empowerment. Holisticly foster client-centric partnerships.</li>
                                <li><strong>Machine Learning</strong> – Assertively engage backend web-readiness through efficient web services enthusiastically innovate frictionless.</li>
                                <li><strong>Artificial Intelligence</strong> – Dynamically incubate transparent technologies after cost effective action items.</li>
                            </ul>
                        </div>
                        <div class="col-md-6 col-sm-6 col-12">
                            <div class="section-heading mt-40">
                                <h5>Professional Skills</h5>
                                <div class="section-heading-line-left"></div>
                            </div>
                            <div class="skill-content-wrap">
                                <p>Holisticly whiteboard low-risk high-yield e-services vis-a-vis user-centric data. Competently benchmark communities whereas interactive.</p>
                                <div class="progress-item">
                                    <div class="progress-title">
                                        <h6>Technical skills<span class="float-right"><span class="progress-number">80</span>%</span>
                                        </h6>
                                    </div>
                                    <div class="progress">
                                        <span style="width:80%;"><span class="progress-line"></span></span>
                                    </div>
                                </div>
                                <div class="progress-item">
                                    <div class="progress-title">
                                        <h6>Marketing<span class="float-right"><span class="progress-number">70</span>%</span>
                                        </h6>
                                    </div>
                                    <div class="progress">
                                        <span style="width:70%;"><span class="progress-line"></span></span>
                                    </div>
                                </div>
                                <div class="progress-item">
                                    <div class="progress-title">
                                        <h6>Web Consulting<span class="float-right"><span class="progress-number">85</span>%</span>
                                        </h6>
                                    </div>
                                    <div class="progress">
                                        <span style="width:85%;"><span class="progress-line"></span></span>
                                    </div>
                                </div>
                            </div>
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

    export default {
        name: 'MemberProfile',
        components: { Breadcrumb, SiteFooter, PageHeader, NavBar, Copyright },
        data: function(){
            return {
                crumbs: [
                    { 'link': '#', 'name': 'Home', 'isActive': false },
                    { 'link': '#', 'name': 'Pages', 'isActive': false },
                    { 'link': '#', 'name': 'Team Single', 'isActive': true }
                ]
            }
        }
    }
</script>