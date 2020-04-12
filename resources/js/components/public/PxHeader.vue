<template>
  <div class="flex items-center justify-between flex-wrap container mx-auto p-6 border-b border-teal-600 md:border-none" id="header-menu">
    <div class="flex items-center flex-shrink-0 mr-6">
      <h1 class="text-2xl font-medium text-teal-600">
        Manuel Ojeda
      </h1>
    </div>
    <div class="block md:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-black-200 border-teal-600 text-teal-600 hover:text-white hover:border-white hover:bg-teal-600"
        @click="showMenu()"
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      </button>
    </div>
    <div id="public-header-menu" class="w-full flex-grow md:flex md:items-center md:w-auto hidden md:block">
      <div class="text-sm md:flex-auto">
        <div class="md:float-right mt-4 md:mt-0">
          <a href="/" class="mr-3 md:text-lg font-medium text-teal-600 block md:inline mb-2 md:mb-0">
            Home
          </a>
          <a href="/portfolio" class="mr-3 md:text-lg text-teal-600 hover:font-medium block md:inline my-2 md:mb-0">
            Portfolio
          </a>
          <a href="/education" class="mr-3 md:text-lg text-teal-600 hover:font-medium block md:inline my-2 md:mb-0">
            Education
          </a>
          <a href="/blog" class="mr-3 md:text-lg text-teal-600 hover:font-medium block md:inline my-2 md:mb-0">
            Blog
          </a>
          <a href="#" class="mr-3 md:text-lg text-teal-600 hover:font-medium block md:inline my-2 md:mb-0">
            Resume
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PxHeader',
  created () {
    window.addEventListener('click', function (e) {
      if (!document.getElementById('header-menu').contains(e.target)) {
        const menu = document.getElementById('public-header-menu')
        if (
          !menu.classList.contains('hidden') &&
          menu.classList.contains('menu:open')
        ) {
          menu.classList.add('hidden')
          menu.classList.remove('menu:open')
        }
      }
    })
  },
  methods: {
    showMenu () {
      const menu = document.getElementById('public-header-menu')
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
        menu.classList.add('menu:open')
      } else {
        menu.classList.add('hidden')
        menu.classList.remove('menu:open')
      }
    }
  }
}
</script>
