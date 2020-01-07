const pokemonData = require("./pokemon");
const { appendFileSync } = require("fs");
const html = [
  '<div class="pokemon">\n<h3 class="pokemonName">',
  '</h3>\n<img\nsrc="',
  '" alt="Bulbasaur.image"\n/>\n<p class="description">',
  "</p>\n</div>\n"
];

const writeHtml = () => {
  pokemonData.forEach(pokemon => {
    const pokemonBlock =
      html[0] +
      pokemon.name +
      html[1] +
      pokemon.art_url +
      html[2] +
      pokemon.description +
      html[3];
    appendFileSync("scriptGenHtml.html", pokemonBlock, "utf8");
  });
};

writeHtml();
