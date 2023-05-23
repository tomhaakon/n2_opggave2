<template>
  <v-container>
    <v-row>
      <v-col align-self="start"> <h1>dette er opg8</h1></v-col>
    </v-row>

    <v-row>
      <v-col
        align-self="start"
        v-for="(card, index) in cards"
        :key="index"
        class="pa-2 ma-2"
      >
        <v-card>
          <div v-if="card.visMeg == true">
            <v-card-text>{{ card.descpription }}</v-card-text>
            <v-btn>{{ card.title }}</v-btn>
          </div>
          <div v-else>{{ card.title }} er desverre skjult</div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "Item1",
          descpription: "descpription of item1",
          visMeg: true,
        },
        {
          title: "Item2",
          descpription: "descpription of item2",
          visMeg: true,
        },
        {
          title: "Item3",
          descpription: "descpription of item3",
          visMeg: true,
        },
        {
          title: "Item4",
          descpription: "descpription of item4",
          visMeg: true,
        },
        {
          title: "Item5",
          descpription: "descpription of item5",
          visMeg: false,
        },
      ],
    };
  },
};
</script>
