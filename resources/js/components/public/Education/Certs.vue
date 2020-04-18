<template>
  <div>
    <div class="certs-grid">
      <div class="cert-item" v-for="cert in certs" :key="cert.id">
        <cert :cert="cert" :is-career="isCareer" />
      </div>
    </div>
  </div>
</template>

<script>
import Cert from './Cert.vue'

export default {
  name: 'Certs',
  props: {
    certs: {
      type: Array
    },
    isCareer: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Cert
  }
}
</script>

<style lang="scss" scoped>
.certs-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media(min-width: 568px) {
    grid-template-columns: 1fr 1fr;
  }
  @media(min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media(min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
