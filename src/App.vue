<template>
  <div id="app">
    <h3 :title="description">
      {{ title }}
      <br />
      <small>
        {{ description }}
      </small>
    </h3>

    <fan></fan>

    <div class="footer">
      <div style="margin: 1rem">
        <el-button>
          <a :href="adImageLink" target="_blank"
            ><span class="animate-logo">{{ adText }}</span></a
          >
        </el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Fan from "./components/Fan.vue";
import { defineComponent } from "@vue/runtime-core";

const adImageLink =
  "https://fan.faxiaosi.com/img/aamic-m8v4o1.jpg";

export default defineComponent({
  name: "app",
  data() {
    return {
      title: "夏日清凉小风扇",
      description: "除了没有风，什么都好！",
      adText: "🍉",
      adImageLink
    };
  },
  components: {
    Fan
  },
});
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app > .footer {
  margin-top: 460px;
}
</style>
