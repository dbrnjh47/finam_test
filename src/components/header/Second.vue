<script setup>

const env = {
  "VITE_URL_MAX": import.meta.env.VITE_URL_MAX,
  "VITE_APP_EMAIL": import.meta.env.VITE_APP_EMAIL,
};

//

// import pointImage from '@/assets/images/point.png'

const infoImgs = Object.fromEntries(
  Object.entries(
    import.meta.glob('@/assets/images/header/info/*.{png,jpg,jpeg,svg,webp}', {
      eager: true,
      import: 'default'
    })
  ).map(([path, url]) => {
    const name = path.split('/').pop().replace(/\.\w+$/, '')
    return [name, url]
  })
)

const socialImgs = Object.fromEntries(
  Object.entries(
    import.meta.glob('@/assets/images/header/social/*.{png,jpg,jpeg,svg,webp}', {
      eager: true,
      import: 'default'
    })
  ).map(([path, url]) => {
    const name = path.split('/').pop().replace(/\.\w+$/, '')
    return [name, url]
  })
)

const header_second_imgs = { ...infoImgs, ...socialImgs }
</script>

<template>
  <div class="header_second header__container">
    <div>
      <span>
        <img :src="header_second_imgs.point" alt="point">
        г. Москва, Скандинавский бульвар, д. 3, к.
      </span>
      <span>
        <img :src="header_second_imgs.time" alt="time">
        с 9:00 до 22:00, без выходных
      </span>
    </div>
    <div>
      <a :href="env.VITE_URL_MAX" target="_blank">
        <img :src="header_second_imgs.max" alt="max">
        MAX
      </a>
      <a itemprop="email" :href="`mailto:${env.VITE_APP_EMAIL}`">
        <img :src="header_second_imgs.mail" alt="mail">
        {{ env.VITE_APP_EMAIL }}
      </a>
    </div>
  </div>
</template>
