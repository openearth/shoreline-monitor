<template>
  <v-layout row justify-center pa-0>
    <v-dialog id="transect-dialog" v-model="showdialog" pa-0>
      <v-btn slot="activator" color="primary" dark>Open Dialog</v-btn>
      <v-card id="transect-card" pa-0>
        <v-card-title class="headline">
        </v-card-title>
        <v-card-text pa-0>
          <v-container pa-0>
            <v-layout row wrap>
              <v-flex xs7>
                <div id="container">
                </div>
              </v-flex>
              <v-flex xs5>
                <v-data-table dense :headers="headers" :items="items" hide-actions class="elevation-1">
                  <template slot="items" slot-scope="props">
                    <td>{{ props.item.name }}</td>
                    <td class="text-xs-right">{{ props.item.data }}</td>
                  </template>
                </v-data-table>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="showdialog = false">
            CLOSE
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script src="./transect-dialog.js">
</script>

<style>
#transect-dialog {
  width: 60vw;
  max-width: 60vw;
  min-width: 453px;
  height: 40vh;
}

#transect-card, .v-dialog {
  max-width: 50vw;
  width: 50vw !important;
  padding: 0;
}

</style>
