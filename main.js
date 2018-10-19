/*** Object Constructors ***/
function Elephant(name, age) {
  this.name = name;
  this.age = age;
  this.image = "elephant.jpeg";
  this.type = "Elephant";
}

function Zebra(name, age) {
  this.name = name;
  this.age = age;
  this.image = "zebra.jpeg"
  this.type = "Zebra";
}

function Camel(name, age) {
  this.name = name;
  this.age = age;
  this.image = "camel.jpeg"
  this.type = "Camel";
}

/*** Global Variables ***/
var animals = [new Elephant(), new Zebra(), new Camel()];
var names = ["Ellie", "Zion", "Charles", "Toodles", "Ollie", "Sweetie", "Juno", "Venus", "Simba"];

/*** Functions ***/
// get a random index for an array from 0 to maxIndex (not inclusive)
function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

// generates either a Cat, Dog, or Bird with a random name and random age
function generateRandomAnimal() {
  var randomIdx = getRandomIndex(animals.length);
  var randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Elephant) 
  {
    return new Elephant(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Zebra) 
  {
    return new Zebra(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Camel) 
  {
    return new Camel(generateRandomName(), generateRandomAge());
  }
}

// generates a random name from list of names
function generateRandomName() {
  var randomIdx = getRandomIndex(names.length);
  return names[randomIdx];
}

// generates a random age from 0 to 5
function generateRandomAge() {
  var randomIdx = getRandomIndex(5);
  return randomIdx;
}

/*** Document Load ****/
$(document).ready(function() {

  // generate a random animal when the document opens
  var animal = generateRandomAnimal();
  // update the page based on the animal properties
  $("#animal-properties").text(animal.name + "  " + animal.age + "years old");
  $("#animal-img").attr("src", animal.image);

