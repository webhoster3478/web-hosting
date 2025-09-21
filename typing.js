// set up text to print, each item in array is a new line
var aText = new Array(
"To my girl,", 
"🥳 Happy birthday paruzzzaaaa..., finally turn's 18 year's old. Our new adventure begins here paru. The new opportunities, new challenges, new problems and collage life, new friends. new places, new strangers everything is upcoming. At the end of the day you can unload on me , I'm here for you dear.(I know babe you don't like to open up , it's okey babe I'll understand chello... , I’m here whenever you feel ready to share babe and I do respect your boundaries babe) you can feel free & call/text me anytime dear I'm all ears.",
"And one thing babe I have to talk about babe, some boundaries are limit us from being true-self's Be cations & careful about what you put as boundaries babe. {Don't get me wrong dear, I mean about bad boundaries like for eg: 'letting people speak to you disrespectfully' or 'Always saying `Yes`'}.👀",
" ",
"I know this is kinda weird letter , this is the first time I write a letter and I don't know how write a letter but this I one I write for you dear, I start writing with the things comes up in my mind and I keep with that flow. I hope you like this way of birthday wish babe..",
" ",
"Once again Happy Birthday my girl, wishing you many many returns of the day dear. I have many things have talk babe, It's okey babe I'll understand the situation babe. study well babe I'll be here chello. If I am writing like this maybe this web page is not enough to express all dear. So see yaa wifeyyyyy... 💖",
" ",
"I love you as always dii penne....💕 & I miss you sooooooo much parutty.🥺",
" ",
"take care my girl and remember to 🫗 drink water dear.",
" ",
"Let's talk soon honey ✨.",
" ",
"with all my love 🫀,",
"by zayn."
);

// config / state
var iSpeed    = 100;    // time delay of print out (ms per character)
var iIndex    = 0;      // which line in aText we are on
var iArrLength = aText[0].length;;         // length of current line (we'll set this later)
var iScrollAt  = 20;    // not used in small examples, kept from original
var iTextPos   = 0;     // position inside the current string
var sContents  = '';    // accumulated content to show above current line
var iRow;               // helper for scrolling
var timerId    = null;  // holds timeout id while typing
var typing     = false; // flag to prevent double-starts

// DOM elements (filled after DOM loaded)
var destination = null;
var startBtn    = null;

// The main typewriter step function (same logic as your original)
function typewriter() {
  // guard: if no destination (shouldn't happen) stop
  if (!destination) return;

  sContents = ' ';
  iRow = Math.max(0, iIndex - iScrollAt);

  // build previously-typed lines (if any)
  while (iRow < iIndex) {
    sContents += aText[iRow++] + '<br />';
  }

  // show previous lines + current partial line + caret
  destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";

  // advance position
  if (iTextPos++ == iArrLength) {
    // finished current line
    iTextPos = 0;
    iIndex++;

    if (iIndex != aText.length) {
      // move to next line after a short pause
      iArrLength = aText[iIndex].length;
      timerId = setTimeout(typewriter, 500); // note: function reference
    } else {
      // finished all lines
      // remove caret and reset typing state
      destination.innerHTML = sContents + aText[aText.length - 1];
      typing = false;
      if (startBtn) startBtn.disabled = false;
      timerId = null;
    }
  } else {
    // continue current line
    timerId = setTimeout(typewriter, iSpeed);
  }
}

// Starter that is called when user clicks the button
function startTyping() {
  if (typing) return;           // already running — ignore
  if (!destination) return;     // safety

  // initialize state
  typing = true;
  iIndex = 0;
  iTextPos = 0;
  sContents = '';
  iArrLength = aText[0].length;
  destination.innerHTML = '';   // clear display
  if (startBtn) startBtn.disabled = true;

  // begin typing
  typewriter();
}

// Hook up DOM elements once page is ready
document.addEventListener('DOMContentLoaded', function () {
  destination = document.getElementById('typedtext'); // where text appears
  startBtn = document.getElementById('startBtn');  // button that triggers typing

  // Attach click listener (only if the button exists)
  if (startBtn) {
    startBtn.addEventListener('click', startTyping);
  }
});
