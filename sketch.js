let sentences = [
  "The quick brown fox jumps over the lazy dog every morning, but today was different. The dog was awake and barked at the fox, causing it to run away.",
  "The sun was shining bright, birds were chirping, and the air was filled with the sweet fragrance of flowers. It was the perfect day for a picnic in the park.",
  "She walked down the aisle, her heart racing with excitement as she approached the man waiting for her at the end. He smiled at her and took her hand, and they walked off into the sunset.",
  "The city was bustling with people, cars honking, and sirens blaring. But amidst all the chaos, there was a sense of peace in knowing that everyone was doing their own thing and going about their own business.",
  "The sky was painted with hues of orange and red as the sun set behind the mountains. The clouds looked like they were on fire, and the reflection of the sun on the lake was breathtaking.",
  "He stood at the edge of the cliff, looking out at the vast ocean stretching before him. The sound of the waves crashing against the rocks below was soothing, and he felt at peace.",
  "She was lost in thought as she gazed out the window, watching the rain pour down in sheets. The sound of the raindrops hitting the glass was like music to her ears, and she felt content.",
  "The forest was a symphony of sounds, with the chirping of crickets, the rustling of leaves, and the occasional hoot of an owl. It was a peaceful escape from the noise of the city.",
  "He sat at the piano, his fingers moving effortlessly over the keys. The music was like a therapy for him, and he felt at ease as he played.",
  "She was surrounded by books, the smell of old pages filling her nostrils. The library was her sanctuary, and she felt at home among the shelves of books.",
  "The stars were shining bright in the night sky, twinkling like diamonds against the black canvas. He lay on the grass, looking up at the sky, feeling small yet a part of something so much bigger.",
  "She was hiking through the mountains, the sound of her footsteps echoing against the rocky terrain. The view from the top was worth the climb, and she felt a sense of accomplishment as she gazed out at the vast expanse before her.",
  "The beach was deserted, the only sound coming from the waves crashing against the shore. She sat in the sand, feeling the warmth of the sun on her skin, and breathed in the salty air.",
  "The flowers in the garden were in full bloom, their colorful petals reaching for the sky. The air was filled with their sweet fragrance, and she felt at peace as she walked among the blooms.",
  "He was playing catch with his son, their laughter ringing out across the park. The sound of his son's joy was like music to his ears, and he felt grateful for this moment of pure happiness.",
  "She was sitting on the bench, watching the world go by. People walked past her, going about their day, and she felt a sense of comfort in the rhythm of life.",
  "The fire in the fireplace was crackling, casting shadows on the walls. The sound of the logs popping was like a lullaby, and she felt cozy and warm as she sat on the couch.",
  "It is our choices, Harry, that show what we truly are, far more than our abilities.",
  "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends",
  "We do not need magic to change the world, we carry all the power we need inside ourselves already; we have the power to imagine better.",
  "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",
];
let x = sentences[Math.floor(Math.random() * sentences.length)];
let y = "";
let time = false;
let start = true;
let elapsedTime = 0;
let wrongCount = 0;
let colour = "#809bce";
let wpm = 0;
let accuracy = 0;
function setup() {
  createCanvas(800, 800);
}

function draw() {
  textFont("Work Sans");
  background(colour);
  fill("#fdffbf");
  rect(10, 400, 780, 390, 10);
  fill("black");
  //text for timer
  timer();
  textSize(50);
  text(elapsedTime, 400, 100);

  //text for passage
  textSize(30);
  textWrap(WORD);
  text(x, 10, 150, 780, 280);

  //text for input
  textAlign(LEFT);
  fill("black");
  text(y + "|", 15, 405, 790, 280);
  checkKey();
}

function timer() {
  //start timer
  if (frameCount % 60 == 0 && time == true) {
    elapsedTime += 1;
  }
}

function checkKey() {
  for (let i = 0; i < y.length; i++) {
    //check if key is correct
    if (x[i] == y[i]) {
      colour = "#77DD77";
    }
    //check if key is wrong
    else {
      colour = "#ff686b";
    }
    //check if game is over
    if (y.length == x.length && elapsedTime > 0) {
      //start = false;
      time = false;
      fill("#b8e0d2");
      rect(0, 0, 1000, 1000);
      //compare input to passage, count wrong chars
      for (let j = 0; j < x.length; j++) {
        if (x[j] != y[j]) {
          wrongCount += 1;
        }
      }
      //text for wpm
      fill("black");
      textSize(40);
      textAlign(CENTER);

      if (start) {
        wpm = ceil(x.length / 5 / (elapsedTime / 60));
        accuracy = ceil(((x.length - wrongCount) / x.length) * 100);
        start = false;
      }

      text("Final Score: " + (wpm * accuracy) / 100, 400, 300);
      text("WPM: " + wpm, 400, 200);
      text("Accuracy: " + accuracy + "%", 400, 250);
      //text for restart
      text("Left click to restart", 400, 500);
    }
  }
}

window.addEventListener("mousedown", () => {
  start = true;
  time = false;
  colour = "#809bce";
  y = "";
  elapsedTime = 0;
  wrongCount = 0;
  wpm = 0;
  accuracy = 0;
  x = sentences[Math.floor(Math.random() * sentences.length)];
});

function keyPressed() {
  //check if key is valid
  if (
    'qwertyuiopasdfghjklzxcvbnm QWERTYUIOPASDFGHJKLZXCVBNM,.?!:";()1234567890%$&'.includes(
      key
    ) &&
    start == true
  ) {
    //start timer
    time = true;
    //add key to input
    y += key;
  }
  //check if backspace is pressed
  else if (key === "Backspace") {
    //remove last char
    y = y.slice(0, -1);
  }
}
