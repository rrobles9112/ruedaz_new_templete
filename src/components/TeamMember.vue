<template>
    <div class="single-team-wrap bg-white text-center border rounded p-4 my-3">
        <img :src="imageUrl" alt="team image" width="120" class="img-fluid m-auto pb-4">
        <div class="team-content">
            <h5 class="mb-0">{{ name }}</h5>
            <span>{{ post }}</span>
            <p class="mt-3">{{ desc }}</p>
            <ul class="list-inline social-list-default social-color icon-hover-top-bottom">
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
</template>

<script>
    export default {
        name: "TeamMember",
        props: {
            name: {
                type: String,
                required: true
            },
            post: {
                type: String,
                required: true
            },
            desc: {
                type: String,
                required: true
            },
            imageUrl: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>