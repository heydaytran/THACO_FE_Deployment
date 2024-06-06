<template>
  <div class="base-list-manage timesheet-manage">
    <div class="toolbar">
      <div class="toolbar-left">
        <div class="toolbar-title">Danh sách hồ sơ</div>
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
        <base-button text="Thêm mới" @click="add()"> </base-button>
      </div>
    </div>
    <div class="container-grid">
      <grid-view
        ref="gridView"
        :api="api"
        :fields="[
          'time_sheet_id',
          'time_sheet_code',
          'task',
          'start_date',
          'contract',
          'customer',
          'status',
          'status_date',
          'complete',
          'plan',
          'deadline_customer_date',
          'detail',
        ]"
        :headers="headers"
        :filters="filters"
      >
        <template v-slot:item-operation="{ item }">
          <div class="d-flex flex-center">
            <div
              class="icon24 edit cursor-pointer"
              title="Sửa"
              @click="gridRowActionClick('View', item)"
            ></div>
            <div
              class="icon24 delete cursor-pointer ml-1"
              title="Xóa"
              @click="gridRowActionClick('Delete', item)"
            ></div>
          </div>
        </template>

        <!-- <template v-slot:item-checker_code="{ item }">
          <span class="txt-link" @click="clickChecker($event, item)">{{
            item.checker_code
          }}</span>
        </template>

        <template v-slot:item-bookmark_type_code="{ item }">
          <span class="txt-link" @click="clickBookmarkType($event, item)">{{
            item.bookmark_type_code
          }}</span>
        </template> -->
      </grid-view>
    </div>
  </div>
</template>

<script>
import gridView from "@/components/gridView/GridView.vue";
import { useTimeSheetManage } from "./TimeSheetManage.js";
import timesheetAPI from "@/apis/components/timesheetAPI.js";
import popupUtil from "@/commons/popupUtil";
import {
  ref,
  onMounted,
  getCurrentInstance,
  reactive,
  watch,
  computed,
} from "vue";
import baseList from "@/views/baseList";
export default {
  extends: baseList,
  components: { gridView },
  setup() {
    const { proxy } = getCurrentInstance();
    const { headers, filterData } = useTimeSheetManage();

    return {
      moduleName: "Hồ sơ",
      formNameDetail: "TimeSheetDetail",
      idField: "time_sheet_id",
      codeField: "time_sheet_code",
      nameField: "time_sheet_name",
      headers,
      api: timesheetAPI,
      filterData,
    };
  },
};
</script>

<style lang="scss">
@import "./TimeSheetManage.scss";
</style>