<template>
  <div class="setting">
    <div class="setting__wrapper setting__wrapper--pointer" @click="show = !show">
      <p class="setting__text">Add location</p>
      <button-arrow class="weather-widget__btn" :opened="show" />
    </div>
    
    <common-transition>
      <form action="" class="setting__wrapper" v-if="show">
        <select class="setting__select" v-model="selected">
          <option disabled value="" selected>Choose...</option>
          <template v-for="(city, index) in getDataCities" :key="index">
            <option>{{city}}</option>
          </template>
        </select>
        <common-button text="Add" @click="$emit('add', selected)" />
      </form>
    </common-transition>
  </div>
</template>

<script>
import ButtonArrow from "@/components/ButtonArrow.ce.vue";
import CommonTransition from "@/components/CommonTransition.ce.vue";
import CommonButton from "@/components/CommonButton.ce.vue";

export default {
  name: "Setting",

  components: {
    ButtonArrow,
    CommonTransition,
    CommonButton
  },

  props: {
    cities: {
      type: Array,
      requared: true
    },
    selectedCities: {
      type: Array,
      requared: true
    },
  },

  computed: {
    getDataCities() {
      return this.cities.reduce((res, item) => {
        if (!this.selectedCities.includes(item.city)) {
          res.push(item.city);
        }
        return res;
      }, []);
    }
  },

  data() {
    return {
      show: false,
      selected: null
    }
  },
  
  methods: {}
};
</script>

<style scoped lang="scss">
.setting__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}

.setting__wrapper--pointer {
  cursor: pointer;
}

.setting__text {
  margin: 0;
  font-size: 24px;
}

.setting__select {
  display: block; 
  font-size: 20px;
  font-weight: 400; 
  color: #000000; 
  line-height: 1.3; 
  padding: 5px 10px; 
  width: 100%; 
  max-width: 70%; 
  box-sizing: border-box; 
  margin: 0;
  border: 1px solid #000000;
  box-shadow: none; 
  border-radius: 0.5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #ffffff;
  background-image: none;
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
  cursor: pointer;
  transition: opacity 0.3s;
}

.setting__select::-ms-expand { 
  display: none;
}

.setting__select:hover {
  opacity: 0.8;
} 

.setting__select:focus {
  border-color: #000000;
  box-shadow: none;
  color: #000000;
  outline: none;
}

.setting__select option {
  font-size: 20px;
  font-weight: 400;
  color: #000000;
}
</style>
