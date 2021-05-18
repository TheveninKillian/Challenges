<script setup lang="ts"></script>

<template>
  <Banner />

  <div class="main">
    <Header />
    <Hero />
  </div>
</template>

<style lang="scss">
@import "./assets/sass/mixins";

.main {
  padding-left: calc(50vw - 150px);
  padding-right: calc(50vw - 150px);
  padding-bottom: 3rem;

  background-color: #f0eeeb;

  @include breakpoint(xs) {
    padding-left: calc(50vw - 250px);
    padding-right: calc(50vw - 250px);
  }

  @include breakpoint(sm) {
    padding-left: calc(50vw - 325px);
    padding-right: calc(50vw - 325px);
  }

  @include breakpoint(md) {
    padding-left: calc(50vw - 400px);
    padding-right: calc(50vw - 400px);
  }

  @include breakpoint(lg) {
    padding-left: calc(50vw - 500px);
    padding-right: calc(50vw - 500px);
  }

  @include breakpoint(xl) {
    padding-left: calc(50vw - 550px);
    padding-right: calc(50vw - 550px);
  }

  @include breakpoint(xxl) {
    padding-left: calc(50vw - 670px);
    padding-right: calc(50vw - 670px);
  }
}
</style>
