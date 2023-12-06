<template>
  <div>
    <v-chart ref="chart" class="chart" :option="option" :loading="true" :autoresize="true"
      :loading-options="option.default" />
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
import { ref, provide, onMounted } from 'vue';
import spinner from './spinner.vue';
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
  default: {
    text: "Loading...",
    color: "#be0000",
    textColor: "#000000",
    maskColor: "rgba(255, 255, 255, 0.8)",
    zlevel: 0,
    // Font size. Available since `v4.8.0`.
    fontSize: 16,
    // Show an animated "spinner" or not. Available since v4.8.0`.
    showSpinner: true,
    // Radius of the "spinner". Available since `v4.8.0`.
    spinnerRadius: 20,
    // Line width of the "spinner". Available since `v4.8.0`.
    lineWidth: 4,
    // Font thick weight. Available since `v5.0.1`.
    fontWeight: 400,
    // Font style. Available since `v5.0.1`.
    fontStyle: "normal",
    // Font family. Available since `v5.0.1`.
    fontFamily: "ariana pro",
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

</script>

<style scoped>
.chart {
  height: 100vh;
}
</style>
