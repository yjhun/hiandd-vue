<template>
  <main>
    <HeaderMargin :data="data" />
    <CommonList :data="data" />
  </main>
</template>

<script>
import HeaderMargin from "@/components/HeaderMargin.vue";
import CommonList from "@/components/CommonList.vue";

export default {
  components: {
    HeaderMargin,
    CommonList,
  },
  data() {
    return {
      data: {
        header: {
          title: "Notice",
        },
        curTitle: {
          title: "하이앤디의 공지사항을 확인하세요.",
        },
        list: [
          { title: "타임오더 파트너사 관련 안내사항", date: "2021.03" },
          { title: "재무/세무/회계전반", date: "2021.03" },
          { title: "프론트엔드 개발자", date: "2021.03" },
          { title: "백엔드 개발자", date: "2021.03" },
          { title: "윈도우 개발자", date: "2021.03" },
        ],
      },
    };
  },
};
</script>
