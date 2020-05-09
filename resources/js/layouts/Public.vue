<template>
  <div class="w-100">
    <div id="phantom"></div>
    <public-header :active-page="activePage" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PublicLayout',
  props: {
    activePage: String,
  },
};
</script>
