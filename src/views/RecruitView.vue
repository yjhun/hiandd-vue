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
          title: "Recruit",
        },
        curTitle: {
          title: "하이앤디와 함께할 인재를 찾습니다.",
        },
        list: [
          { title: "경영기획팀장", date: "2021.03", state: `- 마감` },
          { title: "재무/세무/회계전반", date: "2021.03", state: `- 마감` },
          { title: "프론트엔드 개발자", date: "2021.03", state: `- 마감` },
          { title: "백엔드 개발자", date: "2021.03", state: `- 마감` },
          { title: "윈도우 개발자", date: "2021.03", state: `- 마감` },
        ],
      },
    };
  },
};
</script>
