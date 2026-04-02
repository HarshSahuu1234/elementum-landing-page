const fs = require('fs');
try {
  const data = fs.readFileSync('.git/logs/HEAD', 'utf8');
  console.log("GIT LOG:");
  const lines = data.split('\n').filter(Boolean);
  lines.forEach(line => {
    const parts = line.split('\t');
    if (parts.length > 1) {
      console.log(parts[1]);
    } else {
      console.log(line);
    }
  });
} catch (e) {
  console.error("Error reading git log:", e.message);
}
