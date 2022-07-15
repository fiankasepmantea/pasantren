<template>
  <div>
    <pagetitle></pagetitle>
    <CCol md="6"><CCard>
      <CCardBody>
        <b-form-group label="Tanggal" label-cols="3" label-for="tgl_from">
          <b-form-input
            id="tgl_from"
            v-model="tgl_from"
            type="date"
            name="tgl_from"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group label="s/d" label-cols="3" label-for="tgl_to">
          <b-form-input
            id="tgl_to"
            v-model="tgl_to"
            type="date"
            name="tgl_to"
          >
          </b-form-input>
        </b-form-group>
        <b-button size="sm" variant="primary" @click="handleReport()"><font-awesome-icon icon="file-excel" /> Unduh Laporan</b-button>
      </CCardBody>
    </CCard></CCol>
  </div>
</template>

<script>
import pagetitle from "./PageTitle"
import { mapActions, mapState } from 'vuex'

export default {
  name: "Report",
  components: {
    pagetitle,
  },
  data() {
    return {
      tgl_from: new Date(new Date().getFullYear(),0,2).toISOString().substr(0,10),
      tgl_to: new Date().toISOString().substr(0,10)
    }
  },
  methods: {
    handleReport: function() {
      let fd = new FormData();
      fd.append("tgl_from", this.tgl_from);
      fd.append("tgl_to", this.tgl_to);
      let url = '/api/laporan/setoran';
      return fetch(url, {
          method: 'POST', body: fd,
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        })
        .then((response) => {
          if(response.ok) return response.blob();
          else throw new Error('Gagal mengunduh laporan.');
        })
        .then((blob) => {
          let a = document.createElement('a');
          a.href = URL.createObjectURL(blob);
          a.setAttribute('download', 'laporan_setoran.xlsx');
          a.click();
        }).catch((err) => {
          this.$toasted.global.failed_toast({ message: err });
        });
    },
  }
};
</script>