<template>
  <header
    id="header"
    class="fixed top-0 left-0 z-10 flex h-16 w-full items-center justify-between bg-white px-7"
  >
    <div class="w-50 flex-none">
      <router-link to="/">
        <img src="@/assets/logo-black.png" alt="logo" class="w-full" />
      </router-link>
    </div>
    <ul class="flex space-x-6">
      <li v-for="list in menus" :key="list">
        <router-link :to="list.url" class="text-gray-500 hover:text-black">{{
          list.title
        }}</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "header-component",
  data() {
    return {
      menus: [
        { title: "Home", url: "/" },
        { title: "About Us", url: "/AboutUs" },
        { title: "HOTEL ORDER", url: "/HotelOrder" },
        { title: "TIME ORDER", url: "/TimeOrder" },
        { title: "F&B", url: "/FandB" },
        { title: "News", url: "/NewsView" },
        { title: "Recruit", url: "/RecruitView" },
        { title: "Notice", url: "/NoticeView" },
        { title: "Contact", url: "/ContactView" },
        { title: "Axios", url: "/Axiosview" },
      ],
    };
  },
};
</script>
