<template>
  <div>
    <v-chart ref="chart" class="chart" :option="option" :loading="true" :autoresize="true"
      :loading-options="loadingOptions" />
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts/core';
import { use } from 'echarts/core';
import { PieChart } from 'echarts/charts';
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  GraphicComponent,
} from 'echarts/components';
import { LineChart, } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import VChart, { LOADING_OPTIONS_KEY } from 'vue-echarts';
import { ref, onMounted } from 'vue';
import { createLoadingOptions } from './loadingOptions';

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
  GraphicComponent
]);
use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

const chart = ref()
const loadingOptions = createLoadingOptions();

const option = ref({
  title: {
    text: 'Stacked Line'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },

  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ],
  animationDuration: 2000
});

const updateLoading = (options: any) => {
  if (chart.value) {
    chart.value.showLoading(options);
  }
};

onMounted(() => {
  // Set the ECharts instance to the ref when the chart is ready
  chart.value = echarts.getInstanceByDom(document.querySelector('.chart')!);
  // Initial loading
  updateLoading(loadingOptions.value); // Default loading options
});
</script>

<style scoped>
.chart {
  height: 100vh;
}
</style>
