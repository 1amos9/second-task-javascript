const teamAres = [
  {
    name: "Austin Tonayam",
    image: "img/austin.jpeg",
    bestFood: "spaghetti",
    complexion: "dark",
    thingsLearnt: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    bestMovie: "inglorious Basterds",
    age: 22,
    Track: " frontend (Beginner)",
  },

  {
    name: "Susan Mwende",
    image: "img/mwende.jpeg",
    bestFood: "chips and chicken",
    complexion: "dark-skinned",
    thingsLearnt: ["HTML", "CSS", "JS", "Bootstrap"],
    bestMovie: "The legend",
    age: 21,
  },

  {
    name: "Susan Chepkosgei",
    image: "img/Susan Chepkosgei.jpeg",
    bestFood: "pilau and chicken",
    complexion: "dark-skin",
    thingsLearnt: ["HTML", "CSS", "Bootstrap", "Git and Github", "JavaScript"],
    bestMovie: "the darkest mind",
    age: 22,
  },

  {
    name: "Amos thibault BIKARI",
    image: "img/clinton.jpeg",
    bestFood: "uburobe and ndagara",
    complexion: "Dark",
    thingsLearnt: ["HTML", "CSS", "Bootstrap", "Git and Github", "JavaScript"],
    bestMovie: "The SUITS",
    age: 22,
  },

  {
    name: "Igah Abiye",
    image: "img/igah abiye.jpeg",
    bestFood: "Ewa Ago and Bread",
    complexion: "Chocolate Black",
    thingsLearnt: ["HTML", "CSS", "Bootstrap", "Git and Github", "JavaScript"],
    bestMovie: "Halo",
    age: 21,
  },

  {
    name: "Aladesuru Oriyomi ",
    image: "img/dijah.jpeg",
    bestFood: "pounded yam and okro soup.",
    complexion: "Dark",
    thingsLearnt: ["HTML", "CSS", "Bootstrap", "Git and Github", "JavaScript"],
    bestMovie: "at the moment, Charmed",
    age: 23,
  },
];
// using the forEach method to loop through the array
teamAres.forEach((teamAres) => {
  console.log("name: " + teamAres.name);
  console.log("image: " + teamAres.image);
  console.log("best food: " + teamAres.bestFood);
  console.log("complexion: " + teamAres.complexion);
  console.log("things learnt: " + teamAres.thingsLearnt);
  console.log("best movie: " + teamAres.bestMovie);
  console.log("age: " + teamAres.age);
  console.log("=================================================");
});

// using the for loop below to loop through the array
// for (let i = 0; i < teamAres.length; i++) {
//   console.log(teamAres[i].name);
// }
var button1 = document.getElementById("amos thibault BIKARI");
var button2 = document.getElementById("Austin Tonayam");
var button3 = document.getElementById("Susan Mwende");
var button4 = document.getElementById("Susan Chepkosgei");
var button5 = document.getElementById("Igah Abiye");
var button6 = document.getElementById("Aladesuru Oriyomi");
button1.addEventListener("click", dosomething, false);
button2.addEventListener("click", dosomething, false);
button3.addEventListener("click", dosomething, false);
button4.addEventListener("click", dosomething, false);
button5.addEventListener("click", dosomething, false);
button6.addEventListener("click", dosomething, false);
function dosomething(e) {
  var clickedItem = e.target.id;
  alert(clickedItem);
}
