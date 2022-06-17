<template>
  <div>
    <b-form @submit.stop.prevent="">
      <b-form-group label="Unit" label-cols="3" label-for="unit">
        <b-form-select
          id="unit"
          v-model="muhaffizh.unit_id"
          :options="muhaffizh_unit"
          placeholder="Pilih Unit"
          name="unit"
          v-validate="{ required: true }"
          :state="validateState('unit')"
          data-vv-as="Unit"
        >
        </b-form-select>
        <b-form-invalid-feedback>{{ veeErrors.first('unit') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label="Nomor Induk" label-cols="3" label-for="nomorinduk">
        <b-form-input
          id="nomorinduk"
          v-model="muhaffizh.nomor_induk"
          placeholder="Masukan Nomor Induk"
          name="nomorinduk"
          v-validate="{ required: true }"
          :state="validateState('nomorinduk')"
          data-vv-as="NomorInduk"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{ veeErrors.first('nomorinduk') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label="Nama" label-cols="3" label-for="nama">
        <b-form-input
          id="nama"
          v-model="muhaffizh.nama"
          placeholder="Masukan Nama"
          name="nama"
          v-validate="{ required: true }"
          :state="validateState('nama')"
          data-vv-as="Nama"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{ veeErrors.first('nama') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label="Alamat" label-cols="3" label-for="alamat">
        <b-form-textarea
          id="alamat"
          v-model="muhaffizh.alamat"
          placeholder="Masukan Alamat"
          name="alamat"
          v-validate="{ required: true }"
          :state="validateState('alamat')"
          data-vv-as="Alamat"
        >
        </b-form-textarea>
        <b-form-invalid-feedback>{{ veeErrors.first('alamat') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label="Tempat Lahir" label-cols="3" label-for="tempatlahir">
        <b-form-input
          id="tempatlahir"
          v-model="muhaffizh.tempat_lahir"
          placeholder="Masukan Tempat Lahir"
          name="tempatlahir"
          v-validate="{ required: true }"
          :state="validateState('tempatlahir')"
          data-vv-as="TempatLahir"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{ veeErrors.first('tempatlahir') }}</b-form-invalid-feedback>
      </b-form-group>

       <b-form-group label="Tanggal Lahir" label-cols="3" label-for="tanggallahir">
        <b-form-input
          id="tanggallahir"
          v-model="muhaffizh.tanggal_lahir"
          placeholder="Masukan Tanggal Lahir"
          type="date"
          name="tanggallahir"
          v-validate="{ required: true }"
          :state="validateState('tanggallahir')"
          data-vv-as="TanggalLahir"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{ veeErrors.first('tanggallahir') }}</b-form-invalid-feedback>
      </b-form-group>

       <b-form-group label="No HP" label-cols="3" label-for="no_hp">
        <b-form-input
          id="no_hp"
          v-model="muhaffizh.no_hp"
          placeholder="Masukan No HP"
          name="nohp"
          v-validate="{ required: true }"
          :state="validateState('no_hp')"
          data-vv-as="NoHP"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{ veeErrors.first('no_hp') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label="Mulai Bertugas" label-cols="3" label-for="mulaibertugas">
        <b-form-input
          id="mulaibertugas"
          v-model="muhaffizh.mulai_bertugas"
          placeholder="Masukan Tanggal Bertugas"
          type="date"
          name="mulaibertugas"
          v-validate="{ required: true }"
          :state="validateState('mulaibertugas')"
          data-vv-as="MulaiBertugas"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{ veeErrors.first('mulaibertugas') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label="Pendidikan Terakhir" label-cols="3" label-for="pendidikanterakhir">
            <b-form-select v-model="muhaffizh.pendidikan_terakhir" :options="options_pendidikan">{{ selected_pendidikan }}</b-form-select>
      </b-form-group>
         <b-form-group label="Status" label-cols="3" label-for="status">
            <b-form-select v-model="muhaffizh.status" :options="options_status">{{ selected_status }}</b-form-select>
      </b-form-group>

      <b-form-group label="Kelas/Angkatan" label-cols="3" label-for="kelasangkatan">
        <b-form-input
          id="kelasangkatan"
          v-model="muhaffizh.angkatan_kelas"
          placeholder="Masukan Angkatan/Kelas"
          name="kelasangkatan"
          v-validate="{ required: true }"
          :state="validateState('kelasangkatan')"
          data-vv-as="KelasAngkatan"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{ veeErrors.first('kelasangkatan') }}</b-form-invalid-feedback>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  inject: ['validator'],
  name: "MuhaffizhForm",
  created() {
    this.getUnit();
    this.$validator = this.validator
  },
  computed: {
    ...mapState(["errors"]),
    ...mapState("muhaffizh", {
      muhaffizh: (state) => state.muhaffizh,
      muhaffizh_unit: (state) => state.muhaffizh_unit,
    }),
  },
  watch: {
      return(){
        this.getUnit();
      }
  },    
  methods: {
    ...mapMutations("muhaffizh", ["CLEAR_FORM"]),
    ...mapActions("muhaffizh", ["getUnit"]),
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
        selected_pendidikan: null,
        options_pendidikan: [
          { value: 'D3', text: 'D3' },
          { value: 'S1', text: 'S1' },
          { value: 'S2', text: 'S2' },
          { value: 'S3', text: 'S3'}
        ],
        selected_status: null,
        options_status: [
          { value: 'Aktif', text: 'Aktif' },
          { value: 'Tidak Aktif', text: 'Tidak Aktif' },
        ]
      }
    },
};


</script>

