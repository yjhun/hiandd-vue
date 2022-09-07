<template>
  <main>
    <HeaderMargin :data="data" />
    <article>
      <div class="flex h-[620px] items-center justify-center bg-black">
        <div class="text-3xl text-white">map</div>
      </div>
    </article>
    <article>
      <div class="container grid grid-cols-3 py-[100px]">
        <div
          class="flex items-center space-x-4"
          v-for="list in info"
          :key="list"
        >
          <div class="h-9 w-9 bg-black"></div>
          <div>
            <div class="text-lg">{{ list.main }}</div>
            <div>{{ list.sub }}</div>
          </div>
        </div>
      </div>
    </article>
    <article>
      <div class="container grid grid-cols-3 pb-[30px]">
        <div class="text-2xl">문의하기</div>
        <div class="col-span-2">
          <form v-on:submit="submitForm" class="grid grid-cols-2 gap-5">
            <div>
              <input
                type="text"
                name="companyName"
                placeholder="회사명"
                class="w-full border-b border-gray-500 placeholder:text-black focus:border-b focus:outline-none focus:ring-0"
                v-model="formdata.companyName"
              />
            </div>
            <div>
              <input
                type="text"
                name="address"
                placeholder="주소"
                class="w-full border-b border-gray-500 placeholder:text-black focus:border-b focus:outline-none focus:ring-0"
                v-model="formdata.address"
              />
            </div>
            <div>
              <input
                type="text"
                name="username"
                placeholder="성함"
                class="w-full border-b border-gray-500 placeholder:text-black focus:border-b focus:outline-none focus:ring-0"
                v-model="formdata.username"
              />
            </div>
            <div>
              <input
                type="text"
                name="email"
                placeholder="이메일"
                class="w-full border-b border-gray-500 placeholder:text-black focus:border-b focus:outline-none focus:ring-0"
                v-model="formdata.email"
              />
            </div>
            <div>
              <select
                name=""
                id=""
                class="w-full border-b border-gray-500 focus:border-b focus:outline-none focus:ring-0"
              >
                <option value="" selected disabled>
                  문의 종류를 선택해 주세요
                </option>
                <option :value="option" v-for="option in option" :key="option">
                  {{ option.title }}
                </option>
              </select>
            </div>
            <div>
              <input
                type="tel"
                name=""
                id=""
                placeholder="연락처"
                pattern="\d*"
                class="w-full border-b border-gray-500 placeholder:text-black focus:border-b focus:outline-none focus:ring-0"
              />
            </div>
            <div class="col-span-2 h-[100px]">
              <textarea
                name=""
                id=""
                placeholder="message"
                class="h-full w-full resize-none border-b border-gray-500 placeholder:text-black focus:border-b focus:outline-none focus:ring-0"
              ></textarea>
            </div>
            <div class="col-span-2 space-y-5">
              <div
                class="h-[150px] overflow-x-hidden overflow-y-scroll border border-gray-500 p-2 text-sm"
              >
                1. 개인정보의 수집 ∙ 이용 항목 : 회사명, 주소, 작성자 성함,
                이메일, 작성내용<br /><br />
                2. 개인정보의 수집 ∙ 이용 목적<br />
                파트너 제휴 문의 및 상담, 파트너 제휴 신청 및 관리<br />
                서비스 이용 및 계약 이행<br />
                본인 확인, 민원 처리, 부정 이용 방지<br />
                고객 의견 조사, 약관변경 등 고지, 통계 ∙ 분석 ∙ 추천1<br /><br />
                3. 개인정보의 보유 및 이용기간<br />
                수집된 개인정보는 서비스 이용계약 종료 시까지 보유 및
                이용됩니다. 단, 관계 법령에 따라 보유할 필요가 있는 경우
                법령에서 규정한 기간동안 보유됩니다.<br /><br />
                개인정보 수집 ∙ 이용 동의를 거부할 권리가 있으며, 동의 거부 시
                하이앤디 서비스 이용에 제한이 있을 수 있음을 안내 드립니다.
              </div>
              <div class="flex items-center">
                <input type="checkbox" name="agree" id="agree" class="mr-2" />
                <label for="agree" class="text-sm"
                  >개인정보 수집 및 이용약관에 동의합니다.</label
                >
              </div>
            </div>
            <div
              class="col-end-3 h-[45px] w-[180px] justify-self-end rounded bg-gray-600"
            >
              <button type="submit" class="h-full w-full text-white">
                SEND MESSAGE
              </button>
            </div>
          </form>
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
          title: "Contact",
        },
      },
      info: [
        { main: "Address", sub: "서울 강남구 언주로 315" },
        { main: "Email", sub: "support@hiandd.com" },
        { main: "Call Us", sub: "02-6959-9682" },
      ],
      option: ["일반 문의", "호텔오더 제휴 문의", "타임오더 제휴 문의"],
      formdata: {
        companyName: "",
        address: "",
        username: "",
        email: "",
      },
    };
  },
  methods: {
    submitForm: function () {
      console.log(this.formdata);
    },
  },
};
</script>
