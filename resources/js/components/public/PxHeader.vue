<template>
  <div class="bg-teal-600 w-100 flex items-center justify-between flex-wrap p-6 border-b border-teal-600 md:border-none sticky-header" id="header-menu">
    <div class="container mx-auto">
      <div class="block md:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white hover:bg-teal-600 float-right"
          @click="showMenu()"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>
      <div class="flex items-center flex-shrink-0 mr-6 md:float-left">
        <a href="/" class="text-2xl font-medium text-white">
          Manuel Ojeda
        </a>
      </div>
      <div id="public-header-menu" class="w-full flex-grow md:flex md:items-center md:w-auto hidden md:block">
        <div class="text-sm md:flex-auto">
          <div class="md:float-right mt-4 md:mt-0">
            <a href="/" class="mr-3 md:text-lg font-medium text-white block md:inline mb-2 md:mb-0">
              Home
            </a>
            <a href="/portfolio" class="mr-3 md:text-lg text-white hover:font-medium block md:inline my-2 md:mb-0">
              Portfolio
            </a>
            <a href="/education" class="mr-3 md:text-lg text-white hover:font-medium block md:inline my-2 md:mb-0">
              Education
            </a>
            <a href="/blog" class="mr-3 md:text-lg text-white hover:font-medium block md:inline my-2 md:mb-0">
              Blog
            </a>
            <a href="#" class="mr-3 md:text-lg text-white hover:font-medium block md:inline my-2 md:mb-0">
              Resume
            </a>
          </div>
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
