import { pageLoad } from './page-load';
import { createTabContent } from './tabContent';
import { homeTab } from './tab1';
import { menuTab } from './tab2';
import { contactTab } from './tab3';
import { testiTab } from './tab4';
import { footerTab } from './footer';
import './scss/input.scss';


document.addEventListener('DOMContentLoaded', function() {
  
  const content = document.getElementById('content')

  content.appendChild(pageLoad())

  content.appendChild(createTabContent())

  content.appendChild(footerTab())

  const tabContent = document.getElementById('appendContent')

  tabContent.appendChild(homeTab());

}, false)

document.addEventListener("DOMContentLoaded", () => {
    const tabContent = document.getElementById('appendContent');
    let tabs = document.getElementsByClassName('tab-button');
    let tabsArray = Array.from(tabs);
    tabsArray.forEach(tab => {
      tab.addEventListener('click', (e) => {
        if (e.target.textContent === "Home") {
          tabContent.innerHTML = "";
          tabContent.appendChild(homeTab())
        } else if (e.target.textContent === "Menu") {
          tabContent.innerHTML = "";
          tabContent.appendChild(menuTab());
        } else if (e.target.textContent === "Contact"){
          tabContent.innerHTML = "";
          tabContent.appendChild(contactTab());
        } else if (e.target.textContent === "Testimonial"){
          tabContent.innerHTML = "";
          tabContent.appendChild(testiTab())
        }
      });
    });
  })






