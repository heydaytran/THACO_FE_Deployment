<template>
  <div class="base-list-manage checker-manage">
    <div class="toolbar">
      <div class="toolbar-left">
        <div class="toolbar-title">Danh sách nhân viên</div>
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
          class="icon24 reload cursor-pointer"
          title="Lấy lại dữ liệu"
          @click="refresh"
        ></div>
        <base-button
          v-if="context.role == 1"
          class="ml-4"
          text="Thêm mới"
          @click="add()"
        >
        </base-button>
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
          'email',
          'phone_number',
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
          </div>
        </template>
      </grid-view>
    </div>
  </div>
</template>

<script>
import gridView from "@/components/gridView/GridView.vue";
import { useCheckerManage } from "./CheckerManage.js";
import checkerAPI from "@/apis/components/checkerAPI.js";
import { mapGetters } from "vuex";
import {
  ref,
  onMounted,
  getCurrentInstance,
  defineComponent,
  reactive,
  watch,
  computed,
} from "vue";
import baseList from "@/views/baseList";
export default defineComponent({
  extends: baseList,
  components: { gridView },
  setup() {
    const { proxy } = getCurrentInstance();
    const { headers, filterData } = useCheckerManage();

    return {
      moduleName: "Nhân viên",
      formNameDetail: "CheckerDetail",
      idField: "checker_id",
      codeField: "checker_code",
      nameField: "checker_name",
      headers,
      api: checkerAPI,
      filterData,
    };
  },
  computed: {
    ...mapGetters({
      context: "moduleContext/Context",
    }),
  },
});
</script>

<style lang="scss" scoped>
@import "@/views/admin/timesheet/TimeSheetManage.scss";
</style>