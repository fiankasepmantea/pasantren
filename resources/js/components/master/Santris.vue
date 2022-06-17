<template>
  <div>
    <pagetitle></pagetitle>
    <CRow>
      <CCardBody style="padding-top:0px;">
      <div class="d-flex justify-content-end">
        <b-button size="sm" variant="success" @click="createModal = true">+ Tambah Santri</b-button>
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
          :items="santris.data"
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
                @click="deleteSantri(row.item.id)"
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
      title="Tambah Data Santri"
      @ok="handleSubmit"
      no-close-on-backdrop
      no-close-on-esc
      centered
      >
      <Form />
      </b-modal>

      <b-modal
      title="Ubah Data Santri"
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
import Form from './Forms/SantriForm'
import { mapActions, mapState } from 'vuex'

export default {
  name: "Santris",
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
          key: "nama",
          label: "Nama",
          
        },
        {
          key: 'alamat',
          label: 'Alamat'
        },
        {
          key: 'angkatan_kelas',
          label: 'Kelas/Angkatan'
        }, 
        {
          key: 'list_grade.grade',
          label: 'Grade'
        },
         {
          key: 'list_level.level',
          label: 'Level'
        },
        {
          key: 'list_group.nama',
          label: 'Group'
        },
        {
          key: 'list_muhaffizh.nama',
          label: 'Muhaffizh'
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
      if (this.santris && this.santris.data) {
        return this.santris.data.length
      } else {
        return 0;
      }

    },
    ...mapState('santri', {
      santris: (state) => state.santris
    }),
  },
  methods: {
    ...mapActions('santri', ['getSantris', 'removeSantri', 'editSantri', 'updateSantri', 'submitSantri']),
    
    loadData() {
      this.$store.commit('loadingOn')
      setTimeout(() => {
        this.getSantris()
        this.$store.commit('loadingOff')
      }, 1000);
    },

    deleteSantri(id) {
      this.$swal({
        title: 'Apakah anda yakin ?',
        text: 'Tindakan ini akan menghapus data secara permanen',
        showCancelButton: true
      }).then((result) => {
        if(result.value) {
          this.removeSantri(id)
        }
      })
    },
    handleEdit(id) {
      this.editModal = true
      this.editSantri(id)
      this.editedId = id
    },
    handleUpdate(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.$validator.validateAll().then(result => {
        if (!result) {
          return
        }
      this.updateSantri(this.editedId)
      this.$toasted.global.success_toast({
        message: 'Data Santri berhasil diubah..'
      })
      this.editModal = false;
      this.loadData()
      }).catch(err => {
      this.$toasted.global.failed_toast({
        message: 'Data Santri gagal untuk diubah..'
      })
      })
    },
    handleSubmit(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.$validator.validateAll().then(result => {
        if (!result) {
          return
        }
        this.submitSantri()
        this.$toasted.global.success_toast({
          message: 'Data Santri berhasil ditambahkan..'
        })
        this.createModal = false;
        this.loadData()
      }).catch(err => {
      this.$toasted.global.failed_toast({
        message: 'Data Santri gagal untuk ditambahkan..'
      })
      })
    }
  }
};
</script>