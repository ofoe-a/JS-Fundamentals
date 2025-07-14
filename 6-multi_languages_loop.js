// const text = ["C is fun", "Python is cool", "JavaScript is amazing"]
// for(let i = 0; i<text.length; i++){
//     console.log(text[i]);
// }

const text = ["C is fun", "Python is cool", "JavaScript is amazing"];
let output = "";

for (let i = 0; i < text.length; i++) {
  output += text[i] + "\n";
}

console.log(output.trim());