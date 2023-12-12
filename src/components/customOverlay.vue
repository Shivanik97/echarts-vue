<template>
    <div class="custom-loading-overlay absolute flex justify-between justify-items-center">
        <div class="loading-spinner" />
        <div class="ml-1 mt-4 font-sans text-base font-normal text-black">
            Loading...
        </div>
    </div>
</template>
   
<script lang="ts" setup></script>
   
<style scoped>
.custom-loading-overlay {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.loading-spinner {
    width: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: radial-gradient(farthest-side, #be0000 94%, #0000) top/5px 5px no-repeat,
        conic-gradient(#0000 30%, #be0000);
    -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 5px), #000 0);
    animation: s3 1s infinite linear;
}

@keyframes s3 {
    100% {
        transform: rotate(1turn);
    }
}
</style>