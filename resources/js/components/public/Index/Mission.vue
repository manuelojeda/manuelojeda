<template>
  <div class="mission text-center px-2 my-6 d-block mt-8">
    <h2 class="font-bold text-3xl mb-2">
      My mission is
    </h2>
    <blockquote :cite="name">
      <p>
        {{
          mission
        }}
      </p>
    </blockquote>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Mission',
  props: {
    mission: {
      type: String as () => string,
      required: true,
    },
    name: {
      type: String as () => string,
      required: true,
    },
  },
});
</script>
