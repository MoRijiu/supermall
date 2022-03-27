<template>
  <div class="tab-bar-item" @click="toPath()">
    <div v-if="isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>

    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "black",
    },
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) == -1;
    },
    activeStyle() {
      return !this.isActive ? { color: this.activeColor} : {};
    },
  },
  methods: {
    toPath() {
      return this.$router.replace(this.path);
    },
  },
};
</script>
<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
  height: 49px;
  font-weight: bold;
}
.tab-bar-item img {
  display: block;
  margin: 2px auto;
  width: 24%;
}

.active {
  color: red;
}
</style>
