<template>
  <main>
    <div class="p-20">
      <div class="mb-4 text-3xl">Axios Test</div>
      <ul>
        <li v-for="(list, idx) in lists" :key="idx" class="mb-5 last:mb-0">
          <div class="mb-1">{{ list.name }}</div>
          <div>{{ list.email }}</div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  name: "AxiosView",
  setup(){
    const getData = async () =>{
      try {
        const listResult = await this.axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log('listResult.data :>> ', listResult.data);
      } catch (error) {
        console.error(error);
      }
    };

    return{
      getData
    }
  }
};

</script>
