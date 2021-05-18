<template>
  <header class="flex justify-between items-center py-8">
    <h1 class="cursor-pointer font-extrabold">spense.</h1>

    <div class="header__hbg">
      <img
        src="../assets/images/Hamburger Menu.svg"
        alt="menu de navigation pour mobile"
      />
    </div>

    <nav class="header__nav">
      <ul class="flex">
        <li class="mr-6 ml-6">Business</li>
        <li class="mr-6">Pricing</li>
        <li>Features</li>
      </ul>
    </nav>

    <nav class="header__nav">
      <ul class="flex items-center">
        <li class="mr-6">Login</li>
        <li class="btn">Get Started</li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
@import "../assets/sass/mixins";

.header {
  &__hbg {
    cursor: pointer;

    @include breakpoint(sm) {
      display: none;
    }
  }

  &__nav {
    display: none;

    @include breakpoint(sm) {
      display: block;
    }

    li {
      font-weight: bold;

      cursor: pointer;
    }
  }
}
</style>