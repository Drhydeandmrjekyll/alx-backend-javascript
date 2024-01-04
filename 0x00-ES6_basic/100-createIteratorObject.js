export default function createIteratorObject(report) {
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  const departments = Object.values(report.allEmployees);
  const totalDepartments = departments.length;

  const iterator = {
    next: () => {
      while (currentDepartmentIndex < totalDepartments) {
        const currentDepartment = departments[currentDepartmentIndex];

        if (currentEmployeeIndex < currentDepartment.length) {
          const currentEmployee = currentDepartment[currentEmployeeIndex];
          currentEmployeeIndex += 1;
          return { value: currentEmployee, done: false };
        }

        // Reset employee index for the next department
        currentEmployeeIndex = 0;
        currentDepartmentIndex += 1;
      }

      // If all departments are exhausted, return done: true
      return { value: null, done: true };
    },
    [Symbol.iterator]: () => iterator,
  };

  return iterator;
}
