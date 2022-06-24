<template>
  <div>
    <b-form @submit.stop.prevent="">
      <b-form-group label="Muhaffizh" label-cols="3" label-for="muhaffizh">
        <b-form-select
          id="muhaffizh"
          @change="() => { getGroupName(mutqin.muhaffizh_id)}"
          v-model="mutqin.muhaffizh_id"
          :options="mutqin_muhaffizh"
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
          @change="() => { getSantriName(mutqin.group_id)}"
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

       <b-form-group label="Santri" label-cols="3" label-for="santri">
        <b-form-select
          id="santri"
          v-model="mutqin.santri_id"
          :options="mutqin_santri"
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
          v-model="mutqin.pekan"
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

    </b-form>
  </div>
</template>

<script>

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
      mutqin_group: (state) => state.mutqin_group,
      mutqin_santri: (state) => state.mutqin_santri,
      mutqin_muhaffizh: (state) => state.mutqin_muhaffizh,
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
    ...mapMutations("mutqin", ["CLEAR_FORM"]),
    ...mapActions("mutqin", ["getUnit","getGroup","getMuhaffizh","getSantri"]),
    getGroupName(id){
      this.mutqin.group_id = '',
      this.getGroup(id)
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

