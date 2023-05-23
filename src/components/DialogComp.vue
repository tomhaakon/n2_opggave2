<template>
  <v-dialog v-model="dialogBox" fullscreen>
    <v-card>
      <h1>hei</h1>
      <p>data her</p>
      <v-btn @click="closeDialog()">X</v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogBox: false,
      cardData: {},
    };
  },
  methods: {
    openDialog(dataFromParent) {
      this.dialogBox = true;
      this.cardData = dataFromParent;
    },
    closeDialog() {
      this.dialogBox = false;
    },
  },
};
</script>
