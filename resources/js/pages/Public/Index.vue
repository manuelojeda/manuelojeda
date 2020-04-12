<template>
  <div>
    <public-layout>
      
    </public-layout>
  </div>
</template>

<script>
export default {
  name: 'PublicIndex',
  props: {
    pageProps: {
      type: String
    }
  },
  data() {
    return {
      page: null
    }
  },
  created () {
    this.page = JSON.parse(this.pageProps)
  }
}
</script>
