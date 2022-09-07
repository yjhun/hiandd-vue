<template>
  <main>
    <article>
      <div
        class="flex h-[600px] w-full flex-col justify-center bg-fixed pl-[100px]"
        :style="{
          'background-image': 'url( ' + require('@/assets/fnb.png') + ' )',
        }"
      >
        <div class="mb-5 text-6xl font-bold text-white">FOOD & BEVERAGE</div>
        <div class="text-xl font-bold text-white">
          하이앤디에서 운영하는 직영 F&B를 만나보세요.
        </div>
      </div>
    </article>
    <article>
      <div class="container py-[150px]">
        <div class="mb-[100px] text-center text-3xl font-bold">
          최고의 맛과 분위기를 제공하는<br />하이앤디 F&B 입니다.
        </div>
        <div class="grid grid-cols-3 gap-x-7">
          <div
            class="flex flex-col items-center space-y-2.5"
            v-for="item in fandb"
            :key="item"
          >
            <div class="flex flex-col items-center space-y-2">
              <div class="h-10 w-10 bg-black"></div>
              <div class="text-lg font-bold">{{ item.title }}</div>
            </div>
            <div class="whitespace-pre-line text-center text-sm">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </article>
    <article>
      <div class="grid grid-cols-3">
        <div
          class="flex h-[500px] flex-col justify-center pl-10 text-left"
          v-for="list in place"
          :key="list"
          :style="{ backgroundImage: 'url(' + list.img + ')' }"
        >
          <div class="mb-3 text-5xl font-bold text-white">{{ list.title }}</div>
          <div class="mb-8 h-[5px] w-[100px] bg-white"></div>
          <div
            class="mb-8 whitespace-pre-line text-sm font-semibold text-white"
          >
            {{ list.content }}
          </div>
          <div class="inline-block">
            <a
              class="border border-white py-2 px-9 text-xs text-white"
              :href="list.url"
              >Read More</a
            >
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
export default {
  data() {
    return {
      fandb: [
        {
          title: "식음료",
          content:
            "신선한재료로 만든 음식과 음료를 제공합니다. \n 청결한 주방을 유지하며 위생관리에 최선을 다합니다.",
        },
        {
          title: "서비스",
          content:
            "항상 밝은 표정과 자세로 맞이하겠습니다. \n 고객님의 불편함이 없도록 서비스에 최선을 다합니다.",
        },
        {
          title: "분위기",
          content:
            "활기차고 따뜻한 매장 분위기를 추구합니다. \n 특별한 날과 일상 모두를 담아 좋은 경험을 만들어보세요.",
        },
      ],
      place: [
        {
          title: "센트럴퍼크",
          content: "분위기 좋은 홍대 레스토랑, \n 센트럴퍼크 입니다.",
          img: require("@/assets/fandb1.png"),
          url: "http://hiandd.com/centralperk.html",
        },
        {
          title: "카페 타임오더",
          content: "베이커리가 돋보이는 카페, \n 카페 타임오더 입니다.",
          img: require("@/assets/fandb2.png"),
          url: "http://hiandd.com/cafetimeorder.html",
        },
        {
          title: "웨스트도어",
          content:
            "자연의 색을 담은 샐러드와 다양한 음료, \n 웨스트도어 입니다.",
          img: require("@/assets/fandb3.png"),
          url: "http://hiandd.com/westdoor.html",
        },
      ],
    };
  },
};
</script>
