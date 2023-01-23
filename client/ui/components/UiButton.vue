<template>
  <button class="ui-button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import '@/general/style/colors.scss';

.ui-button {
  border: none;
  padding: 1rem 2rem;
  background-color: $primary;
  color: $primaryText;

  &:hover {
    background-color: $active;
  }
}
</style>
