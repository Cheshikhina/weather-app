<template>
    <button type="button" class="btn-common">{{text}}</button>
</template>

<script>
export default {
  name: "CommonButton",

  props: {
    text: {
      type: String,
      default: null
    },
  },
};
</script>

<style scoped lang="scss">
.btn-common {
  padding: 5px 10px;
  border: none;
  font-size: 20px;
  background-color: transparent;
  border-radius: 0.5em;
  border: 1px solid transparent;
  cursor: pointer;
  transition: border-color 0.3s;

  &:hover,
  &:focus {
    border-color: #000000;
  }
}
</style>
