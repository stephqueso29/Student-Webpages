//Initial References
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");

//Options values for buttons
let options = {
   'Disney Characters': ["Mickey Mouse", "Tinker Bell","Minnie Mouse","Belle","Cinderella","Rapunzel","Moana","Jasmine","Elsa","Ana","Steven","Olaf","Goofy","Tiana","Merida","Buzz Lightyear","Woody","Jessie","Tiger","Peter Pan", "Lighting McQueen", "Bo Peep", "Piglet", "Simba", "Cruella de Vil", "Evil Queen", "Alice", "Beast", "Aladdin", "Dumbo", "Gus", "Grumpy", "Daisy Duck", "Judy Hopps", "Jasmine", "Aurora", "Bambi", "Baymax", "Captain Hook", "Captain Jack Sparrow", "Captain Jack", "Chip 'n Dale", "Chip", "Goofy", "Evil Queen", "Gaston", "Genie", "Evie", "Lilo", "Lambie", "Kermit the Frog", "Mal", "Maleficient", "Maui", "Mushu", "Mulan", "Prince Eric", "Snow White", "Pascal", "Piglet", "Sven", "Tiana", "Sebastian", "Pluto", "Pua", "Flynn Rider", "Pocahontas", "Uma", "Ursula","Ant-Man","Black Panther","Black Widow","Captain America","Captain Marvel","Black Panther","Black Widow","Captain America","Captain Marvel","Doctor Strange","Drax","Gamora","Green Goblin","Groot","Hawkeye","Hulk","Iron Man","Rocket Raccoon","Scarlet Witch","Spider-Man","Star-Lord","Thanos","Thor","3 Peas-in-a-Pod","Aliens","Anger","Bailey","Bing Bong","Bruce","Bullseye","Buzz Lightyear","Carl","Cruz Ramirez","Disgust","Dory","Dug","Edna Mode","EVE","Fear","Hamm","Jack-Jack","Jackson Storm","Jessie","Joy","Lightning McQueen","Merida","Mike Wazowski","Mr. Incredible","Mrs. Incredible","Nemo","Rex","Russell","Sadness","Sea Otters","Squirt","Sulley","Woody"
     ],
  fruits: [
"Apple", "Banana", "Orange", "Strawberry", "Grapes", "Pineapple", "Mango", "Blueberry",  
"Watermelon", "Peach", "Cherry", "Pear", "Lemon", "Lime", "Raspberry", "Blackberry",  
"Kiwi", "Plum", "Coconut", "Pomegranate", "Grapefruit", "Apricot", "Avocado", "Cantaloupe",  
"Fig", "Guava", "Passionfruit", "Dragonfruit", "Papaya", "Cranberry", "Honeydew", "Mulberry",  
"Nectarine", "Tangerine", "Lychee", "Persimmon", "Gooseberry", "Starfruit", "Jackfruit", "Date"  
  ],
  animals: ["Hedgehog", "Rhinoceros", "Squirrel", "Panther", "Walrus", "Zebra", "Dog", "Cat", "Carlos", "Elephant", "Crocodile",
"Kangaroo", "Alligator", "Buffalo", "Armadillo", "Chameleon", "Giraffe", "Octopus", "Porcupine", "Flamingo", "Barracuda", "Pelican", "Tarantula",
"Penguin", "Anaconda", "Hippopotamus", "Jackal", "Antelope", "Caterpillar", "Woodpecker", "Scorpion", "Macaw", "Wolverine", "Salamander", "Cockatoo", "Mandrill", "Centipede", "Seahorse", "Chimpanzee", "Caribou", "Aardvark", "Peacock", "Grasshopper" , "Pancake", "Albatross", "Anglerfish", "Aphid", "Arowana", "Axolotl", "Baboon", "Badger", "Bald Eagle", "Bandicoot", "Barramundi", "Bat", "Beaver", "Bee", "Beluga", "Bison", "Blackbird", "Boa Constrictor", "Boar", "Bobcat", "Bonobo", "Budgerigar", "Buffalo", "Bull", "Bullfrog", "Butterfly", "Camel", "Cassowary", "Catfish", "Cheetah", "Chipmunk", "Clam", "Clownfish", "Cobra", "Cockroach", "Condor", "Coral", "Cormorant", "Cow", "Coyote", "Crab", "Crane", "Cuttlefish", "Dhole", "Dingo", "Dolphin", "Donkey", "Dormouse", "Dove", "Dragonfly", "Dromedary", "Duck", "Dugong", "Eagle", "Eel", "Echidna", "Eland", "Emu", "Falcon", "Ferret", "Firefly", "Fish", "Fox", "Frigatebird", "Frog", "Gazelle", "Gecko", "Gharial", "Goat", "Goldfish", "Gorilla", "Guinea Pig", "Haddock", "Hammerhead Shark", "Hare", "Hawk", "Heron", "Honey Badger", "Horse", "Human", "Hummingbird", "Huskie", "Hyaena", "Iguana", "Iriomote Cat", "Jaguar", "Jellyfish", "Kestrel", "Kingfisher", "Koala", "Koi Fish", "Kudu", "Lamb", "Lapwing", "Lark", "Lemming", "Lion", "Lobster", "Locust", "Lynx", "Manatee", "Maned Wolf", "Markhor", "Marmot", "Meerkat", "Mongoose", "Monkey", "Moose", "Mosquito", "Moth", "Narwhal", "Nightingale", "Numbat", "Ocelot", "Opossum", "Orangutan", "Ostrich", "Otter", "Owl", "Oyster", "Pangolin", "Parakeet", "Parrot", "Partridge", "Peafowl", "Pig", "Pigeon", "Piranha", "Platypus", "Polar Bear", "Puma", "Python", "Quail", "Quokka", "Rabbit", "Raccoon", "Ram", "Rat", "Raven", "Red Panda", "Reindeer", "Rhinoceros Beetle", "Robin", "Rottweiler", "Sawfish", "Sea Anemone", "Sea Lion", "Sea Urchin", "Shark", "Sheep", "Shrimp", "Skunk", "Snail", "Snake", "Sparrow", "Spider", "Squid", "Swan", "Tapir", "Termite", "Tiger", "Tortoise", "Toucan", "Turkey", "Turtle", "Vampire Bat", "Vulture", "Wasp", "Whale", "Wolf", "Wombat", "Yak", "Yellowjacket", "Zebu", "Zonkey"],
  countries: [
    "India", "Hungary", "Kyrgyzstan", "Switzerland", "Zimbabwe", "Dominica", "Philippines", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ],
};

