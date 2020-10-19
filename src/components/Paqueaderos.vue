<template>
  <div id="parkings">
    <gmap-map
      ref="googleMap"
      :center="{ lat: 4.653074, lng: -74.087904 }"
      :zoom="10"
      :options="{ styles: mapStyle }"
      style="height: 70ex"
      map-type-id="roadmap"
    >
      <gmap-info-window
        :options="infoOptions"
        :position="infoWindowPos"
        :opened="infoWinOpen"
        @closeclick="infoWinOpen = false"
      ></gmap-info-window>
      <GmapMarker
        :key="index"
        v-for="(p, index) in parkings"
        :icon="require('@/assets/img/ruedaz/ruedaz_marker.png')"
        :position="{
          lat: p.location.latitude,
          lng: p.location.longitude,
        }"
        :clickable="true"
        :draggable="false"
        @click="
          /*center={lat: Number.parseFloat(p.lat), lng:parseFloat(p.lng)} && */ toggleInfoWindow(
            p,
            index
          )
        "
      />
    </gmap-map>
  </div>
</template>

<script>
import { parkingsCollection } from "@/firebase";
export default {
  name: "Paqueaderos",
  data() {
    return {
      parkings: [],
      infoWindowPos: null,
      infoWinOpen: false,
      mapStyle: [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5",
            },
          ],
        },
        {
          elementType: "labels",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161",
            },
          ],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#f5f5f5",
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "administrative.land_parcel",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#bdbdbd",
            },
          ],
        },
        {
          featureType: "administrative.neighborhood",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#eeeeee",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#e5e5e5",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#dadada",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e",
            },
          ],
        },
        {
          featureType: "transit",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [
            {
              color: "#e5e5e5",
            },
          ],
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [
            {
              color: "#eeeeee",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#c9c9c9",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e",
            },
          ],
        },
      ],
      infoOptions: {
        content: "",
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
    };
  },
  methods: {
    toggleInfoWindow: function(marker, idx) {
      this.infoWindowPos = {
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng),
      };
      this.infoOptions.content = `
          <div class="container-sm" style="max-width: 20vw;">
              <dl class="row">
                <dt class="col-sm-3">Nombre</dt>
                <dd class="col-sm-9">${marker.name ?? ""}</dd>
                <dt class="col-sm-3">Teléfono</dt>
                <dd class="col-sm-9">${marker.phone ?? ""}</dd>
                <dt class="col-sm-3">Dirección</dt>
                <dd class="col-sm-9">${marker.address ?? ""}</dd>

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
  },
};
</script>

<style scoped></style>
