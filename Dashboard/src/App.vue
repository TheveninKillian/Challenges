<script>
  import BigCard from './components/BigCard'
  import LittleCard from './components/LittleCard'

  const html = document.querySelector('html')

  export default{
    components: {
      BigCard,
      LittleCard
    },
    data() {
      return {
        statsBigCard: [
          {
            reseaux: 'facebook',
            title: '@nathanf',
            number: 1987,
            icon: 'img/icon-facebook.svg',
            stat: {
              number: 12,
              variation: 'img/icon-up.svg'
            }
          },
          {
            reseaux: 'twitter',
            title: '@nathanf',
            number: 1044,
            icon: 'img/icon-twitter.svg',
            stat: {
              number: 99,
              variation: 'img/icon-up.svg'
            }
          },
          {
            reseaux: 'instagram',
            title: '@realnathanf',
            number: 11000,
            icon: 'img/icon-instagram.svg',
            stat: {
              number: 1099,
              variation: 'img/icon-up.svg'
            }
          },
          {
            reseaux: 'youtube',
            title: 'Nathan F.',
            number: 8239,
            icon: 'img/icon-youtube.svg',
            stat: {
              number: 144,
              variation: 'img/icon-down.svg'
            }
          },
        ],
        statsLittleCard: [
          {
            key: 'facebook view',
            text: 'Pages View',
            number: 87,
            icon: 'img/icon-facebook.svg',
            stat: {
              number: 3,
              variation: 'img/icon-up.svg'
            }
          },
          {
            key: 'facebook like',
            text: 'Likes',
            number: 52,
            icon: 'img/icon-facebook.svg',
            stat: {
              number: 2,
              variation: 'img/icon-down.svg'
            }
          },
          {
            key: 'instagram like',
            text: 'Likes',
            number: 5462,
            icon: 'img/icon-instagram.svg',
            stat: {
              number: 2257,
              variation: 'img/icon-up.svg'
            }
          },
          {
            key: 'instagram view',
            text: 'Profile Views',
            number: 52000,
            icon: 'img/icon-instagram.svg',
            stat: {
              number: 1375,
              variation: 'img/icon-up.svg'
            }
          },
          {
            key: 'twitter rt',
            text: 'Retweets',
            number: 117,
            icon: 'img/icon-twitter.svg',
            stat: {
              number: 303,
              variation: 'img/icon-up.svg'
            }
          },
          {
            key: 'twitter likes',
            text: 'Likes',
            number: 507,
            icon: 'img/icon-twitter.svg',
            stat: {
              number: 507,
              variation: 'img/icon-up.svg'
            }
          },
          {
            key: 'youtube like',
            text: 'Likes',
            number: 107,
            icon: 'img/icon-youtube.svg',
            stat: {
              number: 19,
              variation: 'img/icon-down.svg'
            }
          },
          {
            key: 'youtube view',
            text: 'Total Views',
            number: 1407,
            icon: 'img/icon-youtube.svg',
            stat: {
              number: 12,
              variation: 'img/icon-down.svg'
            }
          },
        ],
        activeDarkMode: false
      }
    },
    computed: {
      sumFollowers(){
        let tabs = []
        const reducer = (accumulator, currentValue) => accumulator + currentValue;

        for(let i = 0; i < this.statsBigCard.length; i++){
          tabs.push(this.statsBigCard[i].number)
        }

        return tabs.reduce(reducer)
      }
    },
    methods: {
      toggleTheme(){
        if(this.activeDarkMode !== true){
          this.activeDarkMode = true

          html.classList.add('dark-mode')
        }else{
          this.activeDarkMode = false

          html.classList.remove('dark-mode')
        }
      }
    }
  }
</script>

<template>
  <div class="hero" :class="{ 'dark-mode': activeDarkMode }">
    <header class="header">
      <div class="header__title">
        <h1>Social Media Dashboard</h1>
        <span>Total Followers: {{ sumFollowers }}</span>
      </div>

      <hr>

      <div class="header__btn-toggle">
        <span>Dark Mode</span>
        <!-- <button @click="toggleTheme">Switch</button> -->
        <input class="tgl tgl-light" id="cb1" type="checkbox" @click="toggleTheme" />
        <label class="tgl-btn" for="cb1"></label>
      </div>
    </header>

    <section class="hero__container">
      <BigCard v-for="item in statsBigCard" :key="item.reseaux" :icon="item.icon" :title="item.title" :number="item.number" :variation="item.stat.variation" :statnumber="item.stat.number" :class="item.reseaux"/> 
    </section>

    <div class="hero__wrapper">
      <p class="subtitle">Overview - Today</p>

      <section class="hero__container hero__little-card">
        <LittleCard v-for="item in statsLittleCard" :key="item.key" :text="item.text" :number="item.number" :icon="item.icon" :statNumber="item.stat.number" :variation="item.stat.variation"/>
      </section>
    </div>

    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by Killian Thevenin.
    </div>
  </div>
</template>

<style lang="scss">
  @import './assets/sass/variables';
  @import './assets/sass/mixins';
  @import './assets/sass/dark';

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    background: $white-text;
  }

  body{
    font-family: $font;
  }

  .hero{
    padding-top: 25px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 25px;

    &__container{
      display: grid;

      margin-top: 25px;
    }

    &__wrapper{
      margin-top: 20px;
    }
  }

  .header{
    &__title span,
    &__btn-toggle{
      @include text;
    }

    &__title{
      margin-bottom: 15px;

      h1{
        font-size: 22px;
      }

      span{
        display: inline-block;
        margin-top: 5px;
      }
    }

    &__btn-toggle{
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-top: 15px;

      .tgl {
        display: none;

        &,
        &:after,
        &:before,
        & *,
        & *:after,
        & *:before,
        & + .tgl-btn {
          box-sizing: border-box;

          &::selection {
            background: none;
          }
        }
        
        +.tgl-btn {
          outline: 0;
          display: inline-block;
          width: 45px;
          height: 25px;
          position: relative;
          cursor: pointer;
          user-select: none;
          transform: rotate(180deg);

          &:after,
          &:before {
            position: relative;
            display: block;
            content: "";
            width: 50%;
            height: 100%;
          }
          
          &:after {
            left: 0;
          }
          
          &:before {
            display: none;
          }
        }
        
        &:checked + .tgl-btn:after {
          left: 50%;
        }
      }

      .tgl-light {
        + .tgl-btn {
          background: $light;
          border-radius: 2em;
          padding: 3px;
          transition: all .4s ease;

          &:after {
            border-radius: 50%;
            background: #fff;
            transition: all .2s ease;
          }
        }
        
        &:checked + .tgl-btn {
          background: $dark;
        }
      }
    }
  }

  .subtitle{
    color: $dark-grayish-blue;
    font-size: 22px;
    font-weight: 700;
  }

  .attribution{
    margin-top: 20px
  }

  @import './assets/sass/responsive';
</style>
