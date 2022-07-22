import pizzapic from './img/peppizza.jpeg'

const mainBody = () => {

    const body = document.createElement("div");
    body.classList.add("bodyContent");

    const title = document.createElement("h1");
    title.classList.add("bodyTitle")

    title.textContent = "Best Pizza In Town";

    const img = new Image();
    img.src = pizzapic;
    img.classList.add("pizzaphoto");

    const ordernow = document.createElement("p");
    ordernow.classList.add("orderPrompt")
    ordernow.textContent = "Order Now!"


    body.appendChild(title);
    body.appendChild(img);
    body.appendChild(ordernow);


    return body
}


export default mainBody;