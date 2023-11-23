let names = [];
let ages = [];
let jobs = [];

let contain = document.createElement('div');
document.body.appendChild(contain);
contain.id = 'container';

function ele(name, age, job, photo) {
  let card = document.createElement('div');
  card.className = 'card';

  let title = document.createElement('h2');
  let ageElem = document.createElement('p');
  let jobElem = document.createElement('p');
  let img = document.createElement('img');

  let head = document.createTextNode(name);
  let ageTxt = document.createTextNode('Age: ' + age);
  let jobTxt = document.createTextNode('Job: ' + job);
  img.src = photo;

  title.appendChild(head);
  ageElem.appendChild(ageTxt);
  jobElem.appendChild(jobTxt);

  card.appendChild(title);
  card.appendChild(jobElem);
  card.appendChild(ageElem);
  card.appendChild(img);
  contain.appendChild(card);
}

function addCard() {
  let newName = document.getElementById('name').value;
  let newAge = document.getElementById('age').value;
  let newJob = document.getElementById('job').value;
  let newPhoto = document.getElementById('photo').value;

  if (newName && newAge && newJob && newPhoto) {
    names.push(newName);
    ages.push(parseInt(newAge));
    jobs.push(newJob);

    ele(newName, parseInt(newAge), newJob, newPhoto);
    filterCards();  

   
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('job').value = '';
    document.getElementById('photo').value = '';
  } else {
    alert("Please fill in all fields");
  }
}

function filterCards() {
  let searchTerm = document.getElementById('search').value.toLowerCase();
  let cards = document.getElementsByClassName('card');

  for (let card of cards) {
    let name = card.querySelector('h2').innerText.toLowerCase();
    let job = card.querySelector('p:nth-child(2)').innerText.toLowerCase();

    if (name.includes(searchTerm) || job.includes(searchTerm)) {
      card.style.display = 'inline-block';
    } else {
      card.style.display = 'none';
    }
  }
}

for (let i = 0; i < names.length; i++) {
  ele(names[i], ages[i], jobs[i], 'images/boy.jpg');
}