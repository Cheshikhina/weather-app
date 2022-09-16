<template>
    <button type="button" :class="['btn-arrow', {'btn-arrow--top': !opened }]" />
</template>

<script>
export default {
  name: "ButtonArrow",

  props: {
    opened: {
      type: Boolean,
      default: true
    },
  },

  data() {
    return {
      isOpened: this.opened,
    };
  },
};
</script>

<style scoped lang="scss">
.btn-arrow {
  width: 0;
  height: 0;
  margin-left: 10px;
  padding: 0;
  border: none;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 20px solid #000000;
  background-color: transparent;
  cursor: pointer;
  transition: opacity 0.3s, border 0.3s;;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    opacity: 1;
  }
}

.btn-arrow--top {
	border-bottom: 20px solid #000000;
  border-top: 0 solid transparent;
}
</style>
