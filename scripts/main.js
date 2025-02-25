let confirmButton = document.querySelector(".confirm-search");

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
