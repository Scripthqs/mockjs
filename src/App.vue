<template>
  <div id="app">
    {{ data }}
  </div>
</template>

<script>
import { getHomeMock } from "./api/home";

export default {
  data() {
    return {
      data: [],
    };
  },
  created() {
    this.getHomeMock();
  },
  methods: {
    getHomeMock() {
      getHomeMock().then((res) => {
        console.log(res);
        this.data = res;
      });
    },
  },
};
</script>

<style>
</style>
