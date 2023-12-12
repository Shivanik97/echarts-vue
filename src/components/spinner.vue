<template>
    <div><ag-grid-vue :rowData="rowData" :columnDefs="colDefs" :framework-components="frameworkComponents" style="height: 500px"
    class="ag-theme-quartz">
        </ag-grid-vue></div>
</template>
  
<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { AgGridVue } from "ag-grid-vue3"; // Vue Grid Logic
import customOverlay from './customOverlay.vue';

const rowData = ref([
    { mission: "Voyager", company: "NASA", location: "Cape Canaveral", date: "1977-09-05", rocket: "Titan-Centaur ", price: 86580000, successful: true },
    { mission: "Apollo 13", company: "NASA", location: "Kennedy Space Center", date: "1970-04-11", rocket: "Saturn V", price: 3750000, successful: false },
    { mission: "Falcon 9", company: "SpaceX", location: "Cape Canaveral", date: "2015-12-22", rocket: "Falcon 9", price: 9750000, successful: true }
]);

// Column Definitions: Defines & controls grid columns.
const colDefs = ref([
    { field: "mission" },
    { field: "company" },
    { field: "location" },
    { field: "date" },
    { field: "price" },
    { field: "successful" },
    { field: "rocket" }
]);
let frameworkComponents = ref<any | null>(null);
onMounted(() => {
    frameworkComponents.value = {
      agLoadingOverlay: customOverlay
    };
})
</script>
