<template>
  <CChartLine
    :datasets="ds"
    :options="opt"
    :labels="labels"
  />
</template>

<script>
import { CChartLine } from '@coreui/vue-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils/src'

function random (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default {
  name: 'CCSetoranGroup',
  components: {
    CChartLine
  },
  data() {
    return {
      labels: ['Umar','Saidah','Sidik','Usman','Fajar']
    }
  },
  computed: {
    ds() {
      const color1 = getStyle('danger') || '#f86c6b'
      let elements = this.labels.length
      const data1 = []

      for (let i = 0; i <= elements; i++) {
        data1.push(random(0, 30))
      }

      return [{
        label: 'Juz',
        backgroundColor: hexToRgba(color1, 10),
        borderColor: color1,
        pointHoverBackgroundColor: color1,
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
