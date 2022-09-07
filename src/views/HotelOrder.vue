<template>
  <Order :data="hotel" />
</template>

<script>
import Order from "@/components/Order.vue";

export default {
  name: "HotelOrder",
  components: {
    Order,
  },
  data() {
    return {
      hotel: {
        article0: {
          videoUrl: require("@/assets/hotelOrder.mp4"),
        },
        article1: {
          title0: "터치 하나로 별 하나를 더하다.",
          title1: "SMART CONCIERGE SOLUTION. 호텔오더 입니다.",
          title2: "호텔오더 도입 효과",
          list: [
            "F&B 신규매출 상승",
            "GOODS 신규매출 상승",
            "ACCOMODATION 연계매출 상승",
            "HOTEL 단골 고객 확보",
          ],
        },
        article2: {
          backgroundColor: {
            backgroundColor: "#fef9c3",
          },
          tab: ["Dinig", "Concierge", "Tour", "Shopping"],
          content: {
            mainTitle: "Dining",
            subTitle: "호텔 레스토랑, 카페 예약, 룸서비스 주문",
            text: "호텔 레스토랑, 카페 주문까지! \n 호텔오더는 다이닝 서비스를 제공하여 투숙객은 \n 호텔 내외에 있는 레스토랑, 카페 등의 F&B를 한 번에 주문할 수 있고, \n 호텔은 부가 수익을 창출할 수 있습니다.",
            url: "https://www.hotelorder.co.kr/ko/",
          },
        },
        article3: {
          backgroundColor: {
            backgroundColor: "#fef9c3",
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
            title: "HOTEL ORDER",
          },
          review: {
            userId: "호텔 9BRI**님",
            orderType: "HOTEL ORDER",
            content:
              "호텔오더를 통해 기존에 없었던 서비스를 고객에게 제공할 수 있다는 점이 가장 큰 매력이라고 생각됩니다. \n 또한, 호텔 상품이나 여행 패키지 등을 연계하여 새로운 경험을 전달할 수 있습니다.",
          },
        },
      },
    };
  },
};
</script>
