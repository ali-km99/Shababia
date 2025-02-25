<script setup lang="ts">
import { ref } from 'vue'

const minu = ref(false)

const toggelMinu = () => {
  console.log('minu')
  if (minu.value !== !minu.value) {
    minu.value = !minu.value
  }
}
import { useRouter } from 'vue-router' // استيراد Vue Router

// تعريف أنواع الحدث باستخدام TypeScript
const emit = defineEmits<{
  scrollToSection: []
}>()

const router = useRouter()

// التنقل وإرسال الحدث
const handleNavigation = (): void => {
  emit('scrollToSection') // إرسال الحدث مع الـ ID
  router.replace('/') // الانتقال إلى الصفحة الرئيسية
}
</script>

<template>
  <header class="md:hidden">
    <nav
      class="bg-[#3a3a3a]/[53%]"
      :class="{
        'h-[28rem] ': minu,
        'h-24 ': !minu,
      }"
    >
      <div class="flex w-11/12 py-2 justify-between mx-auto items-center">
        <div class="p-2">
          <img src="../assets/imgs/logo.png" width="65" alt="" />
        </div>

        <div
          dir="ltr"
          id="btnShow"
          @click="toggelMinu"
          class="text-white flex flex-col space-y-1 p-2 transition duration-300"
        >
          <span class="w-7 h-1 bg-white rounded-md"></span>
          <span
            class="w-7 h-1 bg-white duration-300 span rounded-md"
            :class="{ 'w-4': minu }"
          ></span>
          <span
            :class="{ 'w-2': minu }"
            class="w-7 h-1 bg-white duration-500 span2 rounded-md"
          ></span>
        </div>
      </div>
      <section id="hero" class="h-24 bg-no-repeat bg-left bg-nav-BG flex items-center relative">
        <ul
          v-if="minu"
          id="tabel"
          class="duration-300 bg-bluee text-white bg-opacity-60 rounded-sm w-11/12 mx-auto flex flex-col items-center justify-items-center absolute top-1 left-3 z-30"
        >
          <!-- <li class="py-2 border-b-2 border-bluee-sec w-full text-center"> -->

          <li v-motion-pop class="py-2 border-b-2 border-bluee-sec w-full text-center rounded-t-lg">
            <RouterLink to="/"> الرئيسية </RouterLink>
          </li>

          <li v-motion-pop :delay="200" class="py-2 border-b-2 border-bluee-sec w-full text-center">
            <RouterLink to="/Programs"> برامجنا </RouterLink>
          </li>

          <li v-motion-pop :delay="400" class="py-2 border-b-2 border-bluee-sec w-full text-center">
            <RouterLink to="/about"> التأسيس</RouterLink>
          </li>

          <li v-motion-pop :delay="600" class="py-2 border-b-2 border-bluee-sec w-full text-center">
            <div>
              الأستماع المباشر
              <span
                class="absolute right-12 bg-red-500 text-white text-xs rounded-full px-2 font-Tajawal"
                >قريباً</span
              >
            </div>
          </li>
          <li v-motion-pop :delay="800" class="py-2 border-b-2 border-bluee-sec w-full text-center">
            <RouterLink to="/News"> اخر الأخبار</RouterLink>
          </li>

          <li
            @click="handleNavigation"
            v-motion-pop
            :delay="1000"
            class="py-2 border-b-2 border-bluee-sec w-full text-center"
          >
            <a href="/#contact"> تواصل معنا</a>
          </li>
        </ul>
      </section>
    </nav>
  </header>
</template>
