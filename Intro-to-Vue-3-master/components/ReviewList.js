app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },

    template:
    /*html*/
    `
    <div class="review-container">
    <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
            {{ review.name }} gave rating of {{ review.rating }} saying that
            "{{ review.review }}. And about recommending this product, I say {{ review.recommend }}"
            </li>
        </ul>
    `
})