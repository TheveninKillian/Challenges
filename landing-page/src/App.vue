<template>
  <Header />
</template>

<script>
import Header from "./components/Header";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "./assets/variables";
@import "./assets/mixins";

#app {
  position: relative;

  padding-top: 40px;
  padding-left: calc(50vw - 160px);
  padding-right: calc(50vw - 160px);

  font-family: "Rubik", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @include breakpoint(xs) {
    padding-left: calc(50vw - 280px);
    padding-right: calc(50vw - 280px);
  }
}
</style>
