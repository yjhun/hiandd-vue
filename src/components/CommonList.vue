<template>
  <main>
    <article>
      <div class="container pt-[100px] pb-[30px]">
        <h2 class="pb-[30px] text-3xl font-bold">{{ data.curTitle.title }}</h2>
        <ul>
          <li
            v-for="list in data.list"
            :key="list"
            class="space-y-2 border-b border-pink-100 px-2 py-5"
          >
            <a :href="list.url" target="_blank">
              <div class="mb-2.5 text-lg">{{ list.title }} 채용</div>
              <div class="text-xs text-gray-500">
                {{ list.date }} {{ list.state }}
              </div>
            </a>
          </li>
        </ul>
      </div>
    </article>
  </main>
</template>

<script>
export default {
  name: "common-list-component",
  props: {
    data: Object,
  },
};
</script>
