import waves from './img/waves.svg'

import Menu from './Menu';
import About from './About';
import MainBody from './mainBody'


const Initialize = () => {
    const content = document.getElementById("Content")

    content.appendChild(headerRender());
    content.appendChild(curveRender());
    content.appendChild(MainBody());

}


const headerRender = () => {
    const content = document.getElementById("Content")
    const header = document.createElement("div")
    header.classList.add("header")


    const resturantName = document.createElement("h1");
    resturantName.classList.add("resturant-name");
    resturantName.textContent = "Uncle Tony's Pizza";

    const navbar = document.createElement("div");
    navbar.classList.add("navbar")

    var homeButton = document.createElement("button");
    homeButton.textContent = "Home"
    homeButton.classList.add("Button")
    homeButton.addEventListener('click', (e) => {
        clearPage()
        content.appendChild(MainBody())
    })

    var menuButton = document.createElement("button");
    menuButton.textContent = "Menu"
    menuButton.classList.add("Button")
    menuButton.addEventListener('click', (e) => {
        clearPage()
        content.appendChild(Menu())
    })

    var aboutButton = document.createElement("button");
    aboutButton.textContent = "About"
    aboutButton.classList.add("Button")
    aboutButton.addEventListener('click', (e) => {
        content.appendChild(clearPage())
        About()
    })


    navbar.appendChild(homeButton);
    navbar.appendChild(menuButton);
    navbar.appendChild(aboutButton);

    header.appendChild(resturantName);
    header.appendChild(navbar);

    return header
}

const curveRender = () => {
    const curve = document.createElement("div");

    const img = new Image();
    img.src = waves;

    curve.appendChild(img);


    return curve
}


function clearPage(){
    const body = document.querySelector(".bodyContent");
    try{
        body.remove();
    }catch{
        console.log("No Element to Delete")
    }

}



export default Initialize;