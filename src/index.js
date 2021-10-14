import { pageLoad } from './page-load';
import { homeTab } from './tab1';
import './scss/input.scss';

// function component() {
//     const element = document.createElement('div');
//     const text = document.createTextNode("Hello fromn Webpack")
//     element.appendChild(text)
//     element.classList.add('hello');
//     return element;
//   }
  document.body.appendChild(pageLoad());
  document.body.appendChild(homeTab())
  // document.body.appendChild(component());
