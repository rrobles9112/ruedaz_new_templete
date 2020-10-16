<template>
  <gmap-map :center="{ lat: 4.653074, lng: -74.087904 }" :zoom="10" style="height: 100ex" map-type-id="roadmap">
    <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen = false"></gmap-info-window>
    <GmapMarker
        :key="index"
        v-for="(p, index) in parkings"
        :position="{
							lat: p.location.latitude,
							lng: p.location.longitude,
						}"
        :clickable="true"
        :draggable="true"
        @click="/*center={lat: Number.parseFloat(p.lat), lng:parseFloat(p.lng)} && */ toggleInfoWindow(p, index)"
    />
  </gmap-map>

</template>

<script>
import {parkingsCollection} from "@/firebase";
export default {
name: "Paqueaderos",
  data(){
    return{
      parkings: [],
      infoWindowPos: null,
      infoWinOpen: false,
      infoOptions: {
        content: "",
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
    }
  },
  methods:{
    toggleInfoWindow: function (marker, idx) {
      this.infoWindowPos = {
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng),
      };
      this.infoOptions.content = `
          <div class="container-sm" style="max-width: 20vw;">
              <dl class="row">
                <dt class="col-sm-3">Nombre</dt>
                <dd class="col-sm-9">${marker.name}</dd>
                <dt class="col-sm-3">Teléfono</dt>
                <dd class="col-sm-9">${marker.phone}</dd>
                <dt class="col-sm-3">Dirección</dt>
                <dd class="col-sm-9">${marker.address}</dd>

            </dl>
        </div>

      `;

      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
  },
  async mounted() {
    const parkingsFetched = await parkingsCollection.get();
    let parkingsData = [];
    parkingsFetched.forEach((doc) => {
      parkingsData.push(doc.data());
    });
    this.parkings = parkingsData;
  }
}
</script>

<style scoped>

</style>