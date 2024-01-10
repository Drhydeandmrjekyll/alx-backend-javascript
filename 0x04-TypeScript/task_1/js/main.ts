interface StudentInterface {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(student: StudentInterface) {
    this.firstName = student.firstName;
    this.lastName = student.lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const studentInfo: StudentInterface = {
  firstName: 'John',
  lastName: 'Doe',
};

const studentInstance = new StudentClass(studentInfo);

console.log(studentInstance.workOnHomework()); // Output: Currently working
console.log(studentInstance.displayName()); 
