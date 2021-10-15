import Shire from "./assets/j7sqe79kt2l51.jpeg";
import Locator from "./assets/placeholder.png";

export const contactTab = () => {
    let tab3 = document.createElement('div');
    tab3.innerHTML = `
    <div class="tab3-content" style="background-image: url(${Shire});">
    <div class="tab3-container">
        <div class="contact-header">
            <h1>Contact</h1>
            <p class="contact-blurb">Home is where the Hobbit is!</p>
        </div>
        <div class="contact-map-container">
            <img class="contact-map" src="${Locator}">
        </div>
    </div>
</div>
</div>
    `
    return tab3
}