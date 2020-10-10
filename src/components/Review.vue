<template>
    <div class="single-review-wrap p-4 my-3">
        <div class="review-top d-flex align-items-center justify-content-between mb-2">
            <span><i class="fas fa-quote-left icon-size-sm color-secondary"></i></span>
            <span class="ratting-color"> {{ rating }} <i class="fas fa-star icon-md"></i></span>
        </div>
        <div class="review-body">
            <h5>{{ title }}</h5>
            <p>{{ review }}</p>
        </div>
        <div class="review-author d-flex align-items-center">
            <img :src="imageUrl" width="40" alt="author" class="rounded-circle border shadow-sm img-fluid mr-3" />
            <div class="review-info">
                <h6 class="mb-0">{{ name }}</h6>
                <span>{{ org }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Review',
        props: {
            rating: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            review: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            org: {
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