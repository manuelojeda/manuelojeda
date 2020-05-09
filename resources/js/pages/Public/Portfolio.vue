<template>
  <div>
    <public-layout :active-page="activePage">
      <div class="container mx-auto my-6">
        <h2 class="text-3xl font-medium">
          {{page.title}}
        </h2>
      </div>
    </public-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Portfolio',
  props: {
    page: {
      type: Object,
      required: true,
    },
    jobs: {
      type: Array,
      required: true,
    },
    activePage: String as () => string,
  },
});
</script>
