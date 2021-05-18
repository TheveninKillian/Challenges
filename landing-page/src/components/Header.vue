<template>
  <header class="flex justify-between items-center py-8">
    <h1 class="cursor-pointer">spence</h1>

    <div class="header__hbg">
      <img
        src="../assets/images/Hamburger Menu.svg"
        alt="menu de navigation pour mobile"
      />
    </div>

    <nav class="header__nav">
      <ul class="flex">
        <li>Business</li>
        <li>Pricing</li>
        <li>Features</li>
      </ul>
    </nav>

    <nav class="header__nav">
      <ul class="flex">
        <li>Login</li>
        <li>Get Started</li>
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
      cursor: pointer;
    }
  }
}
</style>