<template>
  <section class="hero">
    <div class="hero__img">
      <img src="../assets/images/Hero Image.png" />
    </div>

    <div class="hero__wrapper">
      <h2 class="text-3xl font-bold">
        Share your unfiltered thoughts. Get paid.
      </h2>

      <p>
        Spense is an open platform for individuals to share their unfiltered
        thoughts. Discuss the topics you love, and get paid for doing
        <span class="italic">just</span> that.
      </p>

      <ul>
        <li>Receive 99% off the earnings.</li>
        <li>Get paid via Debit Card, ACH, or Paypal.</li>
        <li>Withdraw your earnings anytime</li>
      </ul>

      <div>
        <input type="text" />
        <input type="submit" value="Get Started" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "../assets/sass/mixins";

.hero {
  @include breakpoint(md) {
    display: flex;
    align-items: center;

    &__img {
      order: 1;

      width: 45%;
    }

    &__wrapper {
      width: 55%;
    }
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