<template>
  <NuxtLayout>
    <div class="not-found">
      <div class="not-found__container">
        <div class="not-found__content">
          <div class="not-found__image">

          </div>
          <div class="not-found__title">{{ $t('NotFoundPage.title') }}</div>
          <div class="not-found__info">
            {{ $t('NotFoundPage.info') }}
          </div>
          <div class="not-found__links">
            <NuxtLink to="/" class="not-found__link">{{ $t('NotFoundPage.link') }}</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup></script>
<style lang="scss" scoped>


.not-found {

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  &__title {
    line-height: 48px;
    @apply font-semibold;
    transition: color 0.3s;
  }
  &__info {
    max-width: 46.5rem;
    @apply mb-8;
    transition: color 0.3s !important;
  }
  &__image {
    max-width: 45rem;
    width: 100%;
    & img {
      width: 100%;
      object-fit: contain;
    }
  }
  &__link {
    cursor: pointer;
    @apply flex-shrink-0 focus:outline-none disabled:cursor-not-allowed justify-center font-semibold rounded-lg text-base py-4 px-8 shadow-sm text-white bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 hover:bg-primary-600  w-full sm:w-auto min-w-[240px] dark:focus-visible:outline-primary-400 dark:hover:bg-primary-600 disabled:bg-sky-300 disabled:text-sky-400 disabled:opacity-100 dark:disabled:bg-sky-300 inline-flex items-center;
  }
}
.light {
  .dark-theme {
    display: none;
  }
}
.dark {
  .dark-theme {
    display: block;
  }
  .light-theme {
    display: none;
  }
}
</style>
