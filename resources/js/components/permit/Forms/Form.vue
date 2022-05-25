<template>
  <div>
    <b-form-group
      label="Tanggal"
      label-for="date"
      label-size="sm"
      label-cols="2"
    >
      <b-form-input
        readonly
        id="date"
        v-model="suratjalan.delivery_date"
        placeholder="AUTO GENERATE TANGGAL PER HARI INI"
      >
      </b-form-input
    ></b-form-group>
    <b-form-group
      label="No. Surat Jalan"
      label-for="permit-no"
      label-size="sm"
      label-cols="2"
    >
      <b-form-input
        readonly
        id="permit-no"
        v-model="suratjalan.delivery_note_number"
        placeholder="AUTO GENERATE"
      >
      </b-form-input
    ></b-form-group>
    <b-form-group label="OM" label-for="om" label-size="sm" label-cols="2">
      <b-form-select
        id="om"
        :options="om_name"
        @change="getData_OM(suratjalan.om_id)"
        v-model="suratjalan.om_id"
      >
      </b-form-select
    ></b-form-group>
    <b-form-group
      label="Sales"
      label-for="sales"
      label-size="sm"
      label-cols="2"
    >
      <b-form-input id="sales" readonly :value="sales_name"> </b-form-input
    ></b-form-group>
    <b-form-group
      label="Pelanggan"
      label-for="customer"
      label-size="sm"
      label-cols="2"
    >
      <b-form-input id="customer" readonly :value="customer_name">
      </b-form-input
    ></b-form-group>
    <b-form-group
      label="No. Pol"
      label-for="nopol"
      label-size="sm"
      label-cols="2"
    >
      <b-form-input id="nopol" v-model="suratjalan.vehicle_registration_number">
      </b-form-input
    ></b-form-group>
    <div class="container">
      <b-row
        class="seven-deadly-sins"
        v-for="(detail, index) in detail_surat_jalan"
        :key="detail.id"
      >
        <b-col
          ><b-form-group label="Model"
            ><b-form-input
              readonly
              style="min-width: 100px"
              :value="detail.stockmaterialbahan.material_name.nama"
            ></b-form-input></b-form-group
        ></b-col>
        <b-col
          ><b-form-group label="Bahan"
            ><b-form-input
              readonly
              style="min-width: 100px"
              :value="detail.stockmaterialbahan.model_name.nama_model"
            ></b-form-input></b-form-group
        ></b-col>
        <b-col
          ><b-form-group label="Warna"
            ><b-form-input
              readonly
              style="min-width: 100px"
              :value="detail.stockcolor.color.nama"
            ></b-form-input></b-form-group
        ></b-col>
        <b-col
          ><b-form-group label="Size"
            ><b-form-input
              readonly
              style="min-width: 100px"
              :value="detail.stocksize.size.nama"
            ></b-form-input></b-form-group
        ></b-col>
        <b-col
          ><b-form-group label="Quantity"
            ><b-form-input
              :id="'qty' + index"
              style="min-width: 100px"
              v-model="detail.quantity"
              :name="'quantity-' + index"
              v-validate="{ required: true, min_value: 1, max_value: detail.maxQuantity }"
              :state="validateState('quantity-' + index)"
              data-vv-as="Quantity"
            ></b-form-input>
            <b-form-invalid-feedback>{{ veeErrors.first('quantity-' + index) }}</b-form-invalid-feedback>
            </b-form-group
        ></b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  inject: ['validator'],
  created() {
    this.$validator = this.validator;
    this.getOMName();
  },
  computed: {
    ...mapState(["errors"]),
    ...mapState("suratjalan", {
      suratjalan: (state) => state.suratjalan,
      om_name: (state) => state.om_name,
      detail_surat_jalan: (state) => state.detail_surat_jalan,
      sales_name: (state) => state.sales_name,
      customer_name: (state) => state.customer_name,
    }),
  },
  methods: {
    ...mapMutations("suratjalan", [
      "CLEAR_FORM",
      "CLEAR_SALES",
      "CLEAR_CUSTOMER",
    ]),
    ...mapActions("suratjalan", [
      "getOMName",
      "getSalesName",
      "getCustomerName",
      "getDataStock",
    ]),
    validateState(ref) {
      if (
        this.veeFields[ref] &&
        (this.veeFields[ref].dirty || this.veeFields[ref].validated)
      ) {
        return !this.veeErrors.has(ref);
      }
      return null;
    },
    getData_OM(id) {
      this.getSalesName(id);
      this.getCustomerName(id);
      this.getDataStock(id);
    },
    validateState(ref) {
      if (
        this.veeFields[ref] &&
        (this.veeFields[ref].dirty || this.veeFields[ref].validated)
      ) {
        return !this.veeErrors.has(ref);
      }
      return null;
    },
    destroyed() {
      this.CLEAR_FORM();
    },
  },
};
</script>

<style>
@media (min-width: 768px) {
  .seven-deadly-sins .col-md-1,
  .seven-deadly-sins .col-sm-1,
  .seven-deadly-sins .col-lg-1 {
    width: 100%;
    *width: 100%;
  }
}

@media (min-width: 992px) {
  .seven-deadly-sins .col-md-1,
  .seven-deadly-sins .col-sm-1,
  .seven-deadly-sins .col-lg-1 {
    width: 14.285714285714285714285714285714%;
    *width: 14.285714285714285714285714285714%;
  }
}

@media (min-width: 1200px) {
  .seven-deadly-sins .col-md-1,
  .seven-deadly-sins .col-sm-1,
  .seven-deadly-sins .col-lg-1 {
    width: 14.285714285714285714285714285714%;
    *width: 14.285714285714285714285714285714%;
  }
}

.delete-container {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 5px;
}
</style>
