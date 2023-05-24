<template>
  <v-dialog v-model="mySuperDialog" width="500" persistent>
    <v-card>
      <v-card-title>
        {{ item.name }}
      </v-card-title>
      <p class="title text-center"></p>
      <v-card-text>{{ item.description }}</v-card-text>

      <v-btn class="error" @click="closeDialog()">Close Dialog</v-btn>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      item: {},
      mySuperDialog: false,
    };
  },
  methods: {
    openDialog(item) {
      this.item = item;
      this.mySuperDialog = true;
    },
    closeDialog() {
      this.mySuperDialog = false;
    },
  },
};
</script>
