<template>
  <div>
    <v-row class="ma-2">
      <strong>choose card</strong>
    </v-row>
    <v-row>
      <v-col v-for="(card, index) in cards" :key="index" class="ma-2">
        <v-card>
          <p>{{ card.title }}</p>
          <v-btn @click="$refs.openBestModal.openDialog(card)"
            >Open The Modal</v-btn
          >
        </v-card>
      </v-col>
    </v-row>
    <BestDialogEver ref="openBestModal"></BestDialogEver>
  </div>
</template>

<script>
import BestDialogEver from "@/components/epicDialog.vue";
export default {
  components: {
    BestDialogEver,
  },
  data() {
    return {
      cards: [
        {
          title: "item 1",
          description: "description of item 1",
        },
        {
          title: "item 2",
          description: "description of item 2",
        },
        {
          title: "item 3",
          description: "description of item 2",
        },
      ],
    };
  },
};
</script>
