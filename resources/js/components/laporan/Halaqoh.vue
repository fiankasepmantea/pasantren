<template>
  <div>
    <pagetitle></pagetitle>
    <CCol md="6"><CCard>
      <CListGroup>
        <CListGroupItem target="_blank" href="#" @click="handleReport('detail')">Laporan Detil</CListGroupItem >
        <CListGroupItem target="_blank" href="#" @click="handleReport('per_unit')">Jumlah per Unit</CListGroupItem >
        <CListGroupItem target="_blank" href="#" @click="handleReport('per_muhaffizh')">Jumlah per Muhaffizh</CListGroupItem >
      </CListGroup>
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
  methods: {
    handleReport: function(jenis_laporan) {
      let url = '/api/laporan/group/'+jenis_laporan;
      return fetch(url, {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        })
        .then((response) => {
          if(response.ok) return response.blob();
          else throw new Error('Gagal mengunduh laporan.');
        })
        .then((blob) => {
          let a = document.createElement('a');
          a.href = URL.createObjectURL(blob);
          a.setAttribute('download', 'laporan_halaqoh_'+jenis_laporan+'.xlsx');
          a.click();
        }).catch((err) => {
          this.$toasted.global.failed_toast({ message: err });
        });
    },
  }
};
</script>