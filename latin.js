var Language = function(language){
  var latinArr = ["Salve", "Christmas", "Vale", "Novus Annus"];
  
    
  language.translateToLatin = function(){
    var $ouput = $('#content-area');
    var wordsArr = language.getWords();
    var input = language.getUserInput();
    //console.log(language.getUserInput());
    for(var i=0; i<wordsArr.length; i++){
      if(input.toLowerCase() === wordsArr[i].toLowerCase()){
        $ouput.text(latinArr[i]);
      }
    }
  };
  
  return language;
}(Language)