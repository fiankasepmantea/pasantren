<template>
  <div>
    <PageTitle />
    <b-row>
      <b-col md="6">
        <b-card 
        title="Muhaffizh"
        >
        <hr>
          <div v-for="(muhaffizh, index) in muhaffizhs" :key="index"  class="d-flex justify-content-between">
            <b-card-text class="card-text">{{ muhaffizh.name }}</b-card-text>
            <b-card-text class="card-text">{{ muhaffizh.revenue }}</b-card-text>
          </div>
          
           <div class="d-flex justify-content-between">
              <b-card-text class="card-text">Total</b-card-text>
              <b-card-text class="card-text">{{ totalJuzMuhaffizh }}</b-card-text>
           </div>
         
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card 
        title="Santri"
        >
        <hr>
          <div v-for="(santri, index) in santris" :key="index"  class="d-flex justify-content-between">
            <b-card-text class="card-text">{{ santri.name }}</b-card-text>
            <b-card-text class="card-text">{{ santri.revenue }}</b-card-text>
          </div>
          <div class="d-flex justify-content-between">
              <b-card-text class="card-text">Total</b-card-text>
              <b-card-text class="card-text">{{ totalJuzSantri }}</b-card-text>
          </div>
         
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="4">
        <b-card title="Grafik Garis">
          <hr>
          <LineChart />
        </b-card>
      </b-col>
      <b-col md="4">
        <b-card title="Grafik Batang">
          <hr>
          <BarChart />
        </b-card>
      </b-col>
      <b-col md="4">
        <b-card title="Grafik Lingkaran">
          <hr>
          <PieChart />
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<style>
.card-text {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
}
</style>

<script>
import PageTitle from './PageTitle'
import LineChart from '../charts/CChartLineExample'
import BarChart from '../charts/CChartBarExample'
import PieChart from '../charts/CChartPieExample'

export default {
  components: {
    PageTitle,
    LineChart,
    BarChart,
    PieChart
  },
  data() {
    return {
      muhaffizhs: [
        {
          name: 'Didin',
          revenue: '6 Juz'
        },
        {
          name: 'Udin',
          revenue: '2 Juz'
        },
        {
          name: 'Maman',
          revenue: '4 Juz'
        },
      
      ],
       santris: [
        {
          name: 'Ciro',
          revenue: '3 Juz'
        },
        {
          name: 'David',
          revenue: '2 Juz'
        },
        {
          name: 'Klok',
          revenue: '1 Juz'
        },
      
      ],
      totalJuzMuhaffizh: '12 Juz',
      totalJuzSantri: '6 Juz'
    }
  }
}
</script>