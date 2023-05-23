<template>
  <div>
    <v-row>
      <v-col v-for="(card, index) in cards" :key="index" class="ma-2">
        <v-card>
          <v-btn @click="$refs.openBestModal.openDialog(card)">
            {{ card.title }}
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
    <BestDialogEver ref="openBestModal"></BestDialogEver>
  </div>
</template>

<script>
import BestDialogEver from "@/components/DialogComp.vue";
export default {
  components: {
    BestDialogEver,
  },
  data() {
    return {
      cards: [
        {
          title: "item 1",
          description: "descrition on item 1",
        },
        {
          title: "item 2",
          description: "descrition on item 2",
        },
        {
          title: "item 3",
          description: "descrition on item 3",
        },
      ],
    };
  },
};
</script>
