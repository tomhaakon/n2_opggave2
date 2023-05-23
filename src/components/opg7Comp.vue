<template>
  <v-container>
    <v-row>
      <v-col align-self="start"> <h1>dette er opg7</h1></v-col>
    </v-row>

    <v-row>
      <v-col
        align-self="start"
        v-for="(card, index) in cards"
        :key="index"
        class="pa-2 ma-2"
      >
        <v-btn>{{ card.title }}</v-btn>
        <v-card-text>{{ card.descpription }}</v-card-text>
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
          image: "image1.jpg",
        },
        {
          title: "Item2",
          descpription: "descpription of item2",
          image: "image2.jpg",
        },
        {
          title: "Item3",
          descpription: "descpription of item3",
          image: "image3.jpg",
        },
        {
          title: "Item4",
          descpription: "descpription of item4",
          image: "image4.jpg",
        },
        {
          title: "Item5",
          descpription: "descpription of item5",
          image: "image5.jpg",
        },
      ],
    };
  },
};
</script>
