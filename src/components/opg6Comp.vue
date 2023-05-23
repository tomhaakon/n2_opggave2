<template>
  <v-container>
    <v-row no-gutters>
      <v-col align-self="start"> <h1>dette er opg6</h1></v-col>
    </v-row>
    <v-row no-gutters
      ><v-card color="orange">
        <v-col align-self="start" class="pa-2 ma-2">
          Du:{{ myEpicVmodel }}
        </v-col></v-card
      >
    </v-row>
    <v-row no-gutters>
      <v-col align-self="start">
        <v-text-field v-model="myEpicVmodel" class="pa-2 ma-2"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      myEpicVmodel: "skriv noe",
    };
  },
};
</script>
