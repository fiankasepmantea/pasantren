<template>
  <div>
    <PageTitle />
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
        <b-col xl="4" lg="4" md="4" sm="12" class="button-container">
          <b-button
            size="sm"
            variant="primary"
            @click="createModal = true"
          >+ Faktur</b-button>
        </b-col>
      </b-row>
      <div class="table-container">
        <hr />
        <b-table
          :fields="header"
          :current-page="currentPage"
          :per-page="perPage"
          :items="returnSales"
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
                variant="warning"
                size="sm"
                @click="handleDetail(row.item.id)"
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
      </div>
    </b-card>
    <!--MODAL-->
    <b-modal
      title="Input Retur"
      v-model="createModal"
      no-close-on-backdrop
      no-close-on-esc
      centered
      @ok="handleSubmit"
    >
    <Form />
    </b-modal>
    <b-modal
      title="Edit Retur"
      v-model="editModal"
      no-close-on-backdrop
      no-close-on-esc
      centered
      @ok="handleEdit"
    >
    <Form />
    </b-modal>

    <b-modal
      title="Detail Retur"
      v-model="detailModal"
      no-close-on-backdrop
      no-close-on-esc
      centered
    >
    <template #modal-footer="{ cancel }">
      <b-button size="sm" variant="primary" @click="cancel()">OK</b-button>
      <b-button size="sm" variant="success" @click="handlePrint">Cetak</b-button>
    </template>
    <Form isDetail/>
    </b-modal>
  </div>
</template>

<script>
import PageTitle from "./PageTitle";
import Form from './Forms/Form';

export default {
  components: {
    PageTitle,
    Form
  },
  data() {
    return {
      detailModal: false,
      createModal: false,
      editModal: false,
      header: [
        {
          key: 'return_date',
          label: 'Tanggal'
        },
        {
          key: 'return_no',
          label: 'No. Return'
        },
        {
          key: 'customer',
          label: 'Pelanggan'
        },
        {
          key: 'sales',
          label: 'Sales'
        },
        {
          key: 'nopol',
          label: 'No. Pol'
        },
        {
          key: 'total',
          label: 'Total'
        },
        {
          key: 'actions',
          label: 'Aksi',
          stickyColumn: true,
          class: 'action-columns'
        }
      ],
      returnSales: [
        {
          return_date: '2020-10-19',
          return_no: 'RTR/20201019/001',
          customer: 'Arifin',
          sales: 'Naruto',
          nopol: '283745089',
          total: '20000000'
        }
      ],
    }
  },
  provide() {
    return {
      validator: this.$validator
    }
  },
  methods: {
    handleSubmit(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.$validator.validateAll().then(result => {
        if (!result) {
          return
        }
        this.$toasted.global.success_toast({
          message: 'Retur berhasil..'
        })
        this.createModal = false;
      }).catch(err => {
      this.$toasted.global.failed_toast({
        message: 'Retur gagal..'
      })
      })
    },
    handleEdit(id) {
      this.editModal = true;
    },
    handleDetail(id) {
      this.detailModal = true;
    }
  }
};
</script>

<style scoped>
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

</style>