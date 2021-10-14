import Logo from './assets/tgdlogo.jpeg';

export const pageLoad = () => {
    let header = document.createElement('header');
    header.innerHTML = 
    `
    <header class="site-title">
        <img class="site-logo" src="${Logo}">
    <div class="tabs">
      
        <button id="tab1link" onclick="openTab(event, 'tab1')" class="tab-button activated">Home</button>
         
        <button id="tab2link" onclick="openTab(event, 'tab2')" class="tab-button">Menu</button>

        <button class="tab-button invisible"></button>

        <button id="tab3link" onclick="openTab(event, 'tab3')" class="tab-button">Contact</button>

        <button id="tab4link" onclick="openTab(event, 'tab3')" class="tab-button">Testimonal</button>
     
     </div>
    </header>
    `
    return header
};