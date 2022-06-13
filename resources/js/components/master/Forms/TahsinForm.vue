<template>
  <div>
    <b-form @submit.stop.prevent="">
      <b-form-group label="Group" label-cols="3" label-for="group">
        <b-form-select
          id="group"
          @change="() => { getMuhaffizhName(tahsin.group_id);getSantriName(tahsin.group_id)}"
          v-model="tahsin.group_id"
          :options="tahsin_group"
          placeholder="Pilih Group"
          name="group"
          v-validate="{ required: true }"
          :state="validateState('group')"
          data-vv-as="Group"
        >
        </b-form-select>
        <b-form-invalid-feedback>{{ veeErrors.first('group') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group v-slot="{ ariaDescribedby }">
        <b-row>
          <b-col>
             <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="muhaffizh" @change="clickMuhaffizh()" @click="clickMuhaffizh()" @keyup="clickMuhaffizh()" @keypress="clickMuhaffizh()">Muhaffizh</b-form-radio>
          </b-col>
          <b-col>
             <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="santri" @change="clickSantri()">Santri</b-form-radio>
          </b-col>
        </b-row>
       <b-row>
        <b-col>
          <b-form-select
            id="muhaffizh-id"
            v-model="tahsin.muhaffizh_id"
            :options="tahsin_muhaffizh"
            placeholder="Pilih Muhaffizh"
            name="muhaffizh"
            data-vv-as="Muhaffizh"
          >
          </b-form-select>
          <!-- <b-form-invalid-feedback>{{ veeErrors.first('muhaffizh') }}</b-form-invalid-feedback> -->
        </b-col>
        <b-col>
         <b-form-select
            id="santri-id"
            v-model="tahsin.santri_id"
            :options="tahsin_santri"
            placeholder="Pilih Santri"
            name="santri"
            data-vv-as="Santri"
          >
          </b-form-select>
          <!-- <b-form-invalid-feedback>{{ veeErrors.first('santri') }}</b-form-invalid-feedback> -->
        </b-col>
      </b-row>
      </b-form-group>

      <b-form-group label="Buku" label-cols="3" label-for="buku">
        <b-form-input
          id="buku"
          v-model="tahsin.buku"
          placeholder="Masukan Buku"
          name="buku"
          v-validate="{ required: true }"
          :state="validateState('buku')"
          data-vv-as="Buku"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{ veeErrors.first('buku') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label="Halaman" label-cols="3" label-for="halaman">
        <b-form-input
          id="halaman"
          v-model="tahsin.halaman"
          placeholder="Masukan Halaman"
          name="halaman"
          v-validate="{ required: true }"
          :state="validateState('halaman')"
          data-vv-as="Halaman"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{ veeErrors.first('halaman') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label="Proses Tahsin" label-cols="3" label-for="sertifikatproses">
        <b-form-input
          id="sertifikatproses"
          v-model="tahsin.sertifikat_proses"
          placeholder="Masukan Total Tahsin"
          name="sertifikatproses"
          v-validate="{ required: true }"
          :state="validateState('sertifikatproses')"
          data-vv-as="SertifikatProses"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{ veeErrors.first('sertifikatproses') }}</b-form-invalid-feedback>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  inject: ['validator'],
  name: "tahsinForm",
  created() {
    this.loadPage();
    this.getGroup();
    this.getMuhaffizh();
    this.getSantri();
    this.$validator = this.validator
  },
  computed: {
    ...mapState(["errors"]),
    ...mapState("tahsin", {
      tahsin: (state) => state.tahsin,
      tahsin_unit: (state) => state.tahsin_unit,
      tahsin_group: (state) => state.tahsin_group,
      tahsin_santri: (state) => state.tahsin_santri,
      tahsin_muhaffizh: (state) => state.tahsin_muhaffizh,
    }),
  },
  watch: {
      return(){
        this.getGroup();
        this.getUnit();
      }
  },    
  methods: {
    ...mapMutations("tahsin", ["CLEAR_FORM"]),
    ...mapActions("tahsin", ["getUnit","getGroup","getMuhaffizh","getSantri"]),
    loadPage(){
      $( document ).ready(function() {
          $("#santri-id").hide();
          $("#muhaffizh-id").hide();
      });
    },
    clickMuhaffizh(){
      this.tahsin.santri_id= null,
      $("#santri-id").hide();
      $("#muhaffizh-id").show();
    },
    clickSantri(){
      this.tahsin.muhaffizh_id= null,
      $("#santri-id").show();
      $("#muhaffizh-id").hide();
    },
    getMuhaffizhName(id){
      this.tahsin.muhaffizh_id = '',
      this.getMuhaffizh(id)
    },
    getSantriName(id){
      this.tahsin.santri_id = '',
      this.getSantri(id)
    },
    validateState(ref) {
      if(
      this.veeFields[ref] &&
      (this.veeFields[ref].dirty || this.veeFields[ref].validated)
    )   {
      return !this.veeErrors.has(ref);
    }
    return null;
  },
  },
  destroyed() {
    this.CLEAR_FORM();
  },
  data() {
      return {
        selected: 'first',
        options: [
          { text: 'Muhaffizh', value: 'Muhaffizh' },
          { text: 'Santri', value: 'Santri' },
        ]
      }
    }
};


</script>

