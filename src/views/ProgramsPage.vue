<template>
  <div class="relative"><SmallNavbar /></div>
  <div class="hidden lg:block"><NavBar></NavBar></div>
  <div
    v-if="newsModel"
    :onclick="handleClick"
    class="w-full h-screen backdrop-blur-sm absolute top-0 right-0 z-30"
  >
    <div class="w-1/2 h-3/4 bg-black/80 mx-auto mt-[150px] rounded-lg relative">
      <div class="w-9 h-9 p-2 rounded-full bg-slate-100 absolute -top-4 -right-4 cursor-pointer">
        <img width="20px" src="../assets/icons/close.png" alt="" />
      </div>
      <div class="grid grid-cols-2">
        <div class="m-8 items-end flex flex-col">
          <div class="flex p-4">
            <p class="text-primary mr-3">{{ selectedProgram?.name }}</p>
            <img width="30px" src="../assets/icons/face.png" alt="" />
          </div>
          <div class="flex p-4">
            <p class="text-primary mr-3">{{ selectedProgram?.date }}</p>
            <img width="30px" src="../assets/icons/date.png" alt="" />
          </div>
          <div class="flex p-4">
            <p class="text-primary mr-3">{{}}</p>
            <img width="30px" src="../assets/icons/time.png" alt="" />
          </div>
          <div class="flex p-4 items-center">
            <div class="flex flex-row">
              <!-- نجمة 5 -->
              <input type="radio" name="rating" id="star5" class="hidden" />
              <label for="star5" class="star cursor-pointer text-2xl text-gray-300">★</label>

              <!-- نجمة 4 -->
              <input type="radio" name="rating" id="star4" class="hidden" />
              <label for="star4" class="star cursor-pointer text-2xl text-gray-300">★</label>

              <!-- نجمة 3 -->
              <input type="radio" name="rating" id="star3" class="hidden" />
              <label for="star3" class="star cursor-pointer text-2xl text-gray-300">★</label>

              <!-- نجمة 2 -->
              <input type="radio" name="rating" id="star2" class="hidden" />
              <label for="star2" class="star cursor-pointer text-2xl text-gray-300">★</label>

              <!-- نجمة 1 -->
              <input type="radio" name="rating" id="star1" class="hidden" />
              <label for="star1" class="star cursor-pointer text-2xl text-gray-300">★</label>
            </div>
            <p class="text-primary ml-3">تقيم البرنامج</p>
          </div>
        </div>
        <div class="m-8 rounded-lg">
          <img :src="selectedProgram?.image" alt="" />
        </div>
      </div>
      <p class="text-primary text-end p-4">{{}}</p>
    </div>
  </div>
  <div class="p-4 bg-[#1e1e1e] min-h-screen text-white">
    <!-- التبويبات -->
    <div class="flex justify-end space-x-4 rtl:space-x-reverse mb-6">
      <button
        v-for="tab in tabs"
        :key="tab.value"
        @click="activeTab = tab.value"
        :class="[
          'px-4 py-2 rounded-lg border border-purple-600 relative',
          activeTab === tab.value ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300',
          activeTab === tab.value ? 'border-b-4 border-purple-400' : '',
        ]"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Swiper للبرامج -->
    <div class="relative py-3 my-10">
      <swiper
        :modules="[Navigation, Pagination, Autoplay]"
        :slides-per-view="3"
        :space-between="10"
        :loop="true"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :navigation="true"
        :pagination="{ clickable: true }"
        class="w-full h-[70vh]"
        :breakpoints="{
          320: { slidesPerView: 1, spaceBetween: 10 }, // موبايل
          640: { slidesPerView: 2, spaceBetween: 15 }, // تابلت
          1024: { slidesPerView: 3, spaceBetween: 15 }, // ديسكتوب
        }"
      >
        <swiper-slide
          @click="handleClick(program)"
          v-for="program in filteredPrograms"
          :key="program.id"
          class="px-12 drop-shadow-md"
        >
          <div class="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <img :src="program.image" alt="program image" class="w-full h-56 object-cover" />
            <div class="p-4">
              <h2 class="text-xl font-semibold mb-2">{{ program.title }}</h2>
              <div class="flex">
                <img class="w-7" src="../assets/icons/face.png" alt="" />
                <p class="pl-3 text-primary">{{ program.name }}</p>
              </div>
              <p class="text-gray-400">{{ program.category }} - {{ program.date }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- برامج أخرى -->
    <h2 class="text-3xl font-bold mb-4 mt-12 text-end p-4">برامج أخرى</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <div
        v-for="program in randomPrograms"
        :key="program.id"
        class="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
      >
        <img :src="program.image" alt="program image" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">{{ program.title }}</h2>
          <p class="text-gray-400">{{ program.category }} - {{ program.date }}</p>
        </div>
      </div>
    </div>
  </div>
  <FooterComp></FooterComp>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import NavBar from '@/components/NavBar.vue'
import SmallNavbar from '@/components/SmallNavbar.vue'
import FooterComp from '@/components/FooterComp.vue'
import type { program } from '@/types/program'

// التبويبات
const tabs = ref([
  { label: 'الكل', value: 'all' },
  { label: 'اجتماعي', value: 'social' },
  { label: 'ثقافي', value: 'cultural' },
  { label: 'رياضي', value: 'sports' },
])
const newsModel = ref(false)
const selectedProgram = ref<program>()
function handleClick(program: program) {
  selectedProgram.value = program
  newsModel.value = !newsModel.value
  console.log(`Title: ${program.category}`)
}
// البرامج التجريبية
const programs = ref([
  {
    id: 1,
    title: 'برنامج الصباح',
    category: 'social',
    date: '2025-02-22',
    name: ' سارة سويسي',

    image: 'https://i.postimg.cc/Tw6vS6Dm/475103928-1004395018379701-7991509967441081360-n.jpg',
  },
  {
    id: 2,
    title: 'برنامج الثقافة',
    category: 'cultural',
    date: '2025-02-20',
    name: 'سمية بسيكري',
    image: 'https://i.postimg.cc/4y8CmHFb/476837484-1011379207681282-7438754021829096849-n.jpg',
  },
  {
    id: 3,
    title: 'برنامج الرياضة',
    category: 'sports',
    date: '2025-02-18',
    name: ' فيصل الأصيبعي',
    image: 'https://i.postimg.cc/MHZ26mtp/475764524-1006511798168023-5152673009923635572-n.jpg',
  },
  {
    id: 4,
    title: 'برنامج الصحة',
    category: 'health',
    date: '2025-02-15',
    name: ' مصطفى ابو حميدة',
    image: 'https://i.postimg.cc/h4MRCNPz/476292528-1007050961447440-1325635271025850142-n.jpg',
  },
  {
    id: 5,
    title: 'برنامج المساء',
    category: 'social',
    date: '2025-02-10',
    name: ' سارة سويسي',
    image: 'https://i.postimg.cc/Tw6vS6Dm/475103928-1004395018379701-7991509967441081360-n.jpg',
  },
  {
    id: 1,
    title: ' ترافيك تايم',
    category: 'social',
    date: '2025-02-22',
    name: 'سمية بسيكري',
    image: 'https://i.postimg.cc/4y8CmHFb/476837484-1011379207681282-7438754021829096849-n.jpg',
  },
  {
    id: 2,
    title: 'الركن الرياضي ',
    category: 'cultural',
    date: '2025-02-20',
    name: ' فيصل الأصيبعي',
    image: 'https://i.postimg.cc/MHZ26mtp/475764524-1006511798168023-5152673009923635572-n.jpg',
  },
  {
    id: 3,
    title: 'برنامج الرياضة',
    category: 'sports',
    date: '2025-02-18',
    image: 'https://i.postimg.cc/h4MRCNPz/476292528-1007050961447440-1325635271025850142-n.jpg',
  },
  {
    id: 4,
    title: 'برنامج الصحة',
    category: 'health',
    date: '2025-02-15',
    image: 'https://i.postimg.cc/Tw6vS6Dm/475103928-1004395018379701-7991509967441081360-n.jpg',
  },
  {
    id: 5,
    title: 'برنامج المساء',
    category: 'social',
    date: '2025-02-10',
    image: 'https://i.postimg.cc/Tw6vS6Dm/475103928-1004395018379701-7991509967441081360-n.jpg',
  },
])

// التبويب النشط
const activeTab = ref('all')

// تصفية البرامج بناءً على التبويب النشط
const filteredPrograms = computed(() => {
  if (activeTab.value === 'all') return programs.value
  return programs.value.filter((program) => program.category === activeTab.value)
})

// برامج عشوائية
const randomPrograms = computed(() => {
  const shuffled = [...programs.value].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, 3)
})
</script>

<style scoped>
body {
  background-color: #1e1e1e;
  direction: rtl;
  font-family: 'Tajawal', sans-serif;
}
</style>
