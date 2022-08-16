<template>
  <CChartPie
    :datasets="ds"
    :options="opt"
    :labels="labels"
  />
</template>

<script>
import { CChartPie } from '@coreui/vue-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils/src'
import $axios from '../../api.js'

export default {
  name: 'CCSetoranGroup',
  components: {
    CChartPie
  },
  data() {
    return {
      labels: [],
      series: []
    }
  },
  created() {
    $axios.get('dashboard/chartsetoran?ds=SetoranGroup')
    .then((response) => response.data)
    .then((data)=> {
      this.labels = data.labels
      this.series = data.series
    })
    .catch((err) => {
      this.$toasted.global.failed_toast(err)
    });
  },
  computed: {
    ds() {
      const colors = ['#F59100','#49AA4D','#3B4DAE','#EA3F33','#9827AD','#C8D736']

      return [{
        label: 'Juz',
        backgroundColor: colors.map((c)=>hexToRgba(c, 90)),
        borderColor: colors,
        borderWidth: 2,
        data: this.series,
      }]
    },
    opt() {
      return {
        maintainAspectRatio: false,
        // legend: { display:false },
      }
    }
  }
}
</script>
