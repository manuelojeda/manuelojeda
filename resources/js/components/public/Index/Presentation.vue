<template>
  <div>
    <div class="mx-auto md:mx-0 text-center">
      <img
        :src="personal.image"
        :alt="personal.name"
        class="w-64 mx-auto rounded-full"
        loading="lazy"
      >
      <p>
        Hi, my name is
      </p>
      <h3 class="text-4xl font-bold text-blue-600">
        {{personal.name}} <br/>
        <small class="text-black font-normal">
          {{personal.job}}
        </small>
      </h3>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Presentation',
  props: {
    personal: {
      type: Object,
      required: true
    }
  }
})
</script>

<style scoped>
.text-4xl.font-bold.text-blue-600 {
  line-height: 2rem;
}
</style>
