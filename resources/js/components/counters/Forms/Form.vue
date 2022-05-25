<template>
  <div>
    <b-form @submit.stop.prevent="">
      <b-form-group label="No. Kontra Bon" label-size="sm" label-cols="4">
        <b-form-input
          name="bill-no"
          v-model="bill_no"
          size="sm"
          disabled
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Nama Pelanggan" label-size="sm" label-cols="4">
        <b-form-select
          name="customer"
          v-model="customer"
          size="sm"
          v-validate="{ required: true }"
          :state="validateState('customer')"
          data-vv-as="Pelanggan"
          :disabled="isDetail"
        ></b-form-select>
        <b-form-invalid-feedback>{{
          veeErrors.first('customer')
        }}</b-form-invalid-feedback>
      </b-form-group>
      <b-table
        :fields="header"
        :items="detailCounterSales"
        sticky-header
        no-border-collapse
        striped
        hover
        small
        responsive
        outlined
        show-empty 
      >
      <template #cell(actions)="">
        <b-form-checkbox name="tagihkan" v-validate="{ required: true }" :state="validateState('tagihkan')" :disabled="isDetail">Tagihkan</b-form-checkbox>
      </template>
      </b-table>
    </b-form>
  </div>
</template>

<script>
export default {
  inject: ["validator"],
  props: ["isDetail"],
  data() {
    return {
      bill_no: '',
      customer: '',
      header: [
        {
          key: 'invoice_no',
          label: 'No. Faktur'
        },
        {
          key: 'countersales_date',
          label: 'Tgl Kontra Bon'
        },
        {
          key: 'due_date',
          label: 'Tgl Jatuh Tempo'
        },
        {
          key: 'total',
          label: 'Total'
        },
        {
          key: 'actions',
          label: 'Checklist'
        }
      ],
      detailCounterSales: [
        {
          invoice_no: '123',
          countersales_date: '2020-10-11',
          due_date: '2021-02-11',
          total: '100000000'
        }
      ]
    }
  },
  created() {
    this.$validator = this.validator;
  },
  methods: {
    validateState(ref) {
      if (
        this.veeFields[ref] &&
        (this.veeFields[ref].dirty || this.veeFields[ref].validated)
      ) {
        return !this.veeErrors.has(ref);
      }
      return null;
    },
  }
};
</script>

<style scoped>
</style>