<template>
  <v-dialog v-model="mySuperDialog" max-width="344">
    <v-card>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-2">{{ item.link }}</div>
          <v-list-item-title class="text-h5 mb-1">
            {{ item.title }}
          </v-list-item-title>
          <v-list-item-subtitle class="pa-2 grey lighten-3 rounded-t-0">
            <p>
              {{ item.description }}
            </p>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn @click="closeDialog()">x</v-btn></v-list-item-action
        >
      </v-list-item>
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
