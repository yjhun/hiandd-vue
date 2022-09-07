<template>
  <main>
    <HeaderMargin :data="data" />
    <article>
      <div class="flex w-full">
        <div>
          <img
            src="@/assets/about.png"
            alt="img"
            class="h-full w-full object-cover"
          />
        </div>
        <div class="w-full bg-gray-100 py-[80px] pl-[100px]">
          <div class="max-w-[550px]">
            <div class="mb-10 text-3xl">
              새로운 주문의 시작<br />주식회사 하이앤디입니다.
            </div>
            <div class="mb-[60px] text-sm">
              하이앤디는 아래 네 가지 슬로건을 바탕으로 하여<br />구성원들의
              공통된 목표를 향해 나아갑니다.
            </div>
            <ul class="grid grid-cols-2 gap-4">
              <li
                v-for="list in data.slogan"
                :key="list"
                class="flex items-center space-x-5"
              >
                <div class="h-[30px] w-[30px] bg-black"></div>
                <div>{{ list.name }}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
    <article>
      <div class="pt-[100px] pb-[60px]">
        <div class="container">
          <div class="mb-8 text-3xl">하이앤디가 걸어온 스토리</div>
          <div>
            <div class="mb-2.5 text-3xl font-bold">2020</div>
            <ul>
              <li
                class="mb-[60px] flex justify-between space-x-10"
                v-for="list in data.stories"
                :key="list"
              >
                <div class="flex w-[350px] flex-none space-x-4">
                  <div
                    class="w-[100px] flex-none border-r border-gray-100 pr-10 text-xs"
                  >
                    <span class="mr-2 text-3xl">{{ list.month }}</span
                    >월
                  </div>
                  <div style="word-break: keep-all">{{ list.title }}</div>
                </div>
                <div class="flex-grow whitespace-pre-line">
                  {{ list.content }}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
    <article class="bg-gray-100">
      <div class="container flex justify-center space-x-[100px] py-[130px]">
        <div class="relative pl-6 pt-6 text-xs text-gray-500">
          <span
            class="absolute top-0 left-0 text-5xl font-bold leading-none text-black"
            >"</span
          >-모두가 마차를 탈 때, 많은 기업들이 조금이라도 더 빠른 마차를
          만들고자 엄청난 인력과 자본을 투자하였습니다. 주식회사 하이앤디는 더
          빠른 마차를 만들어 내는 것이 아니라 자동차를 생산하고자 하는
          기업입니다. 제한된 시간과 장소를 뛰어넘는 효율적인 주문으로 O2O
          플랫폼을 운영하고 있습니다. 새로운 주문의 시작 하이앤디가 만들어
          내겠습니다.
        </div>
        <div
          class="flex flex-none items-center justify-center space-x-[100px] border-b border-gray-300"
        >
          <div class="space-y-1.5">
            <div class="text-sm font-bold">Hyunmin Suh</div>
            <div class="text-sm text-gray-300">대표이사 / CEO</div>
          </div>
          <div>
            <img src="@/assets/ceo.png" alt="img" class="max-w-[128px]" />
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import HeaderMargin from "@/components/HeaderMargin.vue";

export default {
  components: {
    HeaderMargin,
  },
  data() {
    return {
      data: {
        header: {
          title: "About Us",
        },
        slogan: [
          { name: "정확한 의사결정" },
          { name: "문화에 대한 유연성" },
          { name: "삶과 업무의 균형" },
          { name: "공유와 소통" },
        ],
        stories: [
          {
            month: "12",
            title: "웨스트도어 부산 중구점 오픈",
            content:
              "하이앤디의 새로운 F&B브랜드, '웨스트도어' 부산 중구점이 오픈했습니다. \n 작게는 음식에 담긴 영양적 메세지부터 크게는 웨스트도어의 브랜드 가치를 소비자에게 전합니다.",
          },
          {
            month: "11",
            title: "스타트업휠 TOP50 선발",
            content:
              "베트남 BSSC(Business Startup Support Center)에서 주최한 창업경진대회 '스타트업휠(Startup Wheel)'에서 주식회사 하이앤디가 TOP50에 선정되며 대회를 마감했습니다.",
          },
          {
            month: "09",
            title: "사옥 이전",
            content:
              "주식회사 하이앤디 사옥 이전을 완료했습니다. \n 서울 마포구 양화로6길 57-19",
          },
          {
            month: "06",
            title: "직영 레스토랑 타임즈랩키친 룸서비스 메뉴 리뉴얼",
            content:
              "홍대 나인브릭호텔 2층에 위치한 하이앤디 직영 레스토랑 타임즈랩키친의 룸서비스 메뉴가 리뉴얼 되었습니다.",
          },
          {
            month: "05",
            title: "주문 및 결제 시스템, 길병원 푸드코트 도입",
            content:
              "인천시에 위치한 가천대 길병원 푸드코트(장수식당)에 타임오더 주문 및 결제 시스템이 도입되었습니다. 키오스크, POS와 함께 타임오더 앱과의 연동으로 방문자들에게 높은 선호도를 보이고 있습니다.",
          },
          {
            month: "01",
            title: "사명 변경",
            content:
              "주식회사 타임오더에서 주식회사 하이앤디로 사명이 변경되었습니다. \n 주문의 새로운 시작과 더 높은 목표를 위함입니다.",
          },
        ],
      },
    };
  },
};
</script>
