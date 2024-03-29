export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateName(name);
    this._length = this.validateLength(length);
    this._students = this.validateStudents(students);
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this.validateName(newName);
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = this.validateLength(newLength);
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = this.validateStudents(newStudents);
  }

  validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return name;
  }

  validateLength(length) {
    const parsedLength = Number(length);
    if (Number.isNaN(parsedLength) || typeof parsedLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return parsedLength;
  }

  validateStudents(students) {
    if (!Array.isArray(students) || students.some((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    return students;
  }
}
