<template>
  <transition name="fade"> 
    <slot />
  </transition>
</template>

<script>
export default {
  name: "CommonTransition"
}
</script>

<style scoped lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.1s, transform 0.2s;
}
.fade-enter, .fade-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
</style>
