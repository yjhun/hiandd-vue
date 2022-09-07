<template>
  <Order :data="time" />
</template>

<script>
import Order from "@/components/Order.vue";

export default {
  name: "TimeOrder",
  components: {
    Order,
  },
  data() {
    return {
      time: {
        article0: {
          videoUrl: require("@/assets/timeOrder.mp4"),
        },
        article1: {
          title0: "커피에 기다림을 빼다.",
          title1: "UNTACT SMART ORDER APP. 타임오더 입니다.",
          title2: "타임오더의 매출 사례",
          list: [
            "단골 고객 확보",
            "이벤트를 통한 매출 증대",
            "앱내 마케팅 효과",
            "맞춤형 광고 진행",
          ],
        },
        article2: {
          backgroundColor: {
            backgroundColor: "#fce7f3",
          },
          tab: ["Mobile Order", "Save Cost", "Marketing", "Administration"],
          content: {
            mainTitle: "Mobile Order",
            subTitle: "어플리케이션을 통한 모바일 주문",
            text: "고객은 타임오더 어플리케이션을 통해 모바일로 음료를 주문합니다. \n 결제를 위해 줄을서지 않아도 된다는 장점은 매장 회전율을 높입니다.",
            url: "https://timeorder.co.kr/index.html",
          },
        },
        article3: {
          backgroundColor: {
            backgroundColor: "#fce7f3",
          },
          content: [
            {
              idx: "01",
              title: "고객의 요청",
              content:
                "고객은 타임오더 앱 또는 키오스크를 통해 원하는 매장을 선택하고 음료를 주문합니다.",
            },
            {
              idx: "02",
              title: "접수 및 알림",
              content: "매장에서는 태블릿을 통해 고객의 주문을 접수합니다.",
            },
            {
              idx: "03",
              title: "요구사항 처리 및 전달",
              content:
                "매장은 고객의 요청을 처리하고 고객에게 서비스를 전달합니다.",
            },
          ],
          inquire: {
            title: "TIME ORDER",
          },
          review: {
            userId: "사용자 띵*님",
            orderType: "TIME ORDER",
            content:
              "타임오더를 통해 기존에 없었던 서비스를 고객에게 제공할 수 있다는 점이 가장 큰 매력이라고 생각됩니다.",
          },
        },
      },
    };
  },
};
</script>
