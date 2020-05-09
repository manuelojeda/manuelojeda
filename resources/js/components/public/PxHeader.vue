<template>
  <div>
    <div class="px-header">
      <div class="px-header--desktop d-none d-lg-block">
        <div class="container pb-4">
          <div class="float-left px-header--desktop--social-media">
            Huetismo
          </div>
          <div class="px-header-header--desktop--links">
            <a href="/" class="px-header-header--desktop--link">
              Home
            </a>
            <a href="/portfolio" class="px-header-header--desktop--link">
              Portfolio
            </a>
            <a href="/education" class="px-header-header--desktop--link">
              Education
            </a>
            <a href="/blog" class="px-header-header--desktop--link">
              Blog
            </a>
          </div>
        </div>
      </div>
      <div class="px-header--mobile d-lg-none">
        <div class="px-header--mobile--grid">
          <a href="/" class="px-header--mobile--link" :class="{ 'active': activePage === 'home' }">
            <b-icon icon="house" font-scale="2" />
          </a>
          <a href="/portfolio" class="px-header--mobile--link" :class="{ 'active': activePage === 'portfolio' }">
            <b-icon icon="folder" font-scale="2" />
          </a>
          <a href="/education" class="px-header--mobile--link" :class="{ 'active': activePage === 'education' }">
            <b-icon icon="book" font-scale="2" />
          </a>
          <a href="/blog" class="px-header--mobile--link">
            <b-icon icon="archive" font-scale="2" />
          </a>
          <a href="#" class="px-header--mobile--link">
            <b-icon icon="newspaper" font-scale="2" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PxHeader',
  props: {
    activePage: String,
  },
};
</script>

<style lang="scss" scoped>
.px-header {
  .px-header--desktop {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;

    .px-header-header--desktop--links {
      float: right;

      .px-header-header--desktop--link {
        margin-left: .5rem;
        margin-right: .5rem;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }

  .px-header--mobile {
    background-color: #fff;
    position: fixed;
    display: block;
    bottom: 0;
    padding: 1rem;
    width: 100%;
    z-index: 999;
    border-top: 1px solid #007bff;

    .px-header--mobile--grid {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(5, 1fr);

      .px-header--mobile--link {
        text-align: center;
        padding-top: 5px;
        padding-bottom: 5px;
      }

      .px-header--mobile--link.active {
        border-bottom: 1px solid;
      }
    }
  }
}
</style>
