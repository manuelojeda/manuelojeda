<template>
  <div class="mb-6">
    <public-layout>
      <div class="container mx-auto px-3 lg:px-0">
        <h2 class="text-2xl font-bold mb-4">
          Careers ({{education.careers.length}})
        </h2>

        <certs :certs="education.careers" :is-career="true" />
      </div>

      <div class="container mx-auto px-3 lg:px-0 mt-6">
        <h2 class="text-2xl font-bold mb-4">
          Courses ({{education.courses.length}})
        </h2>

        <certs :certs="education.courses" />
      </div>
    </public-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Certs from '@/components/public/Education/Certs.vue';

export default defineComponent({
  name: 'Education',
  props: {
    educationProps: {
      type: String,
      required: true,
    },
  },
  components: {
    Certs,
  },
  setup(props) {
    const education = JSON.parse(props.educationProps);

    return {
      education,
    };
  },
});
</script>
