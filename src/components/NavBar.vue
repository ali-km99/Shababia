<template>
  <nav class="bg-[#3a3a3a]/[53%] backdrop-blur-md flex items-center justify-around h-[120px]">
    <img width="120" class="pt-2 mt-4" src="../assets/imgs/logo.png" alt="" />
    <div class="flex w-2/3 gap-20 text-white font-semibold font-cairo duration-300 text-lg">
      <RouterLink to="/" class="hover:text-primary"> الصفحة الرئيسة </RouterLink>
      <RouterLink to="/Programs" class="hover:text-primary duration-300"> برامجنا </RouterLink>
      <RouterLink to="/" class="hover:text-primary duration-300"> التأسيس </RouterLink>
      <RouterLink to="/" class="hover:text-primary duration-300"> الأستماع المباشر </RouterLink>
      <RouterLink to="/News" class="hover:text-primary duration-300"> اخر الأخبار </RouterLink>
      <RouterLink to="/" class="hover:text-primary duration-300"> تواصل معنا </RouterLink>
    </div>
  </nav>
</template>
