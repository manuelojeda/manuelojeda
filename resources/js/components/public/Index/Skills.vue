<template>
  <div class="skills text-center my-5 mt-8">
    <h2 class="font-medium text-4xl">
      My skills
    </h2>

    <div class="hidden lg:block">
      <horizontal-bar
        :chart-data="collection"
        :options="options"
        :width="1200"
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
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import HorizontalBar from '@/charts/HorizontalBar.vue';
// eslint-disable-next-line no-unused-vars
import { DataCollection } from '@/interface/DataCollection';

export default defineComponent({
  name: 'Skills',
  components: {
    HorizontalBar,
  },
  props: {
    skills: {
      type: Array as () => Array<any>,
      default: [],
    },
  },
  setup(props) {
    const collection = ref<DataCollection>({
      labels: [],
      datasets: [],
    });

    const options = {
      legend: {
        display: false,
      },
      responsive: true,
      mantainAspectRatio: false,
      scales: {
        xAxes: [
          {
            ticks: {
              suggestedMin: 50,
            },
          },
        ],
      },
    };

    function initChart() {
      collection.value.datasets.push({
        backgroundColor: '#3182ce',
        barThickness: 30,
        barPercentage: 0.5,
        data: [],
      });

      props.skills.map((skill) => {
        collection.value.labels.push(skill.name);
        collection.value.datasets[0].data.push(skill.amount);
        return null;
      });
    }

    initChart();

    return {
      collection,
      options,
    };
  },
});
</script>
