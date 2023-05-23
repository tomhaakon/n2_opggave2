<template>
  <v-dialog v-model="mostEpicDialog">
    <v-card>
      <h1>Halloooo</h1>
      <p>{{ cardData.title }}</p>

      <v-btn @click="closeDialog()">X</v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      mostEpicDialog: false,
      cardData: {},
    };
  },
  methods: {
    openDialog(dataFromParent) {
      this.mostEpicDialog = true;
      this.cardData = dataFromParent;
    },
    closeDialog() {
      this.mostEpicDialog = false;
    },
  },
};
</script>
