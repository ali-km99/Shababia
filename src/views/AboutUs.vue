<script setup lang="ts">
import FooterComp from '@/components/FooterComp.vue'
import NavBar from '@/components/NavBar.vue'
import SmallNavbar from '@/components/SmallNavbar.vue'
</script>

<template>
  <div class="relative"><SmallNavbar /></div>
  <div class="hidden lg:block"><NavBar></NavBar></div>

  <div class="p-4 bg-[#1e1e1e] min-h-screen text-white">
    <section class="bg-about bg-contain bg-no-repeat bg-center bg-fixed mb-9">
      <div class="md:grid md:grid-cols-2 gap-32 md:mx-28 p-7">
        <div
          v-motion-slide-visible-bottom
          :duration="1000"
          class="size-full bg-gradient-to-b from-[#1e1e1e]/75 to-[#4E1783]/75 font-Tajawal p-8 rounded-lg col-start-2 my-6"
        >
          <h2 class="text-5xl text-center text-primary">من نحن</h2>
          <p class="leading-loose text-2xl text-white p-7 text-center">
            نحن منصة إعلامية شبابية تهدف إلى تقديم محتوى متنوع، هادف، ومواكب للتطورات المحلية
            والعالمية، لنكون الجسر الذي يربط بين الأجيال ويعزز دور الشباب في بناء المستقبل.
          </p>
        </div>
        <div
          v-motion-slide-visible-bottom
          :duration="1000"
          class="size-full bg-gradient-to-b from-[#832BC1]/75 to-[#4E1783]/75 p-8 rounded-lg shadow-2xl shadow-primary md:col-span-2 md:w-1/2"
        >
          <h2 class="md:text-5xl text-2xl text-white text-center font-Tajawal">رؤيتنا</h2>
          <p class="leading-loose md:text-2xl text-[#D9D9D9] font-Tajawal p-7 text-center">
            أن نكون الراديو الأول للشباب الليبي، حيث يجدون صوتهم، أفكارهم، وطموحاتهم معروضة ومسموعة
            بكل حرية ومسؤولية.
          </p>
        </div>
        <div
          v-motion-slide-visible-bottom
          :duration="1000"
          class="size-full p-8 rounded-lg col-start-2 shadow-inner bg-gradient-to-b from-[#1e1e1e]/75 to-[#4E1783]/75"
        >
          <h2 class="text-5xl text-center font-Tajawal text-primary">عن راديو الشبابية</h2>
          <p class="leading-loose text-2xl text-[#D9D9D9] font-Tajawal p-7 text-center">
            انضموا إلينا وكونوا جزءًا من رحلتنا الإعلامية، حيث نحتفي بالشباب، وننقل أصواتهم، ونلهم
            الأجيال القادمة.
          </p>
        </div>
        <div
          v-motion-slide-visible-bottom
          :duration="1000"
          class="bg-gradient-to-b from-[#832BC1]/75 to-[#4E1783]/75 p-8 rounded-lg shadow-2xl shadow-primary md:col-span-2 md:w-1/2"
        >
          <h2 class="text-5xl text-white text-center font-Tajawal">رسالتنا</h2>
          <p class="leading-loose text-2xl text-[#D9D9D9] font-Tajawal p-7 text-center">
            نؤمن بأن الشباب هم القوة الحقيقية للمجتمع، ولذلك نعمل على تقديم برامج هادفة تشمل
            الأخبار، الموسيقى، الحوار، الثقافة، والتنمية الذاتية، بالإضافة إلى تسليط الضوء على
            المبادرات الشبابية والابتكارات المحلية.
          </p>
        </div>
      </div>
    </section>
  </div>
  <FooterComp></FooterComp>
</template>
