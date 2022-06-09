<template>
  <div>
    <b-form @submit.stop.prevent="">
      <b-form-group label="Group" label-cols="3" label-for="group">
        <b-form-select
          id="group"
          @change="() => { getMuhaffizhName(setoran.group_id);getSantriName(setoran.group_id)}"
          v-model="setoran.group_id"
          :options="setoran_group"
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
        <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="muhaffizh" class="muhaffizh"  @click="clickMuhaffizh()">Muhaffizh</b-form-radio>
        <b-form-select
          id="muhaffizh-id"
          v-model="setoran.muhaffizh_id"
          :options="setoran_muhaffizh"
          placeholder="Pilih Muhaffizh"
          name="muhaffizh"
      
          data-vv-as="Muhaffizh"
        >
        </b-form-select>
        <!-- <b-form-invalid-feedback>{{ veeErrors.first('muhaffizh') }}</b-form-invalid-feedback> -->
     
        <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="some-radios" value="santri" class="santri">Santri</b-form-radio>
          <b-form-select
            id="santri-id"
            v-model="setoran.santri_id"
            :options="setoran_santri"
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
          v-model="setoran.juz"
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
          v-model="setoran.halaman"
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
          v-model="setoran.baris"
          placeholder="Masukan Baris"
          name="baris"
          v-validate="{ required: true }"
          :state="validateState('baris')"
          data-vv-as="Baris"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{ veeErrors.first('baris') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label="Total Setoran" label-cols="3" label-for="totalsetoran">
        <b-form-input
          id="totalsetoran"
          v-model="setoran.total_setoran"
          placeholder="Masukan Total Setoran"
          name="totalsetoran"
          v-validate="{ required: true }"
          :state="validateState('totalsetoran')"
          data-vv-as="TotalSetoran"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{ veeErrors.first('totalsetoran') }}</b-form-invalid-feedback>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
  $(".muhaffizh").click(function(){
    $("#santri-id").hide();
    $("#muhaffizh-id").show();
  })
  $(".santri").click(function(){
    $("#santri-id").show();
    $("#muhaffizh-id").hide();
  })
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  inject: ['validator'],
  name: "setoranForm",
  created() {
    this.getGroup();
    this.getMuhaffizh();
    this.getSantri();
    this.$validator = this.validator
  },
  computed: {
    ...mapState(["errors"]),
    ...mapState("setoran", {
      setoran: (state) => state.setoran,
      setoran_unit: (state) => state.setoran_unit,
      setoran_group: (state) => state.setoran_group,
      setoran_santri: (state) => state.setoran_santri,
      setoran_muhaffizh: (state) => state.setoran_muhaffizh,
    }),
  },
  watch: {
      return(){
        this.getGroup();
        this.getUnit();
      }
  },    
  methods: {
    ...mapMutations("setoran", ["CLEAR_FORM","CLEAR_MUHAFFIZH","CLEAR_SANTRI"]),
    ...mapActions("setoran", ["getUnit","getGroup","getMuhaffizh","getSantri"]),
    // clickMuhaffizh(){
    //   $("#santri-id").hide();
    // },
    getMuhaffizhName(id){
      this.setoran.muhaffizh_id = '',
      this.getMuhaffizh(id)
    },
    getSantriName(id){
      this.setoran.santri_id = '',
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

