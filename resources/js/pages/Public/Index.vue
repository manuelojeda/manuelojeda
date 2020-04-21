<template>
  <div>
    <public-layout>
      <div class="container mx-auto my-6">
        <presentation
          class="mb-5 mt-8"
          :personal="page.content.personal"
        />

        <mission :mission="page.content.mission" :name="page.content.personal.name" />

        <skills :skills="skills" />

        <stack :stack="page.content.stack" />

        <div class="float-right mr-5 my-6">
          <a href="/portfolio" class="text-teal-500 font-medium text-xl">
            Check my Portfolio
            <span>
              <font-awesome-icon icon="caret-right" />
            </span>
          </a>
        </div>
      </div>
    </public-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Presentation from '@/components/public/Index/Presentation.vue';
import Mission from '@/components/public/Index/Mission.vue';
import Skills from '@/components/public/Index/Skills.vue';
import Stack from '@/components/public/Index/Stack.vue';

export default defineComponent({
  name: 'PublicIndex',
  props: {
    page: {
      type: Object,
    },
    skills: {
      type: Array as () => Array<any>,
      default: [],
    },
  },
  components: {
    Presentation,
    Mission,
    Skills,
    Stack,
  },
});
</script>
