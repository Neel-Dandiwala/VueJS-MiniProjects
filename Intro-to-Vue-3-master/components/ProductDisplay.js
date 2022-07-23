app.component("product-display", {
    props: {
        premium: {
            type: Boolean,
            required: true,
        },
    },
    template:
        /*html*/
        `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!-- image goes here -->
        <img v-bind:src="image" :class="{'out-of-stock-img': !inStock}"/>
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock">In stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0 ">Almost Over</p>
        <p v-else>Out of Stock</p>
        <p>{{ saleTitle }}</p>
        <p>Shipping: {{ shipping }}</p>
        <ol>
          <li v-for="detail in details">{{ detail }}</li>
        </ol>
        <div
          class="color-circle"
          :style="{ backgroundColor: variant.color }"
          v-for="(variant, index) in variants"
          :key="variant.id"
          @mouseover="updateVariant(index)"
        ></div>
        <button
        :disabled="!inStock"
        class="button"
        :class="{ disabledButton: !inStock }"
        v-on:click="addToCart">
          Add to Cart
        </button>
        <button
        :disabled="!inStock"
        class="button"
        :class="{ disabledButton: !inStock }"
        v-on:click="removeFromCart">
        Remove from Cart
        </button>
      </div>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>`,
    data() {
        return {
            product: "Socks",
            brand: "Neel Hey",
            selectedVariant: 0,
            inventory: 90,
            details: ["50% cooton", "30% green", "100% smart"],
            variants: [{
                    id: 2334,
                    color: "darkgreen",
                    image: "./assets/images/socks_green.jpg",
                    quantity: 50,
                    onSale: true,
                },
                {
                    id: 2556,
                    color: "darkblue",
                    image: "./assets/images/socks_blue.jpg",
                    quantity: 0,
                    onSale: false,
                },
            ],
            reviews: []
        };
    },
    methods: {
        addToCart() {
            this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
        },
        removeFromCart() {
            this.$emit("remove-from-cart", this.variants[this.selectedVariant].id);
        },
        updateVariant(index) {
            this.selectedVariant = index;
        },
        addReview(review) {
            this.reviews.push(review);
        }
    },
    computed: {
        title() {
            return this.brand + " " + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity;
        },
        saleTitle() {
            if (this.variants[this.selectedVariant].onSale) {
                return "SALE SALE";
            } else {
                return "Not for Sale";
            }
        },
        shipping() {
            if (this.premium) return "Free";
            return 2.99;
        },
    },
});