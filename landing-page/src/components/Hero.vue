<template>
  <section class="hero">
    <div class="hero__img">
      <img src="../assets/images/Hero-Image.png" />
    </div>

    <div class="hero__wrapper">
      <h2 class="font-bold">Share your unfiltered thoughts. Get paid.</h2>

      <p class="mt-2 opacity-70">
        Spense is an open platform for individuals to share their unfiltered
        thoughts. Discuss the topics you love, and get paid for doing
        <span class="italic">just</span> that.
      </p>

      <ul class="mt-3 mb-7">
        <li class="mb-2">Receive 99% off the earnings.</li>
        <li class="mb-2">Get paid via Debit Card, ACH, or Paypal.</li>
        <li>Withdraw your earnings anytime</li>
      </ul>

      <div>
        <input
          type="text"
          placeholder="john@example.com"
          class="w-170px border border-gray-400 py-4 pl-5 mr-3 rounded-md"
        />
        <input type="submit" value="Get Started" class="btn cursor-pointer" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "../assets/sass/mixins";

.hero {
  @include breakpoint(sm) {
    &__img {
      height: 570px;
    }
  }

  @include breakpoint(md) {
    display: flex;
    align-items: center;

    &__img {
      order: 1;

      width: 40%;
      height: auto;

      border-radius: 0;
      overflow: auto;
    }

    &__wrapper {
      margin-top: 0;
      width: 60%;
    }
  }

  @include breakpoint(lg) {
    &__wrapper {
      margin-right: 150px;
    }
  }

  &__img {
    height: 300px;

    border-radius: 10px;
    overflow: hidden;
  }

  &__wrapper {
    margin-top: 2rem;
  }

  li {
    &::before {
      content: "";
      float: left;
      width: 24px;
      height: 24px;
      margin-right: 15px;
      background-image: url("../assets/images/Checkmark.svg");
    }
  }
}
</style>