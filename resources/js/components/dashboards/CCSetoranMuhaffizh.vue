<template>
  <CChartBar
    :datasets="ds"
    :options="opt"
    :labels="labels"
  />
</template>

<script>
import { CChartBar } from '@coreui/vue-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils/src'
import $axios from '../../api.js'

export default {
  name: 'CCSetoranMuhaffizh',
  components: {
    CChartBar
  },
  data() {
    return {
      labels: [],
      series: []
    }
  },
  created() {
    $axios.get('dashboard/chartsetoran?ds=SetoranMuhaffizh')
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
      const colors = ['#cc9112','#e05d06','#268406','#e417ef','#db5e15']

      return [{
        label: 'Juz',
        backgroundColor: colors.map((c)=>hexToRgba(c, 50)),
        borderColor: colors,
        borderWidth: 2,
        data: this.series,
      }]
    },
    opt() {
      const maxval = this.series.reduce((a, b) => Math.max(a, b), 30)
      return {
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            gridLines: { display: true }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              stepSize: Math.ceil(maxval / 5),
              max: maxval
            },
            gridLines: {
              display: true
            }
          }]
        },
        elements: {
          point: {
            radius: 2,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3
          },
          line: {
            tension: 0
          }
        },
        legend: { display:false },
      }
    }
  }
}
</script>
