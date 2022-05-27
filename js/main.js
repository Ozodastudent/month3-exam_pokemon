var pokemons = [
  {
    id: 1,
    num: "001",
    name: "Bulbasaur",
    img: "http://www.serebii.net/pokemongo/pokemon/004.png",
    type: ["Grass", "Poison"],
    height: "0.71 m",
    weight: "6.9 kg",
    candy: "Bulbasaur Candy",
    candy_count: 25,
    egg: "2 km",
    spawn_chance: 0.69,
    avg_spawns: 69,
    spawn_time: "20:00",
    multipliers: [1.58],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    next_evolution: [
      {
        num: "000",
        name: "Ivysaur",
      },
      {
        num: "002",
        name: "Venusaur",
      },
    ],
  },
  {
    id: 2,
    num: "002",
    name: "Ivysaur",
    img: "http://www.serebii.net/pokemongo/pokemon/004.png",

    type: ["Grass", "Poison"],
    height: "0.99 m",
    weight: "13.0 kg",
    candy: "Bulbasaur Candy",
    candy_count: 100,
    egg: "Not in Eggs",
    spawn_chance: 0.042,
    avg_spawns: 4.2,
    spawn_time: "07:00",
    multipliers: [1.2, 1.6],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    next_evolution: [
      {
        num: "003",
        name: "Bulbasaur",
      },
      {
        num: "001",
        name: "Venusaur",
      },
    ],
  },
  {
    id: 3,
    num: "003",
    name: "Venusaur",
    img: "http://www.serebii.net/pokemongo/pokemon/004.png",

    type: ["Grass", "Poison"],
    height: "2.01 m",
    weight: "100.0 kg",
    candy: "Bulbasaur Candy",
    egg: "Not in Eggs",
    spawn_chance: 0.017,
    avg_spawns: 1.7,
    spawn_time: "11:30",
    multipliers: null,
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    next_evolution: [
      {
        num: "004",
        name: "Bulbasaur",
      },
      {
        num: "002",
        name: "Ivysaur",
      },
    ],
  },
  {
    id: 4,
    num: "004",
    name: "Charmander",
    img: "http://www.serebii.net/pokemongo/pokemon/004.png",

    type: ["Fire"],
    height: "0.61 m",
    weight: "8.5 kg",
    candy: "Charmander Candy",
    candy_count: 25,
    egg: "2 km",
    spawn_chance: 0.253,
    avg_spawns: 25.3,
    spawn_time: "08:45",
    multipliers: [1.65],
    weaknesses: ["Water", "Ground", "Rock"],
    next_evolution: [
      {
        num: "005",
        name: "Charmeleon",
      },
      {
        num: "003",
        name: "Charizard",
      },
    ],
  },
  {
    id: 5,
    num: "005",
    name: "Charmeleon",
    img: "http://www.serebii.net/pokemongo/pokemon/004.png",
    type: ["Fire"],
    height: "1.09 m",
    weight: "19.0 kg",
    candy: "Charmander Candy",
    candy_count: 100,
    egg: "Not in Eggs",
    spawn_chance: 0.012,
    avg_spawns: 1.2,
    spawn_time: "19:00",
    multipliers: [1.79],
    weaknesses: ["Water", "Ground", "Rock"],
    next_evolution: [
      {
        num: "006",
        name: "Charmander",
      },
      {
        num: "004",
        name: "Charizard",
      },
    ],
  },
  {
    id: 6,
    num: "006",
    name: "Charizard",
    img: "http://www.serebii.net/pokemongo/pokemon/004.png",
    type: ["Fire", "Flying"],
    height: "1.70 m",
    weight: "90.5 kg",
    candy: "Charmander Candy",
    egg: "Not in Eggs",
    spawn_chance: 0.0031,
    avg_spawns: 0.31,
    spawn_time: "13:34",
    multipliers: null,
    weaknesses: ["Water", "Electric", "Rock"],
    next_evolution: [
      {
        num: "007",
        name: "Charmander",
      },
      {
        num: "005",
        name: "Charmeleon",
      },
    ],
  },
  {
    id: 7,
    num: "007",
    name: "Squirtle",
    img: "http://www.serebii.net/pokemongo/pokemon/004.png",
    type: ["Water"],
    height: "0.51 m",
    weight: "9.0 kg",
    candy: "Squirtle Candy",
    candy_count: 25,
    egg: "2 km",
    spawn_chance: 0.58,
    avg_spawns: 58,
    spawn_time: "04:25",
    multipliers: [2.1],
    weaknesses: ["Electric", "Grass"],
    next_evolution: [
      {
        num: "008",
        name: "Wartortle",
      },
      {
        num: "006",
        name: "Blastoise",
      },
    ],
  },
  {
    id: 8,
    num: "008",
    name: "Wartortle",
    img: "http://www.serebii.net/pokemongo/pokemon/004.png",
    type: ["Water"],
    height: "0.99 m",
    weight: "22.5 kg",
    candy: "Squirtle Candy",
    candy_count: 100,
    egg: "Not in Eggs",
    spawn_chance: 0.034,
    avg_spawns: 3.4,
    spawn_time: "07:02",
    multipliers: [1.4],
    weaknesses: ["Electric", "Grass"],
    next_evolution: [
      {
        num: "009",
        name: "Squirtle",
      },
      {
        num: "008",
        name: "Blastoise",
      },
    ],
  },
];
var heroEl = document.querySelector(".box");
for (var i = 0; i < pokemons.length; i++) {
  var myCard = document.createElement("div");
  myCard.className = "box-card";

  var myImage = document.createElement("img");
  myImage.className = "card-img-top";
  (myImage.style.width = "157px"), (myImage.src = pokemons[i].img);
  myCard.appendChild(myImage);

  var myLine = document.createElement("div");
  myLine.className = "card-line";
  myCard.appendChild(myLine);
  var myCardTitle = document.createElement("h5");
  myCardTitle.className = "card-title";
  myCardTitle.textContent = pokemons[i].name;
  myCard.appendChild(myCardTitle);

  var myCardText = document.createElement("p");
  myCardText.className = "card-text";
  myCardText.textContent = pokemons[i].type;
  myCard.appendChild(myCardText);

  var myCardInfo = document.createElement("p");
  myCardInfo.className = "card-link";
  myCardInfo.textContent = pokemons[i].height;
  myCard.appendChild(myCardInfo);

  var myCardSecInfo = document.createElement("p");
  myCardSecInfo.className = "card-link";
  myCardSecInfo.textContent = pokemons[i].weight;
  myCard.appendChild(myCardSecInfo);

  var myCardEggInfo = document.createElement("p");
  myCardEggInfo.className = "card-info";
  myCardEggInfo.textContent = pokemons[i].egg;
  myCard.appendChild(myCardEggInfo);

  heroEl.appendChild(myCard);
}
