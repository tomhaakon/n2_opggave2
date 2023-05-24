<template>
  <div>
    <h1 class="ma-5">Oppgave 11 - ResourcesView</h1>
    <v-data-table :headers="headers" :items="fruits">
      <template v-slot:item="row">
        <tr @click="onButtonClick(row.item)">
          <td>{{ row.item.nr }}</td>
          <td>{{ row.item.title }}</td>
          <td>{{ row.item.link }}</td>
          <td>
            <v-btn
              variant="plain"
              @click="onButtonClick(row.item)"
              plain
              x-small
            >
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Index",
          value: "nr",
          width: "80px",
          align: "center",
        },
        {
          text: "Frukt",
          align: "start",
          sortable: false,
          value: "title",
          width: "200px",
        },

        { text: "Link", value: "link", width: "200px" },
      ],
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
          description: "Smaker ok",
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
  methods: {
    onButtonClick(item) {
      console.log(item.title);
    },
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
