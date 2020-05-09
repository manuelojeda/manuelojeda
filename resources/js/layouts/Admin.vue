<template>
  <div class="admin-layout">
    <div id="phantom"></div>
    <div class="admin-layout--grid">
      <div class="admin-layout--menu">
        <admin-header />
      </div>
      <div class="admin-layout--content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminLayout',
};
</script>

<style lang="scss" scoped>
.admin-layout {
  width: 100%;
  height: 100vh;

  .admin-layout--grid {
    display: grid;
    grid-template-columns: 130px 1fr;
    height: 100%;
    background-color: #e7eaec;

    .admin-layout--content {
      padding: 0 15px;
    }
  }
}
</style>
