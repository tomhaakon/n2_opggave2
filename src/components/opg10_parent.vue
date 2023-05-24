<template>
  <div>
    <v-container>
      <v-row class="ma-2"> <h1>dette er opg10 parent</h1></v-row>
      <v-row class="ma-2">
        <v-col v-for="(item, index) in items" :key="index" class="ma-2 width">
          <v-card max-width="150">
            <v-card-title class="text-h5 grey lighten-2">
              {{ item.name }}
            </v-card-title>
            <v-card-text class="pa-2">
              <v-btn @click="$refs.openingAndSendingData.openDialog(item)">
                Mer info
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <myDialog ref="openingAndSendingData"></myDialog>
  </div>
</template>

<script>
import myDialog from "@/components/opg10_DialogComp.vue";
export default {
  components: { myDialog },
  data() {
    return {
      items: [
        {
          name: "Kort",
          description:
            "Dette er informasjon hentet fra opg10_parent.vue, som sendes ned til dialogen i opg10_DialogComp",
        },
      ],
    };
  },
};
</script>
