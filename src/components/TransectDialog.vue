<template>
  <v-layout row justify-center pa-0>
    <v-dialog id="transect-dialog" v-model="showdialog" pa-0 data-app>
      <v-tabs v-model="active" @change="tab=active">
        <v-tab ripple>
          Data
        </v-tab>
        <v-tab ripple>
          Timelapse
        </v-tab>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" flat @click="showdialog = false">
          CLOSE
        </v-btn>
      </v-tabs>
      <v-card v-show="active === 0"  flat id="transect-card" pa-0>
        <v-card-text pa-0>
          <v-layout row wrap>
            <v-flex xs7 justify-center>
              <div id="container">
              </div>
                <v-switch
                  label="Outliers"
                  v-model="showoutliers"
                  @change="changeChartData()"
                  color="primary"
                ></v-switch>
            </v-flex>
            <v-flex xs5>
              <v-data-table dense :headers="headers" :items="items" hide-actions class="elevation-1">
                <template slot="items" slot-scope="props">
                  <td>{{ props.item.name }}</td>
                  <td class="text-xs-right">{{ props.item.data }}</td>
                </template>
              </v-data-table>
              <v-spacer></v-spacer>
              <div id="inquiries">
                Are you looking for additional data, such as:
                Long-term shoreline change rates, Annual shorelines (available @ 30m resolution), Two-weekly shorelines (available @ 30m resolution) and/or a
                Country-wide assessment on the state of the shoreline?
                <br><br>
                Fill in this inquiry <a href="https://docs.google.com/forms/d/e/1FAIpQLSfd6VpTH5WPaHrUm1ZQfN2FQ6az77Wd7BykEt-orWMMpIVYFA/viewform" target="_blank">form</a> to get in touch.
              </div>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
      <v-card v-if="active === 1" id="timelapse-card">
        <v-card-text id="timelapse-text">
          <iframe id="timelapse-card" :src="timelapse_url" frameborder="0"></iframe>
          <p>
            This timelapse is provided by
            <a href="https://earthengine.google.com/" target="_blank">
              Google Earth Engine
            </a>. See
            <a href="https://earthengine.google.com/terms/" target="_blank">
              terms of service
            </a> for this timelapse.
          </p>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script src="./transect-dialog.js">
</script>

<style>
#transect-dialog, v-dialog, .v-dialog {
  width: 60vw;
  min-width: 60vw;
  max-width: 60vw;
  height: 80vh;
  min-height: 80vh;
  max-height: 80vh;
  padding: 0;
  background-color: white;
}

iframe, .v-window-item, #transect-card, #timelapse-card, #timelapse-text{
  width: 60vw;
  height: 65vh;
  margin: 0;
  padding: 0;
}

.container {
  height: 60vh;
}

#inquiries {
  padding: 10px;
  margin: 10px;
  text-align: center;
}

.v-input {
  justify-content: center;
}
</style>
