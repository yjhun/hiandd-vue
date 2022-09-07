<template>
  <main>
    <article class="h-screen">
      <img
        src="@/assets/slide.png"
        alt="slide"
        class="h-full w-full object-cover"
      />
    </article>
    <article class="container pt-[120px] pb-[50px]">
      <article class="mb-[250px]">
        <div class="mb-[100px] grid grid-cols-3">
          <div class="text-[32px]">
            <span class="font-bold">새로운 주문의 시작</span>
            <br />하이앤디 입니다.
          </div>
          <div class="invisible"></div>
          <div>
            <img src="@/assets/plane.png" alt="plane" />
          </div>
        </div>
        <div class="grid grid-cols-3">
          <div class="space-y-4" v-for="item in story" :key="item">
            <div class="flex items-center space-x-4">
              <div class="h-9 w-9 bg-gray-600"></div>
              <div class="text-lg">{{ item.title }}</div>
            </div>
            <div
              class="whitespace-pre-line text-sm text-gray-500"
              style="word-break: keep-all"
            >
              {{ item.text }}
            </div>
          </div>
        </div>
      </article>
      <article>
        <div class="mb-[30px] text-[32px]">NEWS</div>
        <div class="mx-auto max-w-4xl">
          <ul class="mb-8">
            <li
              class="mb-4 border-b-2 border-pink-300 pb-4 last:mb-0"
              v-for="item in news"
              :key="item"
            >
              <a :href="item.url" target="_blank" class="block">
                <div class="mb-1 flex space-x-2">
                  <div class="border-r border-black pr-2 text-sm">
                    {{ item.date }}
                  </div>
                  <div class="text-sm">{{ item.title }}</div>
                </div>
                <div class="text-sm text-gray-400 line-clamp-1">
                  {{ item.sub }}
                </div>
              </a>
            </li>
          </ul>
          <a href="http://hiandd.com/news.html" class="block text-center"
            >관련 기사 더보기</a
          >
        </div>
      </article>
    </article>
    <article>
      <article>
        <div
          class="flex first:bg-gray-200 last:flex-row-reverse"
          v-for="item in orders"
          :key="item"
        >
          <div class="w-1/2">
            <img :src="item.img" alt="img" class="w-full" />
          </div>
          <div class="w-1/2 pl-[120px]">
            <div class="flex h-full flex-col justify-center">
              <div class="mb-6 text-[45px] font-bold">{{ item.title }}</div>
              <div class="mb-4 text-2xl">{{ item.subTitle1 }}</div>
              <div class="mb-5 text-lg">{{ item.subTitle2 }}</div>
              <div class="mb-6 whitespace-pre-line text-sm">
                {{ item.subTitle3 }}
              </div>
              <div class="inline-block">
                <a
                  :href="item.url"
                  class="rounded bg-slate-900 py-2.5 px-9 text-xs text-white"
                  >서비스 바로가기</a
                >
              </div>
            </div>
          </div>
        </div>
      </article>
    </article>
  </main>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      story: [
        {
          title: "Branding",
          text: "플랫폼 비즈니스를 통해 하이앤디의 파트너는 \n 간접적인 브랜딩과 마케팅을 경험할 수 있습니다.",
        },
        {
          title: "Design",
          text: "제품 기능에 만족하지 않고 항상 고민합니다. \n 사용자들에게 우수한 디자인과 경험을 제공합니다.",
        },
        {
          title: "Production",
          text: "사용자들의 입장을 가장 먼저 생각하며 \n 제품과 서비스 개선에 언제나 최선을 다합니다.",
        },
      ],
      news: [
        {
          date: "2020-12-30",
          title: "KT&G, 청년 스타트업 지원하며 코로나 위기 극복 돕는다",
          sub: "[조선비즈] KT&G는 코로나바이러스 감염증(코로나 19) 위기에도 불구하고 청년 스타트업을 지원하며 창업 생태계에 활력을 불어넣고 있다. 사회 혁신 분야 창업을 희망하는 청년을 지원하는 '상상 스타트업 캠프'가 대표적이다.",
          url: "https://biz.chosun.com/site/data/html_dir/2020/12/30/2020123002595.html",
        },
        {
          date: "2020-12-29",
          title: "'상상마당 부산'문화, 예술, 창업허브 역할 톡톡",
          sub: "[국제신문] 지난 9월 부산 부산진구 부전동에서 개관한 복합문화공간 'KT&G 상상마당 부산'이 지역의 문화, 예술, 창업 허브로 자리매김 했다.",
          url: "http://www.kookje.co.kr/news2011/asp/newsbody.asp?code=0200&key=20201230.22012009888",
        },
        {
          date: "2020-12-22",
          title: "20대 청년사업가 서현민 대표, 동국대에 '1000만원' 기부",
          sub: "[스마트경제] 동국대 창업동아리 출신의 20대 벤처 CEO가 모교에 1000만원을 기부했다. 서현민 ㈜글로벌오더 대표(산업시스템공학 12)가 그 주인공이다.",
          url: "http://www.dailysmart.co.kr/news/articleView.html?idxno=37730",
        },
        {
          date: "2020-11-23",
          title: "코로나가 만든 신시장, 비대면 룸서비스 '호텔오더'",
          sub: "[THE FIRST] 코로나가 장기화되면서 많은 사람들이 비대면 서비스를 추구하고 있다. 이에 발맞춰 급격하게 성장하고 있는 분야 중 하나가 호텔오더 서비스이다.",
          url: "https://www.thefirstmedia.net/news/articleView.html?idxno=66452",
        },
        {
          date: "2020-11-13",
          title: "언택트 문화 속 스마트오더의 새로운 강자, 글로벌오더",
          sub: "[서울경제] 최근 다양한 카페들이 늘어나면서 일상의 여유 시간과 만남의 시간을 카페에서 가지는 경우가 많다.",
          url: "https://www.sedaily.com/NewsVIew/1ZAE5OFJY6",
        },
      ],
      orders: [
        {
          img: require("@/assets/order-hotel.png"),
          title: "HOTEL ORDER",
          subTitle1: "터치 하나로 별 하나를 더하다.",
          subTitle2: "Smart Concierge Solution. 호텔오더",
          subTitle3:
            "호텔 상품이나 여행 패키지를 연계해서 \n 고객들에게 새로운 여행 경험을 선사해보세요.",
          url: "http://hiandd.com/hotelorder.html",
        },
        {
          img: require("@/assets/order-time.png"),
          title: "TIME ORDER",
          subTitle1: "커피에 기다림을 빼다.",
          subTitle2: "선결제 O2O 앱 서비스. 타임오더",
          subTitle3: "통합형 스마트오더 서비스, \n 타임오더와 함께하세요.",
          url: "http://hiandd.com/timeorder.html",
        },
      ],
    };
  },
};
</script>
