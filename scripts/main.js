let confirmButton = document.querySelector(".confirm-search");
let italianButton = document.querySelector(".italian");
let englishButton = document.querySelector(".english");
let spanishButton = document.querySelector(".spanish");
let frenchButton = document.querySelector(".french");

confirmButton.addEventListener("click", () => {
    let searchInput = document.querySelector(".searchbar-input");
    let searchValue = searchInput.value;
    let searchUrl = `https://api.jikan.moe/v4/anime?q=${searchValue}`;
    
    fetch(searchUrl).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });
});

