

const Initialize = () => {
    const content = document.getElementById("Content")
    console.log(content)

    content.appendChild(headerRender());
    content.appendChild(bodyRender());


}


const headerRender = () => {
    const header = document.createElement("div")
    header.classList.add("header")


    const resturantName = document.createElement("h1");
    resturantName.classList.add("resturant-name");
    resturantName.textContent = "Uncle Tony's Pizza";

    const navbar = document.createElement("div");
    navbar.classList.add("navbar")

    const homeButton = document.createElement("button");
    homeButton.textContent = "Home"
    homeButton.classList.add("Button")

    const menuButton = document.createElement("button");
    menuButton.textContent = "Menu"
    menuButton.classList.add("Button")

    const contactButton = document.createElement("button");
    contactButton.textContent = "Contact"
    contactButton.classList.add("Button")


    navbar.appendChild(homeButton);
    navbar.appendChild(menuButton);
    navbar.appendChild(contactButton);

    header.appendChild(resturantName);
    header.appendChild(navbar);

    return header
}

const bodyRender = () => {

    const body = document.createElement("div")
    body.classList.add("body")





    return body

}


export default Initialize;