// Write your code here!
const mainElement = document.getElementById('main');
mainElement.parentNode.removeChild(mainElement);

const newHeader = document.createElement('h1');
newHeader.textContent = 'Marcus is the champion';
newHeader.setAttribute('id', 'victory');