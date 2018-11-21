<template>
  <v-layout row justify-center>
    <v-dialog v-model="showdialog" persistent max-width="290">
      <v-btn slot="activator" color="primary" dark>Open Dialog</v-btn>
      <v-card>
        <v-card-title class="headline"></v-card-title>
        <v-card-text>
          <table class="ui definition table">
              <thead>
                  <tr>
                      <th></th>
                      <th>Properties</th>
                  </tr>
              </thead>
              <tbody v-for="(row, key) in table">
                  <tr>
                      <td>{{key}}</td>
                      <td>{{row}}</td>
                  </tr>
              </tbody>
          </table>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="showdialog = false">CLOSE</v-btn>
          <!-- <v-btn color="green darken-1" flat @click="showdialog = false">Agree</v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script src="./transect-dialog.js">
</script>

<style>
</style>
