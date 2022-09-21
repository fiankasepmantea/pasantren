<template>
  <div>
    <pagetitle></pagetitle>
      <CCardBody style="padding-top:0px;">
      <div class="d-flex justify-content-end">
        <b-button v-if="showAction" size="sm" variant="success" @click="createModal = true">+ Tambah Muhaffizh</b-button>
        <b-button size="sm" variant="info" class="ml-2" @click="uploadModal = true"><font-awesome-icon icon="upload" /> Upload Muhaffizh</b-button>
      </div>
      <br>
      <b-row>
          <b-col xl="4" lg="4" md="4" sm="12"
            ><b-input-group>
               <b-form-input
                placeholder="Cari Muhaffizh"
                v-model="filterModel.muhaffizh_name"
                size="sm"
              ></b-form-input> 
                <b-input-group-prepend>
                <b-button size="sm"> <b-icon icon="search" @click="searchMuhaffizh(filterModel)"></b-icon></b-button>
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
          :items="muhaffizhs.data"
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
          <template #cell(nama)="data">
            <!-- `data.value` is the value after formatted by the Formatter -->
            <a :href="`#`" @click="handleView(data.item)">{{ data.value }}</a>
          </template>

          <template #cell(actions)="row">
              <!-- <a href="#" variant="info" size="sm" @click="handleView(row.item)">
                View
              </a> -->
              <b-button v-if="showAction" variant="success" size="sm" @click="handleEdit(row.item.id)">
                Edit
              </b-button>
              <b-button
                v-if="showAction"
                variant="danger"
                size="sm"
                @click="deleteMuhaffizh(row.item.id)"
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
      title="Tambah Data Muhaffizh"
      @ok="handleSubmit"
      no-close-on-backdrop
      no-close-on-esc
      centered
      >
      <Form />
      </b-modal>

      <b-modal
      title="Ubah Data Muhaffizh"
      v-model="editModal"
      @ok="handleUpdate"
      no-close-on-backdrop
      no-close-on-esc
      centered
      >
      <Form />
      </b-modal>

      <b-modal
      title="Lihat Data Muhaffizh"
      v-model="viewModal"
      body-class="form-view"
      centered
      >
      <DataView :items="currentMuhaffizh" />
      </b-modal>
      
      <b-modal
        title="Unggah Data Muhaffizh"
        v-model="uploadModal"
        @ok="handleUpload"
        body-class="form-view"
        centered
        >
        <b-form @submit.stop.prevent="">
        <div>
          <CLink href="/docs/template_muhaffizh.xlsx">Download Template</CLink>
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
import Form from './Forms/MuhaffizhForm'
import DataView from '../parts/PropertyView'
import { mapActions, mapState } from 'vuex'

export default {
  name: "Muhaffizhs",
  components: {
    pagetitle,
    Form,
    DataView
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
      viewModal : false,
      editModal : false,
      editedId: null,
      perPage: 20,
      currentPage: 1,
      currentMuhaffizh: {},
      pageOptions: [10, 20, 50, 100],
      filterModel: {
        muhaffizh_name: null,
      },
      file1 : undefined,
      uploadModal : false,
      header: [
        {
          key: "nama",
          label: "Nama",
          
        },
        {
          key: 'no_hp',
          label: 'No HP'
        },
        {
          key: 'mulai_bertugas',
          label: 'Mulai Bertugas'
        },
        {
          key: 'status',
          label: 'Status'
        },
        {
          key: 'angkatan_kelas',
          label: 'Kelas/Angkatan'
        },
        {
          key: 'list_unit.nama',
          label: 'Unit'
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
      if (this.muhaffizhs && this.muhaffizhs.data) {
        return this.muhaffizhs.data.length
      } else {
        return 0;
      }

    },
    ...mapState('muhaffizh', {
      muhaffizhs: (state) => state.muhaffizhs
    }),
  },
  methods: {
    ...mapActions('muhaffizh', ['getMuhaffizhs', 'removeMuhaffizh', 'editMuhaffizh', 'updateMuhaffizh', 'submitMuhaffizh']),
    
    async loadData(params=null) {
      this.$store.commit('loadingOn')
      // setTimeout(() => {
        await this.getMuhaffizhs(params)
        this.$store.commit('loadingOff')
      // }, 1000);
    },
    async searchMuhaffizh() {
      this.$store.commit('loadingOn')
      await this.loadData(this.filterModel)
      this.$store.commit('loadingOff')
    },
    deleteMuhaffizh(id) {
      this.$swal({
        title: 'Apakah anda yakin ?',
        text: 'Tindakan ini akan menghapus data secara permanen',
        showCancelButton: true
      }).then((result) => {
        if(result.value) {
          this.removeMuhaffizh(id)
        }
      })
    },
    handleView(muhaffizh) {
      this.viewModal = true
      for(const [k, v] of Object.entries(muhaffizh)) {
        if(typeof v === 'string' || typeof v === 'number') {
          if(k.toLowerCase().indexOf('_id')>=0 || k.toLowerCase().indexOf('id_')>=0)
            continue;
          this.currentMuhaffizh[k] = v;
        }
      };
      this.currentMuhaffizh.unit = muhaffizh.list_unit.nama;
    },
    handleEdit(id) {
      this.editModal = true
      this.editMuhaffizh(id)
      this.editedId = id
    },
    handleUpdate(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.$validator.validateAll().then(result => {
        if (!result) {
          return
        }
      this.updateMuhaffizh(this.editedId)
      this.$toasted.global.success_toast({
        message: 'Data Muhaffizh berhasil diubah..'
      })
      this.editModal = false;
      this.loadData()
      }).catch(err => {
      this.$toasted.global.failed_toast({
        message: 'Data Muhaffizh gagal untuk diubah..'
      })
      })
    },
    handleSubmit(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.$validator.validateAll().then(result => {
        if (!result) {
          return
        }
        this.submitMuhaffizh()
        this.$toasted.global.success_toast({
          message: 'Data Muhaffizh berhasil ditambahkan..'
        })
        this.createModal = false;
        this.loadData()
      }).catch(err => {
      this.$toasted.global.failed_toast({
        message: 'Data Muhaffizh gagal untuk ditambahkan..'
      })
      })
    },
    handleUpload() {
      let formData = new FormData();
      formData.append("file_muhaffizh", this.file1);
      return fetch('/api/muhaffizh/uploadmuhaffizh', {
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