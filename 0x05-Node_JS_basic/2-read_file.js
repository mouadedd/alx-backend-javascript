const fs = require('fs');

const countStudents = (file) => {
  const students = {};
  const fields = {};
  let length = 0;
  try {
    const data = fs.readFileSync(file, 'utf-8');
    const lines = data.toString().split('\n');
    for (let idx = 0; idx < lines.length; idx += 1) {
      if (lines[idx]) {
        length += 1;
        const field = lines[idx].toString().split(',');
        if (Object.prototype.hasOwnProperty.call(students, field[3])) {
          students[field[3]].push(field[0]);
        } else {
          students[field[3]] = [field[0]];
        }
        if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
          fields[field[3]] += 1;
        } else {
          fields[field[3]] = 1;
        }
      }
    }
    const n = length - 1;
    console.log(`Number of students: ${n}`);
    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
};

module.exports = countStudents;
