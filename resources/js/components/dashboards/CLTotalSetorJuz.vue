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
import $axios from '../../api.js'

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
      labels: [],
      series: []
    }
  },
  created() {
    $axios.get('dashboard/chartsetoran?ds=TotalSetorJuz')
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
      const color1 = getStyle('info') || '#20a8d8'

      return [{
        label: 'Juz',
        backgroundColor: hexToRgba(color1, 10),
        borderColor: color1,
        pointHoverBackgroundColor: color1,
        borderWidth: 2,
        data: this.series,
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
              max: this.series.reduce((a, b) => Math.max(a, b), 30)
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
