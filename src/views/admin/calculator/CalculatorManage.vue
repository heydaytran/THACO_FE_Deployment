<template>
  <div class="base-list-manage calculator-manage">
    <div class="toolbar">
      <div class="toolbar-left">
        <div class="toolbar-title">Calculator</div>
        <div class="toolbar-filter ml-4">
          <filter-grid
            v-model="filterGrid"
            :fields="filterData"
            @update:modelValue="(dataFilter) => filterGridView(dataFilter)"
          />
        </div>
      </div>
      <div class="toolbar-right">
        <div
          class="icon24 export-excel cursor-pointer mr-4"
          title="Xuất khẩu"
          @click="exportExcel"
        ></div>
        <div
          class="icon24 reload cursor-pointer mr-4"
          title="Lấy lại dữ liệu"
          @click="refresh"
        ></div>
      </div>
    </div>
    <div class="container-grid">
      <grid-view
        ref="gridView"
        :api="api"
        :fields="[
          'checker_id',
          'checker_code',
          'checker_name',
          'workload',
          'x1',
          'x2',
          'x3',
        ]"
        :headers="headers"
        funcData="getCalculator"
        :filters="filters"
      >
      </grid-view>
    </div>
  </div>
</template>

<script>
import gridView from "@/components/gridView/GridView.vue";
import { useCalculatorManage } from "../calculator/CalculatorManage.js";
import timesheetAPI from "@/apis/components/timesheetAPI.js";
import { getCurrentInstance } from "vue";
import baseList from "@/views/baseList";
export default {
  extends: baseList,
  components: { gridView },
  setup() {
    const { proxy } = getCurrentInstance();
    const { headers, filterData } = useCalculatorManage();

    function refresh() {
      proxy.$refs.gridView.serverOptions.sortBy = [];
      proxy.$refs.gridView.serverOptions.sortType = [];
    }
    async function exportExcel(){
      const me = proxy;
      let param = me.$refs.gridView.lastParam;
      param.page = 1;
      param.size = 10000;
      if (param) {
        let data = await timesheetAPI
          .exportExcelCalculator(param);
        let downloadLink = document.createElement('a');
        downloadLink.href = "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64," + data;
        downloadLink.download = `Calculator.xlsx`;
        downloadLink.click();
        return data;
      }
    }
    return {
      headers,
      api: timesheetAPI,
      refresh,
      filterData,
      exportExcel,
    };
  },
};
</script>

<style lang="scss">
@import "@/views/admin/timesheet/TimeSheetManage.scss";
</style>