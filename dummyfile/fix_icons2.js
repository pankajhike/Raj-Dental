const fs = require('fs');
const file = 'index.html';
let html = fs.readFileSync(file, 'utf8');

// The star-icon elements
// Replace any src inside an img that has class="star-icon" with 8265a0fa4f4a4c5343c494d1fb8411aee17452a3.svg
html = html.replace(/src=\"[^\"]+\"(?=[^>]*class=\"star-icon\")/g, 'src="assets/images/8265a0fa4f4a4c5343c494d1fb8411aee17452a3.svg"');
// Wait, the regex needs to match attributes backwards too, let me just replace all the wrong hashes where we know exactly their context.

// Replace all 42a63fed... with the Yellow Star (Since all 20 existing 42a6... are stars right now!)
html = html.split('42a63fedd1842bba80b7faafade8e2f1c07b69cb.svg').join('8265a0fa4f4a4c5343c494d1fb8411aee17452a3.svg');

// Right now, 8d9b56a8cc5ade4496957536d05b2cb7a28377c7.svg is used for Phone twice!
// We'll replace it with 42a63fed... (the correct Phone)
html = html.split('8d9b56a8cc5ade4496957536d05b2cb7a28377c7.svg').join('42a63fedd1842bba80b7faafade8e2f1c07b69cb.svg');

// Right now, 8265a0fa4f4a4c5343c494d1fb8411aee17452a3.svg is used ONCE for Arrow Right! (View Credentials & Certifications)
// The arrow should be 8d9b56a8cc5ade4496957536d05b2cb7a28377c7.svg.
// How do I ONLY replace the Arrow instance without breaking the 20 Stars I just fixed?
// I will use regex to find the one with `class="btn-link-icon"` because I know that's the arrow!
html = html.replace(/src=\"assets\/images\/8265a0fa4f4a4c5343c494d1fb8411aee17452a3\.svg\"[\s\n]*alt=\"Arrow Right\"[\s\n]*class=\"btn-link-icon\"/g, 'src="assets/images/8d9b56a8cc5ade4496957536d05b2cb7a28377c7.svg" alt="Arrow Right" class="btn-link-icon"');

fs.writeFileSync(file, html);
console.log("Replaced successfully!");
