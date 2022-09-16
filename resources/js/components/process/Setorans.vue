<template>
  <div>
    <pagetitle></pagetitle>
   
      <CCardBody style="padding-top:0px;">
      <div class="d-flex justify-content-end">
        <b-button v-if="showAction" size="sm" variant="success" @click="createModal = true">+ Tambah Setoran</b-button>
        <b-button size="sm" variant="info" class="ml-2" @click="uploadModal = true"><font-awesome-icon icon="upload" /> Upload Setoran</b-button>
      </div>
      <br>
      <b-row>
          <b-col xl="4" lg="4" md="4" sm="12"
            ><b-input-group>
              <b-form-input
                placeholder="Cari Santri"
                v-model="filterModel.santri_name"
                size="sm"
              ></b-form-input> 
              <b-form-input
                placeholder="Cari Muhaffizh "
                v-model="filterModel.muhaffizh_name"
                size="sm"
              ></b-form-input> 
                <b-input-group-prepend>
                <b-button size="sm"> <b-icon icon="search" @click="searchMuhaffizhSantri(filterModel)"></b-icon></b-button>
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
          :items="setorans.data"
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
                @click="deleteSetoran(row.item.id)"
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
      title="Tambah Data Setoran "
      @ok="handleSubmit"
      no-close-on-backdrop
      no-close-on-esc
      centered
      >
      <Form />
      </b-modal>

      <b-modal
      title="Ubah Data Setoran "
      v-model="editModal"
      @ok="handleUpdate"
      no-close-on-backdrop
      no-close-on-esc
      centered
      >
      <Form />
      </b-modal>
      
      <b-modal
        title="Unggah Data Setoran"
        v-model="uploadModal"
        @ok="handleUpload"
        body-class="form-view"
        centered
        >
        <b-form @submit.stop.prevent="">
        <div>
          <CLink href="/docs/template_setoran.xlsx">Download Template</CLink>
          <b-form-file
            v-model="file1"
            :state="Boolean(file1)"
            accept=".xls, .xlsx, .csv"
            placeholder="Pilih file/drag-n-drop..."
            drop-placeholder="Drop file kesini..."
          ></b-form-file>
          <div class="mt-3">File: {{ file1 ? file1.name : '' }}</div>
        </div>
        </b-form>
      </b-modal>
    
      </CCardBody>
   
  </div>
</template>

<script>
import pagetitle from "./PageTitle"
import Form from './Forms/setoranForm'
import { mapActions, mapState } from 'vuex'

export default {
  name: "setorans",
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
      uploadModal : false,
      file1 : undefined,
      editedId: null,
      perPage: 20,
      filterModel: {
        muhaffizh_name: null,
        santri_name: null,
      },
      currentPage: 1,
      pageOptions: [10, 20, 50, 100],
      header: [
        {
          key: 'list_santri.nama',
          label: 'Santri'
        },
        {
          key: "list_group.nama",
          label: "Group",
          
        },
        {
          key: "list_muhaffizh.nama",
          label: "Muhaffizh",
          
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
      if (this.setorans && this.setorans.data) {
        return this.setorans.data.length
      } else {
        return 0;
      }

    },
    ...mapState('setoran', {
      setorans: (state) => state.setorans
    }),
  },
  methods: {
    ...mapActions('setoran', ['getSetorans', 'removeSetoran', 'editSetoran', 'updateSetoran', 'submitSetoran','uploadSetoran']),
    async loadData(params=null) {
      this.$store.commit('loadingOn')
      // setTimeout(() => {
        await this.getSetorans(params)
        this.$store.commit('loadingOff')
      // }, 1000);
    },
    async searchMuhaffizhSantri() {
      this.$store.commit('loadingOn')
      await this.loadData(this.filterModel)
      this.$store.commit('loadingOff')
    },
    deleteSetoran(id) {
      this.$swal({
        title: 'Apakah anda yakin ?',
        text: 'Tindakan ini akan menghapus data secara permanen',
        showCancelButton: true
      }).then((result) => {
        if(result.value) {
          this.removeSetoran(id)
        }
      })
    },
    handleEdit(id) {
      this.editModal = true
      this.editSetoran(id)
      this.editedId = id
    },
    handleUpdate(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.$validator.validateAll().then(result => {
        if (!result) {
          return
        }
      this.updateSetoran(this.editedId)
      this.$toasted.global.success_toast({
        message: 'Data setoran berhasil diubah..'
      })
      this.editModal = false;
      this.loadData()
      }).catch(err => {
      this.$toasted.global.failed_toast({
        message: 'Data setoran gagal untuk diubah..'
      })
      })
    },
    handleSubmit(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.$validator.validateAll().then(result => {
        if (!result) {
          return
        }
        this.submitSetoran()
        this.$toasted.global.success_toast({
          message: 'Data setoran berhasil ditambahkan..'
        })
        this.createModal = false;
        this.loadData()
      }).catch(err => {
      this.$toasted.global.failed_toast({
        message: 'Data setoran gagal untuk ditambahkan..'
      })
      })
    },
    handleUpload() {
      let formData = new FormData();
      formData.append("file_setoran", this.file1);
      return fetch('/api/setoran/upload', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json', Authorization: 'Bearer ' + localStorage.getItem('token') }
      }).then((response) => response.json())
        .then((result) => {
          if(!result.success) {
            this.$toasted.global.failed_toast(result);
          } else {
            this.$toasted.global.success_toast(result);
            this.loadData();
          }
        }).catch((err) => {
          this.$toasted.global.failed_toast({message:'Error upload file'});
          console.log(err);
        });
    }
  }
};
</script>