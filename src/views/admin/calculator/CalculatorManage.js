import { reactive } from 'vue';
import { getCurrentInstance, onMounted, ref } from 'vue';

export const useCalculatorManage = () => {
  const { proxy } = getCurrentInstance();
  
  const headers = reactive([
    {
      text: "checker_code",
      value: "checker_code",
      sortable: true,
      width: 80,
    },
    {
      text: "checker_name",
      value: "checker_name",
      sortable: true,
    },
    {
      text: "workload",
      value: "workload",
      sortable: true,
      width: 60,
    },
    {
      text: "x1",
      value: "x1",
      sortable: true,
      width: 60,
    },
    {
      text: "x2",
      value: "x2",
      sortable: true,
      width: 60,
    },
    {
      text: "x3",
      value: "x3",
      sortable: true,
      width: 60,
    },
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
      field: "workload",
      field_name: 'workload',
    },
    {
      field: "x1",
      field_name: 'x1',
    },
    {
      field: "x2",
      field_name: 'x2',
    },
    {
      field: "x3",
      field_name: 'x3',
    },
  ]);

  return {
    headers,
    filterData,
  }
}
