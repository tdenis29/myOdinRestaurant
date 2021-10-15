import Chicken from './assets/medievalchicken.jpeg';
import Beer from './assets/Beer.jpeg';
import Stew from './assets/beefstew.jpeg';
import Outside from './assets/outsidetgd.jpeg'


export const homeTab = () => {
    let tab1 = document.createElement('div');
    tab1.innerHTML = `
    <div id="tab1" class="tab1-content" style="background-image:
    linear-gradient(to bottom, rgba(248, 196, 77, .5), rgba(47, 114, 50, .5)),
    url('${Outside}');">
    <div id="tab1" class="tab1-container">
        <div class="tab1-header">
         <h1>Welcome To The Green Dragon Inn <br> Finest Ales in the Shire!</h1>
        </div>
    </div>

    <div class="tab1-body">
        <p class="tab1-text">Here at the Green Dragon Inn, we have the finest pipe-weed and salted pork west of Bree!</p>
    </div>

    <button class="tab1-cta">Menu</button>

    <div class="tab1-img-bar">
        <img class="tab1-dish-preview" src="${Stew}">
        <img class="tab1-dish-preview" src="${Beer}">
        <img class="tab1-dish-preview" src="${Chicken}">
    </div>
    </div>
</div
    `
    return tab1
}