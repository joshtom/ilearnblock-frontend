<template>
  <button :class="className" :id="id" :html-type="type" @click="onClick">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
    },
    type: {
      type: String,
    },
    className: {
      type: String,
    },
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  display: inline-block;
  margin: 0.5em 0;
  padding: 0.5em 1rem;
  border-radius: 4px;
  font-size: 14px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  transition: all 0.2s linear;
  cursor: pointer;
  &:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-color: #ff9100;
  }

  &.btn-outline {
    background: transparent;
    border: 0.8px solid #e0e0e0;
  }

  &.btn-primary,
  &.btn-primary-inverse,
  &.btn-success,
  &.btn-success-inverse {
    &:hover {
      opacity: 0.8;
    }
  }
  &.btn-primary {
    background: #ff9100;
    color: #fff;
  }

  &.btn-primary-inverse {
    background: #fff2dd;
    color: #828282;
  }

  &.btn-success {
    background: #4caf51;
    color: white;
  }
  &.btn-success-inverse {
    background: #cdf2e4;
  }

  &.btn-bold {
    font-weight: bold;
  }

  &.w-full {
    width: 100%;
    padding: 14px;
  }

  &.text-primary {
    color: #ff9100;
  }
  &.bg-white {
    background: #fff;
  }

  &:hover {
    transform: translateY(-2px);
  }
  & > .btn-text {
    margin-left: 8px;
  }
  @media screen and (max-width: 460px) {
    & > .btn-text {
      display: none;
    }
  }
}
</style>