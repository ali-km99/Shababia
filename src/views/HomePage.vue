<template>
  <div class="bg-Rounds min-h-[100vh] bg-no-repeat bg-right-top md:bg-contain">
    <div class="relative"><SmallNavbar /></div>
    <div class="hidden lg:block"><NavBar></NavBar></div>
    <div class="text-6xl text-white text-end pl-14 md:pt-44 mt-11" dir="rtl">
      <p>قناة <span class="text-primary">الشباب</span> ...</p>
      <p>بصوت <span class="text-primary">الشباب</span></p>
    </div>

    <div dir="rtl" class="pr-36 md:-mt-32 hidden md:block">
      <img src="../assets/imgs/logo2.png" alt="" />
      <img src="../assets/imgs/shadow.png" alt="" class="absolute top-16 right-5 -z-10" />
    </div>
    <div
      class="text-start flax justify-end md:w-1/3 w-full text-white text-lg md:-mt-32 mt-8 md:pl-10 p-10 backdrop-blur-sm md:backdrop-blur-none"
      dir="rtl"
    >
      <p>صوتُنا يمتد، ورسالتُنا تستمر.</p>
      <p><span class="text-primary font-bold">راديو الشبابية</span>.. حيث تلتقي الأجيال.</p>
      <p>منذ البدايات، كان راديو الشبابية منبرًا للأفكار، وحلقة وصل بين الأجيال، ينقل القيم،</p>
      <p>الثقافة،والإبداع من جيل إلى آخر.</p>
      <p>ليوم، كما بالأمس، نواصل المسيرة لنمنح صوت الشباب القوة،</p>
      <p>على إرث إعلامي يجمع الماضي بالحاضر، ويصنع المستقبل</p>
    </div>

    <button
      class="text-white h-14 w-36 ml-16 mt-4 bg-gradient-to-r from-primary to-[#4E1783] rounded-full"
    >
      استمع الأن
    </button>

    <div class="flex gap-3 items-center pl-8 pt-10">
      <a href="facebook.com"><img src="../assets/icons/insta.png" alt="" /></a>
      <a href="instagrm.com"><img src="../assets/icons/facebook.png" alt="" /></a>
      <a href="youtube.com"><img src="../assets/icons/youtube.png" alt="" /></a>
    </div>
  </div>
  <section class="my-20">
    <h2 class="text-primary text-end p-12 pb-3 text-5xl font-bold">برامجنا</h2>
    <p class="text-end text-white px-12">اكتشف ما نقدمه من برامج</p>

    <div class="relative px-12 py-3 my-10">
      <Swiper
        :modules="[Navigation, Pagination, Autoplay]"
        :slides-per-view="3"
        :space-between="20"
        :loop="true"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :navigation="true"
        :pagination="{ clickable: true }"
        :breakpoints="{
          320: { slidesPerView: 1, spaceBetween: 10 }, // موبايل
          640: { slidesPerView: 2, spaceBetween: 15 }, // تابلت
          1024: { slidesPerView: 3, spaceBetween: 20 }, // ديسكتوب
        }"
        class="w-full h-[72vh]"
      >
        <SwiperSlide v-for="(program, index) in programs" :key="index" class="px-10 drop-shadow-md">
          <div class="bg-[#1e1e1e] rounded-xl p-4 shadow-lg">
            <img :src="program.image" class="rounded-lg w-full" />
            <h3 class="text-white text-xl font-bold mt-4">{{ program.title }}</h3>
            <p class="text-gray-300">{{ program.time }}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
  <section class="my-20">
    <h2 class="text-primary text-end p-12 pb-3 text-5xl font-bold">اخر الأخبار</h2>
    <p class="text-end text-white px-12">تابع اخر الأخبار و كل ما هو جديد</p>

    <div class="relative px-12 py-3 my-10">
      <Swiper
        :modules="[Navigation, Pagination, Autoplay]"
        :slides-per-view="3"
        :space-between="20"
        :loop="true"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :navigation="true"
        :pagination="{ clickable: true }"
        :breakpoints="{
          320: { slidesPerView: 1, spaceBetween: 10 }, // موبايل
          640: { slidesPerView: 2, spaceBetween: 15 }, // تابلت
          1024: { slidesPerView: 3, spaceBetween: 20 }, // ديسكتوب
        }"
        class="w-full h-[72vh]"
      >
        <SwiperSlide v-for="(program, index) in programs" :key="index" class="px-10 drop-shadow-md">
          <div class="bg-[#1e1e1e] rounded-xl p-4 shadow-lg">
            <img :src="program.image" class="rounded-lg w-full" />
            <h3 class="text-white text-xl font-bold mt-4">{{ program.title }}</h3>
            <p class="text-gray-300">{{ program.time }}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
  <FooterComp></FooterComp>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import NavBar from '@/components/NavBar.vue'
import SmallNavbar from '@/components/SmallNavbar.vue'
import FooterComp from '@/components/FooterComp.vue'

const programs = ref([
  {
    title: 'في عز الظهرية ',
    time: '01:00 مساءً',
    image: 'https://i.postimg.cc/Tw6vS6Dm/475103928-1004395018379701-7991509967441081360-n.jpg',
  },
  {
    title: ' ترافيك تايم',
    time: '01:00 صباحًا',
    image: 'https://i.postimg.cc/4y8CmHFb/476837484-1011379207681282-7438754021829096849-n.jpg',
  },
  {
    title: 'الركن الرياضي',
    time: '01:00 ظهرًا',
    image: 'https://i.postimg.cc/MHZ26mtp/475764524-1006511798168023-5152673009923635572-n.jpg',
  },
  {
    title: '168',
    time: '01:00 ظهرًا',
    image: 'https://i.postimg.cc/h4MRCNPz/476292528-1007050961447440-1325635271025850142-n.jpg',
  },
])
</script>

<style>
body {
  background: #1e1e1e;
}
::-webkit-scrollbar {
  width: 12px;
  background-color: #f0f0f0; /* لون خلفية شريط التمرير */
  border-radius: 12px;
}

/* جزء "المسار" من الشريط */
::-webkit-scrollbar-track {
  background: #242222; /* اللون الرصاصي الباهت للخلفية */
  border-radius: 10px; /* جعل الحواف دائرية */
}

/* جزء "المقبض" من الشريط */
::-webkit-scrollbar-thumb {
  background-color: #832bc1; /* اللون الرصاصي للمقبض */
  border-radius: 10px; /* جعل الحواف دائرية */
  border: 3px solid #9242ca; /* المسافة حول المقبض */
}

.swiper-button-next,
.swiper-button-prev {
  color: #832bc1;
}
.swiper-button-next:hover,
.swiper-button-prev:hover {
  color: #fefefe;
  transition-duration: 300ms;
}
.swiper-pagination-bullet {
  background: white;
}
</style>
