// Template Literals

const name = 'LeBron James';
const jersey = 23;
const job = 'Professional BasketBall';
const city = "Los Angeles";
let html;

// With template strings (es6)

function hello() {
  return 'hello';
}

html = `
<ul>
  <li>Name: ${name}</li>
  <li>Jersey: ${jersey}</li>
  <li>Job: ${job}</li>
  <li>City: ${city}</li>


  // Expressions
  <li>${hello()}</li>
  <li>${2 + 2}</li>
  <li>${jersey > 30 ? 'Over 30' : 'Under 30'}</li>
</ul>;`

document.body.innerHTML = html;
// console.log(html);