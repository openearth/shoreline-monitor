<template>
    <v-expansion-panel class="v-selection-panel" :value=0 id="info-box">
      <v-expansion-panel-content id="info-content">
          <h2 slot="header">
            Long-term Shoreline Changes (1984-2016)
          </h2>
          <p>
            The bars represent the erosion/accretion along coasts, every 500m, over the period 1984-2016.
            Green bars indicate where shoreline accretion has occurred (natural accretion, land reclamation, nourishments).
            Red bars indicate erosive shorelines, based on a linear fit through shoreline positions.
            If you're zoomed in you can click on a profile to see a time series chart.
          </p>
          <p>
            <div class="RdYlGn legend">
              <span class="label-left">-3m/yr</span>
              <div class="legend-box q0-5" title="-10">&nbsp;</div>
              <div class="legend-box q1-5" title="-5">&nbsp;</div>
              <div class="legend-box q2-5" title="0">&nbsp;</div>
              <div class="legend-box q3-5" title="5">&nbsp;</div>
              <div class="legend-box q4-5" title="10">&nbsp;</div>
              <span class="label-right">3m/yr</span>
            </div>
          </p>
          <p>
            <!-- The heatmap shows the hotspots of erosive (red) and accretive (green) shorelines in the world. -->
            The results of the global analysis and methods can be found in:
            <a href="https://www.nature.com/articles/s41598-018-24630-6" target="_blank">Luijendijk et al., 2018, Scientific Reports</a>
          </p>
          <p>
            For inquiries please fill in this <a href="https://docs.google.com/forms/d/e/1FAIpQLSfd6VpTH5WPaHrUm1ZQfN2FQ6az77Wd7BykEt-orWMMpIVYFA/viewform" target="_blank">form</a>.
          </p>
          <p>
            This dataset is created in collaboration with the Delft University of Technology.
          </p>
          <p>
            <img src="src/assets/logo.png"/> 
          </p>
        </div>
        <div class="extra content info-buttons-content" data-dataset="shoreline">
          <div class="left floated like">
            <div>
              <a class="ui small primary button"
               href="https://twitter.com/beachmonitor" title="Follow on Twitter" target="_blank">
                <i class="twitter icon"></i>
              </a>
            </div>
            <div>
              <a class="ui small primary button" id="github-button"
               href="https://github.com/deltares/aqua-monitor" title="Fork or Follow me on GitHub" target="_blank">
                <i class="github icon"></i>
              </a>
            </div>
            <div>
              <a class="ui small button"
               href="mailto:arjen.luijendijk@deltares.nl?subject=Shoreline Monitor Feedback" title="Get in touch!">
               <i class="mail icon"></i>
              </a>
            </div>
            <div>
              <a class="ui small button" id="terms-button" href="https://www.deltares.nl/en/disclaimer/"
                target="_blank" title="Terms of Use">
                <i class="copyright icon"></i>
              </a>
            </div>
          </div>

          <div class="right floated star">
            <a class="ui small button info-close-button">
              <i class="close icon"></i>
            </a>
          </div>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script src="./info-card.js">
</script>

<style>
@import '~material-design-icons/iconfont/material-icons.css';

#info-box {
  position: absolute;
  top: 12px;
  width: 320px;
  left: 12px;
  background: rgba(250, 250, 255, 0.78);
  overflow-y: auto;
  /* height: 80vh; */
  padding: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
}

#info-content {
  background: None;
}
.legend-box {
  width: 1em;
  min-width: 10px;
}
.legend {
  display: flex;
  margin-top: 16px;
  margin-bottom: 16px;
  .label-left {
    padding-right: 10px;
  }
  .label-right {
    padding-left: 10px;
  }
}

.q0-5{
  fill: rgb(215,25,28);
  background-color: rgb(215,25,28);
}
.q1-5{
  fill: rgb(253,174,97);
  background-color: rgb(253,174,97);
}
.q2-5{
  fill: rgb(255,255,191);
  background-color: rgb(255,255,191);
}
.q3-5{
  fill: rgb(166,217,106);
  background-color: rgb(166,217,106);
}
.q4-5 {
  fill: rgb(26,150,65);
  background-color: rgb(26,150,65);
}

</style>
