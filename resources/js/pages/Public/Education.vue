<template>
  <div>
    <public-layout>
      <div
        v-for="course in education.courses"
        :key="course.id"
      >
        {{
          course.title
        }}
      </div>
    </public-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Education',
  props: {
    educationProps: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const education = JSON.parse(props.educationProps)

    return {
      education
    }
  }
})
</script>
