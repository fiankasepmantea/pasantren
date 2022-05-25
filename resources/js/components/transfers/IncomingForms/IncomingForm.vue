<template>
  <div>
    <b-form @submit.stop.prevent>
      <b-form-group label="Site Pengirim" label-cols="3" label-for="pengirim" label-size="sm">
        <b-form-input id="pengirim" size="sm" ></b-form-input>
      </b-form-group>

      <b-form-group label="Site Penerima" label-cols="3" label-for="penerima" label-size="sm">
        <b-form-input id="penerima" size="sm" readonly></b-form-input>
      </b-form-group>

      <b-form-group label="Tanggal Kirim" label-cols="3" label-for="tgl-kirim" label-size="sm">
        <b-form-datepicker id="tgl-kirim" size="sm"></b-form-datepicker>
      </b-form-group>

      <b-form-group label="Ekspedisi" label-cols="3" label-for="ekspedisi" label-size="sm">
        <b-form-input id="ekspedisi" size="sm"></b-form-input>
      </b-form-group>
    </b-form>

    <div>
      <b-button variant="primary" size="sm" @click="addMotif"><b-icon icon="plus"></b-icon>Model</b-button>
    </div>

    <div v-for="(motif, motif_idx) in motives" :key="motif.id">
      <div>
        <b-row class="seven-deadly-sins" style="padding-left:100px;">
          <b-col
            ><b-form-group label-size="sm" label="Model"><b-form-select size="sm" style="min-width: 100px"></b-form-select></b-form-group
          ></b-col>
          <b-col
            ><b-form-group label-size="sm" label="Bahan"><b-form-select size="sm" style="min-width: 100px"></b-form-select></b-form-group
          ></b-col>
          <b-col
            ><b-form-group label-size="sm" label="Warna"><b-form-select size="sm" style="min-width: 100px"></b-form-select></b-form-group
          ></b-col>
          <b-col
            ><b-form-group label-size="sm" label="Size"><b-form-select size="sm" style="min-width: 100px"></b-form-select></b-form-group
          ></b-col>
          <b-col
            ><b-form-group label-size="sm" label="Qty"><b-form-select size="sm" style="min-width: 100px"></b-form-select></b-form-group
          ></b-col>
          <b-col class="delete-container">
          <b-button variant="danger" size="sm " @click="deleteMotif(motif_idx)" v-show="motif_idx != 0"><b-icon icon="trash"></b-icon></b-button>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<style>

@media (min-width: 768px) {
  .seven-deadly-sins .col-md-1,
  .seven-deadly-sins .col-sm-1,
  .seven-deadly-sins .col-lg-1 {
    width: 100%;
    *width: 100%;
  }
}

@media (min-width: 992px) {
  .seven-deadly-sins .col-md-1,
  .seven-deadly-sins .col-sm-1,
  .seven-deadly-sins .col-lg-1 {
    width: 14.285714285714285714285714285714%;
    *width: 14.285714285714285714285714285714%;
  }
}

@media (min-width: 1200px) {
  .seven-deadly-sins .col-md-1,
  .seven-deadly-sins .col-sm-1,
  .seven-deadly-sins .col-lg-1 {
    width: 14.285714285714285714285714285714%;
    *width: 14.285714285714285714285714285714%;
  }
}

.delete-container {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 5px;
}
</style>

<script>
export default {
  data() {
    return {
      motives: [
        {
          motifSelected: "",
          bahanSelected: "",
          sizeSelected: "",
          warnaSelected: "",
          jumlahSelected: "",
        },
      ],
    };
  },
  methods: {
    addMotif(id) {
      this.motives.push({
        accSelected: "",
        accQty: "",
      });
    },
    deleteMotif(motif_index) {
      this.motives.splice(motif_index, 1);
    },
  },
};
</script>
