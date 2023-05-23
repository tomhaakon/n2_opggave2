<template>
  <div>
    <p>Dette er CarView.vue - under her ska det vises en bil.</p>
    <Car />
  </div>
</template>
<script>
import Car from "@/components/CarComp.vue";
export default {
  name: "BilHeih",

  components: {
    Car,
  },
};
</script>
