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

function random (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default {
  name: 'CCSetoranMuhaffizh',
  components: {
    CChartBar
  },
  data() {
    return {
      labels: ['Ciro','David','Pipin','Agif']
    }
  },
  computed: {
    ds() {
      const colors = ['#cc9112','#e05d06','#268406','#e417ef','#db5e15']
      let elements = this.labels.length
      const data1 = []

      for (let i = 0; i <= elements; i++) {
        data1.push(random(0, 30))
      }

      return [{
        label: 'Juz',
        backgroundColor: colors.map((c)=>hexToRgba(c, 50)),
        borderColor: colors,
        borderWidth: 2,
        data: data1,
      }]
    },
    opt() {
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
              stepSize: Math.ceil(30 / 5),
              max: 30
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
