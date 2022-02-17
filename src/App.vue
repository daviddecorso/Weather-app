<template>
  <div
    id="app"
    v-bind:style="{ backgroundImage: 'url(' + backgroundImage + ')' }"
  >
    <div class="container">
      <Weather :msg="weatherType" /> <Umbrella :msg="umbrellaText" />
    </div>
  </div>
</template>

<script>
import Weather from "./components/Weather.vue";
import Umbrella from "./components/Umbrella.vue";
import axios from "axios";
import sunnyImage from "./img/sunny.jpg";
import snowyImage from "./img/snowy.jpg";
import rainyImage from "./img/rain.jpg";
import gloomyImage from "./img/gloomy.jpg";

let backgroundImage = sunnyImage;

export default {
  name: "App",
  components: {
    Weather,
    Umbrella,
  },
  data() {
    return {
      weatherType: "",
      umbrellaText: "",
      sunnyImage: sunnyImage,
      snowyImage: snowyImage,
      rainyImage: rainyImage,
      gloomyImage: gloomyImage,
      backgroundImage: backgroundImage,
    };
  },
  methods: {
    async getWeatherType() {
      axios
        .post("http://localhost:5000/getWeatherFromDate", {
          date: "2/16/22",
        })
        .then((res) => {
          this.weatherType = res.data;
          this.getUmbrellaStatus();
          switch (res.data) {
            case "Sunny":
              this.backgroundImage = sunnyImage;
              break;
            case "Snowy":
              this.backgroundImage = snowyImage;
              break;
            case "Rainy":
              this.backgroundImage = rainyImage;
              break;
            case "Gloomy":
              this.backgroundImage = gloomyImage;
              break;
          }
        });
    },
    async getUmbrellaStatus() {
      // This does not call the umbrella API, but instead uses the weather type API call.
      // This is so the umbrella type matches the forecast.
      if (this.weatherType === "Rainy") {
        this.umbrellaText = "will";
      } else {
        this.umbrellaText = "will not";
      }
    },
  },
  beforeMount() {
    this.getWeatherType();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  overflow: hidden;
}

.container {
  background-color: #000000de;
  width: 90%;
  max-width: 780px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 60px;
  padding-bottom: 40px;
  margin-top: 15vh;
}

body {
  margin: 0;
}
</style>
