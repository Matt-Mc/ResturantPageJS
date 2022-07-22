

const Menu = () => {
    const body = document.createElement("div");
    body.classList.add("bodyContent");

    const Menubar = document.createElement("div");
    Menubar.classList.add("Menubar")


    const PepperoniHolder = document.createElement("div");
    PepperoniHolder.classList.add("PepperoniHolder");

    const Pepperoni = document.createElement("h2");
    Pepperoni.classList.add("PepperoniPizza")
    Pepperoni.textContent = "Pepperoni Pizza"

    const PepperoniPrice = document.createElement("h2");
    PepperoniPrice.textContent = "...15$"


    PepperoniHolder.appendChild(Pepperoni)
    PepperoniHolder.appendChild(PepperoniPrice)



    const CheeseHolder = document.createElement("div");
    CheeseHolder.classList.add("CheeseHolder");

    const Cheese = document.createElement("h2");
    Cheese.classList.add("CheesePizza")
    Cheese.textContent = "Cheese Pizza"

    const CheesePrice = document.createElement("h2");
    CheesePrice.textContent = "...13$"


    CheeseHolder.appendChild(Cheese)
    CheeseHolder.appendChild(CheesePrice)


    Menubar.appendChild(PepperoniHolder)
    Menubar.appendChild(CheeseHolder)

    body.appendChild(Menubar)

    return body
}

export default Menu;