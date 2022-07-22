const About = () => {


    const body = document.createElement("div");
    body.classList.add("bodyContent");




    const AboutHolderTitle = document.createElement("div");
    AboutHolderTitle.classList.add("AboutHolderTitle");

    const AboutTitle = document.createElement("h1");
    AboutTitle.textContent = "Come in and get a steaming hot pie!"

    const AboutDesc = document.createElement("h2");
    AboutDesc.textContent = "59 Cameron St, Toronto, ON M5T 2H1"

    AboutHolderTitle.appendChild(AboutTitle)
    AboutHolderTitle.appendChild(AboutDesc)





    const AboutHolderPhone = document.createElement("div");
    AboutHolderPhone.classList.add("AboutHolderPhone");

    const AboutPhone = document.createElement("h1");
    AboutPhone.textContent = "Order Now:"

    const AboutPhoneDesc = document.createElement("h2");
    AboutPhoneDesc.textContent = "666-123-4567"

    AboutHolderPhone.appendChild(AboutPhone)
    AboutHolderPhone.appendChild(AboutPhoneDesc)



    

    body.appendChild(AboutHolderTitle)
    body.appendChild(AboutHolderPhone)

    return body
}

export default About;