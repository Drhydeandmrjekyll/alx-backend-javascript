// 1-stdin.js

process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');

let name = '';

process.stdin.on('data', (input) => {
  name += input.trim(); // Append input to name variable
  if (name) {
    console.log(`Your name is: ${name}`);
    process.stdin.pause(); // Pause the input stream
  } else {
    console.log('No input received');
    process.stdin.pause(); // Pause the input stream
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
