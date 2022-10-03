<template>
  <div>
    <pagetitle></pagetitle>
   
      <CCardBody style="padding-top:0px;">
      <div class="d-flex justify-content-end">
        <b-button v-if="showAction" size="sm" variant="success" @click="createModal = true">+ Tambah Data</b-button>
      </div>
      <br>
      <b-row>
          <b-col xl="4" lg="4" md="4" sm="12"
            ><b-input-group>
               <b-form-input
                placeholder="Ketik Nama User"
                v-model="filterModel.user_name"
                size="sm"
                @keyup="searchUser(filterModel)"
                @change="searchUser(filterModel)"
              ></b-form-input> 
                <!-- <b-input-group-prepend>
                <b-button size="sm"> <b-icon icon="search" @click="searchUser(filterModel)"></b-icon></b-button>
                </b-input-group-prepend> -->
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
          :items="users.data"
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
              <b-button v-if="showAction" variant="success" size="sm" @click="handleEdit(row.item.id)">
                Edit
              </b-button>
              <b-button
                v-if="showAction"
                variant="danger"
                size="sm"
                @click="deleteUser(row.item.id)"
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
      title="Tambah Data User"
      @ok="handleSubmit"
      no-close-on-backdrop
      no-close-on-esc
      centered
      >
      <Form />
      </b-modal>

      <b-modal
      title="Ubah Data User"
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
import Form from './Forms/UserForm'
import { mapActions, mapState } from 'vuex'

export default {
  name: "Users",
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
        user_name: null,
      },
      header: [
        {
          key: "name",
          label: "Nama",
          
        },
        {
          key: "username",
          label: "Username",
          
        },
        {
          key: 'user_level.nama',
          label: 'User Level'
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
      if (this.users && this.users.data) {
        return this.users.data.length
      } else {
        return 0;
      }

    },
    ...mapState('user', {
      users: (state) => state.users
    }),
  },
  methods: {
    ...mapActions('user', ['getUsers', 'removeUser', 'editUser', 'updateUser', 'submitUser']),
    
    async loadData(params=null) {
      this.$store.commit('loadingOn')
      // setTimeout(() => {
        await this.getUsers(params)
        this.$store.commit('loadingOff')
      // }, 1000);
    },
    async searchUser() {
      this.$store.commit('loadingOn')
      await this.loadData(this.filterModel)
      this.$store.commit('loadingOff')
    },
    deleteUser(id) {
      this.$swal({
        title: 'Apakah anda yakin ?',
        text: 'Tindakan ini akan menghapus data secara permanen',
        showCancelButton: true
      }).then((result) => {
        if(result.value) {
          this.removeUser(id)
        }
      })
    },
    handleEdit(id) {
      this.editModal = true
      this.editUser(id)
      this.editedId = id
    },
    handleUpdate(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.$validator.validateAll().then(result => {
        if (!result) {
          return
        }
      this.updateUser(this.editedId)
      this.$toasted.global.success_toast({
        message: 'Data User berhasil diubah..'
      })
      this.editModal = false;
      this.loadData()
      }).catch(err => {
      this.$toasted.global.failed_toast({
        message: 'Data User gagal untuk diubah..'
      })
      })
    },
    handleSubmit(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.$validator.validateAll().then(result => {
        if (!result) {
          return
        }
        this.submitUser()
        this.$toasted.global.success_toast({
          message: 'Data User berhasil ditambahkan..'
        })
        this.createModal = false;
        this.loadData()
      }).catch(err => {
      this.$toasted.global.failed_toast({
        message: 'Data User gagal untuk ditambahkan..'
      })
      })
    }
  }
};
</script>