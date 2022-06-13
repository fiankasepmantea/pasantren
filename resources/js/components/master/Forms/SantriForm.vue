<template>
  <div>
    <b-form @submit.stop.prevent="">
      <b-form-group label="Group" label-cols="3" label-for="group">
        <b-form-select
          id="group"
          @change="getMuhaffizhName(santri.group_id)"
          v-model="santri.group_id"
          :options="santri_group"
          placeholder="Pilih Group"
          name="group"
          v-validate="{ required: true }"
          :state="validateState('group')"
          data-vv-as="Group"
        >
        </b-form-select>
        <b-form-invalid-feedback>{{ veeErrors.first('group') }}</b-form-invalid-feedback>
      </b-form-group>
      <b-form-group label="Muhaffizh" label-cols="3" label-for="muhaffizh">
        <b-form-select
          id="muhaffizh"
          v-model="santri.muhaffizh_id"
          :options="santri_muhaffizh"
          placeholder="Pilih Muhaffizh"
          name="muhaffizh"
          v-validate="{ required: true }"
          :state="validateState('muhaffizh')"
          data-vv-as="Muhaffizh"
        >
        </b-form-select>
        <b-form-invalid-feedback>{{ veeErrors.first('group') }}</b-form-invalid-feedback>
      </b-form-group>

       <b-form-group label="Nomor Induk Santri" label-cols="3" label-for="nomorinduk">
        <b-form-input
          id="nomorinduk"
          v-model="santri.nomor_induk"
          placeholder="Masukan Nomor Induk"
          name="nomorinduk"
          v-validate="{ required: true }"
          :state="validateState('nomorinduk')"
          data-vv-as="NomorInduk"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{ veeErrors.first('nomorinduk') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label="Nama Santri" label-cols="3" label-for="nama">
        <b-form-input
          id="nama"
          v-model="santri.nama"
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
          v-model="santri.alamat"
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
          v-model="santri.tempat_lahir"
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
          v-model="santri.tanggal_lahir"
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

       <b-form-group label="Nama Ibu" label-cols="3" label-for="namaibu">
        <b-form-input
          id="namaibu"
          v-model="santri.nama_ibu"
          placeholder="Masukan Nama Ibu"
          name="namaibu"
          v-validate="{ required: true }"
          :state="validateState('namaibu')"
          data-vv-as="NamaIbu"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{ veeErrors.first('nama') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label="Nama Ayah" label-cols="3" label-for="namaayah">
        <b-form-input
          id="namaayah"
          v-model="santri.nama_ayah"
          placeholder="Masukan Nama Ayah"
          name="namaayah"
          v-validate="{ required: true }"
          :state="validateState('namaayah')"
          data-vv-as="NamaAyah"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{ veeErrors.first('namaayah') }}</b-form-invalid-feedback>
      </b-form-group>
       <b-form-group label="No HP" label-cols="3" label-for="no_hp">
        <b-form-input
          id="no_hp"
          v-model="santri.no_hp"
          placeholder="Masukan No HP"
          name="nohp"
          v-validate="{ required: true }"
          :state="validateState('no_hp')"
          data-vv-as="NoHP"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{ veeErrors.first('no_hp') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label="Mulai Belajar" label-cols="3" label-for="mulaibelajar">
        <b-form-input
          id="mulaibelajar"
          v-model="santri.mulai_belajar"
          placeholder="Masukan Tanggal Belajar"
          type="date"
          name="mulaibelajar"
          v-validate="{ required: true }"
          :state="validateState('mulaibelajar')"
          data-vv-as="MulaiBelajar"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{ veeErrors.first('mulaibelajar') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label="Kelas/Angkatan" label-cols="3" label-for="kelasangkatan">
        <b-form-input
          id="kelasangkatan"
          v-model="santri.angkatan_kelas"
          placeholder="Masukan Angkatan/Kelas"
          name="kelasangkatan"
          v-validate="{ required: true }"
          :state="validateState('kelasangkatan')"
          data-vv-as="KelasAngkatan"
        >
        </b-form-input>
        <b-form-invalid-feedback>{{ veeErrors.first('kelasangkatan') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label="Grade" label-cols="3" label-for="grade">
        <b-form-select
          id="grade"
          v-model="santri.grade_id"
          :options="santri_grade"
          placeholder="Pilih Grade"
          name="grade"
          v-validate="{ required: true }"
          :state="validateState('grade')"
          data-vv-as="Grade"
        >
        </b-form-select>
        <b-form-invalid-feedback>{{ veeErrors.first('grade') }}</b-form-invalid-feedback>
      </b-form-group>

      <b-form-group label="Level Santri" label-cols="3" label-for="level">
        <b-form-select
          id="level"
          v-model="santri.levelsantri_id"
          :options="santri_level"
          placeholder="Pilih Level"
          name="level"
          v-validate="{ required: true }"
          :state="validateState('level')"
          data-vv-as="Level"
        >
        </b-form-select>
        <b-form-invalid-feedback>{{ veeErrors.first('level') }}</b-form-invalid-feedback>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  inject: ['validator'],
  name: "santriForm",
  created() {
    this.getGroup();
    this.getMuhaffizh();
    this.getGrade();
    this.getLevel();
    this.$validator = this.validator
  },
  computed: {
    ...mapState(["errors"]),
    ...mapState("santri", {
      santri: (state) => state.santri,
      santri_muhaffizh: (state) => state.santri_muhaffizh,
      santri_group: (state) => state.santri_group,
      santri_grade: (state) => state.santri_grade,
      santri_level: (state) => state.santri_level,
    }),
  },
  methods: {
    ...mapMutations("santri", ["CLEAR_FORM"]),
    ...mapActions("santri", ["getMuhaffizh","getGroup","getGrade","getLevel"]),
    getMuhaffizhName(id){
      this.santri.muhaffizh_id = '',
      this.getMuhaffizh(id)
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
};


</script>

