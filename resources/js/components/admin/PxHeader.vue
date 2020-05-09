<template>
  <div class="admin-header">
    <a href="#" class="admin-header--link">
      <b-icon class="icon" icon="pie-chart" />
      Dashboard
    </a>
    <a href="#" class="admin-header--link">
      <b-icon class="icon" icon="house" />
      Home
    </a>
    <a href="#" class="admin-header--link">
      <b-icon class="icon" icon="folder" />
      Portfolio
    </a>
    <a href="#" class="admin-header--link" @click="updateEducation()">
      <b-icon class="icon" icon="book" />
      Update education
    </a>
    <a href="#" class="admin-header--link">
      <b-icon class="icon" icon="newspaper" />
      Blog
    </a>
    <a href="/" class="admin-header--link">
      <b-icon class="icon" icon="arrow-return-left" />
      Return to website
    </a>
    <a href="#" class="admin-header--link">
      <b-icon class="icon" icon="lock" />
      Logout
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { askingAlert, waitingAlert, simpleAlert } from '../../utils/SweetAlerts'
import UpdateEducation from '../../utils/UpdateEducation'

export default defineComponent({
  name: 'AdminPxHeader',
  setup () {
    const updateEducation = async () => {
      const result = await askingAlert('Are you sure to update the Education section?')

      if (result.value) {
        waitingAlert('Updating information, please wait ...')
        const response = await UpdateEducation()
        simpleAlert(response.data)
      }
    }

    return {
      updateEducation
    }
  }
})
</script>

<style lang="scss" scoped>
.admin-header {
  height: 100vh;
  border-right: 1px solid #c7c7c7;

  .admin-header--link {
    text-align: center;
    display: block;
    padding: 15px;
    border-bottom: 1px solid #c7c7c7;
    transition: all ease .15s;
    color: #5656AF;

    .icon {
      font-size: 2rem;
      display: block;
      margin: 0 auto;
      margin-bottom: 10px;
    }

    &:hover {
      text-decoration: none;
      background-color: #d1d1d1;
    }
  }
}
</style>
