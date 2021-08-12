let fortunes = ['It is certain.',
  'It is decidedly so.',
  'Reply hazy try again.',
  'Cannot predict now.',
  'My sources say yes.'
]

let button = document.getElementById('fortuneButton');
let fortune = document.getElementById('fortune');

function fortuneSelector(){
  let randomFortune = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomFortune];
}

function showFortune(){
  fortune.innerHTML = fortuneSelector();
  button.innerHTML = 'Thank you!';
  button.style.cursor = 'default';

  //add your code here
button.removeEventListener('click', showFortune);
}

button.addEventListener('click', showFortune);