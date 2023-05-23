<template>
  <v-dialog v-model="mostEpicDialog" fullscreen>
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
    // Open Dialog
    openDialog(dataFromParentYes) {
      this.mostEpicDialog = true;
      this.cardData = dataFromParentYes;
    },
    // Close Dialog
    closeDialog() {
      this.mostEpicDialog = false;
    },
  },
};
</script>
