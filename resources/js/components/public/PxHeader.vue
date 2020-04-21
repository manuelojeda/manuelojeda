<template>
  <div
    class="bg-white w-100 flex items-center
      justify-between flex-wrap p-6 border-b-2
      border-teal-600 md:border-none
      "
    id="header-menu"
    >
    <div class="container mx-auto">
      <div class="block md:hidden">
        <button
          class="flex items-center px-3 py-2 border-2
            rounded text-teal-600 border-white border-teal-500
            hover:text-white hover:border-white
            hover:bg-teal-600 float-right transition duration-300"
          @click="showMenu()"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>
      <div class="flex items-center flex-shrink-0 mr-6 md:float-left">
        <a href="/" class="text-2xl font-medium text-teal-600">
          Manuel Ojeda
        </a>
      </div>
      <div
        id="public-header-menu"
        class="w-full flex-grow md:flex md:items-center
          md:w-auto hidden md:block transform duration-300"
      >
        <div class="text-sm md:flex-auto">
          <div class="md:float-right mt-4 md:mt-0">
            <a
              href="/"
              class="p-3 md:text-lg font-medium
                text-teal-600 block md:inline
                mb-2 md:mb-0
                hover:bg-teal-600 hover:text-white
                transition duration-300
              "
            >
              Home
            </a>
            <a
              href="/portfolio"
              class="p-3 md:text-lg font-medium
                text-teal-600 block md:inline
                mb-2 md:mb-0
                hover:bg-teal-600 hover:text-white
                transition duration-300
              "
            >
              Portfolio
            </a>
            <a
              href="/education"
              class="p-3 md:text-lg font-medium
                text-teal-600 block md:inline
                mb-2 md:mb-0
                hover:bg-teal-600 hover:text-white
                transition duration-300
              "
            >
              Education
            </a>
            <a
              href="/blog"
              class="p-3 md:text-lg font-medium
                text-teal-600 block md:inline
                mb-2 md:mb-0
                hover:bg-teal-600 hover:text-white
                transition duration-300
              "
            >
              Blog
            </a>
            <a
              href="#"
              class="p-3 md:text-lg font-medium
                text-teal-600 block md:inline
                mb-2 md:mb-0
                hover:bg-teal-600 hover:text-white
                transition duration-300
              "
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import headerObserver from '@/composables/headerObserver';

export default Vue.extend({
  name: 'PxHeader',
  created() {
    window.addEventListener('click', (e: any) => {
      if (!document.getElementById('header-menu').contains(e.target)) {
        const menu = document.getElementById('public-header-menu');
        if (
          !menu.classList.contains('hidden')
          && menu.classList.contains('menu:open')
        ) {
          menu.classList.add('hidden');
          menu.classList.remove('menu:open');
        }
      }
    });

    window.addEventListener('load', () => {
      headerObserver(document.getElementById('header-menu'));
    });
  },
  methods: {
    showMenu() {
      const menu = document.getElementById('public-header-menu');
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('menu:open');
      } else {
        menu.classList.add('hidden');
        menu.classList.remove('menu:open');
      }
    },
  },
});
</script>
