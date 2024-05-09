const menu = () => {
    const content = document.querySelector("#content");

    const mainContent = document.createElement("div");
    mainContent.classList.add("main-content");

    const heading = document.createElement("h1");
    heading.innerText = 'Menu';

    const milanesasContent = document.createElement("div");
    milanesasContent.classList.add("Milanesas-content");
    milanesasContent.innerHTML = `
        <h2>Milanesas</h2>
        <div class="space-between">
            <ul>
                <li>Milanesa de pollo</li>
                <li>Milanesa de carne</li>
            </ul>
            <ul>
                <li>$8.000</li>
                <li>$8.000</li>
            </ul>
        </div>
        <h2>Pizza</h2>
        <div class="space-between">
            <ul>
                <li>Margarita</li>
                <li>Napolitana</li>
            </ul>
            <ul>
                <li>$5.000</li>
                <li>$5.000</li>
            </ul>
        </div>
        <h2>Bebidas</h2>
        <div class="space-between">
            <ul>
                <li>Coca-Cola</li>
                <li>Agua</li>
            </ul>
            <ul>
                <li>$2.000</li>
                <li>$1.000</li>
            </ul>
        </div>
        `;

        mainContent.appendChild(heading);
        mainContent.appendChild(milanesasContent);
        content.appendChild(mainContent);
}

export default menu