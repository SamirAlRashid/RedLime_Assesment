const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow = "0 10px 25px rgba(37,99,235,.3)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "0 5px 15px rgba(0,0,0,.1)";

    });

});