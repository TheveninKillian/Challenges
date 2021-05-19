<script setup lang="ts"></script>

<template>
  <Banner />

  <div class="main">
    <Header />
    <Hero />
  </div>

  <div class="banner-social flex justify-between py-10">
    <img src="./assets/images/Facebook Logo.png" />
    <img src="./assets/images/Dribbble Logo.png" />
    <img src="./assets/images/Youtube Logo.png" />
    <img src="./assets/images/Pinterest Logo.png" class="pinterest" />
    <img src="./assets/images/Twitter Logo.png" class="twitter" />
    <img src="./assets/images/Reddit Logo.png" class="reddit" />
    <img src="./assets/images/Google Logo.png" class="google" />
    <img src="./assets/images/Slack Logo.png" class="slack" />
  </div>

  <div class="section">
    <div class="escrow rounded-lg">
      <div class="escrow__text">
        <h2 class="font-bold">Secure your money with Escrow.</h2>

        <p class="opacity-70 mt-2">
          Spense uses Escrow to secure all payments. We believe Escrow offers
          the highest level of security for your payments, so you never need to
          worry about scams.
        </p>

        <p class="mt-3 underline">Learn more about Escrow -></p>
      </div>

      <div class="escrow__img">
        <img src="./assets/images/Phone Mockup.png" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./assets/sass/mixins";

.main,
.banner-social,
.section {
  padding-left: calc(50vw - 170px);
  padding-right: calc(50vw - 170px);

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

.main {
  padding-bottom: 3rem;

  background-color: #f0eeeb;
}

.section .escrow {
  padding: 2rem 2rem 0 2rem;

  background-color: #f0eeeb;

  @include breakpoint(sm) {
    height: 650px;
    padding: 4rem 6rem 0 6rem;

    overflow: hidden;
  }

  @include breakpoint(md) {
    display: flex;
    align-items: center;

    height: auto;
    padding: 2.5rem 1.5rem 0 4rem;
  }

  &__text {
    @include breakpoint(md) {
      width: 55%;
    }

    @include breakpoint(xl) {
      padding-right: 12%;
    }

    h2 {
      width: 80%;

      @include breakpoint(sm) {
        font-size: 2.5rem;
        line-height: 3rem;
      }

      @include breakpoint(md) {
        width: 100%;
      }
    }
  }

  &__img {
    margin-top: 1.5rem;

    @include breakpoint(sm) {
      margin-top: 2.5rem;
    }

    @include breakpoint(md) {
      margin-top: 0;
      width: 45%;
    }

    img {
      width: 100%;
    }
  }
}

.banner-social {
  .pinterest,
  .twitter,
  .reddit,
  .google,
  .slack {
    display: none;
  }

  @include breakpoint(sm) {
    .pinterest,
    .twitter {
      display: block;
    }
  }

  @include breakpoint(xl) {
    .reddit,
    .google,
    .slack {
      display: block;
    }
  }

  img {
    width: calc(100% / 3.33333);

    @include breakpoint(sm) {
      width: calc(100% / 6);
    }

    @include breakpoint(lg) {
      width: calc(100% / 8);
    }

    @include breakpoint(xl) {
      width: calc(100% / 13);
      height: 25px;
    }
  }
}
</style>
