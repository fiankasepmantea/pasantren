<template>
  <div>
    <pagetitle></pagetitle>
    <CRow>
      <CCardBody style="padding-top:0px;">
      <div class="d-flex justify-content-end">
        <b-button variant="primary" size="sm" @click="createModal = true">+ Tambah Data</b-button>
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
          :items="groups.data"
          :fields="header"
          :current-page="currentPage"
          :per-page="perPage"
          sticky-header
          striped
          hover
          small
          responsive
          outlined
          show-empty
        >
          <template #cell(actions)="row">
              <b-button variant="primary" size="sm" @click="handleEdit(row.item.id)">
                Edit
              </b-button>
              <b-button
                variant="danger"
                size="sm"
                @click="deleteGroup(row.item.id)"
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
      title="Tambah Data Grup"
      @ok="handleSubmit"
      no-close-on-backdrop
      no-close-on-esc
      centered
      >
      <Form />
      </b-modal>

      <b-modal
      title="Ubah Data Grup"
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

<style>
.action-columns {
  width: 150px;
  text-align: center;
}
</style>

<script>
import pagetitle from "./PageTitle"
import Form from './Forms/GroupForm'
import { mapActions, mapState } from 'vuex'

export default {
  name: "Groups",
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
          key: 'nama',
          label: 'Nama Grup/Halaqoh',
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
      if (this.groups && this.groups.data) {
        return this.groups.data.length; 
      } else {
        return 0;
      }
    },
    ...mapState('group', {
      groups: state => state.groups
    }),
  },
  methods: {
    ...mapActions('group', ['getGroups', 'removeGroup', 'editGroup', 'updateGroup', 'submitGroup']),
    
    loadData() {
      this.$store.commit('loadingOn')
      setTimeout(() => {
      this.getGroups()
      this.$store.commit('loadingOff')        
      }, 1000);
    },
    deleteGroup(id) {
      this.$swal({
        title: 'Apakah anda yakin ?',
        text: 'Tindakan ini akan menghapus data secara permanen',
        showCancelButton: true
      }).then((result) => {
        if(result.value) {
          this.removeGroup(id)
        }
      })
    },
    handleEdit(id) {
      this.editModal = true
      this.editGroup(id)
      this.editedId = id
    },
    handleUpdate(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.$validator.validateAll().then(result => {
        if(!result) {
          return
        }
      this.updateGroup(this.editedId)
      this.$toasted.global.success_toast({
          message : 'Data Group berhasil diubah..'
        });
      this.editModal = false;
      this.loadData()
      }).catch(err => {
        this.$toast.global.failed_toast({
          message: 'Data Group gagal untuk diubah..'
        })
      })

    },
    handleSubmit(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.$validator.validateAll().then(result => {
        if(!result) {
          return
        }
        this.submitGroup()
        this.$toasted.global.success_toast({
          message : 'Data Grup berhasil ditambahkan..'
        });
        this.createModal = false;
        this.loadData()
      }).catch(err => {
        this.$toasted.global.failed_toast({
          message : 'Data Grup gagal ditambahkan..'
        });
      })
    }
  }
};
</script>