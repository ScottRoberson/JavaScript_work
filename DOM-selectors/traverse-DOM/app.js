let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

//Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val=list.childNodes[0].nodeType;


//Get children element nodes 
val = list.children;
val = list.children[1];
val = list.children[1].textContent='Hello';

//Children of children 
val = list.children[3].children[0];

//First child
val=list.firstChild;
val = list.firstElementChild;

//Last child
val=list.lastChild;
val = list.lastElementChild;

//Count child elements
val = list.childElementCount;

//Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;

//Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSiblinggit;



console.log(val);