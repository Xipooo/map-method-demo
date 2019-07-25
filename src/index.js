

function viewAcronyms() {
  var acronymsElement = document.getElementById("acronymsOutput");

  // Demo Code
  var acronyms = ["lol", "ttyl", "rofl", "lmao", "brb"];

  // Long Way
  var acronymsInCaps = [];
  for (let acr of acronyms) {
    acronymsInCaps.push(acr.toUpperCase());
  }

  //// Map method way
  // var acronymsInCaps = acronyms.map(acr => acr.toUpperCase());

  // Expected output: LOL, TTYL, ROFL, LMAO, BRB
  acronymsElement.innerHTML = acronymsInCaps.join(", ");
}

function viewGreetings() {
  var greetingsElement = document.getElementById("greetingsOutput");

  // Solve as team
  var names = ["Pam", "Dina", "Tom", "Joe"];
  var greetings = [];

  // Expected output: Hello Pam. Hello Dina. Hello Tom. Hello Joe.
  greetingsElement.innerHTML = greetings.join(". ") + ".";
}

function viewIngredients() {
  var ingredientsElement = document.getElementById("ingredientsOutput");

  //// Solve on own
  var ingredients = ["Sugar", "Salt", "Flour", "Vanilla"];
  var ingredientsHTML = [];

  // Expected output:
  // * Sugar
  // * Salt
  // * Flour
  // * Vanilla
  ingredientsElement.innerHTML = ingredientsHTML.join("");
}

function clear() {
  document.getElementById("acronymsOutput").innerHTML = "";
  document.getElementById("greetingsOutput").innerHTML = "";
  document.getElementById("ingredientsOutput").innerHTML = "";
}

document.getElementById("viewAcronyms").onclick = viewAcronyms;
document.getElementById("viewGreetings").onclick = viewGreetings;
document.getElementById("viewIngredients").onclick = viewIngredients;
document.getElementById("clear").onclick = clear;