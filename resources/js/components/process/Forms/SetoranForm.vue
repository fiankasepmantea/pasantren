<template>
  <div>
    <b-form @submit.stop.prevent="">
      <b-form-group label="Muhaffizh" label-cols="3" label-for="muhaffizh">
        <b-form-select
          id="muhaffizh"
          @change="() => { getGroupName(setoran.muhaffizh_id)}"
          v-model="setoran.muhaffizh_id"
          :options="setoran_muhaffizh"
          placeholder="Pilih Muhaffizh"
          name="muhaffizh"
          v-validate="{ required: true }"
          :state="validateState('muhaffizh')"
          data-vv-as="Muhaffizh"
        >
        </b-form-select>
        <b-form-invalid-feedback>{{ veeErrors.first('muhaffizh') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label="Group" label-cols="3" label-for="group">
        <b-form-select
          id="group"
          @change="() => { getSantriName(setoran.group_id)}"
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

       <b-form-group label="Santri" label-cols="3" label-for="santri">
        <b-form-select
          id="santri"
          v-model="setoran.santri_id"
          :options="setoran_santri"
          placeholder="Pilih Santri"
          name="santri"
          v-validate="{ required: true }"
          :state="validateState('santri')"
          data-vv-as="Santri"
        >
        </b-form-select>
        <b-form-invalid-feedback>{{ veeErrors.first('santri') }}</b-form-invalid-feedback>
      </b-form-group>

        <b-form-group label="Bulan" label-cols="3" label-for="bulan">
            <b-form-select v-model="mutqin.bulan" :options="options_bulan">{{ selected_bulan }}</b-form-select>
        </b-form-group>
        
        <b-form-group label="Pekan ke-" label-cols="3" label-for="pekan">
        <b-form-input
          id="pekan"
          v-model="setoran.pekan"
          placeholder="Masukan Pekan"
          name="pekan"
          v-validate="{ required: true }"
          :state="validateState('pekan')"
          data-vv-as="Pekan"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{ veeErrors.first('pekan') }}</b-form-invalid-feedback>
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

    </b-form>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  inject: ['validator'],
  name: "setoranForm",
  created() {
    // this.loadPage();
    this.getGroup();
    this.getMuhaffizh();
    this.getSantri();
    this.$validator = this.validator
  },
  computed: {
    ...mapState(["errors"]),
    ...mapState("setoran", {
      setoran: (state) => state.setoran,
      setoran_group: (state) => state.setoran_group,
      setoran_santri: (state) => state.setoran_santri,
      setoran_muhaffizh: (state) => state.setoran_muhaffizh,
    }),
  },
  watch: {
      return(){
        this.getMuhaffizh();
        this.getGroup();
        this.getSantri();
      
      }
  },    
  methods: {
    ...mapMutations("setoran", ["CLEAR_FORM"]),
    ...mapActions("setoran", ["getGroup","getMuhaffizh","getSantri"]),
    getGroupName(id){
      this.setoran.group_id = '',
      this.getGroup(id)
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
  data() {
      return {
        selected_bulan: null,
        options_bulan: [
          { value: 'Januari', text: 'Januari' },
          { value: 'Febuari', text: 'Febuari' },
          { value: 'Maret', text: 'Maret' },
          { value: 'April', text: 'April'},
          { value: 'Mei', text: 'Mei' },
          { value: 'Juni', text: 'Juni' },
          { value: 'Juli', text: 'Juli' },
          { value: 'September', text: 'September'},
          { value: 'Agustus', text: 'Agustus' },
          { value: 'Oktober', text: 'Oktober' },
          { value: 'November', text: 'November' },
          { value: 'Desember', text: 'Desember'}
        ],
      }
  },
};


</script>

