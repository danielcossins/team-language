var Language = function(language){
  var germanArr = ["Hallo", "Frohe Weihnachten", "Auf Wiedersehen", "Frohes Neues Jahr"];
  
    
  language.translateToGerman = function(){
    var $ouput = $('#content-area');
    var wordsArr = language.getWords();
    var input = language.getUserInput();
    //console.log(language.getUserInput());
    for(var i=0; i<wordsArr.length; i++){
      if(input.toLowerCase() === wordsArr[i].toLowerCase()){
        $ouput.text(germanArr[i]);
        responsiveVoice.speak(germanArr[i]);
      }
    }
  };
  
  return language;
}(Language)