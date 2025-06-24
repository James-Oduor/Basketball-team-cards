const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const myFavoriteBasketballTeam = {
  team: "Hoops For Kids",
  sport: "Basketball",
  year: 2025,
  headCoach: {
    coachName: "Bryan",
  },
  players: [
    {
      name: "Vincent Omondi",
      position: "pointguard",
      number: 8,
      isCaptain: false,
      nickname: "VinnieIrving",
    },
    {
      name: "George Ashley",
      position: "bigman",
      number: 11,
      isCaptain: false,
      nickname: null,
    },
     {
      name: "James Oduor",
      position: "pointguard",
      number: 6,
      isCaptain: false,
      nickname: "Jemo",
    },
    {
      name: "Cosmas Odipo",
      position: "bigman",
      number: 5,
      isCaptain: false,
      nickname: "De Blocker",
    },
    {
      name: "Moses Ochieng",
      position: "pointguard",
      number: 7,
      isCaptain: false,
      nickname: "Ochibo",
    },
    {
      name: "Kevin Omondi",
      position: "bigman",
      number: 4,
      isCaptain: false,
      nickname: "Kevo",
    },
    {
      name: "Reagan Ochieng",
      position: "bigman",
      number: 10,
      isCaptain: false,
      nickname: "Dancan",
    },
    {
      name: "Sthandrid Barrack",
      position: "smallforward",
      number: 12,
      isCaptain: false,
      nickname: "Chari Chair",
    },
    {
      name: "Solomon Odhiambo",
      position: "smallforward",
      number: 15,
      isCaptain: false,
      nickname: "Solo",
    },
    {
      name: "Anthony Odhiambo",
      position: "shooter",
      number: 8,
      isCaptain: false,
      nickname: "Tony",
    },
    {
      name: "Byron Brandon",
      position: "shooter",
      number: 13,
      isCaptain: false,
      nickname: "Baroda",
    },
    {
      name: "Derrick Otieno",
      position: "shooter",
      number: 9,
      isCaptain: true,
      nickname: "Derro",
    },
  ],
};

Object.freeze(myFavoriteBasketballTeam);
const { sport, team, year, players } = myFavoriteBasketballTeam;
const { coachName } = myFavoriteBasketballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({ name, position, number, isCaptain, nickname }) => {
        return `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      ` }
    )
    .join("");
};

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
    case "pointguard":
      setPlayerCards(players.filter((player) => player.position === "pointguard"));
      break;
    case "shooter":
      setPlayerCards(
        players.filter((player) => player.position === "shooter")
      );
      break;
    case "powerforward":
  setPlayerCards(
    players.filter((player) => player.position === "powerforward")
  );
  break;
      break;
    case "bigman":
      setPlayerCards(
        players.filter((player) => player.position === "bigman")
      );
      break;

default:
    
    setPlayerCards();
    break;

  }
});