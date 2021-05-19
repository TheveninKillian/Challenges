<template>
  <footer class="bg-black pt-10 pb-4">
    <div>
      <h3>spense.</h3>
      <p>
        Spense is en open plateform for individuals to share their unfiltered
        thoughts. Discuss the topics you love, and get paid for doing just that.
      </p>
    </div>

    <div>
      <div class="md:float-right">
        <h3>Sitemap</h3>

        <ul>
          <li>Homepage</li>
        </ul>
      </div>
    </div>

    <div>
      <div class="md:float-right">
        <h3>Ressouces</h3>

        <ul>
          <li>Support</li>
          <li class="mt-1">Contact</li>
          <li class="mt-1">FAQ</li>
        </ul>
      </div>
    </div>

    <div>
      <div class="xl:float-right">
        <h3>Company</h3>

        <ul>
          <li>About</li>
          <li class="mt-1">Customers</li>
          <li class="mt-1">Blog</li>
        </ul>
      </div>
    </div>

    <div>
      <div class="xl:float-right">
        <h3>Opportunities</h3>

        <ul>
          <li>Jobs</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import "../assets/sass/mixins";

footer {
  display: flex;
  flex-wrap: wrap;

  h3 {
    margin-bottom: 5px;

    color: white;
    font-size: 1.25rem;
    font-weight: bold;
  }

  p,
  li {
    color: rgba(255, 255, 255, 0.6);
    font-size: 1rem;
  }

  div:nth-child(1) {
    margin-bottom: 1.5rem;
    width: 100%;

    @include breakpoint(sm) {
      width: 50%;
    }

    @include breakpoint(xl) {
      width: 30%;
    }
  }

  div:nth-child(2) {
    order: 1;

    @include breakpoint(sm) {
      order: 0;
    }
  }

  div:nth-child(3) {
    order: 1;

    @include breakpoint(sm) {
      order: 0;
    }
  }

  div {
    margin-bottom: 1.5rem;
    width: calc(100% / 2);

    @include breakpoint(sm) {
      width: calc(100% / 4);
    }

    @include breakpoint(xl) {
      width: 17.5%;
    }
  }
}
</style>