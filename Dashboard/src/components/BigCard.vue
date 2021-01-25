<template>
  <div class="big-card">
    <div class="big-card__border"></div>

    <div class="big-card__name">
      <img :src="icon" alt="icon">
      <span>{{ title }}</span>
    </div>

    <div class="big-card__number">{{ minifyNum }}</div>

    <div class="big-card__text">Followers</div>

    <div class="big-card__stat">
      <img :src="variation" :alt="altIcon(variation)">
      <span :class="classVariation">{{ statnumber }} Today</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BigCard',
    data() {
      return {
        altIconVariation: ''
      }
    },
    props: {
      icon: String,
      title: String,
      number: Number,
      variation: String,
      statnumber: Number
    },
    computed:{
      classVariation(){
        return{
          up: this.variation === 'img/icon-up.svg',
          down: this.variation === 'img/icon-down.svg'
        }
      },
      minifyNum(){
        if(this.number < 10000){
          return this.number
        }else{
          let numString = this.number.toString()
          return numString.substring(0, 2) + "K"
        }
      }
    },
    methods: {
      altIcon(variation){
        if(variation === 'img/icon-up.svg'){
          return 'icon up'
        }else{
          return 'icon down'
        }
      }
    },
  }
</script>

<style scoped lang="scss">
  @import '../assets/sass/variables';
  @import '../assets/sass/mixins';

  .big-card{
    margin-bottom: 25px;
    padding-bottom: 20px;

    background-color: $light-grayish-blue;
    border-radius: 5px;

    text-align: center;
    cursor: pointer;

    &:hover{
      background-color: hsl(227, 47%, 90%);
    }

    &__border{
      height: 5px;
      margin-bottom: 20px;
      width: 100%;

      border-radius: 5px 5px 0 0;
    }

    &__name{
      display: flex;
      justify-content: center;

      @include text;

      span{
        margin-left: 5px;
      }
    }

    &__number{
      margin-top: 15px;

      color: $dark-blue-bg;
      font-size: 55px;
      font-weight: 700;
    }

    &__text{
      color: $dark-grayish-blue;
      font-size: 13px;
      letter-spacing: 5px;
      text-transform: uppercase;
    }

    &__stat{
      margin-top: 15px;

      font-size: 12px;

      img{
        position: relative;
        top: -2px;
      }

      span{
        margin-left: 5px;
        font-weight: 700;
      }

      .up{
        color: #1EB589;
      }

      .down{
        color: #DC414C;
      }
    }
  }

  .big-card.facebook .big-card__border{
      background-color: $facebook;
  }

  .big-card.twitter .big-card__border{
      background-color: $twitter;
  }

  .big-card.instagram .big-card__border{
      background: $instagram;
  }

  .big-card.youtube .big-card__border{
      background-color: $youtube;
  }

  @media all and (min-width: 1024px){
    .big-card{
      &__border{
        margin-bottom: 30px;
      }

      &__number{
        margin-top: 20px;
      }

      &__stat{
        margin-top: 25px;
      }
    }
  }
</style>
