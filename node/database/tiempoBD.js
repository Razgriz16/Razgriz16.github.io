
const http = require('http');
const fs = require('fs');

const url = 'http://localhost:8000';
const interval = 10000; // 10 segundos

const start = Date.now();
let downCount = 0;

while (true) {
  const response = await http.get(url);

  if (response.statusCode !== 200) {
    downCount++;
  }

  const now = Date.now();
  const duration = now - start;
  const availability = 100 - (downCount / duration) * 100;

  fs.writeFileSync('availability.txt', `{ "availability": ${availability} }`);

  await sleep(interval);
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

