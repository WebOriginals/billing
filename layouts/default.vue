<template>
  <div class="wrapper" :class="{ lock: lockScrollValue }">
    <!-- Header   -->
    <main class="page" :class="{ pb150: !storeUser?.getIsLoggedIn }">
      <slot></slot>
    </main>
    <!-- Footer -->
    <!-- Modal -->
    <!-- Coocky -->


  </div>
</template>

<script setup>
import { useUserStore } from '~/store/user.js';
import TheCookieModal from '~/components/TheCookieModal.vue';

const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
});
useHead({
  htmlAttrs: {
    lang: head.value.htmlAttrs.lang,
    dir: head.value.htmlAttrs.dir,
  },
  meta: [
    { name: 'yandex-verification', content: import.meta.env.VITE_YANDEX_METRIKA },
    { name: 'google-site-verification', content: import.meta.env.VITE_GOOGLE_METRIKA },
    { name: 'cryptomus', content: import.meta.env.VITE_CRYPTOMUS },
  ],
  noscript: [
    {
      children:
        ' <div><img src="https://mc.yandex.ru/watch/97379285" style="position: absolute; left: -9999px" alt="" /></div>',
      body: true,
    },
  ],
  script: [
    {
      src: `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_ID_GOOGLE_TAG}`,
      tagPosition: 'head',
    },
    {
      src: '/js/googleMetrika.js',
      tagPosition: 'head',
    },
    {
      src: '/js/yandexMetrika.js',
      tagPosition: 'head',
    },
  ],
});
const storeUser = useUserStore();
const lockScrollValue = ref(false);
const lockScroll = (value) => {
  lockScrollValue.value = value.value;
};
</script>

<style lang="scss">
.wrapper {
  @apply overflow-hidden flex min-h-screen flex-col;

  > main {
    @apply flex-auto pb-16;

    &.pb150 {
      @apply pb-48;
    }
  }

  &.lock {
    @apply h-screen;
  }
}
</style>
