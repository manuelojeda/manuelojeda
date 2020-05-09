<template>
  <a :href="diplomaLink" target="_blank" :class="certClasses">
    <div class="img-wrapper">
      <img :src="cert.golden_achievement" :alt="cert.title" v-if="isCareer">
      <img :src="cert.badge" :alt="cert.title" v-else>
    </div>
    <div class="title-wrapper">
      <p class="text-center text-xs">
        {{cert.title}}
      </p>
    </div>
  </a>
</template>

<script>
export default {
  name: 'Cert',
  props: {
    cert: {
      type: Object,
    },
    isCareer: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    diplomaLink() {
      return `https://platzi.com${this.cert.diploma_link}`;
    },
    certClasses() {
      return 'cert p-3 border-2 border-black rounded bg-gray-300 hover:shadow-xl transition duration-300';
    },
  },
};
</script>

<style lang="scss" scoped>
.cert {
  display: grid;
  grid-template-columns: 30% 1fr;
  align-content: center;
  align-items: center;
  grid-gap: 2rem;
  max-width: 350px;
  margin: 0 auto;
  margin-bottom: 1rem;
  border: 2px solid #c4c4c8;
  background-color: #e7e7e0;

  img {
    max-width: 80px;
    margin-bottom: 0;
  }

  p {
    margin-bottom: 0;
    color: darken(#c4c4c8, 30%);
    font-weight: 600;
    font-size: .75rem;
  }

  &:hover {
    text-decoration: none;
  }
}
</style>
