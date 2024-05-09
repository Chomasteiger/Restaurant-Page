const contact = () => {

    const content = document.querySelector("#content");

    const mainContent = document.createElement("div");
    mainContent.classList.add("main-content");

    const heading = document.createElement("h1");
    heading.innerText = "Contact";

    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info");
    contactInfo.innerHTML = `
        <h2>Horario</h2>
        <div class="space-between">
            <ul>
                <li>Lunes a viernes</li>
                <li>Sabados</li>
                <li>Domingos</li>
            </ul>
            <ul>
                <li>16:00 - 23:30</li>
                <li>10:30 - 23:00</li>
                <li>All day!</li>
            </ul>
        </div>
        <h2>Dirección</h2>
        <p>Av. Eva Perón 2041</p>
        <p>Temperley, Provincia de Buenos Aires</p>
        <h2>Telefono</h2>
        <p>1136558722</p>
    `

    mainContent.appendChild(heading);
    mainContent.appendChild(contactInfo);
    content.appendChild(mainContent);
}

export default contact;