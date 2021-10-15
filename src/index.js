import { pageLoad } from './page-load';
import { createTabContent } from './tabContent';
import { homeTab } from './tab1';
import { menuTab } from './tab2';
import './scss/input.scss';

document.addEventListener('DOMContentLoaded', function() {
  
  const content = document.getElementById('content')

  content.appendChild(pageLoad())

  content.appendChild(createTabContent())

  const tabContent = document.getElementById('appendContent')

  tabContent.appendChild(homeTab());

}, false)






