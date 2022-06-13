<template>
  <div>
    <pagetitle></pagetitle>
    <CRow>
      <CCardBody style="padding-top:0px;">
      <div class="d-flex justify-content-end">
        <b-button size="sm" variant="success" @click="createModal = true">+ Tambah Tahsin</b-button>
      </div>
      <b-form inline>
          <b-form-group
            label="Show :"
            label-size="sm"
            label-for="perPageSelect"
            class="mb-2"
          >
            <b-form-select
              v-model="perPage"
              id="perPageSelect"
              size="sm"
              :options="pageOptions"
              class="ml-2"
            ></b-form-select>
          </b-form-group>
        </b-form>
        <b-table
          :items="tahsins.data"
          :fields="header"
          :current-page="currentPage"
          :per-page="perPage"
          sticky-header
          no-border-collapse
          striped
          hover
          small
          responsive
          outlined
          show-empty
        >
          <template #cell(actions)="row">
              <b-button variant="success" size="sm" @click="handleEdit(row.item.id)">
                Edit
              </b-button>
              <b-button
                variant="danger"
                size="sm"
                @click="deleteTahsin(row.item.id)"
              >
                Delete
              </b-button>
          </template>
        </b-table>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          first-text="First"
          prev-text="Prev"
          next-text="Next"
          last-text="Last"
          size="sm"
          align="right"
        >
        </b-pagination>
      
      <b-modal
      v-model="createModal"
      title="Tambah Data Tahsin Muhaffizh/Santri"
      @ok="handleSubmit"
      no-close-on-backdrop
      no-close-on-esc
      centered
      >
      <Form />
      </b-modal>

      <b-modal
      title="Ubah Data Tahsin Muhaffizh/Santri"
      v-model="editModal"
      @ok="handleUpdate"
      no-close-on-backdrop
      no-close-on-esc
      centered
      >
      <Form />
      </b-modal>
      
      </CCardBody>
    </CRow>
  </div>
</template>

<script>
import pagetitle from "./PageTitle"
import Form from './Forms/TahsinForm'
import { mapActions, mapState } from 'vuex'

export default {
  name: "Tahsins",
  components: {
    pagetitle,
    Form,
  },
  created() {
    this.loadData()
  },
  data() {
    return {
      createModal : false,
      editModal : false,
      editedId: null,
      perPage: 20,
      currentPage: 1,
      pageOptions: [10, 20, 50, 100],
      header: [
        {
          key: "list_group.nama",
          label: "Group",
          
        },
        {
          key: "list_muhaffizh.nama",
          label: "Muhaffizh",
          
        },
        {
          key: 'list_santri.nama',
          label: 'Santri'
        },
        {
          key: "buku",
          label: "Buku",
          
        },
        {
          key: 'halaman',
          label: 'Halaman'
        },
        {
          key: 'sertifikat_proses',
          label: 'Proses Tahsin'
        },
        {
          key: 'updated_at',
          label: 'Tanggal Update'
        },
        {
          key: 'actions',
          label: "Aksi",
          stickyColumn: true,
          class: 'action-columns'
        },
      ],
    };
  },
  provide() {
    return {
      validator: this.$validator
    }
  },
  computed: {
    rows() {
      if (this.tahsins && this.tahsins.data) {
        return this.tahsins.data.length
      } else {
        return 0;
      }

    },
    ...mapState('tahsin', {
      tahsins: (state) => state.tahsins
    }),
  },
  methods: {
    ...mapActions('tahsin', ['getTahsins', 'removeTahsin', 'editTahsin', 'updateTahsin', 'submitTahsin']),
    
    loadData() {
      this.$store.commit('loadingOn')
      setTimeout(() => {
        this.getTahsins()
        this.$store.commit('loadingOff')
      }, 1000);
    },

    deleteTahsin(id) {
      this.$swal({
        title: 'Apakah anda yakin ?',
        text: 'Tindakan ini akan menghapus data secara permanen',
        showCancelButton: true
      }).then((result) => {
        if(result.value) {
          this.removeTahsin(id)
        }
      })
    },
    handleEdit(id) {
      this.editModal = true
      this.editTahsin(id)
      this.editedId = id
    },
    handleUpdate(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.$validator.validateAll().then(result => {
        if (!result) {
          return
        }
      this.updateTahsin(this.editedId)
      this.$toasted.global.success_toast({
        message: 'Data tahsin berhasil diubah..'
      })
      this.editModal = false;
      this.loadData()
      }).catch(err => {
      this.$toasted.global.failed_toast({
        message: 'Data tahsin gagal untuk diubah..'
      })
      })
    },
    handleSubmit(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.$validator.validateAll().then(result => {
        if (!result) {
          return
        }
        this.submitTahsin()
        this.$toasted.global.success_toast({
          message: 'Data tahsin berhasil ditambahkan..'
        })
        this.createModal = false;
        this.loadData()
      }).catch(err => {
      this.$toasted.global.failed_toast({
        message: 'Data tahsin gagal untuk ditambahkan..'
      })
      })
    }
  }
};
</script>