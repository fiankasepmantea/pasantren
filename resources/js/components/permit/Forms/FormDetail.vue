<template>
  <div>
    <b-table
      :items="[view_surat_jalan]"
      :fields="header"
      small
      style="font-size: 12px !important;"
    >
    </b-table>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  created() {
    this.getViewSuratJalan()
  },
  data() {
    return {
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
          key: 'customer.customer.customer_name.nama',
          label: 'Pelanggan',
          class: "text-left",
        },
    ],
    }
  },
  computed: {
    ...mapState('suratjalan', {
      view_surat_jalan: state => state.view_surat_jalan
    }),
  },
  methods: {
    ...mapActions('suratjalan', ['getViewSuratJalan']),
  }
};
</script>