//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    userNamePrompt,
    favoriteSpeechPrompt;
    newestSpeech = speechesArray[0].year,
    oldestSpeech = speechesArray[0].year,
    i = 0;

//Step 2
     while(i < speechesArray.length){
       console.log("This speech is written by" + speechesArray[i].author + ".");
       i++;
     }

//Step 3
  document.getElementById('BtnDonate').addEventListener('click', function(){
    //Code in here executes when the user clicks the "Donate" button.
    var favoriteSpeechPrompt = window.prompt('Which speech author is your favorite?');

          for(i = 0; i < speechesArray.length; i++){
            if (favoriteSpeechPrompt === speechesArray[i].author){break;}
            {console.log(speechesArray[i].author + "was" + speechesArray[i].authorAge + "during this speech.");
              };
            };
          });

//Step 5
for(i = 0; i < speechesArray.length; i++){
if (speechesArray[i].year < oldestSpeech){
    oldestSpeech = speechesArray[i].year; //then//
    console.log("This is the oldest speech on the page.");}

else if (speechesArray[i].year = newestSpeech){
  newestSpeech = speechesArray[i].year; //then//
  console.log("This is the most recent speech on the page.");}
};
