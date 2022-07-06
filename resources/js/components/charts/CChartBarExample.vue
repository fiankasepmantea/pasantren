<template>
  <CChartBar
    :datasets="defaultDatasets"
    labels="months"
  />
</template>

<script>
import { CChartBar } from '@coreui/vue-chartjs'

export default {
  name: 'CChartBarExample',
  components: { CChartBar },
  computed: {
    defaultDatasets () {
      return [
        {
          label: 'Santri 1',
          backgroundColor: '#f87979',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        },
        {
          label: 'Santri 2',
          backgroundColor: '#32a852',
          data: [10, 20, 30, 40, 80, 90, 5, 150, 30, 20, 15, 11]
        }
      ]
    }
  }
}
</script>
