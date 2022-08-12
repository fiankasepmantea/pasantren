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
  name: 'CLTotalSetorJuz',
  components: {
    CChartLine
  },
  data() {
    return {
      labels: ['Mei-2','Mei-3','Mei-4','Juni-1','Juni-2','Juni-3','Juni-4','Juli-1','Juli-2','Juli-3','Juli-4','Juli-5'
        ,'Agustus-1','Agustus-2','Agustus-3','Agustus-4']
    }
  },
  computed: {
    ds() {
      const color1 = getStyle('info') || '#20a8d8'
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
            ticks:{
              callback:function(label){
                return label.split("-")[1]
              }
            }
          }, {
            gridLines: {
              drawOnChartArea: false,
            },
            ticks:{
              callback:function(label){
                var bulan = label.split("-")[0]
                var pekan = label.split("-")[1]
                if(pekan == 3) return bulan;
                else return "";
              }
            }
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
