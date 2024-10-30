<template>
  <div class="wrapper" :class="{ lock: lockScrollValue }">
    <!-- Header   -->
    <main class="page" >
      <slot></slot>
    </main>
    <!-- Footer -->
    <!-- Modal -->
    <!-- Coocky -->


  </div>
</template>

<script setup>
const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
});


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
