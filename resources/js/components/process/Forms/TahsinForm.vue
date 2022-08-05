<template>
  <div>
    <b-form @submit.stop.prevent="">
      <b-form-group label="Muhaffizh" label-cols="3" label-for="muhaffizh">
        <b-form-select
          id="muhaffizh"
          @change="() => { getGroupName(tahsin.muhaffizh_id)}"
          v-model="tahsin.muhaffizh_id"
          :options="tahsin_muhaffizh"
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
          @change="() => { getSantriName(tahsin.group_id)}"
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

       <b-form-group label="Santri" label-cols="3" label-for="santri">
        <b-form-select
          id="santri"
          v-model="tahsin.santri_id"
          :options="tahsin_santri"
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
            <b-form-select v-model="tahsin.bulan" :options="options_bulan">{{ selected_bulan }}</b-form-select>
      </b-form-group>

      <b-form-group label="Pekan ke-" label-cols="3" label-for="pekan">
        <b-form-input
          id="pekan"
          v-model="tahsin.pekan"
          placeholder="Masukan Pekan"
          name="pekan"
          v-validate="{ required: true }"
          :state="validateState('pekan')"
          data-vv-as="Pekan"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{ veeErrors.first('pekan') }}</b-form-invalid-feedback>
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

     
    </b-form>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  inject: ['validator'],
  name: "tahsinForm",
  created() {
    this.getGroup();
    this.getMuhaffizh();
    this.getSantri();
    this.$validator = this.validator
  },
  computed: {
    ...mapState(["errors"]),
    ...mapState("tahsin", {
      tahsin: (state) => state.tahsin,
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
    getGroupName(id){
      this.tahsin.group_id = '',
      this.getGroup(id)
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

