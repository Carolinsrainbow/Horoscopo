<template>
  <div class="container" id="horoscopo">
    <div class="row">
      <div class="col-4" v-for="(horoscopo,index) in horoscopos" :key="index">
        <b-card
          no-body
          style="max-width: 20rem;"
          img-src="https://placekitten.com/380/200"
          img-alt="Image"
          img-top
        >
          <template v-slot:header>
            <h4 class="mb-0"></h4>
          </template>

          <b-card-body>
            <b-card-title>{{horoscopo.nombre}}</b-card-title>
            <b-card-sub-title class="mb-2">{{horoscopo.fechaSigno}}</b-card-sub-title>
          </b-card-body>

          <b-list-group flush>
            <b-list-group-item>Amor: {{horoscopo.amor}}</b-list-group-item>
            <b-list-group-item>Salud: {{horoscopo.salud}}</b-list-group-item>
            <b-list-group-item>Dinero: {{horoscopo.dinero}}</b-list-group-item>
          </b-list-group>

          <b-card-img src="https://placekitten.com/480/210" alt="Image" bottom></b-card-img>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Horoscopo",
  computed: {
    ...mapState(["horoscopos"]),
  },
  methods: {
    ...mapActions(["traerHoroscopos"]),
  },
  created() {
    this.traerHoroscopos();
  },
};
</script>

