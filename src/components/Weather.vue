<template>
  <div class="hello">
    <h2>Today the weather is</h2>
    <svg
      v-if="msg === 'Sunny'"
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-sun"
      width="60"
      height="60"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="#ffec00"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="12" r="4" />
      <path
        d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"
      />
    </svg>
    <svg
      v-if="msg === 'Rainy'"
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-cloud-rain"
      width="60"
      height="60"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="#00abfb"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7" />
      <path d="M11 13v2m0 3v2m4 -5v2m0 3v2" />
    </svg>
    <svg
      v-if="msg === 'Snowy'"
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-snowflake"
      width="60"
      height="60"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#00abfb"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" />
      <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(60 12 12)" />
      <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(120 12 12)" />
      <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(180 12 12)" />
      <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(240 12 12)" />
      <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(300 12 12)" />
    </svg>
    <svg
      v-if="msg === 'Gloomy'"
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-cloud-fog"
      width="60"
      height="60"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#9e9e9e"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M7 16a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12"
      />
      <line x1="5" y1="20" x2="19" y2="20" />
    </svg>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Weather",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
h1 {
  font-size: 50px;
  margin-top: 1rem;
}
h2 {
  margin-top: 0;
  padding-top: 60px;
}
svg {
  margin-top: 1.5rem;
}
</style>
