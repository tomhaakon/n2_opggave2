<template>
  <div>
    <hello-world />
    <CarComp />
  </div>
</template>
<script>
import HelloWorld from "../components/HelloWorld";
import CarComp from "@/components/CarComp.vue";
export default {
  name: "Home",

  components: {
    HelloWorld,
    CarComp,
  },
};
</script>
