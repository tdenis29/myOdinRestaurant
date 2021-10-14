import Restaurant from './assets/hobbiton.jpeg';

export const menuTab = () => {
    let tab2 = document.createElement('div');
    tab2.innerHTML = `
    <div class="tab2-content" style="background-image:
    linear-gradient(to bottom, rgba(248, 196, 77, .5), rgba(47, 114, 50, .5)),
    url('${Restaurant}');">
    <div id="tab2" class="tab2-container">
        <h2 class="menu-group-heading">Meals</h2>
        <div class="menu">

            <div class="menu-item">
                <div class="menu-item-text">
                    <h3 class="menu-item-title">Second Breakfast</h3>
                        <p>Rice Pudding and a side of nice, crispy, bacon</p>
                </div>
                <p>4 silver pennies</p>
            </div>

            <div class="menu-item">
                <div class="menu-item-text">
                    <h3 class="menu-item-title">Elevenses</h3>
                        <p>Lemon Tea cake</p>
                </div>
                <p>2 silver pennies</p>
            </div>

            <div class="menu-item">
                <div class="menu-item-text">
                    <h3  class="menu-item-title">Po-tay-toes</h3>
                        <p>Nice, golden chips with a nice piece of Fried fish</p>
                </div>
                <p>5 silver pennies</p>
            </div>

            <div class="menu-item">
                <div class="menu-item-text">
                    <h3 class="menu-item-title">Salted Pork?</h3>
                        <p>The finest bacon known from the Shire all the way to Isengard</p>
                </div>
                <p>6 silver pennies</p>
            </div>
         </div>
        </div>
    </div>
    `
    return tab2
}