//count
let winCount = 0;
let count = 0;

let chosenWord = "";

//Display option buttons
const displayOptions = () => {
  optionsContainer.innerHTML += `<h3>Please Select An Option</h3>`;
  let buttonCon = document.createElement("div");
  for (let value in options) {
    buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
  }
  optionsContainer.appendChild(buttonCon);
};

//Block all the Buttons
const blocker = () => {
  let optionsButtons = document.querySelectorAll(".options");
  let letterButtons = document.querySelectorAll(".letters");
  //disable all options
  optionsButtons.forEach((button) => {
    button.disabled = true;
  });

  //disable all letters
  letterButtons.forEach((button) => {
    button.disabled.true;
  });
  newGameContainer.classList.remove("hide");
};

//Word Generator
const generateWord = (optionValue) => {
  let optionsButtons = document.querySelectorAll(".options");
  //If optionValur matches the button innerText then highlight the button
  optionsButtons.forEach((button) => {
    if (button.innerText.toLowerCase() === optionValue) {
      button.classList.add("active");
    }
    button.disabled = true;
  });

  //initially hide letters, clear previous word
  letterContainer.classList.remove("hide");
  userInputSection.innerText = "";

  let optionArray = options[optionValue];
  //choose random word
  chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
  chosenWord = chosenWord.toUpperCase();

  //replace every letter with span containing dash
  let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');

  //Display each element as span
  userInputSection.innerHTML = displayItem;
};

