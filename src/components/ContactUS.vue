<template>
  <div class="p-4 bg-[#1e1e1e] min-h-screen">
    <h1
      class="text-5xl font-bold mb-4 text-center p-4 text-primary"
      v-motion-slide-visible-bottom
      :delay="200"
      :duration="1000"
    >
      دعونا نبقى على تواصل
    </h1>
    <p class="text-white text-center" dir="rtl">
      لم يكن التواصل مع الشبابية بهذه السهولة من قبل. اتصل بنا أو أرسل بريدًا إلكترونيًا وسنرد عليك
      في أقرب وقت ممكن !
    </p>

    <div class="md:grid grid-cols-3 gap-4 m-6 p-6">
      <div class="flex items-center justify-center flex-col">
        <div class="bg-primary size-14 rounded-full flex p-2 items-center justify-center my-3">
          <img src="../assets/icons/mail2.png" alt="" />
        </div>
        <p class="text-primary text-3xl text-center my-3 font-bold">Email</p>
        <p class="text-white text-center">contact@Shbabia.com</p>
      </div>
      <div class="flex items-center justify-center flex-col">
        <div class="bg-primary size-14 rounded-full flex p-2 items-center justify-center my-3">
          <img src="../assets/icons/phone2.png" alt="" />
        </div>
        <p class="text-primary text-3xl text-center my-3 font-bold">Phone</p>
        <p class="text-white text-center">+7-843-672-431</p>
      </div>
      <div class="flex items-center justify-center flex-col">
        <div class="bg-primary size-14 rounded-full flex p-2 items-center justify-center my-3">
          <img src="../assets/icons/Vector.png" alt="" />
        </div>
        <p class="text-primary text-3xl text-center my-3 font-bold">Socials</p>
        <div class="flex gap-2 items-center">
          <a href="facebook.com"><img src="../assets/icons/insta.png" alt="" /></a>
          <a href="instagrm.com"><img src="../assets/icons/facebook.png" alt="" /></a>
          <a href="youtube.com"><img src="../assets/icons/youtube.png" alt="" /></a>
        </div>
      </div>
    </div>
    <div
      class="bg-gradient-to-b from-[#1e1e1e]/75 to-[#4E1783]/75 flex justify-center p-6"
      dir="rtl"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6148.152141239173!2d13.059472578192374!3d32.83720715060185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a8e90059c9dbe1%3A0x422e36c9657e461!2z2YLZhtin2Kkg2KfZhNi02KjYp9io2YrYqQ!5e0!3m2!1sen!2sly!4v1740484104431!5m2!1sen!2sly"
        width="70%"
        height="400"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>
