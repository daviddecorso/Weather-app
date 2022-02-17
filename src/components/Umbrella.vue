<template>
  <div class="umbrella-container">
    <div class="umbrella-div">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-umbrella"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="#9334ff"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 12a8 8 0 0 1 16 0z" />
        <path d="M12 12v6a2 2 0 0 0 4 0" />
      </svg>
      <p>UmbrellaMate</p>
    </div>
    <h1>You {{ msg }} need an umbrella today.</h1>
  </div>
</template>

<script>
export default {
  name: "Umbrella",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.umbrella-container {
  text-align: left;
  margin-left: 13%;
}

.umbrella-div {
  margin-top: 3rem;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
}

p {
  color: #9334ff;
  font-weight: bold;
  margin-left: 5px;
  padding-top: 2px;
}
h1 {
  margin-top: 0.5rem;
}
</style>
