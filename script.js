console.log("JS loaded");

const searchBar = document.getElementById("searchBar");
const cards = document.querySelectorAll(".card");

searchBar.addEventListener("keyup", () => {
    const value = searchBar.value.toLowerCase();

    cards.forEach(card => {
        const name = card.querySelector("h2").textContent.toLowerCase();
        const category = card.dataset.category.toLowerCase();

        if (name.includes(value) || category.includes(value)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
});