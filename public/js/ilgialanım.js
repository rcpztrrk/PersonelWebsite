const apiKey = '39589b35ac8c4657a7c3e543534e6bed'; 

// Rastgele sayfa numarası oluştur (1 ile 10 arasında)
const randomPage = Math.floor(Math.random() * 10) + 1;

// API çağrısını güncelle (her defasında farklı sayfa seçiyoruz)
const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}&page_size=50&page=${randomPage}&ordering=-rating`;

async function fetchGames() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayGames(data.results);
    } catch (error) {
        console.error("API'den veri çekme hatası:", error);
    }
}

function getScoreColor(score) {
    if (!score) return "#ccc";
    if (score >= 80) return "#2ecc71";
    if (score >= 60) return "#f39c12";
    return "#e74c3c";
}

function displayGames(games) {
    const gamesContainer = document.getElementById("games");
    gamesContainer.innerHTML = "";

    games.forEach(game => {
        const gameElement = document.createElement("div");
        gameElement.classList.add("game-item");

        gameElement.innerHTML = `
            <img src="${game.background_image}" alt="${game.name}">
            <h3>${game.name}</h3>
            <p>Platformlar: ${game.platforms.map(p => p.platform.name).join(", ")}</p>
            <p style="color: ${getScoreColor(game.metacritic)}">Metacritic Puanı: ${game.metacritic || "N/A"}</p>
        `;

        gamesContainer.appendChild(gameElement);
    });
}

fetchGames();
