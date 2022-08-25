<template>
  <div>
    <admin/>
    <l-map style="width: 1920px; height: 1080px;" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="marker">
        <l-popup :content="text"></l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import admin from "../../components/Admin/FormAdmin/FormAdmin";
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';
import * as L from "leaflet";


export default {
  name: "MapV",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    admin,
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },

  data () {
    return {
      zoom: 13,
      center: L.latLng(53.722007,  91.423905),
      url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(53.722007,  91.423905),
      text: 'this is a marker'
    }
  },
}
</script>

<style>

</style>