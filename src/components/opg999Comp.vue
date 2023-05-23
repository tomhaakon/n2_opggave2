<template>
  <v-row>
    <v-col v-for="(card, index) in cards" :key="index" class="ma-2">
      <v-card>
        <p></p>
        <v-btn @click="$refs.dialogBox.openDialog(card)">Open</v-btn>
      </v-card>
    </v-col>
  </v-row>
  <v-row><dialogBox></dialogBox></v-row>
</template>

<script>
import dialogBox from "@/components/DialogComp.vue";
export default {
  components: {
    dialogBox,
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
