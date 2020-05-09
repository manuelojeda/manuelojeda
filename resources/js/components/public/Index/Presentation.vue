<template>
  <div class="presentation">
    <div class="mx-auto md:mx-0 text-center">
      <img
        :src="personal.image"
        :alt="personal.name"
        class="mx-auto d-block img-fluid"
        loading="lazy"
      >
      <p class="mb-0">
        Hi, my name is
      </p>
      <h1 class="presentation--name">
        {{personal.name}}
      </h1>
      <h4 class="presentation--title">
        {{personal.job}}
      </h4>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Presentation',
  props: {
    personal: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>

.presentation {
  margin-bottom: 4rem;
  .presentation--name {
    color: #4094d0;
    margin-bottom: 0;
    font-weight: 600;
  }
}

img.mx-auto.d-block.img-fluid {
  @media(min-width: 400px) {
    max-width: 350px;
  }
}
.text-4xl.font-bold.text-blue-600 {
  line-height: 2rem;
}
</style>
