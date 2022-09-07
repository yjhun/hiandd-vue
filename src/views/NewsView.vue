<template>
  <main>
    <HeaderMargin :data="data" />
    <article>
      <div class="container pt-[100px] pb-[30px]">
        <h2 class="pb-[30px] text-3xl font-bold">{{ data.curTitle.title }}</h2>
        <ul>
          <li
            v-for="list in data.news"
            :key="list"
            class="space-y-2 border-b border-pink-100 p-2"
          >
            <a :href="list.url" target="_blank">
              <div class="mb-2 flex space-x-2">
                <div class="border-r border-black pr-2 text-sm">
                  {{ list.date }}
                </div>
                <div class="text-sm">{{ list.title }}</div>
              </div>
              <div class="text-sm text-gray-500 line-clamp-1">
                {{ list.content }}
              </div>
            </a>
          </li>
        </ul>
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
          title: "News",
        },
        curTitle: {
          title: "하이앤디의 관련 기사를 확인하세요.",
        },
        news: [
          {
            date: "2020-12-30",
            title: "KT&G, 청년 스타트업 지원하며 코로나 위기 극복 돕는다",
            content:
              "[조선비즈] KT&G는 코로나바이러스 감염증(코로나19) 위기에도 불구하고 청년 스타트업을 지원하며 창업 생태계에 활력을 불어넣고 있다.",
            url: "https://biz.chosun.com/site/data/html_dir/2020/12/30/2020123002595.html",
          },
          {
            date: "2020-12-29",
            title: "'상상마당 부산' 문화 · 예술 · 창업허브 역할 톡톡",
            content:
              "[국제신문] 지난 9월 부산 부산진구 부전동에서 개관한 복합문화공간 'KT&G 상상마당 부산'이 지역의 문화·예술·창업 허브로 자리매김 했다.",
            url: "http://www.kookje.co.kr/news2011/asp/newsbody.asp?code=0200&key=20201230.22012009888",
          },
        ],
      },
    };
  },
};
</script>
