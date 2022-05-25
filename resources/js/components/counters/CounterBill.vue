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
          >+ Kontra Bon</b-button>
        </b-col>
      </b-row>
      <div class="table-container">
        <hr />
        <b-table
          :fields="header"
          :current-page="currentPage"
          :per-page="perPage"
          :items="counterSales"
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
      v-model="createModal"
      title="Input Kontra Bon"
      no-close-on-backdrop
      no-close-on-esc
      centered
      @ok="handleSubmit"
      size="lg"
    >
    <Form />
    </b-modal>

    <b-modal
      v-model="editModal"
      title="Edit Kontra Bon"
      no-close-on-backdrop
      no-close-on-esc
      centered
      @ok="handleEdit"
      size="lg"
    >
    <Form />
    </b-modal>

    <b-modal
      v-model="detailModal"
      title="Detail Kontra Bon"
      no-close-on-backdrop
      no-close-on-esc
      centered
      size="lg"
    >
    <Form isDetail />
    </b-modal>    
  </div>
</template>

<script>
import PageTitle from './PageTitle'
import Form from './Forms/Form'
  export default {
    components: {
      PageTitle,
      Form
    },
    data() {
      return {
        createModal: false,
        editModal: false,
        detailModal: false,
        header: [
          {
            key: 'countersales_date',
            label: 'Tanggal'
          },
          {
            key: 'countersales_no',
            label: 'No. Kontra Bon'
          },
          {
            key: 'sales',
            label: 'Sales'
          },
          {
            key: 'customer',
            label: 'Pelanggan'
          },
          {
            key: 'actions',
            label: 'Aksi',
            stickyColumn: true,
            class: 'action-columns'
          }
        ],
        counterSales: [
          {
            countersales_date: '2020-10-19',
            countersales_no: 'BON/20201019/001',
            sales: 'Naruto',
            customer: 'Asfi'
          }
        ]
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
  }
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