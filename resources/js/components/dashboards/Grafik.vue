<template>
  <div>
    <PageTitle />
    <b-row>
      <b-col md="12">
        <b-card title="Total Setoran Juz">
          <MainChart />
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="4">
        <b-card title="Setoran Unit">
          <ChartUnit />
        </b-card>
      </b-col>
      <b-col md="4">
        <b-card title="Setoran Muhaffizh">
          <ChartMuhaffizh />
        </b-card>
      </b-col>
      <b-col md="4">
        <b-card title="Setoran Group">
          <ChartGroup />
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
import MainChart from '../dashboards/CLTotalSetorJuz'
import ChartUnit from '../dashboards/CCSetoranUnit'
import ChartMuhaffizh from '../dashboards/CCSetoranMuhaffizh'
import ChartGroup from '../dashboards/CCSetoranGroup'

export default {
  components: {
    PageTitle,
    MainChart,
    ChartUnit,
    ChartMuhaffizh,
    ChartGroup
  },
}
</script>