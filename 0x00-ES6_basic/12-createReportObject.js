export default function createReportObject(employeesList) {
  const allEmployees = { ...employeesList };

  const getNumberOfDepartments = () => Object.keys(allEmployees).length;

  const mergedDepartments = {};
  Object.entries(allEmployees).forEach(([department, employees]) => {
    mergedDepartments[department] = [...employees];
  });

  return {
    allEmployees: mergedDepartments,
    getNumberOfDepartments,
  };
}
