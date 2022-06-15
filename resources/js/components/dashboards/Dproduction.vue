<template>
  <div>
    <PageTitle />
    <div class="text-center">
      <div class="accordion" role="tablist">
        <div v-for="(ppc, index) in ppcs" v-bind:key="ppc.id">
          <b-card
            no-body
            class="mb-1"
          >
          <b-card-header header-tag="header" class="p-0 d-flex" role="tab" style="">
            <b-button
              size="sm"
              block
              v-b-toggle="'ppc-item-' + index"
              variant="dark"
            ><div class="d-flex justify-content-between">
              <p class="accordion-text">{{ ppc.no_po }}</p>
              <p class="accordion-text">Progress Keseluruhan - {{ ppc.progress }}</p>
              <p class="accordion-text mr-2">Status</p>
            </div>
            </b-button>
          </b-card-header>
          <b-collapse
            :id="'ppc-item-' + index"
            :accordion="'ppc-item-' + index"
            role="tabpanel"
            style="border: 2px solid black"
          >
          <div class="d-flex justify-content-between mx-4 py-2" v-for="om in ppc.oms" :key="om.id">
            <p class="accordion-text">{{ om.om_no }}</p>
            <p class="accordion-text">{{ om.om_status }}</p>
          </div>
          </b-collapse>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.accordion-text {
  font-size: 16px;
  margin: 0;
  padding: 0;
  font-weight: 600;
}

.progress {
  position: relative;
}
</style>

<script>
import PageTitle from './PageTitle'

export default {
  components: {
    PageTitle
  },
  data() {
    return {
      ppcs: [
        {
          no_po: 'Ciro',
          progress: '50%',
          oms: [
            {
              om_no: '3 Juz',
              om_status: 'Done'
            },
          ],
        },
        {
          no_po: 'David',
          progress: '100%',
          oms: [
            {
              om_no: '2 Juz',
              om_status: 'Done'
            },

          ],
        },
        {
          no_po: 'Klok',
          progress: '50%',
          oms: [
            {
              om_no: '1',
              om_status: 'Done'
            },
          ],
        },
      ]
    }
  }
}
</script>