<template>
  <div>
    <div class="contact">
      <h1>{{ contacts }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: {
	  contacts: ['']
  }
};
</script>

<style scoped>
</style>