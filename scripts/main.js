//Fake API
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

//create URL
const fakeEndPoint = `https://jsonplaceholder.typicode.com/todos/1`;

const fakeMount = document.getElementById('mount1');

try {
  const fakeResponse = await fetch(fakeEndPoint);
  if (!fakeResponse.ok) throw fakeResponse;
  
  const fakeData = await fakeResponse.json();
  console.log('fakeData', fakeData);
  
  renderFake(fakeData);
  
} catch (err) {
  console.log('err', err);
  mount1.innerHTML = `<div class="alert alert-danger" role="alert> ${err.message}</div>`  
}

function renderFake(fakeData) {
  const {completed, id, title, userId} = fakeData;

fakeMount.innerHTML = `<div>
<ul>
<li>completed: ${completed}</li>
<li>id: ${id}</li>
<li>title: ${title}</li>
<li>userId: ${userId}</li>
</ul>
<div/>`;
}