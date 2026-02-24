const fs = require('fs');
const file = 'index.html';
let html = fs.readFileSync(file, 'utf8');

// Fix Star
html = html.split('42a63fedd1842bba80b7faafade8e2f1c07b69cb.svg" alt="Star"').join('8265a0fa4f4a4c5343c494d1fb8411aee17452a3.svg" alt="Star"');

// Fix Phone
html = html.split('8d9b56a8cc5ade4496957536d05b2cb7a28377c7.svg" alt="Phone Icon"').join('42a63fedd1842bba80b7faafade8e2f1c07b69cb.svg" alt="Phone Icon"');
html = html.split('8d9b56a8cc5ade4496957536d05b2cb7a28377c7.svg" alt="Phone"').join('42a63fedd1842bba80b7faafade8e2f1c07b69cb.svg" alt="Phone"');

// Fix Arrow
html = html.split('8265a0fa4f4a4c5343c494d1fb8411aee17452a3.svg" alt="Arrow Right"').join('8d9b56a8cc5ade4496957536d05b2cb7a28377c7.svg" alt="Arrow Right"');

fs.writeFileSync(file, html);
console.log("Fixed icons! Verified replacement.");
