const fs = require('fs');
const files = fs.readdirSync('assets/images').filter(f => f.endsWith('.svg'));
let out = '';
files.forEach(f => {
  const content = fs.readFileSync('assets/images/' + f, 'utf8');
  out += f + ':\n' + content + '\n\n-----------------\n';
});
fs.writeFileSync('svg_contents_dump.txt', out);
