<template>
  <div>
    <public-layout>
      <div class="container mx-auto my-6">
        <presentation
          class="mb-5"
          :personal="page.content.personal"
        />

        <div class="mission text-center lg:text-left px-2">
          <h2 class="font-bold text-2xl">
            My mission is
          </h2>
          <blockquote :cite="page.content.personal.name">
            <p>
              {{
                page.content.mission
              }}
            </p>
          </blockquote>
        </div>

        <div class="skills text-center my-5">
          <h2 class="font-bold text-2xl">
            My skills
          </h2>

          <div class="hidden lg:block">
            <horizontal-bar
              :chart-data="collection"
              :options="options"
              :width="800"
              :height="450"
            />
          </div>
          <div class="lg:hidden">
            <horizontal-bar
              :chart-data="collection"
              :options="options"
              :width="800"
              :height="650"
            />
          </div>
        </div>
      </div>
    </public-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import Presentation from '@/components/public/HomePage/Presentation.vue'
import HorizontalBar from '@/charts/HorizontalBar.vue'
// eslint-disable-next-line no-unused-vars
import { DataCollection } from '@/interface/DataCollection'
// import Presentation from '../../components/public/HomePage/Presentation.vue'

export default defineComponent({
  name: 'PublicIndex',
  props: {
    page: {
      type: Object
    },
    skills: {
      type: Array as () => Array<any>,
      default: []
    }
  },
  components: {
    Presentation,
    HorizontalBar
  },
  setup (props) {
    const collection = ref<DataCollection>({
      labels: [],
      datasets: []
    })

    const options = {
      legend: { display: false },
      responsive: true,
      mantainAspectRatio: false
    }

    function initChart () {
      collection.value.datasets.push({
        label: 'Data One',
        backgroundColor: '#3182ce',
        barThickness: 30,
        barPercentage: 0.5,
        data: []
      })

      props.skills.map(skill => {
        collection.value.labels.push(skill.name)
        collection.value.datasets[0].data.push(skill.amount)
      })
    }

    initChart()

    return {
      collection,
      options
    }
  }
})
</script>
