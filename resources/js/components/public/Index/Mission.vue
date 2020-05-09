<template>
  <div class="mission text-center px-2 my-5 d-block">
    <h2 class="mission--title">
      My mission is
    </h2>
    <blockquote :cite="name">
      <p class="text-lg">
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

<style lang="scss" scoped>
.mission {
  .mission--title {
    color: #4094d0;
    font-weight: 500;
  }
}
</style>
