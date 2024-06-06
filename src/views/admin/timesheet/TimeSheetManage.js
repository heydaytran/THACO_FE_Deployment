import { reactive } from 'vue';
import { getCurrentInstance, onMounted, ref } from 'vue';

export const useTimeSheetManage = () => {
  const { proxy } = getCurrentInstance();

  const headers = reactive([
    {
      text: "checker_code", value: "checker_code",
      sortable: true, width: 150,
    },
    {
      text: "checker_name", value: "checker_name",
      sortable: true, width: 150,
    },
    {
      text: "time_sheet_code", value: "time_sheet_code",
      sortable: true, width: 180,
    },
    {
      text: "task",
      value: "task", width: 120,
    },
    {
      text: "bookmark_type_code",
      value: "bookmark_type_code",
      sortable: true,
      width: 220,
    },
    {
      text: "start_date",
      value: "start_date_string",
      sortable: true,
      width: 150,
    },
    {
      text: "contract",
      value: "contract",
      sortable: true,
      width: 120,
    },
    {
      text: "customer",
      value: "customer",
      sortable: true,
      width: 120,
    },
    {
      text: "status",
      value: "status",
      width: 120,
    },
    {
      text: "status_date",
      value: "status_date_string",
      sortable: true,
      width: 100,
    },
    {
      text: "complete",
      value: "complete",
      width: 120,
    },
    {
      text: "plan",
      value: "plan",
      width: 120,
    },
    {
      text: "deadline_customer_date",
      value: "deadline_customer_date_string",
      sortable: true,
      width: 180,
    },
    {
      text: "detail",
      value: "detail",
      width: 120,
    },
    {
      text: "Tùy chọn", value: "operation",
      class: "operation",
      width: 80
    }
  ]);
  const filterData = reactive([
    {
      field: "All",
      field_name: 'Tất cả',
    },
    {
      field: "checker_code",
      field_name: 'checker_code',
    },
    {
      field: "checker_name",
      field_name: 'checker_name',
    },
    {
      field: "time_sheet_code",
      field_name: 'time_sheet_code',
    },
    {
      field: "task",
      field_name: 'task',
    },
    {
      field: "bookmark_type_code",
      field_name: 'bookmark_type_code',
    },
    {
      field: "start_date_string",
      field_name: 'start_date',
    },
    {
      field: "contract",
      field_name: 'contract',
    },
    {
      field: "customer",
      field_name: 'customer',
    },
    {
      field: "status",
      field_name: 'status',
    },
    {
      field: "status_date_string",
      field_name: 'status_date',
    },
    {
      field: "complete",
      field_name: 'complete',
    },
    {
      field: "plan",
      field_name: 'plan',
    },
    {
      field: "deadline_customer_date_string",
      field_name: 'deadline_customer_date',
    },
    {
      field: "detail",
      field_name: 'detail',
    },
  ])
  
  return {
    headers,
    filterData,
  }
}