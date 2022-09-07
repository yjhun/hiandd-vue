<template>
  <footer class="bg-[#303036]">
    <div class="container grid grid-cols-3 py-[100px] text-gray-400">
      <article>
        <div class="flex flex-col">
          <img
            src="@/assets/logo-white.png"
            alt="logo"
            class="mb-[50px] w-[70px]"
          />
          <div class="mb-6">
            <div class="text-sm">주식회사 하이앤디</div>
            <div class="text-sm">서울특별시 강남구 언주로 315</div>
          </div>
          <div>
            <div class="text-sm">대표자 : 서현민</div>
            <div class="text-sm">사업자등록번호 : 422-81-01436</div>
            <div class="text-sm">
              <a href="mailto:support@hiandd.com">support@hiandd.com</a>
            </div>
          </div>
        </div>
      </article>
      <article class="text-white">
        <div class="pt-5 pb-4 text-lg font-bold">HI&#38;D</div>
        <ul>
          <li
            v-for="menu in menus"
            :key="menu"
            class="mb-2 text-sm font-bold last:mb-0 hover:text-gray-300"
          >
            <a :href="menu.url">{{ menu.title }}</a>
          </li>
        </ul>
      </article>
      <article>
        <div class="pt-5 pb-4 text-lg font-bold text-white">Recent News</div>
        <ul>
          <li v-for="news in news" :key="news" class="mb-3 last:mb-0">
            <div class="mb-1 text-sm line-clamp-1">
              <a :href="news.url">{{ news.title }}</a>
            </div>
            <div class="text-xs">{{ news.date }}</div>
          </li>
        </ul>
      </article>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-component",
  data() {
    return {
      menus: [
        { title: "Home", url: "/" },
        { title: "About us", url: "/AboutUs" },
        { title: "HOTEL ORDER", url: "/HotelOrder" },
        { title: "TIME ORDER", url: "/TimeOrder" },
        { title: "F&B", url: "/FandB" },
        { title: "News", url: "/NewsView" },
        { title: "Recruit", url: "/RecruitView" },
        { title: "Notice", url: "/NoticeView" },
        { title: "Contact", url: "/ContactView" },
        { title: "Axios", url: "/Axiosview" },
      ],
      news: [
        {
          title: "KT&G, 청년 스타트업 지원하며 코로나 위기 극복 돕는다",
          url: "https://biz.chosun.com/site/data/html_dir/2020/12/30/2020123002595.html",
          date: "2020-12-30",
        },
        {
          title: "'상상마당 부산' 문화·예술·창업허브 역할 톡톡",
          url: "http://www.kookje.co.kr/news2011/asp/newsbody.asp?code=0200&key=20201230.22012009888",
          date: "2020-12-29",
        },
        {
          title: "20대 청년사업가 서현민 대표, 동국대에 '1000만원' 기부",
          url: "http://www.kookje.co.kr/news2011/asp/newsbody.asp?code=0200&key=20201230.22012009888",
          date: "2020-12-22",
        },
      ],
    };
  },
};
</script>
