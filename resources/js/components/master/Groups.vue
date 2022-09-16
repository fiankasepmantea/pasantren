<template>
  <div>
    <pagetitle></pagetitle>
    
      <CCardBody style="padding-top:0px;">
      <div class="d-flex justify-content-end">
        <b-button v-if="showAction" variant="success" size="sm" @click="createModal = true">+ Tambah Data</b-button>
      </div>
      <br>
      <b-row>
          <b-col xl="4" lg="4" md="4" sm="12"
            ><b-input-group>
               <b-form-input
                placeholder="Cari Grup/Halaqoh"
                v-model="filterModel.group_name"
                size="sm"
              ></b-form-input> 
                <b-input-group-prepend>
                <b-button size="sm"> <b-icon icon="search" @click="searchGroup(filterModel)"></b-icon></b-button>
                </b-input-group-prepend>
              </b-input-group
          ></b-col>
      </b-row>
      <br>
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
              <b-button v-if="showAction" variant="success" size="sm" @click="handleEdit(row.item.id)">
                Edit
              </b-button>
              <b-button
                v-if="showAction"
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
    
  </div>
</template>

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
    const sessdata = JSON.parse(localStorage.getItem('sessdata'));
    if(["Admin","Muhaffizh"].indexOf(sessdata.level) > -1) 
      this.showAction = true; else this.showAction = false ;

    this.loadData()
  },
  data() {
    return {
      showAction:true,
      createModal : false,
      editModal : false,
      editedId: null,
      perPage: 20,
      currentPage: 1,
      pageOptions: [10, 20, 50, 100],
      filterModel: {
        group_name: null,
      },
      header: [
        {
          key: 'nama',
          label: 'Nama Grup/Halaqoh',
        },
        {
          key: 'list_muhaffizh.nama',
          label: 'Muhaffizh',
        },
        {
          key: 'actions',
          label: "Aksi",
          stickyColumn: true,
          class: 'action-columns act-2'
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
    
    async loadData(params=null) {
      this.$store.commit('loadingOn')
      // setTimeout(() => {
      await this.getGroups(params)
      this.$store.commit('loadingOff')        
      // }, 1000);
    },
    async searchGroup() {
      this.$store.commit('loadingOn')
      await this.loadData(this.filterModel)
      this.$store.commit('loadingOff')
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