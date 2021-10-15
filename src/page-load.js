import Logo from './assets/tgdlogo.jpeg';

export const pageLoad = () => {
    let header = document.createElement('header');
    header.classList.add('site-title')
    header.innerHTML = 
    `
        <img class="site-logo" src="${Logo}">
    <div class="tabs">
      
        <button id="tab1link" class="tab-button activated">Home</button>
         
        <button id="tab2link" class="tab-button">Menu</button>

        <button class="tab-button invisible"></button>

        <button id="tab3link" class="tab-button">Contact</button>

        <button id="tab4link" class="tab-button">Testimonial</button>
     
     </div>
    </header>
    `   
    return header
};