<template>
  <div id="tab-bar">
    <tabbar-item path="/index" activeColor="deeppink">
      <template v-slot:item-icon>
        <img src="~assets/img/tabbar/首页.svg" alt="no" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/img/tabbar/首页1.svg" alt="no" />
      </template>
      <template v-slot:item-text>
        <div slot="item-text">首页</div>
      </template>
    </tabbar-item>
    <tabbar-item path="/sorts" activeColor="deeppink">
      <template v-slot:item-icon>
        <img slot="item-icon" src="~assets/img/tabbar/分类.svg" alt="no" />
      </template>
      <template v-slot:item-icon-active>
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/分类1.svg"
          alt="no"
        />
      </template>
      <template v-slot:item-text>
        <div slot="item-text">分类</div>
      </template>
    </tabbar-item>
    <tabbar-item path="/car" activeColor="deeppink">
      <template v-slot:item-icon>
        <img slot="item-icon" src="~assets/img/tabbar/购物车.svg" alt="no" />
      </template>
      <template v-slot:item-icon-active>
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/购物车1.svg"
          alt="no"
        />
      </template>
      <template v-slot:item-text>
        <div slot="item-text">购物车</div>
      </template>
    </tabbar-item>
    <tabbar-item path="/profile" activeColor="deeppink">
      <template v-slot:item-icon>
        <img slot="item-icon" src="~assets/img/tabbar/我的.svg" alt="no" />
      </template>
      <template v-slot:item-icon-active>
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/我的1.svg"
          alt="no"
        />
      </template>
      <template v-slot:item-text>
        <div slot="item-text">我的</div>
      </template>
    </tabbar-item>
  </div>
</template>
<script>
import TabbarItem from "components/common/tabbar/TabbarItem";

export default {
  components: {
    TabbarItem,
  },
  data() {
    return {};
  },
};
</script>
<style>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
}
</style>
