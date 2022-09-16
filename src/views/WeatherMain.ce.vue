<template>
  <div class="weather-main">
    <setting v-if="dataCities" :cities="dataCities" :selected-cities="selectedCities()" @add="addCity($event)" />
    <template v-for="(item, index) in dataWeather" :key="index">
      <weather-widget v-if="item" :data-weather="item" @delete="deleteCity($event)" class="weather-main__widget" />
    </template>
  </div>
</template>

<script>
import { getDataCities } from "@/api/citiesApi";
import { getDataWeather } from "@/api/weatherApi";
import WeatherWidget from "@/components/WeatherWidget.ce.vue";
import Setting from "@/components/Setting.ce.vue";

export default {
  name: "home",

  components: {
    WeatherWidget,
    Setting
  },

  data() {
    return {
      dataCities: [],
      dataWeather: [],
    };
  },

  computed: {},

  watch: {
    dataCities(newValue, oldValue) {
      if (newValue != oldValue) this.getWeather(this.dataCities[0]?.latitude, this.dataCities[0]?.longitude);
    },
  },

  beforeMount() {
    this.getCities();
    this.getWeather(this.dataCities[0]?.latitude, this.dataCities[0]?.longitude);
  },

  methods: {
    async getCities() {
      this.dataCities = await getDataCities();
    },
    async getWeather(lat, lon) {
      if ( !!lat && !!lon) {
        return this.dataWeather.push(await getDataWeather(lat, lon));
      }
    },
    selectedCities() {
      return this.dataWeather.map((item) => item.city);
    },
    deleteCity(city) {
      return this.dataWeather = this.dataWeather.filter((item) => item.city != city ?? item)
    },
    addCity(city) {
      const newCity = this.dataCities.filter((item) => item.city === city ?? item);
      this.getWeather(newCity[0].latitude, newCity[0].longitude);
    }
  },
};
</script>
<style scoped lang="scss">
.weather-main {
  position: absolute;
  right: 16px;
  width: 100%;
  max-width: 270px;
  padding: 30px 15px;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 12px;
  box-shadow: 10px 10px 6px 0 rgba(12, 5, 21, 0.41);
}

.weather-main__widget:not(:first-child) {
  position: relative;
  margin-top: 30px;

  &::before {
    content: "";
    position: absolute;
    top: -15px;
    display: block;
    width: 100%;
    height: 1px;
    background-color: rgba($color: #000000, $alpha: 0.8);
    border-radius: 0.5em;
  }
}
</style>
