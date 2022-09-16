<template>
  <div class="weather-widget">
    <div class="weather-widget__box">
      <p class="weather-widget__text">{{ dataWeather.city }}, {{ dataWeather.country }}</p>
      <common-button text="Delete" @click="$emit('delete', dataWeather.city)" />
      <button-arrow class="weather-widget__btn" :opened="show" @click="show = !show" />
    </div>
    
    <div class="weather-widget__wrapper weather-widget__wrapper--around">
      <img :src="`http://openweathermap.org/img/wn/${dataWeather.img.icon}@4x.png`" width="150" height="150" :alt="dataWeather.img.alt">
      <span class="weather-widget__title">{{getTemp(dataWeather.temp)}}°C</span>
    </div>

    <common-transition> 
      <div v-if="show">
        <p class="weather-widget__text weather-widget__text--desc">Feels like {{getTemp(dataWeather.feelsLike)}}°C.<br/>{{description}}</p>
        <div class="weather-widget__wrapper">
          <img src="https://cdn-icons-png.flaticon.com/512/650/650189.png" width="32" height="32" alt="Wind speed">
          <span class="weather-widget__text">{{dataWeather.windSpeed}}m/s {{setCardinalDirection(dataWeather.windDeg)}}</span>
        </div>
        <div class="weather-widget__wrapper">
          <img src="https://cdn-icons-png.flaticon.com/128/483/483529.png" width="32" height="32" alt="Pressure">
          <span class="weather-widget__text">{{dataWeather.pressure}}hPa</span>
        </div>
        <p class="weather-widget__text">Humidity: {{dataWeather.humidity}}%</p>
        <p class="weather-widget__text">Visibility: {{visibility}}km</p>
      </div>
    </common-transition>
  </div>
</template>

<script>
import ButtonArrow from "@/components/ButtonArrow.ce.vue";
import CommonTransition from "@/components/CommonTransition.ce.vue";
import CommonButton from "@/components/CommonButton.ce.vue";

export default {
  name: "WeatherWidget",

  components: {
    ButtonArrow,
    CommonTransition,
    CommonButton
},

  props: {
    dataWeather: Object,
  },

  computed: {
    description() {
      return this.dataWeather.desc.charAt(0).toUpperCase() + this.dataWeather.desc.slice(1);
    },

    visibility() {
      return (this.dataWeather.visibility / 1000).toFixed(1)
    },
  },

  data() {
    return {
      show: false,
    }
  },
  
  methods: {
    getTemp(temp) {
      return Math.round(temp);
    },

    setCardinalDirection(deg) {
      const value = Math.floor((deg / 22.5) + 0.5);
      const arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
      
      return arr[(value % 16)];
    }
  }
};
</script>

<style scoped lang="scss">
.weather-widget__box {
  display: flex;
  align-items: center;

  .weather-widget__text {
    margin-right: auto;
    margin-bottom: 0;
  }
}

.weather-widget__text {
  margin: 0;
  margin-bottom: 15px;
  font-size: 24px;
}

p.weather-widget__text:last-child {
  margin-bottom: 0;
}

span.weather-widget__text {
  display: inline-block;
  margin-bottom: 0;
}

.weather-widget__text--desc {
  margin-bottom: 25px;
  text-align: center;
}

.weather-widget__wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.weather-widget__wrapper:not(.weather-widget__wrapper--around) img {
  margin-right: 15px;
}

.weather-widget__wrapper--around {
  justify-content: space-around;
  margin-bottom: 0;
}

.weather-widget__title {
  font-size: 36px;
  font-weight: 700;
}
</style>
