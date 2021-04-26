<template>
  <header class="header">
    <div class="header__title">
      <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg">
        <g v-if="!activeNav">
          <circle fill="#5267DF" cx="12.5" cy="12.5" r="12.5" />
          <path
            d="M9 9v10l3.54-3.44L16.078 19V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z"
            fill="#FFF"
          />
        </g>

        <g v-if="activeNav">
          <circle fill="#fff" cx="12.5" cy="12.5" r="12.5" />
          <path
            d="M9 9v10l3.54-3.44L16.078 19V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z"
            fill="hsl(229, 31%, 21%)"
          />
        </g>
      </svg>
      <h1 :class="{ active: activeNav === true }">Bookmark</h1>
    </div>

    <div class="header__btn">
      <button @click="activeNav = true" v-if="!activeNav">
        <div class="bars"></div>
        <div class="bars"></div>
        <div class="bars"></div>
      </button>

      <button @click="activeNav = false" v-if="activeNav">
        <div class="cross"></div>
        <div class="cross"></div>
      </button>
    </div>

    <nav class="header__nav-mobile" :class="{ active: activeNav === true }">
      <ul>
        <hr />
        <li>Features</li>
        <hr />
        <li>Pricing</li>
        <hr />
        <li>Contact</li>
        <hr />
        <button>Login</button>
      </ul>

      <div class="social">
        <a href="#"
          ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
            /></svg
        ></a>
        <a href="#"
          ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z"
            /></svg
        ></a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeNav: false,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/variables";
@import "../assets/mixins";

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  z-index: 5;

  &__title {
    display: flex;
    align-items: center;

    h1 {
      margin: 0 0 0 10px;

      font-size: calc(1.375rem + 0.5vw);
      text-transform: uppercase;

      &.active {
        color: #fff;
      }
    }
  }

  &__btn {
    button {
      border: none;
    }

    .bars {
      width: 25px;
      height: 4px;
      margin-bottom: 4px;

      background-color: $VeryDarkBlue;

      &:nth-child(3) {
        margin-bottom: 0;
      }
    }

    .cross {
      width: 20px;
      height: 3px;
      margin-bottom: 4px;

      background-color: #fff !important;

      &:nth-child(1) {
        transform: rotateZ(45deg) translateX(5px);
      }

      &:nth-child(2) {
        transform: rotateZ(-45deg) translateX(5px);
      }
    }
  }

  &__nav-mobile {
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    padding-top: 90px;
    padding-left: calc(50vw - 160px);
    padding-right: calc(50vw - 160px);

    background-color: $VeryDarkBlue;
    color: #fff;
    opacity: 0;
    overflow: scroll;
    visibility: hidden;
    transition: all 0.5s;

    z-index: -1;

    @include breakpoint(xs) {
      padding-left: calc(50vw - 280px);
      padding-right: calc(50vw - 280px);
    }

    &.active {
      opacity: 0.95;
      visibility: inherit;
    }

    ul {
      margin: 0;
      padding: 0;

      text-align: center;

      hr {
        margin: 1.5rem 0;
      }

      li,
      button {
        font-weight: bold;
        letter-spacing: 3px;
        text-transform: uppercase;
      }

      button {
        width: 100%;
        padding: 10px 0;

        border: 2px solid #fff;
        border-radius: 5px;
      }
    }

    .social {
      position: relative;
      top: calc(100% / 3.5);

      width: 100%;

      text-align: center;

      svg {
        margin: 0 20px;
      }
    }
  }
}
</style>