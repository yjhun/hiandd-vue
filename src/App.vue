<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "main-component",
  components: {
    Header,
    Footer,
  },
};
</script>
