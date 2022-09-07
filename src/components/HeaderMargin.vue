<template>
  <article :style="{ marginTop: headerHeight }">
    <div class="bg-[#303036]">
      <div class="flex items-center justify-between px-[100px] py-[60px]">
        <div class="text-2xl text-white">{{ data.header.title }}</div>
        <div class="flex space-x-2">
          <router-link to="/" class="text-xs text-gray-400">Home</router-link>
          <span class="text-xs text-white">/</span>
          <div class="text-xs text-white">{{ data.header.title }}</div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "header-margin-component",
  computed: {
    headerHeight() {
      const header = document.getElementById("header");
      return header.offsetHeight + "px";
    },
  },
  props: {
    data: Object,
  },
};
</script>
