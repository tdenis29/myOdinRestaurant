
import './scss/input.scss';

function component() {
    const element = document.createElement('div');
    const text = document.createTextNode("Hello fromn Webpack")
    element.appendChild(text)
    // Lodash, now imported by this script
   
    element.classList.add('hello');
 
    return element;
  }
 
  document.body.appendChild(component());
  alert("It works!");