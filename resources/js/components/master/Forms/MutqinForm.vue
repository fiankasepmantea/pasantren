<template>
  <div>
    <b-form @submit.stop.prevent="">
      <b-form-group label="Group" label-cols="3" label-for="group">
        <b-form-select
          id="group"
          @change="() => { getMuhaffizhName(mutqin.group_id);getSantriName(mutqin.group_id)}"
          v-model="mutqin.group_id"
          :options="mutqin_group"
          placeholder="Pilih Group"
          name="group"
          v-validate="{ required: true }"
          :state="validateState('group')"
          data-vv-as="Group"
        >
        </b-form-select>
        <b-form-invalid-feedback>{{ veeErrors.first('group') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label="Pilih"  label-cols="3" v-slot="{ ariaDescribedby }">
        <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="muhaffizh" class="muhaffizh"  @click="() => {clickMuhaffizh()}">Muhaffizh</b-form-radio>
        <b-form-select
          id="muhaffizh-id"
          v-model="mutqin.muhaffizh_id"
          :options="mutqin_muhaffizh"
          placeholder="Pilih Muhaffizh"
          name="muhaffizh"
        
          data-vv-as="Muhaffizh"
        >
        </b-form-select>
        <!-- <b-form-invalid-feedback>{{ veeErrors.first('muhaffizh') }}</b-form-invalid-feedback> -->
     
        <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="santri" class="santri" @click="() => {clickSantri()}">Santri</b-form-radio>
          <b-form-select
            id="santri-id"
            v-model="mutqin.santri_id"
            :options="mutqin_santri"
            placeholder="Pilih Santri"
            name="santri"
          
            data-vv-as="Santri"
          >
          </b-form-select>
          <!-- <b-form-invalid-feedback>{{ veeErrors.first('santri') }}</b-form-invalid-feedback> -->
      </b-form-group>

      <b-form-group label="Juz" label-cols="3" label-for="juz">
        <b-form-input
          id="juz"
          v-model="mutqin.juz"
          placeholder="Masukan Juz"
          name="juz"
          v-validate="{ required: true }"
          :state="validateState('juz')"
          data-vv-as="Juz"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{ veeErrors.first('juz') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label="Halaman" label-cols="3" label-for="halaman">
        <b-form-input
          id="halaman"
          v-model="mutqin.halaman"
          placeholder="Masukan Halaman"
          name="halaman"
          v-validate="{ required: true }"
          :state="validateState('halaman')"
          data-vv-as="Halaman"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{ veeErrors.first('halaman') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label="Baris" label-cols="3" label-for="baris">
        <b-form-input
          id="baris"
          v-model="mutqin.baris"
          placeholder="Masukan Baris"
          name="baris"
          v-validate="{ required: true }"
          :state="validateState('baris')"
          data-vv-as="Baris"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{ veeErrors.first('baris') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label="Total Mutqin" label-cols="3" label-for="totalmutqin">
        <b-form-input
          id="totalmutqin"
          v-model="mutqin.total_mutqin"
          placeholder="Masukan Total Mutqin"
          name="totalmutqin"
          v-validate="{ required: true }"
          :state="validateState('totalmutqin')"
          data-vv-as="TotalMutqin"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{ veeErrors.first('totalmutqin') }}</b-form-invalid-feedback>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
$(document).ready(function() {
    $("#santri-id").hide();
    $("#muhaffizh-id").hide();
});

  // $(".muhaffizh").click(function(){
  //   $("#santri-id").hide();
  //   $("#muhaffizh-id").show();
  // })
  // $(".santri").click(function(){
  //   $("#santri-id").show();
  //   $("#muhaffizh-id").hide();
  // })
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  inject: ['validator'],
  name: "mutqinForm",
  created() {
   
    this.getGroup();
    this.getMuhaffizh();
    this.getSantri();
    this.$validator = this.validator
  },
  computed: {
    ...mapState(["errors"]),
    ...mapState("mutqin", {
      mutqin: (state) => state.mutqin,
      mutqin_unit: (state) => state.mutqin_unit,
      mutqin_group: (state) => state.mutqin_group,
      mutqin_santri: (state) => state.mutqin_santri,
      mutqin_muhaffizh: (state) => state.mutqin_muhaffizh,
    }),
  },
  watch: {
      return(){
        this.getGroup();
      
      }
  },    
  methods: {
    ...mapMutations("mutqin", ["CLEAR_FORM","CLEAR_MUHAFFIZH","CLEAR_SANTRI"]),
    ...mapActions("mutqin", ["getUnit","getGroup","getMuhaffizh","getSantri"]),
    clickMuhaffizh(){
      $("#santri-id").hide();
      $("#muhaffizh-id").show();
    },
    clickSantri(){
      $("#santri-id").show();
      $("#muhaffizh-id").hide();
    },
    getMuhaffizhName(id){
      this.mutqin.muhaffizh_id = '',
      this.getMuhaffizh(id)
    },
    getSantriName(id){
      this.mutqin.santri_id = '',
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
  // showMuhaffizh(muhaffizh){
  //   console.log('m:',showMuhaffizh);
  //  var muhaffizh = document.getElementById("muhaffizh");
  //  muhaffizh.display = "none";
  // },
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

