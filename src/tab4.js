import Bagend from "./assets/bagend.jpg"
export const testiTab = () => {
    let tab4 = document.createElement('div');
    tab4.innerHTML = `
    <div class="tab4-content" style="background-image: linear-gradient(to bottom, rgba(248, 196, 77, .5), rgba(47, 114, 50, .5)),
    url(${Bagend});">
        <div class="tab4-container">
            <h4 class="testi">A Hobbit's Testimonial</h4>
            <p class="hobbit-song">
                "Oh you can search far and wide,<br>
                You can drink the whole town dry, <br>
                But you'll never find a beer so brown, <br>
                As the one we drink in our hometown, <br>

                You can drink your fancy ales, <br>
                You can drink them by the flagon, <br> 
                But the only brew for the brave and true... <br>
                ..Comes from the Green Dragon!" <br>
            </p>
        </div>
    </div>
    `
    return tab4
}