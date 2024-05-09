const home = () => {

    const content = document.querySelector("#content");

    const mainContent = document.createElement("div");
    mainContent.classList.add("main-content");

    const heading = document.createElement("h1");
    heading.innerText = "Amplio menu, bebidas y mucho mas!!";

    const lineBreak = document.createElement("p");
    lineBreak.innerHTML = '&nbsp';

    const homepageInfo = document.createElement("p");
    homepageInfo.innerHTML = `<p>Canchas de futbol y Resto Bar!</p>
    `;

    mainContent.appendChild(heading);
    mainContent.appendChild(homepageInfo);
    content.appendChild(mainContent);
}

export default home;