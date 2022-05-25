<template>
  <div>
    <PageTitle />
    <b-row>
      <b-col md="6">
        <b-card 
        title="Penjualan Marketing"
        >
        <hr>
          <div v-for="(marketing, index) in marketings" :key="index"  class="d-flex justify-content-between">
            <b-card-text class="card-text">{{ marketing.name }}</b-card-text>
            <b-card-text class="card-text">Rp. {{ marketing.revenue }}</b-card-text>
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card
          title="Pendapatan"
        >
        <b-card-text class="card-text">01 Agustus - 30 September</b-card-text>

        <h4 class="d-flex justify-content-end">{{ totalIncome }}</h4>
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
      marketings: [
        {
          name: 'Naruto',
          revenue: '56.000.000'
        },
        {
          name: 'Sasuke',
          revenue: '76.000.000'
        },
        {
          name: 'Sakura',
          revenue: '56.000.000'
        },
        {
          name: 'Sai',
          revenue: '15.000.000'
        },
        {
          name: 'Kakashi',
          revenue: '6.000.000'
        },
      ],
      totalIncome: '999.999.999.999'
    }
  }
}
</script>