<template>
  <div>
    <public-layout>
      <div class="container mx-auto my-6">
        <presentation
          :personal="page.content.personal"
        />
      </div>
    </public-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Presentation from '../../components/public/HomePage/Presentation.vue'

export default defineComponent({
  name: 'PublicIndex',
  props: {
    pageProps: {
      type: String
    }
  },
  components: {
    Presentation
  },
  setup (props) {
    const page = JSON.parse(props.pageProps as string)

    return {
      page
    }
  }
})
</script>
