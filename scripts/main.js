let italianButton = document.querySelector(".italian");
let englishButton = document.querySelector(".english");
let spanishButton = document.querySelector(".spanish");
let frenchButton = document.querySelector(".french");

let confirmButton = document.querySelector(".confirm-search");

let animeImg = document.querySelector(".anime-img");
let animeTitleH1 = document.querySelector(".h1-anime-title");
let animeStudioH3 = document.querySelector(".h3-anime-studio");
let animeEpisodesH4 = document.querySelector(".h4-anime-episodes");
let animeGenreH4 = document.querySelector(".h4-anime-genre");
let animeVotingH4 = document.querySelector(".h4-anime-voting");
let animePlotP = document.querySelector(".anime-plot-p");

animeImg.src = "assets/img/placeholder.png";

confirmButton.addEventListener("click", () => {
    animeStudioH3.innerHTML = "Studio: ";
    animeEpisodesH4.innerHTML = "Episodes: ";
    animeGenreH4.innerHTML = "Genre: ";
    animeVotingH4.innerHTML = "Voting: ";

    let searchInput = document.querySelector(".searchbar-input");
    let searchValue = searchInput.value;
    let searchUrl = `https://api.jikan.moe/v4/anime?q=${searchValue}`;
    
    fetch(searchUrl).then((response) => {
        return response.json();
    }).then((data) => {
        animeImgURL = data["data"][0]["images"]["jpg"]["large_image_url"]
        animeTitle = data["data"][0]["title_english"];
        animeStudio = data["data"][0]["studios"][0]["name"];
        animeEpisodes = data["data"][0]["episodes"]
        animeGenre = data["data"][0]["genres"][0]["name"];
        animeVoting = data["data"][0]["score"];
        animePlot = data["data"][0]["synopsis"];
    }).catch((error) => {
        console.log(error);
    });

    animeImg.src = animeImgURL;
    animeTitleH1.innerHTML = animeTitle;
    animeStudioH3.innerHTML += animeStudio;
    animeEpisodesH4.innerHTML += animeEpisodes;
    animeGenreH4.innerHTML += animeGenre;
    animeVotingH4.innerHTML += animeVoting;
    animePlotP.innerHTML = animePlot;
});
