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
  padding-left: calc(50vw - 170px);
  padding-right: calc(50vw - 170px);
  padding-bottom: 3rem;

  background-color: #f0eeeb;

  @include breakpoint(xs) {
    padding-left: calc(50vw - 270px);
    padding-right: calc(50vw - 270px);
  }

  @include breakpoint(sm) {
    padding-left: calc(50vw - 350px);
    padding-right: calc(50vw - 350px);
  }

  @include breakpoint(md) {
    padding-left: calc(50vw - 450px);
    padding-right: calc(50vw - 450px);
  }

  @include breakpoint(lg) {
    padding-left: calc(50vw - 550px);
    padding-right: calc(50vw - 550px);
  }

  @include breakpoint(xl) {
    padding-left: calc(50vw - 600px);
    padding-right: calc(50vw - 600px);
  }

  @include breakpoint(xxl) {
    padding-left: calc(50vw - 670px);
    padding-right: calc(50vw - 670px);
  }
}
</style>
