<template>
  <div>
  <page-title></page-title>
  <div>
      <b-card>
        <b-row>
          <b-col xl="4" lg="4" md="4" sm="12"
            ><b-form-datepicker
              id="awal"
              v-model="begin_date"
              placeholder="Tanggal Awal"
              size="sm"
            ></b-form-datepicker
          ></b-col>
          <b-col xl="4" lg="4" md="4" sm="12"
            ><b-form-datepicker
              id="akhir"
              v-model="end_date"
              placeholder="Tanggal Akhir"
              size="sm"
            ></b-form-datepicker
          ></b-col>
          <b-col xl="4" lg="4" md="4" sm="12" class="button-container"
            ><b-button size="sm" variant="primary" @click="createModal = true"><b-icon icon="plus"></b-icon>Mutasi</b-button>
            </b-col
          >
        </b-row>
        <div class="table-container">
          <hr />
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
        </div>
        <b-table
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
              <b-button
                variant="primary"
                size="sm"
                @click="handleEdit(row.item.id)"
              >
                Edit
              </b-button>
              <b-button
                variant="danger"
                size="sm"
                @click="deleteOM(row.item.id)"
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
      </b-card>

      <!-- MODAL -->
      <b-modal
      v-model="createModal"
      title="Mutasi Pengiriman"
      @ok="handleSubmit"
      no-close-on-backdrop
      no-close-on-esc
      centered
      size="lg"
      >
      <Form />
      </b-modal>

      <b-modal
      title="Ubah data Cutting"
      v-model="editModal"
      @ok="handleUpdate"
      no-close-on-backdrop
      no-close-on-esc
      centered
      >
      <Form />
      </b-modal>

     <b-modal
      title="Proses ke Perlengkapan"
      v-model="proceedModal"
      no-close-on-esc
      no-close-on-backdrop
      centered
      @ok="handleCuttingProceed"
      >
      </b-modal>
    </div>
  </div>
</template>

<style>
.filter-components {
  display: flex;
  justify-content: flex-start;
}

.table-container {
  padding: 10px 0px;
}

.button-container {
  text-align: right;
}


@media (min-width: 992px) {
 .modal-lg {
    max-width: auto !important;
   }
}

@media (min-width: 576px) {
  .modal-dialog {
    max-width: auto !important;

  }
}
</style>

<script>
import PageTitle from './PageTitle'
import Form from './OutgoingForms/OutgoingForm'

  export default {
    name: 'Outgoing',
    components: {
      PageTitle,
      Form
    },
    data() {
      return {
      createModal: false,
      perPage: 20,
      searchItem: '',
      begin_date: '',
      end_date: '',
      currentPage: 1,
      pageOptions: [10, 20, 50, 100],
      header: [
        {
          key: "created_at",
          label: "Tanggal",
          class: "text-left",
        },
        {
          key: "no_jalan",
          label: "No. Surat Jalan",
          class: "text-left",
        },
        {
          key: "sender",
          label: "Site Pengirim",
          class: "text-left",
        },
        {
          key: "receiver",
          label: "Site Penerima",
          class: "text-left",
        },
        {
          key: "ekspedisi",
          label: "Ekspedisi",
          class: "text-left",
        },
        {
          key: "actions",
          label: 'Aksi',
          stickyColumn: true,
          class: "action-columns",
        },
      ],
    };
  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.$store.commit('loadingOn')
      setTimeout(() => {
        //GET TABLE DATA 
        this.$store.commit('loadingOff')
      }, 1000);
    }
  }
}
</script>