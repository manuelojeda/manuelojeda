<template>
  <div class="stack text-center my-5 mt-8 px-5">
    <h2 class="font-bold text-3xl mb-5">
      My stack
    </h2>

    <div class="stack-grid">
      <div
        class="stack-item"
        v-for="(stackItem, index) in stack"
        :key="index"
      >
        <font-awesome-icon
          class="fa-5x mb-2"
          :icon="['fab', stackItem.logo]"
          :style="{ color: `${stackItem.color}` }"
        />
        <h4 class="text-lg font-bold">
          {{stackItem.lang}}
        </h4>
        <p>
          {{stackItem.description}}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Stack',
  props: {
    stack: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.stack-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;

  @media(min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
  @media(min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
