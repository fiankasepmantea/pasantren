<template>
  <div>
    <page-title></page-title>
    <b-card>
      <b-row>
        <b-col xl="4" lg="4" md="4" sm="12"
          ><b-form-datepicker
            id="awal"
            placeholder="Tanggal Awal"
            size="sm"
            v-model="filterModel.begin_date"
            :max="filterModel.end_date"        
          ></b-form-datepicker
        ></b-col>
        <b-col xl="4" lg="4" md="4" sm="12"
          ><b-form-datepicker
            id="akhir"
            placeholder="Tanggal Akhir"
            v-model="filterModel.end_date"
            size="sm"
          ></b-form-datepicker>
        </b-col>
        <b-col xl="1" lg="1" md="1" sm="12">
          <b-input-group-prepend>
              <b-button size="sm" @click="filterDate"> <b-icon icon="search"></b-icon> Cari</b-button>
          </b-input-group-prepend>
        </b-col>
        <b-col xl="3" lg="3" md="3" sm="12" class="button-container">
          <b-button size="sm" variant="primary" @click="createModal = true"
            ><b-icon icon="plus"></b-icon>Surat Jalan</b-button
          >
        </b-col>
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
        :items="suratjalans.data"
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
            @click="handleEdit(row.item.id, row.item.om_id)"
            v-if="row.item.is_active == true"
          >
            Edit
          </b-button>
          <b-button
            variant="warning"
            size="sm"
            @click="handlePrint(row.item.id)"
            v-if="row.item.is_active == true"
          >
            Cetak
          </b-button>
          <b-button
            variant="danger"
            size="sm"
            @click="handleProses(row.item.id)"
            v-if="row.item.is_active == true"
          >
            Proses
          </b-button>
          <b-button
            variant="success"
            size="sm"
            @click="handleDetail(row.item.id)"
            v-model="detailModal"
            title="Detail Surat Jalan"
            v-if="row.item.is_active == false"
          >
            Detail
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

    <b-modal
      title="Input Surat Jalan"
      size="lg"
      v-model="createModal"
      no-close-on-backdrop
      no-close-on-esc
      @ok="handleSubmit"
      centered
      ><Form />
    </b-modal>

    <b-modal
      title="Edit Surat Jalan"
      size="lg"
      v-model="editModal"
      no-close-on-backdrop
      no-close-on-esc
      @ok="handleUpdate"
      @cancel="clearForm"
      centered
      ><Form />
    </b-modal>

    <b-modal
      title="Detail Surat Jalan"
      v-model="detailModal"
      no-close-on-backdrop
      no-close-on-esc
      centered
      ok-only
      size="lg"
    >
      <SuratJalanDetail />
    </b-modal>
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
import { mapState, mapMutations, mapActions } from "vuex";
import PageTitle from "./PageTitle";
import Form from "./Forms/Form";
import SuratJalanDetail from "./Forms/FormDetail";

export default {
  components: {
    PageTitle,
    Form,
    SuratJalanDetail,
  },
  created() {
    this.loadData();
    //this.getSuratJalans();
  },
  data() {
    return {
      createModal: false,
      detailModal: false,
      editModal: false,
      perPage: 20,
      filterModel: {
        begin_date: null,
        end_date: null,
      },
      currentPage: 1,
      pageOptions: [10, 20, 50, 100],
      header: [
        {
          key: "delivery_date",
          label: "Tanggal",
          class: "text-left",
        },
        {
          key: "delivery_note_number",
          label: "No. Surat Jalan",
          class: "text-left",
        },
        {
          key: "no_np_delivery.customer.no_np.no_np",
          label: "No. PPC",
          class: "text-left",
        },
        {
          key: "sales.sales.sales_name.name",
          label: "Sales",
          class: "text-left",
        },
        {
          key: "customer.customer.customer_name.nama",
          label: "Pelanggan",
          class: "text-left",
        },
        {
          key: "actions",
          label: "Aksi",
          class: "action-columns",
          stickyColumn: true,
        },
      ],
    };
  },
  computed: {
    rows() {
      if (this.suratjalans && this.suratjalans.data) {
        return this.suratjalans.data.length;
      } else {
        return 0;
      }
    },
    ...mapState("suratjalan", {
      suratjalans: (state) => state.suratjalans,
    }),
  },
  provide() {
    return {
      validator: this.$validator,
    };
  },
  methods: {
    ...mapMutations("suratjalan", [
      "CLEAR_FORM",
      "CLEAR_SALES",
      "CLEAR_CUSTOMER",
    ]),
    ...mapActions("suratjalan", [
      "getSuratJalans",
      "submitSuratJalan",
      "editSuratJalan",
      "updateSuratJalan",
      "getDataStock",
      "getOMName",
      "getSalesName",
      "getCustomerName",
      "getViewSuratJalan",
      "prosesSuratJalan",
    ]),
    clearForm() {
      this.CLEAR_FORM();
    },
    async loadData(params = null) {
      this.$store.commit("loadingOn");
      //setTimeout(() => {
      await this.getSuratJalans(params);
      this.$store.commit("loadingOff");
      //}, 1000);
    },
    handleSubmit(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.$validator.validateAll().then((result) => {
        if (!result) {
          return;
        }
        this.submitSuratJalan();
        this.createModal = false;
        this.CLEAR_FORM();
        this.CLEAR_SALES();
        this.CLEAR_CUSTOMER();
      });
    },
    handleDetail(id) {
      this.detailModal = true;
      this.getViewSuratJalan(id);
    },
    handleEdit(id, id_om) {
      this.editModal = true;
      this.editSuratJalan(id);
      this.editedId = id;
      this.getSalesName(id_om);
      this.getCustomerName(id_om);
      this.getDataStock(id_om);
    },
    handleUpdate(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.$validator.validateAll().then((result) => {
        if (!result) {
          return;
        }

        this.updateSuratJalan(this.editedId);
        this.editModal = false;
        this.loadData();
      });
    },
    handleProses(id) {
      this.prosesSuratJalan(id);
      this.$store.commit("loadingOn");
      setTimeout(() => {
        this.getSuratJalans();
        this.$store.commit("loadingOff");
      }, 1000);
    },
    async filterDate() {
      this.$store.commit("loadingOn");
      await this.loadData(this.filterModel);
      this.$store.commit("loadingOff");
    },
  },
};
</script>