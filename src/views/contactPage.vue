<script setup lang="ts">
import ContactUS from '@/components/ContactUS.vue'
import FooterComp from '@/components/FooterComp.vue'
import NavBar from '@/components/NavBar.vue'
import SmallNavbar from '@/components/SmallNavbar.vue'
</script>

<template>
  <div class="relative"><SmallNavbar /></div>
  <div class="hidden lg:block"><NavBar></NavBar></div>
  <section class="p-4 bg-[#1e1e1e] min-h-screen text-white">
    <ContactUS />
  </section>
  <FooterComp></FooterComp>
</template>
