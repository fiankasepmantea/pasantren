<template>
  <CChartPie
    :datasets="defaultDatasets"
    :labels="['Santri 1', 'Santri 2']"
  />
</template>

<script>
import { CChartPie } from '@coreui/vue-chartjs'

export default {
  name: 'CChartPieExample',
  components: { CChartPie },
  computed: {
    defaultDatasets () {
      return [
        {
          backgroundColor: [
            '#41B883',
            '#E46651',
            '#00D8FF',
            '#DD1B16'
          ],
          data: [60, 40]
        }
      ]
    }
  }
}
</script>
