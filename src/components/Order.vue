<template>
  <main>
    <article>
      <div class="h-full w-full">
        <video
          class="h-screen w-full object-cover"
          autoplay
          muted
          preload="preload"
        >
          <source :src="data.article0.videoUrl" />
        </video>
      </div>
    </article>
    <article>
      <div class="container py-[50px]">
        <div class="space-y-5 py-[100px]">
          <div class="text-center text-3xl">{{ data.article1.title0 }}</div>
          <div class="text-center text-3xl">{{ data.article1.title1 }}</div>
        </div>
        <div class="flex items-center justify-between">
          <div>
            <div class="mb-10 text-5xl">{{ data.article1.title2 }}</div>
            <div class="grid grid-cols-2 gap-5">
              <div
                class="flex space-x-4"
                v-for="item in data.article1.list"
                :key="item"
              >
                <div class="h-8 w-8 bg-black"></div>
                <div>{{ item }}</div>
              </div>
            </div>
          </div>
          <div class="max-w-[360px]">
            <img src="@/assets/hotelOrder1.png" alt="img" class="w-full" />
          </div>
        </div>
      </div>
    </article>
    <article :style="data.article2.backgroundColor">
      <div class="container flex items-center justify-between">
        <div class="py-[100px]">
          <div class="mb-10 space-x-5">
            <div
              class="inline-block"
              v-for="item in data.article2.tab"
              :key="item"
            >
              <div class="flex flex-col items-center space-y-4">
                <div class="h-8 w-8 bg-black"></div>
                <div class="text-sm">{{ item }}</div>
              </div>
            </div>
          </div>
          <div>
            <div class="mb-5 text-6xl leading-normal">
              {{ data.article2.content.mainTitle }}
            </div>
            <div class="mb-10 text-2xl">
              {{ data.article2.content.subTitle }}
            </div>
            <div class="mb-[60px] whitespace-pre-line text-sm">
              {{ data.article2.content.text }}
            </div>
            <a
              :href="data.article2.content.url"
              class="inline-block rounded border border-black px-9 py-4 text-xs"
              target="_blank"
              >홈페이지 바로가기</a
            >
          </div>
        </div>
        <div class="flex items-center justify-center">
          <div class="h-[300px] w-[600px] bg-black"></div>
        </div>
      </div>
    </article>
    <article>
      <div class="grid grid-cols-4 gap-20 px-10 py-[100px]">
        <div
          class="flex items-center space-x-5"
          v-for="item in data.article3.content"
          :key="item"
        >
          <div class="text-6xl font-bold">{{ item.idx }}</div>
          <div>
            <div class="mb-3 text-lg font-semibold">{{ item.title }}</div>
            <div class="whitespace-pre-line text-sm">{{ item.content }}</div>
          </div>
        </div>
        <div class="relative flex flex-col">
          <div
            class="h-[200px] w-[200px] self-end"
            :style="data.article3.backgroundColor"
          ></div>
          <div
            class="absolute top-1/2 right-0 -translate-y-1/2 transform text-4xl font-bold"
          >
            {{ data.article3.inquire.title }}
            <br />
            <span class="border-b-2 border-black">제휴 문의</span>
          </div>
        </div>
      </div>
      <div class="pb-[100px]">
        <div class="mb-10 text-center">사용자 후기</div>
        <div class="flex items-center justify-center space-x-20">
          <div>
            <div class="mb-2 text-sm">{{ data.article3.review.userId }}</div>
            <div class="text-sm">{{ data.article3.review.orderType }}</div>
          </div>
          <div class="relative overflow-hidden pt-4 pl-8 text-xs">
            <span class="absolute top-0 left-0 text-6xl">"</span>-{{
              data.article3.review.content
            }}
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
export default {
  name: "order-component",
  props: {
    data: Object,
  },
};
</script>
