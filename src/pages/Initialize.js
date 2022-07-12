

const Initialize = () => {
    const content = document.getElementById("Content")
    console.log(content)

    content.appendChild(headerRender());


}


const headerRender = () => {
    const header = document.createElement("div")
    header.classList.add("header")


    const resturantName = document.createElement("h1");
    resturantName.classList.add("resturant-name");
    resturantName.textContent = "Uncle Tony's";

    const navbar = document.createElement("div");
    navbar.classList.add("navbar")

    const homeButton = document.createElement("button");
    homeButton.classList.add("Button")

    const menuButton = document.createElement("button");
    menuButton.classList.add("Button")

    const contactButton = document.createElement("button");
    contactButton.classList.add("Button")


    navbar.appendChild(homeButton);
    navbar.appendChild(menuButton);
    navbar.appendChild(contactButton);

    header.appendChild(resturantName);
    header.appendChild(navbar);

    return header
}

const bodyRender = () => {


}


export default Initialize;