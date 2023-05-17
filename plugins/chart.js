import Vue from "vue";
import { Bar, Line, Doughnut, Pie } from "vue-chartjs/legacy";
import Chart from "chart.js/auto";

Vue.component("LineChart", {
  extends: Line,
});

Vue.component("DoughnutChart", {
  extends: Doughnut,
});

Vue.component("BarChart", {
  extends: Bar,
});

Vue.component("PieChart", {
  extends: Pie,
});
