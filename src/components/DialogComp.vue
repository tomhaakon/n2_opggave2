<template>
  <v-dialog v-model="mostEpicDialog" width="500">
    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        {{ cardData.title }}
      </v-card-title>

      <v-card-text class="pa-2">{{ cardData.description }}</v-card-text>
      <v-divider></v-divider>
      <v-btn @click="closeDialog()">Close</v-btn>
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
