//Create Element

const li = document.createElement('li')

//Add Class
li.className = 'collection-item';

//Add id
li.id='new-item';

//Add attribute
li.setAttribute('title','New Item');

//Create text node and append
li.appendChild(document.createTextNode('Hello World'));

//create new link element
const link = document.createElement('a');
//add classes
link.className =('delete-item secondary-content');
//Add icon html
link.innerHTML='<i class="fa fa-remove"></i>'

//append link into li
li.appendChild(link);

//append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);