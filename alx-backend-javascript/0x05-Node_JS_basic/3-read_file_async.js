const fs = require('fs');

async function countStudents(path) {
  if (fs.existsSync(path)) {
    return new Promise((resolve) => {
      fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
          throw Error('Cannot load the database');
        }
        const result = [];
        data.split('\n').forEach((data) => {
          result.push(data.split(','));
        });
        result.shift();
        const newis = [];
        result.forEach((data) => newis.push([data[0], data[3]]));
        const fields = new Set();
        newis.forEach((item) => fields.add(item[1]));
        const final = {};
        fields.forEach((data) => { (final[data] = 0); });
        newis.forEach((data) => { (final[data[1]] += 1); });
        console.log(`Number of students: ${result.filter((check) => check.length > 3).length}`);
        Object.keys(final).forEach((data) => console.log(`Number of students in ${data}: ${final[data]}. List: ${newis.filter((n) => n[1] === data).map((n) => n[0]).join(', ')}`));
        resolve(result, final, newis);
      });
    });
  }
  throw Error('Cannot load the database');
}

module.exports = countStudents;
