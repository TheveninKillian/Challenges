<template>
  <div class="little-card">
    <div class="little-card__wrapper">
      <p>{{ text }}</p>
      <div class="little-card__number">{{ minifyNum }}</div>
    </div>

    <div class="little-card__wrapper">
      <img class="icon-reseaux" :src="icon" alt='icon' width="20" height="20">
      <div class="little-card__stat">
        <img :src="variation" :alt="altIcon(variation)">
        <span :class="classVariation">{{ statNumber + '%' }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LittleCard',
    props: {
      text: String,
      number: Number,
      icon: String,
      variation: String,
      statNumber: Number
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

  .little-card{
    display: flex;
    justify-content: space-between;

    margin-bottom: 15px;
    padding: 20px;

    background-color: $light-grayish-blue;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
      background-color: hsl(227, 47%, 90%);
    }

    &__wrapper{
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 75px
    }

    p{
      @include text;
    }

    &__number{
      color: $dark-blue-bg;
      font-size: 30px;
      font-weight: 700;
    }

    .icon-reseaux{
      position: absolute;
      top: 0;
      right: 0px;
    }

    &__stat{
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 12px;

      img{
        position: absolute;
        top: 5px;
        left: -8px;
      }

      span{
        margin-left: 3px;
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

  @media all and (min-width: 1440px){
    .little-card{
      margin-bottom: 20px;
    }
  }
</style>