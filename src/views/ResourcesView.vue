<template>
  <div>
    <h1 class="">Oppgave 11 - ResourcesView</h1>
    <v-data-table :headers="headers" :items="fruits">
      <template v-slot:item="row">
        <tr>
          <td class="text-center">{{ row.item.nr }}</td>
          <td>{{ row.item.title }}</td>
          <td>{{ row.item.link }}</td>
          <td>
            <v-btn
              @click="$refs.openingAndSendingData.openDialog(row.item)"
              class="float-right"
              variant="plain"
            >
              <v-icon>mdi-information-variant</v-icon></v-btn
            >
          </td>
        </tr>
      </template>
    </v-data-table>
    <myDialog ref="openingAndSendingData"></myDialog>
  </div>
</template>
<script>
import myDialog from "@/components/opg12_DialogComp.vue";
export default {
  components: { myDialog },

  data() {
    return {
      expanded: [],
      singleExpand: false,
      // overskrifter i tabellen
      headers: [
        {
          text: "#",
          value: "nr",
          width: "10%",
          align: "center",
        },
        {
          text: "Frukt",
          align: "start",
          width: "50%",
          sortable: false,
          value: "title",
        },

        {
          text: "Link",
          value: "link",
          align: "start",
          width: "40%",
        },

        {
          align: "right",
          text: "info",
          width: "5%",
        },
      ],
      // innhold
      fruits: [
        {
          nr: 1,
          title: "Eple",
          description: "Smaker godt",
          link: "eple.com",
        },
        {
          nr: 2,
          title: "Banan",
          description: "Smaker ok, går fra grønn til gul til brun",
          link: "banan.com",
        },
        {
          nr: 3,
          title: "Appelsin",
          description: "En rund orrange ting",
          link: "appelsin.com",
        },
        {
          nr: 4,
          title: "Mango",
          description: "du finner det på butikken",
          link: "mango.com",
        },
        {
          nr: 5,
          title: "Ananas",
          description: "må ikke forveksles med bananas",
          link: "Ananas.com",
        },
      ],
    };
  },
};
</script>
<!-- 
På resource siden, så skal du nå lage en tabell.
#
Den skal inneholde disse feltene:
Tittel
Beskrivelse
Link
#
#
Du skal kunne søke og filtrere i denne tabellen.
#
Det skal ligge en knapp på tabellen.
#
Den skal ligge helt til slutt på hver rad.
#
Når denne trykkes, så skal en dialog komme frem med informasjonen til denne linjen.
#
Selve linjen skal også kunne trykkes på.
#
Den skal da expandere og vise frem informasjon.
#
Når man trykker på en annen linje, så skal denne lukkes og den andre åpnes.

 -->