//Initial Function (Called when page loads/user presses new game)
const initializer = () => {
  winCount = 0;
  count = 0;

  //Initially erase all content and hide letteres and new game button
  userInputSection.innerHTML = "";
  optionsContainer.innerHTML = "";
  letterContainer.classList.add("hide");
  newGameContainer.classList.add("hide");
  letterContainer.innerHTML = "";


 
  // Loop through ASCII values for A-Z (65-90) and create letter buttons
for (let i = 65; i <= 90; i++) {
  let button = document.createElement("button"); // Create a button element
  button.innerText = String.fromCharCode(i); // Convert ASCII to letter
  button.addEventListener("click", () => {
    handleGuess(button); // Call function when button is clicked
  });
  letterContainer.append(button); // Add button to letter container
}

// Create a button for space (ASCII 32)
let spaceButton = document.createElement("button");
spaceButton.innerText = "␣"; // Space character representation
spaceButton.addEventListener("click", () => {
  handleGuess(spaceButton); // Call function when space button is clicked
});
letterContainer.append(spaceButton); // Add space button to the container

// Function to handle letter guesses
const handleGuess = (button) => {
  let charArray = chosenWord.split(""); // Convert chosen word into an array of letters
  let dashes = document.getElementsByClassName("dashes"); // Get all dashes representing the word

  // Check if the clicked letter exists in the word OR if it's a space
  if (charArray.includes(button.innerText) || (button.innerText === "␣" && charArray.includes(" "))) {
    charArray.forEach((char, index) => {
      // If the character in the word matches the clicked button (including space)
      if (char === button.innerText || (char === " " && button.innerText === "␣")) {
        dashes[index].innerText = char; // Replace dash with the correct letter/space
        winCount += 1; // Increase win count

        // Check if the player has guessed all letters
        if (winCount == charArray.length) {
          resultText.innerHTML = `<h2 class='win-msg'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`;
          blocker(); // Disable further input
        }
      }
    });
  } else {
    count += 1; // Increase mistake count
    drawMan(count); // Draw the next part of the hangman figure

    // If the player reaches 6 mistakes, they lose
    if (count == 6) {
      resultText.innerHTML = `<h2 class='lose-msg'>You Lose!!</h2><p>The word was <span>${chosenWord}</span></p>`;
      blocker(); // Disable further input
    }
  }
  button.disabled = true; // Disable the clicked button to prevent repeat clicks
};

// Call function to display letter options and initialize canvas
displayOptions();
let { initialDrawing } = canvasCreator(); // Get the initial drawing function from canvas
initialDrawing(); // Draw the base of the hangman stand
};

//Canvas
const canvasCreator = () => {
  let context = canvas.getContext("2d");
  context.beginPath();
  context.strokeStyle = "#000";
  context.lineWidth = 2;

  //For drawing lines
  const drawLine = (fromX, fromY, toX, toY) => {
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
  };

  const head = () => {
    context.beginPath();
    context.arc(70, 30, 10, 0, Math.PI * 2, true);
    context.stroke();
  };

  const body = () => {
    drawLine(70, 40, 70, 80);
  };

  const leftArm = () => {
    drawLine(70, 50, 50, 70);
  };

  const rightArm = () => {
    drawLine(70, 50, 90, 70);
  };

  const leftLeg = () => {
    drawLine(70, 80, 50, 110);
  };

  const rightLeg = () => {
    drawLine(70, 80, 90, 110);
  };

  //initial frame
  const initialDrawing = () => {
    //clear canvas
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    //bottom line
    drawLine(10, 130, 130, 130);
    //left line
    drawLine(10, 10, 10, 131);
    //top line
    drawLine(10, 10, 70, 10);
    //small top line
    drawLine(70, 10, 70, 20);
  };

  return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
};

//draw the man
const drawMan = (count) => {
  let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
  switch (count) {
    case 1:
      head();
      break;
    case 2:
      body();
      break;
    case 3:
      leftArm();
      break;
    case 4:
      rightArm();
      break;
    case 5:
      leftLeg();
      break;
    case 6:
      rightLeg();
      break;
    default:
      break;
  }
};

//New Game
newGameButton.addEventListener("click", initializer);
window.onload = initializer;
