type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } else {
    // Optional: Handle other cases
    return 'Invalid subject';
  }
}

// Test cases
console.log(teachClass('Math'));
console.log(teachClass('History'));
