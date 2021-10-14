import { pageLoad } from './page-load';
import { homeTab } from './tab1';
import { menuTab } from './tab2';

import './scss/input.scss';


  document.body.appendChild(pageLoad())
  document.body.appendChild(homeTab())
  document.body.appendChild(menuTab())
