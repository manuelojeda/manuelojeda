<template>
  <div>
    <public-layout :active-page="activePage">
      <div class="container mx-auto">
        <b-row>
          <b-col cols="12">
            <presentation
              class="mt-4"
              :personal="page.content.personal"
            />
            <mission :mission="page.content.mission" :name="page.content.personal.name" />

            <skills :skills="skills" />

            <stack :stack="page.content.stack" />
          </b-col>
        </b-row>

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
    activePage: {
      type: String as () => string,
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
